Vue.component('persons',{
    props: ['persons'],
    template: '#personsTempl',
    },
);

const vm = new Vue({
    el: 'main',
    data:{
        menssage: 'Personas',
        persons:[]
    },
    mounted(){
        axios.get('https://randomuser.me/api/?results=20').then((response)=>{
            this.persons = response.data.results;
            this.agregarEstado();
        });
    },
    methods:{
        cambiarestado(person){
            person.estado = !person.estado;
            console.log(person.estado)
        },
        agregarEstado(){;
            for (let i = 0; i < this.persons.length; i++) {
                this.$set(this.persons[i], 'estado', true); 
                
            }
        },
        restablecer(){
            for (let i = 0; i < this.persons.length; i++) {
                this.cambiarestado(this.persons[i]); 
            };
        }
    },


});
