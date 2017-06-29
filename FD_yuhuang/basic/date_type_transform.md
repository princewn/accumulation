
#### 在看书的时候，有时候会遇到意料之外的结果。对于这部分的知识，感觉就像打吊瓶一样，冰冷的难以习惯的液体，可能慢慢的也像血液一样自然了。


	var a;
	console.log(a === undefined);
	NaN == NaN
	Number(null)
	Number(undefined)
	"\u03a3".length
	"hi you".length
	
	undefined = "hello";
	
	""           ==   "0"           // false
	Number("0")
	Number(" ")//没有转换成数字囧,和C语言的数据类型转化不一样。而是toSting，valueOf
	
	0            ==   ""            // true
	0            ==   "0"           // true
	false        ==   "false"       // false
	false        ==   "0"           // true


<h1> 数据类型转换 </h1>

<aside class="right"><p>来自<a href="/">《JavaScript 标准参考教程（alpha）》</a>，by 阮一峰</p></aside>

<div id="toc" class="panel callout radius">目录</div>


<p>JavaScript是一种动态类型语言，变量是没有类型的，可以随时赋予任意值。但是，数据本身和各种运算是有类型的，因此运算时变量需要转换类型。大多数情况下，这种数据类型转换是自动的，但是有时也需要手动强制转换。</p>

<h2 id="强制转换">强制转换</h2>

<p>强制转换主要指使用Number、String和Boolean三个构造函数，手动将各种类型的值，转换成数字、字符串或者布尔值。</p>

<h3 id="number函数：强制转换成数值">Number函数：强制转换成数值</h3>

<p>使用Number函数，可以将任意类型的值转化成数字。</p>

<p><strong>（1）原始类型值的转换规则</strong></p>

<ul>
<li><p><strong>数值</strong>：转换后还是原来的值。</p></li>
<li><p><strong>字符串</strong>：如果可以被解析为数值，则转换为相应的数值，否则得到NaN。空字符串转为0。</p></li>
<li><p><strong>布尔值</strong>：true转成1，false转成0。</p></li>
<li><p><strong>undefined</strong>：转成NaN。</p></li>
<li><p><strong>null</strong>：转成0。</p></li>
</ul>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Number</span><span class="p">(</span><span class="s2">&quot;324&quot;</span><span class="p">)</span> <span class="c1">// 324</span>

<span class="nb">Number</span><span class="p">(</span><span class="s2">&quot;324abc&quot;</span><span class="p">)</span> <span class="c1">// NaN</span>

<span class="nb">Number</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="c1">// 0</span>

<span class="nb">Number</span><span class="p">(</span><span class="kc">false</span><span class="p">)</span> <span class="c1">// 0</span>

<span class="nb">Number</span><span class="p">(</span><span class="kc">undefined</span><span class="p">)</span> <span class="c1">// NaN</span>

<span class="nb">Number</span><span class="p">(</span><span class="kc">null</span><span class="p">)</span> <span class="c1">// 0</span></code></pre></div>

<p>Number函数将字符串转为数值，要比parseInt函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN。</p>
<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">parseInt</span><span class="p">(</span><span class="s1">&#39;011&#39;</span><span class="p">)</span> <span class="c1">// 9</span>
<span class="nb">parseInt</span><span class="p">(</span><span class="s1">&#39;42 cats&#39;</span><span class="p">)</span> <span class="c1">// 42</span>
<span class="nb">parseInt</span><span class="p">(</span><span class="s1">&#39;0xcafebabe&#39;</span><span class="p">)</span> <span class="c1">// 3405691582</span>

<span class="nb">Number</span><span class="p">(</span><span class="s1">&#39;011&#39;</span><span class="p">)</span> <span class="c1">// 11</span>
<span class="nb">Number</span><span class="p">(</span><span class="s1">&#39;42 cats&#39;</span><span class="p">)</span> <span class="c1">// NaN</span>
<span class="nb">Number</span><span class="p">(</span><span class="s1">&#39;0xcafebabe&#39;</span><span class="p">)</span> <span class="c1">// 3405691582</span>
</code></pre></div>
<p>上面代码比较了Number函数和parseInt函数，区别主要在于parseInt逐个解析字符，而Number函数整体转换字符串的类型。另外，Number会忽略八进制的前导0，而parseInt不会。</p>

<p>Number函数会自动过滤一个字符串前导和后缀的空格。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Number</span><span class="p">(</span><span class="s1">&#39;\t\v\r12.34\n &#39;</span><span class="p">)</span></code></pre></div>

<p><strong>（2）对象的转换规则</strong></p>

<p>对象的转换规则比较复杂。</p>

<ol>
<li><p>先调用对象自身的valueOf方法，如果该方法返回原始类型的值（数值、字符串和布尔值），则直接对该值使用Number方法，不再进行后续步骤。</p></li>
<li><p>如果valueOf方法返回复合类型的值，再调用对象自身的toString方法，如果toString方法返回原始类型的值，则对该值使用Number方法，不再进行后续步骤。</p></li>
<li><p>如果toString方法返回的是复合类型的值，则报错。</p></li>
</ol>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Number</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">})</span>
<span class="c1">// NaN</span></code></pre></div>

<p>上面代码等同于</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="p">{</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}.</span><span class="nx">valueOf</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">){</span>
    <span class="nb">Number</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}.</span><span class="nx">toString</span><span class="p">());</span>
<span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
    <span class="nb">Number</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}.</span><span class="nx">valueOf</span><span class="p">());</span>
<span class="p">}</span></code></pre></div>

<p>上面代码的valueOf方法返回对象本身（{a:1}），所以对toString方法的返回值“[object Object]”使用Number方法，得到NaN。</p>

<p>如果toString方法返回的不是原始类型的值，结果就会报错。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{</span>
    <span class="nx">valueOf</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;valueOf&quot;</span><span class="p">);</span>
            <span class="k">return</span> <span class="p">{};</span>
    <span class="p">},</span>
    <span class="nx">toString</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;toString&quot;</span><span class="p">);</span>
            <span class="k">return</span> <span class="p">{};</span> 
    <span class="p">}</span>
<span class="p">};</span>

<span class="nb">Number</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span>
<span class="c1">// TypeError: Cannot convert object to primitive value</span></code></pre></div>

<p>上面代码的valueOf和toString方法，返回的都是对象，所以转成数值时会报错。</p>

<p>从上面的例子可以看出，valueOf和toString方法，都是可以自定义的。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Number</span><span class="p">({</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span> <span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;}})</span>
<span class="c1">// 2</span>

<span class="nb">Number</span><span class="p">({</span><span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">3</span><span class="p">;}})</span>
<span class="c1">// 3</span>

<span class="nb">Number</span><span class="p">({</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span> <span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;},</span><span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">3</span><span class="p">;}})</span>
<span class="c1">// 2</span></code></pre></div>

<p>上面代码对三个对象使用Number方法。第一个对象返回valueOf方法的值，第二个对象返回toString方法的值，第三个对象表示valueOf方法先于toString方法执行。</p>

<h3 id="string函数：强制转换成字符串">String函数：强制转换成字符串</h3>

<p>使用String函数，可以将任意类型的值转化成字符串。规则如下：</p>

<p><strong>（1）原始类型值的转换规则</strong></p>

<ul>
<li><p><strong>数值</strong>：转为相应的字符串。</p></li>
<li><p><strong>字符串</strong>：转换后还是原来的值。</p></li>
<li><p><strong>布尔值</strong>：true转为“true”，false转为“false”。</p></li>
<li><p><strong>undefined</strong>：转为“undefined”。</p></li>
<li><p><strong>null</strong>：转为“null”。</p></li>
</ul>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">String</span><span class="p">(</span><span class="mi">123</span><span class="p">)</span> <span class="c1">// &quot;123&quot;</span>

<span class="nb">String</span><span class="p">(</span><span class="s2">&quot;abc&quot;</span><span class="p">)</span> <span class="c1">// &quot;abc&quot;</span>

<span class="nb">String</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="c1">// &quot;true&quot;</span>

<span class="nb">String</span><span class="p">(</span><span class="kc">undefined</span><span class="p">)</span> <span class="c1">// &quot;undefined&quot;</span>

<span class="nb">String</span><span class="p">(</span><span class="kc">null</span><span class="p">)</span> <span class="c1">// &quot;null&quot;</span></code></pre></div>

<p><strong>（2）对象的转换规则</strong></p>

<p>如果要将对象转为字符串，则是采用以下步骤。</p>

<ol>
<li><p>先调用toString方法，如果toString方法返回的是原始类型的值，则对该值使用String方法，不再进行以下步骤。</p></li>
<li><p>如果toString方法返回的是复合类型的值，再调用valueOf方法，如果valueOf方法返回的是原始类型的值，则对该值使用String方法，不再进行以下步骤。</p></li>
<li><p>如果valueOf方法返回的是复合类型的值，则报错。</p></li>
</ol>

<p>String方法的这种过程正好与Number方法相反。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">String</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">})</span>
<span class="c1">// &quot;[object Object]&quot;</span></code></pre></div>

<p>上面代码相当于下面这样。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">String</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}.</span><span class="nx">toString</span><span class="p">())</span>
<span class="c1">// &quot;[object Object]&quot;</span></code></pre></div>

<p>如果toString方法和valueOf方法，返回的都不是原始类型的值，则String方法报错。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{</span>
    <span class="nx">valueOf</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;valueOf&quot;</span><span class="p">);</span>
            <span class="k">return</span> <span class="p">{};</span> 
    <span class="p">},</span>
    <span class="nx">toString</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
            <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;toString&quot;</span><span class="p">);</span>
            <span class="k">return</span> <span class="p">{};</span> 
    <span class="p">}</span>
<span class="p">};</span>

<span class="nb">String</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span>
<span class="c1">// TypeError: Cannot convert object to primitive value</span></code></pre></div>

<p>下面是一个自定义toString方法的例子。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">String</span><span class="p">({</span><span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">3</span><span class="p">;}})</span>
<span class="c1">// &quot;3&quot;</span>

<span class="nb">String</span><span class="p">({</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span> <span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;}})</span>
<span class="c1">// &quot;[object Object]&quot;</span>

<span class="nb">String</span><span class="p">({</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span> <span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;},</span><span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">3</span><span class="p">;}})</span>
<span class="c1">// &quot;3&quot;</span></code></pre></div>

<p>上面代码对三个对象使用String方法。第一个对象返回toString方法的值（数值3），然后对其使用String方法，得到字符串“3”；第二个对象返回的还是toString方法的值（&quot;[object Object]&quot;），这次直接就是字符串；第三个对象表示toString方法先于valueOf方法执行。</p>

<h3 id="boolean函数：强制转换成布尔值">Boolean函数：强制转换成布尔值</h3>

<p>使用Boolean函数，可以将任意类型的变量转为布尔值。</p>

<p><strong>（1）原始类型值的转换方法</strong></p>

<p>以下六个值的转化结果为false，其他的值全部为true。</p>

<ul>
<li>undefined</li>
<li>null</li>
<li>-0</li>
<li>+0</li>
<li>NaN</li>
<li>&#39;&#39;（空字符串）</li>
</ul>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Boolean</span><span class="p">(</span><span class="kc">undefined</span><span class="p">)</span> <span class="c1">// false</span>

<span class="nb">Boolean</span><span class="p">(</span><span class="kc">null</span><span class="p">)</span> <span class="c1">// false</span>

<span class="nb">Boolean</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="c1">// false</span>

<span class="nb">Boolean</span><span class="p">(</span><span class="kc">NaN</span><span class="p">)</span> <span class="c1">// false</span>

<span class="nb">Boolean</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="c1">// false</span></code></pre></div>

<p><strong>（2）对象的转换规则</strong></p>

<p>所有对象的布尔值都是true，甚至连false对应的布尔对象也是true。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Boolean</span><span class="p">(</span><span class="k">new</span> <span class="nb">Boolean</span><span class="p">(</span><span class="kc">false</span><span class="p">))</span>
<span class="c1">// true</span></code></pre></div>

<p>请注意，空对象{}和空数组[]也会被转成true。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">Boolean</span><span class="p">([])</span> <span class="c1">// true</span>

<span class="nb">Boolean</span><span class="p">({})</span> <span class="c1">// true</span></code></pre></div>

<h2 id="自动转换">自动转换</h2>

<p>当遇到以下几种情况，JavaScript会自动转换数据类型：</p>

<ul>
<li><p>不同类型的数据进行互相运算；</p></li>
<li><p>对非布尔值类型的数据求布尔值;</p></li>
<li><p>对非数值类型的数据使用一元运算符（即“+”和“-”）。</p></li>
</ul>

<h3 id="自动转换为布尔值">自动转换为布尔值</h3>

<p>当JavaScript遇到预期为布尔值的地方（比如if语句的条件部分），就会将非布尔值的参数自动转换为布尔值。它的转换规则与上面的“强制转换成布尔值”的规则相同，也就是说，在预期为布尔值的地方，系统内部会自动调用Boolean方法。</p>

<p>因此除了以下六个值，其他都是自动转为true：</p>

<ul>
<li>undefined</li>
<li>null</li>
<li>-0</li>
<li>+0</li>
<li>NaN</li>
<li>&#39;&#39;（空字符串）</li>
</ul>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="kc">NaN</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="s1">&#39;&#39;</span><span class="p">){</span>
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;true&#39;</span><span class="p">);</span>
<span class="p">}</span>
<span class="c1">// true</span></code></pre></div>

<h3 id="自动转换为字符串">自动转换为字符串</h3>

<p>当JavaScript遇到预期为字符串的地方，就会将非字符串的数据自动转为字符串，转换规则与“强制转换为字符串”相同。</p>

<p>字符串的自动转换，主要发生在加法运算时。当一个值为字符串，另一个值为非字符串，则后者转为字符串。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="mi">1</span> <span class="c1">// &#39;51&#39;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="kc">true</span> <span class="c1">// &quot;5true&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="kc">false</span> <span class="c1">// &quot;5false&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="p">{}</span> <span class="c1">// &quot;5[object Object]&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="p">[]</span> <span class="c1">// &quot;5&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="kd">function</span> <span class="p">(){}</span> <span class="c1">// &quot;5function (){}&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="kc">undefined</span> <span class="c1">// &quot;5undefined&quot;</span>
<span class="s1">&#39;5&#39;</span> <span class="o">+</span> <span class="kc">null</span> <span class="c1">// &quot;5null&quot;</span></code></pre></div>

<h3 id="自动转换为数值">自动转换为数值</h3>

<p>当JavaScript遇到预期为数值的地方，就会将参数值自动转换为数值，转换规则与“强制转换为数值”相同。</p>

<p>除了加法运算符有可能把运算子转为字符串，其他运算符都会把两侧的运算子自动转成数值。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="s1">&#39;5&#39;</span> <span class="o">-</span> <span class="s1">&#39;2&#39;</span> <span class="c1">// 3</span>
<span class="s1">&#39;5&#39;</span> <span class="o">*</span> <span class="s1">&#39;2&#39;</span> <span class="c1">// 10</span>
<span class="kc">true</span> <span class="o">-</span> <span class="mi">1</span>  <span class="c1">// 0</span>
<span class="kc">false</span> <span class="o">-</span> <span class="mi">1</span> <span class="c1">// -1</span>
<span class="s1">&#39;1&#39;</span> <span class="o">-</span> <span class="mi">1</span>   <span class="c1">// 0</span>
<span class="s1">&#39;5&#39;</span><span class="o">*</span><span class="p">[]</span>    <span class="c1">// 0</span>
<span class="kc">false</span><span class="o">/</span><span class="s1">&#39;5&#39;</span> <span class="c1">// 0</span>
<span class="s1">&#39;abc&#39;</span><span class="o">-</span><span class="mi">1</span>   <span class="c1">// NaN</span></code></pre></div>

<p>上面都是二元算术运算符的例子，JavaScript的两个一元算术运算符——正号和负号——也会把运算子自动转为数值。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="o">+</span><span class="s1">&#39;abc&#39;</span> <span class="c1">// NaN</span>
<span class="o">-</span><span class="s1">&#39;abc&#39;</span> <span class="c1">// NaN</span>
<span class="o">+</span><span class="kc">true</span> <span class="c1">// 1</span>
<span class="o">-</span><span class="kc">false</span> <span class="c1">// 0</span></code></pre></div>

<h3 id="小结">小结</h3>

<p>由于自动转换有很大的不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用Boolean、Number和String方法进行显式转换。</p>

<h2 id="加法运算符的类型转化">加法运算符的类型转化</h2>

<p>加法运算符（+）需要特别讨论，因为它可以完成两种运算（加法和字符连接），所以不仅涉及到数据类型的转换，还涉及到确定运算类型。</p>

<h3 id="三种情况">三种情况</h3>

<p>加法运算符的类型转换，可以分成三种情况讨论。</p>

<p><strong>（1）运算子之中存在字符串</strong></p>

<p>两个运算子之中，只要有一个是字符串，则另一个不管是什么类型，都会被自动转为字符串，然后执行字符串连接运算。前面的《自动转换为字符串》一节，已经举了很多例子。</p>

<p><strong>（2）两个运算子都为数值或布尔值</strong></p>

<p>这种情况下，执行加法运算，布尔值转为数值（true为1，false为0）。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="kc">true</span> <span class="o">+</span> <span class="mi">5</span> <span class="c1">// 6</span>

<span class="kc">true</span> <span class="o">+</span> <span class="kc">true</span> <span class="c1">// 2</span></code></pre></div>

<p><strong>（3）运算子之中存在对象</strong></p>

<p>运算子之中存在对象（或者准确地说，存在非原始类型的值），则先调用该对象的valueOf方法。如果返回结果为原始类型的值，则运用上面两条规则；否则继续调用该对象的toString方法，对其返回值运用上面两条规则。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">]</span>
<span class="c1">// &quot;11,2&quot;</span></code></pre></div>

<p>上面代码的运行顺序是，先调用[1,2].valueOf()，结果还是数组[1,2]本身，则继续调用[1,2].toString()，结果字符串“1,2”，所以最终结果为字符串“11,2”。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">{</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}</span>
<span class="c1">// &quot;1[object Object]&quot;</span></code></pre></div>

<p>对象{a:1}的valueOf方法，返回的就是这个对象的本身，因此接着对它调用toString方法。({a:1}).toString()默认返回字符串&quot;[object Object]&quot;，所以最终结果就是字符串“1[object Object]”</p>

<p>有趣的是，如果更换上面代码的运算次序，就会得到不同的值。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">{</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">}</span> <span class="o">+</span> <span class="mi">1</span>
<span class="c1">// 1</span></code></pre></div>

<p>原来此时，JavaScript引擎不将{a:1}视为对象，而是视为一个代码块，这个代码块没有返回值，所以被忽略。因此上面的代码，实际上等同于 {a:1};+1 ，所以最终结果就是1。为了避免这种情况，需要对{a:1}加上括号。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">({</span><span class="nx">a</span><span class="o">:</span><span class="mi">1</span><span class="p">})</span><span class="o">+</span><span class="mi">1</span>
<span class="s2">&quot;[object Object]1&quot;</span></code></pre></div>

<p>将{a:1}放置在括号之中，由于JavaScript引擎预期括号之中是一个值，所以不把它当作代码块处理，而是当作对象处理，所以最终结果为“[object Object]1”。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">{</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;}}</span>
<span class="c1">// 3</span></code></pre></div>

<p>上面代码的valueOf方法返回数值2，所以最终结果为3。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">{</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="p">{};}}</span>
<span class="c1">// &quot;1[object Object]&quot;</span></code></pre></div>

<p>上面代码的valueOf方法返回一个空对象，则继续调用toString方法，所以最终结果是“1[object Object]”。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">{</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="p">{};},</span> <span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="mi">2</span><span class="p">;}}</span>
<span class="c1">// 3</span></code></pre></div>

<p>上面代码的toString方法返回数值2（不是字符串），则最终结果就是数值3。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="mi">1</span> <span class="o">+</span> <span class="p">{</span><span class="nx">valueOf</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="p">{};},</span> <span class="nx">toString</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="p">{};}}</span>
<span class="c1">// TypeError: Cannot convert object to primitive value</span></code></pre></div>

<p>上面代码的toString方法返回一个空对象，JavaScript就会报错，表示无法获得原始类型的值。</p>

<h3 id="四个特殊表达式">四个特殊表达式</h3>

<p>有了上面这些例子，我们再进一步来看四个特殊表达式。</p>

<p><strong>（1）空数组 + 空数组</strong></p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">[]</span> <span class="o">+</span> <span class="p">[]</span>
<span class="c1">// &quot;&quot;</span></code></pre></div>

<p>首先，对空数组调用valueOf方法，返回的是数组本身；因此再对空数组调用toString方法，生成空字符串；所以，最终结果就是空字符串。</p>

<p><strong>（2）空数组 + 空对象</strong></p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">[]</span> <span class="o">+</span> <span class="p">{}</span>
<span class="c1">// &quot;[object Object]&quot;</span></code></pre></div>

<p>这等同于空字符串与字符串“[object Object]”相加。因此，结果就是“[object Object]”。</p>

<p><strong>（3）空对象 + 空数组</strong></p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">{}</span> <span class="o">+</span> <span class="p">[]</span>
<span class="c1">// 0</span></code></pre></div>

<p>JavaScript引擎将空对象视为一个空的代码块，加以忽略。因此，整个表达式就变成“+ []”，等于对空数组求正值，因此结果就是0。转化过程如下：</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="o">+</span> <span class="p">[]</span>
<span class="c1">// Number([])</span>
<span class="c1">// Number([].toString())</span>
<span class="c1">// Number(&quot;&quot;)</span>
<span class="c1">// 0</span></code></pre></div>

<p>如果JavaScript不把前面的空对象视为代码块，则结果为字符串“[object Object]”。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">({})</span> <span class="o">+</span> <span class="p">[]</span>
<span class="c1">// &quot;[object Object]&quot;</span></code></pre></div>

<p><strong>（4）空对象 + 空对象</strong></p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">{}</span> <span class="o">+</span> <span class="p">{}</span>
<span class="c1">// NaN</span></code></pre></div>

<p>JavaScript同样将第一个空对象视为一个空代码块，整个表达式就变成“+ {}”。这时，后一个空对象的ValueOf方法得到本身，再调用toSting方法，得到字符串“[object Object]”，然后再将这个字符串转成数值，得到NaN。所以，最后的结果就是NaN。转化过程如下：</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="o">+</span> <span class="p">{}</span>
<span class="c1">// Number({})</span>
<span class="c1">// Number({}.toString())</span>
<span class="c1">// Number(&quot;[object Object]&quot;)</span></code></pre></div>

<p>如果，第一个空对象不被JavaScript视为空代码块，就会得到“[object Object][object Object]”的结果。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">({})</span> <span class="o">+</span> <span class="p">{}</span>
<span class="c1">// &quot;[object Object][object Object]&quot;</span>

<span class="p">({}</span> <span class="o">+</span> <span class="p">{})</span>
<span class="c1">// &quot;[object Object][object Object]&quot;  </span>

<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">({}</span> <span class="o">+</span> <span class="p">{})</span>
<span class="c1">// &quot;[object Object][object Object]&quot;</span>

<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="p">{}</span> <span class="o">+</span> <span class="p">{};</span>
<span class="nx">a</span>
<span class="c1">// &quot;[object Object][object Object]&quot;</span></code></pre></div>

<p>需要指出的是，对于第三和第四种情况，Node.js的运行结果不同于浏览器环境。</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="p">{}</span> <span class="o">+</span> <span class="p">{}</span>
<span class="c1">// &quot;[object Object][object Object]&quot;</span>

<span class="p">{}</span> <span class="o">+</span> <span class="p">[]</span>
<span class="c1">// &quot;[object Object]&quot;</span></code></pre></div>

<p>可以看到，Node.js没有把第一个空对象视为代码块。原因是Node.js的命令行环境，内部执行机制大概是下面的样子：</p>

<div class="highlight"><pre><code class="language-javascript" data-lang="javascript"><span class="nb">eval</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="s2">&quot;(function(){return {} + {}}).call(this)&quot;</span><span class="p">)</span></code></pre></div>

<p>Node.js把命令行输入都放在eval中执行，所以不会把起首的大括号理解为空代码块加以忽略。</p>

<h2 id="参考链接">参考链接</h2>

<ul>
<li>Axel Rauschmayer, <a href="http://www.2ality.com/2012/01/object-plus-object.html">What is {} + {} in JavaScript?</a></li>
<li>Axel Rauschmayer, <a href="http://www.2ality.com/2013/04/quirk-implicit-conversion.html">JavaScript quirk 1: implicit conversion of values</a></li>
<li>Benjie Gillam, <a href="http://www.benjiegillam.com/2013/06/quantum-javascript/">Quantum JavaScript?</a></li>
</ul>


</article>
