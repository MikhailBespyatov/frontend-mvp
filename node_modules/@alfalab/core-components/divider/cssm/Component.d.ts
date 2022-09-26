/// <reference types="react" />
import React from 'react';
type DividerProps = {
    /**
     * Кастомный класс
     */
    className?: string;
    /**
     * Id компонента для тестов
     */
    dataTestId?: string;
};
declare const Divider: React.FC<DividerProps>;
export { DividerProps, Divider };
