/// <reference types="react" />
import React from 'react';
import { ResponsivePropertyType } from "../typings";
type RowProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Горизонтальный отступ между колонками.
     * Возможные значения: `[0, 8, 16, 24]`
     * или `{ mobile: [0..24], tablet: [0..24], desktop: [0..24] }`
     * или `{ mobile: { s: [0..24], m: [0..24], l: [0..24] },
     * tablet: { s: [0..24], m: [0..24] },
     * desktop: { s: [0..24], m: [0..24], l: [0..24], xl: [0..24] } }`.
     */
    gutter?: ResponsivePropertyType;
    /**
     * Управление выравниванием колонок по вертикальной оси
     */
    align?: 'top' | 'middle' | 'bottom';
    /**
     * Управление выравниванием колонок по горизонтальной оси
     */
    justify?: 'left' | 'center' | 'right' | 'around' | 'between';
    /**
     * Html тег компонента.
     * Из-за <a href="https://github.com/philipwalton/flexbugs#flexbug-9" target="_blank">ограничений и багов</a>,
     * существующих во флексбоксах, невозможно использовать
     * некоторые элементы HTML как flex-контейнеры.
     */
    tag?: keyof JSX.IntrinsicElements;
    /**
     * Контент
     */
    children?: React.ReactNode;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const Row: React.FC<RowProps>;
export { RowProps, Row };
