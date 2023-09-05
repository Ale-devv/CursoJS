// Número é divisível por 3 = Fizz
//Número é difisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = retornar o próprio número







const ePaisagem = (largura, altura) =>
  largura > altura;
  console.log(ePaisagem(1080, 1920));


  function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero;
  }

  console.log('a', fizzBuzz('a'))
  for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
  }