        QN.implement.api({
            cmd: 'itemToUser',
            onInvoke: function(param) {
                $("#promote-tab").click();
                // App.router.navigate('#guess', {trigger: true});
            }
        });
        
        
像素对比比较出名的工具是PhantomCSS。 PhantomCSS结合了 Casperjs截图和ResembleJs 图像对比分析。单纯从易用性和对比效果来说还是不错的。
多浏览器测试最出名的当属selenium , selenium可以自动化的获取多个浏览器下的截图，前端工程师来说还可以借助Node的webdriver 来轻松开发测试脚本。

但selenium的安装和上手成本要稍大些，而且对于多浏览器来说，各个浏览器之间的兼容性对比容易出错。不同浏览器截图可能一像素的偏差就导致截屏对比失败，多浏览器可能更适用回归性测试。

当然selenium同样支持操作测试，类似的工具还有dalekjs等，如果想专门针对IE测试，可以考虑[triflejs]http://triflejs.org/,它提供了与PhantomJS基本类似的API。

响应式页面测试
例如BackstopJS 项目，便是通过PhantomJS、capserJS等工具在不同尺寸下截图然后根据resemberJS进行像素比对判断是否正常:



dom结构对比

像素对比虽然直观，但动态元素居多且无法保证测试页面与线上页面同步时有所局限。@云龙大牛针对这个问题提供了新的解决方案page-monitor，根据dom结构与样式的对比来对比整个页面的变动部分。



功能测试。即便是界面正常，功能正常也是必须关注的部分。最直接的功能测试就是模拟用户操作，通过模拟正常的操作流程来判断页面展现是否符合预期。

Phantomjs、CasperJS

大名鼎鼎的PhantomJS当然要隆重介绍啦！前面界面对比测试基本都是基于PhantomJS开发的， Phantom JS是一个服务器端的 JavaScript API 的 WebKit。其支持各种Web标准： DOM 处理, CSS 选择器, JSON, Canvas, 和 SVG。对于web测试、界面、网络捕获、页面自动化访问等等方面可以说是信手拈来。

casperjs是对PhantomJS的封装，提供了更加易用的API, 增强了测试等方面的支持。例如通过CasperJS可以轻松实现贴吧的自动发帖功能：




PhantomFlow操作对比测试

有没有像图像对比一样直观，又能比较简单的写case的工具呢？可以考虑PhantomFlow, PhantomFlow假定如果页面正常，那么在相同的操作下，测试页面与正常页面的展现应该是一样的。 基于这点，用户只需要定义一系列操作流程和决策分支，然后利用PhantomCSS进行截图和图像对比。最后在一个很赞的可视化报表中展现出来。可以看下作者所在公司进行的测试可视化图表：


性能测试
基于PhantomJS的工具Phantomas,它能运行测试页面获取很多性能指标，加载时间、页面请求数、资源大小、是否开启缓存和Gzip、选择器性能、dom结构等等诸多指标都能一次性得到，并且有相应的grunt插件。你也可以对检测指标进行二次开发，例如移动端定义一个最大图片大小的规则，在开发的时候如果使用了超过限制的大图则进行告警。不过如果把加载过程中的时间点作为常规的测试监控，则最好模拟移动端网络环境。


页面特征检测与实践

前面讲到性能测试中测试资源大小其实就属于一种资源特征，诸如此类我们还可以开发一些通用的测试规则，以测试页面是否正常。这种测试主要适用于在界面和操作上无法直接进行判断的元素。例如页面中广告部署是否正常。

广告部署检测实践

第三方部署广告以及物料配置的时候容易出现问题，例如代码脚本升级出错、部署错误、物料尺寸格式不对、广告容器未适配多种屏幕大小、广告是否可见、时效广告是否展现等。已知的问题就有很多，如果出现问题时由广告系统的人员挨个检测是一个很耗费人力的过程。而这些特征都是跟实际运行环境相关的，大部分都可以通过casperjs之类的工具来进行检测。

另外与广告相关的还有屏蔽检测等，检测页面div广告区块(非iframe广告)是否被拦截插件所拦截。由于拦截插件使用的基本相同的拦截规则，而且对于div广告采用的是选择器屏蔽，检测过程中只需要根据相关的检测规则判断选择器是否存在页面中即可。这在casperjs中一个api即可搞定:




与CI的结合

讲到这里，上面这些步骤很像ci系统啦！如果能通过ci实现一系列的自动化部署测试等工作，使用上就更加顺畅了。

谈起ci肯定要介绍jenkins,稳定可靠，是很多大公司ci的首选。只是在前端的眼中它看起来会感觉。。丑了点和难用了点。。如果能像travis-ci那样小清新和直观易用该多好哈哈。


减小使用和维护成本

自动化测试为人诟病的地方无外乎使用效果和使用成本，使用效果可以对症下药选择合适的工具，而使用成本则可以通过一系列措施来减小到合理程度：

与构建工具结合

grunt、FIS，将自动化测试与构建工具结合能更早的发现问题，也能减小使用和维护成本

与持续基础结合

与CI系统的结合能更大范围更有效的发挥自动化测试的作用

与工作流结合

与日常工作流结合同样是为了减少使用成本，如将结果通过自定义的方式反馈给用户等。

测试配置化

测试配置化能让用户使用和维护更加简单、大部分情况下只需要维护配置脚本即可


利用开源力量、合理搭配使用

如果遇到问题，请寻找解决思路
根据思路寻找开源支持
如果找不到请参照第一条
开源世界已经有很多优秀的资源，不建议从头开开始造轮子，除非你能很好的维护下去。基于现有的优秀工具、库、平台，针对自身产品的特点进行优化和二次开发更有利于工具本身的发展。

我们发现，工具模拟测试会在一定程度上与真实情况偏离，有时无法反映性能的波动情况。另外除了白屏首屏之类的基础指标，产品线同样关注产品相关的指标，例如广告可见、搜索可用、签到可用等，这些功能直接与页面 JS 加载相关,通过工具较难模拟。

为了持续监控不同网络环境下用户访问情况与页面各功能可用状况，我们选择在页面中植入 JS 来监控线上真实用户访问性能，同时利用已有的分析工具作为辅助，形成一套完整多元的数据监控体系，为产品线的评估与优化提供可靠的数据。

关于不同监控方式的简单对比可以查看下表：

类型	优点	缺点	示例
非侵入式	指标齐全、客户端主动监测、竞品监控	无法知道性能影响用户数、采样少容易失真、无法监控复杂应用与细分功能	Pagespeed、PhantomJS、UAQ
侵入式	真实海量用户数据、能监控复杂应用与业务功能、用户点击与区域渲染	需插入脚本统计、网络指标不全、无法监控竞品	DP 、Google 统计



我们根据用户的痛点，将浏览器加载过程抽取出四个关键指标，即白屏时间、首屏时间、用户可操作、总下载时间(定义可见上篇文章)。这些指标是如何统计的呢？

确定统计起点

我们需要在用户输入 URL 或者点击链接的时候就开始统计，因为这样才能衡量用户的等待时间。如果你的用户高端浏览器占比很高，那么可以直接使用Navigation Timing接口来获取统计起点以及加载过程中的各个阶段耗时。另外也可以通过 cookie 记录时间戳的方式来统计，需要注意的是 Cookie 方式只能统计到站内跳转的数据。

统计白屏时间

白屏时间是用户首次看到内容的时间，也叫做首次渲染时间，chrome 高版本有 firstPaintTime 接口来获取这个耗时，但大部分浏览器并不支持，必须想其他办法来监测。仔细观察 WebPagetest 视图分析发现，白屏时间出现在头部外链资源加载完附近，因为浏览器只有加载并解析完头部资源才会真正渲染页面。基于此我们可以通过获取头部资源加载完的时刻来近似统计白屏时间。尽管并不精确，但却考虑了影响白屏的主要因素：首字节时间和头部资源加载时间。





通过统计首屏内图片的加载时间便可以获取首屏渲染完成的时间。统计流程如下：

首屏位置调用 API 开始统计 -> 绑定首屏内所有图片的 load 事件 -> 页面加载完后判断图片是否在首屏内，找出加载最慢的一张 -> 首屏时间
这是同步加载情况下的简单统计逻辑，另外需要注意的几点：

页面存在 iframe 的情况下也需要判断加载时间
gif 图片在 IE 上可能重复触发 load 事件需排除
异步渲染的情况下应在异步获取数据插入之后再计算首屏
css 重要背景图片可以通过 JS 请求图片 url 来统计(浏览器不会重复加载)
没有图片则以统计 JS 执行时间为首屏，即认为文字出现时间
统计用户可操作和总下载

用户可操作默认可以统计domready时间，因为通常会在这时候绑定事件操作。对于使用了模块化异步加载的 JS 可以在代码中去主动标记重要 JS 的加载时间，这也是产品指标的统计方式。

总下载时间默认可以统计onload时间，这样可以统计同步加载的资源全部加载完的耗时。如果页面中存在很多异步渲染，可以将异步渲染全部完成的时间作为总下载时间。

网络指标

网络类型判断
对于移动端来说，网络是页面加载速度最大的影响因素，需要根据不同的网络来采取相应的优化措施，例如对于 2G 用户采用简版等。但 web 上没有接口获取用户的网络类型。为了获取用户网络类型，可以通过测速的方式来判断不同 IP 段对应的网络。测速例如比较经典的有 facebook 的方案。经过测速后的分析，用户的加载速率有明显的分布区间，如下图所示：

<img src="http://fex.baidu.com/img/build-performance-monitor-in-7-days/net.png">

各个分布区间正好对应不同的网络类型，经过与客户端的辅助测试，成功率可以在 95%以上。有了这个 IP 库对应的速率数据，就可以在分析用户数据时根据 IP 来判断用户网络类型。






网络耗时统计

网络耗时数据可以借助前面提到 Navigation Timing 接口获取，与之类似的还有Resource Timing,可以获取页面所有静态资源的加载耗时。通过此接口可以轻松获取 DNS、TCP、首字节、html 传输等耗时，Navigation Timing 的接口示意图如下所示：
<img src="http://fex.baidu.com/img/build-performance-monitor-in-7-days/timing.png">



：之前从微博中看到有人评价说想做监控但是公司没有日志服务器。并不需要单独的日志服务器,只要能把统计的这个请求访问日志保存下来即可。如果网站自己的独立服务器都没有还有解决办法，在百度开发者中心新建一个应用，写一个简单的 Web 服务将接收到的统计数据解析存到百度云免费的数据库中，然后每天再用 Mysql 处理下当天的数据即可，对于普通站点的抽样性能数据应该没问题。请叫我雷锋。

Day 6 如何利用监控数据解决问题？

发现瓶颈，对症下药
对于图表制作，比较出名的有Highcharts，百度开发的Echarts也很不错。不管使用什么工具，最关键的一点就是让报表能突出重点，直观明了。

制作报表前多问几个如何让人直观看到目前状况和可能存在的问题，哪些地方可以加强，哪些可以去掉，使用是否习惯等。


持续集成正是针对这一类问题的一种软件开发实践。它倡导团队开发成员必须经常集成他们的工作，甚至每天都可能发生多次集成。而每次的集成都是通过自动化的构建来验证，包括自动编译、发布和测试，从而尽快地发现集成错误，让团队能够更快的开发内聚的软件。
持续集成的核心价值在于：
持续集成中的任何一个环节都是自动完成的，无需太多的人工干预，有利于减少重复过程以节省时间、费用和工作量；
持续集成保障了每个时间点上团队成员提交的代码是能成功集成的。换言之，任何时间点都能第一时间发现软件的集成问题，使任意时间发布可部署的软件成为了可能；
持续集成还能利于软件本身的发展趋势，这点在需求不明确或是频繁性变更的情景中尤其重要，持续集成的质量能帮助团队进行有效决策，同时建立团队对开发产品的信心。



持续集成的原则
业界普遍认同的持续集成的原则包括：
1）需要版本控制软件保障团队成员提交的代码不会导致集成失败。常用的版本控制软件有 IBM Rational ClearCase、CVS、Subversion 等；
2）开发人员必须及时向版本控制库中提交代码，也必须经常性地从版本控制库中更新代码到本地；
3）需要有专门的集成服务器来执行集成构建。根据项目的具体实际，集成构建可以被软件的修改来直接触发，也可以定时启动，如每半个小时构建一次；
4）必须保证构建的成功。如果构建失败，修复构建过程中的错误是优先级最高的工作。一旦修复，需要手动启动一次构建。
持续集成系统的组成
由此可见，一个完整的构建系统必须包括：
一个自动构建过程，包括自动编译、分发、部署和测试等。
一个代码存储库，即需要版本控制软件来保障代码的可维护性，同时作为构建过程的素材库。
一个持续集成服务器。本文中介绍的 Jenkins 就是一个配置简单和使用方便的持续集成服务器。



专门研究了下 CI 相关的系统，才有了这几篇文章

我用到的系统有：

Gitlab：代码托管
Gerrit：Code Review
Jenkins：代码测试




行为驱动开发框架资料
Cucumber和FitNesse的对比http://www.infoq.com/cn/news/2009/11/interview-cucumber-for-dotnet

本书是讲解如何搭建自动化测试框架的，并不是讲解如何使用FitNesse的，当读者读完此书知道如何搭建自动化框架后，如果发现比较喜欢Cucumber或者Robot Framework，应能轻松自如的在自己的自动化项目中更换它们，比葫芦画瓢的去使用它们。


统一了这个认知之后，我们来讨论一下前端GUI测试的特殊性。根据百科词条上的那些介绍，相信大家都能感觉到GUI测试的成本非常高，而前端这种特殊的GUI软件，具有天生的快速迭代特征，这使得case维护成本也变得非常高，经常跟不上迭代速度。

一个标准的互联网应用产品的前端部分，我粗略估计大概有20%的业务基础代码比较稳定，比如通用组件、通用算法和数据模块等，可以针对这些建立复杂一些的API和GUI测试用例来保证质量。剩下80%的部分不是很稳定，每天都在迭代，针对他们维护case的成本非常高。目前业界中号称做了自动化测试的项目，也大多是在做那稳定的20%。

关于稳定部分的单元测试方法我这里就不赘述了， @貘吃馍香 的答案给出了很多关键字，有兴趣的去搜索就好了。我想讨论的是针对剩下80%不稳定部分的工程化测试方案。据我了解，前端测试面对这些问题还是很无力的，业内大部分团队还是靠堆人解决。

面对这种现状，我其实也没想到过什么好的方法，基本原则就是：

以最低的成本建立和维护自动化测试用例。


12年的时候还在百度，当时有同事去美国参加velocity，twitter分享了一下他们的开发流程，其中有一个环节就是页面对比监控，利用了一个叫pdiff的工具，每次提交代码，会自动对比页面之间的差异然后提醒测试人员注意回归。这也是一个典型的GUI测试零成本维护用例的案例。不过pdiff这个工具是基于像素对比的，误报率比较高，所以去年我做了一个这个项目：fouber/page-monitor · GitHub 基于DOM树的diff，这样就能很大程度上自主控制要监控的元素，可以设置监控样式、文本的变化，比起像素diff智能了一些。

其工作原理就是利用phantom或其他headless浏览器访问页面，然后截图，然后执行一段js，遍历整个dom树，获取元素计算样式和元素内文本内容，构造出一个JSON结构，然后每次diff这个json来判断页面差异，并标记在截图上展示。dom树的diff过程有点类似react的虚拟dom树diff。
<img src="http://ww4.sinaimg.cn/large/0064cTs2gw1evny0jloygj30ah05jt8x.jpg">

<img src="http://img3.tbcdn.cn/L1/461/1/acd9d02b56b87589d926213d3e2b0f1180376a3e">



在Java领域，Apache, Spring, JBoss 三大社区的开源库，包罗万象，但每个库都在其领域中都鹤立鸡群。而Nodejs中各种各样的开源库，却让人眼花缭乱，不知从何下手。

Nodejs领域: Jasmine做单元测试，Karma自动化完成单元测试，Grunt启动Karma统一项目管理，Yeoman最后封装成一个项目原型模板，npm做nodejs的包依赖管理，bower做javascript的包依赖管理。Java领域：JUnit做单元测试, Maven自动化单元测试，统一项目管理，构建项目原型模板，包依赖管理。

Nodejs让组合变得更丰富，却又在加重我们的学习门槛。我还说不清楚，也看不透！

常规URL信息，某个查询条件，域名倒数正数，
常用格式转换，获取特征值，时间推算以及比较

<a>https://img.alicdn.com/tps/TB1Ti14LVXXXXXyXFXXXXXXXXXX-1280-960.jpg</a>
<a>https://img.alicdn.com/tps/TB1kXq3LVXXXXa_XFXXXXXXXXXX-4032-3024.jpg</a>

            // }).on('click', '.local_record', function() {
            //     self.searchLocalRecord($(this).html());
            // }).on('click', '.search_question', function(e) {
            //     self.loadLocalRecord();
            //     e.stopPropagation();
            // }).on('click', '.clear_record', function() {
            //     self.clearLocalRecord();
            // }).on('click', '. ', function() {
            //     self.deleteLocalRecord($(this));
            //
            //
            // $('body').on('click', function(e) {
            //     console.log(1111111)
            //     self.closeLocalRecord();
            // });
            //
            //
            // Cannot call method 'addEventListener' of null
            // document.querySelector('.delete_local_record').addEventListener('click', function(e){
            //     self.deleteLocalRecord($(this));
            // })
file:///Users/yuhuang/Library/Containers/com.taobao.aliwangwang/Data/Library/Application%20Support/AliWangwang/v3/profiles/cntaobao渔篁/images/3c/3cdba3d0c1b24476f65596f9e785e75e.jpg

file:///Users/yuhuang/Library/Containers/com.taobao.aliwangwang/Data/Library/Application%20Support/AliWangwang/v3/profiles/cntaobao渔篁/images/0a/0a871072c6167dfe3a89914922a4330e.jpg




    //获取优惠信息
    fetchMore: function(oneData) {
        var defer = $.Deferred();
        if (oneData !== undefined) {
            QN.top.invoke({
                cmd: 'taobao.ump.promotion.increment.get',
                param: {
                    item_id: oneData.base_info.item_id
                },
                success: function(rsp) {
                    // console.log('ump_pirce', rsp.ump_promotion_increment_get_response.promotions.promotion_in_item.item_promo_price);
                    oneData.base_info.ump_pirce = rsp.ump_promotion_increment_get_response.promotions.promotion_in_item.item_promo_price;
                    defer.resolve(oneData);
                },
                error: function(error) {
                    console.log(error);
                    defer.reject();
                }
            });
        }
        return defer.promise();
    },

    fetchMoreRecursive: function(startIndex, data) {
        var that = this;
        if (data !== undefined) {
            that.fetchMore(data[startIndex]).then(function(res) {
                console.log("fetchMoreRecursive", res); //监测字段是否添加成功
                if (data[++startIndex] !== undefined) {
                    that.fetchMoreRecursive(startIndex, data)
                }
            });
        }
    },
    
    
                    // that.fetchMoreRecursive(that.recursiceIndex, items);

                        // statusArr.push(that.fetchMore(item)); //获取优惠


如果你传入{collection: ...} ，这个 options表示这个model属于哪个collection，且用于计算这个model的url。否则model.collection 这个属性会在你第一次添加model到一个collection的时候被自动添加。 需要注意的是相反的是不正确的，因为传递这个选项给构造函数将不会自动添加model到集合。有时这个是很有用的。


跟进测试

解决的问题有
1不同Tab的事件绑定 事件委托
2Tab数据加载时机的问题
3usedata，version的一次请求问题
4存储数据的局部变量
5click trriger router
6Dom与数据分离，view与model事件绑定
7 Util与业务不耦合
8 restful
            
            
            
事件委托

上一节的例子我们做一点小小的修改。气泡带上了某种信息，会告诉其经过的每一层自己是在哪一层产生的。JavaScript的事件确实会带着这个属性。当程序捕获一个事件的时候，它会知道这个事件来自于页面上哪个元素。修改上面的程序，使用事件委托来处理点击事件。当最顶层捕获点击事件时，查看事件来源于哪一层，然后只将那一层涂色。再次点击每一层，查看实际效果。只有当前点击的正方形变色了，其他的都毫无反应。(点击这里查看demo)

jQuery('#d1').click(function(e){
        var t = jQuery(e.target);
        var id = t.attr('id');
        if (id==='d4'){
                t.css('background-color', 'yellow');
        } else if (id==='d3') {
                t.css('background-color', 'green');
        } else if (id==='d2') {
                t.css('background-color', 'blue');
        } else {
                t.css('background-color', 'red');
        }
});
当然，如果你有这样嵌套的页面元素，使用了事件委托，委托到了最顶层，这时需要注意：如果其中某个元素，你不希望它的事件冒泡，那么可以使用某种方式阻止事件的冒泡。在jQuery框架中，可以使用stopPropagation()方法来实现而不必关心浏览器兼容性。

$('#bind').click(function(){
    if ($(this).is(':checked')) {
        $('#d4').bind('click', function(e){
            e.stopPropagation();
            alert('冒泡被阻止，这块将不会改变颜色');
        });
    } else {
        $('#d4').unbind('click');
    }
});
重置后选中“阻止最小的方块的事件冒泡”，再点击最小的方块，看是否变色。显然是不会变色，阻止了冒泡，父层将无法接收到点击事件。

注意事项

事件委托是事件冒泡的一个应用，可以减少绑定元素的个数，也不必担心子节点被替换后可能需要进行重新的事件绑定。因为事件的捕获和后续代码的执行已经完全委托给了其父节点。如果页面中含有大量元素需要绑定事件，这样做会减少事件绑定数量，为浏览器减负，无疑会提高页面性能。

但也有些需要注意的。如果用于捕获事件的节点会在某些情况下return false，而你的一个点击事件未委托给父节点，那么，你可能需要阻止这个节点的事件冒泡来达到正确的目的。例如：我在一个div里面有一些按钮和其他元素。利用事件委托来处理这些按钮的点击，如果不是按钮则return false。这时，错误就出现了。如果其他元素中含有链接，那么链接的点击事件也会被委托给div。然而点击链接，会没有任何反应。解决办法一是在委托的代码中对链接进行处理，二是阻止链接的事件冒泡。