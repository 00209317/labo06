var array = [20, 20, 20, 50, 60, 70];

function recurrencia(n, lista) {
    let cont = 0;
    for(let i = 0; i <= lista.length; i++){
        if(lista[i] == n){
            cont++;
        }
    }
    return cont;
}

recurrencia(20, array);
