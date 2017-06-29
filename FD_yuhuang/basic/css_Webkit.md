###限制只能输入一定行数
对于Webkit里的方法，感觉可以说是
>	衣带渐宽终不悔，为伊消得人憔悴。蓦然回首那人却在灯火阑珊处。

Webkit支持一个名为-webkit-line-clamp的属性，他其实是一个WebKit-Specific Unsupported Property

	p {
    	overflow : hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box;
    	-webkit-line-clamp: 2;
    	-webkit-box-orient: vertical;
	}
http://jsfiddle.net/Cople/maB8f/点击预览

	p {
    	overflow: hidden;
    	white-space: normal;
    	height: 3em;
    	text-overflow: -o-ellipsis-lastline;
	}
Demo: http://jsfiddle.net/Cople/ash5v/点击预览
  ####
