//显示格式
$.validator.setDefaults({
//	showErrors: function(map, list) {
//		$.each(list, function(index, error) {
//			if(index==0){
//				$(error.element).attr("title", error.message).css("border-color","red").focus();
//			}else{
//				$(error.element).attr("title", error.message).css("border-color","red");
//			}
//			
//			$(error.element).tooltip({
//				show: {
//					effect: "explode",
//					delay: 250
//				}
//			});
//		});
//	}
	showErrors: function(map, list) {
		var focussed = document.activeElement;
		if (focussed && $(focussed).is("input, textarea")) {
			$(this.currentForm).tooltip("close", {
				currentTarget: focussed
			}, true)
		}
		this.currentElements.removeAttr("title").removeAttr("data-original-title").css("border-color","#D5D5D5");
		$("span").remove(".error-Message-for-validate");
		$.each(list, function(index, error) {
			if(error.element.type == 'radio'){
				var html = '<span class="error-Message-for-validate"><font color="red" style="font-style: italic;font-weight: bold;">[请选择一项]</font></span>';
				$(error.element.parentNode).append(html);
			}else if(error.element.type == 'checkbox'){
				var html = '<span class="error-Message-for-validate"><font color="red" style="font-style: italic;font-weight: bold;">[请至少选择一项]</font></span>';
				$(error.element.parentNode).append(html);
			}else{
				$(error.element).attr("title", error.message).attr("data-original-title", error.message).css("border-color","red");
				$(error.element).tooltip({
					show: {
						effect: "explode",
						delay: 250
					}
				});
			}
		});
		if (focussed && $(focussed).is("input, textarea")) {
			$(this.currentForm).tooltip("open", {
				target: focussed
			});
		}
	}
});
//不小于30验证
jQuery.validator.addMethod("proportion", function(value, element) {
    var length = value.length;
    var tel =  /^[3-9]\d$/
    return this.optional(element) || (tel.test(value));
}, "值小于30");   

//手机号码验证
jQuery.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    var mobile =  /^1{1}[0-9]{10}$/
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式错误");   

// 电话号码验证   
jQuery.validator.addMethod("phone", function(value, element) {
    var tel = /^(0[0-9]{2,3}-)?([0-9]{8})$/;
    return this.optional(element) || (tel.test(value));
}, "格式错误");

//电话及手机
jQuery.validator.addMethod("phoneAndmobile", function(value, element) {
    var tel = /^((0[0-9]{2,3}-)?([0-9]{8})(\\)?)?(1{1}[0-9]{10})?$/;
    return this.optional(element) || (tel.test(value));
}, "格式错误：正确格式类似 021-47528562\\15821001234");

// 邮政编码验证   
jQuery.validator.addMethod("zipCode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "邮政编码格式错误");

// QQ号码验证   
jQuery.validator.addMethod("qq", function(value, element) {
    var tel = /^[1-9]\d{4,12}$/;
    return this.optional(element) || (tel.test(value));
}, "qq号码格式错误");

// IP地址验证
jQuery.validator.addMethod("ip", function(value, element) {
    var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return this.optional(element) || (ip.test(value) && (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256));
}, "Ip地址格式错误");

// 字母和数字的验证
jQuery.validator.addMethod("chrnum", function(value, element) {
    var chrnum = /^([a-zA-Z0-9]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "只能输入数字和字母(字符A-Z, a-z, 0-9)");

//数字的验证
jQuery.validator.addMethod("onlyNUM", function(value, element) {
    var onlyNUM = /^([0-9]+(\.[0-9]+)?)$/;
    return this.optional(element) || (onlyNUM.test(value));
}, "只能输入数字");

//yyyyMMdd日期格式的验证
jQuery.validator.addMethod("dateYYYYMMDD", function(value, element) {
    var dateYYYYMMDD = /^[0-9]{4}((0[1-9])|(11)|(12))((0[1-9])|([1,2][0-9])|(3[0,1]))$/;
    return this.optional(element) || (dateYYYYMMDD.test(value));
}, "日期格式错误");

// 中文的验证
jQuery.validator.addMethod("chinese", function(value, element) {
    var chinese = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (chinese.test(value));
}, "只能输入中文");

// 下拉框验证
$.validator.addMethod("selectNone", function(value, element) {
    return value != "";
}, "必须选择一项");

// 身份证验证
$.validator.addMethod("checkIdCard", function(value, element) {
	var chinese = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return this.optional(element) || (chinese.test(value));
}, "身份证格式错误");

// 字节长度验证
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
        }
    }
    return this.optional(element) || (length >= param[0] && length <= param[1]);
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));