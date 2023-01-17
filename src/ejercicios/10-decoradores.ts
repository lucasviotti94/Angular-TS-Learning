/*
    ===== Código de TypeScript =====
*/ 

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor:T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}
//Para trabajar con los decoradores hay que poner en el tsonfig el 'experimentalDecorators'
//Para que no siga aparecien eel eerror de los decoradores en la consola del navegador hay quee cerrar y volver a inicializar el codigo

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}


console.log( MiSuperClase )

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad)





