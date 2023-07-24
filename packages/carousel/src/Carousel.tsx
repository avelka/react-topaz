import style from "./Carousel.module.css";
import {
  HTMLAttributes,
  KeyboardEventHandler,
  MutableRefObject,
  ReactNode,
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

const KEY = {
  Left: "ArrowLeft",
  Right: "ArrowRight",
  Home: "Home",
  End: "End",
  Delete: "Delete",
} as const;
type Key = (typeof KEY)[keyof typeof KEY];
const getRandomID = () => Math.random().toString(36).slice(5);
const CUSTOM_EVENT = {
  next: "carousel-next",
  prev: "carousel-prev",
  delete: "carousel-delete",
  start: "carousel-start",
  stop: "carousel-stop",
  last: "carousel-last",
  first: "carousel-first",
} as const;
const SCROLL_BEHAVIOR = {
  smooth: "smooth",
  instant: "instant",
} as const;

// timedLoop is a setInterval that calls the callback every `ms` milliseconds

const ROLE = {
  region: "region",
  group: "group",
  tab: "tab",
  tablist: "tablist",
} as const;
const ARIA = {
  orientation: {
    horizontal: "horizontal",
    vertical: "vertical",
  },
  roleDescription: {
    slide: "carousel",
    carousel: "carousel",
  },
  live: {
    off: "off",
    assertive: "assertive",
    polite: "polite",
  },
  atomic: {
    true: "true",
    false: "false",
  },
} as const;
const timedLoop = (fn: () => void, ms: number) => {
  const id = window.setInterval(fn, ms);
  return () => window.clearInterval(id);
};
type CarouselProps = {
  children: React.ReactNode;
  role: "region" | "group";
  onDelete?: (i: number) => Promise<void>;
  onChange?: (i: number) => void;
  selected?: number;
};

const Carousel = ({
  children,
  role,
  onDelete,
  onChange,
  selected,
}: HTMLAttributes<HTMLDivElement> & CarouselProps) => {
  const container = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof timedLoop>>();
  const widgetId = `carousel_${getRandomID()}`;
  const slides = Array.isArray(children) ? children : [children];
  const slideRefs = useRef<MutableRefObject<HTMLDivElement>[]>([]);
  const tabRefs = useRef<MutableRefObject<HTMLButtonElement>[]>([]);
  const [rotating, setRotating] = useState(false);
  const toggleRotation = () => setRotating((r) => !r);

  const [currentSlide, setCurrentSlide] = useState(0);
  slides.forEach((_, i) => {
    slideRefs.current[i] = slideRefs.current[i] ?? createRef();
    tabRefs.current[i] = tabRefs.current[i] ?? createRef();
  });

  const goToSlide = (i: number, smooth = true) => {
    const isFar = Math.abs(i - currentSlide) > 1;
    const target = slideRefs.current[i].current;
    const reduceAnimation =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    const noAnimation = isFar || !smooth || reduceAnimation;
    if (target) {
      target.scrollIntoView({
        behavior: (noAnimation
          ? SCROLL_BEHAVIOR.instant
          : SCROLL_BEHAVIOR.smooth) as ScrollBehavior,
        block: "nearest",
      });
      setCurrentSlide(i);
    }
  };

  const getNext = (i: number) => (i + 1) % slides.length;
  const getPrev = (i: number) => (i - 1 + slides.length) % slides.length;
  const next = () => {
    goToSlide(getNext(currentSlide));
  };
  const prev = () => {
    goToSlide(getPrev(currentSlide));
  };
  const handleDelete = (i: number) => {
    if (!onDelete) return;
    onDelete(i).then(() => {
      goToSlide(i + 1);
    });
  };
  const tabFocus = (i: number) => {
    tabRefs.current[i].current?.focus();
  };
  const handleTabKeyboard: KeyboardEventHandler = (e) => {
    const map = {
      [KEY.Left]: () => {
        tabFocus(getPrev(currentSlide));
        prev();
      },

      [KEY.Right]: () => {
        tabFocus(getNext(currentSlide));
        next();
      },
      [KEY.Home]: () => {
        setCurrentSlide(0);
        tabFocus(0);
      },
      [KEY.End]: () => {
        const last = slides.length - 1;
        setCurrentSlide(last);
        tabFocus(last);
      },
      [KEY.Delete]: () => handleDelete(currentSlide),
    };
    map[e.key as Key]?.();
  };

  const handleSlideKeyboard: KeyboardEventHandler = (e) => {
    const map = {
      [KEY.Left]: () => {
        prev();
      },

      [KEY.Right]: () => {
        next();
      },
    };
    map[e.key as "ArrowLeft" | "ArrowRight"]?.();
  };
  const getSlideID = (i: number) => `${widgetId}_slide-${i}`;

  useEffect(() => {
    if (selected !== undefined && Number.isInteger(selected)) {
      goToSlide(selected);
    }
  }, [selected]);
  useEffect(() => {
    onChange?.(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    if (rotating) {
      timer.current = timedLoop(() => {
        const nextEvent = new CustomEvent(CUSTOM_EVENT.next);
        container.current?.dispatchEvent(nextEvent);
      }, 1000);
    }
    if (!rotating && timer.current) {
      timer.current();
    }
    return () => timer.current?.();
  }, [rotating]);

  useEffect(() => {
    const handleNext = () => {
      next();
    };
    container.current?.addEventListener(CUSTOM_EVENT.next, handleNext);
    return () => {
      container.current?.removeEventListener(CUSTOM_EVENT.next, handleNext);
    };
  }, [currentSlide]);
  const isCurrent = (i: number) => i === currentSlide;
  return (
    <div
      className={style.root}
      role={role}
      aria-roledescription={ARIA.roleDescription.carousel}
      ref={container}
    >
      <menu className={style.menu}>
        <Control
          onClick={() => toggleRotation()}
          aria-label={rotating ? "Stop slide rotation" : "Start slide rotation"}
        >
          {rotating ? "play" : "stop"}
        </Control>
        <Control onClick={prev}>prev</Control>
        <Control onClick={next}>next</Control>
        <div
          className={style.tablist}
          role={ROLE.tablist}
          aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
          onKeyDown={handleTabKeyboard}
          aria-orientation={ARIA.orientation.horizontal}
          data-posinset={currentSlide}
          data-set={slides.length}
        >
          {slides.map((_, i) => (
            <Control
              key={i}
              ref={tabRefs.current[i]}
              role={ROLE.tab}
              aria-controls={getSlideID(i)}
              tabIndex={isCurrent(i) ? 0 : -1}
              aria-selected={isCurrent(i)}
              aria-disabled={isCurrent(i)}
              onClick={() => goToSlide(i)}
            >
              {i + 1}
            </Control>
          ))}
        </div>
      </menu>
      <div
        className={style.container}
        aria-atomic={ARIA.atomic.false}
        aria-live={rotating ? ARIA.live.off : ARIA.live.polite}
        onKeyDown={handleSlideKeyboard}
        tabIndex={0}
      >
        {slides.map((slide, i) => (
          <Slide
            key={i}
            id={getSlideID(i)}
            data-posinset={i}
            data-selected={isCurrent(i)}
            ref={slideRefs.current[i]}
          >
            {slide}
          </Slide>
        ))}
      </div>
    </div>
  );
};

const Control = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & { children: ReactNode }
>(({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref} type="button" className={style.control}>
      {children}
    </button>
  );
});

const Slide = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <div
        {...props}
        className={style.slide}
        role={ROLE.group}
        ref={ref}
        aria-roledescription={ARIA.roleDescription.slide}
      >
        {children}
      </div>
    );
  }
);

export default Carousel;
