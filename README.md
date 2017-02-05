# `object-shape`

[![NPM](https://img.shields.io/npm/v/object-shape.svg)](https://www.npmjs.com/package/object-shape)

Returns a String description of a given object's shape.

```js
import shape from 'object-shape';

shape('hello')        // string
shape(2)              // number
shape(undefined)      // undefined
shape(null)           // [Null]
shape({ a:1, b:2 })   // [Object a,b]
shape(/reg/i)         // [RegExp]
shape(new Foo())      // [Foo a,b,c]
```
