<template>
	<svg>
		<use :xlink:href="id"></use>
	</svg>
</template>
<script>
	export default {
		name: 'uSVG',
		props: {
			id: {
				type: String,
				default: '',
			}
		}
	}
</script>