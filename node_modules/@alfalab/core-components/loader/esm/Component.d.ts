/// <reference types="react" />
import React from 'react';
type LoaderProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const Loader: React.FC<LoaderProps>;
export { LoaderProps, Loader };
