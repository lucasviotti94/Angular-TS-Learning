/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b: number): number {
    return (a +b);
}

const sumarFlecha = (a: number, b: number):number => {
    return a + b;
}
// agregarle un ? al final significa que puede ser opcional. Base es de type number y de no existir por defecto es 2.

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;  // de esta manera la clasificamos como una funcion. Podemos agregarle los argumentos y sus tipos dentro del parentesis tambieen
}

function curar ( personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    console.log(personaje.pv)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp () {
        console.log('Puntos de vida: ' + this.pv);
    }
}

//Notese que a medida que especificamos los argumentos nos lo marca en azul en el popUp
curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
