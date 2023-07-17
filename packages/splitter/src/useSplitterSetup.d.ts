/// <reference types="react" />
import { Direction, LayoutState } from "./Splitter.types";
declare const useSplitterSetup: ({ value, min, max, direction, collapsed, invert, }: {
    value: number;
    min: number;
    max: number;
    direction: Direction;
    collapsed: boolean;
    invert: boolean;
}) => {
    setLayout: (state: LayoutState) => void;
    separatorRef: import("react").MutableRefObject<HTMLButtonElement | null>;
    containerRef: import("react").MutableRefObject<HTMLDivElement | null>;
    primaryRef: import("react").MutableRefObject<HTMLDivElement | null>;
    secondaryRef: import("react").MutableRefObject<HTMLDivElement | null>;
    setContainerSize: (size: number) => void;
    getCurrentSize: () => number;
    getMaxSize: () => number;
};
export default useSplitterSetup;
//# sourceMappingURL=useSplitterSetup.d.ts.map