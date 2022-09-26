import { RefObject } from 'react';
declare const PORTAL_CONTAINER_ATTRIBUTE = "alfa-portal-container";
declare const getDefaultPortalContainer: () => Element;
declare function setRef<T>(ref: RefObject<T> | ((instance: T | null) => void) | null | undefined, value: T | null): void;
export { PORTAL_CONTAINER_ATTRIBUTE, getDefaultPortalContainer, setRef };
