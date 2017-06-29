### done与fail传参给函数
<pre>
                var searchDfd = id ?
                    $.when(this.idSearch(id, this.catChosen), this.keySearch(keyword, this.catChosen)) :
                    this.keySearch(keyword, this.catChosen);
                searchDfd
                    .done(this.searchSuccess) //注意匿名函数的用法
                    .fail(this.searchError()); //将参数传给函数执行的返回值


            searchSuccess: function() {
             
             
            },

            searchError: function() {
                return function(error) {
                    
                };
            },
</pre>
原因在于
<pre>
　　$.ajax("test.html")
　　.done(function(){ alert("哈哈，成功了！");} )
　　.fail(function(){ alert("出错啦！"); } )
　　.done(function(){ alert("第二个回调函数！");} );
</pre>


### promise always
这个方法用来指定回调函数的，它的作用是，不管调用的是deferred.resolve()还是deferred.reject()，最后总是执行。
<pre>
      $.when(save, del, update).always(function() {
                console.log('clear cache');
                self.clear();
                self.status.update = false;
                self.event.finishPhrase(self);

                // savedone.resolve();
            });

</pre>
### 解决两个异步操作的嵌套返回问题
<pre>
//错误的使用
    function masterRight(choise) {
        var defer = $.Deferred();
        (function() {
            var defer2 = $.Deferred();
            if (choise) {
                isMaster = "ture";
                defer2.resolve(isMaster);
            } else {
                isMaster = "false";
                defer2.reject(isMaster);
            }
            return defer2.promise();
        })();
        return defer.promise();
    }


    $(window).on('load', function() {
        var outer = masterRight(1).done(function(isMater) {
            console.log(isMaster);
        });
        console.log(outer);
    });
</pre>    
解决方法1
<pre>
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
</pre>

解决方法2
 deferred.promise() 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。
<pre>
　$.when(wait(dtd))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
</pre>
或者
<pre>
//wait函数还是保持不变，我们直接把它传入$.Deferred()：
　　$.Deferred(wait)
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
</pre>
或者
<pre>
//直接在wait对象上部署deferred接口。
dtd.promise(wait);
　　wait.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
　　wait(dtd);

</pre>

### webkit-scrollbar
<pre>
    &::-webkit-scrollbar {
        height: 1px !important;
        width: 0px !important;
    }
    &::-webkit-scrollbar-track {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background-color: #FFF !important;
    }
</pre>
 <p>webkit提供的不止这些，还有很多伪类，可以更丰富滚动条样式</p>
