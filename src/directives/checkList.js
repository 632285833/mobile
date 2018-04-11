export default {
	bind: function(el, binging) {
		function handleClick(item) {
			item.classList.toggle('active');
		}
		for (let item of el.children) {
			item.addEventListener('click', ()=>handleClick(item), false)
		}
	},
}