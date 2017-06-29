# vue
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

#### 深层
有时你想向已有对象上添加一些属性，例如使用 Object.assign() 或 _.extend() 添加属性。但是，添加到对象上的新属性不会触发更新。这时可以创建一个新的对象，包含原对象的属性和新的属性：

// 不使用 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })



异步更新队列

Vue.js 默认异步更新 DOM。每当观察到数据变化时，Vue 就开始一个队列，将同一事件循环内所有的数据变化缓存起来。如果一个 watcher 被多次触发，只会推入一次到队列中。等到下一次事件循环，Vue 将清空队列，只进行必要的 DOM 更新。在内部异步队列优先使用 MutationObserver，如果不支持则使用 setTimeout(fn, 0)。

例如，设置了 vm.someData = 'new value'，DOM 不会立即更新，而是在下一次事件循环清空队列时更新。我们基本不用关心这个过程，但是如果想在 DOM 状态更新后做点什么，这会有帮助。尽管 Vue.js 鼓励开发者沿着数据驱动的思路，避免直接修改 DOM，但是有时确实要这么做。为了在数据变化之后等待 Vue.js 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback) 。