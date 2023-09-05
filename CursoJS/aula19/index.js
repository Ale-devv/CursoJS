/* Operadores lógicos
 $$ -> AND -> E    Todas as expessões precisam ser verdadeiras para retornar true
 || -> OR -> OU
 ! -> NOT -> NÃO
 */

 const expressaoAnd = true && true && true && true // só retorna true se todas forem true
 const expressaoOr = true || false; // sempre retorna true se pelo menos uma expressão for verdadeira

 console.log(expressaoOr);

 console.log(!!!true) // ! inverte o true para false, se utilizar !! inverte duas vezes, !!! inverte trez vezes e assim sucetivamente.

 // Valors que retornam como falso: 0, '', "", ``, null, undefined, NaN

 console.log(0 || false || null || 'XXXXXXXXXXXX' || true); // retorna o primeiro valor verdadeiro, nesse caso é a string "XXXXXXXXXXX"

 const corUsuario = 'vermelho' 
 const corPadrao = corUsuario || 'preto'  // nesse exemplo se o usuário não escolher uma cor ela fica com a cor padrão, se ele escolher a cor priorizada será a cor solicitada.

 const a = 0;
 const b = null;
 const c = 'false';  //A constante C é a verdadeira pois é um string.
 const d = false;
 const e = NaN;

 console.log(a || b || c || d || e);