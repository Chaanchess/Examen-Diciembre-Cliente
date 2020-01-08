{

    let errorNombre;
    let errorFecha;
    let errorDNI;
    let btnEmpleado;
    let error;
    let errorForm = false;
    let dni;


    let datosEmpleado = function() {
        let nombre = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        let dni = document.getElementById("dni").value;
        compruebaDNI();
        try {
            let empleado;
            empleado = new Empleado(nombre, fecha, dni);
            empleado.crearNuevaVentana();
        } catch (e) {
            error.textContent = e.message;
        }
    }

    let compruebaDNI = function() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let expresionRegDNI = /(\d{8})\s?-?([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
        let cadena = dni.value.trim();
        let cadenaNueva = cadena.toUpperCase();
        let error = false;
        if (!expresionRegDNI.test(cadenaNueva)) {
            errorDNI.innerHTML = " El DNI introducido no tiene un formato correcto";
            error = true;
            errorForm = true;
        } else {
            [, numero, letra] = expresionRegDNI.exec(cadenaNueva);
            if (letras[numero % 23] != letra) {
                errorDNI.innerHTML = " La letra introducida es incorrecta";
                error = true;
                errorForm = true;
            }
        }
        if (error == false) {
            errorDNI.innerHTML = " CORRECTO";
        }

    }

    let compruebaFecha = function() {
        let expresionFecha = new RegExp("^\\d{2}([\/])\\d{2}\\1\\d{4}$");
    }

    document.addEventListener("DOMContentLoaded", function init() {
        dni = document.getElementById("dni");
        error = document.getElementById("error");
        errorDNI = document.getElementById("errorDNI");
        btnEmpleado = document.getElementById("btnEmpleado");
        btnEmpleado.addEventListener("click", datosEmpleado);

    });
}