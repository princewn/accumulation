weekly review
##本周工作

### 千牛帮助与反馈改版
- PD排期0.5个工作日，其他需求相应推后0.5天。完成新的需求点的开发。
- 提测后跟进测试，排查了反馈不一致实际为针对某个插件的定制需求，某些插件没有绑定服务号导致呼起帮助与反馈为空的情况，反馈给PD，在之后的版本中提需求。
- 接下来将跟进发布事宜，目前可发布。


### 插件运营机制建设
-  完成联调。提测后fix视觉体验的问题，经测试确认后跟进发布事宜。

### 团队消息设置模块
- 测试完成，PD定为与“插件运营机制建设”一起发布

### 店铺服务助手
- 本次开发沿用项目的开发方式，使用velocity+前端资源实现。
- 此需求既有网页版的子账号，也有千牛端内的旺旺飞流分流。针对功能做了适配
- 在开发中遇到新环境代理问题，将在遇到问题中详述
- 在接口调用文档方面，也存在入参案例不够全面，调用的时候经由PD，客户端，开发者翻看代码才找到调用入参的问题，又发现现有接口需要改造，于是“现有接口可以直接调用”不能实现
- 目前前端开发工作量基本完成，入参约定后接口在开发中，待联调
- 由于环境不熟悉以及接口问题，加上联调时间预计延期0.5工作日



### 个人岗位信息修改
- prd视觉稿到位，初步了解需求

##下周工作计划
### 店铺服务助手
-  联调，提测

### 个人岗位信息修改



## 遇到问题及心得
#### 遇到问题
1. 在开发中遇到新环境代理问题，一种方式是所需文件的精准代理，一种是所有资源的代理+反向代理，现有项目采用第二种
2. https反向代理失败，开发受阻，开发进度较紧，经了解后有三种解决方案，开发中采用第三种
	- https证书
	- 项目环境中相关页面保持http不跳到https
	- 开发时调用http页面，在千牛端内开发可以设置fromSite文件或者在控制台修改location.href
3. 使用SVN+aone同步模板开发页面，对于前端易操作的方式如下，开发中采用第一种
	- SVN+aone模板同步，针对开发体验来说，缺点在于同步时间使开发节奏拖沓，难以集中精力解决一个问题
	- 使用FileZilla等ftp工具省去部署时间，经了解，目前子账号这边没有使用，原因是页面不是太多。
	
	
#### 心得：接下来子账号多店的几个需求开发，难免遇到上述的环境问题，初步想到方案提高效率，避免环境阻碍

- 和之前的同学取经，学习一下，所需文件的精准代理用起来能不能解决现在反向代理失败的问题	
- 评估项目模板的依赖程度以及开发复杂度，以及子账号服务端团队的可行性 ，是否可以尝试使用ftp工具	
##学习心得




#### 工具使用
包管理：npm
构建工具：grunt
模块加载器：webpack
#### 传递数据
- “prop” 是组件数据的一个字段，期望从父组件传下来。子组件需要显式地用 props 选项 声明 props：
在子组件 jade模板中，书写

	    .hot-item-container(@click="openHotPlugins(item.appkey)")
  
  在子组件 export default中，书写

		 props: [
		      'item'
		    ]

- prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态。不过，也可以使用 .sync 绑定修饰符显式地强制双向或单次绑定：
 在父组件 jade模板中，书写

		   .hot-item-container(':item.sync'='item')

#### 父子组件通信

1.  子组件可以用 this.$parent 访问它的父组件。父组件有一个数组 this.$children，包含它所有的子元素。
2. 这让父组件与子组件紧密地耦合，Vue 实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生 DOM 事件，做法也不同。

    ##### 每个 Vue 实例都是一个事件触发器：

   - $on() 监听事件
   - $emit() 在Vue 实例上面触发事件；
  -  $broadcast() 广播事件，事件向下传导给所有的后代。

	- $dispatch() 派发事件，事件沿着父链冒泡；
	    
		 以点击侧栏主面板响应为例，在子组件export default中，书写
		
			 methods:{
			      selectNav(event){
			        this.$dispatch('selectNav',event.target.innerHTML)
			      },
			    }
在父组件 export default中，书写

			events:{
			      selectNav(title){
			        this.appTitle = title
			        if(title !== '全部应用'){
			            this.hotshow = false;
			        }else{
			            this.hotshow = true;
			        }
			      }
			    }
			    
		由此实现了子模板到父模板的数据传递和事件触发，达到了主面板响应的目的

经过初步实践，这样的传递数据和父子组件通信，给开发者的感觉是思维清晰，容易上手，必要的组件分割不因为依赖束手束脚~