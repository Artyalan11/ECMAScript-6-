//operador en reposo

//creación de objeto

const obj = {
    name: 'alan',
    age: '32',
    country: 'MX'
};

// Operador de reposo para separar los elementos - extrae elemento, lo que necesitas de un objeto.

let { name, ... all } = obj; //si necesitas del objeto unicamente el valor de name, asi lo puedes traer sin romper los demás datos del objeto (all)
console.log(name, all);

let { country, ... all } = obj; //si necesitas del objeto unicamente el valor de name, asi lo puedes traer sin romper los demás datos del objeto (all)
console.log(all);
///////////////////////////////////////////
//PROPIEDAS DE PROPAGACION

const obj = {
    name: 'alan',
    age: 32
}

const obj1 = {
    ...obj, //operador de propagación para anidar/unir elementos
    country: 'MX'
}

console.log(obj1);

//////////////////////////////////////////////
//promise.finally