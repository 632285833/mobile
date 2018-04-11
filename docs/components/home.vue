<template>
	<div class="home-page">

		<div class="category-list-wrap">
			<ul class="category-list grid-list double-column">
				<li v-for="(category, key) in categoryArr" class="img-container gli" aspect-ratio="28:58:2" @click="handleSort(key)" :key="category.id">
					<img :src="category.img" v-trimImg.width>
					<div class="category-name img-desc">{{category.name}}</div>
				</li>
			</ul>
		</div>
		<div class="table-list-container">
			<div class="table-header">推荐产品</div>
			<ul class="table-list line-stripe">
				<router-link to="productDetail" class="tlr product-container lr-layout" v-for="product in productArr" tag="li">
					<div class="img-container">
						<img :src="product.img" class="product-img" onerror="this.parentNode.removeChild(this)">
					</div>
					<div class="product-info-container">
						<div class="product-title">
						     <span class="font-bold">{{product.name}}</span>
						     
						</div>
						<div class="inline-label" v-for="label in product.labelList">
							     <span>{{label}}</span>
						     </div>
						<div>{{product.sales}}人已购买</div>
						<div class="color-warning font-xl">{{product.price}}元</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		props() {
			navVisble: Boolean
		},
		data() {
			return {
				categoryArr: [{
					img: 'static/attachment/category1.png',
					name: '亲子活动'
				},{
					img: 'static/attachment/category2.png',
					name: '团队定制'
				},{
					img: 'static/attachment/category3.png',
					name: '景点门票'
				},{
					img: 'static/attachment/category4.png',
					name: '亲子酒店'
				}],
				productArr: [{
					img: 'static/attachment/img1.png',
					labelList: ['乐园', '2-5岁'],
					name: '希望在田野，回归大自然',
					posi: '福田区欢乐海岸 距8.9km',
					price: '898',
					sales: 273,

				},{
					img: 'static/attachment/img2.png',
					labelList: ['乐园', '2-5岁'],
					name: '科考营-国家地理杂志的探索团队严肃的带你入“坑”',
					posi: '福田区欢乐海岸 距8.9km',
					price: '688',
					sales: 190,

				},{
					img: 'static/attachment/img3.png',
					labelList: ['科学秀', '5-8岁'],
					name: '羽蒙科学秀-自营爆款之《冰火奇遇记》科学探索奇妙世界',
					posi: '福田区欢乐海岸 距8.9km',
					price: 898,
					sales: 835,

				},{
					img: 'static/attachment/img4.png',
					labelList: ['亲子照'],
					name: '金夫人in爱 亲子全家照，疯抢价 38.9元',
					posi: '福田区欢乐海岸 距8.9km',
					price: '189',
					sales: 674,

				},{
					img: 'static/attachment/img5.png',
					labelList: ['乐园', '2-5岁'],
					name: 'G4小记者小主播培训，全广州招募100位电视小天使！',
					posi: '福田区欢乐海岸 距8.9km',
					price: '1089',
					sales: 892,

				},{
					img: 'static/attachment/img6.png',
					labelList: ['科学秀', '8岁以上'],
					name: '世界记忆大师亲临，高效学习方法免费公开课，场场爆满，你还在等什么？',
					posi: '福田区欢乐海岸 距8.9km',
					price: 99,
					sales: 683,

				},{
					img: 'static/attachment/img7.png',
					labelList: ['探秘', '2-5岁'],
					name: '带娃探秘神秘岛，离广州仅1小时的距离！',
					posi: '福田区欢乐海岸 距8.9km',
					price: '178',
					sales: 1848,

				},]
			}
		},
		methods: {
			handleSort(key) {
				var navTitle = this.categoryArr[key].name;
				var productArr = this.productArr;
				var query = { navTitle: navTitle, productArr: productArr };

				this.$router.push({path: 'productList', query: query});
			}
		}
	}
</script>