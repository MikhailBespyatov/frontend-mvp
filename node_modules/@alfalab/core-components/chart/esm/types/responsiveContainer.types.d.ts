/// <reference types="react" />
import React from 'react';
interface ResponsiveContainerProps {
    /**
     * Debounce функция при ресайзе
     */
    debounce?: number;
    children?: React.ReactNode;
}
export { ResponsiveContainerProps };
