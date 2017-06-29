### 模块
1. 最简单的函数，可以称作一个模块

        function add(x, y) {
			return x + y;
		}



2. 防止冲突，仍然需要手动维护依赖的顺序.以下为在项目中，为了适配线上线下require路径问题，做的处理


		'use strict';
		~ function(context, factory) {
    		if (typeof require === 'undefined') {
        		factory(context['Vue']);
    		} else {
        		require(['vue'], function(ref) {
            		factory(ref);
        		});
    		}
		}(this, function(Vue) {
    		function editSubject(param) {}
				}）；



	项目中看到的一些实现

		!function ($) {
    		var Tab = function (element) {
        	this.element = $(element)
    		}

    		Tab.prototype = {
	
       			 constructor: Tab

        		, show: function () {
        		}
    		}
    
    		var old = $.fn.tab

    		$.fn.tab = function ( option ) {
        		return this.each(function () {
            		var $this = $(this)
                	, data = $this.data('tab')
            		if (!data) $this.data('tab', (data = new Tab(this)))
            		if (typeof option == 'string') data[option]()
        		})
    		}

    		$.fn.tab.Constructor = Tab

    		$.fn.tab.noConflict = function () {
       			$.fn.tab = old
        		return this
    		}

		}(window.jQuery);


3. 在Tab切换时执行，避免全局变量


		function initMasterPromote() {
    		Vue.config.debug = true;
    		var i = 0;
    		var App = new Vue({});
    		function(){
    		}
		}    
在绑定事件切换

		$(document).on('click', '.header-tabpanel .master_promote', function() {
			initMasterPromote();
		});



4. 将方法包装在对象中，暴露，外界可修改



	
		var util = {
    		isObject: isType('Object'),
    		isString: isType('String'),
    		isFunction: isType('Function'),
    		isUndefined: isType('Undefined'),
    		isArray: Array.isArray || isType('Array'),
    		guid: (prefix) => {
        		return (prefix || '') + guid++;
    		},
		}；




5. export default 


	

		export default function Deferred() {

    		var context;

    		function dispatch(cbs) {
        		var cb;
        		while((cb = cbs.shift()) || (cb = callbacks.always.shift())) {
            		setTimeout( (function ( fn ) {
                		return function () {
                    		fn.apply(context, args);
                		};
            		})(cb), 0);
        		}
    		}

    	return {
        	done: function (cb) {
            	return this;
        	}
    	};
	};



6. namespace

		(function(win) {
    		'use strict';

    		function namespace(ns) {
        		if (!ns) {throw 'Parameter namespace is required.';}
        		ns = ns.split('.');
       			var root = window;
        		for (var i = 0; i < ns.length; i++) {
            		root = root[ns[i]] = root[ns[i]] || {};
        		}
    		}

    		namespace('QNGallery');
   			win.QNGallery.namespace = namespace;
		}) (window);

		QNGallery.namespace('msgRss.list');
		window.onload = function(){
    		msgRss.list = {};
    		msgRss.list.init();
		};


另外有项目里提到，先mark

	core.register('msgBridge', function (sandbox) {
	    return {
	        init: function () {
	            sandbox.on('msgBrowserToNative', this.browserToNative);
	            sandbox.on('msgNativeToBrowser', this.nativeToBrowser);
	        },
	    };
	});

资料里还有一些，先mark

1. 在YUI3中想使用一个模块，需要如下这样：

		//使用node模块，node模块会作为参数传入
		YUI().use('node', function (Y) {
			///***
		}



  
  
    
    
2. CMD规范参照commonjs中的方式，定义模块的方式如下:

		define(function(require, exports, module) {
		  // The module code goes here
		});

3. [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)是异步模块定义，特别适合在浏览器端使用，其规范和CMD是很像的，与CMD对比见CommonJS章节


4. ES6
ES6带来了语言层面的模块化支持，初步了解，心得见es6章节。

5. UMD的全称是Universal Module Definition。和它名字的意思一样，这种规范基本上可以在任何一个模块环境中工作。



