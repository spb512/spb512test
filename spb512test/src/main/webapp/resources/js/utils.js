/**
 * table多行添加验证处理方法（参照views/buildForm/jl/zzjlqj/partcheck/edit.jsp的insertRow()方法）
 * 开发步骤：1、需要在添加行方法上面添加变量insertFlag = false;
 * 2、在方法中将原始的name放入到Array中
 * 3、在数据载入时，需要进行相应的修改（参照views/buildForm/jl/zzjlqj/partcheck/edit.jsp的列表数据初始化）
 */
/**
 * 该方法是将控件的名称改为原来的名称（修改前：为了添加验证，将名称后面加了数字后缀）
 */
var nameList = new Array();//添加行的name列表
var num = 0;//添加行的数量
function resetName(){
	if(!document.all("noPageTab")){
		return;
	}
	if(num == 0){
		num = parseInt(document.all("noPageTab").rows.length);
	}
	var name = "";
	var temp = "";
	for(var i=0;i<=num;i++){
		for(var j=0;j<nameList.length;j++){
			name = nameList[j];
			name = name + "" + i + "";
			temp = $("[name='"+name+"']");
			if(temp){
				$("[name='"+name+"']").attr("name",nameList[j]);
			}
		}
	}
}

/**
 * resetElementName使用方法：
 * 1.在真实的Name和顺序之间加上@@@
 * 2.在class中加上needResetName
 * 3.在forms校验之后调用该方法
 */
function resetElementName(){
	$(".needResetName").each(function(){
		var resetNames = $(this).attr("name").split("@@@")[0];
		$(this).attr("name",resetNames);
	});
}