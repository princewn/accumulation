### Jquery新点
1. dom和Jquery对象
jquery提供了两种方法将一个jquery对象转换成一个dom对象，即[index]和get(index)
对于一个dom对象，只需要用$()把dom对象包装起来，就可以获得一个jquery对象了，方法为$(dom对象);

2. 使用 $(document).ready() 的简写，同时内部的 jQuery 代码依然使用 $ 作为别名，而不管全局的 $ 为何。
jQuery 代码:
jQuery(function($) {
  // 你可以在这里继续使用$作为别名...
});


3. $("ul").context，返回传给jQuery()的原始的DOM节点内容，即jQuery()的第二个参数。如果没有指定，那么context指向当前的文档(document)。
4.  $("ul").selector，返回传给jQuery()的原始选择器。


5. HTML 代码:
> <ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>
jQuery 代码:
$('li').index(document.getElementById('bar')); //1，传递一个DOM对象，返回这个对象在原先集合中的索引位置
$('li').index($('#bar')); //1，传递一个jQuery对象
$('li').index($('li:gt(0)')); //1，传递一组jQuery对象，返回这个对象中第一个元素在原先集合中的索引位置
$('#bar').index('li'); //1，传递一个选择器，返回#bar在所有li中的做引位置
$('#bar').index(); //1，不传递参数，返回这个元素在同辈中的索引位置。  


6. 使用。one来避免重复绑定

7. AJAX 请求失败时显示信息。
jQuery 代码:
$("#msg").ajaxError(function(event,request, settings){
     $(this).append("<li>出错页面:" + settings.url + "</li>");
});


8. Jquery data()
jQuery.data() 方法允许我们在DOM元素上附加任意类型的数据,避免了循环引用的内存泄漏风险。如果 DOM 元素是通过 jQuery 方法删除的或者当用户离开页面时，jQuery 同时也会移除添加在上面的数据。我们可以在一个元素上设置不同的值，并获取这些值：


		jQuery.data(document.body, 'foo', 52);
		jQuery.data(document.body, 'bar', 'test');