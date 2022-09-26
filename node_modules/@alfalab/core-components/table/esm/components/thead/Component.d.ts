/// <reference types="react" />
import React from 'react';
import { HTMLAttributes } from "react";
type THeadProps = HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для tr
     */
    rowClassName?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const THead: React.FC<THeadProps>;
export { THeadProps, THead };
