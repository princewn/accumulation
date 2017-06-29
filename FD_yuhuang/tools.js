//单行截断
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;




// -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
// 常见结合属性：
//
// display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
// -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
// text-overflow: ellipsis;，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。

// overflow : hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// -webkit-line-clamp: 2;
// -webkit-box-orient: vertical;

// 这个属性比较合适WebKit浏览器或移动端（绝大部分是WebKit内核的）浏览器。