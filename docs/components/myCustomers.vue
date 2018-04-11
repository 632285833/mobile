<template>
	<div class="my-customers-page table-list-container page">
		<ul class="table-list indent line-stripe">
			<li v-for="customer in customerArr" class="tlr">
				<div class="tlr-title">{{customer.name}}</div>
				<div class="row-group color-light">
					<span>订单量{{customer.orderQTY}}</span>
					<span>总额￥{{customer.orderAmount}}</span>
				</div>
				<div class="color-warning">佣金￥{{customer.commission}}</div>
				<img :src="customer.avatar" class="avatar-img">
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				customerArr: [{
					name: '李雷',
					orderQTY: '10',
					orderAmount: '1002',
					commission: '134',
					avatar: 'static/attachment/avatar1.png'
				},{
					name: '韩梅梅',
					orderQTY: '10',
					orderAmount: '1002',
					commission: '134',
					avatar: 'static/attachment/avatar2.png'
				},{
					name: '罗大佐',
					orderQTY: '10',
					orderAmount: '1002',
					commission: '134',
					avatar: 'static/attachment/avatar3.png'
				},{
					name: '张轩逸',
					orderQTY: '10',
					orderAmount: '10023',
					commission: '134',
					avatar: 'static/attachment/avatar4.png'
				}]
			}
		}
	}
</script>