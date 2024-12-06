const wm = new WeakMap();
let key = {};
let obj = { foo: 1 };

wm.set(key, obj);
obj = null;
console.log(wm.get(key));

wm.get(key).foo = 2;
console.log(wm.get(key));
// Object {foo: 1}