import { useRef, useEffect } from "react";
import { ARIA, EVENT } from "./Splitter.types";
import { getAxis, getBase } from "./splitter.utils";
const useSplitPointer = ({ separatorRef, primaryRef, secondaryRef, containerRef, setContainerSize, setLayout, direction, invert, disabled, }) => {
    const positionRef = useRef({ x: 0, y: 0 });
    const axis = getAxis(direction);
    useEffect(() => {
        const separator = separatorRef.current;
        const primary = primaryRef.current;
        const secondary = secondaryRef.current;
        const container = containerRef.current;
        if (!separator || !primary || !secondary || !container) {
            return;
        }
        let baseSize = getBase(primary);
        setContainerSize(baseSize[axis]);
        const getOffset = (e) => {
            const px = positionRef.current.x || 0;
            const py = positionRef.current.y || 0;
            const cx = e.clientX;
            const cy = e.clientY;
            if (invert) {
                return {
                    x: px - cx,
                    y: py - cy,
                };
            }
            return {
                x: cx - px,
                y: cy - py,
            };
        };
        const resize = (e) => {
            const offset = getOffset(e);
            setContainerSize(baseSize[axis] + offset[axis]);
        };
        const stopResize = (e) => {
            separator.removeEventListener(EVENT.pointermove, resize);
            separator.releasePointerCapture(e.pointerId);
            container.style.removeProperty("transition");
        };
        const startResize = (e) => {
            if (disabled)
                return;
            separator.setPointerCapture(e.pointerId);
            const expanded = separator.hasAttribute(ARIA.expanded);
            if (!expanded) {
                separator.toggleAttribute(ARIA.expanded);
                setLayout({ dir: direction, collapsed: false });
                e.preventDefault();
                return;
            }
            baseSize = getBase(primary);
            positionRef.current = { x: e.clientX, y: e.clientY };
            separator.addEventListener(EVENT.pointermove, resize);
            container.style.setProperty("transition", "none");
        };
        separator.addEventListener(EVENT.pointerdown, startResize);
        separator.addEventListener(EVENT.pointerup, stopResize);
        return () => {
            separator.removeEventListener(EVENT.pointerdown, startResize);
            separator.removeEventListener(EVENT.pointerup, stopResize);
        };
    }, [
        axis,
        setContainerSize,
        separatorRef,
        primaryRef,
        secondaryRef,
        containerRef,
        positionRef,
        setLayout,
        direction,
        invert,
    ]);
};
export default useSplitPointer;
