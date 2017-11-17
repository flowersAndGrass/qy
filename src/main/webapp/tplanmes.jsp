<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<style type="text/css">
			@charset "UTF-8";
			[ng\:cloak],
			[ng-cloak],
			[data-ng-cloak],
			[x-ng-cloak],
			.ng-cloak,
			.x-ng-cloak,
			.ng-hide:not(.ng-hide-animate) {
				display: none !important;
			}
			
			ng\:form {
				display: block;
			}
		</style>
		<meta charset="utf-8">
		<meta name="keywords" content="厦门,北京,广州">
		<meta name="description" content="穷游网行程助手，你来啦的北京-广州行程途径城市：厦门,北京,广州">
		<meta name="google-site-verification" content="DVVM1p1HEm8vE1wVOQ9UjcKP--pNAsg_pleTU5TkFaM">
		<title>你来啦的北京-广州行程 - 旅行计划 - 行程助手 - 穷游网</title>
		<link rel="shortcut icon" href="//www.qyer.com/favicon.ico">
		<link rel="stylesheet" href="css/tplanmes/style.css">
		<script>
			window.QYER = {
				uid: [9948056][0] || 0
			};
			window._RATrack = window._RATrack || {
				'platform': 'web',
				'channel': 'plan',
				'page_type': 'edit',
				'ugc_type': 'plan_edit_v3',
				'ugc_content': '12688516'
			};
		</script>

		<script src="bootstrap/js/jquery.min.js"></script>

		<script src="js/tplanmes/header.js"></script>
		<script type="text/javascript" async="" src="js/tplanmes/beacon_ga.js"></script>
		<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="web_old_inputautocomplete" src="js/tplanmes/inputAutocomplete.js"></script>
		<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="//common1.qyerstatic.com/plan/modules/lib_require_css/css.js" src="js/tplanmes/require.js"></script>
		<link type="text/css" rel="stylesheet" href="css/tplanmes/inputAutocomplete.css">
		<!--	<script type="text/javascript" charset="UTF-8" src="http://maps.google.cn/maps-api-v3/api/js/30/13/intl/zh_cn/common.js"></script>
		<script type="text/javascript" charset="UTF-8" src="http://maps.google.cn/maps-api-v3/api/js/30/13/intl/zh_cn/util.js"></script>
		<script type="text/javascript" charset="UTF-8" src="http://maps.google.cn/maps-api-v3/api/js/30/13/intl/zh_cn/stats.js"></script>-->
	</head>

	<body class="ngdialog-open" style="background-image: url(&quot;//common3.qyerstatic.com/plan/desktop/edit3/img/background.png&quot;);">

		<div ng-app="planner" class="ng-scope">
			<div ng-controller="Planner" class="ng-scope">
				<div id="wrapper" class="">
					<header planner-header="" style="background-image: url(&quot;//common3.qyerstatic.com/plan/desktop/edit3/img/background.png&quot;);">
						<div ng-controller="PlannerHeaderController" class="inner ng-scope" id="pdf-header" style="background-image: url(&quot;//common3.qyerstatic.com/plan/desktop/edit3/img/header.png&quot;);">
							<div class="title">
								<a class="logo" href="/" target="_blank" data-bn-ipg="Planv3-tool-LOGO"><i class="iconfont"></i></a>
								<!-- ngIf: !editing -->
								<div class="text ng-scope" ng-if="!editing"><span ng-click="startEditing()" class="ng-binding">你来啦的上海行程</span>
									<div class="black-tip bottom">点击修改标题</div>
								</div>
								<!-- end ngIf: !editing -->
								<!-- ngIf: editing -->
							</div>
							<ul class="preview-modes">
								<li ng-click="changeMode($event, 'standard')" ng-class="{true: 'active'}[service.mode == 'standard']" class="active"><em class="icon hamburg"></em>标准模式</li>
								<li ng-click="changeMode($event, 'map')" ng-class="{true: 'active'}[service.mode == 'map']"><em class="icon map-mode"></em>地图模式</li>
							</ul>
							<ul class="edit">
								<li>
									<a href="#">上一步</a>
								</li>
								<li>
									<a href="#">重做</a>
								</li>
							</ul>
							<!-- ngIf: !isLogin -->
							<!--a href="https://plan.qyer.com/topic/luckymoney" target="_blank" data-bn-ipg="planv3-top-button" class="evt-1202" ng-if="isLogin">订酒店返现金</a-->
							<div class="links">
								<a href="#" class="link iconfont" ng-click="showHelp()" data-bn-ipg="Planv3-tool-help"></a>
								<div class="sep"></div>
								<!-- ngIf: isLogin -->
								<a ng-if="isLogin" href="/trip/V2UJYVFgBz9TZVI3CmkNPA/?fromjournalview=1" target="_blank" class="link ng-scope" data-bn-ipg="Planv3-tool-preview">预览</a>
								<!-- end ngIf: isLogin -->
								<!-- ngIf: !isLogin -->
								<div class="sep"></div>
								<!-- ngIf: isLogin -->
								<a ng-if="isLogin" href="#" class="link ng-scope" ng-click="showShare()" data-bn-ipg="Planv3-tool-share">分享</a>
								<!-- end ngIf: isLogin -->
								<!-- ngIf: !isLogin -->
							</div>
							<div class="export">
								<a href="#" ng-click="toggleExport($event)">导出行程<span class="triangle"></span></a>
								<div id="export-selector" class="dropdown" style="">
									<ul>
										<li class="with-icon icon-word" ng-click="exportWord($event)"> 导出word行程单 </li>
										<li class="with-icon icon1" ng-click="closeExport($event, true)">
											<a class="link" href="/planapi.php?action=downexcel&amp;id=12691852" target="_blank" ng-click="showAppAd()">送签专用行程单</a>
										</li>
										<li class="with-icon icon2" ng-click="exportPDF($event)">PDF详细行程单</li>
										<li class="with-icon icon3">
											<a class="link" href="//app.qyer.com/plan/" target="_blank" data-bn-ipg="Planv3-tool-export-mobile">手机查看行程单</a>
										</li>
									</ul>
								</div>
								<div class="dropdown dropdown-pdf" style="">
									<form action="/export.php?action=generatepdf" method="post" target="_blank" class="ng-pristine ng-valid"><input type="hidden" name="routeid" value="12691852"><input type="hidden" name="trip[]" value="1"><input type="hidden" name="memo" value="1">
										<h3>导出PDF选项<span>基础行程是最基本的元素。此外，你可以选择：</span></h3>
										<a href="#" class="close" ng-click="closeExport($event)">关闭</a>
										<ul style="height: 400px; overflow-y: auto;">
											<li><input type="checkbox" ng-model="cover" name="cover" value="1" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
												<a href="#" class="checkbox checked"></a><span>封面</span></li>
											<li><input type="checkbox" ng-model="calendar" name="calendar" value="1" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
												<a href="#" class="checkbox checked"></a><span>日历表行程</span></li>
											<li><input type="checkbox" ng-model="tripAll" checkbox="" checked="" disabled="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
												<a href="#" class="checkbox disabled checked"></a><span>行程</span>
												<ul>
													<li><input type="checkbox" ng-model="tripBasic" name="trip[]" value="1" checkbox="" checked="" disabled="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox disabled checked"></a><span>基础行程</span></li>
													<li><input type="checkbox" ng-model="tripMap" name="trip[]" value="2" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span>每日地图</span></li>
													<li><input type="checkbox" ng-model="tripInfo" name="trip[]" value="8" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span>景点详细介绍</span></li>
													<li><input type="checkbox" ng-model="allmap" name="allmap" value="1" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span>全程地图</span></li>
													<li id="b_tripZworld"><input type="checkbox" ng-model="tripZworld" name="trip[]" value="4" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span>最世界产品</span></li>
												</ul>
											</li>
											<li id="b_cost"><input type="checkbox" ng-model="cost" name="cost" value="1" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
												<a href="#" class="checkbox checked"></a><span>行程花费</span></li>
											<!-- <li><input type="checkbox" ng-model="memo" name="memo" value="1" checkbox checked><span>备忘录</span></li> -->
											<li><input type="checkbox" ng-model="pageshow" name="pageshow" value="1" checkbox="" checked="" class="ng-pristine ng-untouched ng-valid" style="display: none;">
												<a href="#" class="checkbox"></a><span>每日行程分页显示</span></li>
										</ul>
										<div class="control">
											<a href="#" class="button" data-bn-ipg="Planv3-PDF-close" ng-click="closeExport($event)">取消</a>
											<!-- <a href="#" class="primary button" ng-click="submit($event)">导出</a> -->
											<a href="#" class="button primary" data-bn-ipg="Planv3-PDF-nextstep" ng-click="showPdfModify()">下一步</a>
										</div>
									</form>
								</div>
								<div class="dropdown-word">
									<form action="/exportword.php" method="post" target="_blank" class="ng-pristine ng-valid"><input type="hidden" name="routeid" value="12691852">
										<h3>导出Word选项<span></span></h3>
										<a href="#" class="close" ng-click="closeWord($event)">关闭</a>
										<table width="100%">
											<tbody>
												<tr>
													<td>餐饮</td>
													<td><input type="text" name="food" value="酒店含早 中式午餐 中式晚餐"></td>
												</tr>
												<tr>
													<td>住宿</td>
													<td><input type="text" name="hote" value="三星级酒店标准双人间（含早餐)"></td>
												</tr>
											</tbody>
										</table>
										<div class="control">
											<a href="#" class="button" ng-click="closeWord($event)">取消</a>
											<a href="#" class="primary button" ng-click="submit($event)">导出</a>
										</div>
									</form>
								</div>
								<div class="mask-pdf"></div>
								<div class="pdf-modify dropdown" style="">
									<h3>点击修改行程标题和封面图</h3>
									<a href="#" class="close" ng-click="closeExport($event)">关闭</a>
									<div class="modify-cont" id="modify-cont">
										<div class="modify-bg">
											<!-- ngIf: !pdfTitlEditing --><span ng-if="!pdfTitlEditing" class="modify-title ng-binding ng-scope" data-bn-ipg="Planv3-PDF-cover-tittle" ng-click="startPdfEditTitle($event)">你来啦的上海行程</span>
											<!-- end ngIf: !pdfTitlEditing -->
											<!-- ngIf: pdfTitlEditing -->
											<div class="modify-img">
												<form id="upload-cover-form-pdf" enctype="multipart/form-data" method="post" action="/ajax.php?action=singleupload" class="ng-pristine ng-valid"><img src="https://pic.qyer.com/album/user/1500/97/QExVQhMAYEg/index/w1080"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/pdf_bg.png">
													<div class="imgupload">
														<a href="##" class="iconfont"><input id="upload-cover-field-pdf" type="file" name="Filedata" data-bn-ipg="Planv3-PDF-cover-image"></a>
													</div>
													<!-- ngIf: imgLoadStatus == "loading" --><input type="hidden" name="type" value="plan"><input type="hidden" name="plan_id" value="12691852"></form>
											</div>
										</div>
									</div>
									<div class="control">
										<a href="#" class="button" data-bn-ipg="Planv3-PDF-cover-laststep" ng-click="exportPDF()">上一步</a>
										<a href="#" class="primary button" data-bn-ipg="Planv3-PDF-cover-export" ng-click="submitPdf($event)">导出</a>
									</div>
								</div>
							</div>
							<div class="insurancelayer">
								<div class="insurance_main">
									<!-- ngIf: isSchengen -->
									<!-- ngIf: !isSchengen -->
									<div ng-if="!isSchengen" class="insurance_top ng-scope">
										<h3>旅行保险销量Top3</h3><span>在外旅行可能会面临多种突发情况，购买旅行保险可以多一份保障与安心</span></div>
									<!-- end ngIf: !isSchengen -->
									<ul class="insurance_list">
										<!-- ngRepeat: item in insuranceData -->
									</ul>
								</div>
								<div class="close" data-bn-ipg=""></div>
							</div>
							<div class="app-ad">
								<div class="main">
									<div class="phone"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-1.jpg"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-2.jpg" style="display:none"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-3.jpg" style="display:none"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-4.jpg" style="display:none"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-5.jpg" style="display:none"><img src="//common3.qyerstatic.com/plan/desktop/edit3/img/app-ad-scene-6.jpg" style="display:none"></div>
									<div class="close"></div>
								</div>
							</div>
						</div>
					</header>
					<aside planner-toolbar="">
						<nav class="planner-toolbar-nav ng-scope" ng-controller="ToolbarNavController">
							<ul class="fixed-menu">
								<!-- ngRepeat: widget in service.currentWidgets -->
								<!-- end ngRepeat: widget in service.currentWidgets -->
								<!-- end ngRepeat: widget in service.currentWidgets -->
								<!-- end ngRepeat: widget in service.currentWidgets -->
								<!-- end ngRepeat: widget in service.currentWidgets -->
								<!-- end ngRepeat: widget in service.currentWidgets -->
								<li id="toolbar-setting-button" ng-show="service.navType !== 'journal'" ng-click="changeType('setting')" ng-class="{true:'active'}[service.navType == 'setting']" data-bn-ipg="Planv3-toolbar-setting" data-help-index="9|14" data-help-direction="left|left" data-help-content="点击这里修改行程名称或封面|点击这里，然后勾选隐私设置"><em class="icon setting-icon"><span class="iconfont"></span></em><em class="text">设置</em>
									<!-- ngIf: isShowUpdateTip -->
								</li>
								<li id="collapse-toolbar" ng-show="service.navType !== 'journal'" style="display:none"><em class="icon collapse-icon"><span class="iconfont"></span></em><em class="text">收起</em></li>
								<li id="expand-toolbar" ng-show="service.navType !== 'journal'" style=""><em class="icon expand-icon"><span class="iconfont"></span></em><em class="text">展开</em></li>
							</ul>
							<ul class="float-menu" style="display: none; top: -535px;">
								<li id="toolbar-editor" ng-show="service.navType === 'journal'" ng-click="changeType('edit')" ng-class="{true:'active'}[service.navType == 'edit']" class="ng-hide active"><em class="icon edit-icon" data-bn-ipg="Planv3-toolbar-editor"><span class="iconfont"></span></em><em class="text">编辑</em></li>
								<li ng-show="service.navType !== 'journal'" ng-repeat="widget in service.currentWidgets" ng-click="changeType({3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id])" ng-class="{true:'active'}[service.navType == {3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id]]" data-help-index="" data-help-direction="" data-help-content="" class="ng-scope"><em class="icon calendar-icon" ng-class="{3:'calendar-icon', 4:'expend-icon', 5:'colleague-icon', 8:'question-icon', 9:'journal-icon'}[widget.id]"><!-- ngIf: widget.id == 3 --><span class="iconfont ng-scope" ng-if="widget.id == 3"></span><!-- end ngIf: widget.id == 3 --><!-- ngIf: widget.id == 4 --><!-- ngIf: widget.id == 5 --><!-- ngIf: widget.id == 8 --><!-- ngIf: widget.id == 9 --></em><em class="text ng-binding">日历</em></li>
								<li ng-show="service.navType !== 'journal'" ng-repeat="widget in service.currentWidgets" ng-click="changeType({3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id])" ng-class="{true:'active'}[service.navType == {3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id]]" data-help-index="15" data-help-direction="left" data-help-content="在这里哦" class="ng-scope"><em class="icon expend-icon" ng-class="{3:'calendar-icon', 4:'expend-icon', 5:'colleague-icon', 8:'question-icon', 9:'journal-icon'}[widget.id]"><!-- ngIf: widget.id == 3 --><!-- ngIf: widget.id == 4 --><span class="iconfont ng-scope" ng-if="widget.id == 4"></span><!-- end ngIf: widget.id == 4 --><!-- ngIf: widget.id == 5 --><!-- ngIf: widget.id == 8 --><!-- ngIf: widget.id == 9 --></em><em class="text ng-binding">花费</em></li>
								<li ng-show="service.navType !== 'journal'" ng-repeat="widget in service.currentWidgets" ng-click="changeType({3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id])" ng-class="{true:'active'}[service.navType == {3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id]]" data-help-index="13" data-help-direction="left" data-help-content="在这里哦。添加了同行者后，可以把对方设置为允许编辑" class="ng-scope"><em class="icon colleague-icon" ng-class="{3:'calendar-icon', 4:'expend-icon', 5:'colleague-icon', 8:'question-icon', 9:'journal-icon'}[widget.id]"><!-- ngIf: widget.id == 3 --><!-- ngIf: widget.id == 4 --><!-- ngIf: widget.id == 5 --><span class="iconfont ng-scope" ng-if="widget.id == 5"></span><!-- end ngIf: widget.id == 5 --><!-- ngIf: widget.id == 8 --><!-- ngIf: widget.id == 9 --></em><em class="text ng-binding">同行</em></li>
								<li ng-show="service.navType !== 'journal'" ng-repeat="widget in service.currentWidgets" ng-click="changeType({3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id])" ng-class="{true:'active'}[service.navType == {3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id]]" data-help-index="" data-help-direction="" data-help-content="" class="ng-scope"><em class="icon question-icon" ng-class="{3:'calendar-icon', 4:'expend-icon', 5:'colleague-icon', 8:'question-icon', 9:'journal-icon'}[widget.id]"><!-- ngIf: widget.id == 3 --><!-- ngIf: widget.id == 4 --><!-- ngIf: widget.id == 5 --><!-- ngIf: widget.id == 8 --><span class="iconfont ng-scope" ng-if="widget.id == 8"></span><!-- end ngIf: widget.id == 8 --><!-- ngIf: widget.id == 9 --></em><em class="text ng-binding">问答</em></li>
								<li ng-show="service.navType !== 'journal'" ng-repeat="widget in service.currentWidgets" ng-click="changeType({3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id])" ng-class="{true:'active'}[service.navType == {3:'calendar', 4:'expend', 5:'colleague', 8:'question', 9:'journal'}[widget.id]]" data-help-index="" data-help-direction="" data-help-content="" class="ng-scope"><em class="icon journal-icon" ng-class="{3:'calendar-icon', 4:'expend-icon', 5:'colleague-icon', 8:'question-icon', 9:'journal-icon'}[widget.id]"><!-- ngIf: widget.id == 3 --><!-- ngIf: widget.id == 4 --><!-- ngIf: widget.id == 5 --><!-- ngIf: widget.id == 8 --><!-- ngIf: widget.id == 9 --><span class="iconfont ng-scope" ng-if="widget.id == 9"></span><!-- end ngIf: widget.id == 9 --></em><em class="text ng-binding">游记</em></li>
							</ul>
						</nav>
						<div class="planner-toolbar-panel ng-scope" ng-controller="ToolbarPanelController">
							<!-- ngIf: service.navType == 'setting' -->
							<!-- ngIf: service.navType == 'colleague' -->
							<!-- ngIf: service.navType == 'calendar' -->
							<!-- ngIf: service.navType == 'expend' -->
							<!-- ngIf: service.navType == 'question' -->
							<!-- ngIf: service.navType == 'cart' -->
							<!-- ngIf: service.navType == 'journal' -->
						</div>
					</aside>
					<div class="fixed-wrapper">
						<section class="planner-day-list scroll_top" style="width: 279px;">
							<!-- <div class="inner-header"></div> -->
							<div ng-controller="DayListController" class="inner ng-scope">
								<ul ui-sortable="sortableOptions" ng-model="days" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable">
									<!-- ngRepeat: day in days -->
									<li ng-repeat="day in days" ng-click="changeDay($event, $index, day)" ng-class="{'true':'active', 'false':''}[(index === $index)]" data-help-index="12" data-help-direction="right" data-help-content="拖拽住即可调序哦，景点也是" class="ng-scope active">
										<h2 class="ng-binding">D1</h2>
										<div class="text-container">
											<div>
												<p class="date ng-binding">暂无出发日期 </p>
												<p class="places" title="厦门-上海">
													<!-- ngRepeat: city in day.city_list --><span ng-repeat="city in day.city_list" class="ng-binding ng-scope">厦门</span>
													<!-- end ngRepeat: city in day.city_list --><span ng-repeat="city in day.city_list" class="ng-binding ng-scope">上海</span>
													<!-- end ngRepeat: city in day.city_list -->
													<!-- ngIf: !day.city_list || day.city_list.length === 0 -->
												</p>
											</div>
										</div>
										<div class="more iconfont" slide-dropdown="dropdownOptions" data-index="0" data-dayid="104936843">  </div>
									</li>
									<!-- end ngRepeat: day in days -->
									<li ng-repeat="day in days" ng-click="changeDay($event, $index, day)" ng-class="{'true':'active', 'false':''}[(index === $index)]" data-help-index="" data-help-direction="" data-help-content="" class="ng-scope">
										<h2 class="ng-binding">D2</h2>
										<div class="text-container">
											<div>
												<p class="date ng-binding">暂无出发日期 </p>
												<p class="places" title="上海">
													<!-- ngRepeat: city in day.city_list --><span ng-repeat="city in day.city_list" class="ng-binding ng-scope">上海</span>
													<!-- end ngRepeat: city in day.city_list -->
													<!-- ngIf: !day.city_list || day.city_list.length === 0 -->
												</p>
											</div>
										</div>
										<div class="more iconfont" slide-dropdown="dropdownOptions" data-index="1" data-dayid="104936844">  </div>
									</li>
									<!-- end ngRepeat: day in days -->
									<li ng-repeat="day in days" ng-click="changeDay($event, $index, day)" ng-class="{'true':'active', 'false':''}[(index === $index)]" data-help-index="" data-help-direction="" data-help-content="" class="ng-scope">
										<h2 class="ng-binding">D3</h2>
										<div class="text-container">
											<div>
												<p class="date ng-binding">暂无出发日期 </p>
												<p class="places" title="上海-厦门">
													<!-- ngRepeat: city in day.city_list --><span ng-repeat="city in day.city_list" class="ng-binding ng-scope">上海</span>
													<!-- end ngRepeat: city in day.city_list --><span ng-repeat="city in day.city_list" class="ng-binding ng-scope">厦门</span>
													<!-- end ngRepeat: city in day.city_list -->
													<!-- ngIf: !day.city_list || day.city_list.length === 0 -->
												</p>
											</div>
										</div>
										<div class="more iconfont" slide-dropdown="dropdownOptions" data-index="2" data-dayid="104936845">  </div>
									</li>
									<!-- end ngRepeat: day in days -->
								</ul>
								<!-- ngIf: days.length < 50 -->
								<div class="addlast ng-scope" ng-if="days.length < 50" ng-click="addLast()"><span class="iconfont"></span>增加一天</div>
								<!-- end ngIf: days.length < 50 -->
							</div>
							<!-- <div class="inner-footer"></div> -->
						</section>
						<section class="planner-recommends">
							<div class="inner ng-scope" ng-controller="PlannerRecommendsController" ng-class="{true: 'with-path'}[!!service.selectedTraffic]">
								<div class="recommends-header ng-scope" ng-controller="RecommendsHeaderController">
									<a class="city ng-binding" href="#" ng-click="showCities($event)" data-bn-ipg="Planv3-right-city-change">上海<span class="triangle"></span></a>
									<div class="city-options">
										<ul>
											<!-- ngRepeat: city in service.getAllCities() -->
											<li ng-repeat="city in service.getAllCities()" ng-click="changeCity(city)" class="ng-binding ng-scope">厦门</li>
											<!-- end ngRepeat: city in service.getAllCities() -->
											<li ng-repeat="city in service.getAllCities()" ng-click="changeCity(city)" class="ng-binding ng-scope">上海</li>
											<!-- end ngRepeat: city in service.getAllCities() -->
										</ul><input type="text" placeholder="输入城市名称">
										<!-- ngIf: service.selectedCity && top5 -->
										<p class="top5 ng-scope" ng-if="service.selectedCity &amp;&amp; top5"><span>下一站TOP5：</span>
											<!-- ngRepeat: city in top5 --><span ng-repeat="city in top5" class="ng-binding ng-scope"><a href="#" ng-click="changeCity({tagid: city.city_id, name: city.cn_name, lat: city.lat, lng: city.lng})" class="ng-binding">杭州</a>(3%前往)&nbsp;</span>
											<!-- end ngRepeat: city in top5 --><span ng-repeat="city in top5" class="ng-binding ng-scope"><a href="#" ng-click="changeCity({tagid: city.city_id, name: city.cn_name, lat: city.lat, lng: city.lng})" class="ng-binding">苏州</a>(1%前往)&nbsp;</span>
											<!-- end ngRepeat: city in top5 --><span ng-repeat="city in top5" class="ng-binding ng-scope"><a href="#" ng-click="changeCity({tagid: city.city_id, name: city.cn_name, lat: city.lat, lng: city.lng})" class="ng-binding">香港</a>(1%前往)&nbsp;</span>
											<!-- end ngRepeat: city in top5 --><span ng-repeat="city in top5" class="ng-binding ng-scope"><a href="#" ng-click="changeCity({tagid: city.city_id, name: city.cn_name, lat: city.lat, lng: city.lng})" class="ng-binding">东京</a>(1%前往)&nbsp;</span>
											<!-- end ngRepeat: city in top5 --><span ng-repeat="city in top5" class="ng-binding ng-scope"><a href="#" ng-click="changeCity({tagid: city.city_id, name: city.cn_name, lat: city.lat, lng: city.lng})" class="ng-binding">大阪</a>(1%前往)&nbsp;</span>
											<!-- end ngRepeat: city in top5 -->
										</p>
										<!-- end ngIf: service.selectedCity && top5 -->
										<!-- ngIf: !service.selectedCity || !top5 -->
									</div>
									<div class="search" ng-show="mode == 'standard'"><input type="text" placeholder="输入关键词" ng-keydown="keyHandler($event)">
										<a href="#" class="icon close" ng-click="closeSearch($event)">关闭</a>
										<a href="#" ng-click="openSearch($event)" data-bn-ipg="Planv3-right-city-search"><em class="magnify icon"></em></a>
									</div>
								</div>
								<div class="recommends-tabs ng-scope" ng-controller="RecommendsTabsController" ng-show="mode == 'standard' &amp;&amp; service.selectedCity" style="top: 60px;">
									<ul class="mainmenu" ng-class="{true:'search-state'}[service.recommendType == 'search']">
										<li style="text-align:left;">
											<a href="#" ng-click="changeTab(0, $event)" data-bn-ipg="Planv3-right-menu-route"><i class="iconfont"></i>路线</a>
										</li>
										<li class="hold-position" style="text-align:left;" data-help-index="2" data-help-direction="top" data-help-content="选中游玩后，勾选美食即可" data-help-left-offset="-20">
											<a href="#" ng-click="changeTab(1, $event);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-poi' : 'Planv3-right-menu-poi'));" class="active"><i class="iconfont"></i>游玩<span class="triangle"></span></a>
											<div>
												<ul class="poi-filter">
													<li><input type="checkbox" checkbox="" checked="" ng-change="togglePoiFilter()" ng-model="poi.all" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="togglePoiFilter()">全部</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changePoiFilter('sight')" ng-model="poi['32']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="poi['32'] = !poi['32'];changePoiFilter('sight');">景点</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changePoiFilter('food')" ng-model="poi['78']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="poi['78'] = !poi['78'];changePoiFilter('food');">美食</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changePoiFilter('shopping')" ng-model="poi['147']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="poi['147'] = !poi['147'];changePoiFilter('shopping');">购物</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changePoiFilter('event')" ng-model="poi['148']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="poi['148'] = !poi['148'];changePoiFilter('event');">体验</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changePoiFilter('trans')" ng-model="poi['77']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="poi['77'] = !poi['77'];changePoiFilter('trans');">交通</span></li>
												</ul>
											</div>
										</li>
										<li class="hold-position" style="text-align:left;" data-help-index="3" data-help-direction="top" data-help-content="选中后，可搜索酒店" data-help-step="1" data-help-left-offset="-16">
											<a href="#" ng-click="changeTab(2, $event);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-hotel' : 'Planv3-right-menu-hotel'));"><i class="iconfont"></i>住宿
												<!--em class="evt-1012"></em--><span class="triangle"></span></a>
										</li>
										<li data-help-index="4" data-help-direction="top" data-help-content="选中城际交通后，输入起始城市即可" data-help-step="1">
											<a href="#" ng-click="changeTab(3, $event)" data-bn-ipg="Planv3-right-menu-trans"><i class="iconfont"></i>城际交通</a>
										</li>
										<li style="display:none">
											<a href="#" ng-click="changeTab(4, $event)" data-bn-ipg="Planv3-right-menu-collection"><i class="iconfont"></i>备选<span class="triangle"></span></a>
										</li>
										<li class="hold-position" style="text-align: right;">
											<a href="#" ng-click="changeTab(5, $event)" data-bn-ipg="Planv3-right-menu-lastminute"><i class="iconfont" style="font-size: 1.1em;"></i>折扣<span class="triangle"></span></a>
											<div>
												<ul class="lm-filter">
													<li><input type="checkbox" checkbox="" checked="" ng-change="toggleLmFilter()" ng-model="lastminute.all" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="toggleLmFilter()">全部</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changeLmFilter('ticket')" ng-model="lastminute['1']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="lastminute['1'] = !lastminute['1'];changeLmFilter('ticket');">机票/酒店/自由行</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changeLmFilter('service')" ng-model="lastminute['2']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="lastminute['2'] = !lastminute['2'];changeLmFilter('service');">WiFi/签证/保险</span></li>
													<li><input type="checkbox" checkbox="" checked="" ng-change="changeLmFilter('local')" ng-model="lastminute['3']" class="ng-pristine ng-untouched ng-valid" style="display: none;">
														<a href="#" class="checkbox checked"></a><span ng-click="lastminute['3'] = !lastminute['3'];changeLmFilter('local');">当地游玩</span></li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
								<div class="recommends-body ng-scope" ng-controller="RecommendsBodyController" ng-show="mode == 'standard'">
									<!-- 路线 -->
									<!-- ngIf: service.selectedCity && page == 'routes' -->
									<!-- 游玩 -->
									<!-- ngIf: service.selectedCity && page == 'pois' -->
									<div class="inner recommend-pois ng-scope" ng-controller="RecommendPoisController" ng-if="service.selectedCity &amp;&amp; page == 'pois'">
										<!-- ngIf: service.recommendType == 'search' -->
										<div class="container">
											<!-- ngIf: loading -->
											<!-- ngIf: !pois.length && !loading -->
											<!-- ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/863/21/SU9WQBsFYQ/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/009/65/24/86/48" alt=""><span class="ng-binding">xiaotian-cheng</span>
															<p class="ng-binding">不太确定这个到底好不好玩，只是测试一下，看看效果如何。还不错啊</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">朱家角</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">15%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/1831/1/QEFWQxoGZ0s/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/004/95/43/13/48" alt=""><span class="ng-binding">planneruser</span>
															<p class="ng-binding">jrkojsggskfdjgkjiofdjkjgjdfjgodfkgggggggggggg...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">外滩</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">47%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/user/863/20/SU9WQBoAaA/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/001/24/91/28/48?v=1477353270" alt=""><span class="ng-binding">大大田心</span>
															<p class="ng-binding">松江虽然在上海郊区，但地铁很方便，九号线直达，以前就是个乡下地方，现在发展越来越好。可以玩...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">松江</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">9%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/168/58/145071/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/006/61/19/14/48?v=1440742374" alt=""><span class="ng-binding">my动力</span>
															<p class="ng-binding">赶在黄昏前，我来走一回，一来一回，满满的人气，不愧为中国第一步行街。此时34度。到夜就超级...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">南京路</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">18%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/863/19/SU9WQxMDYQ/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/009/62/33/36/48?v=1500886854" alt=""><span class="ng-binding">小黄冠去旅行</span>
															<p class="ng-binding">东方明珠广播电视塔，位于上海市浦东陆家嘴，与外滩隔黄浦江相望，原名上海广播电视塔，上海市民...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">东方明珠电视塔</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">33%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/user/863/19/SU9WQxMCYw/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">奉贤</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">2%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/1767/39/QE5TRRkOZE0/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/001/67/76/36/48" alt=""><span class="ng-binding">谁说宝儿不是宝</span>
															<p class="ng-binding">商业气息过于浓烈的地方，游客来看看就好了，体会一下石库门，本地人都不来。</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">田子坊</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">16%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/863/20/SU9WQBoBaA/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic3.qyer.com/avatar/007/51/53/57/48?v=1490517495" alt=""><span class="ng-binding">常棣</span>
															<p class="ng-binding">适合亲子游，上海学生应该都去过</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">上海科技馆</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">3%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/user/863/20/SU9WQBoAYw/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/005/83/84/76/48?v=1463733443" alt=""><span class="ng-binding">SIPO_小胖鱼</span>
															<p class="ng-binding">在梅赛德斯奔驰文化中心附近。中国馆很大～</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">世博文化中心</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">5%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/user/863/20/SU9WQBoBZw/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic4.qyer.com/avatar/007/51/53/57/48?v=1490517495" alt=""><span class="ng-binding">常棣</span>
															<p class="ng-binding">在上海看动物的首选地，里面也有办婚宴的</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">上海动物园</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">1%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic1.qyer.com/album/user/863/19/SU9WQxMDaA/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic1.qyer.com/avatar/008/31/86/90/48?v=1501732070" alt=""><span class="ng-binding">sunrl64</span>
															<p class="ng-binding">去过很多上海的小镇，感觉枫泾小镇最有味道。门票指的是博物馆，而不是小镇。如果去小镇逛，是不...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">枫泾</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">1%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: !loading -->
											<article ng-repeat="poi in pois" ng-if="!loading" class="ng-scope">
												<div class="image" ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 1)">
													<div class="image__lmimg" style="background-image:url(https://pic.qyer.com/album/user/863/22/SU9WQBgCaA/index/300_200),url(//common3.qyerstatic.com/plan/mobile/shared/img/default_pic/400x300/poi_poi.jpg)"></div>
													<!-- ngIf: poi.comment&&poi.comment.length -->
													<div class="comment ng-scope" ng-if="poi.comment&amp;&amp;poi.comment.length">
														<div class="poitext"><img src="http://pic2.qyer.com/avatar/009/78/06/19/48?v=1504773192" alt=""><span class="ng-binding">七叶之伤</span>
															<p class="ng-binding">其实不是很大，展品也不是太多，瓷器和青铜和安徽博物馆差不多，就是钱币和玉多一点。文创做的没...</p>
														</div>
													</div>
													<!-- end ngIf: poi.comment&&poi.comment.length -->
												</div>
												<!-- ngIf: poi.catetypeid != 1000 && poi.isrecommend -->
												<!-- <span class="lastminute" ng-if="poi.lm">折扣</span> -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<div class="title">
													<div class="inner">
														<h1 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-class="{true:'double-line'}[poi.catetypeid == 1000]" class="ng-binding">上海博物馆</h1>
														<!-- ngIf: poi.catetypeid != 1000 -->
														<h2 ng-click="viewDetails($event, (poi.catetypeid == 1000 ? poi.pid : poi.id), poi.catetypeid == 1000, 2)" ng-if="poi.catetypeid != 1000" class="ng-binding ng-scope">&nbsp;</h2>
														<!-- end ngIf: poi.catetypeid != 1000 -->
														<!-- ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
														<a href="#" class="iconfont ng-scope" ng-if="poi.lat &amp;&amp; poi.lng &amp;&amp; poi.catetypeid != 1000" ng-click="showInMap($event, poi)" data-bn-ipg="Planv3-right-poi-map"></a>
														<!-- end ngIf: poi.lat && poi.lng && poi.catetypeid != 1000 -->
													</div>
												</div>
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="summary ng-scope" ng-if="poi.catetypeid != 1000">
													<div class="score">
														<!-- ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] --><span class="icon ng-scope empty-star" ng-repeat="star in [1,2,3,4,5]" ng-class="{'true':'empty-star','false':'star'}[poi.score < ($index + 1)]"></span>
														<!-- end ngRepeat: star in [1,2,3,4,5] -->
													</div>
													<div class="percentage ng-binding">4%的人选择</div>
												</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<div class="hours ng-binding ng-scope" ng-if="poi.catetypeid != 1000">平均游玩时间：1小时</div>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- ngIf: poi.catetypeid != 1000 -->
												<a href="javascript:void(0)" ng-if="poi.catetypeid != 1000" ng-click="addToPlan($event, poi);doTrackCode((service.recommendType == 'search' ? 'Planv3-right-search-addpoi' : 'Planv3-right-poi-addtoplan'))" class="add ng-scope" ng-mouseenter="addHoverHandler($event)" ng-mouseleave="addOutHandler($event)"><span class="iconfont"></span><span class="text ng-binding">添加到行程</span></a>
												<!-- end ngIf: poi.catetypeid != 1000 -->
												<!-- ngIf: poi.catetypeid == 1000 -->
												<!-- <a href="{{poi.url}}" target="_blank" data-bn-ipg="Planv3-lmpoi-overview-booking" ng-if="poi.catetypeid == 1000" class="add half" style="border-left:0"><span class="iconfont">&#xe672;</span>立即预订</a> -->
											</article>
											<!-- end ngIf: !loading -->
											<!-- end ngRepeat: poi in pois -->
											<!-- ngIf: miniLoading -->
											<!-- ngIf: pois.length > 0 && allLoaded -->
										</div>
									</div>
									<!-- end ngIf: service.selectedCity && page == 'pois' -->
									<!-- 住宿 -->
									<!-- ngIf: service.selectedCity && page == 'hotels' -->
									<!-- 城际交通 -->
									<!-- ngIf: service.selectedCity && page == 'traffics' -->
									<!-- 备选 -->
									<!-- ngIf: service.selectedCity && page == 'alternatives' -->
									<!-- 折扣 -->
									<!-- ngIf: service.selectedCity && page == 'lastminutes' -->
									<!-- 空 -->
									<!-- ngIf: !service.selectedCity -->
								</div>
								<!-- ngIf: mode == 'map' -->
							</div>
						</section>
					</div>
					<div class="scroll-wrapper scroll_top" style="left: 309px; width: 462px; height: 302px;"><div class="planner-day-details-wrapper"></div>
          <section class="planner-day-details" style="width: 462px;"><div ng-controller="DayDetailsController" class="inner ng-scope" style="padding-bottom: 0px;"><!-- ngIf: loading --><div class="details-header"><h2><a id="header-date-picker" href="#" data-help-index="10" data-help-direction="right" data-help-content="点击这里修改行程日期" class="bullink">填写日期</a></h2><div class="cities clearfix ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable" ng-model="day.city_list" ui-sortable="citySortableOptions"><!-- ngRepeat: city in day.city_list --><div class="item ng-scope" ng-repeat="city in day.city_list" ng-class="getCityClass($last, (city.tagid <= 0))" data-id="12486" data-name="厦门" style=""><span ng-click="changeSelectedCity(city)" class="ng-binding">厦门</span><div class="delimiter" ng-mouseover="showRecommendTraffic($event)" ng-mouseout="hideRecommendTraffic($event)">&gt;</div><a href="#" class="close" ng-click="removeCity($index)">删除城市</a></div><!-- end ngRepeat: city in day.city_list --><div class="item ng-scope last" ng-repeat="city in day.city_list" ng-class="getCityClass($last, (city.tagid <= 0))" data-id="11595" data-name="上海" style=""><span ng-click="changeSelectedCity(city)" class="ng-binding">上海</span><div class="delimiter" ng-mouseover="showRecommendTraffic($event)" ng-mouseout="hideRecommendTraffic($event)">&gt;</div><a href="#" class="close" ng-click="removeCity($index)">删除城市</a></div><!-- end ngRepeat: city in day.city_list --><!-- ngIf: !day.city_list || day.city_list.length === 0 --><!-- ngIf: day.city_list.length < 10 --><div class="item add-city ng-scope" ng-if="day.city_list.length < 10"><span ng-click="addCity($event)" ng-show="day.city_list&amp;&amp;day.city_list.length<10" data-help-index="1" data-help-direction="right" data-help-content="点击这里添加城市，将鼠标移到城市上，可以删除城市，拖动城市可以换序">+增加城市</span><input class="input-city" placeholder="请输入城市..." type="text"></div><!-- end ngIf: day.city_list.length < 10 --></div><div class="controls" ng-class="{true:'mini'}[service.mode == 'map']" style=""><!-- ngIf: total_hours == 0 --><!-- ngIf: total_hours > 0 --><div id="js_total_hoursBgCss" class="hours ng-binding ng-scope" ng-if="total_hours > 0" style="background-position:0px -82px">2h</div><!-- end ngIf: total_hours > 0 --><!-- ngIf: total_hours >= 11 --><!-- ngIf: total_hours >= 7 && total_hours < 11 --><!-- ngIf: total_hours < 7 --><div class="status ng-scope" ng-if="total_hours < 7">宽松</div><!-- end ngIf: total_hours < 7 --><a class="edit iconfont" href="#" slide-dropdown="editOptions" data-bn-ipg="Planv3-mid-edit" alt="编辑" data-help-index="7" data-help-direction="right" data-help-content="点击这里直接手动添加，可以自定义哦"></a><a class="recommend hotel-first" href="#" ng-click="optimizeHotel()" data-bn-ipg="Planv3-mid-recommend-hotel"><em class="iconfont"></em><span>智能推荐酒店</span></a><a class="recommend optimize-menu" href="#" slide-dropdown="recommendOptions" data-bn-ipg="Planv3-mid-recommend"><em class="iconfont"></em><span>智能优化</span><i class="triangle"></i></a><a class="recommend hotel-last" href="#" ng-click="optimizeHotel()" data-bn-ipg="Planv3-mid-recommend-hotel"><em class="iconfont"></em><span>智能推荐酒店</span></a></div><div class="recommend-traffic"><p><!-- ngIf: recommendTraffics[0].distance || recommendTraffics[0].distance == '0' --><!-- ngIf: recommendTraffics[0].percent --></p><ul><!-- ngRepeat: traffic in recommendTraffics --></ul></div><!-- <div class="recommend-traffic" ng-if="recommendTraffics.length==0"><p>坐标位置缺失。</p></div> --></div><!-- ngIf: (!service.place_list || service.place_list.length === 0) && !loading_details --><!-- ngIf: (!service.place_list || service.place_list.length === 0) && loading_details --><!-- ngIf: service.place_list.length > 0 --><div class="details-body ng-scope" ng-if="service.place_list.length > 0"><div class="select-all"><a href="#" class="checkbox">全选</a><span>全选</span></div><!-- ngIf: service.yesterday_hotel && !service.yesterday_hotel.href --><!-- ngIf: service.yesterday_hotel && service.yesterday_hotel.href --><!-- @@@@@ 前晚住宿的交通 @@@@@ --><!-- ngIf: service.yesterday_hotel && hotel_traffic[0] && !hotel_traffic[0].empty --><!-- ngIf: service.yesterday_hotel && hotel_traffic[0] && hotel_traffic[0].empty --><!-- ngIf: service.yesterday_hotel && !hotel_traffic[0] --><!-- ##### 前晚住宿的交通 ##### --><div class="places ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable" ng-model="service.place_list" ui-sortable="placeSortableOptions"><!-- ngRepeat: place in service.place_list --><div class="place-wrapper ng-scope" ng-repeat="place in service.place_list"><div class="checkbox-wrapper"><a href="#" class="checkbox" data-id="484127527" data-type="1" data-index="0">选择</a></div><a class="place" ng-click="viewDetails($event, place, 'view', (place.type == 2 &amp;&amp; place.pid > 0))" href="#" data-bnb="0" target="_blank" ng-mouseenter="service.startPinAnimation($event, place.id)" ng-mouseleave="service.stopPinAnimation($event, place.id)" ng-class="{true:'active'}[place.active]"><div class="pin poi" ng-class="getCardIconClass(place.type,place.tripmode,place.cateid)"><!-- ngIf: !$first --><div class="iconfont ng-binding" ng-class="{false: 'black'}[place.tripmode == 7  || place.sameday]" ng-bind-html="getCardIcon(place)"></div><!-- ngIf: !$last --><div class="dotted ng-scope" style="bottom: -18px;" ng-if="!$last"></div><!-- end ngIf: !$last --></div><!-- ngIf: place.type === 3 && place.tripmode !== 7 --><!-- ngIf: place.type === 3 && place.tripmode === 7 && place.display == 'from' --><!-- ngIf: place.type === 3 && place.tripmode === 7 && place.display == 'to' --><!-- ngIf: place.type === 3 && place.tripmode === 7 && (place.display == 'from') && !(place.from.starthours == -1 && place.from.startminutes == -1) --><!-- ngIf: place.type === 3 && place.tripmode === 7 && (place.display == 'to') && !(place.to.endhours == -1 && place.to.endminutes == -1) --><!-- ngIf: place.type !== 3 --><h3 ng-if="place.type !== 3" ng-class="{true: 'one-line'}[place.starthours < 0 &amp;&amp; place.endhours < 0 &amp;&amp; !place.spend &amp;&amp; place.cateid!=1000]" class="ng-scope one-line"><!-- ngIf: place.type == 3 && place.pair_id == 0 --><!-- ngIf: place.type == 3 && place.pair_id > 0 --><span ng-bind-html="place.cn_name || place.en_name" class="ng-binding">朱家角</span><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.textsids --></h3><!-- end ngIf: place.type !== 3 --><!-- ngIf: place.type !== 3 --><p ng-if="place.type !== 3" class="ng-scope"><!-- ngIf: place.type == 1 && (place.starthours > -1 || place.startminutes > -1) --><!-- ngIf: place.type == 3 && (place.starthours > -1 || place.startminutes > -1) --><!-- ngIf: place.starthours > -1 --><!-- ngIf: place.starthours == -1 && place.startminutes > -1 --><!-- ngIf: place.type == 1 && (place.starthours > -1 || place.startminutes > -1) && (place.endhours > -1 || place.endminutes > -1) --><!-- ngIf: place.type == 3 && place.endhours > -1 --><!-- ngIf: place.endhours > -1 --><!-- ngIf: place.endhours == -1 && place.endminutes > -1 --><!-- ngIf: (place.starthours > -1 || (place.type == 3 && place.endhours > -1)) && place.price --><!-- ngIf: place.spend && place.cateid != 1000 && place.type == 2 --><!-- ngIf: place.price && (place.cateid == 1000 || place.category == 1000) --><!-- ngIf: place.ticketcount > 1 --></p><!-- end ngIf: place.type !== 3 --><span class="delete iconfont" ng-click="deletePlace($event, $index)"></span><!-- ngIf: $index > 0 --><!-- ngIf: $index == 0 --><div data-id="484127527" data-type="1" data-index="0" class="edit iconfont ng-scope" slide-dropdown="placeOptions" ng-if="$index == 0" data-help-index="8|11" data-help-step="2|1" data-help-direction="right|right" data-help-content="点击这里，然后选择“添加备注”|点击这里，然后选择“移动到”"></div><!-- end ngIf: $index == 0 --></a><!-- ngIf: !$last && traffic_list.length > 0 && !traffic_list[$index].empty --><div class="traffic ng-scope" ng-if="!$last &amp;&amp; traffic_list.length > 0 &amp;&amp; !traffic_list[$index].empty" ng-click="viewPath($index)" ng-class="{active: viewPathIndex == $index, disabled: place.type == 3 &amp;&amp; place.tripmode != 4 &amp;&amp; place.tripmode != 7 &amp;&amp; service.place_list[$index + 1].type == 3 &amp;&amp; service.place_list[$index + 1].tripmode != 4 &amp;&amp; service.place_list[$index + 1].tripmode != 7}" data-bn-ipg="Planv3-mid-p2p-click" data-help-index="6" data-help-direction="right" data-help-content="大力点这里哦。（位置缺失的情况下，无法查询交通方案）" data-help-left-offset="-20"><div class="icon ng-binding"></div><!-- ngIf: traffic_list[$index].distance --><span ng-if="traffic_list[$index].distance" class="ng-binding ng-scope">33.3km</span><!-- end ngIf: traffic_list[$index].distance --><!-- ngIf: !traffic_list[$index].distance --><span class="right">选择交通方案</span></div><!-- end ngIf: !$last && traffic_list.length > 0 && !traffic_list[$index].empty --><!-- ngIf: !$last && traffic_list.length > 0 && traffic_list[$index].empty --><!-- ngIf: !$last && traffic_list.length === 0 --></div><!-- end ngRepeat: place in service.place_list --><div class="place-wrapper ng-scope" ng-repeat="place in service.place_list"><div class="checkbox-wrapper"><a href="#" class="checkbox" data-id="484127609" data-type="1" data-index="1">选择</a></div><a class="place" ng-click="viewDetails($event, place, 'view', (place.type == 2 &amp;&amp; place.pid > 0))" href="#" data-bnb="0" target="_blank" ng-mouseenter="service.startPinAnimation($event, place.id)" ng-mouseleave="service.stopPinAnimation($event, place.id)" ng-class="{true:'active'}[place.active]"><div class="pin poi" ng-class="getCardIconClass(place.type,place.tripmode,place.cateid)"><!-- ngIf: !$first --><div class="dotted ng-scope" style="top: -16px;" ng-if="!$first"></div><!-- end ngIf: !$first --><div class="iconfont ng-binding" ng-class="{false: 'black'}[place.tripmode == 7  || place.sameday]" ng-bind-html="getCardIcon(place)"></div><!-- ngIf: !$last --></div><!-- ngIf: place.type === 3 && place.tripmode !== 7 --><!-- ngIf: place.type === 3 && place.tripmode === 7 && place.display == 'from' --><!-- ngIf: place.type === 3 && place.tripmode === 7 && place.display == 'to' --><!-- ngIf: place.type === 3 && place.tripmode === 7 && (place.display == 'from') && !(place.from.starthours == -1 && place.from.startminutes == -1) --><!-- ngIf: place.type === 3 && place.tripmode === 7 && (place.display == 'to') && !(place.to.endhours == -1 && place.to.endminutes == -1) --><!-- ngIf: place.type !== 3 --><h3 ng-if="place.type !== 3" ng-class="{true: 'one-line'}[place.starthours < 0 &amp;&amp; place.endhours < 0 &amp;&amp; !place.spend &amp;&amp; place.cateid!=1000]" class="ng-scope one-line"><!-- ngIf: place.type == 3 && place.pair_id == 0 --><!-- ngIf: place.type == 3 && place.pair_id > 0 --><span ng-bind-html="place.cn_name || place.en_name" class="ng-binding">松江</span><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.traffic_poiname --><!-- ngIf: place.textsids --></h3><!-- end ngIf: place.type !== 3 --><!-- ngIf: place.type !== 3 --><p ng-if="place.type !== 3" class="ng-scope"><!-- ngIf: place.type == 1 && (place.starthours > -1 || place.startminutes > -1) --><!-- ngIf: place.type == 3 && (place.starthours > -1 || place.startminutes > -1) --><!-- ngIf: place.starthours > -1 --><!-- ngIf: place.starthours == -1 && place.startminutes > -1 --><!-- ngIf: place.type == 1 && (place.starthours > -1 || place.startminutes > -1) && (place.endhours > -1 || place.endminutes > -1) --><!-- ngIf: place.type == 3 && place.endhours > -1 --><!-- ngIf: place.endhours > -1 --><!-- ngIf: place.endhours == -1 && place.endminutes > -1 --><!-- ngIf: (place.starthours > -1 || (place.type == 3 && place.endhours > -1)) && place.price --><!-- ngIf: place.spend && place.cateid != 1000 && place.type == 2 --><!-- ngIf: place.price && (place.cateid == 1000 || place.category == 1000) --><!-- ngIf: place.ticketcount > 1 --></p><!-- end ngIf: place.type !== 3 --><span class="delete iconfont" ng-click="deletePlace($event, $index)"></span><!-- ngIf: $index > 0 --><div data-id="484127609" data-type="1" data-index="1" class="edit iconfont ng-scope" slide-dropdown="placeOptions" ng-if="$index > 0"></div><!-- end ngIf: $index > 0 --><!-- ngIf: $index == 0 --></a><!-- ngIf: !$last && traffic_list.length > 0 && !traffic_list[$index].empty --><!-- ngIf: !$last && traffic_list.length > 0 && traffic_list[$index].empty --><!-- ngIf: !$last && traffic_list.length === 0 --></div><!-- end ngRepeat: place in service.place_list --></div><!-- @@@@@ 当晚住宿的交通 @@@@@ --><!-- ngIf: service.today_hotel && hotel_traffic[1] && !hotel_traffic[1].empty --><!-- ngIf: service.today_hotel && hotel_traffic[1] && hotel_traffic[1].empty --><!-- ngIf: service.today_hotel && !hotel_traffic[1] --><!-- ##### 当晚住宿的交通 ##### --><!-- ngIf: service.today_hotel && !service.today_hotel.href --><!-- ngIf: service.today_hotel && service.today_hotel.href --><!-- ngIf: !loading_details && !has_hotels --><div class="hotel-tip ng-scope" slide-dropdown="addHotelOptions" ng-if="!loading_details &amp;&amp; !has_hotels"><div class="icon"></div><span data-bn-ipg="Planv3-mid-nohotel-add">今天还没安排住宿，请点击添加</span></div><!-- end ngIf: !loading_details && !has_hotels --></div><!-- end ngIf: service.place_list.length > 0 --><div class="details-footer" style=""><a href="#" slide-dropdown="moveOptions" data-bn-ipg="Planv3-mid-group-moveto" style="width: 205px;"><em class="move"></em>移动到<em class="triangle"></em></a><a href="#" class="delete" data-bn-ipg="Planv3-mid-group-delete" style="width: 205px;"><em></em>删除</a><a href="#" class="close" data-bn-ipg="Planv3-mid-group-close"><em></em></a></div></div></section>
          <div class="planner-day-notes"><div ng-controller="DayNotesController" class="ng-scope"><!-- ngRepeat: note in notes --></div></div>
        </div>
						<div class="planner-day-details-wrapper">
							<div class="controls" ng-class="{true:'mini'}[service.mode == 'map']" style="left: 309px; width: 430px;">
								<!-- ngIf: total_hours == 0 -->
								<div class="hours ng-scope" ng-if="total_hours == 0"></div>
								<!-- end ngIf: total_hours == 0 -->
								<!-- ngIf: total_hours > 0 -->
								<!-- ngIf: total_hours >= 11 -->
								<!-- ngIf: total_hours >= 7 && total_hours < 11 -->
								<!-- ngIf: total_hours < 7 -->
								<div class="status ng-scope" ng-if="total_hours < 7">宽松</div>
								<!-- end ngIf: total_hours < 7 -->
								<a class="edit iconfont" href="#" slide-dropdown="editOptions" data-bn-ipg="Planv3-mid-edit" alt="编辑" data-help-index="7" data-help-direction="right" data-help-content="点击这里直接手动添加，可以自定义哦"></a>
								<a class="recommend hotel-first" href="#" ng-click="optimizeHotel()" data-bn-ipg="Planv3-mid-recommend-hotel"><em class="iconfont"></em><span>智能推荐酒店</span></a>
								<a class="recommend optimize-menu" href="#" slide-dropdown="recommendOptions" data-bn-ipg="Planv3-mid-recommend"><em class="iconfont"></em><span>智能优化</span><i class="triangle"></i></a>
								<a class="recommend hotel-last" href="#" ng-click="optimizeHotel()" data-bn-ipg="Planv3-mid-recommend-hotel"><em class="iconfont"></em><span>智能推荐酒店</span></a>
							</div>
							<div class="details-footer" style="left: 309px; width: 462px;">
								<a href="#" slide-dropdown="moveOptions" data-bn-ipg="Planv3-mid-group-moveto" style="width: 205px;"><em class="move"></em>移动到<em class="triangle"></em></a>
								<a href="#" class="delete" data-bn-ipg="Planv3-mid-group-delete" style="width: 205px;"><em></em>删除</a>
								<a href="#" class="close" data-bn-ipg="Planv3-mid-group-close"><em></em></a>
							</div>
						</div>
					
						<div class="planner-day-notes">
							<div ng-controller="DayNotesController" class="ng-scope">
								<!-- ngRepeat: note in notes -->
							</div>
						</div>
					</div>
					<div class="slider-wrapper">
						<section class="planner-slider ng-scope" ng-controller="PlannerSliderController">
							<!-- ngIf: service.slideName === 'editNote' -->
							<!-- ngIf: service.slideName === 'editHotel' -->
							<!-- ngIf: service.slideName === 'viewPOI' -->
							<!-- ngIf: service.slideName === 'viewHotel' -->
							<!-- ngIf: service.slideName === 'viewTraffic' -->
							<!-- ngIf: service.slideName === 'viewRoute' -->
						</section>
					</div>
				</div>
				<div class="planner-popup ng-scope ng-hide" ng-controller="PlannerPopupController" ng-show="service.popVisibled">
					<!-- ngIf: popName === 'flight' -->
					<!-- ngIf: popName === 'showPic' -->
				</div>
			</div>
		</div>
		<script>
			var _gaq = _gaq || [];

			// 延迟加载 ga, 因为 1：ga 比较大，2:ga 加载后，会马上请求 google ，这个操作很慢。
			setTimeout(function() {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.async = true;
				script.src = "https://static.qyer.com/qyer_ui_frame/m/js/dist/base_beacon_ga.js";
				document.getElementsByTagName("head")[0].appendChild(script);
			}, 30);
		</script>

		<script src="//common1.qyerstatic.com/plan/desktop/edit3/js/footer.f76a083c48a284c43271a9f934a40424.js"></script>
		<script type="text/javascript" src="http://maps.google.cn/maps/api/js?libraries=geometry&amp;sensor=false&amp;key=AIzaSyCFyj9mrzuoTWACoSqRy77qYr9i8O6gi9s&amp;callback=initialize"></script>
		<div class="dropdown" style="">
			<h3></h3>
			<ul></ul>
			<a class="close" href="#">关闭</a>
		</div>

		<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div><input type="text" id="dp1510832613206" class="hasDatepicker" style="display: none;">
		<div class="qui-inputAutocomplete" style="display:none;">
			<ul class="qui-inputAutocomplete-ul">
				<li class="disableDefalut">loading ... </li>
			</ul>
		</div>
		<div class="qui-inputAutocomplete" style="display:none;">
			<ul class="qui-inputAutocomplete-ul">
				<li class="disableDefalut">loading ... </li>
			</ul>
		</div><button id="__dotarckcodebutton__" style="display:none;" data-bn-ipg="Planv3-recommendhotel-option-close">dotarckcodebutton</button></body>

</html>