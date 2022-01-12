(() => {
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    // No se puede agregar cosas nuevas directamente
    // flash = {
    //     name: 'Clark Kent',
    //     // age: 60,
    //     powers: ['Súper fuerza'],
    //     getName(){
    //         return this.name;
    //     }
    // }

    // console.log( flash.getName!() )

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad']
    }
})()