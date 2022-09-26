import { RadiusProp } from "../../types/seria.types";
type usePathBarProps = {
    radius?: RadiusProp;
    height: number;
    background?: {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    y?: number;
};
declare const usePathBar: (props: usePathBarProps) => number[];
export { usePathBarProps, usePathBar };
