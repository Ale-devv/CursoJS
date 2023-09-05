const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

};

console.log(pessoa1. nome);
console.log(pessoa1.sobrenome);


function criaPessoa (nome, sobrenome, idade) {
    return {
       nome,
       sobrenome,
       idade,

       fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    
       },
    };
    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();