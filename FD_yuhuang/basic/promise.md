# promise
### ES6以及Jquery的deffer对象
#### ES6  done fail done
加载图片
我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。

const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
#### deffer then then

　　$.ajax("test.html")
　　.done(function(){ alert("哈哈，成功了！");} )
　　.fail(function(){ alert("出错啦！"); } )
　　.done(function(){ alert("第二个回调函数！");} );
（运行代码示例3）
回调函数可以添加任意多个，它们按照添加顺序执行。

八、普通操作的回调函数接口（中）

直接在wait对象上部署deferred接口

另一种防止执行状态被外部改变的方法，是使用deferred对象的建构函数$.Deferred()。
这时，wait函数还是保持不变，我们直接把它传入$.Deferred()：
　　$.Deferred(wait)
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　
　　

#### 命名
when and all
some ang race


[参考]（" http://ju.outofmemory.cn/entry/215133 ")

[Promise对象]("http://javascript.ruanyifeng.com/advanced/promise.html")

- 第一阶段，基于polyfill,Promise
- 第二阶段，在JavaScript的世界中逐渐的被大家所接受，所以在ES6的标准版中已经引入了Promise的规范了。现在通过Babel，可以完全放心的引入产品环境之中了。
- 第三阶段，另外，对于解决这类异步任务的方式，在ES7中将会引入 async、await 两个关键字，以同步的方式来书写异步的任务，它被誉为”JavaScript异步处理的终极方案“。这两个关键字是ES6标准中生成器（ generator ）和Promise的组合新语法，内置 generator 的执行器的一种方式。当然 async、await 的讲解并不会在本文中展开，有兴趣的读者可以参见 MDN资料 。

promise的灵活使用，promise always，def=[def1,def2],when,以及出现嵌套时可以的解决方法
解决两个异步操作的嵌套返回问题

	//嵌套的使用
    function masterRight(choise) {
        var defer = $.Deferred();
        (function() {
            var defer2 = $.Deferred();
            if (choise) {
                defer2.resolve(isMaster);
            } else {
                defer2.reject(isMaster);
            }
            return defer2.promise();
        })();
        return defer.promise();
    }


替代方法1

	getUserData().done(function() {
                        masterRight().done(function(permission) {
                            isMasterRight(permission).done(function() {
                                if (isMaster === true) {
                                    $("#master_promote_tab").css({
                                        "display": "inline-block"
                                    });
                                    self.getMasterPromote().reset();
                                    self.hideLoading();
                                } else {
                                    $("#master_promote_tab").css({
                                        "display": "none"
                                    });
                                }
                            });
                        }).fail(function(error) {
                            console.log(error);
                        });
                    });
	var dfds = [$.Deferred(), $.Deferred()];
查看资料后，替代方法2 
deferred.promise() 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。


			$.when(wait(dtd))
				.done(function(){})
				.fail(function(){});


或者

//wait函数还是保持不变，我们直接把它传入$.Deferred()：

　　			$.Deferred(wait)
　　				.done(function(){})
　　				.fail(function(){});

或者

//直接在wait对象上部署deferred接口。
		
		dtd.promise(wait);
　　			wait.done(function(){})
　　			.fail(function(){});
　　			wait(dtd);
