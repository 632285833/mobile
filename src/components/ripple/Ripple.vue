<template>
	<div class="ripple">
		<svg version="1.1" 
		focusable="false"
		style="position: fixed;">
		<symbol id="ripply-scott" viewBox="0 0 100 100">
			<circle id="ripple-shape" cx="1" cy="1" r="1" />
		</symbol>
	</svg>
	<svg class="circle" :class="{ 'light': isLight}">
		<use height="100" width="100" xlink:href="#ripply-scott"></use>
	</svg>
</div>
</template>

<script>
	export default {
		name: 'Ripple',
		props: {
			isLight: {
				type: Boolean,
				default: false
			}
		},
		mounted: function() {

			var rippleConstructor = (function() {
				function rippleAnimation(event, timing) {
					var ripple = $(event.target).find('use')
					var tl = new TimelineMax()
					var x = event.offsetX
					var y = event.offsetY
					var scaleRatio = event.target.offsetHeight*3
					
					tl.fromTo(ripple, timing, {
						x: x,
						y: y,
						transformOrigin: '50% 50%',
						scale: 0,
						opacity: 1,
						ease: Linear.easeIn
					},{
						scale: scaleRatio,
						opacity: 0
					});
					return tl;
				}

				return {
					init: function(target, timing) {
						target.click(function() {
							rippleAnimation.call(this, event, timing);
						})
					}
				};
			})();

			rippleConstructor.init($('.ripple').parent(), 0.5);
		}
	}
</script>
<style lang="scss" scoped>
	.ripple {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		.circle {
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1000;
			width: 100%;
			fill: rgba(#000, 0.15);		
			use { opacity: 0; }
			&.light{ fill: rgba(#fff, 0.25 )}
		}

	}

</style>