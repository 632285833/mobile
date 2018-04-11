<template>
	<div class="replybar">
		<toolbar class="replybar">
			<li  @click="showMsgBar">
				<svg class="i-msg" viewBox="0 0 10 3">
					<use xlink:href="#i-msg"></use>
				</svg>
			</li>
			<li>
				<svg viewBox="0 0 10 3.3" class="i-thumbup">
					<use xlink:href="#i-thumbup"></use>
				</svg>
			</li>
			<li>
				<svg viewBox="0 0 10 3.2">
					<use xlink:href="#i-booking"></use>
				</svg>
			</li>
			<template slot="hiddenList">
				<li>
					<span>举报</span>
				</li>
				<li>
					<span>分享</span>
				</li>
				<li>
					<svg viewBox="0 0 10 3.2">
						<use xlink:href="#i-booking"></use>
					</svg>
				</li>

			</template>
		</toolbar>
		<transition name="fade">
			<div class="msg-bar" v-show="msgBarVisible">
				<input placeholder="说点啥" ref="msgInput" autofocus="autofocus">
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'replyBar',
		data() {
			return {
				msgBarVisible: false,
				mainTl: '',
			}
		},
		methods: {
			showMsgBar(event) {
				event.stopPropagation();
				
				var self = this
				setTimeout(function() {
					self.$refs.msgInput.focus()
				}, 500);
				if (!this.msgBarVisible) {
					this.mainTl.play();
				} else {
					this.mainTl.reverse();
				}
				this.msgBarVisible = !this.msgBarVisible;
			}
		},
		mounted() {
			$('.toolbar>li').click(function() {
				$(this).toggleClass('on')
			});

			this.mainTl = new TimelineMax({paused: true});
			var oplist = document.querySelectorAll('.toolbar>li:not(:first-child)');
			this.mainTl.staggerTo(oplist, 0.2, {
				scale: 0,
			}, 0.1);
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../../docs/scss/variables.scss';
	.fade-enter-active, .fade-leave-active {
		transition: all .35s ease 0.25s;
	}
	.fade-leave-active {
		transition: all .25s ease;
	}
	.fade-enter {
		opacity: 0;
		transform: translateX(0.5rem);
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>

