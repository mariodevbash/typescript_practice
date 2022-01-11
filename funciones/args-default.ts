//Si pones ? en el parametro se hace opcionalñ

(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if(upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase()
        } else {
            return `${firstName} ${lastName || '----'}`
        }
    }

    const name = fullName('Tony', 'Stark', false);

    console.log({ name })
})()