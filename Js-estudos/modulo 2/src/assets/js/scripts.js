// functions
function gravidade() {
  console.log('A gravidade do planeta é:');
  console.log(9.8);
}

gravidade();

// functons with parameters

function velocidade(espaco, tempo) {
  console.log('A velocidade é:');
  console.log(espaco / tempo);
}

velocidade(100, 20);


// functions with return

function somar(a, b) {
  return a + b;
}
let resultado = somar(10, 5);

console.log(resultado);


// entrada -> processamento -> saída