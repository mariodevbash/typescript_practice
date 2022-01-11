//Cuando es void no debe retornar nada la funcion

(() => {
    const callBatman = ():void => {
        return;
    }

    function callSuperman():void {
        return;
    }

    const a = callBatman()
    console.log(a)
})()