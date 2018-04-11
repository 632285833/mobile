<template>
	<a class="ubutton" 
	@click="handleClick" :class="[{'is-loading': loading},{'is-disabled': disabled},{'is-disabled': disabled},]">

	<span class="icon" v-if="showicon">
		<i  :class="[iconclass]"></i>
	</span>

	<span class="text"><slot></slot>
		<!-- <Ripple v-show="isRippled" :isLight="true"></Ripple> -->
	</span>
</a>
</template>
<script>
	export default {
		name: "uButton",
		props: {
			isRippled: {
				type: Boolean,
				default: true
			},
			disabled: Boolean,
			path: String,
			loading: {
				type: Boolean,
				default: false
			},
			iconclass: {
				type: String,
				default: '',
			},
			showicon:Boolean,
			active: Boolean
		},
		methods: {

			handleClick(event) {
				this.$emit("click", event);
				this.$router.push({path: this.path})
			}
		}
	};
</script>