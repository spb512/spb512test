jQuery(function($) {
	$(".datepicker").datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		autoSize:true,
		firstDay:1,
		changeMonth: true,
		changeYear: true,
		dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
		dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		dayNamesMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
		monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		currentText: "今日",
		closeText:"关闭",
		showButtonPanel: true,
		dateFormat:'yy-mm-dd'
//		maxDate:0
	});

	//激活浮动提示框
	$("[data-toggle='tooltip']").tooltip();
	//移除等待框
	if(top.$("#common-progress").length>0) {
		top.$("#common-progress").remove();
	}
});

/**
 * 公共的Modal
 * src需要弹出的页面入口action
 * 如果想弹出的页面好看先在body里加上以下代码
 * <div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<!-- 该按钮为关闭按钮，不需要的可以删除 -->
 				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> 
				<h4 class="modal-title" id="myModalLabel">标题（根据需要替换）</h4>
			</div>
			<div class="modal-body" >
				此处写主体内容
			<div>
			<div class="modal-footer">
				<button type="button" class="btn btn-xs btn-danger" data-dismiss="modal">关闭</button>
				此处根据需要加上自己的按钮
			</div>
		</div>
	</div>
 */
function commonModal(src){
	//如果model存在，移除
	if(top.$("#common-modal").length>0) {
		top.$("#common-modal").remove();
		top.$("#common-modal-btn").remove();
	}
	
	var html = '<a class="btn btn-xs btn-info" data-backdrop="static" data-toggle="modal" href="'+ src
		+'" style="display: none;" id="common-modal-btn" data-target="#common-modal"></a>'
		+'<div id="common-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" '
		+' aria-hidden="true" align="center" ></div>'
	
	top.$("body").append(html);
	top.$("#common-modal-btn").trigger("click");
}

/**
 * 公共的Dialog对话
 * divid需要弹出的div
 * fn为确定回调函数，如果没有回调函数请传false
 * fn1为取消回调函数，如果没有回调函数请传false
 * h为弹出框高度
 * w为弹出框高度
 * 调用方法：
 * function temp(){
   	alert(1);
   }
   function temp1(){
   	alert(2);
   }
   commonDialog("确定XX吗？","temp()"，"temp1()",400,900);
 */
function commonDialog(divid,fn,fn1,h,w){
	//如果div存在，移除
	if(top.$("#common-dialog").length>0) {
		top.$("#common-dialog").remove();
	}
	if(!h){
		h = 200;
	}
	if(!w){
		w = 300;
	}
	divid = "#"+divid;
	var html = '<div id="common-dialog" class="hide">'+$(divid).html()+'</div>';
	top.$("body").append(html);
	top.$("#common-dialog").removeClass('hide').dialog({
		height:h,
	    width: w,
		resizable: false,
		modal: true,
//		title: "对话框",
//		title_html: true,
		position: 'center',
		open: function (event, ui) {
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();
		},
		buttons: [
			{
				html: "<i class='icon- bigger-110'></i>保&nbsp;存",
				"class" : "btn btn-danger btn-xs",
				click: function() {
					top.$(this).dialog("close");
					if(fn){
					  eval(fn);	
					}else{
						return true;
					}
					
				}
			}
			,
			{
				html: "<i class='icon- bigger-110'></i>取&nbsp;消",
				"class" : "btn btn-xs",
				click: function() {
					top.$(this).dialog("close");
					if(fn1){
					  eval(fn1);	
					}else{
						return false;
					}
				}
			}
		]
	});
}
function commonDialog2(divid,fn,fn1,h,w,title){
	//如果div存在，移除
	if(top.$("#common-dialog").length>0) {
		top.$("#common-dialog").remove();
	}
	if(!h){
		h = 200;
	}
	if(!w){
		w = 300;
	}
	divid = "#"+divid;
	var html = '<div id="common-dialog" class="hide">'+$(divid).html()+'</div>';
	top.$("body").append(html);
	top.$("#common-dialog").removeClass('hide').dialog({
		height:h,
		width: w,
		resizable: false,
		modal: true,
		title: title,
		title_html: true,
		position: 'center',
		open: function (event, ui) {
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();
		},
		buttons: [
		          {
		        	  html: "<i class='icon- bigger-110'></i>保&nbsp;存",
		        	  "class" : "btn btn-danger btn-xs",
		        	  click: function() {
		        		  top.$(this).dialog("close");
		        		  if(fn){
		        			  eval(fn);	
		        		  }else{
		        			  return true;
		        		  }
		        		  
		        	  }
		          }
		          ,
		          {
		        	  html: "<i class='icon- bigger-110'></i>取&nbsp;消",
		        	  "class" : "btn btn-xs",
		        	  click: function() {
		        		  top.$(this).dialog("close");
		        		  if(fn1){
		        			  eval(fn1);	
		        		  }else{
		        			  return false;
		        		  }
		        	  }
		          }
		          ]
	});
}

/**
 * 公共的comfirm提示框
 * msg为提示信息
 * fn为确定回调函数
 * fn1为取消回调函数
 * 调用方法：
 * function temp(){
   	alert(1);
   }
   function temp1(){
   	alert(2);
   }
   commonConfirm("确定XX吗？","temp()"，"temp1()");
 */
function commonConfirm(msg,fn,fn1){
	//如果div存在，移除
	if(top.$("#common-confirm").length>0) {
		top.$("#common-confirm").remove();
	}
	var html = '<div id="common-confirm" class="hide"><div class="alert alert-info bigger-110">'+msg+'</div><div class="space-6"></div></div>';
	top.$("body").append(html);
	top.$("#common-confirm").removeClass('hide').dialog({
		resizable: false,
		modal: true,
		title: "确认",
		title_html: true,
		position: 'center',
		open: function (event, ui) {
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();
		},
		buttons: [
			{
				html: "<i class='icon- bigger-110'></i>确&nbsp;定",
				"class" : "btn btn-danger btn-xs",
				click: function() {
					top.$(this).dialog("close");
					if(fn){
					  eval(fn);	
					}else{
						return true;
					}
					
				}
			}
			,
			{
				html: "<i class='icon- bigger-110'></i>取&nbsp;消",
				"class" : "btn btn-xs",
				click: function() {
					top.$(this).dialog("close");
					if(fn1){
					  eval(fn1);	
					}else{
						return false;
					}
				}
			}
		]
	});
}

/**
 * 公共的alert提示框
 * msg为提示信息
 * commonAlert("确定XX吗？");
 */
function commonAlert(msg,width,height){
	//如果div存在，移除
	if(top.$("#common-alert").length>0) {
		top.$("#common-alert").remove();
	}
	var widths = 450;
	var heights = 50;
	if(width){
		widths = width;
	}
	if(height){
		heights = height;
	}
	var html ='';
	if(width){
		html = '<div id="common-alert" class="hide"><div class="alert alert-info bigger-110 width:'+widths+' ">'+msg+'</div><div class="space-6"></div></div>';
	}else{
		html = '<div id="common-alert" class="hide"><div class="alert alert-info bigger-110 ">'+msg+'</div><div class="space-6"></div></div>';
	}
	top.$("body").append(html);
	
	top.$( "#common-alert" ).removeClass('hide').dialog({
		resizable: false,
		modal: true,
		title: "提示",
		title_html: true,
		position: 'center',
		open: function (event, ui) {
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();
		},
		buttons: [
			{
				html: "<i class='icon- bigger-110'></i>确&nbsp;定",
				"class" : "btn btn-danger btn-xs",
				click: function() {
					top.$(this).dialog( "close" );
				}
			}
		]
	});
}


/**
 * 公共的进度条
 * msg为提示信息
 * commonProgress("加载中。。。");
 */
function commonProgress(msg){
	//如果div存在，移除
	if(top.$("#common-progress").length>0) {
		top.$("#common-progress").remove();
	}
	var displayMsg = "加载中，请稍后...";
	if(msg){
		displayMsg = msg;
	}
	var html = '<div id="common-progress" class="hide"><div class="alert alert-info bigger-110"><i class="icon-spinner icon-spin orange bigger-125"></i>&nbsp;&nbsp;&nbsp;'
		+displayMsg+'</div><div class="space-6"></div></div>';
	top.$("body").append(html);

	top.$( "#common-progress" ).removeClass('hide').dialog({
		resizable: false,
		modal: true,
		open: function (event, ui) {
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();
		}
	});
}