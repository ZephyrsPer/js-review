/* 
Array.prototype.includes方法返回一个布尔值，
表示某个数组是否包含给定的值，
与字符串的includes方法类似。
ES2016 引入了该方法。
*/

let arr = [1, 2, 3];

console.log(arr.includes(2)); // true


[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true

/* 
该方法的第二个参数表示搜索的起始位置，
默认为0。如果第二个参数为负数，
则表示倒数的位置，
如果这时它大于数组长度
（比如第二个参数为-4，但数组长度为3），
则会重置为从0开始。
 */
