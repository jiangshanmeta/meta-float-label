function setFocus(){
    this.isFocus = true;
}

function setBlur(){
    this.isFocus = false;
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
        if(!vnode.data){
            vnode.data = {};
        }

        const data = vnode.data;

        if(!data.on){
            data.on = {};
        }
        
        const label = this.label === undefined?
            (data.attrs && data.attrs[this.placeholderField]):this.label;

        const event = data.on;

        const oldFocus = event.focus;
        event.focus = function(e){
            setFocus.call(this);
            oldFocus && oldFocus(...arguments)
        }.bind(this);

        const oldBlur = event.blur;
        event.blur = function(e){
            setBlur.call(this);
            oldBlur && oldBlur(...arguments);
        }.bind(this);

        const value = vnode.componentOptions?
            (data.props && data.props.value):
            (data.domProps && data.domProps.value);
        
        console.log(value)

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