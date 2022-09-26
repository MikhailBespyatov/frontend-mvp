import { ModalStore } from './ModalStore.js';

class GlobalStore {
    constructor() {
        this.getModalStore = () => this.modalStore;
        this.modalStore = new ModalStore();
    }
}

export { GlobalStore };
