const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())  // - 0 domingo, 6 - sábado
console.log(data.toString())
console.log(Date.now());



function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const Seg = data.getSeconds();

    return `${dia}/${mes}/${ano}/${hora}/${min}/${Seg}/`;


}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);
