function calcularValorMaximoArray() {
    let mayor = Math.max.apply(null, array); //Calcula el mayor del array
}

function calcularValorMinimoArray() {
    let menor = Math.min.apply(null, array); //Calcula el menor del array
}

function calcularMediaValoresArray() { //Calcula la media de los valores del array
    var tamanioArray = array.length; //Saco el tamaño del array
    var sumatorioNumeros = 0;
    var media = 0;

    for (let i = 0; i < array.length; i++) {
        sumatorioNumeros = sumatorioNumeros + array[i];
    }
    media = sumatorioNumeros / tamanioArray;

    return media;
}

function calcularMultiplosHastaUnNumero(num1limite, num2multiplo) { //Con dos números, te calcula hasta el límite los números que son múltiplos de múltiplo y te lo muestra en pantalla
    
    let limite = parseInt(document.getElementById("num1").value);
    let multiplo = parseInt(document.getElementById("num2").value);

    if (limite > 0 && multiplo > 0) {
        if (multiplo <= limite) {

            for (let i = 1; i <= limite; i++) { //Recorro la distancia desde 1 hasta límite
                if (i % multiplo == 0 && i !== limite) { //Con esto sé si ese número es múltiplo o no, ya que los múltiplos se caracterizan porque dejan resto de 0

                    output.innerHTML += i + ","
                }

                if (i % multiplo == 0 && i == limite) {
                    output.innerHTML += i + "."
                }

            }


        } else {
            output.innerHTML = "El segundo número introducido no puede ser mayor que el primero";
        }
    } else {
        output.innerHTML = "Has de introducir números mayores a 0";
    }
}

function calcularPuntos(partidosGanados, partidosEmpatados) { //Función que te calcula el nº de puntos de un equipo, valiendo 3 puntos el partido ganado y 1 punto el partido empatado

    let puntosPartidosGanados = partidosGanados * 3;
    let puntosPartidosEmpatados = partidosEmpatados * 1;

    let totalPuntos = puntosPartidosGanados + puntosPartidosEmpatados;

    return totalPuntos;
}

function tirarDado(){ //Función que te permite obtener números aleatorios entre 1 y 6
    let dado=Math.floor(Math.random() * 6) +1;
    return dado;
}




