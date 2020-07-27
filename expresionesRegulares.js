function validarNumeroEntero(input){ //Valida si un número es entero
    let reg=new RegExp(/^-?[0-9]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroEnteroOtraForma(input){ //Otra función para validar si un número es entero
    let reg=new RegExp(/^((\-?[1-9]\d*)|0)/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroEnteroPositivo(input){ //Valida si un número es entero y positivo
    let reg=new RegExp(/^[0-9]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroEnteroPositivoMayorQue0(anio) { //Valida si un número es entero y mayor que 0. Este número ha de tener mínimo un número. Expresión regular adaptada para meter años.
    let reg = new RegExp(/^[1-9]{1}[0-9]*$/);
    correcto = false;

    if (reg.test(anio)) {
        correcto = true;
    }

    return correcto;

}

function validarNumeroEnteroNegativo(input){ //Valida si un número es entero y negativo
    let reg=new RegExp(/^-[0-9]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarDNI(input){ //Valida DNI con 8 números y una letra al final
    let reg=new RegExp(/^[0-9]{8}[T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E]$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarIP(input){ //Valida una IP 
    let reg=new RegExp(/^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarMatriculaCoche(input){ //Valida una matrícula de coche con formato 0000XXX
    let reg=new RegExp(/^[0-9]{4}[A-Z]{3}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroBinario(input){ //Valida un número binario
    let reg=new RegExp(/^[0-1]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroOctal(input){ //Valida un número octal
    let reg=new RegExp(/^[0-7]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroHexadecimal(input){ //Valida un número hexadecimal
    let reg=new RegExp(/^[0-9A-F]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroReal(input){ //Valida un número real (positivo o negativo)
    let reg=new RegExp(/^-?[0-9]+([\\.,][0-9]+)?$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroEnteroPositivo(input){ //Valida un número entero positivo mayor que 0
    let reg=new RegExp(/^([0-9])*$/);
    correcto=false;

    if(reg.test(input) && input>0){
        correcto=true;
    }

    return correcto; 

}


function validarNumeroRealOtraForma(input){ //Otra función para validar un número real (positivo o negativo)
    let reg=new RegExp(/^((\-?[1-9]\d*|0)|[-]?([1-9]\d*|0)[,.][0-9]*[1-9])$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroRealPositivo(input){ //Valida un número real positivo
    let reg=new RegExp(/^[0-9]+([\\.,][0-9]+)?$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroRealNegativo(input){ //Valida un número real negativo
    let reg=new RegExp(/^-[0-9]+([\\.,][0-9]+)$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNumeroRealConNumeroDeterminadoDecimales(input, decimales){ //Valida un número real que tenga x decimales
    let reg=new RegExp(/^-?[0-9]+([\\.,][0-9]{1," + decimales + "})?$/);
    correcto=false;

    if(decimales>0){
        if(reg.test(input)){
            correcto=true;
        }
    }

    return correcto; 

}

function validarNumeroRealPositivoConNumeroDeterminadoDecimales(input, decimales){ //Valida un número real positivo que tenga x decimales
    let reg=new RegExp(/^[0-9]+([\\.,][0-9]{1," + num_deciamales + "})?$/);
    correcto=false;

    if(decimales>0){
        if(reg.test(input)){
            correcto=true;
        }
    }
    
    return correcto; 

}

function validarNumeroRealNegativoConNumeroDeterminadoDecimales(input, decimales){ //Valida un número real negativo que tenga x decimales
    let reg=new RegExp(/^-[0-9]+([\\.,][0-9]{1," + num_deciamales + "})?$/);
    correcto=false;

    if(decimales>0){
        if(reg.test(input)){
            correcto=true;
        }
    }
    
    return correcto; 

}

function validarFechaddmmaa(input){ //Valida una fecha con formato dd/mm/año
    let reg=new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\\/](0?[1-9]|1[012])[/\\/](19|20)\\d{2}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarNombres(input){ //Valida si una cadena tiene formato de nombre de persona, incluyendo nombres compuestos
    let reg=new RegExp(/^([A-Z]{1}[a-z]+[ ]?){1,2}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarEmail(input){ //Valida si una cadena tiene formato de email
    let reg=new RegExp(/^([\\w-]+\\.)*?[\\w-]+@[\\w-]+\\.([\\w-]+\\.)*?[\\w]+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarEmailOtraForma(input){ //Otro método para validar si una cadena tiene formato de email
    let reg=new RegExp(/^[a-z][a-z0-9_\-]*(\.[a-z0-9_\-]*)*[a-z0-9]\@[a-z0-9]+\.[a-z]{2,3}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarEmailTarea5(input){ //Valida si una cadena tiene formato de email con lo que te exije la tarea 5 DWEC
    let reg=new RegExp(/^([\\w-]+\\.)*?[\\w-]+{40}@[\\w-]+{40}\\.([^A-Za-z]+{2})+$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarUsuarioTwitter(input){ //Valida si una cadena tiene formato de usuario de Twitter
    let reg=new RegExp(/^@([A-Za-z0-9_]{1,15})$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarCadenaFormatoISBN(input){ //Valida si una cadena tiene formato ISBN
    let reg=new RegExp(/^(978|979)[0-9]{10}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarCadenaComillasSimplesODobles(texto){ //Este método valida que una cadena empiece y termine con "" o con ''

    let reg=new RegExp(/^"[A-Za-z0-9 ]*"$/);
    let reg2=new RegExp(/^'[A-Za-z0-9 ]*'$/); 
    correcto=false;

    if(reg.test(texto)||(reg2.test(texto))){
        correcto=true;
    }

    return correcto;

}

function validarCadenaComillasSimplesODoblesFormatoArray(texto){ //Este método valida que una cadena empiece y termine con "" o con '', pero utilizando un array de expresiones regulares en el método

    let reg=[
        new RegExp(/^"[A-Za-z0-9 ]*"$/),
        new RegExp(/^'[A-Za-z0-9 ]*'$/)
    ]
    correcto=false; 

    reg.forEach(element => {

        if(element.test(texto)){
            correcto=true;
        }
        
    });

    return correcto; 
}

function mostrar(input, correcto){ //Este método te muestra si un código tiene un formato válido o no

    if(correcto==true){
        output.innerHTML="La cadena tiene un formato válido";
    }else{
        output.innerHTML="La cadena no tiene un formato válido";
    }

}

function devolverParteDecimal (input){ //Este método te coge cadenas de números y te devuelve sólo la parte decimal separada por .

    let arrayDeTexto=texto.match(/\.[0-9]+/g);

    return arrayDeTexto; 

}

function devolverEnteroKg(texto){ //Este método te coge texto con formato "xKg" y te devuelve sólo los números, pintándotelos en pantalla con innerHTML

    let arrayTexto=texto.match(/[0-9]+/g); 
    output.innerHTML=""; 

    for (let i= 0; i < arrayTexto.length; i++) {

        if(i<arrayTexto.length-1){
            output.innerHTML+=arrayTexto[i] + ", ";
        } else {
            output.innerHTML+=arrayTexto[i] + ".";
        }
        
        
    }
}

function validarFraseComienceMayusFinalPunto(input){ //Valida si una cadena empieza en mayúscula y acaba en un punto
    let reg=new RegExp(/^[A-Z][a-z]+[.]$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarTelefono(input){ //Valida si una cadena tiene un formato de teléfono (9 cifras)
    let reg=new RegExp(/^[967][0-9]{8}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarTelefonoInternacional(input){ //Valida si una cadena tiene un formato de teléfono internacional (9 cifras) + prefijo (por defecto pongo el +34 de España)
    let reg=new RegExp(/^\(\+34\)[967][0-9]{8}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarTelefonoInternacional(input){ //Valida si una cadena tiene un formato de teléfono internacional (9 cifras) + prefijo (por defecto pongo el +34 de España)
    let reg=new RegExp(/^\(\+34\)[967][0-9]{8}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarCodigoPostal(input){ //Valida si una fecha tiene formato de Código Postal (5 números)
    let reg=new RegExp(/^\d{5}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarCodigoCuentaCliente(input){ //Valida si un input tiene formato de una cuenta bancaria (4 dígitos entidad, 4 dígitos sucursal, 2 dígitos de control y 10 de nº de cuenta)
    let reg=new RegExp(/^\d{4}\s\d{4}\s\d{2}\s\d{10}$/);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarDominio(input){ //Valida si un input tiene formato de dominio web (finalizando en .com, .net o .es)
    let reg=new RegExp(/^www\.[\d\w]+\.(com|net|es)$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarURLPuertoProtocolo(input){ //Valida si un input tiene formato de URL con puerto y protocolo. Ej: http://www.marca.com:80. 
    let reg=new RegExp(/^(http|ftp)\:\/\/(\w+\.)?\w+\.(com|net|es)(\:(\d){1,4})?$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarURLPuertoProtocoloParametros(input){ //Valida si un input tiene formato de URL con puerto y protocolo. Ej: http://www.marca.com:80?param1=value1 (parámetros que se pasan con el método GET de PHP). 
    let reg=new RegExp(/^(http|ftp)\:\/\/(\w+\.)?\w+\.(com|net|es)(\:(\d){1,4})?(\?(\w+=.*)(\&(\w+=.*))*)?$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}


function validarURL(input){ //Valida si un input tiene formato de URL 
    let reg=new RegExp(/^[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}

function validarCoordenadas(input){ //Valida si un input tiene formato de Coordenadas (latitud y longitud)
    let reg=new RegExp(/^[-]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/i);
    correcto=false;

    if(reg.test(input)){
        correcto=true;
    }

    return correcto; 

}




















