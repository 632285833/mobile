<template>
	<div class="payment-page table-list-container page">
		<ul class="table-list line-stripe">
			<li class="tlr">
				<div class="tlr-title">科考营-国家地理杂志的探索团队严肃的带你入“坑”</div>
				<div class="tlr-content d-flex justify-content-between">
					<div>
						<span>时间：01月12日   09:00-12:00<br></span>
						<span>规格：两大一小<br></span>
						<span>客人：周川平、周翼开、田蜜<br></span>
						<span>数量：1<br></span>
					</div>
					<div class="img-container">
						<img src="static/attachment/product6.png" v-trimImg.height>
					</div>
				</div>
			</li>
			<li class="tlr lr-layout">
				<div class="tlr-title">订单金额</div>
				<div class="tlr-content">898</div>
			</li>
			<li class="tlr lr-layout">
				<div class="tlr-title">支付方式</div>
				<div class="tlr-content">微信支付</div>
			</li>
			
		</ul>
		<footerBar>
			<div class="flex-grow"><span class="color-light">订单总额：</span>￥1038</div>
			<uButton class="pay-button" :path="'paymentResult'">立即支付</uButton>
		</footerBar>
	</div>
</template>