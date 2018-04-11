<template>
	<div class="nav-bar">
		<div class="nav-arrow-wrapper" @click="handleNav">
			<svg viewBox="0 0 10 4" class="stroke"><use xlink:href="#i-arrow"></use></svg>
		</div>
		<div class="nav-title-container" v-show="navTitle.length>0">
			<div class="nav-background"></div>
			<div class="nav-title u-title">{{navTitle}}</div>
		</div>
		<div class="actions-container"><slot></slot></div>
	</div>
</template>
<script>
	export default {
		name: 'navBar',
		props: {
			isAnimated: true,
			navTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				translate: '',
				nav_h: '',
				navTitle_l: '',
			}
		},
		methods: {
			handleScroll() {
				var classList = this.$el.classList;
				if (document.body.scrollTop > this.nav_h/2.5) {
					classList.add('scroll-top');
				} else {
					classList.remove('scroll-top');
				}
			},
			handleNav() { this.$router.go(-1); }
		},
		mounted() {

			this.navTitle_l = this.navTitle.length;
			var navTitle = this.$el.querySelector('.nav-title');

			this.getX = function() {
				var screen_w = document.documentElement.clientWidth;
				var text_w = navTitle.offsetWidth;
				var marginLeft = navTitle.getStyle('marginLeft').replace(/px/g, '');
				return (screen_w-text_w)/2-marginLeft;
			}

			this.getY = function() {
				var text_h = navTitle.offsetHeight;
				this.nav_h = this.$el.offsetHeight;
				return (this.nav_h-text_h)/2;
			}

			this.updateTransform = function() {
				this.translate = `translate(${this.getX()}px, ${this.getY()}px)`;
				document.styleSheets[0]
				.setRuleStyle('.nav-bar:not(.black-gradient-mask).scroll-top .nav-title', 
					'transform', `${this.translate}`)
			}

			this.updateTransform();
			document.addEventListener('scroll', this.handleScroll);

		},
		updated() {
			if (!!this.$el.querySelector('.nav-title') && this.navTitle.length != this.navTitle_l) {
				this.navTitle_l = this.navTitle.length;
				this.updateTransform();
			}
		}
	}
	
</script>








