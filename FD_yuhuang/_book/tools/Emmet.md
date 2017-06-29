
<!DOCTYPE HTML>
<html lang="zh-hans" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortlink" href="/node/877" />
<meta content="前端开发必备！Emmet使用手册" about="/tools/emmet-cheat-sheet.html" property="dc:title" />
<link rel="shortcut icon" href="http://cdn1.w3cplus.com/cdn/farfuture/6I7SmeJ6bvYzRevkkH6pjf9WnDTRa7YEBbsCyi6dPro/mtime:1414079820/sites/all/themes/w3cplusV2/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="canonical" href="/tools/emmet-cheat-sheet.html" />
<link rel="dns-prefetch" href="//cdn1.w3cplus.com" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="//cdn.w3cplus.com" />
<link rel="dns-prefetch" href="//cdn2.w3cplus.com" />
  <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta itemprop="name" content="W3cplus" />
  <meta itemprop="description" content="W3CPLUS是一个前端爱好者的家园，W3CPLUS努力打造最优秀的Web前端学习的站点。W3CPLUS力求原创，以一起学习，一起进步，共同分享为原则。W3CPLUS站提供了有关于CSS,CSS3,Sass,Responsive,Mobile的技术文档、DEMO、资源，与前端爱好者一起共勉。" />
  <meta itemprop="image" content="http://www.w3cplus.com/w3cplus-logo.jpg" />
  <meta name="keywords" content="css3教程,css3实例,css3属性详解,w3c,transition" />
  <meta name="description" content="W3CPLUS是一个前端爱好者的家园，W3CPLUS努力打造最优秀的web 前端学习的站点。W3CPLUS力求原创，以一起学习，一起进步，共同分享为原则。W3CPLUS站提供了有关于css,css3,html,html5,jQuery,手机移动端的技术文档、DEMO、资源，与前端爱好者一起共勉。" />
  <meta name="chinaz-site-verification" content="e05734b7-b750-4282-b98f-1dfe97a349bc" />
  <meta name="ujianVerification" content="4f5e0543e4b020324dcf03e2" />
  <meta name="baidu-site-verification" content="ftyq813qEZgpw9nb" />
  <meta name="google-site-verification" content="uVNoZLN3dibr1wA6EQAxou562q9YhGKXPYG5_ZzhW6Y" />
  <title>前端开发必备！Emmet使用手册 | css3教程-css3实例-css3动画 | W3CPlus</title>
  <link type="text/css" rel="stylesheet" href="http://cdn2.w3cplus.com/cdn/farfuture/pVH-LwC0dS3RuFZNrwoQICYYIyWOEREMTXOP2JJ9nls/mtime:1445075959/sites/default/files/cdn/css/http/css_UmjYWbn8Yf1MjxlPR0E074Surjy3buZG43uTKL-Fjxw.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://cdn1.w3cplus.com/cdn/farfuture/XYUKSkoK26BjxeXgqQ_mOJsonDe2iv0ILpWDNN4KNOU/mtime:1446959435/sites/default/files/cdn/css/http/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://cdn1.w3cplus.com/cdn/farfuture/rj5JcyD8YNBs67ZjiLItb4gZlvRL0oORydQAcYscR_I/mtime:1445075959/sites/default/files/cdn/css/http/css_QmXPVGhcTv8mB_NIV1AEdR5Bj-0k_d2pHiGsSSa2yRs.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://cdn2.w3cplus.com/cdn/farfuture/6-Uh9q82Vu0vGGcdUDO3tfW5p5IQ3fm1ePqBhw_U5vM/mtime:1446959435/sites/default/files/cdn/css/http/css_2Cqg6RQQR_iryo9qgJuclQk_4r7nWVPWD30VzlqEIHQ.css" media="all" />
  <script type="text/javascript" src="http://cdn.w3cplus.com/cdn/farfuture/_Qo1I2TYlx6qGytL8HFZInAp3sMWqSRZRtufkzsedXc/mtime:1408719538/sites/all/modules/contrib/respondjs/lib/respond.min.js?nxomfk"></script>
<script type="text/javascript" src="http://cdn.w3cplus.com/cdn/farfuture/9AzihyBzzCYWFLNPHHBwOUak1eqLKzfLnyB07W0zzBE/mtime:1446123736/sites/default/files/js/js_oCVMDTeSNt-_QxknevWyf6yO5OzmME3AhRz3ggZgNtg.js"></script>
<script type="text/javascript" src="http://cdn2.w3cplus.com/cdn/farfuture/-3OR5dIqYvjQhEgSNiT3Au9XvKjXt0dcpeo_2glWtxA/mtime:1446123736/sites/default/files/js/js_Q8wDWEgjYe-OBtFnvc0T4F4BL32KjrS5jqGxOAvgxng.js"></script>
<script type="text/javascript" src="http://cdn.w3cplus.com/cdn/farfuture/w5y68ZMIaWyULIaYRXheRn-WuPc9KVr5NQiZar8nE4M/mtime:1446200083/sites/default/files/js/js_TBqACwJ2O6XDwB-OMOlsrbWqFrjJKxG0GDB2_o13-e8.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"w3cplusV2","theme_token":"jr7tF6FZofYl_LuidEDcjKWTnr-SQmkHzSzR1OJC-7Y","js":{"0":1,"modules\/statistics\/statistics.js":1,"sites\/all\/modules\/contrib\/respondjs\/lib\/respond.min.js":1,"sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"public:\/\/languages\/zh-hans_PRjOjJ8Qw4fdWJHLr3puWMKoFGiIXPEWuw_fV0Fu1-o.js":1,"sites\/all\/modules\/contrib\/baidu_analytics\/baidu_analytics.js":1,"sites\/all\/themes\/w3cplusV2\/js\/highlight.pack.js":1,"sites\/all\/themes\/w3cplusV2\/js\/main.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/contrib\/views\/css\/views.css":1,"sites\/all\/modules\/contrib\/ckeditor\/ckeditor.css":1,"sites\/all\/modules\/contrib\/ctools\/css\/ctools.css":1,"sites\/all\/themes\/w3cplusV2\/css\/style.css":1}},"baidu_analytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls|xml|z|zip"},"statistics":{"data":{"nid":"877"},"url":"\/modules\/statistics\/statistics.php"}});
//--><!]]>
</script>
<!-- w3cplus.com Baidu tongji analytics -->
<script>
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
</script>
</head>
<body class="html not-front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-877 node-type-blog featured" >
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable">跳转到主要内容</a>
  </div>
    <div id="header" role="header">
  <div class="container">
    <h1 id="logo">
      <a href="/" title="记述前端那些事,引领web前沿,打造精品css3教程" id="site_name">w3cplus</a>
    </h1>
    <div class="toggle-topbar menu-icon" id="pull">
      <a href="#"><span>Menu</span></a>
    </div>
    <div class="toogle-topbar-content" id="pull-menu">
              <ul class="menu clearfix"><li class="first leaf active-trail"><a href="/blogs/list.html" title="" class="active active-trail">博客</a></li>
<li class="leaf"><a href="/blog/css3" title="">CSS3</a></li>
<li class="leaf"><a href="/mobile" title="">Mobile</a></li>
<li class="leaf"><a href="/blog/tags/302.html" title="Sass教程">Sass</a></li>
<li class="leaf"><a href="http://www.w3cplus.com/blog/tags/516.html" title="PostCSS">PostCSS</a></li>
<li class="leaf"><a href="/responsive" title="响应式设计">Responsive</a></li>
<li class="leaf"><a href="/blog/translations" title="译文">译文</a></li>
<li class="leaf"><a href="http://www.w3cplus.com/blog/tags/411.html" title="SVG">SVG</a></li>
<li class="leaf"><a href="/lessons.html" title="在线教程">在线教程</a></li>
<li class="leaf"><a href="/resources/list.html" title="">资源</a></li>
<li class="leaf"><a href="/demos/list.html" title="">案例</a></li>
<li class="leaf"><a href="/source/front-end-developer-excellent-tool.html" title="在线工具">工具</a></li>
<li class="last leaf"><a href="/tags" title="标签云">标签云</a></li>
</ul>        <!-- /#main-menu -->
          </div>
  </div>
</div>

  <div id="branding" role="branding">
    <div class="container">
        <div class="region region-branding">
    <div id="block-block-44" class="block block-block">

    
  <div class="content">
    <div class="ct-ad-article-wrapper" id="content-ad1" style="margin:0;padding:0;">
  <div class="ct-ad-article">
    <div class="bsap">
     <a href="http://www.zhufengpeixun.cn/jscourse/jscourse224.html" target="_blank">
      <img src="http://cdn1.w3cplus.com/cdn/farfuture/Hp2V9N7fOQNJik0LkylE8JQLLB_94C_YdU3De4FjgWU/mtime:1436073094/sites/default/files/blogs/2015/1507/zhuhui-logo.jpg">
     </a>
    </div>
  </div>
</div>  </div>
</div>
  </div>
    </div>
  </div> 

<div id="page" role="page">
  <div class="container">
    
    <div class="col-main">
      <div class="main-wrap">
        
                    <div class="region region-featured">
    <div id="block-block-22" class="block block-block">

    
  <div class="content">
    <div class="ct-ad-article-wrapper" id="content-ad1">
  <div class="ct-ad-article">
    <div class="bsap">
     <a href="http://study.163.com/topics/20151111sale_m/?utm_source=w3cplus.com&utm_medium=web_banner&utm_campaign=doubleeleven" target="_blank">
      <img src="http://cdn2.w3cplus.com/cdn/farfuture/qByNqxzjWbhqosB1Mfiu4uP8aDfGFVSyMHQZ99i3_b8/mtime:1446200000/sites/default/files/blogs/2015/1510/study-163.jpg">
     </a>
    </div>
  </div>
</div>  </div>
</div>
  </div>
                
        <div class="page-inner">
                      <div id="breadcrumb" role="breadcrumb">
              <h2 class="element-invisible">你在这里</h2><div class="breadcrumb"><a href="/">首页</a> » <a href="/blog">博客</a> » <a href="/blogs/pet">Pet的博客</a></div>            </div>
          
          
          <a id="main-content"></a>
                                <h1 class="title" id="page-title">
              前端开发必备！Emmet使用手册            </h1>
          
                    
                                <div class="region region-content">
    <div id="block-system-main" class="block block-system">

    
  <div class="content">
    <div id="node-877" class="node node-blog node-promoted node-full clearfix" about="/tools/emmet-cheat-sheet.html" typeof="sioc:Post sioct:BlogPost">
  
  <div class="node-header">
              <div class="submitted">
          作者：<span>白牙</span>          日期：<span>2013-10-09</span>          点击：<span>44114</span>        </div>
            <div class="tags">
        <div class="field field-name-field-blog-tag field-type-taxonomy-term-reference field-label-hidden"><div class="field-items"><div class="field-item even"><a href="/blog/tags/387.html" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Emmet</a></div></div></div>      </div>
  </div>

      <div id="node-top" class="node-top">
      <div id="block-block-38" class="block block-block">

    
  <div class="content">
    <div class="ct-ad-article-wrapper" id="content-ad">
  <div class="ct-ad-article">
    <div class="bsap">
     <a href="http://www.miaov.com/2013/download/video_download.html" target="_blank">
      <img src="http://cdn1.w3cplus.com/cdn/farfuture/MQpTSoNOf0TtarfrE-dG4O1SPLAGYjWtyp8WcdxiZ9A/mtime:1440605388/sites/default/files/blogs/2015/1508/miaomei.png" />
     </a>
    </div>
  </div>
</div>  </div>
</div>
    </div>
  
  <div class="body-content clearfix">
    <div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><h3>
	介绍</h3>
<p>Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具:</p>
<p><img src="http://cdn.w3cplus.com/cdn/farfuture/jXcuIfm_Jn4-aJO7c59GOzDUd1163lwYGIWK3PIX2oE/mtime:1421034939/sites/default/files/styles/print_image/public/baiyaimages/emmet-p1.jpg" /></p>
<p>基本上，大多数的文本编辑器都会允许你存储和重用一些代码块，我们称之为“片段”。虽然片段能很好地推动你得生产力，但大多数的实现都有这样一个缺点：你必须先定义你得代码片段，并且不能再运行时进行拓展。</p>
<p>Emmet把片段这个概念提高到了一个新的层次：你可以设置CSS形式的能够动态被解析的表达式，然后根据你所输入的缩写来得到相应的内容。Emmet是很成熟的并且非常适用于编写HTML/XML 和 CSS 代码的前端开发人员，但也可以用于编程语言。</p>
<div class="gg-ad clearfix" style="text-align:center;">
<script type="text/javascript">
<!--//--><![CDATA[// ><!--

/*468*60，创建于2014-3-16*/
var cpro_id = "u1490106";

//--><!]]>
</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script></div>
<h3>
	使用示例：</h3>
<p><strong>在编辑器中输入缩写代码：</strong>ul&gt;li*5 ，然后按下拓展键（默认为tab），即可得到代码片段：</p>
<pre>
&lt;ul&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<h3>
	下载和安装</h3>
<ol><li>
		<p><strong>Emmet为大部分流行的编辑器都提供了安装插件，下面是它们的下载链接：</strong></p>
		<ul><li>
				<a href="https://github.com/sergeche/emmet-sublime#readme">Sublime Text</a></li>
			<li>
				<a href="https://github.com/emmetio/emmet-eclipse#readme">Eclipse/Aptana</a></li>
			<li>
				<a href="https://github.com/emmetio/Emmet.tmplugin#readme">TextMate</a></li>
			<li>
				<a href="https://github.com/emmetio/Emmet.codaplugin#readme">Coda</a></li>
			<li>
				<a href="https://github.com/emmetio/Emmet.sugar#readme">Espresso</a></li>
			<li>
				<a href="https://github.com/sergeche/emmet.chocmixin#readme">Chocolat</a></li>
			<li>
				<a href="http://community.activestate.com/xpi/zen-coding">Komodo Edit</a></li>
			<li>
				<a href="https://github.com/emmetio/npp#readme">Notepad++</a></li>
			<li>
				<a href="https://github.com/emmetio/pspad">PSPad</a></li>
			<li>
				<a href="https://github.com/emmetio/textarea">textarea</a></li>
			<li>
				<a href="https://github.com/emmetio/codemirror#readme">CodeMirror</a></li>
			<li>
				<a href="https://github.com/emmetio/brackets-emmet#readme">Brackets</a></li>
			<li>
				<a href="https://github.com/emmetio/netbeans#readme">NetBeans</a></li>
			<li>
				<a href="https://github.com/emmetio/dreamweaver#readme">Adobe Dreamweaver</a></li>
		</ul></li>
	<li>
		<p><strong>在线编辑器的支持：</strong></p>
		<ul><li>
				<a href="http://jsfiddle.net/">JSFiddle</a></li>
			<li>
				<a href="http://jsbin.com/">JS Bin</a></li>
			<li>
				<a href="http://codepen.io/">CodePen</a></li>
			<li>
				<a href="http://icecoder.net/">ICEcoder</a></li>
			<li>
				<a href="http://www.divshot.com/">Divshot</a></li>
			<li>
				<a href="http://codio.com/">Codio</a></li>
		</ul></li>
	<li>
		<p><strong>第三方插件的支持</strong></p>
		<p>下面这些编辑器的插件都是由第三方开发者所提供的，所以可能并不支持所有Emmet的功能和特性。</p>
		<ul><li>
				<a href="http://www.uvviewsoft.com/synwrite/">SynWrite</a></li>
			<li>
				<a href="http://www.jetbrains.com/webstorm/">WebStorm</a></li>
			<li>
				<a href="http://www.jetbrains.com/phpstorm/">PhpStorm</a></li>
			<li>
				<a href="https://github.com/mattn/emmet-vim">Vim</a></li>
			<li>
				<a href="http://www.htmlkit.com/">HTML-Kit</a></li>
			<li>
				<a href="http://wiki.hippoedit.com/plugins/emmet">HippoEDIT</a></li>
			<li>
				<a href="http://www.codelobster.com/">CodeLobster PHP Edition</a></li>
			<li>
				<a href="https://github.com/e-sites/tinymce-emmet-plugin#readme">TinyMCE</a></li>
		</ul></li>
</ol><p><strong>因为我也是Sublime Text的使用者，所以下面为大家介绍一下sublime text中Emmet的安装方法：</strong></p>
<p><strong>步骤一：</strong>首先你需要为sublime text安装Package Control组件：</p>
<ol><li>
		按Ctrl+`调出sublime text的console</li>
	<li>
		粘贴以下代码到底部命令行并回车： import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed<em>packages</em>path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('<a href="http://sublime.wbond.net/'+pf.replace">http://sublime.wbond.net/'+pf.replace</a>(' ','%20')).read())</li>
	<li>
		重启Sublime Text</li>
	<li>
		在Perferences-&gt;package settings中看到package control，则表示安装成功</li>
</ol><p><strong>步骤二：</strong>使用Package Control安装Emmet插件：</p>
<ol><li>
		按Ctrl+Shift+P命令板</li>
	<li>
		输入install然后选择install Package，然后输入emmet找到 Emmet Css Snippets，点击就可以自动完成安装。</li>
</ol><h3>
	使用方法</h3>
<p>emmet的使用方法也非常简单，以sublime text为例，直接在编辑器中输入HTML或CSS的代码的缩写，然后按tab键就可以拓展为完整的代码片段。（如果与已有的快捷键有冲突的话，可以自行在编辑器中将拓展键设为其他快捷键）</p>
<h2>
	语法:</h2>
<h4>
	后代：&gt;</h4>
<p><strong>缩写</strong>：nav&gt;ul&gt;li</p>
<pre>
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
</pre>
<h4>
	兄弟：+</h4>
<p><strong>缩写</strong>：div+p+bq</p>
<pre>
&lt;div&gt;&lt;/div&gt;
&lt;p&gt;&lt;/p&gt;
&lt;blockquote&gt;&lt;/blockquote&gt;
</pre>
<h4>
	上级：^</h4>
<p><strong>缩写</strong>：div+div&gt;p&gt;span+em^bq</p>
<pre>
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;
    &lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;em&gt;&lt;/em&gt;&lt;/p&gt;
    &lt;blockquote&gt;&lt;/blockquote&gt;
&lt;/div&gt;
</pre>
<p><strong>缩写</strong>：div+div&gt;p&gt;span+em^^bq</p>
<pre>
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;
    &lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;em&gt;&lt;/em&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;blockquote&gt;&lt;/blockquote&gt;
</pre>
<h4>
	分组：()</h4>
<p><strong>缩写</strong>：div&gt;(header&gt;ul&gt;li*2&gt;a)+footer&gt;p</p>
<pre>
&lt;div&gt;
    &lt;header&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href=""&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=""&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/header&gt;
    &lt;footer&gt;
        &lt;p&gt;&lt;/p&gt;
    &lt;/footer&gt;
&lt;/div&gt;
</pre>
<p><strong>缩写</strong>：(div&gt;dl&gt;(dt+dd)*3)+footer&gt;p</p>
<pre>
&lt;div&gt;
    &lt;dl&gt;
        &lt;dt&gt;&lt;/dt&gt;
        &lt;dd&gt;&lt;/dd&gt;
        &lt;dt&gt;&lt;/dt&gt;
        &lt;dd&gt;&lt;/dd&gt;
        &lt;dt&gt;&lt;/dt&gt;
        &lt;dd&gt;&lt;/dd&gt;
    &lt;/dl&gt;
&lt;/div&gt;
&lt;footer&gt;
    &lt;p&gt;&lt;/p&gt;
&lt;/footer&gt;
</pre>
<h4>
	乘法：*</h4>
<p><strong>缩写</strong>：ul&gt;li*5</p>
<pre>
&lt;ul&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<h4>
	自增符号：$</h4>
<p><strong>缩写</strong>：ul&gt;li.item$*5</p>
<pre>
&lt;ul&gt;
    &lt;li class="item1"&gt;&lt;/li&gt;
    &lt;li class="item2"&gt;&lt;/li&gt;
    &lt;li class="item3"&gt;&lt;/li&gt;
    &lt;li class="item4"&gt;&lt;/li&gt;
    &lt;li class="item5"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<p><strong>缩写</strong>：h$[title=item$]{Header $}*3</p>
<pre>
&lt;h1 title="item1"&gt;Header 1&lt;/h1&gt;
&lt;h2 title="item2"&gt;Header 2&lt;/h2&gt;
&lt;h3 title="item3"&gt;Header 3&lt;/h3&gt;
</pre>
<p><strong>缩写</strong>：ul&gt;li.item$$$*5</p>
<pre>
&lt;ul&gt;
    &lt;li class="item001"&gt;&lt;/li&gt;
    &lt;li class="item002"&gt;&lt;/li&gt;
    &lt;li class="item003"&gt;&lt;/li&gt;
    &lt;li class="item004"&gt;&lt;/li&gt;
    &lt;li class="item005"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<p><strong>缩写</strong>：ul&gt;li.item$@-*5</p>
<pre>
&lt;ul&gt;
    &lt;li class="item5"&gt;&lt;/li&gt;
    &lt;li class="item4"&gt;&lt;/li&gt;
    &lt;li class="item3"&gt;&lt;/li&gt;
    &lt;li class="item2"&gt;&lt;/li&gt;
    &lt;li class="item1"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<p><strong>缩写</strong>：ul&gt;li.item$@3*5</p>
<pre>
&lt;ul&gt;
    &lt;li class="item3"&gt;&lt;/li&gt;
    &lt;li class="item4"&gt;&lt;/li&gt;
    &lt;li class="item5"&gt;&lt;/li&gt;
    &lt;li class="item6"&gt;&lt;/li&gt;
    &lt;li class="item7"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<h4>
	ID和类属性</h4>
<p><strong>缩写</strong>：#header</p>
<pre>
&lt;div id="header"&gt;&lt;/div&gt;
</pre>
<p><strong>缩写</strong>：.title</p>
<pre>
&lt;div class="title"&gt;&lt;/div&gt;
</pre>
<p><strong>缩写</strong>：form#search.wide</p>
<pre>
&lt;form id="search" class="wide"&gt;&lt;/form&gt;
</pre>
<p><strong>缩写</strong>：p.class1.class2.class3</p>
<pre>
&lt;p class="class1 class2 class3"&gt;&lt;/p&gt;
</pre>
<h4>
	自定义属性</h4>
<p><strong>缩写</strong>：p[title="Hello world"]</p>
<pre>
&lt;p title="Hello world"&gt;&lt;/p&gt;
</pre>
<p><strong>缩写</strong>：td[rowspan=2 colspan=3 title]</p>
<pre>
&lt;td rowspan="2" colspan="3" title=""&gt;&lt;/td&gt;
</pre>
<p><strong>缩写</strong>：[a='value1' b="value2"]</p>
<pre>
&lt;div a="value1" b="value2"&gt;&lt;/div&gt;
</pre>
<h4>
	文本：{}</h4>
<p><strong>缩写</strong>：a{Click me}</p>
<pre>
&lt;a href=""&gt;Click me&lt;/a&gt;
</pre>
<p><strong>缩写</strong>：p&gt;{Click }+a{here}+{ to continue}</p>
<pre>
&lt;p&gt;Click &lt;a href=""&gt;here&lt;/a&gt; to continue&lt;/p&gt;
</pre>
<h4>
	隐式标签</h4>
<p><strong>缩写</strong>：.class</p>
<pre>
&lt;div class="class"&gt;&lt;/div&gt;
</pre>
<p><strong>缩写</strong>：em&gt;.class</p>
<pre>
&lt;em&gt;&lt;span class="class"&gt;&lt;/span&gt;&lt;/em&gt;
</pre>
<p><strong>缩写</strong>：ul&gt;.class</p>
<pre>
&lt;ul&gt;
    &lt;li class="class"&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
<p><strong>缩写</strong>：table&gt;.row&gt;.col</p>
<pre>
&lt;table&gt;
    &lt;tr class="row"&gt;
        &lt;td class="col"&gt;&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>
<h3>
	HTML</h3>
<p><em>所有未知的缩写都会转换成标签，例如，foo → &lt;foo&gt;&lt;/foo&gt;</em></p>
<p><strong>缩写</strong>：!</p>
<pre>
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<p><strong>缩写</strong>：a</p>
<pre>
&lt;a href=""&gt;&lt;/a&gt;
</pre>
<p><strong>缩写</strong>：a:link</p>
<pre>
&lt;a href="http://"&gt;&lt;/a&gt;
</pre>
<p><strong>缩写</strong>：a:mail</p>
<pre>
&lt;a href="mailto:"&gt;&lt;/a&gt;
</pre>
<p><strong>缩写</strong>：abbr</p>
<pre>
&lt;abbr title=""&gt;&lt;/abbr&gt;
</pre>
<p><strong>缩写</strong>：acronym</p>
<pre>
&lt;acronym title=""&gt;&lt;/acronym&gt;
</pre>
<p><strong>缩写</strong>：base</p>
<pre>
&lt;base href="" /&gt;
</pre>
<p><strong>缩写</strong>：basefont</p>
<pre>
&lt;basefont /&gt;
</pre>
<p><strong>缩写</strong>：br</p>
<pre>
&lt;br /&gt;
</pre>
<p><strong>缩写</strong>：frame</p>
<pre>
&lt;frame /&gt;
</pre>
<p><strong>缩写</strong>：hr</p>
<pre>
&lt;hr /&gt;
</pre>
<p><strong>缩写</strong>：bdo</p>
<pre>
&lt;bdo dir=""&gt;&lt;/bdo&gt;
</pre>
<p><strong>缩写</strong>：bdo:r</p>
<pre>
&lt;bdo dir="rtl"&gt;&lt;/bdo&gt;
</pre>
<p><strong>缩写</strong>：bdo:l</p>
<pre>
&lt;bdo dir="ltr"&gt;&lt;/bdo&gt;
</pre>
<p><strong>缩写</strong>：col</p>
<pre>
&lt;col /&gt;
</pre>
<p><strong>缩写</strong>：link</p>
<pre>
&lt;link rel="stylesheet" href="" /&gt;
</pre>
<p><strong>缩写</strong>：link:css</p>
<pre>
&lt;link rel="stylesheet" href="style.css" /&gt;
</pre>
<p><strong>缩写</strong>：link:print</p>
<pre>
&lt;link rel="stylesheet" href="print.css" media="print" /&gt;
</pre>
<p><strong>缩写</strong>：link:favicon</p>
<pre>
&lt;link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /&gt;
</pre>
<p><strong>缩写</strong>：link:touch</p>
<pre>
&lt;link rel="apple-touch-icon" href="favicon.png" /&gt;
</pre>
<p><strong>缩写</strong>：link:rss</p>
<pre>
&lt;link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml" /&gt;
</pre>
<p><strong>缩写</strong>：link:atom</p>
<pre>
&lt;link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml" /&gt;
</pre>
<p><strong>缩写</strong>：meta</p>
<pre>
&lt;meta /&gt;
</pre>
<p><strong>缩写</strong>：meta:utf</p>
<pre>
&lt;meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /&gt;
</pre>
<p><strong>缩写</strong>：meta:win</p>
<pre>
&lt;meta http-equiv="Content-Type" content="text/html;charset=windows-1251" /&gt;
</pre>
<p><strong>缩写</strong>：meta:vp</p>
<pre>
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /&gt;
</pre>
<p><strong>缩写</strong>：meta:compat</p>
<pre>
&lt;meta http-equiv="X-UA-Compatible" content="IE=7" /&gt;
</pre>
<p><strong>缩写</strong>：style</p>
<pre>
&lt;style&gt;&lt;/style&gt;
</pre>
<p><strong>缩写</strong>：script</p>
<pre>
&lt;script&gt;&lt;/script&gt;
</pre>
<p><strong>缩写</strong>：script:src</p>
<pre>
&lt;script src=""&gt;&lt;/script&gt;
</pre>
<p><strong>缩写</strong>：img</p>
<pre>
&lt;img src="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：iframe</p>
<pre>
&lt;iframe src="" frameborder="0"&gt;&lt;/iframe&gt;
</pre>
<p><strong>缩写</strong>：embed</p>
<pre>
&lt;embed src="" type="" /&gt;
</pre>
<p><strong>缩写</strong>：object</p>
<pre>
&lt;object data="" type=""&gt;&lt;/object&gt;
</pre>
<p><strong>缩写</strong>：param</p>
<pre>
&lt;param name="" value="" /&gt;
</pre>
<p><strong>缩写</strong>：map</p>
<pre>
&lt;map name=""&gt;&lt;/map&gt;
</pre>
<p><strong>缩写</strong>：area</p>
<pre>
&lt;area shape="" coords="" href="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：area:d</p>
<pre>
&lt;area shape="default" href="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：area:c</p>
<pre>
&lt;area shape="circle" coords="" href="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：area:r</p>
<pre>
&lt;area shape="rect" coords="" href="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：area:p</p>
<pre>
&lt;area shape="poly" coords="" href="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：form</p>
<pre>
&lt;form action=""&gt;&lt;/form&gt;
</pre>
<p><strong>缩写</strong>：form:get</p>
<pre>
&lt;form action="" method="get"&gt;&lt;/form&gt;
</pre>
<p><strong>缩写</strong>：form:post</p>
<pre>
&lt;form action="" method="post"&gt;&lt;/form&gt;
</pre>
<p><strong>缩写</strong>：label</p>
<pre>
&lt;label for=""&gt;&lt;/label&gt;
</pre>
<p><strong>缩写</strong>：input</p>
<pre>
&lt;input type="text" /&gt;
</pre>
<p><strong>缩写</strong>：inp</p>
<pre>
&lt;input type="text" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:hidden</p>
<p><em>别名：input[type=hidden name]</em></p>
<pre>
&lt;input type="hidden" name="" /&gt;
</pre>
<p><strong>缩写</strong>：input:h</p>
<p><em>别名：input:hidden</em></p>
<pre>
&lt;input type="hidden" name="" /&gt;
</pre>
<p><strong>缩写</strong>：input:text, input:t</p>
<p><em>别名：inp</em></p>
<pre>
&lt;input type="text" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:search</p>
<p><em>别名：inp[type=search]</em></p>
<pre>
&lt;input type="search" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:email</p>
<p><em>别名：inp[type=email]</em></p>
<pre>
&lt;input type="email" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:url</p>
<p><em>别名：inp[type=url]</em></p>
<pre>
&lt;input type="url" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:password</p>
<p><em>别名：inp[type=password]</em></p>
<pre>
&lt;input type="password" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:p</p>
<p><em>别名：input:password</em></p>
<pre>
&lt;input type="password" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:datetime</p>
<p><em>别名：inp[type=datetime]</em></p>
<pre>
&lt;input type="datetime" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:date</p>
<p><em>别名：inp[type=date]</em></p>
<pre>
&lt;input type="date" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:datetime-local</p>
<p><em>别名：inp[type=datetime-local]</em></p>
<pre>
&lt;input type="datetime-local" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:month</p>
<p><em>别名：inp[type=month]</em></p>
<pre>
&lt;input type="month" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:week</p>
<p><em>别名：inp[type=week]</em></p>
<pre>
&lt;input type="week" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:time</p>
<p><em>别名：inp[type=time]</em></p>
<pre>
&lt;input type="time" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:number</p>
<p><em>别名：inp[type=number]</em></p>
<pre>
&lt;input type="number" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:color</p>
<p><em>别名：inp[type=color]</em></p>
<pre>
&lt;input type="color" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:checkbox</p>
<p><em>别名：inp[type=checkbox]</em></p>
<pre>
&lt;input type="checkbox" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:c</p>
<p><em>别名：input:checkbox</em></p>
<pre>
&lt;input type="checkbox" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:radio</p>
<p><em>别名：inp[type=radio]</em></p>
<pre>
&lt;input type="radio" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:r</p>
<p><em>别名：input:radio</em></p>
<pre>
&lt;input type="radio" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:range</p>
<p><em>别名：inp[type=range]</em></p>
<pre>
&lt;input type="range" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:file</p>
<p><em>别名：inp[type=file]</em></p>
<pre>
&lt;input type="file" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:f</p>
<p><em>别名：input:file</em></p>
<pre>
&lt;input type="file" name="" id="" /&gt;
</pre>
<p><strong>缩写</strong>：input:submit</p>
<pre>
&lt;input type="submit" value="" /&gt;
</pre>
<p><strong>缩写</strong>：input:s</p>
<p><em>别名：input:submit</em></p>
<pre>
&lt;input type="submit" value="" /&gt;
</pre>
<p><strong>缩写</strong>：input:image</p>
<pre>
&lt;input type="image" src="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：input:i</p>
<p><em>别名：input:image</em></p>
<pre>
&lt;input type="image" src="" alt="" /&gt;
</pre>
<p><strong>缩写</strong>：input:button</p>
<pre>
&lt;input type="button" value="" /&gt;
</pre>
<p><strong>缩写</strong>：input:b</p>
<p><em>别名：input:button</em></p>
<pre>
&lt;input type="button" value="" /&gt;
</pre>
<p><strong>缩写</strong>：isindex</p>
<pre>
&lt;isindex /&gt;
</pre>
<p><strong>缩写</strong>：input:reset</p>
<p><em>别名：input:button[type=reset]</em></p>
<pre>
&lt;input type="reset" value="" /&gt;
</pre>
<p><strong>缩写</strong>：select</p>
<pre>
&lt;select name="" id=""&gt;&lt;/select&gt;
</pre>
<p><strong>缩写</strong>：option</p>
<pre>
&lt;option value=""&gt;&lt;/option&gt;
</pre>
<p><strong>缩写</strong>：textarea</p>
<pre>
&lt;textarea name="" id="" cols="30" rows="10"&gt;&lt;/textarea&gt;
</pre>
<p><strong>缩写</strong>：menu:context</p>
<p><em>别名：menu[type=context]&gt;</em></p>
<pre>
&lt;menu type="context"&gt;&lt;/menu&gt;
</pre>
<p><strong>缩写</strong>：menu:c</p>
<p><em>别名：menu:context</em></p>
<pre>
&lt;menu type="context"&gt;&lt;/menu&gt;
</pre>
<p><strong>缩写</strong>：menu:toolbar</p>
<p><em>别名：menu[type=toolbar]&gt;</em></p>
<pre>
&lt;menu type="toolbar"&gt;&lt;/menu&gt;
</pre>
<p><strong>缩写</strong>：menu:t</p>
<p><em>别名：menu:toolbar</em></p>
<pre>
&lt;menu type="toolbar"&gt;&lt;/menu&gt;
</pre>
<p><strong>缩写</strong>：video</p>
<pre>
&lt;video src=""&gt;&lt;/video&gt;
</pre>
<p><strong>缩写</strong>：audio</p>
<pre>
&lt;audio src=""&gt;&lt;/audio&gt;
</pre>
<p><strong>缩写</strong>：html:xml</p>
<pre>
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;&lt;/html&gt;
</pre>
<p><strong>缩写</strong>：keygen</p>
<pre>
&lt;keygen /&gt;
</pre>
<p><strong>缩写</strong>：command</p>
<pre>
&lt;command /&gt;
</pre>
<p><strong>缩写</strong>：bq</p>
<p><em>别名：blockquote</em></p>
<pre>
&lt;blockquote&gt;&lt;/blockquote&gt;
</pre>
<p><strong>缩写</strong>：acr</p>
<p><em>别名：acronym</em></p>
<pre>
&lt;acronym title=""&gt;&lt;/acronym&gt;
</pre>
<p><strong>缩写</strong>：fig</p>
<p><em>别名：figure</em></p>
<pre>
&lt;figure&gt;&lt;/figure&gt;
</pre>
<p><strong>缩写</strong>：figc</p>
<p><em>别名：figcaption</em></p>
<pre>
&lt;figcaption&gt;&lt;/figcaption&gt;
</pre>
<p><strong>缩写</strong>：ifr</p>
<p><em>别名：iframe</em></p>
<pre>
&lt;iframe src="" frameborder="0"&gt;&lt;/iframe&gt;
</pre>
<p><strong>缩写</strong>：emb</p>
<p><em>别名：embed</em></p>
<pre>
&lt;embed src="" type="" /&gt;
</pre>
<p><strong>缩写</strong>：obj</p>
<p><em>别名：object</em></p>
<pre>
&lt;object data="" type=""&gt;&lt;/object&gt;
</pre>
<p><strong>缩写</strong>：src</p>
<p><em>别名：source</em></p>
<pre>
&lt;source&gt;&lt;/source&gt;
</pre>
<p><strong>缩写</strong>：cap</p>
<p><em>别名：caption</em></p>
<pre>
&lt;caption&gt;&lt;/caption&gt;
</pre>
<p><strong>缩写</strong>：colg</p>
<p><em>别名：colgroup</em></p>
<pre>
&lt;colgroup&gt;&lt;/colgroup&gt;
</pre>
<p><strong>缩写</strong>：fst, fset</p>
<p><em>别名：fieldset</em></p>
<pre>
&lt;fieldset&gt;&lt;/fieldset&gt;
</pre>
<p><strong>缩写</strong>：btn</p>
<p><em>别名：button</em></p>
<pre>
&lt;button&gt;&lt;/button&gt;
</pre>
<p><strong>缩写</strong>：btn:b</p>
<p><em>别名：button[type=button]</em></p>
<pre>
&lt;button type="button"&gt;&lt;/button&gt;
</pre>
<p><strong>缩写</strong>：btn:r</p>
<p><em>别名：button[type=reset]</em></p>
<pre>
&lt;button type="reset"&gt;&lt;/button&gt;
</pre>
<p><strong>缩写</strong>：btn:s</p>
<p><em>别名：button[type=submit]</em></p>
<pre>
&lt;button type="submit"&gt;&lt;/button&gt;
</pre>
<h4>
	关于更多的HTML以及CSS的缩写请查看：</h4>
<p class="btns-zone"><a class="btn-demo" href="http://www.w3cplus.com/sites/default/files/baiyaimages/CheatSheet.jpg" target="_blank">下载 API表</a><a class="btn-download" href="http://docs.emmet.io/cheat-sheet/" target="_blank">直击官网文档</a></p>
<p><strong>特别声明：</strong>文中演示代码来自于官网API：<a href="http://docs.emmet.io/cheat-sheet/" target="_blank">http://docs.emmet.io/cheat-sheet/</a></p>
<p>如需转载，请遵守<a href="http://www.w3cplus.com/page/661.html" target="_blank">W3cplus版权声明</a>，烦请注明出处：<a href="http://www.w3cplus.com/tools/emmet-cheat-sheet.html" target="_blank">http://www.w3cplus.com/tools/emmet-cheat-sheet.html</a></p>
</div></div></div>  </div>

  
   
    <div id="node_footer" class="clearfix">
              <div class="previous-next"><span class="prev">上一篇: </span><a href="/css/semantic-css-with-intelligent-selectors.html">结合智能选择器的语义化的CSS</a> | <span class="next">下一篇: </span><a href="/css3/icon-fonts.html">为什么要用和如何使用字体图标</a></div>            <div class="bdsharebuttonbox">
        <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
        <a href="#" class="bds_twi" data-cmd="twi" title="分享到Twitter"></a>
        <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
        <a href="#" class="bds_linkedin" data-cmd="linkedin" title="分享到linkedin"></a>
        <a href="#" class="bds_fbook" data-cmd="fbook" title="分享到Facebook"></a>
        <a href="#" class="bds_youdao" data-cmd="youdao" title="分享到有道云笔记"></a>
        <a href="#" class="bds_more" data-cmd="more"></a>
      </div>
      <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"来自于W3cplus","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"2","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
    </div>

          <div id="node_bottom">
        <div id="block-block-23" class="block block-block">

    
  <div class="content">
    <div class="alipay" title="欢迎使用支付宝扫一扫，绝对安全">
	<h4 class="title">(^_^)如果您觉得此文对您有帮助，打个赏喝个咖啡(^_^)</h4>
	<div class="des"><a title="小小赞助大大帮助" href="http://cdn.w3cplus.com/cdn/farfuture/yQ-bqUJO2f7vtxi4peKn0J8OUE6LYb4pQnPw3jvLQd8/mtime:1399620776/sites/default/files/apr2rfygtefwlap154.png" target="_blank"><img align="absmiddle" width="156" height="156" alt="(^_^)如果您觉得此文对您有帮助，打个赏喝个咖啡(^_^)" src="http://cdn.w3cplus.com/cdn/farfuture/yQ-bqUJO2f7vtxi4peKn0J8OUE6LYb4pQnPw3jvLQd8/mtime:1399620776/sites/default/files/apr2rfygtefwlap154.png"></a></div>
</div>


        </div>
</div>
<div id="block-block-24" class="block block-block">

    
  <div class="content">
    <div class="ct-ad-article-wrapper" id="content-bottom-ad">
	<div class="ct-ad-article">
		<div class="bsap">
			<script type="text/javascript">
    /*960*90 创建于 2014-10-12*/
    var cpro_id = "u1755601";
</script>
<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>
		</div>
	</div>
</div>
  </div>
</div>
      </div>
        

</div>  </div>
</div>
<div id="block-block-45" class="block block-block">

    
  <div class="content">
    <!-- 多说评论框 start -->
	<div class="ds-thread" data-thread-key="877" data-title="前端开发必备！Emmet使用手册" data-author-key="1250"></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
var duoshuoQuery = {short_name:"w3cplus"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
	</script>
<!-- 多说公共JS代码 end -->
  </div>
</div>
  </div>

        </div>

      </div>
    </div>

    
          <div id="sidebar-second" class="col-extra">
        <script type="text/javascript">document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E%3Cscript charset="utf-8" src="http://rp.baidu.com/rp3w/3w.js?sid=10994702955876242907') + '&t=' + (Math.ceil(new Date()/3600000)) + unescape('"%3E%3C/script%3E'));</script>
          <div class="region region-sidebar-second">
    <div id="block-block-32" class="block block-block">

    
  <div class="content">
    <p><a href="http://www.zhufengpeixun.cn/" target="_blank" title="JavaScript培训|珠峰培训"><img alt="JavaScript培训|珠峰培训" src="http://cdn.w3cplus.com/cdn/farfuture/xeusRVdZoS8vNcsSWA2EVKSsLQWeKXMNMeLmysClcfQ/mtime:1419251997/sites/default/files/blogs/2014/1412/zhufeng-sidebar.png" style="width: 300px; height: 160px;" /></a></p>
  </div>
</div>
<div id="block-block-30" class="block block-block">

    
  <div class="content">
    <div>
	<a href="http://www.w3cplus.com/" target="_blank"><img alt="" src="http://cdn1.w3cplus.com/cdn/farfuture/fNgWAjBwAB7AVN32C0KQXy32kw6erUgJOcFW2V14VcM/mtime:1413386914/sites/default/files/w3cplus-ad.png" style="width: 300px; height: 160px;" /></a></div>
  </div>
</div>
<div id="block-block-33" class="block block-block">

    
  <div class="content">
    <div>
	<a href="http://aibusy.com/course_list.html"><img alt="" src="http://cdn1.w3cplus.com/cdn/farfuture/5o8ENFi1FCpISxSwG-RPfdxkzarUpAc1TVnJFDtZS04/mtime:1420451378/sites/default/files/blogs/2015/1501/busy.jpg" style="width: 300px; height: 160px;" /></a></div>  </div>
</div>
<div id="block-block-6" class="block block-block">

    
  <div class="content">
    <div>
	<a href="http://www.w3cplus.com/" target="_blank"><img alt="" src="http://cdn1.w3cplus.com/cdn/farfuture/fNgWAjBwAB7AVN32C0KQXy32kw6erUgJOcFW2V14VcM/mtime:1413386914/sites/default/files/w3cplus-ad.png" style="width: 300px; height: 160px;" /></a></div>
  </div>
</div>
<div id="block-block-31" class="block block-block">

    
  <div class="content">
    <div>
	<a href="http://www.w3cplus.com/" target="_blank"><img alt="" src="http://cdn1.w3cplus.com/cdn/farfuture/fNgWAjBwAB7AVN32C0KQXy32kw6erUgJOcFW2V14VcM/mtime:1413386914/sites/default/files/w3cplus-ad.png" style="width: 300px; height: 160px;" /></a></div>
  </div>
</div>
<div id="block-block-18" class="block block-block">

    <h2>合作网站</h2>
  
  <div class="content">
    <ul class="clearfix" id="join_hands"><li>
		<a href="http://www.w3cplus.com/sassguide/index.html" title="Sass入门指南" target="_blank">Sass入门指南</a></li>
<li>
		<a href="http://www.w3cplus.com/solution/index/index.html" title="CSS解决方案" target="_blank">CSS解决方案</a></li>
	<li>
		<a href="http://www.w3ctech.com/" title="中国最大的前端技术社区" target="_blank">W3ctech</a></li>
	<li>
		<a href="http://drupalchina.cn" target="_blank">Drupal中国</a></li>
	<li>
		<a href="http://www.zhufengpeixun.cn" target="_blank">珠峰JavaScript培训</a></li>
	<li>
		<a href="http://www.imooc.com/course/list" target="_blank">在线编程</a></li>
</ul>  </div>
</div>
<div id="block-block-36" class="block block-block">

    <h2>关注我们</h2>
  
  <div class="content">
    <p style="text-align:center;"><img alt="" src="http://cdn2.w3cplus.com/cdn/farfuture/kjp_QAYKlGIQlwtbqga2ZA_t3kt5JqbddjbyHIMm9kU/mtime:1397811294/sites/default/files/w3cplus-weixin.jpg" style="width: 258px; height: 258px;" /></p>
  </div>
</div>
<div id="block-views-friend-block-1" class="block block-views">

    <h2>友情链接</h2>
  
  <div class="content">
    <div class="view view-friend view-id-friend view-display-id-block_1 view-dom-id-0022a12b00d83db07cb2df0bf7f3c218">
        
  
  
      <div class="view-content">
      <div class="item-list">    <ul>          <li class="views-row views-row-1 views-row-odd views-row-first">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.php-z.com/">PHP教程</a></span>  </div></li>
          <li class="views-row views-row-2 views-row-even">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.proginn.com/">程序员客栈</a></span>  </div></li>
          <li class="views-row views-row-3 views-row-odd">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://imweb.io/">imweb 前端社区</a></span>  </div></li>
          <li class="views-row views-row-4 views-row-even">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.w3cmark.com/">前端笔记</a></span>  </div></li>
          <li class="views-row views-row-5 views-row-odd">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.cn-sass.com">Sass中国</a></span>  </div></li>
          <li class="views-row views-row-6 views-row-even">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.imooc.com/">慕课网</a></span>  </div></li>
          <li class="views-row views-row-7 views-row-odd">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://drupal001.net/">Drupal大学</a></span>  </div></li>
          <li class="views-row views-row-8 views-row-even">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.drupalproject.org/">Drupal项目社区</a></span>  </div></li>
          <li class="views-row views-row-9 views-row-odd">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://www.58img.com">web前端资源网</a></span>  </div></li>
          <li class="views-row views-row-10 views-row-even views-row-last">  
  <div class="views-field views-field-title">        <span class="field-content"><a href="http://edu.cnzz.cn/">站长学院</a></span>  </div></li>
      </ul></div>    </div>
  
  
  
      
<div class="more-link">
  <a href="/friend">
    更多  </a>
</div>
  
  
  
</div>  </div>
</div>
<div id="block-block-42" class="block block-block">

    <h2>百度广告</h2>
  
  <div class="content">
    <script type="text/javascript">
    /*300*260 创建于 2014-10-14*/
    var cpro_id = "u1758328";
</script>
<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>

  </div>
</div>
  </div>
      </div>
    

  </div>
</div>

  <div id="footer-col" class="footer-col">
    <div class="container">
        <div class="region region-footer-col">
    <div id="block-block-39" class="block block-block">

    <h2>关于我们</h2>
  
  <div class="content">
    <a class="media-object" href="http://www.w3cplus.com">W3cplus</a>
<div class="media-body">
	<p>W3cplus是一个致力于推广国内前端行业的技术博客。它以探索为己任，不断活跃在行业技术最前沿，努力提供高质量前端技术博文；其文章范围广泛，主要以CSS3、HTML5、Sass、Mobile和各类DEMO为主。</p>
	<p>W3cplus具有一支强大的团队，提供长期的前端项目外包，Drupal建站，Drupal主题制作服务，以及提供企业广告展示与招聘发布，有需要的请联系：QQ:<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=81059347&amp;site=qq&amp;menu=yes" target="_blank">81059347</a>，E-mail:<a href="mailto:w3cplus@hotmail.com" target="_blank">w3cplus@hotmail.com</a></p>
</div>
  </div>
</div>
<div id="block-block-40" class="block block-block">

    <h2>关于站长</h2>
  
  <div class="content">
    <p><a class="media-object" href="http://www.w3cplus.com" target="_blank">大漠</a></p>
<div class="media-body">
	<p>常用昵称“大漠”，<a href="http://www.w3cplus.com" target="_blank">W3CPlus</a>，<a href="http://www.cn-sass.com" target="_blank">Sass中国</a>创始人，目前就职于淘宝。中国Drupal社区核心成员之一。对HTML5、CSS3和Sass等前端脚本语言有非常深入的认识和丰富的实践经验，尤其专注对CSS3、Sass和Mobile的研究，是国内最早研究和使用CSS3和Sass技术的一批人。CSS3、Sass和Drupal中国布道者。2014年出版《<a href="http://www.w3cplus.com/book-comment.html">图解CSS3：核心技术与案例实战</a>》。</p>
	<div class="social">
		<a class="github" href="https://github.com/airen" target="_blank" title="github">github</a> <a class="weibo" href="http://weibo.com/w3cplus" target="_blank" title="weibo">weibo</a> <a class="facebook" href="https://www.facebook.com/w3cplus" target="_blank" title="facebook">facebook</a> <a class="google" href="https://plus.google.com/+AirenLiao" target="_blank" title="google">google</a> <a class="twitter" href="https://twitter.com/w3cplus" target="_blank" title="twitter">twitter</a> <a class="linkedin" href="http://cn.linkedin.com/in/w3cplus" target="_blank" title="linkedin">linkedin</a></div>
</div>
  </div>
</div>
<div id="block-block-41" class="block block-block">

    <h2>我的作品</h2>
  
  <div class="content">
    <a class="media-object" href="http://www.w3cplus.com/book-comment.html" target="_blank">图解CSS3</a>
<div class="media-body">
	<p>本书是国内著名的Web前端专家历时2载的心血之作，根据最新的CSS3撰写，融入了作者在CSS领域多年的使用经验，旨在将本书打造成为CSS3领域最权威和实用的专业著作，供没有经验的读者系统学习，供有经验的读者参考备查。</p>
<p>本书理论知识系统全面，详细讲解了选择器、伸缩布局盒模型、渐变、过渡、动画等主题下涵盖的所有CSS3新特性。</p>
	<p><a href="http://www.w3cplus.com/project" target="_blank">其他作品</a></p>
</div>
  </div>
</div>
  </div>
    </div>
  </div> 

  <div id="footer" class="footer">
    <div class="container">
        <div class="region region-footer">
    <div id="block-block-12" class="block block-block">

    
  <div class="content">
    <p>湘ICP备13003850号-12，版权所有 © 2011-2014 <a href="http://www.w3cplus.com/page/26.html" target="_blank">W3CPLUS</a>，感谢<a href="http://www.drupal.org" target="_blank">Drupal</a>开源技术。感谢<a href="http://www.qiniu.com/" target="_blank">七牛云存储</a>提供静态资源空间。</p>
<script type="application/ld+json" async>
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "W3cplus",
  "url": "http://www.w3cplus.com",
  "image" : "http://tp4.sinaimg.cn/1167075935/180/22838101204/1",
  "sameAs" : [
    "https://twitter.com/w3cplus",
    "https://www.facebook.com/w3cplus",
    "https://cn.linkedin.com/in/w3cplus",
    "https://weibo.com/w3cplus/",
    "https://plus.google.com/+AirenLiao",
    "https://github.com/airen"
  ]
}
</script>  </div>
</div>
  </div>
    </div>
  </div> 

<div id="totop" style="position: fixed; bottom: 50px; right: 15px; cursor: pointer; z-index: 999999; display: block; opacity: 0;">
    <a title="返回顶部">返回顶部</a>
</div>

  <script type="text/javascript">
<!--//--><![CDATA[//><!--
var _hmt = _hmt || [];_hmt.push(["_setAccount", "177319b798978621f83845b12c86fa29"]);_hmt.push(["_trackPageview"]);(function() {var hm = document.createElement('script');hm.src = '//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29';hm.type = 'text/javascript';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})()
//--><!]]>
</script>
<script type="text/javascript" src="http://cdn2.w3cplus.com/cdn/farfuture/yiFMW5f0CFBI0R7AN9ELfn_e0tDmHzQd3hI28Ozqb-E/mtime:1446123736/sites/default/files/js/js_VU7P4CTgUZdF2SyFko5LLAg9ZK0OSVjXVaAFnTLgVt0.js"></script>
  
  
  
</body>
</html>
<!-- Page cached by Boost @ 2015-11-12 11:17:12, expires @ 2015-11-15 11:17:12, lifetime 3 天 -->