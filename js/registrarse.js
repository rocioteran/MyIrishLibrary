const MiFormulario = Vue.createApp ({
    el:"#app",
    data() {
        return {
            firstname: "",
            lastname:"",
            birthyear:"",
        }
        
    }
});

MiFormulario.mount('#app');