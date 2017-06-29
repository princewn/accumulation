>判断如果是 JS 类型同时是 IE 浏览器的花，则用 onreadystatechange 的方法，否则全都用 load 事件来触发加载完后的回调函数。

http://yujiangshui.com/detect-files-which-load-by-javascript-is-loaded/


###怎样判断页面内容全部加载？
看怎么来解释 内容 这两个字。

对于页面来说，dom结构，样式,脚本也属于内容，页面内的图片文字视频音频也是内容。

那么我们常用的 window.onload和 jquery 中的 ready 函数就能判断内容是否全部加载完成吗？答案是否定的。以上两个只能判定页面骨架加载完成了，但是不能判定页面资源是否加载完成，比如页面的超大图片，视频等。还有如果是有异步请求的资源等都无法检测到的，尤其是在 onload 之后发生的请求。

那么1楼上说的 onreadystatechange回调是否可以处理呢？貌似也不行，原因看这里onreadystatechange 事件-w3school.

文中很明确的解释了，每当有请求发生时 readyState 都会改变并触发 onreadystatechange 那么问题来了，什么时候知道所有的请求都加载完了？尤其是耗时特长的的资源加载？

所以，总结一下就是：我们为什么要检测全部的内容加载完毕这个奇怪的需求呢？如果你需要动态处理 dom 那么在 onload|ready 中就可以了，因为此时页面 dom 已经加载完成了。如果你需要对某些异步的请求做监控，则只需要在对应的异步中添加上回调即可。


### JavaScript 判断 DOM 何时加载完毕
1 如果页面有很多的图片、视频等，用户可能得登上一段时间JavaScript才执行。
		
		addEvent(window, "load", function(){
    		// do something
		});
2 DOMContentLoaded 事件在许多Webkit浏览器以及IE9上都可以使用, 此事件会在DOM文档准备好以后触发, 包含在HTML5标准中. 对于支持此事件的浏览器, 直接使用DOMContentLoaded事件是最简单最好的选择.

3 readyState: 判断readyState的状态是否为Complete, interactive等触发

示例代码:


	document.onreadystatechange = function(e){
       document.getElementById("divMsg").innerHTML += "<br/> onreadystatechange, readyState:" + document.readyState;
   	};


单纯使用readyState属性是无法判断出Dom Ready事件的. interactive状态过早(DOM没有稳定), complete状态过晚(图片加载完毕).

当document文档正在加载时,返回"loading",当文档结束渲染但在加载内嵌资源时,返回"interactive",当文档加载完成时,返回"complete".[详见]("https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState")[PS.附AJAX - onreadystatechange 事件]("http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_onreadystatechange.asp")



4 外部script: 通过设置了script块的defer属性实现.

5 内部script:动态添加

6 setTimeOut以及微软document.documentElement.doScroll等必须在DOM主文档准备完毕时才可以正常触发的事件来判断

7 Jquery $(document).ready();
### performence
[Performance API]("http://javascript.ruanyifeng.com/bom/performance.html")

### 浏览器原理
[深度好文]("http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/")
