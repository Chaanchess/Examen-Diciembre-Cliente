{

    let btnEmpleado;
    let error;
    let nombre;
    let fecha;
    let dni;



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
        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        dni = document.getElementById("dni");
        btnEmpleado = document.getElementById("btnEmpleado");

        error = document.getElementById("error");

        nombre.addEventListener("blur",datosEmpleado);
        fecha.addEventListener("blur",datosEmpleado);
        dni.addEventListener("blur",datosEmpleado);
        btnEmpleado.addEventListener("click", datosEmpleado);

    });
}