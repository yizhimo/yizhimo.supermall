import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast/index'


Vue.config.productionTip = false

// 给$bus赋值vue实例才能发射事件
// 兄弟间的事件传递
Vue.prototype.$bus = new Vue()

//安装toast插件
//安装好后,就会调用toast里install方法
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
