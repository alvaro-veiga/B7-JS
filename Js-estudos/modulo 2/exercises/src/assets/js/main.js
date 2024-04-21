/*

Calcule a porcentagem entre 2 numeros.
exemplo: 25% de 40 é 10
fórmula da porcentagem (x * y) / 100

*/

function calculatorPecentenge(x, y) {
    return (x * y) / 100;
}
let x = 25;
let y = 40;
let result = calculatorPecentenge(x, y);
console.log(`${result}% de ${y} é ${result}`);