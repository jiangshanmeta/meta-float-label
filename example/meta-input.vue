<template>
    <section>
        <input v-model="model" :placeholder="placeholder">
    </section>
</template>

<script>
export default{
    props:{
        value:{},
        placeholder:{},
    },
    computed:{
        model:{
            get(){
                return this.value;
            },
            set(val){
                this.$emit("input",val)
            },
        },
    },
}
</script>