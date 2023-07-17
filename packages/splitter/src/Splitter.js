"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import styles from "./splitter.module.css";
import { DIRECTION } from "./Splitter.types";
import useSplitterKeybind from "./useSplitterKeybind";
import useSplitterPointer from "./useSplitterPointer";
import useSplitterSetup from "./useSplitterSetup";
const Separator = forwardRef((props, ref) => {
    return _jsx("button", Object.assign({ ref: ref }, props));
});
const Pane = forwardRef(({ children }, ref) => {
    return (_jsx("div", { ref: ref, className: styles.pane, children: children }));
});
const Splitter = ({ children: [primaryPane, secondaryPane], min = 0, max = 0, value = 0, direction = DIRECTION.horizontal, collapsed = false, invert = false, disabled = false, }) => {
    const split = useSplitterSetup({
        value,
        min,
        max,
        direction,
        collapsed,
        invert,
    });
    useSplitterKeybind(Object.assign(Object.assign({}, split), { direction,
        min, max: split.getMaxSize(), disabled }));
    useSplitterPointer(Object.assign(Object.assign({}, split), { direction,
        invert,
        disabled }));
    const refs = invert
        ? { start: split.secondaryRef, end: split.primaryRef }
        : { start: split.secondaryRef, end: split.primaryRef };
    return (_jsxs("div", { ref: split.containerRef, className: styles.root, children: [_jsx(Pane, { tabIndex: -1, ref: refs.start, children: primaryPane }), _jsx(Separator, { className: styles.separator, ref: split.separatorRef, "aria-disabled": disabled || undefined }), _jsx(Pane, { tabIndex: -1, ref: refs.end, children: secondaryPane })] }));
};
export default Splitter;
