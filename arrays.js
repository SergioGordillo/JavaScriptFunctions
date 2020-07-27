function ordenarBurbuja(array) { //Ordena un array de menor a mayor mediante el algoritmo de la burbuja
    for (let i = 1; i < array.length; i++) { //Empiezo a recorrer desde la posición 1 del array
        for (let j = 0; j < array.length - i; j++) { //Empiezo a recorrer desde la posición 0 del array
           
            if (array[j] > array[j + 1]) { //Entra en el bucle si la posición anterior es mayor que la posterior (ej. array[0]>array[1])
                let aux = array[j + 1]; //Creo un auxiliar dónde guardo el número menor que tengo que poner antes que el mayor
                array[j + 1] = array[j]; //A la posición del número posterior le asigno el valor del número mayor
                array[j] = aux;  //A la posición del número anterior le asigno el valor del número menor
            }
        }

    }
    
    return array;
}

    function mostrarArray(elementoMostrar, array) { //Función que te muestra un array por pantalla vía InnerHTML
        elementoMostrar.innerHTML = "";

        for (let i = 0; i < array.length; i++) {

            if (i < array.length - 1) { //Si el índice es menor que el penúltimo, me metes el valor del i en el array + una coma.
                elementoMostrar.innerHTML += array[i] + ", ";
            } else { //Pero si ya el índice me vas a recorrer el último valor del array, le añades un punto al final.
                elementoMostrar.innerHTML += array[i] + ".";
            }



        }
    }

function ordenarEquiposArray(array, arraysegundo) { //Ordena los equipos del array del primer array de forma alfabética y saca los estadísticas correspondientes al equipo del primer array del segundo array y lo vincula

        var n, i, k, aux;
        n = array.length; //La longitud del array
        // Algoritmo de burbuja
        for (k = 1; k < n; k++) { //recorro el array
            for (i = 0; i < (n - k); i++) { //recorro el array de nuevo para poder coger otro equipo
                if (array[i].localeCompare(array[i + 1]) > 0) { //Los comparo alfabéticamente, teniendo como equipo mayor el primero alfabéticamente
    
                    let filaPrimera = arraysegundo.findIndex(fila => fila[0] == i); //Saco la fila entera 
                    let filaSegunda = arraysegundo.findIndex(fila => fila[0] == i + 1); //Saco la fila entera
    
                    aux = arraysegundo[filaPrimera]; //Asigno al auxiliar toda la fila primera
                    arraysegundo[filaPrimera] = arraysegundo[filaSegunda]; //A la fila primera le asigno la segunda
                    arraysegundo[filaSegunda] = aux; //A la fila segunda le asigno el auxiliar
    
                    arraysegundo[filaPrimera][0] = i; //Con esto cambio el índice de las filas
                    arraysegundo[filaSegunda][0] = i + 1;
    
                    aux = array[i]; //Con esto cambio los nombres de equipo
                    array[i] = array[i + 1];
                    array[i + 1] = aux;
                }
            }
        }
    
    }

function ordenarEquiposMatriz(array, arraysegundo){ //Función que me devuelve una matriz ordenada por nº de puntos de los equipos, y en caso de empate en orden alfabético
 
        var n, i, k, aux;
        n = arraysegundo.length;
        // Algoritmo de burbuja
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (arraysegundo[i][4]<=arraysegundo[i+1][4]) { //Comparo el que tengo ahora con el siguiente
                    if (arraysegundo[i][4]==arraysegundo[i+1][4]){
                        let nombreEquipo1=array[arraysegundo[i][0]]; //Con esto cojo el nombre del equipo
                        let nombreEquipo2=array[arraysegundo[i+1][0]]; //Con esto cojo el nombre del equipo
    
                        if (nombreEquipo1.localeCompare(nombreEquipo2) > 0) { //Comparo alfabéticamente en caso de empate
                            aux = arraysegundo[i]; 
                            arraysegundo[i] = arraysegundo[i + 1];
                            arraysegundo[i + 1] = aux;
                        }
                    } else {
                        aux = arraysegundo[i];
                        arraysegundo[i] = arraysegundo[i + 1];
                        arraysegundo[i + 1] = aux;
                    }
                  
                } 
            }
        }
    }