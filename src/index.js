export default{
    name:"meta-float-label",
    props:{
        label:{
            type:[String,Number]
        },
    },
    render(h){
        if(!this.$slots.default || !this.$slots.default[0]){
            console.warn("meta-float-label compoennt need slot element");
            return;
        }

        const vnode = this.$slots.default[0];
        console.log(vnode)
        if(!vnode.data){
            vnode.data = {};
        }

        if(!vnode.data.on){
            vnode.data.on = {};
        }

        const event = vnode.data.on;

        event.focus = function(){
            console.log(456);
        }


        return h("div",{
            class:{
                'meta-has-label':true,
            }
        },[
            h("label",{
                class:{
                    'meta-float-label':true,
                },
            },"template label"),
            this.$slots.default,
        ])
    },
}