### 背景
因为千牛客户端提测方式不统一以及对可以采用的预发测试方案一知半解，在提测过程中，容易给测试同学带来困扰，
### 目标
根据千牛提测规范，开发一键切换千牛日常，预发，线上环境的工具，。通过应用，排除干扰因素，降低环境门槛以及沟通成本

### 主要技术点
- 通过选择该版本安装路径，实现生效文件切换：chrome应用开发API之chrome.fileSystem
- etc/hosts修改：考虑到不同操作系统下hosts文件的位置（以及是否自定义修改），尽量可以通过工具的API调用实现

### 拓展点
- 是否能集成客户端以及浏览器清缓存，考虑客户端以及浏览器清缓存的对应方案
- 是否可迁移性，考虑到客户端差异性，这个有点远

### 微分享
#### chrome应用开发API之chrome.fileSystem
##### package apps
- 较chrome拓展，chrome应用有更加严格的安全策略，有一些只在应用中支持的API，例如fileSystem
- 开发中遇到的不好查阅到的点
	- 确认需要开发的是拓展或者应用，应用对后台脚本的申明
			
		    "app": {
    			"background": {
      				"scripts": ["background.js"]
    			}
  			}, 
	- 后台脚本创建的窗口（区别于浏览器窗口）支持打断点
	
	
		  	"content_scripts": [
    			{
      				"matches": ["http://www.google.com/*"],
      				"css": ["popup.css"],
      				"js": ["jquery.js", "popup.js"]
    			}
  			],
  			
  			
  	- 后台脚本创建的窗口不支持command+R刷新，似乎屏蔽了刷新的机制, 只能从拓展应用页面上command+R或者手动触发
		- console 调用 location.reload() 无法对页面进行刷新
		- chrome.runtime.reload() 还是能正常使用的.


- fileSystem调用示例


        this.fs = chrome.fileSystem;
        this.reader = new FileReader();

        //打开文件夹
        this.chooseEntry = function() {
            var that = this;
            this.fs.chooseEntry({ type: "openDirectory" }, function(Entry) {
                chrome.fileSystem.getDisplayPath(Entry, function(Path){
                    document.getElementById('J_qnPath').value = Path;
                    that.qnWorkbenchPath = Path;
                })
            });
        };

      	//遍历子目录以及文件
        this.getSubEntries = function(depth, Entry, parent){
            var dirReader = Entry.createReader();
            dirReader.readEntries(function(Entries) {
                for(var i=0; i<Entries.length; i++){
                    var newParent = document.createElement('div');
                    newParent.id = Date.now();
                    newParent.innerText = echoEntry(depth+1, Entries[i]);
                    parent.appendChild(newParent);
                    if(Entries[i].isDirectory){
                        getSubEntries(depth+1, Entries[i], newParent);
                    }
                }
            }, errorHandler);
        };







2. underscore中template的用法混淆
	- 可以传对象 data 作为第二个参数给模板 template 来直接呈现, 这样页面会立即呈现而不是返回一个模板函数.

	
			var T = $('#T').html();
			b.html(_.template(T, res.result))
               
	- 当你要给模板函数赋值的时候，可以传递一个含有与模板对应属性的data对象 。 

        	template: {
            	relation: _.template($('#JT_Relation').html())
        	}
        
        	this.template.relation({relations : res.userRelation})
