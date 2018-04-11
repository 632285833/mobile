<template>
	<div class="my-share-page page table-list-container">
		<ul class="table-list line-stripe">
			<li v-for="product in productArr" class="d-flex justify-content-between tlr">
				<div class="img-container">
					<img :src="product.img" v-trimImg.height>
				</div>
				<div class="info-container">
					<div class="ellipsis-2-line font-lg">{{product.name}}</div>
					<ul class="row-group color-gray font-small">
						<li>转发{{product.shareQTY}}</li>
						<li>下单{{product.orderQTY}}</li>
					</ul>
				</div>
				<div class="commission">+{{product.commission}}</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				productArr: [{
					name: '希望在田野，回归大自然',
					price: '873',
					commission: '12',
					shareQTY: '12',
					viewQTY: '32',
					orderQTY: '12',
					img: 'static/attachment/product1.png'
				},{
					name: '科考营-国家地理杂志的探索团队严肃的带你入“坑”',
					price: '873',
					commission: '12',
					shareQTY: '983',
					viewQTY: '32',
					orderQTY: '14',
					img: 'static/attachment/product2.png'
				},{
					name: '羽蒙科学秀-自营爆款之《冰火奇遇记》科学探索奇妙世界',
					price: '873',
					commission: '12',
					shareQTY: '352',
					viewQTY: '235',
					orderQTY: '4',
					img: 'static/attachment/product3.png'
				},{
					name: '金夫人in爱 亲子全家照，疯抢价 38.9元',
					price: '873',
					commission: '12',
					shareQTY: '12',
					viewQTY: '3',
					orderQTY: '1',
					img: 'static/attachment/product4.png'
				}]
			}
		}
	}
</script>