<template>
	<ul class="toolbar" ref="toolbar">
		<slot></slot>
		<li v-if="moreButtonVisible">
			<moreButton :hasClose="true" ref="moreButton" @animate="animate" :span="span" :autoFold="false">
				<slot name="hiddenList"></slot>
			</moreButton>
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'toolbar',
		props: {
			hasClose: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				toolbar: '',
				moreButtonVisible: true,
				span: 0,
			}
		}, 

		methods: {
			animate() {
				this.toolbar.tl.reversed() ? 
				this.toolbar.tl.delay(0.2).play().delay(0) : 
				this.toolbar.tl.reverse().delay(0.2);
			}
		},
		mounted() {
			var moreButton = this.$refs.moreButton;
			if (typeof moreButton != "undefined") {
				var dotlist = moreButton.$el.children[0].children;
				var buttonlist = document.querySelectorAll('.toolbar>li:not(:last-child)');
				function Toolbar(timeScale, buttonlist, dotlist) {
					var buttonlist_l = buttonlist.length,
					dotlist_l = dotlist.length,
					span = window.innerWidth*(1-0.1-(1-0.1)*0.15)/(buttonlist_l),

					moreButtonVisible = dotlist_l>1 ? true : false;

					var tl = new TimelineMax({paused: true}),
					ease = Power2.easeInOut;
					tl.staggerTo(buttonlist, 0.6, {
						x: -span*(dotlist_l-1),
						ease: ease,
					}, 0.1).timeScale(timeScale).reversed(true);
					this.tl = tl;
					this.span = span;
					this.moreButtonVisible = moreButtonVisible;
				}
				this.toolbar = new Toolbar(1.2, buttonlist, dotlist);
				this.span = this.toolbar.span;
				this.moreButtonVisible = this.toolbar.moreButtonVisible;
			}
		}
	}
</script>


