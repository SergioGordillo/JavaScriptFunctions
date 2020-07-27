function calcularPER(cotizacion, dividendoAnual){ //Función que calcula el PER, tiempo que se tarda en recuperar vía dividendo la inversión realizada en años
    let resultado=cotizacion/dividendoAnual;

    return resultado;
}

function calcularMedianaDiaria(cotizacionMaxima, cotizacionMinima){
    let medianaDiaria=(cotizacionMaxima+cotizacionMinima)/2;

    return medianaDiaria; 

}