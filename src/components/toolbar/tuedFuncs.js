function convertToArray(nodes) {
	var arr = null;
	try {
		arr = Array.prototype.slice.call(nodes, 0);
	} catch (e) {
		arr = new Array();
		for (var i = 0, len = nodes.length; i < len; i++) {
			arr.push(nodes[i]);
		}
	}
	return arr;
}