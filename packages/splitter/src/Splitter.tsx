"use client";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./splitter.module.css";
import { Direction, DIRECTION } from "./Splitter.types";
import useSplitterKeybind from "./useSplitterKeybind";
import useSplitterPointer from "./useSplitterPointer";
import useSplitterSetup from "./useSplitterSetup";

const Separator = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <button ref={ref} {...props}></button>;
});
const Pane = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.pane}>
      {children}
    </div>
  );
});

type SplitterProps = {
  children: [ReactNode, ReactNode];
  min?: number;
  max?: number;
  value?: number;
  direction?: Direction;
  collapsed?: boolean;
  invert?: boolean;
  disabled?: boolean;
};

const Splitter = ({
  children: [primaryPane, secondaryPane],
  min = 0,
  max = 0,
  value = 0,
  direction = DIRECTION.horizontal,
  collapsed = false,
  invert = false,
  disabled = false,
}: HTMLAttributes<HTMLDivElement> & SplitterProps) => {
  const split = useSplitterSetup({
    value,
    min,
    max,
    direction,
    collapsed,
    invert,
  });

  useSplitterKeybind({
    ...split,
    direction,
    min,
    max: split.getMaxSize(),
    disabled,
  });

  useSplitterPointer({
    ...split,
    direction,
    invert,
    disabled,
  });

  const refs = invert
    ? { start: split.secondaryRef, end: split.primaryRef }
    : { start: split.secondaryRef, end: split.primaryRef };

  return (
    <div ref={split.containerRef} className={styles.root}>
      <Pane tabIndex={-1} ref={refs.start}>
        {primaryPane}
      </Pane>
      <Separator
        className={styles.separator}
        ref={split.separatorRef}
        aria-disabled={disabled || undefined}
      />
      <Pane tabIndex={-1} ref={refs.end}>
        {secondaryPane}
      </Pane>
    </div>
  );
};

export default Splitter;
