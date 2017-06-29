1. https://k3.alibaba-inc.com/issue/8163953?versionId=1240568
2. h5卡片参数


	
		QN.application.invoke({cmd :'sendH5Card',param : {cardCode : 'item_detail',cardParams : '[{}]',bizIds : '524024021022',bizType : 0,receiver : 	'cntaobao易昊'}})  
		
3. 客户端存在的容器前一次的sdk对象没释放，导致第二次创建失败问题