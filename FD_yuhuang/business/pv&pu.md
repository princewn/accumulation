
<h1 class = "postTitle">
			<a id="cb_post_title_url" class="postTitle2" href="http://www.cnblogs.com/a-jian/archive/2012/09/12/2681420.html">互联网用户行为采集淘宝方案</a>
</h1>

<div class="dir1-class">
<ul>
<li><span>页面访问日志：每个页面装载</span><span>head</span><span>部分的时候，下载一个</span><span>js</span><span>，这个</span><span>js</span><span>将发送一个请求到日志服务器，请求中包含了同步在淘宝</span><span>cookie</span><span>的本地</span><span>cookie</span><span>信息，也包含了</span><span><span>refer</span>/url/</span><span>要获取的</span><span>header</span><span>参数</span><span>/session</span><span>的信息，由此完成</span><span>pv/uv</span><span>的默认计算，淘宝的</span><span>atp.js</span><span>就是完成这个工作，而</span><span>google</span><span>统计的</span><span>ga.js</span><span>是完成同样的事情</span></li>
<li><span>页面交互日志：</span><span><span><span>用户</span></span></span><span>在页面上某个行为触发一个异步请求，按照约定的格式向日志服务器发送请求，展现、点击、等待、报错等等都可以作为交互行为，</span><span><span><span>黄金令箭</span></span></span><span>就是实现这个，在通用统计工具中，没有这类数据的采集和计算</span></li>
<li><span>模块曝光日志：页面在展现一个区块的时候，这个模块向服务器发情</span><span>http</span><span>请求，记录自己被用户看到</span></li>
</ul>
<h2 id="node11852"><span>为何不用</span><span>apache</span><span>或应用服务器日志</span></h2>
<div class="dir1-class">
<ul>
<li><span>互联网用户响应的多样性，决定了日志内容的多样性，日志采集应该是轻量级的方案，不应该非常依赖应用服务器，否则将很难扩展，应用也会因为数据分析而承载更多的系统压力和升级负担</span></li>
<li><span>应用日志是在应用内有效，而用户的行为是跨应用和产品的，不同的应用日志分开，一致性无法保障，甚至格式都不统一，所以一般不采用</span><span>apache</span><span>或应用服务器日志</span></li>
</ul>
<h2 id="node68665"><span>模拟点击<br /></span></h2>
<div class="dir1-class">
<ul>
<li><span>模拟点击就是互联网日志采集的第二类方法，最初是用户点击页面不刷新，我们发送请求认为这个请求模拟了用户刷新页面，由此等名，其实是淘宝内部的名称</span></li>
<li><span>埋模拟点击的点：是指把发送请求的指令，请前台开发同学放在交互的环节中，一旦满足某个交互条件，就发送请求，被日志服务器记录</span></li>

</ul>
<h2 id="node41571"><span>黄金令箭</span></h2>
<p><span>随着</span><span>ajax</span><span>在淘宝越来越多才需求越来越明确：需要对用户在淘宝不同页面、不同位置、不同类型的交互行为进行记录，以便后续分析</span></p>
<p><span>同时除了用户的强交互行为外，越来越多的需求方，需要了解产品被展现的情况，所以：</span><strong><em><span style="text-decoration: underline;">黄金令箭是一个交互类模拟点击和模块类曝光日志的一个规范</span></em></strong>，相应的数据产品由以下4部分组成：</p>
<ul>
<li><span>申请中心</span></li>
<li><span>订阅中心</span></li>
<li><span>容错处理中心</span></li>
<li><span>展现中心</span></li>

</ul>
<div class="dir2-class">
<p><span>黄金令箭具有以下几点优势：</span></p>
<ul>
<li><span>埋点灵活对，采集、存储和计算统一，对需求应用简单透明</span></li>
<li><span>通过格式化明确的定位串代替特征值，更容易分级管理和扩展。</span></li>
<li><span>令箭中的内容串可以传输更丰富的信息，用于后续的分析。</span></li>
<li><span>黄金令箭的申请、分发、订阅、汇总是息息相关的，为需求方提供更丰富的自定义服务。</span></li>
<li><span>增加了业务、号段等特征，管理上增加了权限的设置。</span></li>
<li><span>淘宝全网位置资源统一管理的趋势。</span></li>
</ul>
</div>
<p><strong>&nbsp;</strong></p>
<p><strong>总的来说，可以通过以下方式进行用户行为采集</strong></p>
<p><strong>页面显微镜</strong>&nbsp;<br />功能：点击监控，A/B Test&nbsp;<br />监控页面PV，UV，退出率，客户端信息（浏览器，OS，屏幕分辨率等）&nbsp;<br />监测页面的全局点击分布，或者针对某个具体元素（唯一id）区域做点击监控；&nbsp;</p>
<p><strong>哈勃监控</strong>&nbsp;<br />功能：实时交易信息，性能监控，报警&nbsp;<br />前端性能监控，渲染时间等；&nbsp;</p>
<p><strong>淘数据</strong>&nbsp;<br />功能：路径分析，页面UV，页面平均停留时间，页面来源/去向分析，交易额报表等&nbsp;<br />淘数据的页面点击实际上是分析后台日志生成的，只能给出超链接元素的点击分布，基本没用；&nbsp;</p>
<p><strong><span class="search_hit">黄金令箭</span></strong>&nbsp;<br />功能：交互类模拟点击，模块曝光监控&nbsp;<br />可以根据需要对用户交互做可定制监控，更灵活有效；权限管理严格，需要产品配合申请监控号段&nbsp;</p>
<p><strong>量子统计</strong>&nbsp;<br />功能：网站统计，淘宝店铺统计&nbsp;<br />外网公开的站点统计服务，非内网系统&nbsp;</p>
<p>针对以上监控系统的功能，对于前端页面交互行为监控分析来说，可以使用<strong>页面显微镜</strong>来分析客户端信息，页面热力图；使用<strong>哈勃</strong>监控实时的前端性能（如果继续提供服务的话）；使用<strong>淘数据</strong>配合<strong><span class="search_hit">黄金令箭</span></strong>来对用户详细的页面交互行为进行分析，为用研、产品和交互设计的优化提供数据支持。</p>
<p>&nbsp;</p>
<p>还未整理完，待续&hellip;&hellip;</p>

</div>

</div>


<p align="left">&nbsp;&nbsp;&nbsp; 背景：现如今，销售预测在提高企业经济效益及决策支持水平的方面占有重要的地位。随着企业信息化技术水平的提高，企业销售数据日益丰富，管理者对其中隐藏的销售预测信息的渴求愈来愈强烈。用传统的方法来分析这些海量数据中的销售信息相当困难，已不适应时代需求。此文目的正在此处，即如何寻找更好的方法去挖掘销售数据中隐藏的销售预测信息。<br>
</p>
<p>&nbsp;&nbsp;&nbsp; 应用：目前习惯了这样一种称谓：前端行为数据和后端商业数据。前段数据指访问量、浏览量、点击流及站内搜索等反应用户行为的数据，而后端数据更侧重商业数据，比如交易量、ROI（转化率）、LTV(Life time Value终身价&#20540;)。目前有些人关心行为数据，也有些人关心商业数据，但较少人把行为数据和商业数据联系起来看。大家往往只单纯看某一端数据。国内小有名气的网站CEO，每天也只看一个结果数据：网站今天的成交量是多少，卖了多少件产品。但是看数据走火入魔的人会明白，每个数据，就像散布在黑夜里的星星，<span style="color:black">它们彼此之间布满了关系网，只要轻轻按一下其中一个数据，就会驱动另外一些数据的变化。</span></p>
<p>&nbsp;&nbsp; 实现流程图：</p>
<p align="left"><img src="http://img.blog.csdn.net/20140407132504468?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzMzOTg1MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""></p>
<p align="justify">&nbsp;&nbsp;&nbsp; 设计实现图：</p>
<p align="justify"><img src="http://img.blog.csdn.net/20140407132734531?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzMzOTg1MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""></p>
<p align="justify">&nbsp;&nbsp;&nbsp; js埋点代码，此部分代码借鉴谷歌分析的思路设计，相信不难理解：</p>
<p align="justify"></p>
<pre code_snippet_id="278777" snippet_file_name="blog_20140407_1_3519741"  code_snippet_id="278777" snippet_file_name="blog_20140407_1_3519741" name="code" class="javascript">   &lt;!-- 获取用户行为数据（js文件外部引用） 五味子--&gt;
   &lt;script type=&quot;text/javascript&quot;&gt;
	  var _uid = &quot;${sessionScope.memberId}&quot;;//获取用户会员ID
	  var _oid = &quot;${orderId}&quot;;//获取用户订单ID
      (function() {          //(function(){})是一个闭包的用法，闭包必定会被调用。
	
var ga = document.createElement('script'); 
	  ga.type = 'text/javascript'; 
	  ga.charset='gbk';
	  ga.async = true;//ga.async = true 异步调用外部js文件，即不阻塞浏览器的解析
	  ga.src = 'js/ana.js';  
	  var s = document.getElementsByTagName('script')[0];    //取得第一个tag名为script的元素
	  s.parentNode.insertBefore(ga, s);             //在s前添加元素ga
    })();
    &lt;/script&gt;</pre><br>
&nbsp;&nbsp; 大家可能注意到了此段代码块中引入了一个ana.js文件，这个文件就是收集行为数据的核心代码文件：
<p></p>
<p align="justify"></p>
<pre code_snippet_id="278777" snippet_file_name="blog_20140407_2_3945636"  code_snippet_id="278777" snippet_file_name="blog_20140407_2_3945636" name="code" class="javascript">/*
 *生成UUID,用户唯一访问标识
 */
(function() {
  alert(&quot;asdf&quot;);
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
 
  Math.uuid = function (len, radix) {
    var chars = CHARS, uuid = [], i;
    radix = radix || chars.length;
 
if (len) {
      for (i = 0; i &lt; len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i &lt; 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r &amp; 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  };
  Math.uuidFast = function() {
    var chars = CHARS, uuid = new Array(36), rnd=0, r;
    for (var i = 0; i &lt; 36; i++) {
      if (i==8 || i==13 ||  i==18 || i==23) {
        uuid[i] = '-';
      } else if (i==14) {
        uuid[i] = '4';
      } else {
        if (rnd &lt;= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        r = rnd &amp; 0xf;
        rnd = rnd &gt;&gt; 4;
        uuid[i] = chars[(i == 19) ? (r &amp; 0x3) | 0x8 : r];
      }
    }
    return uuid.join('');
  };
 
  Math.uuidCompact = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&amp;0x3|0x8);
      return v.toString(16);
    });
  };
})();

//======================================UUID=============================end
	//页面id,标识唯一一个页面
	var url=window.location.href;

var url_arr=url.split(&quot;.&quot;);
	
var id=url_arr[url_arr.length-2];
	
//获取会员ID
	var _memberId = _uid || '';
	
	//获取订单ID
	var _orderId = _oid || '';

	//用户标识UUID
	var _utmb = $.cookie('_utmb') || '';

	//_utmb值为空时，调用Math.uuidFast
	if(_utmb==null||_utmb=='undefined'||_utmb==''){
		
			_utmb = Math.uuidFast();
			
		    $.cookie('_utmb', _utmb);
		    
	}
	
	//从哪个路径跳转过来
	var _ref = document.referrer || '';
	
	var _param = _ref.substring(_ref.indexOf(&quot;?&quot;), _ref.length);
	
	var strs =_param.split('&amp;');
	
	var utm_source='';
	
	for ( var i = 0; i &lt; strs.length; i++) {
		
		if (strs[i].indexOf('utm_source')!=-1) {
			
			utm_source = strs[i].substring(strs[i].indexOf('=')+1,strs[i].length);
			
		}
		
	}
	
	//判断，如果utm_source的值不为空，则路径来源取值utm_source，否则取值_ref
	if (utm_source!=null&amp;&amp;utm_source!=''&amp;&amp;utm_source!='undefined') {
		
		_ref=utm_source;
		
	}
	//获取当前访问的页面
	var  _currentURL=document.URL || '';
	
	alert($.cookie('_utmc'+id));
	//一秒内连续刷新算一次请求
	if ($.cookie('_utmc'+id)) {
		
	}
	else{
		
		_utmc = $.cookie('_utmc'+id, true, {expires: 1/24/60/60});//expires以天为单位，cookie有效时间1秒钟
		//写入，传到后台
		var img = new Image();// 创建一个image对象
		
		img.src = 'http://localhost:18080/ec-ga/behavior.img?_utmb='+_utmb+&quot;&amp;_memberId=&quot;+_memberId+&quot;&amp;_orderId=&quot;+_orderId+&quot;&amp;_ref=&quot;+_ref+&quot;&amp;_currentURL=&quot;+_currentURL; 
		
		document.body.appendChild(img);
	}
</pre>&nbsp;&nbsp;&nbsp; 代码分析：
<p></p>
<p align="justify">&nbsp;&nbsp;&nbsp; 此段代码也不难理解，有几个地方我捎带讲解一下：</p>
<p align="justify">&nbsp;&nbsp;&nbsp; uuid，在这里我把它定为用户访问唯一标识符，更多有关uuid的资料，大家上网查。</p>
<p align="justify">&nbsp;&nbsp;&nbsp; _utmc，用来标识一段时间内，如果用户不断刷新，我们算一次页面请求，所以在这里我们设置了cookie的有效期</p>
<p align="justify">&nbsp; &nbsp; img，这里我们摒弃了传统的ajax发送请求，那是因为ajax不能跨域发送请求，所以我们这里采用了以图片的形式把数据发送过去。<br>
</p>
<p align="justify">&nbsp;&nbsp;&nbsp; 最后，别忘了添加两个js文件，一个jquery.js，一个jquery.cookie.js。<br>
</p># 先mark  http://velocity.oreilly.com.cn/2014/ppts/lanqiao.pdf