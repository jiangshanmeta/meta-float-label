function setFocus(){
    this.isFocus = true;
}

function setBlur(){
    this.isFocus = false;
}

function isComponentVnode(vnode){
    return vnode.componentOptions;
}



export default{
    name:"meta-float-label",
    props:{
        label:{
            type:[String,Number]
        },
        placeholderField:{
            type:[String,Number],
            default:"placeholder",
        },
    },
    data(){
        return {
            isFocus:false,
        };
    },
    render(h){
        if(!this.$slots.default || !this.$slots.default[0]){
            console.warn("meta-float-label compoennt need slot element");
            return;
        }

        const vnode = this.$slots.default[0];
        console.log(vnode)

        let event;
        let value;
        let placeholder;

        if(isComponentVnode(vnode)){
            const options = vnode.componentOptions;
            if(!options.listeners){
                options.listeners = {};
            }
            event = options.listeners;
            value = options.propsData && options.propsData.value;
            placeholder = options.propsData && options.propsData[this.placeholderField];
        }else{
            if(!vnode.data){
                vnode.data = {};
            }
            const data = vnode.data;
            if(!data.on){
                data.on = {};
            }
            event = data.on;
            value = data.domProps && data.domProps.value;
            placeholder = data.attrs && data.attrs[this.placeholderField];
        }

        const label = this.label === undefined?placeholder:this.label;

        const oldFocus = event.focus;
        event.focus = function(){
            setFocus.call(this);
            oldFocus && oldFocus(...arguments)
        }.bind(this);

        const oldBlur = event.blur;
        event.blur = function(){
            setBlur.call(this);
            oldBlur && oldBlur(...arguments);
        }.bind(this);


        return h("div",{
            class:{
                'meta-has-label':true,
            }
        },[
            h("label",{
                class:{
                    'meta-float-label':true,
                    'meta-float-label-on-focus':this.isFocus,
                    'meta-float-label-active':this.isFocus || (value !== undefined && String(value))
                },
            },label),
            this.$slots.default,
        ])
    },
}