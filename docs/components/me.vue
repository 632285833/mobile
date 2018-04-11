<template>
	<div class="me-page table-list-container">
		<ul class="table-list line-stripe">
			<router-link tag="li" to="navBarView/avatar" class="avatar-container tlr">
				<div class="tlr-title d-flex align-items-center">
					<div class="avatar-wrapper">
					    <span class="avatar-desc">R</span>
					    <img src="static/attachment/product6.png" v-trimImg>
					</div>
					<span class="user-name">Robin</span>
				</div>
			</router-link>
			<router-link tag="li" to="navBarView/iAmTalent" class="tlr">
				<div class="tlr-title">达人中心</div>
				<div class="tlr-content">累积佣金2124.8</div>
			</router-link>
			<router-link tag="li" to="navBarView/myOrders" class="tlr">
			    <div class="tlr-title row-group"><span>我的订单</span><span class="badge">94</span></div>
			</router-link>
			<router-link tag="li" to="navBarView/myFamily" class="tlr">
				<div class="tlr-title">我的家人</div>
			</router-link>
			<router-link tag="li" to="navBarView/myCollections" class="tlr">
				<div class="tlr-title">我的收藏</div>
			</router-link>
			<router-link tag="li" to="navBarView/contactUs" class="tlr">
				<div class="tlr-title">联系羽蒙</div>
			</router-link>
		</ul>
	</div>
</template>
