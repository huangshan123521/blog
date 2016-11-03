// 跨浏览器获取窗口大小
function getInner(){
	if(window.innerWidth!='undefined'){
		return {
			width:window.innerWidth,
			height:window.innerHeight
	}
	}else{
		return {
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		};
	}
}

// 跨浏览器获取style
function getStyle (element,attr) {
	if (typeof window.getComputedStyle!='undefined') 
	{
		return window.getComputedStyle(element,null)[attr];
	}
	// IE的就需要使用
	else if (typeof element.getCurrentStyle!='undefined') {
		return element.getCurrentStyle[attr];
	}
}

// 判断class是否存在
function hasClass (element,className) {
	return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}
// 跨浏览器添加link或者style规则
function insertRule (sheet,selectorText,cssText,position) {
	if(typeof sheet.insertRule!='undefined'){
		sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}
	// IE情况下
	else if(typeof sheet.addRule!='undefined'){
		sheet.addRule(selectorText,cssText,position);
	}
}
// 跨浏览器移除link或者style规则
function removeRule (sheet,index) {
	// W3C情况下
		if(typeof sheet.deleteRule!='undefined'){
			sheet.deleteRule(index);
		}else if(typeof sheet.removeRule!='undefined'){
			sheet.removeRule(index);
		}
}

function addEvent (obj,type,fn) {
	// W3C
	if(typeof obj.addEventListener!='undefined'){
		obj.addEventListener(type,fn,false);
	}else {
		// 第一次创建
		if (!obj.events)
			// 创建一个可以保存事件的哈希表（散列表）
		 {obj.events={};};
		if(!obj.events[type]){
			// 创建一个可以保存事件处理函数的数组
			obj.events[type]=[];
			// 把第一次的事件处理函数先存储到第一个位置上
			if(obj['on'+type])obj.events[type][0]=fn;
			// 执行事件处理
			obj['on'+type]=addEvent.exec;
		}else{
			// 同一注册函数取消计数
			if(addEvent.array(fn,obj.events[type]))return false;
		}
		// 从第二次开始我们用事件计数器来存储
		obj.events[type][addEvent.ID++]=fn;
		
	}
	
}
addEvent.array=function  (fn,es) {
	for(var i in es){
		if(es[i]==fn)return true;
	}
	return false;
}
addEvent.ID=1;
addEvent.exec=function  (event) {
	// 原本是e=event|window.event但是IE的组织默认行为和冒泡方法不同
	var e=event||addEvent.fixEvent(window.event);
	var es=this.events[e.type];
	for(var i in es){
		es[i].call(this,e);
	}
};
// 标准化event
addEvent.fixEvent=function(event){
	event.target=event.srcElement;
	event.preventDefault=addEvent.fixEvent.preventDefault;
	event.stopPropagation=addEvent.fixEvent.stopPropagation;
	return event;
}
// 阻住默认行为
addEvent.fixEvent.preventDefault=function(){
	return this.Value=false;
};
// 冒泡处理
addEvent.fixEvent.stopPropagation=function(){
	this.cancelBubble=true;
}
// 
function removeEvent (obj,type,fn) {
	// W3C
	if(typeof obj.removeEventListener!='undefined'){
		obj.removeEventListener(type,fn,false);
	}else {
		var es=obj.events[type];
		for(var i in es){
			if(es[i]==fn){
				delete obj.events[type][i];
			}
		}
	}
}
// 去除两边的空格
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,'');
}

//  我现在的感觉就是浏览器判断我没写吗？我记得我写了的呀，明天解决























