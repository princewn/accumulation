## form
### HTML DOM Checkbox 对象
   - checkboxObject.checked=true|false 
   - $(":checked").hide();
3. <input type="checkbox" checked="checked" disabled=""><span>checked="checked"只能表明初始时的状态</span>


###  filedset
#### 是什么
当一组表单元素放到 fieldset 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。

	<form>
	  <fieldset>
	    <legend>健康信息</legend>
	    身高：<input type="text" />
	    体重：<input type="text" />
	  </fieldset>
	</form>
	<fileset dir="${server.src}">
		<patternset/>
		<Selector/>
	</fileset>
http://liuna718-163-com.iteye.com/blog/1860344
#### 拓展学习
- 表单能够包含 input 元素，text submit radio checkbox file
- 表单还可以包含 menus、textarea、fieldset、legend 和 label 元素。

HTML DOM 

1. Input Button 对象 
	- 新接触到accessKey，form等input对象属性
2. Input Color 对象
	- span
	- autocomplete VS defaultValue
3. Input Hidden 对象
	- 而不是visibal 或者 display
Password Radio Reset Search Submit 了解用法

4. 表单事件
	-  在表单提交之前，触发 onclick 事件句柄，并且一个句柄可以通过返回 fasle 来取消表单提交。
    - formObject.submit()方法提交表单的方式与用户单击 Submit 按钮一样，但是表单的 onsubmit 事件句柄不会被调用。
    - 当用户单击了表单中的 Submit 按钮而提交一个表单时，就会调用这个事件句柄函数。注意，当调用方法Form.submit() 时，该处理器函数不会被调用。
如果 onsubmit 句柄返回 fasle，表单的元素就不会提交。如果该函数返回其他值或什么都没有返回，则表单会被提交。

Q

- 表单提交与唯一的name
- Button 对象的属性VS标准属性
- autocomplete VS defaultValue

#### h5
- HTML input> 标签的 accept 属性
如果不限制图像的格式，可以写为：accept="image/*"。
>定义和用法
accept 属性只能与 <input type="file"> 配合使用。它规定能够通过文件上传进行提交的文件类型。
提示：请避免使用该属性。应该在服务器端验证文件上传。
属性值
MIME_type	用逗号隔开的 MIME 类型列表。
在 HTML 4.01 中，不赞成使用 input 元素的 align 属性。在 XHTML 1.0 Strict DTD 中不支持该属性。
请使用 CSS 代替。
CSS 语法：

		<input type="image" style="float:right" />


- 位于表单之外的输入字段：
Last name: 

		<input type="text" name="lname" form="nameform" />
form 属性的值必须是其所属表单的 id。
如需引用一个以上的表单，请使用空格分隔的列表。
- formaction 属性是 input 标签在 HTML5 中的新属性。

		<!DOCTYPE HTML>
		<html>
		<body>
		
		<form action="/example/html5/demo_form.asp" method="get">
		First name: <input type="text" name="fname" /><br />
		Last name: <input type="text" name="lname" /><br />
		<input type="submit" value="提交" /><br />
		<input type="submit" formaction="/example/html5/demo_admin.asp" value="以管理员身份提交" />
		</form>
		
		</body>
		</html>


- input formenctype="value"
属性值
		1. application/x-www-form-urlencoded	在发送前对所有字符进行编码（默		认）。
		2. multipart/form-data	不对字符编码。当使用有文件上传控件的表单时，该值是必需的。
		3. text/plain	将空格转换为 "+" 符号，但不编码特殊字符。

