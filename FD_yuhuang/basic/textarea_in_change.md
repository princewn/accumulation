
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="keywords" content="python,js,javascript,开发,网络,软件,编程,互联网" />
  <meta name="description" content="veerkat的博客" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
	 <title>jQuery实现textarea高度自适应 - veerkat's blog</title>
	<link rel="shortcut icon" href="/static/img/LOGO_64.png" />
	<link rel="stylesheet" type="text/css" href="/static/css/base.css" media="screen, projection">
	<link rel="stylesheet" href="/static/css/pygments.css">
	<link rel="stylesheet" type="text/css" href="/static/css/pure-min.css" media="screen, projection">
	<link rel="stylesheet" type="text/css" href="/static/css/blogPost.css" media="screen, projection">
	<script type="text/javascript" src="/static/js/jquery-2.1.0.min.js"></script>
	<script type="text/javascript" src="/static/js/jquery.githubRepoWidget.min.js"></script>
	<script type="text/javascript" >
	window.onload = function(){
	document.getElementById("click_button").onclick=function(){
	var tag = this.getAttribute('id');
	tag = eval(tag);
    if (tag) {
        	document.getElementById("submenu").style.display = "block";
        	this.setAttribute('id', false);
    } else {
        	document.getElementById("submenu").style.display = "none";
        	this.setAttribute('id', true);
        };
    };
}
</script>
</head>
<body ontouchstart="" class="blog">
	<section class="pure-g-r">
	<div class="pure-u-11-24 content">
		<div class="dropdown">
		<section id="blog_avatar">
            <a id="click_button"><img src="/static/img/LOGO_64.png"></a>
        </section>
        <div id="submenu" style="display: none; ">
	  <ul class="root">
	  	<span class="arrow_in"></span>
	<span class="arrow_out"></span>
	<li style="margin-top: -6px;">
	<a href="/">Home</a>
	</li>
	<li >
	<a href="/blog/" >Blog</a>
	</li>
	<li>
	<a href="mailto:wei.zh210@gmail.com?subject=Hello, Zhang Wei">Email</a>
	</li>
	  </ul>
	</div>
	</div>
	
<section class="post">
	<article class="blogPost">
	<h1 class="title">jQuery实现textarea高度自适应</h1>
	<div class="byline"> <p>Oct 15, 2014</p></div>
	<p>最近在开发一个Web App, 需要用到可以随用户输入而自动适应高度的textarea,
这里实现了一种近乎完美的方法。
<a href="/static/html/adaptiveTextarea.html"><strong>演示页面</strong></a></p>
<p>该方法的基本思想是：绑定textarea的input事件，在检测到输入后，将textarea设置为一个基本高度，然后获取scrollHeight, 再将其高度设置为scrollHeight，这样textarea就能随着用户输入自适应高度，当然为了达到近乎完美的效果这里需要一些技巧。</p>
<div class="codeblock"><div class="title_bar title_bar_header"><span style="width: 20%;">javascript</span><span style="margin:0 auto;">adaptiveHeight</span><span style="width: 20%; text-align:right;"><a href=""></a></span></div><div class="block_body"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18</pre></div></td><td class="code"><div class="highlight"><pre><span class="kd">var</span> <span class="nx">adaptiveHeight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">baserows</span><span class="p">,</span> <span class="nx">maxrows</span><span class="p">)</span> <span class="p">{</span>
<span class="cm">/*</span>
<span class="cm">    a: textarea元素</span>
<span class="cm">    baserows: 基础行数</span>
<span class="cm">    maxrows: 最大行数</span>
<span class="cm">*/</span>
    <span class="cm">/*获取textarea的padding的上下高度*/</span>
    <span class="kd">var</span> <span class="nx">po</span> <span class="o">=</span>  <span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;padding-top&#39;</span><span class="p">))</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;padding-bottom&#39;</span><span class="p">));</span>
    <span class="kd">var</span> <span class="nx">baseLineHeight</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;line-height&#39;</span><span class="p">));</span>
    <span class="kd">var</span> <span class="nx">baseHeight</span> <span class="o">=</span> <span class="nx">baseLineHeight</span> <span class="o">*</span> <span class="nx">baserows</span><span class="p">;</span>
    <span class="nx">a</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">baseHeight</span><span class="p">);</span>
    <span class="kd">var</span> <span class="nx">scrollval</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">scrollHeight</span><span class="p">;</span>
    <span class="cm">/*检测是否达到了最大行数，达到了，则把高度设置为最大高度*/</span>
    <span class="k">if</span> <span class="p">(</span><span class="nx">scrollval</span> <span class="o">-</span> <span class="nx">po</span> <span class="o">&gt;=</span> <span class="nx">baseLineHeight</span> <span class="o">*</span> <span class="nx">maxrows</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">scrollval</span> <span class="o">=</span> <span class="nx">baseHeight</span> <span class="o">+</span> <span class="nx">baseLineHeight</span> <span class="o">*</span> <span class="p">(</span><span class="nx">maxrows</span><span class="o">-</span><span class="nx">baserows</span><span class="p">)</span> <span class="o">+</span> <span class="nx">po</span><span class="p">;</span>
    <span class="p">}</span>
    <span class="nx">a</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">scrollval</span> <span class="o">-</span> <span class="nx">po</span><span class="p">);</span>
<span class="p">};</span>
</pre></div>
</td></tr></table></div></div>
<p>height()方法获取的实际上是行高度，而scrollHeight获取的高度是行高度加上了padding的上下高度，所以在重新设置高度的时候为scrollHeight - po (textarea的padding的上下高度)， 这样才能保证高度变化一致。</p>
<div class="codeblock"><div class="title_bar title_bar_header"><span style="width: 20%;">css</span><span style="margin:0 auto;">textarea css</span><span style="width: 20%; text-align:right;"><a href=""></a></span></div><div class="block_body"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre>1
2
3
4
5
6
7
8</pre></div></td><td class="code"><div class="highlight"><pre><span class="nt">textarea</span><span class="p">{</span>
  <span class="k">display</span><span class="o">:</span> <span class="k">block</span><span class="p">;</span>
  <span class="k">height</span><span class="o">:</span> <span class="k">auto</span><span class="p">;</span>
  <span class="n">resize</span><span class="o">:</span> <span class="k">none</span><span class="p">;</span>
  <span class="k">font-size</span><span class="o">:</span> <span class="m">14px</span><span class="p">;</span>
  <span class="k">line-height</span><span class="o">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="k">padding</span><span class="o">:</span> <span class="m">1px</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</td></tr></table></div></div>
<p>这里需要把高度设置为auto，实际高度由该方法根据line-height和padding来设置。</p>
<p>最后把该方法绑定到input事件上</p>
<div class="codeblock"><div class="title_bar title_bar_header"><span style="width: 20%;">javascript</span><span style="margin:0 auto;">adaptiveTextarea</span><span style="width: 20%; text-align:right;"><a href=""></a></span></div><div class="block_body"><table class="highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11</pre></div></td><td class="code"><div class="highlight"><pre><span class="kd">var</span> <span class="nx">adaptiveTextarea</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">sel</span><span class="p">,</span> <span class="nx">baserows</span><span class="p">,</span> <span class="nx">maxrows</span><span class="p">,</span> <span class="nx">callback</span><span class="p">){</span>
    <span class="nx">sel</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;input propertychange&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">adaptiveHeight</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">baserows</span><span class="p">,</span> <span class="nx">maxrows</span><span class="p">);</span>
        <span class="k">if</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span>
    <span class="p">});</span>
    <span class="cm">/*初始化textarea高度*/</span>
    <span class="nx">adaptiveHeight</span><span class="p">(</span><span class="nx">sel</span><span class="p">,</span> <span class="nx">baserows</span><span class="p">,</span> <span class="nx">maxrows</span><span class="p">);</span>
<span class="p">};</span>

<span class="cm">/*使用 初始行数为1， 最大行数为5*/</span>
<span class="nx">adaptiveTextarea</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;textarea&#39;</span><span class="p">),</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span>
</pre></div>
</td></tr></table></div></div>
<p><a href="/static/html/adaptiveTextarea.html"><strong>演示页面</strong></a></p>
<p>~EOF~</p>
</article>
</section>

<div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'weiisme'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

		</div>
</section>
</body>
</html>