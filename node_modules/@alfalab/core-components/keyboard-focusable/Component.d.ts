/// <reference types="react" />
import { RefObject } from 'react';
type KeyboardFocusableProps = {
    /**
     * Рендер-проп, в который передается состояние фокуса и реф.
     *
     * Реф нужно установить на интерактивный элемент или на одного из его родителей.
     */
    children: (ref: RefObject<any>, focused: boolean) => JSX.Element;
};
declare const KeyboardFocusable: ({ children }: KeyboardFocusableProps) => JSX.Element;
export { KeyboardFocusable };
