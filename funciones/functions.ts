(() => {
    const hero: string = 'Flash'

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Batiseñal Activata!'
    }

    console.log(typeof activateBatisignal)

    const heroName = returnName()
})()