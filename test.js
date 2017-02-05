var shape = require('.');
var assert = require('assert');

function eq(obj, out) {
	console.log('shape(',obj,') === '+out);
	assert.equal(shape(obj), out);
}

eq(undefined, 'undefined');

eq(null, '[Null]');

eq('hello', 'string');

eq(1, 'number');

eq({}, '[Object]');

eq({ foo:'bar' }, '[Object foo]');

eq(/reg/i, '[RegExp]');

function Foo(){this.a=1;this.b=2;}
eq(new Foo(), '[Foo a,b]');


console.log('done');
process.exit(0);
