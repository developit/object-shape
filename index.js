var toString = Object.prototype.toString,
	hop = Object.prototype.hasOwnProperty,
	r = / (.*)\]$/;
module.exports = function objectShape(obj) {
	var type = typeof obj;
	if (type!=='object') return type;
	var out = '';
	for (var i in obj) if (hop.call(obj, i)) {
		out += (out ? ',' : ' ') + i;
	}
	var name = obj.constructor && obj.constructor.name || toString.call(obj).match(r)[1];
	return '[' + name + out + ']';
};
