import { useRef, useCallback, useEffect, useLayoutEffect } from "react";
import {
  Direction,
  ARIA,
  ARIA_ROLE,
  LayoutState,
  CSS_PROP,
} from "./Splitter.types";
import {
  r,
  getBase,
  getLayoutConfig,
  setNewSizeFn,
  getAxis,
} from "./splitter.utils";
const getRandomID = () =>
  window.crypto?.randomUUID?.() || Math.random().toString(36);
const useSplitterSetup = ({
  value,
  min,
  max,
  direction,
  collapsed,
  invert,
  onResizeCallback,
}: {
  value: number;
  min: number;
  max: number;
  direction: Direction;
  collapsed: boolean;
  invert: boolean;
  onResizeCallback?: (size: number) => void;
}) => {
  const primaryRef = useRef<HTMLDivElement | null>(null);
  const separatorRef = useRef<HTMLButtonElement | null>(null);
  const secondaryRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const resizeObserver = new ResizeObserver(() => {
      container.style.setProperty(CSS_PROP.secondary, `auto`);
    });
    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const axis = getAxis(direction);
  const getMaxSize = useCallback(() => {
    const primary = primaryRef.current;
    const secondary = secondaryRef.current;
    if (!primary || !secondary) return 0;
    return r(getBase(primary)[axis] + getBase(secondary)[axis]);
  }, [axis]);

  const setAlly = useCallback((isSetup?: boolean) => {
    const separator = separatorRef.current;
    const primary = primaryRef.current;

    if (!separator || !primary) return;
    separator.setAttribute(ARIA.valueMax, getMaxSize().toString());
    separator.setAttribute(ARIA.valueNow, getCurrentSize().toString());
    if (!isSetup) return;
    const primaryId = `tpz-sp-primary:${getRandomID()}`;
    separator.setAttribute(ARIA.valueMin, min.toString());
    separator.setAttribute(ARIA.role, ARIA_ROLE.separator);
    separator.setAttribute(ARIA.orientation, direction);
    separator.setAttribute(ARIA.controls, primaryId);
    primary.setAttribute("id", primaryId);

    separator.toggleAttribute(ARIA.expanded, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLayout = useCallback(
    (state: LayoutState) => {
      const container = containerRef.current;
      if (!container) return;
      const [property, config] = getLayoutConfig({ ...state, invert });
      if (state.value) {
        container.style.setProperty(CSS_PROP.primary, `${state.value}px`);
      }
      container.style.setProperty(property, config);
    },
    [invert]
  );

  const setContainerSize = useCallback(
    (size: number) => {
      const container = containerRef.current;
      const separator = separatorRef.current;

      if (!container || !separator) return;
      separator.setAttribute(ARIA.valueNow, r(size).toString());
      return setNewSizeFn(
        container,
        min,
        max,
        getMaxSize(),
        onResizeCallback
      )(size);
    },
    [getMaxSize, min]
  );

  const getCurrentSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return 0;
    const size = container.style.getPropertyValue(CSS_PROP.primary);
    return parseInt(size, 10);
  }, []);

  useEffect(() => {
    setAlly(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (value) {
      setContainerSize(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useLayoutEffect(() => {
    setLayout({ dir: direction, collapsed, value });
  }, [containerRef, direction, collapsed, setLayout, value]);

  return {
    setLayout,
    separatorRef,
    containerRef,
    primaryRef,
    secondaryRef,
    setContainerSize,
    getCurrentSize,
    getMaxSize,
  };
};

export default useSplitterSetup;
