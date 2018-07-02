<template>
    <main>
        <meta-float-label>
            <input 
                placeholder="placeholder for input"
                @focus="handleFocus"
                v-model="inputvalue"
            >
        </meta-float-label>
        {{inputvalue}}

        <meta-float-label label="overwrite label">
            <meta-input 
                placeholder="meta-input"
                v-model="inputvalue"
                @focus="handleFocus"
            ></meta-input>
        </meta-float-label>
    </main>
</template>

<script>
import metaInput from "./meta-input"

export default{
    components:{
        metaInput,
    },
    data(){
        return {
            inputvalue:""
        }
    },
    methods:{
        handleFocus(){
            console.log("outer focus ",arguments)
        }
    },
}
</script>