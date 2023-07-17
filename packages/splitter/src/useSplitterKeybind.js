import { useCallback, useEffect } from "react";
import { ARIA, DIRECTION, EVENT, KEY, STEP, } from "./Splitter.types";
const useSplitKeybind = ({ separatorRef, containerRef, setContainerSize, getCurrentSize, setLayout, min, max, direction, disabled, }) => {
    const togglePrimaryCollapse = useCallback(() => {
        const separator = separatorRef.current;
        const container = containerRef.current;
        if (!separator || !container || disabled)
            return null;
        separator.toggleAttribute(ARIA.expanded);
        container.style.setProperty("transition", "none");
        setLayout({
            dir: direction,
            collapsed: !separator.hasAttribute(ARIA.expanded),
        });
        container.offsetHeight; // trigger reflow
        container.style.removeProperty("transition");
    }, [containerRef, direction, separatorRef, setLayout]);
    const minPrimary = useCallback(() => {
        setContainerSize(min);
    }, [min, setContainerSize]);
    const maxPrimary = useCallback(() => {
        setContainerSize(max);
    }, [max, setContainerSize]);
    const cyclePane = useCallback(() => {
        console.log("cyclePane is not implemented");
    }, []);
    const decrement = useCallback((e) => {
        const multiplier = e.shiftKey ? 10 : 1;
        setContainerSize(getCurrentSize() - STEP * multiplier);
    }, [getCurrentSize, setContainerSize]);
    const increment = useCallback((e) => {
        const multiplier = e.shiftKey ? 10 : 1;
        setContainerSize(getCurrentSize() + STEP * multiplier);
    }, [getCurrentSize, setContainerSize]);
    const horizontalDecrement = useCallback((e) => {
        if (direction !== DIRECTION.horizontal)
            return;
        decrement(e);
    }, [decrement, direction]);
    const horizontalIncrement = useCallback((e) => {
        if (direction !== DIRECTION.horizontal)
            return;
        increment(e);
    }, [direction, increment]);
    const verticalIncrement = useCallback((e) => {
        if (direction !== DIRECTION.vertical)
            return;
        increment(e);
    }, [direction, increment]);
    const verticalDecrement = useCallback((e) => {
        if (direction !== DIRECTION.vertical)
            return;
        decrement(e);
    }, [decrement, direction]);
    const handleKeys = useCallback((e) => {
        var _a;
        const keybind = {
            [KEY.Enter]: togglePrimaryCollapse,
            [KEY.Home]: minPrimary,
            [KEY.End]: maxPrimary,
            [KEY.F6]: cyclePane,
            [KEY.Left]: horizontalDecrement,
            [KEY.Right]: horizontalIncrement,
            [KEY.Up]: verticalDecrement,
            [KEY.Down]: verticalIncrement,
        };
        (_a = keybind[e.key]) === null || _a === void 0 ? void 0 : _a.call(keybind, e);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    useEffect(() => {
        const separator = separatorRef.current;
        if (!separator || disabled)
            return;
        separator.addEventListener(EVENT.keydown, handleKeys);
        return () => {
            separator.removeEventListener(EVENT.keydown, handleKeys);
        };
    }, [separatorRef, handleKeys, disabled]);
};
export default useSplitKeybind;
