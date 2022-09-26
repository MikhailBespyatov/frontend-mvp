/**
 * Возвращает MediaQueryList для заданного media-выражения.
 *
 * @param queryProp media выражение или кастомный запрос из `mq.json`, например `--mobile`.
 */
declare function getMatchMedia(queryProp: string): MediaQueryList;
/**
 * Удаляет MediaQueryList.
 *
 * @param queryProp media выражение или кастомный запрос из `mq.json`, например `--mobile`.
 */
declare function releaseMatchMedia(queryProp: string): void;
/**
 * Возвращает `true`, если есть поддержка `Pointer Events`
 */
declare function isPointerEventsSupported(): boolean;
/**
 * Возвращает `true`, если есть поддержка `Touch Events`
 */
declare function isTouchSupported(): boolean;
export { getMatchMedia, releaseMatchMedia, isPointerEventsSupported, isTouchSupported };
