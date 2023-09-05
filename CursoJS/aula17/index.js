/* 
Primitivos (imutáveis - string, number, boolean, undefined, null (biginit, symbol)
*/
let a = 'A';
let b = a; // copia
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

// Referência (mutável) - array, object, funcion

let c = [1, 2, 3];
let d = c;
console.log (d, c);

c.push(4);
console.log(c);