function saudacao (nome) {
    return `Bom dia ${nome}!`

}
const variavel = saudacao('Luiz')
saudacao() 

function soma(x, y) {
    const resultado = x + y;
    return resultado;
    console.log(soma(2, 2));

}

// o () serve para informar que a função está sendo executada.
// => Arrow function serve para simplificar

const raiz = function (n) {
    return n ** 0.5

};

console.log(raiz(9))