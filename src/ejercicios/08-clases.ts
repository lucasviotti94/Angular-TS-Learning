/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal {
    // private alterEgo: string;   //Esta prop solament va a ser visible dentro de esta clase
    // public edad: number;        //Esta prop puede ser visible desde fuera de la clase
    // static nombreReal: number;  //Voy a poder acceder al valor de esta prop sin crear una instancia de la classe


    //Aca estamos crando las propiedades de la clase directamente en el constructor mientras definimos su nombre y su type
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);