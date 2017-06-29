## 亲淘
### 着手一个项目，先看到的是暴露出来的门，而非folder.
#### project config
###### serverRouter：
- var app = express();//Express 是一个简洁、灵活的Node.js Web 应用开发框架
- var fs = require('fs');//file system node的构建中的一个名词
- var cwd = process.cwd();
- var config = JSON.parse(fs.readFileSync('./gruntSetting.json'));//gruntSetting.json目录映射
- app.use文件路径

### grunt config
###### package &gruntSetting

### git config
###### editorconfig
git配置项 editorconfig，此处处理代码规范

### 找到了门，就一步一步走进去
![基本结构图](http://gtms03.alicdn.com/tps/i3/TB1S2H4KXXXXXXtXFXXGPhQ7VXX-1091-778.png)




### 子页面示例

#### 搭建view，script，style分开，这是一种搭建方式，还可以按照功能模块来分

- 主面板（容器）

        state:      main (abstract)
	    ctrl:       controller/main.js
	    page:       views/main.html
    - 资讯

			state:      main.news (abstract)
			page:       views/news.html
  		 - 资讯PK、资讯列表

	   			state:      main.news.index
				url:        #/news
				ctrl:       controller/news.js, controller/news.pk.js
				page:       views/news.news.html, views/news.pk.html
				module:     qtNews.js
				
				
#### 大体文件结构
- directives/ 通用组件
- modules/ 业务相关的模块
- filters/ 过滤器
- services/ 提供各类服务的类与方法


#### 文件读取关联
              
              
              
              
              
|活动|  index.html   |  main.js       |  state.js | html|               
|------| ------------ | ------------- | ------------  |---------------|
|关键任务|              |  tab,state     | | ng-controller  on-date-change=|





*表格下一行为上一行的关键活动*          

#### 资历没有的我产生的疑问
1.  bundle//资源集
2.  bo-attr bo-attr-xtitle="item.title"//AngularJS & bindonce: bo-attr usage
3.  ng-if->bindonce //技术选型
4.  qt-src=  //angulars自定义标签
6.  main.js里面angular.bootstrap(document, [app.name]);//Angular directives for Bootstrap - AngularUI



