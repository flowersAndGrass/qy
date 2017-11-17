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
				error: function(t) {
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
				error: function(t) {
					alert("加载登录模块时发生错误，请重试。")
				}
			})
		},
		doLogin: function() {
			if (qyerUtil.isLogin()) return !1;
			var t = "reg" === type ? "regist" : "login";
			pageType = "", redirectURL = url || window.location.href, callback = "function" == typeof callback ? callback : function() {}, allowClose = !0, qyerUtil.doLogin({
				page: t,
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

function syncAfterLogin(t, e) {
	QYER.uid = t, e = e || "", jQuery.getJSON("//user.qyer.com/user_action_logininfo?xxcb=" + e + "&callback=?")
}

function isloginjump(t, e) {
	return QYER.uid > 0 ? (location.href = t, !1) : (t = "//bbs.qyer.com/" + t, void ajaxlogin(0, "", "bbsajax.php", "", "", t))
}

function getAjaxMsg(t) {
	"object" == typeof t && 1 == t.status && (jQuery("body").append(t.script), setTimeout(function() {
		window.location.href = t.url
	}, 2e3))
}

function ajaxLogout() {
	tips.show("退出登录中..."), jQuery.ajax({
		type: "get",
		dataType: "jsonp",
		url: "//login.qyer.com/login.php?action=ajaxLogout&callback=?"
	})
}

function islogin(t, e, i) {
	e = e || ajaxlogin;
	var o = "/api.php?action=islogin&rnd=" + +new Date;
	if (!i) return void jQuery.getJSON(o, function(i) {
		i || e && e(), "ok" == i.result ? ("undefined" != typeof comment && comment.setUid(i.data.uid), t && t(i.data)) : e && e(i.data)
	});
	var n = !1;
	return jQuery.ajax({
		url: o,
		dataType: "json",
		async: !1,
		success: function(i) {
			i || (e && e(), n = !1), "ok" == i.result ? (t && t(i.data), n = !0) : (e && e(i.data), n = !1)
		}
	}), n
}

function yjbGetCookie(t) {
	for (var e = document.cookie.split("; "), i = 0; i < e.length; i++) {
		var o = e[i].split("=");
		if (o[0] == t) return unescape(o[1])
	}
}

function yjbSetCookie(t, e) {
	var i = 1,
		o = new Date;
	o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = t + "=" + escape(e) + ";domain=.qyer.com;expires=" + o.toGMTString()
}

function closeAppPup() {
	yjbSetCookie("apppopup", "1"), jQuery("#apppopup_bg").hide(), pupclose()
}

function spam_text_filter() {
	var t = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim;
	jQuery(".qyer_spam_text_filter a").each(function() {
		(jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.cn") == -1 && (jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.com") == -1 && (jQuery(this).html() + jQuery(this).attr("href")).indexOf("mafengwo.net") == -1 || jQuery(this).replaceWith(jQuery(this).html())
	}), jQuery(".qyer_spam_text_filter").each(function() {
		var e = jQuery(this).html();
		e = e.replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim, "");
		var i = e.match(/\<img[\s\S]*?\>/gim);
		if (null != i)
			for (var o = 0; o < i.length; o++) e = e.replace(i[o], "[imgimg]" + o + "[/imgimg]");
		if (e = e.replace(t, ""), null != i)
			for (var o = 0; o < i.length; o++) e = e.replace("[imgimg]" + o + "[/imgimg]", i[o]);
		jQuery(this).html(e)
	})
}

function loadjscssfile(t, e) {
	if ("js" == e) {
		var i = document.createElement("script");
		i.setAttribute("type", "text/javascript"), i.setAttribute("src", t)
	} else if ("css" == e) {
		var i = document.createElement("link");
		i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", t)
	}
	"undefined" != typeof i && document.getElementsByTagName("head")[0].appendChild(i)
}

function getCookie(t) {
	var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
	return null != e ? unescape(e[2]) : null
}

function setCookie(t, e) {
	document.cookie = t + "=" + escape(e) + "; path=/;domain=ask.qyer.com"
}

function getABFromGuid() {
	var t = new RegExp("(^| )_guid=([^;]*)(;|$)", "i"),
		e = document.cookie.match(t),
		i = "";
	if (null != e && e.length > 1 && (i = e[2]), "" == i) return "b";
	var o = i.substr(i.length - 1, 1).toLowerCase(),
		n = parseInt("0x" + o);
	return n > 7 ? "b" : "a"
}

function amendUrl(t, e) {
	if ("" == e) return t;
	var i = "",
		o = t.indexOf("#");
	return o != -1 && (i = t.substr(o), t = t.substr(0, o)), t = t.indexOf("?") == -1 ? t + "?" + e : t + "&" + e, t + i
}

function follow(t) {
	function e(t, e, i) {
		e ? (qyerUI.message({
			msg: "成功取消关注",
			type: "true"
		}), i.attr("data-bn-ipg", "usercenter-follow")) : (qyerUI.message({
			msg: "成功关注",
			type: "true"
		}), i.attr("data-bn-ipg", "usercenter-unfollow")), i.attr("data-relate", e), "1" == t ? i.hasClass("ui_attent_btn_each") ? (i.removeClass("ui_attent_btn_each"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_each")) : (i.addClass("ui_attent_btn_each"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_each")) : i.hasClass("ui_attent_btn_yes") ? (i.removeClass("ui_attent_btn_yes"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_yes")) : (i.addClass("ui_attent_btn_yes"), i.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_yes"))
	}
	if (QYER.uid <= 0) return ajaxlogin(), !1;
	var i = t.attr("data-uid"),
		o = t.attr("data-relate"),
		n = t.attr("data-each"),
		a = "";
	a = 1 == o ? "action=addfriend&fuid=" + i : "action=channelfriend&uid=" + i;
	var s = "/ajax.php";
	/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (s = "/bbsajax.php"), jQuery.ajax({
		type: "POST",
		url: s,
		data: a,
		dataType: "json",
		beforeSend: function(t) {},
		success: function(i) {
			"ok" == i.result ? (o = 0 == o ? 1 : 0, e(n, o, t)) : e(n, o, t)
		}
	})
}

function weiboshare(t, e, i) {
	var o = e;
	i = i || "";
	var n = "http://service.weibo.com/share/share.php?appkey=2254065920&title=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(o) + "&ralateUid=1721449743";
	i && (n += "&pic=" + encodeURIComponent(i)), window.open(n, "_blank", "scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes,")
}

function tracker_request(t) {
	var e = encodeURIComponent(window.location.href),
		i = "//qt.qyer.com/beacon.gif?type=click&category=" + encodeURIComponent(t) + "&campaign=inpage&",
		o = encodeURIComponent(document.referrer),
		n = jQuery.cookie("_guid") || "",
		a = jQuery.cookie("_uid") || "",
		s = jQuery.cookie("_session") || "";
	if (i += "referer=" + e + "&referer_link=" + o + "&guid=" + n + "&user_id=" + a + "&session=" + s, "https:" !== document.location.protocol) {
		var r = new Image;
		r.src = i
	}
}

function flash(t, e, i) {
	if ("" == t) return "";
	e = e ? e : 590, i = i ? i : 410;
	var o = "";
	return o += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + e + '" height="' + i + '">', o += '<param name="movie" value="' + t + '">', o += '<param name="quality" value="high">', o += '<param name="wmode" value="transparent">', o += '<param name="menu" value="false">', o += '<embed src="' + t + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + e + '" height="' + i + '" wmode="transparent" ></embed>', o += "</object>"
}

function showFlash(t, e, i, o) {
	i = i ? i : 590, o = o ? o : 410;
	var n = "";
	n += "<style>", n += ".popup_video_bg{background:url(//static.qyer.com/images/plan2/popup_video_bg.png);}", n += "</style>", n += flash(e, i, o), jQuery("#" + t).html(n), qyerUI.popup.show({
		id: t,
		width: i
	}), jQuery(".ui_popup_bg").addClass("popup_video_bg"), jQuery(".ui_popup_close").css({
		top: -30,
		right: -30
	})
}

function showJnFlash(t) {
	showFlash(t, "http://tv.sohu.com/upload/swf/20130917/PlayerShell.swf?autoplay=true&skinNum=1&api_key=1b047048287fa2a7ca1370e2f19a3f93&id=60435608&topBar=0&showRecommend=0&shareBtn=1&likeBtn=1&topBarFull=1&topBarNor=1&sogouBtn=0&qq-pf-to=pcqq.discussion&isListPlay=0")
}

function review_changetitlebtn(t) {
	var e = $(t).val();
	e = $.trim(e);
	var i = e.length > 0,
		o = $("#plans_savetitle_ok");
	i ? (o.get(0).disabled = !1, o.removeClass("ui_button_disabled").addClass("ui_button")) : (o.get(0).disabled = !0, o.removeClass("ui_button").addClass("ui_button_disabled"))
}

function _plans_copytravels(t) {
	return QYER.uid > 0 ? void popup.ajax({
		url: "/api.php?action=showcopytravelsnote&tid=" + t,
		width: 460
	}) : void ajaxlogin(0, "", "bbsajax.php", "pagereload")
}

function review_index_savetitle() {
	var t = $("#index_plans_title").val() || "",
		e = util.getwordlen(t);
	return e > 36 ? void qyerUI.message({
		msg: "计划标题只能为1~18个字",
		type: "warn"
	}) : void $.get("/qcross/plan/planapi_action_copyplan", {
		routeid: routeid,
		title: t
	}, function(t) {
		var e = $.parseJSON(t);
		"ok" == e.result ? (pupclose(), qyerUI.message({
			msg: e.data.msg || "复制成功,3秒钟跳转到新复制的行程页",
			type: "true"
		}), setTimeout(function() {
			location.href = e.data.url
		}, 3e3)) : "77" == e.error_code ? ajaxlogin() : qyerUI.message({
			msg: e.data.msg
		})
	})
}

function _plans_copyplan(t) {
	window.routeid = t, popup.ajax({
		url: "/qcross/plan/planapi_action_indexsettitle_which_review",
		width: 500
	})
}
jQuery.postJSON = function(t, e, i) {
	return jQuery.ajax({
		type: "POST",
		url: t,
		data: e,
		dataType: "json",
		success: i
	})
};
var qyerUI = {
	version: "0.1"
};
! function(t) {
	function e() {
		i || t("input[placeholder], textarea[placeholder]").each(function() {
			for (var e = !1, i = 0; i < o.length; i++) this == o[i] && (e = !0);
			if (!e) {
				o.push(this);
				var n = t(this).attr("placeholder");
				"" == t(this).val() ? t(this).val(n).css("color", "#959595") : t(this).val() == n && t(this).css("color", "#959595"), t(this).on("focus", function() {
					t(this).val() == n && t(this).val("").css("color", "")
				}), t(this).on("blur", function() {
					"" == t(this).val() && t(this).val(n).css("color", "#959595")
				})
			}
		})
	}
	var i = "placeholder" in document.createElement("input"),
		o = [];
	qyerUI.placeholder = e, window.fixPlaceholder = e
}(jQuery), jQuery(function() {
		qyerUI.placeholder()
	}),
	function(t) {
		function e() {
			return t("html").css({
				overflow: "",
				height: ""
			}), t("body").css({
				overflow: "",
				height: ""
			}), t(".ui_fullpupBox_bg").hide(), n = !1, !1
		}

		function i(e) {
			n && t("body").append(a), n = !1, t("html").css({
				overflow: "hidden",
				height: t(window).height()
			}), t("body").css({
				overflow: "hidden",
				height: t(window).height()
			}), t(".ui_fullpupBox_bg").css({
				display: "block",
				height: t(window).height()
			}), t(".ui_fullpupBox").css({
				width: e
			}), t(".ui_fullpupBox_main").text("")
		}
		var o = {},
			n = !0,
			a = "<div class='ui_fullpupBox_bg'><div class='ui_fullpupBox'><div class='ui_fullpupBox_main'></div></div></div>";
		t(document).on("click", ".ui_fullpupBox_close", function() {
			e()
		}), o.ajax = function(e) {
			var o = e.url,
				n = e.width;
			i(n), t.get(o, function(e) {
				t(".ui_fullpupBox_main").html(e), t(".ui_fullpupBox_head").css({
					width: n
				})
			})
		}, o.show = function(e) {
			var o = e.id,
				n = e.width;
			i(n);
			var a = t("#" + o).html();
			t(".ui_fullpupBox_main").html(a), t(".ui_fullpupBox_head").css({
				width: n
			})
		}, qyerUI.fullpup = o
	}(jQuery),
	function(t) {
		function e() {
			t(".ui_popup_bg").fadeOut(300)
		}

		function i(i, o) {
			a && (t("body").append(s), t(".ui_popup_close").on("click", function() {
				e()
			})), a = !1, i = parseInt(i, 10), t(".ui_popup_bg").css({
				height: t(document).height()
			}).stop(!0, !0).fadeIn(300), t(".ui_popup").css({
				width: i,
				top: t(document).scrollTop()
			}), t(".ui_popup_main").text(""), t(".ui_popup_close").hide(), "show" == o && t(".ui_popup_close").show()
		}

		function o() {
			var e = t(window).height(),
				i = t(".ui_popup").height(),
				o = (e - i) / 2;
			o = o < 20 ? 20 : o, t(".ui_popup").css("margin-top", o)
		}
		var n = {},
			a = !0,
			s = '<div class="ui_popup_bg"><div class="ui_popup"><p class="ui_popup_close" title="关闭"></p><div class="ui_popup_main"></div></div></div>';
		n.pupclose = e, n.start = i, n.ajax = function(e) {
			if ("object" == typeof e) var n = e.url,
				a = e.width || 500,
				s = e.isclose || "show",
				r = e.callback || !1;
			i(a, s), t.get(n, function(e) {
				t(".ui_popup_main").html(e), "function" == typeof r && r(), o()
			})
		}, n.show = function(e) {
			if ("object" == typeof e) var n = e.id,
				a = e.width || 500,
				s = e.isclose || "show";
			i(a, s);
			var r = t("#" + n).html();
			t(".ui_popup_main").html(r), o()
		}, n.showHtml = function(e) {
			if ("object" == typeof e) var n = e.html,
				a = e.width || 500,
				s = e.isclose || "show";
			i(a, s), t(".ui_popup_main").html(n), o()
		}, qyerUI.popup = n
	}(jQuery),
	function() {
		function t() {
			return jQuery(".ui_pupBox_bg").hide(), o = !1, !1
		}

		function e(t) {
			o && jQuery("body").append(n), o = !1, t = parseInt(t, 10), jQuery(".ui_pupBox_bg").css({
				display: "block",
				height: jQuery(document).height()
			}), jQuery(".ui_pupBox").css({
				width: t + 2,
				top: jQuery(document).scrollTop()
			}), jQuery(".ui_pupBox_main").text(""), jQuery(".ui_pupBox_close").show()
		}
		var i = {},
			o = !0,
			n = "<div class='ui_pupBox_bg'><div class='ui_pupBox'><div class='ui_pupBox_close'></div><div class='ui_pupBox_main'></div></div></div>";
		window.pupclose = t, i.start = e, i.ajax = function(i, o, n) {
			var a = "show",
				s = typeof i;
			"object" == s ? (url = i.url, o = i.width, a = i.closebtn, n = i.cb) : url = i, e(o), jQuery.get(url, function(t) {
				if (jQuery(".ui_pupBox_main").html(t), "function" == typeof n) try {
					n()
				} catch (e) {}
			}), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == a && jQuery(".ui_pupBox_close").hide()
		}, i.show = function(i, o) {
			var n = "show",
				a = typeof i;
			"object" == a ? (id = i.id, o = i.width, n = i.closebtn) : id = i, e(o);
			var s = jQuery("#" + id).html();
			jQuery(".ui_pupBox_main").html(s), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, i.showHtml = function(i, o) {
			var n = "show",
				a = typeof i;
			"object" == a ? (html = i.html, o = i.width, n = i.closebtn) : html = i, e(o), jQuery(".ui_pupBox_main").html(html), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, window.popup = i
	}(),
	function(t) {
		function e(e, o) {
			i && (t("body").append("<textarea id='js_autoheight_clone'></textarea>"), i = !1);
			var n = t("#js_autoheight_clone");
			n.width(t(e).width()), n.val(t(e).val()), n.css("font-size", o.fontSize), n.css("line-height", o.lineHeight), setTimeout(function() {
				var i = n.get(0).scrollHeight;
				t(e).height(i)
			}, 1)
		}
		var i = !0;
		qyerUI.autoheight = e
	}(jQuery),
	function(t) {
		function e(e) {
			if ("object" == typeof e) {
				var o = e.msg || "操作已成功！",
					n = e.type || "true",
					a = e.timeout || 2e3;
				clearTimeout(i);
				var s = document.getElementById("mod_message"),
					r = document.getElementById("mod_message_cont");
				if (!s) {
					var u = document.createElement("div");
					u.id = "mod_message";
					var c = document.createElement("p");
					c.id = "mod_message_cont", u.appendChild(c), document.body.appendChild(u), s = document.getElementById("mod_message"), r = document.getElementById("mod_message_cont")
				}
				r.className = n, r.innerHTML = o, s.style.display = "block";
				var l = s.offsetWidth,
					d = document.body.offsetWidth,
					p = (d - l) / 2;
				s.style.left = p + "px", "stop" != a && (i = setTimeout(function() {
					t(s).slideUp()
				}, a))
			}
		}
		var i;
		qyerUI.message = e
	}(jQuery);
var process_submit = function() {
	var t = function() {
		this.id = null, this.rmclass = null, this.addclass = null, this.isval = !0, this.before = function(t, e, i, o, n) {
			this.id = t, this.rmclass = e, this.addclass = i, o = o || "提交中...", "html" == n && (this.isval = !1), this.isval ? jQuery("#" + t).removeClass(e).addClass(i).val(o) : jQuery("#" + t).removeClass(e).addClass(i).html(o)
		}, this.after = function(t) {
			this.isval ? jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).val(t) : jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).html(t)
		}
	};
	return new t
}();
popup.coast = function(t, e, i, o) {
	function n() {
		jQuery(".ui_coast").fadeOut(500), jQuery(".ui_coast").remove()
	}
	t = t || 400, i.text = i.text || "感谢你的分享，让其他穷游er看到了你在这里留下的回忆。";
	var a = '<div class="ui_coast"><p class="ui_coast_cnt"><img src="//static.qyer.com/images/common/tpl/icon_true.png" width="34" height="34" alt="" class="ui_coast_img" />' + i.text + '</p><ul class="ui_coast_num clearfix">';
	if (void 0 != i.credits1 && (a = a + "<li>经验值<span>" + i.credits1 + "</span></li>"), void 0 != i.credits2 && (a = a + "<li>贡献<span>" + i.credits2 + "</span></li>"), "undefined" != typeof o) switch (o) {
		case "warn":
			a = a.replace(/icon_true.png/, "icon_warn.png");
			break;
		case "error":
			a = a.replace(/icon_true.png/, "icon_error32.png")
	}
	a += "</ul></div>", jQuery("body").append(a);
	var s = jQuery(window).width(),
		r = jQuery(window).height(),
		u = jQuery(".ui_coast").outerHeight(),
		c = t + 42,
		l = (s - c) / 2,
		d = (r - u) / 2 + jQuery(document).scrollTop(),
		p = 10;
	if (e)
		if (e = jQuery("#" + e), e.size() > 0) {
			var h = e.offset(),
				_ = e.outerWidth(),
				f = e.outerHeight(),
				m = h.top - u - p,
				y = h.left - (c - _) / 2;
			s - _ - y + p < c ? (y = s - c - p, h.top - jQuery(document).scrollTop() < u ? (m = h.top + f + p, jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: m
			}).show()) : jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: m
			}).show()) : h.top - jQuery(document).scrollTop() < u ? (m = h.top + f + p, y < 10 && (y = 10), jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: m
			}).show()) : (y < 10 && (y = 10), jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: m
			}).show())
		} else jQuery(".ui_coast").css({
			width: t,
			left: l,
			top: d
		}).show();
	else jQuery(".ui_coast").css({
		width: t,
		left: l,
		top: d
	}).show();
	window.setTimeout(n, 2e3)
}, jQuery(function(t) {
	window.uitab = function() {
		t(".ui_tab").each(function() {
			t(this).children(".ui_tab_trigger").find(".ui_tab_trigger_item").each(function(e) {
				t(this).on("click", function() {
					0 == t(this).hasClass("ui_tab_trigger_item_disabled") && (t(this).addClass("ui_tab_trigger_item_current").siblings(".ui_tab_trigger_item").removeClass("ui_tab_trigger_item_current"), t(this).parents(".ui_tab_trigger").siblings(".ui_tab_cnt").children(".ui_tab_cnt_item:eq(" + e + ")").addClass("ui_tab_cnt_item_current").siblings(".ui_tab_cnt_item").removeClass("ui_tab_cnt_item_current"))
				})
			})
		})
	}, window.uitab()
});
var tips = function() {
		var t = function() {
			this.isshow = !1, this.html = ["<div class='ui_message __XXtipsXX_' >", "", "</div>"], this.scroll_show = function() {}, this.show = function(t, e) {
				t = t || "", e = e || 2e3;
				var i = this.getobj();
				return this.isshow ? (jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), void i.html(t)) : (this.html[1] = t, jQuery("body").append(this.html.join("")), i = this.getobj(), jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), i.show(), this.isshow = !0, void setTimeout(function() {
					jQuery(i).slideUp(), tips.isshow = !1
				}, e))
			}, this.hide = function() {
				this.getobj().fadeOut(), this.isshow = !1
			}, this.getobj = function() {
				return jQuery(".__XXtipsXX_")
			}
		};
		t.prototype.confirm = function(t, e, i) {
			void 0 == i && (i = "您确定要删除吗？");
			var o = t.clientX,
				n = t.clientY,
				a = "jsdelconfirm",
				s = ['<div class="ui_delete" id="' + a + '">', '<div class="ui_delete_box">', '<div><span class="icon_doubt">' + i + "</span></div>", '<div class="ui_delete_btns">', '<input type="button" value="取消" class="ui_button_cancel" id="jsconfirmcancel" /><input type="button" id="jsconfirmok" value="确定" class="ui_button" />', "</div>", "</div>", "</div>"],
				r = jQuery("#" + a);
			r.size() <= 0 ? (jQuery("body").append(s.join("")), r = jQuery("#" + a)) : jQuery(r).find(".icon_doubt").html(i);
			var u = 91,
				c = jQuery(document).scrollTop() + n - 100;
			jQuery(r).css("top", c + "px");
			var l = jQuery(".ui_delete").width(),
				d = o,
				p = jQuery(document).scrollLeft();
			o - p < l || (d = o - l / 2);
			var h = jQuery(document).width();
			d + l > h && (d = h - l - 20), d <= 0 && (d = 20), jQuery(r).hide(), jQuery(r).css({
				left: d,
				top: c + u
			}).animate({
				height: "show",
				opacity: "show",
				top: c
			}, 200), jQuery("#jsconfirmcancel").unbind("click").click(function() {
				jQuery(r).animate({
					height: "hide",
					opacity: "hide",
					top: c + u
				}, 200)
			}), jQuery("#jsconfirmok").unbind("click").click(function(t) {
				e(), jQuery(r).animate({
					height: "hide",
					opacity: "hide",
					top: c + u
				}, 200)
			})
		};
		var e = new t;
		return jQuery(document).scroll(function() {
			e.scroll_show()
		}), e
	}(),
	_ajax = {
		ajaxurl: "/ajax.php",
		get: function(t, e, i) {
			var o = +new Date;
			jQuery.get(_ajax.ajaxurl + "?action=" + t + "&rnd=" + o, e, i)
		},
		getJSON: function(t, e, i) {
			var o = +new Date;
			jQuery.getJSON(_ajax.ajaxurl + "?action=" + t + "&rnd=" + o, e, i)
		},
		post: function(t, e, i) {
			e = jQuery.merge(e, {
				type: "POST"
			}), jQuery.post(_ajax.ajaxurl + "?action=" + t, e, i)
		}
	};
String.prototype.gbtrim = function(t, e) {
	for (var i = "", o = e || "", n = 0, a = 0; a < this.length; a++) this.charCodeAt(a) > 127 || 94 == this.charCodeAt(a) ? n += 2 : n++;
	if (n <= t) return this;
	n = 0, t = t > o.length ? t - o.length : t;
	for (var a = 0; a < this.length; a++) {
		if (this.charCodeAt(a) > 127 || 94 == this.charCodeAt(a) ? n += 2 : n++, n > t) {
			i += o;
			break
		}
		i += this.charAt(a)
	}
	return i
}, jQuery(function() {
	var t = jQuery(".auto_text").size() > 0,
		e = function() {
			jQuery("body").append("<textarea id='auto_text_shadow' style='display:block;'></textarea>")
		};
	t && e();
	var i = function(t) {
		jQuery(".auto_text").size() && e();
		var i = t || jQuery(".auto_text"),
			o = "auto_text_shadow",
			n = jQuery("#" + o);
		if (o != jQuery(i).attr("id")) {
			jQuery(n).width(jQuery(i).width());
			var a = jQuery(i).css("font-size"),
				s = jQuery(i).css("line-height"),
				r = jQuery(i).css("text-indent"),
				u = parseInt(jQuery(i).css("min-height").replace(/px/, ""));
			u = s, jQuery(n).css({
				height: "18px",
				"font-size": a,
				"text-indent": r
			});
			var c = jQuery(i).val() + "穷游";
			jQuery(n).val(c), setTimeout(function() {
				var t = jQuery(n).get(0).scrollHeight;
				t <= u && (t = u), jQuery(i).height(t)
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
	if (top == thiswin) {
		var t = window.location.href;
		if (t.indexOf("m.qyer.com") == -1 && "1" != yjbGetCookie("_surveyed") && "1" != yjbGetCookie("surveyed")) {
			var e = Math.random();
			65 == parseInt(100 * e) && (jQuery.getJSON("//feed.qyer.com/index/survey?callback=?", function(t) {
				if (t.show) {
					var e = '<div style="width:520px;"><div class="ui_pupBox_head">欢迎参与穷游调查</div><div class="ui_pupBox_content" style="background:url(//static.qyer.com/images/common/wenjuan/qyer_wenjuan_bg.png) no-repeat;padding-left:160px;"><div class="f14 p10 pb20">' + t.survey_content + '</div><div class="ui_pupBox_foot clearfix" style="padding:0;"><a class="ui_button fr" target="_blank" id="to_survey" href="' + t.survey_url + '">参与调查</a><input type="button" onclick="javascript:pupclose();" class="ui_button_cancel fr mr10" value="不参与"></div></div></div>';
					popup.showHtml(e, 520)
				}
			}), jQuery(document).on("click", "#to_survey", function() {
				var t = new Date;
				return t.setTime(t.getTime() + 31536e6), document.cookie = "surveyed=1;domain=.qyer.com;expires=" + t.toGMTString(), pupclose(), !0
			}))
		}
	}
}), jQuery(function() {
	function t(t) {
		var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
			i = window.location.search.substr(1).match(e);
		return null != i ? unescape(i[2]) : null
	}
	var e = t("targetobj");
	null != e && ("login" == e && "reg" == e || (e = "reg"), /^http:\/\/bbs\.qyer\.com\//.test(window.location.href) ? ajaxlogin(0, "", "bbsajax.php", "reload", e, window.location.href) : ajaxlogin(0, "", "ajax.php", "reload", e, window.location.href))
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
		function t() {
			o.hide()
		}
		jQuery("._js_jiathis_style_share a").mouseover(function() {
			jiathis_config.title = "", jiathis_config.summary = "", jiathis_config.pic = "", jiathis_config.url = "";
			var t = jQuery(this),
				e = t.attr("data-title"),
				i = t.attr("data-summary"),
				o = t.attr("data-pic"),
				n = t.attr("data-url") || "";
			e && (e = e.replace(/&gt;/g, ">"), e = e.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), e && (jiathis_config.title = e), i && (jiathis_config.summary = i), o && (jiathis_config.pic = o), n && (jiathis_config.url = n)
		}), jQuery("._js_jiathis_style_share").mouseover(function() {
			var t = jQuery(this),
				e = t.attr("data-title"),
				i = t.attr("data-summary"),
				o = t.attr("data-pic"),
				n = t.attr("data-url") || "";
			e && (e = e.replace(/&gt;/g, ">"), e = e.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), jiathis_config.title || (jiathis_config.title = e), jiathis_config.summary || (jiathis_config.summary = i), jiathis_config.pic || (jiathis_config.pic = o), jiathis_config.url || (jiathis_config.url = amendUrl(window.location.href, n))
		});
		var e, i = jQuery(".photo_end_share_btn"),
			o = jQuery(".bbs_tools_sharelay");
		i.hover(function() {
			window.clearTimeout(e), o.show()
		}, function() {
			e = window.setTimeout(function() {
				t()
			}, 200)
		}), o.hover(function() {
			window.clearTimeout(e), jQuery(this).show()
		}, function() {
			e = window.setTimeout(function() {
				t()
			}, 200)
		}), "https:" != document.location.protocol && window.setTimeout(function() {
			loadjscssfile("http://v3.jiathis.com/code/jia.js?uid=1346345347004722", "js")
		}, 500)
	}), jQuery(document).on("click", "._js_jiathis_style_share a", function() {
		var t = jQuery(this).attr("class");
		if ("jiathis_button_tsina" != t) {
			var e = jQuery(this).attr("data-url");
			e && (jiathis_config.url = amendUrl(jiathis_config.url, e))
		}
	}), jQuery(function() {
		function t() {
			e = 0, clearTimeout(o), window.setTimeout(function() {
				0 == e && jQuery(".ui_usercard").fadeOut(50)
			}, 500)
		}
		var e = 0,
			i = 0;
		jQuery(document).on("click", "._js_follow_func", function() {
			follow(jQuery(this))
		}), jQuery(document).on("click", "._jsaddmsg", function() {
			if (QYER.uid <= 0) return ajaxlogin(), !1;
			var t = jQuery(this).attr("data-uid"),
				e = jQuery(this).attr("data-relate");
			popup.ajax("/api.php?action=addmsg&oper=form&uid=" + t + "&relate=" + e, 510)
		});
		var o = 0;
		jQuery(document).on("mouseover", "._js_face_usercard,.ui_headPort", function(t) {
			if (!i) {
				var n = document.createElement("link");
				n.type = "text/css", n.rel = "stylesheet", n.href = "//static.qyer.com/css/user2/medal.css", document.body.appendChild(n), i = 1
			}
			var a = jQuery(this).attr("data-uid");
			if (void 0 == a && (a = jQuery(this).attr("alt")), e = 1, jQuery(".ui_usercard").remove(), void 0 == a) return !1;
			thiz = this;
			var s = t.pageX;
			t.pageX + 300 > jQuery(window).width() && (s = jQuery(window).width() - 300);
			var r = "/ajax.php";
			/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (r = "/bbsajax.php"), clearTimeout(o), o = setTimeout(function() {
				jQuery.get(r + "?action=usercard&uid=" + a, function(e) {
					"" != e && (jQuery("body").append(e), jQuery(".ui_usercard").css({
						width: 298,
						height: "auto",
						position: "absolute",
						left: s,
						top: t.pageY + 10,
						zIndex: 99
					}).show())
				})
			}, 300)
		}), jQuery(document).on("mouseover", ".ui_usercard", function() {
			e = 1
		}), jQuery(document).on("mouseleave", ".ui_usercard", function() {
			t()
		}), jQuery("._js_face_usercard,.ui_headPort").mouseleave(function() {
			t()
		})
	}), jQuery(document).on("click", ".ui_popup_close", function() {
		jQuery(".ui_popup_bg").removeClass("popup_video_bg")
	}), ! function(t) {
		qyerUI = window.qyerUI || {}, qyerUI.SNS = qyerUI.SNS || {}, qyerUI.SNS.share = {
			_init: function() {
				this._bindBtnEvent()
			},
			_bindBtnEvent: function() {
				t(document).on("click", "._jsclose", function() {
					pupclose()
				}), t(document).on("click", "._jsgettoken", function() {
					var e, i, o;
					e = t(this), i = e.attr("url") + "&refer=" + window.location.href, o = e.attr("notoken"), window.open(i, "newwindow", "height=450px,width=600px,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), pupclose(), e = i = o = null
				})
			},
			create: function(t) {
				document.write(this.getHTML(t))
			},
			getHTML: function(t) {
				var e = [],
					t = t || {},
					i = t.weibopublish || {},
					o = t.qqpublish || {};
				return e.push('<p class="ui_textboxShare fr ' + ("min" == t.iconSize ? "ui_textboxShareSmall" : "") + '">'), e.push('    <em class="title">' + (t.text ? t.text : "同时转发到：") + "</em>"), e.push('    <label class="weibo">'), e.push('        <input type="checkbox" name="weibopublish" class="weibopublish" flag="0" weibo="weibo" value="" onclick="qyerUI.SNS.share.onSelect(this)" id="' + (i.id || "weibopublish") + '"  notoken="' + ("0" == i.notoken ? "0" : "1") + '" '), "0" == i.notoken && i.checked && e.push(' checked="checked" '), e.push(" />"), e.push('        <span class="icon ' + ("0" == i.notoken ? "" : "iconnull") + '"></span>'), e.push("    </label>"), e.push('    <label class="qzone">'), e.push('        <input type="checkbox" name="qqpublish" class="qqpublish" flag="0" value="" weibo="qq"  onclick="qyerUI.SNS.share.onSelect(this)" id="' + (o.id || "qqpublish") + '" notoken="' + ("0" == o.notoken ? "0" : "1") + '"'), "0" == o.notoken && o.checked && e.push(' checked="checked" '), e.push(" />"), e.push('        <span class="icon ' + ("0" == o.notoken ? "" : "iconnull") + '"></span>'), e.push("    </label>"), e.push("</p>"), e.join("")
			},
			onSelect: function(e) {
				if (!QYER.uid) return e.checked = !1, void ajaxlogin();
				var i = t(e);
				if (i.is(":checked")) {
					if ("1" == i.attr("notoken")) return void this._showpopup(i);
					if ("0" == i.attr("flag")) {
						var o = i.attr("weibo"),
							n = i.attr("id"),
							a = i.attr("notoken");
						t.getJSON("/api.php?action=checkweibo&type=" + o, function(t) {
							if ("ok" != t.result) {
								var e = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">您在我们网站的token已经过期，是否重新授权完成同步？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + a + '" weibo="' + o + '" type="button" url="//login.qyer.com/login.php?action=' + o + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + n + '" value="取消"></div></div>';
								popup.showHtml(e, 440)
							}
						}), i.attr("flag", 1)
					}
				}
			},
			_showpopup: function(t) {
				var e, i, o, n;
				e = t.attr("weibo"), i = t.attr("id"), o = t.attr("notoken"), n = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">使用此功能需绑定到穷游，现在就绑定吗？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + o + '" weibo="' + e + '" type="button" url="//login.qyer.com/login.php?action=' + e + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + i + '" value="取消"></div></div>', t.attr("checked", !1), popup.showHtml(n, 440), e = i = o = n = null
			},
			refresh: function(e) {
				var i;
				t.each(e.list, function() {
					i = t("." + this.className), i.attr({
						notoken: this.notoken,
						checked: "0" == this.notoken && this.checked,
						flag: "1"
					}), i.next()["1" == this.notoken ? "addClass" : "removeClass"]("iconnull")
				})
			}
		}, window.qyerUI.SNS.share._init()
	}(jQuery),
	function(t) {
		window.qyerUtil || (window.qyerUtil = {
			_head: null,
			_getHead: function() {
				return this._head || (this._head = document.getElementsByTagName("head")[0]), this._head
			},
			insertStyle: function(t) {
				var e = document.createElement("style");
				e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t, this._getHead().appendChild(e), e = null
			},
			ajaxFillter: function(t, e, i) {
				if ("object" == typeof t && t.extra && t.extra.code) switch (0 | t.extra.code) {
					case 1:
						window.qyerUtil.showAntiSpam(t.extra.msg)
				}
			},
			_showAntiSpam_isLoadCss_: !1,
			showAntiSpam: function(e) {
				function i(t) {
					return ['<div class="qui-antiSpam">', "<div>", '<div class="qui-antiSpam-dt">', '<div class="qui-antiSpam-content">', '<img src="//static.qyer.com/models/common/component/antiSpam/icon.png" />', '<p class="antiSpamP1">' + (t || "由于敏感词限制，你刚刚发布的内容需要编辑审核后才能被他人访问") + "</p>", '<p class="antiSpamP2 js_antiSpam_close">我知道了 > </p>', "</div>", "</div>", "</div>", "</div>"].join("")
				}
				window.qyerUtil._showAntiSpam_isLoadCss_ || (window.qyerUtil.insertStyle([".qui-antiSpam{position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-image:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png); z-index: 110000; overflow-y: auto; }", ".qui-antiSpam >div{display: table; height: 100%; margin: 0 auto; }", ".qui-antiSpam-dt{display: table-cell; vertical-align:middle; text-align: center; }", ".qui-antiSpam-content{border: 1px solid #ccc; width: 575px; background-color: #f5f5f5; box-shadow: 0px 0px 15px #999; }", ".qui-antiSpam-content > img{margin:50px 0px 30px 0px; }", ".qui-antiSpam-content .antiSpamP1{font-size:20px; width:337px; margin:0 auto; }", ".qui-antiSpam-content .antiSpamP2{font-size:14px; margin:20px 0px 35px 0px; color:#0074b1; cursor:pointer; }"].join("")), window.qyerUtil._showAntiSpam_isLoadCss_ = !0), t(i(e)).appendTo(document.body).find(".js_antiSpam_close").one("click", function(e) {
					t(e.currentTarget).parent().parent().parent().parent().remove()
				})
			}
		})
	}(jQuery);
var util = {
	getwordlen: function() {
		var t = function(t) {
				if ("undefined" == typeof t) return 0;
				var e = t.match(/[^\x00-\x80]/g);
				return t.length + (e ? e.length : 0)
			},
			e = function(t) {
				return t.replace(/[^\x00-\xff]/g, "*")
			};
		return function(i, o) {
			return o && (i = e(i)), t(jQuery.trim(i))
		}
	}()
};
! function(t) {
	"use strict";
	t(function() {
		function e(e) {
			var i = a.filter(function() {
					return t(this).attr("planid") == e.planid
				}).find(".editstatus"),
				o = e.uname,
				n = 0;
			i.text(o + "在编辑此行程").show(), u.push(setInterval(function() {
				n += 1, i.text(o + "在编辑此行程" + r[n % 3])
			}, 1e3))
		}

		function i() {
			for (a.find(".editstatus").empty().hide(); u.length;) clearInterval(u.shift())
		}

		function o() {
			n.checkEditing({
				data: {
					planid: s
				},
				onSuccess: function(t) {
					var o, n;
					if (i(), t.data && t.data.length > 0)
						for (o = 0, n = t.data.length; o < n; o++) e(t.data[o])
				}
			})
		}
		var n = {
				checkEditing: function(t) {
					t.posturl = "/qcross/plan/planapi_action_synergylocking", qyerUtil.doAjax(t)
				}
			},
			a = t("div[planid]"),
			s = a.map(function() {
				return t(this).attr("planid")
			}).get().join(","),
			r = [".", "..", "..."],
			u = [];
		o(), setInterval(o, 6e4)
	})
}(jQuery), $(function() {
	$(".u_spoor_more_edit").click(function() {
		$(this).hasClass("u_spoor_more_edit_click") ? $(this).removeClass("u_spoor_more_edit_click") : $(this).addClass("u_spoor_more_edit_click")
	}), $(".js_edit_link").each(function() {
		$(this).on("click", function(t) {
			var e = $(this),
				i = e.parents(".js_edit_box"),
				o = i.find(".js_edit_text"),
				n = i.find(".js_edit_textarea"),
				a = i.find(".jsstar"),
				s = i.find(".jsstaredit");
			s.find(".jsstaredit").find(".starstips");
			n.is(":hidden") && (n.slideDown(200), o.slideUp(200), a.hide(), s.show())
		})
	}), $(".u_spoor_country .city_hover,.u_spoor_continent_layer").hover(function() {
		var t = $(".u_spoor_country .city_hover").offset().left,
			e = $(".u_spoor_country .city_hover").offset().top;
		$(".u_spoor_continent_layer").show(), $(".u_spoor_continent_layer").css({
			left: t,
			top: e
		})
	}, function() {
		$(".u_spoor_continent_layer").hide()
	});
	var t = $(".u_set_data_edit");
	t.find(".ui2_textarea").on("change", function() {
		qyerUI.autoheight(this, {
			fontSize: "14px",
			lineHeight: "24px"
		})
	}), t.find(".ui2_textarea").on("keydown", function() {
		qyerUI.autoheight(this, {
			fontSize: "14px",
			lineHeight: "24px"
		})
	}), t.find(".ui2_textarea").on("keyup", function() {
		qyerUI.autoheight(this, {
			fontSize: "14px",
			lineHeight: "24px"
		})
	}), $(".u_select").each(function() {
		$(this).click(function() {
			$(".u_select").css({
				position: ""
			}), $(this).css({
				position: "relative"
			}), $(".u_select").find(".slist").hide(), $(this).find(".slist").show()
		}), $(this).find(".slist li").hover(function() {
			$(this).addClass("hover")
		}, function() {
			$(this).removeClass("hover")
		}).click(function(t) {
			t.stopPropagation();
			var e = $(this).text();
			$(this).parents(".u_select").find(".stitle em").text(e), $(this).parents(".slist").hide(), $(this).parents(".u_select").css({
				position: ""
			})
		})
	}), $(".u_ind_banner .infos_self").hover(function() {
		$(this).addClass("infos_edit")
	}, function() {
		$(this).removeClass("infos_edit")
	});
	var e = "";
	$("#map_share_btn").hover(function() {
		var t = $(this).attr("data-uid");
		t > 0 && $.get("//www.qyer.com/u/user.php?action=creatsharemig&uid=" + t + "&rnd=" + +new Date, function(t) {
			created = !0, $("#_jssinaweiboshare_").show(), $("#_js_map_img").hide();
			var i = JSON.parse(t);
			e = i.data.imgsrc, __wwwqyer__sharetext = i.data.text
		}), $(".map_share_item").show(), $(this).parent(".mani").addClass("pr")
	}, function() {
		$(".map_share_item").hide(), $(this).parent(".mani").removeClass("pr")
	}), $("#_jssinaweiboshare_").click(function() {
		weiboshare(__wwwqyer__sharetext, "//www.qyer.com/u/" + QYER.uid + "/?campaign=weibo&category=zujifenxiang", e)
	}), $(".jsdelplan").on("click", function(t) {
		var e = "jsplans_del_confirm",
			i = $(this).attr("value"),
			o = $(this).attr("data-linkedbbs");
		$("#" + e).find(".j_button_ok").attr("plan_id", i).val("确定删除");
		var n = "确认要删除此行程吗？";
		1 == o && (n = "此行程已经关联到论坛，删除将导致论坛中也无法显示行程。"), $("#" + e).find(".j_del_msg").html(n), qyerUI.popup.show({
			id: e,
			width: 400,
			isclose: "show"
		})
	}), $("._jsRashPlan").on("click", function(t) {
		var e = "jsplans_del_confirm",
			i = $(this).attr("data-id");
		$("#" + e).find(".j_button_ok").attr("plan_id", i).attr("data-cmd", "jsRashPlan").val("确定删除");
		var o = "确认要删除此行程吗？删除后将永久不能恢复。";
		$("#" + e).find(".j_del_msg").html(o), qyerUI.popup.show({
			id: e,
			width: 400,
			isclose: "show"
		})
	}), $("._jsRestorePlan").on("click", function(t) {
		var e = {
				id: $(this).attr("data-id"),
				type: 0
			},
			i = "/qcross/plan/planapi_action_rmplan";
		$.post(i, e, function(t) {
			var e = JSON.parse(t);
			"ok" == e.result ? (tips.show("行程已经还原，可以在“我的行程计划”中找到这个行程"), setTimeout(function() {
				window.location.reload()
			}, 1500)) : tips.show(e.data.msg)
		})
	}), $(".jsquitplan").on("click", function(t) {
		var e = "jsplans_exit_confirm",
			i = $(this).attr("value"),
			o = $(this).attr("data-uid");
		$(this).attr("data-linkedbbs");
		$("#" + e).find(".exit_button_ok").attr("plan_id", i).attr("uid", o);
		var n = "确认要退出此行程吗？";
		$("#" + e).find(".j_del_msg").html(n), qyerUI.popup.show({
			id: e,
			width: 400,
			isclose: "show"
		})
	}), $("body").on("click", ".exit_button_ok", function() {
		var t = $(this).attr("plan_id"),
			e = $(this).attr("uid"),
			i = {
				planid: t,
				uid: e
			};
		$.post("/qcross/plan/planapi_action_quitplanfellow", i, function(t) {
			var e = JSON.parse(t);
			"ok" == e.result ? window.location.reload() : tips.show(e.data.msg)
		})
	}), $(document.body).on("click", ".ui_popup .j_button_ok", function() {
		var t, e = $(this).attr("data-cmd"),
			i = $(this).attr("plan_id"),
			o = "/qcross/plan/planapi_action_rmplan";
		t = "jsRashPlan" == e ? 2 : "jsRestorePlan" == e ? 0 : 1;
		var n = {
			id: i,
			type: t
		};
		$.post(o, n, function(t) {
			var e = JSON.parse(t);
			"ok" == e.result ? window.location.reload() : tips.show(e.data.msg)
		})
	})
}), $(function() {
	$(".search_del .tag a").click(function() {
		$(this).parent(".tag").prev(".and").remove(), $(this).parent(".tag").remove()
	}), $("body").on("click", "._jscopytravelslist", function() {
		var t = $(this).attr("data-id");
		window._plans_bbstid__ = t, _plans_copytravels(t)
	}), $("body").on("click", "._jscopyplanlist", function() {
		var t = $(this).attr("data-id");
		_plans_copyplan(t)
	})
});