### underscore _uniq
      _.uniq(array, [isSorted], [iteratee])</code>
      
      
      _.uniq([1, 2, 1, 3, 1, 4]);
      => [1, 2, 3, 4]
        
返回 <b>array</b>去重后的副本, 使用 === 做相等测试. 如果您确定  array已经排序, 那么给 isSorted 参数传递 true<值, 此函数将运行的更快的算法. 如果要处理对象元素, 传递 iteratee函数来获取要对比的属性.
实现如下
		  
		  
		  
	_.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
    };
其中


	var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
    };
 	 _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  	};



####目前学习到的拓展用法：
     items = _(items).uniq(false, function(item){return item.num_iid;});
   
     

### 执行环境
-  window


	1. App挂载的方法，暴露的接口，方便开发的调试
	2. window下的Dom和全局的var，其实都是变量，写码是注意可能的覆盖

- arguments->外部->全局
- 延长作用域链的方法width和catch

###延迟加载容器问题
客户端中，自适应懒加载的布局实现方案

- container:某个Tab下加载的contant,width:100%;display:relative;

- scroll_container:display:absolute;padding-top：固定的头;padding-bottom：固定的底部;

通过这种方式，实现对客户端的拖拽自适应容器的懒加载
### 读代码qnww意识到的优美
- 点击加载
- 方法配置化
- hint，loading组件化
- 数据处理map对象化，方便查找和展示
- 暴露App如获取用户接口后续开发可以直接调用

###其他遇到的但是尚未学习或者想要学习的点
- template in underscore or component
- SUI的Dom和JS方法实现
- Vue不能及时更新数据，需要手动刷新的机制
- 宁朗 data-view


slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。


JavaScript字符转Unicode

sui- pag里面的sui-pag

关于前端开发test文件夹

http以及https,千牛内的规范

### JS执行渲染
 
 笔记分为三部分
 
- Javascript执行顺序
- 浏览器页面加载解析渲染
- ready与DOMContentLoaded
	
[传送门](http://gitlab.alibaba-inc.com/wn105798/accumulation/blob/master/load-run.md)或手动http://gitlab.alibaba-inc.com/wn105798/accumulation/blob/master/load-run.md
