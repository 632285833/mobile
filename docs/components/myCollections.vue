<template>
	<div class="my-collections-page table-list-container page">
		<ul class="card-item-list">
		    <router-link v-for="product in productArr" to="navBarView/productDetail" tag="li" :key="product.id">
				<div class="img-container" aspect-ratio="28:58">
					<img :src="product.img" v-trimImg.width>
				</div>
				<div class="item-info-container">
					<div class="item-name">
						{{product.name}}
						<span class="inline-label" v-for="label in product.labelList">{{label}}</span>
					</div>
					<div class="item-group" style="margin-top:0.2rem">
						<span class="starting-price">{{product.price}}</span>
						<span class="color-light">{{product.sales}}人已报名</span>
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				productArr: [{
					img: 'static/attachment/product1.png',
					labelList: ['乐园', '2-5岁'],
					name: '希望在田野，回归大自然',
					posi: '福田区欢乐海岸 距8.9km',
					price: '898',
					sales: 273,

				},{
					img: 'static/attachment/product2.png',
					labelList: ['乐园', '2-5岁'],
					name: '科考营-国家地理杂志的探索团队严肃的带你入“坑”',
					posi: '福田区欢乐海岸 距8.9km',
					price: '688',
					sales: 190,

				},{
					img: 'static/attachment/product3.png',
					labelList: ['科学秀', '5-8岁'],
					name: '羽蒙科学秀-自营爆款之《冰火奇遇记》科学探索奇妙世界',
					posi: '福田区欢乐海岸 距8.9km',
					price: 898,
					sales: 835,

				},{
					img: 'static/attachment/product4.png',
					labelList: ['亲子照'],
					name: '金夫人in爱 亲子全家照，疯抢价 38.9元',
					posi: '福田区欢乐海岸 距8.9km',
					price: '189',
					sales: 674,

				},{
					img: 'static/attachment/product5.png',
					labelList: ['乐园', '2-5岁'],
					name: 'G4小记者小主播培训，全广州招募100位电视小天使！',
					posi: '福田区欢乐海岸 距8.9km',
					price: '1089',
					sales: 892,

				},{
					img: 'static/attachment/product6.png',
					labelList: ['科学秀', '8岁以上'],
					name: '世界记忆大师亲临，高效学习方法免费公开课，场场爆满，你还在等什么？',
					posi: '福田区欢乐海岸 距8.9km',
					price: 99,
					sales: 683,

				},{
					img: 'static/attachment/product7.png',
					labelList: ['探秘', '2-5岁'],
					name: '带娃探秘神秘岛，离广州仅1小时的距离！',
					posi: '福田区欢乐海岸 距8.9km',
					price: '178',
					sales: 1848,

				},]
			}
		}
	}
</script>