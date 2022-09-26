/// <reference types="react" />
import React from 'react';
import { HTMLAttributes } from "react";
type TBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const TBody: React.FC<TBodyProps>;
export { TBodyProps, TBody };
