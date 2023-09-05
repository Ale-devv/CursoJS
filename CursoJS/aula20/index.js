// Entre 0h - 11h - Bom dia
// Entre 12h - 17h Boa tarde
// Entre 18h - 23h Boa noite

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else if's na checagem
// Só posso ter um else na checagem
// podemos usar condições sem else if, utilizando if e else


const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}


const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair')
} else {
    console.log('Não vou sair')
}


const numero = 10;

if(numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8){
    console.log('O número não está entre 6 e 8.');
}
 else if (numero >= 9 && numero <= 11){ 
    console.log('O número não está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

