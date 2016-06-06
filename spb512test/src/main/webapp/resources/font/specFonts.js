
var currentFontBtn;
var currentChar;
function regSpecFontEvent(){
	if(window.event.button==1){
		var srcEle=window.event.srcElement;
		if((srcEle.tagName=='INPUT'|| srcEle.tagName=='TEXTAREA')){
			lastFocusInputObject=srcEle; 
		}else{  
			if(event.srcElement.name!= 'specFontBtn'){
				lastFocusInputObject = null;
			}
		}
	}
}

function specCharClick(){
	var openWind = window.open("http://192.168.203.144:8080/shzjxzsp/font/toGoFontView/",'',"dialogWidth=500px;dialogHeight=500px;status=no;help=no;scrollbars=no");
}
var rie; //全局变量


function fontClick(ths,str){  
	if(currentFontBtn){
		currentFontBtn.className="queryButton";
	}
	ths.className="queryButton10";
	
	var obj = document.getElementById('textValue');
	  if (document.selection) { //ie
		  obj.focus();
		  rie = document.selection.createRange();
		  rie.text=str;
	  }else{
		  obj.value +=str;
	  }
	
	currentFontBtn=ths;
	currentChar=str;		
}

function fontCopy(){
	if(!currentChar){
		alert("请选择一个特殊字符！");
		return;
	}
	if(window.dialogArguments){
	   window.dialogArguments.value+=currentChar;
	   alert("已复制到输入框中。");
   }else{
		window.clipboardData.setData('text', currentChar); 
		alert("所选字符已复制到剪贴板，请自行复制到输入框中。");
		window.parent.focus();
   }
}