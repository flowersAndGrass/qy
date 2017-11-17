$(document).ready(function(){


	/**
	*设置/取得cookie
	*@function useCookie
	*@param a{string}cookie value
	*@return 如果存在返回cookie
	*/
	function useCookie(a){
			var c = document.cookie;
			if(typeof a=='string'){
				document.cookie = a;
				return document.cookie;
			}
			if(typeof c=='string'){
				return c
			}else{
				return false;
			}
		
	}
	/**
	*查检是否需要登录
	*@function checkAutoDoLogin
	*/
	function isAutoDoLogin(){
		if($(".qui-popup-logindialog").length>0){
			return false;
		}
		var c = useCookie();
		if(c){
			var cookies = c.split(";"),
			l = cookies.length,
			i=0,
			k = true;
			for(;i<l;i++){
				if($.trim(cookies[i].split("=")[0])=="isDoLogin"){
					k = false;
					break;
				}
			}
			if(k){
				qyerUtil.doLogin({databnipg:"autopopup"});
				var date=new Date();
				date.setTime(date.getTime()+24*3600*1000); 
				useCookie("isDoLogin=828;expires="+date.toGMTString()+";path=/");
			}
		}else{
			qyerUtil.doLogin({databnipg:"autopopup"});
		}
	}
	$('<style>.qyer_layer_fix{display:none!important}</style>').appendTo("body");

	setTimeout(isAutoDoLogin,10000);


})