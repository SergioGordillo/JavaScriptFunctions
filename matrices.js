function valoresEnLaMismaPosicionMatriz(matrizA, matrizB){ //Este método te permite ver de dos matrices qué valores coinciden que además estén dentro de la matriz en la misma posición
    for (let i = 0; i < matrizA.length; i++) {
        for(let j = 0; j < matrizA[0].length; j++){

            if(matrizA[i][j]==matrizB[i][j]){
                console.log(matrizA[i][j]); 
                console.log("i: " + i + ", j: " + j);
            }
        }
      
    }
}