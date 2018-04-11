<template>
	<div class="add-adult-page table-list-container page has-footer">
		<ul class="table-list line-stripe">
			<li class="tlr">
				<div class="u-input">
					<div class="tlr-title size-sm">角色</div>
					<div class="tlr-content">
						<ul class="grid-list triple-column" v-toggleList>
							<li class="gli radio-button">萌爸</li>
							<li class="gli radio-button">萌妈</li>
							<li class="gli radio-button">其他</li>
						</ul>
					</div>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">姓名（必填）</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">手机号（必填）</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
			<li class="tlr">
				<div class="tlr-title size-sm">身份证号（必填）</div>
				<div class="tlr-content">
					<input>
				</div>
			</li>
		</ul>
		<footerBar class="solo">
			<uButton class="save-button" :path="'paymentResult'">保存</uButton>
		</footerBar>
	</div>
</template>