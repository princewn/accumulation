看到的时候so what,用到的时候wow！回头看看
### 字体展示组合拳
	text-wrap	规定文本的换行规则。	
	word-break	规定非中日韩文本的换行规则。	
	word-wrap	允许对长的不可分割的单词进行分割并换行到下一行。
	text-justify	规定当 text-align 设置为 "justify" 时所使用的对齐方法。

<p>1、普通的文本段</p> 
<p>对于普通的文本段的话只需要定义下面三个属性</p> 
<pre class="brush:css;toolbar: true; auto-links: false;">p&nbsp;{
&nbsp;&nbsp;&nbsp;white-space:&nbsp;nowrap;&nbsp;/*&nbsp;使内容不自动换行&nbsp;对应的还有&nbsp;normal&nbsp;自动换行&nbsp;*/
&nbsp;&nbsp;&nbsp;overflow:&nbsp;hidden;&nbsp;/*&nbsp;超出容器范围的内容隐藏&nbsp;*/
&nbsp;&nbsp;&nbsp;text-overflow:&nbsp;ellipsis;&nbsp;/*&nbsp;文本超出容器范围以&nbsp;...&nbsp;做截断&nbsp;*/
}</pre> 
<pre class="brush:css;toolbar: true; auto-links: false;">&lt;p&gt;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;hello&nbsp;world&nbsp;&lt;/p&gt;</pre> 
<p>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://static.oschina.net/uploads/space/2016/0301/100910_5YbD_252076.jpg"></p> 
<p>2、表格的文本段</p> 
<p>&nbsp; &nbsp;<span style="color: rgb(255, 0, 0);">当在表格中想要实现此效果时需要将此表格的 table-layout 设为 fixed</span><br></p> 
<pre class="brush:css;toolbar: true; auto-links: false;">table&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100%;
&nbsp;&nbsp;&nbsp;&nbsp;table-layout:&nbsp;fixed;&nbsp;/*&nbsp;一定要有此属性&nbsp;*/
}
td&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;white-space:&nbsp;normal;
&nbsp;&nbsp;&nbsp;&nbsp;overflow:&nbsp;hidden;
&nbsp;&nbsp;&nbsp;&nbsp;text-overflow:&nbsp;ellipsis;
}</pre> 
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他与普通文本段的定义没区别<br></p> 	
### CSS3 选择器
<table>
				<thead>
					<tr>
						<th>选择符类型</th>
						<th>表达式</th>
						<th>描述</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>子串匹配的属性选择符</td>
						<td><a href="attribute_selector_01.shtml.htm" ]</a></td>
						<td>匹配具有att属性、且值以val开头的E元素</td>
					</tr>
					<tr>
						<td>子串匹配的属性选择符</td>
						<td><a href="attribute_selector_02.shtml.htm" ]</a></td>
						<td>匹配具有att属性、且值以val结尾的E元素</td>
					</tr>
					<tr>
						<td>子串匹配的属性选择符</td>
						<td><a href="attribute_selector_03.shtml.htm" ]</a></td>
						<td>匹配具有att属性、且值中含有val的E元素</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_04.html" >E:root</a></td>
						<td>匹配文档的根元素。在HTML中，根元素永远是HTML</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_05.html" >E:nth-child(n)</a></td>
						<td>匹配父元素中的第n个子元素E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_06.html" >E:nth-last-child(n)</a></td>
						<td>匹配父元素中的倒数第n个结构子元素E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_07.html" >E:nth-of-type(n)</a></td>
						<td>匹配同类型中的第n个同级兄弟元素E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_08.html" >E:nth-last-of-type(n)</a></td>
						<td>匹配同类型中的倒数第n个同级兄弟元素E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_09.html" >E:last-child</a></td>
						<td>匹配父元素中最后一个E元素</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_10.html" >E:first-of-type</a></td>
						<td>匹配同级兄弟元素中的第一个E元素</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_11.html" >E:only-child</a></td>
						<td>匹配属于父元素中唯一子元素的E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_12.html" >E:only-of-type</a></td>
						<td>匹配属于同类型中唯一兄弟元素的E</td>
					</tr>
					<tr>
						<td>结构性伪类</td>
						<td><a href="attribute_selector_13.html" >E:empty</a></td>
						<td>匹配没有任何子元素（包括text节点）的元素E</td>
					</tr>
					<tr>
						<td>目标伪类</td>
						<td><a  href="attribute_selector_20.html" >:target</a></td>
						<td>匹配相关URL指向的E元素</td>
					</tr>
					<tr>
						<td>UI元素状态伪类</td>
						<td><a href="attribute_selector_14.html" >E:enabled</a></td>
						<td>匹配所有用户界面（form表单）中处于可用状态的E元素</td>
					</tr>
					<tr>
						<td>UI元素状态伪类</td>
						<td><a href="attribute_selector_15.html" >E:disabled</a></td>
						<td>匹配所有用户界面（form表单）中处于不可用状态的E元素</td>
					</tr>
					<tr>
						<td>UI元素状态伪类</td>
						<td><a href="attribute_selector_16.html" >E:checked</a></td>
						<td>匹配所有用户界面（form表单）中处于选中状态的元素E</td>
					</tr>
					<tr>
						<td>UI元素状态伪类</td>
						<td><a href="attribute_selector_17.html" >E::selection</a></td>
						<td>匹配E元素中被用户选中或处于高亮状态的部分</td>
					</tr>
					<tr>
						<td>否定伪类</td>
						<td><a href="attribute_selector_18.html" >E:not(s)</a></td>
						<td>匹配所有不匹配简单选择符s的元素E</td>
					</tr>
					<tr>
						<td>通用兄弟元素选择器</td>
						<td><a href="attribute_selector_19.html" >E ~ F</a></td>
						<td>匹配E元素之后的F元素</td>
					</tr>
				</tbody>
			</table>#### 理解上去还是比较绕的。列举两个使用实例
1 :not：$('body'):not('input')错解成body中除了input的元素。	 实际为选出$('body')同级的不是input的
2 :last-child
	父元素中最后一个E元素，而不是当前元素