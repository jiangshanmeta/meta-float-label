import Vue from "vue"
import App from "./App"

import metaFloatLabel from "src"

new Vue({
    el:"#app",
    components:{
        App,
        metaFloatLabel
    },
    render(h){
        return h("App");
    },
})