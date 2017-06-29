## 浏览器页面加载解析渲染以及Javascript执行顺序


### 背景
- 在日常开发中，script运行脚本或加载外部文件时，会阻塞页面渲染，阻塞其他资源的加载，所以通常做法是脚本放在底部。
- 一般在页面初始化完毕之后才允许JavaScript代码执行，这样可以避免JavaScript执行时间影响DOM渲染，同时也避开了HTML文档流是否存在对于JavaScript执行的限制。

### 遇到的问题
1. 在服务助手项目中，临时调试时，在页面中操作"Edit as html"插入css和style各一个，样式表立刻被执行渲染，js里面除了onload等特定时间触发的事件里的的语句也执行。
2. 在排查客户端接口偶现收不到回包，对于Jquery里的ready与vue里面的ready执行时序产生疑惑。我们熟悉的load，ready，domcontantloaded,以及库和框架里面的ready是什么概念，执行的顺序是怎么样的呢？

### 学习笔记
 笔记分为三部分
 
- Javascript执行顺序
- 浏览器页面加载解析渲染
- ready与DOMContentLoaded
	
[传送门](http://gitlab.alibaba-inc.com/wn105798/accumulation/blob/master/load-run.md)或手动http://gitlab.alibaba-inc.com/wn105798/accumulation/blob/master/load-run.md
#### Javascript执行顺序
1. HTML文档在浏览器中的解析过程：
	- 浏览器是按着文档流从上到下逐步解析页面结构和信息的。
	- JavaScript代码作为嵌入的脚本应该也算做HTML文档的组成部分，所以JavaScript代码在装载时的执行顺序也是根据脚本标签script的出现顺序来确定的。
	- 如果通过脚本标签script的src属性导入外部JavaScript文件脚本，那么它也将按照其语句出现的顺序来执行，而且执行过程是文档装载的一部分。不会因为是外部JavaScript文件而延期执行。

2. 代码块：块加载块解析程序被分成了两段，JS引擎就不会一起执行
	- 某些情况下来控制执行时序
	- 变量提升发生在当前脚本块中

3. 预编译，发生变量提升。
	- JS解释之前会对Javascript进行一次“预编译”，在预编译的过程中，会把定义式的函数优先执行，也会把所有var变量创建，默认值为undefined，以提高程序的执行效率。
	- 只有函数申明会发生变量提升，因为对于自定义函数来说，变量初始化过程发生在执行期，而不是预编译期。在执行期，JavaScript解释器是按着代码先后顺序进行解析的，如果在前面代码行中没有为变量赋值，则JavaScript解释器会使用默认值undefined。







#### 浏览器页面加载解析渲染

[浏览器~加载，解析，渲染](http://www.jianshu.com/p/e141d1543143)

[看看实践总结](http://www.atatech.org/articles/51169)
#### ready与DOMContentLoaded
- onload事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
- DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。



[DOMContentLoaded基础以及兼容性](https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded)

[JS、CSS以及img对DOMContentLoaded事件的影响](http://www.alloyteam.com/2014/03/effect-js-css-and-img-event-of-domcontentloaded/)

- 在没有出现DOMContentLoaded事件出现以前，许多类库中都有模拟这个事件的方法，比如jQuery中著名的$(document).ready(function(){})，[详见](http://www.html-js.com/article/Read-jQuery-jQuery-DOM-Ready)



#### 可能遇到的复杂场景，先马
1. 脚本的并行加载方式，但一般难以保证脚本的执行顺序，比如：
	- Script DOM Element动态插入script，HTML5的async属性（google analysis就是结合了这两种方法）。
	- 一些其他的可以保证执行顺序的方法，但这些方法多存在一些其他的问题。比如用非标准的script的type属性“script/cache”，使脚本只加载不执行，在需要执行的时候将同样的url放在一个正常的script标签中，同样的方法也可以用来图片预加载；或用XHR来并行加载，可以保证执行顺序，但是有同域限制。



2. 找不到通过document.write()方法导入的外部JavaScript文件中声明的变量或函数。例如，看下面示例代码。



		document.write('<script type="text/javascript" src="test.js"></script>');
		document.write('<script type="text/javascript">');
		document.write('alert(n);');  // IE提示找不到变量n
		document.write('</script>');
		alert(n+1);                          
		// 所有浏览器都会提示找不到变量n
		外部JavaScript文件（test.js）的代码如下：
		var n = 1;


#### 其他资料
[大杂烩，适合概念清晰后阅读](http://www.51testing.com/html/38/225738-220986.html)

[Jquery保证js的执行顺序](http://www.cnblogs.com/sanshi/archive/2011/03/01/1968275.html)

[各大javascript框架式如何实现自己的dom ready事件](http://www.cnblogs.com/hh54188/archive/2013/03/01/2939426.html)
