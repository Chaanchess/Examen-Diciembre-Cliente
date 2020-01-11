/**
 * FRANCISCO JOSÉ SÁNCHEZ ROMERO
 */

let Validar = {
    compruebaNombre(nombre) {
        let regexNombre = /^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})\s([A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,})$/g;
        if (nombre.length == 0)
            return "El nombre no puede estar vacío";

        if (!regexNombre.test(nombre)) {
            return "Debes de introducir al menos tu nombre y un apellido";
        }
        else {
            return "";
        }
    },
    compruebaFecha(fecha) {
        let expresionFecha = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;

        if (fecha.length == 0)
            return "La fecha no puede estar vacía";
        else if (!expresionFecha.test(fecha))
            return "El formato de la fecha no es correcto";
        else {
            return "";
        }
    },
    compruebaDni(dni) {
        let regexNIF = new RegExp("^([\\d]{8})[-\\s]*([A-Z(^IÑOU)])$");
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        dni = dni.toUpperCase();
        if (dni.length == 0)
            return "El DNI no puede estar vacío";
        else if (!regexNIF.test(dni))
            return "El formato del DNI es incorrecto";
        let [, numeroDNI, letraDNI] = regexNIF.exec(dni);
        if (letras[numeroDNI % 23] != letraDNI)
            return "El DNI no es correcto";
        else {
            return "";
        }
    }
}