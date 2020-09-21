Vue.component('newpersons',{
    template:'#persons-template',
    mounted(){
        axios.get('https://randomuser.me/api/?results=10').then((response)=>{
            this.persons = response.data.results
        });
    },

    data(){
        return{
            persons:[], 
        }
    },
})

Vue.component('persons-temple',{
    props: ['persons'],
    template: '#persons-template',
    
});

const vm = new Vue({
    el: 'main',
    mounted(){
        this.getPersons();
    },

    data:{
        menssage:"asda",
        persons:[],
        
    },

    methods:{
        getPersons(){
            axios.get('https://randomuser.me/api/?results=100').then((response)=>{
                this.persons = response.data.results
            });
        },
    }
});