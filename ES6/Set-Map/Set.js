
// 类似与数组、但是不允许重复的值
const set = new Set();


set.add(1);
set.add(2);
set.add(3);
console.log(set);
set.forEach(item => {
  console.log(item);
})

for (let item of set) {
  console.log(item);
}

// Set()函数可以接受一个数组
// （或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。


// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。



// 对比Object与Set的区别
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties['width']) {
  // do something
}

// Set的写法
const properties_1 = new Set();

properties_1.add('width');
properties_1.add('height');

if (properties_1.has('width')) {
  // do something
}



for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
