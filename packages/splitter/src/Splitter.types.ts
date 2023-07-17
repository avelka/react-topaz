const AXIS = {
  X: "x",
  Y: "y",
} as const;
const KEY = {
  Enter: "Enter",
  Home: "Home",
  End: "End",
  F6: "F6",
  Left: "ArrowLeft",
  Right: "ArrowRight",
  Up: "ArrowUp",
  Down: "ArrowDown",
} as const;
type Key = (typeof KEY)[keyof typeof KEY];

const CSS_PROP = {
  primary: "--tz-split-pane-primary",
  secondary: "--tz-split-pane-secondary",
  separator: "--tz-split-pane-separator",
};
interface PointerEvent {
  pointerId: number;
  clientX: number;
  clientY: number;
}
const STEP = 10;
const EVENT = {
  pointerdown: "pointerdown",
  pointerup: "pointerup",
  pointermove: "pointermove",
  keydown: "keydown",
} as const;
const DIRECTION = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

const ARIA = {
  expanded: "aria-expanded",
  orientation: "aria-orientation",
  controls: "aria-controls",
  valueMax: "aria-valuemax",
  valueMin: "aria-valuemin",
  valueNow: "aria-valuenow",
  role: "role",
} as const;
const ARIA_ROLE = {
  separator: "separator",
};
type Coords = { x: number; y: number };
type LayoutState = {
  dir: Direction;
  collapsed: boolean;
  value?: number;
};
export type { Key, PointerEvent, Direction, Coords, LayoutState };
export { ARIA_ROLE, ARIA, DIRECTION, STEP, EVENT, KEY, AXIS, CSS_PROP };
