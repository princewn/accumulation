<h1>&lt; meta &gt; 元素</h1>

<h3>概要</h3>

<blockquote>
  <p>标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。    —— <a rel="nofollow" href="http://www.w3school.com.cn">W3School</a></p>
</blockquote>

<p><strong>必要属性</strong></p>

<table>
<thead><tr>
<th>属性</th>
  <th>值</th>
  <th>描述</th>
</tr></thead>
<tbody><tr>
<td>content</td>
  <td>some text</td>
  <td>定义与http-equiv或name属性相关的元信息</td>
</tr></tbody>
</table>
<p><strong>可选属性</strong></p>

<table>
<thead><tr>
<th>属性</th>
  <th>值</th>
  <th>描述</th>
</tr></thead>
<tbody>
<tr>
<td>http-equiv</td>
  <td>content-type / expire / refresh / set-cookie</td>
  <td>把content属性关联到HTTP头部。</td>
</tr>
<tr>
<td>name</td>
  <td>author / description / keywords / generator / revised / others</td>
  <td>把 content 属性关联到一个名称。</td>
</tr>
<tr>
<td>content</td>
  <td>some text</td>
  <td>定义用于翻译 content 属性值的格式。</td>
</tr>
</tbody>
</table>
<h3>SEO优化</h3>

<p><a rel="nofollow" href="http://msdn.microsoft.com/zh-cn/library/ff724016">参考文档</a></p>

<ul>
<li>
<strong>页面关键词</strong>，每个网页应具有描述该网页内容的一组唯一的关键字。<br>
使用人们可能会搜索，并准确描述网页上所提供信息的描述性和代表性关键字及短语。标记内容太短，则搜索引擎可能不会认为这些内容相关。另外标记不应超过 874 个字符。</li>
</ul>
<pre><code>&lt;meta name="keywords" content="your tags" /&gt;
</code></pre>

<ul>
<li>
<strong>页面描述</strong>，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。</li>
</ul>
<pre><code>&lt;meta name="description" content="150 words" /&gt;
</code></pre>

<ul>
<li>
<strong>搜索引擎索引方式</strong>，robotterms是一组使用逗号(,)分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。确保正确使用nofollow和noindex属性值。</li>
</ul>
<pre><code>&lt;meta name="robots" content="index,follow" /&gt;
&lt;!--
    all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询；
    noindex：文件将不被检索；
    nofollow：页面上的链接不可以被查询。
 --&gt;
</code></pre>

<ul>
<li>
<strong>页面重定向和刷新</strong>：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。</li>
</ul>
<pre><code>&lt;meta http-equiv="refresh" content="0;url=" /&gt;
</code></pre>

<ul>
<li><strong>其他</strong></li>
</ul>
<pre><code>&lt;meta name="author" content="author name" /&gt; &lt;!-- 定义网页作者 --&gt;
&lt;meta name="google" content="index,follow" /&gt;
&lt;meta name="googlebot" content="index,follow" /&gt;
&lt;meta name="verify" content="index,follow" /&gt;
</code></pre>

<h3>移动设备</h3>

<ul>
<li>
<strong>viewport</strong>：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放。<br>
大部分4.7-5寸设备的viewport宽设为360px；5.5寸设备设为400px；iphone6设为375px；ipone6 plus设为414px。</li>
</ul>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/&gt;
&lt;!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  --&gt;
</code></pre>

<ol>
<li>width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）</li>
<li>height：高度（数值 / device-height）（范围从223 到10,000）</li>
<li>initial-scale：初始的缩放比例 （范围从&gt;0 到10）</li>
<li>minimum-scale：允许用户缩放到的最小比例</li>
<li>maximum-scale：允许用户缩放到的最大比例</li>
<li>user-scalable：用户是否可以手动缩 (no,yes) </li>
<li>minimal-ui：可以在页面加载时最小化上下状态栏。（已弃用） </li>
</ol>
<p>注意，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，则用户将不能放大/缩小网页来看到全部的内容。</p>

<ul>
<li>
<strong>WebApp全屏模式</strong>：伪装app，离线应用。</li>
</ul>
<pre><code>&lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt; &lt;!-- 启用 WebApp 全屏模式 --&gt;
</code></pre>

<ul>
<li>
<strong>隐藏状态栏/设置状态栏颜色</strong>：只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent 。</li>
</ul>
<pre><code>&lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /&gt;
</code></pre>

<ul>
<li><strong>添加到主屏后的标题</strong></li>
</ul>
<pre><code>&lt;meta name="apple-mobile-web-app-title" content="标题"&gt;
</code></pre>

<p><img src="/img/bVkgzS" alt="图片描述"><img src="/img/bVkgzU" alt="图片描述"><img src="/img/bVkgzV" alt="图片描述"></p>

<ul>
<li><strong>忽略数字自动识别为电话号码</strong></li>
</ul>
<pre><code>&lt;meta content="telephone=no" name="format-detection" /&gt; 
</code></pre>

<ul>
<li><strong>忽略识别邮箱</strong></li>
</ul>
<pre><code>&lt;meta content="email=no" name="format-detection" /&gt;
</code></pre>

<ul>
<li>
<strong>添加智能 App 广告条 Smart App Banner</strong>：告诉浏览器这个网站对应的app，并在页面上显示下载banner(如下图)。<a rel="nofollow" href="https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html">参考文档</a>
</li>
</ul>
<pre><code>&lt;meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"&gt; 
</code></pre>

<p><img src="/img/bVkgzR" alt="![Alt text](./IMG_3701.jpg)"></p>

<ul>
<li>
<strong>其他</strong> <a rel="nofollow" href="http://fex.baidu.com/blog/2014/10/html-head-tags/?qq-pf-to=pcqq.c2c">参考文档</a>
</li>
</ul>
<pre><code>&lt;!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 --&gt;
&lt;meta name="HandheldFriendly" content="true"&gt;
&lt;!-- 微软的老式浏览器 --&gt;
&lt;meta name="MobileOptimized" content="320"&gt;
&lt;!-- uc强制竖屏 --&gt;
&lt;meta name="screen-orientation" content="portrait"&gt;
&lt;!-- QQ强制竖屏 --&gt;
&lt;meta name="x5-orientation" content="portrait"&gt;
&lt;!-- UC强制全屏 --&gt;
&lt;meta name="full-screen" content="yes"&gt;
&lt;!-- QQ强制全屏 --&gt;
&lt;meta name="x5-fullscreen" content="true"&gt;
&lt;!-- UC应用模式 --&gt;
&lt;meta name="browsermode" content="application"&gt;
&lt;!-- QQ应用模式 --&gt;
&lt;meta name="x5-page-mode" content="app"&gt;
&lt;!-- windows phone 点击无高光 --&gt;
&lt;meta name="msapplication-tap-highlight" content="no"&gt;
</code></pre>

<h3>网页相关</h3>

<ul>
<li><strong>申明编码</strong></li>
</ul>
<pre><code>&lt;meta charset='utf-8' /&gt;
</code></pre>

<ul>
<li><strong>优先使用 IE 最新版本和 Chrome</strong></li>
</ul>
<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;
&lt;!-- 关于X-UA-Compatible --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=6" &gt;&lt;!-- 使用IE6 --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=7" &gt;&lt;!-- 使用IE7 --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=8" &gt;&lt;!-- 使用IE8 --&gt;
</code></pre>

<ul>
<li>
<strong>浏览器内核控制</strong>：国内浏览器很多都是双内核（webkit和Trident），webkit内核高速浏览，IE内核兼容网页和旧版网站。而添加meta标签的网站可以控制浏览器选择何种内核渲染。<a rel="nofollow" href="http://se.360.cn/v6/help/meta.html">参考文档</a>
</li>
</ul>
<pre><code> &lt;meta name="renderer" content="webkit|ie-comp|ie-stand"&gt;
</code></pre>

<p>国内双核浏览器默认内核模式如下：<br>
1.  搜狗高速浏览器、QQ浏览器：IE内核（兼容模式）<br>
2. 360极速浏览器、遨游浏览器：Webkit内核（极速模式）</p>

<ul>
<li>
<strong>禁止浏览器从本地计算机的缓存中访问页面内容</strong>：这样设定，访问者将无法脱机浏览。</li>
</ul>
<pre><code>&lt;meta http-equiv="Pragma" content="no-cache"&gt;
</code></pre>

<ul>
<li><strong>Windows 8</strong></li>
</ul>
<pre><code>&lt;meta name="msapplication-TileColor" content="#000"/&gt; &lt;!-- Windows 8 磁贴颜色 --&gt;
&lt;meta name="msapplication-TileImage" content="icon.png"/&gt; &lt;!-- Windows 8 磁贴图标 --&gt;
</code></pre>

<ul>
<li>
<strong>站点适配</strong>：主要用于PC-手机页的对应关系。</li>
</ul>
<pre><code>&lt;meta name="mobile-agent"content="format=[wml|xhtml|html5]; url=url"&gt;
&lt;!--
[wml|xhtml|html5]根据手机页的协议语言，选择其中一种；
url="url" 后者代表当前PC页所对应的手机页URL，两者必须是一一对应关系。
 --&gt;
</code></pre>

<ul>
<li>
<strong>转码申明</strong>：用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta</li>
</ul>
<pre><code>&lt;meta http-equiv="Cache-Control" content="no-siteapp" /&gt;
</code></pre>

<hr>
<h4>其他参考文档</h4>

<p><a rel="nofollow" href="http://code.lancepollard.com/complete-list-of-html-meta-tags/">COMPLETE LIST OF HTML META TAGS</a><br><a rel="nofollow" href="http://www.w3.org/TR/html5/document-metadata.html#the-meta-element">W3C META TAGS</a><br><a rel="nofollow" href="http://www.html-5.com/metatags/">METATAGES in HTML5</a><br><a rel="nofollow" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta">MDN META TAGS</a></p>

                                