// 前台调用
var $=function  (args) {
	return new Base(args);
}
// 基础库
function Base (args) {
	this.elements=[];
	if (typeof args=='string') {		
		if (args.indexOf('')!=-1) {
			// css模拟
			var elements=args.split(' ');
			var childElements=[];
			var node=[];
			for (var i = 0; i < elements.length; i++) {
				if(node.length==0)node.push(document);
				switch(elements[i].charAt(0)){
					case '#':
						childElements=[];
						childElements.push(this.getId(elements[i].substring(1)));
						node=childElements;
						break;
					case'.':
						childElements=[];
						for (var j = 0; j < node.length; j++) {
							var temps=this.getClass(elements[i].substring(1),node[j]);
							for (var k = 0; k < temps.length; k++) {
								childElements.push(temps[k]);
							};
						};
						node=childElements
						break;
					default:
					childElements=[];
					for (var j = 0; j < node.length; j++) {
						var temps=this.getTag(elements[i],node[j]);
						for (var k = 0; k < temps.length; k++) {
							childElements.push(temps[k]);
						};
					};
					node=childElements;
				}
			};
			this.elements=childElements;
		}else{
			switch(args.charAt(0)){
				case "#":
					this.elements.push(this.getId(args.substring(1)));
					break;
				case".":
					this.elements=this.getClass(args.substring(1));
					break;
				default:
					this.elements=this.getTag(args);
			}
		}

	}
	else if(typeof args=='object'){
		if(args!=undefined){
			this.elements[0]=args;
		}
	}
	else if(typeof args=='function'){
		this.ready(args);
	}
};
	// 创建数组来保存获取的节点和节点数组
	Base.prototype.elements=[];
	// 获取节点的操作写在构造函数里面
	Base.prototype.getId=function(id){
		// return document.getElementById(id);
		// 必须要返回this才行所以我们可以创建一个数组
		return document.getElementById(id);

	};
	Base.prototype.getTag=function  (tag,parentNode) {
		var node=null;
		var temps=[];
		if(parentNode!=undefined){
			node=parentNode;
		}else{
			node=document;
		}
		var tags=document.getElementsByTagName(tag);
		for (var i = 0; i < tags.length; i++) {
			temps.push(tags[i]);
		};
		return tags
	}
	Base.prototype.getName=function  (Name) {
		this.elements.push(document.getElementsByName(Name));
		return this;
	}
	Base.prototype.getClass=function  (className,parentNode) {
		var node=null;
		var temps=[];
		if (parentNode!=undefined) {
				node=parentNode;
			}else{
				node=document;
			}
		var all=node.getElementsByTagName('*');
		for (var i = 0; i < all.length; i++) {
			if(all[i].className==className){
				temps.push(all[i]);
			}
		};
		return temps;
	}
	// 获取某个节点并返回Base对象
	Base.prototype.eq=function  (num) {
		var element=this.elements[num];
		this.elements=[];
		this.elements[0]=element;
		return this;
	}
	// 获取某个节点并返回节点对象
	Base.prototype.getElement=function  (num) {
		return this.elements[num];
	}
	// 添加class
	Base.prototype.addClass=function(className){
		for (var i = 0; i < this.elements.length; i++) {
			if(!hasClass(this.elements[i],className))
			this.elements[i].className+=' '+className;
		};
		return this;
	}
	// 移除class
	Base.prototype.removeClass=function(className){
		for (var i = 0; i < this.elements.length; i++) {
			if(hasClass(this.elements[i],className))
			this.elements[i].className+=this.elements[i].className.replace(new RegExp('(\\s|^)')+className+'(\\s|$)','');
		};
		return this;
	}

	Base.prototype.find=function(str){
		var childElements=[];
		for (var i = 0; i < this.elements.length; i++) {
			switch(str.charAt(0)){
			case "#":
				childElements.push(this.getId(str.substring(1)));
				break;
			case".":
				var element=this.getClass(str.substring(1),this.elements[i]);
				for (var j = 0; j < element.length; j++) {
					childElements.push(element[j]);
				};
				break;
			default:
				var element=this.getTag(str,this.elements[i]);
				for (var j = 0; j < element.length; j++) {
					childElements.push(element[j]);
				};
		}
		}
		this.elements=childElements;
		return this;
	}



// 设置css
	Base.prototype.css=function  (attr,value) {
		for (var i = 0; i < this.elements.length; i++) {
			if (arguments.length==1) {
			getStyle(this.elements[i],attr);
		}
		else{
		this.elements[i].style[attr]=value;
			}
		}
		return this;
	}
	// 设置link或者style中的css规则
	// insertSheet(body{'background'},0)
	Base.prototype.addRule=function(num,selectorText,cssText,position){
		var sheet=document.styleSheets[num];
		insertRule(sheet,selectorText,cssText,position)
		return this;
	}
	// 移除link或者sytle中的css规则
	Base.prototype.removeRule=function  (num,index) {
		var sheet=document.styleSheets[num];
		
		return this;
	}
// 设置innerHTML
	Base.prototype.html=function  (str) {
		for (var i = 0; i < this.elements.length; i++) {
			if (arguments.length==0) {
			return this.elements[i].innerHTML;
		}else{
			this.elements[i].innerHTML=str;
			}
		}
		return this;
	}
// 调用点击事件
	Base.prototype.click=function  (fn) {
	for (var i = 0; i < this.elements.length; i++) {
		// this.elements[i].onclick=fn;
		addEvent(this.elements[i],'click',fn);
	}
	return this;
	}
// hover事件
	Base.prototype.hover=function(over,out){
		for (var i = 0; i < this.elements.length; i++) {
			// this.elements[i].onmouseover=over;
			// this.elements[i].onmouseout=out;
			addEvent(this.elements[i],'mouseover',over);
			addEvent(this.elements[i],'mouseout',out);
		};
		return this;
	};
// 显示
	Base.prototype.show=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.display='block';
		};
		return this;
	}
// 隐藏
	Base.prototype.hide=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.display='none';
		};
		return this;
	}
// 页面居中
	Base.prototype.center=function(width,height){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.top=((document.documentElement.clientHeight-height)/2)+'px';
			this.elements[i].style.left=((document.documentElement.clientWidth-width)/2)+'px';
		};
		return this;
	}
// 改变页面大小
	Base.prototype.resize=function(fn){
		window.onresize	=fn;
		return this;	
	}
	Base.prototype.lock=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.width=getInner().width+'px';
			this.elements[i].style.height=getInner().height+'px';
			this.elements[i].style.display='block';
		};
	}

	Base.prototype.unlock=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.display='none'
		};
	}


// 封装库--插件
	Base.prototype.extend=function(name,fn){
		Base.prototype[name]=fn;
	};
    Base.prototype.ready=function(fn){
    	addDomLoaded(fn);
    };













