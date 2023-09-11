import {
  LayoutState,
  DIRECTION,
  Coords,
  Direction,
  AXIS,
  CSS_PROP,
} from "./Splitter.types";

const r = Math.round;
const clamp = (n: number, min: number, max: number) => {
  return Math.min(Math.max(n, min), max);
};
const getBase = (node: HTMLElement): Coords => ({
  x: node.getBoundingClientRect().width,
  y: node.getBoundingClientRect().height,
});

const getLayoutConfig = ({
  dir,
  collapsed,
  invert,
}: LayoutState & { invert: boolean }) => {
  const layout =
    dir === DIRECTION.horizontal
      ? "grid-template-columns"
      : "grid-template-rows";
  const prime = `var(${CSS_PROP.primary}, auto)`;
  const separator = `var(${CSS_PROP.separator}, min-content)`;
  const sec = `var(${CSS_PROP.secondary}, auto)`;
  const expandedConfig = invert
    ? [sec, separator, prime]
    : [prime, separator, sec];

  const collapsedConfig = invert
    ? ["auto", separator, "0"]
    : ["0", separator, "auto"];

  const currentConfig = collapsed ? collapsedConfig : expandedConfig;
  return [layout, currentConfig.join(" ")];
};
const setNewSizeFn =
  (
    container: HTMLElement,
    min: number,
    max: number,
    total: number,
    callback?: (s: number) => void
  ) =>
  (newSize: number) => {
    const s = clamp(r(newSize), min, max || total);
    callback?.(s);
    container.style.setProperty(CSS_PROP.primary, `${s}px`);
    container.style.setProperty(CSS_PROP.secondary, `${r(total - s)}px`);
  };
const getAxis = (dir: Direction) =>
  dir === DIRECTION.horizontal ? AXIS.X : AXIS.Y;

export { getBase, getLayoutConfig, setNewSizeFn, r, getAxis };
