const data = new Date('1978-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto; 

if (diaSemana === 0) {
    diaSemana = 'Domingo';
} else if (diaSemana === 1) {
    diaSemana === 'Segunda'
} else if (diaSemana === 1) {
    diaSemana === 'Terça'
} else if (diaSemana === 1) {
    diaSemana === 'Quarta'
} else if (diaSemana === 1) {
    diaSemana === 'Quinta'  
}else if (diaSemana === 1) {
    diaSemana === 'Sexta'  
}else if (diaSemana === 1) {
    diaSemana === 'Sábado'  
} else {
    diaSemanaTexto = "2"
}
console.log(diaSemana, diaSemanaTexto);



switch (diaSemana) {
    case 0: 
    diaSemanaTexto = 'XXXXXX'
    break;
    case 1: 
    diaSemanaTexto = 'XXXXXX'
    break;
    case 2: 
    default:
        diaSemanaTexto = '';
    diaSemanaTexto = 'XXXXXX'
    break;
    case 3: 
    diaSemanaTexto = 'XXXXXX'
    break;
    case 4: 
    diaSemanaTexto = 'XXXXXX'
    break;
}