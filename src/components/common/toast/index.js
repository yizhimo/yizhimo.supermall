import Toast from './Toast.vue'

const obj = {}
obj.install = function(Vue) {
    //创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    //new一个组件对象
    const toast = new toastContrustor()
    //将组件对象手动挂载到一个元素上
    toast.$mount(document.createElement('div'))
    //toast.$el此时对应就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}


export default obj