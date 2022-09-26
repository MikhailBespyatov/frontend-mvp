type SavedStyle = {
    value: string;
    key: string;
    el: HTMLElement;
};
type RestoreStyle = {
    container: HTMLElement;
    modals: number;
    styles: SavedStyle[];
};
declare class ModalStore {
    private readonly restoreStyles;
    constructor();
    getRestoreStyles: () => RestoreStyle[];
}
export { SavedStyle, ModalStore };
