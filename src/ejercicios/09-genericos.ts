/*
    ===== Código de TypeScript =====
*/ 

// GENERICOS
// De esta manera sabemos que el argumento que recibe es de tipo generico(cualquiera)
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [100,1,5,7] );


// <numbre> = significa que lo qu devuelve la funcion tiene que ser de tipo number
let soyExplicito = queTipoSoy<number>(100);
let soyExplicito2 = queTipoSoy<number[]>([100, 99, 98, 97, 96]);











