<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
		<link rel="shortcut icon" href="http://www.qyer.com/favicon.ico">
		<title>游记帖子发布页</title>
		<link rel="stylesheet" href="travelpost_css/common_css.css">

		<script type="text/javascript">
			window.QYER = {
				uid: [9948068][0] || 0,
				frameVersion: 1458197970,
			};

			window.__qRequire__ = {
				version: '1458197970',
			};
		</script>
		<script type="text/javascript">
			window.__pageData__ = {
				"isBindWeibo": false,
				"isBindQZone": false,
				"forumInfo": null,
				"threadType": ["1", "\u6e38\u8bb0"]
			};
			window.__needVerifyImage = 0;
			window.__qRequire__ = {
				version: '1458197970',
				combineCSS: []
			};
			window._RATrack = window._RATrack || {
				'platform': 'web',
				'channel': 'bbs',
				'page_type': 'edit',
				'ugc_type': 'bbs_addthread',
				'ugc_content': ''
			};
			window.__needVerifyImage = 0;
		</script>

		<script src="travelpost_js/common_js.js"></script>
		<style type="text/css">
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
				background: url(//static.qyer.com/models/common/component/feedback/icons_feedback.png) 0 0 no-repeat;
				cursor: pointer;
			}
			
			.qui-feedback.js-current>.icon {
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

		<script src="travelpost_js/add_js.js"></script>
		<style type="text/css">
			.qui-popup {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);
				z-index: 1000;
				overflow-y: auto;
				opacity: 0
			}
			
			.qui-popup>div {
				display: table;
				height: 100%;
				margin: 0 auto
			}
			
			.qui-popup-dt {
				display: table-cell;
				vertical-align: middle
			}
			
			.qui-popup-box {
				margin: 0 auto;
				background-color: #fff;
				position: relative;
				-webkit-box-shadow: 0 0 6px #aaa;
				-moz-box-shadow: 0 0 6px #aaa;
				box-shadow: 0 0 6px #aaa;
				border: 1px solid #ccc;
				opacity: 0
			}
			
			.qui-popup-cancelBtn,
			.qui-popup-loadingBtn,
			.qui-popup-okBtn {
				vertical-align: middle;
				margin-left: 10px
			}
			
			.qui-popup-box-title {
				height: 60px;
				line-height: 60px;
				font-size: 18px;
				font-weight: 700;
				padding-left: 20px
			}
			
			.qui-popup-box-content {
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				padding: 0 20px
			}
			
			.qui-popup-box-content>iframe {
				width: 100%;
				border: none
			}
			
			.qui-popup-box-bottom {
				text-align: right;
				height: 70px;
				line-height: 70px;
				padding-right: 20px
			}
			
			.qui-popup-closeIcon {
				position: absolute;
				right: 10px;
				top: 10px;
				cursor: pointer;
				background-image: url(//static.qyer.com/models/common/ui/popup/ico.png);
				height: 32px;
				width: 32px;
				background-repeat: no-repeat;
				background-position: 0 0;
				border-radius: 5px
			}
			
			.qui-popup-closeIcon:hover {
				background-position: 0 -38px
			}
			
			.qui-popup-loadingBtn {
				display: none
			}
			
			.qui-confirm {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);
				z-index: 1200;
				display: none;
				opacity: 0
			}
			
			.qui-confirm-box,
			.qui-confirm-box-content {
				position: relative
			}
			
			.qui-confirm>div {
				display: table-cell;
				vertical-align: middle
			}
			
			.qui-confirm-box {
				margin: 0 auto;
				width: 300px;
				top: -50px;
				opacity: 0;
				overflow: hidden;
				box-shadow: 0 0 6px #aaa;
				border: 1px solid #ccc;
				background-color: #fff
			}
			
			.qui-confirm-box-title {
				height: 30px;
				color: #666;
				line-height: 30px;
				margin-bottom: 20px;
				padding-left: 20px;
				font-weight: 700
			}
			
			.qui-confirm-box-content-icon,
			.qui-confirm-closeIcon {
				position: absolute;
				background-image: url(//fed.static.qyer.com/core/web/common/resource/ui/oldconfirm/icons.png);
				width: 32px;
				background-repeat: no-repeat
			}
			
			.qui-confirm-box-content-icon {
				float: left;
				height: 32px;
				margin: -16px 0 0 10px;
				top: 50%;
				vertical-align: middle
			}
			
			.qui-confirm-box-content-iconOK {
				background-position: 0 -67px
			}
			
			.qui-confirm-box-content-iconError {
				background-position: 0 -12px
			}
			
			.qui-confirm-box-content-iconWarning {
				background-position: 0 -121px
			}
			
			.qui-confirm-box-content-text {
				color: #666;
				height: 100%;
				margin: 0 20px 0 60px
			}
			
			.qui-confirm-box-bottom {
				background-color: #fff;
				text-align: right;
				height: 50px;
				line-height: 50px;
				padding-right: 20px
			}
			
			.qui-confirm-closeIcon {
				right: 10px;
				top: 10px;
				cursor: pointer;
				height: 32px;
				background-position: 0 -192px;
				border-radius: 5px
			}
			
			.qui-confirm-closeIcon:hover {
				background-position: 0 -230px
			}
			
			.qui-confirm-box-clearFloat {
				clear: both;
				height: 0;
				overflow: hidden
			}
			
			.qui-tip {
				position: fixed;
				top: 75pt;
				left: 0;
				width: 100%;
				text-align: center;
				display: none;
				z-index: 1100
			}
			
			.qui-tip-box {
				display: inline-block;
				min-width: 90pt;
				max-width: 390px;
				padding: 20px 30px;
				background-color: #fff;
				box-shadow: 0 2px 7px rgba(0, 0, 0, .25);
				border: 1px solid silver;
				text-align: left;
				font-size: 18px;
				line-height: 2pc
			}
			
			.qui-tip-text {
				display: block;
				position: relative;
				padding-left: 34px
			}
			
			.qui-tip-text:before {
				content: '';
				position: absolute;
				left: 0;
				top: 4px;
				width: 24px;
				height: 24px;
				background: url(//fed.static.qyer.com/core/web/common/resource/ui/oldtip/icons2.png) no-repeat #fff
			}
			
			.qui-tip-box-error .qui-tip-text:before {
				background-position: 0 -5pc
			}
			
			.qui-tip-box-warning .qui-tip-text:before {
				background-position: 0 -40px
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
			
			.qui-loading {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);
				z-index: 1000;
				display: none;
				opacity: 0
			}
			
			.qui-loading>div {
				display: table-cell;
				vertical-align: middle;
				text-align: center
			}
			
			.qui-loading-box {
				display: inline-block;
				margin: 0 auto;
				border: 3px solid #cfcfcf;
				color: #555;
				padding: 10px;
				border-radius: 5px;
				min-width: 75pt;
				font-weight: 700;
				background: -moz-linear-gradient(#fff, #eee 100%);
				box-shadow: 0 0 5px #999
			}
			
			.qui-popup2 {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);
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
				background-image: url(//static.qyer.com/models/common/ui/popup2/icons.png);
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
			
			.qyEdit_append_title {
				height: 26px;
				padding: 10px 20px;
				position: relative;
			}
			
			.qyEdit_append_title .text {
				float: left;
				margin-right: 20px;
				font-size: 18px;
				line-height: 26px;
			}
			
			.qyEdit_append_title .close {
				position: absolute;
				right: 10px;
				top: 8px;
				width: 32px;
				height: 32px;
				display: block;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat 0 -452px;
				cursor: pointer;
			}
			
			.qyEdit_append_title .close:hover {
				background-position: 0 -484px;
			}
			
			.qyEdit_append_title .minimize {
				position: absolute;
				right: 10px;
				top: 8px;
				width: 32px;
				height: 32px;
				display: block;
				background: url(//static.qyer.com/models/project/bbs/css/images/icon_arrow.png) no-repeat 0 0;
				cursor: pointer;
			}
			
			.qyEdit_append_title .minimize .tip {
				display: none;
				position: absolute;
				top: -28px;
				left: -13px;
				width: 58px;
				height: 32px;
				line-height: 26px;
				color: #959595;
				text-align: center;
				background: url(//static.qyer.com/models/project/bbs/css/images/icon_arrow.png) no-repeat 0 -32px;
			}
			
			.qyEdit_append_title .minimize.hvr:hover .tip {
				display: block;
			}
			
			.qyEdit_append_title .minimize_tip {
				position: absolute;
				top: -42px;
				right: -79px;
				width: 220px;
				height: 30px;
				line-height: 30px;
				color: #FFF;
				text-align: center;
				background: #3dc067;
				border-radius: 3px;
			}
			
			.qyEdit_append_title .minimize_tip:after {
				content: '\25C6';
				position: absolute;
				top: 14px;
				left: 50%;
				color: #3dc067;
			}
			
			.qyEdit_append_title .minimize_tip em {
				margin-left: 5px;
				font-size: 18px;
				vertical-align: -2px;
				cursor: pointer;
			}
			
			.fixed_minimizebar {
				display: none;
				position: fixed;
				z-index: 1000;
				left: 50%;
				bottom: 0;
				margin-left: -299px;
				width: 598px;
				height: 48px;
				border: 1px solid #d7d7d7;
				background: #FFF;
				font-size: 14px;
			}
			
			.fixed_minimizebar .wrap {
				position: absolute;
				z-index: 2;
				width: 100%;
				height: 100%;
				line-height: 48px;
			}
			
			.fixed_minimizebar .wrap p {
				padding: 0 20px;
			}
			
			.fixed_minimizebar .wrap .back {
				position: absolute;
				top: 8px;
				right: 10px;
				width: 32px;
				height: 32px;
				background: url(//static.qyer.com/models/project/bbs/css/images/icon_arrow.png) no-repeat -32px 0;
				cursor: pointer;
			}
			
			.fixed_minimizebar .progress {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
				width: 0%;
				height: 100%;
				background: #f5f5f5;
				transition: all .2s ease-in;
			}
			
			.fixed_minimizebar.complete {
				border-color: #10b041;
			}
			
			.fixed_minimizebar.complete .wrap p {
				color: #10b041;
			}
			
			.fixed_minimizebar.complete .wrap .back {
				background-position: -64px 0;
			}
			
			.fixed_minimizebar.complete .progress {
				display: none;
			}
			
			.qyEdit_append_button {
				padding: 20px;
				height: 28px;
			}
			
			.qyEdit_append_button a {
				float: right;
				margin-left: 10px;
			}
			
			.qyEdit_append_video {
				padding: 20px 0 0;
			}
			
			.qyEdit_append_video .input {
				border: 1px solid #dedede;
				margin: 0 20px;
				border-radius: 2px;
				padding: 3px 30px 3px 10px;
				position: relative;
			}
			
			.qyEdit_append_video .inputError {
				border: 1px solid #fb6850;
			}
			
			.qyEdit_append_video .input input {
				width: 100%;
				border: 0;
				padding: 0;
			}
			
			.qyEdit_append_video .input input:focus {
				box-shadow: 0 0 0 rgba(0, 0, 0, 0);
			}
			
			.qyEdit_append_video .input .loading {
				text-indent: -9999px;
				position: absolute;
				right: 10px;
				top: 8px;
				left: auto;
				width: 16px;
				height: 16px;
				background: url(//static.qyer.com/images/common/tpl/wait_16.gif) no-repeat;
			}
			
			.qyEdit_append_video .tips {
				height: 18px;
				margin: 10px 20px 0;
			}
			
			.qyEdit_append_video .tips .error {
				padding-left: 20px;
				position: relative;
				display: none;
				color: #fb6850;
				width: auto;
			}
			
			.qyEdit_append_video .tips .error span {
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat 0 -385px;
				display: block;
				width: 16px;
				height: 16px;
				position: absolute;
				left: 0;
				top: 1px;
			}
			
			.qyEdit_append_video .tips .tip {
				font-size: 14px;
				color: #959595;
			}
			
			.showError .input {
				border: 1px solid #fb6850;
			}
			
			.showError .tips .error {
				display: block;
			}
			
			.qyEdit_append_video .input .correct {
				text-indent: -9999px;
				position: absolute;
				right: 10px;
				top: 10px;
				left: auto;
				width: 16px;
				height: 16px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat -100px -385px;
			}
			
			.editor_video .qui-popup2-box-content {
				padding: 0;
			}
			
			.editor_file .qui-popup2-box-content {
				padding: 0;
			}
			
			.qyEdit_append_affix {
				padding: 20px 0 0;
			}
			
			.qyEdit_append_affix .input {
				border: 1px solid #dedede;
				cursor: pointer;
				background: #f5f5f5;
				margin: 0 20px;
				border-radius: 2px;
				padding: 3px 30px 3px 10px;
				position: relative;
			}
			
			.qyEdit_append_affix .inputError {
				border: 1px solid #fb6850;
			}
			
			.qyEdit_append_affix .upload {
				line-height: 24px;
				padding: 3px 0;
				color: #636363;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			
			.input:hover .upload .default {
				background-position: -256px -194px;
				color: #10b041;
			}
			
			.qyEdit_append_affix .upload .default {
				padding-left: 20px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat -256px -168px;
			}
			
			.qyEdit_append_affix .input .loading {
				text-indent: -9999px;
				position: absolute;
				left: 550px;
				top: 10px;
				width: 16px;
				height: 16px;
				background: url(//static.qyer.com/images/common/tpl/wait_16.gif) no-repeat;
			}
			
			.qyEdit_append_affix .input .correct {
				text-indent: -9999px;
				position: absolute;
				right: 10px;
				top: 10px;
				width: 16px;
				height: 16px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat -100px -385px;
			}
			
			.qyEdit_append_affix .tips {
				height: 20px;
				margin: 10px 20px 0;
				line-height: 20px;
			}
			
			.qyEdit_append_affix .tips p {
				font-size: 14px;
				color: #959595;
			}
			
			.qyEdit_append_affix .tips .error {
				color: #fb6850;
				padding-left: 20px;
				font-size: 12px;
				position: relative;
				display: none;
			}
			
			.qyEdit_append_affix .tips .error span {
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat 0 -385px;
				display: block;
				width: 16px;
				height: 16px;
				position: absolute;
				left: 0;
				top: 2px;
			}
			
			.webuploader-container {
				position: relative;
			}
			
			.webuploader-element-invisible {
				position: absolute !important;
				clip: rect(1px 1px 1px 1px);
				clip: rect(1px, 1px, 1px, 1px);
			}
			
			.editor_createAlbum .qui-popup2-box-content {
				padding: 0;
			}
			
			.loading {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				text-align: center;
			}
			
			.qui-slidConfirm {
				position: absolute;
				z-index: 1300;
				top: 75pt;
				left: 75pt;
				border: 1px solid #ccc;
				padding: 10px;
				background-color: #fff;
				box-shadow: 0 0 6px #aaa
			}
			
			.qui-slidConfirm-bottom {
				margin-top: 10px;
				text-align: center
			}
			
			.qui-slidConfirm-text {
				background-image: url(//fed.static.qyer.com/core/web/common/resource/ui/oldslidconfirm/icons.png);
				background-repeat: no-repeat;
				display: inline-block;
				padding-left: 20px;
				background-position: 0 -79px;
				text-align: center
			}
			
			.qui-select {
				position: relative;
				display: inline-block;
				width: 75pt;
				height: 30px;
				overflow: visible
			}
			
			.qui-select-disable>.titles {
				background-color: #eee!important;
				cursor: default!important
			}
			
			.qui-select .contents ul li,
			.qui-select .titles {
				font-size: 14px;
				cursor: pointer;
				text-overflow: ellipsis
			}
			
			.qui-select .titles {
				background: url(//fed.static.qyer.com/core/web/common/resource/ui/oldselect/icons.png) center right no-repeat #fff;
				border: 1px solid silver;
				color: #636363;
				display: block;
				line-height: 30px;
				padding: 0 10px 0 5px;
				width: 100%;
				height: 100%;
				overflow: hidden
			}
			
			.qui-select .titles .title-text {
				background-position: 0 -4px;
				margin-left: 5px;
				white-space: nowrap
			}
			
			.qui-select .contents {
				background-color: #FFF;
				border: 1px solid silver;
				box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
				display: none;
				line-height: 38px;
				position: absolute;
				top: 31px;
				width: 180px;
				max-height: 235px;
				overflow: auto;
				z-index: 10
			}
			
			.qui-select .contents ul li:first-child {
				border-top: 0 none
			}
			
			.qui-select .contents ul li {
				border-top: 1px solid #EBEBEB;
				line-height: 38px;
				white-space: nowrap;
				overflow: hidden
			}
			
			.qui-select .contents ul li:hover {
				background-color: #d9eed7
			}
			
			.qui-select .contents ul li a {
				padding-left: 10px;
				color: #636363;
				text-decoration: none
			}
			
			.tools {
				width: 24px;
				padding: 0 23px;
				float: left;
			}
			
			.tools div span {
				width: 24px;
				height: 24px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat;
				display: inline-block;
			}
			
			.tools div i {
				display: none;
				width: 2px;
				height: 16px;
				background: #10b041;
				position: relative;
				top: 5px;
			}
			
			.tools div.selected i {
				display: inline-block;
			}
			
			.tools .lift {
				background-position: -32px -163px;
			}
			
			.tools .faces {
				background-position: -32px -199px;
			}
			
			.tools .insertimage {
				background-position: -32px -235px;
			}
			
			.tools .insertvideo {
				background-position: -32px -271px;
			}
			
			.tools .insertattach {
				background-position: -32px -307px;
			}
			
			.tools .help {
				background-position: -132px -164px;
			}
			
			.tools .lift:hover {
				background-position: -110px -163px;
			}
			
			.tools .selected .lift {
				background-position: -110px -163px;
			}
			
			.tools .faces:hover {
				background-position: -110px -199px;
			}
			
			.tools .selected .faces {
				background-position: -110px -199px;
			}
			
			.tools .insertimage:hover {
				background-position: -110px -235px;
			}
			
			.tools .selected .insertimage {
				background-position: -110px -235px;
			}
			
			.tools .insertvideo:hover {
				background-position: -110px -271px;
			}
			
			.tools .insertattach:hover {
				background-position: -110px -307px;
			}
			
			.tools .help:hover {
				background-position: -155px -164px;
			}
			
			.tool_content {
				width: 170px;
				float: right;
				padding-top: 8px;
			}
			
			.tool_content .lift_cont {
				height: 200px;
				overflow: auto;
			}
			
			.tool_content .lift_cont .lift_head {
				position: relative;
			}
			
			.tool_content .lift_cont .lift_head .reload {
				position: absolute;
				right: 8px;
				top: 3px;
			}
			
			.tool_content .lift_cont h3 {
				color: #10b041;
				font-size: 14px;
				font-weight: 400;
			}
			
			.tool_content .lift_cont h4,
			.container .tool_content .lift_cont ul li {
				height: 18px;
				margin-top: 4px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			
			.tool_content .lift_cont h4 span {
				color: #636363;
				font-size: 12px;
				cursor: pointer;
			}
			
			.tool_content .lift_cont ul {
				margin-top: 4px;
				padding-left: 15px;
				overflow: hidden;
			}
			
			.tool_content .lift_cont ul li span {
				color: #959595;
				font-size: 12px;
				line-height: 18px;
				cursor: pointer;
			}
			
			.tool_content .lift_cont span:hover {
				text-decoration: none;
				color: #10b041;
			}
			
			.tool_content .lift_cont .lift_body {
				margin-top: 23px;
			}
			
			.tool_content .emotion_cont span {
				background-image: url(//static.qyer.com/models/project/bbs/css/images/emotion.png);
				display: inline-block;
				width: 24px;
				height: 24px;
				float: left;
				margin: 4px;
				border: 1px solid #fff;
				cursor: pointer;
			}
			
			.tool_content .emotion_cont span:hover {
				border: 1px solid #c0c0c0;
			}
			
			.tool_content .image_cont .buttons {
				margin-top: 8px;
			}
			
			.tool_content .image_cont {
				width: 100%;
				display: block;
				padding: 0;
				border-radius: 0;
			}
			
			.tool_content .image_cont .lists {
				overflow: auto;
				width: 184px;
				min-height: 300px;
				position: relative;
				margin-top: 10px;
			}
			
			.tool_content .image_cont .lists ul {
				margin-left: -10px;
			}
			
			.tool_content .image_cont .lists ul li {
				margin: 0 0 0 8px;
				float: left;
			}
			
			.tool_content .image_cont .lists ul li img {
				display: block;
				width: 80px;
				height: 80px;
				margin-top: 8px;
				cursor: pointer;
			}
			
			.tool_content .image_cont .qui-select {
				height: auto;
			}
			
			.tool_content .image_cont .qui-select .titles {
				line-height: 24px;
				height: 24px;
				padding-right: 28px;
			}
			
			.tool_content .image_cont .qui-select .contents {
				top: 25px;
			}
			
			.tool_content .image_cont .qui-select .contents ul li {
				line-height: 30px;
			}
			
			.tool_content .image_cont .ui_button {
				padding: 1px 28px 0;
				border-radius: 0;
				background-color: #10b041;
				font-size: 12px;
				height: 27px;
				white-space: nowrap;
			}
			
			.tool_content .image_cont .ui_button:hover {
				background-color: #3f9f5f;
			}
			
			.tool_content .image_cont .ui_button .add {
				display: inline-block;
				width: 12px;
				height: 12px;
				background: url(//static.qyer.com/models/project/bbs/css/images/add.png) no-repeat;
				float: left;
				margin: 7px 5px 0 0;
			}
			
			.tool_content .image_cont .uploadPanel {
				display: none;
				position: absolute;
				z-index: 10;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			
			.tool_content .image_cont .scrollTip {
				width: 64px;
				height: 20px;
				line-height: 20px;
				text-align: center;
				background: url(//static.qyer.com/models/project/bbs/css/images/img_tip.png) no-repeat;
				position: absolute;
				left: 166px;
				top: 95px;
				display: none;
				color: #636363;
			}
			
			@-webkit-keyframes rotate {
				from {
					-webkit-transform: rotate(0deg);
				}
				to {
					-webkit-transform: rotate(360deg);
				}
			}
			
			.animateRotate {
				-webkit-animation-name: rotate;
				-webkit-animation-duration: 0.5s;
				-webkit-animation-iteration-count: 1;
				-webkit-animation-timing-function: linear;
			}
			
			.editor_uploadImage .qui-popup2-box-content,
			.editor_concatpoi .qui-popup2-box-content {
				padding: 0;
			}
			
			.qyEdit_append_pic {
				width: 620px;
				border: 1px solid #c0c0c0;
				background: #fff;
				box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
				margin: 0 auto;
			}
			
			.editor_uploadImage .qyEdit_append_wrap {
				height: 261px;
			}
			
			.editor_uploadImage .qyEdit_append_title,
			.editor_concatpoi .qyEdit_append_title {
				border-bottom: 1px solid #c0c0c0;
				box-shadow: 0 1px 3px #ccc;
			}
			
			.qyEdit_append_button .tips {
				float: left;
				color: #959595;
				line-height: 28px;
			}
			
			.qyEdit_append_button .checkBox {
				float: right;
				padding-right: 10px;
			}
			
			.qyEdit_append_button .checkBox label {
				float: left;
				color: #959595;
			}
			
			.qyEdit_append_button .checkBox input {
				margin: 6px 5px 0 0;
				float: left;
				width: 14px;
				height: 14px;
			}
			
			.qyEdit_append_button .checkBox p {
				float: left;
				line-height: 28px;
			}
			
			.qyEdit_append_wrap {
				height: 260px;
				overflow: hidden;
				overflow-y: auto;
				border-bottom: 1px solid #c0c0c0;
			}
			
			.qyEdit_append_list {
				padding-bottom: 20px;
			}
			
			.qyEdit_append_list li {
				width: 100px;
				float: left;
				margin: 20px 0 0 20px;
				position: relative;
			}
			
			.qyEdit_append_list li img {
				width: 100px;
				height: 100px;
				display: block;
				background: #ececec;
			}
			
			.qyEdit_append_list li .rotate {
				display: none;
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				background: #575757;
				background: rgba(0, 0, 0, 0.8);
				padding: 0 14px;
				height: 30px;
			}
			
			.qyEdit_append_list li .rotate span {
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat;
				height: 30px;
				text-indent: -9999px;
				width: 50%;
				float: left;
				cursor: pointer;
			}
			
			.qyEdit_append_list li .rotate .left {
				background-position: -30px -16px;
			}
			
			.qyEdit_append_list li .rotate .left:hover {
				background-position: -30px 7px;
			}
			
			.qyEdit_append_list li .rotate .right {
				background-position: -68px -16px;
			}
			
			.qyEdit_append_list li .rotate .right:hover {
				background-position: -68px 7px;
			}
			
			.qyEdit_append_list li .error {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				border: 1px solid #fb6850;
				background: rgba(0, 0, 0, 0);
				text-align: center;
			}
			
			.qyEdit_append_list li .error .icon {
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat 0 -385px;
				display: inline-block;
				width: 16px;
				height: 16px;
				margin: 13px auto 0;
			}
			
			.qyEdit_append_list li .error .tips {
				display: block;
				line-height: 24px;
				color: #959595;
			}
			
			.qyEdit_append_list li .error a {
				color: #323232;
			}
			
			.qyEdit_append_list li .error a:hover {
				color: #10b041;
			}
			
			.qyEdit_append_list li .delete {
				position: absolute;
				right: -7px;
				top: -7px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat -114px 0;
				width: 20px;
				height: 19px;
				overflow: hidden;
				text-indent: -9999px;
				cursor: pointer;
			}
			
			.qyEdit_append_list li .tArrow {
				white-space: nowrap;
				border: 1px solid #d7d7d7;
				background: #f5f5f5;
				border-radius: 3px;
				position: absolute;
				left: 0;
				top: -20px;
				padding: 3px 8px;
				line-height: 16px;
				color: #959595;
			}
			
			.qyEdit_append_list li .tArrow .arrow0 {
				position: absolute;
				bottom: -6px;
				left: 45%;
				height: 6px;
				display: inline-block;
			}
			
			.qyEdit_append_list li .tArrow .arrow0 span {
				display: inline-block;
				height: 0;
				width: 0;
				overflow: hidden;
				position: absolute;
				top: 0;
			}
			
			.qyEdit_append_list li .tArrow .arrow1 {
				left: 1px;
				z-index: 1;
				border-left: 6px solid transparent;
				border-right: 6px solid transparent;
				border-top: 6px solid #f5f5f5;
			}
			
			.qyEdit_append_list li .tArrow .arrow2 {
				left: 0;
				z-index: 0;
				border-left: 7px solid transparent;
				border-right: 7px solid transparent;
				border-top: 7px solid #d7d7d7;
			}
			
			.qyEdit_append_list li .loading {
				padding: 0 10px;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				width: auto;
			}
			
			.qyEdit_append_list li .loading span {
				margin-top: 47px;
				display: block;
				overflow: hidden;
				height: 5px;
				background: #c0c0c0;
				border-radius: 3px;
			}
			
			.qyEdit_append_list li .loading span em {
				display: block;
				background: #5cad77;
				border-radius: 3px;
				overflow: hidden;
				height: 5px;
			}
			
			.editor_concatpoi .qyEdit_append_button {
				padding: 20px;
				height: 28px;
			}
			
			.editor_concatpoi .qyEdit_append_button .button a {
				float: right;
				margin-left: 10px;
			}
			
			.editor_concatpoi .qyEdit_append_button .tips {
				float: left;
				color: #959595;
				line-height: 28px;
			}
			
			.editor_concatpoi .qyEdit_append_button .tips a {
				color: #959595;
			}
			
			.editor_concatpoi .qyEdit_append_button .place {
				float: left;
				padding-left: 20px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) 0 -570px no-repeat;
				display: none;
				position: relative;
			}
			
			.editor_concatpoi .qyEdit_append_button .place input {
				border-radius: 3px;
				float: left;
				padding: 1px 7px;
				width: 230px;
			}
			
			.editor_concatpoi .qyEdit_append_button .place .error {
				border: 1px solid #fb6850;
			}
			
			.editor_concatpoi .qyEdit_append_button .place .tText {
				float: left;
				line-height: 28px;
				margin-left: 10px;
				color: #fb6850;
				display: none;
			}
			
			.editor_concatpoi .qyEdit_append_button .place .tText em {
				width: 16px;
				height: 16px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat 0 -385px;
				float: left;
				margin: 5px 5px 0 0;
			}
			
			.editor_concatpoi .qyEdit_append_list {
				padding-bottom: 20px;
			}
			
			.editor_concatpoi .qyEdit_append_list li {
				width: 100px;
				float: left;
				margin: 20px 0 0 20px;
				position: relative;
			}
			
			.editor_concatpoi .qyEdit_append_list li img {
				width: 100px;
				height: 100px;
				display: block;
				background: #ececec;
			}
			
			.editor_concatpoi .qyEdit_append_list li .status {
				display: none;
				height: 100px;
				width: 100px;
				position: absolute;
				left: 0;
				top: 0;
			}
			
			.editor_concatpoi .qyEdit_append_list li .status span {
				position: absolute;
				left: 34px;
				top: 34px;
				width: 32px;
				height: 32px;
				display: block;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat;
			}
			
			.editor_concatpoi .qyEdit_append_list li .status .selected {
				background-position: 0 -416px;
			}
			
			.editor_concatpoi .qyEdit_append_list li .place {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: transparent;
				background-color: rgba(48, 51, 51, 0.8);
				filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F303333, endColorstr=#7F434345);
				line-height: 30px;
				color: #fff;
				display: none;
			}
			
			.editor_concatpoi .qyEdit_append_list li .place strong {
				position: absolute;
				left: 10px;
				top: -1px;
				width: 12px;
				height: 16px;
				background: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png) no-repeat -124px -385px;
			}
			
			.qui-inputAutocomplete {
				top: -1px;
			}
			
			.qui-inputAutocomplete ul {
				border-top: 1px solid #d7d7d7;
			}
			
			.qui-inputAutocomplete ul li {
				font-size: 12px;
				color: #636363;
				padding: 0 23px 0 7px;
				line-height: 28px;
				height: 28px;
				width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
			}
			
			.qui-inputAutocomplete ul .active {
				background: #e3fae3;
				cursor: pointer;
			}
			
			.qui-inputAutocomplete ul .lastChild {
				border-top: 1px solid #ececec;
			}
			
			.qui-inputAutocomplete ul li .poiname {
				padding-right: 10px;
			}
			
			.qui-inputAutocomplete ul li .country {
				color: #959595;
			}
			
			.qui-inputAutocomplete ul li .kw {
				color: #10b041;
			}
			
			.pub-threadhelp-wrap {
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				height: 400px;
				background-color: #f5f5f5;
				border-top: 2px solid #10b041;
				z-index: 9999;
				overflow: hidden;
			}
			
			.pub-threadhelp-wrap .x-header a {
				float: right;
				width: 24px;
				height: 24px;
				margin: 20px 40px 0 0;
				background-image: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png);
				background-repeat: no-repeat;
				background-position: -40px -418px;
			}
			
			.pub-threadhelp-wrap .x-header a:hover {
				background-position: -93px -418px;
			}
			
			.x-header {
				position: relative;
				height: 39px;
			}
			
			.pub-threadhelp-wrap .x-header p {
				position: absolute;
				left: 9%;
				top: -1px;
				width: 114px;
				height: 39px;
				background: url(//static.qyer.com/models/project/bbs/css/images/x-publish-help.jpg) no-repeat;
				z-index: 2000;
			}
			
			.pub-threadhelp-wrap .x-footer {
				text-align: center;
			}
			
			.pub-threadhelp-wrap .x-footer a {
				display: inline-block;
				*display: inline;
				*zoom: 1;
				width: 17px;
				height: 11px;
				margin-right: 6px;
				background-image: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png);
				background-repeat: no-repeat;
				background-position: -119px -418px;
			}
			
			.pub-threadhelp-wrap .x-footer a.active,
			.pub-threadhelp-wrap .x-footer a:hover {
				width: 17px;
				height: 10px;
				background-position: -122px -432px;
			}
			
			.pub-threadhelp-wrap .x-content {
				position: relative;
				width: 900px;
				height: 292px;
				padding-bottom: 25px;
				margin: 0 auto;
				text-align: center;
			}
			
			.pub-threadhelp-wrap .xcd {
				position: relative;
				height: 292px;
				width: 25px;
				text-align: center;
			}
			
			.xfl {
				float: left;
			}
			
			.xfr {
				float: right;
			}
			
			.pub-threadhelp-wrap .xcd i {
				position: absolute;
				bottom: 0;
				top: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 19px;
				height: 36px;
				background-image: url(//static.qyer.com/models/project/bbs/css/images/editor_icon.png);
				background-repeat: no-repeat;
				cursor: pointer;
			}
			
			.pub-threadhelp-wrap .xcd .xleft {
				background-position: -56px -452px;
			}
			
			.pub-threadhelp-wrap .xcd .xleft:hover {
				background-position: -101px -452px;
			}
			
			.pub-threadhelp-wrap .xcd .xright {
				background-position: -78px -452px;
			}
			
			.pub-threadhelp-wrap .xcd .xright:hover {
				background-position: -36px -452px;
			}
			
			.pub-threadhelp-wrap .xcimages {
				position: relative;
				display: inline-block;
				*display: inline;
				*zoom: 1;
				width: 660px;
				height: 240px;
			}
			
			.pub-gifwrap {
				position: absolute;
				display: none;
				left: 0;
				top: -8px;
			}
			
			.x-pubdesc-wrap {
				width: 600px;
				margin: 0 auto;
				text-align: left;
			}
			
			.x-pubdesc-wrap>div {
				display: inline-block;
			}
			
			.x-pubnum {
				position: absolute;
				margin-top: -166px;
				font-size: 200px;
				font-weight: bold;
				color: #f6e9e8;
			}
			
			.x-pubdesc1 {
				margin: -3px 0 0 122px;
			}
			
			.x-pubdesc2 {
				margin: -3px 0 0 130px;
			}
			
			.x-pubdesc3,
			.x-pubdesc4 {
				margin: -21px 0 0 130px;
			}
			
			.x-pubdesc5,
			.x-pubdesc6 {
				margin: 33px 0 0 130px;
			}
			
			.x-pubdesc-title {
				line-height: 42px;
				color: #fb6850;
				font-size: 24px;
				font-weight: bold;
			}
			
			.x-pubdesc-content {
				width: 415px;
				height: 40px;
				line-height: 20px;
				overflow: hidden;
				color: #636363;
				font-size: 16px;
				word-wrap: break-word;
				word-break: break-all;
			}
			
			.x-edithread-info {
				position: absolute;
				right: 152px;
				top: 15px;
				height: 18px;
				font-size: 14px;
				color: #636363;
				cursor: pointer;
			}
			
			.x-edithread-info:hover {
				text-decoration: none;
				color: #10b041;
			}
			
			.x-edithread-info:hover .xei-setting {
				background-position: -12px 0;
			}
			
			.xei-setting {
				display: inline-block;
				margin-right: 7px;
				width: 12px;
				height: 12px;
				vertical-align: -1px;
				background: url(//common1.qyerstatic.com/bbs/old/images/issue_settag.png) no-repeat;
			}
			
			.tools-inner-wrap {
				position: relative;
				float: left;
				width: 24px;
				height: 24px;
				margin: 6px 0;
				cursor: pointer;
			}
			
			.reload {
				background: url(//static.qyer.com/models/project/bbs/css/images/reload.png) no-repeat;
				width: 16px;
				height: 13px;
				display: block;
				cursor: pointer;
			}
			
			#addPhotoWrap {
				width: 166px;
			}
			
			.x-tool-wrap {
				position: absolute;
				left: 26px;
				top: 0;
				visibility: hidden;
				opacity: 0;
				min-width: 78px;
				-webkit-transition: all 0.3s linear;
				-moz-transition: all 0.3s linear;
				transition: all 0.3s linear;
				z-index: 1000;
			}
			
			.x-tool-left {
				float: left;
				width: 10px;
				height: 26px;
				background: url(//static.qyer.com/models/project/bbs/images/tooltipleft.png) no-repeat;
			}
			
			.x-tool-xtm {
				float: left;
				padding: 0 4px;
				line-height: 26px;
				word-wrap: break-word;
				word-break: break-all;
				color: #959595;
				background: url(//static.qyer.com/models/project/bbs/images/tagtip.png) repeat-x;
			}
			
			.x-tool-right {
				float: left;
				width: 4px;
				height: 26px;
				background: url(//static.qyer.com/models/project/bbs/images/tooltipright.png) no-repeat;
			}
			
			.tools .tools-inner-wrap:hover .x-tool-wrap {
				display: block;
				visibility: visible;
				opacity: 1
			}
			
			..qui-popup2 {
				z-index: 4000 !important;
			}
			
			.x-contact-tips {
				float: left;
				line-height: 30px;
				color: #959595;
			}
			
			.x-ui-input {
				width: 200px;
				height: 20px;
				margin: 0 6px;
				overflow: hidden;
				padding: 3px 7px;
				border: 1px solid #c0c0c0;
				font-size: 14px;
				line-height: 20px;
				border-radius: 3px;
			}
			
			.x-ao-dest {
				display: inline-block;
				*display: inline;
				*zoom: 1;
				background-image: url(//static.qyer.com/models/project/bbs/images/aoDestination.png);
				background-position: no-repeat;
			}
			
			.x-ao-pos1 {
				width: 12px;
				height: 16px;
				background-position: -1px -1px;
				vertical-align: -2px;
			}
			
			.x-ao-pos2 {
				width: 16px;
				height: 16px;
				margin-right: 6px;
				vertical-align: -4px;
				background-position: -1px -19px;
			}
			
			#contactPlaceCon {
				display: none;
			}
			
			.qyEdit_append_pic .place .con-des {
				display: inline-block;
				*display: inline;
				*zoom: 1;
				width: 66px;
				margin-left: 28px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: bold;
				vertical-align: -12px;
			}
			
			.qyEdit_append_pic .place .qui-inputAutocomplete {
				left: 148px;
				top: 44px;
				z-index: 3000;
			}
			
			.qyEdit_append_pic .place .tText {
				color: #ff654c;
			}
			
			.x-btl-wrap {
				padding-top: 8px;
				color: #959595;
			}
			
			#checkedXAll {
				vertical-align: 1px;
			}
			
			.x-btl-wrap label {
				margin: 0 20px 0 6px;
				color: #636363;
			}
			
			.x-ischecked {
				position: absolute;
				width: 100px;
				height: 100px;
				cursor: pointer;
				z-index: 2000;
			}
			
			.x-ischecked.unchecked {
				background: url(//static.qyer.com/models/project/bbs/images/xunchecked.png) no-repeat;
			}
			
			.x-ischecked.checked {
				background: url(//static.qyer.com/models/project/bbs/images/xchecked.png) no-repeat;
			}
			
			.qui-tip {
				z-index: 5000 !important;
			}
			
			.image_cont #photolist .contents {
				width: 164px !important;
			}
			
			@media screen and (-webkit-min-device-pixel-ratio: 2),
			screen and (max-moz-device-pixel-ratio: 2) {
				.xei-setting {
					background: url(//common1.qyerstatic.com/bbs/old/images/issue_settag.png) no-repeat 0 -7px/12px auto;
				}
				.x-edithread-info:hover .xei-setting {
					background-position: 0 -20px
				}
			}
		</style>

		<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="http://www.google-analytics.com/ga.js" src="http://www.google-analytics.com/ga.js?v=1458197970"></script>
		<script src="travelpost_js/zh-cn.js" type="text/javascript" defer="defer"></script>
		<link href="travelpost_css/ueditor.css" type="text/css" rel="stylesheet">
		<script src="travelpost_js/ZeroClipboard.js" type="text/javascript" defer="defer"></script>
	</head>
<body style="overflow: auto;">
		<!-- 发布系统 -->
		<div class="qy_issue_wrap x-filter-blur" style="">

			<!-- 发布标题 -->
			<div class="title" >
				<span class="thread-title-placeholder">键入游记标题</span>
				<textarea id="threadTitle" class="pub-title-qr" max-length="40"></textarea>
				<div class="template-textarea" style="width: 600px;"></div>
				<div class="info"><i class="icon error"></i>帖子标题须在60个字以内</div>
			</div>

			<!-- 行程单 -->
			<div class="qy_issue_plan" style="display: block;">

				<!-- 公共标题 -->
				<div class="qy_issue_box_title clearfix">

					<strong class="plantitle fontYaHei">行程单</strong>

					<!-- 提示文字
            <div class="help">
                <div class="mask" style="left:-125px;">
                    完整填写行程路线、酒店信息，让穷游er直观了解你的行程
                    <span class="arrow0">
                        <span class="arrow1"></span>
                        <span class="arrow2"></span>
                    </span>
                </div>
            </div> -->
					<a href="javascript:;" class="x-issue-planLoad">创建行程单</a>
					<p class="xissue-tooltip"><i class="xit-i">◆</i><i class="xit-i xsec">◆</i><span class="xit-content">添加完整酒店、城市、景点信息，获双倍穷币奖励</span></p>
					<!-- 展开收起箭头 可有可无 -->

					<div class="qy_issue_showHide" style="display:none">
						<span class="tHide" title="收起">收起</span>
					</div>

					<script type="text/javascript">
						$(function() {
							var $oShowHide = $(".qy_issue_showHide");
							var $oPlanBox = $("#__planItinerary__");
							$oShowHide.on('click', 'span', function() {
								if($oPlanBox.is(":visible")) {
									$oPlanBox.slideUp();
									$(this).removeClass().addClass("tShow").attr("title", "展开");
									// $(".x-border-line").addClass("x-dn");
								} else {
									$oPlanBox.slideDown();
									$(this).removeClass().addClass("tHide").attr("title", "收起");
									// $(".x-border-line").removeClass("x-dn");
								}
							});
						});
					</script>

				</div>

				<div id="__planItinerary__">
					<!--             <div class="qy_issue_planLoad">
                <a href="javascript:;">创建行程单</a>
            </div> -->

				</div>

			</div>

			<!-- 分割线 -->
			<!-- <div class="x-border-line x-dn"></div> -->

			<!-- 游记详情 -->
			<div class="qy_issue_travel" style="">

				<!-- 游记内容 -->
				<!-- 编辑器内容都放置div里面 -->
				<div class="qy_issue_travel_content" style="">
					<!-- 侧边栏位置 -->
					<div class="tool_right">
						<div class="tools clearfix">
							<div class="tools-inner-wrap selected" data-mode="lift"><span class="lift"><i></i></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">帖子电梯</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
							<div class="tools-inner-wrap" data-mode="emotion"><span class="faces"><i></i></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">插入表情</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
							<div class="tools-inner-wrap" data-mode="image"><span class="insertimage"><i></i></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">插入图片</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
							<div class="tools-inner-wrap" data-mode="video"><span class="insertvideo"></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">插入视频</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
							<div class="tools-inner-wrap" data-mode="attach"><span class="insertattach"></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">插入附件</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
							<div class="tools-inner-wrap" data-mode="help"><span class="help"></span>
								<div class="x-tool-wrap">
									<div class="x-tool-left"></div>
									<div class="x-tool-xtm">发帖帮助</div>
									<div class="x-tool-right"></div>
								</div>
							</div>
						</div>
						<div class="tool_content">
							<div class="lift_cont fontSong">
								<div class="lift_head">
									<h3>帖子电梯</h3><span class="reload"></span></div>
								<div class="lift_body"><span style="color:#c0c0c0">选中文字设置标题1或标题2后，会自动生成目录电梯</span></div>
							</div>
						</div>
					</div>
					<div style="position: relative;">
						<div class="editHolder" style="width: 600px; height: 686px;">从这里开始帖子正文...</div>
						<div id="senior_editor" class="editor edui-simple" style="">
							<div id="edui2" class="edui-editor  edui-simple" style="width: 600px; z-index: 999;">
								<div id="edui2_toolbarbox" class="edui-editor-toolbarbox">
									<div id="edui2_toolbarboxouter" class="edui-editor-toolbarboxouter">
										<div class="edui-editor-toolbarboxinner">
											<div id="edui3" class="edui-toolbar  " onselectstart="return false;" onmousedown="return $EDITORUI[&quot;edui3&quot;]._onMouseDown(event, this);" style="user-select: none;"></div>
											<div id="edui4" class="edui-toolbar  " onselectstart="return false;" onmousedown="return $EDITORUI[&quot;edui4&quot;]._onMouseDown(event, this);" style="user-select: none;"></div>
										</div>
									</div>
									<div id="edui2_toolbarmsg" class="edui-editor-toolbarmsg" style="display:none;">
										<div id="edui2_upload_dialog" class="edui-editor-toolbarmsg-upload" onclick="$EDITORUI[&quot;edui2&quot;].showWordImageDialog();">点击上传</div>
										<div class="edui-editor-toolbarmsg-close" onclick="$EDITORUI[&quot;edui2&quot;].hideToolbarMsg();">x</div>
										<div id="edui2_toolbarmsg_label" class="edui-editor-toolbarmsg-label"></div>
										<div style="height:0;overflow:hidden;clear:both;"></div>
									</div>
									<div id="edui2_message_holder" class="edui-editor-messageholder"></div>
								</div>
								<div id="edui2_iframeholder" class="edui-editor-iframeholder" style="width: 600px; height: 789px; z-index: 999; overflow: hidden;"><iframe id="ueditor_0" width="100%" height="100%" frameborder="0" src="javascript:void(function(){document.open();document.write(&quot;&lt;!DOCTYPE html&gt;&lt;html xmlns=&#39;http://www.w3.org/1999/xhtml&#39; class=&#39;view&#39; &gt;&lt;head&gt;&lt;style type=&#39;text/css&#39;&gt;.view{word-wrap:break-word;cursor:text;height:90%;}
body{margin:0;font-family:sans-serif;font-size:16px;}p{margin:0;}&lt;/style&gt;&lt;link rel=&#39;stylesheet&#39; type=&#39;text/css&#39; href=&#39;//common1.qyerstatic.com/bbs/old/js/utf8-php/themes/iframe.css&#39;/&gt;&lt;/head&gt;&lt;body class=&#39;view&#39; &gt;&lt;/body&gt;&lt;script type=&#39;text/javascript&#39;  id=&#39;_initialScript&#39;&gt;setTimeout(function(){editor = window.parent.UE.instants[&#39;ueditorInstant0&#39;];editor._setup(document);},0);var _tmpScript = document.getElementById(&#39;_initialScript&#39;);_tmpScript.parentNode.removeChild(_tmpScript);&lt;/script&gt;&lt;/html&gt;&quot;);document.close();}())"></iframe></div>
								<div id="edui2_bottombar" class="edui-editor-bottomContainer">
									<table>
										<tbody>
											<tr>
												<td id="edui2_elementpath" class="edui-editor-bottombar" style="display: none;"></td>
												<td id="edui2_wordcount" class="edui-editor-wordcount" style="display: none;"></td>
												<td id="edui2_scale" class="edui-editor-scale" style="display: none;">
													<div class="edui-editor-icon"></div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div id="edui2_scalelayer"></div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

		<!-- 浮动层 -->

		<div class="qy_issue_mask header x-head-poly x-filter-blur" id="qyIssueHeader">
			<span class=""></span>
			<span class="text detail-savedraft">保存于09:24</span>
			<div class="saveBtns">
				<span class="save detail-savedraft">保存草稿</span>
				<span class="travalBtn js_cmd submit" data-cmd="showSubmitPopup">发表游记</span>
			</div>
		</div>

		<!-- 发布信息弹层 -->
		<div id="js_qy_issue_popup" class="qy_issue_popup">
			<style type="text/css">
				/* 显示层需加上这两个css 关闭后删掉 */
				/*body,html { overflow:hidden; height:100%;}*/
			</style>
			<div class="qy_issue_popup_content">

				<!-- 帖子信息 -->
				<div class="pTitle x-tac">
					<!-- 公共标题 -->
					<div class="qy_issue_box_title clearfix">
						<strong class="title fontYaHei">帖子信息</strong>
					</div>

					<div class="text">完善帖子信息，帮助更多穷游er发现你的帖子</div>
				</div>
				<a href="javascript:void(0)" class="x-popup-close js_cmd" data-cmd="hideSubmitPopup"></a>
				<!-- 所在版块 -->
				<div class="pBlock">

					<!-- 公共标题 -->
					<div class="qy_issue_box_title clearfix">
						<strong class="title fontYaHei">帖子发表于</strong>
						<div class="help">
							<div class="mask" style="left:-54px;">
								选择帖子所属的主版面
								<span class="arrow0">
                            <span class="arrow1"></span>
								<span class="arrow2"></span>
								</span>
							</div>
						</div>
					</div>

					<p class="text" id="pubForceBanner">
						<a id="selectMainModule" href="javascript:;" class="x-c10b041">添加帖子所属版面</a><span id="selectMainValueArea" style="display:none;cursor:pointer;"><span></span>
						<a style="margin-left:20px;color:#10b041" href="javascript:;">修改</a>
						</span>
					</p>

				</div>
				<div id="mainBannerSelect" class="qy_issue_block_list">
					<div class="qy_issue_block_list_content clearfix">
						<div class="menu">
							<ul id="supMainModule" class="fontYaHei">
								<li class="active">
									<a href="javascript:;">兴趣小组</a>
								</li>
								<li>
									<a href="javascript:;">穷游欧洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游亚洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游美洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游大洋洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游非洲</a>
								</li>
								<li>
									<a href="javascript:;">线上线下</a>
								</li>
							</ul>
						</div>
						<div id="subMainSelect" class="content">
							<ul class="popup_list_ul clearfix" style="display: block;">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="100" data-sub-fname="旅行购物"><span>旅行购物</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="121" data-sub-fname="穷游折扣"><span>穷游折扣</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="94" data-sub-fname="邮轮"><span>邮轮</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="33" data-sub-fname="自驾"><span>自驾</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="183" data-sub-fname="旅行视频"><span>旅行视频</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="22" data-sub-fname="旅行摄影"><span>旅行摄影</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="40" data-sub-fname="户外运动"><span>户外运动</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="88" data-sub-fname="潜水俱乐部"><span>潜水俱乐部</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="122" data-sub-fname="带孩子旅行"><span>带孩子旅行</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="123" data-sub-fname="带父母旅行"><span>带父母旅行</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="184" data-sub-fname="路刻社"><span>路刻社</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="188" data-sub-fname="Discovery探索频道"><span>Discovery探索频道</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix"></ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="58" data-sub-fname="环游亚洲"><span>环游亚洲</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="57" data-sub-fname="日本"><span>日本</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="156" data-sub-fname="韩国/朝鲜"><span>韩国/朝鲜</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="52" data-sub-fname="台湾"><span>台湾</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="163" data-sub-fname="香港/澳门"><span>香港/澳门</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="106" data-sub-fname="泰国"><span>泰国</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="108" data-sub-fname="马来西亚/文莱"><span>马来西亚/文莱</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="164" data-sub-fname="新加坡"><span>新加坡</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="110" data-sub-fname="菲律宾"><span>菲律宾</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="175" data-sub-fname="柬埔寨"><span>柬埔寨</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="107" data-sub-fname="越南"><span>越南</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="176" data-sub-fname="老挝"><span>老挝</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="177" data-sub-fname="缅甸"><span>缅甸</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="102" data-sub-fname="尼泊尔"><span>尼泊尔</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="166" data-sub-fname="不丹"><span>不丹</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="111" data-sub-fname="印度尼西亚/东帝汶"><span>印度尼西亚/东帝汶</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="104" data-sub-fname="马尔代夫"><span>马尔代夫</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="165" data-sub-fname="斯里兰卡"><span>斯里兰卡</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="103" data-sub-fname="印度/孟加拉"><span>印度/孟加拉</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="59" data-sub-fname="伊朗"><span>伊朗</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="169" data-sub-fname="巴基斯坦/阿富汗"><span>巴基斯坦/阿富汗</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="171" data-sub-fname="阿联酋/卡塔尔"><span>阿联酋/卡塔尔</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="170" data-sub-fname="以色列"><span>以色列</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="172" data-sub-fname="西亚其他国家"><span>西亚其他国家</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="105" data-sub-fname="中亚各国"><span>中亚各国</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="167" data-sub-fname="蒙古"><span>蒙古</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="51" data-sub-fname="中国内地"><span>中国内地</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="53" data-sub-fname="美国"><span>美国</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="54" data-sub-fname="加拿大"><span>加拿大</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="168" data-sub-fname="中美"><span>中美</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="55" data-sub-fname="南美/南极"><span>南美/南极</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="56" data-sub-fname="澳大利亚"><span>澳大利亚</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="83" data-sub-fname="新西兰"><span>新西兰</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="178" data-sub-fname="太平洋海岛"><span>太平洋海岛</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="86" data-sub-fname="北非地区"><span>北非地区</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="173" data-sub-fname="东非地区"><span>东非地区</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="174" data-sub-fname="非洲海岛"><span>非洲海岛</span></label></li>
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="60" data-sub-fname="非洲其他国家"><span>非洲其他国家</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input class="js_cmd" type="radio" name="mainBanner" data-sub-fid="185" data-sub-fname="城市漫步"><span>城市漫步</span></label></li>
							</ul>
						</div>
					</div>
				</div>

				<!-- 转发版块 -->
				<div class="pTransmit" style="display:none">

					<!-- 公共标题 -->
					<div class="qy_issue_box_title clearfix" style="margin-top:46px;">

						<strong class="title fontYaHei">将帖子转发至</strong>

						<!-- 提示文字 -->
						<div class="help">
							<div class="mask" style="left:-162px;">
								将帖子转发至更多的相关版面（最多2个），让更多的穷游er看到你的大作
								<span class="arrow0">
                            <span class="arrow1"></span>
								<span class="arrow2"></span>
								</span>
							</div>
						</div>

					</div>

					<div class="text">
						<a id="js_showBlockList" href="javascript:;" class="show-forward-banner">添加帖子转发版面</a>
					</div>

					<!-- 修改展开选择层　按钮文案变成完成　error 为错误提示层 -->
					<div id="js_blockContainer" class="text" style="display: inline-block;">

						<a href="javascript:;" style="float:right;display:none;" class="show-forward-banner">修改</a>
					</div>

				</div>

				<!-- 板块选择列表 -->
				<div id="js_qy_issue_block_list" class="qy_issue_block_list">
					<div class="qy_issue_block_list_content clearfix">
						<div class="menu">
							<ul id="js_menuUL" class="fontYaHei">
								<li>
									<a href="javascript:;">兴趣小组</a>
								</li>
								<li>
									<a href="javascript:;">穷游欧洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游亚洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游美洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游大洋洲</a>
								</li>
								<li>
									<a href="javascript:;">穷游非洲</a>
								</li>
								<li>
									<a href="javascript:;">线上线下</a>
								</li>
							</ul>
						</div>
						<div id="js_popup_list" class="content">
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="100" data-forward-name="旅行购物" data-forward-index="0"><span>旅行购物</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="121" data-forward-name="穷游折扣" data-forward-index="0"><span>穷游折扣</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="94" data-forward-name="邮轮" data-forward-index="0"><span>邮轮</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="33" data-forward-name="自驾" data-forward-index="0"><span>自驾</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="183" data-forward-name="旅行视频" data-forward-index="0"><span>旅行视频</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="22" data-forward-name="旅行摄影" data-forward-index="0"><span>旅行摄影</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="40" data-forward-name="户外运动" data-forward-index="0"><span>户外运动</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="88" data-forward-name="潜水俱乐部" data-forward-index="0"><span>潜水俱乐部</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="122" data-forward-name="带孩子旅行" data-forward-index="0"><span>带孩子旅行</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="123" data-forward-name="带父母旅行" data-forward-index="0"><span>带父母旅行</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="188" data-forward-name="Discovery探索频道" data-forward-index="0"><span>Discovery探索频道</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix"></ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="58" data-forward-name="环游亚洲" data-forward-index="2"><span>环游亚洲</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="57" data-forward-name="日本" data-forward-index="2"><span>日本</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="156" data-forward-name="韩国/朝鲜" data-forward-index="2"><span>韩国/朝鲜</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="52" data-forward-name="台湾" data-forward-index="2"><span>台湾</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="163" data-forward-name="香港/澳门" data-forward-index="2"><span>香港/澳门</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="106" data-forward-name="泰国" data-forward-index="2"><span>泰国</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="108" data-forward-name="马来西亚/文莱" data-forward-index="2"><span>马来西亚/文莱</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="164" data-forward-name="新加坡" data-forward-index="2"><span>新加坡</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="110" data-forward-name="菲律宾" data-forward-index="2"><span>菲律宾</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="175" data-forward-name="柬埔寨" data-forward-index="2"><span>柬埔寨</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="107" data-forward-name="越南" data-forward-index="2"><span>越南</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="176" data-forward-name="老挝" data-forward-index="2"><span>老挝</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="177" data-forward-name="缅甸" data-forward-index="2"><span>缅甸</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="102" data-forward-name="尼泊尔" data-forward-index="2"><span>尼泊尔</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="166" data-forward-name="不丹" data-forward-index="2"><span>不丹</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="111" data-forward-name="印度尼西亚/东帝汶" data-forward-index="2"><span>印度尼西亚/东帝汶</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="104" data-forward-name="马尔代夫" data-forward-index="2"><span>马尔代夫</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="165" data-forward-name="斯里兰卡" data-forward-index="2"><span>斯里兰卡</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="103" data-forward-name="印度/孟加拉" data-forward-index="2"><span>印度/孟加拉</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="59" data-forward-name="伊朗" data-forward-index="2"><span>伊朗</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="169" data-forward-name="巴基斯坦/阿富汗" data-forward-index="2"><span>巴基斯坦/阿富汗</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="171" data-forward-name="阿联酋/卡塔尔" data-forward-index="2"><span>阿联酋/卡塔尔</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="170" data-forward-name="以色列" data-forward-index="2"><span>以色列</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="172" data-forward-name="西亚其他国家" data-forward-index="2"><span>西亚其他国家</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="105" data-forward-name="中亚各国" data-forward-index="2"><span>中亚各国</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="167" data-forward-name="蒙古" data-forward-index="2"><span>蒙古</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="51" data-forward-name="中国内地" data-forward-index="2"><span>中国内地</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="53" data-forward-name="美国" data-forward-index="3"><span>美国</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="54" data-forward-name="加拿大" data-forward-index="3"><span>加拿大</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="168" data-forward-name="中美" data-forward-index="3"><span>中美</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="55" data-forward-name="南美/南极" data-forward-index="3"><span>南美/南极</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="56" data-forward-name="澳大利亚" data-forward-index="4"><span>澳大利亚</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="83" data-forward-name="新西兰" data-forward-index="4"><span>新西兰</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="178" data-forward-name="太平洋海岛" data-forward-index="4"><span>太平洋海岛</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="86" data-forward-name="北非地区" data-forward-index="5"><span>北非地区</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="173" data-forward-name="东非地区" data-forward-index="5"><span>东非地区</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="174" data-forward-name="非洲海岛" data-forward-index="5"><span>非洲海岛</span></label></li>
								<li><label><input type="checkbox" class="checkbox-forward" value="60" data-forward-name="非洲其他国家" data-forward-index="5"><span>非洲其他国家</span></label></li>
							</ul>
							<ul class="popup_list_ul clearfix">
								<li><label><input type="checkbox" class="checkbox-forward" value="117" data-forward-name="轻年计划" data-forward-index="6"><span>轻年计划</span></label></li>
							</ul>
						</div>
					</div>
				</div>

				<!-- 帖子标签 -->
				<div class="ptags">
					<div class="main-tags">

						<div class="group">
							<p class="title">适用人群</p>
							<div class="wrap fitgroup"></div>
						</div>
						<div class="theme">
							<p class="title">主题</p>
							<div class="wrap alltheme"></div>
						</div>
					</div>

					<!-- 公共标题 -->
					<div class="others">
						<p class="title">其他标签</p>
						<div class="autotag-wrap">
							<p class="autotag-title">根据帖子内容，为你推荐标记以下标签</p>
							<div class="autotag-load"></div>
						</div>
					</div>
					<!-- 列表 添加 -->
					<div class="lists clearfix">
						<!-- 列表 -->
						<div id="js_tagContainer" class="list" style="display:none;">
							<!--                    <a href="javascript:;" class="tag js_cmd" data-cmd="delTag">意大利</a>
                    <a href="javascript:;" class="tag js_cmd" data-cmd="delTag">意大利</a>
                    <a href="javascript:;" class="tag js_cmd" data-cmd="delTag">意大利</a>-->
						</div>
						<!-- 添加文本框 -->
						<div id="js_searchTagDIV" class="inputContent">
							<input id="js_searchTag" type="text" placeholder="添加目的地、话题等标签帮助更多穷游er发现 :)" class="addBtn">
							<div id="js_searchTagContainer" style="width:642px;">
								<div class="qui-inputAutocomplete" style="display:none;">
									<ul class="qui-inputAutocomplete-ul">
										<li class="disableDefalut">loading ... </li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<!-- 提示 -->
					<div class="tips"><span class="tipTagExamp" style="color:#959595">例如：</span><span id="tagTipLoad"></span> <span class="tipTagExamp" style="color:#959595">等</span>标签可以帮助穷游er快速发现你的帖子</div>

				</div>
			</div>

			<!-- 发布按钮 -->
			<div class="qy_issue_popup_sbm">
				<a href="javascript:;" class="ui_btn_big_cancel js_cmd" data-cmd="hideSubmitPopup">取消</a>
				<a href="javascript:;" class="ui_btn_big js_cmd" data-cmd="publish">发布</a>
				<a href="javascript:void(0);" id="shareSina"></a>
				<a href="javascript:void(0);" id="shareQQ"></a>
				<a href="javascript:void(0);" id="shareAll"></a>
			</div>

		</div>

		<div class="qui-tip" style="display:none;">
			<div class="qui-tip-box"><span class="qui-tip-text fontYaHei">这里是提示文本</span></div>
		</div>
		<div class="qui-feedback" style="display: block;">
			<div class="icon js-btn" title="意见反馈"></div>
			<div class="cnt">
				<form method="post"><textarea class="js-feedback-cnt" cols="50" rows="10" placeholder="有任何意见或建议请告诉我们"></textarea>
					<p class="help">使用遇到问题？请先进入
						<a href="http://bbs.qyer.com/forum-10-1.html" target="_blank">帮助中心</a>
					</p><input class="ui_button js-submitBtn" type="button" value="提交"></form>
			</div>
		</div>
		<div id="edui_fixedlayer" class="edui-simple" style="position: fixed; left: 0px; top: 0px; width: 0px; height: 0px;">
			<div id="edui1" class="edui-popup  edui-fontstyle edui-simple" style="display: none;">
				<div id="edui1_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="./游记帖子发布页_files/saved_resource(1).html"></iframe>
					<div class="edui-shadow"></div>
					<div id="edui1_content" class="edui-popup-content"> </div>
				</div>
			</div>
			<div id="edui5" class="edui-popup  edui-bubble edui-simple" style="display: none;">
				<div id="edui5_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="./游记帖子发布页_files/saved_resource(2).html"></iframe>
					<div class="edui-shadow"></div>
					<div id="edui5_content" class="edui-popup-content"> </div>
				</div>
			</div>
		</div>
		<div class="qui-slidConfirm" style="display:none">
			<div class="qui-slidConfirm-title"><span class="qui-slidConfirm-text">你确认要删除吗</span></div>
			<div class="qui-slidConfirm-bottom"><input type="button" class="qui-slidConfirm-cancelBtn ui_button_cancel" value="取消"> <input type="button" class="qui-slidConfirm-okBtn ui_button" value="确定"> </div>
		</div>
		<div class="pub-threadhelp-wrap" style="display: none;">
			<div class="x-header">
				<a href="javascript:void(0);"></a>
				<p></p>
			</div>
			<div class="x-content"><span class="xcd xfl"><i class="xleft"></i></span>
				<div class="xcimages">
					<div class="pub-gifwrap" style="display: block;"><img src="travelpost_img/edit-1.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum">1</span>
							<div class="x-pubdesc1">
								<p class="x-pubdesc-title">调整字体样式</p>
								<p class="x-pubdesc-content">选中文字后可进行加粗、调整颜色</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap"><img src="travelpost_img/link-2.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum">2</span>
							<div class="x-pubdesc2">
								<p class="x-pubdesc-title">给选中文字添加超链接</p>
								<p class="x-pubdesc-content">选中文字后可为其添加或移除超链接</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap"><img src="travelpost_img/title-3.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum">3</span>
							<div class="x-pubdesc3">
								<p class="x-pubdesc-title">利用标题添加帖子目录</p>
								<p class="x-pubdesc-content">选中文字设置标题1或标题2样式后，会自动生成目录电梯。浏览时，可通过目录快速定位至感兴趣的内容</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap"><img src="travelpost_img/photo-4.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum">4</span>
							<div class="x-pubdesc4">
								<p class="x-pubdesc-title">通过穷游相册给帖子插入图片</p>
								<p class="x-pubdesc-content">先将旅行照片上传到穷游相册并关联拍摄地点，点击相册中的照片可将照片插入到编辑器的光标处</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap" style="top: -48px;"><img src="travelpost_img/save-5.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum" style="margin-top: -130px;">5</span>
							<div class="x-pubdesc5">
								<p class="x-pubdesc-title">未发布的内容会自动保存草稿</p>
								<p class="x-pubdesc-content">亦可点击“保存草稿”来手动保存草稿</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap" style="top: -60px;"><img src="travelpost_img/information-6.gif" alt="">
						<div class="x-pubdesc-wrap"><span class="x-pubnum" style="margin-top: -108px;">6</span>
							<div class="x-pubdesc6">
								<p class="x-pubdesc-title">设置帖子发布信息让帖子更多的穷游er看见</p>
								<p class="x-pubdesc-content">可通过设置帖子所属版面和帖子标签让更多穷游er看到你的大作</p>
							</div>
						</div>
					</div>
					<div class="pub-gifwrap" style="top: 30px;"><img src="travelpost_img/egg-7.png" alt="">
						<div class="x-pubdesc-wrap" style="display: none;"><span class="x-pubnum">7</span>
							<div class="x-pubdesc7">
								<p class="x-pubdesc-title"></p>
								<p class="x-pubdesc-content"></p>
							</div>
						</div>
					</div>
				</div><span class="xcd xfr"><i class="xright"></i></span></div>
			<div class="x-footer">
				<a href="javascript:void(0);" class="active"></a>
				<a href="javascript:void(0);"></a>
				<a href="javascript:void(0);"></a>
				<a href="javascript:void(0);"></a>
				<a href="javascript:void(0);"></a>
				<a href="javascript:void(0);"></a>
				<a href="javascript:void(0);"></a>
			</div>
		</div>
		<div class="qui-popup2 editor_video" style="display:none">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: 622px;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div class="qyEdit_append_pic clearfix">
								<div class="qyEdit_append_title clearfix"><strong class="text fontYaHei">插入视频</strong>
									<a href="javascript:;" title="关闭" class="close"></a>
								</div>
								<div class="qyEdit_append_video">
									<div class="input"><input type="text" value="" placeholder="请输入视频网址" class="ui2_input"><span class="toggleTip"></span></div>
									<div class="tips">
										<p class="tip">仅支持优酷、腾讯视频、新浪视频</p>
										<p class="error" id="BBSAddVideoError"><span></span>视频网址有错误，请重新输入</p>
									</div>
								</div>
								<div class="qyEdit_append_button clearfix">
									<a href="javascript:;" class="btn ui_button">插入视频</a>
									<a href="javascript:;" class="ui_button_cancel">取消</a>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;"> <input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;"> <input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<div class="qui-popup2 editor_file" style="display:none">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: 620px;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div class="qyEdit_append_pic clearfix">
								<div class="qyEdit_append_title clearfix"><strong class="text fontYaHei">插入附件</strong>
									<a href="javascript:;" title="关闭" class="close"></a>
								</div>
								<div class="qyEdit_append_affix">
									<div class="input" id="selContainerWrap">
										<div class="upload" id="selContainer"><span class="default" id="selBtn">从电脑中选择文件上传</span></div><span class="toggleTip"></span></div>
									<div class="tips">
										<p class="error"><span></span>仅支持不超过20MB大小的文件</p>
										<p>支持单个不超过20MB的pdf格式文件上传</p>
									</div>
								</div>
								<div class="qyEdit_append_button clearfix">
									<a href="javascript:;" class="btn ui_button_disabled">插入附件</a>
									<a href="javascript:;" class="ui_button_cancel">取消</a>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;"> <input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;"> <input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<div class="qui-popup2 editor_video" style="display:none">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: 622px;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div class="qyEdit_append_pic clearfix">
								<div class="qyEdit_append_title clearfix"><strong class="text fontYaHei">插入视频</strong>
									<a href="javascript:;" title="关闭" class="close"></a>
								</div>
								<div class="qyEdit_append_video">
									<div class="input"><input type="text" value="" placeholder="请输入视频网址" class="ui2_input"><span class="toggleTip"></span></div>
									<div class="tips">
										<p class="tip">仅支持优酷、腾讯视频、新浪视频</p>
										<p class="error" id="BBSAddVideoError"><span></span>视频网址有错误，请重新输入</p>
									</div>
								</div>
								<div class="qyEdit_append_button clearfix">
									<a href="javascript:;" class="btn ui_button">插入视频</a>
									<a href="javascript:;" class="ui_button_cancel">取消</a>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;"> <input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;"> <input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
		<div class="qui-popup2 editor_file" style="display:none">
			<div>
				<div class="qui-popup2-dt">
					<div class="qui-popup2-box" style="width: 620px;">
						<div class="qui-popup2-closeIcon" style="display: none;">&nbsp;</div>
						<div class="qui-popup2-box-title" style="display: none;">Title</div>
						<div class="qui-popup2-box-content">
							<div class="qyEdit_append_pic clearfix">
								<div class="qyEdit_append_title clearfix"><strong class="text fontYaHei">插入附件</strong>
									<a href="javascript:;" title="关闭" class="close"></a>
								</div>
								<div class="qyEdit_append_affix">
									<div class="input" id="selContainerWrap">
										<div class="upload" id="selContainer"><span class="default" id="selBtn">从电脑中选择文件上传</span></div><span class="toggleTip"></span></div>
									<div class="tips">
										<p class="error"><span></span>仅支持不超过20MB大小的文件</p>
										<p>支持单个不超过20MB的pdf格式文件上传</p>
									</div>
								</div>
								<div class="qyEdit_append_button clearfix">
									<a href="javascript:;" class="btn ui_button_disabled">插入附件</a>
									<a href="javascript:;" class="ui_button_cancel">取消</a>
								</div>
							</div>
						</div>
						<div class="qui-popup2-box-bottom" style="display: none;">&nbsp;<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" style="display: none;"> <input class="qui-popup2-okBtn ui_button" type="button" value="确定" style="display: none;"> <input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" style="display: none;"> </div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>