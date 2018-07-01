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

        if(!vnode.data.on){
            vnode.data.on = {};
        }
        
        const label = this.label === undefined?
            (vnode.data.attrs && vnode.data.attrs[this.placeholderField]):this.label;

        const event = vnode.data.on;

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
                },
            },label),
            this.$slots.default,
        ])
    },
}