{

    let btnEmpleado;
    let error;



    let datosEmpleado = function() {
        let nombre = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        let dni = document.getElementById("dni").value;
        try {
            let empleado;
            empleado = new Empleado(nombre, fecha, dni);
            empleado.crearNuevaVentana();
        } catch (e) {
            error.textContent = e.message;
        }
    }


    document.addEventListener("DOMContentLoaded", function init() {
        dni = document.getElementById("dni");
        error = document.getElementById("error");
        btnEmpleado = document.getElementById("btnEmpleado");
        btnEmpleado.addEventListener("click", datosEmpleado);

    });
}