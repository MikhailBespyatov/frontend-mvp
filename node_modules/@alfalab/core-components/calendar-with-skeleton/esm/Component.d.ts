/// <reference types="react" />
import React from 'react';
import { CalendarProps } from "../../calendar";
type CalendarWithSkeletonProps = CalendarProps & {
    /**
     * Флаг включения анимации скелета
     */
    animate?: boolean;
    /**
     * Флаг управлением видимостью календаря
     */
    calendarVisible?: boolean;
};
declare const CalendarWithSkeleton: React.ForwardRefExoticComponent<CalendarProps & {
    /**
     * Флаг включения анимации скелета
     */
    animate?: boolean | undefined;
    /**
     * Флаг управлением видимостью календаря
     */
    calendarVisible?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { CalendarWithSkeletonProps, CalendarWithSkeleton };
