<template>
	<div class="table-list-container page has-footer">
		<ul class="table-list">
		    <li class="tlr">
				<div class="tlr-title">套餐</div>
				<div class="tlr-content">
					<ul class="grid-list triple-column" v-toggleList>
						<li class="gli radio-button">套餐一</li>
						<li class="gli radio-button">套餐二</li>
						<li class="gli radio-button">套餐三<span>六</span></li>
					</ul>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title">活动日期</div>
				<div class="tlr-content">
					<ul class="grid-list triple-column font-sm" v-toggleList>
						<li class="gli radio-button">今天</li>
						<li class="gli radio-button">明天</li>
						<li class="gli radio-button">1月12日<span>六</span></li>
						<li class="gli radio-button">1月13日<span>日</span></li>
						<li class="gli radio-button">1月20日<span>六</span></li>
						<li class="gli radio-button">1月21日<span>日</span></li>
						<li class="gli radio-button">1月28日</li>
						<li class="gli radio-button">1月29日</li>
						<li class="gli radio-button">其他日期</li>
					</ul>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title">活动场次</div>
				<div class="tlr-content">
					<ul class="grid-list double-column" v-toggleList>
						<li class="gli radio-button">10:00-12:00</li>
						<li class="gli radio-button">14:00-16:00</li>
					</ul>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title">参与人群</div>
				<div class="tlr-content">
					<ul class="grid-list double-column" v-toggleList>
						<li class="gli radio-button">2大人1儿童</li>
						<li class="gli radio-button">1大人1儿童</li>
					</ul>
				</div>
			</li>
			<li class="tlr tlr-between">
				<div class="tlr-title">购买数量</div>
				<numSpinner></numSpinner>

			</li>
		</ul>
		<footerBar class="d-flex justify-content-between">
			<div class="flex-grow-1"><span class="color-darkgray">订单总额：</span>￥1038</div>
			<uButton :path="'guestInfo'">下一步</uButton>
		</footerBar>
	</div>
</template>