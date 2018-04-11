<template>
	<div class="my-address-page table-list-container page has-footer">
		<ul class="table-list size-sm line-stripe">
		    
			<li class="tlr">
				<div class="tlr-title size-sm">收件人</div>
				<label class="tlr-content">
					<input>
				</label>
				
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">手机号</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">所在地区</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr border-bottom">
				<div class="tlr-title size-sm">详细地址</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
		</ul>
		<footerBar class="justify-content-between">
			<div class="flex-grow-1"><span class="color-darkgray">订单总额：</span>￥1038</div>
			<uButton :path="'payment'">下一步</uButton>
		</footerBar>
	</div>
</template>