### match正则表达式
#### String和RegExp都定义了正则表达式方法
#### RegExp：1构造函数 2直接量语法
#### 支持正则表达式的 String 对象的方法：search,match,replace,split
#### 存在问题：只了解基础的正则用法，常用的解决方法是到网上找方法，对于不同的方法返回值没有记忆。$等组的概念处于看过状态。
#####watch方法
类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置

	var str="1 plus 2 equal 3"
    document.write(str.match(/\d+/g))
    
    =>1,2,3
    
    
#####返回值
存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。
#####注意
在全局检索模式下，match() 即不提供与子表达式匹配的文本的信息，也不声明每个匹配子串的位置。如果您需要这些全局检索的信息，可以使用 RegExp.exec()。


- 有g时
- 无g时



		var src = "azcafAJAC";
		var re = /[a-c]/;
		var result = src.match(re);
		// The entire match is in array element 0.
		document.write(result[0] + "<br/>");
		// Now try the same match with the global flag.
		var reg = /[a-c]/g;
		result = src.match(reg);
		// The matches are in elements 0 through n.
		for (var index = 0; index < result.length; index++)
		{
    		document.write ("submatch " + index + ": " +  result[index]);
    		document.write("<br />");
		}
#### 组的实践
		
		
#### 参考资料
http://www.runoob.com/regexp/regexp-syntax.html
