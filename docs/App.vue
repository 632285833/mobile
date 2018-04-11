<template>
	<div id="app">
		<router-view></router-view>
		<footerBar class="footer-tab-bar" v-if="tabBarVisible" ref="tabBar">
			<router-link to="/"><uSVG class="stroke active" viewBox="0 0 1 2" :id="'#i-home'"></uSVG></router-link>
			<router-link to="productList">
			<uSVG class="on stroke" viewBox="0 0 1 2.1" :id="'#i-cascade'"></uSVG>
		</router-link>
		<router-link to="me">
		<uSVG class="on stroke" viewBox="0 0 1 2" :id="'#i-avatar'"></uSVG>
	</router-link>
</footerBar>
</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				tabBarVisible: true
			}
		},
		methods: {
			toggleList(index) {
				this.tabBarVisible = true
				var _this = this;
				setTimeout(function() {
					var tabBar = _this.$refs.tabBar.$el;
					var children = Array.from(tabBar.children);
					var activeEl = children[index];
					if(activeEl.siblings('active')) {
						activeEl.siblings('active').classList.remove('active');
					}
					activeEl.classList.add('active');
				}, 100)
				
			}
		},
		mounted() {
			this.toggleTabBar = function() {
				var path = this.$route.path;
				if (path === '/') {
					this.toggleList(0)
				} else if (path==='/productList') {
					this.toggleList(1)
				} else if (path==='/me') {
					this.toggleList(2)
				} else {
					this.tabBarVisible = false
				}
			}
			this.toggleTabBar();
		},
		updated() {
			this.toggleTabBar();
		}
	}
</script>

