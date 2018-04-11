<template>
	<div class="main">
		<navBar :navTitle="navTitle" v-show="navVisible"></navBar>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		props: {
			navVisible: {
				type: Boolean,
				default: true
			},
			tabVisible: {
				type: Boolean,
				default: true
			},
			navTitle: {
				type: String
			}
		},
		mounted() {
			
		},
		updated() {
			console.log(this.$route.params)
		}
	}
</script>
