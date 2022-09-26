import { AxisProps } from "./utils/axis.types";
interface YAxisProps extends AxisProps {
    /**
     * Ориентация оси
     */
    orientation?: 'left' | 'right';
}
export { YAxisProps };
