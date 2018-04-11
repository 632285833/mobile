import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import home from '../components/home'
import productDetail from '../components/productDetail'
import guestInfo from '../components/guestInfo'
import payment from '../components/payment'
import productSpecs from '../components/productSpecs'
import paymentResult from '../components/paymentResult'
import me from '../components/me'
import myOrders from '../components/myOrders'
import myFamily from '../components/myFamily'
import addAdult from '../components/addAdult'
import addChild from '../components/addChild'
import orderDetail from '../components/orderDetail'
import productList from '../components/productList'
import myAddress from '../components/myAddress'
import contactUs from '../components/contactUs'
import avatar from '../components/avatar'
import myCollections from '../components/myCollections'
import navBarView from '../components/navBarView'
import tabBarController from '../components/tabBarController'
import mobileVerification from '../components/mobileVerification'
import iAmTalent from '../components/iAmTalent'
import myShare from '../components/myShare'
import myCustomers from '../components/myCustomers'
import myTalents from '../components/myTalents'
import commissionDetail from '../components/commissionDetail'
import withdraw from '../components/withdraw'
import withdrawResult from '../components/withdrawResult'
import test from '../components/test'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: tabBarController,
		children: [{ 
			path: '', 
			component: test,
		},{
			path: '/productList', 
			component: productList,
		},{
			path: 'me', 
			component: me 
		},{
			path: 'productDetail',	
			component: productDetail,

		},{
			path: 'navBarView',
			component: navBarView,
			children: [{
				path: 'productSpecs',	
				component: productSpecs,
				meta: {navTitle: '请选择产品信息'},
			},{
				path: 'guestInfo',	
				component: guestInfo,
				meta: {navTitle: '请选择客人信息'}
			},{
				path: 'payment',	
				component: payment,
				meta: {navTitle: '请支付订单'}
			},{
				path: 'paymentResult',	
				component: paymentResult,
				meta: {navTitle: '订单支付成功'}
			},{
				path: 'myOrders',	
				component: myOrders,
				meta: {navTitle: '我的订单'}
			},{
				path: 'orderDetail',	
				component: orderDetail,
				meta: {navTitle: '订单详情'}
			},{
				path: 'myAddress',	
				component: myAddress,
				meta: {navTitle: '我的地址'}
			},{
				path: 'myCollections',	
				component: myCollections,
				meta: {navTitle: '我的收藏'}
			},{
				path: 'myFamily',	
				component: myFamily,
				meta: {navTitle: '我的家人'}
			},{
				path: 'contactUs',	
				component: contactUs,
				meta: {navTitle: '联系羽蒙'}
			},{
				path: 'avatar',	
				component: avatar,
				meta: {navTitle: '账户信息'}
			},{
				path: 'addAdult',	
				component: addAdult,
				meta: {navTitle: '添加成人'}
			},{
				path: 'addChild',	
				component: addChild,
				meta: {navTitle: '添加儿童'}
			},{
				path: 'mobileVerification',	
				component: mobileVerification,
				meta: {navTitle: '验证手机号'}
			},{
				path: 'iAmTalent',	
				component: iAmTalent,
				meta: {navTitle: '我是达人'}
			},{
				path: 'myShare',	
				component: myShare,
				meta: {navTitle: '我的分享'}
			},{
				path: 'myCustomers',	
				component: myCustomers,
				meta: {navTitle: '我的客户'}
			},{
				path: 'myTalents',	
				component: myTalents,
				meta: {navTitle: '我邀请的达人'}
			},{
				path: 'commissionDetail',	
				component: commissionDetail,
				meta: {navTitle: '收益详情'}
			},{
				path: 'withdraw',	
				component: withdraw,
				meta: {navTitle: '提现'}
			},{
				path: 'withdrawResult',	
				component: withdrawResult,
				meta: {navTitle: '已提交申请'}
			}]
		}]
	}]
})
