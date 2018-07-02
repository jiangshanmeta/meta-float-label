<template>
    <section>
        <input 
            v-model="model" 
            :placeholder="placeholder" 
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        >
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