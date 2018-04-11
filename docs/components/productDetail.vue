<template>
	<div class="has-footer page">
		<modal :visible="boolList['contactVisible']" :isFullHeight="true" @close="toggle('contactVisible')" >
			<div class="contact-service h-v-center">
				<img src="static/attachment/QR-code.png">
				<div>扫码联系客服</div>
			</div>
		</modal>
		<navBar class="black-gradient-mask"><div><uSVG viewBox="0 0 10 4" :id="'#i-heart'" class="stroke"></uSVG></div></navBar>
		<div class="product-detail-content">
			<div class="img-container bridge-gradient-mask" aspect-ratio="1:2">
				<img :src="product.img" v-trimImg>
			</div>
			<div class="product-info-wrap table-list-container">
				<ul class="product-info-list table-list line-stripe">
					<li class="tlr border-none">
						<div class="tlr-title">
							{{product.name}}
							<div class="inline-label" v-for="label in product.labelList">
							     <span>{{label}}</span>
						     </div>
						</div>
						<div class="tlr-content space-between">
							<span class="color-warning font-max font-bold">{{product.price}}</span>
						</div>
					</li>
					<li class="tlr">
						<div class="tlr-title">{{product.sales}}人已报名</div>
						<div class="tlr-content row-group avatar-list flex-nowrap" ref="avatarList">
							<img v-for="avatar in product.avatarList" :src="avatar" class="involved-avatar">
						</div>
					</li>
					<li class="tlr arrow">
						<div class="tlr-title">活动时间</div>
						<div class="tlr-content">1月6日周六起</div>
					</li>
					<li class="tlr arrow">
						<div class="tlr-title">活动地点</div>
						<div class="tlr-content">{{product.posi}}</div>
					</li>
					<li class="tlr">
						<div class="tlr-title">产品介绍</div>
						<div class="tlr-content">
							沙盘心理游戏<br>
							探索孩子内心不愿意说的秘密<br>
							探索孩子内心不可不知的秘密<br>
							探索孩子内心世界<a class="text-button">查看更多</a>
						</div>
					</li>
					<li class="tlr">
						<div class="tlr-title">预订须知</div>
						<div class="tlr-content">
							有效时间：使用日期1日内有效,每天的19:30-21:30可使用<br>
							购买时间：请至少当天17点20分前购买<br>
							购买限制：同一身份证在1天内最多只能预订5张；同一手机号在1天内最多只能预订5张<br>
						</div>
					</li>
				</ul>
			</div>
			<footerBar isAnimated="true" class="row-group">
				<div class="flex-grow-1 color-darkgray" @click="toggle('contactVisible')">联系客服</div>
				<uButton class="share-button">分享5赚元</uButton>
				<uButton :path="'navBarView/productSpecs'">立即报名</uButton>
			</footerBar>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				product: {
					img: 'static/attachment/product2.png',
					labelList: ['乐园', '2-5岁'],
					name: '科考营-国家地理杂志的探索团队严肃的带你入“坑”',
					posi: '福田区欢乐海岸 距8.9km',
					price: '898',
					sales: 273,
					avatarList: ['static/attachment/avatar1.png','static/attachment/avatar2.png','static/attachment/avatar3.png','static/attachment/avatar4.png','static/attachment/avatar5.png','static/attachment/avatar6.png','static/attachment/avatar1.png','static/attachment/avatar2.png','static/attachment/avatar3.png','static/attachment/avatar4.png','static/attachment/avatar5.png','static/attachment/avatar6.png'],
				},
				boolList: {contactVisible: false}
			}
		},
		methods: {
			toggle(bool) {
				this.boolList[bool] = !this.boolList[bool]
			}
		},
		mounted() {
			var _this = this;
			var scrollTimer;
			this.$refs.avatarList.addEventListener('scroll', ()=>{
				clearTimeout(scrollTimer)
				scrollTimer = setTimeout(_this.snap, 100);
			})
		}
	}
</script>