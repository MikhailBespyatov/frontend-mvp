/// <reference types="react" />
import React from 'react';
type ListHeaderProps = {
    /**
     * Заголовок
     */
    title: string;
    /**
     * Дополнительное описание
     */
    description?: string;
    /**
     * Наличие фоновой подложки
     */
    filled?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};
declare const ListHeader: React.FC<ListHeaderProps>;
export { ListHeaderProps, ListHeader };
