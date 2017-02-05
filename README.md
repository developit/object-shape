# `object-shape`

[![NPM](https://img.shields.io/npm/v/object-shape.svg)](https://www.npmjs.com/package/object-shape)

Returns a String description of a given object's shape.

```js
import shape from 'object-shape';

shape('hello')        // [String 0,1,2,3,4]
shape({ foo:'bar' })  // [Object foo]
shape(/reg/i)         // [RegExp]
shape(new Foo())      // [Foo a,b,c]
```
