/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string; //mostrarDireccion es una FN que retorna un STRING
}

//la interface Direccion se crea y usa de esta manera porque eel anidar objetos en una interface es mala practica
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string    
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman', 
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );







