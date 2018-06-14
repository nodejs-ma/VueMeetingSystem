// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

Vue.use(Vuex)
const store = new Vuex.Store({//store对象
    state: {
        isLogin: false,
        count: 0
    },
    mutations: {
    	increment(state) {
    		state.count++;
    	},
    	changeLogin(state) {
    		state.isLogin = !state.isLogin;
    	}
    }
});

router.beforeEach((to, from, next) => {
	if(store.state.isLogin == false) {
		if(to.path == '/meetshow' || to.path == '/meetreserve') {
			next(false);
			alert('您还没有登录，请先登录');
		} else {
			next();
		}
	} else {
		if(to.path == '/login' || to.path == '/register') {
			next(false);
			alert('您已登录，请勿重复登录');
		} else {
			next();
		}
	}
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
