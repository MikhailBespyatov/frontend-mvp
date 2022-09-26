/// <reference types="react" />
import { DataDynamicBooleanProps } from "./utils/data.types";
interface PayloadProps {
    /**
     * Цвет графика
     */
    color: string;
    /**
     * Ключ графика
     */
    dataKey: string;
    /**
     * Форматирование значения графика
     */
    formatter: (value: number | string) => React.ReactText;
    /**
     * Имя графика
     */
    name: string;
    /**
     * Полезная нагрузка
     */
    payload: DataDynamicBooleanProps;
    /**
     * Значение графика
     */
    value: number;
}
export { PayloadProps };
