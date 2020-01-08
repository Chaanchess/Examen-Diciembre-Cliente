/**
 * FRANCISCO JOSÉ SÁNCHEZ ROMERO
 */
{
    let enlace;
    let botonEmpleado;


    let crearDeTodoUnPoco = function() {
        let ventana = window.open("", "", "width=800,height=600");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Francisco José Sánchez Romero</title>
            <script src="js/ventanaDeTodo.js"></script>
        </head>
        
        <body>
            <h1>Francisco José Sánchez Romero</h1>
            <main>
            <p id='diaActual'>El día es: </p>
            <p id='horaActual'>La hora es: </p>
            <p id='mensaje'>AVISO: </p>
            <input type='button' value='Salir' id='btnSalir'/>  
            </main>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();

    }

    let crearFormularioEmpleado = function() {
        let ventana = window.open("", "", "width=800,height=600");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Francisco José Sánchez Romero</title>
            <script src="js/Empleado.js"></script>
            <script src="js/validar.js"></script>
        </head>
        
        <body>
            <h1>Francisco José Sánchez Romero</h1>
               Nombre del empleado:<input type'text' id='nombre'/>
               <br/>
               <br/>
               Fecha:<input type'text' id='fecha'/>
               <br/>
               <br/>
               DNI del empleado:<input type'text' id='dni'/><span id="errorDNI"></span>
               <br/>
               <br/>
               <input type='button' value='Nuevo empleado' id='btnEmpleado'/>
               <span id='error'></span>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
    }



    document.addEventListener("DOMContentLoaded", function init() {
        enlace = document.getElementById("enlace");
        botonEmpleado = document.getElementById("botonEmpleado");

        enlace.addEventListener("click", crearDeTodoUnPoco);
        botonEmpleado.addEventListener("click", crearFormularioEmpleado);
    });






}