const app = new Vue ({
    el : 'main',
    data:{
        busqueda:'',
        antiguedadMin : 5,
        nuevatarea : null,
        tareas:[
            {
                nombre:'aprender vue',
                prioridad: true,
                antiguedad: 9
            },
            {
                nombre: 'univeridad',
                prioridad: false,
                antiguedad: 6
            },
            {
                nombre: 'sadasd',
                prioridad: false,
                antiguedad: 8,

            },
            {
                nombre: 'trabajos',
                prioridad: true,
                antiguedad: 1,
            }
        ]
    },
    methods: {
        agregartarea(){
            this.tareas.unshift(this.nuevatarea);
            this.nuevatarea = '';
        }
    },
    computed: {
        tareasPrioridad(){
            return this.tareas.filter((tareas)=>tareas.prioridad);
        },
        tareasAntiguedad(){
            return this.tareas.sort((a,b)=>a.antiguedad-b.antiguedad);
        },
        tareasfiltrarAnt(){
            return this.tareas.filter((tareas)=>tareas.antiguedad >= this.antiguedadMin);
        },
        buscarTareas(){
            return this.tareas.filter((tareas)=>tareas.nombre.includes(this.busqueda));
        }

        
    }
});