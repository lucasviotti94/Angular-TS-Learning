/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anio: 2015
    }
}

//En caso de no poder hacer el destructuring dee la linea 34 porque neceesitamos usar,al mismo tiempo, una variable con el mismo nombre s hace lo siguiente(linea 33): autor: autorDetalle
const autor = 'Fulano';

//Destructuring de OBJETO


const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;
// const { autor: autorDetalle } = detalles;   //Ambas formas estan correctas. Preferiblemente se usa la linea 30 en Typescript para evitar confusiones de declaracion

// console.log('El volumen actual es de: ' + volumen)
// console.log('El segundo actual es de: ' + segundo)
// console.log('La cancion actual es: ' + cancion)
// console.log('El autor es: ' + autorDetalle)


//Destructuring de ARREGLO

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = dbz;                            //Destructuring del 3er personaje

// const [p1, p2, p3] = dbz;                     //Destructuring los 3 personajes
// console.log('Personaje 1: ' + p1)
// console.log('Personaje 2: ' + p2)
// console.log('Personaje 3: ' + p3)


console.log('Personaje 3: ' + p3)

