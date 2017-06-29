### 严格模式备忘
#### 语法
- 严格模式中意外创建全局变量被抛出错误替代
- 静默失败的赋值操作 (给不可写属性赋值, 给只读属性(getter-only)赋值赋值, 给不可扩展对象(non-extensible object)的新属性赋值)
- 试图删除不可删除的属性时会抛出异常(之前这种操作不会产生任何效果)
- 一个对象内的所有属性名在对象内必须唯一
- 严格模式下重名参数被认为是语法错误
- 严格模式禁止八进制数字语法
- 严格模式简化了代码中变量名字映射到变量定义的方式
	- 严格模式禁用 with
	- 严格模式下的 eval 不在为上层范围(surrounding scope,注:包围eval代码块的范围)引入新变量
	- 严格模式禁止删除声明变量
- 让eval和arguments变的简单
	- 名称 eval 和 arguments 不能通过程序语法被绑定(be bound)或赋值
	- 参数的值不会随 arguments 对象的值的改变而变化
	- 不再支持 arguments.callee

#### 安全
- 指定的this不再被封装为对象，而且如果没有指定this的话它值是undefined：
- fun.caller和fun.arguments都是不可删除的属性而且在存值、取值时都会报错
- arguments不会再提供访问与调用这个函数相关的变量的途径

#### 未来
- 严格模式中一部分字符变成了保留的关键字。这些字符包括implements, interface, let, package, private, protected, public, static和yield。
- 严格模式禁止了不在脚本或者函数层面上的函数声明