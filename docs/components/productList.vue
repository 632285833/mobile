<template>
	<div class="product-list-page">
	    <modal 
	    @onCancle="closeModal('dataModalVis')" 
	    :vis="boolList['dataModalVis']"
	    :cancelVis="true"
	    type="alertAction"
	    >
	    <div class="font-md">订单：NG023449394已被取消，请及时确认！</div>
	    </modal>
	     <modal 
	    @onCancle="closeModal('sortModalVis')" 
	    :vis="boolList['sortModalVis']" 
	    ref="sortModal">
	        <div slot="header" class="font-xxl font-bold">排序方式</div>       
	    	<ul class="table-list line-stripe check-list" v-toggleList:sortModalVis.first="closeSortModal" ref="aaa">
	    		<li class="tlr"><div class="tlr-title">默认排序</div></li>
	    		<li class="tlr"><div class="tlr-title">即将开始</div></li>
	    		<li class="tlr"><div class="tlr-title">底价排序</div></li>
	    		<li class="tlr"><div class="tlr-title">高价排序</div></li>
	    		<li class="tlr"><div class="tlr-title">佣金排序</div></li>
	    	</ul>
	    </modal>
	     <modal 
	    @onCancle="closeModal('filterModalVis')" 
	    :vis="boolList['filterModalVis']" 
	    class="has-footer"
	    >
	    <div class="font-xxl font-bold" slot="header"><div>筛选条件</div></div>
	        
	    	<ul class="table-list">
	    		<li class="tlr">
	    		    <div class="tlr-title">产品类型</div>
	    		    <div class="tlr-content">
						<ul class="grid-list triple-column" v-checkList>
							<li v-for="type in typeArr" :key="type.id" class="gli checkbox-button">{{type}}</li>
						</ul>
					</div>
	    		</li>
	    		<li class="tlr">
	    		    <div class="tlr-title">年龄段</div>
	    		    <div class="tlr-content">
	    		    	<ul class="grid-list triple-column" v-checkList>
							<li class="gli radio-button">1-3岁</li>
							<li class="gli radio-button">3-5岁</li>
							<li class="gli radio-button">5-7岁</li>
							<li class="gli radio-button">7-9岁</li>
							<li class="gli radio-button">10岁以上</li>
						</ul>
	    		    </div>
	    		</li>
	    		<li class="tlr">
	    		    <div class="tlr-title">产品类型</div>
	    		    <div class="tlr-content">
						<ul class="grid-list triple-column" v-checkList>
							<li v-for="type in typeArr" :key="type.id" class="gli radio-button">{{type}}</li>
						</ul>
					</div>
	    		</li>
	    		<li class="tlr">
	    		    <div class="tlr-title">年龄段</div>
	    		    <div class="tlr-content">
	    		    	<ul class="grid-list triple-column" v-checkList>
							<li v-for="age in ageArr" class="gli radio-button">{{age}}</li>
						</ul>
	    		    </div>
	    		</li>
	    	</ul>
	    <footerBar slot="footer" class="p-relative solo">
	    	<uButton class="save-button" :path="'paymentResult'">保存</uButton>
	    </footerBar>
	    </modal>
		
		<div class="table-list-container">
			<div class="table-header fixed-top d-flex justify-content-between">
				<span>{{navTitle}}</span>
			    <div class="filter-container d-flex justify-content-between">
			    	<span @click="toggle('dataModalVis')">日期</span>
			        <span @click="toggle('sortModalVis')">排序</span>
			        <span @click="toggle('filterModalVis')">筛选</span>
			    </div>
			</div>
			<ul class="table-list line-stripe product-list">
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
						<div class="color-warning font-xl">{{product.price}}</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
    import Emitter from 'src/mixins/emitter';
	export default {
		mixins: [ Emitter ],
		computed: {
			navTitle: function() {
				if (this.$route.query.navTitle) {
					return this.$route.query.navTitle
				} else {
					return '全部产品'
				}
			},
			productArr: function() {
				if (this.$route.query.navTitle) {
					return this.$route.query.productArr;
				} else {
					return this.productArrs
				}
			}
		},
		data() {
			return {
                typeArr: ['全部', '社会实践', '贵族运动', '户外运动', '科学探索', '音乐之旅'],
                ageArr: ['1-3岁', '3-5岁', '5-7岁', '7-9岁', '10岁以上'],
				boolList: { dataModalVis: false, sortModalVis: false, filterModalVis: false },
				productArrs: [{
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
			toggle(bool) {
			    this.boolList[bool] = !this.boolList[bool]
			},
			closeSortModal() {
				var _this = this;
				setTimeout(function() {
					_this.$refs.sortModal.close();
				},100)
			},
			closeModal(bool) {
				this.boolList[bool] = false
			}
		},
	}
</script>