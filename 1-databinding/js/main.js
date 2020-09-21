/*const h1 = document.addEventListener('h1');
const input = document.addEventListener('input');
*/
new Vue ({
    el : 'main',
    data: {
        mensaje: "Hola mundo",
        conectado: true,
        edad : 0,
        semana : ['lunes', 'martes', 'miercoles','jueves'],
        tareas:[
            {nombre: "sasda", prioridad: "alta"},
            {nombre: "lololj", prioridad: "baja"},
            {nombre: "vcbn", prioridad: "media"}
        ],
        persona: {
            nombre: "Harby",
            codigo: "12345",
            edad: "2"
        }
    }    
});