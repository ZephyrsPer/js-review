// push()-末尾添加
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);


// unshift()-开头添加
let arr2 = [1, 2, 3];
arr2.unshift(4);
console.log(arr2);

// splice()-传入三个参数、
// 分别是开始位置、要删除元素的个数、插入的元素
// 返回被删除的部分
let arr3 = [1, 2, 3];
arr3.splice(1, 2, 4, 1);
console.log(arr3);

// 这个是返回一个新数组
// concat()
let arr4 = [1, 2, 3]
let arr5 = arr4.concat([4, 5, 6])
console.log(arr5);


