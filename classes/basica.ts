(() => {

    class Avenger {

        // private name!: string;
        // private team!: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name; //Se llama al nombre de la clase, no al del avenger por que es Static
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) { }

        public bio(): string {
            return `${this.name} (${this.team})`
        }
    }

    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman)

    // console.log(Avenger.getAvgAge())

})()