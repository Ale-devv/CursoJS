let nome = 'Luiz';
var nome2 = 'Luiz';

// let tem escopo de bloco {...bloco}
// var só tem escopo de função

let nome2 = 'Otávio';

const verdadeira = true;
if (verdadeira) {
    let nome = 'Otávio';
    console.log('nome, nome2');

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log('Ok');
    }
}


function falaOi () {
    var nome = 'Luiz';
}

console.log(nome);
falaOi();