import { nulo };
const almacenamientoLocal = {
    "establecerItem": function (localStorageItem, localStorageItemName) {
         localStorage.setItem(localStorageItem, localStorageItemName);
    },
    "conseguirItem": function (localStorageItemName) {
         this = localStorage.getItem(localStorageItemName);
         if (this === null) {
             this = nulo;
         }
    }
}
