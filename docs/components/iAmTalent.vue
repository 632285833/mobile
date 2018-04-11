<template>
	<div class="talent-page table-list-container page">
		<ul class="table-list line-stripe">
		    <router-link tag="li" to="commissionDetail" class="tlr">
		        <div class="tlr-title d-flex justify-content-between">
			        <span>我的收益</span>
			        <span class="color-primary font-md">查看详情</span>
			    </div>
			    <ul class="tlr-content d-flex justify-content-between text-center">
			    	<li>
			    	    <div class="font-xl color-warning">$2132.2</div>
			    		<div class="color-gray font-small">累计总收益</div>
			    	</li>
			    	<li>
			    	    <div class="font-xl color-warning">$247</div>
			    		<div class="color-gray font-small">可提现</div>
			    	</li>
			    	<li>
			    	    <div class="font-xl color-warning">$1685</div>
			    		<div class="color-gray font-small">未结算</div>
			    	</li>
			    </ul>
			</router-link>
			<router-link tag="li" to="myShare" class="tlr">
			    <div class="tlr-title d-flex justify-content-between">
			        <span>我的分享</span>
			        <span class="color-primary font-md">快去分享</span>
			    </div>
			    <div class="tlr-content">已分享30个产品，可得佣金 163</div>
			</router-link>
			
			<router-link tag="li" to="myTalents" class="tlr">
			    <div class="tlr-title d-flex justify-content-between">
			        <span>我的达人</span>
			        <span class="color-primary font-md">邀请达人</span>
			    </div>
			    <div class="tlr-content">已分享30个产品，可得佣金 982</div>
			</router-link>
			
		</ul>
	</div>
</template>