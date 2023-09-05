const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

// for clássico - geralmente com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (itself) (iteráveis, arrays ou strings)