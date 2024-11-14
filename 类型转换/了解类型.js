// 首先是基本类型
// undefined null boolean number string symbol
// 引用类型
// object


// 常见的类型转换有：
// 强制转换（显示转换）
// Number()
// 1. undefined 转 number 为 NaN
// 2. null 转 number 为 0
// 3. 布尔值转 number 为 0/1
// 4. 数字转 number 为自身
// 5. 字符串转 number 为数字，非数字转NaN
// 6. symbol 转 number 抛出异常
// 7. 先调用toPrimitive()再转toNumber()
// 对象：通常转换成NaN(除了只包含单个数值的数组)
// parseInt()
// parseInt相比Number，
// 就没那么严格了，parseInt函数逐个解析字符，遇到不能转换的字符就停下来
// String()
// Boolean()
// 自动转换（隐式转换）
// 比较运算（==、!=、>、<）、if、while需要布尔值地方
// 算术运算（+、-、*、/、%）