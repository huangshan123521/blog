// $().extend('drag',function(tags){
// 	// 拖拽代码
// 	for (var i = 0; i < this.elements.length; i++) {
// 			addEvent(this.elements[i],'mousedown',function(e){
// 			// this.elements[i].onmousedown=function(e){
// 				e.preventDefault();
// 				// var e=getEvent(e);
// 				var _this=this;
// 				var diffX=e.clientX-_this.offsetLeft;
// 				var diffY=e.clientY-_this.offsetTop;
// 					// 鼠标锁住时触发（点击住）
// 				if(typeof _this.setCapture!='undefined'){
// 					_this.setCapture();
// 				}
// 				// document.onmousemove=function(e){
// 				addEvent(document,'mousemove',function(e){
// 					// var e=getEvent(e);
// 					var left=e.clientX-diffX;
// 					var top=e.clientY-diffY
// 					// 设置不得超过浏览器边缘
// 					if(left<0){
// 						left=0;
// 					}else if(left>getInner().width-_this.offsetWidth){
// 						left=getInner().width-_this.offsetWidth;
// 					}
// 					if(top<0){
// 						top=0
// 					}else if(top>getInner().height-_this.offsetheight){
// 						top=getInner().height-_this.offsetHeight;
// 					}
// 					_this.style.left=left+'px';
// 					_this.style.top=top+'px';

// 				});
// 				// 	document.onmouseup=function(){
// 				addEvent(document,'mouseup',function(){
// 						this.onmousemove=null;
// 						this.onmouseup=null;
// 						// 鼠标释放时触发（放开鼠标）
// 						if (typeof _this.releaseCapture!='undefined') {
// 							_this.releaseCapture();
// 						};
// 				});
			
			
// 			// 锁屏后防止，通过其他渠道拖拉页面滚动条		
// 			// addEvent(window,'scroll',function(){
// 			// 	document.documentElement.scrollTop=0;
// 			// 	document.body.scrollTop=0;
// 			});
// 		return this;
// 	}
// })
// 		// function getEvent(event){
// 		// 	return event||window.event;
// 		// }
// 	// 阻止默认行为
// 		// function preDef(event){
// 		// var e=getEvent(event);
// 		// if(typeof e.preventDefault!='undefined'){
// 		// 	e.preventDefault();
// 		// }else{
// 		// 	e.returnValue=false;
// 		// }
// 		// }
// 		// 空DIV阻止默认行为
// 	// if (trim(this.innerHTML).length==0) {e.preventDefault();};
// 	// 表单项无法拖拽
// 	// if(e.target.tagName=='H2'){
// 	// 	addEvent(document,'mousemove',move);
// 	// 	addEvent(document,'mouseup',up);
// 	// }else{
// 	// 	removeEvent(document,'mouseover',move);
// 	// 	removeEvent(document,'mouseup',up);
// 	// }
// 	// 锁屏后防止，通过其他渠道拖拉页面滚动条
// 	// addEvent(window,'scroll',function(){
// 	// 	document.documentElement.scrollTop=0;
// 	// 	document.body.scrollTop=0;
// 	// });