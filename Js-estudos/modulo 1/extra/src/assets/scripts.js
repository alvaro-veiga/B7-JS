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

// if (idade >= 18) {

//     if (idade >= 60) {
//         console.log('voce é idoso');
//     } else {
//     console.log('voce é adulto');
//     }
// }

if (idade >= 18 && idade < 60) {
    console.log('voce é adulto');
} else if (idade >= 60) {
    console.log('voce é idoso');
} else {
    console.log('voce é menor de idade');
}


// desmistificando o if

let validação = true

if (validação) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

// subistitua o @ pela condcional correta para que
// a mensagem seja impressa como TRUE

let x = 10;
let y = 5;

console.log(x > y);

//substitua o @ pela condicional correta para que
//a mensagem seja impressa como FALSE

let w = '10';
let z = 10;

console.log(w == z);


//subistitua o @ pela condicional correta para que
//a mensagem seja impressa como TRUE


let a = 10;
let b = 5;
console.log(a != b);


//crie uma condicional que verifica se o preço da fruta esta barato ou caro.
//se o preço for menor que 10 imprima 'carne barata'


let precoFruta = 9;

if (precoFruta < 10) {
    console.log('fruta barata');
}else {
    console.log('fruta cara');
}


// condicional ternário

let isMemberPremium = true;

let shipping = isMemberPremium ? 2 : 10;

console.log(isMemberPremium ? 'Frete grátis' : 'Frete pago');
console.log("Frete: " + shipping);


//switch case


let profession = 'doctor';

switch (profession) {
    case 'doctor':
        console.log('medico');
        break;
    case 'engineer':
        console.log('engenheiro');
        break;
    case 'artist':
        console.log('artista');
        break;
    default:
        console.log('profissão desconhecida');
        break;
}
