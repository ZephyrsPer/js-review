


// 成员只能是对象和Symbol值

const ws = new WeakSet();
ws.add(Symbol(1))
console.log(ws);
/* 
WeakSet 不能遍历，是因为成员都是弱引用，
随时可能消失，遍历机制无法保证成员的存在，
很可能刚刚遍历结束，成员就取不到了。
WeakSet 的一个用处，是储存 DOM 节点，
而不用担心这些节点从文档移除时，会引发内存泄漏。
*/

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
const foo = new Foo()
foo.method()
