# develop-environment
日常、预发、灰度、线上四套开发环境
通常的，日常环境下的页面地址一般就是正常页面 URL 中间加上 daily 后面改成 net。比如淘宝网首页 www.taobao.com ，日常环境页面就是 www.daily.taobao.net 。
预发跟线上使用一样的 URL，因此在测试预发的时候，需要绑定 HOST 到预发的服务器 IP 才可以使用。

灰度遇到问题之后，会马上下线并回滚到之前一个正常的版本。

线上环境重新使用 Aone 部署线上时会部署到所有线上的服务器

仓库地址：http://gitlab.alibaba-inc.com/tb/mtb-profile/，资源文件路径：/build/oth/p/c2c/header-top-min.css，当前分支名称：daily/0.0.2，那么这个静态资源 URL 就是：//g.alicdn.com/tb/mtb-profile/0.0.2/oth/p/c2c/header-top-min.css 即 g.alicdn.com + 仓库名 + 版本号 + 相对于 build 目录的资源路径。日常环境下的静态资源 CDN 地址，就是把前面的 g.alicdn.com 换成 g-assets.daily.taobao.net，在调用静态资源时，往往需要先判断当前环境是线上还是日常（后端模板判断输出或者前端判断 location.host）。

日常环境下是没有 CDN 的，我们 push 之后会同步到某台内网机器“伪装成 CDN”，如果你想在预发下测试（此时静态资源 url 为 g.alicdn.com）或者在日常环境下直接使用线上 CDN 地址引入静态资源的话，需要将类似 g.alicdn.com 这类的 CDN 域名修改 Host 绑定到内网机器 IP 上。目前对应关系如下（可能会变）：

10.101.73.189 g.tbcdn.cn
10.101.73.189 g.alicdn.com
10.218.133.249 a.tbcdn.cn
10.218.133.249 assets.alicdn.com
如果开发完毕，需要发布到线上外网的 CDN，可以对该版本使用 git tag publish/x.y.z 打上 tag （例如： publish/0.0.2），然后将这个 tag 推送到服务器上面（ git push origin publish/x.y.z），这样服务器就会自动将你这个 daily/0.0.2 分支合并到 master 上面，删掉该分支，并且拒绝创建同名分支以及 push 代码到该分支。下次如果有需要修改的资源，就需要再增加一个版本号，这样来做版本管理。




H5 三套环境相关信息
H5 跟 PC 端项目一样，具有三套环境，其中三套环境分别对应的域名关系如下：

日常：waptest.taobao.com
预发：wapa.taobao.com
线上：m.taobao.com
在开发的时候，你需要绑定相关域名进行，因为页面可能会需要登陆、请求接口等等，它们都是根据域名来判断。



http://g.alicdn.daily.taobao.net/sj/qn-workbench/1.10.2/page/customer-service-management/index.html

通过gitlab发布后的日常cdn域
http://g.alicdn.daily.taobao.net




Hi, all 

      此次改动在PC商品推介的模块里，增加了商家卡片的透出，用户可以通过千牛客户端或者团队管理的商品推荐对卡片进行编辑，
相关需求问题请@张晓丹(律然) 告知一下测试同学
     

测试环境：

    TOP预发绑定
    140.205.57.248 gw.api.taobao.com eco.taobao.com 

测试请绑定hosts：
    10.101.73.189 g.alicdn.com

测试地址：
    http://g.alicdn.daily.taobao.net/sj/qnww-item/2.1.1/index.html

   http://g.alicdn.daily.taobao.net/sj/qn-workbench/1.5.4/page/customer-service-management/index.html

Tks



