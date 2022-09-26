import { ModalStore } from "./ModalStore";
declare class GlobalStore {
    private readonly modalStore;
    constructor();
    getModalStore: () => ModalStore;
}
export { GlobalStore };
