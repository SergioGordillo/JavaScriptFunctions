function eliminaEspaciosBlanco(cadena) { //Función que elimina espacios en blanco en ambos extremos del String

    let cadenaSinEspaciosExtremos = cadena.trim();

    return cadenaSinEspaciosExtremos;

}

function eliminarEspaciosEntrePalabras(cadena) { //Función que me elimina espacios en blanco entre palabras del String

    let cadenaSinEspaciosEntrePalabras = cadena.split(' ');

    return cadenaSinEspaciosEntrePalabras;
}

function eliminarEspaciosTotal(cadena) { //Función que me elimina espacios en blanco en ambos extremos del String y entre palabras de la misma

    let cadenaSinEspaciosExtremos = cadena.trim();
    let cadenaSinEspaciosEntrePalabras = cadenaSinEspaciosExtremos.split(' ');

    return cadenaSinEspaciosEntrePalabras;

}

function filtrarPalabras(texto) { //Método dónde de un texto, recorro las palabras y me devuelve un array con lo que son realmente palabras (me quita , y cualquier otro tipo de signos de puntuación)

    let reg = new RegExp(/[A-Za-z]+/); //Expresión regular que me valida las palabras

    palabras = texto.filter(p => reg.test(p)); //Esto me filtra palabras y sólo me guarda en el array aquellos elementos que cumplen la expresión regular

    return palabras;
}

function contarPalabras(texto) { //Método dónde me cuenta cuántas palabras tiene un array texto (ya validado previamente que sean palabras)

    let contadorPalabras = 0;

    for (let i = 0; i < texto.length; i++) {
        contadorPalabras++;
    }

    return contadorPalabras;

}

function cuentaLetras(palabra) { //Método que me devuelve un array con cuántas letras tiene una palabra o texto, además de cuántas vocales tiene y cuántas veces aparece cada vocal

    let contadorLetrasPalabra = 0;
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    palabra.split('').forEach(letra => {

        switch (letra.toLowerCase()) {
            case 'a':
                contadorA++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'u':
                contadorU++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'o':
                contadorO++;
                break;
        }

        let reg = RegExp(/[A-Za-z]/);

        if (reg.test(letra)) {
            contadorLetrasPalabra++;
        }
    });

    let contadores=[contadorA, contadorE, contadorI, contadorO, contadorU, contadorLetrasPalabra]; 
    return contadores;
}

function minMax(contadores){ //Función que me dice cuál es la vocal que menos aparece (tomando como parámetro un contador de vocales) en una palabra y cuál es la que más

    let max=contadores[0];
    let min=Number.MAX_VALUE; 

    for (let i = 0; i < contadores.length; i++) {
        const element = contadores[i];
        
        if(element>max){
            max=element; 
        }

        if(element<min && element!=0){
            min=element; 
        }


    }
    
    let indicemax=contadores.findIndex(contador=> contador==max); 
    let indicemin=contadores.findIndex(contador=> contador==min && contador!=0); 

    if(indicemin==-1){
        indicemin=indicemax; //Esto cuando no haya otra vocal en la cadena
    }

    let indicesmaxmin=[indicemin, indicemax]; 
    return indicesmaxmin; 
}




function estaVaciaONo(cadena) { //Función que me permite verificar si una cadena tiene contenido de algún tipo o está vacía

    let cadenaSinEspaciosExtremos = cadena.trim();
    let correcto = false;

    if (cadenaSinEspaciosExtremos !== "") {
        correcto = true;
    }

    return correcto;

}

function validarTextoConDistintosCaracteres(texto) { //Método que me valida que una cadena pueda tener letras mayúsculas y minúsculas, puntos, interrogaciones, comas, punto y coma, comillas simples, comillas dobles, interrogación, exclamación y símbolo de resta.

    let reg = new RegExp(/^[A-Za-z(\.{1,3})\?\,\;\:\'\"\¿\¡\!\- ]+$/);
    correcto = false;

    if (reg.test(input)) {
        correcto = true;
    }

    return correcto;

}

function pasarAMinusculas (cadena) { //Método que me pasa un String a minúsculas

    let cadenamin=cadena.toLowerCase();

    return cadenamin; 

}

function pasarAMayusculas (cadena) { //Método que me pasa un String a mayúsculas

    let cadenamayus=cadena.toUpperCase();

    return cadenamayus; 

}

function ordenarAlfabeticamente(array){ //Función que ordena alfabéticamente un array sin tener en cuenta mayúsculas o minúsculas

    let arrayordenado=array.sort(function(b,a){return b.toString().toLowerCase()>a.toString().toLowerCase();});
    
    return arrayordenado; 

}

function validarNickname(input){ //Expresión regular que me valida que un nick tenga sólo letras y entre 4 y 20

    let reg=new RegExp(/^[A-Za-z]{4,20}$/i); 
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 
}

function validarEstadoCivil(input){ //Función que valida el estado civil de una persona
    let reg=new RegExp(/^(soltero|casado|viudo|divorciado)$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}











