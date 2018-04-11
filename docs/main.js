// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fui from '../src/index'
import $ from 'jQuery'
import './scss/main.scss'
import toggleList from 'src/directives/toggleList'
import trimImg from 'src/directives/trimImg'
import checkList from 'src/directives/checkList'
Vue.use(Fui);




router.afterEach((to, from, next) => {
	window.scrollTo(0,0)
})
Vue.directive('toggleList', toggleList);
Vue.directive('trimImg', trimImg);
Vue.directive('checkList', checkList);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
