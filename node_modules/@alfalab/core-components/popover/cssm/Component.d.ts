/// <reference types="react-transition-group" />
/// <reference types="react" />
import React from 'react';
import { CSSProperties, MutableRefObject, ReactNode } from "react";
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { BasePlacement, VariationPlacement } from '@popperjs/core';
type RefElement = HTMLElement | null;
type Position = BasePlacement | VariationPlacement;
type PopoverProps = {
    /**
     * Управление состоянием поповера (открыт/закрыт)
     */
    open: boolean;
    /**
     * Элемент, относительного которого появляется поповер
     */
    anchorElement: RefElement;
    /**
     * Использовать ширину родительского элемента
     */
    useAnchorWidth?: boolean;
    /**
     * Позиционирование поповера
     */
    position?: Position;
    /**
     * Запрещает поповеру менять свою позицию.
     * Например, если места снизу недостаточно,то он все равно будет показан снизу
     */
    preventFlip?: boolean;
    /**
     * Запрещает поповеру менять свою позицию, если он не влезает в видимую область.
     */
    preventOverflow?: boolean;
    /**
     *  Позволяет поповеру подствраивать свою высоту под границы экрана, если из-за величины контента он выходит за рамки видимой области экрана
     */
    availableHeight?: boolean;
    /**
     * Если `true`, будет отрисована стрелочка
     */
    withArrow?: boolean;
    /**
     * Смещение поповера.
     * Если позиционирование top, bottom, то [x, y].
     * Если позиционирование left, right то [y, x].
     */
    offset?: [number, number];
    /**
     * Дополнительный класс для поповера
     */
    popperClassName?: string;
    /**
     * Дополнительный класс для стрелочки
     */
    arrowClassName?: string;
    /**
     * Функция, возвращающая контейнер, в который будет рендериться поповер
     */
    getPortalContainer?: () => HTMLElement;
    /**
     * CSSTransitionProps, прокидываются в компонент CSSTransitionProps.
     */
    transition?: CSSTransitionProps;
    /**
     * Выставляет кастомное свойство transition-duration
     */
    transitionDuration?: CSSProperties['transitionDuration'];
    /**
     * Рендерит компонент, обернутый в Transition
     */
    withTransition?: boolean;
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Хранит функцию, с помощью которой можно обновить положение компонента
     */
    update?: MutableRefObject<() => void>;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * z-index компонента
     */
    zIndex?: number;
    /**
     * Если поповер не помещается в переданной позиции (position), он попробует открыться в другой позиции,
     * по очереди для каждой позиции из этого списка.
     * Если не передавать, то поповер открывается в противоположном направлении от переданного position.
     */
    fallbackPlacements?: Position[];
    /**
     * Контент
     */
    children?: ReactNode;
};
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export { Position, PopoverProps, Popover };
