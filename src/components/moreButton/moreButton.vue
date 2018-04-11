<template>
	<div class="more-button" @click="toggle" ref="moreButton">
		<ul ref="dotlist">
			<slot></slot>
			<li v-if="hasClose" class="close"><div>×</div></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'moreButton',
		props: {
			hasClose: {
				type: Boolean,
				default: true
			},
			span: {
				type: Number,
				default: 45
			},
			autoFold: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				moreButton: '',
				MoreButton: ''
			}
		},
		methods: {
			toggle(event) {
				event.preventDefault()

				if (this.autoFold) {
					this.$emit('animate');
					this.moreButton.tl.reversed() ? this.moreButton.tl.play() : this.moreButton.tl.reverse();
				} else {

					if (this.moreButton.tl.reversed()) {
						this.$emit('animate');
						this.moreButton.tl.play()
					} else if (event.target.parentNode.classList.contains('close')) {
						this.$emit('animate');
						this.moreButton.tl.reverse()
					}
				}

				
			}
		},
		mounted() {
			
			this.MoreButton = function(el, timeScale, span) {
				var dotlist = convertToArray(el.children);
				var dotlist_l = dotlist.length,
				moreButton_w = 20,

				dot_w = dotlist[0].offsetWidth,
				dotOffsetXlist = [],
				buttonlist = [];
				span<0 && dotlist.reverse();
				var dotlist_x = document.querySelector('.dotlist')
				dotlist.forEach(function(dot) {
					var buttonIndex = dotlist.indexOf(dot);
					var factor = dotlist_l-buttonIndex-1;
					var x = -factor*(span);
					var ax = moreButton_w-dot_w;
					x = (factor<dotlist_l-2)?x-ax/2:(factor==dotlist_l-1?x+ax/2:x)

					
					dotOffsetXlist.push(x);
					buttonlist.push(dot.childNodes);
				})

				var mainTl = new TimelineMax({paused: true,reversed: true})
				var tl0 = new TimelineMax(),
				tl1 = new TimelineMax(),
				ease = Power2.easeInOut;
				tl0.staggerTo(dotlist, 0.6, {
					cycle: { x: dotOffsetXlist },
					x: -span*2,
					backgroundColor: 'currentColor',
					ease: ease
				}, 0.05)

				tl1.staggerFromTo(buttonlist, 0.3, {
					scale: 0,
					opacity: 0,
					ease: ease,
					display: 'none',
				}, {
					scale: 1,
					opacity: 1,
					ease: ease,
					display: 'inline'
				}, 0.05)
				.delay(-0.6)

				mainTl
				.add(tl0)
				.add(tl1)
				.timeScale(timeScale)
				this.dotlist = dotlist;
				this.tl = mainTl;
			}
			this.moreButton = new this.MoreButton(this.$el.children[0], 1.2, this.span);
			this.moreButton.dotlist.forEach(function(dot) {
				var button = dot.children[0];
				button.addEventListener('click', function() {
					button.classList.toggle('on')
					dot.classList.toggle('on')
				})
			})
		},
		updated() {
			this.moreButton = new this.MoreButton(this.$refs.dotlist, 1.2, this.span);
		}
	}
</script>


