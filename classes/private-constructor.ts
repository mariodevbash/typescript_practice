(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(
            public name: string
        ) {

        }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único')
            }

            return Apocalipsis.instance
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis 1... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis 2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis ... el único')

    console.log(apocalipsis1)
    console.log(apocalipsis2)
    console.log(apocalipsis3)

})()