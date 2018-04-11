<template>
	<div class="withdraw-page page table-list-container">
		<ul class="table-list">
		    <li>
		    	<div class="title-view">可提现金额</div>
		    	<div class="content-view font-large color-warning">2405</div>
		    </li>
			<li>
				<div class="u-input">
					<div class="input-title">提现金额</div>
					<input>
				</div>
			</li>
			<li>
				<div class="u-input">
					<div class="input-title">提现微信账户</div>
					<input>
				</div>
			</li>
		</ul>
		<footerBar class="solo">
			<uButton class="save-button" :path="'withdrawResult'">提交申请</uButton>
		</footerBar>
	</div>
</template>