//Antes de ECMASCRIPT 6
function newFuction(name, age, country) {
    var name = name || 'alan';
    var age = age || 29;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFuction2(name = 'alan', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFuction2();
newFuction2('Ricardo', '23', 'COL');

// template literals 

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6 Template literals sirven para concatenar con comillas francesas `` versión ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

////////Multilinea en los scripts//// 

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n"
+ "otra frase épica que necesitamos"  

////ES6////

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos: La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);

// // ES6
let {name,age,country} = person;
console.log(name,age, country);


//Operador de propagación: permite unir diferentes elementos circunstancias varios elementos.  ...es el operador de propagación

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ... team1, ...team2];

console.log(education);

//let solo disponible en el scope (donde solo sera llamado, local)
// var es para definir variables de manera global
// let es para definir variables de manera local (scope) es6

var hola = 'hola'

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(hola);


//const

const a = 'b';
//reasignar valor no se puede, valor const es constante

a = 'a';
console.log(a);

//Crear objetos más grandes, propiedad de objetos mejorada
let name = 'fabricio';
let age = 29;
// es5
obj = { name: name, age: age};
//es6
obj2 = { name, age};
console.log(obj);
console.log(obj2);

//arrow fuctions, arreglo de objetos
const names = [
    {name : 'alan', age: 29},
    {name : 'yesica', age: 27}
]
//función anonima
let listOfNames = names.map(function(item){
    console.log(item.name, item.age);
})
//ES6

let listOfNames2 = names.map(item => console.log(item.name, item.age));

const listOfNames3 = (name, age) => {
  //  ...
}
//otra forma que se podria presentar las arrow fuction
const listOFName4 = name => {
   // ... bloque de codigo
}

const square = num => num * num;

//Promesas sirve para trabajar asincronismo 
//definición: algo va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
         if( false ){
             resolve('hey!');
         } else{
            reject ('ups!');
         }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then (() => console.log ('hola'))
    .catch(error => console.log(error));
