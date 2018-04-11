<template>
	<transition name="push">
		<div class="page">
			<slot></slot>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'page'
	}
</script>
<style scoped>
	.push-enter-active, .push-leave-active, .fade-enter-active, .fade-leave-active {
		transition: all .35s;
	}
	.push-enter, .push-leave-to {
		transform: translateX(100%);
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
