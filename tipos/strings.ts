(() => {
    const batman: string = 'Batman'
    const linternaVerde: string = "Linterna Verde"
    const volcanNegro: string = `Heroe: Volvan Negro`

    console.log(`Im ${batman}`)
    console.log(batman.toUpperCase())
    console.log(batman[10]?.toUpperCase() || 'No esta presente')
})()