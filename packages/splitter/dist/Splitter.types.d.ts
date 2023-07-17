declare const AXIS: {
    readonly X: "x";
    readonly Y: "y";
};
declare const KEY: {
    readonly Enter: "Enter";
    readonly Home: "Home";
    readonly End: "End";
    readonly F6: "F6";
    readonly Left: "ArrowLeft";
    readonly Right: "ArrowRight";
    readonly Up: "ArrowUp";
    readonly Down: "ArrowDown";
};
type Key = (typeof KEY)[keyof typeof KEY];
declare const CSS_PROP: {
    primary: string;
    secondary: string;
    separator: string;
};
interface PointerEvent {
    pointerId: number;
    clientX: number;
    clientY: number;
}
declare const STEP = 10;
declare const EVENT: {
    readonly pointerdown: "pointerdown";
    readonly pointerup: "pointerup";
    readonly pointermove: "pointermove";
    readonly keydown: "keydown";
};
declare const DIRECTION: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];
declare const ARIA: {
    readonly expanded: "aria-expanded";
    readonly orientation: "aria-orientation";
    readonly controls: "aria-controls";
    readonly valueMax: "aria-valuemax";
    readonly valueMin: "aria-valuemin";
    readonly valueNow: "aria-valuenow";
    readonly role: "role";
};
declare const ARIA_ROLE: {
    separator: string;
};
type Coords = {
    x: number;
    y: number;
};
type LayoutState = {
    dir: Direction;
    collapsed: boolean;
    value?: number;
};
export type { Key, PointerEvent, Direction, Coords, LayoutState };
export { ARIA_ROLE, ARIA, DIRECTION, STEP, EVENT, KEY, AXIS, CSS_PROP };
//# sourceMappingURL=Splitter.types.d.ts.map