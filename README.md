# meta-float-label

尝试实现[vue-float-label](https://github.com/bkzl/vue-float-label)

vue-float-label实现了这么一个效果：

```html
<float-label>
    <input type="text" placeholder="Label">
</float-label>
```

用float-label组价包裹input后，当input获取焦点后，出现一个label。

这里的难点在于float-label组件如何和input进行交互，包括如何获取到focus事件，如何获取到placeholder值。

我的解决方案是使用vnode。通过```this.$slots.default[0]```可以获取slot中的vnode，然后需要分两种情况考虑，一种是slot中是一个组件，一种是slot中是DOM元素，这两种情况获取事件和属性的方法是不一致的。

那我们如何判断是组件还是DOM节点呢？我的解决方案是通过vnode.componentOptions。

对于组件，可以通过vnode.componentOptions.listeners获取事件，通过vnode.componentOptions.propsData获取向下传递的属性。

对于DOM元素，可以通过vnode.data.on获取事件，通过vnode.data.domProps获取属性。

获取事件之后呢？当然是要重载事件了

```javascript
const oldFocus = event.focus;
event.focus = function(){
    setFocus.call(this);
    // 保留原来的事件
    oldFocus && oldFocus(...arguments)
}.bind(this);
```


这就是我实现的基本思路，后来我看了一下原作者的实现，发现是用的DOM操作。所以原作者的组件不能很好地支持slot传组件的形式。

