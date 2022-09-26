interface DataProps {
    /**
     * Метка
     */
    label: string | number;
    /**
     * Значение
     */
    value: number;
}
interface DataDynamicProps {
    [key: string]: number | string;
}
interface DataDynamicBooleanProps {
    [key: string]: boolean;
}
export { DataProps, DataDynamicProps, DataDynamicBooleanProps };
