import { ModalStore } from './ModalStore.js';

var GlobalStore = /** @class */ (function () {
    function GlobalStore() {
        var _this = this;
        this.getModalStore = function () { return _this.modalStore; };
        this.modalStore = new ModalStore();
    }
    return GlobalStore;
}());

export { GlobalStore };
