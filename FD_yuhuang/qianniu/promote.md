### C:\Program Files\AliWorkbench\3.06.09N\configurations在configuration中
	
	<!--<kvpair id="local_2_item"><![CDATA[alires:///webui/g.alicdn.com/sj/qnww-item/2.1.0/index.html]]></kvpair>-->
	将资源下载到本地
	天马无法映射到
	改为线上地址
	<kvpair id="local_2_item"><![CDATA[http://h5.m.taobao.com/qn/pc/2-0-0/wwplugin-item.html]]></kvpair>
	
	
	
### 工作流102拒绝服务
1/tianma->tianma start
2/qnww->grunt dev
出现102拒绝服务错误
经查核，浏览器上网方式已经为proxy
推断可能为需要某个端口没有权限
解决：sudo tianma start
sudo grunt dev


### 后端接口流程
	taobao.qianniu.item.recommend.addcnt
	taobao.qianniu.item.recommend.delete
	taobao.qianniu.item.recommend.add
	taobao.qianniu.item.recommend.get

	http://api.alibaba-inc.com/requirement/newApiList

辰晧2015-11-18 09:54:39
主账号id不要传null
文档上有点问题
http://api.alibaba-inc.com/api/apiTool
到这里去测试

	辰晧2015-11-19 16:07:58
	qn店铺测试账号003:xizi3144


getLoginuser 
之羽2015-11-18 14:05:14
> http://open.taobao.com/doc2/detail.htm?articleId=101713&docType=1&treeId=null


	http://jdy.tmall.com/doc/detail?spm=0.0.0.0.O3NYvd&id=25
 
	刃捷2015-11-17 16:36:21
		http://watchtower.work.taobao.org/inner/plugin?spm=0.0.0.0.dVRz9X
 
	appkey 
	
	
	
	
	商品数字id num_iid 
商品iid iid
价格 price
名称 title
商品主图片地址 pic_url
商品数量 num
商品url detail_url
商品销量 sold_quantity
推介次数，打开率，下单率

作废价格 ump_pirce
手机特享价格标记


SKU skus
属性 不同的商品字段不同，我不太清楚范围（可以参考taobao.items.list.get (批量获取商品信息)，taobao.item.get (得到单个商品信息)）

	给某一个主账号权限appkey
	http://watchtower.work.taobao.org/inner/app/test_user?appkey=21281452

Promise is not defined->升级最新的

		http://watchtower.work.taobao.org/inner/plugin?platform=&categoryId=&searchText=%E6%90%AD%E9%85%8D%E5%A5%97%E9%A4%90
		
		
		
		
		
		num_iid="<%- item.base_info.item_id %>"
		
		



var arr = [1, 2, 3, 4, 5];
var i = 3;

function tttop(arg) {
    var defer = $.Deferred();
    setTimeout(function() {
        defer.resolve(arg);
    }, 1000);
    return defer.promise();
}

function invoke(arg) {
    tttop(i).then(function(data) {
        console.log(data);
        if (i < arr.length) {
            invoke(arr[++i])
        }
    });

}
invoke(arr[i])


1基础接口 1h
2SKU,属性接口 2h
3迁移 1h
4递归查询 1h
5业务逻辑跑通 2h






Q sortTable调用函数里面的函数




container


### 前端自动化测试以及测试管理
#### 背景
- 前端复杂性提高
- 提交测试以后的bug修改投入成本过高
- 测试工作重复枯燥，透出能力

#### 项目简述
基于已有的前端测试技术，如测试框架以及测试管理，实现单元测试自动化测试，覆盖率检查以及持续集成，初步规划具有连续分析以及生成报告功能
#### 产出
- 符合毕业设计要求的论文
- 项目尚未启动，按照日程应该可以在答辩之前全部完成。答辩时，在导师同意，公司允许的范围内产出可执行的代码



诶史2015-12-01 19:13:30
http://17lai.alibaba-inc.com/wealtime/activityDetail.html?id=966
  
1个公益时 
http://17lai.alibaba-inc.com/wealtime/activityDetail.html?id=921
 
这个也是1个公益时 




		