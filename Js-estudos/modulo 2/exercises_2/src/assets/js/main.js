/*

cacule o preço de um imovel
- m2 = 3.000
- se tiver 1 quarto, o mentro é 1x
- se tiver 2 quartos, o metro é 1.25x
- se tiver 3 quartos, o metro é 1.5x

uso da função:

*/

function calculateImovelPrice(m2, roons) {
    let m2 = 3000;

    switch (roons) {
        case 1:
            return m2 * 1;
        case 2:
            return m2 * 1.25;
        case 3:
            return m2 * 1.5;
        default:
            return 'Invalid number of rooms';
    }
}