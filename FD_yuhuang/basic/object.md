# object
### object的key不能为变量

#### 本次进行一些初步学习，包括
##### 函数作用域以及闭包
##### 基本类型以及引用类型
##### 面向对象之创建对象三种基本方式
###### 由于在JSfiddle里的代码传到git上格式乱掉，下面附上实验代码

	//函数作用域
	function outer(){
		console.log("outer"+this);
		function inner1(){
  			console.log("inner1"+this);
  		}
  		function inner2(){
  			console.log("inner2"+this);
  		}
  
  		inner1();
  		inner2();
	}

	outer();


	//闭包
	function outer(){
		var target = "outer";
 		function inner(){
  			console.log("get outer"+target);
  		}
  		return inner;
	}
	var outerOne =outer();
	outerOne();


	//基本类型和引用类型
	var a = 5;
	var b = a;
	b=4;
	console.log(a);
	var o=new Object();
	o.name = "韩梅梅"
	var o2=o;
	o2.name = "李雷";
	console.log(o.name);


	//对象中的基本类型和引用类型
	var o1 = new Object();
	var o2 = o1;
	o1.name = "韩梅梅";
	console.log(o2.name);
 
 
	 //参数只能按值传递
	 function test(obj){
	 	obj.name = "颜色不一样的烟火"
	    console.log(obj.name);
	 }
	 var onjTest={
	 	  name: "我就是我"
	 }
 	test(onjTest);
 	console.log(onjTest.name+"姨？怎么被改变了？看下面");
 	function test2(obj){
 		obj.name ="瞅啥瞅";
    	obj=new Object();
    	obj.name = "瞅你咋地";
 	}
 	test2(onjTest);
 	console.log(onjTest.name+"姨？是的，传的不是实体的引用，而是对象在堆中的地址，也就是传值，根据值来在堆中有相应的引用");
 
 	//识别自定义的对象类型incetanceof
 
 
 	//使用工厂模式
 	function Toy(type){
 		var obj=new Object();
    	obj.type =type;
    	obj.mackYouHappy = function(){
    		console.log("笑一笑"+obj.type);
    	}
    	return obj;//很重要
 	}
 	var soft = Toy("毛绒");
 	var car = Toy("车模");
 	soft.mackYouHappy();
 	car.mackYouHappy();
 	console.log(soft instanceof Toy);
 	console.log(soft instanceof Object);
 	console.log(soft instanceof Function);
 	console.log("到底是什么类型呐，老衲不能接受");
 
 
	 //使用构造函数
 	function ToyObj(type){
 		this.type = type;
    	this.mackYouHappy = function(){
        	console.log("this"+this);
    		console.log("笑一笑"+this.type);
    	}	
	 }
 	var softObj = new ToyObj("毛绒");
 	var carObj = new ToyObj("车模");
 	softObj.mackYouHappy();
 	carObj.mackYouHappy();
 	console.log(softObj instanceof ToyObj);
 	console.log(softObj instanceof Object);
 	console.log(softObj instanceof Function);
 	console.log("诶呦，ToyObj可以判断啦，重复定义了mackYouHappy()Function对象，老衲不能接受");
 
 
 	//原型模式
 	function ToyProto(){
 
 	}
 	ToyProto.prototype.type="玩具";
 	ToyProto.prototype.mackYouHappy = function(){
     	console.log("笑一笑"+this.type);
 	}
 	var softProto = new ToyProto();
 	//进行独有属性的设置
 	softProto.type = "毛绒";
	var carProto = new ToyProto();
	softProto.mackYouHappy();
 	carProto.mackYouHappy();
 	console.log(softProto instanceof ToyProto);
 	console.log(softProto instanceof Object);
 	console.log(softProto instanceof Function);
 	console.log("原型以及其它函数模式，老衲来日再战");
 
 
 	
 	
 	
 	
 	
 	 	//延长作用域链,没看懂什么用法
 	//with和try-catch
 	with(softProto){
      //this.mackYouHappy();
      console.log(this.type);
 	}
 	with(prop in softProto){
 		console.log(prop);
 	}
 	

 	


