# event-preventDefault

1. 第12章，事件。里面列出事件对象浏览器兼容以及共同的属性，消除了对事件流prevenrDefault的误解，也注意到了之前忽略的一些细节，比如onchange在input，select触发时机的不同。

### preventDefault

- preventDefault方法取消浏览器对当前事件的默认行为，比如点击链接后，浏览器跳转到指定页面，或者按一下空格键，页面向下滚动一段距离。该方法生效的前提是，事件的cancelable属性为true，如果为false，则调用该方法没有任何效果。

- 该方法不会阻止事件的进一步传播（stopPropagation方法可用于这个目的）。只要在事件的传播过程中（捕获阶段、目标阶段、冒泡阶段皆可），使用了preventDefault方法，该事件的默认方法就不会执行。

- 该方法是否能作用取决于，节点+方法,例如
  1. submit/a+click
  2. input/button+keypreaa
  3. div+scroll
  
 除键盘鼠标事件外，还有其他如进度事件，拖拉时间，触摸事件，文档事件，以后遇到的时候个别分析
 
 
 下面附上遇到的preventDefault用法问题
 - 背景：在backbone开发的基础上添加一个Tab NEW（非backbone）
 - 表现: NEW 的相邻一次tab A不能A->NEW后NEW->A
 
 作死的新加入代码

 	$('#promote-tab').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    })
    
    
 帅气的原有代码   
 
    App.View.App = Backbone.View.extend({
    	el: '#J_App',
    	
    	initialize: function() {
        	this.$tab = this.$el.find('.J_MainTab');
        	App.view.focus = new App.View.Focus();
        	App.view.guess = new App.View.Guess();
        	App.view.track = new App.View.Track();
        	App.view.hot = new App.View.Hot();
        	App.view.showcase = new App.View.Showcase();
        	App.view.search = new App.View.Search();
        	this.listenTo(App.router, 'route', this.tab);
    	},

    	tab: function(route) {
        	var $tabAnchor = this.$tab.find('[href="#' + route + '"]');
        	$tabAnchor.tab('show');
    	}
    });
    
    
 问题在于preventDefault()阻止了tab的index的调整，所以tab A坚持认为A一直都是A，从未改变。
 可能看官会问， 为什么用e.preventDefault()？懒惰的粘过来JS组件代码作死了，根源还是对他的了解不够，反省后注意。

