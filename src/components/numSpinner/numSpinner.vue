<template>
	<div class="num-spinner">
		<div class="add-button" @click="minus"></div>
		<input value="1" ref="input">
		<div class="minus-button" @click="add"></div>
	</div>
</template>
<script>
	export default {
		name: 'numSpinner',
		props: {
			maxValue: {
				type: Number,
				default: 10
			}
		},
		methods: {
			minus() {
				if (this.$refs.input.value>0) {
					this.$refs.input.value--;
				}
			},
			add() {
				if (this.$refs.input.value<this.maxValue) {
					this.$refs.input.value++;
				}
			}
		}
	}
</script>