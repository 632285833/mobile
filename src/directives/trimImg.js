export default {
	bind: function(el, binding) {
		var h = el.offsetHeight;
		var w = el.offsetWidth;

		if (binding.modifiers.height) {
			if (h>w) {
				el.style.width = "100%"
			} else {
				el.style.height = "100%"
			}
		} else if (binding.modifiers.width) {
			if (h>w) {
				el.style.height = "100%"
			} else {
				el.style.width = "100%"
			}
		} else {
			if (h>w) {
				el.style.width="100%";
			} else {
				el.style.height="100%"
			}
		}
	}
}