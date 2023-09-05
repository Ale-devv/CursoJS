//               0  1  2  3  4  5  6  7  8   - Indice

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];    // Valor
const primeiroNumero = numero[0];
console.log(numeros[0]); // Caso eu queira exibir o indície
console.log(primeiroNumero);


const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero)  */

// ...rest, ... spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]
const [um, dois, ...tres] = numeros
console.log(um, dois, tres);
console.log(resto);

const pessoa = {
    //nome: 'Luiz',
    sobrenome: "Miranda",
    idade: 30, 
    endereco: { 
    rua:  "Av Brasil",
    numero: 320
  }
};

//Atribuição via desestruturação

const {nome = 'Não existe', sobrenome, idade} = pessoa;
console.log(nome);