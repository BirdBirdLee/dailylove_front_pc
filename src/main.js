import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import iView from 'iview'
import router from './router/router.js'
import 'iview/dist/styles/iview.css'
import './plugins/iview.js'
import './plugins/axios.js'
import globalData from './utils/globalData.js'
import VueClipboard from 'vue-clipboard2'
// import VueCookies from 'vue-cookies'
import vueScroller from 'vue-scroller';
import { PullRefresh } from 'vant';


// Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueClipboard);
// Vue.use(VueCookies);
Vue.use(vueScroller);
Vue.use(PullRefresh);


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

//全局变量
Vue.prototype.globalData = globalData

//全局服务器基地址属性
// Vue.prototype.serverUrl = "http://127.0.0.1:8080/dailylove"
Vue.prototype.serverUrl = "http://tcualhp.cn:8080/dailylove"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
