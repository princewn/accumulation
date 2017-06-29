## 哪些元素是focusable的

默认情况下，只有部分html元素能获得鼠标焦点如input，很大一部分html元素是不能获得鼠标焦点的如div，这些能够获得鼠标焦点的元素就是focusable 元素。

要想一个元素获得焦点，可以通过三种方式：鼠标点击,tab 键,调用focus()方法

默认情况下，哪些元素是focusable 元素

- window：当页面窗口从隐藏变成前置可见时，focus 事件就会触发
- 表单元素(form controllers)：input/option/textarea/button
- 链接元素(links)：a标签、area标签（必须要带 href 属性，包括 href 属性为空）
- 设置了 tabindex 属性（tabindex 值非-1）的元素
- 设置了contenteditable = "true"属性的元素

tabindex属性

- 默认情况下就能 focusable 的元素太少，如果想让一个 div 元素成为 focusable 的元素怎么做呢？很简单，设置 tabindex 属性即可！

- tabindex 有2个作用：

	- 使一个元素变成 focusable 
> 只要在元素上设置了 tabindex 属性，不管此属性的值设为多少，此元素都将变成focusable元素。


	- 定义多次按下 TAB 键时获得焦点的元素顺序
tabindex 属性的值可以正数、0、负数，
>当多次按下TAB键，首先是tabindex为正数的元素获得焦点，顺序是：tabindex=1、tabindex=2、tabindex=3、tabindex=...，最后是tabindex=0的元素获得焦点。注意：tabindex为负数的元素不能通过 TAB 键获得焦点，只能通过鼠标点击或者调用focus()方法才能获得焦点。示例代码如下：


			<ul>
				<li tabindex="1" onfocus="showFocus(this)">One</li>
				<li tabindex="0" onfocus="showFocus(this)">Zero</li>
				<li tabindex="2" onfocus="showFocus(this)">Two</li>
				<li tabindex="-1" onfocus="showFocus(this)">Minus one</li>
				<li tabindex="-2" onfocus="showFocus(this)">Minus two</li>
			</ul>