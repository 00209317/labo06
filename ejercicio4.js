var array = [20, 20, 20, 50, 60, 70];
var array2 = [20, 20, 20, 50, 60];


function par(lista) {
    if (lista % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function sumitapedro(lista) {
    let sum;
    if (par(lista.length) == true) {
        for (let i = 0; lista.length / 2; i++) {
            sum = lista.shift() + lista.pop();
            console.log(sum);
        }
    }