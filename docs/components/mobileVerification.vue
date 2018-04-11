<template>
	<div class="mobileVerification-page table-list-container page">
		<ul class="table-list">
			<li>
				<div class="u-input">
					<div class="input-title">手机号</div>
					<input>
				</div>
			</li>
			<li>
				<div class="u-input">
					<div class="input-title">验证码</div>
					<input>
				</div>
			</li>
		</ul>
		<uButton :path="'payment'">确定</uButton>
	</div>
</template>