<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>你来啦的旅行足迹-穷游网</title>
		<meta name="keywords" content="">
		<meta name="description" content="">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
		<link rel="shortcut icon" href="//www.qyer.com/favicon.ico">
		<script>
			window.QYER = {
				uid: [9948056][0] | 0
			};
			window.__qRequire__ = {
				version: '1510655017',
				combineCSS: []
			};
			/*$(".qui-popup").css("display","none");*/
		</script>

		<link rel="stylesheet" href="css/comment/base_css_d4811e5c69b8e51f74324c600db93b1c.css">

		<link rel="stylesheet" href="css/comment/footprint_css_0b973508a3d7565f5205f54536b42fcc.css">
		<script src="js/comment/basejs.js"></script>
		<style type="text/css">
	/*	//星星*/
			.uDpingMySpoorList .StarIcons span {
			    float: left;
			    margin-left: 5px;
			    width: 18px;
			    height: 18px;
			    background: url(img/comment/icon-star.png) no-repeat;
			}
			/*//增加的图片*/
			.u_spoor_country_item .adds a {
				width: 213px;
				border: 1px solid #d7d7d7;
				background: #ececec url("img/comment/box_adds_icon.png")
				/*tpa=http://common2.qyerstatic.com/user/common/images/user2/spoor/box_adds_icon.png*/
				
				no-repeat center 70px;
				border-radius: 3px;
				padding-top: 160px;
				height: 138px;
				margin-top: 20px;
				text-align: center;
				display: block
			}
			.open {
				display: block;
			}
			.close {
				display: none;
			}
			.qui-feedback {
				position: fixed;
				_position: absolute;
				z-index: 99;
				top: 120px;
				right: -246px;
				display: none;
			}
			.qui-feedback .icon {
				float: left;
				width: 24px;
				height: 150px;
				background: url(img/comment/icons_feedback.png) 0 0 no-repeat;
				cursor: pointer;
			}
			.qui-feedback.js-current > .icon {
				background-position: -29px 0;
			}
			.qui-feedback .cnt {
				float: left;
				width: 246px;
				height: 280px;
				background-color: #e8e4df;
			}
			.qui-feedback .cnt form {
				padding: 10px;
				font-size: 0;
			}
			.qui-feedback .cnt textarea {
				width: 214px;
				height: 192px;
				padding: 2px 5px;
				border: 1px solid #ccc;
				font-size: 12px;
			}
			.qui-feedback .cnt input {
				float: right;
				margin-top: 10px;
			}
			.qui-feedback .help {
				position: relative;
				top: -1px;
				border: 1px solid #ccc;
				border-top: none;
				background: #fefdc9;
				height: 24px;
				line-height: 22px;
				text-align: center;
				font-size: 12px;
			}
			.qui-feedback .help a {
				font-weight: bold;
			}
		</style>

		<script src="js/comment/footprintjs.js"></script>
		<script type="text/javascript" src="js/comment/jquery_cookiejs.js"></script>
		<style type="text/css">
			.qui-popup2 {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(img/comment/bg_255_255_255_0.7.png);
				z-index: 1000;
				overflow-y: auto;
				opacity: 0
			}
			.qui-popup2>div {
				display: table;
				height: 100%;
				margin: 0 auto
			}
			.qui-popup2-dt {
				display: table-cell;
				vertical-align: middle
			}
			.qui-popup2-box {
				margin: 0 auto;
				background-color: #fff;
				position: relative;
				-webkit-box-shadow: 0 0 6px #aaa;
				-moz-box-shadow: 0 0 6px #aaa;
				box-shadow: 0 0 6px #aaa;
				border: 1px solid #ccc;
				opacity: 0
			}
			.qui-popup2-loadingBtn,
			.qui-popup2-okBtn {
				vertical-align: middle;
				margin-left: 16px
			}
			.qui-popup2-box-title {
				height: 70px;
				line-height: 70px;
				font-size: 20px;
				font-weight: 700;
				padding-left: 30px
			}
			.qui-popup2-box-content {
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				padding: 0 30px
			}
			.qui-popup2-box-content>iframe {
				width: 100%;
				border: none
			}
			.qui-popup2-box-bottom {
				text-align: right;
				height: 70px;
				line-height: 70px;
				padding-right: 30px
			}
			.qui-popup2-closeIcon {
				position: absolute;
				right: 10px;
				top: 10px;
				cursor: pointer;
				background-image: url(img/comment/icons.png);
				height: 32px;
				width: 32px;
				background-repeat: no-repeat;
				background-position: 0 -18px;
				border-radius: 5px
			}
			.qui-popup2-closeIcon:hover {
				background-position: 0 -65px
			}
			.qui-popup2-cancelBtn {
				vertical-align: middle
			}
			.qui-popup2-loadingBtn {
				display: none
			}
			.tooltip {
				position: absolute;
				z-index: 1070;
				display: block;
				font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
				font-size: 9pt;
				font-weight: 400;
				line-height: 1.4;
				filter: alpha(opacity=0);
				opacity: 0
			}
			.tooltip:after {
				content: ''
			}
			.tooltip.in {
				filter: alpha(opacity=90);
				opacity: .9
			}
			.tooltip.top {
				padding: 5px 0;
				margin-top: -3px
			}
			.tooltip.right {
				padding: 0 5px;
				margin-left: 3px
			}
			.tooltip.bottom {
				padding: 5px 0;
				margin-top: 3px
			}
			.tooltip.left {
				padding: 0 5px;
				margin-left: -3px
			}
			.tooltip-inner {
				max-width: 200px;
				padding: 3px 8px;
				color: #959595;
				text-align: center;
				text-decoration: none;
				background-color: #f5f5f5;
				border: 1px solid #d7d7d7;
				border-radius: 4px
			}
			.tooltip-arrow,
			.tooltip:after {
				position: absolute;
				width: 0;
				height: 0;
				border-color: transparent;
				border-style: solid
			}
			.tooltip.top .tooltip-arrow,
			.tooltip.top:after {
				bottom: 0;
				left: 50%;
				margin-left: -5px;
				border-width: 5px 5px 0;
				border-top-color: #D7D7D7
			}
			.tooltip.top:after {
				bottom: 1px;
				border-top-color: #f5f5f5
			}
			.tooltip.top-left .tooltip-arrow,
			.tooltip.top-left:after {
				right: 5px;
				bottom: 0;
				margin-bottom: -5px;
				border-width: 5px 5px 0;
				border-top-color: #D7D7D7
			}
			.tooltip.top-left:after {
				bottom: 1px;
				border-top-color: #f5f5f5
			}
			.tooltip.top-right .tooltip-arrow,
			.tooltip.top-right:after {
				bottom: 0;
				left: 5px;
				margin-bottom: -5px;
				border-width: 5px 5px 0;
				border-top-color: #D7D7D7
			}
			.tooltip.top-right:after {
				bottom: 1px;
				border-top-color: #f5f5f5
			}
			.tooltip.right .tooltip-arrow,
			.tooltip.right:after {
				top: 50%;
				left: 0;
				margin-top: -5px;
				border-width: 5px 5px 5px 0;
				border-right-color: #D7D7D7
			}
			.tooltip.right:after {
				left: 1px;
				border-right-color: #f5f5f5
			}
			.tooltip.left .tooltip-arrow,
			.tooltip.left:after {
				top: 50%;
				right: 0;
				margin-top: -5px;
				border-width: 5px 0 5px 5px;
				border-left-color: #D7D7D7
			}
			.tooltip.left:after {
				right: 1px;
				border-left-color: #f5f5f5
			}
			.tooltip.bottom .tooltip-arrow,
			.tooltip.bottom:after {
				top: 0;
				left: 50%;
				margin-left: -5px;
				border-width: 0 5px 5px;
				border-bottom-color: #D7D7D7
			}
			.tooltip.bottom:after {
				top: 1px;
				border-bottom-color: #f5f5f5
			}
			.tooltip.bottom-left .tooltip-arrow,
			.tooltip.bottom-left:after {
				top: 0;
				right: 5px;
				margin-top: -5px;
				border-width: 0 5px 5px;
				border-bottom-color: #D7D7D7
			}
			.tooltip.bottom-left:after {
				top: 1px;
				border-bottom-color: #f5f5f5
			}
			.tooltip.bottom-right .tooltip-arrow,
			.tooltip.bottom-right:after {
				top: 0;
				left: 5px;
				margin-top: -5px;
				border-width: 0 5px 5px;
				border-bottom-color: #D7D7D7
			}
			.tooltip.bottom-right:after {
				top: 1px;
				border-bottom-color: #f5f5f5
			}
			.fade {
				opacity: 0;
				-webkit-transition: opacity .15s linear;
				-o-transition: opacity .15s linear;
				transition: opacity .15s linear
			}
			.fade.in {
				opacity: 1
			}
			.qui-inputAutocomplete {
				position: absolute;
				z-index: 1100;
				background-color: #fff;
				border: 1px solid #eee
			}
			.qui-inputAutocomplete-ul li {
				height: 32px;
				line-height: 32px;
				border-bottom: solid 1px #eee;
				background-color: #fff;
				cursor: pointer;
				word-break: keep-all;
				text-overflow: ellipsis;
				overflow: hidden
			}
			.qui-inputAutocomplete-ul li:hover,
			.qui-inputAutocomplete-ul li[data-select=true] {
				background-color: #e0f1de
			}
			.qui-inputAutocomplete-ul li.disableDefalut {
				background-color: #fff!important;
				cursor: default
			}
			.qui-inputAutocomplete-noResult {
				color: red
			}
			.qyer_inputAutocomplete_name {
				padding: 0 5px 0 10px
			}
			.qyer_inputAutocomplete_name .current {
				color: #077345
			}
			.qyer_inputAutocomplete_en {
				padding-right: 10px;
				font-family: Tahoma, Geneva, sans-serif
			}
			.qyer_inputAutocomplete_found {
				color: #959595;
				padding-right: 10px
			}
			.qyer_inputAutocomplete_creat {
				padding: 10px
			}
			.blur,
			.img_blur {
				-webkit-backface-visibility: hidden;
				-moz-backface-visibility: hidden;
				-ms-backface-visibility: hidden
			}
			@font-face {
				font-family: iconfont;
				src: url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.eot);
				src: url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.eot?#iefix) format('embedded-opentype'), url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.woff) format('woff'), url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.ttf) format('truetype'), url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.svg#iconfont) format('svg')
			}
			.iconfont {
				font-family: iconfont!important;
				font-size: 16px;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-webkit-text-stroke-width: .2px;
				-moz-osx-font-smoothing: grayscale
			}
			.comment-complete .title,
			.comment-head h1,
			.comment-layer .num-turn,
			.comment-layer .poi-item .poi-info .name,
			.comment-section .comm-sec-head h2,
			.comment-user .fp ul li em,
			.footprint-modal .fp-footer .fp-tags dl a,
			.footprint-modal .fp-header .title {
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif
			}
			.icon-infooutline:before {
				content: "\e61c"
			}
			.icon-yuanquan:before {
				content: "\e61a"
			}
			.icon-zan:before {
				content: "\e61b"
			}
			.fp-search:after,
			.icon-sousuo:before,
			.poi-search:after {
				content: "\e618"
			}
			.icon-xingxing:before {
				content: "\e619"
			}
			.icon-sanjiaoright:before {
				content: "\e616"
			}
			.icon-sanjiaoup:before {
				content: "\e617"
			}
			.icon-sanjiaodown:before {
				content: "\e614"
			}
			.icon-sanjiaoleft:before {
				content: "\e615"
			}
			.icon-jiantouleft:before {
				content: "\e60b"
			}
			.icon-jiantoudown:before {
				content: "\e60a"
			}
			.icon-jiaotong:before {
				content: "\e60e"
			}
			.icon-jiantouup:before {
				content: "\e60d"
			}
			.icon-jiantouright:before {
				content: "\e60c"
			}
			.icon-jingdian:before {
				content: "\e610"
			}
			.icon-qizi:before {
				content: "\e613"
			}
			.icon-qiongbi:before {
				content: "\e612"
			}
			.icon-meishi:before {
				content: "\e611"
			}
			.icon-huodong:before {
				content: "\e607"
			}
			.icon-jiahaothin:before {
				content: "\e608"
			}
			.icon-jiahao:before {
				content: "\e609"
			}
			.icon-huanyipi:before {
				content: "\e605"
			}
			.icon-huiche:before {
				content: "\e606"
			}
			.icon-duigouthin:before {
				content: "\e602"
			}
			.icon-gouwu:before {
				content: "\e603"
			}
			.icon-guanbi:before {
				content: "\e604"
			}
			.icon-dianping:before {
				content: "\e601"
			}
			.icon-chengshi:before {
				content: "\e600"
			}
			.comm-poi-container>ul:after,
			.comment-layer .poi-item .poi-upload .upload-photolist:after,
			.comment-user .score:after {
				visibility: hidden;
				content: " ";
				clear: both
			}
			.blur {
				-webkit-filter: blur(20px);
				-moz-filter: blur(20px);
				-ms-filter: blur(20px);
				filter: blur(20px);
				backface-visibility: hidden
			}
			.comment-layer {
				display: none;
				position: fixed;
				z-index: 1000;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: url(img/comment/bg_255_255_255_0.7.png);
				background: #FFF\9
			}
			.comment-head {
				border-bottom: 1px solid #ececec;
				height: 50px;
				background: #f5f5f5;
				-ms-box-sizing: border-box;
				box-sizing: border-box
			}
			.comment-head .logo {
				float: left;
				margin-top: 12px;
				margin-left: 20px
			}
			.comment-head h1 {
				float: left;
				font-size: 24px;
				margin-left: 27px;
				height: 50px;
				line-height: 50px
			}
			.comment-head button {
				float: right;
				margin-top: 12px;
				margin-right: 62px
			}
			.comment-body {
				overflow-y: auto
			}
			.comment-body .comment-edit-bg {
				display: none;
				position: absolute;
				top: 0;
				z-index: 100;
				width: 100%;
				height: 100%;
				background: #FFF;
				opacity: .8;
				filter: alpha(opacity=80)
			}
			.city-list ul li img,
			.img_blur {
				-webkit-filter: blur(3px);
				-ms-filter: blur(3px)
			}
			.comment-body .comment-content {
				margin: 0 auto;
				padding-bottom: 20px;
				width: 980px
			}
			.comment-body .comment-main {
				width: 680px
			}
			.comment-body .comment-main.animate {
				animation: main 1s;
				-moz-animation: main 1s;
				-webkit-animation: main 1s;
				-o-animation: main 1s
			}
			.comment-body .comment-main.cityload {
				padding-bottom: 50px;
				background: url(img/comment/loading_big.gif) center bottom no-repeat
			}
			.comment-body .comment-main.loading {
				margin-top: 86px;
				height: 120px;
				border: 1px solid #ececec;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				box-shadow: 0 0 10px rgba(0, 0, 0, .2);
				background: url(img/comment/loading_big.gif) center 40px no-repeat #FFF
			}
			.comment-body .comment-side {
				position: fixed;
				top: 50px;
				left: 50%;
				margin-left: 210px;
				width: 270px
			}
			.comment-body .comment-side .comment-side-bg {
				display: none;
				position: absolute;
				z-index: 10;
				top: 0;
				left: 0;
				width: 270px;
				background-color: transparent;
				height: 100%
			}
			.comment-section .comm-sec-head {
				padding-top: 46px;
				height: 26px
			}
			.comment-section .comm-sec-head h2 {
				float: left;
				line-height: 26px;
				font-size: 20px
			}
			.comment-section .comm-sec-head .progress {
				float: right;
				margin-top: 12px
			}
			.comment-section .comm-sec-head .change {
				float: right;
				margin-top: 10px;
				height: 16px;
				line-height: 16px;
				color: #959595
			}
			.comment-section .comm-sec-head .change a {
				text-decoration: none;
				color: #959595
			}
			.comment-section .comm-sec-head .change a:hover {
				color: #6d6d6d
			}
			.comm-poi-container>ul {
				margin-left: -20px
			}
			.comm-poi-container>ul:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.comm-poi-container>ul>li {
				float: left;
				margin-top: 20px;
				margin-left: 20px;
				width: 330px;
				height: 120px
			}
			.comm-poi-container .loadingmore {
				margin-top: 20px;
				padding-left: 310px;
				border: 1px solid #ececec;
				height: 38px;
				line-height: 38px;
				background: #FFF;
				color: silver;
				cursor: pointer
			}
			.comm-poi-container .loadingmore.loading,
			.comm-poi-container .loadingmore.loading a {
				cursor: default
			}
			.comm-poi-container .loadingmore a {
				font-size: 14px;
				color: silver;
				text-decoration: none;
				vertical-align: middle
			}
			.comm-poi-container .loadingmore img {
				display: none;
				margin-left: 5px;
				vertical-align: middle
			}
			.comm-poi-container .loadingmore.loading,
			.comm-poi-container .loadingmore:hover {
				border-color: silver;
				color: #959595
			}
			.comm-poi-container .loadingmore.loading a,
			.comm-poi-container .loadingmore:hover a {
				color: #959595
			}
			.comm-poi-container .loadingmore.loading img {
				display: inline-block
			}
			.comment-user {
				height: 460px
			}
			.comment-user .user-avatar {
				padding-top: 92px;
				height: 96px
			}
			.comment-user .user-avatar .user-wrap {
				width: 100%;
				height: 96px;
				text-align: center;
				background: url(img/comment/user_bg.jpg) no-repeat #FFF
			}
			.comment-user .user-avatar .user-wrap a {
				color: #FFF;
				text-decoration: none
			}
			.comment-user .user-avatar .user-wrap img {
				margin-top: -42px;
				border: 3px solid #FFF;
				width: 100px;
				height: 100px;
				vertical-align: middle;
				border-radius: 50%;
				-ms-box-sizing: border-box;
				box-sizing: border-box
			}
			.comment-user .user-avatar .user-wrap span {
				display: block;
				margin-top: 5px;
				height: 28px;
				line-height: 28px;
				font-size: 14px;
				color: #FFF
			}
			.comment-user .score {
				padding-top: 20px;
				padding-bottom: 8px;
				border: 1px solid #ececec;
				border-top-width: 0;
				height: 110px;
				background: url(img/comment/line.png) center 44px no-repeat #FFF
			}
			.comment-user .score:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.comment-user .score .score-wrap {
				float: left;
				margin: 0 28px 0 26px;
				width: 80px
			}
			.comment-user .score .score-wrap .turn {
				color: #1995dd;
				padding-top: 30px
			}
			.comment-user .score .score-wrap .text-wrap {
				margin-top: 8px;
				font-size: 14px;
				color: #636363
			}
			.comment-user .score .score-wrap .text-wrap a {
				color: #D4D4D4;
				text-decoration: none;
				vertical-align: middle;
				font-size: 14px
			}
			.comment-user .score .score-wrap .text-wrap a:hover,
			.comment-user .score .score-wrap.red .turn {
				color: #ff654c
			}
			.comment-user .score .score-wrap .text-wrap span {
				margin-left: 27px;
				vertical-align: middle
			}
			.comment-user .score .score-wrap.red .cir {
				background-position: 0 -8px
			}
			.comment-user .fp {
				padding: 18px 28px;
				border: 1px solid #ececec;
				border-top-width: 0;
				height: 102px;
				background: #fdfdfd
			}
			.comment-user .fp ul li {
				height: 34px;
				line-height: 34px;
				font-size: 14px;
				color: #959595
			}
			.comment-user .fp ul li i.iconfont {
				color: silver
			}
			.comment-user .fp ul li i,
			.comment-user .fp ul li span {
				vertical-align: middle
			}
			.comment-user .fp ul li em {
				font-size: 20px;
				margin: 0 5px;
				color: #666;
				font-style: normal;
				font-weight: 400
			}
			.comment-user.animate {
				animation: scale 1s;
				-moz-animation: scale 1s;
				-webkit-animation: scale 1s;
				-o-animation: scale 1s
			}
			.comment-user.loading {
				margin-top: 86px;
				height: 374px;
				border: 1px solid #ececec;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				box-shadow: 0 0 10px rgba(0, 0, 0, .2);
				background: url(img/comment/loading_big.gif) center 120px no-repeat #FFF
			}
			.comment-nav {
				margin-top: 20px;
				animation: navbar 1s;
				-moz-animation: navbar 1s;
				-webkit-animation: navbar 1s;
				-o-animation: navbar 1s
			}
			.comment-nav .navbar {
				border: 1px solid #d7d7d7;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				width: 20px;
				height: 20px;
				line-height: 20px;
				border-radius: 2px;
				text-align: center;
				color: #959595;
				background: #FFF;
				cursor: pointer
			}
			.comment-nav .navbar .iconfont {
				font-size: 12px;
				vertical-align: 2px
			}
			.comment-nav .navbar.disabled {
				color: #d7d7d7;
				cursor: default
			}
			.comment-nav .nav-wrap {
				padding: 10px 0;
				background: url(img/comment/line.png) 9px 0 repeat-y
			}
			.comment-nav .nav-wrap .nav-scroll {
				position: relative;
				height: 0;
				overflow: hidden;
				-webkit-transition: all .5s ease-in-out;
				-moz-transition: all .5s ease-in-out;
				-ms-transition: all .5s ease-in-out;
				-o-transition: all .5s ease-in-out;
				transition: all .5s ease-in-out
			}
			.comment-nav .nav-wrap dl {
				padding-left: 26px;
				height: 50px;
				font-size: 14px;
				background: url(img/comment/cir.png) -25px 5px no-repeat
			}
			.comment-nav .nav-wrap dl a {
				color: #636363;
				text-decoration: none
			}
			.comment-nav .nav-wrap dl a:hover {
				color: #21ae47
			}
			.comment-nav .nav-wrap dl dt {
				color: #636363
			}
			.comment-nav .nav-wrap dl dd {
				display: none;
				font-size: 12px;
				color: silver
			}
			.comment-nav .nav-wrap dl dd em {
				color: #636363
			}
			.comment-nav .nav-wrap dl.current {
				background-position: 5px -25px
			}
			.comment-nav .nav-wrap dl.current a {
				color: #21ae47
			}
			.comment-nav .nav-wrap dl.current dd {
				display: block
			}
			.comment-nav .nav-wrap dl:first-child {
				margin-top: 10px
			}
			.comment-layer .poi-item {
				position: relative;
				border: 1px solid #ececec;
				padding: 14px;
				width: 300px;
				height: 90px;
				min-height: 90px;
				overflow: hidden;
				background: #FFF;
				cursor: pointer
			}
			.comment-layer .poi-item .error-tips {
				display: none;
				color: #ff654c;
				font-weight: 400;
				font-style: normal
			}
			.comment-layer .poi-item .poi-info {
				padding-left: 100px;
				height: 90px
			}
			.comment-layer .poi-item .poi-info img {
				float: left;
				margin-left: -100px;
				width: 90px;
				height: 90px
			}
			.comment-layer .poi-item .poi-info .en_name,
			.comment-layer .poi-item .poi-info .name {
				display: block;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden
			}
			.comment-layer .poi-item .poi-info .name {
				font-size: 16px
			}
			.comment-layer .poi-item .poi-info .en_name {
				color: silver;
				line-height: 16px
			}
			.comment-layer .poi-item .poi-info .tags {
				margin-top: 6px
			}
			.comment-layer .poi-item .poi-info .tags .tag {
				display: inline-block;
				margin-right: 12px;
				border: 1px solid #10b041;
				padding: 0 8px;
				height: 18px;
				line-height: 18px;
				border-radius: 18px;
				color: #10b041
			}
			.comment-layer .poi-item .poi-info .tags em {
				color: #ff654c;
				font-weight: 400
			}
			.comment-layer .poi-item .poi-info .tags em i {
				font-size: 14px;
				font-weight: 700;
				font-style: normal
			}
			.comment-complete em,
			.comment-layer .poi-item .poi-comment .qui-textArea .tips em,
			.comment-layer .progress .text em {
				font-style: normal;
				font-weight: 400
			}
			.comment-layer .poi-item .poi-info .star {
				margin-top: 3px;
				line-height: 20px;
				color: #ececec
			}
			.comment-layer .poi-item .poi-info .star .iconfont {
				margin-right: 6px
			}
			.comment-layer .poi-item .poi-info .star .iconfont.current,
			.comment-layer .poi-item .poi-info .star .iconfont.hover {
				color: #5cad77
			}
			.comment-layer .poi-item .poi-info .star span.iconfont {
				position: relative;
				margin-left: 3px;
				margin-right: 0
			}
			.comment-layer .poi-item .poi-info .star span.iconfont .tooltip {
				position: absolute;
				top: -31px;
				left: 50%;
				margin-left: -55px;
				width: 110px
			}
			.comment-layer .poi-item .poi-info .star em.level {
				margin-left: 6px;
				font-size: 14px;
				font-weight: 400;
				font-style: normal;
				color: #959595
			}
			.comment-layer .poi-item .poi-comment {
				margin-top: 20px
			}
			.comment-layer .poi-item .poi-comment .qui-textArea textarea {
				display: block;
				padding: 8px 10px;
				width: 100%;
				height: 110px;
				font-size: 14px;
				color: #323232
			}
			.comment-layer .poi-item .poi-comment .qui-textArea .tips {
				margin-top: 9px;
				height: 24px;
				line-height: 24px;
				text-align: right;
				color: silver;
				font-size: 14px
			}
			.comment-layer .poi-item .poi-comment .qui-textArea span.iconfont {
				position: relative
			}
			.comment-layer .poi-item .poi-comment .qui-textArea span.iconfont .tooltip {
				position: absolute;
				top: -31px;
				left: 50%;
				margin-left: -70px;
				width: 140px
			}
			.comment-layer .poi-item .poi-upload .upload-flie {
				float: left;
				margin-top: -24px;
				height: 24px;
				line-height: 24px
			}
			.comment-layer .poi-item .poi-upload .upload-flie label {
				display: inline-block;
				font-size: 14px;
				height: 24px;
				line-height: 24px;
				padding-left: 20px;
				cursor: pointer;
				color: #636363;
				background: url(img/comment/upload.png) 0 center no-repeat
			}
			.comment-layer .poi-item .poi-upload .upload-photolist {
				margin-left: -9px;
				padding-top: 9px;
				clear: both
			}
			.comment-layer .poi-item .poi-upload .upload-photolist:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li {
				float: left;
				position: relative;
				margin-left: 9px;
				margin-bottom: 9px;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				width: 68px;
				height: 68px
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li .percent {
				display: block;
				width: 68px;
				height: 68px;
				line-height: 68px;
				text-align: center;
				border: 1px solid silver;
				background: #e7e7e7
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li .percent span {
				display: block;
				margin: 32px auto 0;
				width: 46px;
				height: 3px;
				background: #BFBFBF;
				border-radius: 2px
			}
			.comment-layer .poi-item .poi-btn button,
			.footprint-modal .fp-footer .fp-btns button {
				margin-left: 10px;
				vertical-align: middle
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li .percent span em {
				display: block;
				width: 0;
				height: 100%;
				background: #5EA642;
				border-radius: 2px
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li img {
				width: 68px;
				height: 68px
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li .close {
				display: none;
				position: absolute;
				top: -5px;
				right: -5px;
				width: 20px;
				height: 20px;
				background: url(img/comment/upload-close.png) no-repeat;
				cursor: pointer
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li:hover .close {
				display: block;
				animation: navbar .25s;
				-moz-animation: navbar .25s;
				-webkit-animation: navbar .25s;
				-o-animation: navbar .25s
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li.add .addPhotoBtn {
				display: block;
				width: 68px;
				height: 68px;
				line-height: 68px;
				text-align: center;
				border: 1px solid silver;
				background: #e7e7e7;
				cursor: pointer
			}
			.comment-layer .poi-item .poi-upload .upload-photolist li.add .addPhotoBtn .iconfont {
				font-size: 36px;
				color: silver
			}
			.comment-layer .poi-item .poi-btn {
				text-align: right
			}
			.comment-layer .poi-item.commented {
				cursor: default;
				border-color: #3f9f5f
			}
			.comment-layer .poi-item.commented:before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 28px;
				height: 28px;
				background: url(img/comment/flag.png) no-repeat
			}
			.footprint-modal .fp-footer .fp-tags dl dd:after,
			.footprint-modal .fp-footer:after,
			.footprint-modal .fp-header:after {
				visibility: hidden;
				content: " ";
				clear: both
			}
			.comment-layer .poi-item.poi-item-edit {
				border-color: #007852;
				height: auto;
				z-index: 1;
				cursor: default
			}
			.comment-layer .poi-item.poi-item-edit .iconfont {
				cursor: pointer
			}
			.comment-layer .poi-item.poi-item-edit:hover {
				border-color: #007852
			}
			.comment-layer .poi-item:hover {
				border-color: #10b041
			}
			.comment-layer .progress {
				height: 14px;
				line-height: 14px;
				color: #959595
			}
			.comment-layer .progress .text {
				float: left;
				font-size: 12px
			}
			.comment-layer .progress .progress-bar {
				float: left;
				margin-top: 3px;
				margin-left: 8px;
				padding: 2px 0 2px 3px;
				width: 264px;
				height: 3px;
				background: url(img/comment/progress.png) no-repeat
			}
			.comment-layer .progress .progress-bar .wrap {
				display: block;
				margin-top: -4px;
				min-width: 11px;
				max-width: 100%;
				width: 10%;
				height: 11px;
				background: url(img/comment/progress.png) right -10px no-repeat;
				-webkit-transition: all .5s ease-in-out;
				-moz-transition: all .5s ease-in-out;
				-ms-transition: all .5s ease-in-out;
				-o-transition: all .5s ease-in-out;
				transition: all .5s ease-in-out
			}
			.comment-layer .circle-wrap {
				position: relative;
				width: 80px;
				height: 80px;
				border-radius: 50%;
				background: url(img/comment/round.png) no-repeat
			}
			.comment-layer .circle-wrap .cir {
				position: absolute;
				top: -3px;
				left: 36px;
				width: 8px;
				height: 8px;
				background: url(img/comment/dot.png) no-repeat
			}
			.comment-layer .num-turn {
				font-size: 16px;
				line-height: 20px;
				height: 20px;
				text-align: center;
				overflow: hidden;
				white-space: nowrap
			}
			.comment-layer .num-turn .num-wrap {
				display: inline-block;
				position: relative;
				width: 10px;
				height: 20px
			}
			.comment-layer .num-turn .num-span {
				position: absolute;
				top: 0
			}
			.comment-layer .num-turn .num-span span {
				display: block;
				height: 20px
			}
			.comment-complete {
				padding: 20px 0;
				width: 425px;
				background: #FFF;
				color: #959595;
				font-size: 14px
			}
			.comment-complete p {
				line-height: 26px
			}
			.comment-complete em {
				color: #10b041
			}
			.comment-complete .title {
				text-align: center;
				padding-bottom: 20px;
				font-size: 18px;
				color: #323232
			}
			.comment-complete .iconfont {
				font-size: 22px;
				font-weight: 700;
				margin-right: 10px;
				color: #6fbc22
			}
			@media (max-width: 980px) {
				.comment-content:after {
					visibility: hidden;
					display: block;
					font-size: 0;
					content: " ";
					clear: both;
					height: 0
				}
				.comment-content .comment-main {
					float: left
				}
				.comment-content .comment-side {
					position: static;
					margin-left: 0;
					float: right
				}
			}
			@-webkit-keyframes scale {
				from {
					transform: rotateY(90deg);
					opacity: 0
				}
				to {
					transform: rotateY(0);
					opacity: 1
				}
			}
			@-moz-keyframes scale {
				from {
					transform: rotateY(90deg);
					opacity: 0
				}
				to {
					transform: rotateY(0);
					opacity: 1
				}
			}
			@-ms-keyframes scale {
				from {
					transform: rotateY(90deg);
					opacity: 0
				}
				to {
					transform: rotateY(0);
					opacity: 1
				}
			}
			@-o-keyframes scale {
				from {
					transform: rotateY(90deg);
					opacity: 0
				}
				to {
					transform: rotateY(0);
					opacity: 1
				}
			}
			@keyframes scale {
				from {
					transform: rotateY(90deg);
					opacity: 0
				}
				to {
					transform: rotateY(0);
					opacity: 1
				}
			}
			@-webkit-keyframes main {
				from {
					opacity: 0;
					transform: translate(0, 20px)
				}
				to {
					opacity: 1;
					transform: translate(0, 0)
				}
			}
			@-moz-keyframes main {
				from {
					opacity: 0;
					transform: translate(0, 20px)
				}
				to {
					opacity: 1;
					transform: translate(0, 0)
				}
			}
			@-ms-keyframes main {
				from {
					opacity: 0;
					transform: translate(0, 20px)
				}
				to {
					opacity: 1;
					transform: translate(0, 0)
				}
			}
			@-o-keyframes main {
				from {
					opacity: 0;
					transform: translate(0, 20px)
				}
				to {
					opacity: 1;
					transform: translate(0, 0)
				}
			}
			@keyframes main {
				from {
					opacity: 0;
					transform: translate(0, 20px)
				}
				to {
					opacity: 1;
					transform: translate(0, 0)
				}
			}
			@-webkit-keyframes navbar {
				from {
					opacity: 0
				}
				to {
					opacity: 1
				}
			}
			@-moz-keyframes navbar {
				from {
					opacity: 0
				}
				to {
					opacity: 1
				}
			}
			@-ms-keyframes navbar {
				from {
					opacity: 0
				}
				to {
					opacity: 1
				}
			}
			@-o-keyframes navbar {
				from {
					opacity: 0
				}
				to {
					opacity: 1
				}
			}
			@keyframes navbar {
				from {
					opacity: 0
				}
				to {
					opacity: 1
				}
			}
			.ovh,
			.ovh body {
				overflow: hidden
			}
			.fl {
				float: left
			}
			.fr {
				float: right
			}
			.img_blur {
				-moz-filter: blur(3px);
				filter: blur(3px);
				backface-visibility: hidden
			}
			.define-popup .qui-popup2-box-content {
				padding: 0
			}
			.define-popup .qui-popup2-box-bottom {
				display: none
			}
			.footprint-modal {
				position: relative;
				width: 730px;
				background: #f9faf9
			}
			.footprint-modal .fp-close {
				position: absolute;
				top: 20px;
				right: 20px;
				font-size: 18px;
				width: 1em;
				height: 1em;
				line-height: 1;
				text-align: center;
				overflow-y: hidden;
				color: #d7d7d7;
				cursor: pointer
			}
			.footprint-modal .fp-close .iconfont {
				font-size: 18px
			}
			.footprint-modal .fp-close:hover {
				color: #959595
			}
			.footprint-modal .fp-header {
				padding: 25px 50px 0;
				font-size: 16px
			}
			.footprint-modal .fp-header:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.footprint-modal .fp-header .title {
				margin-top: 0;
				font-size: 22px;
				height: 44px;
				line-height: 44px;
				color: #323232
			}
			.footprint-modal .fp-header .select,
			.footprint-modal .fp-header>span {
				float: left;
				margin-top: 15px;
				margin-right: 10px
			}
			.footprint-modal .fp-header>span {
				height: 16px;
				line-height: 16px
			}
			.footprint-modal .fp-header .gt {
				font-size: 12px;
				color: silver
			}
			.footprint-modal .fp-header .gt .iconfont {
				font-size: 12px
			}
			.footprint-modal .fp-header .gray {
				color: silver
			}
			.footprint-modal .fp-header .select {
				position: relative;
				margin-top: 11px;
				z-index: 200
			}
			.footprint-modal .fp-header .select .text {
				display: inline-block;
				height: 30px;
				padding-right: 10px;
				text-decoration: none;
				color: #323232;
				background: url(img/comment/arrow.png) right 10px no-repeat
			}
			.footprint-modal .fp-header .select .list {
				display: none
			}
			.footprint-modal .fp-header .select .list ul {
				float: left;
				position: absolute;
				top: 25px;
				left: -12px;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				border: 1px solid #d7d7d7;
				background: #FFF
			}
			.footprint-modal .fp-header .select .list ul li {
				padding: 0 12px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				white-space: nowrap;
				cursor: pointer;
				color: #323232
			}
			.footprint-modal .fp-header .select .list ul li:hover {
				background: #e3fae1
			}
			.footprint-modal .fp-header .select:hover .list {
				display: block
			}
			.footprint-modal .fp-body {
				padding: 26px 50px 0
			}
			.footprint-modal .fp-footer {
				border-top: 1px solid #EBEBEB;
				padding: 25px 50px;
				min-height: 36px;
				background: #FFF
			}
			.footprint-modal .fp-footer:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.footprint-modal .fp-footer .fp-tags {
				float: left;
				margin-top: -3px;
				width: 510px
			}
			.footprint-modal .fp-footer .fp-tags dl {
				line-height: 24px
			}
			.footprint-modal .fp-footer .fp-tags dl a {
				display: inline-block;
				margin-top: 10px;
				font-size: 16px;
				color: #959595;
				text-decoration: none;
				vertical-align: middle
			}
			.footprint-modal .fp-footer .fp-tags dl .iconfont {
				font-size: 10px;
				color: #323232;
				vertical-align: middle
			}
			.footprint-modal .fp-footer .fp-tags dl dt {
				float: left;
				width: 75px
			}
			.footprint-modal .fp-footer .fp-tags dl dt a.fold {
				padding-right: 10px;
				background: url(img/comment/arrow.png) right 10px no-repeat
			}
			.footprint-modal .fp-footer .fp-tags dl dt a.fold:hover {
				color: #323232
			}
			.footprint-modal .fp-footer .fp-tags dl dd {
				max-height: 68px;
				overflow: hidden;
				font-size: 0;
				margin-left: 80px
			}
			.footprint-modal .fp-footer .fp-tags dl dd:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.footprint-modal .fp-footer .fp-tags dl dd a.tag {
				display: inline-block;
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				border: 1px solid #10b041;
				margin-right: 10px;
				height: 24px;
				line-height: 24px;
				padding: 0 12px;
				border-radius: 24px;
				white-space: nowrap;
				font-size: 14px;
				color: #10b041
			}
			.footprint-modal .fp-footer .fp-change,
			.footprint-modal .fp-success {
				font-size: 16px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif
			}
			.footprint-modal .fp-footer .fp-tags dl dd a.tag:hover {
				text-decoration: line-through
			}
			.footprint-modal .fp-footer .fp-tags.tags-fold .fold {
				background-position: right -17px
			}
			.footprint-modal .fp-footer .fp-tags.tags-fold dd {
				max-height: none
			}
			.footprint-modal .fp-footer .fp-change {
				float: left;
				height: 36px;
				line-height: 36px;
				color: #959595
			}
			.footprint-modal .fp-footer .fp-btns,
			.poi-search {
				float: right
			}
			.footprint-modal .fp-footer .fp-change em {
				color: #10b041
			}
			.footprint-modal .fp-success {
				padding: 10px 0 16px;
				width: 630px
			}
			.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:before,
			.fp-search:after,
			.poi-search:after {
				font-family: iconfont_footprint!important;
				-webkit-font-smoothing: antialiased;
				-webkit-text-stroke-width: .2px;
				-moz-osx-font-smoothing: grayscale;
				font-style: normal
			}
			.footprint-modal .fp-success h3 {
				height: 40px;
				font-size: 28px;
				line-height: 40px
			}
			.footprint-modal .fp-success h3 em {
				color: #3f9f5f
			}
			.footprint-modal .fp-success h3 .iconfont {
				font-size: 30px;
				line-height: 40px;
				color: #6cbe00
			}
			.footprint-modal .fp-success h3 .iconfont,
			.footprint-modal .fp-success h3 span {
				vertical-align: middle
			}
			.footprint-modal .fp-success p {
				height: 30px;
				line-height: 30px;
				color: #959595
			}
			.footprint-modal .fp-success-center {
				padding-bottom: 60px;
				text-align: center
			}
			.footprint-modal .qui-inputAutocomplete {
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				z-index: 100
			}
			.footprint-modal .qui-inputAutocomplete em {
				font-weight: 400
			}
			.footprint-modal .qui-inputAutocomplete .qui-inputAutocomplete-noResult {
				padding: 0 10px;
				height: 46px;
				line-height: 46px;
				font-size: 14px;
				color: #323232
			}
			.footprint-modal .qui-inputAutocomplete li {
				border-bottom: 0;
				height: 46px;
				line-height: 46px;
				font-size: 14px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden
			}
			.footprint-modal .qui-inputAutocomplete li .qyer_inputAutocomplete_en .current,
			.footprint-modal .qui-inputAutocomplete li .qyer_inputAutocomplete_name .current {
				color: #3f9f5f
			}
			.footprint-modal .fpSearchContainer .qui-inputAutocomplete li {
				padding-right: 40px
			}
			.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:before {
				float: right;
				display: none;
				margin-right: -24px;
				content: '\e606';
				color: #10b041;
				font-size: 15px
			}
			.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:hover:before {
				display: block
			}
			.footprint-modal .poiSearchContainer .qui-inputAutocomplete li {
				font-size: 12px;
				height: 32px;
				line-height: 32px
			}
			.footprint-modal .poiSearchContainer .qui-inputAutocomplete .qyer_inputAutocomplete_creat {
				border-top: 1px solid #ececec
			}
			.footprint-modal .poiSearchContainer .qui-inputAutocomplete .qyer_inputAutocomplete_creat a {
				color: #959595
			}
			.poi-modal {
				width: auto
			}
			.poi-modal .fp-body {
				padding: 0 40px
			}
			.poi-modal .fp-footer {
				padding: 25px 40px
			}
			.fp-search,
			.poi-search {
				position: relative
			}
			.fp-search .mark,
			.poi-search .mark {
				display: none;
				position: absolute;
				top: 1px;
				right: 15px;
				width: 130px;
				height: 42px;
				line-height: 42px;
				text-align: right;
				font-size: 14px;
				color: #E06448;
				background: #FFF
			}
			.fp-search:after,
			.poi-search:after {
				display: block;
				position: absolute;
				z-index: 10;
				top: 13px;
				left: 12px;
				font-size: 16px;
				width: 16px;
				height: 16px;
				line-height: 16px;
				color: silver
			}
			.city-list ul:after,
			.continent-list ul:after,
			.fp-tabs .tabs ul:after,
			.poi-list ul:after {
				content: " ";
				visibility: hidden;
				clear: both
			}
			.fp-search .txt,
			.poi-search .txt {
				-ms-box-sizing: border-box;
				box-sizing: border-box;
				font-size: 16px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
				border: 1px solid #ececec;
				padding: 0 12px 0 32px;
				width: 100%;
				height: 44px;
				line-height: 44px;
				color: #323232;
				background: #FFF
			}
			.fp-search .txt:focus,
			.poi-search .txt:focus {
				border-color: #5fa678;
				box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .05) inset
			}
			.fp-search.marked .txt,
			.poi-search.marked .txt {
				padding-right: 130px;
				border-color: #E06448!important
			}
			.fp-search input::-webkit-input-placeholder,
			.poi-search input::-webkit-input-placeholder {
				color: silver!important
			}
			.fp-search input::-moz-placeholder,
			.poi-search input::-moz-placeholder {
				color: silver!important
			}
			.fp-search input:-moz-placeholder,
			.poi-search input:-moz-placeholder {
				color: silver!important
			}
			.fp-search input:-ms-input-placeholder,
			.poi-search input:-ms-input-placeholder {
				color: silver!important
			}
			.fp-search.marked .mark {
				display: block
			}
			.poi-search {
				margin-top: 8px;
				width: 178px
			}
			.poi-search .txt {
				font-size: 14px;
				height: 30px;
				line-height: 30px
			}
			.poi-search .mark {
				height: 28px;
				line-height: 28px
			}
			.poi-search:after {
				top: 7px;
				font-size: 14px
			}
			.poi-search.marked .mark {
				display: block
			}
			.fp-tabs .tabs {
				padding-top: 20px;
				width: 630px
			}
			.fp-tabs .tabs ul {
				border-bottom: 1px solid #e8e8e8
			}
			.fp-tabs .tabs ul:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.fp-recommend .title,
			.fp-tabs .tabs ul li {
				font-size: 16px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif
			}
			.fp-tabs .tabs ul li {
				float: left;
				width: 78.75px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: #323232
			}
			.fp-tabs .tabs ul li a {
				display: block;
				padding-bottom: 1px;
				height: 38px;
				line-height: 38px;
				color: #323232;
				text-decoration: none
			}
			.fp-tabs .tabs ul li.current a,
			.fp-tabs .tabs ul li:hover a {
				padding-bottom: 1px;
				color: #5cad77;
				border-bottom: 2px solid #10b041
			}
			.fp-tabs .fp-list-cont {
				margin-bottom: 15px;
				height: 240px
			}
			.fp-tabs .fp-list-cont .city-list {
				margin-top: 10px
			}
			.fp-list-cont {
				position: relative;
				margin-top: 18px;
				width: 654px;
				height: 310px;
				background: url(img/comment/loading_big.gif) center 80px no-repeat;
				overflow: auto
			}
			.fp-list-cont .section {
				display: none;
				min-height: 230px;
				background: #f9faf9
			}
			.fp-recommend {
				margin-bottom: 22px;
				height: 304px;
				overflow: hidden
			}
			.fp-recommend .title {
				height: 38px;
				line-height: 38px;
				color: #323232
			}
			.fp-recommend .content {
				height: 114px;
				overflow: hidden
			}
			.city-list {
				background: #f9faf9;
				overflow: hidden
			}
			.city-list ul {
				margin-top: -18px;
				margin-left: -18px
			}
			.city-list ul:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.city-list ul li {
				float: left;
				position: relative;
				margin-top: 18px;
				margin-left: 18px;
				width: 90px;
				height: 90px;
				overflow: hidden;
				cursor: pointer
			}
			.city-list ul li img {
				vertical-align: middle;
				width: 90px;
				height: 90px;
				-moz-filter: blur(3px);
				filter: blur(3px);
				-webkit-backface-visibility: hidden;
				-moz-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden
			}
			.city-list ul li .cont-table {
				position: absolute;
				z-index: 1;
				top: 0;
				left: 0;
				display: table;
				width: 90px;
				height: 90px;
				background: rgba(0, 0, 0, .3)
			}
			.city-list ul li .cont-table .text {
				display: table-cell;
				vertical-align: middle;
				text-align: center
			}
			.city-list ul li .cont-table .text em,
			.city-list ul li .cont-table .text i {
				display: block;
				width: 90px;
				font-size: 14px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
				max-height: 36px;
				line-height: 18px;
				overflow: hidden;
				text-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
				color: #FFF
			}
			.city-list ul li .cont-table .text i {
				max-height: 30px;
				line-height: 15px;
				font-size: 12px;
				color: silver
			}
			.city-list ul li .control {
				display: none;
				position: absolute;
				z-index: 10;
				top: 0;
				left: 0;
				width: 90px;
				height: 90px;
				background: #10b041;
				background: rgba(16, 176, 65, .85)
			}
			.city-list ul li .control .iconfont {
				display: block;
				margin: 14px auto 0;
				font-size: 37px;
				width: 1em;
				height: 1em;
				line-height: 1em;
				color: #79bf8e
			}
			.city-list ul li .control .text {
				display: table;
				margin-top: 2px;
				width: 100%;
				height: 36px;
				text-align: center;
				color: #FFF
			}
			.city-list ul li .control .text i {
				display: table-cell;
				vertical-align: middle;
				overflow: hidden;
				font-size: 14px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
				max-height: 36px;
				line-height: 18px;
				text-shadow: 1px 1px 3px rgba(0, 0, 0, .3)
			}
			.city-list ul li.disabled {
				cursor: default
			}
			.city-list ul li.disabled .cont-table {
				background: #e6e6e5;
				background: rgba(245, 245, 245, .8)
			}
			.city-list ul li.disabled .cont-table em {
				color: #636363;
				text-shadow: none
			}
			.city-list ul li.disabled .cont-table i {
				color: #959595;
				text-shadow: none
			}
			.city-list ul li.disabled .tooltip {
				position: absolute
			}
			.city-list ul li.disabled:hover .cont-table {
				display: table
			}
			.city-list ul li.current .cont-table,
			.city-list ul li.disabled:hover .control,
			.city-list ul li:hover .cont-table {
				display: none
			}
			.city-list ul li.current .control,
			.city-list ul li:hover .control {
				display: block
			}
			.city-list ul li.current .control .iconfont {
				color: #FFF
			}
			.city-list em,
			.city-list i {
				font-style: normal;
				font-weight: 400
			}
			.city-list.loading {
				padding-bottom: 10px
			}
			.city-list.loading ul {
				padding-bottom: 30px;
				background: url(img/comment/wait_16.gif) bottom center no-repeat
			}
			.continent-list ul {
				margin-left: -45px
			}
			.continent-list ul:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.continent-list ul li {
				float: left;
				margin-left: 45px;
				width: 180px;
				height: 30px;
				line-height: 30px;
				font-size: 14px
			}
			.continent-list ul li .text {
				padding: 7px 0;
				height: 16px;
				line-height: 16px
			}
			.continent-list ul li .text a {
				display: inline-block;
				max-width: 138px;
				line-height: 16px;
				vertical-align: middle;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: silver
			}
			.continent-list ul li .text a em {
				color: #636363;
				font-weight: 400
			}
			.continent-list ul li .text a:hover {
				text-decoration: none;
				color: #3f9f5f
			}
			.continent-list ul li .text a:hover em {
				color: #3f9f5f
			}
			.continent-list ul li .text .hot {
				display: inline-block;
				margin-left: 6px;
				padding: 0 4px;
				height: 16px;
				line-height: 16px;
				border-radius: 2px;
				font-size: 12px;
				color: #FFF;
				background: #ff654c;
				vertical-align: middle
			}
			.poi-list {
				overflow: hidden
			}
			.poi-list ul {
				margin-left: -11px
			}
			.poi-list ul:after {
				display: block;
				font-size: 0;
				height: 0
			}
			.poi-list ul li {
				float: left;
				width: 80px;
				margin-left: 11px;
				cursor: pointer
			}
			.poi-list ul li .img {
				position: relative;
				width: 80px;
				height: 80px
			}
			.poi-list ul li .img img {
				width: 80px;
				height: 80px;
				vertical-align: middle
			}
			.poi-list ul li .img .s {
				display: none;
				position: absolute;
				top: 0;
				left: 0;
				width: 80px;
				height: 80px;
				line-height: 80px;
				text-align: center;
				background: #10b041;
				background: rgba(16, 176, 65, .85)
			}
			.poi-list ul li .img .s .iconfont {
				font-size: 37px;
				color: #FFF
			}
			.poi-list ul li .text {
				display: block;
				height: 34px;
				line-height: 34px;
				font-size: 14px;
				color: #959595;
				text-align: center;
				overflow: hidden
			}
			.poi-list ul li.disabled {
				cursor: default
			}
			.poi-list ul li.disabled .img:before {
				content: '';
				position: absolute;
				width: 80px;
				height: 80px;
				background: #f5f5f5;
				opacity: .8;
				filter: alpha(opacity=80)
			}
			.poi-list ul li.disabled .text {
				color: #323232
			}
			.poi-list ul li.disabled:hover .s {
				display: none
			}
			.poi-list ul li.add-poi .link-addpoi {
				display: block;
				border: 1px solid silver;
				width: 78px;
				height: 78px;
				line-height: 78px;
				text-decoration: none;
				text-align: center;
				background: #e7e7e7;
				color: silver
			}
			.poi-list ul li.add-poi .link-addpoi .iconfont {
				font-size: 36px
			}
			.poi-list ul li.add-poi:hover .link-addpoi {
				border-color: #959595;
				color: #959595
			}
			.poi-list ul li.current .s,
			.poi-list ul li:hover .s {
				display: block
			}
			.poi-list ul li.current .text,
			.poi-list ul li:hover .text {
				color: #323232
			}
			.poi-list ul li.current .s .iconfont {
				color: #FFF!important
			}
			.poi-list ul li:hover .s .iconfont {
				color: #79bf8e
			}
			.poi-list.loading {
				padding-bottom: 10px
			}
			.poi-list.loading ul {
				padding-bottom: 20px;
				background: url(img/comment/wait_16.gif) bottom center no-repeat
			}
			.poi-container:after {
				visibility: hidden;
				display: block;
				font-size: 0;
				content: " ";
				clear: both;
				height: 0
			}
			.poi-container .poi-side {
				float: left;
				margin-right: 15px;
				width: 135px
			}
			.poi-container .poi-side .poi-city-list {
				margin-top: 15px;
				width: 135px
			}
			.poi-container .poi-side .poi-city-list .bar {
				display: block;
				margin: 5px auto;
				width: 40px;
				height: 20px;
				line-height: 20px;
				text-align: center;
				text-decoration: none;
				color: #636363
			}
			.poi-container .poi-side .poi-city-list .bar .iconfont {
				font-size: 12px;
				cursor: pointer
			}
			.poi-container .poi-side .poi-city-list .bar:hover {
				color: #10b041
			}
			.poi-container .poi-side .poi-city-list .list {
				width: 135px;
				height: 320px;
				overflow: hidden;
				font-size: 14px
			}
			.poi-container .poi-side .poi-city-list .list ul {
				width: 128px;
				min-height: 320px;
				background: #f1f1f1;
				border-radius: 3px
			}
			.poi-container .poi-side .poi-city-list .list ul li {
				width: 128px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: #323232;
				cursor: pointer
			}
			.poi-container .poi-side .poi-city-list .list ul li span {
				display: inline-block;
				overflow: hidden;
				width: 8em;
				text-overflow: ellipsis;
				white-space: nowrap
			}
			.poi-container .poi-side .poi-city-list .list ul li:hover {
				color: #3f9f5f
			}
			.poi-container .poi-side .poi-city-list .list ul li.current {
				position: relative;
				border-radius: 3px;
				background: #5cad77;
				color: #FFF
			}
			.poi-container .poi-side .poi-city-list .list ul li.current:after {
				position: absolute;
				top: 50%;
				right: -12px;
				content: '';
				margin-top: -6px;
				width: 0;
				height: 0;
				border: 6px solid #5cad77;
				border-color: transparent transparent transparent #5cad77;
				overflow: hidden
			}
			.poi-container .poi-main {
				float: left;
				width: 570px
			}
			.poi-container .poi-main .poi-tabs .tabs {
				float: left;
				width: 375px;
				height: 38px;
				overflow: hidden
			}
			.poi-container .poi-main .poi-tabs .tabs ul {
				height: 37px;
				border-bottom: 1px solid #e4e4e5
			}
			.poi-container .poi-main .poi-tabs .tabs ul:after {
				visibility: hidden;
				display: block;
				font-size: 0;
				content: " ";
				clear: both;
				height: 0
			}
			.poi-container .poi-main .poi-tabs .tabs ul li {
				float: left;
				position: relative;
				width: 75px;
				height: 36px;
				line-height: 36px;
				font-size: 14px;
				cursor: pointer;
				text-align: center
			}
			.poi-container .poi-main .poi-tabs .tabs ul li .iconfont,
			.poi-container .poi-main .poi-tabs .tabs ul li span {
				vertical-align: middle
			}
			.poi-container .poi-main .poi-tabs .tabs ul li .iconfont {
				color: #959595
			}
			.poi-container .poi-main .poi-tabs .tabs ul li.current,
			.poi-container .poi-main .poi-tabs .tabs ul li:hover {
				border-bottom: 2px solid #10b041;
				color: #5cad77
			}
			.poi-container .poi-main .poi-tabs .tabs ul li.current .iconfont,
			.poi-container .poi-main .poi-tabs .tabs ul li:hover .iconfont {
				color: #5cad77
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont {
				margin-top: 22px;
				width: 594px;
				height: 342px;
				overflow: hidden;
				background: url(img/comment/loading_big.gif) 220px 120px no-repeat
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont .poi-list ul {
				margin-left: -18px
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont .poi-list ul li {
				margin-left: 18px
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont .section {
				display: none;
				height: 342px;
				overflow: auto;
				background: #F9FAF9
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont .section .add {
				padding-top: 120px;
				text-align: center
			}
			.poi-container .poi-main .poi-tabs .poi-list-cont .section .add span {
				margin-right: 15px;
				font-size: 14px;
				font-family: "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
				color: #636363
			}
		</style>
		<script type="text/javascript" async="" src="js/comment/beacon_gajs.js"></script>
		<script type="text/javascript" src="js/comment/jiajs.js"></script>
	</head>

	<body>
		<link href="css/comment/jiathis_share.css" rel="stylesheet" type="text/css">
		<iframe frameborder="0" style="position: absolute; display: none; opacity: 0;"></iframe>
		<div class="jiathis_style" style="position: absolute; z-index: 1000000000; display: none; top: 50%; left: 50%; overflow: auto;"></div>
		<div class="jiathis_style" style="position: absolute; z-index: 1000000000; display: none; overflow: auto;"></div>
		<iframe frameborder="0" src="http://v3.jiathis.com/code/jiathis_utility.html" style="display: none;"></iframe>

		<style type="text/css">
			.zpui-head-ad {
				position: relative;
				z-index: 2;
			}
			.zpui-head-ad .bg {
				display: block;
				height: 60px;
				width: 100%;
				background: url(img/comment/171111-web-top.jpg) center top no-repeat;
			}
			.zpui-head-ad .close {
				position: absolute;
				display: block;
				cursor: pointer;
				background: url(img/comment/web-ad-close.png) center center no-repeat;
				left: 50%;
				top: 50%;
				width: 30px;
				height: 30px;
				margin-left: 440px;
				margin-top: -15px;
			}
		</style>

		<div id="zpui-head-ad" class="zpui-head-ad">
			<a href="//z.qyer.com/zt/20171111/?campaign=tonglan&amp;category=20171111" target="_blank" class="bg"></a>
			<span id="zpui-head-ad-close" class="close"></span>
		</div>

		<script type="text/javascript">
			(function() {
				function setCookie(name, value) {
					var exp = new Date();
					exp.setTime(exp.getTime() + 86400000);
					document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=qyer.com";
				};

				function getCookie(objName) {
					var arrStr = document.cookie.split("; ");
					for (var i = 0; i < arrStr.length; i++) {
						var temp = arrStr[i].split("=");
						if (temp[0] == objName) return unescape(temp[1]);
					}
				}
				document.getElementById("zpui-head-ad-close").onclick = function() {
					if ($) {
						$("#zpui-head-ad").slideUp(200);
					} else {
						document.getElementById("zpui-head-ad").style.display = "none";
					}
					setCookie("qy_topad", 1);
				}
			})();
		</script>
		<style>
			.tip_passport_bindmobile {
				height: 40px;
				line-height: 40px;
				background-color: rgb(224, 241, 223);
				font-size: 14px;
				padding-left: 28px;
				position: relative;
				margin-top: -40px;
				transition: All .3s ease;
				-webkit-transition: All .3s ease;
				-moz-transition: All .3s ease;
				-o-transition: All .3s ease;
				color: #323232;
				z-index: 1;
			}
			.tip_passport_bindmobile a {
				color: #323232;
				text-decoration: underline;
			}
			.tip_passport_bindmobile img {
				width: 12px;
				height: 12px;
				position: absolute;
				top: 15px;
				right: 17px;
				cursor: pointer;
			}
			.tip_passport_bindmobile_masker {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(img/comment/bg_255_255_255_0.7.png);
				z-index: 2000;
				display: none;
			}
			.tip_passport_bindmobile_dialog {
				box-sizing: border-box;
				width: 340px;
				height: 180px;
				border: solid 1px rgb(192, 192, 192);
				background-color: rgb(255, 255, 255);
				box-shadow: 0 0 10px #ccc;
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -90px 0 0 -170px;
				padding: 30px 20px 0 20px;
			}
			.tip_passport_bindmobile_dialog_title {
				font-size: 18px;
				color: #323232;
				text-align: center;
				margin-bottom: 5px;
			}
			.tip_passport_bindmobile_dialog_text {
				font-size: 14px;
				color: #959595;
			}
			.tip_passport_bindmobile_dialog_btn {
				width: 84px;
				height: 28px;
				line-height: 28px;
				display: inline-block;
				font-size: 14px;
				color: rgb(50, 50, 50);
				text-decoration: none !important;
				margin-top: 15px;
				background-color: rgb(236, 236, 236);
				border: solid 1px rgb(192, 192, 192);
				cursor: pointer;
				border-radius: 3px;
			}
			.tip_passport_bindmobile_dialog_btn:hover {
				background-color: rgb(243, 243, 243);
			}
			.tip_passport_bindmobile_dialog_btnBind {
				margin-left: 20px;
				background-color: rgb(59, 160, 92);
				border: solid 1px rgb(59, 160, 92);
				color: #fff;
			}
			.tip_passport_bindmobile_dialog_btnBind:hover {
				background-color: rgb(71, 197, 113);
				border: solid 1px rgb(71, 197, 113);
			}
			.tip_passport_bindmobile_dialog_close {
				position: absolute;
				top: 16px;
				right: 16px;
				cursor: pointer;
			}
		</style>

		<div id="tip_passport_bindmobile_masker" class="tip_passport_bindmobile_masker">
			<div class="tip_passport_bindmobile_dialog">
				<h5 class="tip_passport_bindmobile_dialog_title">帐号安全提示</h5>
				<p class="tip_passport_bindmobile_dialog_text">穷游网将实行手机绑定实名制，为了您的帐号安全，请及时绑定手机号。</p>
				<div style="text-align:center;">
					<a class="tip_passport_bindmobile_dialog_btn" href="//bbs.qyer.com/thread-2779523-1.html" target="_blank">查看说明</a>
					<a class="tip_passport_bindmobile_dialog_btn tip_passport_bindmobile_dialog_btnBind" href="//passport.qyer.com/account/mobile/bind" target="_blank">立即绑定</a>
				</div>
				<img id="tip_passport_bindmobile_dialog_close" class="tip_passport_bindmobile_dialog_close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNTMyODU3OTU5OEExMUU3QTgwMUVFNzYzN0YwQkI1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNTMyODU3QTU5OEExMUU3QTgwMUVFNzYzN0YwQkI1NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE1MzI4NTc3NTk4QTExRTdBODAxRUU3NjM3RjBCQjU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE1MzI4NTc4NTk4QTExRTdBODAxRUU3NjM3RjBCQjU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jb9fzQAAAKlJREFUeNqckkEOwiAQRQc8GFvO0AULjNF4IKMx7aILz9AlHMdDGPyYT0MomzrJD014bwJMVQjhLSIL4o0xH+lUjPGAZUKsJuyQmRs9eCazZMEjL2RopQoeyHiVUmo3RuRE54kcCbt85J9QdXsQuFO4sMG53G8VKCksN4JC8Qp4hbTsrP+OtOvSGFz7dK506zyr05zgBs7Fb1fNacqCLZPs/RqVlBn7FWAASJhkb97XPw8AAAAASUVORK5CYII=">
			</div>
		</div>
		<script>
			(function() {
				function setCookie(name, value, time) {
					var exp = new Date();
					exp.setTime(exp.getTime() + (time || 259200000));
					document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=qyer.com";
				};

				function getCookie(objName) {
					var arrStr = document.cookie.split("; ");
					for (var i = 0; i < arrStr.length; i++) {
						var temp = arrStr[i].split("=");
						if (temp[0] == objName) return unescape(temp[1]);
					}
				}
				window.__userStatusCallBack = function(data) {
					// 显示通栏
					(function() {
						var isShowTopTip = data.uid && data.userinfo.bind_phone != 1 && getCookie('tip_passport_bindmobile') != "1" && !/^https?:\/\/qyer\.com/gi.test(location.href);
						// 显示顶部提示
						var $dom = $('#tip_passport_bindmobile');
						if (isShowTopTip) {
							$dom.css('marginTop', '0').find('img').click(function() {
								$dom.css('marginTop', '-40px');
								setCookie('tip_passport_bindmobile', 1);
								setTimeout(function() {
									$dom.remove()
								}, 500);
							})
						} else {
							$dom.remove()
						}
					})();
					// 增加 UGC 监听，关键操作出现绑定账号提示
					(function() {
						if (data.uid && data.userinfo.bind_phone != 1) {
							// modal 关闭事件
							$('#tip_passport_bindmobile_dialog_close').on('click', function() {
								$('#tip_passport_bindmobile_masker').remove();
								setCookie('tip_passport_ugc_bindmobile', 1);
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
							$(document.body).on('mousedown', filter, function() {
								if (getCookie('tip_passport_ugc_bindmobile') != '1') {
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
			window.__userStatusCallBack = function(data) {
				if (data.uid && data.userinfo.bind_phone != 1) {
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
				uid: [9948056][0] || 0
			};
			window._RATrack = window._RATrack || {
				'platform': 'web',
				'channel': 'user',
				'page_type': 'list',
				'ugc_type': 'user_beento',
				'ugc_content': ''
			};
		</script>

		<link href="css/headerfoot_black.min.css" rel="stylesheet">
		<script src="js/comment/headerfoot_black.min.js" async="async"></script>
		<link rel="stylesheet" href="css/comment/uploadPopup.css">

		<script src="js/comment/uploadPopup.js"></script>

		<div class="q-layer-header">
			<div class="header-inner">
				<a data-bn-ipg="head-logo" href="//www.qyer.com"><img class="logo" src="img/comment/logo_116x36.png" width="58" height="18"></a>
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
								<img class="gif1" src="img/comment/gif.gif" height="19" width="44">
							</div>
							<div class="q-layer q-layer-nav q-layer-arrow">
								<ul>
									<li><a href="//z.qyer.com/package/" data-bn-ipg="head-nav-package" target="_blank" title="机酒自由行"><i class="iconfont icon-package"></i> 机酒自由行</a></li>
									<li><a href="//z.qyer.com/local/" data-bn-ipg="head-nav-local" target="_blank" title="当地玩乐"><i class="iconfont icon-local"></i> 当地玩乐</a></li>
									<li><a href="//z.qyer.com/visa/" data-bn-ipg="head-nav-visa" target="_blank" title="签证"><i class="iconfont icon-visa1"></i> 签证</a></li>
									<li><a href="//z.qyer.com/car/?utm_source=c03729731-pc&amp;utm_medium=partner&amp;utm_campaign=entry&amp;utm_term=qyer_nav" data-bn-ipg="head-nav-car" target="_blank" title="租车自驾"><i class="iconfont icon-car"></i> 租车自驾</a></li>
									<li><a href="//z.qyer.com/cruise/" data-bn-ipg="head-nav-cruise" target="_blank" title="邮轮"><i class="iconfont icon-cruise"></i> 邮轮</a></li>
									<li><a href="//bx.qyer.com/" data-bn-ipg="head-nav-insure" target="_blank" title="保险"><i class="iconfont icon-bx"></i> 保险</a></li>
									<li><a href="//z.qyer.com/travelgroup" data-bn-ipg="head-nav-travelgroup" target="_blank" title="私人订制"><i class="iconfont icon-travelgroup"></i> 私人定制</a></li>
								</ul>
							</div>
						</li>
						<li class="nav-list "><a class="nav-span" href="//flight.qyer.com/" data-bn-ipg="head-nav-plane" title="机票">机票</a></li>
						<li class="nav-list nav-list-layer nav-list-zuishijie ">
							<a class="nav-span" href="//hotel.qyer.com/" data-bn-ipg="head-nav-hotel" title="穷游酒店">酒店·民宿 <i class="iconfont icon-jiantouxia"></i></a>
							<div class="gif">
								<img class="gif1" src="img/comment/gif2.jpg" height="19" width="44">
							</div>
							<div class="q-layer q-layer-nav q-layer-arrow q-layer-arrow1">
								<ul>
									<li><a href="//hotel.qyer.com" data-bn-ipg="head-nav-booking" title="酒店"><i class="iconfont icon-hotel1"></i> 酒店</a></li>
									<li><a href="//www.qyer.com/goto.php?url=https%3A%2F%2Fwww.airbnbchina.cn%2F%3Faf%3D104561116%26c%3DRESERVATION" data-bn-ipg="head-nav-airbnb" title="爱彼迎" target="_blank"><i class="iconfont icon-airbnb1"></i> 爱彼迎</a></li>
									<li><a href="//www.qyer.com/shop/" data-bn-ipg="head-nav-shop" title="华人旅馆"><i class="iconfont icon-shop"></i> 华人旅馆</a></li>
								</ul>
							</div>
						</li>
						<li class="nav-list nav-list-layer">
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
						<div class="q-layer q-layer-sitesearch-history">
							<ul></ul>
							<div class="history-clear"><a href="javascript:;">清空历史记录</a></div>
						</div>
						<div class="q-layer q-layer-sitesearch-autocomplete">
							<ul></ul>
						</div>
					</div>
					<div id="js_qyer_header_userStatus" class="status">
						<div class="user-info show">
							<div class="userstatus"> <span class="username"><a target="_blank" data-bn-ipg="index-head-user" href="//www.qyer.com/u/9948056">你来啦</a></span> <span style="vertical-align: -2px;"><i class="iconfont icon-jiantouxia"></i></span>
								<div class="q-layer q-layer-userstatus">
									<ul>
										<li>
											<a data-bn-ipg="index-head-userdrop-home" href="//www.qyer.com/u/9948056">我的首页</a>
										</li>
										<li>
											<span class="fr"><a class="link" data-bn-ipg="index-head-userdrop-collectThread" href="//www.qyer.com/u/9948056/travel#collect">收藏的帖子</a></span>
											<a data-bn-ipg="index-head-userdrop-thread" href="//www.qyer.com/u/9948056/travel">我的帖子</a>
										</li>
										<li>
											<span class="fr"><a class="link" data-bn-ipg="index-head-userdrop-poicomment" href="//www.qyer.com/u/9948056/footprint?showcomm=1">写点评</a></span>
											<a data-bn-ipg="index-head-userdrop-footprint" href="//www.qyer.com/u/9948056/footprint">我的足迹</a>
										</li>
										<li>
											<a data-bn-ipg="index-head-userdrop-wishlist" href="//www.qyer.com/u/9948056/planto">我的想去</a>
										</li>
										<li>
											<a data-bn-ipg="index-head-userdrop-ask" href="//www.qyer.com/u/9948056/ask">我的问答</a>
										</li>
										<li>
											<a data-bn-ipg="index-head-userdrop-plan" href="//www.qyer.com/u/9948056/plan">我的行程</a>
										</li>
										<li>
											<span class="fr"><a class="link" data-bn-ipg="index-head-userdrop-promocode" href="//www.qyer.com/u/promocode/">优惠券</a></span>
											<a data-bn-ipg="index-head-userdrop-order" href="//www.qyer.com/u/lm-order/">我的订单</a>
										</li>
										<li class="setting">
											<span class="fr"><a class="link" data-bn-ipg="index-head-userdrop-logout" href="https://passport.qyer.com/logout">退出</a></span>
											<a class="link_setting" data-bn-ipg="index-head-userdrop-setting" href="//www.qyer.com/u/9948056/editprofile">帐号设置</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="usermsg"><a href="javascript:;" class="message"><i class="iconfont icon-xinfeng"></i><em class="num">4</em></a><em class="newmsg"></em>
								<div class="q-layer q-layer-message">
									<div class="layer-msg-tab">
										<ul>
											<li class="current" data-msg-type="board"><a href="javascript:;">站内通知</a></li>
											<li class="new" data-msg-type="notice"><a href="javascript:;">消息</a></li>
											<li data-msg-type="message"><a href="javascript:;">私信</a></li>
										</ul>
									</div>
									<div class="layer-msg-container">
										<div class="layer-msg-item layer-msg-item-board" style="display: block;">
											<div class="layer-msg-inner">
												<div class="loading"></div>
											</div>
											<div class="layer-msg-more"><a href="//www.qyer.com/u/9948056/notice?type=board" data-bn-ipg="index-head-black-all">查看全部</a></div>
										</div>
										<div class="layer-msg-item layer-msg-item-notice">
											<div class="layer-msg-inner">
												<div class="loading"></div>
											</div>
											<div class="layer-msg-more"><a href="//www.qyer.com/u/9948056/notice?type=notice" data-bn-ipg="index-head-notice-all">查看全部</a></div>
										</div>
										<div class="layer-msg-item layer-msg-item-message">
											<div class="layer-msg-inner">
												<div class="loading"></div>
											</div>
											<div class="layer-msg-more"><a href="//www.qyer.com/u/9948056/shortmail" data-bn-ipg="index-head-letter-all">查看全部</a></div>
										</div>
									</div>
								</div>
							</div>
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
					<a href="//www.qyer.com/u/9948056"><img src="img/comment/touxiang.jpg"></a>
				</div>
				<!--用户名字 -->
				<h3 class="name">
            <strong data-bn-ipg="usercenter-username" class="fontYaHei">你来啦</strong>
                </h3>
				<!--用户信息 -->
				<div class="text fontSong">
					等级：<a data-bn-ipg="usercenter-grade" href="//www.qyer.com/u/9948056/level" class="fb cBlue pr20">新进弟子</a> 穷币：
					<a data-bn-ipg="usercenter-wealth" href="//www.qyer.com/u/9948056/level" class="fb cLightGreen pr10">11</a>
					<a data-bn-ipg="usercenter-wealth" href="//www.qyer.com/store/" class="fb exchange cLightGreen pr20" target="_blank">前往兑换</a>
				</div>

			</div>
			<!--个人中心导航 -->
			<div class="menu clearfix">
				<ul class="fontSong">
					<li data-bn-ipg="usercenter-tab-home"><a href="//www.qyer.com/u/9948056" class="a_list">首页</a></li>
					<li data-bn-ipg="usercenter-tab-footprint" class="current">
						<a href="//www.qyer.com/u/9948056/footprint" class="a_list">足迹与点评</a>
					</li>
					<li data-bn-ipg="usercenter-tab-wishlist"><a href="//www.qyer.com/u/9948056/planto" class="a_list">我的想去</a></li>
					<li data-bn-ipg="usercenter-tab-thread"><a href="//www.qyer.com/u/9948056/travel" class="a_list">帖子</a></li>
					<!--
                    <li data-bn-ipg="usercenter-tab-album" ><a href="//www.qyer.com/pictrip/9948056/" class="a_list">照片</a></li>
                    -->
					<li data-bn-ipg="usercenter-tab-album"><a href="//photo.qyer.com/enter9948056" class="a_list">照片</a></li>
					<li data-bn-ipg="usercenter-tab-ask"><a href="//www.qyer.com/u/9948056/ask" class="a_list">问答</a></li>
					<li data-bn-ipg="usercenter-tab-plan"><a href="//www.qyer.com/u/9948056/plan" class="a_list">行程计划</a></li>
					<li data-bn-ipg="usercenter-tab-order"><a href="//www.qyer.com/u/lm-order/" class="a_list">商城订单</a></li>
					<li class="more_select">
						<a href="javascript:void(0);" class="a_list"><span>更多</span></a>
						<div class="more_item">
							<a data-bn-ipg="usercenter-tab-footprint" href="//www.qyer.com/u/9948056/mguide">微锦囊</a>
							<a data-bn-ipg="usercenter-tab-audit" href="http://www.qyer.com/u/profile.php?action=userguide">投稿纠错</a>
							<a data-bn-ipg="usercenter-tab-zcollect" href="//www.qyer.com/u/lastmin">商城的收藏和提醒</a>
							<a data-bn-ipg="usercenter-tab-zcoupon" href="//www.qyer.com/u/promocode">商城的优惠券</a>
							<a data-bn-ipg="usercenter-tab-level" href="//www.qyer.com/u/9948056/level">经验和穷币</a>
							<!-- <a data-bn-ipg="usercenter-tab-medal"  href="http://www.qyer.com/u/9948056/badgegalary">勋章</a> -->
						</div>
					</li>
				</ul>
				<a data-bn-ipg="usercenter-set-profile" href="//www.qyer.com/u/9948056/editprofile" class="seting">设置</a>
			</div>
		</div>
		<!--头部 -->

		<script>
			/**
			 * 认证头像图标tip
			 */
			$(function() {
				if (typeof requirejs !== 'undefined') {
					requirejs(['web_old_tooltips'], function() {
						$('[data-toggle="tooltip"]').tooltip({
							container: 'body'
						});
					});
				}
			});
		</script>
		<!--头部 -->
		<!--用户中心 点评模块 -->
		<div class="u_spoor_cnt clearfix" style="min-height: 177px;">
			<!--点评侧边栏 -->
			<div class="u_spoor_bar">
				<!--点评数量统计 -->
				<div class="u_spoor_number">
					<span class="tag none_line"><strong>2</strong>国家</span>
					<span class="tag"><strong>3</strong>城市</span>
					<span class="tag"><strong>2</strong>点评</span>
				</div>
			</div>
			<!--点评内容 -->
			<div class="u_spoor_main">
				<!--国家列表 -->
				<div class="u_spoor_country">
					<div class="title">
						<div class="tag fontYaHei">
							<a href="javascript:void(0);" class="current">我的足迹</a>
							<a href="//www.qyer.com/u/9948056/place-comment">我的点评</a>
							<a href="//www.qyer.com/u/9948056/hotel-comment">我的酒店点评</a>
						</div>
						<!--<a href="#" class="ui_buttonB btn _jsaddplacecity">+ 足迹</a>-->
						<a class="ui_buttonB btn _jsaddplacecity" id="addPath">+ 足迹</a>
					</div>
					<div class="uDpingMySpoor js_transpoi_parent">
						<div class="uDpingMySpoorHead">
							<h2 class="tit fontYaHei">点评我的足迹</h2>
							<p data-bn-ipg="usercenter-footprint-poicomment-texttip" class="text" onclick="fullTrackPopup('/api.php?action=batchcommentAll')"><em>5</em>个目的地等待你的评价，还可赢得<em>25</em>穷币哦~</p>
							<div class="dps"><span class="tit">点评</span><a data-bn-ipg="usercenter-footprint-poicomment-progressbar" onclick="fullTrackPopup('/api.php?action=batchcommentAll')" href="javascript:void(0);" class="dpings"><span class="dpingProgress" style="width: 29%;"></span></a>
								<em class="dpingSum">2 / 7</em>
								<p class="dpHoverTitle">去过 7 个目的地
									<br>点评过 2 个目的地</p>
							</div>
						</div>
						<!--
                        	作者：630569266@qq.com
                        	时间：2017-11-15
                        	描述：点评我的足迹
                        -->
						<ul class="uDpingMySpoorList clearfix js_transpoi_u">
							<li>
								<a data-bn-ipg="usercenter-footprint-poicomment-1" data-pid="33754" data-typeid="51" data-star="0" href="javascript:void(0);" class="js_transpoi_a">
									<img src="img/comment/80.jpg" width="60" height="60" alt="">
									<h3 class="tit">大炮台</h3>
									<p class="place">澳门</p>

									<div class="dpStar">
										<p class="StarIcons _js_starIcons"><span data-index="1" class=""></span><span data-index="2" class=""></span><span data-index="3" class=""></span><span data-index="4" class=""></span><span data-index="5"></span></p>
										<span class="StarTxt" id="comment">点击星星为其评分</span>
									</div>
								</a>
							</li>
							<li>
								<a data-bn-ipg="usercenter-footprint-poicomment-2" data-pid="33755" data-typeid="51" data-star="0" href="javascript:void(0);" class="js_transpoi_a">
									<img src="img/comment/80 (1).jpg" width="60" height="60" alt="">
									<h3 class="tit">妈阁庙</h3>
									<p class="place">澳门</p>
									<div class="dpStar">
										<p class="StarIcons _js_starIcons"><span data-index="1" class=""></span><span data-index="2" class=""></span><span data-index="3"></span><span data-index="4"></span><span data-index="5"></span></p>
										<span class="StarTxt" id="comment">点击星星为其评分</span>
									</div>
								</a>
							</li>
							<li>
								<a data-bn-ipg="usercenter-footprint-poicomment-3" data-pid="117691" data-typeid="51" data-star="0" href="javascript:void(0);" class="js_transpoi_a">
									<img src="img/comment/80 (2).jpg" width="60" height="60" alt="">
									<h3 class="tit">金莲花广场</h3>
									<p class="place">澳门</p>
									<div class="dpStar">
										<p class="StarIcons _js_starIcons"><span data-index="1" class=""></span><span data-index="2" class=""></span><span data-index="3" class=""></span><span data-index="4"></span><span data-index="5"></span></p>
										<span class="StarTxt" id="comment">点击星星为其评分</span>
									</div>
								</a>
							</li>
							<li>
								<a data-bn-ipg="usercenter-footprint-poicomment-4" data-pid="105814" data-typeid="51" data-star="0" href="javascript:void(0);" class="js_transpoi_a">
									<img src="img/comment/80 (1).jpg" width="60" height="60" alt="">
									<h3 class="tit">大利来记猪扒包(氹仔旗舰店)</h3>
									<p class="place">澳门</p>
									<div class="dpStar">
										<p class="StarIcons _js_starIcons"><span data-index="1"></span><span data-index="2"></span><span data-index="3"></span><span data-index="4"></span><span data-index="5"></span></p>
										<span class="StarTxt" id="comment">点击星星为其评分</span>
									</div>
								</a>
							</li>
						</ul>
						<!--
                        	作者：630569266@qq.com
                        	时间：2017-11-15
                        	描述：点评我的足迹end
                        -->
						<p data-bn-ipg="usercenter-footprint-shownext" data-page="2" data-total="5" class="uDpingMySpoorSwitch js_transpoi">换一批</p>
					</div>
					<div class="lists" style="display:none">
						<div class="items clearfix">
							<strong class="text">我去过的国家（）：</strong>
							<p>
								<a href="//www.qyer.com/u/9948056/footprint" class="current"><strong>全部</strong></a>
							</p>
						</div>
					</div>
				</div>
				<!--
                	作者：630569266@qq.com
                	时间：2017-11-15
                	描述：增加足迹：添加国家
                -->
				<!--国家分类列表 -->
				<div class="u_spoor_country_list u_spoor_country_list_self">
					<!-- 泰国begin-->
					<div class="u_spoor_country_item js_edit_box">
						<div class="title clearfix">
							<strong class="fontYaHei">泰国<span>Thailand</span></strong>
							<div class="u_spoor_more_edit" style="display: none;">
								<ul>
									<li><a href="#" class="_jseditcomm">编辑点评</a></li>
									<li><a href="#" class="_delcountry" data-id="215">删除足迹</a></li>
								</ul>
							</div>
						</div>
						<div class="text js_edit_text">写点评</div>
						<div class="js_edit_textarea none">
							<form action="/api.php?action=impresscountry" method="post">
								<input type="hidden" name="id" value="0">
								<input type="hidden" name="oper" value="add">
								<input type="hidden" name="countryid" value="215">
								<div class="textarea">
									<textarea name="content" class="ui2_textarea"></textarea>
									<div class="btm clearfix pr">
										<div class="ui2_error_layer" style="display:none;">
											<p class="ui2_error_layer_arrow"></p>
											<p class="ui2_error_layer_arrow2"></p>
											<p class="ui2_error_layer_text">至少写够1个字，最多不超过120字</p>
										</div>
									</div>
								</div>
								<div class="clearfix mt10">
									<span class="fl cLightgray">0/120字</span>
									<input type="button" class="_country_comment ui_buttonB fr ml10" value="发表">
									<input type="button" class="ui_button_cancel fr" value="取消">
								</div>
							</form>
						</div>
						<div class="list clearfix">
							<div class="item">
								<div class="alink">
									<div class="img">
										<a href="//www.qyer.com/u/9948056/city-bangkok-55">
											<img src="img/comment/215x185.jpg" width="213" height="185" alt="">
											<span class="bg"></span>
										</a>
									</div>
									<div class="name">
										<a href="//place.qyer.com/bangkok/" target="_blank"><strong class="fontYaHei">曼谷</strong><span>Bangkok</span></a>
									</div>
									<div class="number fontYaHei">
										去过<a href="//www.qyer.com/u/9948056/city-bangkok-55" class="cBlue">2</a>景点<span>|</span>发表<a href="//www.qyer.com/u/9948056/place-comment" class="cGreen">1</a>点评
									</div>
									<div class="content">
										<a href="//www.qyer.com/u/9948056/city-bangkok-55" class="fontSong">查看全部 &gt;&gt;</a>
									</div>
									<div class="button">
										<a href="#" did="55" class="ui_btn_bigA">添加足迹和点评</a>
									</div>
									<div class="delete _delcity" data-id="55" title="删除"></div>
								</div>
							</div>
							<div class="adds">
								<a href="#" class="_jsaddplacecity" data-id="215">
									<span class="ui_buttonB btn btn _jsaddplacecity" >+ 足迹</span>
								</a>
							</div>
						</div>
					</div>

					<div class="border1 mt20"></div>
					<!-- 泰国end -->
					<!-- 中国begin-->
					<div class="u_spoor_country_item js_edit_box">
						<div class="title clearfix">
							<strong class="fontYaHei">中国<span>China</span></strong>
							<div class="u_spoor_more_edit" style="display: none;">
								<ul>
									<li><a href="#" class="_jseditcomm">编辑点评</a></li>
									<li><a href="#" class="_delcountry" data-id="11">删除足迹</a></li>
								</ul>
							</div>
						</div>
						<div class="text js_edit_text">写点评</div>
						<div class="js_edit_textarea none">
							<form action="/api.php?action=impresscountry" method="post">
								<input type="hidden" name="id" value="0">
								<input type="hidden" name="oper" value="add">
								<input type="hidden" name="countryid" value="11">
								<div class="textarea">
									<textarea name="content" class="ui2_textarea"></textarea>
									<div class="btm clearfix pr">
										<div class="ui2_error_layer" style="display:none;">
											<p class="ui2_error_layer_arrow"></p>
											<p class="ui2_error_layer_arrow2"></p>
											<p class="ui2_error_layer_text">至少写够1个字，最多不超过120字</p>
										</div>
									</div>
								</div>
								<div class="clearfix mt10">
									<span class="fl cLightgray">0/120字</span>
									<input type="button" class="_country_comment ui_buttonB fr ml10" value="发表">
									<input type="button" class="ui_button_cancel fr" value="取消">
								</div>
							</form>
						</div>
						<!--动态显示一个国家还有它的地方 -->
						<div class="list clearfix">
							<!-- 中国的足迹1 begin-->
							<div class="item">
								<div class="alink">
									<div class="img">
										<a href="//www.qyer.com/u/9948056/city-macau-51">
											<img src="img/comment/215x185 (1).jpg" width="213" height="185" alt="">
											<span class="bg"></span>
										</a>
									</div>
									<div class="name">
										<a href="//place.qyer.com/macau/" target="_blank"><strong class="fontYaHei">澳门</strong><span>Macau</span></a>
									</div>
									<div class="number fontYaHei">
										去过<a href="//www.qyer.com/u/9948056/city-macau-51" class="cBlue">4</a>景点<span>|</span>发表<a href="//www.qyer.com/u/9948056/place-comment" class="cGreen">0</a>点评
									</div>
									<div class="content">
										<a href="//www.qyer.com/u/9948056/city-macau-51" class="fontSong">查看全部 &gt;&gt;</a>
									</div>
									<div class="button">
										<a href="#" did="51" class="ui_btn_bigA">添加足迹和点评</a>
									</div>
									<div class="delete _delcity" data-id="51" title="删除"></div>
								</div>
							</div>
							<!-- 中国的足迹1 end-->
							<!-- 中国的足迹2 begin-->
							<div class="item">
								<div class="alink">
									<div class="img">
										<a href="//www.qyer.com/u/9948056/city-taipei-52">
											<img src="img/comment/215x185 (1).jpg" width="213" height="185" alt="">
											<span class="bg"></span>
										</a>
									</div>
									<div class="name">
										<a href="//place.qyer.com/taipei/" target="_blank"><strong class="fontYaHei">台北</strong><span>Taipei</span></a>
									</div>
									<div class="number fontYaHei">
										去过<a href="//www.qyer.com/u/9948056/city-taipei-52" class="cBlue">1</a>景点<span>|</span>发表<a href="//www.qyer.com/u/9948056/place-comment" class="cGreen">1</a>点评
									</div>
									<div class="content">
										<a href="//www.qyer.com/u/9948056/city-taipei-52" class="fontSong">查看全部 &gt;&gt;</a>
									</div>
									<div class="button">
										<a href="#" did="52" class="ui_btn_bigA">添加足迹和点评</a>
									</div>
									<div class="delete _delcity" data-id="52" title="删除"></div>
								</div>
							</div>
							<!-- 中国的足迹2 end-->
							<!-- 增加足迹begin-->
							<div class="adds">
								<a href="#" class="_jsaddplacecity" data-id="11">
									<span class="ui_buttonB btn">+ 足迹</span>
								</a>
							</div>
							<!-- 增加足迹end-->
						</div>
						<!--动态显示国家还有它的地方 -->
					</div>
					<div class="border1 mt20"></div>
					<!-- 中国end -->
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
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/1256395.html" target="_blank">昆明到丽江的交通</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/1408663.html" target="_blank">动车组</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/1697232.html" target="_blank">请教1)HK奥林巴斯的dc水货报价和上海相差多吗?如u300,u400,感谢2)从HK机场去深圳机</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/1853728.html" target="_blank">看到更新啦，米米加油！本人是历史盲，中国历史记不住，日本的更是一团浆糊，几个大人物都知道，但是各种故事都记得虎头蛇尾，颠倒顺序，鉴真的事迹真的感动到...</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2380691.html" target="_blank">克拉科夫Chillout Apartment好吗？是否值得入住？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2547087.html" target="_blank">埃伯尔措夫特Holiday home Laksevej Ebeltoft IV怎么样？有人住过吗？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2692122.html" target="_blank">大阿巴科岛什么时候去合适</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2719376.html" target="_blank">去苏格兰可以玩什么</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2780572.html" target="_blank">特雷波尔蒂治安怎么样</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2795920.html" target="_blank">米迪格默有什么值得去的景点</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2886734.html" target="_blank">请问问,圣多美和普林西比圣多美岛应该住在哪个区域较好？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/2934766.html" target="_blank">求教,怎么从德国哥廷根到曼海姆呢？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3012840.html" target="_blank">请问,奥莫山谷奥莫拉特该怎么去？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3038350.html" target="_blank">布达佩斯该怎么去？有推荐的交通方案吗？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3142082.html" target="_blank">请大家帮忙看下这个法国-摩纳哥行程如何？有什么改进建议？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3158988.html" target="_blank">请大家帮忙看下这个美国行程如何？有什么改进建议？</a></li>
						<li class="contact-ask-item"><a class="contact-ask-anchor" href="//ask.qyer.com/question/3240050.html" target="_blank"> 转机签证就不需要资金证明了吧？</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!--用户中心 点评模块 -->
		<script type="text/javascript">
			 //点评你走过的足迹弹出的关闭
			function fullTrackClose() {
					$("#fullpup_footprint").text("");
					$("html,body").css("overflow", "");
				}
				//点评你走过的足迹弹出

			function fullTrackPopup(url) {
				requirejs(['web_ct_footprint_comment'], function(fpComm) {
					fpComm.commShow({
						source_type: 'C-profile-allBeenBatchComment' // 可选
					});
				});
				return;
				/*
				require(['common/component/batchPoiComment/batchPoiComment'],function(Batch){
				    Batch.show({
				        source_type:'C-profile-allBeenBatchComment',
				        flash_swf_url:"../../plupload/Moxie.swf"
				    });
				});
				return;//exit
				*/
				$(window).scrollTop(0);
				$("html,body").css("overflow", "hidden");
				var height = $(window).height() - 61;
				var node = document.getElementById("fullpup_footprint");
				if (!node) {
					var para = document.createElement("div");
					para.id = "fullpup_footprint";
					document.body.appendChild(para);
				}
				$.get(url, function(data) {
					$("#fullpup_footprint").append(data);
					$(".fullpup_trackwrap").css("height", height);
				});
				qyerUI.popup.pupclose();
			}
			$(function() {
				function conHeight($obj) {
					$obj.css('min-height', $(window).height() - 391);
				}
				conHeight($('.u_spoor_cnt'));
				$(window).resize(function() {
					conHeight($('.u_spoor_cnt'));
				});
				var starIcons = $(".js_transpoi_u");
				var starTextAry = ["很差", "差", "一般", "好", "很好"];
				starIcons.on("mouseover", "._js_starIcons span", function() {
					var index = $(this).attr("data-index");
					var parent = $(this).parent("._js_starIcons");
					parent.find("span").removeClass("selected");
					parent.find("span:lt(" + index + ")").addClass("selected");
					parent.next(".StarTxt").text(starTextAry[index - 1]);
					$(this).parents("a").attr("data-star", index);
				});
				starIcons.on("mouseleave", "._js_starIcons", function() {
					$(this).find("span").removeClass("selected");
					$(this).next(".StarTxt").text("点击星星为其评分");
					$(this).parents("a").attr("data-star", "0");
				});
			});
		</script>
		<div style="display: none;">http://www.qyer.com/u/9948056/place-comment</div>
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
					2004-2017 © 穷游网® qyer.com All rights reserved. Version v5.57 京ICP备12003524号 京公网安备11010102001935号 京ICP证140673号
					<a target="_blank" style="color:inherit;" href="//static.qyer.com/images/yyzz.jpg">营业执照</a>
					<a target="_blank" style="color:inherit;" href="//static.qyer.com/images/jyxkz.jpg">经营许可证</a>
				</p>

				<!--友情链接模块-->

			</div>
		</div>

		<script>
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.async = true;
			script.src = "js/comment/beacon_gajs.js";
			document.getElementsByTagName("head")[0].appendChild(script);
		</script>
		<!--评论的模态框-->
		<!--<div class="qui-popup2 define-popup" style="display: block; opacity: 1;border: solid grey;">-->
		<div class="qui-popup" style="display: none; opacity: 1;">
			<div>
				<div class="qui-popup-dt">
					<div class="qui-popup-box" style="width: 690px; top: 0px; opacity: 1;">
						<div class="qui-popup-closeIcon">&nbsp;</div>
						<div class="qui-popup-box-title fontYaHei"> </div>
						<div class="qui-popup-box-content">
							<div class="qui-siglComment">
								<a href="http://place.qyer.com/poi/59196/" class="siglComment-title"><img src="https://pic.qyer.com/album/18b/5c/1839309/index/80" style="width: 80px; height: 80px;"></a>
								<div class="siglComment-info">
									<p class="siglComment-cn"><a href="http://place.qyer.com/poi/59196/">中正纪念堂</a></p>
									<p class="siglComment-en"><a href="http://place.qyer.com/poi/59196/">Chiang Kai-Shek Memorial Hall</a></p>
									<div class="siglComment-stars" starlevel="4">
										<span class="star star-on"></span>
										<span class="star star-on"></span>
										<span class="star star-on"></span>
										<span class="star star-on"></span>
										<span class="star"></span>
										<em class="level">好</em>
									</div>
								</div>
								<div class="siglComment-detail" data-width="638" data-height="104">
									<textarea class="ui3_textarea autoHeight" placeholder="这里有哪些亮点？哪些方面还不够好？大家都期待着你的点评" style="width: 638px; height: 106px;"></textarea>
									<textarea class="ui3_textarea" placeholder="这里有哪些亮点？哪些方面还不够好？大家都期待着你的点评" style="width: 638px; height: 104px; position: absolute; left: -9999em; overflow: auto;"></textarea>
									<div class="siglComment-camera" id="swf_upload_container_c">
										<label id="uploader">分享照片</label>有图有真相的点评最受欢迎！</div>
									<ul class="siglComment-photolist" style="display:none" id="siglComment-photolist">
										<li class="add" id="swf_upload_container1"><span id="siglCommentPhotoUp"></span></li>
									</ul>
									<div class="tips"><span class="current">0</span> / <span class="min">30</span> ~ <span class="max">2000</span></div>
								</div>
							</div>
						</div>
						<div class="qui-popup-box-bottom">&nbsp;
							<input class="qui-popup-cancelBtn ui_button_cancel" type="button" value="取消">
							<input class="qui-popup-okBtn ui_button" type="button" value="发布">
							<input class="qui-popup-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<!--评论的模态框end-->

		<div class="qui-feedback" style="display: none;">
			<div class="icon js-btn" title="意见反馈"></div>
			<div class="cnt">
				<form method="post">
					<textarea class="js-feedback-cnt" cols="50" rows="10" placeholder="有任何意见或建议请告诉我们"></textarea>
					<p class="help">使用遇到问题？请先进入<a href="//bbs.qyer.com/forum-10-1.html" target="_blank">帮助中心</a></p>
					<input class="ui_button js-submitBtn" type="button" value="提交">
				</form>
			</div>
		</div>

		<!--添加足迹begin -->
		<div class="qui-popup2 define-popup" style="display: none; opacity: 1;">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: auto; top: 0px; opacity: 1;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div id="footprintModal" class="footprint-modal">
								<div id="fpClose" class="fp-close"><i class="iconfont icon-guanbi"></i></div>
								<div class="fp-header"><span class="title">添加足迹</span></div>
								<div class="fp-body">
									<div class="fp-search">
										<input class="txt fpSearch" type="text" placeholder="搜索国家/城市名">
										<div class="mark"><i class="iconfont icon-infooutline"></i> 已经标记过啦</div>
										<div class="fpSearchContainer">
											<div class="qui-inputAutocomplete" style="display:none;">
												<ul class="qui-inputAutocomplete-ul">
													<li class="disableDefalut">loading ... </li>
												</ul>
											</div>
										</div>
									</div>
									<div class="fp-tabs">
										<div class="tabs">
											<ul>
												<li class="tabs-li current"><a href="javascript:;">热门</a></li>
												<li class="tabs-li"><a href="javascript:;">亚洲</a></li>
												<li class="tabs-li"><a href="javascript:;">欧洲</a></li>
												<li class="tabs-li"><a href="javascript:;">北美</a></li>
												<li class="tabs-li"><a href="javascript:;">南美</a></li>
												<li class="tabs-li"><a href="javascript:;">非洲</a></li>
												<li class="tabs-li"><a href="javascript:;">大洋洲</a></li>
												<li class="tabs-li"><a href="javascript:;">南极洲</a></li>
											</ul>
										</div>
										<div class="fp-list-cont">
											<div class="section" style="display: block;">
												<div class="city-list">
													<ul>
														<li id="city_50" class="city-list-li" city-id="50" beento="1"><img src="https://pic.qyer.com/album/user/370/89/Qk5VShMOaA/index/90" alt="香港">
															<div class="cont-table"><span class="text"><em>香港</em> <i>Hong Kong</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>香港</i></span></div>
														</li>
														<li id="city_20" class="city-list-li" city-id="20" beento="1"><img src="https://pic1.qyer.com/album/11c/51/2064687/index/90" alt="巴黎">
															<div class="cont-table"><span class="text"><em>巴黎</em> <i>Paris</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>巴黎</i></span></div>
														</li>
														<li id="city_11186" class="city-list-li" city-id="11186" beento="1"><img src="https://pic.qyer.com/album/user/492/12/RUBXQxgFaQ/index/90" alt="台湾">
															<div class="cont-table"><span class="text"><em>台湾</em> <i>Taiwan</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>台湾</i></span></div>
														</li>
														<li id="city_63" class="city-list-li" city-id="63" beento="1"><img src="https://pic1.qyer.com/album/123/c8/1866577/index/90" alt="东京">
															<div class="cont-table"><span class="text"><em>东京</em> <i>Tokyo</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>东京</i></span></div>
														</li>
														<li id="city_67" class="city-list-li" city-id="67" beento="1"><img src="https://pic.qyer.com/album/user/211/34/Q0hUQR4OZQ/index/90" alt="首尔">
															<div class="cont-table"><span class="text"><em>首尔</em> <i>Seoul</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>首尔</i></span></div>
														</li>
														<li id="city_28" class="city-list-li" city-id="28" beento="1"><img src="https://pic1.qyer.com/album/1bd/92/1829464/index/90" alt="罗马">
															<div class="cont-table"><span class="text"><em>罗马</em> <i>Rome</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>罗马</i></span></div>
														</li>
														<li id="city_53" class="city-list-li" city-id="53" beento="1"><img src="https://pic.qyer.com/album/user/584/71/REFRRRsAZA/index/90" alt="吉隆坡">
															<div class="cont-table"><span class="text"><em>吉隆坡</em> <i>Kuala Lumpur</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>吉隆坡</i></span></div>
														</li>
														<li id="city_62" class="city-list-li" city-id="62" beento="1"><img src="https://pic.qyer.com/album/1f7/a5/1829485/index/90" alt="新加坡">
															<div class="cont-table"><span class="text"><em>新加坡</em> <i>Singapore</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>新加坡</i></span></div>
														</li>
														<li id="city_29" class="city-list-li" city-id="29" beento="1"><img src="https://pic.qyer.com/album/1bf/4b/1997914/index/90" alt="威尼斯">
															<div class="cont-table"><span class="text"><em>威尼斯</em> <i>Venice</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>威尼斯</i></span></div>
														</li>
														<li id="city_65" class="city-list-li" city-id="65" beento="1"><img src="https://pic1.qyer.com/album/user/495/23/RUBQQBkGYw/index/90" alt="京都">
															<div class="cont-table"><span class="text"><em>京都</em> <i>Kyoto</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>京都</i></span></div>
														</li>
														<li id="city_31" class="city-list-li" city-id="31" beento="1"><img src="https://pic.qyer.com/album/1e9/be/2095530/index/90" alt="佛罗伦萨">
															<div class="cont-table"><span class="text"><em>佛罗伦萨</em> <i>Florence</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>佛罗伦萨</i></span></div>
														</li>
														<li id="city_8603" class="city-list-li" city-id="8603" beento="1"><img src="https://pic.qyer.com/album/user/387/88/QkFSShIGZA/index/90" alt="大阪">
															<div class="cont-table"><span class="text"><em>大阪</em> <i>Osaka</i></span></div>
															<div class="control"><em class="iconfont icon-duigouthin"></em><span class="text"><i>大阪</i></span></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_401" country-id="401">
															<div class="text"><a class="link-country" href="javascript:;" country-id="401" data-toggle="tooltip" title="" data-original-title="阿富汗 Afghanistan"><em>阿富汗</em> Afghanistan</a></div>
														</li>
														<li id="country_402" country-id="402">
															<div class="text"><a class="link-country" href="javascript:;" country-id="402" data-toggle="tooltip" title="" data-original-title="阿联酋 United Arab Emirates"><em>阿联酋</em> United Arab Emirates</a></div>
														</li>
														<li id="country_403" country-id="403">
															<div class="text"><a class="link-country" href="javascript:;" country-id="403" data-toggle="tooltip" title="" data-original-title="阿曼 Oman"><em>阿曼</em> Oman</a></div>
														</li>
														<li id="country_414" country-id="414">
															<div class="text"><a class="link-country" href="javascript:;" country-id="414" data-toggle="tooltip" title="" data-original-title="巴基斯坦 Pakistan"><em>巴基斯坦</em> Pakistan</a></div>
														</li>
														<li id="country_2041" country-id="2041">
															<div class="text"><a class="link-country" href="javascript:;" country-id="2041" data-toggle="tooltip" title="" data-original-title="巴勒斯坦 Palestine"><em>巴勒斯坦</em> Palestine</a></div>
														</li>
														<li id="country_416" country-id="416">
															<div class="text"><a class="link-country" href="javascript:;" country-id="416" data-toggle="tooltip" title="" data-original-title="巴林 Bahrain"><em>巴林</em> Bahrain</a></div>
														</li>
														<li id="country_433" country-id="433">
															<div class="text"><a class="link-country" href="javascript:;" country-id="433" data-toggle="tooltip" title="" data-original-title="不丹 Bhutan"><em>不丹</em> Bhutan</a></div>
														</li>
														<li id="country_436" country-id="436">
															<div class="text"><a class="link-country" href="javascript:;" country-id="436" data-toggle="tooltip" title="" data-original-title="朝鲜 North Korea"><em>朝鲜</em> North Korea</a></div>
														</li>
														<li id="country_438" country-id="438">
															<div class="text"><a class="link-country" href="javascript:;" country-id="438" data-toggle="tooltip" title="" data-original-title="东帝汶 East Timor"><em>东帝汶</em> East Timor</a></div>
														</li>
														<li id="country_446" country-id="446">
															<div class="text"><a class="link-country" href="javascript:;" country-id="446" data-toggle="tooltip" title="" data-original-title="菲律宾 Philippines"><em>菲律宾</em> Philippines</a></div>
														</li>
														<li id="country_233" country-id="233">
															<div class="text"><a class="link-country" href="javascript:;" country-id="233" data-toggle="tooltip" title="" data-original-title="韩国 South Korea"><em>韩国</em> South Korea</a></div>
														</li>
														<li id="country_461" country-id="461">
															<div class="text"><a class="link-country" href="javascript:;" country-id="461" data-toggle="tooltip" title="" data-original-title="哈萨克斯坦 Kazakhstan"><em>哈萨克斯坦</em> Kazakhstan</a></div>
														</li>
														<li id="country_219" country-id="219">
															<div class="text"><a class="link-country" href="javascript:;" country-id="219" data-toggle="tooltip" title="" data-original-title="柬埔寨 Cambodia"><em>柬埔寨</em> Cambodia</a></div>
														</li>
														<li id="country_468" country-id="468">
															<div class="text"><a class="link-country" href="javascript:;" country-id="468" data-toggle="tooltip" title="" data-original-title="吉尔吉斯斯坦 Kyrgyzstan"><em>吉尔吉斯斯坦</em> Kyrgyzstan</a></div>
														</li>
														<li id="country_476" country-id="476">
															<div class="text"><a class="link-country" href="javascript:;" country-id="476" data-toggle="tooltip" title="" data-original-title="卡塔尔 Qatar"><em>卡塔尔</em> Qatar</a></div>
														</li>
														<li id="country_481" country-id="481">
															<div class="text"><a class="link-country" href="javascript:;" country-id="481" data-toggle="tooltip" title="" data-original-title="科威特 Kuwait"><em>科威特</em> Kuwait</a></div>
														</li>
														<li id="country_487" country-id="487">
															<div class="text"><a class="link-country" href="javascript:;" country-id="487" data-toggle="tooltip" title="" data-original-title="老挝 Laos"><em>老挝</em> Laos</a></div>
														</li>
														<li id="country_488" country-id="488">
															<div class="text"><a class="link-country" href="javascript:;" country-id="488" data-toggle="tooltip" title="" data-original-title="黎巴嫩 Lebanon"><em>黎巴嫩</em> Lebanon</a></div>
														</li>
														<li id="country_497" country-id="497">
															<div class="text"><a class="link-country" href="javascript:;" country-id="497" data-toggle="tooltip" title="" data-original-title="马尔代夫 Maldives"><em>马尔代夫</em> Maldives</a></div>
														</li>
														<li id="country_213" country-id="213">
															<div class="text"><a class="link-country" href="javascript:;" country-id="213" data-toggle="tooltip" title="" data-original-title="马来西亚 Malaysia"><em>马来西亚</em> Malaysia</a></div>
														</li>
														<li id="country_507" country-id="507">
															<div class="text"><a class="link-country" href="javascript:;" country-id="507" data-toggle="tooltip" title="" data-original-title="蒙古 Mongolia"><em>蒙古</em> Mongolia</a></div>
														</li>
														<li id="country_508" country-id="508">
															<div class="text"><a class="link-country" href="javascript:;" country-id="508" data-toggle="tooltip" title="" data-original-title="孟加拉国 Bangladesh"><em>孟加拉国</em> Bangladesh</a></div>
														</li>
														<li id="country_511" country-id="511">
															<div class="text"><a class="link-country" href="javascript:;" country-id="511" data-toggle="tooltip" title="" data-original-title="缅甸 Myanmar"><em>缅甸</em> Myanmar</a></div>
														</li>
														<li id="country_220" country-id="220">
															<div class="text"><a class="link-country" href="javascript:;" country-id="220" data-toggle="tooltip" title="" data-original-title="尼泊尔 Nepal"><em>尼泊尔</em> Nepal</a></div>
														</li>
														<li id="country_14" country-id="14">
															<div class="text"><a class="link-country" href="javascript:;" country-id="14" data-toggle="tooltip" title="" data-original-title="日本 Japan"><em>日本</em> Japan</a></div>
														</li>
														<li id="country_532" country-id="532">
															<div class="text"><a class="link-country" href="javascript:;" country-id="532" data-toggle="tooltip" title="" data-original-title="沙特阿拉伯 Saudi Arabia"><em>沙特阿拉伯</em> Saudi Arabia</a></div>
														</li>
														<li id="country_537" country-id="537">
															<div class="text"><a class="link-country" href="javascript:;" country-id="537" data-toggle="tooltip" title="" data-original-title="斯里兰卡 Sri Lanka"><em>斯里兰卡</em> Sri Lanka</a></div>
														</li>
														<li id="country_215" country-id="215">
															<div class="text"><a class="link-country" href="javascript:;" country-id="215" data-toggle="tooltip" title="" data-original-title="泰国 Thailand"><em>泰国</em> Thailand</a></div>
														</li>
														<li id="country_544" country-id="544">
															<div class="text"><a class="link-country" href="javascript:;" country-id="544" data-toggle="tooltip" title="" data-original-title="塔吉克斯坦 Tajikistan"><em>塔吉克斯坦</em> Tajikistan</a></div>
														</li>
														<li id="country_552" country-id="552">
															<div class="text"><a class="link-country" href="javascript:;" country-id="552" data-toggle="tooltip" title="" data-original-title="土库曼斯坦 Turkmenistan"><em>土库曼斯坦</em> Turkmenistan</a></div>
														</li>
														<li id="country_558" country-id="558">
															<div class="text"><a class="link-country" href="javascript:;" country-id="558" data-toggle="tooltip" title="" data-original-title="文莱 Brunei"><em>文莱</em> Brunei</a></div>
														</li>
														<li id="country_562" country-id="562">
															<div class="text"><a class="link-country" href="javascript:;" country-id="562" data-toggle="tooltip" title="" data-original-title="乌兹别克斯坦 Uzbekistan"><em>乌兹别克斯坦</em> Uzbekistan</a></div>
														</li>
														<li id="country_232" country-id="232">
															<div class="text"><a class="link-country" href="javascript:;" country-id="232" data-toggle="tooltip" title="" data-original-title="新加坡 Singapore"><em>新加坡</em> Singapore</a></div>
														</li>
														<li id="country_564" country-id="564">
															<div class="text"><a class="link-country" href="javascript:;" country-id="564" data-toggle="tooltip" title="" data-original-title="叙利亚 Syria"><em>叙利亚</em> Syria</a></div>
														</li>
														<li id="country_567" country-id="567">
															<div class="text"><a class="link-country" href="javascript:;" country-id="567" data-toggle="tooltip" title="" data-original-title="也门 Yemen"><em>也门</em> Yemen</a></div>
														</li>
														<li id="country_1035" country-id="1035">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1035" data-toggle="tooltip" title="" data-original-title="伊拉克 Iraq"><em>伊拉克</em> Iraq</a></div>
														</li>
														<li id="country_568" country-id="568">
															<div class="text"><a class="link-country" href="javascript:;" country-id="568" data-toggle="tooltip" title="" data-original-title="伊朗 Iran"><em>伊朗</em> Iran</a></div>
														</li>
														<li id="country_231" country-id="231">
															<div class="text"><a class="link-country" href="javascript:;" country-id="231" data-toggle="tooltip" title="" data-original-title="印度 India"><em>印度</em> India</a></div>
														</li>
														<li id="country_570" country-id="570">
															<div class="text"><a class="link-country" href="javascript:;" country-id="570" data-toggle="tooltip" title="" data-original-title="印度尼西亚 Indonesia"><em>印度尼西亚</em> Indonesia</a></div>
														</li>
														<li id="country_1425" country-id="1425">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1425" data-toggle="tooltip" title="" data-original-title="英属印度洋领地 British Indian Ocean Territory"><em>英属印度洋领地</em> British Indian Ocean Territory</a></div>
														</li>
														<li id="country_569" country-id="569">
															<div class="text"><a class="link-country" href="javascript:;" country-id="569" data-toggle="tooltip" title="" data-original-title="以色列 Israel"><em>以色列</em> Israel</a></div>
														</li>
														<li id="country_572" country-id="572">
															<div class="text"><a class="link-country" href="javascript:;" country-id="572" data-toggle="tooltip" title="" data-original-title="约旦 Jordan"><em>约旦</em> Jordan</a></div>
														</li>
														<li id="country_216" country-id="216">
															<div class="text"><a class="link-country" href="javascript:;" country-id="216" data-toggle="tooltip" title="" data-original-title="越南 Vietnam"><em>越南</em> Vietnam</a></div>
														</li>
														<li id="country_11" country-id="11">
															<div class="text"><a class="link-country" href="javascript:;" country-id="11" data-toggle="tooltip" title="" data-original-title="中国 China"><em>中国</em> China</a></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_399" country-id="399">
															<div class="text"><a class="link-country" href="javascript:;" country-id="399" data-toggle="tooltip" title="" data-original-title="阿尔巴尼亚 Albania"><em>阿尔巴尼亚</em> Albania</a></div>
														</li>
														<li id="country_406" country-id="406">
															<div class="text"><a class="link-country" href="javascript:;" country-id="406" data-toggle="tooltip" title="" data-original-title="爱尔兰 Ireland"><em>爱尔兰</em> Ireland</a></div>
														</li>
														<li id="country_407" country-id="407">
															<div class="text"><a class="link-country" href="javascript:;" country-id="407" data-toggle="tooltip" title="" data-original-title="爱沙尼亚 Estonia"><em>爱沙尼亚</em> Estonia</a></div>
														</li>
														<li id="country_408" country-id="408">
															<div class="text"><a class="link-country" href="javascript:;" country-id="408" data-toggle="tooltip" title="" data-original-title="安道尔 Andorra"><em>安道尔</em> Andorra</a></div>
														</li>
														<li id="country_198" country-id="198">
															<div class="text"><a class="link-country" href="javascript:;" country-id="198" data-toggle="tooltip" title="" data-original-title="奥地利 Austria"><em>奥地利</em> Austria</a></div>
														</li>
														<li id="country_404" country-id="404">
															<div class="text"><a class="link-country" href="javascript:;" country-id="404" data-toggle="tooltip" title="" data-original-title="阿塞拜疆 Azerbaijan"><em>阿塞拜疆</em> Azerbaijan</a></div>
														</li>
														<li id="country_418" country-id="418">
															<div class="text"><a class="link-country" href="javascript:;" country-id="418" data-toggle="tooltip" title="" data-original-title="白俄罗斯 Belarus"><em>白俄罗斯</em> Belarus</a></div>
														</li>
														<li id="country_421" country-id="421">
															<div class="text"><a class="link-country" href="javascript:;" country-id="421" data-toggle="tooltip" title="" data-original-title="保加利亚 Bulgaria"><em>保加利亚</em> Bulgaria</a></div>
														</li>
														<li id="country_424" country-id="424">
															<div class="text"><a class="link-country" href="javascript:;" country-id="424" data-toggle="tooltip" title="" data-original-title="比利时 Belgium"><em>比利时</em> Belgium</a></div>
														</li>
														<li id="country_425" country-id="425">
															<div class="text"><a class="link-country" href="javascript:;" country-id="425" data-toggle="tooltip" title="" data-original-title="冰岛 Iceland"><em>冰岛</em> Iceland</a></div>
														</li>
														<li id="country_428" country-id="428">
															<div class="text"><a class="link-country" href="javascript:;" country-id="428" data-toggle="tooltip" title="" data-original-title="波黑 Bosnia &amp; Herzegovina"><em>波黑</em> Bosnia &amp; Herzegovina</a></div>
														</li>
														<li id="country_427" country-id="427">
															<div class="text"><a class="link-country" href="javascript:;" country-id="427" data-toggle="tooltip" title="" data-original-title="波兰 Poland"><em>波兰</em> Poland</a></div>
														</li>
														<li id="country_205" country-id="205">
															<div class="text"><a class="link-country" href="javascript:;" country-id="205" data-toggle="tooltip" title="" data-original-title="丹麦 Denmark"><em>丹麦</em> Denmark</a></div>
														</li>
														<li id="country_15" country-id="15">
															<div class="text"><a class="link-country" href="javascript:;" country-id="15" data-toggle="tooltip" title="" data-original-title="德国 Germany"><em>德国</em> Germany</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_208" country-id="208">
															<div class="text"><a class="link-country" href="javascript:;" country-id="208" data-toggle="tooltip" title="" data-original-title="俄罗斯 Russia"><em>俄罗斯</em> Russia</a></div>
														</li>
														<li id="country_186" country-id="186">
															<div class="text"><a class="link-country" href="javascript:;" country-id="186" data-toggle="tooltip" title="" data-original-title="法国 France"><em>法国</em> France</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_445" country-id="445">
															<div class="text"><a class="link-country" href="javascript:;" country-id="445" data-toggle="tooltip" title="" data-original-title="法罗群岛 Faroe Islands"><em>法罗群岛</em> Faroe Islands</a></div>
														</li>
														<li id="country_804" country-id="804">
															<div class="text"><a class="link-country" href="javascript:;" country-id="804" data-toggle="tooltip" title="" data-original-title="梵蒂冈 Vatican"><em>梵蒂冈</em> Vatican</a></div>
														</li>
														<li id="country_448" country-id="448">
															<div class="text"><a class="link-country" href="javascript:;" country-id="448" data-toggle="tooltip" title="" data-original-title="芬兰 Finland"><em>芬兰</em> Finland</a></div>
														</li>
														<li id="country_456" country-id="456">
															<div class="text"><a class="link-country" href="javascript:;" country-id="456" data-toggle="tooltip" title="" data-original-title="格陵兰 Greenland"><em>格陵兰</em> Greenland</a></div>
														</li>
														<li id="country_457" country-id="457">
															<div class="text"><a class="link-country" href="javascript:;" country-id="457" data-toggle="tooltip" title="" data-original-title="格鲁吉亚 Georgia"><em>格鲁吉亚</em> Georgia</a></div>
														</li>
														<li id="country_464" country-id="464">
															<div class="text"><a class="link-country" href="javascript:;" country-id="464" data-toggle="tooltip" title="" data-original-title="黑山 Montenegro"><em>黑山</em> Montenegro</a></div>
														</li>
														<li id="country_200" country-id="200">
															<div class="text"><a class="link-country" href="javascript:;" country-id="200" data-toggle="tooltip" title="" data-original-title="荷兰 Netherlands"><em>荷兰</em> Netherlands</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_193" country-id="193">
															<div class="text"><a class="link-country" href="javascript:;" country-id="193" data-toggle="tooltip" title="" data-original-title="捷克 Czech Republic"><em>捷克</em> Czech Republic</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_482" country-id="482">
															<div class="text"><a class="link-country" href="javascript:;" country-id="482" data-toggle="tooltip" title="" data-original-title="克罗地亚 Croatia"><em>克罗地亚</em> Croatia</a></div>
														</li>
														<li id="country_479" country-id="479">
															<div class="text"><a class="link-country" href="javascript:;" country-id="479" data-toggle="tooltip" title="" data-original-title="科索沃 Kosovo"><em>科索沃</em> Kosovo</a></div>
														</li>
														<li id="country_485" country-id="485">
															<div class="text"><a class="link-country" href="javascript:;" country-id="485" data-toggle="tooltip" title="" data-original-title="拉脱维亚 Latvia"><em>拉脱维亚</em> Latvia</a></div>
														</li>
														<li id="country_762" country-id="762">
															<div class="text"><a class="link-country" href="javascript:;" country-id="762" data-toggle="tooltip" title="" data-original-title="列支敦士登 Liechtenstein"><em>列支敦士登</em> Liechtenstein</a></div>
														</li>
														<li id="country_489" country-id="489">
															<div class="text"><a class="link-country" href="javascript:;" country-id="489" data-toggle="tooltip" title="" data-original-title="立陶宛 Lithuania"><em>立陶宛</em> Lithuania</a></div>
														</li>
														<li id="country_495" country-id="495">
															<div class="text"><a class="link-country" href="javascript:;" country-id="495" data-toggle="tooltip" title="" data-original-title="罗马尼亚 Romania"><em>罗马尼亚</em> Romania</a></div>
														</li>
														<li id="country_493" country-id="493">
															<div class="text"><a class="link-country" href="javascript:;" country-id="493" data-toggle="tooltip" title="" data-original-title="卢森堡 Luxembourg"><em>卢森堡</em> Luxembourg</a></div>
														</li>
														<li id="country_498" country-id="498">
															<div class="text"><a class="link-country" href="javascript:;" country-id="498" data-toggle="tooltip" title="" data-original-title="马耳他 Malta"><em>马耳他</em> Malta</a></div>
														</li>
														<li id="country_501" country-id="501">
															<div class="text"><a class="link-country" href="javascript:;" country-id="501" data-toggle="tooltip" title="" data-original-title="马其顿 Macedonia"><em>马其顿</em> Macedonia</a></div>
														</li>
														<li id="country_512" country-id="512">
															<div class="text"><a class="link-country" href="javascript:;" country-id="512" data-toggle="tooltip" title="" data-original-title="摩尔多瓦 Moldova"><em>摩尔多瓦</em> Moldova</a></div>
														</li>
														<li id="country_654" country-id="654">
															<div class="text"><a class="link-country" href="javascript:;" country-id="654" data-toggle="tooltip" title="" data-original-title="摩纳哥 Monaco"><em>摩纳哥</em> Monaco</a></div>
														</li>
														<li id="country_521" country-id="521">
															<div class="text"><a class="link-country" href="javascript:;" country-id="521" data-toggle="tooltip" title="" data-original-title="挪威 Norway"><em>挪威</em> Norway</a></div>
														</li>
														<li id="country_523" country-id="523">
															<div class="text"><a class="link-country" href="javascript:;" country-id="523" data-toggle="tooltip" title="" data-original-title="葡萄牙 Portugal"><em>葡萄牙</em> Portugal</a></div>
														</li>
														<li id="country_202" country-id="202">
															<div class="text"><a class="link-country" href="javascript:;" country-id="202" data-toggle="tooltip" title="" data-original-title="瑞典 Sweden"><em>瑞典</em> Sweden</a></div>
														</li>
														<li id="country_524" country-id="524">
															<div class="text"><a class="link-country" href="javascript:;" country-id="524" data-toggle="tooltip" title="" data-original-title="瑞士 Switzerland"><em>瑞士</em> Switzerland</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_527" country-id="527">
															<div class="text"><a class="link-country" href="javascript:;" country-id="527" data-toggle="tooltip" title="" data-original-title="塞尔维亚 Serbia"><em>塞尔维亚</em> Serbia</a></div>
														</li>
														<li id="country_530" country-id="530">
															<div class="text"><a class="link-country" href="javascript:;" country-id="530" data-toggle="tooltip" title="" data-original-title="塞浦路斯 Cyprus"><em>塞浦路斯</em> Cyprus</a></div>
														</li>
														<li id="country_785" country-id="785">
															<div class="text"><a class="link-country" href="javascript:;" country-id="785" data-toggle="tooltip" title="" data-original-title="圣马力诺 San Marino"><em>圣马力诺</em> San Marino</a></div>
														</li>
														<li id="country_538" country-id="538">
															<div class="text"><a class="link-country" href="javascript:;" country-id="538" data-toggle="tooltip" title="" data-original-title="斯洛伐克 Slovakia"><em>斯洛伐克</em> Slovakia</a></div>
														</li>
														<li id="country_539" country-id="539">
															<div class="text"><a class="link-country" href="javascript:;" country-id="539" data-toggle="tooltip" title="" data-original-title="斯洛文尼亚 Slovenia"><em>斯洛文尼亚</em> Slovenia</a></div>
														</li>
														<li id="country_195" country-id="195">
															<div class="text"><a class="link-country" href="javascript:;" country-id="195" data-toggle="tooltip" title="" data-original-title="土耳其 Turkey"><em>土耳其</em> Turkey</a></div>
														</li>
														<li id="country_560" country-id="560">
															<div class="text"><a class="link-country" href="javascript:;" country-id="560" data-toggle="tooltip" title="" data-original-title="乌克兰 Ukraine"><em>乌克兰</em> Ukraine</a></div>
														</li>
														<li id="country_182" country-id="182">
															<div class="text"><a class="link-country" href="javascript:;" country-id="182" data-toggle="tooltip" title="" data-original-title="西班牙 Spain"><em>西班牙</em> Spain</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_206" country-id="206">
															<div class="text"><a class="link-country" href="javascript:;" country-id="206" data-toggle="tooltip" title="" data-original-title="希腊 Greece"><em>希腊</em> Greece</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_1445" country-id="1445">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1445" data-toggle="tooltip" title="" data-original-title="西兰公国 Principality of Sealand"><em>西兰公国</em> Principality of Sealand</a></div>
														</li>
														<li id="country_207" country-id="207">
															<div class="text"><a class="link-country" href="javascript:;" country-id="207" data-toggle="tooltip" title="" data-original-title="匈牙利 Hungary"><em>匈牙利</em> Hungary</a></div>
														</li>
														<li id="country_566" country-id="566">
															<div class="text"><a class="link-country" href="javascript:;" country-id="566" data-toggle="tooltip" title="" data-original-title="亚美尼亚 Armenia"><em>亚美尼亚</em> Armenia</a></div>
														</li>
														<li id="country_189" country-id="189">
															<div class="text"><a class="link-country" href="javascript:;" country-id="189" data-toggle="tooltip" title="" data-original-title="意大利 Italy"><em>意大利</em> Italy</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_13" country-id="13">
															<div class="text"><a class="link-country" href="javascript:;" country-id="13" data-toggle="tooltip" title="" data-original-title="英国 UK"><em>英国</em> UK</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_805" country-id="805">
															<div class="text"><a class="link-country" href="javascript:;" country-id="805" data-toggle="tooltip" title="" data-original-title="直布罗陀 Gibraltar"><em>直布罗陀</em> Gibraltar</a></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_1416" country-id="1416">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1416" data-toggle="tooltip" title="" data-original-title="安圭拉 Anguilla"><em>安圭拉</em> Anguilla</a></div>
														</li>
														<li id="country_410" country-id="410">
															<div class="text"><a class="link-country" href="javascript:;" country-id="410" data-toggle="tooltip" title="" data-original-title="安提瓜和巴布达 Antigua &amp; Barbuda"><em>安提瓜和巴布达</em> Antigua &amp; Barbuda</a></div>
														</li>
														<li id="country_411" country-id="411">
															<div class="text"><a class="link-country" href="javascript:;" country-id="411" data-toggle="tooltip" title="" data-original-title="巴巴多斯 Barbados"><em>巴巴多斯</em> Barbados</a></div>
														</li>
														<li id="country_413" country-id="413">
															<div class="text"><a class="link-country" href="javascript:;" country-id="413" data-toggle="tooltip" title="" data-original-title="巴哈马 The Bahamas"><em>巴哈马</em> The Bahamas</a></div>
														</li>
														<li id="country_419" country-id="419">
															<div class="text"><a class="link-country" href="javascript:;" country-id="419" data-toggle="tooltip" title="" data-original-title="百慕大 Bermuda"><em>百慕大</em> Bermuda</a></div>
														</li>
														<li id="country_417" country-id="417">
															<div class="text"><a class="link-country" href="javascript:;" country-id="417" data-toggle="tooltip" title="" data-original-title="巴拿马 Panama"><em>巴拿马</em> Panama</a></div>
														</li>
														<li id="country_426" country-id="426">
															<div class="text"><a class="link-country" href="javascript:;" country-id="426" data-toggle="tooltip" title="" data-original-title="波多黎各 Puerto Rico"><em>波多黎各</em> Puerto Rico</a></div>
														</li>
														<li id="country_430" country-id="430">
															<div class="text"><a class="link-country" href="javascript:;" country-id="430" data-toggle="tooltip" title="" data-original-title="伯利兹 Belize"><em>伯利兹</em> Belize</a></div>
														</li>
														<li id="country_432" country-id="432">
															<div class="text"><a class="link-country" href="javascript:;" country-id="432" data-toggle="tooltip" title="" data-original-title="阿鲁巴 Aruba"><em>阿鲁巴</em> Aruba</a></div>
														</li>
														<li id="country_1432" country-id="1432">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1432" data-toggle="tooltip" title="" data-original-title="波内赫 Bonaire"><em>波内赫</em> Bonaire</a></div>
														</li>
														<li id="country_440" country-id="440">
															<div class="text"><a class="link-country" href="javascript:;" country-id="440" data-toggle="tooltip" title="" data-original-title="多米尼加共和国 Dominican Republic"><em>多米尼加共和国</em> Dominican Republic</a></div>
														</li>
														<li id="country_441" country-id="441">
															<div class="text"><a class="link-country" href="javascript:;" country-id="441" data-toggle="tooltip" title="" data-original-title="多米尼克 Dominica"><em>多米尼克</em> Dominica</a></div>
														</li>
														<li id="country_1383" country-id="1383">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1383" data-toggle="tooltip" title="" data-original-title="法属圣马丁 Saint Martin"><em>法属圣马丁</em> Saint Martin</a></div>
														</li>
														<li id="country_455" country-id="455">
															<div class="text"><a class="link-country" href="javascript:;" country-id="455" data-toggle="tooltip" title="" data-original-title="格林纳达 Grenada"><em>格林纳达</em> Grenada</a></div>
														</li>
														<li id="country_454" country-id="454">
															<div class="text"><a class="link-country" href="javascript:;" country-id="454" data-toggle="tooltip" title="" data-original-title="哥斯达黎加 Costa Rica"><em>哥斯达黎加</em> Costa Rica</a></div>
														</li>
														<li id="country_1295" country-id="1295">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1295" data-toggle="tooltip" title="" data-original-title="瓜德罗普 Guadeloupe"><em>瓜德罗普</em> Guadeloupe</a></div>
														</li>
														<li id="country_458" country-id="458">
															<div class="text"><a class="link-country" href="javascript:;" country-id="458" data-toggle="tooltip" title="" data-original-title="古巴 Cuba"><em>古巴</em> Cuba</a></div>
														</li>
														<li id="country_462" country-id="462">
															<div class="text"><a class="link-country" href="javascript:;" country-id="462" data-toggle="tooltip" title="" data-original-title="海地 Haiti"><em>海地</em> Haiti</a></div>
														</li>
														<li id="country_1382" country-id="1382">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1382" data-toggle="tooltip" title="" data-original-title="荷属圣马丁 Sint Maarten"><em>荷属圣马丁</em> Sint Maarten</a></div>
														</li>
														<li id="country_465" country-id="465">
															<div class="text"><a class="link-country" href="javascript:;" country-id="465" data-toggle="tooltip" title="" data-original-title="洪都拉斯 Honduras"><em>洪都拉斯</em> Honduras</a></div>
														</li>
														<li id="country_238" country-id="238">
															<div class="text"><a class="link-country" href="javascript:;" country-id="238" data-toggle="tooltip" title="" data-original-title="加拿大 Canada"><em>加拿大</em> Canada</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_477" country-id="477">
															<div class="text"><a class="link-country" href="javascript:;" country-id="477" data-toggle="tooltip" title="" data-original-title="开曼群岛 Cayman Islands"><em>开曼群岛</em> Cayman Islands</a></div>
														</li>
														<li id="country_1419" country-id="1419">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1419" data-toggle="tooltip" title="" data-original-title="库拉索 Curacao"><em>库拉索</em> Curacao</a></div>
														</li>
														<li id="country_1380" country-id="1380">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1380" data-toggle="tooltip" title="" data-original-title="马提尼克 Martinique"><em>马提尼克</em> Martinique</a></div>
														</li>
														<li id="country_236" country-id="236">
															<div class="text"><a class="link-country" href="javascript:;" country-id="236" data-toggle="tooltip" title="" data-original-title="美国 USA"><em>美国</em> USA</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_506" country-id="506">
															<div class="text"><a class="link-country" href="javascript:;" country-id="506" data-toggle="tooltip" title="" data-original-title="美属维尔京群岛 US Virgin Islands"><em>美属维尔京群岛</em> US Virgin Islands</a></div>
														</li>
														<li id="country_1418" country-id="1418">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1418" data-toggle="tooltip" title="" data-original-title="蒙塞拉特岛 Montserrat"><em>蒙塞拉特岛</em> Montserrat</a></div>
														</li>
														<li id="country_515" country-id="515">
															<div class="text"><a class="link-country" href="javascript:;" country-id="515" data-toggle="tooltip" title="" data-original-title="墨西哥 Mexico"><em>墨西哥</em> Mexico</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_518" country-id="518">
															<div class="text"><a class="link-country" href="javascript:;" country-id="518" data-toggle="tooltip" title="" data-original-title="尼加拉瓜 Nicaragua"><em>尼加拉瓜</em> Nicaragua</a></div>
														</li>
														<li id="country_1421" country-id="1421">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1421" data-toggle="tooltip" title="" data-original-title="萨巴岛 Saba"><em>萨巴岛</em> Saba</a></div>
														</li>
														<li id="country_525" country-id="525">
															<div class="text"><a class="link-country" href="javascript:;" country-id="525" data-toggle="tooltip" title="" data-original-title="萨尔瓦多 El Salvador"><em>萨尔瓦多</em> El Salvador</a></div>
														</li>
														<li id="country_1417" country-id="1417">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1417" data-toggle="tooltip" title="" data-original-title="圣巴泰勒米岛 Saint-Barthelemy"><em>圣巴泰勒米岛</em> Saint-Barthelemy</a></div>
														</li>
														<li id="country_534" country-id="534">
															<div class="text"><a class="link-country" href="javascript:;" country-id="534" data-toggle="tooltip" title="" data-original-title="圣基茨和尼维斯 Saint Kitts and Nevis"><em>圣基茨和尼维斯</em> Saint Kitts and Nevis</a></div>
														</li>
														<li id="country_535" country-id="535">
															<div class="text"><a class="link-country" href="javascript:;" country-id="535" data-toggle="tooltip" title="" data-original-title="圣卢西亚 St Lucia"><em>圣卢西亚</em> St Lucia</a></div>
														</li>
														<li id="country_1381" country-id="1381">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1381" data-toggle="tooltip" title="" data-original-title="圣皮埃尔和密克隆群岛 Saint Pierre et Miquelon"><em>圣皮埃尔和密克隆群岛</em> Saint Pierre et Miquelon</a></div>
														</li>
														<li id="country_536" country-id="536">
															<div class="text"><a class="link-country" href="javascript:;" country-id="536" data-toggle="tooltip" title="" data-original-title="圣文森特和格林纳丁斯 St Vincent &amp; The Grenadines"><em>圣文森特和格林纳丁斯</em> St Vincent &amp; The Grenadines</a></div>
														</li>
														<li id="country_1420" country-id="1420">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1420" data-toggle="tooltip" title="" data-original-title="圣尤斯特歇斯 Sint Eustatius"><em>圣尤斯特歇斯</em> Sint Eustatius</a></div>
														</li>
														<li id="country_548" country-id="548">
															<div class="text"><a class="link-country" href="javascript:;" country-id="548" data-toggle="tooltip" title="" data-original-title="特克斯和凯科斯群岛 Turks &amp; Caicos Islands"><em>特克斯和凯科斯群岛</em> Turks &amp; Caicos Islands</a></div>
														</li>
														<li id="country_549" country-id="549">
															<div class="text"><a class="link-country" href="javascript:;" country-id="549" data-toggle="tooltip" title="" data-original-title="特立尼达和多巴哥 Trinidad &amp; Tobago"><em>特立尼达和多巴哥</em> Trinidad &amp; Tobago</a></div>
														</li>
														<li id="country_555" country-id="555">
															<div class="text"><a class="link-country" href="javascript:;" country-id="555" data-toggle="tooltip" title="" data-original-title="危地马拉 Guatemala"><em>危地马拉</em> Guatemala</a></div>
														</li>
														<li id="country_565" country-id="565">
															<div class="text"><a class="link-country" href="javascript:;" country-id="565" data-toggle="tooltip" title="" data-original-title="牙买加 Jamaica"><em>牙买加</em> Jamaica</a></div>
														</li>
														<li id="country_571" country-id="571">
															<div class="text"><a class="link-country" href="javascript:;" country-id="571" data-toggle="tooltip" title="" data-original-title="英属维尔京群岛 British Virgin Islands"><em>英属维尔京群岛</em> British Virgin Islands</a></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_243" country-id="243">
															<div class="text"><a class="link-country" href="javascript:;" country-id="243" data-toggle="tooltip" title="" data-original-title="阿根廷 Argentina"><em>阿根廷</em> Argentina</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_415" country-id="415">
															<div class="text"><a class="link-country" href="javascript:;" country-id="415" data-toggle="tooltip" title="" data-original-title="巴拉圭 Paraguay"><em>巴拉圭</em> Paraguay</a></div>
														</li>
														<li id="country_242" country-id="242">
															<div class="text"><a class="link-country" href="javascript:;" country-id="242" data-toggle="tooltip" title="" data-original-title="巴西 Brazil"><em>巴西</em> Brazil</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_509" country-id="509">
															<div class="text"><a class="link-country" href="javascript:;" country-id="509" data-toggle="tooltip" title="" data-original-title="秘鲁 Peru"><em>秘鲁</em> Peru</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_429" country-id="429">
															<div class="text"><a class="link-country" href="javascript:;" country-id="429" data-toggle="tooltip" title="" data-original-title="玻利维亚 Bolivia"><em>玻利维亚</em> Bolivia</a></div>
														</li>
														<li id="country_443" country-id="443">
															<div class="text"><a class="link-country" href="javascript:;" country-id="443" data-toggle="tooltip" title="" data-original-title="厄瓜多尔 Ecuador"><em>厄瓜多尔</em> Ecuador</a></div>
														</li>
														<li id="country_1292" country-id="1292">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1292" data-toggle="tooltip" title="" data-original-title="法属圭亚那 French Guiana"><em>法属圭亚那</em> French Guiana</a></div>
														</li>
														<li id="country_449" country-id="449">
															<div class="text"><a class="link-country" href="javascript:;" country-id="449" data-toggle="tooltip" title="" data-original-title="福克兰群岛（马尔维纳斯群岛） Falkland Islands"><em>福克兰群岛（马尔维纳斯群岛）</em> Falkland Islands</a></div>
														</li>
														<li id="country_453" country-id="453">
															<div class="text"><a class="link-country" href="javascript:;" country-id="453" data-toggle="tooltip" title="" data-original-title="哥伦比亚 Colombia"><em>哥伦比亚</em> Colombia</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_460" country-id="460">
															<div class="text"><a class="link-country" href="javascript:;" country-id="460" data-toggle="tooltip" title="" data-original-title="圭亚那 Guyana"><em>圭亚那</em> Guyana</a></div>
														</li>
														<li id="country_1293" country-id="1293">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1293" data-toggle="tooltip" title="" data-original-title="苏里南 Suriname"><em>苏里南</em> Suriname</a></div>
														</li>
														<li id="country_557" country-id="557">
															<div class="text"><a class="link-country" href="javascript:;" country-id="557" data-toggle="tooltip" title="" data-original-title="委内瑞拉 Venezuela"><em>委内瑞拉</em> Venezuela</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_561" country-id="561">
															<div class="text"><a class="link-country" href="javascript:;" country-id="561" data-toggle="tooltip" title="" data-original-title="乌拉圭 Uruguay"><em>乌拉圭</em> Uruguay</a></div>
														</li>
														<li id="country_575" country-id="575">
															<div class="text"><a class="link-country" href="javascript:;" country-id="575" data-toggle="tooltip" title="" data-original-title="智利 Chile"><em>智利</em> Chile</a> <em class="hot">热门</em></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_400" country-id="400">
															<div class="text"><a class="link-country" href="javascript:;" country-id="400" data-toggle="tooltip" title="" data-original-title="阿尔及利亚 Algeria"><em>阿尔及利亚</em> Algeria</a></div>
														</li>
														<li id="country_244" country-id="244">
															<div class="text"><a class="link-country" href="javascript:;" country-id="244" data-toggle="tooltip" title="" data-original-title="埃及 Egypt"><em>埃及</em> Egypt</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_405" country-id="405">
															<div class="text"><a class="link-country" href="javascript:;" country-id="405" data-toggle="tooltip" title="" data-original-title="埃塞俄比亚 Ethiopia"><em>埃塞俄比亚</em> Ethiopia</a></div>
														</li>
														<li id="country_409" country-id="409">
															<div class="text"><a class="link-country" href="javascript:;" country-id="409" data-toggle="tooltip" title="" data-original-title="安哥拉 Angola"><em>安哥拉</em> Angola</a></div>
														</li>
														<li id="country_1422" country-id="1422">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1422" data-toggle="tooltip" title="" data-original-title="阿森松 Ascension"><em>阿森松</em> Ascension</a></div>
														</li>
														<li id="country_423" country-id="423">
															<div class="text"><a class="link-country" href="javascript:;" country-id="423" data-toggle="tooltip" title="" data-original-title="贝宁 Benin"><em>贝宁</em> Benin</a></div>
														</li>
														<li id="country_2001" country-id="2001">
															<div class="text"><a class="link-country" href="javascript:;" country-id="2001" data-toggle="tooltip" title="" data-original-title="北苏丹王国 Kingdom of North Sudan"><em>北苏丹王国</em> Kingdom of North Sudan</a></div>
														</li>
														<li id="country_431" country-id="431">
															<div class="text"><a class="link-country" href="javascript:;" country-id="431" data-toggle="tooltip" title="" data-original-title="博茨瓦纳 Botswana"><em>博茨瓦纳</em> Botswana</a></div>
														</li>
														<li id="country_434" country-id="434">
															<div class="text"><a class="link-country" href="javascript:;" country-id="434" data-toggle="tooltip" title="" data-original-title="布基纳法索 Burkina Faso"><em>布基纳法索</em> Burkina Faso</a></div>
														</li>
														<li id="country_435" country-id="435">
															<div class="text"><a class="link-country" href="javascript:;" country-id="435" data-toggle="tooltip" title="" data-original-title="布隆迪 Burundi"><em>布隆迪</em> Burundi</a></div>
														</li>
														<li id="country_437" country-id="437">
															<div class="text"><a class="link-country" href="javascript:;" country-id="437" data-toggle="tooltip" title="" data-original-title="赤道几内亚 Equatorial Guinea"><em>赤道几内亚</em> Equatorial Guinea</a></div>
														</li>
														<li id="country_1061" country-id="1061">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1061" data-toggle="tooltip" title="" data-original-title="佛得角 Cape Verde"><em>佛得角</em> Cape Verde</a></div>
														</li>
														<li id="country_439" country-id="439">
															<div class="text"><a class="link-country" href="javascript:;" country-id="439" data-toggle="tooltip" title="" data-original-title="多哥 Togo"><em>多哥</em> Togo</a></div>
														</li>
														<li id="country_444" country-id="444">
															<div class="text"><a class="link-country" href="javascript:;" country-id="444" data-toggle="tooltip" title="" data-original-title="厄立特里亚 Eritrea"><em>厄立特里亚</em> Eritrea</a></div>
														</li>
														<li id="country_450" country-id="450">
															<div class="text"><a class="link-country" href="javascript:;" country-id="450" data-toggle="tooltip" title="" data-original-title="冈比亚 Gambia"><em>冈比亚</em> Gambia</a></div>
														</li>
														<li id="country_451" country-id="451">
															<div class="text"><a class="link-country" href="javascript:;" country-id="451" data-toggle="tooltip" title="" data-original-title="刚果 Congo-Brazzaville"><em>刚果</em> Congo-Brazzaville</a></div>
														</li>
														<li id="country_452" country-id="452">
															<div class="text"><a class="link-country" href="javascript:;" country-id="452" data-toggle="tooltip" title="" data-original-title="刚果民主共和国 Congo-Kinshasa"><em>刚果民主共和国</em> Congo-Kinshasa</a></div>
														</li>
														<li id="country_471" country-id="471">
															<div class="text"><a class="link-country" href="javascript:;" country-id="471" data-toggle="tooltip" title="" data-original-title="加纳 Ghana"><em>加纳</em> Ghana</a></div>
														</li>
														<li id="country_473" country-id="473">
															<div class="text"><a class="link-country" href="javascript:;" country-id="473" data-toggle="tooltip" title="" data-original-title="加蓬 Gabon"><em>加蓬</em> Gabon</a></div>
														</li>
														<li id="country_467" country-id="467">
															<div class="text"><a class="link-country" href="javascript:;" country-id="467" data-toggle="tooltip" title="" data-original-title="吉布提 Djibouti"><em>吉布提</em> Djibouti</a></div>
														</li>
														<li id="country_474" country-id="474">
															<div class="text"><a class="link-country" href="javascript:;" country-id="474" data-toggle="tooltip" title="" data-original-title="津巴布韦 Zimbabwe"><em>津巴布韦</em> Zimbabwe</a></div>
														</li>
														<li id="country_469" country-id="469">
															<div class="text"><a class="link-country" href="javascript:;" country-id="469" data-toggle="tooltip" title="" data-original-title="几内亚 Guinea"><em>几内亚</em> Guinea</a></div>
														</li>
														<li id="country_470" country-id="470">
															<div class="text"><a class="link-country" href="javascript:;" country-id="470" data-toggle="tooltip" title="" data-original-title="几内亚比绍 Guinea Bissau"><em>几内亚比绍</em> Guinea Bissau</a></div>
														</li>
														<li id="country_475" country-id="475">
															<div class="text"><a class="link-country" href="javascript:;" country-id="475" data-toggle="tooltip" title="" data-original-title="喀麦隆 Cameroon"><em>喀麦隆</em> Cameroon</a></div>
														</li>
														<li id="country_478" country-id="478">
															<div class="text"><a class="link-country" href="javascript:;" country-id="478" data-toggle="tooltip" title="" data-original-title="科摩罗 Comoros"><em>科摩罗</em> Comoros</a></div>
														</li>
														<li id="country_483" country-id="483">
															<div class="text"><a class="link-country" href="javascript:;" country-id="483" data-toggle="tooltip" title="" data-original-title="肯尼亚 Kenya"><em>肯尼亚</em> Kenya</a></div>
														</li>
														<li id="country_480" country-id="480">
															<div class="text"><a class="link-country" href="javascript:;" country-id="480" data-toggle="tooltip" title="" data-original-title="科特迪瓦 Cote Divoire"><em>科特迪瓦</em> Cote Divoire</a></div>
														</li>
														<li id="country_486" country-id="486">
															<div class="text"><a class="link-country" href="javascript:;" country-id="486" data-toggle="tooltip" title="" data-original-title="莱索托 Lesotho"><em>莱索托</em> Lesotho</a></div>
														</li>
														<li id="country_490" country-id="490">
															<div class="text"><a class="link-country" href="javascript:;" country-id="490" data-toggle="tooltip" title="" data-original-title="利比里亚 Liberia"><em>利比里亚</em> Liberia</a></div>
														</li>
														<li id="country_491" country-id="491">
															<div class="text"><a class="link-country" href="javascript:;" country-id="491" data-toggle="tooltip" title="" data-original-title="利比亚 Libya"><em>利比亚</em> Libya</a></div>
														</li>
														<li id="country_492" country-id="492">
															<div class="text"><a class="link-country" href="javascript:;" country-id="492" data-toggle="tooltip" title="" data-original-title="留尼汪 Reunion"><em>留尼汪</em> Reunion</a></div>
														</li>
														<li id="country_494" country-id="494">
															<div class="text"><a class="link-country" href="javascript:;" country-id="494" data-toggle="tooltip" title="" data-original-title="卢旺达 Rwanda"><em>卢旺达</em> Rwanda</a></div>
														</li>
														<li id="country_496" country-id="496">
															<div class="text"><a class="link-country" href="javascript:;" country-id="496" data-toggle="tooltip" title="" data-original-title="马达加斯加 Madagascar"><em>马达加斯加</em> Madagascar</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_499" country-id="499">
															<div class="text"><a class="link-country" href="javascript:;" country-id="499" data-toggle="tooltip" title="" data-original-title="马拉维 Malawi"><em>马拉维</em> Malawi</a></div>
														</li>
														<li id="country_500" country-id="500">
															<div class="text"><a class="link-country" href="javascript:;" country-id="500" data-toggle="tooltip" title="" data-original-title="马里 Mali"><em>马里</em> Mali</a></div>
														</li>
														<li id="country_503" country-id="503">
															<div class="text"><a class="link-country" href="javascript:;" country-id="503" data-toggle="tooltip" title="" data-original-title="毛里求斯 Mauritius"><em>毛里求斯</em> Mauritius</a></div>
														</li>
														<li id="country_504" country-id="504">
															<div class="text"><a class="link-country" href="javascript:;" country-id="504" data-toggle="tooltip" title="" data-original-title="毛里塔尼亚 Mauritania"><em>毛里塔尼亚</em> Mauritania</a></div>
														</li>
														<li id="country_1426" country-id="1426">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1426" data-toggle="tooltip" title="" data-original-title="马约特 Mayotte"><em>马约特</em> Mayotte</a></div>
														</li>
														<li id="country_513" country-id="513">
															<div class="text"><a class="link-country" href="javascript:;" country-id="513" data-toggle="tooltip" title="" data-original-title="摩洛哥 Morocco"><em>摩洛哥</em> Morocco</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_514" country-id="514">
															<div class="text"><a class="link-country" href="javascript:;" country-id="514" data-toggle="tooltip" title="" data-original-title="莫桑比克 Mozambique"><em>莫桑比克</em> Mozambique</a></div>
														</li>
														<li id="country_516" country-id="516">
															<div class="text"><a class="link-country" href="javascript:;" country-id="516" data-toggle="tooltip" title="" data-original-title="纳米比亚 Namibia"><em>纳米比亚</em> Namibia</a></div>
														</li>
														<li id="country_517" country-id="517">
															<div class="text"><a class="link-country" href="javascript:;" country-id="517" data-toggle="tooltip" title="" data-original-title="南非 South Africa"><em>南非</em> South Africa</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_853" country-id="853">
															<div class="text"><a class="link-country" href="javascript:;" country-id="853" data-toggle="tooltip" title="" data-original-title="南苏丹 South Sudan"><em>南苏丹</em> South Sudan</a></div>
														</li>
														<li id="country_519" country-id="519">
															<div class="text"><a class="link-country" href="javascript:;" country-id="519" data-toggle="tooltip" title="" data-original-title="尼日尔 Niger"><em>尼日尔</em> Niger</a></div>
														</li>
														<li id="country_520" country-id="520">
															<div class="text"><a class="link-country" href="javascript:;" country-id="520" data-toggle="tooltip" title="" data-original-title="尼日利亚 Nigeria"><em>尼日利亚</em> Nigeria</a></div>
														</li>
														<li id="country_528" country-id="528">
															<div class="text"><a class="link-country" href="javascript:;" country-id="528" data-toggle="tooltip" title="" data-original-title="塞拉利昂 Sierra Leone"><em>塞拉利昂</em> Sierra Leone</a></div>
														</li>
														<li id="country_529" country-id="529">
															<div class="text"><a class="link-country" href="javascript:;" country-id="529" data-toggle="tooltip" title="" data-original-title="塞内加尔 Senegal"><em>塞内加尔</em> Senegal</a></div>
														</li>
														<li id="country_531" country-id="531">
															<div class="text"><a class="link-country" href="javascript:;" country-id="531" data-toggle="tooltip" title="" data-original-title="塞舌尔 Seychelles"><em>塞舌尔</em> Seychelles</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_533" country-id="533">
															<div class="text"><a class="link-country" href="javascript:;" country-id="533" data-toggle="tooltip" title="" data-original-title="圣多美和普林西比 Sao Tome &amp; Principe"><em>圣多美和普林西比</em> Sao Tome &amp; Principe</a></div>
														</li>
														<li id="country_1328" country-id="1328">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1328" data-toggle="tooltip" title="" data-original-title="圣赫勒拿 Saint Helena"><em>圣赫勒拿</em> Saint Helena</a></div>
														</li>
														<li id="country_540" country-id="540">
															<div class="text"><a class="link-country" href="javascript:;" country-id="540" data-toggle="tooltip" title="" data-original-title="斯威士兰 Swaziland"><em>斯威士兰</em> Swaziland</a></div>
														</li>
														<li id="country_541" country-id="541">
															<div class="text"><a class="link-country" href="javascript:;" country-id="541" data-toggle="tooltip" title="" data-original-title="苏丹 Sudan"><em>苏丹</em> Sudan</a></div>
														</li>
														<li id="country_420" country-id="420">
															<div class="text"><a class="link-country" href="javascript:;" country-id="420" data-toggle="tooltip" title="" data-original-title="索马里 Somalia"><em>索马里</em> Somalia</a></div>
														</li>
														<li id="country_546" country-id="546">
															<div class="text"><a class="link-country" href="javascript:;" country-id="546" data-toggle="tooltip" title="" data-original-title="坦桑尼亚 Tanzania"><em>坦桑尼亚</em> Tanzania</a></div>
														</li>
														<li id="country_1423" country-id="1423">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1423" data-toggle="tooltip" title="" data-original-title="特里斯坦-达库尼亚群岛 Tristan da Cunha"><em>特里斯坦-达库尼亚群岛</em> Tristan da Cunha</a></div>
														</li>
														<li id="country_550" country-id="550">
															<div class="text"><a class="link-country" href="javascript:;" country-id="550" data-toggle="tooltip" title="" data-original-title="突尼斯 Tunisia"><em>突尼斯</em> Tunisia</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_559" country-id="559">
															<div class="text"><a class="link-country" href="javascript:;" country-id="559" data-toggle="tooltip" title="" data-original-title="乌干达 Uganda"><em>乌干达</em> Uganda</a></div>
														</li>
														<li id="country_1062" country-id="1062">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1062" data-toggle="tooltip" title="" data-original-title="西撒哈拉 Western Sahara"><em>西撒哈拉</em> Western Sahara</a></div>
														</li>
														<li id="country_573" country-id="573">
															<div class="text"><a class="link-country" href="javascript:;" country-id="573" data-toggle="tooltip" title="" data-original-title="赞比亚 Zambia"><em>赞比亚</em> Zambia</a></div>
														</li>
														<li id="country_574" country-id="574">
															<div class="text"><a class="link-country" href="javascript:;" country-id="574" data-toggle="tooltip" title="" data-original-title="乍得 Chad"><em>乍得</em> Chad</a></div>
														</li>
														<li id="country_576" country-id="576">
															<div class="text"><a class="link-country" href="javascript:;" country-id="576" data-toggle="tooltip" title="" data-original-title="中非共和国 Central African Republic"><em>中非共和国</em> Central African Republic</a></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_806" country-id="806">
															<div class="text"><a class="link-country" href="javascript:;" country-id="806" data-toggle="tooltip" title="" data-original-title="艾普罗菲尔 Apolofirl"><em>艾普罗菲尔</em> Apolofirl</a></div>
														</li>
														<li id="country_240" country-id="240">
															<div class="text"><a class="link-country" href="javascript:;" country-id="240" data-toggle="tooltip" title="" data-original-title="澳大利亚 Australia"><em>澳大利亚</em> Australia</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_412" country-id="412">
															<div class="text"><a class="link-country" href="javascript:;" country-id="412" data-toggle="tooltip" title="" data-original-title="巴布亚新几内亚 Papua New Guinea"><em>巴布亚新几内亚</em> Papua New Guinea</a></div>
														</li>
														<li id="country_422" country-id="422">
															<div class="text"><a class="link-country" href="javascript:;" country-id="422" data-toggle="tooltip" title="" data-original-title="北马里亚纳群岛 Northern Mariana Islands"><em>北马里亚纳群岛</em> Northern Mariana Islands</a></div>
														</li>
														<li id="country_545" country-id="545">
															<div class="text"><a class="link-country" href="javascript:;" country-id="545" data-toggle="tooltip" title="" data-original-title="法属波利尼西亚 French Polynesia"><em>法属波利尼西亚</em> French Polynesia</a></div>
														</li>
														<li id="country_447" country-id="447">
															<div class="text"><a class="link-country" href="javascript:;" country-id="447" data-toggle="tooltip" title="" data-original-title="斐济 Fiji"><em>斐济</em> Fiji</a> <em class="hot">热门</em></div>
														</li>
														<li id="country_1072" country-id="1072">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1072" data-toggle="tooltip" title="" data-original-title="关岛 Guam"><em>关岛</em> Guam</a></div>
														</li>
														<li id="country_466" country-id="466">
															<div class="text"><a class="link-country" href="javascript:;" country-id="466" data-toggle="tooltip" title="" data-original-title="基里巴斯 Kiribati"><em>基里巴斯</em> Kiribati</a></div>
														</li>
														<li id="country_484" country-id="484">
															<div class="text"><a class="link-country" href="javascript:;" country-id="484" data-toggle="tooltip" title="" data-original-title="库克群岛 The Cook Islands"><em>库克群岛</em> The Cook Islands</a></div>
														</li>
														<li id="country_502" country-id="502">
															<div class="text"><a class="link-country" href="javascript:;" country-id="502" data-toggle="tooltip" title="" data-original-title="马绍尔群岛 Marshall Islands"><em>马绍尔群岛</em> Marshall Islands</a></div>
														</li>
														<li id="country_505" country-id="505">
															<div class="text"><a class="link-country" href="javascript:;" country-id="505" data-toggle="tooltip" title="" data-original-title="美属萨摩亚 American Samoa"><em>美属萨摩亚</em> American Samoa</a></div>
														</li>
														<li id="country_510" country-id="510">
															<div class="text"><a class="link-country" href="javascript:;" country-id="510" data-toggle="tooltip" title="" data-original-title="密克罗尼西亚联邦 Federated States Of  Micronesia"><em>密克罗尼西亚联邦</em> Federated States Of  Micronesia</a></div>
														</li>
														<li id="country_1027" country-id="1027">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1027" data-toggle="tooltip" title="" data-original-title="瑙鲁 Nauru"><em>瑙鲁</em> Nauru</a></div>
														</li>
														<li id="country_1064" country-id="1064">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1064" data-toggle="tooltip" title="" data-original-title="纽埃 Niue"><em>纽埃</em> Niue</a></div>
														</li>
														<li id="country_522" country-id="522">
															<div class="text"><a class="link-country" href="javascript:;" country-id="522" data-toggle="tooltip" title="" data-original-title="帕劳 Palau"><em>帕劳</em> Palau</a></div>
														</li>
														<li id="country_1428" country-id="1428">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1428" data-toggle="tooltip" title="" data-original-title="皮特凯恩群岛 Pitcairn Islands"><em>皮特凯恩群岛</em> Pitcairn Islands</a></div>
														</li>
														<li id="country_526" country-id="526">
															<div class="text"><a class="link-country" href="javascript:;" country-id="526" data-toggle="tooltip" title="" data-original-title="萨摩亚 Samoa"><em>萨摩亚</em> Samoa</a></div>
														</li>
														<li id="country_543" country-id="543">
															<div class="text"><a class="link-country" href="javascript:;" country-id="543" data-toggle="tooltip" title="" data-original-title="所罗门群岛 Solomon Islands"><em>所罗门群岛</em> Solomon Islands</a></div>
														</li>
														<li id="country_547" country-id="547">
															<div class="text"><a class="link-country" href="javascript:;" country-id="547" data-toggle="tooltip" title="" data-original-title="汤加 Tonga"><em>汤加</em> Tonga</a></div>
														</li>
														<li id="country_1063" country-id="1063">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1063" data-toggle="tooltip" title="" data-original-title="托克劳 Tokelau"><em>托克劳</em> Tokelau</a></div>
														</li>
														<li id="country_551" country-id="551">
															<div class="text"><a class="link-country" href="javascript:;" country-id="551" data-toggle="tooltip" title="" data-original-title="图瓦卢 Tuvalu"><em>图瓦卢</em> Tuvalu</a></div>
														</li>
														<li id="country_553" country-id="553">
															<div class="text"><a class="link-country" href="javascript:;" country-id="553" data-toggle="tooltip" title="" data-original-title="瓦利斯群岛和富图纳群岛 Wallis &amp; Futuna"><em>瓦利斯群岛和富图纳群岛</em> Wallis &amp; Futuna</a></div>
														</li>
														<li id="country_554" country-id="554">
															<div class="text"><a class="link-country" href="javascript:;" country-id="554" data-toggle="tooltip" title="" data-original-title="瓦努阿图 Vanuatu"><em>瓦努阿图</em> Vanuatu</a></div>
														</li>
														<li id="country_563" country-id="563">
															<div class="text"><a class="link-country" href="javascript:;" country-id="563" data-toggle="tooltip" title="" data-original-title="新喀里多尼亚 New Caledonia"><em>新喀里多尼亚</em> New Caledonia</a></div>
														</li>
														<li id="country_241" country-id="241">
															<div class="text"><a class="link-country" href="javascript:;" country-id="241" data-toggle="tooltip" title="" data-original-title="新西兰 New Zealand"><em>新西兰</em> New Zealand</a> <em class="hot">热门</em></div>
														</li>
													</ul>
												</div>
											</div>
											<div class="section" style="display: none;">
												<div class="continent-list">
													<ul>
														<li id="country_1430" country-id="1430">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1430" data-toggle="tooltip" title="" data-original-title="布韦岛 Bouvet Island"><em>布韦岛</em> Bouvet Island</a></div>
														</li>
														<li id="country_1431" country-id="1431">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1431" data-toggle="tooltip" title="" data-original-title="法属南部领土 French Southern Territories"><em>法属南部领土</em> French Southern Territories</a></div>
														</li>
														<li id="country_760" country-id="760">
															<div class="text"><a class="link-country" href="javascript:;" country-id="760" data-toggle="tooltip" title="" data-original-title="南极 Antarctica"><em>南极</em> Antarctica</a></div>
														</li>
														<li id="country_1762" country-id="1762">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1762" data-toggle="tooltip" title="" data-original-title="南乔治亚岛和南桑威奇群岛 SGSSI"><em>南乔治亚岛和南桑威奇群岛</em> SGSSI</a></div>
														</li>
														<li id="country_1446" country-id="1446">
															<div class="text"><a class="link-country" href="javascript:;" country-id="1446" data-toggle="tooltip" title="" data-original-title="太空 Outer Space"><em>太空</em> Outer Space</a></div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="fp-footer">
									<div class="fp-tags" style="display: none;">
										<dl><dt><a href="javascript:;" class="fold">已添加</a></dt>
											<dd></dd>
										</dl>
									</div>
									<div class="fp-btns">
										<button class="btn_next ui_btn_big_disabled" type="button">下一步</button>
									</div>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;
							<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;">
							<input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;">
							<input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<!--添加足迹end -->

		<!--上传图片的模态框-->
		<div class="qui-popup2 uploadpopup" style="display: none; opacity: 1;">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: auto; top: 0px; opacity: 1;">
						<div class="qui-popup2-closeIcon">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div class="qyer_upload">
								<div class="qyer_upload_head">
									<ul class="fl fb f14 ml10 fontYaHei cGray">
										<li class="ui_tab_trigger_item ui_tab_trigger_item_current">本地上传</li>
										<li class="ui_tab_trigger_item">从我的相册选择</li>
									</ul>
								</div>
								<div class="qyer_upload_content ui_tab_cnt">
									<div class="qyer_upload_local ui_tab_cnt_item ui_tab_cnt_item_current">
										<div class="qyer_upload_item_tit">
											<div class="qyer_upload_myphoto_list"><strong>将照片保存到：</strong>
												<select name="album_list" class="source">
													<option value="3070795">默认相册</option>
												</select>
											</div>
											<div class="qyer_upload_t_local"></div><span class="fr qyer_upload_create">或 <a class="create_album" href="javascript:void(0);">新建相册</a></span>
											<div class="clear"></div>
										</div>
										<!--上传照片 -->
										<div class="qyer_upload_item_con">
											<!--上传照片按钮 -->
											<div id="swf_upload_container_around" style="position: relative;">
												<div id="swf_upload_container" class="qyer_upload_upbtn" style="position: relative;">
													<div><a id="swfuploadbut" href="javascript:void(0);" style="z-index: 17;">+ 上传照片</a></div>
													<p class="mt15" style="font-size:14px;font-weight:bold;color:#c9c9c9">支持JPG、JPEG、PNG格式，每张小于10M.</p>
													<div id="html5_1buuuejbsmm414b319j5tqs1o4lb_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 100px; left: 226px; width: 126px; height: 40px; overflow: hidden; z-index: 16;">
														<input id="html5_1buuuejbsmm414b319j5tqs1o4lb" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept="image/jpeg,image/png">
													</div>
												</div>
												<!--照片flash上传中 -->
												<div id="album_submit_div" class="qyer_upload_item_loading" style="display:none;">
													<div class="qyer_upload_list" id="fsUploadProgress">
														<!--照片flash上传列表显示 -->
														<div id="UploadResult" class="qyer_upload_list_status"></div>
													</div>
													<div class="p10 clearfix">
														<input type="button" id="album_submit" value="确定" class="fr ui_button_disabled" disabled="disabled">
													</div>
												</div>
											</div>
										</div>
										<div id="warn_tips" class="qyer_upload_layout_error"><img src="//static.qyer.com/images/common/tpl/icon_warn.png" alt="" class="vm mr10"><span class="fontYaHei cLightgray f14">一次上传文件过多</span></div>
									</div>
									<div class="qyer_upload_mylist ui_tab_cnt_item">
										<form id="selecg" name="upfile_form" action="/api.php?action=inputupfile" method="post" enctype="multipart/form-data" target="check_file_frame">
											<div class="qyer_upload_item_tit">
												<div class="qyer_upload_myphoto_list"><strong>选择相册：</strong>
													<select name="album_list" class="source">
														<option value="3070795">默认相册</option>
													</select>
												</div>
												<div class="qyer_upload_t_local"></div><span class="fr qyer_upload_create"></span>
												<div class="clear"></div>
											</div>
											<!--上传照片 -->
											<div class="qyer_upload_photo_list myPhotoList">
												<ul class="clearfix">
													<li data-id="25545515" data-url="https://pic1.qyer.com/album/user/2554/55/Q0xQRh8CYU0/index"><img src="https://pic1.qyer.com/album/user/2554/55/Q0xQRh8CYU0/index/80" width="80" height="80">
														<div class="icon_current"><span></span></div>
													</li>
												</ul>
											</div>
											<div class="p10 clearfix qyer_upload_btn">
												<input type="button" value="确定" class="ui_button fr" id="my_photo">
												<input type="button" value="取消" class="ui_button_cancel mr10 fr" id="cancel_my_photo">
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: block;">&nbsp;
							<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;">
							<input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;">
							<input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<!--上传模态框end-->
		<!--增加足迹  点击国家之后 -->
		<!--<div class="qui-popup2 define-popup" style="display: block; opacity: 1;">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: auto; top: 0px; opacity: 1;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div id="footprintModal" class="footprint-modal">
								<div id="fpClose" class="fp-close"><i class="iconfont icon-guanbi"></i></div>
								<div class="fp-header"></div>
								<div class="fp-body">
									<div class="fp-success">
										<h3><i class="iconfont icon-duigouthin"></i> <span>已成功在你的地图上点亮 <em>1</em> 个城市</span></h3>
										<p>标记去过的旅行地，吃过的餐厅，购物过的地方，来充实你的足迹地图</p>
									</div>
									<div class="fp-recommend">
										<div class="title">点击标记去过的旅行地</div>
										<div class="content">
											<div class="poi-list">
												<ul>
													<li class="poi-list-li" id="poi_59100" poi-id="59100" title="" beento="1" data-original-title="浅草寺">
														<div class="img"><img src="https://pic.qyer.com/album/130/48/1841574/index/90" width="80" height="80" alt="浅草寺"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">浅草寺</span></li>
													<li class="poi-list-li" id="poi_34463"
													poi-id="34463" title="" beento="1" data-original-title="东京塔">
														<div class="img"><img src="https://pic.qyer.com/album/123/c8/1866577/index/90" width="80" height="80" alt="东京塔"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">东京塔</span></li>
													<li class="poi-list-li" id="poi_59124"
													poi-id="59124" title="" beento="1" data-original-title="涩谷区">
														<div class="img"><img src="https://pic.qyer.com/album/1ba/9d/1874734/index/90" width="80" height="80" alt="涩谷区"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">涩谷区</span></li>
													<li class="poi-list-li" id="poi_36305"
													poi-id="36305" title="" beento="1" data-original-title="新宿三丁目歌舞伎町">
														<div class="img"><img src="https://pic1.qyer.com/album/117/a1/1866556/index/90" width="80" height="80" alt="新宿三丁目歌舞伎町"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">新宿三丁目歌舞伎町</span></li>
													<li class="poi-list-li" id="poi_59117"
													poi-id="59117" title="" beento="1" data-original-title="皇居">
														<div class="img"><img src="https://pic1.qyer.com/album/user/2240/22/Q0tRQhgFZEA/index/90" width="80" height="80" alt="皇居"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">皇居</span></li>
													<li class="poi-list-li" id="poi_59115"
													poi-id="59115" title="" beento="1" data-original-title="台场">
														<div class="img"><img src="https://pic.qyer.com/album/user/1773/55/QE5SQR8CZUg/index/90" width="80" height="80" alt="台场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">台场</span></li>
													<li class="poi-list-li" id="poi_59101"
													poi-id="59101" title="" beento="1" data-original-title="明治神宫">
														<div class="img"><img src="https://pic.qyer.com/album/user/1971/76/QEBSQx0BYkA/index/90" width="80" height="80" alt="明治神宫"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">明治神宫</span></li>
												</ul>
											</div>
										</div>
										<div class="title">点击标记吃过的餐厅</div>
										<div class="content">
											<div class="poi-list">
												<ul>
													<li class="poi-list-li" id="poi_59118" poi-id="59118" title="" beento="1" data-original-title="筑地市场">
														<div class="img"><img src="https://pic1.qyer.com/album/105/d4/1840680/index/90" width="80" height="80" alt="筑地市场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">筑地市场</span></li>
													<li class="poi-list-li" id="poi_59185"
													poi-id="59185" title="" beento="1" data-original-title="一兰拉面(涩谷店)">
														<div class="img"><img src="https://pic1.qyer.com/album/user/1791/58/QE5cQx8PaE8/index/90" width="80" height="80" alt="一兰拉面(涩谷店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">一兰拉面(涩谷店)</span></li>
													<li class="poi-list-li"
													id="poi_117788" poi-id="117788" title="" beento="1" data-original-title="一兰拉面(新宿中央东口店)">
														<div class="img"><img src="https://pic.qyer.com/album/user/2358/74/Q0pQSh0DZ0k/index/90" width="80" height="80" alt="一兰拉面(新宿中央东口店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">一兰拉面(新宿中央东口店)</span></li>
													<li class="poi-list-li"
													id="poi_117814" poi-id="117814" title="" beento="1" data-original-title="蟹道乐(新宿本店)">
														<div class="img"><img src="https://pic1.qyer.com/album/user/1192/91/QEhcQBMGYU4/index/90" width="80" height="80" alt="蟹道乐(新宿本店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">蟹道乐(新宿本店)</span></li>
													<li class="poi-list-li"
													id="poi_59188" poi-id="59188" title="" beento="1" data-original-title="松屋八重洲店">
														<div class="img"><img src="https://pic1.qyer.com/album/1f5/7b/1866551/index/90" width="80" height="80" alt="松屋八重洲店"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">松屋八重洲店</span></li>
													<li class="poi-list-li" id="poi_87996"
													poi-id="87996" title="" beento="1" data-original-title="大和寿司">
														<div class="img"><img src="https://pic1.qyer.com/album/user/500/82/RElVShgDaQ/index/90" width="80" height="80" alt="大和寿司"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">大和寿司</span></li>
													<li class="poi-list-li" id="poi_109138"
													poi-id="109138" title="" beento="1" data-original-title="一风堂拉面（惠比寿店）">
														<div class="img"><img src="https://pic.qyer.com/album/user/597/6/REBSQhwCYA/index/90" width="80" height="80" alt="一风堂拉面（惠比寿店）"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">一风堂拉面（惠比寿店）</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="fp-footer">
									<div class="fp-change" style="display: none;"><span>已添加 <em>0</em> 个目的地足迹</span></div>
									<div class="fp-btns">
										<button class="btn_close ui_btn_big_disabled" type="button">以后再说</button>
										<button class="btn_complete ui_btn_big" type="button">继续去完善</button>
									</div>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;
							<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;">
							<input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;">
							<input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>-->
		<!--<div class="qui-popup2 define-popup" style="display: none; opacity: 1;">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: auto; top: 0px; opacity: 1;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div id="footprintModal" class="footprint-modal poi-modal">
								<div id="fpClose" class="fp-close"><i class="iconfont icon-guanbi"></i></div>
								<div class="fp-header"><span class="title">添加足迹</span></div>
								<div class="fp-body">
									<div class="poi-container">
										<div class="poi-main">
											<div class="poi-tabs">
												<div class="tabs">
													<ul>
														<li id="poi_type_sight" class="poi_type_tab current" poi-type="sight"><i class="iconfont icon-jingdian"></i> <span>景点</span></li>
														<li id="poi_type_food" class="poi_type_tab" poi-type="food"><i class="iconfont icon-meishi"></i> <span>美食</span></li>
														<li id="poi_type_shopping" class="poi_type_tab" poi-type="shopping"><i class="iconfont icon-gouwu"></i> <span>购物</span></li>
														<li id="poi_type_activity" class="poi_type_tab" poi-type="activity"><i class="iconfont icon-huodong"></i> <span>活动</span></li>
														<li id="poi_type_transportation" class="poi_type_tab" poi-type="transportation"><i class="iconfont icon-jiaotong"></i> <span>交通</span></li>
													</ul>
												</div>
												<div class="poi-search">
													<input class="txt poiSearch" type="text" placeholder="搜索目的地">
													<div class="mark"><i class="iconfont icon-infooutline"></i> 已经标记过啦</div>
													<div class="poiSearchContainer">
														<div class="qui-inputAutocomplete" style="display: none; width: 178px;">
															<ul class="qui-inputAutocomplete-ul">
																<li class="disableDefalut">loading ... </li>
															</ul>
														</div>
													</div>
												</div>
												<div class="clear"></div>
												<div class="poi-list-cont">
													<div id="city_20_sight" class="section section-poi" style="display: block;">
														<div class="poi-list loading" city-id="20" poi-type="sight" page="2">
															<ul>
																<li id="poi_33914" poi-id="33914" class="poi-list-li" title="" beento="1" data-original-title="埃菲尔铁塔">
																	<div class="img"><img src="https://pic.qyer.com/album/1e3/b0/2068391/index/90" width="80" height="80" alt="埃菲尔铁塔"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">埃菲尔铁塔</span></li>
																<li id="poi_33915" poi-id="33915"
																class="poi-list-li current" title="" beento="0" data-original-title="卢浮宫">
																	<div class="img"><img src="https://pic1.qyer.com/album/134/44/1105515/index/90" width="80" height="80" alt="卢浮宫"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">卢浮宫</span></li>
																<li id="poi_59194" poi-id="59194" class="poi-list-li"
																title="" beento="1" data-original-title="巴黎凯旋门">
																	<div class="img"><img src="https://pic1.qyer.com/album/197/8f/1841504/index/90" width="80" height="80" alt="巴黎凯旋门"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎凯旋门</span></li>
																<li id="poi_43814" poi-id="43814"
																class="poi-list-li disabled" title="" beento="0" data-original-title="已经标记过啦">
																	<div class="img"><img src="https://pic.qyer.com/album/user/376/57/Qk5TRx0FYw/index/90" width="80" height="80" alt="香榭丽舍大街"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">香榭丽舍大街</span></li>
																<li id="poi_33926" poi-id="33926"
																class="poi-list-li" title="" beento="1" data-original-title="塞纳河">
																	<div class="img"><img src="https://pic.qyer.com/album/112/9b/2046962/index/90" width="80" height="80" alt="塞纳河"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">塞纳河</span></li>
																<li id="poi_52146" poi-id="52146" class="poi-list-li"
																title="" beento="1" data-original-title="巴黎圣母院">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/376/57/Qk5TRx0FYQ/index/90" width="80" height="80" alt="巴黎圣母院"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎圣母院</span></li>
																<li id="poi_46452" poi-id="46452"
																class="poi-list-li" title="" beento="1" data-original-title="协和广场">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/2403/12/Q01VQRsFZEw/index/90" width="80" height="80" alt="协和广场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">协和广场</span></li>
																<li id="poi_33918" poi-id="33918"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎圣心大教堂">
																	<div class="img"><img src="https://pic1.qyer.com/album/11c/aa/2077376/index/90" width="80" height="80" alt="巴黎圣心大教堂"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎圣心大教堂</span></li>
																<li id="poi_59613" poi-id="59613"
																class="poi-list-li current" title="" beento="0" data-original-title="巴黎歌剧院">
																	<div class="img"><img src="https://pic1.qyer.com/album/105/6d/1841838/index/90" width="80" height="80" alt="巴黎歌剧院"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎歌剧院</span></li>
																<li id="poi_59205" poi-id="59205"
																class="poi-list-li" title="" beento="1" data-original-title="蒙马特高地">
																	<div class="img"><img src="https://pic1.qyer.com/album/168/11/1861586/index/90" width="80" height="80" alt="蒙马特高地"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">蒙马特高地</span></li>
																<li id="poi_33919" poi-id="33919"
																class="poi-list-li" title="" beento="1" data-original-title="蓬皮杜中心">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/2402/72/Q01VQB0FYU0/index/90" width="80" height="80" alt="蓬皮杜中心"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">蓬皮杜中心</span></li>
																<li id="poi_48166" poi-id="48166"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎新桥">
																	<div class="img"><img src="https://pic.qyer.com/album/1ae/3d/1840378/index/90" width="80" height="80" alt="巴黎新桥"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎新桥</span></li>
																<li id="poi_53733" poi-id="53733"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎战神广场">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/1820/39/QEFXQhkOaEA/index/90" width="80" height="80" alt="巴黎战神广场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎战神广场</span></li>
																<li id="poi_83158"
																poi-id="83158" class="poi-list-li" title="" beento="1" data-original-title="巴黎市政厅">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/2283/35/Q0tdQRkCZ00/index/90" width="80" height="80" alt="巴黎市政厅"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎市政厅</span></li>
																<li id="poi_56112" poi-id="56112"
																class="poi-list-li" title="" beento="1" data-original-title="西岱岛">
																	<div class="img"><img src="https://pic1.qyer.com/album/17c/88/1888306/index/90" width="80" height="80" alt="西岱岛"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">西岱岛</span></li>
																<li id="poi_82779" poi-id="82779" class="poi-list-li"
																title="" beento="1" data-original-title="巴黎亚历山大三世桥">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/373/96/Qk5WSxwAZQ/index/90" width="80" height="80" alt="巴黎亚历山大三世桥"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎亚历山大三世桥</span></li>
																<li id="poi_44428"
																poi-id="44428" class="poi-list-li" title="" beento="1" data-original-title="杜乐丽花园">
																	<div class="img"><img src="https://pic.qyer.com/album/1df/ec/1840063/index/90" width="80" height="80" alt="杜乐丽花园"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">杜乐丽花园</span></li>
																<li id="poi_171700" poi-id="171700"
																class="poi-list-li" title="" beento="1" data-original-title="卢浮宫凯旋门(小凯旋门)">
																	<div class="img"><img src="https://pic.qyer.com/album/user/2525/15/Q0xXRxsCZ0o/index/90" width="80" height="80" alt="卢浮宫凯旋门(小凯旋门)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">卢浮宫凯旋门(小凯旋门)</span></li>
																<li id="poi_44412"
																poi-id="44412" class="poi-list-li" title="" beento="1" data-original-title="巴黎荣军院">
																	<div class="img"><img src="https://pic.qyer.com/album/12a/c5/1929175/index/90" width="80" height="80" alt="巴黎荣军院"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎荣军院</span></li>
																<li id="poi_46458" poi-id="46458"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎歌剧院广场">
																	<div class="img"><img src="https://pic1.qyer.com/album/10d/0d/1840228/index/90" width="80" height="80" alt="巴黎歌剧院广场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎歌剧院广场</span></li>
																<li id="poi_84172" poi-id="84172"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎塞纳河自由女神像">
																	<div class="img"><img src="https://pic.qyer.com/album/193/4b/2078041/index/90" width="80" height="80" alt="巴黎塞纳河自由女神像"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎塞纳河自由女神像</span></li>
																<li id="poi_46547" poi-id="46547"
																class="poi-list-li" title="" beento="1" data-original-title="先贤祠">
																	<div class="img"><img src="https://pic1.qyer.com/album/1ed/ce/1840237/index/90" width="80" height="80" alt="先贤祠"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">先贤祠</span></li>
																<li id="poi_84466" poi-id="84466" class="poi-list-li"
																title="" beento="1" data-original-title="艺术桥">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/546/40/RE1TRhoOYg/index/90" width="80" height="80" alt="艺术桥"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">艺术桥</span></li>
																<li id="poi_200310" poi-id="200310"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎圣母院钟楼">
																	<div class="img"><img src="https://pic.qyer.com/album/user/2483/96/Q01dQRMBYko/index/90" width="80" height="80" alt="巴黎圣母院钟楼"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎圣母院钟楼</span></li>
																<li id="poi_46469"
																poi-id="46469" class="poi-list-li" title="" beento="1" data-original-title="巴士底广场">
																	<div class="img"><img src="https://pic1.qyer.com/album/10d/1e/1840230/index/90" width="80" height="80" alt="巴士底广场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴士底广场</span></li>
																<li id="poi_51690" poi-id="51690"
																class="poi-list-li" title="" beento="1" data-original-title="旺多姆广场">
																	<div class="img"><img src="https://pic1.qyer.com/album/147/34/1840685/index/90" width="80" height="80" alt="旺多姆广场"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">旺多姆广场</span></li>
																<li id="poi_33927" poi-id="33927"
																class="poi-list-li" title="" beento="1" data-original-title="爱之墙">
																	<div class="img"><img src="https://pic.qyer.com/album/1b7/47/1888322/index/90" width="80" height="80" alt="爱之墙"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">爱之墙</span></li>
																<li id="poi_33917" poi-id="33917" class="poi-list-li"
																title="" beento="1" data-original-title="卢森堡公园">
																	<div class="img"><img src="https://pic1.qyer.com/album/19c/9d/1839312/index/90" width="80" height="80" alt="卢森堡公园"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">卢森堡公园</span></li>
																<li id="poi_33923" poi-id="33923"
																class="poi-list-li" title="" beento="1" data-original-title="橘园美术馆">
																	<div class="img"><img src="https://pic.qyer.com/album/1ba/5c/1839318/index/90" width="80" height="80" alt="橘园美术馆"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">橘园美术馆</span></li>
																<li id="poi_46433" poi-id="46433"
																class="poi-list-li" title="" beento="1" data-original-title="拉丁区">
																	<div class="img"><img src="https://pic.qyer.com/album/15e/b6/1840225/index/90" width="80" height="80" alt="拉丁区"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">拉丁区</span></li>
																<li id="poi_82778" poi-id="82778" class="poi-list-li"
																title="" beento="1" data-original-title="巴黎大皇宫">
																	<div class="img"><img src="https://pic1.qyer.com/album/11e/a7/2026737/index/90" width="80" height="80" alt="巴黎大皇宫"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎大皇宫</span></li>
																<li id="poi_82930" poi-id="82930"
																class="poi-list-li" title="" beento="1" data-original-title="新凯旋门">
																	<div class="img"><img src="https://pic.qyer.com/album/1cf/c6/2024478/index/90" width="80" height="80" alt="新凯旋门"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">新凯旋门</span></li>
																<li id="poi_44420" poi-id="44420"
																class="poi-list-li" title="" beento="1" data-original-title="夏约宫">
																	<div class="img"><img src="https://pic1.qyer.com/album/169/ed/2050483/index/90" width="80" height="80" alt="夏约宫"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">夏约宫</span></li>
																<li id="poi_73206" poi-id="73206" class="poi-list-li"
																title="" beento="1" data-original-title="巴黎迪士尼世界">
																	<div class="img"><img src="https://pic1.qyer.com/album/1b8/56/1858783/index/90" width="80" height="80" alt="巴黎迪士尼世界"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎迪士尼世界</span></li>
																<li id="poi_52114" poi-id="52114"
																class="poi-list-li" title="" beento="1" data-original-title="拿破仑墓">
																	<div class="img"><img src="https://pic.qyer.com/album/16e/93/1840721/index/90" width="80" height="80" alt="拿破仑墓"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">拿破仑墓</span></li>
																<li id="poi_46443" poi-id="46443"
																class="poi-list-li" title="" beento="1" data-original-title="巴黎裁判所附属监狱">
																	<div class="img"><img src="https://pic.qyer.com/album/user/375/49/Qk5QRhMOaA/index/90" width="80" height="80" alt="巴黎裁判所附属监狱"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">巴黎裁判所附属监狱</span></li>
															</ul>
														</div>
													</div>
													<div id="city_20_food" class="section section-poi" style="display: none;">
														<div class="poi-list loading" city-id="20" poi-type="food" page="2">
															<ul>
																<li id="poi_45834" poi-id="45834" class="poi-list-li" title="" beento="1" data-original-title="小天使冰淇淋(左岸分店)">
																	<div class="img"><img src="https://pic.qyer.com/album/user/938/49/SEpdRhMBZg/index/90" width="80" height="80" alt="小天使冰淇淋(左岸分店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">小天使冰淇淋(左岸分店)</span></li>
																<li id="poi_57614"
																poi-id="57614" class="poi-list-li" title="" beento="1" data-original-title="花神咖啡馆">
																	<div class="img"><img src="https://pic.qyer.com/album/user/375/49/Qk5QRhMBZQ/index/90" width="80" height="80" alt="花神咖啡馆"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">花神咖啡馆</span></li>
																<li id="poi_88811" poi-id="88811"
																class="poi-list-li" title="" beento="1" data-original-title="拉杜丽(香榭丽舍大街店)">
																	<div class="img"><img src="https://pic.qyer.com/album/user/1623/46/QE9XQR4BaE4/index/90" width="80" height="80" alt="拉杜丽(香榭丽舍大街店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">拉杜丽(香榭丽舍大街店)</span></li>
																<li id="poi_42697"
																poi-id="42697" class="poi-list-li disabled" title="" beento="0" data-original-title="已经标记过啦">
																	<div class="img"><img src="https://pic1.qyer.com/album/user/358/19/QkxdQxMAZA/index/90" width="80" height="80" alt="Pierre Herme(波拿巴大街店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pierre Herme(波拿巴大街店)</span></li>
																<li
																id="poi_40249" poi-id="40249" class="poi-list-li" title="" beento="1" data-original-title="河马餐厅(George V分店)">
																	<div class="img"><img src="https://pic1.qyer.com/album/159/b8/1861429/index/90" width="80" height="80" alt="河马餐厅(George V分店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">河马餐厅(George V分店)</span></li>
																	<li id="poi_55957"
																	poi-id="55957" class="poi-list-li" title="" beento="1" data-original-title="安吉丽娜甜品店">
																		<div class="img"><img src="https://pic1.qyer.com/album/user/358/20/QkxdQBoHZQ/index/90" width="80" height="80" alt="安吉丽娜甜品店"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">安吉丽娜甜品店</span></li>
																	<li id="poi_43808"
																	poi-id="43808" class="poi-list-li" title="" beento="1" data-original-title="拉杜丽(Royale店)">
																		<div class="img"><img src="https://pic1.qyer.com/album/user/375/49/Qk5QRhMOYQ/index/90" width="80" height="80" alt="拉杜丽(Royale店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">拉杜丽(Royale店)</span></li>
																	<li id="poi_98523"
																	poi-id="98523" class="poi-list-li" title="" beento="1" data-original-title="安吉丽娜甜品店(老佛爷百货店)">
																		<div class="img"><img src="https://pic1.qyer.com/album/user/1719/13/QE5USxsEaEA/index/90" width="80" height="80" alt="安吉丽娜甜品店(老佛爷百货店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">安吉丽娜甜品店(老佛爷百货店)</span></li>
																	<li
																	id="poi_33932" poi-id="33932" class="poi-list-li" title="" beento="1" data-original-title="双叟咖啡馆">
																		<div class="img"><img src="https://pic1.qyer.com/album/15e/5a/1839321/index/90" width="80" height="80" alt="双叟咖啡馆"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">双叟咖啡馆</span></li>
																		<li id="poi_59618" poi-id="59618"
																		class="poi-list-li" title="" beento="1" data-original-title="能人居">
																			<div class="img"><img src="https://pic1.qyer.com/album/198/03/1841842/index/90" width="80" height="80" alt="能人居"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">能人居</span></li>
																		<li id="poi_98522" poi-id="98522"
																		class="poi-list-li" title="" beento="1" data-original-title="La Maison du Chocolat">
																			<div class="img"><img src="https://pic1.qyer.com/album/user/359/77/QkxcRR0PZw/index/90" width="80" height="80" alt="La Maison du Chocolat"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">La Maison du Chocolat</span></li>
																		<li
																		id="poi_88697" poi-id="88697" class="poi-list-li" title="" beento="1" data-original-title="金蜗牛">
																			<div class="img"><img src="https://pic1.qyer.com/album/user/322/50/QktXRxoAaQ/index/90" width="80" height="80" alt="金蜗牛"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">金蜗牛</span></li>
																			<li id="poi_59619" poi-id="59619"
																			class="poi-list-li" title="" beento="1" data-original-title="贝蒂咏冰淇淋">
																				<div class="img"><img src="https://pic1.qyer.com/album/user/1720/32/QE5XQhkFaEw/index/90" width="80" height="80" alt="贝蒂咏冰淇淋"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">贝蒂咏冰淇淋</span></li>
																			<li id="poi_83099"
																			poi-id="83099" class="poi-list-li" title="" beento="1" data-original-title="Pedra Alta(Boulogne)">
																				<div class="img"><img src="https://pic1.qyer.com/album/user/322/50/QktXRxoAYA/index/90" width="80" height="80" alt="Pedra Alta(Boulogne)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pedra Alta(Boulogne)</span></li>
																			<li
																			id="poi_82976" poi-id="82976" class="poi-list-li" title="" beento="1" data-original-title="佛14">
																				<div class="img"><img src="https://pic1.qyer.com/album/user/1719/7/QE5USxoAZ0o/index/90" width="80" height="80" alt="佛14"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">佛14</span></li>
																				<li id="poi_119233" poi-id="119233"
																				class="poi-list-li" title="" beento="1" data-original-title="双风车咖啡馆">
																					<div class="img"><img src="https://pic.qyer.com/album/user/1109/13/QEhVSxsEZkk/index/90" width="80" height="80" alt="双风车咖啡馆"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">双风车咖啡馆</span></li>
																				<li id="poi_56772"
																				poi-id="56772" class="poi-list-li" title="" beento="1" data-original-title="Chez Papa">
																					<div class="img"><img src="https://pic1.qyer.com/album/177/3d/1841191/index/90" width="80" height="80" alt="Chez Papa"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Chez Papa</span></li>
																				<li id="poi_59616"
																				poi-id="59616" class="poi-list-li" title="" beento="1" data-original-title="克莱蒙之家(Opéra分店)">
																					<div class="img"><img src="https://pic.qyer.com/album/user/1666/38/QE9TRBkPZUs/index/90" width="80" height="80" alt="克莱蒙之家(Opéra分店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">克莱蒙之家(Opéra分店)</span></li>
																				<li
																				id="poi_98518" poi-id="98518" class="poi-list-li" title="" beento="1" data-original-title="L'éclair de Génie">
																					<div class="img"><img src="https://pic1.qyer.com/album/user/714/9/RkhRQhMOZg/index/90" width="80" height="80" alt="L'éclair de Génie"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">L'éclair de Génie</span></li>
																					<li
																					id="poi_43809" poi-id="43809" class="poi-list-li" title="" beento="1" data-original-title="Fauchon">
																						<div class="img"><img src="https://pic1.qyer.com/album/user/1720/36/QE5XQhkBYUs/index/90" width="80" height="80" alt="Fauchon"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Fauchon</span></li>
																						<li id="poi_121397"
																						poi-id="121397" class="poi-list-li" title="" beento="1" data-original-title="诸葛烤鱼">
																							<div class="img"><img src="https://pic1.qyer.com/album/user/1720/10/QE5XQhsHZUs/index/90" width="80" height="80" alt="诸葛烤鱼"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">诸葛烤鱼</span></li>
																						<li id="poi_118407"
																						poi-id="118407" class="poi-list-li" title="" beento="1" data-original-title="PAUL(6区店)">
																							<div class="img"><img src="https://pic.qyer.com/album/user/609/18/R0lcQxIEaA/index/90" width="80" height="80" alt="PAUL(6区店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">PAUL(6区店)</span></li>
																						<li id="poi_116801"
																						poi-id="116801" class="poi-list-li" title="" beento="1" data-original-title="生蚝吧(Saint-Germain分店)">
																							<div class="img"><img src="https://pic1.qyer.com/album/user/714/11/RkhRQxsGYQ/index/90" width="80" height="80" alt="生蚝吧(Saint-Germain分店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">生蚝吧(Saint-Germain分店)</span></li>
																						<li
																						id="poi_34858" poi-id="34858" class="poi-list-li" title="" beento="1" data-original-title="活着的面条(9区店)">
																							<div class="img"><img src="https://pic.qyer.com/album/user/913/81/SEhWShsDZg/index/90" width="80" height="80" alt="活着的面条(9区店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">活着的面条(9区店)</span></li>
																							<li id="poi_35358"
																							poi-id="35358" class="poi-list-li" title="" beento="1" data-original-title="67越南河粉餐厅">
																								<div class="img"><img src="https://pic1.qyer.com/album/user/359/34/QkxcQR4AZQ/index/90" width="80" height="80" alt="67越南河粉餐厅"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">67越南河粉餐厅</span></li>
																							<li id="poi_55626"
																							poi-id="55626" class="poi-list-li" title="" beento="1" data-original-title="丽都夜总会">
																								<div class="img"><img src="https://pic1.qyer.com/album/107/ff/2064681/index/90" width="80" height="80" alt="丽都夜总会"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">丽都夜总会</span></li>
																							<li id="poi_118337" poi-id="118337"
																							class="poi-list-li" title="" beento="1" data-original-title="小四川">
																								<div class="img"><img src="https://pic.qyer.com/album/user/1720/35/QE5XQhkCYUw/index/90" width="80" height="80" alt="小四川"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">小四川</span></li>
																							<li id="poi_121376"
																							poi-id="121376" class="poi-list-li" title="" beento="1" data-original-title="Pedra Alta(Bercy)">
																								<div class="img"><img src="https://pic.qyer.com/album/user/1693/73/QE9cQR0EYEw/index/90" width="80" height="80" alt="Pedra Alta(Bercy)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pedra Alta(Bercy)</span></li>
																							<li
																							id="poi_43817" poi-id="43817" class="poi-list-li" title="" beento="1" data-original-title="Au Pied de Cochon餐厅">
																								<div class="img"><img src="https://pic.qyer.com/album/user/322/50/QktXRxoBaQ/index/90" width="80" height="80" alt="Au Pied de Cochon餐厅"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Au Pied de Cochon餐厅</span></li>
																								<li
																								id="poi_124740" poi-id="124740" class="poi-list-li" title="" beento="1" data-original-title="Léon de Bruxelles海鲜餐厅">
																									<div class="img"><img src="https://pic.qyer.com/album/user/1620/30/QE9XQhkHZUs/index/90" width="80" height="80" alt="Léon de Bruxelles海鲜餐厅"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Léon de Bruxelles海鲜餐厅</span></li>
																									<li
																									id="poi_94863" poi-id="94863" class="poi-list-li" title="" beento="1" data-original-title="Pho Tai">
																										<div class="img"><img src="https://pic.qyer.com/album/user/359/41/QkxcRhsEZQ/index/90" width="80" height="80" alt="Pho Tai"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pho Tai</span></li>
																										<li id="poi_98850"
																										poi-id="98850" class="poi-list-li" title="" beento="1" data-original-title="和平咖啡馆">
																											<div class="img"><img src="https://pic1.qyer.com/album/user/359/93/QkxcSxkFYQ/index/90" width="80" height="80" alt="和平咖啡馆"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">和平咖啡馆</span></li>
																										<li id="poi_37415"
																										poi-id="37415" class="poi-list-li" title="" beento="1" data-original-title="Pierre Hermé(Vaugirard)">
																											<div class="img"><img src="https://pic1.qyer.com/album/user/358/7/QkxdQh0BaA/index/90" width="80" height="80" alt="Pierre Hermé(Vaugirard)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pierre Hermé(Vaugirard)</span></li>
																										<li
																										id="poi_1144287" poi-id="1144287" class="poi-list-li" title="" beento="1" data-original-title="Pierre Hermé(香榭丽舍大街店)">
																											<div class="img"><img src="https://pic.qyer.com/album/user/2208/98/Q0tVShMPZU4/index/90" width="80" height="80" alt="Pierre Hermé(香榭丽舍大街店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Pierre Hermé(香榭丽舍大街店)</span></li>
																											<li
																											id="poi_46953" poi-id="46953" class="poi-list-li" title="" beento="1" data-original-title="Amorino Île St-Louis">
																												<div class="img"><img src="https://pic.qyer.com/album/user/1746/44/QE5RRB4DYE8/index/90" width="80" height="80" alt="Amorino Île St-Louis"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">Amorino Île St-Louis</span></li>
																												<li
																												id="poi_1145285" poi-id="1145285" class="poi-list-li" title="" beento="1" data-original-title="麦当劳(香榭丽街店)">
																													<div class="img"><img src="https://pic1.qyer.com/album/user/1720/52/QE5XQh8FaUk/index/90" width="80" height="80" alt="麦当劳(香榭丽街店)"><span class="s"><i class="iconfont icon-duigouthin"></i></span></div><span class="text">麦当劳(香榭丽街店)</span></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="fp-footer">
									<div class="fp-change"><span>已添加 <em>4</em> 个目的地足迹</span></div>
									<div class="fp-btns">
										<button class="btn_comment ui_btn_big" type="button">完成</button>
									</div>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;
							<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;">
							<input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;">
							<input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>-->

		<script type="text/javascript">
			$(function() {
				//点击星星进行评分
				$(document).on("click", "#comment", function() {
					alert("222");
					$(".qui-popup").css("display","block");
					
				});
				//动态的点击添加足迹
				$(document).on("click", ".u_spoor_country_item .adds a", function() {
					alert("3333"); 
					$(".define-popup").css("display","block");
				});
				//静态的按钮点击添加足迹
				$("#addPath").click(function(){
					alert("444"); 
					$(".define-popup").css("display","block");
				});
			});
		</script>

	</body>

</html>