"use strict";
//Si pones ? en el parametro se hace opcionalñ
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
