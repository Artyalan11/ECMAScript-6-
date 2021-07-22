//ECMAScript es la especificación del lenguaje JavaScript propuesto por ECMA Internacional, que es la institución encargada de los estándares, y JavaScript, es el lenguaje de programación que utiliza las especificaciones propuestas, que van siendo añadidas cada año a partir del 2015, cuando fue lanzado ES6.

//npm init funciona para inicializar un proyecto

//Parametros por defecto, puedes establecer ciertos valores que pasamos a una función por defecto
//Default params
//old version

function newFuction(name, age, country) {
    var name = name || 'Alan'; //|| or  Alan es el valor por defecto 
    var age = age || 32; //
    var country = country || 'MX';
    console.log(name, age, country);
}
newFuction();
//ES6 version
//Se agregan los valores por defecto al inicio de la función , en la sección de parametros
function newFuction2(name = 'Alan', age = 29, country = "MX") {
    console.log(name, age, country);
};

newFuction2(); // Si mandas a llamar la función sin parámetros, se imprimiran los valores por defecto
newFuction2('Ricardo', '23', 'CO'); // si agregas parametros al llamado de la función serán usados al ejecutarse.

//Template literals permiten separar o unir varios elementos
//old version
let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//new version
//`` comillas francesas son los templates literals para concatenación 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);