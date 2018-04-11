<template>
	<div class="my-orders-page table-list-container page">
		<ul class="table-list line-stripe">
			<router-link tag="li" to="orderDetail" v-for="order in orderArr" :key="order.id" class="tlr">
			<div class="tlr-title">{{order.name}}
			<span class="inline-label inline-label-warning" v-if="order.state">{{order.state}}</span>
			</div>
				<div class="tlr-content d-flex justify-content-between">
					<div>
						<span>时间：{{order.date}}<br></span>
						<span>规格：{{order.spec}}<br></span>
						<span>客人：{{order.guests}}<br></span>
						<span>数量：{{order.num}}<br></span>
						<span>价格：{{order.price}}</span>
					</div>
					<div class="img-container">
						<img :src="order.img" v-trimImg.height>
					</div>
				</div>
				<uButton class="pay-button" v-if="order.state==='待付款'">立即支付</uButton>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				orderArr: [{
					name: '希望在田野，回归大自然',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					state: '待付款',

					img: 'static/attachment/product1.png'
				},{
					name: '科考营-国家地理杂志的探索团队严肃的带你入“坑”',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					state: '服务中',
					img: 'static/attachment/product6.png'
				},{
					name: '羽蒙科学秀-自营爆款之《冰火奇遇记》科学探索奇妙世界',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					img: 'static/attachment/product2.png'
				},{
					name: '金夫人in爱 亲子全家照，疯抢价 38.9元',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					img: 'static/attachment/product3.png'
				},{
					name: 'G4小记者小主播培训，全广州招募100位电视小天使！',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					img: 'static/attachment/product4.png'
				},{
					name: '世界记忆大师亲临，高效学习方法免费公开课，场场爆满，你还在等什么？',
					date: '01月12日   09:00-12:00',
					spec: '两大一小',
					guests: '张宇华、田小萌、张雨沫',
					num: '1',
					price: '$983',
					img: 'static/attachment/product5.png'
				},]
			}
		}
	}
</script>