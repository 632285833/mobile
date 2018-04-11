<template>
	<div class="guest-info-page table-list-container page">
		<ul class="table-list line-stripe">
			<li class="tlr tlr-between">
				<div class="tlr-title"><span>周川平</span>
				<div class="inline-label"><span>萌爸</span></div></div>
				<div class="tlr-right color-gray">删除</div>
			</li>
			<li class="tlr tlr-between">
				<div class="tlr-title"><span>周翼开</span>
				<div class="inline-label"><span>萌娃</span></div></div>
				<div class="tlr-right color-gray">删除</div>
			</li>
			<li to="guestList" class="tlr couple" @click="handleClick">
				<div class="tlr-title color-primary">选择客人</div>
			</li>
		</ul>
		<footerBar class="d-flex justify-content-between">
			<div class="flex-grow-1"><span class="color-darkgray">订单总额：</span>￥1038</div>
			<uButton :path="'myAddress'">提交订单</uButton>
		</footerBar>
	</div>
</template>
<script>
	export default {
		methods: {
			handleClick() {
				this.$router.push({path: 'myFamily', query: {isSelectGuests: true}});
			}
		}
	}
</script>
