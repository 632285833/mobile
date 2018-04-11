<template>
	<div class="nav-bar-view">
		<navBar :navTitle="navTitle"></navBar>
		<router-view :isSelectGuests="!!this.$route.query.isSelectGuests"></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				navTitle: '',
			}
		},
		mounted() {
			if (!!this.$route.meta) {
				this.navTitle = this.$route.meta.navTitle;
			}
			
		},
		updated() {
			if (!!this.$route.meta) {
				this.navTitle = this.$route.meta.navTitle;
			}

		}
	}
</script>