// Tratamento de erros


try {
    console.log(nãoExisto)
} catch (err) {
    console.log ('nao Existro não existe')
}


function soma( x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números')  // typerror
    }

    return x + y;
}
console.log(soma(1, 2));

// try - é executado quando não há erros
// catch - é executado quando há erros
// finally - é executado sempre

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
} finally {

}



function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false

    });
}

const hora = retornaHora();
console.log(hora);