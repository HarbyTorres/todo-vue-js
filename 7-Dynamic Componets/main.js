Vue.component('los-programas',{
    template: '#template-lista',
    data(){
        return{
            lista:[
                'Office',
                'Adobe Ilustrator',
                'Mcfee',
                'Photoshot'
            ],
        }
    }

});

Vue.component('los-juegos',{
    template: '#template-lista',
    data(){
        return{
            lista:[
                'Gta V',
                'Warzone',
                'Call of duty',
                'Fifa 21'
            ],
        }
    }
});
Vue.component('las-peliculas',{
    template: '#template-lista',
    data(){
        return{
            lista:[
                'Terminator',
                'Rambo',
                'Parasite'
            ]
        }
    }
});
Vue.component('contrasena',{
    props:['contrasena'],
    template:'#contrasena-template',
    methods:{
        comprobarContrasena(contrasena){
            if( this.noValidas.includes(contrasena)){
                this.$refs.pass.value = contrasena='';
            }
            this.$emit('input', contrasena)
        }
    },
    data(){
        return{
            noValidas:[
                'abcd', 'admin','root','1234'
            ],
        }

    }
})

new Vue({
    el: 'main',
    data:{
        selecionado:'los-programas',
        contrasena:"asddasd"
    }
});