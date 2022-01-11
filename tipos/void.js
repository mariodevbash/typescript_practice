"use strict";
//Cuando es void no debe retornar nada la funcion
(() => {
    const callBatman = () => {
        return;
    };
    function callSuperman() {
        return;
    }
    const a = callBatman();
    console.log(a);
})();
