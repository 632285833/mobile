export default { 
	inserted: function(el, binging) {
		var title = el.firstChild;
		var content = el.lastChild;
		var contentWidth = el.offsetWidth-title.offsetWidth-32;
		content.style.width = `${contentWidth}px`;
		content.classList.add('ellipsis')
	},
}