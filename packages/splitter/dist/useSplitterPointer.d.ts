import { Direction, LayoutState } from "./Splitter.types";
declare const useSplitPointer: ({ separatorRef, primaryRef, secondaryRef, containerRef, setContainerSize, setLayout, direction, invert, disabled, }: {
    separatorRef: React.MutableRefObject<HTMLButtonElement | null>;
    primaryRef: React.MutableRefObject<HTMLDivElement | null>;
    secondaryRef: React.MutableRefObject<HTMLDivElement | null>;
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    setContainerSize: (size: number) => void;
    setLayout: (state: LayoutState) => void;
    direction: Direction;
    invert: boolean;
    disabled: boolean;
}) => void;
export default useSplitPointer;
//# sourceMappingURL=useSplitterPointer.d.ts.map