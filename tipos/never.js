"use strict";
//Debe tronar, nunca debe terminar la funcion al ponerle :never
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
