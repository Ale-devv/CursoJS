const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Continue continua para p

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2')
        i++
        continue
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++
        break;
    }

    console.log(numero)
}