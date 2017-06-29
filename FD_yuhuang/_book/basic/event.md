
Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
### 易忽略的点
- 事件代理
- 时间冒泡与捕获
	- cancelable 事件属性 事件返回一个布尔值。如果用 preventDefault() 方法可以取消与事件关联的默认动作，则为 true，否则为 fasle。
	- stopPropagation()
终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。
- 冒泡的可取消与取消
- preventDefault默认时间指的是什么，哪些事件上可以产生什么作用
	- prevent default
Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。
- 模拟移动事件


### 不常用的事件属性
- 点击鼠标按钮属性，键盘keyCode，节点的 nodetype

		function whichButton(event)
		{
		    var btnNum = event.button;
		}
		function whichButton(event)
		{
			alert(event.keyCode)
		}
		function whichElement(e)
		{
			var targ
			if (!e) var e = window.event
			if (e.target) targ = e.target
			else if (e.srcElement) targ = e.srcElement
			if (targ.nodeType == 3) // defeat Safari bug
		   		targ = targ.parentNode
			var tname
			tname=targ.tagName
			alert("You clicked on a " + tname + " element.")
		}
		function getEventType(event)
		{ 
		    alert(event.type);
		}
		
		
### 事件可能先后发生
- onclick 与 onmousedown 不同。单击事件是在同一元素上发生了鼠标按下事件之后又发生了鼠标放开事件时才发生
###	哪些元素相应哪些事件
- onerror
支持该事件的 HTML 标签：img>, object>, style>
支持该事件的 JavaScript 对象：
window, image
- onload

### 事件触发的条件
#### onchange 事件
onchange 事件会在域的内容改变时发生。
#### 需要注意的是
改变是指用户改变输入域,人为JS改变value是不能够触发的


Q

- 传入的event


