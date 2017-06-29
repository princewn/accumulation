## charles
### 是什么
Charles是在Mac下常用的截取网络封包的工具，在做iOS开发时，我们为了调试与服务器端的网络通讯协议，常常需要截取网络封包来分析。
### 做什么
Charles通过将自己设置成系统的网络访问代理服务器，使得所有的网络访问请求都通过它来完成，从而实现了网络封包的截取和分析。
### 主要功能

1. 支持SSL代理。可以截取分析SSL的请求。
2. 支持流量控制。可以模拟慢速网络以及等待时间（latency）较长的请求。
3. 支持AJAX调试。可以自动将json或xml数据格式化，方便查看。
4. 支持AMF调试。可以将Flash Remoting 或 Flex Remoting信息格式化，方便查看。
5. 支持重发网络请求，方便后端调试。
6. 支持修改网络请求参数。
7. 支持网络请求的截获并动态修改。
8. 检查HTML，CSS和RSS内容是否符合W3C标准。

### 工作方式
- 将Charles设置成系统代理
- 过滤网络请求
- 具体操作参见[这里](http://www.infoq.com/cn/articles/network-packet-analysis-tool-charles/)


## fiddler
### 是什么
Fiddler是用C#编写的一个免费的HTTP/HTTPS网络调试器。
### 做什么
Fiddler是以代理服务器的方式，监听系统的网络数据流动。运行Fiddler后，就会在本地打开8888端口，网络数据流通过Fiddler进行中转时，我们可以监视HTTP/HTTPS数据流的记录，并加以分析，甚至还可以修改发送和接收的数据。Fiddler还提供了清除IE缓存、请求构造器、文本转换工具等等一系列工具，对前端开发工作很有价值。
### 主要功能

1. 查看器(syntaxView),利用查看器提供的很多形式，我们可以查看数据流的内容。
2. 请求构建器（Request Builder）,可以创建任意数据的请求
3. 过滤器(filters),过滤器可以对左侧的数据流列表进行过滤，我们可以标记、修改或隐藏某些特征的数据流。
4. AutoResponse功能,这个功能可以算的上是Fiddler最实用的功能，可以让我们修改服务器端返回的数据，例如让返回都是HTTP404或者读取本地文件作为返回内容。我们将在实例中介绍利用AutoResponse功能。
5. 两个数据流进行比较


### 工作方式
- 将Charles设置成系统代理
- 过滤网络请求
- 具体操作参见[这里](http://www.aliued.cn/2010/04/18/use-fiddler-to-improve-efficiency-of-front-development-introduction.html)

## 实践中哪些情况选择了使用代理
1. 代理文件[这里](http://www.aliued.cn/2010/04/25/use-fiddler-to-improve-efficiency-of-front-development-example.html)
2. 代理服务器返回数据到本地，类似于代理文件
3. 查看以及操作接口调用情况，如浏览器无法直接查看的top接口


#### 文件代理不妨是一种复杂环境开发的方式，但因为有学习门槛，初学者应该留出buffer