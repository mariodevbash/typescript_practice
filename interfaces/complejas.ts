(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id: string ): string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string,
    }

    const client: Client = {
        name: 'Mario',
        age: 25,
        address: {
            id: 125,
            zip: '44330',
            city: 'Guadalajara'
        },
        getFullAddress(id: string){
            return this.address.zip
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: '44300',
            city: 'Guadalajara'
        },
        getFullAddress(id: string){
            return this.address.zip
        }
    }

})()