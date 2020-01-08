/**
 * FRANCISCO JOSÉ SÁNCHEZ ROMERO
 */

{

    let diaActual;
    let mensaje;
    let butonSalir;
    let horaActual;
    let fechaActual = new Date();

    let muestraDia = function() {
        let dia = fechaActual.getDay();
        if (dia == 1) {
            dia = "Lunes";
        } else if (dia == 2) {
            dia = "Martes";
        } else if (dia == 3) {
            dia = "Miércoles";
        } else if (dia == 4) {
            dia = "Jueves";
        } else if (dia == 5) {
            dia = "Viernes";
        } else if (dia == 6) {
            dia = "Sábado"
        } else if (dia == 7) {
            dia = "Domingo";
        }
        diaActual.textContent += dia;
    }

    let muestraHora = function() {
        hora = fechaActual.getHours();
        if (hora < 10) {
            hora = "0" + hora;
        }
        minutos = fechaActual.getMinutes();
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        horaActual.textContent += hora + ":" + minutos;
    }

    let muestraMensaje = function() {
        hora = fechaActual.getHours();
        minutos = fechaActual.getMinutes();
        if (hora > 18) {
            mensaje.textContent += "Son las " + hora + ":" + minutos + ". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar.";
        }
        if (hora < 8) {
            mensaje.textContent += "Son las " + hora + ":" + minutos + ". Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        }
        if (hora > 8 && hora < 18) {
            mensaje.textContent += "Son las " + hora + ":" + minutos + ". Pronto llegan las vacaciones. Aguanta.";
        }
    }

    let cerrarVentana = function() {
        window.close();
    }

    document.addEventListener("DOMContentLoaded", function init() {
        diaActual = document.getElementById("diaActual");
        horaActual = document.getElementById("horaActual");
        mensaje = document.getElementById("mensaje");
        butonSalir = document.getElementById("btnSalir");
        muestraDia();
        muestraHora();
        muestraMensaje();

        butonSalir.addEventListener("click", cerrarVentana);
    });
}