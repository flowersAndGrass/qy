<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>你来啦的行程单-穷游网</title>
<meta name="keywords" content="" />
<meta name="description" content="你来啦的行程单-穷游网" />
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta http-equiv="mobile-agent" content="format=html5; url=//m.qyer.com/u/9948056/plan/" /><meta http-equiv="Cache-Control" content="no-transform" /><link rel="shortcut icon" href="//www.qyer.com/favicon.ico" />
<script>
window.QYER = {
    uid:[0][0]|0
};
window.__qRequire__ = {
    version: '1510655017',
    combineCSS: []
};
</script>

<link rel="stylesheet" href="css/travelall/base.css">
<link rel="stylesheet" href="css/travelall/plan.css">
	<script src="js/travelall/basejs.js"></script>

<script src="js/travelall/plan.js"></script>
</head>
<body>










<style>
    .tip-passport-bindmobile-layer {display: none;position: fixed;z-index: 2000;top: 0;left: 0;width: 100%;height: 100%;background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlOzEo46UAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=');}
    .tip-passport-bindmobile-dialog{box-sizing: border-box; width: 500px; height: 190px; border: solid 1px #c0c0c0; background-color: #fff; box-shadow: 0 0 10px #ccc; position: absolute; top: 50%; left: 50%; margin: -95px 0 0 -250px; padding: 20px;color: #323232;}
    .tip-passport-bindmobile-dialog-close {position:absolute;top:24px;right:24px; width: 18px; height: 18px; cursor:pointer; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAFVBMVEUAAAC/v7++vr6/v7+/v7+/v7+/v7+/wuQ3AAAABnRSTlMAENDPMPDQGjwYAAAAdElEQVQoz63SsQ2AIBBAUUwc4KIT2NjTWNuwARPo/jtoIPm/oeSaI+Q1n5Dmzhqel7utkr3aa1vbG6Dr6PvMoCcSTAQTwUAykQwkE8lAMpAMJANZR6l1llJHKSgoBVEq8kFEMBEMJBPJRDKRrPwIVkcfYOp8Ck0Wc2Mad8EAAAAASUVORK5CYII=') center center / cover no-repeat;}
    .tip-passport-bindmobile-dialog-title {font-size: 18px;}
    .tip-passport-bindmobile-dialog-text { margin-top: 10px; font-size: 14px;}
    .tip-passport-bindmobile-dialog-btn { padding-top:20px; text-align: center;}
    .tip-passport-bindmobile-dialog-btn a {box-sizing: border-box;width:160px;height:40px;line-height:40px;display:inline-block;font-size:14px;color:#fff;text-decoration:none;background-color:#3ba05c;cursor:pointer;border-radius:3px;}
    .tip-passport-bindmobile-dialog-btn a:hover{background-color:#47c571;}
</style>
<div id="tip_passport_bindmobile_layer" class="tip-passport-bindmobile-layer">
    <div class="tip-passport-bindmobile-dialog">
        <span id="tip_passport_bindmobile_dialog_close" class="tip-passport-bindmobile-dialog-close"></span>
        <h5 class="tip-passport-bindmobile-dialog-title">帐号安全提示</h5>
        <p class="tip-passport-bindmobile-dialog-text">即日起穷游网将实行手机绑定实名制，绑定手机后就可以正常使用穷游的写帖、创建行程、点评、足迹、问答等功能。</p>
        <div class="tip-passport-bindmobile-dialog-btn">
            <a href="//passport.qyer.com/account/mobile/bind">立即绑定</a>
        </div>
    </div>
</div>
<script>
    window.__userStatusCallBack = function (data) {
        if(data.uid && data.userinfo.bind_phone != 1){
            var $layer = $('#tip_passport_bindmobile_layer')
            $layer.show()
            $('#tip_passport_bindmobile_dialog_close').on('click', function() {
                $layer.hide()
            })
        }
    }
</script>

<script>
    window.QYER={uid:[0][0]||0};

    window._RATrack = window._RATrack||{
        'platform':'web',
        'channel':'user',
        'page_type':'list',
        'ugc_type':'user_plan',
        'ugc_content':''
    };
</script>

<link href="css/travelall/headerfoot_black.min.css"  rel="stylesheet" />
<script src="js/travelall/headerfoot_black.min.js" async="async"></script>




<div class="q-layer-header">
    <div class="header-inner">
        <a data-bn-ipg="head-logo" href="//www.qyer.com"><img class="logo" src="img/travelall/logo_116x36.png" width="58" height="18" /></a>
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
                        <img class="gif1" src="//static.qyer.com/models/common/component/headfoot/icon/gif.gif" height="19" width="44" >
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
                        <img class="gif1" src="//static.qyer.com/models/common/component/headfoot/icon/gif2.jpg" height="19" width="44" >
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
                    <a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9948056/plan" rel="noflow" data-bn-ipg="index-head-un-qq" data-type="qq"><i class="iconfont icon-qq"></i></a>
                    <a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9948056/plan" rel="noflow" data-bn-ipg="index-head-un-weibo" data-type="weibo"><i class="iconfont icon-weibo"></i></a>
                    <a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9948056/plan" rel="noflow" data-bn-ipg="index-head-un-wechat" data-type="weixin"><i class="iconfont icon-weixin"></i></a>

                    <a href="https://passport.qyer.com/register/mobile?ref=http%3A%2F%2Fwww.qyer.com%2Fu%2F9948056%2Fplan" data-bn-ipg="index-head-un-register">注册</a>
                    <a href="https://passport.qyer.com/login?ref=http%3A%2F%2Fwww.qyer.com%2Fu%2F9948056%2Fplan" data-bn-ipg="index-head-un-login">登录</a>
              </div>
            </div>
        </div>
    </div>
</div>

<!--token:d41d8cd98f00b204e9800998ecf8427e--><!--头部 -->
<div class="u_headbar">
    <div class="infos">
        <!--用户图像 -->
        <div class="face"><a href="//www.qyer.com/u/9948056"><img src="img/travelall/touxiang.jpg" /></a></div>
        <!--用户名字 -->
        <h3 class="name">
            <strong data-bn-ipg="usercenter-username" class="fontYaHei">你来啦</strong>
                                            </h3>
        <!--用户信息 -->
        <div class="text fontSong">
            等级：<a data-bn-ipg="usercenter-grade" href="//www.qyer.com/u/9948056/level" class="fb cBlue pr20">1袋长老</a>
                                </div>

            </div>
    <!--个人中心导航 -->
    <div class="menu clearfix">
                            <ul class="fontSong">
                    <li data-bn-ipg="usercenter-tab-home" ><a href="//www.qyer.com/u/9948056" class="a_list">首页</a></li>
                    <li data-bn-ipg="usercenter-tab-footprint"  >
                        <a href="//www.qyer.com/u/9948056/footprint" class="a_list">足迹与点评</a>
                                            </li>
                                        <li data-bn-ipg="usercenter-tab-thread"  ><a href="//www.qyer.com/u/9948056/travel" class="a_list">帖子</a></li>
                    <!--
                    <li data-bn-ipg="usercenter-tab-album" ><a href="//www.qyer.com/pictrip/9948056/" class="a_list">照片</a></li>
                    -->
                    <li data-bn-ipg="usercenter-tab-album" ><a href="//photo.qyer.com/enter9948056" class="a_list">照片</a></li>
                    <li data-bn-ipg="usercenter-tab-ask" ><a href="//www.qyer.com/u/9948056/ask" class="a_list">问答</a></li>
                    <li data-bn-ipg="usercenter-tab-plan" class="current"><a href="//www.qyer.com/u/9948056/plan" class="a_list">行程计划</a></li>
                    <li data-bn-ipg="usercenter-tab-order" ><a href="//www.qyer.com/u/lm-order/" class="a_list">商城订单</a></li>
                    <li class="more_select">
                        <a href="javascript:void(0);" class="a_list"><span>更多</span></a>
                        <div class="more_item">
                            <a data-bn-ipg="usercenter-tab-footprint" href="//www.qyer.com/u/9948056/mguide">微锦囊</a>
                                                        <!-- <a data-bn-ipg="usercenter-tab-medal"  href="http://www.qyer.com/u/9948056/badgegalary">勋章</a> -->
                        </div>
                    </li>
                </ul>
                                <a data-bn-ipg="usercenter-profile" href="//www.qyer.com/u/9948056/profile" class="data">个人资料</a>
                                </div>
</div>
<!--头部 -->

<script>
/**
 * 认证头像图标tip
 */
$(function (){
if (typeof requirejs !== 'undefined'){
    requirejs(['web_old_tooltips'], function (){
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    });
}
});
</script>
<style>
.bbs_planItinerary{
    background-color: #9bd1f0;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    padding: 1px 5px;
    vertical-align: text-bottom;
}
</style>

<div class="u_plan_cnt clearfix">
    <!--侧边栏 -->
    <div class="u_plan_bar">
        <!--数量统计 -->
        <div class="u_plan_number">
            <span class="tag none_line"><strong>7</strong>行程计划</span>
            <span class="tag"><strong>1</strong>被复制</span>
        </div>
        <div class="mt20">
          <div class="ad_zone" id="zoneid-87"></div>
            <!-- <iframe id='a28aa5fd' name='a28aa5fd' src='//ad.qyer.com/www/delivery/afr.php?zoneid=460&cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='270' height='370'><a href='//ad.qyer.com/www/delivery/ck.php?n=a2258859&cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='//ad.qyer.com/www/delivery/avw.php?zoneid=460&cb=INSERT_RANDOM_NUMBER_HERE&n=a2258859' border='0' alt='' /></a></iframe> -->
        </div>
    </div>
    <!--内容 -->
    <div class="u_plan_main">

        <div class="title clearfix">
            <div class="tag fontYaHei" data-tr="0">
                <a href="javascript:void(0);"  class="current" >TA的行程计划<span>7</span></a>

                            </div>
                    </div>

          
            <div class="content">
                    <div class="item n_border" planid="12691146">
                        <div class="cnt_all">
                            <a  href="//plan.qyer.com/trip/V2UJYVFgBz9TZVI-CmgNOA/"  class="img" target="_blank"  data-bn-ipg="usercenter-plan-list-pic" ><img src="//static.qyer.com/album//500" 
                                width="269.6969" height="178" alt="" onerror="this.src='//static.qyer.com/images/place/no/poi_178_178.png'"/></a>
                            <h3><a  href="//plan.qyer.com/trip/V2UJYVFgBz9TZVI-CmgNOA/"  target="_blank"  data-bn-ipg="usercenter-plan-list-title" >你来啦的意大利行程</a>
                                    <span class="tag_wrap">
                                                                        </span>
                                </h3>
                                

                                <span class="fontSong cGray">
                                                                                                                                                                                                                                                            </span>
                            <div class="tagName">
                                                            </div>

                            <a  href="//plan.qyer.com/trip/V2UJYVFgBz9TZVI-CmgNOA/" ><p class="xc_day"><span>2</span>天</p></a>
         
                            <p class="xc_city">厦门 · 佛罗伦萨 · 厦门</p>
                                                        <div class="clearfix mt10 planstatus">
                                <span class="copy">
                                    <em class="tag_icon"></em><a href="javascript:void(0);" class="copy _jscopyplanlist" data-id="12691146"  data-bn-ipg="usercenter-plan-copy" >复制行程</a>
                                </span>
                                <span class="vline">|</span>

                                                                <span class="browser">
                                    <em class="tag_icon"></em><a href="//plan.qyer.com/trip/V2UJYVFgBz9TZVI-CmgNOA/" target="_blank">预览</a>
                                </span>
                                <span class="vline">|</span>
                                
                                                            </div>
                            <div class="clear"></div>
                        </div>
                	</div>
                    
                               <div class="item n_border" planid="12688516">
                        <div class="cnt_all">
                            <a  href="//plan.qyer.com/trip/V2UJYVFgBz5TbFI6Cm0NOA/"  class="img" target="_blank"  data-bn-ipg="usercenter-plan-list-pic" ><img src="https://pic1.qyer.com/album/user/1501/43/QExVQx4EZUg/index/500" 
                                width="269.6969" height="178" alt="" onerror="this.src='//static.qyer.com/images/place/no/poi_178_178.png'"/></a>
                            <h3><a  href="//plan.qyer.com/trip/V2UJYVFgBz5TbFI6Cm0NOA/"  target="_blank"  data-bn-ipg="usercenter-plan-list-title" >你来啦的北京-广州行程</a>
                                    <span class="tag_wrap">
                                                                        </span>
                                </h3>
                                

                                <span class="fontSong cGray">
                                                                                                                                                                                                                                                            </span>
                            <div class="tagName">
                                                            </div>

                            <a  href="//plan.qyer.com/trip/V2UJYVFgBz5TbFI6Cm0NOA/" ><p class="xc_day"><span>5</span>天</p></a>
         
                            <p class="xc_city">厦门 · 北京 · 广州 · 厦门</p>
                                                        <div class="clearfix mt10 planstatus">
                                <span class="copy">
                                    <em class="tag_icon"></em><a href="javascript:void(0);" class="copy _jscopyplanlist" data-id="12688516"  data-bn-ipg="usercenter-plan-copy" >复制行程</a>
                                </span>
                                <span class="vline">|</span>

                                                                <span class="browser">
                                    <em class="tag_icon"></em><a href="//plan.qyer.com/trip/V2UJYVFgBz5TbFI6Cm0NOA/" target="_blank">预览</a>
                                </span>
                                <span class="vline">|</span>
                                
                                                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    
                    
                    
                    
                                    </div>

            <div id="jsplans_del_confirm" style="display:none;">
                    <div style="padding:20px;">
                        <p class="mb30 cRed_caution f14 mt10 j_del_msg">确认要删除此行程吗？删除后将永远无法恢复</p>
                        <p class="clearfix">
                            <input type="button" class="ui_button fr j_button_ok" value="确定删除">
                            <input type="button" class="ui_button_cancel fr mr10" value="取消" onclick="qyerUI.popup.pupclose();">
                        </p>
                    </div>
            </div>


            <div id="jsplans_exit_confirm" style="display:none;">
                    <div style="padding:20px;">
                        <p class="mb30 cRed_caution f14 mt10 j_del_msg">确认要退出此行程吗？</p>
                        <p class="clearfix">
                            <input type="button" class="ui_button fr exit_button_ok" plan_id=""   value="退出">
                            <input type="button" class="ui_button_cancel fr mr10" value="取消" onclick="qyerUI.popup.pupclose();">
                        </p>
                    </div>
            </div>




                            <!-- 相关问答seo -->
        <!--相关问答-->
<style>
.contact-ask{
  color: #636363;
}
.contact-ask-title{
  margin: 36px 0 16px 0;
  font-size: 18px;
  color: #636363;
}
.contact-ask-list{
  padding: 18px 16px;
  background: #fafafa;
  overflow: hidden;
}
.contact-ask-item {
  float: left;
  width: 33.3%;
  margin: 6px 0;
}
.contact-ask-anchor{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #636363;
}
.contact-ask-anchor:before {
  content: '';
  margin-right: 6px;
  width: 2px;
  height: 2px;
  display: inline-block;
  background: #636363;
  border-radius: 50%;
  vertical-align: 3px;
}
</style>
<div class="contact-ask">
  <h3 class="contact-ask-title">相关问答</h3>
  <ul class="contact-ask-list">
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/1412099.html" target="_blank">请教目前HK周大福的金价是多少?</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2324847.html" target="_blank">波哥大Beautiful Duplex at Candelaria怎么样？</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2521604.html" target="_blank">米德尔堡One-Bedroom Apartment in Starigrad-Paklenica I怎么样？</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2734135.html" target="_blank">绿河市有什么纪念品</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2764471.html" target="_blank">利巴诺伊有什么好玩的</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2975013.html" target="_blank">求教,桃园市原住民文化會館每天几点开门？</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3382091.html" target="_blank">巨人之路一日团</a></li>
            <li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3456795.html" target="_blank">想去济州岛但机票为什么都是转机</a></li>
        </ul>
</div>
    </div>
</div>

<script>
$(function (){
    function conHeight($obj){
        $obj.css('min-height', $(window).height() - 391);
    }
    conHeight($('.u_plan_cnt'));
    $(window).resize(function (){
        conHeight($('.u_plan_cnt'));
    });
})
</script>
<div style="display: none;">http://www.qyer.com/u/9948056</div>
<div class="qyer_footer">
	<div class="topline"></div>
	<div class="content">
		<p class="nav">
			<a href="//www.qyer.com/htmlpages/about.html" target="_blank" rel="nofollow" data-bn-ipg="foot-about-1">穷游简介</a>
			<a href="//www.qyer.com/partner/" target="_blank" rel="nofollow" data-bn-ipg="foot-about-3">合作伙伴</a>
			<a href="//www.qyer.com/job/" target="_blank" rel="nofollow" data-bn-ipg="foot-join-1">加入我们</a>
			<a href="//site.qyer.com/tyro/" target="_blank" rel="nofollow" data-bn-ipg="foot-help-1">新手上路</a>
			<a href="//bbs.qyer.com/forum-10-1.html" target="_blank" rel="nofollow" data-bn-ipg="foot-help-2">使用帮助</a>
			<a href="//www.qyer.com/sitemap.html" target="_blank" data-bn-ipg="foot-help-4">网站地图</a>
			<a href="//www.qyer.com/htmlpages/member.html" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-1">会员条款</a>
			<a href="//www.qyer.com/htmlpages/bbsguide.html" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-2">社区指南</a>
			<a href="//www.qyer.com/htmlpages/copyright.html" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-3">版权声明</a>
			<a href="//www.qyer.com/htmlpages/exemption.html" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-4">免责声明</a>
			<a href="//www.qyer.com/htmlpages/contact.html" target="_blank" rel="nofollow" data-bn-ipg="foot-about-2">联系我们</a>
		</p>
		<p class="info">
			2004-2017 &copy; 穷游网&reg;  qyer.com All rights reserved. Version v5.57  京ICP备12003524号  京公网安备11010102001935号  京ICP证140673号
			<a target="_blank" style="color:inherit;" href="//static.qyer.com/images/yyzz.jpg">营业执照</a>
			<a target="_blank" style="color:inherit;" href="//static.qyer.com/images/jyxkz.jpg">经营许可证</a>
		</p>
    
        <!--友情链接模块-->
        
	</div>
</div>



<script>
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.async = true;
        script.src   = "//static.qyer.com/qyer_ui_frame/m/js/dist/base_beacon_ga.js";
        document.getElementsByTagName("head")[0].appendChild(script);
</script>



</body>
</html>