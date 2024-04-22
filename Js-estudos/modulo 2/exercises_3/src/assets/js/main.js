/*
Crie uma função que valide o usuario e senha.
*/

function validateUser(user, password) {

    if (user === 'Álvaro' && password === '1234') {
        return true;
    } else {
        return false;
    }
}

let user = 'Álvaro';
let password = '1234';
let validate = validateUser(user, password);

if(validate) {
    console.log('Acess autorizated sucessfuly');
} else {
    console.log('Acess denined');
}