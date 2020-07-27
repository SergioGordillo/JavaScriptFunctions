function validarFechaDeNacimientoYYYYMMDD(fecha) { //Valida formato yyyy/mm/dd

    let reg = new RegExp(/\d{4}[/](0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])/);
    correcto = false;

    if (reg.test(fecha)) {
        correcto = true;
    }

    return correcto;

}

function validarFechaDeNacimientoDDMMYYYY(fecha) { //Valida formato dd/mm/yyyy

    let reg = new RegExp(/(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}/);
    correcto = false;

    if (reg.test(fecha)) {
        correcto = true;
    }

    return correcto;

}

function validarFormatosFecha(fecha) { //Este método valida distintos formatos de fecha

    let reg = [ //Con este array de expresiones regulares podré validar los distintos formatos de fecha

        new RegExp(/([1-9]|[12][0-9]|3[01])[\/]([1-9]|1[012])[\/]\d{4}/), //D/M/YYYY
        new RegExp(/(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}/), //DD/MM/YYYY
        new RegExp(/([1-9]|[12][0-9]|3[01])[\-]([1-9]|1[012])[\-]\d{4}/), //D-M-YYYY
        new RegExp(/(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}/), //DD-MM-YYYY
        new RegExp(/([1-9]|[12][0-9]|3[01])[\.]([1-9]|1[012])[\.]\d{4}/), //D.M.YYYY
        new RegExp(/(0?[1-9]|[12][0-9]|3[01])[\.](0?[1-9]|1[012])[\.]\d{4}/) //DD.MM.YYYY
    ]

    let correcto = false;

    regs.forEach(element => {
        if (element.test(fecha)) {
            correcto = true;
        }
    });

    return correcto;

}

function validarFormatoFechaConHorasMinutos(fecha){ //Valida si una fecha tiene el formato DD/MM/YYYY HH:MM
    let reg=new RegExp(/^(0[123456789]|[12]\d|3[01])\/(0[123456789]|1[012])\/\d{4}\s([01]\d|2[0123])\:[012345]\d$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function esBisiesto(anio) { //Te permite saber si un año es bisiesto o no, y si no es bisiesto saber cuál será el próximo año bisiesto

    if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0)) {
        output.innerHTML = "El año " + anio + " es bisiesto."
    } else {
        let encontrado = false;
        for (let i = anio; i < Number.MAX_VALUE && !encontrado; i++) {
            if ((i % 4 == 0 && i % 100 != 0) || (i % 100 == 0 && i % 400 == 0)) {
                output.innerHTML = "El siguiente año bisiesto es " + i + ".";
                encontrado = true; //Para salir del bucle
            }

        }

    }
}

function esMayorDeEdad(fecha) { //Función que te dice a partir de una fecha si un usuario es mayor de edad o no

    let fecha = document.getElementById("fecha").value; //Recojo la fecha
    let fechaValidada = false;
    fechaValidada = validarFechaDeNacimiento(fecha);


    if (fechaValidada == true) {

        let fechaDate = new Date(fecha); //Convierto la fecha de texto a Date
        let msFechaDate = fechaDate.getTime(); //Obtengo los milisegundos de la fecha de nacimiento en concreto
        let fechaActual = new Date(); //Un new Date vacío te coje la fecha actual
        let msFechaActual = fechaActual.getTime(); //Ya lo tengo en ms

        let msTiempoPasado = msFechaActual - msFechaDate; //Con esto calculo el tiempo que ha pasado en ms desde que esa persona nació
        let msTiempoPasadoAnios = msTiempoPasado / (1000 * 60 * 60 * 24 * 365); //Ya tengo el tiempo que ha pasado en años
        //ms*seg*min*h*dias

        if (msTiempoPasadoAnios >= 18) {

            output.innerHTML = "El usuario es mayor de edad";

        } else {

            output.innerHTML = "El usuario es menor de edad";
        }

    } else {

        output.innerHTML = "La fecha no tiene un formato válido";

    }
}

function calcularDiaSemana(fecha) { //Este método, con un parámetro fecha, te devuelve una cadena explicando el día de la semana de dicha fecha

    let mensaje = " El día de la semana del día elegido es ";
    let dia = fecha.getDay(); //GetDay te devuelve un nº entre 0 y 6, siendo 0 domingo y 6 sábado


    switch (dia) {
        case 0:
            mensaje += "domingo.";
            break;
        case 1:
            mensaje += "lunes.";
            break;
        case 2:
            mensaje += "martes.";
            break;
        case 3:
            mensaje += "miércoles.";
            break;
        case 4:
            mensaje += "jueves.";
            break;
        case 5:
            mensaje += "viernes.";
            break;
        case 6:
            mensaje += "sábado.";
            break;

    }

    return mensaje; 

}

function diferenciaDias(fecha1, fecha2) { //Método que me permite calcular la diferencia de días entre dos fechas

    let diferencia = fecha1.getTime() - fecha2.getTime();

    return Math.round(diferencia / (1000 * 60 * 60 * 24)); //Con esto ya convierto los ms en días y lo devuelvo

}

function calcularNumeroDias(mes, anio) { //Método que pasándole mes y año me dice el número de días que tiene un mes

    let numeroDias = -1;

    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numeroDias = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numeroDias = 30;
            break;
        case 2:


            if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0)) { //Con esto sé si es bisiesto o no
                numeroDias = 29;
            } else {
                numeroDias = 28;
            }
            break;

    }

    return numeroDias;
}

function parseDate(fechatexto) { //Función que me transforma una cadena en un tipo Date

    let cadena = fechatexto.replace(/\/|\./g, "-"); //Con esto estoy buscando las barras y los puntos en toda la cadena introducida por el usuario y transformándolos en guiones
    let partes = cadena.split("-"); //Creo un array separando las partes de la fecha por guiones

    let dia = partes[0]; //Cada parte del array la meto en una variable más descriptiva para mí 
    let mes = partes[1];
    let anio = partes[2];

    let nuevaFecha = anio + "-" + mes + "-" + dia; //Lo pongo en el formato de fecha americano

    return new Date(nuevaFecha); //Lo convierto a tipo Date y lo devuelvo
}

function calcularAnioFundacion() { //Función que me genera un año aleatorio de los últimos cincuenta
    let fecha = new Date(); //Cojo la fecha actual del sistema
    let anioMaximo = fecha.getFullYear(); //Cojo el año actual
    let anioMinimo = (fecha.getFullYear()) - 50; //Le resto 50 y ya tengo el intervalo

    let anioaleatorio=Math.floor(Math.random() * (anioMaximo - anioMinimo)) + anioMinimo;
    return anioaleatorio; 

}

function calcularFechaActual(){ //Función que te devuelve la fecha actual del sistema
    let fecha = new Date(); //Cojo la fecha actual del sistema

    return fecha; 

}

function calcularFechasIguales(fecha1, fecha2){ //Función que me permite saber si dos fechas son iguales
    let fecha1=fecha1;
    let fecha2=fecha2; 

    if(fecha1.getTime()==fecha2.getTime()){
        alert ("Ambas fechas son iguales"); 
    } else {
        alert ("Ambas fechas son distintas"); 
    }

}


