# JSSDK
#JSSDK
淘宝开放平台SDK提供了API的请求封装、摘要签名、响应解释、消息监听等功能，使用SDK可以轻松完成API的调用，API结果的获取，消息的实时监听。
#### 事件名称：
- wangwang.trade_focus
- cmd为'getVersion'和'getLoginuser'
#### 待确认
- 新增组件接口的支持QN.component
- QN.wangwang
- QN.event.postEvent()
- application
- 请slot类插件正常打开后调用设置回包方法：QN.plugin.successResponse和QN.plugin.errorResponse
- top并发调用方法：tql;
#### plugin.manifest的本地配置中，字段call_back_Url改成call_back_url;
#### 新增jssdk的引入方式，直接使用线上地址，不要使用本地资源，详见jssdk的引入;
线上jssdk的地址，请ISV及时更新；
#### 新增group类型插件和widget插件模式，详见”附录一:千牛PC产品框架介绍.pdf”;

新增QN.plugin.invoke的调用方式，支持group类插件打开自己的千牛(pc)插件;
#### 关于callbackurl签名sign的说明，详见接口调用部分;

本地开发者模式变更plugin_dev2，字段变更详见开发环境搭建;

#### 新增top的HTTPS调用方式，详见top接口部分;
#### 本地存储支持
#### web容器的支持特征（html5）描述
#### 插件回调地址设置初始参数xxx.com?arg1=2，但是初始参数也会一起计算到sign签名中;
#### 新增交易、退款和商品的事件通知：bench.trade_info, bench.refund_info, bench.item_info;
#### 窗口
千牛插件的窗口形态变化通知'bench.plugin_qn_wnd.changed'

#### 新增系统能力开放接口：workbench.platform.print （详见打印二期文档）

新增系统能力开放接口：workbench.platform.clipboard 支持剪贴板设置
#### Q
旺旺插件使用注册“wangwang.active_contact_changed”的事件方式来实现当前联系人变化。此方式可以给用户更好的切换体验，同时减少ISV后台资源消耗；但需关注内存增长。
#### 新增插件开发注意点：

    * CSS3的Transtion特性，不要使用，影响性能，CPU会很高

    * 不建议使用JS做动画

    * 插件服务器要配好Cache机制

    * JSSDK不能再onload之前使用，否则报workbench异常

    * 开发插件时，多观察插件的运行时cpu
    
#### 全面支持通用协议，具体见通用协议文档。
