"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Mario',
        age: 25,
        address: {
            id: 125,
            zip: '44330',
            city: 'Guadalajara'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: '44300',
            city: 'Guadalajara'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map