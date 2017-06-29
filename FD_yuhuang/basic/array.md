# array
### 
- 数字是特殊的对象
- 判断一个对象o是不是数组的最好方法是

		Object.prototype.toString.call(0) === "[object array]"
	- typeof=>object
	- instanceof Array =>true,出错的可能在于不同窗体同名变量可能会混淆
- 改变本身的方法sort，reverse,push,pop,unshift,shift
- 产生新对象的方法join,concat,splice,slice



### Array.prototype
- Array.prototype 本身也是个数组。

		Array.isArray(Array.prototype); // true
		
   所以它也有 length 属性，这个值为 0，因为它是个空数组。
   可以用来对类数组对象使用数组方法
 - 常用的Array.prototype.map()
 - Array.prototype.forEach()
     - Q:callback中第三个参数array作用：数组元素，元素索引，数组本身
        
### 不会改变自身的方法

<p>下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。</p>

<dl>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" title="将传入的数组或非数组值与原数组合并,组成一个新的数组并返回."><code>Array.prototype.concat()</code></a></dt>
 <dd>返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" title="includes() 方法用来判断当前数组是否包含有指定的元素。"><code>Array.prototype.includes()</code></a> <span title="这是一个实验性的 API，请尽量不要在生产环境中使用它。"><i class="icon-beaker"> </i></span></dt>
 <dd>判断当前数组是否包含某指定的值，如果是返回 <code>true</code>，否则返回 <code>false</code>。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" title="join() 方法将数组中的所有元素连接成一个字符串。"><code>Array.prototype.join()</code></a></dt>
 <dd>连接所有数组元素组成一个字符串。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" title="slice() 方法把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组。"><code>Array.prototype.slice()</code></a></dt>
 <dd>抽取当前数组中的一段元素组合成一个新数组。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource" title="返回一个字符串,代表该数组的源代码."><code>Array.prototype.toSource()</code></a> <span title="This API has not been standardized."><i class="icon-warning-sign"> </i></span></dt>
 <dd>返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource" title="返回一个对象源代码的字符串表示."><code>Object.prototype.toSource()</code></a> 方法。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" title="toString() 返回一个字符串，表示指定的数组及其元素。"><code>Array.prototype.toString()</code></a></dt>
 <dd>返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" title="toString() 方法返回一个代表该对象的字符串。"><code>Object.prototype.toString()</code></a> 方法。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString" title='toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。'><code>Array.prototype.toLocaleString()</code></a></dt>
 <dd>返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 <a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString" title="toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。"><code>Object.prototype.toLocaleString()</code></a> 方法。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" title="indexOf()方法 返回根据给定元素找到的第一个索引值，否则返回-1。"><code>Array.prototype.indexOf()</code></a></dt>
 <dd>返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。</dd>
 <dt><a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" title="lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。"><code>Array.prototype.lastIndexOf()</code></a></dt>
 <dd>返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。</dd>
</dl>
   
   
### Q:
1. toLocalString本地化是什么
	
	>数组变为字符串，并使用本地化（和自定义实现的）分隔符连接

2. Array.prototype.entries() 

	>返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。


