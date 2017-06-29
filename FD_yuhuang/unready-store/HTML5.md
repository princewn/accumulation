### 在客户端存储数据

<p>HTML5 提供了两种在客户端存储数据的新方法：</p>

<ul>
<li>localStorage - 没有时间限制的数据存储</li>
<li>sessionStorage - 针对一个 session 的数据存储</li>
</ul>

<p>之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。</p>

<p>在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。</p>

<p>对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。</p>

<p>HTML5 使用 JavaScript 来存储和访问数据。</p>

</div>


<div>

### manifest
<p>每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。</p>

<p>manifest 文件的建议的文件扩展名是：&quot;.appcache&quot;。</p>

<p>请注意，manifest 文件需要配置<em>正确的 MIME-type</em>，即 &quot;text/cache-manifest&quot;。必须在 web 服务器上进行配置。</p>
</div>


<div>
<h2>Manifest 文件</h2>

<p>manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。</p>

<p>manifest 文件可分为三个部分：</p>

<ul>
<li><em>CACHE MANIFEST</em> - 在此标题下列出的文件将在首次下载后进行缓存</li>
<li><em>NETWORK</em> - 在此标题下列出的文件需要与服务器的连接，且不会被缓存</li>
<li><em>FALLBACK</em> - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）</li>
</ul>### canvas元素的 拖拽