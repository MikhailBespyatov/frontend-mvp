/// <reference types="react" />
import React from 'react';
import { HTMLAttributes } from "react";
import { NotificationElement } from "./components/index";
type NotificationManagerProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Массив нотификаций.
     * В нотификации обязательно передавайте id.
     */
    notifications: NotificationElement[];
    /**
     * Дополнительный класс (native prop)
     */
    className?: string;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Удаление нотификации
     */
    onRemoveNotification: (id: string) => void;
};
declare const NotificationManager: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Массив нотификаций.
     * В нотификации обязательно передавайте id.
     */
    notifications: NotificationElement[];
    /**
     * Дополнительный класс (native prop)
     */
    className?: string | undefined;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string | undefined;
    /**
     * z-index компонента
     */
    zIndex?: number | undefined;
    /**
     * Удаление нотификации
     */
    onRemoveNotification: (id: string) => void;
} & React.RefAttributes<HTMLDivElement>>;
export { NotificationManagerProps, NotificationManager };
