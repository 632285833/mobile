<template>
	<label class="ucheckbox">
	    <input type="checkbox">
		<svg viewBox="0 0 10 4" class="fill">
			<use xlink:href="#i-hook"></use>
		</svg>
		<span><slot></slot></span>
	</label>
</template>
<script>
	export default {
		name: 'uCheckbox'
	}
</script>