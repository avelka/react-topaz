import { HTMLAttributes, ReactNode } from "react";
import { Direction } from "./Splitter.types";
type SplitterProps = {
    children: [ReactNode, ReactNode];
    min?: number;
    max?: number;
    value?: number;
    direction?: Direction;
    collapsed?: boolean;
    invert?: boolean;
    disabled?: boolean;
};
declare const Splitter: ({ children: [primaryPane, secondaryPane], min, max, value, direction, collapsed, invert, disabled, }: HTMLAttributes<HTMLDivElement> & SplitterProps) => import("react/jsx-runtime").JSX.Element;
export default Splitter;
//# sourceMappingURL=Splitter.d.ts.map