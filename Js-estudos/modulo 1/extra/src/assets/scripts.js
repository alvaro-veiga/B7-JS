//template string

let nome = 'alvaro';
let sobrenome = 'silva';


// let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);


//template string com expressões

let idade = 90;

let idadeString = `minha idade é ${idade}`;

console.log(idadeString);


// condicionais

if (idade > 18) {
    console.log('maior de idade');
} else {
    console.log('menor de idade');
}

//operadores lógicos

if (idade == 20) {
    console.log('sua idade é 20 anos');
} else if ( idade == 30) {
    idade = idade + 10;
    console.log('sua idade é de 40 anos');
}