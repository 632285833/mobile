<template>
	<div class="order-detail-page table-list-container page">
		<ul class="table-list line-stripe">
			<li class="order-info tlr">
				<div class="tlr-title">
				<span>科考营-国家地理杂志的探索团队严肃的带你入“坑”</span>
				<span class="inline-label inline-label-warning">服务中</span></div>
				<div class="tlr-content d-flex justify-content-between">
					<div>
						<div>时间：01月12日   09:00-12:00<br></div>
						<div>规格：两大一小</div>
						<div>客人：周川平、周翼开、田蜜</div>
						<div>数量：1</div>
						<div>价格：￥983</div>
						<div>类型：游乐场</div>
						<div>年龄：2-5岁</div>
					</div>
					<div class="img-container">
						<img src="static/attachment/product6.png" v-trimImg.height>
					</div>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title">预定须知</div>
				<div class="tlr-content">
					<span>有效时间：使用日期1日内有效,每天的19:30-21:30可使用<br></span>
					<span>购买时间：请至少当天17点20分前购买<br></span>
					<span>购买限制：同一身份证在1天内最多只能预订5张；同一手机号在1天内最多只能预订5张<br></span>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title">其他信息</div>
				<div class="tlr-content">
					<span>订单号：H0180171023164805用<br></span>
					<span>下单时间：2015-12-30 15:5<br></span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		watch: {
			$router (val, oldVal) {
				console.log(val, oldVal)
			}
		}
	}
</script>