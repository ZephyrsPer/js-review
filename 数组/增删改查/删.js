// pop()-删除末尾
// pop() 方法用于删除数组的最后一项，
// 同时减少数组的length 值，返回被删除的项
let arr = [1, 2, 3];
console.log(arr.pop());
// shift()
// splice()

// slice()方法用于提取目标数组的一部分，
// 返回一个新数组，原数组不变。
// arr.slice(start, end);
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

const arr_like = { 0: 'a', 1: 'b', length: 2 }
const arr1 = Array.prototype.slice.call(arr_like)
console.log(arr1)
console.log(arr_like);