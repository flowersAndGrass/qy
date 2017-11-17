<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>穷游商城我的订单</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link rel="shortcut icon" href="//www.qyer.com/favicon.ico" />

<script>
window.QYER = {};
window.QYER.uid = 9948056;

window.zw_user_info = {//用户信息
	mail_info:{//设置提醒的邮箱信息
		mail: 0,
    	ckemail: 1	},
	remaind_data:{//设置提醒的传送数据
		product_type:null,//产品类型
		start_pos:null,//出发地
		date_str:null,//旅行时间
		country:null	}
}

/* 20161031 by bluers*/
window._RATrack = window._RATrack||{
        'platform':'web',
        'channel':'z',
        'page_type':'list',
        'ugc_type':'z_order_list',
        'ugc_content':''
 };
</script>


	

<link rel="stylesheet" type="text/css" href="css/order/frame.css">

    

    

<link rel="stylesheet" type="text/css" href="css/order/orderlist.css">



	

<script src="js/order/frame1.js"></script>

    

<script src="js/order/frame2.js"></script>

    

<script src="js/order/order-list.js"">










<style>
    .tip_passport_bindmobile{height: 40px; line-height: 40px; background-color: rgb(224, 241, 223); font-size: 14px; padding-left: 28px; position: relative; margin-top: -40px;transition:All .3s ease; -webkit-transition:All .3s ease; -moz-transition:All .3s ease; -o-transition:All .3s ease;color:#323232;z-index:1;}
    .tip_passport_bindmobile a{color: #323232; text-decoration: underline;}
    .tip_passport_bindmobile img{width:12px;height:12px;position: absolute; top: 15px; right: 17px; cursor: pointer; }

    .tip_passport_bindmobile_masker{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);z-index:2000;display: none; }
    .tip_passport_bindmobile_dialog{box-sizing: border-box; width: 340px; height: 180px; border: solid 1px rgb(192, 192, 192); background-color: rgb(255, 255, 255); box-shadow: 0 0 10px #ccc; position: absolute; top: 50%; left: 50%; margin: -90px 0 0 -170px; padding: 30px 20px 0 20px; } 
    .tip_passport_bindmobile_dialog_title{font-size: 18px;color: #323232;text-align: center;margin-bottom: 5px; } 
    .tip_passport_bindmobile_dialog_text{font-size: 14px;color: #959595;}
    .tip_passport_bindmobile_dialog_btn{width:84px;height:28px;line-height:28px;display:inline-block;font-size:14px;color:rgb(50,50,50);text-decoration:none !important;margin-top:15px;background-color:rgb(236,236,236);border:solid 1px rgb(192,192,192);cursor:pointer;border-radius:3px;}
    .tip_passport_bindmobile_dialog_btn:hover{background-color:rgb(243,243,243);}
    .tip_passport_bindmobile_dialog_btnBind{margin-left:20px; background-color:rgb(59,160,92); border:solid 1px rgb(59,160,92); color:#fff; }
    .tip_passport_bindmobile_dialog_btnBind:hover{background-color:rgb(71,197,113); border:solid 1px rgb(71,197,113); }
    .tip_passport_bindmobile_dialog_close{position:absolute;top:16px;right:16px;cursor:pointer;}
</style>

</head>

<body>
<div id="tip_passport_bindmobile" class="tip_passport_bindmobile">
	<span>
		穷游网将实行手机绑定实名制，为了您的帐号安全请及时绑定手机号。
    	<a target="_blank" href="//bbs.qyer.com/thread-2779523-1.html">查看详细说明</a>
	</span>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRjUzNThGRDU3QkQxMUU3QjUyQ0M1QkZCNDUzNkFCOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjUzNThGRTU3QkQxMUU3QjUyQ0M1QkZCNDUzNkFCOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNTM1OEZCNTdCRDExRTdCNTJDQzVCRkI0NTM2QUI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNTM1OEZDNTdCRDExRTdCNTJDQzVCRkI0NTM2QUI4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Lb1GqgAAAKlJREFUeNqckkEOwiAQRQc8GFvO0AULjNF4IKMx7aILz9AlHMdDGPyYT0MomzrJD014bwJMVQjhLSIL4o0xH+lUjPGAZUKsJuyQmRs9eCazZMEjL2RopQoeyHiVUmo3RuRE54kcCbt85J9QdXsQuFO4sMG53G8VKCksN4JC8Qp4hbTsrP+OtOvSGFz7dK506zyr05zgBs7Fb1fNacqCLZPs/RqVlBn7FWAASJhkb97XPw8AAAAASUVORK5CYII=" />
</div>
<div id="tip_passport_bindmobile_masker" class="tip_passport_bindmobile_masker">
    <div class="tip_passport_bindmobile_dialog">
        <h5 class="tip_passport_bindmobile_dialog_title">帐号安全提示</h5>
        <p class="tip_passport_bindmobile_dialog_text">穷游网将实行手机绑定实名制，为了您的帐号安全，请及时绑定手机号。</p>
        <div style="text-align:center;"> 
            <a class="tip_passport_bindmobile_dialog_btn" href="//bbs.qyer.com/thread-2779523-1.html" target="_blank" >查看说明</a>
            <a class="tip_passport_bindmobile_dialog_btn tip_passport_bindmobile_dialog_btnBind"  href="//passport.qyer.com/account/mobile/bind" target="_blank" >立即绑定</a>
        </div>
        <img id="tip_passport_bindmobile_dialog_close" class="tip_passport_bindmobile_dialog_close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNTMyODU3OTU5OEExMUU3QTgwMUVFNzYzN0YwQkI1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNTMyODU3QTU5OEExMUU3QTgwMUVFNzYzN0YwQkI1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE1MzI4NTc3NTk4QTExRTdBODAxRUU3NjM3RjBCQjU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE1MzI4NTc4NTk4QTExRTdBODAxRUU3NjM3RjBCQjU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jb9fzQAAAKlJREFUeNqckkEOwiAQRQc8GFvO0AULjNF4IKMx7aILz9AlHMdDGPyYT0MomzrJD014bwJMVQjhLSIL4o0xH+lUjPGAZUKsJuyQmRs9eCazZMEjL2RopQoeyHiVUmo3RuRE54kcCbt85J9QdXsQuFO4sMG53G8VKCksN4JC8Qp4hbTsrP+OtOvSGFz7dK506zyr05zgBs7Fb1fNacqCLZPs/RqVlBn7FWAASJhkb97XPw8AAAAASUVORK5CYII=" />
    </div>
</div>
<script>
    (function(){

        function setCookie(name, value,time) {
            var exp = new Date();
            exp.setTime(exp.getTime() + (time||259200000));
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=qyer.com";
        };
        function getCookie(objName){
            var arrStr = document.cookie.split("; ");
            for(var i = 0;i < arrStr.length;i ++){
                var temp = arrStr[i].split("=");
                if(temp[0] == objName) return unescape(temp[1]);
           } 
        }

        window.__userStatusCallBack = function (data) {

            // 显示通栏
            (function(){
                var isShowTopTip = data.uid 
                            && data.userinfo.bind_phone!=1 
                            && getCookie('tip_passport_bindmobile')!="1"
                            && !/^https?:\/\/qyer\.com/gi.test(location.href)
                            ;
                // 显示顶部提示
				var $dom = $('#tip_passport_bindmobile');
                if(isShowTopTip){
                    $dom.css('marginTop','0').find('img').click(function(){
                        $dom.css('marginTop','-40px');
                        setCookie('tip_passport_bindmobile',1);
						setTimeout(function(){
                            $dom.remove()
                        },500);
                    })
                }else{
					$dom.remove()
				}
            })();


            // 增加 UGC 监听，关键操作出现绑定账号提示
            (function(){
                if(data.uid && data.userinfo.bind_phone!=1 ){
                    // modal 关闭事件
                    $('#tip_passport_bindmobile_dialog_close').on('click',function(){
                        $('#tip_passport_bindmobile_masker').remove();
                        setCookie('tip_passport_ugc_bindmobile',1);
                    });

                    // 代理全局 mousedown 事件，判断用户行为，进行绑定弹窗提示
                    var filter = [
                        '[data-bn-ipg=index-head-userdrop-poicomment]', // 写点评
                        '.cfsub.cn-pub', // 写帖子
                        '.ask_askhelp_btn', // 提问
                        '[data-bn-ipg=planhome-createplan]', // 创建行程-自己制定
                        '[data-bn-ipg=planhome-1-createplan-bymyself]', // 创建行程-自己制定
                        '[data-bn-ipg=planhome-1-createplan-createforme]', // 创建行程-帮我制定
                        '#addPhoto.ui-button.btn-default-full.btn-upload', // 上传图片
                    ].join(',')
                    $(document.body).on('mousedown',filter,function(){
                        if( getCookie('tip_passport_ugc_bindmobile') != '1' ){
                            $('#tip_passport_bindmobile_masker').show();
                            return false;
                        }
                    });
                }
            })();

        }
    })();
</script>

<script>
    window.QYER={uid:[9948056][0]||0};

    window._RATrack = window._RATrack||{
        'platform':'web',
        'channel':'z',
        'page_type':'list',
        'ugc_type':'z_order_list',
        'ugc_content':''
    };
</script>

<link href="css/order/headerfoot_black.min.css"  rel="stylesheet" />
<script src="js/order/headerfoot_black.min.js" async="async"></script>




<div class="q-layer-header">
    <div class="header-inner">
        <a data-bn-ipg="head-logo" href="//www.qyer.com"><img class="logo" src="img/order/logo_116x36.png" width="58" height="18" /></a>
        <div class="nav">
            <ul class="nav-ul">
                <li class="nav-list "><a class="nav-span" href="//place.qyer.com/" data-bn-ipg="head-nav-place" title="穷游目的地">目的地</a></li>
                <li class="nav-list "><a class="nav-span" href="//guide.qyer.com/" data-bn-ipg="head-nav-guide" title="穷游锦囊">锦囊</a></li>
                <li class="nav-list nav-list-layer  ">
                    <a class="nav-span" href="//bbs.qyer.com/" data-bn-ipg="head-nav-community" title="穷游论坛">社区<i class="iconfont icon-jiantouxia"></i></a>
                    <div class="q-layer q-layer-nav q-layer-arrow">
                        <ul>
                            <li class="nav-list-layer">
                                <a href="//bbs.qyer.com" data-bn-ipg="head-nav-bbs" title="穷游论坛"><i class="iconfont icon-bbs1"></i> 旅行论坛 <i class="iconfont icon-jiantouyou"></i></a>
                                <div class="q-layer q-layer-section">
                                    <div class="q-layer">
                                        <div class="section-title">
                                            <a class="more" href="//bbs.qyer.com">全部版块<i class="iconfont icon-jiantouyou"></i></a>
                                            <span>热门版块</span>
                                        </div>


                                                                                                                           <dl class="section-item">
                                             <dt>兴趣小组</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-2" href="//bbs.qyer.com/forum-2-1.html">结伴同游</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-3" href="//bbs.qyer.com/forum-3-1.html">签证</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-22" href="//bbs.qyer.com/forum-22-1.html">旅行摄影</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-88" href="//bbs.qyer.com/forum-88-1.html">潜水俱乐部</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-122" href="//bbs.qyer.com/forum-122-1.html">带孩子旅行</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-49" href="//bbs.qyer.com/forum-49-1.html">明信片</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-100" href="//bbs.qyer.com/forum-100-1.html">旅行购物</a>
                                                                                              </dd>
                                         </dl>
                                                                                  <dl class="section-item">
                                             <dt>穷游欧洲</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-14" href="//bbs.qyer.com/forum-14-1.html">法国/摩纳哥</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-12" href="//bbs.qyer.com/forum-12-1.html">德国</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-16" href="//bbs.qyer.com/forum-16-1.html">英国/爱尔兰</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-15" href="//bbs.qyer.com/forum-15-1.html">瑞士/列支敦士登</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-162" href="//bbs.qyer.com/forum-162-1.html">土耳其</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-25" href="//bbs.qyer.com/forum-25-1.html">挪威/瑞典/芬兰/丹麦/冰岛</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-13" href="//bbs.qyer.com/forum-13-1.html">意大利/梵蒂冈/圣马力诺/马耳他</a>
                                                                                              </dd>
                                         </dl>
                                                                                  <dl class="section-item">
                                             <dt>穷游亚洲</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-52" href="//bbs.qyer.com/forum-52-1.html">台湾</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-57" href="//bbs.qyer.com/forum-57-1.html">日本</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-106" href="//bbs.qyer.com/forum-106-1.html">泰国</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-164" href="//bbs.qyer.com/forum-164-1.html">新加坡</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-165" href="//bbs.qyer.com/forum-165-1.html">斯里兰卡</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-163" href="//bbs.qyer.com/forum-163-1.html">香港/澳门</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-108" href="//bbs.qyer.com/forum-108-1.html">马来西亚/文莱</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-175" href="//bbs.qyer.com/forum-175-1.html">柬埔寨</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-104" href="//bbs.qyer.com/forum-104-1.html">马尔代夫</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-177" href="//bbs.qyer.com/forum-177-1.html">缅甸</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-59" href="//bbs.qyer.com/forum-59-1.html">伊朗</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-103" href="//bbs.qyer.com/forum-103-1.html">印度/孟加拉</a>
                                                                                              </dd>
                                         </dl>
                                                                                  <dl class="section-item">
                                             <dt>穷游美洲</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-54" href="//bbs.qyer.com/forum-54-1.html">加拿大</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-53" href="//bbs.qyer.com/forum-53-1.html">美国</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-168" href="//bbs.qyer.com/forum-168-1.html">中美</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-55" href="//bbs.qyer.com/forum-55-1.html">南美/南极</a>
                                                                                              </dd>
                                         </dl>
                                                                                  <dl class="section-item">
                                             <dt>穷游大洋洲</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-56" href="//bbs.qyer.com/forum-56-1.html">澳大利亚</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-83" href="//bbs.qyer.com/forum-83-1.html">新西兰</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-178" href="//bbs.qyer.com/forum-178-1.html">太平洋海岛</a>
                                                                                              </dd>
                                         </dl>
                                                                                  <dl class="section-item">
                                             <dt>穷游非洲</dt>
                                             <dd>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-173" href="//bbs.qyer.com/forum-173-1.html">东非地区</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-174" href="//bbs.qyer.com/forum-174-1.html">非洲海岛</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-86" href="//bbs.qyer.com/forum-86-1.html">北非地区</a>
                                                                                                  <a data-bn-ipg="index-head-bbs-hotboard-60" href="//bbs.qyer.com/forum-60-1.html">非洲其他国家</a>
                                                                                              </dd>
                                         </dl>
                                         

                                    </div>
                                </div>
                            </li>
                            <li><a href="//ask.qyer.com/" data-bn-ipg="head-nav-ask" title="旅行问答"><i class="iconfont icon-ask1"></i> 旅行问答</a></li>
                            <li><a href="//jne.qyer.com/" data-bn-ipg="head-nav-qlab" title="JNE旅行生活美学" target="_blank"><i class="iconfont icon-jne1"></i> JNE旅行生活美学</a></li>
                            <li><a href="//bbs.qyer.com/forum-2-1.html" data-bn-ipg="head-nav-play" title="结伴同游" target="_blank"><i class="iconfont icon-play"></i> 结伴同游</a></li>
                            <li><a href="//rt.qyer.com/" data-bn-ipg="head-nav-rt" title="负责任的旅行" target="_blank"><i class="iconfont icon-rt1"></i> 负责任的旅行</a></li>
                            <li><a href="//zt.qyer.com/" data-bn-ipg="head-nav-zt" title="特别策划" target="_blank"><i class="iconfont icon-zt"></i> 特别策划</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-list nav-list-plan ">
                    <a class="nav-span" href="//plan.qyer.com/" data-bn-ipg="head-nav-plan" title="穷游行程助手">行程助手</a>
                </li>
                <li class="nav-list nav-list-layer nav-list-zuishijie ">
                    <a class="nav-span" href="//z.qyer.com/" data-bn-ipg="head-nav-lastminute" title="商城">商城<i class="iconfont icon-jiantouxia"></i></a>
                    <div class="gif">
                        <img class="gif1" src="img/order/gif.gif" height="19" width="44" >
                    </div>
                    <div class="q-layer q-layer-nav q-layer-arrow">
                        <ul>
                            <li><a href="//z.qyer.com/package/" data-bn-ipg="head-nav-package" target="_blank" title="机酒自由行"><i class="iconfont icon-package"></i> 机酒自由行</a></li>
                            <li><a href="//z.qyer.com/local/" data-bn-ipg="head-nav-local" target="_blank" title="当地玩乐"><i class="iconfont icon-local"></i> 当地玩乐</a></li>
                            <li><a href="//z.qyer.com/visa/" data-bn-ipg="head-nav-visa" target="_blank" title="签证"><i class="iconfont icon-visa1"></i> 签证</a></li>
                            <li><a href="//z.qyer.com/car/?utm_source=c03729731-pc&utm_medium=partner&utm_campaign=entry&utm_term=qyer_nav" data-bn-ipg="head-nav-car" target="_blank" title="租车自驾"><i class="iconfont icon-car"></i> 租车自驾</a></li>
                            <li><a href="//z.qyer.com/cruise/" data-bn-ipg="head-nav-cruise" target="_blank" title="邮轮"><i class="iconfont icon-cruise"></i> 邮轮</a></li>
                            <li><a href="//bx.qyer.com/" data-bn-ipg="head-nav-insure" target="_blank" title="保险"><i class="iconfont icon-bx"></i> 保险</a></li>
                            <li><a href="//z.qyer.com/travelgroup" data-bn-ipg="head-nav-travelgroup" target="_blank" title="私人订制"><i class="iconfont icon-travelgroup"></i> 私人定制</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-list "><a class="nav-span" href="//flight.qyer.com/" data-bn-ipg="head-nav-plane" title="机票">机票</a></li> 
                <li class="nav-list nav-list-layer nav-list-zuishijie ">
                    <a class="nav-span" href="//hotel.qyer.com/" data-bn-ipg="head-nav-hotel" title="穷游酒店">酒店&middot;民宿 <i class="iconfont icon-jiantouxia"></i></a>
                    <div class="gif">
                        <img class="gif1" src="img/order/gif2.jpg" height="19" width="44" >
                    </div> 
                    <div class="q-layer q-layer-nav q-layer-arrow q-layer-arrow1">
                        <ul>
                            <li><a href="//hotel.qyer.com" data-bn-ipg="head-nav-booking" title="酒店"><i class="iconfont icon-hotel1"></i> 酒店</a></li>
                            <li><a href="//www.qyer.com/goto.php?url=https%3A%2F%2Fwww.airbnbchina.cn%2F%3Faf%3D104561116%26c%3DRESERVATION" data-bn-ipg="head-nav-airbnb" title="爱彼迎" target="_blank"><i class="iconfont icon-airbnb1"></i> 爱彼迎</a></li>
                            <li><a href="//www.qyer.com/shop/" data-bn-ipg="head-nav-shop" title="华人旅馆"><i class="iconfont icon-shop"></i> 华人旅馆</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-list nav-list-layer ">
                    <a class="nav-span" href="//z.qyer.com/explore/" data-bn-ipg="head-nav-explore" title="独家深度">独家深度 <i class="iconfont icon-jiantouxia"></i></a>
                    <div class="q-layer q-layer-nav q-layer-arrow q-layer-arrow1">
                        <ul>
                            <li><a href="//z.qyer.com/zt/leadertour/" data-bn-ipg="head-nav-leadertour" title="特色长线"><i class="iconfont icon-leadertour"></i> 特色长线</a></li>
                            <li><a href="//z.qyer.com/citywalk/" data-bn-ipg="head-nav-citywalk" title="独家日游"><i class="iconfont icon-citywalk"></i> 独家日游</a></li>
                            <li><a href="//z.qyer.com/explore/#qHome" data-bn-ipg="head-nav-qhome" title="Q-Home"><i class="iconfont icon-qhome"></i> Q-Home</a></li>
                        </ul>
                    </div>
                </li>

                <li class="nav-list nav-list-layer">
                    <a class="nav-span" href="//app.qyer.com/guide/" data-bn-ipg="head-nav-app" title="穷游App">穷游App <i class="iconfont icon-jiantouxia"></i></a>
                    <div class="q-layer q-layer-nav q-layer-arrow">
                        <ul>
                            <li><a href="//app.qyer.com/guide/" data-bn-ipg="head-nav-app" title="穷游App"><i class="iconfont icon-qyer"></i> 穷游App</a></li>
                            <li><a href="//app.qyer.com/plan/" data-bn-ipg="head-nav-plan" title="行程助手App"><i class="iconfont icon-planapp"></i> 行程助手App</a></li>
                            <li><a href="//guide.qyer.com/app/" data-bn-ipg="head-nav-guide" title="穷游锦囊App"><i class="iconfont icon-guide"></i> 穷游锦囊App</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fun">
            <div id="siteSearch" class="nav-search">
                <form action="//search.qyer.com/index" method="get">
                    <input class="txt" name="wd" type="text" autocomplete="off">
                    <button class="btn" type="submit"><i class="iconfont icon-sousuo"></i><span>搜索</span></button>
                </form>
            </div>
            <div id="js_qyer_header_userStatus" class="status">
              <div class="login show">
                    <a class="otherlogin-link" href="javascript:;" url="http://zuser.qyer.com/orderList" rel="noflow" data-bn-ipg="index-head-un-qq" data-type="qq"><i class="iconfont icon-qq"></i></a>
                    <a class="otherlogin-link" href="javascript:;" url="http://zuser.qyer.com/orderList" rel="noflow" data-bn-ipg="index-head-un-weibo" data-type="weibo"><i class="iconfont icon-weibo"></i></a>
                    <a class="otherlogin-link" href="javascript:;" url="http://zuser.qyer.com/orderList" rel="noflow" data-bn-ipg="index-head-un-wechat" data-type="weixin"><i class="iconfont icon-weixin"></i></a>

                    <a href="https://passport.qyer.com/register/mobile?ref=http%3A%2F%2Fzuser.qyer.com%2ForderList" data-bn-ipg="index-head-un-register">注册</a>
                    <a href="https://passport.qyer.com/login?ref=http%3A%2F%2Fzuser.qyer.com%2ForderList" data-bn-ipg="index-head-un-login">登录</a>
              </div>
            </div>
        </div>
    </div>
</div>

<!--token:d41d8cd98f00b204e9800998ecf8427e-->

    <!-- 公共头部 -->
<link rel="stylesheet" type="text/css" href="css/order/newheader.css">
<div class="zw-header" id="zw-header">
	<div class="zw-header-search-white">
	<div class="zw-header-search-wrap" id="zw-header-search-wrap">
		<div class="zw-header-search-unit">
			<p class="zw-header-logo">
					<a href="//z.qyer.com/" data-bn-ipg="zsj-nav-index">
						穷游商城
					</a>
			</p>
			<div class="zw-header-searchs" id="zwheadSearchs">
				<form action="//z.qyer.com/" method="get">
					<input type="hidden" name="action" value="list">
															<div class="ipts">
					<p class="icons"><span class="zwui-iconfont icon-search"></span></p>
					<input type="text" name="keyword" value="" placeholder="搜索国家、城市、产品" autocomplete="off" class="iptext" id="zwheadSearchText"></div>
				</form>
			</div>
			<div class="link-unit">
				<a class="link-unit-item myorder" href="//www.qyer.com/u/lm-order" title="" target="_blank" data-bn-ipg="zsj-myorder">
					<i class="zwui-iconfont icon-order"></i>
					<span class="link-unit-item-text">我的订单</span>
				</a>
				<a class="link-unit-item collect" href="//www.qyer.com/u/lastmin" title="" target="_blank" data-bn-ipg="zsj-fav">
					<i class="zwui-iconfont icon-Collect"></i>
					<span class="link-unit-item-text">我的收藏</span>
				</a>
			</div>
		</div>
	</div>
	</div>
	<div class="zw-header-wrap">
		<table class="zw-header-nav" id="zw-header-nav">
						<td class="hot-des" id="zw-header-hotdes">
				<a class="hot-des-wrap" href="javascript:;">
					<span>热门目的地</span>
					<span class="zwui-iconfont icon-more2"></span>
				</a>
				<!-- 热门类目 -->
				<div class="hot-des-category" id="zwCategory">
					<div class="placeholder"></div>
				</div>
				<!-- 热门类目 end -->
			</td>
						<td><a href="//z.qyer.com" data-bn-ipg="zsj-nav-home">首页</a></td>
			<td ><a href="//z.qyer.com/package/" data-bn-ipg="zsj-nav-package">机酒自由行</a></td>
			<td ><a href="//z.qyer.com/local/" data-bn-ipg="zsj-nav-local">当地玩乐<em class="tag"><img src="//common1.qyerstatic.com/zworld/web/project/index/images/wanletag.gif" width="37" height="12"></em></a></td>
			<td><a href="//z.qyer.com/all_0_0_0_0_158,145_0_0/?_channel=freetour&_type=channel" data-bn-ipg="zsj-nav-plane">特价机票</a></td>
			<td ><a href="//z.qyer.com/visa/" data-bn-ipg="zsj-nav-visa">签证</a></td>
			<td ><a href="//z.qyer.com/cruise/" data-bn-ipg="zsj-nav-cruise">邮轮</a></td>
			<td ><a href="//z.qyer.com/car/?utm_source=c03729731-pc&utm_medium=partner&utm_campaign=entry&utm_term=z_nav" data-bn-ipg="zsj-nav-car">租车自驾</a></td>
			<td ><a href="//z.qyer.com/island/" data-bn-ipg="zsj-nav-island">热销海岛<em class="tag"><img src="//common1.qyerstatic.com/zworld/web/project/index/images/icon_ys.gif" width="37" height="12"></em></a></td>
						<td ><a href="//z.qyer.com/sales/" data-bn-ipg="zsj-nav-sales">限时特卖</a></td>
			<td ><a href="//z.qyer.com/explore/" data-bn-ipg="zsj-nav-explore">深度旅行<em class="tag"><img src="//common1.qyerstatic.com/zworld/web/project/index/images/explore.gif" width="37" height="12"></em></a></td>
		</table>
	</div>
</div>
<script type="text/javascript" src="js/order/newheader.js" async="async"></script>
<!-- 公共头部 end -->

<!--
	作者：630569266@qq.com
	时间：2017-11-14
	描述：个人信息
-->
<div class="order-list">
<div class="order-user-info">
    <div class="user-info-left">
        <a class="head-link" href="//www.qyer.com/u/9948056"><img class="user-head-pic" src="img/order/touxiang.jpg"></a>
        <div class="user-head-info">
            <p class="user-head-name">你来啦</p>
            <!-- <p class="user-head-gender"></p> -->
            <p class="user-head-lv">
                <span class="first">等级<i><a href="//www.qyer.com/u/9948056/level">新进弟子</a></i></span>
                <span>穷币<i><a href="//www.qyer.com/u/9948056/level">11</a></i></span>
            </p>
        </div>
    </div>
    <div class="user-info-right">
        <ul class="user-nav">
            <li class="user-nav-cell"><a href="//www.qyer.com/u/9948056">首页</a></li>
            <li class="user-nav-cell active"><a href="//www.qyer.com/u/lm-order/">我的订单</a></li>
            <li class="user-nav-cell"><a href="//www.qyer.com/u/promocode">我的优惠券</a></li>
            <li class="user-nav-cell"><a href="//www.qyer.com/u/lastmin">收藏和提醒</a></li>
        </ul>
    </div>
</div>            
<ul class="order-nav">
    <li class="order-nav-cell active">穷游商城订单</li>
    <li class="order-nav-cell"><a href="//www.qyer.com/u/order/">华人旅馆订单</a></li>
</ul>
       <!--
       	作者：630569266@qq.com
       	时间：2017-11-14
       	描述：订单描述
       --> 
<div class="order-list-unit">
    <ul class="order-list-title">
        <li class="li-cell li-cell1">名称</li>
        <li class="li-cell li-cell2">产品类型</li>
        <li class="li-cell li-cell3">供应商</li>
        <li class="li-cell li-cell4">联系电话</li>
        <li class="li-cell li-cell5">数量</li>
        <li class="li-cell li-cell6">总额</li>
        <li class="li-cell li-cell7">状态</li>
        <li class="li-cell li-cell8">操作</li>
    </ul>
    <div class="order-list-line">
        <ul class="order-list-line-head">
            <li class="order-list-line-head-cell order-num">订单编号：<a href="//zuser.qyer.com/orderdetail/2096574284/" target="_blank">QYER2096574284</a></li>
            <li class="order-list-line-head-cell">提交订单时间：2017-11-14 23:07:19</li>
        </ul>
        <ul class="order-list-line-body">
            <li class="order-list-line-body-cell li-cell1"><a href="//z.qyer.com/deal/94410/" target="_blank">【元旦/寒假/春节】上海/杭州/南京直飞曼谷6-7天往返含税机票（特价预售至18年春节+含免费行李额+4人起定赠送拼车接机）</a></li>
            <li class="order-list-line-body-cell li-cell2">【元旦/春节】杭州直飞曼谷6天往返含税机票</li>
            <li class="order-list-line-body-cell li-cell3">东尚旅游</li>
            <li class="order-list-line-body-cell li-cell4">
                <p>客服电话：</p>
                <p>15983266767</p>
                </li>
            <li class="order-list-line-body-cell li-cell5">
                                数量 x 1                            </li>
            <li class="order-list-line-body-cell li-cell6">
                <p>¥2199.00</p>
            </li>
            <li class="order-list-line-body-cell li-cell7">
                                                        <p class="state-common">等待支付</p>
                                                </li>
            <li class="order-list-line-body-cell li-cell8">
                                                        <a class="go-pay" href="//z.qyer.com/orderform.php?action=lastminuteorderformpay&id=2096574284" target="_blank">立即支付</a>
                                                            
                                        
                                    
                <a href="//zuser.qyer.com/orderdetail/2096574284/" target="_blank">查看订单</a>
                
                                <a class="cancelOrderBtn" href="javascript:;" data-lname="【元旦/寒假/春节】上海/杭州/南京直飞曼谷6-7天往返含税机票（特价预售至18年春节+含免费行李额+4人起定赠送拼车接机）" data-api="//zuser.qyer.com/index.php?action=ajaxCancel&orderid=2096574284">取消订单</a>
                            
                                            </li>
        </ul>
    </div>
    <div class="order-list-line">
    <ul class="order-list-line-head">
        <li class="order-list-line-head-cell order-num">订单编号：<a href="//zuser.qyer.com/orderdetail/2096516956/" target="_blank">QYER2096516956</a></li>
        <li class="order-list-line-head-cell">提交订单时间：2017-11-14 12:33:46</li>
                </ul>
    <ul class="order-list-line-body">
        <li class="order-list-line-body-cell li-cell1"><a href="//z.qyer.com/deal/53186/" target="_blank">【秒杀】香港太平山+摩天台+杜莎夫人蜡像馆观夜景半日游(2人成团)</a></li>
        <li class="order-list-line-body-cell li-cell2">【秒杀】成人价</li>
        <li class="order-list-line-body-cell li-cell3">穷游城市玩乐</li>
        <li class="order-list-line-body-cell li-cell4">
            <p>客服电话：</p>
            <p>4000420088</p>
            </li>
        <li class="order-list-line-body-cell li-cell5">
                            数量 x 1                            </li>
        <li class="order-list-line-body-cell li-cell6">
            <p>¥191.00</p>
        </li>
        <li class="order-list-line-body-cell li-cell7">
                                                    <p class="state-common">已取消</p>
                                            </li>
        <li class="order-list-line-body-cell li-cell8">
                                                                        
                                    
                                
            <a href="//zuser.qyer.com/orderdetail/2096516956/" target="_blank">查看订单</a>
            
                        
                                        </li>
    </ul>
	</div>
        <div class="pager-wrap clearfix"></div>
</div>
<!--
       	作者：630569266@qq.com
       	时间：2017-11-14
       	描述：订单描述end
       --> 
</div>
<!--
       	作者：630569266@qq.com
       	时间：2017-11-14
       	描述：个人信息描述结束
      --> 
      
    <link rel="stylesheet" type="text/css" href="css/order/sidefloater.css">
    <script type="text/javascript" src="js/order/sidefloater.js"></script>
    
<!-- 右侧浮动 -->
<div class="zw-module-sidefloater-wrap">
	<!-- <a class="zw-module-sidefloater-cell personalcenter" title="" data-bn-ipg="zsj-ucenter">
		<i class="zwui-iconfont icon-PersonalCenter"></i>
	</a> -->
	<a class="zw-module-sidefloater-cell myorder" href="//www.qyer.com/u/lm-order" title="" target="_blank" data-bn-ipg="zsj-myorder">
		<i class="zwui-iconfont icon-order"></i>
		<span class="sidefloater-cell-text">订单</span>
		<!-- <div class="sidefloater-cell-text">
			<p class="sidefloater-cell-text-inner">
				<span>我的</span>
				<span>订单</span>
			</p>
		</div> -->
	</a>
	<a class="zw-module-sidefloater-cell collect" href="//www.qyer.com/u/lastmin" title="" target="_blank" data-bn-ipg="zsj-fav">
		<i class="zwui-iconfont icon-Collect"></i>
		<span class="sidefloater-cell-text">收藏</span>
		<!-- <div class="sidefloater-cell-text">
			<p class="sidefloater-cell-text-inner">
				<span>我的</span>
				<span>收藏</span>
			</p>
		</div> -->
	</a>
	<span class="zw-module-sidefloater-cell app">
		<i class="zwui-iconfont icon-iphone01"></i>
		<span class="sidefloater-cell-text">APP</span>
		<div class="sidefloater-app-qrcode">
			<img src="img/order/erweima.png">
			<p>立刻扫描<br>下载APP</p>
		</div>
	</span>
	<div id="gototop" class="zw-module-sidefloater-cell totop" data-bn-ipg="zsj-top">
		<i class="zwui-iconfont icon-top"></i>
		<span class="sidefloater-cell-text">TOP</span>
	</div>
</div>
<!-- 右侧浮动 end -->


    <!-- 公共尾部 1-->
<link rel="stylesheet" type="text/css" href="css/order/footer.css">

<div class="zw-footerprepend">
	<ul class="zw-footer-nav">
		<li><a href="//z.qyer.com/package/" data-bn-ipg="zsj-nav-bot-package">机酒自由行</a></li>
		<li><a href="//z.qyer.com/local/" data-bn-ipg="zsj-nav-bot-local">当地玩乐</a></li>
		<li><a href="//z.qyer.com/all_0_0_0_0_158,145_0_0/?_channel=freetour&_type=channel" data-bn-ipg="zsj-nav-bot-plane">特价机票</a></li>
		<li><a href="//z.qyer.com/visa/" data-bn-ipg="zsj-nav-bot-visa">签证</a></li>
		<li><a href="//z.qyer.com/cruise/" data-bn-ipg="zsj-nav-bot-cruise">邮轮</a></li>
		<li><a href="//z.qyer.com/car/" data-bn-ipg="zsj-nav-car">租车自驾</a></li>
		<li><a href="//z.qyer.com/island/" data-bn-ipg="zsj-nav-bot-island">热销海岛</a></li>
		<li><a href="//z.qyer.com/travelgroup?campaign=zsj&category=locnav-hot" data-bn-ipg="zsj-nav-bot-travelgroup">私人定制</a></li>
		<li><a href="//z.qyer.com/sales/" data-bn-ipg="zsj-nav-bot-sales">限时特卖</a></li>
		<li><a href="//z.qyer.com/explore/" data-bn-ipg="zsj-nav-bot-explore">深度旅行</a></li>
		<!-- <li><a href="//z.qyer.com/zt/leadertour/" data-bn-ipg="zsj-nav-bot-leadertour">特色线路</a></li> -->
		<!-- <li><a href="//z.qyer.com/citywalk/" data-bn-ipg="zsj-nav-bot-citywalk">CityWalk</a></li> -->
		<!-- <li><a href="//z.qyer.com/discover/" data-bn-ipg="zsj-nav-bot-discover">发现城市</a></li> -->
	</ul>
	<ul class="zw-footer-feature">
		<li>
			<p class="icon zybz"></p>
			<h3 class="title">专业保证</h3>
			<p class="text">我们收集穷游er的真实诉求，也找寻全世界最独特的旅行目的地，让更多的穷游er轻松出行</p>
		</li>
		<li>
			<p class="icon dcsh"></p>
			<h3 class="title">多重审核</h3>
			<p class="text">对旅游产品供应商严格筛选，资质认证层层把关，为穷游er精挑细选最值得信赖的旅行产品</p>
		</li>
		<li>
			<p class="icon axph"></p>
			<h3 class="title">安心陪护</h3>
			<p class="text">对所有穷游er的购买进行跟踪服务以及质量监控，有效投诉先行赔付，出现任何问题负责到底</p>
		</li>
	</ul>
</div>

<!-- 公共尾部2 -->
<div class="zw-footer">
	<div class="zw-footer-wrap">
		<div class="zw-footer-line1 clearfix">
			<div class="zw-footer-intro">
				<p class="logo">
					穷游商城
				</p>
				<p class="text">从一张机票、一家酒店的订购，到一次暖心的接机服务、一张轻松融入当地的交通卡，让我们带你探索这个世界</p>
			</div>
			<div class="zw-footer-concerns-bar">
				<dl class="zw-footer-concerns">
					<dt>关注我们</dt>
					<!-- <dd class="iphone">
						<p class="icons"><span class="zwui-iconfont icon-iphone"></span></p>
						<div class="layer">
							<div class="box">
								<div class="clearfix">
								<p class="pics"><img src="//common1.qyerstatic.com/zworld/web/project/headfoot/images/foot-qrcode-app.jpg"></p>
								<div class="text">
									<p class="txt1">扫一扫下载</p>
									<p class="txt2">穷游商城</p>
									<p class="txt3">APP</p>
								</div>
								</div>
							</div>
						</div>
					</dd> -->
					<dd class="wechat">
						<p class="icons"><span class="zwui-iconfont icon-wechat"></span></p>
						<div class="layer">
							<div class="box">
								<div class="clearfix">
								<p class="pics"><img src="img/order/erweima.png" width="90" height="90"></p>
								<div class="text">
									<p class="txt1">扫一扫关注</p>
									<p class="txt2">穷游折扣</p>
									<p class="txt3">微信</p>
								</div>
								</div>
							</div>
						</div>
					</dd>
					<dd class="weibo">
						<p class="icons"><span class="zwui-iconfont icon-weibo"></span></p>
						<div class="layer">
							<div class="box">
								<div class="clearfixs">
								<a href="//weibo.com/zuishijie2015" target="_blank" class="follow">+ 关注</a>
								<span class="text"><a href="//weibo.com/lastminuteexpress" target="_blank">@穷游折扣</a></span>
								</div>
							</div>
						</div>
					</dd>
					<dd class="mail">
						<p class="icons"><span class="zwui-iconfont icon-mail"></span></p>
						<div class="layer">
							<div class="box">
								<form action="//user.qyer.com/subscibe.php" method="get" target="_blank">
								<input type="text" name="email" value="" placeholder="请输入Email" class="iptext"><input type="submit" value="订阅" class="iptsbm">
								</form>
							</div>
						</div>
					</dd>
				</dl>
				<dl class="zw-footer-concerns-app clearfix">
					<dt>立刻扫描<br>下载APP</dt>
					<dd class="iphone">
						<img src="img/order/erweima.png" width="70" height="70">
					</dd>
				</dl>
			</div>
		</div>
		<div class="zw-footer-line2">
			<div class="zw-footer-link">
				<a class="item" href="//z.qyer.com/info/about">关于穷游商城</a><span class="separator">|</span>
				<a class="item" href="//z.qyer.com/info/service">服务与隐私</a><span class="separator">|</span>
				<a class="item" href="//z.qyer.com/info/contact">联系我们</a><span class="separator">|</span>
				<a class="item" href="//z.qyer.com/info/qualification">旅游度假资质</a><span class="separator">|</span>
				<a class="item" href="//z.qyer.com/info/license">营业执照</a><span class="separator">|</span>
				<a class="item" href="//z.qyer.com/info/suggestion">投诉建议</a>
			</div>
			<div class="zw-footer-listlinks">2004-2017 © 穷游网™ qyer.com All rights reserved. Version v5.57  京ICP备12003524号  京公网安备11010502023470  京ICP证140673号</div>
					</div>
	</div>
</div>
<!-- 公共尾部 end -->









<script>
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.async = true;
        script.src   = "//static.qyer.com/qyer_ui_frame/m/js/dist/base_beacon_ga.js";
        document.getElementsByTagName("head")[0].appendChild(script);
</script>
</body>

</html>