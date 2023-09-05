





// declaração de função (function hoisting)
function falaOi() {
    console.log('Oie');
    return xxxx;
}

// First-class objects - objetos de primeira classe
// Function expression

const souUmDado = function () {
    console.log('Sou um dado.');

};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo.');
    funcao();
}
executaFuncao(souUmDado);



// Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrou function');
};
funcaoArrow();


// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();

