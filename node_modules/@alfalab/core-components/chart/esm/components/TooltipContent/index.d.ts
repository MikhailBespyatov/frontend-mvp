/// <reference types="react" />
import { PayloadProps } from "../../types/payload.types";
import { SeriaProps } from "../../types/seria.types";
import { TooltipProps } from "../../types/tooltip.types";
interface TooltipContentProps extends TooltipProps {
    payload: PayloadProps[];
    series: SeriaProps[];
}
declare const TooltipContent: ({ payload, separator, label, tooltipArrowSide, arrow, series, labelFormatter, labelStyle, }: TooltipContentProps) => JSX.Element | null;
export { TooltipContentProps, TooltipContent };
