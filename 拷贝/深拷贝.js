// 深拷贝是将一个对象从内存中完整的拷贝一份出来
// 从堆内存中开辟一个新的区域存放新对象,
// 且修改新对象不会影响原对象。




// 取不到值为 undefined 的 key；
// 如果对象里有函数，函数无法被拷贝下来；
// 无法拷贝copyObj对象原型链上的属性和方法；
// 对象转变为 date 字符串。
let a = { a: 1, b: 2 };
let b = JSON.parse(JSON.stringify(a))

a.a = 2;

console.log(a);
console.log(b);

let c = {
  name: 'Jack',
  age: 18,
  hobbit: ['sing', { type: 'sports', value: 'run' }],
  score: {
    math: 'A',
  },
  run: function () { },
  walk: undefined,
  fly: NaN,
  cy: null,
  date: new Date()
}
let d = JSON.parse(JSON.stringify(c))
// console.log(d)

function deepClone_1(obj) {
  if (typeof obj !== 'object' || obj === null) {
    // 值类型直接返回
    return obj;
  }
  const target = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        target[key] = deepClone(obj[key]);
      } else {
        target[key] = obj[key];
      }
    }
  }
  return target;
}



function deepClone(obj, hash = new WeakMap()) {
  // 处理 null 和非对象类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy);
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i], hash);
    }
    return arrCopy;
  }

  // 处理 Map 对象
  if (obj instanceof Map) {
    const mapCopy = new Map();
    hash.set(obj, mapCopy);
    obj.forEach((value, key) => {
      mapCopy.set(deepClone(key, hash), deepClone(value, hash));
    });
    return mapCopy;
  }

  // 处理 Set 对象
  if (obj instanceof Set) {
    const setCopy = new Set();
    hash.set(obj, setCopy);
    obj.forEach(value => {
      setCopy.add(deepClone(value, hash));
    });
    return setCopy;
  }

  // 处理普通对象
  const objCopy = {};
  hash.set(obj, objCopy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key], hash);
    }
  }
  return objCopy;
}

// 测试
const original = {
  date: new Date(),
  reg: /test/gi,
  arr: [1, 2, { nested: 'value' }],
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  circular: null,
};
original.circular = original; // 创建一个循环引用

const clone = deepClone(original);
console.log(clone);
console.log(clone.date instanceof Date); // true
console.log(clone.reg instanceof RegExp); // true
console.log(Array.isArray(clone.arr)); // true
console.log(clone.map instanceof Map); // true
console.log(clone.set instanceof Set); // true
console.log(clone.circular === clone); // true (循环引用处理正确)