let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat()); //metodo flat - Imprime  profundidad o nivel, al no tener parametro imprime el primer nivel (quita un [nivel])
console.log(array.flat(2)); // Array flat devuelve una matriz con cualquier submatriz aplanada, dependiendo el número que uses como parametro , son los niveles que imprimirá



let array = [1,2,3, [1,2,3, [1,2,3]], [[[1,2]]]];
console.log(array.flat());

//flat.math -mapea cada elemento, después pasar una función y aplanar la matriz después del resultado

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));


//Trim start - Eliminar los espacios en blanco de un string
let hello = '                          hello world';
console.log(hello);
console.log(hello.trimStart());

//trimEnd
let hello = 'Hello world          ';
console.log(hello);
console.log(hello.trimEnd());

//Manejo de errores funciones de tipo async
//old version
try {
    
} catch (error) { //consumir a error o funcionalidad con error
    
}

//New version
try {
    
} catch {
    error //entra directamente el valor de error en el catch
}

//clave valor se transforma a objetos 
//Arreglo de dos elementos que queremos convertir a un objeto
//pasar de objetos a arreglos o de arreglos a objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries)); //devuelve un objeto cosntruido con la clave valor de cada elemento del arreglo

//objeto del tipo simbolo permite acceder a una descripción

let mySymbl = 'My Symbol';
let symbol = Symbol (mySymbl);
console.log(symbol.description);


