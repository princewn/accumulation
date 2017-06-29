
接触underscore template使用
了解backbone，尝试迁移

2. underscore中template的用法混淆
	- 可以传对象 data 作为第二个参数给模板 template 来直接呈现, 这样页面会立即呈现而不是返回一个模板函数.

	
			var T = $('#T').html();
			b.html(_.template(T, res.result))
               
	- 当你要给模板函数赋值的时候，可以传递一个含有与模板对应属性的data对象 。 

        	template: {
            	relation: _.template($('#JT_Relation').html())
        	}
        
        	this.template.relation({relations : res.userRelation})