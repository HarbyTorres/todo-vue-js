Vue.component('persons',{
    template: '#personsTempl',
    mounted(){
        axios.get('https://randomuser.me/api/?results=20').then((response)=>{
            this.persons = response.data.results;
            this.agregarEstado();
        });

    },

    methods:{
        tachar(person){
            person.estado = !person.estado;
            console.log(person.estado)
        },
        agregarEstado(){;
            for (let i = 0; i < this.persons.length; i++) {
                this.$set(this.persons[i], 'estado', false); 
                
            }
 
            console.log(this.persons.length)
        }
    },

    data(){
        return{
            persons:[],
        }
    },
    computed: {
        
    },
});

const vm = new Vue({
    el: 'main',
    data:{
        menssage: 'Personas',
    },

});
