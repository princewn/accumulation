<script>
    // ~function(){
    //     var top = QN.top.invoke;
    //     QN.top.invoke = function(param) {
    //         console.log('**********', param)
    //         top.call(this, param)
    //     }
    // }()
</script>



(诶史)
诶史
http://o2oserver.taobao.com/server/wx.htm
(诶史)
诶史
这个页面是我们维护的么？
(诶史)
诶史
@之羽 
王凯丽(千葵)
千葵
是的，行家的
(诶史)
诶史
这个上传没有验证文件信息，flash可以伪装成jpg上传上去，麻烦修改一下
(诶史)
诶史
这个页面是@千葵 跟进么？
王凯丽(千葵)
千葵
这个页面是行家的，但是在“商户后台一体化项目”下
(诶史)
诶史
额...那我该找谁呢？
王凯丽(千葵)
千葵
我找倾城看看，之前是他写的
昨天 18:12
(诶史)
诶史
这个上传漏洞让全淘宝允许alicdn域flash访问的站点被csrf了...不忍直视，_tb_token随便拿，赶紧修一下吧
(诶史)
诶史
感兴趣的自己玩一下
(诶史)
诶史
flashcsrf.html
(574.0 B)
打开文件夹预览群文件
昨天 19:32
(雷蜜)

购物车以前也因为这个被攻击过
09:09
(倾程) 09:09:16
倾程
这个问题我来搞




不会被缓冲代码

    - for (var i = 0; i < 3; i++)
    li wandoujia-fe
会转换为：

<li>wandoujia-fe</li>
<li>wandoujia-fe</li>
<li>wandoujia-fe</li>
被缓冲代码

    p= 'Welcome to wandoujia fe, we want you'
会转换为：

<p>Welcome to wandoujia fe, we want you</p>
这里注意一下 =默认会转义内容
p= 'Welcome to wandoujia fe, we want <b>you</b>'
会转换为：

<p>Welcome to wandoujia fe, we want &lt;b&gt;you&lt;/b&gt;</p>
如果不想被转义的，在=前面添加!

p!= 'Welcome to wandoujia fe, we want <b>you</b>'
会转换为：

<p>Welcome to wandoujia fe, we want <b>you</b></p>




变量中的特殊字符会被转义，如：

- var name = '<script></script>'
| #{name}
会转换为：

&lt;script&gt;&lt;/script&gt;
如要得到不转义的，用!替换#来调用

    - var name = '<script></script>'
    | !{name}
会转换为：

<script></script>
|其实就是管道，一般也可以定义一段文本





外跳URL需要走BrowserUrl，完成免登录


千牛组件、API

 

通过JSSDK内置方法

接口分一级层次：

QN.plugin.invoke         // 工具栏插件调用协议

QN.wwplugin.invoke       // 旺旺插件调用协议

QN.application.invoke    // 应用本身提供的属性与方法等

QN.wangwang.invoke       // 旺旺相关的接口

QN.top.invoke            // top相关的接口透传调用

QN.component.invoke      // 组件调用