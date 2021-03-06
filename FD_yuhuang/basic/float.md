# float
二进制浮点数表示法并不能精确的表示类似0.1这样 的简单的数字，四舍五入到最接近的可表示的实数。</br>

执行一系列的运算，随着舍入误差的积累，运算结果会越来越不精确。舍入也会使我们通常所期望的算术运算定律产生一些出人意料的偏差。例如，实数满足结合律，这意味着，对于任意的实数x，y，z，总是满足(x + y) + z = x + (y + z)。</br>

这种计算结果可以胜任大多数的计算任务：浮点数失去精度通常在比较两个值是否相等时才会出现。</br>
<p>下文尝试分析一下原因以及解决方法。</p>

<p>在 ES6 的新标准中提出了像 Int8Array这样新的数据类型,在 ES6 之前数字类型是不区分什么 Int，Float，Double，Decimal 的。
<p>实际上，JavaScript的数字类型的本质就是一个<strong>基于 IEEE 754 标准的双精度 64 位的浮点数</strong>。按照标准，它的数据结构如图示这样：由1位符号位，11位指数部分以及52位尾数部分构成。</p>

<p><img src="http://jerryblog-image.b0.upaiyun.com/blog/posts/double_float.png" alt="general double float number" /></p>

由此二进制运算只能表示一组有限的数字，而不能表示所有的实数集，不精确。甚至一些看起来最简单的算术运算都会产生不正确的结果。<code class=" hljs lisp">0.1+0.2=0.300000000000004</span></code></p>






解决的思路有




1. parseInt，parseFloat<br>
	

			    var a = "0.11"; 
   				var b = "0.2801"; 
   				var c = "1.002";
   
   
   
	a，b，c相加本来为1.3921，但sum1得出的结果为：1.3921000000000001，这不是想要的结果，特别在计算金钱的时候，不需要如此精确的精度。可以使用toFixed(n)方法修正后（n是小数后精确的位数）。 <br>例如：
	
			parseFloat(1.392143).toFixed(2)=1.39


2. 位运算符:
   <p>这也是一种思路，但是并不推介。原因是按照ES标准，两个需要运算的值会被先转为<strong>有符号的32位整型</strong>。所以超过32位的整数会被截断，而小数部分则会被直接舍弃。</p>

	><p>ps,我们在什么情况下需要用到位操作符？使用左移来代替 2 的幂的乘法？而且对一个浮点数进行左移操作是否比直接乘 2 来得效率高，这也是个值得商榷的问题。</p>

	><p>用来表示标志位呢？首先，现在的内存大小已经不值得我们用精简几个变量来减少存储空间了；其次呢，使用标志位也会使得代码的可读性大大下降。</p>
  
  
  
  

3. 计算出小数点后位数的大的一个，乘法消去小数点做整数运算后做除法
 
			(arg1 * m - arg2 * m) / m
			
4. 转化为字符串处理		


		Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)

5. 使用三方JS插件，如：</br>
 big.js,bignumber.js，decimal.js等等,其差别以及优缺点请移步https://github.com/MikeMcl
 <br><br>
 
 
 
 先这样，等有了更多体会，再回来呦。