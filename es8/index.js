const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries); // regresa una matriz con arreglo de strings
console.log (entries.length); //contar los elementos de una matriz

//devuelve los valores de un objeto a un arreglo

const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);//contar los elementos del arreglo

//Pad - cuando estás trabajando js mas de un fronend , sirve para presentar una lista de elementos y sirve para mostrarlo con la vista de impresión 
const string = 'hello'; //hello son 5 caracteres
console.log(string.padStart(7,'hi')); // si deseas agregar 2 caracteres extra agregas el total de caracteres en este caso 7, seguido de los caracteres a agregar.
//padstart lo agrega al inicio
console.log (string.padEnd(12, ' -----')); //padEnd agregá los caracteres al final.

const obj = {
    name: 'oscar', // trailing comma, establece que puede haber o no un nuevo valor
}

// Async Await Crear función, después una promesa y después invocarla: 

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (false)
        ? setTimeout(() => resolve ('Hello World'), 3000) //3000 milisegundos - setTimeout sirve para hacer que la función tenga un tiempo de ejecución
        : reject(new Error('Test Error')) //promesa
    })
}

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

//alternativa async

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
