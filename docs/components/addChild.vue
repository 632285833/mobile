<template>
	<div class="add-child-page table-list-container page">
		<ul class="table-list line-stripe size-sm">
			<li class="tlr">
			    <div class="tlr-title size-sm">萌宝性别</div>
				<div class="tlr-content">
					<ul class="grid-list double-column" v-toggleList>
						<li class="gli radio-button">男宝</li>
						<li class="gli radio-button">女宝</li>
					</ul>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">萌宝姓名</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">出生年月</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">身份证号</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
			    <div class="tlr-title size-sm">兴趣爱好</div>
				<div class="tlr-content">
					<ul class="grid-list quad-column check" v-checkList>
						<li class="gli checkbox-button">音乐</li>
						<li class="gli checkbox-button">游泳</li>
						<li class="gli checkbox-button">阅读</li>
						<li class="gli checkbox-button">玩沙</li>
						<li class="gli checkbox-button">积木</li>
						<li class="gli checkbox-button">自定义</li>
					</ul>
				</div>
			</li>
			
		</ul>
		<footerBar class="solo">
			<uButton class="save-button" :path="'paymentResult'">保存</uButton>
		</footerBar>
	</div>
</template>