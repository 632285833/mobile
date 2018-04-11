<template>
	<div class="footer-bar" :class="{ hidden: isAnimated }">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'footerBar',
		props: {
			isAnimated: true
		},
		methods: {
			handleScroll() {
				var classList = this.$el.classList;
				if (document.body.scrollTop > 150) {
					classList.remove('hidden')
				} else {
					classList.add('hidden')
				}
			}
		},
		mounted() {
			if (this.isAnimated) {
				document.addEventListener('scroll', this.handleScroll);
			}
		}
	}
</script>