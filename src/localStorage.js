import { nulo };
const almacenamientoLocal = {
    "establecerItem": function (localStorageItem) {
        this = localStorage.setItem(localStorageItem);
        if (this === null) {
            this = nulo;
        }
    }
}
