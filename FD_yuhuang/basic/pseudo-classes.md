# pseudo-classes
### 伪类
    - :nth-clild(an+b)
    - :nth-last-child从后往前选择元素，而不是从前往后。
    
    		tr:nth-last-child(-n+4)
			匹配HTML表格中的最后四行。
			
			
    - :empty 伪类 代表没有子元素的元素。
    - :target http://labs.qianduan.net/target.html#tab1
    - :after 伪元素如果没有设置“content”属性，伪元素是无用的。可以设置content属性值为空,伪元素不会继承没有自然继承自父元素(如 padding and margins)的样式。
    -  :only-child选择的元素是它的父元素的唯一一个了元素；
    - :only-of-type选择一个元素是它的上级元素的唯一一个相同类型的子元素；

### 实践
    
#### 插入非文本内容
 
- 首先，你可以包含一个指向一个图像的URL，就像在css里包含一个背景图像一样做你能做的,你可以包含一个Data URI代替图像引用，正如你可以用css背景一样。

- 你还可以选择ATRR(X)中的函数的形式。此功能，根据规范 ，“把X属性的值以字符串的形式返回”

>http://www.w3cplus.com/css3/learning-to-use-the-before-and-after-pseudo-elements-in-css.html

> 也可以模拟一些简单的妙用http://blog.dimpurr.com/css-before-after/

