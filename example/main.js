import Vue from "vue"
import App from "./App"

import metaFloatLabel from "src"
Vue.component('metaFloatLabel',metaFloatLabel)



new Vue({
    el:"#app",
    components:{
        App,
    },
    render(h){
        return h("App");
    },
})