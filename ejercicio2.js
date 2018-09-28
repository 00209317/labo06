var array = [20, 20, 20, 50, 60, 70];

function sum_prom(lista) {
    var cont = 0;
    var sum = 0;
    var prom = 0;
    for (let i = 0; i < lista.length; i++) {
        sum = sum+lista[i];
        cont++;
        console.log(sum);
    }
    prom = sum/cont;
   
    return prom;
}