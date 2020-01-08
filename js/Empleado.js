/**
 * FRANCISCO JOSÉ SÁNCHEZ ROMERO
 */
{


    function Empleado(nombre, fecha, dni) {
        this.setNombre(nombre);
        this.setFecha(fecha);
        this.setDNI(dni);
    }

    Empleado.prototype.setNombre = function(nombre) {
        if (nombre == "") {
            throw new Error("El nombre no puede estar vacío");
        }
        this.nombre = nombre;
    }

    Empleado.prototype.setFecha = function(fecha) {
        if (fecha == "") {
            throw new Error("La fecha no puede estar vacía");
        }
        this.fecha = fecha;
    }

    Empleado.prototype.setDNI = function(dni) {
        if (dni == "") {
            throw new Error("El DNI no puede estar vacío");
        }
        this.dni = dni;
    }

    Empleado.prototype.crearNuevaVentana = function() {
        let ventana = open("", "", "height=600px;width=500px");
        let mensaje = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Información del empleado</title>
    </head>
    <body>
        <h1>Francisco José Sánchez Romero</h1>
        <p>Nombre del empleado: ${this.nombre}<p>
        <p>Fecha: ${this.fecha}<p>
        <p>DNI del empleado: ${this.dni}<p>
    </body>
    </html>`;
        ventana.document.open();
        ventana.document.write(mensaje);
        ventana.document.close();
    }
}