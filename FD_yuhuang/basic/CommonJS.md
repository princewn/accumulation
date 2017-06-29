# 模块化规范
关于以下这部分内容，只在一个项目中用到过AMD入门，理解尚浅。其实，匿名模块还不是，慢慢再理解。
## CommonJS
- CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。

- 关键字module gloabel exports require
- CommonJS 标准大致如下：

- CommonJS有一个全局性的方法 require()，主要用于加载模块，加载后，就可以调用模块的方法；

		var math = require('math');

- CommonJS还有一个全局变量 exports，它用来导入模块的方法，通过它导入的方法，便是这个模块的API，可供调用：

		//math.js
		math.add(2,3);

		exports.add = function() {
    		var sum = 0, i = 0, args = arguments, l = args.length;
    		while (i < l) {
       			sum += args[i++];
    		}
    		return sum;
	   };
[学习文档](http://javascript.ruanyifeng.com/nodejs/module.html)

## webpack
### 什么是 webpack？
webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。
### 用法
require(XXX) 的形式来引入各模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情
### webpack 的优势

其优势主要可以归类为如下几个：

1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。

2. 能被模块化的不仅仅是 JS 了。

3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。

4. 扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。

我们谈谈第一点。以 AMD/CMD 模式来说，鉴于模块是异步加载的，所以我们常规需要使用 define 函数来帮我们搞回调：


## AMD与CMD 
玉伯，因上努力，果上随缘。

>	AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD
	CMD 规范在这里：https://github.com/seajs/seajs/issues/242

	AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
	CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

	这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。
	目前这些规范的实现都能达成浏览器端模块化开发的目的。

	区别：

	1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
	
	2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

	// CMD
	define(function(require, exports, module) {
	var a = require('./a')
	a.doSomething()
	// 此处略去 100 行
	var b = require('./b') // 依赖可以就近书写
	b.doSomething()
	// ... 
	})

	// AMD 默认推荐的是
	define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
	a.doSomething()
	// 此处略去 100 行
	b.doSomething()
	...
	}) 

	虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。


	3. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。


	4. 还有一些细节差异，具体看这个规范的定义就好，就不多说了。

	另外，SeaJS 和 RequireJS 的差异，可以参考：https://github.com/seajs/seajs/issues/277