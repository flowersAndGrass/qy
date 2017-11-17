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
	var r = "/ajax.php";
	/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (r = "/bbsajax.php"), jQuery.ajax({
		type: "POST",
		url: r,
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
		r = jQuery.cookie("_session") || "";
	if (i += "referer=" + e + "&referer_link=" + o + "&guid=" + n + "&user_id=" + a + "&session=" + r, "https:" !== document.location.protocol) {
		var s = new Image;
		s.src = i
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

function batchdoingspopup(t, e, i, o) {
	return "undefined" != typeof t && ("undefined" == typeof e && (e = "city"), "undefined" == typeof i && (i = "beento"), o = "undefined" == typeof o ? 1 : o, place_doings_comment_popupmessage.page = o, "undefined" != typeof place_doings_comment_popupmessage[o] ? (popup.showHtml(place_doings_comment_popupmessage[o], "550"), !1) : void jQuery.ajax({
		type: "POST",
		url: "/api.php?action=batchdoingspopup",
		data: {
			oper: i,
			typename: e,
			id: t,
			page: o,
			postid: place_doings_batch_data.join(",")
		},
		cache: !1,
		dataType: "html",
		success: function(t) {
			"" != t && (place_doings_comment_popupmessage[o] = t, popup.showHtml(t, "550"))
		}
	}))
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
			a && (t("body").append(r), t(".ui_popup_close").on("click", function() {
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
			r = '<div class="ui_popup_bg"><div class="ui_popup"><p class="ui_popup_close" title="关闭"></p><div class="ui_popup_main"></div></div></div>';
		n.pupclose = e, n.start = i, n.ajax = function(e) {
			if ("object" == typeof e) var n = e.url,
				a = e.width || 500,
				r = e.isclose || "show",
				s = e.callback || !1;
			i(a, r), t.get(n, function(e) {
				t(".ui_popup_main").html(e), "function" == typeof s && s(), o()
			})
		}, n.show = function(e) {
			if ("object" == typeof e) var n = e.id,
				a = e.width || 500,
				r = e.isclose || "show";
			i(a, r);
			var s = t("#" + n).html();
			t(".ui_popup_main").html(s), o()
		}, n.showHtml = function(e) {
			if ("object" == typeof e) var n = e.html,
				a = e.width || 500,
				r = e.isclose || "show";
			i(a, r), t(".ui_popup_main").html(n), o()
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
				r = typeof i;
			"object" == r ? (url = i.url, o = i.width, a = i.closebtn, n = i.cb) : url = i, e(o), jQuery.get(url, function(t) {
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
			var r = jQuery("#" + id).html();
			jQuery(".ui_pupBox_main").html(r), jQuery(".ui_pupBox_close").bind("click", function() {
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
				var r = document.getElementById("mod_message"),
					s = document.getElementById("mod_message_cont");
				if (!r) {
					var l = document.createElement("div");
					l.id = "mod_message";
					var c = document.createElement("p");
					c.id = "mod_message_cont", l.appendChild(c), document.body.appendChild(l), r = document.getElementById("mod_message"), s = document.getElementById("mod_message_cont")
				}
				s.className = n, s.innerHTML = o, r.style.display = "block";
				var p = r.offsetWidth,
					u = document.body.offsetWidth,
					d = (u - p) / 2;
				r.style.left = d + "px", "stop" != a && (i = setTimeout(function() {
					t(r).slideUp()
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
	var r = jQuery(window).width(),
		s = jQuery(window).height(),
		l = jQuery(".ui_coast").outerHeight(),
		c = t + 42,
		p = (r - c) / 2,
		u = (s - l) / 2 + jQuery(document).scrollTop(),
		d = 10;
	if (e)
		if (e = jQuery("#" + e), e.size() > 0) {
			var h = e.offset(),
				f = e.outerWidth(),
				m = e.outerHeight(),
				g = h.top - l - d,
				b = h.left - (c - f) / 2;
			r - f - b + d < c ? (b = r - c - d, h.top - jQuery(document).scrollTop() < l ? (g = h.top + m + d, jQuery(".ui_coast").css({
				width: t,
				left: b,
				top: g
			}).show()) : jQuery(".ui_coast").css({
				width: t,
				left: b,
				top: g
			}).show()) : h.top - jQuery(document).scrollTop() < l ? (g = h.top + m + d, b < 10 && (b = 10), jQuery(".ui_coast").css({
				width: t,
				left: b,
				top: g
			}).show()) : (b < 10 && (b = 10), jQuery(".ui_coast").css({
				width: t,
				left: b,
				top: g
			}).show())
		} else jQuery(".ui_coast").css({
			width: t,
			left: p,
			top: u
		}).show();
	else jQuery(".ui_coast").css({
		width: t,
		left: p,
		top: u
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
				r = ['<div class="ui_delete" id="' + a + '">', '<div class="ui_delete_box">', '<div><span class="icon_doubt">' + i + "</span></div>", '<div class="ui_delete_btns">', '<input type="button" value="取消" class="ui_button_cancel" id="jsconfirmcancel" /><input type="button" id="jsconfirmok" value="确定" class="ui_button" />', "</div>", "</div>", "</div>"],
				s = jQuery("#" + a);
			s.size() <= 0 ? (jQuery("body").append(r.join("")), s = jQuery("#" + a)) : jQuery(s).find(".icon_doubt").html(i);
			var l = 91,
				c = jQuery(document).scrollTop() + n - 100;
			jQuery(s).css("top", c + "px");
			var p = jQuery(".ui_delete").width(),
				u = o,
				d = jQuery(document).scrollLeft();
			o - d < p || (u = o - p / 2);
			var h = jQuery(document).width();
			u + p > h && (u = h - p - 20), u <= 0 && (u = 20), jQuery(s).hide(), jQuery(s).css({
				left: u,
				top: c + l
			}).animate({
				height: "show",
				opacity: "show",
				top: c
			}, 200), jQuery("#jsconfirmcancel").unbind("click").click(function() {
				jQuery(s).animate({
					height: "hide",
					opacity: "hide",
					top: c + l
				}, 200)
			}), jQuery("#jsconfirmok").unbind("click").click(function(t) {
				e(), jQuery(s).animate({
					height: "hide",
					opacity: "hide",
					top: c + l
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
				r = jQuery(i).css("line-height"),
				s = jQuery(i).css("text-indent"),
				l = parseInt(jQuery(i).css("min-height").replace(/px/, ""));
			l = r, jQuery(n).css({
				height: "18px",
				"font-size": a,
				"text-indent": s
			});
			var c = jQuery(i).val() + "穷游";
			jQuery(n).val(c), setTimeout(function() {
				var t = jQuery(n).get(0).scrollHeight;
				t <= l && (t = l), jQuery(i).height(t)
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
			var r = t.pageX;
			t.pageX + 300 > jQuery(window).width() && (r = jQuery(window).width() - 300);
			var s = "/ajax.php";
			/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (s = "/bbsajax.php"), clearTimeout(o), o = setTimeout(function() {
				jQuery.get(s + "?action=usercard&uid=" + a, function(e) {
					"" != e && (jQuery("body").append(e), jQuery(".ui_usercard").css({
						width: 298,
						height: "auto",
						position: "absolute",
						left: r,
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
	function e() {
		if (t.fn.ajaxSubmit.debug) {
			var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
			window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
		}
	}
	t.fn.ajaxSubmit = function(i) {
		function o(e) {
			for (var o = new FormData, n = 0; n < e.length; n++) "file" != e[n].type && o.append(e[n].name, e[n].value);
			if (l.find("input:file:enabled").each(function() {
				var e = t(this).attr("name"),
					i = this.files;
				if (e)
					for (var n = 0; n < i.length; n++) o.append(e, i[n])
			}), i.extraData)
				for (var a in i.extraData) o.append(a, i.extraData[a]);
			i.data = null;
			var r = t.extend(!0, {}, t.ajaxSettings, i, {
				contentType: !1,
				processData: !1,
				cache: !1,
				type: "POST"
			});
			r.data = null;
			var s = r.beforeSend;
			r.beforeSend = function(t, e) {
				e.data = o, t.upload && (t.upload.onprogress = function(t) {
					e.progress(t.position, t.total)
				}), s && s.call(e, t, i)
			}, t.ajax(r)
		}

		function n(o) {
			function n(t) {
				var e = t.contentWindow ? t.contentWindow.document : t.contentDocument ? t.contentDocument : t.document;
				return e
			}

			function r() {
				function i() {
					try {
						var t = n(m).readyState;
						e("state = " + t), "uninitialized" == t.toLowerCase() && setTimeout(i, 50)
					} catch (o) {
						e("Server abort: ", o, " (", o.name, ")"), s(k), v && clearTimeout(v), v = void 0
					}
				}
				var o = l.attr("target"),
					r = l.attr("action");
				_.setAttribute("target", h), a || _.setAttribute("method", "POST"), r != u.url && _.setAttribute("action", u.url), u.skipEncodingOverride || a && !/post/i.test(a) || l.attr({
					encoding: "multipart/form-data",
					enctype: "multipart/form-data"
				}), u.timeout && (v = setTimeout(function() {
					x = !0, s(j)
				}, u.timeout));
				var c = [];
				try {
					if (u.extraData)
						for (var p in u.extraData) c.push(t('<input type="hidden" name="' + p + '">').attr("value", u.extraData[p]).appendTo(_)[0]);
					u.iframeTarget || (f.appendTo("body"), m.attachEvent ? m.attachEvent("onload", s) : m.addEventListener("load", s, !1)), setTimeout(i, 15), _.submit()
				} finally {
					_.setAttribute("action", r), o ? _.setAttribute("target", o) : l.removeAttr("target"),
						t(c).remove()
				}
			}

			function s(i) {
				if (!g.aborted && !S) {
					try {
						T = n(m)
					} catch (o) {
						e("cannot access response document: ", o), i = k
					}
					if (i === j && g) return void g.abort("timeout");
					if (i == k && g) return void g.abort("server abort");
					if (T && T.location.href != u.iframeSrc || x) {
						m.detachEvent ? m.detachEvent("onload", s) : m.removeEventListener("load", s, !1);
						var a, r = "success";
						try {
							if (x) throw "timeout";
							var l = "xml" == u.dataType || T.XMLDocument || t.isXMLDoc(T);
							if (e("isXml=" + l), !l && window.opera && (null == T.body || "" == T.body.innerHTML) && --O) return e("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
							var c = T.body ? T.body : T.documentElement;
							g.responseText = c ? c.innerHTML : null, g.responseXML = T.XMLDocument ? T.XMLDocument : T, l && (u.dataType = "xml"), g.getResponseHeader = function(t) {
								var e = {
									"content-type": u.dataType
								};
								return e[t]
							}, c && (g.status = Number(c.getAttribute("status")) || g.status, g.statusText = c.getAttribute("statusText") || g.statusText);
							var p = (u.dataType || "").toLowerCase(),
								h = /(json|script|text)/.test(p);
							if (h || u.textarea) {
								var b = T.getElementsByTagName("textarea")[0];
								if (b) g.responseText = b.value, g.status = Number(b.getAttribute("status")) || g.status, g.statusText = b.getAttribute("statusText") || g.statusText;
								else if (h) {
									var y = T.getElementsByTagName("pre")[0],
										_ = T.getElementsByTagName("body")[0];
									y ? g.responseText = y.textContent ? y.textContent : y.innerText : _ && (g.responseText = _.textContent ? _.textContent : _.innerText)
								}
							} else "xml" != p || g.responseXML || null == g.responseText || (g.responseXML = I(g.responseText));
							try {
								q = A(g, p, u)
							} catch (i) {
								r = "parsererror", g.error = a = i || r
							}
						} catch (i) {
							e("error caught: ", i), r = "error", g.error = a = i || r
						}
						g.aborted && (e("upload aborted"), r = null), g.status && (r = g.status >= 200 && g.status < 300 || 304 === g.status ? "success" : "error"), "success" === r ? (u.success && u.success.call(u.context, q, "success", g), d && t.event.trigger("ajaxSuccess", [g, u])) : r && (void 0 == a && (a = g.statusText), u.error && u.error.call(u.context, g, r, a), d && t.event.trigger("ajaxError", [g, u, a])), d && t.event.trigger("ajaxComplete", [g, u]), d && !--t.active && t.event.trigger("ajaxStop"), u.complete && u.complete.call(u.context, g, r), S = !0, u.timeout && clearTimeout(v), setTimeout(function() {
							u.iframeTarget || f.remove(), g.responseXML = null
						}, 100)
					}
				}
			}
			var c, p, u, d, h, f, m, g, b, y, x, v, _ = l[0],
				w = !!t.fn.prop;
			if (o)
				if (w)
					for (p = 0; p < o.length; p++) c = t(_[o[p].name]), c.prop("disabled", !1);
				else
					for (p = 0; p < o.length; p++) c = t(_[o[p].name]), c.removeAttr("disabled");
			if (t(":input[name=submit],:input[id=submit]", _).length) return void alert('Error: Form elements must not have name or id of "submit".');
			if (u = t.extend(!0, {}, t.ajaxSettings, i), u.context = u.context || u, h = "jqFormIO" + (new Date).getTime(), u.iframeTarget ? (f = t(u.iframeTarget), y = f.attr("name"), null == y ? f.attr("name", h) : h = y) : (f = t('<iframe name="' + h + '" src="' + u.iframeSrc + '" />'), f.css({
				position: "absolute",
				top: "-1000px",
				left: "-1000px"
			})), m = f[0], g = {
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: "n/a",
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {},
				abort: function(i) {
					var o = "timeout" === i ? "timeout" : "aborted";
					e("aborting upload... " + o), this.aborted = 1, f.attr("src", u.iframeSrc), g.error = o, u.error && u.error.call(u.context, g, o, i), d && t.event.trigger("ajaxError", [g, u, o]), u.complete && u.complete.call(u.context, g, o)
				}
			}, d = u.global, d && !t.active++ && t.event.trigger("ajaxStart"), d && t.event.trigger("ajaxSend", [g, u]), u.beforeSend && u.beforeSend.call(u.context, g, u) === !1) return void(u.global && t.active--);
			if (!g.aborted) {
				b = _.clk, b && (y = b.name, y && !b.disabled && (u.extraData = u.extraData || {}, u.extraData[y] = b.value, "image" == b.type && (u.extraData[y + ".x"] = _.clk_x, u.extraData[y + ".y"] = _.clk_y)));
				var j = 1,
					k = 2,
					$ = t("meta[name=csrf-token]").attr("content"),
					C = t("meta[name=csrf-param]").attr("content");
				C && $ && (u.extraData = u.extraData || {}, u.extraData[C] = $), u.forceSync ? r() : setTimeout(r, 10);
				var q, T, S, O = 50,
					I = t.parseXML || function(t, e) {
						return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
					},
					Q = t.parseJSON || function(t) {
						return window.eval("(" + t + ")")
					},
					A = function(e, i, o) {
						var n = e.getResponseHeader("content-type") || "",
							a = "xml" === i || !i && n.indexOf("xml") >= 0,
							r = a ? e.responseXML : e.responseText;
						return a && "parsererror" === r.documentElement.nodeName && t.error && t.error("parsererror"), o && o.dataFilter && (r = o.dataFilter(r, i)), "string" == typeof r && ("json" === i || !i && n.indexOf("json") >= 0 ? r = Q(r) : ("script" === i || !i && n.indexOf("javascript") >= 0) && t.globalEval(r)), r
					}
			}
		}
		if (!this.length) return e("ajaxSubmit: skipping submit process - no element selected"), this;
		var a, r, s, l = this;
		"function" == typeof i && (i = {
			success: i
		}), a = this.attr("method"), r = this.attr("action"), s = "string" == typeof r ? t.trim(r) : "", s = s || window.location.href || "", s && (s = (s.match(/^([^#]+)/) || [])[1]), i = t.extend(!0, {
			url: s,
			success: t.ajaxSettings.success,
			type: a || "GET",
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
		}, i);
		var c = {};
		if (this.trigger("form-pre-serialize", [this, i, c]), c.veto) return e("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
		if (i.beforeSerialize && i.beforeSerialize(this, i) === !1) return e("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
		var p = i.traditional;
		void 0 === p && (p = t.ajaxSettings.traditional);
		var u, d = this.formToArray(i.semantic);
		if (i.data && (i.extraData = i.data, u = t.param(i.data, p)), i.beforeSubmit && i.beforeSubmit(d, this, i) === !1) return e("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
		if (this.trigger("form-submit-validate", [d, this, i, c]), c.veto) return e("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
		var h = t.param(d, p);
		u && (h = h ? h + "&" + u : u), "GET" == i.type.toUpperCase() ? (i.url += (i.url.indexOf("?") >= 0 ? "&" : "?") + h, i.data = null) : i.data = h;
		var f = [];
		if (i.resetForm && f.push(function() {
			l.resetForm()
		}), i.clearForm && f.push(function() {
			l.clearForm(i.includeHidden)
		}), !i.dataType && i.target) {
			var m = i.success || function() {};
			f.push(function(e) {
				var o = i.replaceTarget ? "replaceWith" : "html";
				t(i.target)[o](e).each(m, arguments)
			})
		} else i.success && f.push(i.success);
		i.success = function(t, e, o) {
			for (var n = i.context || i, a = 0, r = f.length; a < r; a++) f[a].apply(n, [t, e, o || l, l])
		};
		var g = t("input:file:enabled[value]", this),
			b = g.length > 0,
			y = "multipart/form-data",
			x = l.attr("enctype") == y || l.attr("encoding") == y,
			v = !!(b && g.get(0).files && window.FormData);
		e("fileAPI :" + v);
		var _ = (b || x) && !v;
		return i.iframe !== !1 && (i.iframe || _) ? i.closeKeepAlive ? t.get(i.closeKeepAlive, function() {
			n(d)
		}) : n(d) : (b || x) && v ? (i.progress = i.progress || t.noop, o(d)) : t.ajax(i), this.trigger("form-submit-notify", [this, i]), this
	}, t.fn.ajaxForm = function(i) {
		if (0 === this.length) {
			var o = {
				s: this.selector,
				c: this.context
			};
			return !t.isReady && o.s ? (e("DOM not ready, queuing ajaxForm"), t(function() {
				t(o.s, o.c).ajaxForm(i)
			}), this) : (e("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this)
		}
		return this.ajaxFormUnbind().bind("submit.form-plugin", function(e) {
			e.isDefaultPrevented() || (e.preventDefault(), t(this).ajaxSubmit(i))
		}).bind("click.form-plugin", function(e) {
			var i = e.target,
				o = t(i);
			if (!o.is(":submit,input:image")) {
				var n = o.closest(":submit");
				if (0 == n.length) return;
				i = n[0]
			}
			var a = this;
			if (a.clk = i, "image" == i.type)
				if (void 0 != e.offsetX) a.clk_x = e.offsetX, a.clk_y = e.offsetY;
				else if ("function" == typeof t.fn.offset) {
				var r = o.offset();
				a.clk_x = e.pageX - r.left, a.clk_y = e.pageY - r.top
			} else a.clk_x = e.pageX - i.offsetLeft, a.clk_y = e.pageY - i.offsetTop;
			setTimeout(function() {
				a.clk = a.clk_x = a.clk_y = null
			}, 100)
		})
	}, t.fn.ajaxFormUnbind = function() {
		return this.unbind("submit.form-plugin click.form-plugin")
	}, t.fn.formToArray = function(e) {
		var i = [];
		if (0 === this.length) return i;
		var o = this[0],
			n = e ? o.getElementsByTagName("*") : o.elements;
		if (!n) return i;
		var a, r, s, l, c, p, u;
		for (a = 0, p = n.length; a < p; a++)
			if (c = n[a], s = c.name)
				if (e && o.clk && "image" == c.type) c.disabled || o.clk != c || (i.push({
					name: s,
					value: t(c).val(),
					type: c.type
				}), i.push({
					name: s + ".x",
					value: o.clk_x
				}, {
					name: s + ".y",
					value: o.clk_y
				}));
				else if (l = t.fieldValue(c, !0), l && l.constructor == Array)
			for (r = 0, u = l.length; r < u; r++) i.push({
				name: s,
				value: l[r]
			});
		else null !== l && "undefined" != typeof l && i.push({
			name: s,
			value: l,
			type: c.type
		}); if (!e && o.clk) {
			var d = t(o.clk),
				h = d[0];
			s = h.name, s && !h.disabled && "image" == h.type && (i.push({
				name: s,
				value: d.val()
			}), i.push({
				name: s + ".x",
				value: o.clk_x
			}, {
				name: s + ".y",
				value: o.clk_y
			}))
		}
		return i
	}, t.fn.formSerialize = function(e) {
		return t.param(this.formToArray(e))
	}, t.fn.fieldSerialize = function(e) {
		var i = [];
		return this.each(function() {
			var o = this.name;
			if (o) {
				var n = t.fieldValue(this, e);
				if (n && n.constructor == Array)
					for (var a = 0, r = n.length; a < r; a++) i.push({
						name: o,
						value: n[a]
					});
				else null !== n && "undefined" != typeof n && i.push({
					name: this.name,
					value: n
				})
			}
		}), t.param(i)
	}, t.fn.fieldValue = function(e) {
		for (var i = [], o = 0, n = this.length; o < n; o++) {
			var a = this[o],
				r = t.fieldValue(a, e);
			null === r || "undefined" == typeof r || r.constructor == Array && !r.length || (r.constructor == Array ? t.merge(i, r) : i.push(r))
		}
		return i
	}, t.fieldValue = function(e, i) {
		var o = e.name,
			n = e.type,
			a = e.tagName.toLowerCase();
		if (void 0 === i && (i = !0), i && (!o || e.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !e.checked || ("submit" == n || "image" == n) && e.form && e.form.clk != e || "select" == a && e.selectedIndex == -1)) return null;
		if ("select" == a) {
			var r = e.selectedIndex;
			if (r < 0) return null;
			for (var s = [], l = e.options, c = "select-one" == n, p = c ? r + 1 : l.length, u = c ? r : 0; u < p; u++) {
				var d = l[u];
				if (d.selected) {
					var h = d.value;
					if (h || (h = d.attributes && d.attributes.value && !d.attributes.value.specified ? d.text : d.value), c) return h;
					s.push(h)
				}
			}
			return s
		}
		return t(e).val()
	}, t.fn.clearForm = function(e) {
		return this.each(function() {
			t("input,select,textarea", this).clearFields(e)
		})
	}, t.fn.clearFields = t.fn.clearInputs = function(t) {
		var e = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
		return this.each(function() {
			var i = this.type,
				o = this.tagName.toLowerCase();
			e.test(i) || "textarea" == o || t && /hidden/.test(i) ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == o && (this.selectedIndex = -1)
		})
	}, t.fn.resetForm = function() {
		return this.each(function() {
			("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
		})
	}, t.fn.enable = function(t) {
		return void 0 === t && (t = !0), this.each(function() {
			this.disabled = !t
		})
	}, t.fn.selected = function(e) {
		return void 0 === e && (e = !0), this.each(function() {
			var i = this.type;
			if ("checkbox" == i || "radio" == i) this.checked = e;
			else if ("option" == this.tagName.toLowerCase()) {
				var o = t(this).parent("select");
				e && o[0] && "select-one" == o[0].type && o.find("option").selected(!1), this.selected = e
			}
		})
	}, t.fn.ajaxSubmit.debug = !1
}(jQuery);
var doing = function() {
		function t() {
			this.preurl = "/api.php?action=feeling", this.TYPE_CITY = 1, this.TYPE_POI = 2, this.TYPE_CONTINENTS = 3, this.TYPE_COUNTRY = 4, this.__for__ = function(t, e, i) {
				e || (e = function(t) {
					t.result && alert("操作成功")
				}), i = i || this.preurl, t._rnd_ = +new Date, $.postJSON(i, t, e)
			}, this.getDoings = function(t, e, i, o) {
				this.__for__({
					pid: t,
					act: e,
					d: i
				}, o, "/api.php?action=getdoings")
			}
		}
		var e = ["planto", "beento", "lived"],
			i = ["city", "poi", "continents", "country"];
		return $.each(e, function(e, o) {
			$.each(i, function(e, i) {
				t.prototype[o + i] = function(t, e) {
					return function(i, o, n) {
						var a = {
							id: o,
							oper: t
						};
						a[t] = i ? 1 : 0, "city" == e ? a.type = this.TYPE_CITY : "poi" == e ? a.type = this.TYPE_POI : "continents" == e ? a.type = this.TYPE_CONTINENTS : "country" == e && (a.type = this.TYPE_COUNTRY), this.__for__(a, n)
					}
				}(o, i)
			})
		}), new t
	}(),
	place_doings_comment_popupmessage = [],
	place_doings_batch_data = [];
$(function() {
		$(".js_transpoi_parent").on("click", ".js_transpoi", function() {
			var t = $(this).attr("data-page"),
				e = $(this).attr("data-total");
			$.ajax({
				type: "POST",
				url: "/ajax.php",
				data: "action=DisMyFootMore&page=" + t + "&total=" + e,
				dataType: "json",
				beforeSend: function(t) {},
				success: function(t) {
					"ok" == t.result && ($(".js_transpoi").attr("data-page", t.data.page), $(".js_transpoi_u").html(t.data.html))
				}
			})
		}), $(".js_transpoi_u").on("click", ".js_transpoi_a", function() {
			var t = $(this).attr("data-pid"),
				e = ($(this).attr("data-cityid"), $(this).attr("data-star"));
			require(["common/models/common/component/poiComment/poiComment"], function(i) {
				i.show({
					poiid: t,
					url: "/api.php?action=popupPoiComment",
					saveUrl: "/api.php?action=savePoiComment",
					source_type: "C-profile-allFootmarkRecommend",
					flash_swf_url: "../../plupload/Moxie.swf",
					starLevel: e,
					onsucceed: function(t) {
						i.hide();
						var e = $("#poiid").val(),
							o = "",
							n = 0;
						o = $("#type").val(), n = $("#typeid").val(), (o || "undefined" != typeof o) && qyerUI.popup.ajax({
							url: "/api.php?action=addpoicomment&from=poi&oper=successfull&poiid=" + e + "&typeid=" + n + "&type=" + o,
							width: "500",
							isclose: "show"
						})
					}
				})
			})
		})
	}), define("common/models/basic/js/normalize", [], function() {
		function t(t, i, n) {
			if (t.match(s) || t.match(r)) return t;
			t = a(t);
			var l = n.match(r),
				c = i.match(r);
			return !c || l && l[1] == c[1] && l[2] == c[2] ? o(e(t, i), n) : e(t, i)
		}

		function e(t, e) {
			if ("./" == t.substr(0, 2) && (t = t.substr(2)), t.match(s) || t.match(r)) return t;
			var i = e.split("/"),
				o = t.split("/");
			for (i.pop(); curPart = o.shift();) ".." == curPart ? i.pop() : i.push(curPart);
			return i.join("/")
		}

		function o(t, e) {
			var o = e.split("/");
			for (o.pop(), e = o.join("/") + "/", i = 0; e.substr(i, 1) == t.substr(i, 1);) i++;
			for (;
				"/" != e.substr(i, 1);) i--;
			e = e.substr(i + 1), t = t.substr(i + 1), o = e.split("/");
			var n = t.split("/");
			for (out = ""; o.shift();) out += "../";
			for (; curPart = n.shift();) out += curPart + "/";
			return out.substr(0, out.length - 1)
		}
		var n = /([^:])\/+/g,
			a = function(t) {
				return t.replace(n, "$1/")
			},
			r = /[^\:\/]*:\/\/([^\/])*/,
			s = /^(\/|data:)/,
			l = function(e, i, o) {
				i = a(i), o = a(o);
				for (var n, r, e, s = /@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi; n = s.exec(e);) {
					r = n[3] || n[2] || n[5] || n[6] || n[4];
					var l;
					l = t(r, i, o);
					var c = n[5] || n[6] ? 1 : 0;
					e = e.substr(0, s.lastIndex - r.length - c - 1) + l + e.substr(s.lastIndex - c - 1), s.lastIndex = s.lastIndex + (l.length - r.length)
				}
				return e
			};
		return l.convertURIBase = t, l.absoluteURI = e, l.relativeURI = o, l
	}), define("common/models/basic/js/require-css", [], function() {
		if ("undefined" == typeof window) return {
			load: function(t, e, i) {
				i()
			}
		};
		var t = document.getElementsByTagName("head")[0],
			e = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0,
			i = !1,
			o = !0;
		e[1] || e[7] ? i = parseInt(e[1]) < 6 || parseInt(e[7]) <= 9 : e[2] || e[8] ? o = !1 : e[4] && (i = parseInt(e[4]) < 18);
		var n = {};
		n.pluginBuilder = "./css-builder";
		var a, r, s, l = function() {
				a = document.createElement("style"), t.appendChild(a), r = a.styleSheet || a.sheet
			},
			c = 0,
			p = [],
			u = function(t) {
				c++, 32 == c && (l(), c = 0), r.addImport(t), a.onload = function() {
					d()
				}
			},
			d = function() {
				s();
				var t = p.shift();
				return t ? (s = t[1], void u(t[0])) : void(s = null)
			},
			h = function(t, e) {
				if (r && r.addImport || l(), r && r.addImport) s ? p.push([t, e]) : (u(t), s = e);
				else {
					a.textContent = '@import "' + t + '";';
					var i = setInterval(function() {
						try {
							a.sheet.cssRules, clearInterval(i), e()
						} catch (t) {}
					}, 10)
				}
			},
			f = function(e, i) {
				var n = document.createElement("link");
				if (n.type = "text/css", n.rel = "stylesheet", o) n.onload = function() {
					n.onload = function() {}, setTimeout(i, 7)
				};
				else var a = setInterval(function() {
					for (var t = 0; t < document.styleSheets.length; t++) {
						var e = document.styleSheets[t];
						if (e.href == n.href) return clearInterval(a), i()
					}
				}, 10);
				n.href = e, t.appendChild(n)
			};
		return n.normalize = function(t, e) {
			return ".css" == t.substr(t.length - 4, 4) && (t = t.substr(0, t.length - 4)), e(t)
		}, n.load = function(t, e, o, n) {
			(i ? h : f)(e.toUrl(t + ".css"), o)
		}, n
	}), define("common/models/basic/js/require-css!web_old_popup2", [], function() {}), define("web_old_popup2", ["css!web_old_popup2"], function() {
		function t(t) {
			return this.option = t, this.initUI(), this.ui.setUIDefault(this.option), this
		}
		var e = jQuery;
		return t.prototype = {
			option: null,
			ui: null,
			initUI: function() {
				var t = this.ui = {
						$ui: null,
						$content: null,
						$box: null,
						$title: null,
						$okBtn: null,
						$cancelBtn: null,
						$loadBtn: null,
						$closeIcon: null,
						defaultWidth: "auto"
					},
					i = ['<div class="qui-popup2" style="display:none">', "<div>", '<div class="qui-popup2-dt">', '<div class="qui-popup2-box">', '<div class="qui-popup2-closeIcon">&nbsp;</div>', '<div class="qui-popup2-box-title">title</div>', '<div class="qui-popup2-box-content">', "</div>", '<div class="qui-popup2-box-bottom">', "&nbsp;", '<input class="qui-popup2-cancelBtn ui_button_cancel" type="button" value="取消" />  ', '<input class="qui-popup2-okBtn ui_button" type="button" value="确定" />  ', '<input class="qui-popup2-loadingBtn  ui_button_load" type="button" value="" />  ', "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
				return t.$ui = e(i), t.$content = t.$ui.find(".qui-popup2-box-content"), t.$box = t.$ui.find(".qui-popup2-box"), t.$title = t.$ui.find(".qui-popup2-box-title"), t.$okBtn = t.$ui.find(".qui-popup2-okBtn"), t.$cancelBtn = t.$ui.find(".qui-popup2-cancelBtn"), t.$loadBtn = t.$ui.find(".qui-popup2-loadingBtn"), t.$closeIcon = t.$ui.find(".qui-popup2-closeIcon"), t.$bottom = t.$ui.find(".qui-popup2-box-bottom"), t.$ui.appendTo(document.body), t.option = this.option, t = i = null, e.extend(this.ui, {
					setWidth: function(t) {
						this.$box.animate({
							width: t
						}, 300)
					},
					setUIDefault: function(t) {
						this.$ui[0].className = "qui-popup2", t.exClassName && this.$ui.addClass(t.exClassName), t.iframeSrc ? this.$content.html('<iframe src="' + t.iframeSrc + '"  scrolling="auto" style="height:' + (t.iframeHeight || 300) + 'px;"  />') : this.$content.html(t.contentHTML || "&nbsp;"), this.$title.html(t.title || "Title"), this.$box.css("width", t.width || this.defaultWidth), this.$title[t.showTitle === !1 ? "hide" : "show"](), this.$okBtn.val(t.okText || "确定"), this.$cancelBtn.val(t.cancelText || "取消"), this.$okBtn[t.showOKBtn === !1 ? "hide" : "show"](), this.$okBtn.removeAttr("data-bn-ipg"), this.$cancelBtn[t.showCancelBtn === !1 ? "hide" : "show"](), this.$cancelBtn.removeAttr("data-bn-ipg"), this.$loadBtn[t.showLoadBtn === !0 ? "show" : "hide"](), this.$loadBtn.removeAttr("data-bn-ipg"), this.$ui.find(".qui-popup2-closeIcon").removeAttr("data-bn-ipg"), this.$closeIcon[t.showCloseIcon === !1 ? "hide" : "show"](), t.showOKBtn === !1 && t.showCancelBtn === !1 && this.$bottom.hide()
					},
					show: function() {
						var t = {},
							i = {
								top: 0
							},
							o = this;
						e.support.leadingWhitespace && (t.opacity = 1, i.opacity = 1), this.$ui.css("display", "block").animate(t, 200, function() {
							o.$box.css("top", -30).animate(i, 200, function() {
								o.option.onShow && o.option.onShow(), t = i = o = null
							})
						})
					},
					hide: function(t) {
						var i = {
								top: -30
							},
							o = {},
							n = this;
						n.option && n.option.onBeforeHide && n.option.onBeforeHide() === !1 || (e.support.leadingWhitespace && (i.opacity = 0, o.opacity = 0), this.$box.animate(i, 200, function() {
							n.$ui.animate(o, 200, function() {
								t ? n.$ui.hide() : n.$ui.remove(), n.option && n.option.onAfterHide && n.option.onAfterHide(), i = o = n = null
							})
						}))
					}
				}), this
			},
			show: function() {
				var t = this;
				return this.ui.$ui.undelegate("click").delegate(".qui-popup2-okBtn,.qui-popup2-cancelBtn,.qui-popup2-closeIcon", "click", function(e) {
					if (this.className.indexOf("qui-popup2-closeIcon") != -1 || this.className.indexOf("qui-popup2-cancelBtn") != -1) {
						if (t.option.onBeforeCancel && !t.option.onBeforeCancel(e)) return;
						t.option.onCancel && t.option.onCancel()
					} else if (this.className.indexOf("qui-popup2-okBtn") != -1 && t.option.onOK && t.option.onOK() === !1) return;
					t.ui.hide()
				}), this.ui.show(), this
			},
			hide: function(t) {
				return this.ui.hide(t), this
			},
			setContent: function(t) {
				return this.ui.$content.html(t), this
			},
			getContent: function() {
				return this.ui.$content[0]
			},
			getButtons: function() {
				return {
					okBtn: this.ui.$okBtn[0],
					cancelBtn: this.ui.$cancelBtn[0],
					loadBtn: this.ui.$loadBtn[0],
					closeIcon: this.ui.$ui.find(".qui-popup2-closeIcon")[0]
				}
			},
			setOption: function(t) {
				var i = this.ui,
					o = {
						width: function() {
							i.setWidth(t.width)
						},
						showTitle: function() {
							i.$title[t.showTitle === !1 ? "hide" : "show"]()
						},
						okText: function() {
							i.$okBtn.val(t.okText)
						},
						cancelText: function() {
							i.$cancelBtn.val(t.cancelText)
						},
						showOKBtn: function() {
							i.$okBtn[t.showOKBtn === !1 ? "hide" : "show"]()
						},
						showCancelBtn: function() {
							i.$cancelBtn[t.showCancelBtn === !1 ? "hide" : "show"]()
						},
						showLoadBtn: function() {
							i.$loadBtn[t.showLoadBtn === !1 ? "hide" : "show"]()
						},
						title: function() {
							i.$title.html(t.title)
						},
						exClassName: function() {
							i.$ui[0].className = "qui-popup2 " + t.exClassName
						},
						contentHTML: function() {
							t.iframeSrc || i.$content.html(t.contentHTML)
						},
						iframeSrc: function() {
							i.$content.html('<iframe src="' + t.iframeSrc + '"  scrolling="auto" style="height:' + (t.iframeHeight || 300) + 'px;" />')
						},
						iframeHeight: function() {
							i.$content.children("iframe").css("height", t.iframeHeight)
						},
						showCloseIcon: function() {
							i.$closeIcon[t.showCloseIcon === !1 ? "hide" : "show"]()
						}
					};
				for (var n in t) this.option[n] = t[n], "function" == e.type(o[n]) && o[n]();
				i = o = null
			}
		}, t
	}), ! function() {
		function t(t) {
			return t.replace(x, "").replace(v, ",").replace(_, "").replace(w, "").replace(j, "").split(/^$|,+/)
		}

		function e(t) {
			return "'" + t.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
		}

		function i(i, o) {
			function n(t) {
				return d += t.split(/\n/).length - 1, p && (t = t.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "")), t && (t = y[1] + e(t) + y[2] + "\n"), t
			}

			function a(e) {
				var i = d;
				if (c ? e = c(e, o) : r && (e = e.replace(/\n/g, function() {
					return d++, "$line=" + d + ";"
				})), 0 === e.indexOf("=")) {
					var n = u && !/^=[=#]/.test(e);
					if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), n) {
						var a = e.replace(/\s*\([^\)]+\)/, "");
						h[a] || /^(include|print)$/.test(a) || (e = "$escape(" + e + ")")
					} else e = "$string(" + e + ")";
					e = y[1] + e + y[2]
				}
				return r && (e = "$line=" + i + ";" + e), b(t(e), function(t) {
					if (t && !m[t]) {
						var e;
						e = "print" === t ? v : "include" === t ? _ : h[t] ? "$utils." + t : f[t] ? "$helpers." + t : "$data." + t, w += t + "=" + e + ",", m[t] = !0
					}
				}), e + "\n"
			}
			var r = o.debug,
				s = o.openTag,
				l = o.closeTag,
				c = o.parser,
				p = o.compress,
				u = o.escape,
				d = 1,
				m = {
					$data: 1,
					$filename: 1,
					$utils: 1,
					$helpers: 1,
					$out: 1,
					$line: 1
				},
				g = "".trim,
				y = g ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
				x = g ? "$out+=text;return $out;" : "$out.push(text);",
				v = "function(){var text=''.concat.apply('',arguments);" + x + "}",
				_ = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + x + "}",
				w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (r ? "$line=0," : ""),
				j = y[0],
				k = "return new String(" + y[3] + ");";
			b(i.split(s), function(t) {
				t = t.split(l);
				var e = t[0],
					i = t[1];
				1 === t.length ? j += n(e) : (j += a(e), i && (j += n(i)))
			});
			var $ = w + j + k;
			r && ($ = "try{" + $ + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + e(i) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')};}");
			try {
				var C = new Function("$data", "$filename", $);
				return C.prototype = h, C
			} catch (q) {
				throw q.temp = "function anonymous($data,$filename) {" + $ + "}", q
			}
		}
		var o = function(t, e) {
			return "string" == typeof e ? g(e, {
				filename: t
			}) : r(t, e)
		};
		o.version = "3.0.0", o.config = function(t, e) {
			n[t] = e
		};
		var n = o.defaults = {
				openTag: "<%",
				closeTag: "%>",
				escape: !0,
				cache: !0,
				compress: !1,
				parser: null
			},
			a = o.cache = {};
		o.render = function(t, e) {
			return g(t, e)
		};
		var r = o.renderFile = function(t, e) {
			var i = o.get(t) || m({
				filename: t,
				name: "Render Error",
				message: "Template not found"
			});
			return e ? i(e) : i
		};
		o.get = function(t) {
			var e;
			if (a[t]) e = a[t];
			else if ("object" == typeof document) {
				var i = document.getElementById(t);
				if (i) {
					var o = (i.value || i.innerHTML).replace(/^\s*|\s*$/g, "");
					e = g(o, {
						filename: t
					})
				}
			}
			return e
		};
		var s = function(t, e) {
				return "string" != typeof t && (e = typeof t, "number" === e ? t += "" : t = "function" === e ? s(t.call(t)) : ""), t
			},
			l = {
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"&": "&#38;"
			},
			c = function(t) {
				return l[t]
			},
			p = function(t) {
				return s(t).replace(/&(?![\w#]+;)|[<>"']/g, c)
			},
			u = Array.isArray || function(t) {
				return "[object Array]" === {}.toString.call(t)
			},
			d = function(t, e) {
				var i, o;
				if (u(t))
					for (i = 0, o = t.length; o > i; i++) e.call(t, t[i], i, t);
				else
					for (i in t) e.call(t, t[i], i)
			},
			h = o.utils = {
				$helpers: {},
				$include: r,
				$string: s,
				$escape: p,
				$each: d
			};
		o.helper = function(t, e) {
			f[t] = e
		};
		var f = o.helpers = h.$helpers;
		o.onerror = function(t) {
			var e = "Template Error\n\n";
			for (var i in t) e += "<" + i + ">\n" + t[i] + "\n\n";
			"object" == typeof console && console.error(e)
		};
		var m = function(t) {
				return o.onerror(t),
					function() {
						return "{Template Error}"
					}
			},
			g = o.compile = function(t, e) {
				function o(i) {
					try {
						return new l(i, s) + ""
					} catch (o) {
						return e.debug ? m(o)() : (e.debug = !0, g(t, e)(i))
					}
				}
				e = e || {};
				for (var r in n) void 0 === e[r] && (e[r] = n[r]);
				var s = e.filename;
				try {
					var l = i(t, e)
				} catch (c) {
					return c.filename = s || "anonymous", c.name = "Syntax Error", m(c)
				}
				return o.prototype = l.prototype, o.toString = function() {
					return l.toString()
				}, s && e.cache && (a[s] = o), o
			},
			b = h.$each,
			y = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
			x = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,
			v = /[^\w$]+/g,
			_ = new RegExp(["\\b" + y.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
			w = /^\d[^,]*|,\d[^,]*/g,
			j = /^,+|,+$/g;
		n.openTag = "{{", n.closeTag = "}}";
		var k = function(t, e) {
			var i = e.split(":"),
				o = i.shift(),
				n = i.join(":") || "";
			return n && (n = ", " + n), "$helpers." + o + "(" + t + n + ")"
		};
		n.parser = function(t, e) {
			t = t.replace(/^\s/, "");
			var i = t.split(" "),
				n = i.shift(),
				a = i.join(" ");
			switch (n) {
				case "if":
					t = "if(" + a + "){";
					break;
				case "else":
					i = "if" === i.shift() ? " if(" + i.join(" ") + ")" : "", t = "}else" + i + "{";
					break;
				case "/if":
					t = "}";
					break;
				case "each":
					var r = i[0] || "$data",
						s = i[1] || "as",
						l = i[2] || "$value",
						c = i[3] || "$index",
						p = l + "," + c;
					"as" !== s && (r = "[]"), t = "$each(" + r + ",function(" + p + "){";
					break;
				case "/each":
					t = "});";
					break;
				case "echo":
					t = "print(" + a + ");";
					break;
				case "print":
				case "include":
					t = n + "(" + i.join(",") + ");";
					break;
				default:
					if (-1 !== a.indexOf("|")) {
						var u = e.escape;
						0 === t.indexOf("#") && (t = t.substr(1), u = !1);
						for (var d = 0, h = t.split("|"), f = h.length, m = u ? "$escape" : "$string", g = m + "(" + h[d++] + ")"; f > d; d++) g = k(g, h[d]);
						t = "=#" + g
					} else t = o.helpers[n] ? "=#" + n + "(" + i.join(",") + ");" : "=" + t
			}
			return t
		}, this.template = o
	}(), define("web_lib_template", function() {}), define("web_ct_footprint_fpTpl", ["web_lib_template"], function() {
		var t = {
			getTpl: function(t, e) {
				return render = template.compile(this[t]), render(e)
			},
			fpModal: ['<div id="footprintModal" class="footprint-modal">', '<div id="fpClose" class="fp-close"><i class="iconfont icon-guanbi"></i></div>', '<div class="fp-header"></div>', '<div class="fp-body"></div>', '<div class="fp-footer"></div>', "</div>"].join(""),
			fpHeader: ['<span class="title">添加足迹</span>', "{{if country}}", '<span class="gt"><i class="iconfont icon-jiantouright"></i></span>', '<div class="select continent-select">', '<a href="javascript:;" class="text continent">{{country.continent}}</a>', '<div class="list">', "<ul>", "{{each continent as obj i}}", '<li data-index="{{i + 1}}">{{obj[1]}}</li>', "{{/each}}", "</ul>", "</div>", "</div>", '<span class="gt"><i class="iconfont icon-jiantouright"></i></span>', '<span class="gray countryName">{{country.name}}</span>', "{{/if}}"].join(""),
			fpSearch: ['<div class="fp-search">', '<input class="txt fpSearch" type="text" placeholder="{{placeholder}}">', '<div class="mark"><i class="iconfont icon-infooutline"></i> 已经标记过啦</div>', '<div class="fpSearchContainer"></div>', "</div>"].join(""),
			fpTabs: ['<div class="fp-tabs">', '<div class="tabs">', "<ul>", '<li class="tabs-li"><a href="javascript:;">热门</a></li>', "{{each continent as obj i}}", '<li class="tabs-li"><a href="javascript:;">{{obj[1]}}</a></li>', "{{/each}}", "</ul>", "</div>", '<div class="fp-list-cont loading"></div>', "</div>"].join(""),
			cityList: ['<div class="city-list">', "<ul>", "{{each city_list as obj i}}", '<li id="city_{{obj.city_id}}" class="city-list-li" city-id="{{obj.city_id}}" beento="1">', '<img src="{{obj.city_img}}" alt="{{obj.city_name}}">', '<div class="cont-table">', '<span class="text"><em>{{obj.city_name}}</em> <i>{{obj.city_en_name}}</i></span>', "</div>", '<div class="control">', '<em class="iconfont icon-duigouthin"></em>', '<span class="text"><i>{{obj.city_name}}</i></span>', "</div>", "</li>", "{{/each}}", "</ul>", "</div>"].join(""),
			cityList_li: ["{{each city_list as obj i}}", '<li id="city_{{obj.city_id}}" city-id="{{obj.city_id}}" class="city-list-li{{if obj.mark}} disabled{{/if}}"{{if obj.mark}} title="已经标记过啦" beento="0"{{else}} beento="1"{{/if}}>', '<img src="{{obj.city_img}}" alt="{{obj.city_name}}">', '<div class="cont-table">', '<span class="text"><em>{{obj.city_name}}</em> <i>{{obj.city_en_name}}</i></span>', "</div>", '<div class="control">', '<em class="iconfont icon-duigouthin"></em>', '<span class="text"><i>{{obj.city_name ? obj.city_name : obj.city_en_name}}</i></span>', "</div>", "</li>", "{{/each}}"].join(""),
			poiList_li: ["{{each poi_list as obj i}}", '<li id="poi_{{obj.poi_id}}" poi-id="{{obj.poi_id}}" class="poi-list-li{{if obj.mark}} disabled{{/if}}" {{if obj.mark}}title="已经标记过啦" beento="0"{{else}}title="{{obj.poi_name ? obj.poi_name : obj.poi_en_name}}" beento="1"{{/if}}>', '<div class="img">', '<img src="{{obj.poi_img}}" width="80" height="80" alt="{{obj.poi_name ? obj.poi_name : obj.poi_en_name}}">', '<span class="s"><i class="iconfont icon-duigouthin"></i></span>', "</div>", '<span class="text">{{obj.poi_name ? obj.poi_name : obj.poi_en_name}}</span>', "</li>", "{{/each}}"].join(""),
			continentList: ['<div class="continent-list">', "<ul>", "{{each continent_list.country_list as obj i}}", '<li id="country_{{obj.country_id}}" country-id="{{obj.country_id}}">', '<div class="text">', '<a class="link-country" href="javascript:;" country-id="{{obj.country_id}}" data-toggle="tooltip" title="{{obj.country_name}} {{obj.country_en_name}}">', "<em>{{obj.country_name}}</em> {{obj.country_en_name}}", "</a>", "{{if obj.hot}}", ' <em class="hot">热门</em>', "{{/if}}", "</div>", "</li>", "{{/each}}", "</ul>", "</div>"].join(""),
			fpFoot: ['<div class="fp-tags" style="display: none;">', "<dl>", '<dt><a href="javascript:;" class="fold">已添加</a></dt>', "<dd></dd>", "</dl>", "</div>", '<div class="fp-btns">', '<button class="btn_next ui_btn_big_disabled" type="button">下一步</button>', "</div>"].join(""),
			fpSuccess: ['<div class="fp-success{{if !recommendPOI}} fp-success-center{{/if}}">', "<h3>", '<i class="iconfont icon-duigouthin"></i> <span>已成功在你的地图上点亮 <em>{{length}}</em> 个城市</span>', "</h3>", "<p>标记去过的旅行地，吃过的餐厅，购物过的地方，来充实你的足迹地图</p>", "</div>", "{{if recommendPOI}}", '<div class="fp-recommend">', "{{each recommendPOI as obj index}}", '<div class="title">{{poiTypeObj[index]["description"]}}</div>', '<div class="content">', '<div class="poi-list">', "<ul>", "{{each recommendPOI[index] as poiObj i}}", '<li class="poi-list-li" id="poi_{{poiObj.poi_id}}" poi-id="{{poiObj.poi_id}}" title="{{poiObj.poi_name ? poiObj.poi_name : poiObj.poi_en_name}}" beento="1">', '<div class="img">', '<img src="{{poiObj.poi_img}}" width="80" height="80" alt="{{poiObj.poi_name ? poiObj.poi_name : poiObj.poi_en_name}}">', '<span class="s"><i class="iconfont icon-duigouthin"></i></span>', "</div>", '<span class="text">{{poiObj.poi_name ? poiObj.poi_name : poiObj.poi_en_name}}</span>', "</li>", "{{/each}}", "</ul>", "</div>", "</div>", "{{/each}}", "</div>", "{{/if}}"].join(""),
			poiFoot: ['<div class="fp-change"{{if length == 0}} style="display: none;"{{/if}}><span>已添加 <em>{{length}}</em> 个目的地足迹</span></div>', '<div class="fp-btns">', "{{if succ}}", '<button class="btn_close ui_btn_big_disabled" type="button">以后再说</button>', '<button class="btn_complete ui_btn_big" type="button">继续去完善</button>', "{{else}}", '<button class="btn_comment ui_btn_big" type="button">完成</button>', "{{/if}}", "</div>"].join(""),
			poiContainer: ['<div class="poi-container">', "{{if length > 1}}", '<div class="poi-side">', '<div class="poi-city-list">', '<div class="bar barUp">{{if length > 8}}<i class="iconfont icon-sanjiaoup"></i>{{/if}}</div>', '<div class="list">', "<ul>", "{{each cityList as obj i}}", '{{if i != "length"}}', '<li class="side-city-li" id="side_city_{{obj.city_id}}" city-id="{{obj.city_id}}"><span>{{obj.city_name}}</span></li>', "{{/if}}", "{{/each}}", "</ul>", "</div>", '<div class="bar barDown">{{if length > 8}}<i class="iconfont icon-sanjiaodown"></i>{{/if}}</div>', "</div>", "</div>", "{{/if}}", '<div class="poi-main">', '<div class="poi-tabs">', '<div class="tabs">', "<ul>", "{{each poiType as obj i}}", '<li id="poi_type_{{i}}" class="poi_type_tab" poi-type="{{i}}">', '<i class="iconfont {{obj.icon}}"></i> <span>{{obj.text}}</span>', "</li>", "{{/each}}", "</ul>", "</div>", '<div class="poi-search">', '<input class="txt poiSearch" type="text" placeholder="搜索目的地">', '<div class="mark"><i class="iconfont icon-infooutline"></i> 已经标记过啦</div>', '<div class="poiSearchContainer"></div>', "</div>", '<div class="clear"></div>', '<div class="poi-list-cont"></div>', "</div>", "</div>", "</div>"].join(""),
			addPoi: ['<div class="add">', "<span>这个城市还没有{{poiType.text}}信息，欢迎来补充</span>", '<a href="{{poiAdd}}" target="_blank" class="ui_buttonA">创建{{poiType.text}}</a>', "</div>"].join("")
		};
		return t
	}), define("web_ct_footprint_poiType", [], function() {
		return {
			sight: {
				text: "景点",
				description: "点击标记去过的旅行地",
				icon: "icon-jingdian",
				addUrl: "//place.qyer.com/{{cityName}}/sight/add"
			},
			food: {
				text: "美食",
				description: "点击标记吃过的餐厅",
				icon: "icon-meishi",
				addUrl: "//place.qyer.com/{{cityName}}/food/add"
			},
			shopping: {
				text: "购物",
				description: "点击标记去过的购物地",
				icon: "icon-gouwu",
				addUrl: "//place.qyer.com/{{cityName}}/shopping/add"
			},
			activity: {
				text: "活动",
				description: "点击标记体验过的活动",
				icon: "icon-huodong",
				addUrl: "//place.qyer.com/{{cityName}}/activity/add"
			},
			transportation: {
				text: "交通",
				description: "",
				icon: "icon-jiaotong",
				addUrl: "//place.qyer.com/{{cityName}}/transportation/add"
			}
		}
	}), ! function(t) {
		t(jQuery)
	}(function(t) {
		function e(e) {
			var r = e || window.event,
				s = l.call(arguments, 1),
				c = 0,
				u = 0,
				d = 0,
				h = 0,
				f = 0,
				m = 0;
			if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (d = -1 * r.detail), "wheelDelta" in r && (d = r.wheelDelta), "wheelDeltaY" in r && (d = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in r && (d = -1 * r.deltaY, c = d), "deltaX" in r && (u = r.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
				if (1 === r.deltaMode) {
					var g = t.data(this, "mousewheel-line-height");
					c *= g, d *= g, u *= g
				} else if (2 === r.deltaMode) {
					var b = t.data(this, "mousewheel-page-height");
					c *= b, d *= b, u *= b
				}
				if (h = Math.max(Math.abs(d), Math.abs(u)), (!a || a > h) && (a = h, o(r, h) && (a /= 40)), o(r, h) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / a), u = Math[u >= 1 ? "floor" : "ceil"](u / a), d = Math[d >= 1 ? "floor" : "ceil"](d / a), p.settings.normalizeOffset && this.getBoundingClientRect) {
					var y = this.getBoundingClientRect();
					f = e.clientX - y.left, m = e.clientY - y.top
				}
				return e.deltaX = u, e.deltaY = d, e.deltaFactor = a, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, s.unshift(e, c, u, d), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, s)
			}
		}

		function i() {
			a = null
		}

		function o(t, e) {
			return p.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
		}
		var n, a, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			l = Array.prototype.slice;
		if (t.event.fixHooks)
			for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
		var p = t.event.special.mousewheel = {
			version: "3.1.12",
			setup: function() {
				if (this.addEventListener)
					for (var i = s.length; i;) this.addEventListener(s[--i], e, !1);
				else this.onmousewheel = e;
				t.data(this, "mousewheel-line-height", p.getLineHeight(this)), t.data(this, "mousewheel-page-height", p.getPageHeight(this))
			},
			teardown: function() {
				if (this.removeEventListener)
					for (var i = s.length; i;) this.removeEventListener(s[--i], e, !1);
				else this.onmousewheel = null;
				t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
			},
			getLineHeight: function(e) {
				var i = t(e),
					o = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
				return o.length || (o = t("body")), parseInt(o.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
			},
			getPageHeight: function(e) {
				return t(e).height()
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		t.fn.extend({
			mousewheel: function(t) {
				return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
			},
			unmousewheel: function(t) {
				return this.unbind("mousewheel", t)
			}
		})
	}), define("web_lib_jquerymousewheel", function() {}), define("common/models/basic/js/require-css!web_old_tooltips", [], function() {}), ! function(t) {
		define("web_old_tooltips", ["css!web_old_tooltips"], t(jQuery))
	}(function(t) {
		"use strict";

		function e(e) {
			return this.each(function() {
				var o = t(this),
					n = o.data("bs.tooltip"),
					a = "object" == typeof e && e;
				(n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, a)), "string" == typeof e && n[e]())
			})
		}
		var i = function(t, e) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
		};
		i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
			animation: !0,
			placement: "top",
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			container: !1,
			viewport: {
				selector: "body",
				padding: 0
			}
		}, i.prototype.init = function(e, i, o) {
			if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
			for (var n = this.options.trigger.split(" "), a = n.length; a--;) {
				var r = n[a];
				if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
				else if ("manual" != r) {
					var s = "hover" == r ? "mouseenter" : "focusin",
						l = "hover" == r ? "mouseleave" : "focusout";
					this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
				}
			}
			this.options.selector ? this._options = t.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		}, i.prototype.getDefaults = function() {
			return i.DEFAULTS
		}, i.prototype.getOptions = function(e) {
			return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
				show: e.delay,
				hide: e.delay
			}), e
		}, i.prototype.getDelegateOptions = function() {
			var e = {},
				i = this.getDefaults();
			return this._options && t.each(this._options, function(t, o) {
				i[t] != o && (e[t] = o)
			}), e
		}, i.prototype.enter = function(e) {
			var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
			return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
				"in" == i.hoverState && i.show()
			}, i.options.delay.show)) : i.show())
		}, i.prototype.leave = function(e) {
			var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
			return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
				"out" == i.hoverState && i.hide()
			}, i.options.delay.hide)) : i.hide()
		}, i.prototype.show = function() {
			var e = t.Event("show.bs." + this.type);
			if (this.hasContent() && this.enabled) {
				this.$element.trigger(e);
				var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
				if (e.isDefaultPrevented() || !o) return;
				var n = this,
					a = this.tip(),
					r = this.getUID(this.type);
				this.setContent(), a.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && a.addClass("fade");
				var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
					l = /\s?auto?\s?/i,
					c = l.test(s);
				c && (s = s.replace(l, "") || "top"), a.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
				var p = this.getPosition(),
					u = a[0].offsetWidth,
					d = a[0].offsetHeight;
				if (c) {
					var h = s,
						f = this.options.container ? t(this.options.container) : this.$element.parent(),
						m = this.getPosition(f);
					s = "bottom" == s && p.bottom + d > m.bottom ? "top" : "top" == s && p.top - d < m.top ? "bottom" : "right" == s && p.right + u > m.width ? "left" : "left" == s && p.left - u < m.left ? "right" : s, a.removeClass(h).addClass(s)
				}
				var g = this.getCalculatedOffset(s, p, u, d);
				this.applyPlacement(g, s);
				var b = function() {
					var t = n.hoverState;
					n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
				};
				t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", b).emulateTransitionEnd(i.TRANSITION_DURATION) : b()
			}
		}, i.prototype.applyPlacement = function(e, i) {
			var o = this.tip(),
				n = o[0].offsetWidth,
				a = o[0].offsetHeight,
				r = parseInt(o.css("margin-top"), 10),
				s = parseInt(o.css("margin-left"), 10);
			isNaN(r) && (r = 0), isNaN(s) && (s = 0), e.top = e.top + r, e.left = e.left + s, t.offset.setOffset(o[0], t.extend({
				using: function(t) {
					o.css({
						top: Math.round(t.top),
						left: Math.round(t.left)
					})
				}
			}, e), 0), o.addClass("in");
			var l = o[0].offsetWidth,
				c = o[0].offsetHeight;
			"top" == i && c != a && (e.top = e.top + a - c);
			var p = this.getViewportAdjustedDelta(i, e, l, c);
			p.left ? e.left += p.left : e.top += p.top;
			var u = /top|bottom/.test(i),
				d = u ? 2 * p.left - n + l : 2 * p.top - a + c,
				h = u ? "offsetWidth" : "offsetHeight";
			o.offset(e), this.replaceArrow(d, o[0][h], u)
		}, i.prototype.replaceArrow = function(t, e, i) {
			this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
		}, i.prototype.setContent = function() {
			var t = this.tip(),
				e = this.getTitle();
			t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
		}, i.prototype.hide = function(e) {
			function o() {
				"in" != n.hoverState && a.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
			}
			var n = this,
				a = t(this.$tip),
				r = t.Event("hide.bs." + this.type);
			return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
		}, i.prototype.fixTitle = function() {
			var t = this.$element;
			(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
		}, i.prototype.hasContent = function() {
			return this.getTitle()
		}, i.prototype.getPosition = function(e) {
			e = e || this.$element;
			var i = e[0],
				o = "BODY" == i.tagName,
				n = i.getBoundingClientRect();
			null == n.width && (n = t.extend({}, n, {
				width: n.right - n.left,
				height: n.bottom - n.top
			}));
			var a = o ? {
					top: 0,
					left: 0
				} : e.offset(),
				r = {
					scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
				},
				s = o ? {
					width: t(window).width(),
					height: t(window).height()
				} : null;
			return t.extend({}, n, r, s, a)
		}, i.prototype.getCalculatedOffset = function(t, e, i, o) {
			return "bottom" == t ? {
				top: e.top + e.height,
				left: e.left + e.width / 2 - i / 2
			} : "top" == t ? {
				top: e.top - o,
				left: e.left + e.width / 2 - i / 2
			} : "left" == t ? {
				top: e.top + e.height / 2 - o / 2,
				left: e.left - i
			} : {
				top: e.top + e.height / 2 - o / 2,
				left: e.left + e.width
			}
		}, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
			var n = {
				top: 0,
				left: 0
			};
			if (!this.$viewport) return n;
			var a = this.options.viewport && this.options.viewport.padding || 0,
				r = this.getPosition(this.$viewport);
			if (/right|left/.test(t)) {
				var s = e.top - a - r.scroll,
					l = e.top + a - r.scroll + o;
				s < r.top ? n.top = r.top - s : l > r.top + r.height && (n.top = r.top + r.height - l)
			} else {
				var c = e.left - a,
					p = e.left + a + i;
				c < r.left ? n.left = r.left - c : p > r.width && (n.left = r.left + r.width - p)
			}
			return n
		}, i.prototype.getTitle = function() {
			var t, e = this.$element,
				i = this.options;
			return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
		}, i.prototype.getUID = function(t) {
			do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
			return t
		}, i.prototype.tip = function() {
			return this.$tip = this.$tip || t(this.options.template)
		}, i.prototype.arrow = function() {
			return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
		}, i.prototype.enable = function() {
			this.enabled = !0
		}, i.prototype.disable = function() {
			this.enabled = !1
		}, i.prototype.toggleEnabled = function() {
			this.enabled = !this.enabled
		}, i.prototype.toggle = function(e) {
			var i = this;
			e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
		}, i.prototype.destroy = function() {
			var t = this;
			clearTimeout(this.timeout), this.hide(function() {
				t.$element.off("." + t.type).removeData("bs." + t.type)
			})
		};
		var o = t.fn.tooltip;
		t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
			return t.fn.tooltip = o, this
		}
	}), define("common/models/basic/js/require-css!web_old_inputautocomplete", [], function() {}), define("web_old_inputautocomplete", ["css!web_old_inputautocomplete"], function() {
		function t(t) {
			this.$obj = t.$obj, this.timer = null, this.isSearching = !1, this.$contentDiv = null, this.option = t.option, t.option.parent && (this.$parent = e(t.option.parent)), this.init()
		}
		var e = jQuery;
		t.prototype = {
			$obj: null,
			timer: null,
			option: null,
			isSearching: !1,
			$contentDiv: null,
			$parent: null,
			init: function() {
				this.createDomNode(), this.bindEvent()
			},
			createDomNode: function() {
				var t = ['<div class="qui-inputAutocomplete" style="display:none;">', '<ul class="qui-inputAutocomplete-ul" >', '<li class="disableDefalut">loading ... </li>', "</ul>", "</div>"].join("");
				if (this.$contentDiv = e(t), this.$obj.is(":visible")) {
					var i = {
						width: this.$obj.outerWidth()
					};
					if (!this.$parent) {
						var o = this.$obj.offset();
						i.top = o.top + this.$obj.outerHeight(), i.left = o.left, o = null
					}
					this.$contentDiv.css(i)
				}
				this.$contentDiv.appendTo(this.$parent || document.body), t = i = null
			},
			_blurTimer: null,
			bindEvent: function() {
				var t = this;
				this.$obj.keyup(function(i) {
					if (e.inArray(i.keyCode, [37, 39]) == -1) return 9 == i.keyCode ? (t.$contentDiv.hide(), void(t.option.onVoid && t.option.onVoid(t.$obj[0]))) : void(e.inArray(i.keyCode, [38, 40, 13]) != -1 && t.updateUI(i.keyCode))
				}).on("input", function() {
					e.trim(t.$obj.val()) || t.option.isAllowEmptySeach ? t.registSearch() : (t.$contentDiv.hide(), t.option.onVoid && t.option.onVoid(t.$obj[0]))
				}).blur(function() {
					t._blurTimer = window.setTimeout(function() {
						t.$contentDiv.is(":hidden") || t.option.isBlurClose !== !1 && t.$contentDiv.hide()
					}, 300), t.option.isBlurSelect && t.option.onSelect && t.option.onSelect.call(null, t.$contentDiv.find("li[data-select=true]").get(0), !0)
				}), this.option.isFocusedSeach && this.$obj.focus(function() {
					(e.trim(t.$obj.val()) || t.option.isAllowEmptySeach) && t.registSearch()
				}), this.$contentDiv.delegate(".qui-inputAutocomplete-ul li", "click", function(i) {
					return i.target.className.indexOf("disableDefalut") != -1 ? (i.stopPropagation(), void window.clearTimeout(t._blurTimer)) : void(this.className.indexOf("disableDefalut") == -1 && (t.$obj.val(e(this).text()), t.$contentDiv.hide(), t.option.onSelect && (t.option.onSelect.call(t.$obj[0], this), t.$contentDiv.html(""))))
				})
			},
			registSearch: function() {
				var t = this;
				this.isSearching = !1, window.clearTimeout(this.timer), this.timer = window.setTimeout(function() {
					(e.trim(t.$obj.val()) || t.option.isAllowEmptySeach) && (t.isSearching = !0, t.showContentDiv(), t.option.onSearch.call(t.$obj[0]))
				}, 300)
			},
			showContentDiv: function() {
				var t = this;
				if (this.$contentDiv.is(":hidden")) {
					if (this.$obj.is(":visible")) {
						var i = {
							width: this.$obj.outerWidth()
						};
						if (!this.$parent) {
							var o = this.$obj.offset();
							i.top = o.top + this.$obj.outerHeight(), i.left = o.left, o = null
						}
						this.$contentDiv.css(i)
					}
					this.$contentDiv.show(), e(document).one("click", function(e) {
						t.option.isBlurClose !== !1 && t.$contentDiv.hide()
					})
				}
			},
			updateUI: function(t) {
				function i() {
					var t = n.find("li[data-select=true]"),
						e = n.find("li").index(t);
					t.attr("data-select", ""), t.length ? (t = n.find("li:not(.disableDefalut)").eq(e + 1), t.length || (t = n.find("li:eq(0)"))) : t = n.find("li:eq(0)"), t.attr("data-select", "true"), t = null
				}

				function o() {
					var t = n.find("li[data-select=true]"),
						e = n.find("li").index(t);
					t.attr("data-select", ""), t.length ? (t = n.find("li:not(.disableDefalut)").eq(e - 1), t.length || (t = n.find("li:eq(" + (a - 1) + ")"))) : t = n.find("li:eq(" + (a - 1) + ")"), t.attr("data-select", "true"), t = null
				}
				if (!this.$contentDiv.is(":hidden")) {
					var n = this.$contentDiv.find(".qui-inputAutocomplete-ul"),
						a = n.find("li:not(.disableDefalut)").size();
					if (a && (e.inArray(t, [38, 40]) != -1 && (40 == t ? i() : o()), this.option.enterSelect !== !1 && 13 == t)) {
						var r = n.find("li[data-select=true]");
						r.length ? (this.$obj.val(r.text()), this.option.onSelect && (this.option.onSelect.call(this.$obj[0], r[0], !0), this.$contentDiv.html("")), this.$contentDiv.hide()) : this.option.isBlurClose !== !1 && this.$contentDiv.hide()
					}
				}
			},
			pushHTML: function(t) {
				if (this.$obj.is(":visible")) {
					var e = {
						width: this.$obj.outerWidth()
					};
					if (!this.$parent) {
						var i = this.$obj.offset();
						e.top = i.top + this.$obj.outerHeight(), e.left = i.left, i = null
					}
					this.$contentDiv.css(e), e = null
				}
				this.$contentDiv.html(t), this.isSearching = !1;
				var o = this.$contentDiv.find(".qui-inputAutocomplete-ul > li:not(.disableDefalut)");
				o.length && this.option.autoSelect && o.eq(0).attr("data-select", "true"), o = null
			},
			isShow: function() {
				return !this.$contentDiv.is(":hidden")
			},
			hide: function() {
				return this.$contentDiv.hide()
			},
			destroy: function() {
				this.$contentDiv.remove()
			}
		}, e.fn.extend({
			qyerAutocomplete: function(i) {
				var o, n, a = arguments;
				return e.each(this, function(r, s) {
					o = e(s), "object" == e.type(i) ? o.data("_autocomplete", new t({
						$obj: o,
						option: i
					})) : "pushHTML" == i ? o.data("_autocomplete").pushHTML(a[1]) : "getContent" == i ? n = o.data("_autocomplete").$contentDiv : "isShow" == i ? n = o.data("_autocomplete").isShow() : "hide" == i ? o.data("_autocomplete").hide() : "destroy" == i && (o.data("_autocomplete").destroy(), o.data("_autocomplete", null))
				}), o = a = null, "undefined" == typeof n ? this : n
			}
		})
	}), define("common/models/basic/js/require-css!web_ct_footprint", [], function() {}), define("web_ct_footprint", ["web_old_popup2", "web_ct_footprint_fpTpl", "web_ct_footprint_poiType", "web_lib_jquerymousewheel", "web_old_tooltips", "web_old_inputautocomplete", "css!web_ct_footprint"], function(t, e, i) {
		function o() {
			return this.p = null, this.$fp = null, this.$fpHead = null, this.$fpBody = null, this.$fpFoot = null, this.poiOpts = null, this.curCountryId = null, this.curCityId = null, this.markCityObj = {
				length: 0
			}, this.markPOIObj = {
				length: 0
			}, this.sourceShow = "", this.source_type = "", this.fp_track = null, this.init(), this
		}
		var n = {
				searchComplete: "/qcross/place/country.php?action=searchPlace",
				getFpList: "/qcross/place/country.php?action=getListWithContinentCateogry",
				getCityList: "/qcross/place/country.php?action=listcity",
				getPOIList: "/qcross/place/poi.php?action=poiListForFootprint",
				markCity: "/qcross/place/index.php?action=feeling",
				markPOI: "/qcross/place/index.php?action=feeling",
				recommendPOI: "/qcross/place/poi.php?action=recommendPoiBeento"
			},
			a = !1,
			r = [
				["Asia", "亚洲"],
				["Europe", "欧洲"],
				["NorthAmerica", "北美"],
				["SouthAmerica", "南美"],
				["Africa", "非洲"],
				["Oceania", "大洋洲"],
				["Antarctica", "南极洲"]
			],
			s = -1 != window.navigator.userAgent.indexOf("MSIE");
		$.ajaxSetup({
			error: function(t, e, i) {
				a = !1
			}
		}), o.prototype = {
			init: function() {
				return qyerUtil.isLogin() ? (a = !1, !document.getElementById("footprintModal") && (this.$fp = $(e.getTpl("fpModal")), this.$fpHead = this.$fp.find(".fp-header"), this.$fpBody = this.$fp.find(".fp-body"), this.$fpFoot = this.$fp.find(".fp-footer"), this.p = new t({
					showTitle: !1,
					showOKBtn: !1,
					showCancelBtn: !1,
					showCloseIcon: !1,
					exClassName: "define-popup"
				}), this.p.setOption({
					contentHTML: this.$fp
				}), this.bindEvent(), this)) : void qyerUtil.doLogin()
			},
			hide: function() {
				this.p.hide(), $("html").removeClass("ovh")
			},
			fpShow: function(t) {
				if (qyerUtil.isLogin()) {
					var i = $.extend({
							show_index: 0
						}, t),
						o = i.show_index,
						n = e.getTpl("fpHeader", {}),
						a = $(e.getTpl("fpSearch", {
							placeholder: "搜索国家/城市名"
						})),
						s = $(e.getTpl("fpTabs", {
							continent: r
						})),
						l = e.getTpl("fpFoot", {});
					this.$fpHead.html(n), this.$fpBody.html(a), this.$fpBody.append(s), this.getCountryList(s, o), this.bindFpSearch(a, "country"), !this.fp_track && i.fp_track && (this.fp_track = i.fp_track), this.$fpFoot.children().length || this.$fpFoot.html(l), this.$fp.is(":hidden") && (this.p.show(), $("html").addClass("ovh"))
				}
			},
			countryFpShow: function(t) {
				if (qyerUtil.isLogin()) {
					var i = $.extend({
							country_name: "",
							continent: ""
						}, t),
						o = e.getTpl("fpHeader", {
							continent: r,
							country: {
								name: i.country_name,
								continent: i.continent
							}
						}),
						n = $(e.getTpl("fpSearch", {
							placeholder: "搜索" + i.country_name + "城市名"
						})),
						a = e.getTpl("fpFoot", {});
					t.source_type && (this.source_type = t.source_type), i.show_type && (this.sourceShow = i.show_type), this.curCountryId = i.country_id, this.$fpHead.html(o), this.$fpBody.html(n), this.getCityList(i.country_id), this.bindFpSearch(n, "city"), this.$fpFoot.children().length || this.$fpFoot.html(a), this.$fp.is(":hidden") && (this.p.show(), $("html").addClass("ovh"))
				}
			},
			poiShow: function(t) {
				if (qyerUtil.isLogin()) {
					var o = {
							poiType: i,
							length: 0
						},
						n = null;
					t ? (this.poiOpts = t, this.markCityObj[t.city_id] = {
						city_id: t.city_id,
						poi: {
							list: {}
						}
					}, this.markCityObj.length += 1, t.show_type && (this.sourceShow = t.show_type), t.source_type && (this.source_type = t.source_type)) : (o.cityList = this.markCityObj, o.length = this.markCityObj.length);
					var a = e.getTpl("fpHeader", {}),
						r = e.getTpl("poiContainer", o);
					if (this.$fp.addClass("poi-modal"), this.$fpHead.html(a), this.$fpBody.html(r), this.$fpFoot.html(e.getTpl("poiFoot", {
						length: this.markPOIObj.length
					})), this.bindPoiSearch(n = this.$fpBody.find(".poi-search")), n = this.$fpBody.find(".poi-side"), n.length && this.bindSideWheel(n), this.p.show(), $("html").addClass("ovh"), $(".side-city-li").length) $(".side-city-li").eq(0).trigger("click"), this.curCityId = $(".side-city-li").eq(0).attr("city-id");
					else if (this.poiOpts) this.curCityId = this.poiOpts.city_id, this.getPOIList(this.curCityId, "sight"), $("#poi_type_sight").addClass("current");
					else if (1 == this.markCityObj.length) {
						var s = "";
						for (var l in this.markCityObj) "length" != l && (s = l);
						this.curCityId = s, this.getPOIList(this.curCityId, "sight"), $("#poi_type_sight").addClass("current")
					}
				}
			},
			successShow: function(t) {
				var o = this,
					n = {
						length: o.markCityObj.length
					};
				$.isEmptyObject(t.recommendPOI) || (n.recommendPOI = t.recommendPOI, n.poiTypeObj = i);
				var a = $(e.getTpl("fpSuccess", n));
				o.bindTooltip($("li", a)), o.$fpHead.empty(), o.$fpBody.html(a), o.$fpFoot.html(e.getTpl("poiFoot", {
					length: 0,
					succ: "succ"
				}))
			},
			commentShow: function() {
				var t = this;
				this.hide(), requirejs(["web_ct_footprint_comment"], function(e) {
					setTimeout(function() {
						var i = {};
						"" != t.source_type && (i.source_type = t.source_type), t.fp_track && (i.fp_track = t.fp_track), t.sourceShow && ("country" == t.sourceShow ? i.country_id = t.curCountryId : "poi" == t.sourceShow && (i.city_id = t.curCityId)), e.commShow(i)
					}, 300)
				})
			},
			getCountryList: function(t, i) {
				var o = {
					type: "country",
					timer: (new Date).getTime()
				};
				a = !0, $.getJSON(n.getFpList, o, function(o) {
					if (a = !1, 0 == o.error_code) {
						var n = o.data.continent_list,
							s = '<div class="section">' + e.getTpl("cityList", {
								city_list: o.data.hot_city
							}) + "</div>";
						for (var l in r) {
							var c = r[l];
							s += '<div class="section">' + e.getTpl("continentList", {
								continent_list: n[c[0]]
							}) + "</div>"
						}
						t.find(".fp-list-cont").html(s).removeClass("loading").find('[data-toggle="tooltip"]').tooltip({
							container: "body",
							delay: {
								show: 500,
								hide: 100
							}
						}), t.find("li").eq(i).trigger("click")
					}
				})
			},
			getCityList: function(t) {
				var e = this,
					i = $('<div class="fp-list-cont loading"><div class="city-list" country-id="' + t + '" page="1"><ul></ul></div></div>');
				this.$fpBody.append(i), this.loadCityList(i), i.bind("scroll", function() {
					var t = $(".city-list", this);
					if (!t.is(".loading")) return $(this).unbind("scroll"), !1;
					if (this.scrollHeight - this.scrollTop - this.offsetHeight < 2) {
						var i = $(this);
						e.loadCityList(i)
					}
				})
			},
			getPOIList: function(t, e) {
				var i = this;
				if (document.getElementById("city_" + t + "_" + e)) $("#city_" + t + "_" + e).fadeIn();
				else {
					var o = $('<div id="city_' + t + "_" + e + '" class="section section-poi"><div class="poi-list loading" city-id="' + t + '" poi-type="' + e + '" page="1"><ul></ul></div></div>');
					this.$fpBody.find(".poi-list-cont").append(o), this.loadPOIList(o), o.bind("scroll", function() {
						var t = $(".poi-list", this);
						if (!t.is(".loading")) return $(this).unbind("scroll"), !1;
						if (this.scrollHeight - this.scrollTop - this.offsetHeight < 2) {
							var e = $(this);
							i.loadPOIList(e)
						}
					})
				}
			},
			loadCityList: function(t) {
				if (a) return !1;
				var i = this,
					o = t.find(".city-list"),
					r = o.attr("country-id"),
					s = parseInt(o.attr("page")),
					l = {
						type: "city",
						countryId: r,
						page: s,
						timer: (new Date).getTime()
					};
				a = !0, $.getJSON(n.getCityList, l, function(t) {
					if (a = !1, 0 == t.error_code) {
						var n = $(e.getTpl("cityList_li", {
							city_list: t.data.city_list.list
						}));
						i.$fpHead.find(".continent").text(t.data.continent), i.$fpHead.find(".countryName").text(t.data.countryName), i.$fpBody.find(".fpSearch").attr("placeholder", "搜索" + t.data.countryName + "城市名"), i.bindTooltip(n).appendTo($("ul", o)), o.css("min-height", 230);
						for (var r in i.markCityObj) "length" != r && $("#city_" + r).addClass("current").removeClass("disabled").attr("beento", 0);
						t.data.city_list.loaded ? o.removeClass("loading") : (o.addClass("loading"), o.attr("page", ++s))
					}
				})
			},
			loadPOIList: function(t) {
				if (a) return !1;
				var o = this,
					r = $(".poi-list", t),
					s = r.attr("city-id"),
					l = r.attr("poi-type"),
					c = r.attr("page"),
					p = {
						cityId: s,
						poiType: l,
						page: c,
						timer: (new Date).getTime()
					};
				a = !0, $.getJSON(n.getPOIList, p, function(n) {
					if (a = !1, 0 == n.error_code) {
						var s = n.data.poi_list;
						if (0 == s[l].list.length) return r.hide(), t.append($(e.getTpl("addPoi", {
							poiType: i[l],
							poiAdd: o.createPoiUrl(n.data.city_url, l)
						}))).fadeIn(), !1;
						var p = $(e.getTpl("poiList_li", {
							poi_list: s[l].list
						}));
						$("ul", r).append(p), o.bindTooltip(p), t.fadeIn();
						for (var u in o.markPOIObj) "length" == u || $("#poi_" + u).hasClass("disabled") || $("#poi_" + u).addClass("current");
						if (s[l].loaded) {
							var d = ['<li class="add-poi">', '<a class="link-addpoi" target="_blank" href="' + o.createPoiUrl(n.data.city_url, l) + '"><i class="iconfont icon-jiahao"></i></a>', '<span class="text">添加' + i[l].text + "</span>", "</li>"].join("");
							r.removeClass("loading").find("ul").append(d)
						} else r.addClass("loading"), r.attr("page", ++c)
					}
				})
			},
			markCity: function(t, e) {
				if (!a) {
					var i = this,
						o = t.attr("beento"),
						r = {
							type: 1,
							id: e,
							oper: "beento",
							beento: o
						};
					a = !0, $.post(n.markCity, r, function(n) {
						if (a = !1, 0 == n.error_code) {
							var r = n.data.otherInfo,
								s = e,
								l = "" == r.city_name ? r.city_en_name : r.city_name;
							1 == o ? (t.addClass("current"), i.markCityObj[s] = {
								city_id: s,
								city_name: l,
								city_en_name: r.city_en_name,
								city_img: r.city_img,
								country_name: r.country_name,
								poi: {
									list: {}
								}
							}, i.markCityObj.length += 1, i.$fpFoot.find(".btn_next").removeClass("ui_btn_big_disabled").addClass("ui_btn_big").end().find(".fp-tags").show().find("dd").prepend('<a class="tag" id="tag_city_' + s + '" city-id="' + s + '" href="javascript:;">' + l + "</a>")) : (t.removeClass("current"), $("#tag_city_" + s).remove(), delete i.markCityObj[s], i.markCityObj.length -= 1, 0 == i.markCityObj.length && i.$fpFoot.find(".btn_next").removeClass("ui_btn_big").addClass("ui_btn_big_disabled")), t.attr("beento", 1 == o ? 0 : 1)
						}
					}, "json")
				}
			},
			unMarkCity: function(t) {
				if (!a) {
					var e = this,
						i = 0,
						o = {
							type: 1,
							id: t,
							oper: "beento",
							beento: i
						};
					a = !0, $.post(n.markCity, o, function(i) {
						if (a = !1, 0 == i.error_code) {
							var o = t;
							$("#city_" + o).removeClass("current").attr("beento", 1), $("#tag_city_" + o).remove(), delete e.markCityObj[o], e.markCityObj.length -= 1, 0 == e.markCityObj.length && e.$fpFoot.find(".btn_next").removeClass("ui_btn_big").addClass("ui_btn_big_disabled")
						}
					}, "json")
				}
			},
			markCityForSearch: function(t) {
				var e = this,
					i = {
						type: 1,
						id: t,
						oper: "beento",
						beento: 1
					};
				$.post(n.markCity, i, function(t) {
					if (0 == t.error_code) {
						var i = t.data.otherInfo,
							o = i.city_id,
							n = "" == i.city_name ? i.city_en_name : i.city_name;
						e.markCityObj[o] = {
							city_id: o,
							city_name: n,
							city_en_name: i.city_en_name,
							city_img: i.city_img,
							country_name: i.country_name,
							poi: {
								list: {}
							}
						}, e.markCityObj.length += 1, e.$fpFoot.find(".btn_next").removeClass("ui_btn_big_disabled").addClass("ui_btn_big").end().find(".fp-tags").show().find("dd").prepend('<a class="tag" id="tag_city_' + o + '" city-id="' + o + '" href="javascript:;">' + n + "</a>"), $("#city_" + o).addClass("current").attr("beento", 0)
					}
				}, "json")
			},
			markPOI: function(t, e) {
				if (!a) {
					var i = this,
						o = t.attr("beento"),
						r = {
							type: 2,
							id: e,
							oper: "beento",
							beento: o
						};
					a = !0, $.post(n.markPOI, r, function(n) {
						if (a = !1, 0 == n.error_code) {
							var r = e,
								s = n.data.otherInfo,
								l = s.poi_name,
								c = s.city_id,
								p = {};
							1 == o ? (t.addClass("current"), p = {
								poi_id: r,
								poi_name: l,
								poi_en_name: s.poi_en_name,
								poi_type: s.poi_type,
								poi_img: s.poi_img
							}, i.markCityObj[c] && (i.markCityObj[c].poi.list[r] = p), i.markPOIObj[r] = p, i.markPOIObj.length += 1, i.$fpFoot.find(".btn_close").hide(), i.$fpFoot.find(".fp-change").show().find("em").text(i.markPOIObj.length)) : (t.removeClass("current"), delete i.markPOIObj[r], i.markCityObj[c] && delete i.markCityObj[c].poi.list[r], i.markPOIObj.length -= 1, $.isEmptyObject(i.markPOIObj) && i.$fpFoot.find(".btn_close").show(), i.$fpFoot.find(".fp-change em").text(i.markPOIObj.length)), t.attr("beento", 1 == o ? 0 : 1)
						}
					}, "json")
				}
			},
			markPOIForSearch: function(t) {
				var e = this,
					i = {
						type: 2,
						id: t,
						oper: "beento",
						beento: 1
					};
				$.post(n.markPOI, i, function(i) {
					if (0 == i.error_code) {
						var o = t,
							n = i.data.poi_name,
							a = i.data.city_id,
							r = {};
						r = {
							poi_id: o,
							poi_name: n,
							poi_en_name: i.data.poi_en_name,
							poi_type: i.data.poi_type,
							poi_img: i.data.poi_img
						}, e.markCityObj[a] && (e.markCityObj[a].poi.list[o] = r), e.markPOIObj[o] = r, e.markPOIObj.length += 1, e.$fpFoot.find(".btn_close").hide(), e.$fpFoot.find(".fp-change").show().find("em").text(e.markPOIObj.length), $("#poi_" + t).addClass("current").removeClass("disabled").attr("beento", 0)
					}
				}, "json")
			},
			createPoiUrl: function(t, e) {
				if (!t || !e) return "#";
				var i = "transportation" == e ? "sight" : e;
				return t + i + "/add"
			},
			bindEvent: function() {
				var t = this;
				this.$fp.on("click", ".fp-close", function() {
					t.hide()
				}).on("click", "li[data-index]", function() {
					var e = this.getAttribute("data-index");
					return t.fpShow({
						show_index: e
					}), !1
				}).on("click", ".link-country", function() {
					var e = $(this),
						i = e.parents(".section").index() - 1,
						o = r[i][1];
					return t.countryFpShow({
						country_id: e.attr("country-id"),
						country_name: e.find("em").text(),
						continent: o
					}), t.curCountryId = e.attr("country-id"), $(".tooltip").remove(), !1
				}).on("click", ".tabs-li", function() {
					if ($(this).hasClass("current") || a) return !1;
					var e = $(".fp-tabs .section", t.$fp),
						i = $(this),
						o = i.index();
					return i.addClass("current").siblings().removeClass("current"), e.hide().eq(o).fadeIn(), !1
				}).on("click", ".city-list-li", function() {
					var e = $(this);
					return !e.hasClass("disabled") && (t.markCity(e, this.getAttribute("city-id")), !1)
				}).on("click", ".fp-tags .tag", function() {
					var e = this.getAttribute("city-id");
					return t.unMarkCity(e), !1
				}).on("click", ".fp-tags .fold", function() {
					var t = $(this).parents(".fp-tags");
					return t.toggleClass("tags-fold"), !1
				}).on("click", ".btn_next", function() {
					var e = $(this);
					if (!e.hasClass("ui_btn_big_disabled") && !e.hasClass("ui_btn_big_load")) {
						e.removeClass("ui_btn_big").addClass("ui_btn_big_load").val("");
						var i = [];
						for (var o in t.markCityObj) "length" != o && i.push(o);
						var a = {
							city_ids: i.join(","),
							timer: (new Date).getTime()
						};
						return $.getJSON(n.recommendPOI, a, function(e) {
							0 == e.error_code && t.successShow(e.data)
						}), !1
					}
				}).on("click", ".btn_close", function() {
					return t.hide(), !1
				}).on("click", ".btn_complete", function() {
					return t.poiShow(), !1
				}).on("click", ".btn_comment", function() {
					return t.hide(), t.markCityObj.length && t.commentShow(), !1
				}).on("click", ".poi-list-li", function() {
					var e = $(this);
					return !e.hasClass("disabled") && (t.markPOI(e, this.getAttribute("poi-id")), !1)
				}).on("click", ".side-city-li", function() {
					if (a) return !1;
					var e = $(this);
					if (!e.hasClass("current")) {
						e.addClass("current").siblings().removeClass("current"), $("#poi_type_sight").addClass("current").siblings().removeClass("current");
						var i = this.getAttribute("city-id");
						return t.$fpBody.find(".section-poi").hide(), t.curCityId = e.attr("city-id"), t.getPOIList(i, "sight"), !1
					}
				}).on("click", ".poi_type_tab", function() {
					if (a) return !1;
					var e = $(this),
						i = e.attr("poi-type");
					return e.hasClass("current") ? void 0 : (e.addClass("current").siblings().removeClass("current"), t.$fpBody.find(".section-poi").hide(), t.getPOIList(t.curCityId, i), !1)
				})
			},
			bindTooltip: function(t) {
				return t.tooltip({
					container: "body",
					delay: {
						show: 500,
						hide: 100
					}
				}), t
			},
			bindSideWheel: function(t) {
				var e = $(".list", t);
				if (e[0].scrollHeight > e[0].clientHeight) {
					var i = $(".barUp i", t),
						o = $(".barDown i", t),
						n = null;
					e.bind("mousewheel", function(t, e) {
						t.stopPropagation(), t.preventDefault();
						var i = e;
						s && (i = e > 0 ? i + 10 : i - 10), this.scrollTop -= i
					}), i.bind("mousedown", function() {
						clearInterval(n), n = setInterval(function() {
							e[0].scrollTop -= 10
						}, 50), $(document).bind("mouseup", function() {
							clearInterval(n), $(document).unbind("mouseup")
						})
					}), o.bind("mousedown", function() {
						clearInterval(n), n = setInterval(function() {
							e[0].scrollTop += 10
						}, 50), $(document).bind("mouseup", function() {
							clearInterval(n), $(document).unbind("mouseup")
						})
					})
				}
			},
			bindFpSearch: function(t, e) {
				var i = this,
					o = t.find(".txt");
				o.qyerAutocomplete({
					parent: $(".fpSearchContainer"),
					onSearch: function() {
						var t = o.val(),
							a = {
								val: t,
								type: e,
								timer: (new Date).getTime()
							};
						"city" == e && (a.country_id = i.curCountryId), o.qyerAutocomplete("pushHTML", '<ul class="qui-inputAutocomplete-ul" ><li class="disableDefalut">loading ... </li></ul>'), $.getJSON(n.searchComplete, a, function(e) {
							if (0 == e.error_code) {
								var n = "complex_list",
									a = e.data[n],
									r = ['<ul class="qui-inputAutocomplete-ul fp-inputAutocomplete">'];
								if (a && 0 == a.length) return o.qyerAutocomplete("pushHTML", '<div class="qui-inputAutocomplete-noResult">没有找到匹配的城市</div>'), !1;
								r.push(i.getAutocompleteLi(a, t)), r.push("</ul>"), o.qyerAutocomplete("pushHTML", r.join(""))
							}
						})
					},
					onSelect: function(t) {
						var e = t.getAttribute("data-type"),
							o = $(t).find(".qyer_inputAutocomplete_name").text(),
							n = t.getAttribute("beento");
						this.value = o, "country" == e ? (i.countryFpShow({
							country_id: t.getAttribute("country-id"),
							country_name: o,
							continent: $(t).find(".qyer_inputAutocomplete_found > em").text()
						}), i.curCountryId = t.getAttribute("country-id")) : 1 == n ? i.markCityForSearch(t.getAttribute("city-id")) : $(".fp-search").addClass("marked"), this.value = ""
					}
				}), o.bind("focus", function() {
					this.value = "", t.removeClass("marked")
				}), t.on("click", ".mark", function() {
					o.focus()
				})
			},
			bindPoiSearch: function(t) {
				var e = this,
					i = t.find(".txt");
				i.qyerAutocomplete({
					parent: $(".poiSearchContainer"),
					onSearch: function() {
						var t = i.val(),
							o = {
								val: t,
								type: "poi",
								city_id: e.curCityId,
								timer: (new Date).getTime()
							};
						i.qyerAutocomplete("pushHTML", '<ul class="qui-inputAutocomplete-ul" ><li class="disableDefalut">loading ... </li></ul>'), $.getJSON(n.searchComplete, o, function(o) {
							if (0 == o.error_code) {
								var n = "complex_list",
									a = o.data[n],
									r = ['<ul class="qui-inputAutocomplete-ul fp-inputAutocomplete">'];
								a && a.length && r.push(e.getAutocompleteLi(a, t)), r.push("</ul>"), r.push('<div class="qyer_inputAutocomplete_creat"><a href="' + e.createPoiUrl(o.data.city_url, "sight") + '" target="_blank">＋添加"' + t + '"</a></div>'), i.qyerAutocomplete("pushHTML", r.join(""))
							}
						})
					},
					onSelect: function(t) {
						var i = t.getAttribute("beento");
						this.value = $(t).find(".qyer_inputAutocomplete_name").text(), 1 == i ? e.markPOIForSearch(t.getAttribute("poi-id")) : $(".poi-search").addClass("marked"), this.value = ""
					}
				}), i.bind("focus", function() {
					this.value = "", t.removeClass("marked")
				}), t.on("click", ".mark", function() {
					i.focus()
				})
			},
			getAutocompleteLi: function(t, e) {
				var i = [];
				for (var o in t) {
					var n = t[o];
					"country" == n.type ? (i.push('<li data-type="' + n.type + '" country-id="' + n.country_id + '" beento="' + (n.mark ? 0 : 1) + '">'), i.push('<span class="qyer_inputAutocomplete_name">' + n.country_name + "</span>"), i.push('<span class="qyer_inputAutocomplete_en">' + n.country_en_name + "</span>"), i.push('<span class="qyer_inputAutocomplete_found"><em>' + n.continent + "</em>国家</span>"), i.push(" </li> ")) : "city" == n.type ? (i.push('<li data-type="' + n.type + '" city-id="' + n.city_id + '" beento="' + (n.mark ? 0 : 1) + '">'), i.push('<span class="qyer_inputAutocomplete_name">' + n.city_name + "</span>"), i.push('<span class="qyer_inputAutocomplete_en">' + n.city_en_name + "</span>"), i.push('<span class="qyer_inputAutocomplete_found"><em>' + n.country_name + "</em>城市</span>"), i.push(" </li> ")) : (i.push('<li data-type="' + n.type + '" poi-id="' + n.poi_id + '" beento="' + (n.mark ? 0 : 1) + '">'), i.push('<span class="qyer_inputAutocomplete_name">' + n.poi_name + "</span>"), i.push('<span class="qyer_inputAutocomplete_en">' + n.poi_en_name + "</span>"), i.push(" </li> "))
				}
				return i.join("")
			}
		};
		var l = {
			fpShow: function(t) {
				(new o).fpShow(t)
			},
			countryFpShow: function(t) {
				(new o).countryFpShow(t)
			},
			poiShow: function(t) {
				(new o).poiShow(t)
			}
		};
		return l
	}), $(function() {
		$(".js_edit_text").click(function() {
			var t = $(this).text();
			"写点评" == t && (t = ""), $(this).next().find(".ui2_textarea").val(t).trigger("keyup"), $(this).slideUp(200), $(this).next().slideDown(200)
		}), $(document).on("click", ".js_edit_textarea input", function() {
			var t = $(this).closest(".js_edit_textarea");
			t.slideUp(200), t.prev().slideDown(200)
		}), $(".u_spoor_more_edit").toggle(function() {
			$(this).addClass("u_spoor_more_edit_click")
		}, function() {
			$(this).removeClass("u_spoor_more_edit_click")
		}), $("._country_comment").click(function() {
			var t, e = $(this).closest(".js_edit_textarea"),
				i = e.find("textarea").val();
			$(this).closest(".u_spoor_country_item");
			return i.length < 1 || i.length > 120 ? (e.find("textarea").trigger("cerror"), !1) : ("add" == e.find('input[name="oper"]').val() && (t = !0), void $(this).closest("form").ajaxSubmit({
				dataType: "json",
				success: function(t) {
					0 == t.error_code && window.location.reload(!0)
				}
			}))
		}), $(".u_spoor_country_list_self").on("keyup", ".ui2_textarea", function() {
			var t = $(this).val().length,
				e = $(this).closest("form").find(".cLightgray");
			e.text(t + "/120字")
		}), $(".u_spoor_country_list_self").on("cerror", ".ui2_textarea", function() {
			$(this).addClass("ui2_error"), $(this).next().find(".ui2_error_layer").show()
		}), $(".u_spoor_country_list_self").on("focus", ".ui2_textarea", function() {
			$(this).removeClass("ui2_error"), $(this).next().find(".ui2_error_layer").hide()
		}), $(".item .ui_btn_bigA").click(function(t) {
			t.preventDefault();
			var e = $(this).attr("did");
			$.get("/api.php?action=getCityPoiCnt", "id=" + e).done(function(t) {
				requirejs(["web_ct_footprint"], function(t) {
					t.poiShow({
						city_id: e,
						show_type: "poi",
						source_type: "C-profile-batchComment"
					})
				})
			})
		}), $(document).on("click", "._jsaddplacecity", function(t) {
			t.preventDefault();
			var e = $(this).attr("data-id");
			void 0 == e ? requirejs(["web_ct_footprint"], function(t) {
				t.fpShow({
					fp_track: 1
				})
			}) : requirejs(["web_ct_footprint"], function(t) {
				t.countryFpShow({
					country_id: e,
					show_type: "country"
				})
			})
		}), $(".u_spoor_more_edit").on("click", "._jseditcomm", function(t) {
			t.preventDefault(), $(this).closest(".title").next(".text").trigger("click")
		}), $(".u_spoor_more_edit").on("click", "._jsdelcomm", function(e) {
			e.preventDefault();
			var i = $(this);
			tips.confirm(e, function() {
				$.ajax({
					url: "/api.php?action=delCommentByType",
					dataType: "json",
					data: "type=country&id=" + i.attr("data-id")
				}).done(function(e) {
					0 == e.error_code && t.add_mode(i)
				})
			}, "确定要删这个点评吗？删除后不可恢复")
		});
		var t = {};
		t.add_mode = function(t) {
			var e = t.closest(".u_spoor_country_item"),
				i = t.closest("li");
			i.prev().find("a").text("添加点评"), i.remove(), e.find(".text").text("写点评"), e.find('input[name="oper"]').val("add")
		}, t.after_add = function(t, e) {
			t.find('input[name="oper"]').val("edit"), t.find('input[name="id"]').val(e), t.find(".u_spoor_more_edit ul").html('<li><a href="#" class="_jseditcomm">编辑点评</a></li><li><a href="#" class="_jsdelcomm" data-id="' + e + '">删除点评</a></li><li><a href="#" class="_delcountry">删除足迹</a></li>')
		}, $(".u_spoor_more_edit").on("click", "._delcountry", function(t) {
			t.preventDefault();
			var e = $(this);
			$.ajax({
				url: "/api.php?action=delBeento",
				dataType: "json",
				data: "cid=" + e.attr("data-id") + "&confirm_font=1"
			}).done(function(i) {
				0 == i.error_code ? tips.confirm(t, function() {
					$.ajax({
						url: "/api.php?action=delBeento",
						dataType: "json",
						data: "cid=" + e.attr("data-id")
					}).done(function(t) {
						0 == t.error_code ? window.location.reload(!0) : qyerUI.message({
							msg: "请删除这里的点评，或从属城市、景点的点评和足迹",
							type: "warn",
							timeout: 2e3
						})
					})
				}, "确定要删这个足迹吗？删除后不可恢复") : qyerUI.message({
					msg: "请删除这里的点评，或从属城市、景点的点评和足迹",
					type: "warn",
					timeout: 2e3
				})
			})
		}), $("._delcity").click(function(t) {
			t.preventDefault();
			var e = $(this);
			$.ajax({
				url: "/api.php?action=delCityBeento",
				dataType: "json",
				data: "cid=" + e.attr("data-id") + "&confirm_font=1"
			}).done(function(i) {
				0 == i.error_code ? tips.confirm(t, function() {
					$.ajax({
						url: "/api.php?action=delCityBeento",
						dataType: "json",
						data: "cid=" + e.attr("data-id")
					}).done(function(t) {
						0 == t.error_code ? e.closest(".item").remove() : qyerUI.message({
							msg: "请删除这里的点评，或从属景点的点评和足迹",
							type: "warn",
							timeout: 2e3
						})
					})
				}, "确定要删这个足迹吗？删除后不可恢复") : qyerUI.message({
					msg: "请删除这里的点评，或从属景点的点评和足迹",
					type: "warn",
					timeout: 2e3
				})
			})
		})
	}), define("common/js/user2/footprint", function() {}),
	function(t) {
		var e = document,
			i = "appendChild",
			o = "styleSheet",
			n = e.createElement("style");
		n.type = "text/css", e.getElementsByTagName("head")[0][i](n), n[o] ? n[o].cssText = t : n[i](e.createTextNode(t))
	}('.qui-popup2{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);z-index:1000;overflow-y:auto;opacity:0}.qui-popup2>div{display:table;height:100%;margin:0 auto}.qui-popup2-dt{display:table-cell;vertical-align:middle}.qui-popup2-box{margin:0 auto;background-color:#fff;position:relative;-webkit-box-shadow:0 0 6px #aaa;-moz-box-shadow:0 0 6px #aaa;box-shadow:0 0 6px #aaa;border:1px solid #ccc;opacity:0}.qui-popup2-loadingBtn,.qui-popup2-okBtn{vertical-align:middle;margin-left:16px}.qui-popup2-box-title{height:70px;line-height:70px;font-size:20px;font-weight:700;padding-left:30px}.qui-popup2-box-content{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 30px}.qui-popup2-box-content>iframe{width:100%;border:none}.qui-popup2-box-bottom{text-align:right;height:70px;line-height:70px;padding-right:30px}.qui-popup2-closeIcon{position:absolute;right:10px;top:10px;cursor:pointer;background-image:url(//static.qyer.com/models/common/ui/popup2/icons.png);height:32px;width:32px;background-repeat:no-repeat;background-position:0 -18px;border-radius:5px}.qui-popup2-closeIcon:hover{background-position:0 -65px}.qui-popup2-cancelBtn{vertical-align:middle}.qui-popup2-loadingBtn{display:none}.tooltip{position:absolute;z-index:1070;display:block;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:9pt;font-weight:400;line-height:1.4;filter:alpha(opacity=0);opacity:0}.tooltip:after{content:\'\'}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#959595;text-align:center;text-decoration:none;background-color:#f5f5f5;border:1px solid #d7d7d7;border-radius:4px}.tooltip-arrow,.tooltip:after{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow,.tooltip.top:after{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#D7D7D7}.tooltip.top:after{bottom:1px;border-top-color:#f5f5f5}.tooltip.top-left .tooltip-arrow,.tooltip.top-left:after{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#D7D7D7}.tooltip.top-left:after{bottom:1px;border-top-color:#f5f5f5}.tooltip.top-right .tooltip-arrow,.tooltip.top-right:after{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#D7D7D7}.tooltip.top-right:after{bottom:1px;border-top-color:#f5f5f5}.tooltip.right .tooltip-arrow,.tooltip.right:after{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#D7D7D7}.tooltip.right:after{left:1px;border-right-color:#f5f5f5}.tooltip.left .tooltip-arrow,.tooltip.left:after{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#D7D7D7}.tooltip.left:after{right:1px;border-left-color:#f5f5f5}.tooltip.bottom .tooltip-arrow,.tooltip.bottom:after{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#D7D7D7}.tooltip.bottom:after{top:1px;border-bottom-color:#f5f5f5}.tooltip.bottom-left .tooltip-arrow,.tooltip.bottom-left:after{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#D7D7D7}.tooltip.bottom-left:after{top:1px;border-bottom-color:#f5f5f5}.tooltip.bottom-right .tooltip-arrow,.tooltip.bottom-right:after{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#D7D7D7}.tooltip.bottom-right:after{top:1px;border-bottom-color:#f5f5f5}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.qui-inputAutocomplete{position:absolute;z-index:1100;background-color:#fff;border:1px solid #eee}.qui-inputAutocomplete-ul li{height:32px;line-height:32px;border-bottom:solid 1px #eee;background-color:#fff;cursor:pointer;word-break:keep-all;text-overflow:ellipsis;overflow:hidden}.qui-inputAutocomplete-ul li:hover,.qui-inputAutocomplete-ul li[data-select=true]{background-color:#e0f1de}.qui-inputAutocomplete-ul li.disableDefalut{background-color:#fff!important;cursor:default}.qui-inputAutocomplete-noResult{color:red}.qyer_inputAutocomplete_name{padding:0 5px 0 10px}.qyer_inputAutocomplete_name .current{color:#077345}.qyer_inputAutocomplete_en{padding-right:10px;font-family:Tahoma,Geneva,sans-serif}.qyer_inputAutocomplete_found{color:#959595;padding-right:10px}.qyer_inputAutocomplete_creat{padding:10px}.blur,.img_blur{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden}@font-face{font-family:iconfont;src:url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.eot);src:url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.eot?#iefix) format(\'embedded-opentype\'),url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.woff) format(\'woff\'),url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.ttf) format(\'truetype\'),url(//static.qyer.com/models/basic/font/iconfont_footprint/iconfont.svg#iconfont) format(\'svg\')}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.comment-complete .title,.comment-head h1,.comment-layer .num-turn,.comment-layer .poi-item .poi-info .name,.comment-section .comm-sec-head h2,.comment-user .fp ul li em,.footprint-modal .fp-footer .fp-tags dl a,.footprint-modal .fp-header .title{font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif}.icon-infooutline:before{content:"\\e61c"}.icon-yuanquan:before{content:"\\e61a"}.icon-zan:before{content:"\\e61b"}.fp-search:after,.icon-sousuo:before,.poi-search:after{content:"\\e618"}.icon-xingxing:before{content:"\\e619"}.icon-sanjiaoright:before{content:"\\e616"}.icon-sanjiaoup:before{content:"\\e617"}.icon-sanjiaodown:before{content:"\\e614"}.icon-sanjiaoleft:before{content:"\\e615"}.icon-jiantouleft:before{content:"\\e60b"}.icon-jiantoudown:before{content:"\\e60a"}.icon-jiaotong:before{content:"\\e60e"}.icon-jiantouup:before{content:"\\e60d"}.icon-jiantouright:before{content:"\\e60c"}.icon-jingdian:before{content:"\\e610"}.icon-qizi:before{content:"\\e613"}.icon-qiongbi:before{content:"\\e612"}.icon-meishi:before{content:"\\e611"}.icon-huodong:before{content:"\\e607"}.icon-jiahaothin:before{content:"\\e608"}.icon-jiahao:before{content:"\\e609"}.icon-huanyipi:before{content:"\\e605"}.icon-huiche:before{content:"\\e606"}.icon-duigouthin:before{content:"\\e602"}.icon-gouwu:before{content:"\\e603"}.icon-guanbi:before{content:"\\e604"}.icon-dianping:before{content:"\\e601"}.icon-chengshi:before{content:"\\e600"}.comm-poi-container>ul:after,.comment-layer .poi-item .poi-upload .upload-photolist:after,.comment-user .score:after{visibility:hidden;content:" ";clear:both}.blur{-webkit-filter:blur(20px);-moz-filter:blur(20px);-ms-filter:blur(20px);filter:blur(20px);backface-visibility:hidden}.comment-layer{display:none;position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%;background:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png);background:#FFF\\9}.comment-head{border-bottom:1px solid #ececec;height:50px;background:#f5f5f5;-ms-box-sizing:border-box;box-sizing:border-box}.comment-head .logo{float:left;margin-top:12px;margin-left:20px}.comment-head h1{float:left;font-size:24px;margin-left:27px;height:50px;line-height:50px}.comment-head button{float:right;margin-top:12px;margin-right:62px}.comment-body{overflow-y:auto}.comment-body .comment-edit-bg{display:none;position:absolute;top:0;z-index:100;width:100%;height:100%;background:#FFF;opacity:.8;filter:alpha(opacity=80)}.city-list ul li img,.img_blur{-webkit-filter:blur(3px);-ms-filter:blur(3px)}.comment-body .comment-content{margin:0 auto;padding-bottom:20px;width:980px}.comment-body .comment-main{width:680px}.comment-body .comment-main.animate{animation:main 1s;-moz-animation:main 1s;-webkit-animation:main 1s;-o-animation:main 1s}.comment-body .comment-main.cityload{padding-bottom:50px;background:url(//static.qyer.com/models/common/images/loading_big.gif) center bottom no-repeat}.comment-body .comment-main.loading{margin-top:86px;height:120px;border:1px solid #ececec;-ms-box-sizing:border-box;box-sizing:border-box;box-shadow:0 0 10px rgba(0,0,0,.2);background:url(//static.qyer.com/models/common/images/loading_big.gif) center 40px no-repeat #FFF}.comment-body .comment-side{position:fixed;top:50px;left:50%;margin-left:210px;width:270px}.comment-body .comment-side .comment-side-bg{display:none;position:absolute;z-index:10;top:0;left:0;width:270px;background-color:transparent;height:100%}.comment-section .comm-sec-head{padding-top:46px;height:26px}.comment-section .comm-sec-head h2{float:left;line-height:26px;font-size:20px}.comment-section .comm-sec-head .progress{float:right;margin-top:12px}.comment-section .comm-sec-head .change{float:right;margin-top:10px;height:16px;line-height:16px;color:#959595}.comment-section .comm-sec-head .change a{text-decoration:none;color:#959595}.comment-section .comm-sec-head .change a:hover{color:#6d6d6d}.comm-poi-container>ul{margin-left:-20px}.comm-poi-container>ul:after{display:block;font-size:0;height:0}.comm-poi-container>ul>li{float:left;margin-top:20px;margin-left:20px;width:330px;height:120px}.comm-poi-container .loadingmore{margin-top:20px;padding-left:310px;border:1px solid #ececec;height:38px;line-height:38px;background:#FFF;color:silver;cursor:pointer}.comm-poi-container .loadingmore.loading,.comm-poi-container .loadingmore.loading a{cursor:default}.comm-poi-container .loadingmore a{font-size:14px;color:silver;text-decoration:none;vertical-align:middle}.comm-poi-container .loadingmore img{display:none;margin-left:5px;vertical-align:middle}.comm-poi-container .loadingmore.loading,.comm-poi-container .loadingmore:hover{border-color:silver;color:#959595}.comm-poi-container .loadingmore.loading a,.comm-poi-container .loadingmore:hover a{color:#959595}.comm-poi-container .loadingmore.loading img{display:inline-block}.comment-user{height:460px}.comment-user .user-avatar{padding-top:92px;height:96px}.comment-user .user-avatar .user-wrap{width:100%;height:96px;text-align:center;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/user_bg.jpg) no-repeat #FFF}.comment-user .user-avatar .user-wrap a{color:#FFF;text-decoration:none}.comment-user .user-avatar .user-wrap img{margin-top:-42px;border:3px solid #FFF;width:100px;height:100px;vertical-align:middle;border-radius:50%;-ms-box-sizing:border-box;box-sizing:border-box}.comment-user .user-avatar .user-wrap span{display:block;margin-top:5px;height:28px;line-height:28px;font-size:14px;color:#FFF}.comment-user .score{padding-top:20px;padding-bottom:8px;border:1px solid #ececec;border-top-width:0;height:110px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/line.png) center 44px no-repeat #FFF}.comment-user .score:after{display:block;font-size:0;height:0}.comment-user .score .score-wrap{float:left;margin:0 28px 0 26px;width:80px}.comment-user .score .score-wrap .turn{color:#1995dd;padding-top:30px}.comment-user .score .score-wrap .text-wrap{margin-top:8px;font-size:14px;color:#636363}.comment-user .score .score-wrap .text-wrap a{color:#D4D4D4;text-decoration:none;vertical-align:middle;font-size:14px}.comment-user .score .score-wrap .text-wrap a:hover,.comment-user .score .score-wrap.red .turn{color:#ff654c}.comment-user .score .score-wrap .text-wrap span{margin-left:27px;vertical-align:middle}.comment-user .score .score-wrap.red .cir{background-position:0 -8px}.comment-user .fp{padding:18px 28px;border:1px solid #ececec;border-top-width:0;height:102px;background:#fdfdfd}.comment-user .fp ul li{height:34px;line-height:34px;font-size:14px;color:#959595}.comment-user .fp ul li i.iconfont{color:silver}.comment-user .fp ul li i,.comment-user .fp ul li span{vertical-align:middle}.comment-user .fp ul li em{font-size:20px;margin:0 5px;color:#666;font-style:normal;font-weight:400}.comment-user.animate{animation:scale 1s;-moz-animation:scale 1s;-webkit-animation:scale 1s;-o-animation:scale 1s}.comment-user.loading{margin-top:86px;height:374px;border:1px solid #ececec;-ms-box-sizing:border-box;box-sizing:border-box;box-shadow:0 0 10px rgba(0,0,0,.2);background:url(//static.qyer.com/models/common/images/loading_big.gif) center 120px no-repeat #FFF}.comment-nav{margin-top:20px;animation:navbar 1s;-moz-animation:navbar 1s;-webkit-animation:navbar 1s;-o-animation:navbar 1s}.comment-nav .navbar{border:1px solid #d7d7d7;-ms-box-sizing:border-box;box-sizing:border-box;width:20px;height:20px;line-height:20px;border-radius:2px;text-align:center;color:#959595;background:#FFF;cursor:pointer}.comment-nav .navbar .iconfont{font-size:12px;vertical-align:2px}.comment-nav .navbar.disabled{color:#d7d7d7;cursor:default}.comment-nav .nav-wrap{padding:10px 0;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/line.png) 9px 0 repeat-y}.comment-nav .nav-wrap .nav-scroll{position:relative;height:0;overflow:hidden;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.comment-nav .nav-wrap dl{padding-left:26px;height:50px;font-size:14px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/cir.png) -25px 5px no-repeat}.comment-nav .nav-wrap dl a{color:#636363;text-decoration:none}.comment-nav .nav-wrap dl a:hover{color:#21ae47}.comment-nav .nav-wrap dl dt{color:#636363}.comment-nav .nav-wrap dl dd{display:none;font-size:12px;color:silver}.comment-nav .nav-wrap dl dd em{color:#636363}.comment-nav .nav-wrap dl.current{background-position:5px -25px}.comment-nav .nav-wrap dl.current a{color:#21ae47}.comment-nav .nav-wrap dl.current dd{display:block}.comment-nav .nav-wrap dl:first-child{margin-top:10px}.comment-layer .poi-item{position:relative;border:1px solid #ececec;padding:14px;width:300px;height:90px;min-height:90px;overflow:hidden;background:#FFF;cursor:pointer}.comment-layer .poi-item .error-tips{display:none;color:#ff654c;font-weight:400;font-style:normal}.comment-layer .poi-item .poi-info{padding-left:100px;height:90px}.comment-layer .poi-item .poi-info img{float:left;margin-left:-100px;width:90px;height:90px}.comment-layer .poi-item .poi-info .en_name,.comment-layer .poi-item .poi-info .name{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.comment-layer .poi-item .poi-info .name{font-size:16px}.comment-layer .poi-item .poi-info .en_name{color:silver;line-height:16px}.comment-layer .poi-item .poi-info .tags{margin-top:6px}.comment-layer .poi-item .poi-info .tags .tag{display:inline-block;margin-right:12px;border:1px solid #10b041;padding:0 8px;height:18px;line-height:18px;border-radius:18px;color:#10b041}.comment-layer .poi-item .poi-info .tags em{color:#ff654c;font-weight:400}.comment-layer .poi-item .poi-info .tags em i{font-size:14px;font-weight:700;font-style:normal}.comment-complete em,.comment-layer .poi-item .poi-comment .qui-textArea .tips em,.comment-layer .progress .text em{font-style:normal;font-weight:400}.comment-layer .poi-item .poi-info .star{margin-top:3px;line-height:20px;color:#ececec}.comment-layer .poi-item .poi-info .star .iconfont{margin-right:6px}.comment-layer .poi-item .poi-info .star .iconfont.current,.comment-layer .poi-item .poi-info .star .iconfont.hover{color:#5cad77}.comment-layer .poi-item .poi-info .star span.iconfont{position:relative;margin-left:3px;margin-right:0}.comment-layer .poi-item .poi-info .star span.iconfont .tooltip{position:absolute;top:-31px;left:50%;margin-left:-55px;width:110px}.comment-layer .poi-item .poi-info .star em.level{margin-left:6px;font-size:14px;font-weight:400;font-style:normal;color:#959595}.comment-layer .poi-item .poi-comment{margin-top:20px}.comment-layer .poi-item .poi-comment .qui-textArea textarea{display:block;padding:8px 10px;width:100%;height:110px;font-size:14px;color:#323232}.comment-layer .poi-item .poi-comment .qui-textArea .tips{margin-top:9px;height:24px;line-height:24px;text-align:right;color:silver;font-size:14px}.comment-layer .poi-item .poi-comment .qui-textArea span.iconfont{position:relative}.comment-layer .poi-item .poi-comment .qui-textArea span.iconfont .tooltip{position:absolute;top:-31px;left:50%;margin-left:-70px;width:140px}.comment-layer .poi-item .poi-upload .upload-flie{float:left;margin-top:-24px;height:24px;line-height:24px}.comment-layer .poi-item .poi-upload .upload-flie label{display:inline-block;font-size:14px;height:24px;line-height:24px;padding-left:20px;cursor:pointer;color:#636363;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/upload.png) 0 center no-repeat}.comment-layer .poi-item .poi-upload .upload-photolist{margin-left:-9px;padding-top:9px;clear:both}.comment-layer .poi-item .poi-upload .upload-photolist:after{display:block;font-size:0;height:0}.comment-layer .poi-item .poi-upload .upload-photolist li{float:left;position:relative;margin-left:9px;margin-bottom:9px;-ms-box-sizing:border-box;box-sizing:border-box;width:68px;height:68px}.comment-layer .poi-item .poi-upload .upload-photolist li .percent{display:block;width:68px;height:68px;line-height:68px;text-align:center;border:1px solid silver;background:#e7e7e7}.comment-layer .poi-item .poi-upload .upload-photolist li .percent span{display:block;margin:32px auto 0;width:46px;height:3px;background:#BFBFBF;border-radius:2px}.comment-layer .poi-item .poi-btn button,.footprint-modal .fp-footer .fp-btns button{margin-left:10px;vertical-align:middle}.comment-layer .poi-item .poi-upload .upload-photolist li .percent span em{display:block;width:0;height:100%;background:#5EA642;border-radius:2px}.comment-layer .poi-item .poi-upload .upload-photolist li img{width:68px;height:68px}.comment-layer .poi-item .poi-upload .upload-photolist li .close{display:none;position:absolute;top:-5px;right:-5px;width:20px;height:20px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/upload-close.png) no-repeat;cursor:pointer}.comment-layer .poi-item .poi-upload .upload-photolist li:hover .close{display:block;animation:navbar .25s;-moz-animation:navbar .25s;-webkit-animation:navbar .25s;-o-animation:navbar .25s}.comment-layer .poi-item .poi-upload .upload-photolist li.add .addPhotoBtn{display:block;width:68px;height:68px;line-height:68px;text-align:center;border:1px solid silver;background:#e7e7e7;cursor:pointer}.comment-layer .poi-item .poi-upload .upload-photolist li.add .addPhotoBtn .iconfont{font-size:36px;color:silver}.comment-layer .poi-item .poi-btn{text-align:right}.comment-layer .poi-item.commented{cursor:default;border-color:#3f9f5f}.comment-layer .poi-item.commented:before{content:\'\';position:absolute;top:0;right:0;width:28px;height:28px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/flag.png) no-repeat}.footprint-modal .fp-footer .fp-tags dl dd:after,.footprint-modal .fp-footer:after,.footprint-modal .fp-header:after{visibility:hidden;content:" ";clear:both}.comment-layer .poi-item.poi-item-edit{border-color:#007852;height:auto;z-index:1;cursor:default}.comment-layer .poi-item.poi-item-edit .iconfont{cursor:pointer}.comment-layer .poi-item.poi-item-edit:hover{border-color:#007852}.comment-layer .poi-item:hover{border-color:#10b041}.comment-layer .progress{height:14px;line-height:14px;color:#959595}.comment-layer .progress .text{float:left;font-size:12px}.comment-layer .progress .progress-bar{float:left;margin-top:3px;margin-left:8px;padding:2px 0 2px 3px;width:264px;height:3px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/progress.png) no-repeat}.comment-layer .progress .progress-bar .wrap{display:block;margin-top:-4px;min-width:11px;max-width:100%;width:10%;height:11px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/progress.png) right -10px no-repeat;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.comment-layer .circle-wrap{position:relative;width:80px;height:80px;border-radius:50%;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/round.png) no-repeat}.comment-layer .circle-wrap .cir{position:absolute;top:-3px;left:36px;width:8px;height:8px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/dot.png) no-repeat}.comment-layer .num-turn{font-size:16px;line-height:20px;height:20px;text-align:center;overflow:hidden;white-space:nowrap}.comment-layer .num-turn .num-wrap{display:inline-block;position:relative;width:10px;height:20px}.comment-layer .num-turn .num-span{position:absolute;top:0}.comment-layer .num-turn .num-span span{display:block;height:20px}.comment-complete{padding:20px 0;width:425px;background:#FFF;color:#959595;font-size:14px}.comment-complete p{line-height:26px}.comment-complete em{color:#10b041}.comment-complete .title{text-align:center;padding-bottom:20px;font-size:18px;color:#323232}.comment-complete .iconfont{font-size:22px;font-weight:700;margin-right:10px;color:#6fbc22}@media (max-width:980px){.comment-content:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.comment-content .comment-main{float:left}.comment-content .comment-side{position:static;margin-left:0;float:right}}@-webkit-keyframes scale{from{transform:rotateY(90deg);opacity:0}to{transform:rotateY(0);opacity:1}}@-moz-keyframes scale{from{transform:rotateY(90deg);opacity:0}to{transform:rotateY(0);opacity:1}}@-ms-keyframes scale{from{transform:rotateY(90deg);opacity:0}to{transform:rotateY(0);opacity:1}}@-o-keyframes scale{from{transform:rotateY(90deg);opacity:0}to{transform:rotateY(0);opacity:1}}@keyframes scale{from{transform:rotateY(90deg);opacity:0}to{transform:rotateY(0);opacity:1}}@-webkit-keyframes main{from{opacity:0;transform:translate(0,20px)}to{opacity:1;transform:translate(0,0)}}@-moz-keyframes main{from{opacity:0;transform:translate(0,20px)}to{opacity:1;transform:translate(0,0)}}@-ms-keyframes main{from{opacity:0;transform:translate(0,20px)}to{opacity:1;transform:translate(0,0)}}@-o-keyframes main{from{opacity:0;transform:translate(0,20px)}to{opacity:1;transform:translate(0,0)}}@keyframes main{from{opacity:0;transform:translate(0,20px)}to{opacity:1;transform:translate(0,0)}}@-webkit-keyframes navbar{from{opacity:0}to{opacity:1}}@-moz-keyframes navbar{from{opacity:0}to{opacity:1}}@-ms-keyframes navbar{from{opacity:0}to{opacity:1}}@-o-keyframes navbar{from{opacity:0}to{opacity:1}}@keyframes navbar{from{opacity:0}to{opacity:1}}.ovh,.ovh body{overflow:hidden}.fl{float:left}.fr{float:right}.img_blur{-moz-filter:blur(3px);filter:blur(3px);backface-visibility:hidden}.define-popup .qui-popup2-box-content{padding:0}.define-popup .qui-popup2-box-bottom{display:none}.footprint-modal{position:relative;width:730px;background:#f9faf9}.footprint-modal .fp-close{position:absolute;top:20px;right:20px;font-size:18px;width:1em;height:1em;line-height:1;text-align:center;overflow-y:hidden;color:#d7d7d7;cursor:pointer}.footprint-modal .fp-close .iconfont{font-size:18px}.footprint-modal .fp-close:hover{color:#959595}.footprint-modal .fp-header{padding:25px 50px 0;font-size:16px}.footprint-modal .fp-header:after{display:block;font-size:0;height:0}.footprint-modal .fp-header .title{margin-top:0;font-size:22px;height:44px;line-height:44px;color:#323232}.footprint-modal .fp-header .select,.footprint-modal .fp-header>span{float:left;margin-top:15px;margin-right:10px}.footprint-modal .fp-header>span{height:16px;line-height:16px}.footprint-modal .fp-header .gt{font-size:12px;color:silver}.footprint-modal .fp-header .gt .iconfont{font-size:12px}.footprint-modal .fp-header .gray{color:silver}.footprint-modal .fp-header .select{position:relative;margin-top:11px;z-index:200}.footprint-modal .fp-header .select .text{display:inline-block;height:30px;padding-right:10px;text-decoration:none;color:#323232;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/arrow.png) right 10px no-repeat}.footprint-modal .fp-header .select .list{display:none}.footprint-modal .fp-header .select .list ul{float:left;position:absolute;top:25px;left:-12px;-ms-box-sizing:border-box;box-sizing:border-box;border:1px solid #d7d7d7;background:#FFF}.footprint-modal .fp-header .select .list ul li{padding:0 12px;height:30px;line-height:30px;font-size:14px;white-space:nowrap;cursor:pointer;color:#323232}.footprint-modal .fp-header .select .list ul li:hover{background:#e3fae1}.footprint-modal .fp-header .select:hover .list{display:block}.footprint-modal .fp-body{padding:26px 50px 0}.footprint-modal .fp-footer{border-top:1px solid #EBEBEB;padding:25px 50px;min-height:36px;background:#FFF}.footprint-modal .fp-footer:after{display:block;font-size:0;height:0}.footprint-modal .fp-footer .fp-tags{float:left;margin-top:-3px;width:510px}.footprint-modal .fp-footer .fp-tags dl{line-height:24px}.footprint-modal .fp-footer .fp-tags dl a{display:inline-block;margin-top:10px;font-size:16px;color:#959595;text-decoration:none;vertical-align:middle}.footprint-modal .fp-footer .fp-tags dl .iconfont{font-size:10px;color:#323232;vertical-align:middle}.footprint-modal .fp-footer .fp-tags dl dt{float:left;width:75px}.footprint-modal .fp-footer .fp-tags dl dt a.fold{padding-right:10px;background:url(//fed.static.qyer.com/core/web/common/resource/component/footprint/arrow.png) right 10px no-repeat}.footprint-modal .fp-footer .fp-tags dl dt a.fold:hover{color:#323232}.footprint-modal .fp-footer .fp-tags dl dd{max-height:68px;overflow:hidden;font-size:0;margin-left:80px}.footprint-modal .fp-footer .fp-tags dl dd:after{display:block;font-size:0;height:0}.footprint-modal .fp-footer .fp-tags dl dd a.tag{display:inline-block;-ms-box-sizing:border-box;box-sizing:border-box;border:1px solid #10b041;margin-right:10px;height:24px;line-height:24px;padding:0 12px;border-radius:24px;white-space:nowrap;font-size:14px;color:#10b041}.footprint-modal .fp-footer .fp-change,.footprint-modal .fp-success{font-size:16px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif}.footprint-modal .fp-footer .fp-tags dl dd a.tag:hover{text-decoration:line-through}.footprint-modal .fp-footer .fp-tags.tags-fold .fold{background-position:right -17px}.footprint-modal .fp-footer .fp-tags.tags-fold dd{max-height:none}.footprint-modal .fp-footer .fp-change{float:left;height:36px;line-height:36px;color:#959595}.footprint-modal .fp-footer .fp-btns,.poi-search{float:right}.footprint-modal .fp-footer .fp-change em{color:#10b041}.footprint-modal .fp-success{padding:10px 0 16px;width:630px}.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:before,.fp-search:after,.poi-search:after{font-family:iconfont_footprint!important;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;font-style:normal}.footprint-modal .fp-success h3{height:40px;font-size:28px;line-height:40px}.footprint-modal .fp-success h3 em{color:#3f9f5f}.footprint-modal .fp-success h3 .iconfont{font-size:30px;line-height:40px;color:#6cbe00}.footprint-modal .fp-success h3 .iconfont,.footprint-modal .fp-success h3 span{vertical-align:middle}.footprint-modal .fp-success p{height:30px;line-height:30px;color:#959595}.footprint-modal .fp-success-center{padding-bottom:60px;text-align:center}.footprint-modal .qui-inputAutocomplete{-ms-box-sizing:border-box;box-sizing:border-box;z-index:100}.footprint-modal .qui-inputAutocomplete em{font-weight:400}.footprint-modal .qui-inputAutocomplete .qui-inputAutocomplete-noResult{padding:0 10px;height:46px;line-height:46px;font-size:14px;color:#323232}.footprint-modal .qui-inputAutocomplete li{border-bottom:0;height:46px;line-height:46px;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.footprint-modal .qui-inputAutocomplete li .qyer_inputAutocomplete_en .current,.footprint-modal .qui-inputAutocomplete li .qyer_inputAutocomplete_name .current{color:#3f9f5f}.footprint-modal .fpSearchContainer .qui-inputAutocomplete li{padding-right:40px}.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:before{float:right;display:none;margin-right:-24px;content:\'\\e606\';color:#10b041;font-size:15px}.footprint-modal .fpSearchContainer .qui-inputAutocomplete li:hover:before{display:block}.footprint-modal .poiSearchContainer .qui-inputAutocomplete li{font-size:12px;height:32px;line-height:32px}.footprint-modal .poiSearchContainer .qui-inputAutocomplete .qyer_inputAutocomplete_creat{border-top:1px solid #ececec}.footprint-modal .poiSearchContainer .qui-inputAutocomplete .qyer_inputAutocomplete_creat a{color:#959595}.poi-modal{width:auto}.poi-modal .fp-body{padding:0 40px}.poi-modal .fp-footer{padding:25px 40px}.fp-search,.poi-search{position:relative}.fp-search .mark,.poi-search .mark{display:none;position:absolute;top:1px;right:15px;width:130px;height:42px;line-height:42px;text-align:right;font-size:14px;color:#E06448;background:#FFF}.fp-search:after,.poi-search:after{display:block;position:absolute;z-index:10;top:13px;left:12px;font-size:16px;width:16px;height:16px;line-height:16px;color:silver}.city-list ul:after,.continent-list ul:after,.fp-tabs .tabs ul:after,.poi-list ul:after{content:" ";visibility:hidden;clear:both}.fp-search .txt,.poi-search .txt{-ms-box-sizing:border-box;box-sizing:border-box;font-size:16px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif;border:1px solid #ececec;padding:0 12px 0 32px;width:100%;height:44px;line-height:44px;color:#323232;background:#FFF}.fp-search .txt:focus,.poi-search .txt:focus{border-color:#5fa678;box-shadow:0 2px 2px 0 rgba(0,0,0,.05) inset}.fp-search.marked .txt,.poi-search.marked .txt{padding-right:130px;border-color:#E06448!important}.fp-search input::-webkit-input-placeholder,.poi-search input::-webkit-input-placeholder{color:silver!important}.fp-search input::-moz-placeholder,.poi-search input::-moz-placeholder{color:silver!important}.fp-search input:-moz-placeholder,.poi-search input:-moz-placeholder{color:silver!important}.fp-search input:-ms-input-placeholder,.poi-search input:-ms-input-placeholder{color:silver!important}.fp-search.marked .mark{display:block}.poi-search{margin-top:8px;width:178px}.poi-search .txt{font-size:14px;height:30px;line-height:30px}.poi-search .mark{height:28px;line-height:28px}.poi-search:after{top:7px;font-size:14px}.poi-search.marked .mark{display:block}.fp-tabs .tabs{padding-top:20px;width:630px}.fp-tabs .tabs ul{border-bottom:1px solid #e8e8e8}.fp-tabs .tabs ul:after{display:block;font-size:0;height:0}.fp-recommend .title,.fp-tabs .tabs ul li{font-size:16px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif}.fp-tabs .tabs ul li{float:left;width:78.75px;height:40px;line-height:40px;text-align:center;color:#323232}.fp-tabs .tabs ul li a{display:block;padding-bottom:1px;height:38px;line-height:38px;color:#323232;text-decoration:none}.fp-tabs .tabs ul li.current a,.fp-tabs .tabs ul li:hover a{padding-bottom:1px;color:#5cad77;border-bottom:2px solid #10b041}.fp-tabs .fp-list-cont{margin-bottom:15px;height:240px}.fp-tabs .fp-list-cont .city-list{margin-top:10px}.fp-list-cont{position:relative;margin-top:18px;width:654px;height:310px;background:url(//static.qyer.com/models/common/images/loading_big.gif) center 80px no-repeat;overflow:auto}.fp-list-cont .section{display:none;min-height:230px;background:#f9faf9}.fp-recommend{margin-bottom:22px;height:304px;overflow:hidden}.fp-recommend .title{height:38px;line-height:38px;color:#323232}.fp-recommend .content{height:114px;overflow:hidden}.city-list{background:#f9faf9;overflow:hidden}.city-list ul{margin-top:-18px;margin-left:-18px}.city-list ul:after{display:block;font-size:0;height:0}.city-list ul li{float:left;position:relative;margin-top:18px;margin-left:18px;width:90px;height:90px;overflow:hidden;cursor:pointer}.city-list ul li img{vertical-align:middle;width:90px;height:90px;-moz-filter:blur(3px);filter:blur(3px);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.city-list ul li .cont-table{position:absolute;z-index:1;top:0;left:0;display:table;width:90px;height:90px;background:rgba(0,0,0,.3)}.city-list ul li .cont-table .text{display:table-cell;vertical-align:middle;text-align:center}.city-list ul li .cont-table .text em,.city-list ul li .cont-table .text i{display:block;width:90px;font-size:14px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif;max-height:36px;line-height:18px;overflow:hidden;text-shadow:1px 1px 3px rgba(0,0,0,.3);color:#FFF}.city-list ul li .cont-table .text i{max-height:30px;line-height:15px;font-size:12px;color:silver}.city-list ul li .control{display:none;position:absolute;z-index:10;top:0;left:0;width:90px;height:90px;background:#10b041;background:rgba(16,176,65,.85)}.city-list ul li .control .iconfont{display:block;margin:14px auto 0;font-size:37px;width:1em;height:1em;line-height:1em;color:#79bf8e}.city-list ul li .control .text{display:table;margin-top:2px;width:100%;height:36px;text-align:center;color:#FFF}.city-list ul li .control .text i{display:table-cell;vertical-align:middle;overflow:hidden;font-size:14px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif;max-height:36px;line-height:18px;text-shadow:1px 1px 3px rgba(0,0,0,.3)}.city-list ul li.disabled{cursor:default}.city-list ul li.disabled .cont-table{background:#e6e6e5;background:rgba(245,245,245,.8)}.city-list ul li.disabled .cont-table em{color:#636363;text-shadow:none}.city-list ul li.disabled .cont-table i{color:#959595;text-shadow:none}.city-list ul li.disabled .tooltip{position:absolute}.city-list ul li.disabled:hover .cont-table{display:table}.city-list ul li.current .cont-table,.city-list ul li.disabled:hover .control,.city-list ul li:hover .cont-table{display:none}.city-list ul li.current .control,.city-list ul li:hover .control{display:block}.city-list ul li.current .control .iconfont{color:#FFF}.city-list em,.city-list i{font-style:normal;font-weight:400}.city-list.loading{padding-bottom:10px}.city-list.loading ul{padding-bottom:30px;background:url(//static.qyer.com/models/common/images/wait_16.gif) bottom center no-repeat}.continent-list ul{margin-left:-45px}.continent-list ul:after{display:block;font-size:0;height:0}.continent-list ul li{float:left;margin-left:45px;width:180px;height:30px;line-height:30px;font-size:14px}.continent-list ul li .text{padding:7px 0;height:16px;line-height:16px}.continent-list ul li .text a{display:inline-block;max-width:138px;line-height:16px;vertical-align:middle;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:silver}.continent-list ul li .text a em{color:#636363;font-weight:400}.continent-list ul li .text a:hover{text-decoration:none;color:#3f9f5f}.continent-list ul li .text a:hover em{color:#3f9f5f}.continent-list ul li .text .hot{display:inline-block;margin-left:6px;padding:0 4px;height:16px;line-height:16px;border-radius:2px;font-size:12px;color:#FFF;background:#ff654c;vertical-align:middle}.poi-list{overflow:hidden}.poi-list ul{margin-left:-11px}.poi-list ul:after{display:block;font-size:0;height:0}.poi-list ul li{float:left;width:80px;margin-left:11px;cursor:pointer}.poi-list ul li .img{position:relative;width:80px;height:80px}.poi-list ul li .img img{width:80px;height:80px;vertical-align:middle}.poi-list ul li .img .s{display:none;position:absolute;top:0;left:0;width:80px;height:80px;line-height:80px;text-align:center;background:#10b041;background:rgba(16,176,65,.85)}.poi-list ul li .img .s .iconfont{font-size:37px;color:#FFF}.poi-list ul li .text{display:block;height:34px;line-height:34px;font-size:14px;color:#959595;text-align:center;overflow:hidden}.poi-list ul li.disabled{cursor:default}.poi-list ul li.disabled .img:before{content:\'\';position:absolute;width:80px;height:80px;background:#f5f5f5;opacity:.8;filter:alpha(opacity=80)}.poi-list ul li.disabled .text{color:#323232}.poi-list ul li.disabled:hover .s{display:none}.poi-list ul li.add-poi .link-addpoi{display:block;border:1px solid silver;width:78px;height:78px;line-height:78px;text-decoration:none;text-align:center;background:#e7e7e7;color:silver}.poi-list ul li.add-poi .link-addpoi .iconfont{font-size:36px}.poi-list ul li.add-poi:hover .link-addpoi{border-color:#959595;color:#959595}.poi-list ul li.current .s,.poi-list ul li:hover .s{display:block}.poi-list ul li.current .text,.poi-list ul li:hover .text{color:#323232}.poi-list ul li.current .s .iconfont{color:#FFF!important}.poi-list ul li:hover .s .iconfont{color:#79bf8e}.poi-list.loading{padding-bottom:10px}.poi-list.loading ul{padding-bottom:20px;background:url(//static.qyer.com/models/common/images/wait_16.gif) bottom center no-repeat}.poi-container:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.poi-container .poi-side{float:left;margin-right:15px;width:135px}.poi-container .poi-side .poi-city-list{margin-top:15px;width:135px}.poi-container .poi-side .poi-city-list .bar{display:block;margin:5px auto;width:40px;height:20px;line-height:20px;text-align:center;text-decoration:none;color:#636363}.poi-container .poi-side .poi-city-list .bar .iconfont{font-size:12px;cursor:pointer}.poi-container .poi-side .poi-city-list .bar:hover{color:#10b041}.poi-container .poi-side .poi-city-list .list{width:135px;height:320px;overflow:hidden;font-size:14px}.poi-container .poi-side .poi-city-list .list ul{width:128px;min-height:320px;background:#f1f1f1;border-radius:3px}.poi-container .poi-side .poi-city-list .list ul li{width:128px;height:40px;line-height:40px;text-align:center;color:#323232;cursor:pointer}.poi-container .poi-side .poi-city-list .list ul li span{display:inline-block;overflow:hidden;width:8em;text-overflow:ellipsis;white-space:nowrap}.poi-container .poi-side .poi-city-list .list ul li:hover{color:#3f9f5f}.poi-container .poi-side .poi-city-list .list ul li.current{position:relative;border-radius:3px;background:#5cad77;color:#FFF}.poi-container .poi-side .poi-city-list .list ul li.current:after{position:absolute;top:50%;right:-12px;content:\'\';margin-top:-6px;width:0;height:0;border:6px solid #5cad77;border-color:transparent transparent transparent #5cad77;overflow:hidden}.poi-container .poi-main{float:left;width:570px}.poi-container .poi-main .poi-tabs .tabs{float:left;width:375px;height:38px;overflow:hidden}.poi-container .poi-main .poi-tabs .tabs ul{height:37px;border-bottom:1px solid #e4e4e5}.poi-container .poi-main .poi-tabs .tabs ul:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.poi-container .poi-main .poi-tabs .tabs ul li{float:left;position:relative;width:75px;height:36px;line-height:36px;font-size:14px;cursor:pointer;text-align:center}.poi-container .poi-main .poi-tabs .tabs ul li .iconfont,.poi-container .poi-main .poi-tabs .tabs ul li span{vertical-align:middle}.poi-container .poi-main .poi-tabs .tabs ul li .iconfont{color:#959595}.poi-container .poi-main .poi-tabs .tabs ul li.current,.poi-container .poi-main .poi-tabs .tabs ul li:hover{border-bottom:2px solid #10b041;color:#5cad77}.poi-container .poi-main .poi-tabs .tabs ul li.current .iconfont,.poi-container .poi-main .poi-tabs .tabs ul li:hover .iconfont{color:#5cad77}.poi-container .poi-main .poi-tabs .poi-list-cont{margin-top:22px;width:594px;height:342px;overflow:hidden;background:url(//static.qyer.com/models/common/images/loading_big.gif) 220px 120px no-repeat}.poi-container .poi-main .poi-tabs .poi-list-cont .poi-list ul{margin-left:-18px}.poi-container .poi-main .poi-tabs .poi-list-cont .poi-list ul li{margin-left:18px}.poi-container .poi-main .poi-tabs .poi-list-cont .section{display:none;height:342px;overflow:auto;background:#F9FAF9}.poi-container .poi-main .poi-tabs .poi-list-cont .section .add{padding-top:120px;text-align:center}.poi-container .poi-main .poi-tabs .poi-list-cont .section .add span{margin-right:15px;font-size:14px;font-family:"Hiragino Sans GB","Microsoft YaHei",\\9ED1\\4F53,\\5b8b\\4f53,sans-serif;color:#636363}');