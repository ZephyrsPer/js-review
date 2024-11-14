// indexOf()
// 返回要查找的元素在数组中的位置，如果没找到则返回 -1
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
// includes()
// 返回要查找的元素在数组中的位置，找到返回true，否则false
numbers.includes(4)
// find()
// 返回第一个匹配的元素
const res = numbers.find(item => item > 4)