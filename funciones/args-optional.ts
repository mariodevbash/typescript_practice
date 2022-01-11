//Si pones ? en el parametro se hace opcionalñ

(() => {
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName}`
    }

    const name = fullName('Tony');

    console.log({ name })
})()