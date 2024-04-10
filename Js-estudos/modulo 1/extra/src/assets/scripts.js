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

//multiplas condicionais

if (idade >= 18) {

    if (idade >= 60) {
        console.log('voce é idoso');
    } else {
    console.log('voce é adulto');
    }
}