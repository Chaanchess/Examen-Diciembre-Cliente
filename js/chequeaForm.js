/**
 * FRANCISCO JOSÉ SÁNCHEZ ROMERO
 */
{
    let compruebaNombre = function(){
        return spanErrorNombre.innerHTML = Validar.compruebaNombre(nombre.value);
    }
    let compruebaFecha = function(){
        return spanErrorFecha.innerHTML = Validar.compruebaFecha(fecha.value);
    }
    let compruebaDNI = function(){
        return spanErrorDni.innerHTML = Validar.compruebaDni(dni.value);
    }
    let nuevoEmpleado = function(){

        let cadena = compruebaNombre() + compruebaFecha() + compruebaDNI();
        if(cadena.length === 0){

            let empleado = new Empleado(document.getElementById("nombre").value,
                                    document.getElementById("fecha").value,
                                    document.getElementById("dni").value
                                    );

            empleado.crearNuevaVentana();

            nombre.value = dni.value = fecha.value = "";
        }
    }

    document.addEventListener("DOMContentLoaded", function init() {
        boton = document.getElementById("btnEmpleado");

        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        dni = document.getElementById("dni");
        spanErrorNombre = document.getElementById("errorNombre");
        spanErrorFecha = document.getElementById("errorFecha");
        spanErrorDni = document.getElementById("errorDNI")

        fecha.addEventListener("blur",compruebaFecha);
        nombre.addEventListener("blur",compruebaNombre);
        dni.addEventListener("blur", compruebaDNI);
        boton.addEventListener("click", nuevoEmpleado);
    });
}