<template>
    <div>
        <div v-if="persona">
            <button @click="actualizarAsync"> Reload</button>
            <h1 v-text="persona.name.first"></h1>
            <h1 v-text="persona.email"></h1>
            <img :src= "persona.picture.large">
        </div>
        <span v-else> <h2>Cargado persona...</h2> </span>
    </div>
</template>

<script>
import axios from 'axios';
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
    export default {
        mounted(){
            this.$store.getters.cargarPersona;
         /*   this.cargarPersonas();*/
        ;
        },
        computed: mapState(['persona']),
        /*
        computed: mapState({
            persona: (state)=> state.persona
        }),
        
        computed:{
            datosPersona(){ 
                return{
                    nombre: this.$store.state.persona.name.first,
                    foto: this.$store.state.persona.picture.large,
                    email: this.$store.state.persona.email,
                }
            },
            persona(){
                return this.$store.state.persona
            }

        },
        */
        methods: mapActions(['actualizarAsync'])
        /*{
        mapMutations(['actualizar'])
        
            recargar(){
                axios.get('https://randomuser.me/api/').then((response)=>{
                this.$store.state.persona = response.data.results[0];
                })
            },
            actualizar(){
                this.$store.dispatch('actualizarAsync');
            }
        }*/
        
    }

</script>