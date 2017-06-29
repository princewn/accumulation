#移动端开发基础
## 背景
#### 基于手机Web的开发，主要是基于Android和IOS两种操作系统上的web开发。
- android的厂商碎片化比较严重
- android的版本碎片化
- ios上html5的规范实现的较好。
## 环境搭建
方法 | 实现 |
------------ | ------------- | 
代理 |charles:抓包，淘宝域  | 
反向代理 |   | 
Chrome DevTool |charles:抓包，淘宝域  |
原生：Xcode环境模拟 |   | 

## 目录
1. Chrome DevTool
2. Layout VS vitual
3. meta的viewport
4. px2rem 
5. 事件
6. 常见问题场景

## 正文
[点，，像素，物理像素，drp,ppt](http://www.aliued.com/?p=2549)
### 1.Chrome DevTool
将移动端代理设为localhost:电脑代理端口，并开启 chrome inspect，打开端口映射(port forwarding)，这与 adb 的映射正好反向，是将客户端的本地端口映射到 PC，这时可以使用 PC 的系统代理（你也可以手动输入IP）
<img src="https://img.alicdn.com/tps/TB1jnQzMpXXXXX7XFXXXXXXXXXX-1251-718.png" />

> Chrome 版本必须高于 32
> 测试机 Android 系统要高于 4.0
### 2.物理像素，CSS像素，dppx,dpr
[参见]("https://www.zhihu.com/question/35221839")
### 2. Layout viewport VS vitual viewport
[双城记]("http://www.atatech.org/articles/9358")


- 即布局视口,把layout viewport想像成为一张不会变更大小或者形状的大图。现在想像你有一个小一些的框架
- layout viewport有多宽？每个浏览器都不一样。Safari iPhone为980px，Opera为850px，Android WebKit为800px，最后IE为974px。
- 对于visual viewport，它是通过window.innerWidth/Height来进行度量的
[之间的关系以及转化]("http://blog.cnbang.net/tech/1572/")
### 3. meta的viewport
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>
[更多配置]("https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html")


### 4. px2rem 
	html{
  		font-size: 20px;
	}
	document.documentElement.style.fontSize = ((window.innerWidth) / 375 * 20) + "px";
	.pxtorem(@property, @px, @divide, @dpr){
   		@{property}: @px / (@divide * @dpr) * 1rem;
	}
	.pxtorem(width,80rem,20,2);

### 5. 事件
手势事件
touchstart //当手指接触屏幕时触发
touchmove //当已经接触屏幕的手指开始移动后触发
touchend //当手指离开屏幕时触发
touchcancel
触摸事件
gesturestart //当两个手指接触屏幕时触发
gesturechange //当两个手指接触屏幕后开始移动时触发
gestureend
屏幕旋转事件
onorientationchange
检测触摸屏幕的手指何时改变方向
orientationchange

## 6高清方案
[这里](“http://www.atatech.org/articles/36642#0”)
## 7. 常见问题场景
1.click300ms->点击穿透
2. 键盘呼出
3.Input 
4. Fixed

### 键盘的布局 
由于手机界面非常小，因此键盘会占住手机屏幕的一大部分，对于键盘对html的页面布局影响，如果从来没有做过的人，也许不会注意到，android和ios的处理方式，android中各个厂商处理的方式又有所不同。ios对于从下方推出键盘的时候，如果输入控件在页面推出之后，在键盘的高度的上方的话，则键盘是以一个浮层的方式弹出，并且将那个触发的控件推到键盘的上方。如果那个控件在页面底部，如果推出的键盘会覆盖该控件，系统会将整个页面向上推，直到将那个控件推到键盘上方为止。而android的实现的不同，有部分的android的实现和ios一样，有些android的机型的实现却不同，如果发现触发的input控件比键盘的高度底的时候，会自动将整个document的高度增加，增加到这个控件的高度超过键盘的高度为止。由于实现的不同，会造成以下两个问题，

- input竟可能不要嵌入过于复杂的层次中，加上比较复杂的css的位置属性，以免造成计算错误。
- toast的提示，toast会出现在手机靠底部的位置，通常使用的是fixed的属性，如果按照ios的方式，将整个文档往上推，则不会出现问题


来源于 [Chrome DevTools Overview](https://developer.chrome.com/devtools "Chrome DevTools Overview")

- 工具提示 https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging
![alt text](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/imgs/remote-debug-banner.png "Remote Debugging Devices")

- Remote debugging on Android with Chrome DevTools
- Remote debugging on iOS with Safari Web Inspector


### 移动端click屏幕产生200-300 ms的延迟响应
移动设备上的web网页是有300ms延迟的，玩玩会造成按钮点击延迟甚至是点击失效。

以下是历史原因，来源一个公司内一个同事的分享：

2007年苹果发布首款iphone上IOS系统搭载的safari为了将适用于PC端上大屏幕的网页能比较好的展示在手机端上，使用了双击缩放(double tap to zoom)的方案，比如你在手机上用浏览器打开一个PC上的网页，你可能在看到页面内容虽然可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，你就能看清该部分放大后的内容，再次双击后能回到原始状态。

双击缩放是指用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接<a href="#"></a>，此处浏览器会先捕获该次单击，但浏览器不能决定用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先Hold一段时间t，如果在t时间区间里用户未进行下一次点击，则浏览器会做单击跳转链接的处理，如果t时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间t有多少呢？在IOS safari下，大概为300毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于web开发者来说是，页面js捕获click事件的回调函数处理，需要300ms后才生效，也就间接导致影响其他业务逻辑的处理。

解决方案：

fastclick可以解决在手机上点击事件的300ms延迟
zepto的touch模块，tap事件也是为了解决在click的延迟问题meta的viewport
触摸事件的响应顺序
1、ontouchstart 
2、ontouchmove 
3、ontouchend 
4、onclick
解决300ms延迟的问题，也可以通过绑定ontouchstart事件，加快对事件的响应

这个设计本来没有问题，但是在绝大多数的手机操作中，用户的单击事件的概率大大大于双击的，因此所有用户的点击都必须要等300ms，才能触发click事件，造成给用户给反应迟钝的反应，这个难以解决。业界普遍解决的方案是自己通过touch的事件完成tap，替代click。不过tap事件来实际的应用中存在下面所说的问题。

不过有个好消息，就是手机版chrome21.0之后，对于viewport width=device-width，并且禁止缩放的设置，click点击将取消300ms的强制等待时间，这个会是web的响应时间大大提升。ios至今还没有此类消息。不过这个还需要有一段时间。


### 移动事件
javascript有很多用户交互相关事件，在移动上有一些比较特有的事件，大家在日常开发中，可能会接触到，这些事件的特性，这里说一下：

orientationchange 这个事件是在当设备发生旋转的时候，发生的事件。这个在某些场合会非常的实用。
touchstart、touchmove、touchend、touchcancel等四个触摸事件，在所有移动web的中，都支持这四个事件。通过这两个事件，可以模拟出各种用户的手势，不过由于其处理比较复杂，可能模拟最多的是tap事件。很多web移动类库，都有tap的事件的实现，不过从实践中，tap都不是处理的很好，tap的主要问题，有两个，一个是tap和滚动同时触发的时候，往往会触发tap事件，二是tap的敏感度，经常会失误触发tap。
scroll事件 这个事件在PC上的触发时机和手机上的触发时机不同，scroll事件在手机上，只有在滚动停止的时候才会发生,因此这个事件在移动端用的比较少，因为触发的时机已经晚了。对于需要在移动中，改变页面结构的功能，用scroll是无法完成的。



移动开发事件

手机浏览器常用手势动作监听封装

手势事件
touchstart //当手指接触屏幕时触发
touchmove //当已经接触屏幕的手指开始移动后触发
touchend //当手指离开屏幕时触发
touchcancel
触摸事件
gesturestart //当两个手指接触屏幕时触发
gesturechange //当两个手指接触屏幕后开始移动时触发
gestureend
屏幕旋转事件
onorientationchange
检测触摸屏幕的手指何时改变方向
orientationchange
touch事件支持的相关属性
touches
targetTouches
changedTouches
clientX　　　　// X coordinate of touch relative to the viewport (excludes scroll offset)
clientY　　　　// Y coordinate of touch relative to the viewport (excludes scroll offset)
screenX　　　 // Relative to the screen
screenY 　　 // Relative to the screen
pageX　　 　　// Relative to the full page (includes scrolling)
pageY　　　　 // Relative to the full page (includes scrolling)
target　　　　 // Node the touch event originated from
identifier　　 // An identifying number, unique to each touch event
屏幕旋转事件：onorientationchange
判断屏幕是否旋转
function orientationChange() {
    switch(window.orientation) {
    　　case 0:
            alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;
    　　case -90:
            alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;
    　　case 90:
            alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
            break;
    　　case 180:
        　　alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);
        　　break;
    };};

添加事件监听
addEventListener('load', function(){
    orientationChange();
    window.onorientationchange = orientationChange;
});


双手指滑动事件：
// 双手指滑动事件
addEventListener('load',　　function(){ window.onmousewheel = twoFingerScroll;},
    false              // 兼容各浏览器，表示在冒泡阶段调用事件处理程序 (true 捕获阶段)
);
function twoFingerScroll(ev) {
    var delta =ev.wheelDelta/120;              //对 delta 值进行判断(比如正负) ，而后执行相应操作
    return true;
};


JS 单击延迟
click 事件因为要等待单击确认，会有 300ms 的延迟，体验并不是很好。

开发者大多数会使用封装的 tap 事件来代替click 事件，所谓的 tap 事件由 touchstart 事件 + touchmove 判断 + touchend 事件封装组成。

Creating Fast Buttons for Mobile Web Applications

Eliminate 300ms delay on click events in mobile Safari

FastClick

FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。简而言之，FastClick 在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即触发一个模拟 click 事件，并把浏览器在 300 毫秒之后真正触发的 click 事件阻止掉。

FastClick 的使用方法非常简单，在 window load 事件之后，在 <body> 上调用 FastClick.attach() 即可。

window.addEventListener( "load", function() {
    FastClick.attach( document.body );
}, false );
attach() 方法虽可在更具体的元素上调用，直接绑定到 <body> 上可以确保整个应用都能受益。当 FastClick 检测到当前页面使用了基于 <meta> 标签或者 touch-action 属性的解决方案时，会静默退出。可以说，这是真正的跨平台方案出来之前一种很好的变通方案。

就目前而言，FastClick 非常实际地解决 300 毫秒点击延迟的问题。唯一的缺点可能也就是该脚本的文件尺寸 (尽管它只有 10kb)。如果你非常在意这点文件大小，可以尝试一下 Filament Group 的 Tappy!，或者 tap.js。两者都相当轻量，能够通过监听 tap 而非 click 事件来绕过 300 毫秒延迟。


### fixed
https://github.com/maxzhang/maxzhang.github.com/issues/2

【Chrome Mobile】fixed元素无法点击
场景：父元素设置position: fixed;

　　　子元素设置position: absolute;

　　　此时，如果父元素/子元素还设置了overflow: hidden 则出现“父元素遮挡该子元素“的bug。

　　　视觉(view)层并没有出现遮挡，只是无法触发绑定在该子元素上的事件。可理解为：「看到点不到」。

补充： 页面往下滚动，触发position: fixed;的特性时，才会出现这个bug，在最顶不会出现。

测试平台： 小米1S，Android4.0的Chrome18

demo： http://maplejan.sinaapp.com/demo/fixed_chromemobile.html

解决办法： 把父元素和子元素的overflow: hidden去掉。

以上来源于 http://www.cnblogs.com/maplejan/archive/2013/04/26/3045928.html


### 移动端页面touch会穿透
https://segmentfault.com/q/1010000000691822

### 往返缓存问题

点击浏览器的回退，有时候不会自动执行js，特别是在mobilesafari中。这与往返缓存(bfcache)有关系。有很多hack的处理方法，可以参考

http://stackoverflow.com/questions/24046/the-safari-back-button-problem

http://stackoverflow.com/questions/11979156/mobile-safari-back-button
### 奇怪bug
上篇吐槽了IE，这篇说下移动端webkit内核浏览器的一个bug，当你滚动页面时，如果有元素的position属性从fixed变成relative，并修改了top后，这个元素会消失，等滚动结束后，又会出来。这是一个奇葩的bug，需要用奇葩的方式来解决，那就是给这个元素加上以下css样式

1
  -webkit-transform: translate3d(0, 0, 0);
是不是有点想掀桌？


## 参考资料
[无线开发经验谈]("http://am-team.github.io/amg/dev-exp-doc.html")




