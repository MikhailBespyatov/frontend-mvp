/// <reference types="react" />
import { THeadCellProps } from "../thead-cell/index";
type TSortableHeadCellProps = THeadCellProps & {
    isSortedDesc?: boolean;
    defaultIsSortedDesc?: boolean;
    onSort?: () => void;
};
declare const TSortableHeadCell: ({ children, className, defaultIsSortedDesc, isSortedDesc, textAlign, onSort, ...restProps }: TSortableHeadCellProps) => JSX.Element;
export { TSortableHeadCellProps, TSortableHeadCell };
