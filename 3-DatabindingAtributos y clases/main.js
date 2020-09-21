const vm = new Vue({
    el: 'main',
    data:{
        mensaje: 'Tareas ',
        tareas:[
            {
                nombre:'aprenderTa vue',
                completado: false
                
            },
            {
                nombre: 'univeridad',
                completado: false
            },
            {
                nombre: 'sadasd',
                completado: false

            },
            {
                nombre: 'trabajos',
                completado: false
            }
        ]

    },

/*     updated: function(){
        console.log( 'update '+this.mensaje)
    },

    beforeUpdate: function(){
        console.log( 'beforeUpdate '+this.mensaje)
    }, */

    methods:{
        alreves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
        },

        completar(tarea){
            tarea.completado = !tarea.completado;
        }
    },

    computed:{
        tareasCompletas(){
            return this.tareas.filter((tarea)=>tarea.completado);
        }  
        
    }
    
});