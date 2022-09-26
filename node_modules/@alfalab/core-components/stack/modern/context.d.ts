/// <reference types="react" />
/**
 * Набор констант для z-index соответствующих классов компонентов.
 * Значения выбраны по приоритету.
 */
declare const stackingOrder: {
    /**
     * Для компонентов с возможностью фокуса: кнопки, поля ввода
     */
    FOCUSED: number;
    /**
     * Значение по-умолчанию
     */
    DEFAULT: number;
    /**
     * Компоненты, которые управляют своей позицией, например, поповер, тултип
     */
    POPOVER: number;
    /**
     * Для модальных окон с оверлеем
     */
    MODAL: number;
    /**
     * Для тостов и нотификаций
     */
    TOAST: number;
};
declare const StackingContext: import("react").Context<number>;
export { stackingOrder, StackingContext };
