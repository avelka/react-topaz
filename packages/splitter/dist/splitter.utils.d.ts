import { LayoutState, Coords, Direction } from "./Splitter.types";
declare const r: (x: number) => number;
declare const getBase: (node: HTMLElement) => Coords;
declare const getLayoutConfig: ({ dir, collapsed, invert, }: LayoutState & {
    invert: boolean;
}) => string[];
declare const setNewSizeFn: (container: HTMLElement, min: number, max: number, total: number) => (newSize: number) => void;
declare const getAxis: (dir: Direction) => "x" | "y";
export { getBase, getLayoutConfig, setNewSizeFn, r, getAxis };
//# sourceMappingURL=splitter.utils.d.ts.map