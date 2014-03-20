
(function($){
	$.fn.drag=function(options){

	//默认配置
	var defaults = {
		handler:false
	};

    // 覆盖默认配置
	var opts = $.extend(defaults, options);

	this.each(function(){
		//初始标记变量
		var isMove=false,
		//handler如果没有设置任何值，则默认为移动对象本身，否则为所设置的handler值
		handler=opts.handler? $(this).find(opts.handler): $(this),
		_this=$(this), //移动的对象
		dx,dy;
		//移动鼠标，改变对象位置
		$(document).
		mousemove(function(event){
			if(isMove){
			  	//获得鼠标移动后位置
				var eX=event.pageX,eY=event.pageY;
				//更新对象坐标
			 	_this.css({'left':eX-dx,'top':eY-dy});
			}
		})
		.mouseup(function(){
			//当放开鼠标，停止拖动
			isMove=false;
		});
		//当按下鼠标，设置标记变量isMouseDown为true
		handler.mousedown(function(event){
			//判断最后触发事件的对象是否是handler
			if($(event.target).is(handler)){
					isMove=true;
					$(this).css('cursor','move');
					//鼠标相对于移动对象的坐标
					dx=event.pageX-parseInt(_this.css("left"));
					dy=event.pageY-parseInt(_this.css("top"));
				}
 			});
 		});
	};
})(jQuery);
