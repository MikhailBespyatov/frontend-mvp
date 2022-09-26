/// <reference types="react" />
import { ReactNode } from 'react';
import { TRowProps } from "../trow/index";
type TExpandableRowProps = TRowProps & {
    defaultExpanded?: boolean;
    expanded?: boolean;
    onToggle?: (expanded: boolean) => void;
    renderContent: (expanded: boolean) => ReactNode;
};
declare const TExpandableRow: ({ className, selected, expanded, defaultExpanded, onToggle, renderContent, ...restProps }: TExpandableRowProps) => JSX.Element;
export { TExpandableRowProps, TExpandableRow };
