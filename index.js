let toString = {}.toString,
	hop = {}.hasOwnProperty;
module.exports = function objectShape(obj) {
	let out = '';
	for (let i in obj) if (hop.call(obj, i)) {
		out += (out?',':' ') + i;
	}
	let name = toString.call(obj).match(/ (.*)\]$/)[1];
	if (name==='Object' && obj.constructor) {
		name = obj.constructor.name || name;
	}
	return '[' + name + out + ']';
};
