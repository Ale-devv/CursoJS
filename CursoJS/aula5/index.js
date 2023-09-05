/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 altura e seu IMC é de 25.92929252592 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaemM = 1.80;
let imc; // peso / (altura * altura)
imc = peso / (alturaemM * alturaemM);
console.log (imc);
let anoNascimento; 

anoNascimento = 2023 - idade;
console.log (anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${alturaemM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)