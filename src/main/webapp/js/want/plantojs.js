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
			if (qyerUtil.isLogin()) return !1;
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
	return jQuery.browser.msie && (e += (e.indexOf("?") != -1 ? "&" : "?") + "referer=" + escape(location.href)), QYER.uid > 0 ? (location.href = e, !1) : (e = "//bbs.qyer.com/" + e, void ajaxlogin(0, "", "bbsajax.php", "", "", e))
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
	var o = "/api.php?action=islogin&rnd=" + +new Date;
	if (!i) return void jQuery.getJSON(o, function(i) {
		i || t && t(), "ok" == i.result ? ("undefined" != typeof comment && comment.setUid(i.data.uid), e && e(i.data)) : t && t(i.data)
	});
	var n = !1;
	return jQuery.ajax({
		url: o,
		dataType: "json",
		async: !1,
		success: function(i) {
			i || (t && t(), n = !1), "ok" == i.result ? (e && e(i.data), n = !0) : (t && t(i.data), n = !1)
		}
	}), n
}

function yjbGetCookie(e) {
	for (var t = document.cookie.split("; "), i = 0; i < t.length; i++) {
		var o = t[i].split("=");
		if (o[0] == e) return unescape(o[1])
	}
}

function yjbSetCookie(e, t) {
	var i = 1,
		o = new Date;
	o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";domain=.qyer.com;expires=" + o.toGMTString()
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
		if (null != i)
			for (var o = 0; o < i.length; o++) t = t.replace(i[o], "[imgimg]" + o + "[/imgimg]");
		if (t = t.replace(e, ""), null != i)
			for (var o = 0; o < i.length; o++) t = t.replace("[imgimg]" + o + "[/imgimg]", i[o]);
		jQuery(this).html(t)
	})
}

function loadjscssfile(e, t) {
	if ("js" == t) {
		var i = document.createElement("script");
		i.setAttribute("type", "text/javascript"), i.setAttribute("src", e)
	} else if ("css" == t) {
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
	if (null != t && t.length > 1 && (i = t[2]), "" == i) return "b";
	var o = i.substr(i.length - 1, 1).toLowerCase(),
		n = parseInt("0x" + o);
	return n > 7 ? "b" : "a"
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
	if (QYER.uid <= 0) return ajaxlogin(), !1;
	var i = e.attr("data-uid"),
		o = e.attr("data-relate"),
		n = e.attr("data-each"),
		a = "";
	a = 1 == o ? "action=addfriend&fuid=" + i : "action=channelfriend&uid=" + i;
	var s = "/ajax.php";
	/^\/\/bbs\.qyer\.com\//.test(window.location.href) && (s = "/bbsajax.php"), jQuery.ajax({
		type: "POST",
		url: s,
		data: a,
		dataType: "json",
		beforeSend: function(e) {},
		success: function(i) {
			"ok" == i.result ? (o = 0 == o ? 1 : 0, t(n, o, e)) : t(n, o, e)
		}
	})
}

function weiboshare(e, t, i) {
	var o = t;
	i = i || "";
	var n = "http://service.weibo.com/share/share.php?appkey=2254065920&title=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(o) + "&ralateUid=1721449743";
	i && (n += "&pic=" + encodeURIComponent(i)), window.open(n, "_blank", "scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes,")
}

function tracker_request(e) {
	var t = encodeURIComponent(window.location.href),
		i = "//qt.qyer.com/beacon.gif?type=click&category=" + encodeURIComponent(e) + "&campaign=inpage&",
		o = encodeURIComponent(document.referrer),
		n = jQuery.cookie("_guid") || "",
		a = jQuery.cookie("_uid") || "",
		s = jQuery.cookie("_session") || "";
	if (i += "referer=" + t + "&referer_link=" + o + "&guid=" + n + "&user_id=" + a + "&session=" + s, "https:" !== document.location.protocol) {
		var r = new Image;
		r.src = i
	}
}

function flash(e, t, i) {
	if ("" == e) return "";
	t = t ? t : 590, i = i ? i : 410;
	var o = "";
	return o += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + t + '" height="' + i + '">', o += '<param name="movie" value="' + e + '">', o += '<param name="quality" value="high">', o += '<param name="wmode" value="transparent">', o += '<param name="menu" value="false">', o += '<embed src="' + e + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + t + '" height="' + i + '" wmode="transparent" ></embed>', o += "</object>"
}

function showFlash(e, t, i, o) {
	i = i ? i : 590, o = o ? o : 410;
	var n = "";
	n += "<style>", n += ".popup_video_bg{background:url(//static.qyer.com/images/plan2/popup_video_bg.png);}", n += "</style>", n += flash(t, i, o), jQuery("#" + e).html(n), qyerUI.popup.show({
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
jQuery(function() {
	var e = jQuery;
	! function() {
		function t(e) {
			r[e.keyword] = e, "object" == typeof e && (1 == e.status ? (l = 0, a.find("a").removeClass("current"), c == e.keyword && a.html(e.html).show()) : a.hide().html(""))
		}

		function i() {
			var i = e("#qyer_head_search_input").val();
			return "" == i ? void e("#qyer_head_search_drop").hide() : ("undefined" == typeof r[i] ? e.ajax({
				type: "get",
				data: "wd=" + encodeURIComponent(i),
				dataType: "jsonp",
				url: "//search.qyer.com/select.php?action=getsearchhtml&callback=?",
				success: function(e) {
					t(e)
				}
			}) : t(r[i]), void(i = null))
		}

		function o(e, t) {
			var i, o, r, u, c, l;
			i = a.find("a"), o = "//search.qyer.com/index", i.removeClass("current"), 0 == e ? (c = o, n.val(t)) : (r = i.eq(e - 1), u = r.parent("li"), r.addClass("current"), u.hasClass("item") ? (c = r.attr("href"), n.val(t)) : (c = o, l = r.text(), n.val(l))), s.attr("action", c), i = o = r = u = c = l = null
		}
		var n, a, s, r = [],
			u = 0,
			c = "",
			l = 0;
		n = e("#qyer_head_search_input"), a = e("#qyer_head_search_drop"), s = e("#searchdiv > form"), n.keydown(function(e) {
			"38" != e.keyCode && "40" != e.keyCode || e.preventDefault()
		}), n.keyup(function(t) {
			var s = n.val();
			if ("" != s) {
				var r = t.keyCode;
				38 == r && a.is(":visible") ? (l--, l < 0 && (l = a.find("a").length), o(l, c)) : 40 == r && a.is(":visible") ? (l++, l > a.find("a").length && (l = 0), o(l, c)) : 13 == r || s != c && s != e(this).attr("placeholder") && (c = s, clearTimeout(u), u = setTimeout(function() {
					i()
				}, 200))
			}
			s = null
		}), n.focus(function() {
			return !!n.val() && (clearTimeout(u), void(u = setTimeout(function() {
				i()
			}, 100)))
		}), e(document).on("click", function() {
			a.is(":visible") && a.hide().find("a").removeClass("current")
		}), a.on("click", function(e) {
			e.stopPropagation()
		}), e("#searchdiv").on("click", function(e) {
			e.stopPropagation()
		}), s.submit(function() {
			return "" != e(this).attr("action")
		})
	}(),
	function() {
		var t = {
			init: function() {
				this.initUI(), window.QYER && window.QYER.uid ? this.getUserInfo() : (this.bindLoginBtnEvt(), setTimeout(function() {
					requirejs(["common/models/common/component/footerBanner/footerBanner"], function(e) {
						e.show()
					})
				}, 5e3))
			},
			initUI: function() {
				window.QYER && window.QYER.uid || e("#asynclogininfo").replaceWith(['<div class="qyer_head_login" id="asynclogininfo">', '<ul class="qyer_head_loginList">', '<li class="entry_tit"><a href="//login.qyer.com/?action=login&refer=' + encodeURIComponent(window.location.href) + '" rel="nofollow" data-bn-ipg="1017" class="entry">登录</a> | <a href="//login.qyer.com/?action=register&refer=' + encodeURIComponent(window.location.href) + '" rel="nofollow" data-bn-ipg="1018" class="entry">注册</a></li>', '<li class="entry_box"><a href="javascript:void(0);" class="qyer_hf_bg qq _jsqqlogin" data-bn-ipg="1016" alt="使用QQ账号登录" title="使用QQ账号登录" /></a></li>', '<li class="entry_box"><a href="javascript:void(0);" class="qyer_hf_bg weibo _jsweibologin" data-bn-ipg="1015" alt="使用微博账号登录" title="使用微博账号登录" /></a></li>', '<li class="entry_box"><a href="javascript:void(0);" class="qyer_hf_bg taobao _jstao_li" data-bn-ipg="tao_login" alt="淘宝" title="使用淘宝账号登录" /></a></li>', "</ul>", "</div>"].join(""))
			},
			bindLoginBtnEvt: function() {
				e(document).on("click", "._jsweibologin", function() {
					var t = "//login.qyer.com/auth.php?action=weibo&popup=1&refer=" + (e(this).attr("url") || window.location.href);
					window.open(t, "newwindow", "height=450px,width=600px,top=100,left=300,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), t = null
				}).on("click", "._jstao_li", function(e) {
					e.preventDefault();
					var t = "//login.qyer.com/auth.php?action=taobao&popup=1&refer=" + window.location.href;
					window.open(t, "newwindow", "height=450px,width=600px,top=100,left=300,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), t = null
				}).on("click", "._jsqqlogin", function() {
					var t = "//login.qyer.com/auth.php?action=qq&popup=1&refer=" + (e(this).attr("url") || window.location.href);
					window.open(t, "newwindow", "height=450px,width=600px,top=100,left=300,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), t = null
				});
				var t, i, o, n, a;
				t = e(".qyer_head_login_entry_tit a"), i = window.location.href, e.each(t, function(t, a) {
					a = e(a), o = a.attr("href"), n = encodeURIComponent(i), i.match(/\?refer=/) || a.attr("href", o + "?refer=" + n)
				}), t = i = o = n = a = null
			},
			getUserInfo: function() {
				var t = this;
				window._ASYNCLOGINCALLBACK_ = function(i) {
					e("#asynclogininfo").html(i.html), t.bindHeaderUserEvent(), t = null
				}, e.getJSON("//user.qyer.com/user_action_logininfo?newstatic=1&callback=?")
			},
			switchAccount: function() {
				requirejs(["common/models/common/component/switchAccount/switchAccount"], function(e) {
					e.show()
				})
			},
			bindHeaderUserEvent: function() {
				e("#asynclogininfo").find(".js_switchAccount").click(function() {
						t.switchAccount()
					}),
					function() {
						function t() {
							if (o && 10 * Math.random() < 7) return !1;
							var t = "/ajax.php";
							/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (t = "/bbsajax.php"), e.getJSON(t + "?action=getunreadcount&time=" + 10 * Math.random(), function(t) {
								o = !0, t.total_count > 0 && e("#user_msg_count").html(t.total_count).css({
									visibility: "visible"
								})
							}), t = null
						}
						var i = !0;
						e(window).focus(function() {
							i = !0
						}).blur(function() {
							i = !1
						});
						var o = !1;
						t(), setInterval(function() {
							i && t()
						}, 5e3)
					}(),
					function() {
						! function() {
							function t(e, t) {
								var n, s = !1;
								e.add(t).hover(function() {
									window.clearTimeout(n), e == i ? a.hide() : o.hide(), s || (t.show(), s = !0)
								}, function() {
									n = window.setTimeout(function() {
										t.hide(), s = !1
									}, 200)
								})
							}
							var i, o, n, a;
							i = e("#qyer_head_username"), o = e("#qyer_head_userlayer"), n = e("#qyer_head_msg"), a = e("#qyer_head_msglayer"), t(i, o), t(n, a)
						}(),
						function() {
							var t = e("#qyer_head_informlist,#qyer_head_letterlist");
							e("#qyer_head_inform, #qyer_head_letter").click(function() {
								var i = e(this);
								i.hasClass("current") || (i.addClass("current").siblings().removeClass("current"), t.hide().eq(i.index()).show()), i = null
							})
						}(),
						function() {
							function t() {
								var t, i, o, n, a;
								t = "/ajax.php", i = e("#tongzhi_msg_count"), o = e("#sixin_msg_count"), n = e("#qyer_head_informlist"), a = e("#qyer_head_letterlist"), /^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (t = "/bbsajax.php"), e.getJSON(t + "?action=getunreadinfo&time=" + 10 * Math.random(), function(e) {
									e.notice_html && (i.html("通知" + e.notice_count), o.html("私信" + e.message_count + '<em class="arrow1"></em><em class="arrow2"></em>'), n.html(e.notice_html), a.html(e.message_html))
								}), t = null
							}
							var i;
							e("#asynclogininfo > .qyer_head_msgs").mouseenter(function() {
								i = window.setTimeout(t, 300)
							}).mouseleave(function() {
								window.clearTimeout(i)
							})
						}()
					}()
			}
		};
		t.init()
	}()
}), $(function() {
	function e() {
		$("#mainPanel").width() < 920 ? $(".planto-box").addClass("planto-680box") : $(".planto-box").removeClass("planto-680box")
	}
	require(["common/models/project/user/js/plantoCountryLoad"]), $("._jsaddplanto").click(function() {
		qyerUI.popup.ajax({
			url: "/qcross/place/index.php?action=beachdoings&doingstype=2",
			width: 720
		})
	}), $(window).bind("resize", e), e()
}), jQuery.postJSON = function(e, t, i) {
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
			for (var t = !1, i = 0; i < o.length; i++) this == o[i] && (t = !0);
			if (!t) {
				o.push(this);
				var n = e(this).attr("placeholder");
				"" == e(this).val() ? e(this).val(n).css("color", "#959595") : e(this).val() == n && e(this).css("color", "#959595"), e(this).on("focus", function() {
					e(this).val() == n && e(this).val("").css("color", "")
				}), e(this).on("blur", function() {
					"" == e(this).val() && e(this).val(n).css("color", "#959595")
				})
			}
		})
	}
	var i = "placeholder" in document.createElement("input"),
		o = [];
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
			}), e(".ui_fullpupBox_bg").hide(), n = !1, !1
		}

		function i(t) {
			n && e("body").append(a), n = !1, e("html").css({
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
		var o = {},
			n = !0,
			a = "<div class='ui_fullpupBox_bg'><div class='ui_fullpupBox'><div class='ui_fullpupBox_main'></div></div></div>";
		e(document).on("click", ".ui_fullpupBox_close", function() {
			t()
		}), o.ajax = function(t) {
			var o = t.url,
				n = t.width;
			i(n), e.get(o, function(t) {
				e(".ui_fullpupBox_main").html(t), e(".ui_fullpupBox_head").css({
					width: n
				})
			})
		}, o.show = function(t) {
			var o = t.id,
				n = t.width;
			i(n);
			var a = e("#" + o).html();
			e(".ui_fullpupBox_main").html(a), e(".ui_fullpupBox_head").css({
				width: n
			})
		}, qyerUI.fullpup = o
	}(jQuery),
	function(e) {
		function t() {
			e(".ui_popup_bg").fadeOut(300)
		}

		function i(i, o) {
			a && (e("body").append(s), e(".ui_popup_close").on("click", function() {
				t()
			})), a = !1, i = parseInt(i, 10), e(".ui_popup_bg").css({
				height: e(document).height()
			}).stop(!0, !0).fadeIn(300), e(".ui_popup").css({
				width: i,
				top: e(document).scrollTop()
			}), e(".ui_popup_main").text(""), e(".ui_popup_close").hide(), "show" == o && e(".ui_popup_close").show()
		}

		function o() {
			var t = e(window).height(),
				i = e(".ui_popup").height(),
				o = (t - i) / 2;
			o = o < 20 ? 20 : o, e(".ui_popup").css("margin-top", o)
		}
		var n = {},
			a = !0,
			s = '<div class="ui_popup_bg"><div class="ui_popup"><p class="ui_popup_close" title="关闭"></p><div class="ui_popup_main"></div></div></div>';
		n.pupclose = t, n.start = i, n.ajax = function(t) {
			if ("object" == typeof t) var n = t.url,
				a = t.width || 500,
				s = t.isclose || "show",
				r = t.callback || !1;
			i(a, s), e.get(n, function(t) {
				e(".ui_popup_main").html(t), "function" == typeof r && r(), o()
			})
		}, n.show = function(t) {
			if ("object" == typeof t) var n = t.id,
				a = t.width || 500,
				s = t.isclose || "show";
			i(a, s);
			var r = e("#" + n).html();
			e(".ui_popup_main").html(r), o()
		}, n.showHtml = function(t) {
			if ("object" == typeof t) var n = t.html,
				a = t.width || 500,
				s = t.isclose || "show";
			i(a, s), e(".ui_popup_main").html(n), o()
		}, qyerUI.popup = n
	}(jQuery),
	function() {
		function e() {
			return jQuery(".ui_pupBox_bg").hide(), o = !1, !1
		}

		function t(e) {
			o && jQuery("body").append(n), o = !1, e = parseInt(e, 10), jQuery(".ui_pupBox_bg").css({
				display: "block",
				height: jQuery(document).height()
			}), jQuery(".ui_pupBox").css({
				width: e + 2,
				top: jQuery(document).scrollTop()
			}), jQuery(".ui_pupBox_main").text(""), jQuery(".ui_pupBox_close").show()
		}
		var i = {},
			o = !0,
			n = "<div class='ui_pupBox_bg'><div class='ui_pupBox'><div class='ui_pupBox_close'></div><div class='ui_pupBox_main'></div></div></div>";
		window.pupclose = e, i.start = t, i.ajax = function(i, o, n) {
			var a = "show",
				s = typeof i;
			"object" == s ? (url = i.url, o = i.width, a = i.closebtn, n = i.cb) : url = i, t(o), jQuery.get(url, function(e) {
				if (jQuery(".ui_pupBox_main").html(e), "function" == typeof n) try {
					n()
				} catch (t) {}
			}), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == a && jQuery(".ui_pupBox_close").hide()
		}, i.show = function(i, o) {
			var n = "show",
				a = typeof i;
			"object" == a ? (id = i.id, o = i.width, n = i.closebtn) : id = i, t(o);
			var s = jQuery("#" + id).html();
			jQuery(".ui_pupBox_main").html(s), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, i.showHtml = function(i, o) {
			var n = "show",
				a = typeof i;
			"object" == a ? (html = i.html, o = i.width, n = i.closebtn) : html = i, t(o), jQuery(".ui_pupBox_main").html(html), jQuery(".ui_pupBox_close").bind("click", function() {
				e()
			}), "hide" == n && jQuery(".ui_pupBox_close").hide()
		}, window.popup = i
	}(),
	function(e) {
		function t(t, o) {
			i && (e("body").append("<textarea id='js_autoheight_clone'></textarea>"), i = !1);
			var n = e("#js_autoheight_clone");
			n.width(e(t).width()), n.val(e(t).val()), n.css("font-size", o.fontSize), n.css("line-height", o.lineHeight), setTimeout(function() {
				var i = n.get(0).scrollHeight;
				e(t).height(i)
			}, 1)
		}
		var i = !0;
		qyerUI.autoheight = t
	}(jQuery),
	function(e) {
		function t(t) {
			if ("object" == typeof t) {
				var o = t.msg || "操作已成功！",
					n = t.type || "true",
					a = t.timeout || 2e3;
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
					e(s).slideUp()
				}, a))
			}
		}
		var i;
		qyerUI.message = t
	}(jQuery);
var process_submit = function() {
	var e = function() {
		this.id = null, this.rmclass = null, this.addclass = null, this.isval = !0, this.before = function(e, t, i, o, n) {
			this.id = e, this.rmclass = t, this.addclass = i, o = o || "提交中...", "html" == n && (this.isval = !1), this.isval ? jQuery("#" + e).removeClass(t).addClass(i).val(o) : jQuery("#" + e).removeClass(t).addClass(i).html(o)
		}, this.after = function(e) {
			this.isval ? jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).val(e) : jQuery("#" + this.id).removeClass(this.addclass).addClass(this.rmclass).html(e)
		}
	};
	return new e
}();
popup.coast = function(e, t, i, o) {
		function n() {
			jQuery(".ui_coast").fadeOut(500), jQuery(".ui_coast").remove()
		}
		e = e || 400, i.text = i.text || "感谢你的分享，让其他穷游er看到了你在这里留下的回忆。";
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
			c = e + 42,
			l = (s - c) / 2,
			d = (r - u) / 2 + jQuery(document).scrollTop(),
			p = 10;
		if (t)
			if (t = jQuery("#" + t), t.size() > 0) {
				var h = t.offset(),
					f = t.outerWidth(),
					_ = t.outerHeight(),
					m = h.top - u - p,
					y = h.left - (c - f) / 2;
				s - f - y + p < c ? (y = s - c - p, h.top - jQuery(document).scrollTop() < u ? (m = h.top + _ + p, jQuery(".ui_coast").css({
					width: e,
					left: y,
					top: m
				}).show()) : jQuery(".ui_coast").css({
					width: e,
					left: y,
					top: m
				}).show()) : h.top - jQuery(document).scrollTop() < u ? (m = h.top + _ + p, y < 10 && (y = 10), jQuery(".ui_coast").css({
					width: e,
					left: y,
					top: m
				}).show()) : (y < 10 && (y = 10), jQuery(".ui_coast").css({
					width: e,
					left: y,
					top: m
				}).show())
			} else jQuery(".ui_coast").css({
				width: e,
				left: l,
				top: d
			}).show();
		else jQuery(".ui_coast").css({
			width: e,
			left: l,
			top: d
		}).show();
		window.setTimeout(n, 2e3)
	},
	function(e) {
		window.uitab = function() {
			e(".ui_tab").each(function() {
				e(this).children(".ui_tab_trigger").find(".ui_tab_trigger_item").each(function(t) {
					e(this).on("click", function() {
						0 == e(this).hasClass("ui_tab_trigger_item_disabled") && (e(this).addClass("ui_tab_trigger_item_current").siblings(".ui_tab_trigger_item").removeClass("ui_tab_trigger_item_current"), e(this).parents(".ui_tab_trigger").siblings(".ui_tab_cnt").children(".ui_tab_cnt_item:eq(" + t + ")").addClass("ui_tab_cnt_item_current").siblings(".ui_tab_cnt_item").removeClass("ui_tab_cnt_item_current"))
					})
				})
			})
		}, window.uitab()
	}(jQuery);
var tips = function() {
		var e = function() {
			this.isshow = !1, this.html = ["<div class='ui_message __XXtipsXX_' >", "", "</div>"], this.scroll_show = function() {}, this.show = function(e, t) {
				e = e || "", t = t || 2e3;
				var i = this.getobj();
				return this.isshow ? (jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), jQuery.browser.msie && "6.0" == jQuery.browser.version && jQuery(i).css({
					top: jQuery(document).scrollTop()
				}), void i.html(e)) : (this.html[1] = e, jQuery("body").append(this.html.join("")), i = this.getobj(), jQuery(i).css({
					left: jQuery(document).width() / 2 - 200
				}), jQuery.browser.msie && "6.0" == jQuery.browser.version && jQuery(i).css({
					top: jQuery(document).scrollTop()
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
			var o = e.clientX,
				n = e.clientY,
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
			}), jQuery("#jsconfirmok").unbind("click").click(function(e) {
				t(), jQuery(r).animate({
					height: "hide",
					opacity: "hide",
					top: c + u
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
			var o = +new Date;
			jQuery.get(_ajax.ajaxurl + "?action=" + e + "&rnd=" + o, t, i)
		},
		getJSON: function(e, t, i) {
			var o = +new Date;
			jQuery.getJSON(_ajax.ajaxurl + "?action=" + e + "&rnd=" + o, t, i)
		},
		post: function(e, t, i) {
			t = jQuery.merge(t, {
				type: "POST"
			}), jQuery.post(_ajax.ajaxurl + "?action=" + e, t, i)
		}
	};
String.prototype.gbtrim = function(e, t) {
	for (var i = "", o = t || "", n = 0, a = 0; a < this.length; a++) this.charCodeAt(a) > 127 || 94 == this.charCodeAt(a) ? n += 2 : n++;
	if (n <= e) return this;
	n = 0, e = e > o.length ? e - o.length : e;
	for (var a = 0; a < this.length; a++) {
		if (this.charCodeAt(a) > 127 || 94 == this.charCodeAt(a) ? n += 2 : n++, n > e) {
			i += o;
			break
		}
		i += this.charAt(a)
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
				var e = jQuery(n).get(0).scrollHeight;
				e <= u && (e = u), jQuery(i).height(e)
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
			var e = window.location.href;
			if (e.indexOf("m.qyer.com") == -1 && "1" != yjbGetCookie("_surveyed") && "1" != yjbGetCookie("surveyed")) {
				var t = Math.random();
				65 == parseInt(100 * t) && (jQuery.getJSON("//feed.qyer.com/index/survey?callback=?", function(e) {
					if (e.show) {
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
		null != t && ("login" == t && "reg" == t || (t = "reg"), /^\/\/bbs\.qyer\.com\//.test(window.location.href) ? ajaxlogin(0, "", "bbsajax.php", "reload", t, window.location.href) : ajaxlogin(0, "", "ajax.php", "reload", t, window.location.href))
	}), jQuery(function() {
		function e() {
			t = 0, clearTimeout(o), window.setTimeout(function() {
				0 == t && jQuery(".ui_usercard").fadeOut(50)
			}, 500)
		}
		var t = 0,
			i = 0;
		jQuery(document).on("click", "._js_follow_func", function() {
			follow(jQuery(this))
		}), jQuery(document).on("click", "._jsaddmsg", function() {
			if (QYER.uid <= 0) return ajaxlogin(), !1;
			var e = jQuery(this).attr("data-uid"),
				t = jQuery(this).attr("data-relate");
			popup.ajax("/api.php?action=addmsg&oper=form&uid=" + e + "&relate=" + t, 510)
		});
		var o = 0;
		jQuery(document).on("mouseover", "._js_face_usercard,.ui_headPort", function(e) {
			if (!i) {
				var n = document.createElement("link");
				n.type = "text/css", n.rel = "stylesheet", n.href = "//static.qyer.com/css/user2/medal.css", document.body.appendChild(n), i = 1
			}
			var a = jQuery(this).attr("data-uid");
			if (void 0 == a && (a = jQuery(this).attr("alt")), t = 1, jQuery(".ui_usercard").remove(), void 0 == a) return !1;
			thiz = this;
			var s = e.pageX;
			e.pageX + 300 > jQuery(window).width() && (s = jQuery(window).width() - 300);
			var r = "/ajax.php";
			/^\/\/bbs\.qyer\.com\//.test(window.location.href) && (r = "/bbsajax.php"), clearTimeout(o), o = setTimeout(function() {
				jQuery.get(r + "?action=usercard&uid=" + a, function(t) {
					"" != t && (jQuery("body").append(t), jQuery(".ui_usercard").css({
						width: 298,
						height: "auto",
						position: "absolute",
						left: s,
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
					var t, i, o;
					t = e(this), i = t.attr("url") + "&refer=" + window.location.href, o = t.attr("notoken"), window.open(i, "newwindow", "height=450px,width=600px,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"), pupclose(), t = i = o = null
				})
			},
			create: function(e) {
				document.write(this.getHTML(e))
			},
			getHTML: function(e) {
				var t = [],
					e = e || {},
					i = e.weibopublish || {},
					o = e.qqpublish || {};
				return t.push('<p class="ui_textboxShare fr ' + ("min" == e.iconSize ? "ui_textboxShareSmall" : "") + '">'), t.push('    <em class="title">' + (e.text ? e.text : "同时转发到：") + "</em>"), t.push('    <label class="weibo">'), t.push('        <input type="checkbox" name="weibopublish" class="weibopublish" flag="0" weibo="weibo" value="" onclick="qyerUI.SNS.share.onSelect(this)" id="' + (i.id || "weibopublish") + '"  notoken="' + ("0" == i.notoken ? "0" : "1") + '" '), "0" == i.notoken && i.checked && t.push(' checked="checked" '), t.push(" />"), t.push('        <span class="icon ' + ("0" == i.notoken ? "" : "iconnull") + '"></span>'), t.push("    </label>"), t.push('    <label class="qzone">'), t.push('        <input type="checkbox" name="qqpublish" class="qqpublish" flag="0" value="" weibo="qq"  onclick="qyerUI.SNS.share.onSelect(this)" id="' + (o.id || "qqpublish") + '" notoken="' + ("0" == o.notoken ? "0" : "1") + '"'), "0" == o.notoken && o.checked && t.push(' checked="checked" '), t.push(" />"), t.push('        <span class="icon ' + ("0" == o.notoken ? "" : "iconnull") + '"></span>'), t.push("    </label>"), t.push("</p>"), t.join("")
			},
			onSelect: function(t) {
				if (!QYER.uid) return t.checked = !1, void ajaxlogin();
				var i = e(t);
				if (i.is(":checked")) {
					if ("1" == i.attr("notoken")) return void this._showpopup(i);
					if ("0" == i.attr("flag")) {
						var o = i.attr("weibo"),
							n = i.attr("id"),
							a = i.attr("notoken");
						e.getJSON("/api.php?action=checkweibo&type=" + o, function(e) {
							if ("ok" != e.result) {
								var t = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">您在我们网站的token已经过期，是否重新授权完成同步？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + a + '" weibo="' + o + '" type="button" url="//login.qyer.com/login.php?action=' + o + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + n + '" value="取消"></div></div>';
								popup.showHtml(t, 440)
							}
						}), i.attr("flag", 1)
					}
				}
			},
			_showpopup: function(e) {
				var t, i, o, n;
				t = e.attr("weibo"), i = e.attr("id"), o = e.attr("notoken"), n = '<div style="width:440px;"><div class="ui_pupBox_head">提示</div><div class="ui_pupBox_content">使用此功能需绑定到穷游，现在就绑定吗？</div><div class="ui_pupBox_foot clearfix"><input notoken="' + o + '" weibo="' + t + '" type="button" url="//login.qyer.com/login.php?action=' + t + '&bind=1&publish=1" class="ui_button fr _jsgettoken" value="确定"><input type="button" class="ui_button_cancel fr mr10 _jsclose" flag="' + i + '" value="取消"></div></div>', e.attr("checked", !1), popup.showHtml(n, 440), t = i = o = n = null
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
				return this._head || (this._head = document.getElementsByTagName("head")[0]),
					this._head
			},
			insertStyle: function(e) {
				var t = document.createElement("style");
				t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, this._getHead().appendChild(t), t = null
			},
			ajaxFillter: function(e, t, i) {
				if ("object" == typeof e && e.extra && e.extra.code) switch (0 | e.extra.code) {
					case 1:
						window.qyerUtil.showAntiSpam(e.extra.msg)
				}
			},
			_showAntiSpam_isLoadCss_: !1,
			showAntiSpam: function(t) {
				function i(e) {
					return ['<div class="qui-antiSpam">', "<div>", '<div class="qui-antiSpam-dt">', '<div class="qui-antiSpam-content">', '<img src="//static.qyer.com/models/common/component/antiSpam/icon.png" />', '<p class="antiSpamP1">' + (e || "由于敏感词限制，你刚刚发布的内容需要编辑审核后才能被他人访问") + "</p>", '<p class="antiSpamP2 js_antiSpam_close">我知道了 > </p>', "</div>", "</div>", "</div>", "</div>"].join("")
				}
				window.qyerUtil._showAntiSpam_isLoadCss_ || (window.qyerUtil.insertStyle([".qui-antiSpam{position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-image:url(//static.qyer.com/models/common/images/bg_255_255_255_0.7.png); z-index: 110000; overflow-y: auto; }", ".qui-antiSpam >div{display: table; height: 100%; margin: 0 auto; }", ".qui-antiSpam-dt{display: table-cell; vertical-align:middle; text-align: center; }", ".qui-antiSpam-content{border: 1px solid #ccc; width: 575px; background-color: #f5f5f5; box-shadow: 0px 0px 15px #999; }", ".qui-antiSpam-content > img{margin:50px 0px 30px 0px; }", ".qui-antiSpam-content .antiSpamP1{font-size:20px; width:337px; margin:0 auto; }", ".qui-antiSpam-content .antiSpamP2{font-size:14px; margin:20px 0px 35px 0px; color:#0074b1; cursor:pointer; }"].join("")), window.qyerUtil._showAntiSpam_isLoadCss_ = !0), e(i(t)).appendTo(document.body).find(".js_antiSpam_close").one("click", function(t) {
					e(t.currentTarget).parent().parent().parent().parent().remove()
				})
			}
		})
	}(jQuery);