/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV (productos: Producto[]): [number, number] {       //esta fn retorna un numero
    
    let total = 0;
                                        //Destructuring de ARGUMENTOS
    productos.forEach( ({precio}) => {   //Destructuring de el producto (singular) para evitar producto.precio
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta]

// const isv = calculaISV(articulos);       //Destructuring del resultado de la funcion que retorna un arreglo con dos number
const [ total, isv ] = calculaISV(articulos);  

// console.log( 'TOTAL:', total)
// console.log( 'ISV:', isv)