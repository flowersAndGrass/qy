function ajaxlogin(issynclogin, which, filename, callback, type, url, isopen) {
	var _login = {
		DEPS: ["//static.qyer.com/models/basic/js/require.js", "//static.qyer.com/models/basic/js/qyerUtil.js"],
		init: function() {
			var _this = this;
			"function" != typeof requirejs ? $.ajax({
				url: _this.DEPS[0],
				dataType: "script",
				cache: !0,
				success: function(script) {
					eval(script), _this.getQyerUtil()
				},
				error: function(e) {
					alert("加载登录模块时发生错误，请重试。")
				}
			}) : _this.getQyerUtil()
		},
		getQyerUtil: function() {
			var _this = this;
			qyerUtil && "function" == typeof qyerUtil.doLogin ? _this.doLogin() : $.ajax({
				url: _this.DEPS[1],
				dataType: "script",
				cache: !0,
				success: function(script) {
					eval(script), _this.doLogin()
				},
				error: function(e) {
					alert("加载登录模块时发生错误，请重试。")
				}
			})
		},
		doLogin: function() {
			if(qyerUtil.isLogin()) return !1;
			var e = "reg" === type ? "regist" : "login";
			pageType = "", redirectURL = url || window.location.href, callback = "function" == typeof callback ? callback : function() {}, allowClose = !0, qyerUtil.doLogin({
				page: e,
				pageType: pageType,
				redirectURL: redirectURL,
				callback: callback
			})
		}
	};
	return _login.init()
}

function pagereload() {
	location.reload()
}

function syncAfterLogin(e, t) {
	QYER.uid = e, t = t || "", jQuery.getJSON("//user.qyer.com/user_action_logininfo?xxcb=" + t + "&callback=?")
}

function isloginjump(e, t) {
	return QYER.uid > 0 ? (location.href = e, !1) : (e = "//bbs.qyer.com/" + e, void ajaxlogin(0, "", "bbsajax.php", "", "", e))
}

function getAjaxMsg(e) {
	"object" == typeof e && 1 == e.status && (jQuery("body").append(e.script), setTimeout(function() {
		window.location.href = e.url
	}, 2e3))
}

function ajaxLogout() {
	tips.show("退出登录中..."), jQuery.ajax({
		type: "get",
		dataType: "jsonp",
		url: "//login.qyer.com/login.php?action=ajaxLogout&callback=?"
	})
}

function islogin(e, t, i) {
	t = t || ajaxlogin;
	var n = "/api.php?action=islogin&rnd=" + +new Date;
	if(!i) return void jQuery.getJSON(n, function(i) {
		i || t && t(), "ok" == i.result ? ("undefined" != typeof comment && comment.setUid(i.data.uid), e && e(i.data)) : t && t(i.data)
	});
	var o = !1;
	return jQuery.ajax({
		url: n,
		dataType: "json",
		async: !1,
		success: function(i) {
			i || (t && t(), o = !1), "ok" == i.result ? (e && e(i.data), o = !0) : (t && t(i.data), o = !1)
		}
	}), o
}

function yjbGetCookie(e) {
	for(var t = document.cookie.split("; "), i = 0; i < t.length; i++) {
		var n = t[i].split("=");
		if(n[0] == e) return unescape(n[1])
	}
}

function yjbSetCookie(e, t) {
	var i = 1,
		n = new Date;
	n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";domain=.qyer.com;expires=" + n.toGMTString()
}

function closeAppPup() {
	yjbSetCookie("apppopup", "1"), jQuery("#apppopup_bg").hide(), pupclose()
}

function spam_text_filter() {
	var e = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim;
	jQuery(".qyer_spam_text_filter a").each(function() {
		(jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.cn") == -1 && (jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.com") == -1 && (jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.net") == -1 || jQuery(this).replaceWith(jQuery(this).html())
	}), jQuery(".qyer_spam_text_filter").each(function() {
		var t = jQuery(this).html();
		t = t.replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim, "");
		var i = t.match(/\<img[\s\S]*?\>/gim);
		if(null != i)
			for(var n = 0; n < i.length; n++) t = t.replace(i[n], "[imgimg]" + n + "[/imgimg]");
		if(t = t.replace(e, ""), null != i)
			for(var n = 0; n < i.length; n++) t = t.replace("[imgimg]" + n + "[/imgimg]", i[n]);
		jQuery(this).html(t)
	})
}

function loadjscssfile(e, t) {
	if("js" == t) {
		var i = document.createElement("script");
		i.setAttribute("type", "text/javascript"), i.setAttribute("src", e)
	} else if("css" == t) {
		var i = document.createElement("link");
		i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e)
	}
	"undefined" != typeof i && document.getElementsByTagName("head")[0].appendChild(i)
}

function getCookie(e) {
	var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
	return null != t ? unescape(t[2]) : null
}

function setCookie(e, t) {
	document.cookie = e + "=" + escape(t) + "; path=/;domain=ask.qyer.com"
}

function getABFromGuid() {
	var e = new RegExp("(^| )_guid=([^;]*)(;|$)", "i"),
		t = document.cookie.match(e),
		i = "";
	if(null != t && t.length > 1 && (i = t[2]), "" == i) return "b";
	var n = i.substr(i.length - 1, 1).toLowerCase(),
		o = parseInt("0x" + n);
	return o > 7 ? "b" : "a"
}

function amendUrl(e, t) {
	if("" == t) return e;
	var i = "",
		n = e.indexOf("#");
	return n != -1 && (i = e.substr(n), e = e.substr(0, n)), e = e.indexOf("?") == -1 ? e + "?" + t : e + "&" + t, e + i
}

function follow(e) {
	function t(e, t, i) {
		t ? (qyerUI.message({
			msg: "成功取消关注",
			type: "true"
		}), i.attr("data-bn-ipg", "usercenter-follow")) : (qyerUI.message({
			msg: "成功关注",
			type: "true"
		}), i.attr("data-bn-ipg", "usercenter-unfollow")), i.attr("data-relate", t), "1" == e ? i.hasClass("ui_attent_btn_each") ? (i.removeClass("ui_attent_btn_each"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_each")) : (i.addClass("ui_attent_btn_each"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_each")) : i.hasClass("ui_attent_btn_yes") ? (i.removeClass("ui_attent_btn_yes"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_yes")) : (i.addClass("ui_attent_btn_yes"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_yes"))
	}
	if(QYER.uid <= 0) return ajaxlogin(), !1;
	var i = e.attr("data-uid"),
		n = e.attr("data-relate"),
		o = e.attr("data-each"),
		s = "";
	s = 1 == n ? "action=addfriend&fuid=" + i : "action=channelfriend&uid=" + i;
	var a = "/ajax.php";
	/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (a = "/bbsajax.php"), jQuery.ajax({
		type: "POST",
		url: a,
		data: s,
		dataType: "json",
		beforeSend: function(e) {},
		success: function(i) {
			"ok" == i.result ? (n = 0 == n ? 1 : 0, t(o, n, e)) : t(o, n, e)
		}
	})
}

function weiboshare(e, t, i) {
	var n = t;
	i = i || "";
	var o = "http://service.weibo.com/share/share.php?appkey=2254065920&title=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(n) + "&ralateUid=1721449743";
	i && (o += "&pic=" + encodeURIComponent(i)), window.open(o, "_blank", "scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes,")
}

function tracker_request(e) {
	var t = encodeURIComponent(window.location.href),
		i = "//qt.qyer.com/beacon.gif?type=click&category=" + encodeURIComponent(e) + "&campaign=inpage&",
		n = encodeURIComponent(document.referrer),
		o = jQuery.cookie("_guid") || "",
		s = jQuery.cookie("_uid") || "",
		a = jQuery.cookie("_session") || "";
	if(i += "referer=" + t + "&referer_link=" + n + "&guid=" + o + "&user_id=" + s + "&session=" + a, "https:" !== document.location.protocol) {
		var r = new Image;
		r.src = i
	}
}

function flash(e, t, i) {
	if("" == e) return "";
	t = t ? t : 590, i = i ? i : 410;
	var n = "";
	return n += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + t + '" height="' + i + '">', n += '<param name="movie" value="' + e + '">', n += '<param name="quality" value="high">', n += '<param name="wmode" value="transparent">', n += '<param name="menu" value="false">', n += '<embed src="' + e + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + t + '" height="' + i + '" wmode="transparent" ></embed>', n += "</object>"
}

function showFlash(e, t, i, n) {
	i = i ? i : 590, n = n ? n : 410;
	var o = "";
	o += "<style>", o += ".popup_video_bg{background:url(//static.qyer.com/images/plan2/popup_video_bg.png);}", o += "</style>", o += flash(t, i, n), jQuery("#" + e).html(o), qyerUI.popup.show({
		id: e,
		width: i
	}), jQuery(".ui_popup_bg").addClass("popup_video_bg"), jQuery(".ui_popup_close").css({
		top: -30,
		right: -30
	})
}

function showJnFlash(e) {
	showFlash(e, "http://tv.sohu.com/upload/swf/20130917/PlayerShell.swf?autoplay=true&skinNum=1&api_key=1b047048287fa2a7ca1370e2f19a3f93&id=60435608&topBar=0&showRecommend=0&shareBtn=1&likeBtn=1&topBarFull=1&topBarNor=1&sogouBtn=0&qq-pf-to=pcqq.discussion&isListPlay=0")
}

function preLoad() {
	return this.support.loading ? ($("#cancelupload").hide(), $("#album_submit").attr("disabled", !0), void $("#album_submit").removeClass("ui_button14").addClass("ui_button14_disabled")) : (alert("你的flash版本过低，请使用 9.028 以上的版本！才能使用上传功能!"), !1)
}

function loadFailed() {
	alert("Something went wrong while loading SWFUpload. If this were a real application we'd clean up and then give you an alternative")
}

function fileQueued(e) {
	try {
		new FileProgress(e, this.customSettings.progressTarget, 1)
	} catch(t) {
		this.debug(t)
	}
}

function fileQueueError(e, t, i) {
	try {
		if(t === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) return alert("一次上传文件过多，" + (0 == i ? "已经不能再上传了！" : "你还可以" + (i > 1 ? "上传 " + i + "张照片" : "张照片"))), !1;
		if(t == -240) return !1;
		switch(t) {
			case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
				tips.show("支持jpg、png、jpeg、bmp，图片大小５M以内"), this.debug("Error Code: File too big, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
				tips.show("不能上传0字节的文件"), this.debug("Error Code: Zero byte file, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
				tips.show("上传文件类型不符合"), this.debug("Error Code: Invalid File Type, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			default:
				this.debug("Error Code: " + t + ", File name: " + e.name + ", File size: " + e.size + ", Message: " + i)
		}
		return !1
	} catch(n) {
		this.debug(n)
	}
}

function fileDialogComplete(e, t) {
	try {
		t > 0 && ($("#cancelupload").show(), $("#album_submit").attr("disabled", !0), $("#album_submit").removeClass("ui_button14").addClass("ui_button14_disabled"), this.startUpload())
	} catch(i) {
		console.log("err"), this.debug(i)
	}
}

function uploadStart(e) {
	return !0
}

function uploadProgress(e, t, i) {
	try {
		var n = Math.ceil(t / i * 100);
		new FileProgress(e, this.customSettings.progressTarget, 2, n)
	} catch(o) {
		this.debug(o)
	}
}

function uploadSuccess(file, serverData) {
	var jsonData;
	eval("jsonData=" + serverData);
	var result = jsonData.result;
	if("ok" != result) tips.show(jsonData.data.msg);
	else {
		$("#_js_u_set_data_edit").hide(), $(".container").hide(), $(".js_button").hide();
		var img_src = jsonData.data.pic_url + "?strr=" + Math.random(),
			str = '<div class="jc-demo-box">';
		str += '<img src="' + img_src + '" id="target" alt="[Jcrop Example]" />', str += '<div id="preview-pane">', str += '<div class="preview-container">', str += '<img style="display:none;" src="' + img_src + '" class="jcrop-preview" alt="Preview" />', str += "</div>", str += "</div>", $(".jc-demo-box").replaceWith(str), setTimeout(function() {
			initjcrop(), $(".jcrop-preview").show(), $(".js_button").show()
		}, 500), $(".container").show()
	}
}

function uploadError(e, t, i) {
	try {
		switch(t) {
			case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
				tips.show(i), this.debug("Error Code: HTTP Error, File name: " + e.name + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
				tips.show(i), this.debug("Error Code: Upload Failed, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.IO_ERROR:
				tips.show(i), this.debug("Error Code: IO Error, File name: " + e.name + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
				tips.show(i), this.debug("Error Code: Security Error, File name: " + e.name + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
				tips.show(i), this.debug("Error Code: Upload Limit Exceeded, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
				tips.show(i), this.debug("Error Code: File Validation Failed, File name: " + e.name + ", File size: " + e.size + ", Message: " + i);
				break;
			case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
				0 === this.getStats().files_queued;
				break;
			case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
				tips.show(i);
				break;
			default:
				tips.show("Unhandled Error: " + t), this.debug("Error Code: " + t + ", File name: " + e.name + ", File size: " + e.size + ", Message: " + i)
		}
	} catch(n) {
		this.debug(n)
	}
}

function uploadComplete(e) {
	0 === this.getStats().files_queued && ($("#album_submit").attr("disabled", !1), $("#album_submit").removeClass("ui_button14_disabled").addClass("ui_button14"))
}

function queueComplete(e) {}
jQuery.postJSON = function(e, t, i) {
	return jQuery.ajax({
		type: "POST",
		url: e,
		data: t,
		dataType: "json",
		success: i
	})
};
var qyerUI = {
	version: "0.1"
};
! function(e) {
	function t() {
		i || e("input[placeholder], textarea[placeholder]").each(function() {
			for(var t = !1, i = 0; i < n.length; i++) this == n[i] && (t = !0);
			if(!t) {
				n.push(this);
				var o = e(this).attr("placeholder");
				"" == e(this).val() ? e(this).val(o).css("color", "#959595") : e(this).val() == o && e(this).css("color", "#959595"), e(this).on("focus", function() {
					e(this).val() == o && e(this).val("").css("color", "")
				}), e(this).on("blur", function() {
					"" == e(this).val() && e(this).val(o).css("color", "#959595")
				})
			}
		})
	}
	var i = "placeholder" in document.createElement("input"),
		n = [];
	qyerUI.placeholder = t, window.fixPlaceholder = t
}(jQuery), jQuery(function() {
		qyerUI.placeholder()
	}),
	function(e) {
		function t() {
			return e("html").css({
				overflow: "",
				height: ""
			}), e("body").css({
				overflow: "",
				height: ""
			}), e(".ui_fullpupBox_bg").hide(), o = !1, !1
		}

		function i(t) {
			o && e("body").append(s), o = !1, e("html").css({
				overflow: "hidden",
				height: e(window).height()
			}), e("body").css({
				overflow: "hidden",
				height: e(window).height()
			}), e(".ui_fullpupBox_bg").css({
				display: "block",
				height: e(window).height()
			}), e(".ui_fullpupBox").css({
				width: t
			}), e(".ui_fullpupBox_main").text("")
		}
		var n = {},
			o = !0,
			s = "<div class='ui_fullpupBox_bg'><div class='ui_fullpupBox'><div class='ui_fullpupBox_main'></div></div></div>";
		e(document).on("click", ".ui_fullpupBox_close", function() {
			t()
		}), n.ajax = function(t) {
			var n = t.url,
				o = t.width;
			i(o), e.get(n, function(t) {
				e(".ui_fullpupBox_main").html(t), e(".ui_fullpupBox_head").css({
					width: o
				})
			})
		}, n.show = function(t) {
			var n = t.id,
				o = t.width;
			i(o);
			var s = e("#" + n).html();
			e(".ui_fullpupBox_main").html(s), e(".ui_fullpupBox_head").css({
				width: o
			})
		}, qyerUI.fullpup = n
	}(jQuery),
	function(e) {
		function t() {
			e(".ui_popup_bg").fadeOut(300)
		}

		function i(i, n) {
			s && (e("body").append(a), e(".ui_popup_close").on("click", function() {
				t()
			})), s = !1, i = parseInt(i, 10), e(".ui_popup_bg").css({
				height: e(document).height()
			}).stop(!0, !0).fadeIn(300), e(".ui_popup").css({
				width: i,
				top: e(document).scrollTop()
			}), e(".ui_popup_main").text(""), e(".ui_popup_close").hide(), "show" == n && e(".ui_popup_close").show()
		}

		function n() {
			var t = e(window).height(),
				i = e(".ui_popup").height(),
				n = (t - i) / 2;
			n = n < 20 ? 20 : n, e(".ui_popup").css("margin-top", n)
		}
		var o = {},
			s = !0,
			a = '<div class="ui_popup_bg"><div class="ui_popup"><p class="ui_popup_close" title="关闭"></p><div class="ui_popup_main"></div></div></div>';
		o.pupclose = t, o.start = i, o.ajax = function(t) {
			if("object" == typeof t) var o = t.url,
				s = t.width || 500,
				a = t.isclose || "show",
				r = t.callback || !1;
			i(s, a), e.get(o, function(t) {
				e(".ui_popup_main").html(t), "function" == typeof r && r(), n()
			})
		}, o.show = function(t) {
			if("object" == typeof t) var o = t.id,
				s = t.width || 500,
				a = t.isclose || "show";
			i(s, a);
			var r = e("#" + o).html();
			e(".ui_popup_main").html(r), n()
		}, o.showHtml = function(t) {
			if("object" == typeof t) var o = t.html,
				s = t.width || 500,
				a = t.isclose || "show";
			i(s, a), e(".ui_popup_main").html(o), n()
		}, qyerUI.popup = o
	}(jQuery),
	function() {
		function e() {
			return jQuery(".ui_pupBox_bg").hide(), n = !1, !1
		}

		function t(e) {
			n && jQuery("body").append(o), n = !1, e = parseInt(e, 10), jQuery(".ui_pupBox_bg").css({
				display: "block",
				height: jQuery(document).height()
			}), jQuery(".ui_pupBox").css({
				width: e + 2,
				top: jQuery(document).scrollTop()
			}), jQuery(".ui_pupBox_main").text(""), jQuery(".ui_pupBox_close").show()
		}
		var i = {},
			n = !0,
			o = "<div class='ui_pupBox_bg'><div class='ui_pupBox'><div class='ui_pupBox_close'></div><div class='ui_pupBox_main'></div></div></div>";
		window.pupclose = e, i.start = t, i.ajax = function(i, n, o) {
			var s = "show",
				a = typeof i;
			"object" == a ? (url = i.url, n = i.width, s = i.closebtn, o = i.cb) : url = i, t(n), jQuery.get(url, function(e) {
				if(jQuery(".ui_pupBox_main").html(e), "function" == typeof o) try {
					o()
				} catch(t) {}
			}), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == s && jQuery(".ui_pupBox_close").hide()
		}, i.show = function(i, n) {
			var o = "show",
				s = typeof i;
			"object" == s ? (id = i.id, n = i.width, o = i.closebtn) : id = i, t(n);
			var a = jQuery("#" + id).html();
			jQuery(".ui_pupBox_main").html(a), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == o && jQuery(".ui_pupBox_close").hide()
		}, i.showHtml = function(i, n) {
			var o = "show",
				s = typeof i;
			"object" == s ? (html = i.html, n = i.width, o = i.closebtn) : html = i, t(n), jQuery(".ui_pupBox_main").html(html), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == o && jQuery(".ui_pupBox_close").hide()
		}, window.popup = i
	}(),
	function(e) {
		function t(t, n) {
			i && (e("body").append("<textarea id='js_autoheight_clone'></textarea>"), i = !1);
			var o = e("#js_autoheight_clone");
			o.width(e(t).width()), o.val(e(t).val()), o.css("font-size", n.fontSize), o.css("line-height", n.lineHeight), setTimeout(function() {
				var i = o.get(0).scrollHeight;
				e(t).height(i)
			}, 1)
		}
		var i = !0;
		qyerUI.autoheight = t
	}(jQuery),
	function(e) {
		function t(t) {
			if("object" == typeof t) {
				var n = t.msg || "操作已成功！",
					o = t.type || "true",
					s = t.timeout || 2e3;
				clearTimeout(i);
				var a = document.getElementById("mod_message"),
					r = document.getElementById("mod_message_cont");
				if(!a) {
					var l = document.createElement("div");
					l.id = "mod_message";
					var u = document.createElement("p");
					u.id = "mod_message_cont", l.appendChild(u), document.body.appendChild(l), a = document.getElementById("mod_message"), r = document.getElementById("mod_message_cont")
				}
				r.className = o, r.innerHTML = n, a.style.display = "block";
				var c = a.offsetWidth,
					d = document.body.offsetWidth,
					p = (d - c) / 2;
				a.style.left = p + "px", "stop" != s && (i = setTimeout(function() {
					e(a).slideUp()
				}, s))
			}
		}
		var i;
		qyerUI.message = t
	}(jQuery);
var process_submit = function() {
	var e = function() {
		this.id = null, this.rmclass = null, this.addclass = null, this.isval = !0, this.before = function(e, t, i, n, o) {
			this.id = e, this.rmclass = t, this.addclass = i, n = n || "提交中...", "html" == o && (this.isval = !1), this.isval ? jQuery("#" + e).removeClass(t).addClass(i).val(n) : jQuery("#" + e).removeClass(t).addClass(i).html(n)
		}, this.after = function(e) {
			this.isval ? jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).val(e) : jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).html(e)
		}
	};
	return new e
}();
popup.coast = function(e, t, i, n) {
	function o() {
		jQuery(".ui_coast").fadeOut(500), jQuery(".ui_coast").remove()
	}
	e = e || 400, i.text = i.text || "感谢你的分享，让其他穷游er看到了你在这里留下的回忆。";
	var s = '<div class="ui_coast"><p class="ui_coast_cnt"><img src="//static.qyer.com/images/common/tpl/icon_true.png" width="34" height="34" alt="" class="ui_coast_img" />' + i.text + '</p><ul class="ui_coast_num clearfix">';
	if(void 0 != i.credits1 && (s = s + "<li>经验值<span>" + i.credits1 + "</span></li>"), void 0 != i.credits2 && (s = s + "<li>贡献<span>" + i.credits2 + "</span></li>"), "undefined" != typeof n) switch(n) {
		case "warn":
			s = s.replace(/icon_true.png/, "icon_warn.png");
			break;
		case "error":
			s = s.replace(/icon_true.png/, "icon_error32.png")
	}
	s += "</ul></div>", jQuery("body").append(s);
	var a = jQuery(window).width(),
		r = jQuery(window).height(),
		l = jQuery(".ui_coast").outerHeight(),
		u = e + 42,
		c = (a - u) / 2,
		d = (r - l) / 2 + jQuery(document).scrollTop(),
		p = 10;
	if(t)
		if(t = jQuery("#" + t), t.size() > 0) {
			var h = t.offset(),
				f = t.outerWidth(),
				_ = t.outerHeight(),
				g = h.top - l - p,
				m = h.left - (u - f) / 2;
			a - f - m + p < u ? (m = a - u - p, h.top - jQuery(document).scrollTop() < l ? (g = h.top + _ + p, jQuery(".ui_coast").css({
				width: e,
				left: m,
				top: g
			}).show()) : jQuery(".ui_coast").css({
				width: e,
				left: m,
				top: g
			}).show()) : h.top - jQuery(document).scrollTop() < l ? (g = h.top + _ + p, m < 10 && (m = 10), jQuery(".ui_coast").css({
				width: e,
				left: m,
				top: g
			}).show()) : (m < 10 && (m = 10), jQuery(".ui_coast").css({
				width: e,
				left: m,
				top: g
			}).show())
		} else jQuery(".ui_coast").css({
			width: e,
			left: c,
			top: d
		}).show();
	else jQuery(".ui_coast").css({
		width: e,
		left: c,
		top: d
	}).show();
	window.setTimeout(o, 2e3)
}, jQuery(function(e) {
	window.uitab = function() {
		e(".ui_tab").each(function() {
			e(this).children(".ui_tab_trigger").find(".ui_tab_trigger_item").each(function(t) {
				e(this).on("click", function() {
					0 == e(this).hasClass("ui_tab_trigger_item_disabled") && (e(this).addClass("ui_tab_trigger_item_current").siblings(".ui_tab_trigger_item").removeClass("ui_tab_trigger_item_current"), e(this).parents(".ui_tab_trigger").siblings(".ui_tab_cnt").children(".ui_tab_cnt_item:eq(" + t + ")").addClass("ui_tab_cnt_item_current").siblings(".ui_tab_cnt_item").removeClass("ui_tab_cnt_item_current"))
				})
			})
		})
	}, window.uitab()
});
var tips = function() {
		var e = function() {
			this.isshow = !1, this.html = ["<div class='ui_message __XXtipsXX_' >", "", "</div>"], this.scroll_show = function() {}, this.show = function(e, t) {
				e = e || "", t = t || 2e3;
				var i = this.getobj();
				return this.isshow ? (jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), void i.html(e)) : (this.html[1] = e, jQuery("body").append(this.html.join("")), i = this.getobj(), jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), i.show(), this.isshow = !0, void setTimeout(function() {
					jQuery(i).slideUp(), tips.isshow = !1
				}, t))
			}, this.hide = function() {
				this.getobj().fadeOut(), this.isshow = !1
			}, this.getobj = function() {
				return jQuery(".__XXtipsXX_")
			}
		};
		e.prototype.confirm = function(e, t, i) {
			void 0 == i && (i = "您确定要删除吗？");
			var n = e.clientX,
				o = e.clientY,
				s = "jsdelconfirm",
				a = ['<div class="ui_delete" id="' + s + '">', '<div class="ui_delete_box">', '<div><span class="icon_doubt">' + i + "</span></div>", '<div class="ui_delete_btns">', '<input type="button" value="取消" class="ui_button_cancel" id="jsconfirmcancel" /><input type="button" id="jsconfirmok" value="确定" class="ui_button" />', "</div>", "</div>", "</div>"],
				r = jQuery("#" + s);
			r.size() <= 0 ? (jQuery("body").append(a.join("")), r = jQuery("#" + s)) : jQuery(r).find(".icon_doubt").html(i);
			var l = 91,
				u = jQuery(document).scrollTop() + o - 100;
			jQuery(r).css("top", u + "px");
			var c = jQuery(".ui_delete").width(),
				d = n,
				p = jQuery(document).scrollLeft();
			n - p < c || (d = n - c / 2);
			var h = jQuery(document).width();
			d + c > h && (d = h - c - 20), d <= 0 && (d = 20), jQuery(r).hide(), jQuery(r).css({
				left: d,
				top: u + l
			}).animate({
				height: "show",
				opacity: "show",
				top: u
			}, 200), jQuery("#jsconfirmcancel").unbind("click").click(function() {
				jQuery(r).animate({
					height: "hide",
					opacity: "hide",
					top: u + l
				}, 200)
			}), jQuery("#jsconfirmok").unbind("click").click(function(e) {
				t(), jQuery(r).animate({
					height: "hide",
					opacity: "hide",
					top: u + l
				}, 200)
			})
		};
		var t = new e;
		return jQuery(document).scroll(function() {
			t.scroll_show()
		}), t
	}(),
	_ajax = {
		ajaxurl: "/ajax.php",
		get: function(e, t, i) {
			var n = +new Date;
			jQuery.get(_ajax.ajaxurl + "?action=" + e + "&rnd=" + n, t, i)
		},
		getJSON: function(e, t, i) {
			var n = +new Date;
			jQuery.getJSON(_ajax.ajaxurl + "?action=" + e + "&rnd=" + n, t, i)
		},
		post: function(e, t, i) {
			t = jQuery.merge(t, {
				type: "POST"
			}), jQuery.post(_ajax.ajaxurl + "?action=" + e, t, i)
		}
	};
String.prototype.gbtrim = function(e, t) {
	for(var i = "", n = t || "", o = 0, s = 0; s < this.length; s++) this.charCodeAt(s) > 127 || 94 == this.charCodeAt(s) ? o += 2 : o++;
	if(o <= e) return this;
	o = 0, e = e > n.length ? e - n.length : e;
	for(var s = 0; s < this.length; s++) {
		if(this.charCodeAt(s) > 127 || 94 == this.charCodeAt(s) ? o += 2 : o++, o > e) {
			i += n;
			break
		}
		i += this.charAt(s)
	}
	return i
}, jQuery(function() {
	var e = jQuery(".auto_text").size() > 0,
		t = function() {
			jQuery("body").append("<textarea id='auto_text_shadow' style='display:block;'></textarea>")
		};
	e && t();
	var i = function(e) {
		jQuery(".auto_text").size() && t();
		var i = e || jQuery(".auto_text"),
			n = "auto_text_shadow",
			o = jQuery("#" + n);
		if(n != jQuery(i).attr("id")) {
			jQuery(o).width(jQuery(i).width());
			var s = jQuery(i).css("font-size"),
				a = jQuery(i).css("line-height"),
				r = jQuery(i).css("text-indent"),
				l = parseInt(jQuery(i).css("min-height").replace(/px/, ""));
			l = a, jQuery(o).css({
				height: "18px",
				"font-size": s,
				"text-indent": r
			});
			var u = jQuery(i).val() + "穷游";
			jQuery(o).val(u), setTimeout(function() {
				var e = jQuery(o).get(0).scrollHeight;
				e <= l && (e = l), jQuery(i).height(e)
			}, 1)
		}
	};
	jQuery(document).on("change", ".auto_text", function() {
		i(this)
	}), jQuery(document).on("keydown", ".auto_text", function() {
		i(this)
	}), jQuery(document).on("keyup", ".auto_text", function() {
		i(this)
	}), window.resizeTextareaHeight = i
});
var thiswin = this;
jQuery(function() {
	if(top == thiswin) {
		var e = window.location.href;
		if(e.indexOf("m.qyer.com") == -1 && "1" != yjbGetCookie("_surveyed") && "1" != yjbGetCookie("surveyed")) {
			var t = Math.random();
			65 == parseInt(100 * t) && (jQuery.getJSON("//feed.qyer.com/index/survey?callback=?", function(e) {
				if(e.show) {
					var t = '<div style="width:520px;"><div class="ui_pupBox_head">欢迎参与穷游调查</div><div class="ui_pupBox_content" style="background:url(//static.qyer.com/images/common/wenjuan/qyer_wenjuan_bg.png) no-repeat;padding-left:160px;"><div class="f14 p10 pb20">' + e.survey_content + '</div><div class="ui_pupBox_foot clearfix" style="padding:0;"><a class="ui_button fr" target="_blank" id="to_survey" href="' + e.survey_url + '">参与调查</a><input type="button" onclick="javascript:pupclose();" class="ui_button_cancel fr mr10" value="不参与"></div></div></div>';
					popup.showHtml(t, 520)
				}
			}), jQuery(document).on("click", "#to_survey", function() {
				var e = new Date;
				return e.setTime(e.getTime() + 31536e6), document.cookie = "surveyed=1;domain=.qyer.com;expires=" + e.toGMTString(), pupclose(), !0
			}))
		}
	}
}), jQuery(function() {
	function e(e) {
		var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
			i = window.location.search.substr(1).match(t);
		return null != i ? unescape(i[2]) : null
	}
	var t = e("targetobj");
	null != t && ("login" == t && "reg" == t || (t = "reg"), /^http:\/\/bbs\.qyer\.com\//.test(window.location.href) ? ajaxlogin(0, "", "bbsajax.php", "reload", t, window.location.href) : ajaxlogin(0, "", "ajax.php", "reload", t, window.location.href))
}), loadjscssfile(("https:" == document.location.protocol ? "//https" : "//") + "static.qyer.com/js/common/jquery.cookie.js", "js");
var jiathis_config = {
	boldNum: 0,
	siteNum: 5,
	showClose: !1,
	title: "",
	summary: " ",
	pic: "",
	data_track_clickback: !1,
	appkey: {
		tsina: "2254065920",
		tqq: "fae7e432cbfd4ae378f0e501ebb4feed",
		renren: "d5ecb574cf7e4ef7a3840898aab6fe4f",
		qzone: "fae7e432cbfd4ae378f0e501ebb4feed",
		douban: "0239fb1e9a36072606adf15bcea21572"
	},
	ralateuid: {
		tsina: "1721449743"
	},
	evt: {}
};
jQuery(function() {
		function e() {
			n.hide()
		}
		jQuery("._js_jiathis_style_share a").mouseover(function() {
			jiathis_config.title = "", jiathis_config.summary = "", jiathis_config.pic = "", jiathis_config.url = "";
			var e = jQuery(this),
				t = e.attr("data-title"),
				i = e.attr("data-summary"),
				n = e.attr("data-pic"),
				o = e.attr("data-url") || "";
			t && (t = t.replace(/&gt;/g, ">"), t = t.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), t && (jiathis_config.title = t), i && (jiathis_config.summary = i), n && (jiathis_config.pic = n), o && (jiathis_config.url = o)
		}), jQuery("._js_jiathis_style_share").mouseover(function() {
			var e = jQuery(this),
				t = e.attr("data-title"),
				i = e.attr("data-summary"),
				n = e.attr("data-pic"),
				o = e.attr("data-url") || "";
			t && (t = t.replace(/&gt;/g, ">"), t = t.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), jiathis_config.title || (jiathis_config.title = t), jiathis_config.summary || (jiathis_config.summary = i), jiathis_config.pic || (jiathis_config.pic = n), jiathis_config.url || (jiathis_config.url = amendUrl(window.location.href, o))
		});
		var t, i = jQuery(".photo_end_share_btn"),
			n = jQuery(".bbs_tools_sharelay");
		i.hover(function() {
			window.clearTimeout(t), n.show()
		}, function() {
			t = window.setTimeout(function() {
				e()
			}, 200)
		}), n.hover(function() {
			window.clearTimeout(t), jQuery(this).show()
		}, function() {
			t = window.setTimeout(function() {
				e()
			}, 200)
		}), "https:" != document.location.protocol && window.setTimeout(function() {
			loadjscssfile("http://v3.jiathis.com/code/jia.js?uid=1346345347004722", "js")
		}, 500)
	}), jQuery(document).on("click", "._js_jiathis_style_share a", function() {
		var e = jQuery(this).attr("class");
		if("jiathis_button_tsina" != e) {
			var t = jQuery(this).attr("data-url");
			t && (jiathis_config.url = amendUrl(jiathis_config.url, t))
		}
	}), jQuery(function() {
		function e() {
			t = 0, clearTimeout(n), window.setTimeout(function() {
				0 == t && jQuery(".ui_usercard").fadeOut(50)
			}, 500)
		}
		var t = 0,
			i = 0;
		jQuery(document).on("click", "._js_follow_func", function() {
			follow(jQuery(this))
		}), jQuery(document).on("click", "._jsaddmsg", function() {
			if(QYER.uid <= 0) return ajaxlogin(), !1;
			var e = jQuery(this).attr("data-uid"),
				t = jQuery(this).attr("data-relate");
			popup.ajax("/api.php?action=addmsg&oper=form&uid=" + e + "&relate=" + t, 510)
		});
		var n = 0;
		jQuery(document).on("mouseover", "._js_face_usercard,.ui_headPort", function(e) {
			if(!i) {
				var o = document.createElement("link");
				o.type = "text/css", o.rel = "stylesheet", o.href = "//static.qyer.com/css/user2/medal.css", document.body.appendChild(o), i = 1
			}
			var s = jQuery(this).attr("data-uid");
			if(void 0 == s && (s = jQuery(this).attr("alt")), t = 1, jQuery(".ui_usercard").remove(), void 0 == s) return !1;
			thiz = this;
			var a = e.pageX;
			e.pageX + 300 > jQuery(window).width() && (a = jQuery(window).width() - 300);
			var r = "/ajax.php";
			/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (r = "/bbsajax.php"), clearTimeout(n), n = setTimeout(function() {
				jQuery.get(r + "?action=usercard&uid=" + s, function(t) {
					"" != t && (jQuery("body").append(t), jQuery(".ui_usercard").css({
						width: 298,
						height: "auto",
						position: "absolute",
						left: a,
						top: e.pageY + 10,
						zIndex: 99
					}).show())
				})
			}, 300)
		}), jQuery(document).on("mouseover", ".ui_usercard", function() {
			t = 1
		}), jQuery(document).on("mouseleave", ".ui_usercard", function() {
			e()
		}), jQuery("._js_face_usercard,.ui_headPort").mouseleave(function() {
			e()
		})
	}), jQuery(document).on("click", ".ui_popup_close", function() {
		jQuery(".ui_popup_bg").removeClass("popup_video_bg")
	}), ! function(e) {
		qyerUI = window.qyerUI || {}, qyerUI.SNS = qyerUI.SNS || {}, qyerUI.SNS.share = {
			_init: function() {
				this._bindBtnEvent()
			},
			_bindBtnEvent: function() {
				e(document).on("click", "._jsclose", function() {
					pupclose()
				}), e(document).on("click", "._jsgettoken", function() {
					var t, i, n;
					t = e(this), i = t.attr("url") + "&refer=" + window.location.href, n = t.attr("notoken"), window.open(i, "newwindow", "height=450px,width=600px,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), pupclose(), t = i = n = null
				})
			},
			create: function(e) {
				document.write(this.getHTML(e))
			},
			getHTML: function(e) {
				var t = [],
					e = e || {},
					i = e.weibopublish || {},
					n = e.qqpublish || {};
				return t.push('<p class="ui_textboxShare fr ' + ("min" == e.iconSize ? "ui_textboxShareSmall" : "") + '">'), t.push('    <em class="title">' + (e.text ? e.text : "同时转发到：") + "</em>"), t.push('    <label class="weibo">'), t.push('        <input type="checkbox" name="weibopublish" class="weibopublish" flag="0" weibo="weibo" value="" onclick="qyerUI.SNS.share.onSelect(this)" id="' + (i.id || "weibopublish") + '"  notoken="' + ("0" == i.notoken ? "0" : "1") + '" '), "0" == i.notoken && i.checked && t.push(' checked="checked" '), t.push(" />"), t.push('        <span class="icon ' + ("0" == i.notoken ? "" : "iconnull") + '"></span>'), t.push("    </label>"), t.push('    <label class="qzone">'), t.push('        <input type="checkbox" name="qqpublish" class="qqpublish" flag="0" value="" weibo="qq"  onclick="qyerUI.SNS.share.onSelect(this)" id="' + (n.id || "qqpublish") + '" notoken="' + ("0" == n.notoken ? "0" : "1") + '"'), "0" == n.notoken && n.checked && t.push(' checked="checked" '), t.push(" />"), t.push('        <span class="icon ' + ("0" == n.notoken ? "" : "iconnull") + '"></span>'), t.push("    </label>"), t.push("</p>"), t.join("")
			},
			onSelect: function(t) {
				if(!QYER.uid) return t.checked = !1, void ajaxlogin();
				var i = e(t);
				if(i.is(":checked")) {
					if("1" == i.attr("notoken")) return void this._showpopup(i);
					if("0" == i.attr("flag")) {
						var n = i.attr("weibo"),
							o = i.attr("id"),
							s = i.attr("notoken");
						e.getJSON("/api.php?action=checkweibo&type=" + n, function(e) {
							if("ok" != e.result) {
								var t = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">您在我们网站的token已经过期，是否重新授权完成同步？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + s + '" weibo="' + n + '" type="button" url="//login.qyer.com/login.php?action=' + n + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + o + '" value="取消"></div></div>';
								popup.showHtml(t, 440)
							}
						}), i.attr("flag", 1)
					}
				}
			},
			_showpopup: function(e) {
				var t, i, n, o;
				t = e.attr("weibo"), i = e.attr("id"), n = e.attr("notoken"), o = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">使用此功能需绑定到穷游，现在就绑定吗？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + n + '" weibo="' + t + '" type="button" url="//login.qyer.com/login.php?action=' + t + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + i + '" value="取消"></div></div>', e.attr("checked", !1), popup.showHtml(o, 440), t = i = n = o = null
			},
			refresh: function(t) {
				var i;
				e.each(t.list, function() {
					i = e("." + this.className), i.attr({
						notoken: this.notoken,
						checked: "0" == this.notoken && this.checked,
						flag: "1"
					}), i.next()["1" == this.notoken ? "addClass" : "removeClass"]("iconnull")
				})
			}
		}, window.qyerUI.SNS.share._init()
	}(jQuery),
	function(e) {
		window.qyerUtil || (window.qyerUtil = {
			_head: null,
			_getHead: function() {
				return this._head || (this._head = document.getElementsByTagName("head")[0]), this._head
			},
			insertStyle: function(e) {
				var t = document.createElement("style");
				t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, this._getHead().appendChild(t), t = null
			},
			ajaxFillter: function(e, t, i) {
				if("object" == typeof e && e.extra && e.extra.code) switch(0 | e.extra.code) {
					case 1:
						window.qyerUtil.showAntiSpam(e.extra.msg)
				}
			},
			_showAntiSpam_isLoadCss_: !1,
			showAntiSpam: function(t) {
				function i(e) {
					return ['<div class="qui-antiSpam">', "<div>", '<div class="qui-antiSpam-dt">', '<div class="qui-antiSpam-content">', '<img src="//static.qyer.com/models/common/component/antiSpam/icon.png" />', '<p class="antiSpamP1">' + (e || "由于敏感词限制，你刚刚发布的内容需要编辑审核后才能被他人访问") + "</p>", '<p class="antiSpamP2 js_antiSpam_close">我知道了 > </p>', "</div>", "</div>", "</div>", "</div>"].join("");
				}
				window.qyerUtil._showAntiSpam_isLoadCss_ || (window.qyerUtil.insertStyle([".qui-antiSpam{position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-image:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png); z-index: 110000; overflow-y: auto; }", ".qui-antiSpam >div{display: table; height: 100%; margin: 0 auto; }", ".qui-antiSpam-dt{display: table-cell; vertical-align:middle; text-align: center; }", ".qui-antiSpam-content{border: 1px solid #ccc; width: 575px; background-color: #f5f5f5; box-shadow: 0px 0px 15px #999; }", ".qui-antiSpam-content > img{margin:50px 0px 30px 0px; }", ".qui-antiSpam-content .antiSpamP1{font-size:20px; width:337px; margin:0 auto; }", ".qui-antiSpam-content .antiSpamP2{font-size:14px; margin:20px 0px 35px 0px; color:#0074b1; cursor:pointer; }"].join("")), window.qyerUtil._showAntiSpam_isLoadCss_ = !0), e(i(t)).appendTo(document.body).find(".js_antiSpam_close").one("click", function(t) {
					e(t.currentTarget).parent().parent().parent().parent().remove()
				})
			}
		})
	}(jQuery);
var SWFUpload, swfobject;
void 0 == SWFUpload && (SWFUpload = function(e) {
		this.initSWFUpload(e)
	}), SWFUpload.prototype.initSWFUpload = function(e) {
		try {
			this.customSettings = {}, this.settings = {}, this.eventQueue = [], this.movieName = "SWFUpload_" + SWFUpload.movieCount++, this.movieElement = null, SWFUpload.instances[this.movieName] = this, this.initSettings(e), this.loadSupport(), this.swfuploadPreload() && this.loadFlash(), this.displayDebugInfo()
		} catch(t) {
			throw delete SWFUpload.instances[this.movieName], t
		}
	}, SWFUpload.instances = {}, SWFUpload.movieCount = 0, SWFUpload.version = "2.5.0 2010-01-15 Beta 2", SWFUpload.QUEUE_ERROR = {
		QUEUE_LIMIT_EXCEEDED: -100,
		FILE_EXCEEDS_SIZE_LIMIT: -110,
		ZERO_BYTE_FILE: -120,
		INVALID_FILETYPE: -130
	}, SWFUpload.UPLOAD_ERROR = {
		HTTP_ERROR: -200,
		MISSING_UPLOAD_URL: -210,
		IO_ERROR: -220,
		SECURITY_ERROR: -230,
		UPLOAD_LIMIT_EXCEEDED: -240,
		UPLOAD_FAILED: -250,
		SPECIFIED_FILE_ID_NOT_FOUND: -260,
		FILE_VALIDATION_FAILED: -270,
		FILE_CANCELLED: -280,
		UPLOAD_STOPPED: -290,
		RESIZE: -300
	}, SWFUpload.FILE_STATUS = {
		QUEUED: -1,
		IN_PROGRESS: -2,
		ERROR: -3,
		COMPLETE: -4,
		CANCELLED: -5
	}, SWFUpload.UPLOAD_TYPE = {
		NORMAL: -1,
		RESIZED: -2
	}, SWFUpload.BUTTON_ACTION = {
		SELECT_FILE: -100,
		SELECT_FILES: -110,
		START_UPLOAD: -120,
		JAVASCRIPT: -130,
		NONE: -130
	}, SWFUpload.CURSOR = {
		ARROW: -1,
		HAND: -2
	}, SWFUpload.WINDOW_MODE = {
		WINDOW: "window",
		TRANSPARENT: "transparent",
		OPAQUE: "opaque"
	}, SWFUpload.RESIZE_ENCODING = {
		JPEG: -1,
		PNG: -2
	}, SWFUpload.completeURL = function(e) {
		try {
			var t = "",
				i = -1;
			return "string" != typeof e || e.match(/^https?:\/\//i) || e.match(/^\//) || "" === e ? e : (i = window.location.pathname.lastIndexOf("/"), t = i <= 0 ? "/" : window.location.pathname.substr(0, i) + "/", t + e)
		} catch(n) {
			return e
		}
	}, SWFUpload.onload = function() {}, SWFUpload.prototype.initSettings = function(e) {
		this.ensureDefault = function(t, i) {
			var n = e[t];
			void 0 != n ? this.settings[t] = n : this.settings[t] = i
		}, this.ensureDefault("upload_url", ""), this.ensureDefault("preserve_relative_urls", !1), this.ensureDefault("file_post_name", "Filedata"), this.ensureDefault("post_params", {}), this.ensureDefault("use_query_string", !1), this.ensureDefault("requeue_on_error", !1), this.ensureDefault("http_success", []), this.ensureDefault("assume_success_timeout", 0), this.ensureDefault("file_types", "*.*"), this.ensureDefault("file_types_description", "All Files"), this.ensureDefault("file_size_limit", 0), this.ensureDefault("file_upload_limit", 0), this.ensureDefault("file_queue_limit", 0), this.ensureDefault("flash_url", "swfupload.swf"), this.ensureDefault("flash9_url", "swfupload_fp9.swf"), this.ensureDefault("prevent_swf_caching", !0), this.ensureDefault("button_image_url", ""), this.ensureDefault("button_width", 1), this.ensureDefault("button_height", 1), this.ensureDefault("button_text", ""), this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"), this.ensureDefault("button_text_top_padding", 0), this.ensureDefault("button_text_left_padding", 0), this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES), this.ensureDefault("button_disabled", !1), this.ensureDefault("button_placeholder_id", ""), this.ensureDefault("button_placeholder", null), this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW), this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.TRANSPARENT), this.ensureDefault("debug", !1), this.settings.debug_enabled = this.settings.debug, this.settings.return_upload_start_handler = this.returnUploadStart, this.ensureDefault("swfupload_preload_handler", null), this.ensureDefault("swfupload_load_failed_handler", null), this.ensureDefault("swfupload_loaded_handler", null), this.ensureDefault("file_dialog_start_handler", null), this.ensureDefault("file_queued_handler", null), this.ensureDefault("file_queue_error_handler", null), this.ensureDefault("file_dialog_complete_handler", null), this.ensureDefault("upload_resize_start_handler", null), this.ensureDefault("upload_start_handler", null), this.ensureDefault("upload_progress_handler", null), this.ensureDefault("upload_error_handler", null), this.ensureDefault("upload_success_handler", null), this.ensureDefault("upload_complete_handler", null), this.ensureDefault("mouse_click_handler", null), this.ensureDefault("mouse_out_handler", null), this.ensureDefault("mouse_over_handler", null), this.ensureDefault("debug_handler", this.debugMessage), this.ensureDefault("custom_settings", {}), this.customSettings = this.settings.custom_settings, this.settings.prevent_swf_caching && (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime(), this.settings.flash9_url = this.settings.flash9_url + (this.settings.flash9_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()), this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url), this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)), delete this.ensureDefault
	}, SWFUpload.prototype.loadSupport = function() {
		this.support = {
			loading: swfobject.hasFlashPlayerVersion("9.0.28"),
			imageResize: swfobject.hasFlashPlayerVersion("10.0.0")
		}
	}, SWFUpload.prototype.loadFlash = function() {
		var e, t, i, n, o;
		if(!this.support.loading) return void this.queueEvent("swfupload_load_failed_handler", ["Flash Player doesn't support SWFUpload"]);
		if(null !== document.getElementById(this.movieName)) return this.support.loading = !1, void this.queueEvent("swfupload_load_failed_handler", ["Element ID already in use"]);
		if(e = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder, void 0 == e) return this.support.loading = !1, void this.queueEvent("swfupload_load_failed_handler", ["button place holder not found"]);
		i = "block" !== (e.currentStyle && e.currentStyle.display || window.getComputedStyle && document.defaultView.getComputedStyle(e, null).getPropertyValue("display")) ? "span" : "div", t = document.createElement(i), n = this.getFlashHTML();
		try {
			t.innerHTML = n
		} catch(s) {
			return this.support.loading = !1, void this.queueEvent("swfupload_load_failed_handler", ["Exception loading Flash HTML into placeholder"])
		}
		return o = t.getElementsByTagName("object"), !o || o.length > 1 || 0 === o.length ? (this.support.loading = !1, void this.queueEvent("swfupload_load_failed_handler", ["Unable to find movie after adding to DOM"])) : (1 === o.length && (this.movieElement = o[0]), e.parentNode.replaceChild(t.firstChild, e), void(void 0 == window[this.movieName] && (window[this.movieName] = this.getMovieElement())))
	}, SWFUpload.prototype.getFlashHTML = function(e) {
		return "Microsoft Internet Explorer" == navigator.appName && "MSIE9.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") ? ['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url, '" />', '<param name="quality" value="high" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("") : ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url, '" />', '<param name="quality" value="high" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
	}, SWFUpload.prototype.getFlashVars = function() {
		var e, t;
		return t = this.buildParamString(), e = this.settings.http_success.join(","), ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(e), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(t), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
	}, SWFUpload.prototype.getMovieElement = function() {
		if(void 0 == this.movieElement && (this.movieElement = document.getElementById(this.movieName)), null === this.movieElement) throw "Could not find Flash element";
		return this.movieElement
	}, SWFUpload.prototype.buildParamString = function() {
		var e, t, i = [];
		if(t = this.settings.post_params, "object" == typeof t)
			for(e in t) t.hasOwnProperty(e) && i.push(encodeURIComponent(e.toString()) + "=" + encodeURIComponent(t[e].toString()));
		return i.join("&amp;")
	}, SWFUpload.prototype.destroy = function() {
		var e;
		try {
			if(this.cancelUpload(null, !1), e = this.cleanUp()) try {
				e.parentNode.removeChild(e)
			} catch(t) {}
			return window[this.movieName] = null, SWFUpload.instances[this.movieName] = null, delete SWFUpload.instances[this.movieName], this.movieElement = null, this.settings = null, this.customSettings = null, this.eventQueue = null, this.movieName = null, !0
		} catch(i) {
			return !1
		}
	}, SWFUpload.prototype.displayDebugInfo = function() {
		this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "\t", "upload_url:               ", this.settings.upload_url, "\n", "\t", "flash_url:                ", this.settings.flash_url, "\n", "\t", "flash9_url:                ", this.settings.flash9_url, "\n", "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "\t", "http_success:             ", this.settings.http_success.join(", "), "\n", "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "\t", "file_post_name:           ", this.settings.file_post_name, "\n", "\t", "post_params:              ", this.settings.post_params.toString(), "\n", "\t", "file_types:               ", this.settings.file_types, "\n", "\t", "file_types_description:   ", this.settings.file_types_description, "\n", "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n", "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "\t", "debug:                    ", this.settings.debug.toString(), "\n", "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "\t", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "\t", "button_width:             ", this.settings.button_width.toString(), "\n", "\t", "button_height:            ", this.settings.button_height.toString(), "\n", "\t", "button_text:              ", this.settings.button_text.toString(), "\n", "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "\t", "button_action:            ", this.settings.button_action.toString(), "\n", "\t", "button_cursor:            ", this.settings.button_cursor.toString(), "\n", "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "\t", "swfupload_preload_handler assigned:  ", ("function" == typeof this.settings.swfupload_preload_handler).toString(), "\n", "\t", "swfupload_load_failed_handler assigned:  ", ("function" == typeof this.settings.swfupload_load_failed_handler).toString(), "\n", "\t", "swfupload_loaded_handler assigned:  ", ("function" == typeof this.settings.swfupload_loaded_handler).toString(), "\n", "\t", "mouse_click_handler assigned:       ", ("function" == typeof this.settings.mouse_click_handler).toString(), "\n", "\t", "mouse_over_handler assigned:        ", ("function" == typeof this.settings.mouse_over_handler).toString(), "\n", "\t", "mouse_out_handler assigned:         ", ("function" == typeof this.settings.mouse_out_handler).toString(), "\n", "\t", "file_dialog_start_handler assigned: ", ("function" == typeof this.settings.file_dialog_start_handler).toString(), "\n", "\t", "file_queued_handler assigned:       ", ("function" == typeof this.settings.file_queued_handler).toString(), "\n", "\t", "file_queue_error_handler assigned:  ", ("function" == typeof this.settings.file_queue_error_handler).toString(), "\n", "\t", "upload_resize_start_handler assigned:      ", ("function" == typeof this.settings.upload_resize_start_handler).toString(), "\n", "\t", "upload_start_handler assigned:      ", ("function" == typeof this.settings.upload_start_handler).toString(), "\n", "\t", "upload_progress_handler assigned:   ", ("function" == typeof this.settings.upload_progress_handler).toString(), "\n", "\t", "upload_error_handler assigned:      ", ("function" == typeof this.settings.upload_error_handler).toString(), "\n", "\t", "upload_success_handler assigned:    ", ("function" == typeof this.settings.upload_success_handler).toString(), "\n", "\t", "upload_complete_handler assigned:   ", ("function" == typeof this.settings.upload_complete_handler).toString(), "\n", "\t", "debug_handler assigned:             ", ("function" == typeof this.settings.debug_handler).toString(), "\n", "Support:\n", "\t", "Load:                     ", this.support.loading ? "Yes" : "No", "\n", "\t", "Image Resize:             ", this.support.imageResize ? "Yes" : "No", "\n"].join(""))
	}, SWFUpload.prototype.addSetting = function(e, t, i) {
		return void 0 == t ? this.settings[e] = i : this.settings[e] = t
	}, SWFUpload.prototype.getSetting = function(e) {
		return void 0 != this.settings[e] ? this.settings[e] : ""
	}, SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
		var movieElement, returnValue, returnString;
		argumentArray = argumentArray || [], movieElement = this.getMovieElement();
		try {
			void 0 != movieElement ? (returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"), returnValue = eval(returnString)) : this.debug("Can't call flash because the movie wasn't found.")
		} catch(ex) {
			this.debug("Exception calling flash function '" + functionName + "': " + ex.message)
		}
		return void 0 != returnValue && "object" == typeof returnValue.post && (returnValue = this.unescapeFilePostParams(returnValue)), returnValue
	}, SWFUpload.prototype.selectFile = function() {
		this.callFlash("SelectFile")
	}, SWFUpload.prototype.selectFiles = function() {
		this.callFlash("SelectFiles")
	}, SWFUpload.prototype.startUpload = function(e) {
		this.callFlash("StartUpload", [e])
	}, SWFUpload.prototype.startResizedUpload = function(e, t, i, n, o, s) {
		this.callFlash("StartUpload", [e, {
			width: t,
			height: i,
			encoding: n,
			quality: o,
			allowEnlarging: s
		}])
	}, SWFUpload.prototype.cancelUpload = function(e, t) {
		t !== !1 && (t = !0), this.callFlash("CancelUpload", [e, t])
	}, SWFUpload.prototype.stopUpload = function() {
		this.callFlash("StopUpload")
	}, SWFUpload.prototype.requeueUpload = function(e) {
		return this.callFlash("RequeueUpload", [e])
	}, SWFUpload.prototype.getStats = function() {
		return this.callFlash("GetStats")
	}, SWFUpload.prototype.setStats = function(e) {
		this.callFlash("SetStats", [e])
	}, SWFUpload.prototype.getFile = function(e) {
		return "number" == typeof e ? this.callFlash("GetFileByIndex", [e]) : this.callFlash("GetFile", [e])
	}, SWFUpload.prototype.getQueueFile = function(e) {
		return "number" == typeof e ? this.callFlash("GetFileByQueueIndex", [e]) : this.callFlash("GetFile", [e])
	}, SWFUpload.prototype.addFileParam = function(e, t, i) {
		return this.callFlash("AddFileParam", [e, t, i])
	}, SWFUpload.prototype.removeFileParam = function(e, t) {
		this.callFlash("RemoveFileParam", [e, t])
	}, SWFUpload.prototype.setUploadURL = function(e) {
		this.settings.upload_url = e.toString(), this.callFlash("SetUploadURL", [e])
	}, SWFUpload.prototype.setPostParams = function(e) {
		this.settings.post_params = e, this.callFlash("SetPostParams", [e])
	}, SWFUpload.prototype.addPostParam = function(e, t) {
		this.settings.post_params[e] = t, this.callFlash("SetPostParams", [this.settings.post_params])
	}, SWFUpload.prototype.removePostParam = function(e) {
		delete this.settings.post_params[e], this.callFlash("SetPostParams", [this.settings.post_params])
	}, SWFUpload.prototype.setFileTypes = function(e, t) {
		this.settings.file_types = e, this.settings.file_types_description = t, this.callFlash("SetFileTypes", [e, t])
	}, SWFUpload.prototype.setFileSizeLimit = function(e) {
		this.settings.file_size_limit = e, this.callFlash("SetFileSizeLimit", [e])
	}, SWFUpload.prototype.setFileUploadLimit = function(e) {
		this.settings.file_upload_limit = e, this.callFlash("SetFileUploadLimit", [e])
	}, SWFUpload.prototype.setFileQueueLimit = function(e) {
		this.settings.file_queue_limit = e, this.callFlash("SetFileQueueLimit", [e])
	}, SWFUpload.prototype.setFilePostName = function(e) {
		this.settings.file_post_name = e, this.callFlash("SetFilePostName", [e])
	}, SWFUpload.prototype.setUseQueryString = function(e) {
		this.settings.use_query_string = e, this.callFlash("SetUseQueryString", [e])
	}, SWFUpload.prototype.setRequeueOnError = function(e) {
		this.settings.requeue_on_error = e, this.callFlash("SetRequeueOnError", [e])
	}, SWFUpload.prototype.setHTTPSuccess = function(e) {
		"string" == typeof e && (e = e.replace(" ", "").split(",")), this.settings.http_success = e, this.callFlash("SetHTTPSuccess", [e])
	}, SWFUpload.prototype.setAssumeSuccessTimeout = function(e) {
		this.settings.assume_success_timeout = e, this.callFlash("SetAssumeSuccessTimeout", [e])
	}, SWFUpload.prototype.setDebugEnabled = function(e) {
		this.settings.debug_enabled = e, this.callFlash("SetDebugEnabled", [e])
	}, SWFUpload.prototype.setButtonImageURL = function(e) {
		void 0 == e && (e = ""), this.settings.button_image_url = e, this.callFlash("SetButtonImageURL", [e])
	}, SWFUpload.prototype.setButtonDimensions = function(e, t) {
		this.settings.button_width = e, this.settings.button_height = t;
		var i = this.getMovieElement();
		void 0 != i && (i.style.width = e + "px", i.style.height = t + "px"), this.callFlash("SetButtonDimensions", [e, t])
	}, SWFUpload.prototype.setButtonText = function(e) {
		this.settings.button_text = e, this.callFlash("SetButtonText", [e])
	}, SWFUpload.prototype.setButtonTextPadding = function(e, t) {
		this.settings.button_text_top_padding = t, this.settings.button_text_left_padding = e, this.callFlash("SetButtonTextPadding", [e, t])
	}, SWFUpload.prototype.setButtonTextStyle = function(e) {
		this.settings.button_text_style = e, this.callFlash("SetButtonTextStyle", [e])
	}, SWFUpload.prototype.setButtonDisabled = function(e) {
		this.settings.button_disabled = e, this.callFlash("SetButtonDisabled", [e])
	}, SWFUpload.prototype.setButtonAction = function(e) {
		this.settings.button_action = e, this.callFlash("SetButtonAction", [e])
	}, SWFUpload.prototype.setButtonCursor = function(e) {
		this.settings.button_cursor = e, this.callFlash("SetButtonCursor", [e])
	}, SWFUpload.prototype.queueEvent = function(e, t) {
		var i = this;
		if(void 0 == t ? t = [] : t instanceof Array || (t = [t]), "function" == typeof this.settings[e]) this.eventQueue.push(function() {
			this.settings[e].apply(this, t)
		}), setTimeout(function() {
			i.executeNextEvent()
		}, 0);
		else if(null !== this.settings[e]) throw "Event handler " + e + " is unknown or is not a function"
	}, SWFUpload.prototype.executeNextEvent = function() {
		var e = this.eventQueue ? this.eventQueue.shift() : null;
		"function" == typeof e && e.apply(this)
	}, SWFUpload.prototype.unescapeFilePostParams = function(e) {
		var t, i, n, o = /[$]([0-9a-f]{4})/i,
			s = {};
		if(void 0 != e) {
			for(i in e.post)
				if(e.post.hasOwnProperty(i)) {
					for(t = i; null !== (n = o.exec(t));) t = t.replace(n[0], String.fromCharCode(parseInt("0x" + n[1], 16)));
					s[t] = e.post[i]
				}
			e.post = s
		}
		return e
	}, SWFUpload.prototype.swfuploadPreload = function() {
		var e;
		if("function" == typeof this.settings.swfupload_preload_handler) e = this.settings.swfupload_preload_handler.call(this);
		else if(void 0 != this.settings.swfupload_preload_handler) throw "upload_start_handler must be a function";
		return void 0 === e && (e = !0), !!e
	}, SWFUpload.prototype.flashReady = function() {
		var e = this.cleanUp();
		return e ? void this.queueEvent("swfupload_loaded_handler") : void this.debug("Flash called back ready but the flash movie can't be found.")
	}, SWFUpload.prototype.cleanUp = function() {
		var e, t = this.getMovieElement();
		try {
			if(t && "unknown" == typeof t.CallFunction) {
				this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
				for(e in t) try {
					"function" == typeof t[e] && (t[e] = null)
				} catch(i) {}
			}
		} catch(n) {}
		return window.__flash__removeCallback = function(e, t) {
			try {
				e && (e[t] = null)
			} catch(i) {}
		}, t
	}, SWFUpload.prototype.mouseClick = function() {
		this.queueEvent("mouse_click_handler")
	}, SWFUpload.prototype.mouseOver = function() {
		this.queueEvent("mouse_over_handler")
	}, SWFUpload.prototype.mouseOut = function() {
		this.queueEvent("mouse_out_handler")
	}, SWFUpload.prototype.fileDialogStart = function() {
		this.queueEvent("file_dialog_start_handler")
	}, SWFUpload.prototype.fileQueued = function(e) {
		e = this.unescapeFilePostParams(e), this.queueEvent("file_queued_handler", e)
	}, SWFUpload.prototype.fileQueueError = function(e, t, i) {
		e = this.unescapeFilePostParams(e), this.queueEvent("file_queue_error_handler", [e, t, i])
	}, SWFUpload.prototype.fileDialogComplete = function(e, t, i) {
		this.queueEvent("file_dialog_complete_handler", [e, t, i])
	}, SWFUpload.prototype.uploadResizeStart = function(e, t) {
		e = this.unescapeFilePostParams(e), this.queueEvent("upload_resize_start_handler", [e, t.width, t.height, t.encoding, t.quality])
	}, SWFUpload.prototype.uploadStart = function(e) {
		e = this.unescapeFilePostParams(e), this.queueEvent("return_upload_start_handler", e)
	}, SWFUpload.prototype.returnUploadStart = function(e) {
		var t;
		if("function" == typeof this.settings.upload_start_handler) e = this.unescapeFilePostParams(e), t = this.settings.upload_start_handler.call(this, e);
		else if(void 0 != this.settings.upload_start_handler) throw "upload_start_handler must be a function";
		void 0 === t && (t = !0), t = !!t, this.callFlash("ReturnUploadStart", [t])
	}, SWFUpload.prototype.uploadProgress = function(e, t, i) {
		e = this.unescapeFilePostParams(e), this.queueEvent("upload_progress_handler", [e, t, i])
	}, SWFUpload.prototype.uploadError = function(e, t, i) {
		e = this.unescapeFilePostParams(e), this.queueEvent("upload_error_handler", [e, t, i])
	}, SWFUpload.prototype.uploadSuccess = function(e, t, i) {
		e = this.unescapeFilePostParams(e), this.queueEvent("upload_success_handler", [e, t, i])
	}, SWFUpload.prototype.uploadComplete = function(e) {
		e = this.unescapeFilePostParams(e), this.queueEvent("upload_complete_handler", e)
	}, SWFUpload.prototype.debug = function(e) {
		this.queueEvent("debug_handler", e)
	}, SWFUpload.prototype.debugMessage = function(e) {
		var t, i, n;
		if(this.settings.debug)
			if(i = [], "object" == typeof e && "string" == typeof e.name && "string" == typeof e.message) {
				for(n in e) e.hasOwnProperty(n) && i.push(n + ": " + e[n]);
				t = i.join("\n") || "", i = t.split("\n"), t = "EXCEPTION: " + i.join("\nEXCEPTION: "), SWFUpload.Console.writeLine(t)
			} else SWFUpload.Console.writeLine(e)
	}, SWFUpload.Console = {}, SWFUpload.Console.writeLine = function(e) {
		var t, i;
		try {
			t = document.getElementById("SWFUpload_Console"), t || (i = document.createElement("form"), document.getElementsByTagName("body")[0].appendChild(i), t = document.createElement("textarea"), t.id = "SWFUpload_Console", t.style.fontFamily = "monospace", t.setAttribute("wrap", "off"), t.wrap = "off", t.style.overflow = "auto", t.style.width = "700px", t.style.height = "350px", t.style.margin = "5px", i.appendChild(t)), t.value += e + "\n", t.scrollTop = t.scrollHeight - t.clientHeight
		} catch(n) {
			alert("Exception: " + n.name + " Message: " + n.message)
		}
	}, swfobject = function() {
		function e() {
			if(!z) {
				try {
					var e = O.getElementsByTagName("body")[0].appendChild(g("span"));
					e.parentNode.removeChild(e)
				} catch(t) {
					return
				}
				z = !0;
				for(var i = L.length, n = 0; n < i; n++) L[n]()
			}
		}

		function t(e) {
			z ? e() : L[L.length] = e
		}

		function i(e) {
			if(typeof q.addEventListener != C) q.addEventListener("load", e, !1);
			else if(typeof O.addEventListener != C) O.addEventListener("load", e, !1);
			else if(typeof q.attachEvent != C) m(q, "onload", e);
			else if("function" == typeof q.onload) {
				var t = q.onload;
				q.onload = function() {
					t(), e()
				}
			} else q.onload = e
		}

		function n() {
			P ? o() : s()
		}

		function o() {
			var e = O.getElementsByTagName("body")[0],
				t = g(k);
			t.setAttribute("type", R);
			var i = e.appendChild(t);
			if(i) {
				var n = 0;
				! function() {
					if(typeof i.GetVariable != C) {
						var o = i.GetVariable("$version");
						o && (o = o.split(" ")[1].split(","), $.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
					} else if(n < 10) return n++, void setTimeout(arguments.callee, 10);
					e.removeChild(t), i = null, s()
				}()
			} else s()
		}

		function s() {
			var e = A.length;
			if(e > 0)
				for(var t = 0; t < e; t++) {
					var i = A[t].id,
						n = A[t].callbackFn,
						o = {
							success: !1,
							id: i
						};
					if($.pv[0] > 0) {
						var s = _(i);
						if(s)
							if(!y(A[t].swfVersion) || $.wk && $.wk < 312)
								if(A[t].expressInstall && r()) {
									var c = {};
									c.data = A[t].expressInstall, c.width = s.getAttribute("width") || "0", c.height = s.getAttribute("height") || "0", s.getAttribute("class") && (c.styleclass = s.getAttribute("class")), s.getAttribute("align") && (c.align = s.getAttribute("align"));
									for(var d = {}, p = s.getElementsByTagName("param"), h = p.length, f = 0; f < h; f++) "movie" != p[f].getAttribute("name").toLowerCase() && (d[p[f].getAttribute("name")] = p[f].getAttribute("value"));
									l(c, d, i, n)
								} else u(s), n && n(o);
						else b(i, !0), n && (o.success = !0, o.ref = a(i), n(o))
					} else if(b(i, !0), n) {
						var g = a(i);
						g && typeof g.SetVariable != C && (o.success = !0, o.ref = g), n(o)
					}
				}
		}

		function a(e) {
			var t = null,
				i = _(e);
			if(i && "OBJECT" == i.nodeName)
				if(typeof i.SetVariable != C) t = i;
				else {
					var n = i.getElementsByTagName(k)[0];
					n && (t = n)
				}
			return t
		}

		function r() {
			return !M && y("6.0.65") && ($.win || $.mac) && !($.wk && $.wk < 312)
		}

		function l(e, t, i, n) {
			M = !0, x = n || null, F = {
				success: !1,
				id: i
			};
			var o = _(i);
			if(o) {
				"OBJECT" == o.nodeName ? (S = c(o), j = null) : (S = o, j = i), e.id = T, (typeof e.width == C || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == C || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), O.title = O.title.slice(0, 47) + " - Flash Player Installation";
				var s = $.ie && $.win ? "ActiveX" : "PlugIn",
					a = "MMredirectURL=" + q.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + O.title;
				if(typeof t.flashvars != C ? t.flashvars += "&" + a : t.flashvars = a, $.ie && $.win && 4 != o.readyState) {
					var r = g("div");
					i += "SWFObjectNew", r.setAttribute("id", i), o.parentNode.insertBefore(r, o), o.style.display = "none",
						function() {
							4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
						}()
				}
				d(e, t, i)
			}
		}

		function u(e) {
			if($.ie && $.win && 4 != e.readyState) {
				var t = g("div");
				e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none",
					function() {
						4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
					}()
			} else e.parentNode.replaceChild(c(e), e)
		}

		function c(e) {
			var t = g("div");
			if($.win && $.ie) t.innerHTML = e.innerHTML;
			else {
				var i = e.getElementsByTagName(k)[0];
				if(i) {
					var n = i.childNodes;
					if(n)
						for(var o = n.length, s = 0; s < o; s++) 1 == n[s].nodeType && "PARAM" == n[s].nodeName || 8 == n[s].nodeType || t.appendChild(n[s].cloneNode(!0))
				}
			}
			return t
		}

		function d(e, t, i) {
			var n, o = _(i);
			if($.wk && $.wk < 312) return n;
			if(o)
				if(typeof e.id == C && (e.id = i), $.ie && $.win) {
					var s = "";
					for(var a in e) e[a] != Object.prototype[a] && ("data" == a.toLowerCase() ? t.movie = e[a] : "styleclass" == a.toLowerCase() ? s += ' class="' + e[a] + '"' : "classid" != a.toLowerCase() && (s += " " + a + '="' + e[a] + '"'));
					var r = "";
					for(var l in t) t[l] != Object.prototype[l] && (r += '<param name="' + l + '" value="' + t[l] + '" />');
					o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + r + "</object>", B[B.length] = e.id, n = _(e.id)
				} else {
					var u = g(k);
					u.setAttribute("type", R);
					for(var c in e) e[c] != Object.prototype[c] && ("styleclass" == c.toLowerCase() ? u.setAttribute("class", e[c]) : "classid" != c.toLowerCase() && u.setAttribute(c, e[c]));
					for(var d in t) t[d] != Object.prototype[d] && "movie" != d.toLowerCase() && p(u, d, t[d]);
					o.parentNode.replaceChild(u, o), n = u
				}
			return n
		}

		function p(e, t, i) {
			var n = g("param");
			n.setAttribute("name", t), n.setAttribute("value", i), e.appendChild(n)
		}

		function h(e) {
			var t = _(e);
			t && "OBJECT" == t.nodeName && ($.ie && $.win ? (t.style.display = "none", function() {
				4 == t.readyState ? f(e) : setTimeout(arguments.callee, 10)
			}()) : t.parentNode.removeChild(t))
		}

		function f(e) {
			var t = _(e);
			if(t) {
				for(var i in t) "function" == typeof t[i] && (t[i] = null);
				t.parentNode.removeChild(t)
			}
		}

		function _(e) {
			var t = null;
			try {
				t = O.getElementById(e)
			} catch(i) {}
			return t
		}

		function g(e) {
			return O.createElement(e)
		}

		function m(e, t, i) {
			e.attachEvent(t, i), N[N.length] = [e, t, i]
		}

		function y(e) {
			var t = $.pv,
				i = e.split(".");
			return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2]
		}

		function v(e, t, i, n) {
			if(!$.ie || !$.mac) {
				var o = O.getElementsByTagName("head")[0];
				if(o) {
					var s = i && "string" == typeof i ? i : "screen";
					if(n && (U = null, E = null), !U || E != s) {
						var a = g("style");
						a.setAttribute("type", "text/css"), a.setAttribute("media", s), U = o.appendChild(a), $.ie && $.win && typeof O.styleSheets != C && O.styleSheets.length > 0 && (U = O.styleSheets[O.styleSheets.length - 1]), E = s
					}
					$.ie && $.win ? U && typeof U.addRule == k && U.addRule(e, t) : U && typeof O.createTextNode != C && U.appendChild(O.createTextNode(e + " {" + t + "}"))
				}
			}
		}

		function b(e, t) {
			if(H) {
				var i = t ? "visible" : "hidden";
				z && _(e) ? _(e).style.visibility = i : v("#" + e, "visibility:" + i)
			}
		}

		function w(e) {
			var t = /[\\\"<>\.;]/,
				i = null != t.exec(e);
			return i && typeof encodeURIComponent != C ? encodeURIComponent(e) : e
		}
		var S, j, x, F, U, E, C = "undefined",
			k = "object",
			Q = "Shockwave Flash",
			I = "ShockwaveFlash.ShockwaveFlash",
			R = "application/x-shockwave-flash",
			T = "SWFObjectExprInst",
			D = "onreadystatechange",
			q = window,
			O = document,
			W = navigator,
			P = !1,
			L = [n],
			A = [],
			B = [],
			N = [],
			z = !1,
			M = !1,
			H = !0,
			$ = function() {
				var e = typeof O.getElementById != C && typeof O.getElementsByTagName != C && typeof O.createElement != C,
					t = W.userAgent.toLowerCase(),
					i = W.platform.toLowerCase(),
					n = i ? /win/.test(i) : /win/.test(t),
					o = i ? /mac/.test(i) : /mac/.test(t),
					s = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
					a = !1,
					r = [0, 0, 0],
					l = null;
				if(typeof W.plugins != C && typeof W.plugins[Q] == k) l = W.plugins[Q].description, !l || typeof W.mimeTypes != C && W.mimeTypes[R] && !W.mimeTypes[R].enabledPlugin || (P = !0, a = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), r[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
				else if(typeof q.ActiveXObject != C) try {
					var u = new ActiveXObject(I);
					u && (l = u.GetVariable("$version"), l && (a = !0, l = l.split(" ")[1].split(","), r = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
				} catch(c) {}
				return {
					w3: e,
					pv: r,
					wk: s,
					ie: a,
					win: n,
					mac: o
				}
			}();
		(function() {
			$.w3 && ((typeof O.readyState != C && "complete" == O.readyState || typeof O.readyState == C && (O.getElementsByTagName("body")[0] || O.body)) && e(), z || (typeof O.addEventListener != C && O.addEventListener("DOMContentLoaded", e, !1), $.ie && $.win && (O.attachEvent(D, function() {
				"complete" == O.readyState && (O.detachEvent(D, arguments.callee), e())
			}), q == top && ! function() {
				if(!z) {
					try {
						O.documentElement.doScroll("left")
					} catch(t) {
						return void setTimeout(arguments.callee, 0)
					}
					e()
				}
			}()), $.wk && ! function() {
				if(!z) return /loaded|complete/.test(O.readyState) ? void e() : void setTimeout(arguments.callee, 0)
			}(), i(e)))
		})(),
		function() {
			$.ie && $.win && window.attachEvent("onunload", function() {
				for(var e = N.length, t = 0; t < e; t++) N[t][0].detachEvent(N[t][1], N[t][2]);
				for(var i = B.length, n = 0; n < i; n++) h(B[n]);
				for(var o in $) $[o] = null;
				$ = null;
				for(var s in swfobject) swfobject[s] = null;
				swfobject = null
			})
		}();
		return {
			registerObject: function(e, t, i, n) {
				if($.w3 && e && t) {
					var o = {};
					o.id = e, o.swfVersion = t, o.expressInstall = i, o.callbackFn = n, A[A.length] = o, b(e, !1)
				} else n && n({
					success: !1,
					id: e
				})
			},
			getObjectById: function(e) {
				if($.w3) return a(e)
			},
			embedSWF: function(e, i, n, o, s, a, u, c, p, h) {
				var f = {
					success: !1,
					id: i
				};
				$.w3 && !($.wk && $.wk < 312) && e && i && n && o && s ? (b(i, !1), t(function() {
					n += "", o += "";
					var t = {};
					if(p && typeof p === k)
						for(var _ in p) t[_] = p[_];
					t.data = e, t.width = n, t.height = o;
					var g = {};
					if(c && typeof c === k)
						for(var m in c) g[m] = c[m];
					if(u && typeof u === k)
						for(var v in u) typeof g.flashvars != C ? g.flashvars += "&" + v + "=" + u[v] : g.flashvars = v + "=" + u[v];
					if(y(s)) {
						var w = d(t, g, i);
						t.id == i && b(i, !0), f.success = !0, f.ref = w
					} else {
						if(a && r()) return t.data = a, void l(t, g, i, h);
						b(i, !0)
					}
					h && h(f)
				})) : h && h(f)
			},
			switchOffAutoHideShow: function() {
				H = !1
			},
			ua: $,
			getFlashPlayerVersion: function() {
				return {
					major: $.pv[0],
					minor: $.pv[1],
					release: $.pv[2]
				}
			},
			hasFlashPlayerVersion: y,
			createSWF: function(e, t, i) {
				return $.w3 ? d(e, t, i) : void 0
			},
			showExpressInstall: function(e, t, i, n) {
				$.w3 && r() && l(e, t, i, n)
			},
			removeSWF: function(e) {
				$.w3 && h(e)
			},
			createCSS: function(e, t, i, n) {
				$.w3 && v(e, t, i, n)
			},
			addDomLoadEvent: t,
			addLoadEvent: i,
			getQueryParamValue: function(e) {
				var t = O.location.search || O.location.hash;
				if(t) {
					if(/\?/.test(t) && (t = t.split("?")[1]), null == e) return w(t);
					for(var i = t.split("&"), n = 0; n < i.length; n++)
						if(i[n].substring(0, i[n].indexOf("=")) == e) return w(i[n].substring(i[n].indexOf("=") + 1))
				}
				return ""
			},
			expressInstallCallback: function() {
				if(M) {
					var e = _(T);
					e && S && (e.parentNode.replaceChild(S, e), j && (b(j, !0), $.ie && $.win && (S.style.display = "block")), x && x(F)), M = !1
				}
			}
		}
	}(), swfobject.addDomLoadEvent(function() {
		"function" == typeof SWFUpload.onload && SWFUpload.onload.call(window)
	}),
	function(e) {
		e.Jcrop = function(t, i) {
			function n(e) {
				return Math.round(e) + "px"
			}

			function o(e) {
				return q.baseClass + "-" + e
			}

			function s() {
				return e.fx.step.hasOwnProperty("backgroundColor")
			}

			function a(t) {
				var i = e(t).offset();
				return [i.left, i.top]
			}

			function r(e) {
				return [e.pageX - D[0], e.pageY - D[1]]
			}

			function l(t) {
				"object" != typeof t && (t = {}), q = e.extend(q, t), e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) {
					"function" != typeof q[t] && (q[t] = function() {})
				})
			}

			function u(e, t, i) {
				if(D = a(z), fe.setCursor("move" === e ? e : e + "-resize"), "move" === e) return fe.activateHandlers(d(t), g, i);
				var n = de.getFixed(),
					o = p(e),
					s = de.getCorner(p(o));
				de.setPressed(de.getCorner(o)), de.setCurrent(s), fe.activateHandlers(c(e, n), g, i)
			}

			function c(e, t) {
				return function(i) {
					if(q.aspectRatio) switch(e) {
						case "e":
							i[1] = t.y + 1;
							break;
						case "w":
							i[1] = t.y + 1;
							break;
						case "n":
							i[0] = t.x + 1;
							break;
						case "s":
							i[0] = t.x + 1
					} else switch(e) {
						case "e":
							i[1] = t.y2;
							break;
						case "w":
							i[1] = t.y2;
							break;
						case "n":
							i[0] = t.x2;
							break;
						case "s":
							i[0] = t.x2
					}
					de.setCurrent(i), he.update()
				}
			}

			function d(e) {
				var t = e;
				return _e.watchKeys(),
					function(e) {
						de.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, he.update()
					}
			}

			function p(e) {
				switch(e) {
					case "n":
						return "sw";
					case "s":
						return "nw";
					case "e":
						return "nw";
					case "w":
						return "ne";
					case "ne":
						return "sw";
					case "nw":
						return "se";
					case "se":
						return "nw";
					case "sw":
						return "ne"
				}
			}

			function h(e) {
				return function(t) {
					return !q.disabled && (!("move" === e && !q.allowMove) && (D = a(z), ne = !0, u(e, r(t)), t.stopPropagation(), t.preventDefault(), !1))
				}
			}

			function f(e, t, i) {
				var n = e.width(),
					o = e.height();
				n > t && t > 0 && (n = t, o = t / e.width() * e.height()), o > i && i > 0 && (o = i, n = i / e.height() * e.width()), te = e.width() / n, ie = e.height() / o, e.width(n).height(o)
			}

			function _(e) {
				return {
					x: e.x * te,
					y: e.y * ie,
					x2: e.x2 * te,
					y2: e.y2 * ie,
					w: e.w * te,
					h: e.h * ie
				}
			}

			function g(e) {
				var t = de.getFixed();
				t.w > q.minSelect[0] && t.h > q.minSelect[1] ? (he.enableHandles(), he.done()) : he.release(), fe.setCursor(q.allowSelect ? "crosshair" : "default")
			}

			function m(e) {
				if(q.disabled) return !1;
				if(!q.allowSelect) return !1;
				ne = !0, D = a(z), he.disableHandles(), fe.setCursor("crosshair");
				var t = r(e);
				return de.setPressed(t), he.update(), fe.activateHandlers(y, g, "touch" === e.type.substring(0, 5)), _e.watchKeys(), e.stopPropagation(), e.preventDefault(), !1
			}

			function y(e) {
				de.setCurrent(e), he.update()
			}

			function v() {
				var t = e("<div></div>").addClass(o("tracker"));
				return W && t.css({
					opacity: 0,
					backgroundColor: "white"
				}), t
			}

			function b(e) {
				$.removeClass().addClass(o("holder")).addClass(e)
			}

			function w(e, t) {
				function i() {
					window.setTimeout(y, d)
				}
				var n = e[0] / te,
					o = e[1] / ie,
					s = e[2] / te,
					a = e[3] / ie;
				if(!oe) {
					var r = de.flipCoords(n, o, s, a),
						l = de.getFixed(),
						u = [l.x, l.y, l.x2, l.y2],
						c = u,
						d = q.animationDelay,
						p = r[0] - u[0],
						h = r[1] - u[1],
						f = r[2] - u[2],
						_ = r[3] - u[3],
						g = 0,
						m = q.swingSpeed;
					n = c[0], o = c[1], s = c[2], a = c[3], he.animMode(!0);
					var y = function() {
						return function() {
							g += (100 - g) / m, c[0] = Math.round(n + g / 100 * p), c[1] = Math.round(o + g / 100 * h), c[2] = Math.round(s + g / 100 * f), c[3] = Math.round(a + g / 100 * _), g >= 99.8 && (g = 100), g < 100 ? (j(c), i()) : (he.done(), he.animMode(!1), "function" == typeof t && t.call(ge))
						}
					}();
					i()
				}
			}

			function S(e) {
				j([e[0] / te, e[1] / ie, e[2] / te, e[3] / ie]), q.onSelect.call(ge, _(de.getFixed())), he.enableHandles()
			}

			function j(e) {
				de.setPressed([e[0], e[1]]), de.setCurrent([e[2], e[3]]), he.update()
			}

			function x() {
				return _(de.getFixed())
			}

			function F() {
				return de.getFixed()
			}

			function U(e) {
				l(e), T()
			}

			function E() {
				q.disabled = !0, he.disableHandles(), he.setCursor("default"), fe.setCursor("default")
			}

			function C() {
				q.disabled = !1, T()
			}

			function k() {
				he.done(), fe.activateHandlers(null, null)
			}

			function Q() {
				$.remove(), A.show(), A.css("visibility", "visible"), e(t).removeData("Jcrop")
			}

			function I(e, t) {
				he.release(), E();
				var i = new Image;
				i.onload = function() {
					var n = i.width,
						o = i.height,
						s = q.boxWidth,
						a = q.boxHeight;
					z.width(n).height(o), z.attr("src", e), V.attr("src", e), f(z, s, a), M = z.width(), H = z.height(), V.width(M).height(H), re.width(M + 2 * ae).height(H + 2 * ae), $.width(M).height(H), pe.resize(M, H), C(), "function" == typeof t && t.call(ge)
				}, i.src = e
			}

			function R(e, t, i) {
				var n = t || q.bgColor;
				q.bgFade && s() && q.fadeTime && !i ? e.animate({
					backgroundColor: n
				}, {
					queue: !1,
					duration: q.fadeTime
				}) : e.css("backgroundColor", n)
			}

			function T(e) {
				q.allowResize ? e ? he.enableOnly() : he.enableHandles() : he.disableHandles(), fe.setCursor(q.allowSelect ? "crosshair" : "default"), he.setCursor(q.allowMove ? "move" : "default"), q.hasOwnProperty("trueSize") && (te = q.trueSize[0] / M, ie = q.trueSize[1] / H), q.hasOwnProperty("setSelect") && (S(q.setSelect), he.done(), delete q.setSelect), pe.refresh(), q.bgColor != le && (R(q.shade ? pe.getShades() : $, q.shade ? q.shadeColor || q.bgColor : q.bgColor), le = q.bgColor), ue != q.bgOpacity && (ue = q.bgOpacity, q.shade ? pe.refresh() : he.setBgOpacity(ue)), Y = q.maxSize[0] || 0, Z = q.maxSize[1] || 0, K = q.minSize[0] || 0, ee = q.minSize[1] || 0, q.hasOwnProperty("outerImage") && (z.attr("src", q.outerImage), delete q.outerImage), he.refresh()
			}
			var D, q = e.extend({}, e.Jcrop.defaults),
				O = navigator.userAgent.toLowerCase(),
				W = /msie/.test(O),
				P = /msie [1-6]\./.test(O);
			"object" != typeof t && (t = e(t)[0]), "object" != typeof i && (i = {}), l(i);
			var L = {
					border: "none",
					visibility: "visible",
					margin: 0,
					padding: 0,
					position: "absolute",
					top: 0,
					left: 0
				},
				A = e(t),
				B = !0;
			if("IMG" == t.tagName) {
				if(0 != A[0].width && 0 != A[0].height) A.width(A[0].width), A.height(A[0].height);
				else {
					var N = new Image;
					N.src = A[0].src, A.width(N.width), A.height(N.height)
				}
				var z = A.clone().removeAttr("id").css(L).show();
				z.width(A.width()), z.height(A.height()), A.after(z).hide()
			} else z = A.css(L).show(), B = !1, null === q.shade && (q.shade = !0);
			f(z, q.boxWidth, q.boxHeight);
			var M = z.width(),
				H = z.height(),
				$ = e("<div />").width(M).height(H).addClass(o("holder")).css({
					position: "relative",
					backgroundColor: q.bgColor
				}).insertAfter(A).append(z);
			q.addClass && $.addClass(q.addClass);
			var V = e("<div />"),
				J = e("<div />").width("100%").height("100%").css({
					zIndex: 310,
					position: "absolute",
					overflow: "hidden"
				}),
				X = e("<div />").width("100%").height("100%").css("zIndex", 320),
				G = e("<div />").css({
					position: "absolute",
					zIndex: 600
				}).dblclick(function() {
					var e = de.getFixed();
					q.onDblClick.call(ge, e)
				}).insertBefore(z).append(J, X);
			B && (V = e("<img />").attr("src", z.attr("src")).css(L).width(M).height(H), J.append(V)), P && G.css({
				overflowY: "hidden"
			});
			var Y, Z, K, ee, te, ie, ne, oe, se, ae = q.boundary,
				re = v().width(M + 2 * ae).height(H + 2 * ae).css({
					position: "absolute",
					top: n(-ae),
					left: n(-ae),
					zIndex: 290
				}).mousedown(m),
				le = q.bgColor,
				ue = q.bgOpacity;
			D = a(z);
			var ce = function() {
					function e() {
						var e, t = {},
							i = ["touchstart", "touchmove", "touchend"],
							n = document.createElement("div");
						try {
							for(e = 0; e < i.length; e++) {
								var o = i[e];
								o = "on" + o;
								var s = o in n;
								s || (n.setAttribute(o, "return;"), s = "function" == typeof n[o]), t[i[e]] = s
							}
							return t.touchstart && t.touchend && t.touchmove
						} catch(a) {
							return !1
						}
					}

					function t() {
						return q.touchSupport === !0 || q.touchSupport === !1 ? q.touchSupport : e()
					}
					return {
						createDragger: function(e) {
							return function(t) {
								return !q.disabled && (!("move" === e && !q.allowMove) && (D = a(z), ne = !0, u(e, r(ce.cfilter(t)), !0), t.stopPropagation(), t.preventDefault(), !1))
							}
						},
						newSelection: function(e) {
							return m(ce.cfilter(e))
						},
						cfilter: function(e) {
							return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e
						},
						isSupported: e,
						support: t()
					}
				}(),
				de = function() {
					function e(e) {
						e = a(e), f = p = e[0], _ = h = e[1]
					}

					function t(e) {
						e = a(e), c = e[0] - f, d = e[1] - _, f = e[0], _ = e[1]
					}

					function i() {
						return [c, d]
					}

					function n(e) {
						var t = e[0],
							i = e[1];
						0 > p + t && (t -= t + p), 0 > h + i && (i -= i + h), H < _ + i && (i += H - (_ + i)), M < f + t && (t += M - (f + t)), p += t, f += t, h += i, _ += i
					}

					function o(e) {
						var t = s();
						switch(e) {
							case "ne":
								return [t.x2, t.y];
							case "nw":
								return [t.x, t.y];
							case "se":
								return [t.x2, t.y2];
							case "sw":
								return [t.x, t.y2]
						}
					}

					function s() {
						if(!q.aspectRatio) return l();
						var e, t, i, n, o = q.aspectRatio,
							s = q.minSize[0] / te,
							a = q.maxSize[0] / te,
							c = q.maxSize[1] / ie,
							d = f - p,
							g = _ - h,
							m = Math.abs(d),
							y = Math.abs(g),
							v = m / y;
						return 0 === a && (a = 10 * M), 0 === c && (c = 10 * H), v < o ? (t = _, i = y * o, e = d < 0 ? p - i : i + p, e < 0 ? (e = 0, n = Math.abs((e - p) / o), t = g < 0 ? h - n : n + h) : e > M && (e = M, n = Math.abs((e - p) / o), t = g < 0 ? h - n : n + h)) : (e = f, n = m / o, t = g < 0 ? h - n : h + n, t < 0 ? (t = 0, i = Math.abs((t - h) * o), e = d < 0 ? p - i : i + p) : t > H && (t = H, i = Math.abs(t - h) * o, e = d < 0 ? p - i : i + p)), e > p ? (e - p < s ? e = p + s : e - p > a && (e = p + a), t = t > h ? h + (e - p) / o : h - (e - p) / o) : e < p && (p - e < s ? e = p - s : p - e > a && (e = p - a), t = t > h ? h + (p - e) / o : h - (p - e) / o), e < 0 ? (p -= e, e = 0) : e > M && (p -= e - M, e = M), t < 0 ? (h -= t, t = 0) : t > H && (h -= t - H, t = H), u(r(p, h, e, t))
					}

					function a(e) {
						return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > M && (e[0] = M), e[1] > H && (e[1] = H), [Math.round(e[0]), Math.round(e[1])]
					}

					function r(e, t, i, n) {
						var o = e,
							s = i,
							a = t,
							r = n;
						return i < e && (o = i, s = e), n < t && (a = n, r = t), [o, a, s, r]
					}

					function l() {
						var e, t = f - p,
							i = _ - h;
						return Y && Math.abs(t) > Y && (f = t > 0 ? p + Y : p - Y), Z && Math.abs(i) > Z && (_ = i > 0 ? h + Z : h - Z), ee / ie && Math.abs(i) < ee / ie && (_ = i > 0 ? h + ee / ie : h - ee / ie), K / te && Math.abs(t) < K / te && (f = t > 0 ? p + K / te : p - K / te), p < 0 && (f -= p, p -= p), h < 0 && (_ -= h, h -= h), f < 0 && (p -= f, f -= f), _ < 0 && (h -= _, _ -= _), f > M && (e = f - M, p -= e, f -= e), _ > H && (e = _ - H, h -= e, _ -= e), p > M && (e = p - H, _ -= e, h -= e), h > H && (e = h - H, _ -= e, h -= e), u(r(p, h, f, _))
					}

					function u(e) {
						return {
							x: e[0],
							y: e[1],
							x2: e[2],
							y2: e[3],
							w: e[2] - e[0],
							h: e[3] - e[1]
						}
					}
					var c, d, p = 0,
						h = 0,
						f = 0,
						_ = 0;
					return {
						flipCoords: r,
						setPressed: e,
						setCurrent: t,
						getOffset: i,
						moveOffset: n,
						getCorner: o,
						getFixed: s
					}
				}(),
				pe = function() {
					function t(e, t) {
						f.left.css({
							height: n(t)
						}), f.right.css({
							height: n(t)
						})
					}

					function i() {
						return o(de.getFixed())
					}

					function o(e) {
						f.top.css({
							left: n(e.x),
							width: n(e.w),
							height: n(e.y)
						}), f.bottom.css({
							top: n(e.y2),
							left: n(e.x),
							width: n(e.w),
							height: n(H - e.y2)
						}), f.right.css({
							left: n(e.x2),
							width: n(M - e.x2)
						}), f.left.css({
							width: n(e.x)
						})
					}

					function s() {
						return e("<div />").css({
							position: "absolute",
							backgroundColor: q.shadeColor || q.bgColor
						}).appendTo(h)
					}

					function a() {
						p || (p = !0, h.insertBefore(z), i(), he.setBgOpacity(1, 0, 1), V.hide(), r(q.shadeColor || q.bgColor, 1), he.isAwake() ? u(q.bgOpacity, 1) : u(1, 1))
					}

					function r(e, t) {
						R(d(), e, t)
					}

					function l() {
						p && (h.remove(), V.show(), p = !1, he.isAwake() ? he.setBgOpacity(q.bgOpacity, 1, 1) : (he.setBgOpacity(1, 1, 1), he.disableHandles()), R($, 0, 1))
					}

					function u(e, t) {
						p && (q.bgFade && !t ? h.animate({
							opacity: 1 - e
						}, {
							queue: !1,
							duration: q.fadeTime
						}) : h.css({
							opacity: 1 - e
						}))
					}

					function c() {
						q.shade ? a() : l(), he.isAwake() && u(q.bgOpacity)
					}

					function d() {
						return h.children()
					}
					var p = !1,
						h = e("<div />").css({
							position: "absolute",
							zIndex: 240,
							opacity: 0
						}),
						f = {
							top: s(),
							left: s().height(H),
							right: s().height(H),
							bottom: s()
						};
					return {
						update: i,
						updateRaw: o,
						getShades: d,
						setBgColor: r,
						enable: a,
						disable: l,
						resize: t,
						refresh: c,
						opacity: u
					}
				}(),
				he = function() {
					function t(t) {
						var i = e("<div />").css({
							position: "absolute",
							opacity: q.borderOpacity
						}).addClass(o(t));
						return J.append(i), i
					}

					function i(t, i) {
						var n = e("<div />").mousedown(h(t)).css({
							cursor: t + "-resize",
							position: "absolute",
							zIndex: i
						}).addClass("ord-" + t);
						return ce.support && n.bind("touchstart.jcrop", ce.createDragger(t)), X.append(n), n
					}

					function s(e) {
						var t = q.handleSize,
							n = i(e, E++).css({
								opacity: q.handleOpacity
							}).addClass(o("handle"));
						return t && n.width(t).height(t), n
					}

					function a(e) {
						return i(e, E++).addClass("jcrop-dragbar")
					}

					function r(e) {
						var t;
						for(t = 0; t < e.length; t++) Q[e[t]] = a(e[t])
					}

					function l(e) {
						var i, n;
						for(n = 0; n < e.length; n++) {
							switch(e[n]) {
								case "n":
									i = "hline";
									break;
								case "s":
									i = "hline bottom";
									break;
								case "e":
									i = "vline right";
									break;
								case "w":
									i = "vline"
							}
							C[e[n]] = t(i)
						}
					}

					function u(e) {
						var t;
						for(t = 0; t < e.length; t++) k[e[t]] = s(e[t])
					}

					function c(e, t) {
						q.shade || V.css({
							top: n(-t),
							left: n(-e)
						}), G.css({
							top: n(t),
							left: n(e)
						})
					}

					function d(e, t) {
						G.width(Math.round(e)).height(Math.round(t))
					}

					function p() {
						var e = de.getFixed();
						de.setPressed([e.x, e.y]), de.setCurrent([e.x2, e.y2]), f()
					}

					function f(e) {
						if(U) return g(e)
					}

					function g(e) {
						var t = de.getFixed();
						d(t.w, t.h), c(t.x, t.y), q.shade && pe.updateRaw(t), U || y(), e ? q.onSelect.call(ge, _(t)) : q.onChange.call(ge, _(t))
					}

					function m(e, t, i) {
						(U || t) && (q.bgFade && !i ? z.animate({
							opacity: e
						}, {
							queue: !1,
							duration: q.fadeTime
						}) : z.css("opacity", e))
					}

					function y() {
						G.show(), q.shade ? pe.opacity(ue) : m(ue, !0), U = !0
					}

					function b() {
						j(), G.hide(), q.shade ? pe.opacity(1) : m(1), U = !1, q.onRelease.call(ge)
					}

					function w() {
						I && X.show()
					}

					function S() {
						if(I = !0, q.allowResize) return X.show(), !0
					}

					function j() {
						I = !1, X.hide()
					}

					function x(e) {
						e ? (oe = !0, j()) : (oe = !1, S())
					}

					function F() {
						x(!1), p()
					}
					var U, E = 370,
						C = {},
						k = {},
						Q = {},
						I = !1;
					q.dragEdges && e.isArray(q.createDragbars) && r(q.createDragbars), e.isArray(q.createHandles) && u(q.createHandles), q.drawBorders && e.isArray(q.createBorders) && l(q.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
						e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation()
					});
					var R = v().mousedown(h("move")).css({
						cursor: "move",
						position: "absolute",
						zIndex: 360
					});
					return ce.support && R.bind("touchstart.jcrop", ce.createDragger("move")), J.append(R), j(), {
						updateVisible: f,
						update: g,
						release: b,
						refresh: p,
						isAwake: function() {
							return U
						},
						setCursor: function(e) {
							R.css("cursor", e)
						},
						enableHandles: S,
						enableOnly: function() {
							I = !0
						},
						showHandles: w,
						disableHandles: j,
						animMode: x,
						setBgOpacity: m,
						done: F
					}
				}(),
				fe = function() {
					function t(t) {
						re.css({
							zIndex: 450
						}), t ? e(document).bind("touchmove.jcrop", a).bind("touchend.jcrop", l) : p && e(document).bind("mousemove.jcrop", n).bind("mouseup.jcrop", o)
					}

					function i() {
						re.css({
							zIndex: 290
						}), e(document).unbind(".jcrop")
					}

					function n(e) {
						return c(r(e)), !1
					}

					function o(e) {
						return e.preventDefault(), e.stopPropagation(), ne && (ne = !1, d(r(e)), he.isAwake() && q.onSelect.call(ge, _(de.getFixed())), i(), c = function() {}, d = function() {}), !1
					}

					function s(e, i, n) {
						return ne = !0, c = e, d = i, t(n), !1
					}

					function a(e) {
						return c(r(ce.cfilter(e))), !1
					}

					function l(e) {
						return o(ce.cfilter(e))
					}

					function u(e) {
						re.css("cursor", e)
					}
					var c = function() {},
						d = function() {},
						p = q.trackDocument;
					return p || re.mousemove(n).mouseup(o).mouseout(o), z.before(re), {
						activateHandlers: s,
						setCursor: u
					}
				}(),
				_e = function() {
					function t() {
						q.keySupport && (s.show(), s.focus())
					}

					function i(e) {
						s.hide()
					}

					function n(e, t, i) {
						q.allowMove && (de.moveOffset([t, i]), he.updateVisible(!0)), e.preventDefault(), e.stopPropagation()
					}

					function o(e) {
						if(e.ctrlKey || e.metaKey) return !0;
						se = !!e.shiftKey;
						var t = se ? 10 : 1;
						switch(e.keyCode) {
							case 37:
								n(e, -t, 0);
								break;
							case 39:
								n(e, t, 0);
								break;
							case 38:
								n(e, 0, -t);
								break;
							case 40:
								n(e, 0, t);
								break;
							case 27:
								q.allowSelect && he.release();
								break;
							case 9:
								return !0
						}
						return !1
					}
					var s = e('<input type="radio" />').css({
							position: "fixed",
							left: "-120px",
							width: "12px"
						}).addClass("jcrop-keymgr"),
						a = e("<div />").css({
							position: "absolute",
							overflow: "hidden"
						}).append(s);
					return q.keySupport && (s.keydown(o).blur(i), P || !q.fixedSupport ? (s.css({
						position: "absolute",
						left: "-20px"
					}), a.append(s).insertBefore(z)) : s.insertBefore(z)), {
						watchKeys: t
					}
				}();
			ce.support && re.bind("touchstart.jcrop", ce.newSelection), X.hide(), T(!0);
			var ge = {
				setImage: I,
				animateTo: w,
				setSelect: S,
				setOptions: U,
				tellSelect: x,
				tellScaled: F,
				setClass: b,
				disable: E,
				enable: C,
				cancel: k,
				release: he.release,
				destroy: Q,
				focus: _e.watchKeys,
				getBounds: function() {
					return [M * te, H * ie]
				},
				getWidgetSize: function() {
					return [M, H]
				},
				getScaleFactor: function() {
					return [te, ie]
				},
				getOptions: function() {
					return q
				},
				ui: {
					holder: $,
					selection: G
				}
			};
			return W && $.bind("selectstart", function() {
				return !1
			}), A.data("Jcrop", ge), ge
		}, e.fn.Jcrop = function(t, i) {
			var n;
			return this.each(function() {
				if(e(this).data("Jcrop")) {
					if("api" === t) return e(this).data("Jcrop");
					e(this).data("Jcrop").setOptions(t)
				} else "IMG" == this.tagName ? e.Jcrop.Loader(this, function() {
					e(this).css({
						display: "block",
						visibility: "hidden"
					}), n = e.Jcrop(this, t), e.isFunction(i) && i.call(n)
				}) : (e(this).css({
					display: "block",
					visibility: "hidden"
				}), n = e.Jcrop(this, t), e.isFunction(i) && i.call(n))
			}), this
		}, e.Jcrop.Loader = function(t, i, n) {
			function o() {
				a.complete ? (s.unbind(".jcloader"), e.isFunction(i) && i.call(a)) : window.setTimeout(o, 50)
			}
			var s = e(t),
				a = s[0];
			s.bind("load.jcloader", o).bind("error.jcloader", function(t) {
				s.unbind(".jcloader"), e.isFunction(n) && n.call(a)
			}), a.complete && e.isFunction(i) && (s.unbind(".jcloader"), i.call(a))
		}, e.Jcrop.defaults = {
			allowSelect: !0,
			allowMove: !0,
			allowResize: !0,
			trackDocument: !0,
			baseClass: "jcrop",
			addClass: null,
			bgColor: "black",
			bgOpacity: .6,
			bgFade: !1,
			borderOpacity: .4,
			handleOpacity: .5,
			handleSize: null,
			aspectRatio: 0,
			keySupport: !0,
			createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
			createDragbars: ["n", "s", "e", "w"],
			createBorders: ["n", "s", "e", "w"],
			drawBorders: !0,
			dragEdges: !0,
			fixedSupport: !0,
			touchSupport: null,
			shade: null,
			boxWidth: 0,
			boxHeight: 0,
			boundary: 2,
			fadeTime: 400,
			animationDelay: 20,
			swingSpeed: 3,
			minSelect: [0, 0],
			maxSize: [0, 0],
			minSize: [0, 0],
			onChange: function() {},
			onSelect: function() {},
			onDblClick: function() {},
			onRelease: function() {}
		}
	}(jQuery);