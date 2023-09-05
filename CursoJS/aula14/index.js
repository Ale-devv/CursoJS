//            123456789
const nome = 'Alisson Oliveira'

//               0         1       2     3    4    5
const alunos = ['Luiz', 'Maria', 'João', 1, true, null, ];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos.length // descobre o tamanho do índice
alunos.push // Adiciona no fim
alunos.unshift // Adiciona no começo
alunos.pop // remove do array
alunos.shift // Remove do começo
delete alunos[1] // remove conteúdo do indice 1 porém o índice continua presente estando "Vazio"
alunos instanceof Array // questiona se o alunos é array, se for retorna verdadeiro, se não falso
