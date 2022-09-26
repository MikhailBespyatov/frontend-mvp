declare function isScrolledToTop(target: HTMLElement): boolean;
declare function isScrolledToBottom(target: HTMLElement): boolean;
declare function hasScrollbar(target: HTMLElement): boolean;
declare const handleContainer: (container: HTMLElement) => () => void;
export { isScrolledToTop, isScrolledToBottom, hasScrollbar, handleContainer };
