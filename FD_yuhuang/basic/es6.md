# es6
###浏览器兼容性
#### Babel转码器

Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。这意味着，你可以用ES6的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。

		// 转码前
		input.map(item => item + 1);

		// 转码后
		input.map(function (item) {
  		  return item + 1;
		});
上面的原始代码用了箭头函数，这个特性还没有得到广泛支持，Babel将其转为普通函数，就能在现有的JavaScript环境执行了。

#### 点
- lest const：变量提升，块级作用域
- 赋值，类型转换新方式，给本来灵活的JS书写方式了更多自由空间
- 字符串：添加了一些FD不常关心的charcode和编码方式预示着js将有更广的使用范围，以及字符串include以及起始位置。
- 正则： 字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split(),定义在RegExp对象上.修饰符。对Unicode字符更多考虑
- 数字：Math方法，范围，误差范围，整数浮点数，范围合法判定
- 数组： 转换为数组，替换，查找，键值遍历
- 函数： 参数结构，rest，拓展运算符，箭头函数,尾调用，尾递归，对递归的语义化以及蹦床方法
- 对象： 属性和方法的简单写法，属性名表达式，assign
- Symbol: 唯一的变量，是基本类型之外的对象，具有获取，字符串方法
- Reflect对象与Proxy对象是ES6为了操作对象而提供的新API，Reflect对象的方法与Proxy对象的方法一一对应。Proxy用于修改某些操作的默认行为是元编程，Reflect挂载一些明显属于语言内部的方法修改某些Object方法的返回结果
- Promise见章节promise
- Class
- Module
