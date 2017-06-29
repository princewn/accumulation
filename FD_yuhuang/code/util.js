var tools = {
    /*
     *
     *二次确认框
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *操作结果提醒
     *使用方法为tools.toast(true,'hi','.app-header-container',2000);
     * 参数 data 确认信息信息 height 高度
     *依赖SUI
     */
    toast: function (type, data, dom, time) {
        if (type === true) {
            var msg = "<div class='msg-container'><div class='sui-msg msg-large msg-error' style='position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;width:200px;height:150px;'><div class='msg-con'>" + data + "</div><s class='msg-icon'></s></div></div>";
        } else {
            var msg = "<div class='msg-container'><div class='sui-msg msg-large msg-success' style='position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;width:200px;height:150px;'><div class='msg-con'>" + data + "</div><s class='msg-icon'></s></div></div>";
        }
        $($.parseHTML(msg, document, true)).appendTo(dom);
        setTimeout(function () {
            $('.msg-container').empty();
        }, time)
    },
    /*
     *
     *深度遍历接口返回
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *处理XSS注入
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *post
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *get
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *promise
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *单行超长截断
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
    /*
     *
     *多行超长截断
     *使用方法为tools.confirm("我是确认内容")
     * 参数 data 确认信息信息 height 高度
     * 依赖SUI
     *
     */
    confirm: function (data, height) {
        $.confirm({
            body: data,
            height: height||30
        })
    },
}
}