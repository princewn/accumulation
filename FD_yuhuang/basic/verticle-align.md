# verticle-align
- 常见场景是居中。尤其是form。
- 在一些display情况复杂的情境下失效,转而用flex解决，所以该属性使用渐少


内容包括：

css1即有的，也要考虑浏览器支持
适用元素
取值
容易忽略的特性
新手疑惑点
他说：老司机的看法
业务联想
参考资料 
详细请戳 这里 
无法跳转时，请手动：http://gitlab.alibaba-inc.com/wn105798/accumulation/blob/master/css_vertical-align.md


### 支持
对于这个元素，Can I use是这么说的
> CSS vertical-align property
This CSS property is supported in effectively all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)

需要注意的是

-  任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"。
-  由于IE6/7对inline box的解释不完善，同时对vertical-align的认识也可能会对您产生误导的，
-  行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。


	
#### 适用元素
inline-level and table-cell elements. It also applies to ::first-letter and ::first-line.例如图片，按钮，单复选框，单行/多行文本框等HTML控件，只有这些元素默认情况下会对vertical-align属性起作用

#### 取值 (行内(inline)元素)

<p>多数值是相对于父元素：</p>

<dl>
 <dt><code>baseline</code></dt>
 <dd>元素基线与父元素的基线对齐。一些 <a href="/en-US/docs/CSS/Replaced_element" title="CSS/Replaced_element">可替换元素</a>，比如 <a href="/zh-CN/docs/Web/HTML/Element/textarea" title="The HTML &lt;textarea> element represents a multi-line plain-text editing control."><code>&lt;textarea&gt;</code></a> ， HTML标准没有说明它的基线，这意味着使用这个关键字，各浏览器表现可能不一样。</dd>
 <dt><code>sub</code></dt>
 <dd>元素基线与父元素的下标基线对齐。</dd>
 <dt><code>super</code></dt>
 <dd>元素基线与父元素的上标基线对齐。</dd>
 <dt><code>text-top</code></dt>
 <dd>元素顶端与父元素字体的顶端对齐。</dd>
 <dt><code>text-bottom</code></dt>
 <dd>元素底端与父元素字体的底端对齐。</dd>
 <dt><code>middle</code></dt>
 <dd>元素中线与父元素的基线对齐。</dd>
 <dt><code><a href="/en-US/docs/CSS/length" title="CSS/length">&lt;length&gt;</a></code></dt>
 <dd>元素基线超过父元素的基线指定高度。可以取负值。</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>同 &lt;length&gt; , 百分比相对于 <a href="/zh-CN/docs/Web/CSS/line-height" title="On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."><code>line-height</code></a> 。</dd>
</dl>

<p>下面两个属性不像上面的属性相对于父元素，而是相对于整行：</p>

<dl>
 <dt><code>top</code></dt>
 <dd> 元素及其后代的顶端与整行的顶端对齐。</dd>
 <dt><code>bottom</code></dt>
 <dd>元素及其后代的底端与整行的底端对齐。</dd>
</dl>

<p>如果元素没有基线baseline，则以它的外边距的下边缘为基线。</p>

#### 取值 (table-cell元素)

<dl>
 <dt><code>baseline</code> (and <code>sub</code>, <code>super</code>, <code>text-top</code>, <code>text-bottom</code>, <code>&lt;length&gt;</code>, and <code>&lt;percentage&gt;</code>)</dt>
 <dd>与同行单元格的基线对齐。</dd>
 <dt><code>top</code></dt>
 <dd>单元格的内边距的上边缘与行的顶端对齐。</dd>
 <dt><code>middle</code></dt>
 <dd>单元格垂直居中。</dd>
 <dt><code>bottom</code></dt>
 <dd>单元格的内边距的下边缘与行的底端对齐。</dd>
</dl>

<p>可以取负值。</p>



#### 其他
- 默认值：	baseline
- 继承性：	no

#### 容易忽略的特性
-  使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
-  inherit	规定应该从父元素继承 vertical-align 属性的值。


####  新手疑惑点
-  基线
![基线](http://image.zhangxinxu.com/image/blog/200911/base_line.jpg)


- 对比vertical-align:bottom和vertical-align:text-bottom，他们的表现似乎一样，实际上呢，这里的表现一致只是一个巧合而已，此话怎讲？要显示其差异很简单，添加一个line-height值，您就会看到不一样的地方了。
- 实例：line-height:10px + vertical-align:bottom</i>参见如下的CSS代码：

		.box{background:black; color:white; padding-left:20px; line-height:10px;}
		.dot{display:inline-block; width:4px; height:4px; background:white; vertical-align:bottom;}


![enter image description here](http://image.zhangxinxu.com/image/blog/201005/2010-05-14_194547.png)
- 而如果vertical-align的属性是text-bottom呢？
- 实例五：line-height:10px + vertical-align:text-bottom</i>参见如下的CSS代码：

		.box{background:black; color:white; padding-left:20px; line-height:10px;}
		.dot{display:inline-block; width:4px; height:4px; background:white; vertical-align:text-bottom;}

- 结果如下图：![enter image description here](http://image.zhangxinxu.com/image/blog/201005/2010-05-14_195120.png)
- 可以看到，vertical-align:text-bottom属性的那个小方点的位置没有随着line-height的改变而改变，还是与文字的底部对齐。如果您细看关于text-bottom以及bottom属性的定义，您可以找到其表现的原因：text-bottom是与父标签的文字底部对齐，在这里也就是后面的“我是一个卡哇伊的文字”这段文字对齐，而bottom是相对于父标签的底部对齐，而如果您熟悉line box模型且对高度的本质有所了解，那么您就会明白为什么line-height会改变标签的bottom的位置了。

####  他说
> inline水平元素受vertical-align属性而位置改变等不是因为其对vertical-align属性敏感或起作用，而是受制于整个line box的变化而不得不变化的

可以更多思考讨论的是


> 这里说点我的认识吧：vertical-align:middle属性的表现与否，仅仅与其父标签有关，至于我们通常看到的与后面的文字垂直居中显示那都是假象！


#### 业务联想


-  vertical-align & text-align
-  vertical-align & line-height
-  vertical-align & display:table-cell


#### 参考文档
-  http://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/

-  https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align
-  http://www.zhangxinxu.com/wordpress/2010/06/css-vertical-align%E7%9A%84%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89%E4%B9%8Btext-top%E7%AF%87/
-  http://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/
