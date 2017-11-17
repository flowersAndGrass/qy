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
			if(qyerUtil.isLogin()) return !1;
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
	var a = "/api.php?action=islogin&rnd=" + +new Date;
	if(!i) return void jQuery.getJSON(a, function(i) {
		i || e && e(), "ok" == i.result ? ("undefined" != typeof comment && comment.setUid(i.data.uid), t && t(i.data)) : e && e(i.data)
	});
	var n = !1;
	return jQuery.ajax({
		url: a,
		dataType: "json",
		async: !1,
		success: function(i) {
			i || (e && e(), n = !1), "ok" == i.result ? (t && t(i.data), n = !0) : (e && e(i.data), n = !1)
		}
	}), n
}

function yjbGetCookie(t) {
	for(var e = document.cookie.split("; "), i = 0; i < e.length; i++) {
		var a = e[i].split("=");
		if(a[0] == t) return unescape(a[1])
	}
}

function yjbSetCookie(t, e) {
	var i = 1,
		a = new Date;
	a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = t + "=" + escape(e) + ";domain=.qyer.com;expires=" + a.toGMTString()
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
		if(null != i)
			for(var a = 0; a < i.length; a++) e = e.replace(i[a], "[imgimg]" + a + "[/imgimg]");
		if(e = e.replace(t, ""), null != i)
			for(var a = 0; a < i.length; a++) e = e.replace("[imgimg]" + a + "[/imgimg]", i[a]);
		jQuery(this).html(e)
	})
}

function loadjscssfile(t, e) {
	if("js" == e) {
		var i = document.createElement("script");
		i.setAttribute("type", "text/javascript"), i.setAttribute("src", t)
	} else if("css" == e) {
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
	if(null != e && e.length > 1 && (i = e[2]), "" == i) return "b";
	var a = i.substr(i.length - 1, 1).toLowerCase(),
		n = parseInt("0x" + a);
	return n > 7 ? "b" : "a"
}

function amendUrl(t, e) {
	if("" == e) return t;
	var i = "",
		a = t.indexOf("#");
	return a != -1 && (i = t.substr(a), t = t.substr(0, a)), t = t.indexOf("?") == -1 ? t + "?" + e : t + "&" + e, t + i
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
	if(QYER.uid <= 0) return ajaxlogin(), !1;
	var i = t.attr("data-uid"),
		a = t.attr("data-relate"),
		n = t.attr("data-each"),
		o = "";
	o = 1 == a ? "action=addfriend&fuid=" + i : "action=channelfriend&uid=" + i;
	var r = "/ajax.php";
	/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (r = "/bbsajax.php"), jQuery.ajax({
		type: "POST",
		url: r,
		data: o,
		dataType: "json",
		beforeSend: function(t) {},
		success: function(i) {
			"ok" == i.result ? (a = 0 == a ? 1 : 0, e(n, a, t)) : e(n, a, t)
		}
	})
}

function weiboshare(t, e, i) {
	var a = e;
	i = i || "";
	var n = "http://service.weibo.com/share/share.php?appkey=2254065920&title=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(a) + "&ralateUid=1721449743";
	i && (n += "&pic=" + encodeURIComponent(i)), window.open(n, "_blank", "scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes,")
}

function tracker_request(t) {
	var e = encodeURIComponent(window.location.href),
		i = "//qt.qyer.com/beacon.gif?type=click&category=" + encodeURIComponent(t) + "&campaign=inpage&",
		a = encodeURIComponent(document.referrer),
		n = jQuery.cookie("_guid") || "",
		o = jQuery.cookie("_uid") || "",
		r = jQuery.cookie("_session") || "";
	if(i += "referer=" + e + "&referer_link=" + a + "&guid=" + n + "&user_id=" + o + "&session=" + r, "https:" !== document.location.protocol) {
		var s = new Image;
		s.src = i
	}
}

function flash(t, e, i) {
	if("" == t) return "";
	e = e ? e : 590, i = i ? i : 410;
	var a = "";
	return a += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + e + '" height="' + i + '">', a += '<param name="movie" value="' + t + '">', a += '<param name="quality" value="high">', a += '<param name="wmode" value="transparent">', a += '<param name="menu" value="false">', a += '<embed src="' + t + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + e + '" height="' + i + '" wmode="transparent" ></embed>', a += "</object>"
}

function showFlash(t, e, i, a) {
	i = i ? i : 590, a = a ? a : 410;
	var n = "";
	n += "<style>", n += ".popup_video_bg{background:url(//static.qyer.com/images/plan2/popup_video_bg.png);}", n += "</style>", n += flash(e, i, a), jQuery("#" + t).html(n), qyerUI.popup.show({
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
			for(var e = !1, i = 0; i < a.length; i++) this == a[i] && (e = !0);
			if(!e) {
				a.push(this);
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
		a = [];
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
			n && t("body").append(o), n = !1, t("html").css({
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
		var a = {},
			n = !0,
			o = "<div class='ui_fullpupBox_bg'><div class='ui_fullpupBox'><div class='ui_fullpupBox_main'></div></div></div>";
		t(document).on("click", ".ui_fullpupBox_close", function() {
			e()
		}), a.ajax = function(e) {
			var a = e.url,
				n = e.width;
			i(n), t.get(a, function(e) {
				t(".ui_fullpupBox_main").html(e), t(".ui_fullpupBox_head").css({
					width: n
				})
			})
		}, a.show = function(e) {
			var a = e.id,
				n = e.width;
			i(n);
			var o = t("#" + a).html();
			t(".ui_fullpupBox_main").html(o), t(".ui_fullpupBox_head").css({
				width: n
			})
		}, qyerUI.fullpup = a
	}(jQuery),
	function(t) {
		function e() {
			t(".ui_popup_bg").fadeOut(300)
		}

		function i(i, a) {
			o && (t("body").append(r), t(".ui_popup_close").on("click", function() {
				e()
			})), o = !1, i = parseInt(i, 10), t(".ui_popup_bg").css({
				height: t(document).height()
			}).stop(!0, !0).fadeIn(300), t(".ui_popup").css({
				width: i,
				top: t(document).scrollTop()
			}), t(".ui_popup_main").text(""), t(".ui_popup_close").hide(), "show" == a && t(".ui_popup_close").show()
		}

		function a() {
			var e = t(window).height(),
				i = t(".ui_popup").height(),
				a = (e - i) / 2;
			a = a < 20 ? 20 : a, t(".ui_popup").css("margin-top", a)
		}
		var n = {},
			o = !0,
			r = '<div class="ui_popup_bg"><div class="ui_popup"><p class="ui_popup_close" title="关闭"></p><div class="ui_popup_main"></div></div></div>';
		n.pupclose = e, n.start = i, n.ajax = function(e) {
			if("object" == typeof e) var n = e.url,
				o = e.width || 500,
				r = e.isclose || "show",
				s = e.callback || !1;
			i(o, r), t.get(n, function(e) {
				t(".ui_popup_main").html(e), "function" == typeof s && s(), a()
			})
		}, n.show = function(e) {
			if("object" == typeof e) var n = e.id,
				o = e.width || 500,
				r = e.isclose || "show";
			i(o, r);
			var s = t("#" + n).html();
			t(".ui_popup_main").html(s), a()
		}, n.showHtml = function(e) {
			if("object" == typeof e) var n = e.html,
				o = e.width || 500,
				r = e.isclose || "show";
			i(o, r), t(".ui_popup_main").html(n), a()
		}, qyerUI.popup = n
	}(jQuery),
	function() {
		function t() {
			return jQuery(".ui_pupBox_bg").hide(), a = !1, !1
		}

		function e(t) {
			a && jQuery("body").append(n), a = !1, t = parseInt(t, 10), jQuery(".ui_pupBox_bg").css({
				display: "block",
				height: jQuery(document).height()
			}), jQuery(".ui_pupBox").css({
				width: t + 2,
				top: jQuery(document).scrollTop()
			}), jQuery(".ui_pupBox_main").text(""), jQuery(".ui_pupBox_close").show()
		}
		var i = {},
			a = !0,
			n = "<div class='ui_pupBox_bg'><div class='ui_pupBox'><div class='ui_pupBox_close'></div><div class='ui_pupBox_main'></div></div></div>";
		window.pupclose = t, i.start = e, i.ajax = function(i, a, n) {
			var o = "show",
				r = typeof i;
			"object" == r ? (url = i.url, a = i.width, o = i.closebtn, n = i.cb) : url = i, e(a), jQuery.get(url, function(t) {
				if(jQuery(".ui_pupBox_main").html(t), "function" == typeof n) try {
					n()
				} catch(e) {}
			}), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == o && jQuery(".ui_pupBox_close").hide()
		}, i.show = function(i, a) {
			var n = "show",
				o = typeof i;
			"object" == o ? (id = i.id, a = i.width, n = i.closebtn) : id = i, e(a);
			var r = jQuery("#" + id).html();
			jQuery(".ui_pupBox_main").html(r), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, i.showHtml = function(i, a) {
			var n = "show",
				o = typeof i;
			"object" == o ? (html = i.html, a = i.width, n = i.closebtn) : html = i, e(a), jQuery(".ui_pupBox_main").html(html), jQuery(".ui_pupBox_close").bind("click", function() {
				t()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, window.popup = i
	}(),
	function(t) {
		function e(e, a) {
			i && (t("body").append("<textarea id='js_autoheight_clone'></textarea>"), i = !1);
			var n = t("#js_autoheight_clone");
			n.width(t(e).width()), n.val(t(e).val()), n.css("font-size", a.fontSize), n.css("line-height", a.lineHeight), setTimeout(function() {
				var i = n.get(0).scrollHeight;
				t(e).height(i)
			}, 1)
		}
		var i = !0;
		qyerUI.autoheight = e
	}(jQuery),
	function(t) {
		function e(e) {
			if("object" == typeof e) {
				var a = e.msg || "操作已成功！",
					n = e.type || "true",
					o = e.timeout || 2e3;
				clearTimeout(i);
				var r = document.getElementById("mod_message"),
					s = document.getElementById("mod_message_cont");
				if(!r) {
					var c = document.createElement("div");
					c.id = "mod_message";
					var u = document.createElement("p");
					u.id = "mod_message_cont", c.appendChild(u), document.body.appendChild(c), r = document.getElementById("mod_message"), s = document.getElementById("mod_message_cont")
				}
				s.className = n, s.innerHTML = a, r.style.display = "block";
				var l = r.offsetWidth,
					d = document.body.offsetWidth,
					p = (d - l) / 2;
				r.style.left = p + "px", "stop" != o && (i = setTimeout(function() {
					t(r).slideUp()
				}, o))
			}
		}
		var i;
		qyerUI.message = e
	}(jQuery);
var process_submit = function() {
	var t = function() {
		this.id = null, this.rmclass = null, this.addclass = null, this.isval = !0, this.before = function(t, e, i, a, n) {
			this.id = t, this.rmclass = e, this.addclass = i, a = a || "提交中...", "html" == n && (this.isval = !1), this.isval ? jQuery("#" + t).removeClass(e).addClass(i).val(a) : jQuery("#" + t).removeClass(e).addClass(i).html(a)
		}, this.after = function(t) {
			this.isval ? jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).val(t) : jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).html(t)
		}
	};
	return new t
}();
popup.coast = function(t, e, i, a) {
	function n() {
		jQuery(".ui_coast").fadeOut(500), jQuery(".ui_coast").remove()
	}
	t = t || 400, i.text = i.text || "感谢你的分享，让其他穷游er看到了你在这里留下的回忆。";
	var o = '<div class="ui_coast"><p class="ui_coast_cnt"><img src="//static.qyer.com/images/common/tpl/icon_true.png" width="34" height="34" alt="" class="ui_coast_img" />' + i.text + '</p><ul class="ui_coast_num clearfix">';
	if(void 0 != i.credits1 && (o = o + "<li>经验值<span>" + i.credits1 + "</span></li>"), void 0 != i.credits2 && (o = o + "<li>贡献<span>" + i.credits2 + "</span></li>"), "undefined" != typeof a) switch(a) {
		case "warn":
			o = o.replace(/icon_true.png/, "icon_warn.png");
			break;
		case "error":
			o = o.replace(/icon_true.png/, "icon_error32.png")
	}
	o += "</ul></div>", jQuery("body").append(o);
	var r = jQuery(window).width(),
		s = jQuery(window).height(),
		c = jQuery(".ui_coast").outerHeight(),
		u = t + 42,
		l = (r - u) / 2,
		d = (s - c) / 2 + jQuery(document).scrollTop(),
		p = 10;
	if(e)
		if(e = jQuery("#" + e), e.size() > 0) {
			var h = e.offset(),
				f = e.outerWidth(),
				m = e.outerHeight(),
				_ = h.top - c - p,
				y = h.left - (u - f) / 2;
			r - f - y + p < u ? (y = r - u - p, h.top - jQuery(document).scrollTop() < c ? (_ = h.top + m + p, jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: _
			}).show()) : jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: _
			}).show()) : h.top - jQuery(document).scrollTop() < c ? (_ = h.top + m + p, y < 10 && (y = 10), jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: _
			}).show()) : (y < 10 && (y = 10), jQuery(".ui_coast").css({
				width: t,
				left: y,
				top: _
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
			var a = t.clientX,
				n = t.clientY,
				o = "jsdelconfirm",
				r = ['<div class="ui_delete" id="' + o + '">', '<div class="ui_delete_box">', '<div><span class="icon_doubt">' + i + "</span></div>", '<div class="ui_delete_btns">', '<input type="button" value="取消" class="ui_button_cancel" id="jsconfirmcancel" /><input type="button" id="jsconfirmok" value="确定" class="ui_button" />', "</div>", "</div>", "</div>"],
				s = jQuery("#" + o);
			s.size() <= 0 ? (jQuery("body").append(r.join("")), s = jQuery("#" + o)) : jQuery(s).find(".icon_doubt").html(i);
			var c = 91,
				u = jQuery(document).scrollTop() + n - 100;
			jQuery(s).css("top", u + "px");
			var l = jQuery(".ui_delete").width(),
				d = a,
				p = jQuery(document).scrollLeft();
			a - p < l || (d = a - l / 2);
			var h = jQuery(document).width();
			d + l > h && (d = h - l - 20), d <= 0 && (d = 20), jQuery(s).hide(), jQuery(s).css({
				left: d,
				top: u + c
			}).animate({
				height: "show",
				opacity: "show",
				top: u
			}, 200), jQuery("#jsconfirmcancel").unbind("click").click(function() {
				jQuery(s).animate({
					height: "hide",
					opacity: "hide",
					top: u + c
				}, 200)
			}), jQuery("#jsconfirmok").unbind("click").click(function(t) {
				e(), jQuery(s).animate({
					height: "hide",
					opacity: "hide",
					top: u + c
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
			var a = +new Date;
			jQuery.get(_ajax.ajaxurl + "?action=" + t + "&rnd=" + a, e, i)
		},
		getJSON: function(t, e, i) {
			var a = +new Date;
			jQuery.getJSON(_ajax.ajaxurl + "?action=" + t + "&rnd=" + a, e, i)
		},
		post: function(t, e, i) {
			e = jQuery.merge(e, {
				type: "POST"
			}), jQuery.post(_ajax.ajaxurl + "?action=" + t, e, i)
		}
	};
String.prototype.gbtrim = function(t, e) {
	for(var i = "", a = e || "", n = 0, o = 0; o < this.length; o++) this.charCodeAt(o) > 127 || 94 == this.charCodeAt(o) ? n += 2 : n++;
	if(n <= t) return this;
	n = 0, t = t > a.length ? t - a.length : t;
	for(var o = 0; o < this.length; o++) {
		if(this.charCodeAt(o) > 127 || 94 == this.charCodeAt(o) ? n += 2 : n++, n > t) {
			i += a;
			break
		}
		i += this.charAt(o)
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
			a = "auto_text_shadow",
			n = jQuery("#" + a);
		if(a != jQuery(i).attr("id")) {
			jQuery(n).width(jQuery(i).width());
			var o = jQuery(i).css("font-size"),
				r = jQuery(i).css("line-height"),
				s = jQuery(i).css("text-indent"),
				c = parseInt(jQuery(i).css("min-height").replace(/px/, ""));
			c = r, jQuery(n).css({
				height: "18px",
				"font-size": o,
				"text-indent": s
			});
			var u = jQuery(i).val() + "穷游";
			jQuery(n).val(u), setTimeout(function() {
				var t = jQuery(n).get(0).scrollHeight;
				t <= c && (t = c), jQuery(i).height(t)
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
		var t = window.location.href;
		if(t.indexOf("m.qyer.com") == -1 && "1" != yjbGetCookie("_surveyed") && "1" != yjbGetCookie("surveyed")) {
			var e = Math.random();
			65 == parseInt(100 * e) && (jQuery.getJSON("//feed.qyer.com/index/survey?callback=?", function(t) {
				if(t.show) {
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
			a.hide()
		}
		jQuery("._js_jiathis_style_share a").mouseover(function() {
			jiathis_config.title = "", jiathis_config.summary = "", jiathis_config.pic = "", jiathis_config.url = "";
			var t = jQuery(this),
				e = t.attr("data-title"),
				i = t.attr("data-summary"),
				a = t.attr("data-pic"),
				n = t.attr("data-url") || "";
			e && (e = e.replace(/&gt;/g, ">"), e = e.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), e && (jiathis_config.title = e), i && (jiathis_config.summary = i), a && (jiathis_config.pic = a), n && (jiathis_config.url = n)
		}), jQuery("._js_jiathis_style_share").mouseover(function() {
			var t = jQuery(this),
				e = t.attr("data-title"),
				i = t.attr("data-summary"),
				a = t.attr("data-pic"),
				n = t.attr("data-url") || "";
			e && (e = e.replace(/&gt;/g, ">"), e = e.replace(/&lt;/g, "<")), i && (i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<")), jiathis_config.title || (jiathis_config.title = e), jiathis_config.summary || (jiathis_config.summary = i), jiathis_config.pic || (jiathis_config.pic = a), jiathis_config.url || (jiathis_config.url = amendUrl(window.location.href, n))
		});
		var e, i = jQuery(".photo_end_share_btn"),
			a = jQuery(".bbs_tools_sharelay");
		i.hover(function() {
			window.clearTimeout(e), a.show()
		}, function() {
			e = window.setTimeout(function() {
				t()
			}, 200)
		}), a.hover(function() {
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
		if("jiathis_button_tsina" != t) {
			var e = jQuery(this).attr("data-url");
			e && (jiathis_config.url = amendUrl(jiathis_config.url, e))
		}
	}), jQuery(function() {
		function t() {
			e = 0, clearTimeout(a), window.setTimeout(function() {
				0 == e && jQuery(".ui_usercard").fadeOut(50)
			}, 500)
		}
		var e = 0,
			i = 0;
		jQuery(document).on("click", "._js_follow_func", function() {
			follow(jQuery(this))
		}), jQuery(document).on("click", "._jsaddmsg", function() {
			if(QYER.uid <= 0) return ajaxlogin(), !1;
			var t = jQuery(this).attr("data-uid"),
				e = jQuery(this).attr("data-relate");
			popup.ajax("/api.php?action=addmsg&oper=form&uid=" + t + "&relate=" + e, 510)
		});
		var a = 0;
		jQuery(document).on("mouseover", "._js_face_usercard,.ui_headPort", function(t) {
			if(!i) {
				var n = document.createElement("link");
				n.type = "text/css", n.rel = "stylesheet", n.href = "//static.qyer.com/css/user2/medal.css", document.body.appendChild(n), i = 1
			}
			var o = jQuery(this).attr("data-uid");
			if(void 0 == o && (o = jQuery(this).attr("alt")), e = 1, jQuery(".ui_usercard").remove(), void 0 == o) return !1;
			thiz = this;
			var r = t.pageX;
			t.pageX + 300 > jQuery(window).width() && (r = jQuery(window).width() - 300);
			var s = "/ajax.php";
			/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (s = "/bbsajax.php"), clearTimeout(a), a = setTimeout(function() {
				jQuery.get(s + "?action=usercard&uid=" + o, function(e) {
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
					var e, i, a;
					e = t(this), i = e.attr("url") + "&refer=" + window.location.href, a = e.attr("notoken"), window.open(i, "newwindow", "height=450px,width=600px,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), pupclose(), e = i = a = null
				})
			},
			create: function(t) {
				document.write(this.getHTML(t))
			},
			getHTML: function(t) {
				var e = [],
					t = t || {},
					i = t.weibopublish || {},
					a = t.qqpublish || {};
				return e.push('<p class="ui_textboxShare fr ' + ("min" == t.iconSize ? "ui_textboxShareSmall" : "") + '">'), e.push('    <em class="title">' + (t.text ? t.text : "同时转发到：") + "</em>"), e.push('    <label class="weibo">'), e.push('        <input type="checkbox" name="weibopublish" class="weibopublish" flag="0" weibo="weibo" value="" onclick="qyerUI.SNS.share.onSelect(this)" id="' + (i.id || "weibopublish") + '"  notoken="' + ("0" == i.notoken ? "0" : "1") + '" '), "0" == i.notoken && i.checked && e.push(' checked="checked" '), e.push(" />"), e.push('        <span class="icon ' + ("0" == i.notoken ? "" : "iconnull") + '"></span>'), e.push("    </label>"), e.push('    <label class="qzone">'), e.push('        <input type="checkbox" name="qqpublish" class="qqpublish" flag="0" value="" weibo="qq"  onclick="qyerUI.SNS.share.onSelect(this)" id="' + (a.id || "qqpublish") + '" notoken="' + ("0" == a.notoken ? "0" : "1") + '"'), "0" == a.notoken && a.checked && e.push(' checked="checked" '), e.push(" />"), e.push('        <span class="icon ' + ("0" == a.notoken ? "" : "iconnull") + '"></span>'), e.push("    </label>"), e.push("</p>"), e.join("")
			},
			onSelect: function(e) {
				if(!QYER.uid) return e.checked = !1, void ajaxlogin();
				var i = t(e);
				if(i.is(":checked")) {
					if("1" == i.attr("notoken")) return void this._showpopup(i);
					if("0" == i.attr("flag")) {
						var a = i.attr("weibo"),
							n = i.attr("id"),
							o = i.attr("notoken");
						t.getJSON("/api.php?action=checkweibo&type=" + a, function(t) {
							if("ok" != t.result) {
								var e = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">您在我们网站的token已经过期，是否重新授权完成同步？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + o + '" weibo="' + a + '" type="button" url="//login.qyer.com/login.php?action=' + a + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + n + '" value="取消"></div></div>';
								popup.showHtml(e, 440)
							}
						}), i.attr("flag", 1)
					}
				}
			},
			_showpopup: function(t) {
				var e, i, a, n;
				e = t.attr("weibo"), i = t.attr("id"), a = t.attr("notoken"), n = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">使用此功能需绑定到穷游，现在就绑定吗？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + a + '" weibo="' + e + '" type="button" url="//login.qyer.com/login.php?action=' + e + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + i + '" value="取消"></div></div>', t.attr("checked", !1), popup.showHtml(n, 440), e = i = a = n = null
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
				if("object" == typeof t && t.extra && t.extra.code) switch(0 | t.extra.code) {
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
	}(jQuery),
	function(t) {
		function e() {
			if(t.fn.ajaxSubmit.debug) {
				var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
				window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
			}
		}
		t.fn.ajaxSubmit = function(i) {
			function a(e) {
				for(var a = new FormData, n = 0; n < e.length; n++) "file" != e[n].type && a.append(e[n].name, e[n].value);
				if(c.find("input:file:enabled").each(function() {
						var e = t(this).attr("name"),
							i = this.files;
						if(e)
							for(var n = 0; n < i.length; n++) a.append(e, i[n])
					}), i.extraData)
					for(var o in i.extraData) a.append(o, i.extraData[o]);
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
					e.data = a, t.upload && (t.upload.onprogress = function(t) {
						e.progress(t.position, t.total)
					}), s && s.call(e, t, i)
				}, t.ajax(r)
			}

			function n(a) {
				function n(t) {
					var e = t.contentWindow ? t.contentWindow.document : t.contentDocument ? t.contentDocument : t.document;
					return e
				}

				function r() {
					function i() {
						try {
							var t = n(m).readyState;
							e("state = " + t), "uninitialized" == t.toLowerCase() && setTimeout(i, 50)
						} catch(a) {
							e("Server abort: ", a, " (", a.name, ")"), s(k), b && clearTimeout(b), b = void 0
						}
					}
					var a = c.attr("target"),
						r = c.attr("action");
					j.setAttribute("target", h), o || j.setAttribute("method", "POST"), r != d.url && j.setAttribute("action", d.url), d.skipEncodingOverride || o && !/post/i.test(o) || c.attr({
						encoding: "multipart/form-data",
						enctype: "multipart/form-data"
					}), d.timeout && (b = setTimeout(function() {
						g = !0, s(w)
					}, d.timeout));
					var u = [];
					try {
						if(d.extraData)
							for(var l in d.extraData) u.push(t('<input type="hidden" name="' + l + '">').attr("value", d.extraData[l]).appendTo(j)[0]);
						d.iframeTarget || (f.appendTo("body"), m.attachEvent ? m.attachEvent("onload", s) : m.addEventListener("load", s, !1)), setTimeout(i, 15), j.submit()
					} finally {
						j.setAttribute("action", r), a ? j.setAttribute("target", a) : c.removeAttr("target"), t(u).remove()
					}
				}

				function s(i) {
					if(!_.aborted && !q) {
						try {
							S = n(m)
						} catch(a) {
							e("cannot access response document: ", a), i = k
						}
						if(i === w && _) return void _.abort("timeout");
						if(i == k && _) return void _.abort("server abort");
						if(S && S.location.href != d.iframeSrc || g) {
							m.detachEvent ? m.detachEvent("onload", s) : m.removeEventListener("load", s, !1);
							var o, r = "success";
							try {
								if(g) throw "timeout";
								var c = "xml" == d.dataType || S.XMLDocument || t.isXMLDoc(S);
								if(e("isXml=" + c), !c && window.opera && (null == S.body || "" == S.body.innerHTML) && --T) return e("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
								var u = S.body ? S.body : S.documentElement;
								_.responseText = u ? u.innerHTML : null, _.responseXML = S.XMLDocument ? S.XMLDocument : S, c && (d.dataType = "xml"), _.getResponseHeader = function(t) {
									var e = {
										"content-type": d.dataType
									};
									return e[t]
								}, u && (_.status = Number(u.getAttribute("status")) || _.status,
									_.statusText = u.getAttribute("statusText") || _.statusText);
								var l = (d.dataType || "").toLowerCase(),
									h = /(json|script|text)/.test(l);
								if(h || d.textarea) {
									var y = S.getElementsByTagName("textarea")[0];
									if(y) _.responseText = y.value, _.status = Number(y.getAttribute("status")) || _.status, _.statusText = y.getAttribute("statusText") || _.statusText;
									else if(h) {
										var v = S.getElementsByTagName("pre")[0],
											j = S.getElementsByTagName("body")[0];
										v ? _.responseText = v.textContent ? v.textContent : v.innerText : j && (_.responseText = j.textContent ? j.textContent : j.innerText)
									}
								} else "xml" != l || _.responseXML || null == _.responseText || (_.responseXML = B(_.responseText));
								try {
									C = E(_, l, d)
								} catch(i) {
									r = "parsererror", _.error = o = i || r
								}
							} catch(i) {
								e("error caught: ", i), r = "error", _.error = o = i || r
							}
							_.aborted && (e("upload aborted"), r = null), _.status && (r = _.status >= 200 && _.status < 300 || 304 === _.status ? "success" : "error"), "success" === r ? (d.success && d.success.call(d.context, C, "success", _), p && t.event.trigger("ajaxSuccess", [_, d])) : r && (void 0 == o && (o = _.statusText), d.error && d.error.call(d.context, _, r, o), p && t.event.trigger("ajaxError", [_, d, o])), p && t.event.trigger("ajaxComplete", [_, d]), p && !--t.active && t.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, _, r), q = !0, d.timeout && clearTimeout(b), setTimeout(function() {
								d.iframeTarget || f.remove(), _.responseXML = null
							}, 100)
						}
					}
				}
				var u, l, d, p, h, f, m, _, y, v, g, b, j = c[0],
					x = !!t.fn.prop;
				if(a)
					if(x)
						for(l = 0; l < a.length; l++) u = t(j[a[l].name]), u.prop("disabled", !1);
					else
						for(l = 0; l < a.length; l++) u = t(j[a[l].name]), u.removeAttr("disabled");
				if(t(":input[name=submit],:input[id=submit]", j).length) return void alert('Error: Form elements must not have name or id of "submit".');
				if(d = t.extend(!0, {}, t.ajaxSettings, i), d.context = d.context || d, h = "jqFormIO" + (new Date).getTime(), d.iframeTarget ? (f = t(d.iframeTarget), v = f.attr("name"), null == v ? f.attr("name", h) : h = v) : (f = t('<iframe name="' + h + '" src="' + d.iframeSrc + '" />'), f.css({
						position: "absolute",
						top: "-1000px",
						left: "-1000px"
					})), m = f[0], _ = {
						aborted: 0,
						responseText: null,
						responseXML: null,
						status: 0,
						statusText: "n/a",
						getAllResponseHeaders: function() {},
						getResponseHeader: function() {},
						setRequestHeader: function() {},
						abort: function(i) {
							var a = "timeout" === i ? "timeout" : "aborted";
							e("aborting upload... " + a), this.aborted = 1, f.attr("src", d.iframeSrc), _.error = a, d.error && d.error.call(d.context, _, a, i), p && t.event.trigger("ajaxError", [_, d, a]), d.complete && d.complete.call(d.context, _, a)
						}
					}, p = d.global, p && !t.active++ && t.event.trigger("ajaxStart"), p && t.event.trigger("ajaxSend", [_, d]), d.beforeSend && d.beforeSend.call(d.context, _, d) === !1) return void(d.global && t.active--);
				if(!_.aborted) {
					y = j.clk, y && (v = y.name, v && !y.disabled && (d.extraData = d.extraData || {}, d.extraData[v] = y.value, "image" == y.type && (d.extraData[v + ".x"] = j.clk_x, d.extraData[v + ".y"] = j.clk_y)));
					var w = 1,
						k = 2,
						Q = t("meta[name=csrf-token]").attr("content"),
						$ = t("meta[name=csrf-param]").attr("content");
					$ && Q && (d.extraData = d.extraData || {}, d.extraData[$] = Q), d.forceSync ? r() : setTimeout(r, 10);
					var C, S, q, T = 50,
						B = t.parseXML || function(t, e) {
							return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
						},
						U = t.parseJSON || function(t) {
							return window.eval("(" + t + ")")
						},
						E = function(e, i, a) {
							var n = e.getResponseHeader("content-type") || "",
								o = "xml" === i || !i && n.indexOf("xml") >= 0,
								r = o ? e.responseXML : e.responseText;
							return o && "parsererror" === r.documentElement.nodeName && t.error && t.error("parsererror"), a && a.dataFilter && (r = a.dataFilter(r, i)), "string" == typeof r && ("json" === i || !i && n.indexOf("json") >= 0 ? r = U(r) : ("script" === i || !i && n.indexOf("javascript") >= 0) && t.globalEval(r)), r
						}
				}
			}
			if(!this.length) return e("ajaxSubmit: skipping submit process - no element selected"), this;
			var o, r, s, c = this;
			"function" == typeof i && (i = {
				success: i
			}), o = this.attr("method"), r = this.attr("action"), s = "string" == typeof r ? t.trim(r) : "", s = s || window.location.href || "", s && (s = (s.match(/^([^#]+)/) || [])[1]), i = t.extend(!0, {
				url: s,
				success: t.ajaxSettings.success,
				type: o || "GET",
				iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
			}, i);
			var u = {};
			if(this.trigger("form-pre-serialize", [this, i, u]), u.veto) return e("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
			if(i.beforeSerialize && i.beforeSerialize(this, i) === !1) return e("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
			var l = i.traditional;
			void 0 === l && (l = t.ajaxSettings.traditional);
			var d, p = this.formToArray(i.semantic);
			if(i.data && (i.extraData = i.data, d = t.param(i.data, l)), i.beforeSubmit && i.beforeSubmit(p, this, i) === !1) return e("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
			if(this.trigger("form-submit-validate", [p, this, i, u]), u.veto) return e("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
			var h = t.param(p, l);
			d && (h = h ? h + "&" + d : d), "GET" == i.type.toUpperCase() ? (i.url += (i.url.indexOf("?") >= 0 ? "&" : "?") + h, i.data = null) : i.data = h;
			var f = [];
			if(i.resetForm && f.push(function() {
					c.resetForm()
				}), i.clearForm && f.push(function() {
					c.clearForm(i.includeHidden)
				}), !i.dataType && i.target) {
				var m = i.success || function() {};
				f.push(function(e) {
					var a = i.replaceTarget ? "replaceWith" : "html";
					t(i.target)[a](e).each(m, arguments)
				})
			} else i.success && f.push(i.success);
			i.success = function(t, e, a) {
				for(var n = i.context || i, o = 0, r = f.length; o < r; o++) f[o].apply(n, [t, e, a || c, c])
			};
			var _ = t("input:file:enabled[value]", this),
				y = _.length > 0,
				v = "multipart/form-data",
				g = c.attr("enctype") == v || c.attr("encoding") == v,
				b = !!(y && _.get(0).files && window.FormData);
			e("fileAPI :" + b);
			var j = (y || g) && !b;
			return i.iframe !== !1 && (i.iframe || j) ? i.closeKeepAlive ? t.get(i.closeKeepAlive, function() {
				n(p)
			}) : n(p) : (y || g) && b ? (i.progress = i.progress || t.noop, a(p)) : t.ajax(i), this.trigger("form-submit-notify", [this, i]), this
		}, t.fn.ajaxForm = function(i) {
			if(0 === this.length) {
				var a = {
					s: this.selector,
					c: this.context
				};
				return !t.isReady && a.s ? (e("DOM not ready, queuing ajaxForm"), t(function() {
					t(a.s, a.c).ajaxForm(i)
				}), this) : (e("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this)
			}
			return this.ajaxFormUnbind().bind("submit.form-plugin", function(e) {
				e.isDefaultPrevented() || (e.preventDefault(), t(this).ajaxSubmit(i))
			}).bind("click.form-plugin", function(e) {
				var i = e.target,
					a = t(i);
				if(!a.is(":submit,input:image")) {
					var n = a.closest(":submit");
					if(0 == n.length) return;
					i = n[0]
				}
				var o = this;
				if(o.clk = i, "image" == i.type)
					if(void 0 != e.offsetX) o.clk_x = e.offsetX, o.clk_y = e.offsetY;
					else if("function" == typeof t.fn.offset) {
					var r = a.offset();
					o.clk_x = e.pageX - r.left, o.clk_y = e.pageY - r.top
				} else o.clk_x = e.pageX - i.offsetLeft, o.clk_y = e.pageY - i.offsetTop;
				setTimeout(function() {
					o.clk = o.clk_x = o.clk_y = null
				}, 100)
			})
		}, t.fn.ajaxFormUnbind = function() {
			return this.unbind("submit.form-plugin click.form-plugin")
		}, t.fn.formToArray = function(e) {
			var i = [];
			if(0 === this.length) return i;
			var a = this[0],
				n = e ? a.getElementsByTagName("*") : a.elements;
			if(!n) return i;
			var o, r, s, c, u, l, d;
			for(o = 0, l = n.length; o < l; o++)
				if(u = n[o], s = u.name)
					if(e && a.clk && "image" == u.type) u.disabled || a.clk != u || (i.push({
						name: s,
						value: t(u).val(),
						type: u.type
					}), i.push({
						name: s + ".x",
						value: a.clk_x
					}, {
						name: s + ".y",
						value: a.clk_y
					}));
					else if(c = t.fieldValue(u, !0), c && c.constructor == Array)
				for(r = 0, d = c.length; r < d; r++) i.push({
					name: s,
					value: c[r]
				});
			else null !== c && "undefined" != typeof c && i.push({
				name: s,
				value: c,
				type: u.type
			});
			if(!e && a.clk) {
				var p = t(a.clk),
					h = p[0];
				s = h.name, s && !h.disabled && "image" == h.type && (i.push({
					name: s,
					value: p.val()
				}), i.push({
					name: s + ".x",
					value: a.clk_x
				}, {
					name: s + ".y",
					value: a.clk_y
				}))
			}
			return i
		}, t.fn.formSerialize = function(e) {
			return t.param(this.formToArray(e))
		}, t.fn.fieldSerialize = function(e) {
			var i = [];
			return this.each(function() {
				var a = this.name;
				if(a) {
					var n = t.fieldValue(this, e);
					if(n && n.constructor == Array)
						for(var o = 0, r = n.length; o < r; o++) i.push({
							name: a,
							value: n[o]
						});
					else null !== n && "undefined" != typeof n && i.push({
						name: this.name,
						value: n
					})
				}
			}), t.param(i)
		}, t.fn.fieldValue = function(e) {
			for(var i = [], a = 0, n = this.length; a < n; a++) {
				var o = this[a],
					r = t.fieldValue(o, e);
				null === r || "undefined" == typeof r || r.constructor == Array && !r.length || (r.constructor == Array ? t.merge(i, r) : i.push(r))
			}
			return i
		}, t.fieldValue = function(e, i) {
			var a = e.name,
				n = e.type,
				o = e.tagName.toLowerCase();
			if(void 0 === i && (i = !0), i && (!a || e.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !e.checked || ("submit" == n || "image" == n) && e.form && e.form.clk != e || "select" == o && e.selectedIndex == -1)) return null;
			if("select" == o) {
				var r = e.selectedIndex;
				if(r < 0) return null;
				for(var s = [], c = e.options, u = "select-one" == n, l = u ? r + 1 : c.length, d = u ? r : 0; d < l; d++) {
					var p = c[d];
					if(p.selected) {
						var h = p.value;
						if(h || (h = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), u) return h;
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
					a = this.tagName.toLowerCase();
				e.test(i) || "textarea" == a || t && /hidden/.test(i) ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == a && (this.selectedIndex = -1)
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
				if("checkbox" == i || "radio" == i) this.checked = e;
				else if("option" == this.tagName.toLowerCase()) {
					var a = t(this).parent("select");
					e && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = e
				}
			})
		}, t.fn.ajaxSubmit.debug = !1
	}(jQuery);
var ThinkCC = function() {
	this.init.apply(this, arguments)
};
ThinkCC.prototype.init = function(t) {
	this.conf = $.extend({
		inputel: "#addcity",
		listel: "#plan_search_drop",
		itemel: "#plan_search_drop a",
		entercb: !1,
		postdata: !1,
		clickcb: !1,
		autoClearInput: !0,
		posturl: "//plan.qyer.com/planapi_action_searchpoi?callback=?",
		voidexec: !1
	}, t || {}), this.searchresult = !0, this.render()
}, ThinkCC.prototype.render = function() {
	var t = this;
	$("body").on("click", t.conf.inputel, function(e) {
		var i = $(this).val();
		t.searchCC(i), t.conf.voidexec && e.stopPropagation()
	}).on("keyup", t.conf.inputel, function(e) {
		t.keyupSearch(e)
	}).on("keydown", t.conf.inputel, function(e) {
		var i = 9;
		i == e.keyCode && t.clearSearched()
	}), $("body").on("mouseover", t.conf.itemel, function() {
		$(t.conf.itemel).removeClass("current"), $(this).addClass("current")
	}).on("click", t.conf.itemel, function(e) {
		t.conf.clickcb && t.conf.clickcb(e), t.clearSearched()
	}), $(document).click(function() {
		$(t.conf.listel).html("").hide()
	})
}, ThinkCC.prototype.searchCC = function(t) {
	if("" == t) return void(this.conf.voidexec && this.conf.voidexec());
	var e = this;
	e.doSearch(t, function(t) {
		t.data.count > 0 ? e.searchresult = !0 : e.searchresult = !1, $(e.conf.listel).html(t.data.html).show()
	})
}, ThinkCC.prototype.doSearch = function(t, e) {
	var i = {
		kw: t,
		format: "callback",
		searchCountry: !0
	};
	"object" == typeof this.conf.postdata && (i = $.extend(i, this.conf.postdata)), $.ajax({
		type: "post",
		dataType: "jsonp",
		url: this.conf.posturl,
		data: i,
		success: function(t) {
			e(t)
		}
	})
}, ThinkCC.prototype.keyupSearch = function(t) {
	var e = $(this.conf.inputel).val();
	if("" == e) return this.conf.voidexec ? void this.conf.voidexec() : void $(this.conf.listel).html("").hide();
	switch(t.keyCode) {
		case 38:
			this.auto_addcity_arrow_list("up");
			break;
		case 40:
			this.auto_addcity_arrow_list("down");
			break;
		case 13:
			this.auto_addcity_arrow_list("enter");
			break;
		default:
			this.searchCC(e)
	}
}, ThinkCC.prototype.clearSearched = function() {
	$(this.conf.listel).html("").hide(), this.conf.autoClearInput && $(this.conf.inputel).val("")
}, ThinkCC.prototype.auto_addcity_arrow_list = function(t) {
	var e = this.conf.itemel,
		i = $(e),
		a = i.size(),
		n = null;
	if($.each(i, function(t, e) {
			if($(e).hasClass("current")) return n = t, !1
		}), "down" == t) {
		if(n >= a - 1) return;
		$(e).eq(n).removeClass("current"), $(e).eq(n + 1).addClass("current")
	} else if("up" == t) {
		if(n <= 0) return;
		$(e).eq(n).removeClass("current"), $(e).eq(n - 1).addClass("current")
	} else if("enter" == t) {
		var o = $(e).eq(n),
			r = $(this.conf.inputel).val();
		this.clearSearched(), this.conf.entercb && this.conf.entercb({
			obj: o,
			searchresult: this.searchresult,
			val: r
		})
	}
};
var util = {
	getwordlen: function() {
		var t = function(t) {
				if("undefined" == typeof t) return 0;
				var e = t.match(/[^\x00-\x80]/g);
				return t.length + (e ? e.length : 0)
			},
			e = function(t) {
				return t.replace(/[^\x00-\xff]/g, "*")
			};
		return function(i, a) {
			return a && (i = e(i)), t(jQuery.trim(i))
		}
	}()
};
$(".address_process div:last").css("margin", "0"), $(".infoform ul li").find("input").bind("focus", function() {
	$(this).nextAll(".ulayouttag").show(), $(this).nextAll(".txttag").hide(), $(this).addClass("txtfocus"), $(this).removeClass("txterror")
}).bind("blur", function() {
	$(this).nextAll(".ulayouttag").hide(), $(this).removeClass("txtfocus")
}).bind("keyup", function() {
	$(this).nextAll(".ulayouttag").show()
}).mouseover(function() {
	$(this).addClass("txthover")
}).mouseout(function() {
	$(this).removeClass("txthover")
}), $(".useryzmtxt").bind("focus", function() {
	$(".infoformyzm").next(".txttag").hide()
}), $(function() {
	$("#usercity").bind("focusin", function() {}).bind("focusout", function() {
		$(".u_xx_city").children("a").each(function(t) {
			"current" == $(this).attr("class") && ($("#usercity").val($(this).text()), $("#cityid").val($(this).attr("cityid")), $(".usercity").hide())
		}), $(".usercity").hide(), 0 == $("#cityid").val().length && ($("#usercity").val(""), $("#cityid").val("0"))
	}).bind("keyup", function(t) {
		if(38 == t.keyCode) $(".u_xx_city").children("a").each(function(t) {
			if("current" == $(this).attr("class")) {
				if(0 == t) return !1;
				$(this).removeClass("current"), t -= 1;
				var e = $(this).parent().children("a").eq(t);
				return e.addClass("current"), !1
			}
		});
		else if(40 == t.keyCode) {
			var e = $(".u_xx_city").children("a").size();
			$(".u_xx_city").children("a").each(function(t) {
				if("current" == $(this).attr("class")) {
					if(t + 1 == e) return !1;
					$(this).removeClass("current"), t += 1;
					var i = $(this).parent().children("a").eq(t);
					return i.addClass("current"), !1
				}
			})
		} else {
			if(13 == t.keyCode) return $(".u_xx_city").children("a").each(function(t) {
				"current" == $(this).attr("class") && ($("#usercity").val($(this).text()), $("#cityid").val($(this).attr("cityid")), $(".usercity").hide())
			}), 0 == $("#cityid").val().length && ($("#usercity").val("其他"), $("#cityid").val("0"), $(".usercity").hide()), !1;
			if(27 == t.keyCode) return $("#usercity").val(""), $("#cityid").val(""), $(".usercity").hide(), !1;
			$("#cityid").val("");
			var i = $.trim($("#usercity").val());
			i.length > 0 ? ($.ajaxSetup({
				cache: !1,
				async: !0
			}), $.getJSON("/u/profile.php?action=selectcity", "city=" + encodeURI(i), function(t) {
				0 == t.error && $(".usercity").html(t.text).show()
			})) : $(".usercity").html("").show()
		}
	}), $(document).on("click", ".u_xx_city a", function() {
		$("#usercity").val($(this).text()), $("#cityid").val($(this).attr("cityid")), $(".usercity").hide()
	}), $(document).on("mouseover", ".u_xx_city a", function() {
		$(".u_xx_city").find("a").removeClass("current"), $(this).addClass("current")
	})
}), $(function() {
	$(".u_spoor_more_edit").click(function() {
		$(this).hasClass("u_spoor_more_edit_click") ? $(this).removeClass("u_spoor_more_edit_click") : $(this).addClass("u_spoor_more_edit_click")
	}), $(".js_edit_link").each(function() {
		$(this).on("click", function(t) {
			var e = $(this),
				i = e.parents(".js_edit_box"),
				a = i.find(".js_edit_text"),
				n = i.find(".js_edit_textarea"),
				o = i.find(".jsstar"),
				r = i.find(".jsstaredit");
			r.find(".jsstaredit").find(".starstips");
			n.is(":hidden") && (n.slideDown(200), a.slideUp(200), o.hide(), r.show())
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
			a = $(this).attr("data-linkedbbs");
		$("#" + e).find(".j_button_ok").attr("plan_id", i).val("确定删除");
		var n = "确认要删除此行程吗？";
		1 == a && (n = "此行程已经关联到论坛，删除将导致论坛中也无法显示行程。"), $("#" + e).find(".j_del_msg").html(n), qyerUI.popup.show({
			id: e,
			width: 400,
			isclose: "show"
		})
	}), $("._jsRashPlan").on("click", function(t) {
		var e = "jsplans_del_confirm",
			i = $(this).attr("data-id");
		$("#" + e).find(".j_button_ok").attr("plan_id", i).attr("data-cmd", "jsRashPlan").val("确定删除");
		var a = "确认要删除此行程吗？删除后将永久不能恢复。";
		$("#" + e).find(".j_del_msg").html(a), qyerUI.popup.show({
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
			a = $(this).attr("data-uid");
		$(this).attr("data-linkedbbs");
		$("#" + e).find(".exit_button_ok").attr("plan_id", i).attr("uid", a);
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
			a = "/qcross/plan/planapi_action_rmplan";
		t = "jsRashPlan" == e ? 2 : "jsRestorePlan" == e ? 0 : 1;
		var n = {
			id: i,
			type: t
		};
		$.post(a, n, function(t) {
			var e = JSON.parse(t);
			"ok" == e.result ? window.location.reload() : tips.show(e.data.msg)
		})
	})
});