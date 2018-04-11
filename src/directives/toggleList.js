export default {
	bind: function(el, binging) {
		function handleClick(item) {
			if (!item.classList.contains('active')) {
				var curItem = item.siblings('active');
				curItem && curItem.classList.remove('active');
				item.classList.add('active');
			} else {
				item.classList.remove('active')
			}
			if (binging.expression) {
				binging.value(binging.arg)
			}
		}
		el.handleClick = handleClick;
		for (let item of el.children) {
			item.addEventListener('click', ()=>handleClick(item), false)
		}
	},
	inserted: function(el, binging) {
		binging.modifiers.first && el.children[0].classList.add('active')
	},
}