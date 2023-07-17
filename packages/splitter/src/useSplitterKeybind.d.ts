import { Direction, LayoutState } from "./Splitter.types";
declare const useSplitKeybind: ({ separatorRef, containerRef, setContainerSize, getCurrentSize, setLayout, min, max, direction, disabled, }: {
    separatorRef: React.MutableRefObject<HTMLButtonElement | null>;
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    setContainerSize: (size: number) => void;
    setLayout: (state: LayoutState) => void;
    getCurrentSize: () => number;
    min: number;
    max: number;
    direction: Direction;
    disabled: boolean;
}) => void;
export default useSplitKeybind;
//# sourceMappingURL=useSplitterKeybind.d.ts.map