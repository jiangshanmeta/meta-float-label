<template>
    <main>
        <!-- <meta-float-label>
            <input placeholder="placeholder for input">
        </meta-float-label> -->

        <meta-float-label label="overwrite label">
            <meta-input placeholder="meta-input"></meta-input>
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
}
</script>