<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>修改我的个人资料 </title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
	<!--title图标-->
    <link rel="shortcut icon" href="//www.qyer.com/favicon.ico" />
	<script>
		window.QYER = {
			uid: [9951706][0] | 0
		};
		window.__qRequire__ = {
			version: '1510655017',
			combineCSS: []
		};
	</script>

	<link rel="stylesheet" href="css/base.css">

	<link rel="stylesheet" href="css/profile.css">
	<script src="js/base.js"></script>

	<script src="js/editprofile.js"></script>
</head>

<body>
	<style>
		.tip-passport-bindmobile-layer {
			display: none;
			position: fixed;
			z-index: 2000;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlOzEo46UAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=');
		}
		
		.tip-passport-bindmobile-dialog {
			box-sizing: border-box;
			width: 500px;
			height: 190px;
			border: solid 1px #c0c0c0;
			background-color: #fff;
			box-shadow: 0 0 10px #ccc;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -95px 0 0 -250px;
			padding: 20px;
			color: #323232;
		}
		
		.tip-passport-bindmobile-dialog-close {
			position: absolute;
			top: 24px;
			right: 24px;
			width: 18px;
			height: 18px;
			cursor: pointer;
			background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAFVBMVEUAAAC/v7++vr6/v7+/v7+/v7+/v7+/wuQ3AAAABnRSTlMAENDPMPDQGjwYAAAAdElEQVQoz63SsQ2AIBBAUUwc4KIT2NjTWNuwARPo/jtoIPm/oeSaI+Q1n5Dmzhqel7utkr3aa1vbG6Dr6PvMoCcSTAQTwUAykQwkE8lAMpAMJANZR6l1llJHKSgoBVEq8kFEMBEMJBPJRDKRrPwIVkcfYOp8Ck0Wc2Mad8EAAAAASUVORK5CYII=') center center / cover no-repeat;
		}
		
		.tip-passport-bindmobile-dialog-title {
			font-size: 18px;
		}
		
		.tip-passport-bindmobile-dialog-text {
			margin-top: 10px;
			font-size: 14px;
		}
		
		.tip-passport-bindmobile-dialog-btn {
			padding-top: 20px;
			text-align: center;
		}
		
		.tip-passport-bindmobile-dialog-btn a {
			box-sizing: border-box;
			width: 160px;
			height: 40px;
			line-height: 40px;
			display: inline-block;
			font-size: 14px;
			color: #fff;
			text-decoration: none;
			background-color: #3ba05c;
			cursor: pointer;
			border-radius: 3px;
		}
		
		.tip-passport-bindmobile-dialog-btn a:hover {
			background-color: #47c571;
		}
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
		window.__userStatusCallBack = function(data) {
			if(data.uid && data.userinfo.bind_phone != 1) {
				var $layer = $('#tip_passport_bindmobile_layer')
				$layer.show()
				$('#tip_passport_bindmobile_dialog_close').on('click', function() {
					$layer.hide()
				})
			}
		}
	</script>

	<script>
		window.QYER = {
			uid: [9951706][0] || 0
		};

		window._RATrack = window._RATrack || {
			'platform': 'web',
			'channel': 'user',
			'page_type': 'other',
			'ugc_type': 'user_other',
			'ugc_content': ''
		};
	</script>

	<link href="css/headerfoot_black.css" rel="stylesheet" />
	<script src="js/headerfoot_black.js" async="async"></script>

	<div class="q-layer-header">
		<div class="header-inner">
			<a data-bn-ipg="head-logo" href="#"><img class="logo" src="img/logo.png" width="58" height="18" /></a>
			<div class="nav">
				<ul class="nav-ul">
					<li class="nav-list ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-place" title="穷游目的地">目的地</a>
					</li>
					<li class="nav-list ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-guide" title="穷游锦囊">锦囊</a>
					</li>
					<li class="nav-list nav-list-layer  ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-community" title="穷游论坛">社区<i class="iconfont icon-jiantouxia"></i></a>
						<div class="q-layer q-layer-nav q-layer-arrow">
							<ul>
								<li class="nav-list-layer">
									<a href="#" data-bn-ipg="head-nav-bbs" title="穷游论坛"><i class="iconfont icon-bbs1"></i> 旅行论坛 <i class="iconfont icon-jiantouyou"></i></a>
									<div class="q-layer q-layer-section">
										<div class="q-layer">
											<div class="section-title">
												<a class="more" href="#">全部版块<i class="iconfont icon-jiantouyou"></i></a>
												<span>热门版块</span>
											</div>

											<dl class="section-item">
												<dt>兴趣小组</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-2" href="#">结伴同游</a>
													<a data-bn-ipg="index-head-bbs-hotboard-3" href="#">签证</a>
													<a data-bn-ipg="index-head-bbs-hotboard-22" href="#">旅行摄影</a>
													<a data-bn-ipg="index-head-bbs-hotboard-88" href="#">潜水俱乐部</a>
													<a data-bn-ipg="index-head-bbs-hotboard-122" href="#">带孩子旅行</a>
													<a data-bn-ipg="index-head-bbs-hotboard-49" href="#">明信片</a>
													<a data-bn-ipg="index-head-bbs-hotboard-100" href="#">旅行购物</a>
												</dd>
											</dl>
											<dl class="section-item">
												<dt>穷游欧洲</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-14" href="#">法国/摩纳哥</a>
													<a data-bn-ipg="index-head-bbs-hotboard-12" href="#">德国</a>
													<a data-bn-ipg="index-head-bbs-hotboard-16" href="#">英国/爱尔兰</a>
													<a data-bn-ipg="index-head-bbs-hotboard-15" href="#">瑞士/列支敦士登</a>
													<a data-bn-ipg="index-head-bbs-hotboard-162" href="#">土耳其</a>
													<a data-bn-ipg="index-head-bbs-hotboard-25" href="#">挪威/瑞典/芬兰/丹麦/冰岛</a>
													<a data-bn-ipg="index-head-bbs-hotboard-13" href="#">意大利/梵蒂冈/圣马力诺/马耳他</a>
												</dd>
											</dl>
											<dl class="section-item">
												<dt>穷游亚洲</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-52" href="#">台湾</a>
													<a data-bn-ipg="index-head-bbs-hotboard-57" href="#">日本</a>
													<a data-bn-ipg="index-head-bbs-hotboard-106" href="#">泰国</a>
													<a data-bn-ipg="index-head-bbs-hotboard-164" href="#">新加坡</a>
													<a data-bn-ipg="index-head-bbs-hotboard-165" href="#">斯里兰卡</a>
													<a data-bn-ipg="index-head-bbs-hotboard-163" href="#">香港/澳门</a>
													<a data-bn-ipg="index-head-bbs-hotboard-108" href="#">马来西亚/文莱</a>
													<a data-bn-ipg="index-head-bbs-hotboard-175" href="#">柬埔寨</a>
													<a data-bn-ipg="index-head-bbs-hotboard-104" href="#">马尔代夫</a>
													<a data-bn-ipg="index-head-bbs-hotboard-177" href="#">缅甸</a>
													<a data-bn-ipg="index-head-bbs-hotboard-59" href="#">伊朗</a>
													<a data-bn-ipg="index-head-bbs-hotboard-103" href="#">印度/孟加拉</a>
												</dd>
											</dl>
											<dl class="section-item">
												<dt>穷游美洲</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-54" href="#">加拿大</a>
													<a data-bn-ipg="index-head-bbs-hotboard-53" href="#">美国</a>
													<a data-bn-ipg="index-head-bbs-hotboard-168" href="#">中美</a>
													<a data-bn-ipg="index-head-bbs-hotboard-55" href="#">南美/南极</a>
												</dd>
											</dl>
											<dl class="section-item">
												<dt>穷游大洋洲</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-56" href="#">澳大利亚</a>
													<a data-bn-ipg="index-head-bbs-hotboard-83" href="#">新西兰</a>
													<a data-bn-ipg="index-head-bbs-hotboard-178" href="#">太平洋海岛</a>
												</dd>
											</dl>
											<dl class="section-item">
												<dt>穷游非洲</dt>
												<dd>
													<a data-bn-ipg="index-head-bbs-hotboard-173" href="#">东非地区</a>
													<a data-bn-ipg="index-head-bbs-hotboard-174" href="#">非洲海岛</a>
													<a data-bn-ipg="index-head-bbs-hotboard-86" href="#">北非地区</a>
													<a data-bn-ipg="index-head-bbs-hotboard-60" href="#">非洲其他国家</a>
												</dd>
											</dl>

										</div>
									</div>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-ask" title="旅行问答"><i class="iconfont icon-ask1"></i> 旅行问答</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-qlab" title="JNE旅行生活美学" target="_blank"><i class="iconfont icon-jne1"></i> JNE旅行生活美学</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-play" title="结伴同游" target="_blank"><i class="iconfont icon-play"></i> 结伴同游</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-rt" title="负责任的旅行" target="_blank"><i class="iconfont icon-rt1"></i> 负责任的旅行</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-zt" title="特别策划" target="_blank"><i class="iconfont icon-zt"></i> 特别策划</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="nav-list nav-list-plan ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-plan" title="穷游行程助手">行程助手</a>
					</li>
					<li class="nav-list nav-list-layer nav-list-zuishijie ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-lastminute" title="商城">商城<i class="iconfont icon-jiantouxia"></i></a>
						<div class="gif">
							<img class="gif1" src="img/gif.gif" height="19" width="44">
						</div>
						<div class="q-layer q-layer-nav q-layer-arrow">
							<ul>
								<li>
									<a href="#" data-bn-ipg="head-nav-package" target="_blank" title="机酒自由行"><i class="iconfont icon-package"></i> 机酒自由行</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-local" target="_blank" title="当地玩乐"><i class="iconfont icon-local"></i> 当地玩乐</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-visa" target="_blank" title="签证"><i class="iconfont icon-visa1"></i> 签证</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-car" target="_blank" title="租车自驾"><i class="iconfont icon-car"></i> 租车自驾</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-cruise" target="_blank" title="邮轮"><i class="iconfont icon-cruise"></i> 邮轮</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-insure" target="_blank" title="保险"><i class="iconfont icon-bx"></i> 保险</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-travelgroup" target="_blank" title="私人订制"><i class="iconfont icon-travelgroup"></i> 私人定制</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="nav-list ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-plane" title="机票">机票</a>
					</li>
					<li class="nav-list nav-list-layer nav-list-zuishijie ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-hotel" title="穷游酒店">酒店&middot;民宿 <i class="iconfont icon-jiantouxia"></i></a>
						<div class="gif">
							<img class="gif1" src="img/gif2.jpg" height="19" width="44">
						</div>
						<div class="q-layer q-layer-nav q-layer-arrow q-layer-arrow1">
							<ul>
								<li>
									<a href="#" data-bn-ipg="head-nav-booking" title="酒店"><i class="iconfont icon-hotel1"></i> 酒店</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-airbnb" title="爱彼迎" target="_blank"><i class="iconfont icon-airbnb1"></i> 爱彼迎</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-shop" title="华人旅馆"><i class="iconfont icon-shop"></i> 华人旅馆</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="nav-list nav-list-layer ">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-explore" title="独家深度">独家深度 <i class="iconfont icon-jiantouxia"></i></a>
						<div class="q-layer q-layer-nav q-layer-arrow q-layer-arrow1">
							<ul>
								<li>
									<a href="#" data-bn-ipg="head-nav-leadertour" title="特色长线"><i class="iconfont icon-leadertour"></i> 特色长线</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-citywalk" title="独家日游"><i class="iconfont icon-citywalk"></i> 独家日游</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-qhome" title="Q-Home"><i class="iconfont icon-qhome"></i> Q-Home</a>
								</li>
							</ul>
						</div>
					</li>

					<li class="nav-list nav-list-layer">
						<a class="nav-span" href="#" data-bn-ipg="head-nav-app" title="穷游App">穷游App <i class="iconfont icon-jiantouxia"></i></a>
						<div class="q-layer q-layer-nav q-layer-arrow">
							<ul>
								<li>
									<a href="#" data-bn-ipg="head-nav-app" title="穷游App"><i class="iconfont icon-qyer"></i> 穷游App</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-plan" title="行程助手App"><i class="iconfont icon-planapp"></i> 行程助手App</a>
								</li>
								<li>
									<a href="#" data-bn-ipg="head-nav-guide" title="穷游锦囊App"><i class="iconfont icon-guide"></i> 穷游锦囊App</a>
								</li>
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
						<a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9951706/editprofile" rel="noflow" data-bn-ipg="index-head-un-qq" data-type="qq"><i class="iconfont icon-qq"></i></a>
						<a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9951706/editprofile" rel="noflow" data-bn-ipg="index-head-un-weibo" data-type="weibo"><i class="iconfont icon-weibo"></i></a>
						<a class="otherlogin-link" href="javascript:;" url="http://www.qyer.com/u/9951706/editprofile" rel="noflow" data-bn-ipg="index-head-un-wechat" data-type="weixin"><i class="iconfont icon-weixin"></i></a>

						<a href="register.html" data-bn-ipg="index-head-un-register">注册</a>
						<a href="login.html" data-bn-ipg="index-head-un-login">登录</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--token:d41d8cd98f00b204e9800998ecf8427e-->
	<!--头部 -->
	<div class="u_headbar">
		<div class="infos">
			<!--用户图像 -->
			<div class="face">
				<a href="#"><img src="img/120.jpg" /></a>
			</div>
			<!--用户名字 -->
			<h3 class="name">
            <strong data-bn-ipg="usercenter-username" class="fontYaHei">0麻雀0</strong>
            </h3>
			<!--用户信息 -->
			<div class="text fontSong">
				等级：
				<a data-bn-ipg="usercenter-grade" href="#" class="fb cBlue pr20">新进弟子</a>
				穷币：
				<a data-bn-ipg="usercenter-wealth" href="#" class="fb cLightGreen pr10">10</a>
				<a data-bn-ipg="usercenter-wealth" href="#" class="fb exchange cLightGreen pr20" target="_blank">前往兑换</a>
			</div>

		</div>
		<!--个人中心导航 -->
		<div class="menu clearfix">
			<ul class="fontSong">
				<li data-bn-ipg="usercenter-tab-home">
					<a href="#" class="a_list">首页</a>
				</li>
				<li data-bn-ipg="usercenter-tab-footprint">
					<a href="#" class="a_list">足迹与点评</a>
				</li>
				<li data-bn-ipg="usercenter-tab-wishlist">
					<a href="#" class="a_list">我的想去</a>
				</li>
				<li data-bn-ipg="usercenter-tab-thread">
					<a href="#" class="a_list">帖子</a>
				</li>
				<!--
                    <li data-bn-ipg="usercenter-tab-album" ><a href="//www.qyer.com/pictrip/9951706/" class="a_list">照片</a></li>
                    -->
				<li data-bn-ipg="usercenter-tab-album">
					<a href="#" class="a_list">照片</a>
				</li>
				<li data-bn-ipg="usercenter-tab-ask">
					<a href="#" class="a_list">问答</a>
				</li>
				<li data-bn-ipg="usercenter-tab-plan">
					<a href="#" class="a_list">行程计划</a>
				</li>
				<li data-bn-ipg="usercenter-tab-order">
					<a href="#" class="a_list">商城订单</a>
				</li>
				<li class="more_select">
					<a href="javascript:void(0);" class="a_list"><span>更多</span></a>
					<div class="more_item">
						<a data-bn-ipg="usercenter-tab-footprint" href="#">微锦囊</a>
						<a data-bn-ipg="usercenter-tab-audit" href="#">投稿纠错</a>
						<a data-bn-ipg="usercenter-tab-zcollect" href="#">商城的收藏和提醒</a>
						<a data-bn-ipg="usercenter-tab-zcoupon" href="#">商城的优惠券</a>
						<a data-bn-ipg="usercenter-tab-level" href="#">经验和穷币</a>
						<!-- <a data-bn-ipg="usercenter-tab-medal"  href="http://www.qyer.com/u/9951706/badgegalary">勋章</a> -->
					</div>
				</li>
			</ul>
			<a data-bn-ipg="usercenter-set-profile" href="editprofile.html" class="seting">设置</a>
		</div>
	</div>
	<!--头部 -->

	<script>
		/**
		 * 认证头像图标tip
		 */
		$(function() {
			if(typeof requirejs !== 'undefined') {
				requirejs(['web_old_tooltips'], function() {
					$('[data-toggle="tooltip"]').tooltip({
						container: 'body'
					});
				});
			}
		});
	</script>
	<!--头部 -->
	<div class="u_set_cnt clearfix">
		<!--设置模块导航 -->
		<div class="u_set_menu">
			<ul class="fontSong">
				<li data-bn-ipg="usercenter-setting-profile" class="current">
					<a href="profile.html" class="data">个人资料</a>
				</li>
				<li data-bn-ipg="usercenter-setting-follow">
					<a href="#" class="private">关注（0）</a>
				</li>
				<li data-bn-ipg="usercenter-setting-fan">
					<a href="#" class="attent">粉丝（0）</a>
				</li>
			</ul>
			<ul>
				<li data-bn-ipg="usercenter-setting-bind">
					<a href="/u/bind" class="account">账号管理</a>
				</li>
				<li data-bn-ipg="usercenter-setting-certificate">
					<a href="#" class="certificate">用户认证</a>
				</li>
				<li data-bn-ipg="usercenter-setting-invite">
					<a href="#" class="friend">邀请好友</a>
				</li>
				<li data-bn-ipg="usercenter-setting-subscribe">
					<a href="#" class="email">邮件订阅</a>
				</li>
			</ul>
			<ul>
				<li data-bn-ipg="usercenter-setting-password">
					<a href="password.html" class="pass">修改密码</a>
				</li>
				<li data-bn-ipg="usercenter-setting-avatar">
					<a href="avatar.html" class="face">修改头像</a>
				</li>
			</ul>
		</div>
		<!--设置模块内容 -->
		<div class="u_set_main">
			<!--设置模块栏目标题 -->
			<div class="u_set_title">
				<strong class="text fontYaHei">修改个人资料</strong>
			</div>
			<!--设置模块栏目内容 -->
			<div class="u_set_data_edit">
				<form action="/" method="post" name="m_edit" id="editform" onsubmit="return false">
					<ul class="clearfix fontArial">
						<li class="list no_p">
							<div class="left">用户名称：</div>
							<div class="right clearfix">
								<span class="fl">0麻雀0</span>
								<div class="fl edit_username">
									<a id="editUsername" href="javascript:;">我要改名</a>
									<div class="tooltip top fade in">
										<div class="tooltip-arrow"></div>
										<div class="tooltip-inner">
											<div class="edit_username_tip">
												<p>
													<a class="fr" target="_blank" href="#">穷币是什么东西？</a>
													<span>改名消耗：<em class="del">1600</em> 穷币</span>
												</p>
												<p>
													<span>
                                            新人福利！恭喜你获得一次免费修改用户名的机会~
                                                                                        </span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="list no_p">
							<div class="left">性　　别：</div>
							<div class="right">
								<label class="gender"><input type="radio" name="gender"  class="edit_radio" value="1" />男</label>
								<label class="gender"><input type="radio" name="gender"  class="edit_radio" value="2" />女</label>
								<label class="gender"><input type="radio" name="gender" checked="checked" class="edit_radio" value="0" />未知</label>
								<!--
                        <div class="u_select fr">
                            <span class="stitle"><em>所有人可见</em></span>
                            <div class="slist">
                                <ul>
                                    <li v="0">所有人可见</li>
                                    <li v="1">好友可见</li>
                                    <li v="-1">保密</li>
                                </ul>
                            </div>
                        </div>
                        -->
							</div>
						</li>
						<li class="list no_ph">
							<div class="left">生　　日：</div>
							<div class="right">
								<div class="u_select fl mr10">
									<span class="stitle"><em>0000年</em></span>
									<input type="hidden" name="birthyear" id="birthyear" value="0000" />
									<div class="slist" id="selectyear">
										<ul>
											<li v="2017">2017年</li>
											<li v="2016">2016年</li>
											<li v="2015">2015年</li>
											<li v="2014">2014年</li>
											<li v="2013">2013年</li>
											<li v="2012">2012年</li>
											<li v="2011">2011年</li>
											<li v="2010">2010年</li>
											<li v="2009">2009年</li>
											<li v="2008">2008年</li>
											<li v="2007">2007年</li>
											<li v="2006">2006年</li>
											<li v="2005">2005年</li>
											<li v="2004">2004年</li>
											<li v="2003">2003年</li>
											<li v="2002">2002年</li>
											<li v="2001">2001年</li>
											<li v="2000">2000年</li>
											<li v="1999">1999年</li>
											<li v="1998">1998年</li>
											<li v="1997">1997年</li>
											<li v="1996">1996年</li>
											<li v="1995">1995年</li>
											<li v="1994">1994年</li>
											<li v="1993">1993年</li>
											<li v="1992">1992年</li>
											<li v="1991">1991年</li>
											<li v="1990">1990年</li>
											<li v="1989">1989年</li>
											<li v="1988">1988年</li>
											<li v="1987">1987年</li>
											<li v="1986">1986年</li>
											<li v="1985">1985年</li>
											<li v="1984">1984年</li>
											<li v="1983">1983年</li>
											<li v="1982">1982年</li>
											<li v="1981">1981年</li>
											<li v="1980">1980年</li>
											<li v="1979">1979年</li>
											<li v="1978">1978年</li>
											<li v="1977">1977年</li>
											<li v="1976">1976年</li>
											<li v="1975">1975年</li>
											<li v="1974">1974年</li>
											<li v="1973">1973年</li>
											<li v="1972">1972年</li>
											<li v="1971">1971年</li>
											<li v="1970">1970年</li>
											<li v="1969">1969年</li>
											<li v="1968">1968年</li>
											<li v="1967">1967年</li>
											<li v="1966">1966年</li>
											<li v="1965">1965年</li>
											<li v="1964">1964年</li>
											<li v="1963">1963年</li>
											<li v="1962">1962年</li>
											<li v="1961">1961年</li>
											<li v="1960">1960年</li>
											<li v="1959">1959年</li>
											<li v="1958">1958年</li>
											<li v="1957">1957年</li>
											<li v="1956">1956年</li>
											<li v="1955">1955年</li>
											<li v="1954">1954年</li>
											<li v="1953">1953年</li>
											<li v="1952">1952年</li>
											<li v="1951">1951年</li>
											<li v="1950">1950年</li>
											<li v="1949">1949年</li>
											<li v="1948">1948年</li>
											<li v="1947">1947年</li>
											<li v="1946">1946年</li>
											<li v="1945">1945年</li>
											<li v="1944">1944年</li>
											<li v="1943">1943年</li>
											<li v="1942">1942年</li>
											<li v="1941">1941年</li>
											<li v="1940">1940年</li>
											<li v="1939">1939年</li>
											<li v="1938">1938年</li>
											<li v="1937">1937年</li>
											<li v="1936">1936年</li>
											<li v="1935">1935年</li>
											<li v="1934">1934年</li>
											<li v="1933">1933年</li>
											<li v="1932">1932年</li>
											<li v="1931">1931年</li>
											<li v="1930">1930年</li>
											<li v="1929">1929年</li>
											<li v="1928">1928年</li>
											<li v="1927">1927年</li>
											<li v="1926">1926年</li>
											<li v="1925">1925年</li>
											<li v="1924">1924年</li>
											<li v="1923">1923年</li>
											<li v="1922">1922年</li>
											<li v="1921">1921年</li>
											<li v="1920">1920年</li>
											<li v="1919">1919年</li>
											<li v="1918">1918年</li>
											<li v="1917">1917年</li>
										</ul>
									</div>
								</div>
								<div class="u_select fl mr10">
									<span class="stitle"><em>00月</em></span>
									<input type="hidden" name="birthmonth" id="birthmonth" value="00" />
									<div class="slist" id="selectmonth">
										<ul>
											<li v="1">1月</li>
											<li v="2">2月</li>
											<li v="3">3月</li>
											<li v="4">4月</li>
											<li v="5">5月</li>
											<li v="6">6月</li>
											<li v="7">7月</li>
											<li v="8">8月</li>
											<li v="9">9月</li>
											<li v="10">10月</li>
											<li v="11">11月</li>
											<li v="12">12月</li>
										</ul>
									</div>
								</div>
								<div class="u_select fl mr10">
									<span class="stitle" id="daydiv"><em>00日</em></span>
									<input type="hidden" id="birthday" name="birthday" value="00" />
									<div class="slist" id="selectdays">
										<ul>
										</ul>
									</div>
								</div>
								<div class="u_select fr">
									<span class="stitle"><em>所有人可见</em></span>
									<input type="hidden" name="privacy[bday]" id="_js_bday_hide_val" value="" />
									<div class="slist" id="_js_bday_hide">
										<ul>
											<li v="0">所有人可见</li>
											<li v="1">好友可见</li>
											<li v="-1">保密</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li class="list">
							<div class="left">现居住地：</div>
							<div class="right">
								<input type="text" class="ui2_input" id="usercity" value="" autocomplete="off" />
								<input type="hidden" name="cityid" id="cityid" value="" />
								<!--异常状态本身添加class ui2_error 本身 下面 class btm find ui2_error_layer 显示 -->
								<div class="btm clearfix">
									<div class="ui2_error_layer" style="display:none;">
										<p class="ui2_error_layer_arrow"></p>
										<p class="ui2_error_layer_arrow2"></p>
										<p class="ui2_error_layer_text">至少写够10个字，最多不超过500字</p>
									</div>
								</div>
								<!--现居住地联想框 -->
								<div class="btm clearfix usercity">
								</div>
							</div>
						</li>
						<li class="list">
							<div class="left">曾居住地：</div>
							<div class="right">
								<div class="u_tag_list clearfix" id="_jscity_container">
									<div class="u_tag_input">
										<input type="text" id="addcity" class="ui2_input" value="" />
										<!--异常状态本身添加class ui2_error 本身 下面 class btm find ui2_error_layer 显示 -->
										<div class="btm clearfix">
											<div class="ui2_error_layer" style="display:none;">
												<p class="ui2_error_layer_arrow"></p>
												<p class="ui2_error_layer_arrow2"></p>
												<p class="ui2_error_layer_text">至少写够10个字，最多不超过500字</p>
											</div>
										</div>
										<!--曾居住地联想框 -->
										<div id="plan_search_drop" class="btm clearfix" style="display:none;"></div>
									</div>
								</div>
							</div>
						</li>
						<li class="list">
							<div class="left">个性签名：</div>
							<div class="right">
								<textarea class="ui2_textarea" name="bio" id="input_bio"></textarea>
								<div class="btm clearfix">
									<div class="ui2_error_layer" id="_jsbio_error" style="display:none;">
										<p class="ui2_error_layer_arrow"></p>
										<p class="ui2_error_layer_arrow2"></p>
										<p class="ui2_error_layer_text">最多不超过70字</p>
									</div>
								</div>
							</div>
						</li>
						<li class="list">
							<div class="left">个人网站： </div>
							<div class="right">
								<input type="text" class="ui2_input" name="site" value="" />
								<div class="btm clearfix">
									<div class="ui2_error_layer" id="_jssite_error" style="display:none;">
										<p class="ui2_error_layer_arrow"></p>
										<p class="ui2_error_layer_arrow2"></p>
										<p class="ui2_error_layer_text">至少写够10个字，最多不超过500字</p>
									</div>
								</div>
							</div>
						</li>
						<li class="list">
							<div class="left">旅行偏好：</div>
							<div class="right">
								<div class="hobby_list hobby_list_current">
									<a href="javascript:void(0);" class="hobby_link1" onblur="this.blur();"><span>美食</span></a>
									<a href="javascript:void(0);" class="hobby_link2" onblur="this.blur();"><span>购物</span></a>
									<a href="javascript:void(0);" class="hobby_link3" onblur="this.blur();"><span>摄影</span></a>
									<a href="javascript:void(0);" class="hobby_link4" onblur="this.blur();"><span>自驾</span></a>
									<a href="javascript:void(0);" class="hobby_link5" onblur="this.blur();"><span>经济型</span></a>
									<a href="javascript:void(0);" class="hobby_link6" onblur="this.blur();"><span>亲子</span></a>
									<a href="javascript:void(0);" class="hobby_link7" onblur="this.blur();"><span>蜜月</span></a>
									<a href="javascript:void(0);" class="hobby_link8" onblur="this.blur();"><span>户外</span></a>
									<a href="javascript:void(0);" class="hobby_link9" onblur="this.blur();"><span>体育</span></a>
									<a href="javascript:void(0);" class="hobby_link10" onblur="this.blur();"><span>休闲</span></a>
									<a href="javascript:void(0);" class="hobby_link11" onblur="this.blur();"><span>文化</span></a>
									<a href="javascript:void(0);" class="hobby_link12" onblur="this.blur();"><span>邮轮</span></a>
									<a href="javascript:void(0);" class="hobby_link13" onblur="this.blur();"><span>商务</span></a>
									<a href="javascript:void(0);" class="hobby_link14" onblur="this.blur();"><span>独自旅行</span></a>
								</div>
							</div>
							<input type="hidden" name="tripprefer" id="tripprefer" value="" />
						</li>
					</ul>
				</form>
				<div class="button clearfix">
					<input type="button" id="btnsub" class="ui_buttonB fl mr10" value="保存" />
					<input type="button" id="editCancel" class="ui_button_cancel fl" value="取消" />
				</div>
			</div>
			<!-- 相关问答seo -->
			<!--相关问答-->
			<style>
				.contact-ask {
					color: #636363;
				}
				
				.contact-ask-title {
					margin: 36px 0 16px 0;
					font-size: 18px;
					color: #636363;
				}
				
				.contact-ask-list {
					padding: 18px 16px;
					background: #fafafa;
					overflow: hidden;
				}
				
				.contact-ask-item {
					float: left;
					width: 33.3%;
					margin: 6px 0;
				}
				
				.contact-ask-anchor {
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
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">关于成都近日的天气</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">在旧金山玩十天,住在哪里划算又方便呢?</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">请问退税一定要看登机牌吗？我用的是航空公司的免票 要到最后才会给我登机牌 我怕来不及退税</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">自由拉提石是票瓢泼大雨之后偶然闯进的地方，一大片的绿地广场，中央一尊雕像，似乎是在纪念某位重要人物，我们急着开车上去就没停下里细看。通往山顶巨大拉提...</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">布拉格Pizzerie Jecna 45怎么样？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">谁住过GTK苏兹达尔酒店,是否推荐？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">奥斯塔B&amp;amp;B Chanoux好吗？是否值得入住？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">谁住过米拉玛体育场酒店,是否推荐？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">阿格里真托La Terrazza di Agrigento怎么样？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">谁住过普吉岛山舒阁别墅小屋度假酒店，怎么样？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">求助,怎么从比利时安特卫普到鲁汶呢？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">请问,京都Steak House Nakahara该怎么去？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">哈哈～她说你已经私信她了????</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">我89女，打算过年去日本差不多1月29到2月6，机票已出，约吗？要一起吗？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">现在非北京户藉能用居住登记卡办理台湾通行证么</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div id="editUsernamePopup" class="edit_username_popup">
		<div class="popup_tb">
			<div class="popup_tc">
				<div class="edit_username_popup_wrap">
					<div class="edit_username_popup_hd">
						<h2>修改用户名</h2>
						<a class="popup_close" href="javascript:;"></a>
					</div>
					<div class="edit_username_popup_conent">
						<div class="edit_username_layer">
							<p>请输入您的新用户名</p>
							<div class="input_control">
								<input type="text" class="ui2_input" id="username" name="username" value="0麻雀0" autocomplete="off" maxlength="15" />
								<input type="hidden" id="hidUsername" value="0麻雀0">
								<div class="err">
									<span id="err_username" class="err_span">请输入用户名</span>
								</div>
							</div>
							<div class="btn_control">
								<span>你有一次免费修改的机会 | 花费: <em>0</em> 穷币</span>
								<input type="button" id="btnEditUsername" class="ui_buttonB btnEditUsername mr10" value="确认修改">
								<input type="button" id="btnEditCancel" class="ui_button_cancel btnEditCancel" value="取消">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
		$(function() {
			requirejs(['web_old_tip'], function(tip) {
				var $layer = $('#editUsernamePopup');
				$('#editUsername').on('click', function() {
					if(this.className.indexOf('disabled') !== -1) return;
					$layer.fadeIn();
				});
				$layer.on('click', '.popup_close', function() {
					$layer.fadeOut();
				});
				$('#btnEditCancel').on('click', function() {
					$layer.fadeOut();
				});
				$('#btnEditUsername').on('click', function() {
					var input = $('#username'),
						val = $.trim(input.val()),
						err = $('#err_username'),
						$this = $(this);
					if($this.hasClass('ui_button_load')) return false;
					if(checkUsername()) {
						$.post('/qcross/passport/register/mobile/checkname', {
							username: val
						}).then(function(result) {
							if(result.error_code === 0) {
								if($this.hasClass('ui_button_load')) return false;
								$this.removeClass('ui_buttonB').addClass('ui_button_load');
								return $.post('/u/profile.php?action=editusername', {
									username: val
								}, function(result) {
									if(result.error_code === 0) {
										tip.tip({
											text: "修改成功！"
										});
									} else {
										tip.tip({
											text: result.data.msg || '修改失败！',
											type: "error"
										});
										$this.removeClass('ui_button_load').addClass('ui_buttonB');
									}
									setTimeout(function() {
										location.reload();
									}, 2000);
								}, 'json');
							} else {
								err.show();
								err.html(result.data.msg);
							}
						});
					}
				});
			});
		});
	</script>

	<script language="javascript">
		//新增加判断月份天数
		var y = parseInt($("#birthyear").val());
		var m = parseInt($("#birthmonth").val());
		if(y == 0) y = 2010;
		if(m == 0);
		m = 1;
		setDaystr(y, m);
		$("#selectyear ul li").click(function() {
			var y = $(this).attr("v");
			var m = $("#birthmonth").val();
			$("#birthyear").val(y);
			setDaystr(y, m);
		});
		$("#selectmonth ul li").click(function(e) {
			//var m = $("#birthmonth").val();
			var y = $("#birthyear").val();
			var m = $(this).attr("v");
			$("#birthmonth").val(m);
			setDaystr(y, m);
			//alert(d);
		});

		$(document).on('click', '#selectdays ul li', function() {
			//var m = $("#birthmonth").val();
			var d = $(this).attr("v");
			$("#birthday").val(d);
			$("#selectdays").hide();
			//alert(d);
		});

		function setDaystr(y, m) {
			var d = CalDays(parseInt(y), parseInt(m));
			var daystr = "<ul>";
			for(var i = 0; i < d; i++) {
				var j = i + 1;
				daystr += "<li v=\"" + j + "\" >" + j + "日</li>"
			}
			daystr += '</ul>';
			//alert(daystr);
			var day = parseInt($("#birthday").val());
			/*
			if(day>d){
				$("#birthday").val(1);
				$("#daydiv em").html("1日");
			}*/
			$("#selectdays").html(daystr);
			setTimeout(function() {
				$("#selectdays").find("li").mouseover(function() {
					$(this).addClass("hover current");
				});
				$("#selectdays").find("li").mouseout(function() {
					$(this).removeClass("hover current");
				});
			}, 200);

		}

		function CalDays(year, month) {
			var days = 0;
			switch(month) {
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					days = 31;
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					days = 30;
					break;
				case 2:
					if(isLeapYear(year)) days = 29;
					else days = 28;
					break;
			}
			return days;
		}

		function isLeapYear(year) {
			if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return true;
			else return false;
		}

		/*
		      var y = $("#birthyear").val();
		      //var m = $("#birthmonth").val();
		 var m = $(this).attr("v");
		if(oldm != m){
			var randomstr=math.random();
			alert(randomstr);
			oldm=m;
			$.ajaxSetup({cache:false});
			$.getJSON('profile.php?action=selectdays', {year:y, month:m,randomstr:randomstr}, function(res){
			   $("#selectdays").html(res.text);

			});
		}
		*/
	</script>
	<script language="javascript" type="text/javascript">
		var opt = {
			url: '/u/profile.php?action=edit&isajax=1',
			dataType: 'json',
			success: function(res) {
				//tips.show(res.msg);
				if(res.err != 0) {
					qyerUI.message({
						msg: res.msg,
						type: "warn"
					});
					return false;
				}
				ctext = '';
				if(res.credits2 > 0) { //积分增加提示
					ctext = '经验值+' + res.credits2;
				}
				if(res.credits3 > 0) {
					if(ctext) ctext += ', ';
					ctext += '穷币+' + res.credits3;
				}

				var delaytt = 0;
				if(typeof res.extra_msg != 'undefined' && res.extra_msg) {
					window.qyerUtil.showAntiSpam(res.extra_msg);
					delaytt = 5000;
				} else {
					popup.coast(200, 'btnsub', {
						text: '完善资料成功！' + ctext
					});

				}
				// qyerUI.message('完善资料成功！'+ctext, )
				setTimeout(function() {
					window.location.href = 'profile.html';
				}, 500 + delaytt);
			}
		};
		var oldm = 00;
		var oldy = 0000;
		$(document).ready(function() {
			//修改邮箱
			$("#editemail").click(function() {
				//alert('editemail');
				popup.ajax('/u/api.php?action=editemail&oper=showform', '350');
			});

			//激活用户
			$("#sendemail").click(function() {
				//var email = $("#changeremail").html();
				var html = '<div style="width:330px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content"><p class="icon_warn">验证邮件已经发送，请前往邮箱查看，并确认邮件！</p></div><div class="ui_pupBox_foot clearfix"><input type="button" onclick="pupclose();" class="ui_button fr" value="确定"></div></div>';
				//return;
				popup.showHtml(html, 330);
				$.ajax({
					type: 'GET',
					url: '//login.qyer.com/register.php?action=sendmail&isajax=1&uid=9951706',
					data: '',
					dataType: "jsonp",
					success: function(json) {
						popup.showHtml(html, 330);
					}
				});
			});

			$("#selectdays").on("mousever", 'li', function() {
				$(this).addClass("current");
			}).on("mouseout", 'li', function() {
				$(this).removeClass("current");
			}).on("click", 'li', function() {
				$("#birthday").val($(this).attr("v"));
				$("#daydiv em").text($(this).text());
			});

			setSelectedTrip();
			$(".hobby_list_current a").find("span").click(function() {
				if($(this).hasClass("current")) {
					$(this).removeClass("current");
				} else {
					$(this).addClass("current");
				}
				var tp = getSelectedTrip();
				$('#tripprefer').val(tp);
			});

			$("#btnsub").bind("click", function() {
				$("#editform").submit();
			});

			$("#editform").submit(function() {
				if($("#input_bio").html() == '最多70个汉字') {
					$("#input_bio").html('');
				}
				$f2 = checkBio();
				$f4 = checkSite();

				if($f2 && $f4) {
					$("#editform").ajaxSubmit(opt);
				}
			});
			/*
    if($("#input_sightml").val().length == 0)
    {
        $("#input_sightml").html('最多500个汉字');
    }

    $("#input_sightml").focus(function(){
        if($("#input_sightml").html() == '最多500个汉字')
        {
            $("#input_sightml").html('');
        }
    });
    */
			if($("#input_bio").val().length == 0) {
				$("#input_bio").html('最多70个汉字');
			}
			$("#input_bio").focus(function() {
				if($("#input_bio").html() == '最多70个汉字') {
					$("#input_bio").html('');
				}

			});

			$("#input_bio").keyup(function() {
				var val = $("#input_bio").val();
				var len = util.getwordlen(val);
				if(len > 140) {
					$("#input_bio").val(val.gbtrim(140));
					//$('#_jsbio_error').show();
				}
			});

			$("#_js_bday_hide ul li").click(function() {
				var v = $(this).attr('v');
				$("#_js_bday_hide_val").val(v);
			});

			/*
    $("#input_sightml").keyup(function(){
        var val = $("#input_sightml").val();
        var len = util.getwordlen(val);
        if(len > 1000)
        {
            $("#input_sightml").val(val.gbtrim(1000));
            $("#err_sightml").html('最多500个汉字').show();
        }
    });
	*/
			//去过删除
			/*
			$("._jsremove_livecity").click(function(){
				var tar = $(this);
				user_lived(tar,0);
			});*/

			$("body").on('click', '._jsremove_livecity', function() {
				var tar = $(this);
				user_lived(tar, 0);
			});

		});

		function getSelectedTrip() {
			var tp = [];
			var listA = $(".hobby_list_current a").find("span");
			$.each(listA, function(k, v) {
				if($(this).hasClass('current')) {
					tp.push(k + 1);
				}
			});
			return tp;
		}

		function setSelectedTrip() {
			var tp = new Array();
			tp = $('#tripprefer').val().split(',');

			var listA = $(".hobby_list_current a").find("span");
			$.each(listA, function(k, v) {
				for(i in tp) {
					if(tp[i] == k + 1) {
						$(this).addClass('current');
						break;
					} else {

					}
				}
			});
		}
		/*
		function setMaxLength2(){
			var f_obj = $('#input_sightml');
		var f_val = f_obj.val();
		var wl =  util.getwordlen(f_val);
		var maxl = 500;
		if(wl>maxl){

			var t = f_val.gbtrim(maxl);
			f_obj.val(t);
			$('#err_sightml').html('最多500个汉字');
			$('#err_sightml').show();
			}

		}
		*/
		$('#input_bio').blur(function() {
			checkBio();
		});

		$('input[name="site"]').blur(function() {
			checkSite();
		});

		$('#username').blur(function() {
			var input = $('#username'),
				val = $.trim(input.val()),
				err = $('#err_username');
			if(checkUsername()) {
				$.post('/qcross/passport/register/mobile/checkname', {
					username: $.trim(input.val())
				}).done(function(result) {
					if(result.error_code == 0) {
						err.hide();
					} else {
						err.show();
						err.html(result.data.msg);
					}
				});
			}
		});

		function checkSite() {
			var f_obj = $('input[name="site"]');
			if(f_obj.val() != '' && !(/^(https|http)/i.test(f_obj.val()))) {
				$('#_jssite_error').show();
				$('#_jssite_error .ui2_error_layer_text').html('您输入的个人网站有误，请以http://开头');
				return false;
			}
			$('#_jssite_error').hide();
			return true;
		}

		function checkUsername() {
			var input = $('#username'),
				val = $.trim(input.val()),
				err = $('#err_username');
			if(val === '') {
				err.show();
				err.html('请输入用户名');
				return false;
			} else if(val === $.trim($('#hidUsername').val())) {
				err.show();
				err.html('并没有修改呀');
				return false;
			} else if(!/^[\u4e00-\u9fa5\w-－]+$/.test(val)) {
				err.show();
				err.html('用户名只可由中英文，数字及"-""_"符号组成');
				return false;
			} else if(strlen(val) < 3 || strlen(val) > 15) {
				err.show();
				err.html('用户名长度需为3-15个字符');
				return false;
			}
			err.hide();
			return true;
		}

		function strlen(str) {
			var len, i;
			len = 0;
			for(i = 0; i < str.length; i++) {
				if(str.charCodeAt(i) > 255) len += 2;
				else len++;
			}
			return len;
		}

		function checkBio() {
			var val = $("#input_bio").val();
			var len = util.getwordlen(val);
			if(len > 140) {
				//$("#input_bio").val(val.gbtrim(140));
				$('#_jsbio_error').show();
				$('#_jsbio_error .ui2_error_layer_text').html('自我介绍最多140个字符，70个汉字');
				return false;
			}
			$('#_jsbio_error').hide();
			return true;
		}

		function channelfriend(uid) {
			$.ajax({
				type: "POST",
				url: "ajax.php",
				data: "action=channelfriend&uid=" + uid,
				dataType: "text",
				beforeSend: function(XMLHttpRequest) {},
				success: function(msg) {
					if(msg == 1) {
						tips.show("成功取消关注");
						location.reload();
					}
				}
			});
		}

		//搜索联想框 去过
		var thinkcc = new ThinkCC({
			entercb: function(arg) {

			},
			postdata: {
				source: 2
			},
			clickcb: function(e) {
				var tar = $(e.currentTarget);
				user_lived(tar, 1);
			}
		});

		function user_lived(tar, result) {
			var type_s = tar.attr("data-type"); //1 国家 2 城市 alert(type);
			var id = tar.attr("data-id");
			var name = tar.attr("data-name");
			var falg = 1;
			type = type_s == 1 ? 4 : 1;
			//1:城市2:poi 3:大洲4:国家
			var data = "action=feeling&id=" + id + "&oper=lived&type=" + type + "&lived=" + result;
			if(result) {
				$("#_jscity_container span a").each(function() {
					var s = $(this).attr("data-name");
					if(s == name) {
						tips.show("请不要重复添加！");
						falg = 0;
					}
				});
				if(falg == 0) {
					return false;
				}
			}
			jQuery.ajax({
				type: "POST",
				url: "/api.php",
				data: data, //"action=channelfriend&uid="+uid,
				dataType: "json",
				beforeSend: function(XMLHttpRequest) {},
				success: function(rs) {
					if(rs.result == "ok") {
						if(result) {
							if(falg) {
								var str = '<span class="tag_item">' + name + '<a data-type="' + type_s + '" data-id="' + id + '" data-name="' + name + '" class="_jsremove_livecity" href="javascript:void(0);" onfocus="this.blur();">x</a></span>';
								$("#_jscity_container").prepend(str);
							}
						} else {
							tar.parent().remove();
						}
					} else {
						tips.show(rs.data.msg);
					}
				}
			});
		}
		$('#editCancel').click(function() {
			window.location = "profile.html";
			return false;
		});
	</script>
	<!--<div style="display: none;">http://www.qyer.com/u/9951706/profile</div>-->
	<div class="qyer_footer">
		<div class="topline"></div>
		<div class="content">
			<p class="nav">
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-about-1">穷游简介</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-about-3">合作伙伴</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-join-1">加入我们</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-help-1">新手上路</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-help-2">使用帮助</a>
				<a href="#" target="_blank" data-bn-ipg="foot-help-4">网站地图</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-1">会员条款</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-2">社区指南</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-3">版权声明</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-clause-4">免责声明</a>
				<a href="#" target="_blank" rel="nofollow" data-bn-ipg="foot-about-2">联系我们</a>
			</p>
			<p class="info">
				2004-2017 &copy; 穷游网&reg; qyer.com All rights reserved. Version v5.57 京ICP备12003524号 京公网安备11010102001935号 京ICP证140673号
				<a target="_blank" style="color:inherit;" href="#">营业执照</a>
				<a target="_blank" style="color:inherit;" href="#">经营许可证</a>
			</p>

			<!--友情链接模块-->

		</div>
	</div>

	<script>
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.src = "js/base_beacon_ga.js";
		document.getElementsByTagName("head")[0].appendChild(script);
	</script>

</body>

</html>