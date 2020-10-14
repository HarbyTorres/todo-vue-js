import Vue from 'vue';
import Vuex, { mapActions } from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
         persona: null,
    },
    getters:{
        cargarPersona: (state) => axios.get('https://randomuser.me/api/').then((response)=> state.persona = response.data.results[0]) 
    },
    mutations: {
        actualizar: (state) => axios.get('https://randomuser.me/api/').then((response)=> state.persona = response.data.results[0]) 
    },
    actions: {
        actualizarAsync: (context) => context.commit('actualizar')
    }
})