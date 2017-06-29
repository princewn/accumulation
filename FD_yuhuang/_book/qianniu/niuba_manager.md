### 遇到的问题
#### Vue is not defined 
>嵌入VM环境后发现，add require('vue-resource') line my code then i got Vue is not defined in console.


[类似问题]（https://github.com/vuejs/vue-resource/issues/2）
解决：requireJS的接口暴露方式
if（function）
define（）
if （object）
define（“vue”,function(){}）
Q:生产环境好用，线上无法使用
生产环境自动组装，线上只能通过暴露和路径
Q2生产和线上的适配
~ function(context, factory) {
    if (typeof require === 'undefined') {
        factory(context['Vue']);
    } else {
        require(['./vue'], function(ref) {
            factory(ref);
        });
    }
}(this, function(Vue) {}）

http://dontkry.com/posts/code/browserify-and-the-universal-module-definition.html
####实时监听输入框值变化的完美方案：oninput & onpropertychange
http://www.cnblogs.com/lhb25/archive/2012/11/30/oninput-and-onpropertychange-event-for-input.html
js控制input输入状态
http://www.lxway.com/196004.html

#### 关于文字内容溢出用点点点(…)省略号表示
http://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/

#### stylus
http://www.zhangxinxu.com/jq/stylus/conditionals.php

####webpack
http://gitlab.alibaba-inc.com/mqn/mqn-interview/tree/master/src
#### JSON.stringfy
Ajax传到后台的数据以及后台拿到数据的处理
Q表单和Ajax传到服务器端有哪些异同？
Qspring MVC将stringfy数据转回object？
>POSTING JSON TO SPRING MVC CONTROLLER

https://gerrydevstory.com/2013/08/14/posting-json-to-spring-mvc-controller/

#### linux vim基本语法
#### charles代理本地页面
#### 浏览器的隐身模式有哪些用处，以及Vue插件设置只在隐身模式下使用
#### 安装Sublime vue语法高亮真正起作用
#### Vue
>想要操作Dom就是错误


#### CSS冲突以及作用域
本身写错的代码并没有起作用，加上作用域以后优先级变高开始起作用，导致的无厘头错误




#### 502以及503
502，http://login.daily.taobao.net成功登陆后出现
503，服务器接口可访问，但出现报错


#### 。。。截断在线上出现，自己埋坑
#### 浏览器调试方式

-  hover查看变量
-  下边框切换div，停用启用 link script
Q快捷键不起作用，更多的变量查看以及断电方法
#### 阿里的KFC
http://kfc.alibaba-inc.com/v3/?spm=0.0.0.0.8FhKVD#/resource/server/account/33049

#### 将vue对象本身加入引起的大图，小图，内部错乱

发现一个稳定复现的报错https://github.com/vuejs/vue/issues/1205
Q考虑到那些解决方法呢？
- 最直观的考虑是错乱数组拼接问题，联想concat是否不合适采用
- 找到问题后，引入vue本身的去掉_observe_的方法
- vue的设计有其原因，使用者不应直接操作其本身，而是调用$.extend
#### 容易陷入一个问题无法自拔
- 添加一直思考反而越来越糊涂
- 图片一直象从服务器获取返回图片的难获知（接口——压缩代码）
#### 广撒网还是各个击破
- 修改多处后调试某一处问题，易有并发症
#### linux命令
http://www.cnblogs.com/mahang/archive/2011/09/01/2161672.html

#### JS屏蔽工具
