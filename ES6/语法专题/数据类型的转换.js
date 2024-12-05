// 1. 手动强制类型转换

// Number(value) 强制转换为数字类型
/* 原始类型 */
Number(123) //123
Number('123') // 123
// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN
// 空字符串转为0
Number('') // 0
// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0
// undefined：转成 NaN
Number(undefined) // NaN
// null：转成0
Number(null) // 0
// Number函数将字符串转为数值，要比parseInt函数严格很多。
// 基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN。
parseInt('42 cats') // 42
Number('42 cats') // NaN
// 另外，parseInt和Number函数都会自动过滤一个字符串前导和后缀的空格。
parseInt('\t\v\r12.34\n') // 12
Number('\t\v\r12.34\n') // 12.34
/* 对象类型 */
// 简单的规则是，Number方法的参数是对象时，
// 将返回NaN，除非是包含单个数值的数组。
Number({ a: 1 }) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
var obj = { x: 1 };
Number(obj) // NaN

// 等同于
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}
// var obj = {
//   valueOf: function () {
//     return {};
//   },
//   toString: function () {
//     return {};
//   }
// };

// Number(obj)
// // TypeError: Cannot convert object to primitive value

// String(value) 强制转换为字符串类型
/*
数值：转为相应的字符串。
字符串：转换后还是原来的值。
布尔值：true转为字符串"true"，false转为字符串"false"。
undefined：转为字符串"undefined"。
null：转为字符串"null"。
 */
/* 对象类型 */
String({ a: 1 }) // "[object Object]"
String([1, 2, 3]) // "1,2,3"

// Boolean(value) 强制转换为布尔类型

// 它的转换规则相对简单：
// 除了以下五个值的转换结果为false，
// 其他的值全部为true。

/*
undefined
null
0（包含-0和+0）
NaN
''（空字符串）
*/

// 注意，所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true
// （详见《原始类型值的包装对象》一章）。


// 2. 自动转换
// 一：不同类型的数据互相运算
123 + 'abc' // "123abc"
// 二：对非布尔类型的数据求布尔值
if ('abc') {
  console.log('hello')
}  // "hello"
// 三：对非数值类型的数据使用数值运算符
+ { foo: 'bar' } // NaN
  - [1, 2, 3] // NaN
/* 
自动转换的规则是这样的：
预期什么类型的值，就调用该类型的转换函数。
比如，某个位置预期为字符串，就调用String()函数进行转换。
如果该位置既可以是字符串，也可能是数值，那么默认转为数值。
*/