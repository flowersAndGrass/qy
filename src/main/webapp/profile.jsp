<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>个人资料</title>
	<meta name="keywords" content="" />
	<meta name="description" content="0麻雀0的个人资料-穷游网" />
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
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
	<script src="js/profile.js"></script>
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
				<a href="#">立即绑定</a>
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
				<a href="#"><img src="img/120.jpg/" /></a>
			</div>
			<!--用户名字 -->
			<h3 class="name">
            <strong data-bn-ipg="usercenter-username" class="fontYaHei">0麻雀0</strong>
                                    <span class="icon_gender_he" title="男"></span>
                                </h3>
			<!--用户信息 -->
			<div class="text fontSong">
				等级：
				<a data-bn-ipg="usercenter-grade" href="#" class="fb cBlue pr20">新进弟子</a>
				穷币：
				<a data-bn-ipg="usercenter-wealth" href="#" class="fb cLightGreen pr10">10</a>
				<a data-bn-ipg="usercenter-wealth" href="#" class="fb exchange cLightGreen pr20" target="_blank">前往兑换</a>
				现居：<span class="fb cGray pr20">其他</span> </div>

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
				<strong class="text fontYaHei">个人资料</strong>
				<a data-bn-ipg="usercenter-setprofile-edit" href="editprofile.html" class="ui_buttonB edit_link">编辑资料</a>
			</div>
			<!--设置模块栏目内容 -->
			<div class="u_set_data">
				<ul class="clearfix fontArial">
					<li>
						<div class="left">用户名称：</div>
						<div class="right">0麻雀0
						</div>
					</li>
					<li>
						<div class="left">性　　别：</div>

						<div class="right">男</div>

					</li>
					<li>
						<div class="left">生　　日：</div>
						<div class="right">2008年08月08日</div>
					</li>
					<li data-bn-ipg="usercenter-setprofile-living">
						<div class="left">现居住地：</div>
						<div class="right">其他</div>
					</li>
					<li data-bn-ipg="usercenter-setprofile-lived">
						<div class="left">曾居住地：</div>
						<div class="right">

							<a href="//place.qyer.com/china/" target="_blank">中国</a>
						</div>
					</li>
					<li>
						<div class="left">个性签名：</div>
						<div class="right">我旅游，我快乐！</div>
					</li>
					<li>
						<div class="left">个人网站：</div>
						<div class="right"></div>
					</li>

					<li>
						<div class="left">旅行偏好：</div>
						<div class="right">
							<div class="hobby_list">
							</div>
						</div>
					</li>
				</ul>
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
						<a class="contact-ask-anchor" href="#" target="_blank">求助:重庆到涪陵的交通</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">哈尔滨市中心到机场大概多远啊?</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">拱北口岸?</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">谁住过卡门港Apartamento Las Vistas，怎么样？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">佩斯基耶拉德加达威尼斯公园公寓好吗？是否值得入住？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">麦德林La Castellana Apartaments好吗？是否值得入住？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">谁住过星程酒店如皋海阳南路店，怎么样？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">卡法亚特有什么景点</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">请问,怎么从法国阿讷西到苏黎世呢？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">请问,基尔根尼基尔肯尼城堡开放时间？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">如何前往布里斯班？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">求教这个荷兰-比利时8天行程可行吗？</a>
					</li>
					<li class="contact-ask-item">
						<a class="contact-ask-anchor" href="#" target="_blank">科隆机场到科隆市区</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

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

		$(document).on('click', "#selectdays ul li", function() {
			// var m = $("#birthmonth").val();
			console.log($(this).attr("v"))
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
		$(document).ready(function() {
			//修改邮箱
			$("#editemail").click(function() {
				//alert('editemail');
				popup.ajax('/api.php?action=editemail&oper=showform', '350');
			});

			//激活用户
			$("#sendemail").click(function() {
				//var email = $("#changeremail").html();
				var html = '<div style="width:330px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content"><p class="icon_warn">验证邮件已经发送，请前往邮箱查看，并确认邮件！</p></div><div class="ui_pupBox_foot clearfix"><input type="button" onclick="pupclose();" class="ui_button fr" value="确定"></div></div>';
				//return;
				popup.showHtml(html, 330);
				$.ajax({
					type: 'GET',
					url: 'http://login.qyer.com/register.php?action=sendmail&isajax=1&uid=9951706',
					data: '',
					dataType: "jsonp",
					success: function(json) {
						popup.showHtml(html, 330);
					}
				});
			});

		});

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