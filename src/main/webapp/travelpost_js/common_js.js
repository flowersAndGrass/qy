function getListener(e, t, n) {
	var i;
	return t = t.toLowerCase(), (i = e.__allListeners || n && (e.__allListeners = {})) && (i[t] || n && (i[t] = []))
}

function getDomNode(e, t, n, i, r, o) {
	var s, a = i && e[t];
	for(!a && (a = e[n]); !a && (s = (s || e).parentNode);) {
		if("BODY" == s.tagName || o && !o(s)) return null;
		a = s[n]
	}
	return a && r && !r(a) ? getDomNode(a, t, n, !1, r) : a
}! function(e, t) {
	function n(e) {
		var t = e.length,
			n = ue.type(e);
		return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
	}

	function i(e) {
		var t = Ne[e] = {};
		return ue.each(e.match(fe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function r(e, n, i, r) {
		if(ue.acceptData(e)) {
			var o, s, a = ue.expando,
				l = e.nodeType,
				c = l ? ue.cache : e,
				u = l ? e[a] : e[a] && a;
			if(u && c[u] && (r || c[u].data) || i !== t || "string" != typeof n) return u || (u = l ? e[a] = te.pop() || ue.guid++ : a), c[u] || (c[u] = l ? {} : {
				toJSON: ue.noop
			}), "object" != typeof n && "function" != typeof n || (r ? c[u] = ue.extend(c[u], n) : c[u].data = ue.extend(c[u].data, n)), s = c[u], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[ue.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ue.camelCase(n)])) : o = s, o
		}
	}

	function o(e, t, n) {
		if(ue.acceptData(e)) {
			var i, r, o = e.nodeType,
				s = o ? ue.cache : e,
				l = o ? e[ue.expando] : ue.expando;
			if(s[l]) {
				if(t && (i = n ? s[l] : s[l].data)) {
					ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in i ? t = [t] : (t = ue.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
					for(; r--;) delete i[t[r]];
					if(n ? !a(i) : !ue.isEmptyObject(i)) return
				}(n || (delete s[l].data, a(s[l]))) && (o ? ue.cleanData([e], !0) : ue.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
			}
		}
	}

	function s(e, n, i) {
		if(i === t && 1 === e.nodeType) {
			var r = "data-" + n.replace(Se, "-$1").toLowerCase();
			if(i = e.getAttribute(r), "string" == typeof i) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? ue.parseJSON(i) : i)
				} catch(o) {}
				ue.data(e, n, i)
			} else i = t
		}
		return i
	}

	function a(e) {
		var t;
		for(t in e)
			if(("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function l() {
		return !0
	}

	function c() {
		return !1
	}

	function u() {
		try {
			return G.activeElement
		} catch(e) {}
	}

	function d(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function f(e, t, n) {
		if(ue.isFunction(t)) return ue.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if(t.nodeType) return ue.grep(e, function(e) {
			return e === t !== n
		});
		if("string" == typeof t) {
			if(qe.test(t)) return ue.filter(t, e, n);
			t = ue.filter(t, e)
		}
		return ue.grep(e, function(e) {
			return ue.inArray(e, t) >= 0 !== n
		})
	}

	function h(e) {
		var t = Ve.split("|"),
			n = e.createDocumentFragment();
		if(n.createElement)
			for(; t.length;) n.createElement(t.pop());
		return n
	}

	function p(e, t) {
		return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function m(e) {
		return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
	}

	function g(e) {
		var t = rt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function v(e, t) {
		for(var n, i = 0; null != (n = e[i]); i++) ue._data(n, "globalEval", !t || ue._data(t[i], "globalEval"))
	}

	function y(e, t) {
		if(1 === t.nodeType && ue.hasData(e)) {
			var n, i, r, o = ue._data(e),
				s = ue._data(t, o),
				a = o.events;
			if(a) {
				delete s.handle, s.events = {};
				for(n in a)
					for(i = 0, r = a[n].length; i < r; i++) ue.event.add(t, n, a[n][i])
			}
			s.data && (s.data = ue.extend({}, s.data))
		}
	}

	function b(e, t) {
		var n, i, r;
		if(1 === t.nodeType) {
			if(n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
				r = ue._data(t);
				for(i in r.events) ue.removeEvent(t, i, r.handle);
				t.removeAttribute(ue.expando)
			}
			"script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}
	}

	function w(e, n) {
		var i, r, o = 0,
			s = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
		if(!s)
			for(s = [], i = e.childNodes || e; null != (r = i[o]); o++) !n || ue.nodeName(r, n) ? s.push(r) : ue.merge(s, w(r, n));
		return n === t || n && ue.nodeName(e, n) ? ue.merge([e], s) : s
	}

	function x(e) {
		tt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function _(e, t) {
		if(t in e) return t;
		for(var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = kt.length; r--;)
			if(t = kt[r] + n, t in e) return t;
		return i
	}

	function C(e, t) {
		return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
	}

	function k(e, t) {
		for(var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = ue._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (o[s] = ue._data(i, "olddisplay", T(i.nodeName)))) : o[s] || (r = C(i), (n && "none" !== n || !r) && ue._data(i, "olddisplay", r ? n : ue.css(i, "display"))));
		for(s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
		return e
	}

	function N(e, t, n) {
		var i = vt.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function E(e, t, n, i, r) {
		for(var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += ue.css(e, n + Ct[o], !0, r)), i ? ("content" === n && (s -= ue.css(e, "padding" + Ct[o], !0, r)), "margin" !== n && (s -= ue.css(e, "border" + Ct[o] + "Width", !0, r))) : (s += ue.css(e, "padding" + Ct[o], !0, r), "padding" !== n && (s += ue.css(e, "border" + Ct[o] + "Width", !0, r)));
		return s
	}

	function S(e, t, n) {
		var i = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = ut(e),
			s = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
		if(r <= 0 || null == r) {
			if(r = dt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), yt.test(r)) return r;
			i = s && (ue.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + E(e, t, n || (s ? "border" : "content"), i, o) + "px"
	}

	function T(e) {
		var t = G,
			n = wt[e];
		return n || (n = D(e, t), "none" !== n && n || (ct = (ct || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = D(e, t), ct.detach()), wt[e] = n), n
	}

	function D(e, t) {
		var n = ue(t.createElement(e)).appendTo(t.body),
			i = ue.css(n[0], "display");
		return n.remove(), i
	}

	function A(e, t, n, i) {
		var r;
		if(ue.isArray(t)) ue.each(t, function(t, r) {
			n || Et.test(e) ? i(e, r) : A(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
		});
		else if(n || "object" !== ue.type(t)) i(e, t);
		else
			for(r in t) A(e + "[" + r + "]", t[r], n, i)
	}

	function U(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				o = t.toLowerCase().match(fe) || [];
			if(ue.isFunction(n))
				for(; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function M(e, t, n, i) {
		function r(a) {
			var l;
			return o[a] = !0, ue.each(e[a] || [], function(e, a) {
				var c = a(t, n, i);
				return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var o = {},
			s = e === $t;
		return r(t.dataTypes[0]) || !o["*"] && r("*")
	}

	function O(e, n) {
		var i, r, o = ue.ajaxSettings.flatOptions || {};
		for(r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
		return i && ue.extend(!0, e, i), e
	}

	function I(e, n, i) {
		for(var r, o, s, a, l = e.contents, c = e.dataTypes;
			"*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if(o)
			for(a in l)
				if(l[a] && l[a].test(o)) {
					c.unshift(a);
					break
				}
		if(c[0] in i) s = c[0];
		else {
			for(a in i) {
				if(!c[0] || e.converters[a + " " + c[0]]) {
					s = a;
					break
				}
				r || (r = a)
			}
			s = s || r
		}
		if(s) return s !== c[0] && c.unshift(s), i[s]
	}

	function L(e, t, n, i) {
		var r, o, s, a, l, c = {},
			u = e.dataTypes.slice();
		if(u[1])
			for(s in e.converters) c[s.toLowerCase()] = e.converters[s];
		for(o = u.shift(); o;)
			if(e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
				if("*" === o) o = l;
				else if("*" !== l && l !== o) {
			if(s = c[l + " " + o] || c["* " + o], !s)
				for(r in c)
					if(a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
						s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
						break
					}
			if(s !== !0)
				if(s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch(d) {
					return {
						state: "parsererror",
						error: s ? d : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function P() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	}

	function R() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}

	function B() {
		return setTimeout(function() {
			Qt = t
		}), Qt = ue.now()
	}

	function j(e, t, n) {
		for(var i, r = (on[t] || []).concat(on["*"]), o = 0, s = r.length; o < s; o++)
			if(i = r[o].call(n, t, e)) return i
	}

	function F(e, t, n) {
		var i, r, o = 0,
			s = rn.length,
			a = ue.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(r) return !1;
				for(var t = Qt || B(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
				return a.notifyWith(e, [c, o, n]), o < 1 && l ? n : (a.resolveWith(e, [c]), !1)
			},
			c = a.promise({
				elem: e,
				props: ue.extend({}, t),
				opts: ue.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Qt || B(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = ue.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if(r) return this;
					for(r = !0; n < i; n++) c.tweens[n].run(1);
					return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for(H(u, c.opts.specialEasing); o < s; o++)
			if(i = rn[o].call(c, e, u, c.opts)) return i;
		return ue.map(u, j, c), ue.isFunction(c.opts.start) && c.opts.start.call(e, c), ue.fx.timer(ue.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function H(e, t) {
		var n, i, r, o, s;
		for(n in e)
			if(i = ue.camelCase(n), r = t[i], o = e[n], ue.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ue.cssHooks[i], s && "expand" in s) {
				o = s.expand(o), delete e[i];
				for(n in o) n in e || (e[n] = o[n], t[n] = r)
			} else t[i] = r
	}

	function q(e, t, n) {
		var i, r, o, s, a, l, c = this,
			u = {},
			d = e.style,
			f = e.nodeType && C(e),
			h = ue._data(e, "fxshow");
		n.queue || (a = ue._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
			a.unqueued || l()
		}), a.unqueued++, c.always(function() {
			c.always(function() {
				a.unqueued--, ue.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || c.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for(i in t)
			if(r = t[i], en.exec(r)) {
				if(delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) continue;
				u[i] = h && h[i] || ue.style(e, i)
			}
		if(!ue.isEmptyObject(u)) {
			h ? "hidden" in h && (f = h.hidden) : h = ue._data(e, "fxshow", {}), o && (h.hidden = !f), f ? ue(e).show() : c.done(function() {
				ue(e).hide()
			}), c.done(function() {
				var t;
				ue._removeData(e, "fxshow");
				for(t in u) ue.style(e, t, u[t])
			});
			for(i in u) s = j(f ? h[i] : 0, i, c), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function $(e, t, n, i, r) {
		return new $.prototype.init(e, t, n, i, r)
	}

	function z(e, t) {
		var n, i = {
				height: e
			},
			r = 0;
		for(t = t ? 1 : 0; r < 4; r += 2 - t) n = Ct[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function W(e) {
		return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var V, Y, X = typeof t,
		K = e.location,
		G = e.document,
		J = G.documentElement,
		Q = e.jQuery,
		Z = e.$,
		ee = {},
		te = [],
		ne = "1.10.2",
		ie = te.concat,
		re = te.push,
		oe = te.slice,
		se = te.indexOf,
		ae = ee.toString,
		le = ee.hasOwnProperty,
		ce = ne.trim,
		ue = function(e, t) {
			return new ue.fn.init(e, t, Y)
		},
		de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		fe = /\S+/g,
		he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ge = /^[\],:{}\s]*$/,
		ve = /(?:^|:|,)(?:\s*\[)+/g,
		ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		we = /^-ms-/,
		xe = /-([\da-z])/gi,
		_e = function(e, t) {
			return t.toUpperCase()
		},
		Ce = function(e) {
			(G.addEventListener || "load" === e.type || "complete" === G.readyState) && (ke(), ue.ready())
		},
		ke = function() {
			G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ce, !1), e.removeEventListener("load", Ce, !1)) : (G.detachEvent("onreadystatechange", Ce), e.detachEvent("onload", Ce))
		};
	ue.fn = ue.prototype = {
			jquery: ne,
			constructor: ue,
			init: function(e, n, i) {
				var r, o;
				if(!e) return this;
				if("string" == typeof e) {
					if(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
					if(r[1]) {
						if(n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), me.test(r[1]) && ue.isPlainObject(n))
							for(r in n) ue.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
						return this
					}
					if(o = G.getElementById(r[2]), o && o.parentNode) {
						if(o.id !== r[2]) return i.find(e);
						this.length = 1, this[0] = o
					}
					return this.context = G, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return oe.call(this)
			},
			get: function(e) {
				return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
			},
			pushStack: function(e) {
				var t = ue.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ue.each(this, e, t)
			},
			ready: function(e) {
				return ue.ready.promise().done(e), this
			},
			slice: function() {
				return this.pushStack(oe.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			map: function(e) {
				return this.pushStack(ue.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: re,
			sort: [].sort,
			splice: [].splice
		}, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
			var e, n, i, r, o, s, a = arguments[0] || {},
				l = 1,
				c = arguments.length,
				u = !1;
			for("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ue.isFunction(a) || (a = {}), c === l && (a = this, --l); l < c; l++)
				if(null != (o = arguments[l]))
					for(r in o) e = a[r], i = o[r], a !== i && (u && i && (ue.isPlainObject(i) || (n = ue.isArray(i))) ? (n ? (n = !1, s = e && ue.isArray(e) ? e : []) : s = e && ue.isPlainObject(e) ? e : {}, a[r] = ue.extend(u, s, i)) : i !== t && (a[r] = i));
			return a
		}, ue.extend({
			expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
			noConflict: function(t) {
				return e.$ === ue && (e.$ = Z), t && e.jQuery === ue && (e.jQuery = Q), ue
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ue.readyWait++ : ue.ready(!0)
			},
			ready: function(e) {
				if(e === !0 ? !--ue.readyWait : !ue.isReady) {
					if(!G.body) return setTimeout(ue.ready);
					ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (V.resolveWith(G, [ue]), ue.fn.trigger && ue(G).trigger("ready").off("ready"))
				}
			},
			isFunction: function(e) {
				return "function" === ue.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ue.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[ae.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				var n;
				if(!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
				try {
					if(e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch(i) {
					return !1
				}
				if(ue.support.ownLast)
					for(n in e) return le.call(e, n);
				for(n in e);
				return n === t || le.call(e, n)
			},
			isEmptyObject: function(e) {
				var t;
				for(t in e) return !1;
				return !0
			},
			error: function(e) {
				throw new Error(e)
			},
			parseHTML: function(e, t, n) {
				if(!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || G;
				var i = me.exec(e),
					r = !n && [];
				return i ? [t.createElement(i[1])] : (i = ue.buildFragment([e], t, r), r && ue(r).remove(), ue.merge([], i.childNodes))
			},
			parseJSON: function(t) {
				return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ue.trim(t), t && ge.test(t.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + t)() : void ue.error("Invalid JSON: " + t)
			},
			parseXML: function(n) {
				var i, r;
				if(!n || "string" != typeof n) return null;
				try {
					e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
				} catch(o) {
					i = t
				}
				return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), i
			},
			noop: function() {},
			globalEval: function(t) {
				t && ue.trim(t) && (e.execScript || function(t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function(e) {
				return e.replace(we, "ms-").replace(xe, _e)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, i) {
				var r, o = 0,
					s = e.length,
					a = n(e);
				if(i) {
					if(a)
						for(; o < s && (r = t.apply(e[o], i), r !== !1); o++);
					else
						for(o in e)
							if(r = t.apply(e[o], i), r === !1) break
				} else if(a)
					for(; o < s && (r = t.call(e[o], o, e[o]), r !== !1); o++);
				else
					for(o in e)
						if(r = t.call(e[o], o, e[o]), r === !1) break;
				return e
			},
			trim: ce && !ce.call("\ufeff ") ? function(e) {
				return null == e ? "" : ce.call(e)
			} : function(e) {
				return null == e ? "" : (e + "").replace(he, "")
			},
			makeArray: function(e, t) {
				var i = t || [];
				return null != e && (n(Object(e)) ? ue.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)), i
			},
			inArray: function(e, t, n) {
				var i;
				if(t) {
					if(se) return se.call(t, e, n);
					for(i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
						if(n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, n) {
				var i = n.length,
					r = e.length,
					o = 0;
				if("number" == typeof i)
					for(; o < i; o++) e[r++] = n[o];
				else
					for(; n[o] !== t;) e[r++] = n[o++];
				return e.length = r, e
			},
			grep: function(e, t, n) {
				var i, r = [],
					o = 0,
					s = e.length;
				for(n = !!n; o < s; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
				return r
			},
			map: function(e, t, i) {
				var r, o = 0,
					s = e.length,
					a = n(e),
					l = [];
				if(a)
					for(; o < s; o++) r = t(e[o], o, i), null != r && (l[l.length] = r);
				else
					for(o in e) r = t(e[o], o, i), null != r && (l[l.length] = r);
				return ie.apply([], l)
			},
			guid: 1,
			proxy: function(e, n) {
				var i, r, o;
				return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (i = oe.call(arguments, 2), r = function() {
					return e.apply(n || this, i.concat(oe.call(arguments)))
				}, r.guid = e.guid = e.guid || ue.guid++, r) : t
			},
			access: function(e, n, i, r, o, s, a) {
				var l = 0,
					c = e.length,
					u = null == i;
				if("object" === ue.type(i)) {
					o = !0;
					for(l in i) ue.access(e, n, l, i[l], !0, s, a)
				} else if(r !== t && (o = !0, ue.isFunction(r) || (a = !0), u && (a ? (n.call(e, r), n = null) : (u = n, n = function(e, t, n) {
						return u.call(ue(e), n)
					})), n))
					for(; l < c; l++) n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
				return o ? e : u ? n.call(e) : c ? n(e[0], i) : s
			},
			now: function() {
				return(new Date).getTime()
			},
			swap: function(e, t, n, i) {
				var r, o, s = {};
				for(o in t) s[o] = e.style[o], e.style[o] = t[o];
				r = n.apply(e, i || []);
				for(o in t) e.style[o] = s[o];
				return r
			}
		}), ue.ready.promise = function(t) {
			if(!V)
				if(V = ue.Deferred(), "complete" === G.readyState) setTimeout(ue.ready);
				else if(G.addEventListener) G.addEventListener("DOMContentLoaded", Ce, !1), e.addEventListener("load", Ce, !1);
			else {
				G.attachEvent("onreadystatechange", Ce), e.attachEvent("onload", Ce);
				var n = !1;
				try {
					n = null == e.frameElement && G.documentElement
				} catch(i) {}
				n && n.doScroll && ! function r() {
					if(!ue.isReady) {
						try {
							n.doScroll("left")
						} catch(e) {
							return setTimeout(r, 50)
						}
						ke(), ue.ready()
					}
				}()
			}
			return V.promise(t)
		}, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			ee["[object " + t + "]"] = t.toLowerCase()
		}), Y = ue(G),
		function(e, t) {
			function n(e, t, n, i) {
				var r, o, s, a, l, c, u, d, p, m;
				if((t ? t.ownerDocument || t : F) !== M && U(t), t = t || M, n = n || [], !e || "string" != typeof e) return n;
				if(1 !== (a = t.nodeType) && 9 !== a) return [];
				if(I && !i) {
					if(r = be.exec(e))
						if(s = r[1]) {
							if(9 === a) {
								if(o = t.getElementById(s), !o || !o.parentNode) return n;
								if(o.id === s) return n.push(o), n
							} else if(t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && B(t, o) && o.id === s) return n.push(o), n
						} else {
							if(r[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
							if((s = r[3]) && C.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(s)), n
						}
					if(C.qsa && (!L || !L.test(e))) {
						if(d = u = j, p = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
							for(c = f(e), (u = t.getAttribute("id")) ? d = u.replace(_e, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + h(c[l]);
							p = he.test(e) && t.parentNode || t, m = c.join(",")
						}
						if(m) try {
							return ee.apply(n, p.querySelectorAll(m)), n
						} catch(g) {} finally {
							u || t.removeAttribute("id")
						}
					}
				}
				return x(e.replace(ce, "$1"), t, n, i)
			}

			function i() {
				function e(n, i) {
					return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = i
				}
				var t = [];
				return e
			}

			function r(e) {
				return e[j] = !0, e
			}

			function o(e) {
				var t = M.createElement("div");
				try {
					return !!e(t)
				} catch(n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function s(e, t) {
				for(var n = e.split("|"), i = e.length; i--;) N.attrHandle[n[i]] = t
			}

			function a(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
				if(i) return i;
				if(n)
					for(; n = n.nextSibling;)
						if(n === t) return -1;
				return e ? 1 : -1
			}

			function l(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function c(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return("input" === n || "button" === n) && t.type === e
				}
			}

			function u(e) {
				return r(function(t) {
					return t = +t, r(function(n, i) {
						for(var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function d() {}

			function f(e, t) {
				var i, r, o, s, a, l, c, u = z[e + " "];
				if(u) return t ? 0 : u.slice(0);
				for(a = e, l = [], c = N.preFilter; a;) {
					i && !(r = de.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = fe.exec(a)) && (i = r.shift(), o.push({
						value: i,
						type: r[0].replace(ce, " ")
					}), a = a.slice(i.length));
					for(s in N.filter) !(r = ve[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
						value: i,
						type: s,
						matches: r
					}), a = a.slice(i.length));
					if(!i) break
				}
				return t ? a.length : a ? n.error(e) : z(e, l).slice(0)
			}

			function h(e) {
				for(var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
				return i
			}

			function p(e, t, n) {
				var i = t.dir,
					r = n && "parentNode" === i,
					o = q++;
				return t.first ? function(t, n, o) {
					for(; t = t[i];)
						if(1 === t.nodeType || r) return e(t, n, o)
				} : function(t, n, s) {
					var a, l, c, u = H + " " + o;
					if(s) {
						for(; t = t[i];)
							if((1 === t.nodeType || r) && e(t, n, s)) return !0
					} else
						for(; t = t[i];)
							if(1 === t.nodeType || r)
								if(c = t[j] || (t[j] = {}), (l = c[i]) && l[0] === u) {
									if((a = l[1]) === !0 || a === k) return a === !0
								} else if(l = c[i] = [u], l[1] = e(t, n, s) || k, l[1] === !0) return !0
				}
			}

			function m(e) {
				return e.length > 1 ? function(t, n, i) {
					for(var r = e.length; r--;)
						if(!e[r](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function g(e, t, n, i, r) {
				for(var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
				return s
			}

			function v(e, t, n, i, o, s) {
				return i && !i[j] && (i = v(i)), o && !o[j] && (o = v(o, s)), r(function(r, s, a, l) {
					var c, u, d, f = [],
						h = [],
						p = s.length,
						m = r || w(t || "*", a.nodeType ? [a] : a, []),
						v = !e || !r && t ? m : g(m, f, e, a, l),
						y = n ? o || (r ? e : p || i) ? [] : s : v;
					if(n && n(v, y, a, l), i)
						for(c = g(y, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(v[h[u]] = d));
					if(r) {
						if(o || e) {
							if(o) {
								for(c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
								o(null, y = [], c, l)
							}
							for(u = y.length; u--;)(d = y[u]) && (c = o ? ne.call(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
						}
					} else y = g(y === s ? y.splice(p, y.length) : y), o ? o(null, s, y, l) : ee.apply(s, y)
				})
			}

			function y(e) {
				for(var t, n, i, r = e.length, o = N.relative[e[0].type], s = o || N.relative[" "], a = o ? 1 : 0, l = p(function(e) {
						return e === t
					}, s, !0), c = p(function(e) {
						return ne.call(t, e) > -1
					}, s, !0), u = [function(e, n, i) {
						return !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
					}]; a < r; a++)
					if(n = N.relative[e[a].type]) u = [p(m(u), n)];
					else {
						if(n = N.filter[e[a].type].apply(null, e[a].matches), n[j]) {
							for(i = ++a; i < r && !N.relative[e[i].type]; i++);
							return v(a > 1 && m(u), a > 1 && h(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(ce, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && h(e))
						}
						u.push(n)
					}
				return m(u)
			}

			function b(e, t) {
				var i = 0,
					o = t.length > 0,
					s = e.length > 0,
					a = function(r, a, l, c, u) {
						var d, f, h, p = [],
							m = 0,
							v = "0",
							y = r && [],
							b = null != u,
							w = D,
							x = r || s && N.find.TAG("*", u && a.parentNode || a),
							_ = H += null == w ? 1 : Math.random() || .1;
						for(b && (D = a !== M && a, k = i); null != (d = x[v]); v++) {
							if(s && d) {
								for(f = 0; h = e[f++];)
									if(h(d, a, l)) {
										c.push(d);
										break
									}
								b && (H = _, k = ++i)
							}
							o && ((d = !h && d) && m--, r && y.push(d))
						}
						if(m += v, o && v !== m) {
							for(f = 0; h = t[f++];) h(y, p, a, l);
							if(r) {
								if(m > 0)
									for(; v--;) y[v] || p[v] || (p[v] = Q.call(c));
								p = g(p)
							}
							ee.apply(c, p), b && !r && p.length > 0 && m + t.length > 1 && n.uniqueSort(c)
						}
						return b && (H = _, D = w), y
					};
				return o ? r(a) : a
			}

			function w(e, t, i) {
				for(var r = 0, o = t.length; r < o; r++) n(e, t[r], i);
				return i
			}

			function x(e, t, n, i) {
				var r, o, s, a, l, c = f(e);
				if(!i && 1 === c.length) {
					if(o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === t.nodeType && I && N.relative[o[1].type]) {
						if(t = (N.find.ID(s.matches[0].replace(Ce, ke), t) || [])[0], !t) return n;
						e = e.slice(o.shift().value.length)
					}
					for(r = ve.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !N.relative[a = s.type]);)
						if((l = N.find[a]) && (i = l(s.matches[0].replace(Ce, ke), he.test(o[0].type) && t.parentNode || t))) {
							if(o.splice(r, 1), e = i.length && h(o), !e) return ee.apply(n, i), n;
							break
						}
				}
				return T(e, c)(i, t, !I, n, he.test(e)), n
			}
			var _, C, k, N, E, S, T, D, A, U, M, O, I, L, P, R, B, j = "sizzle" + -new Date,
				F = e.document,
				H = 0,
				q = 0,
				$ = i(),
				z = i(),
				W = i(),
				V = !1,
				Y = function(e, t) {
					return e === t ? (V = !0, 0) : 0
				},
				X = typeof t,
				K = 1 << 31,
				G = {}.hasOwnProperty,
				J = [],
				Q = J.pop,
				Z = J.push,
				ee = J.push,
				te = J.slice,
				ne = J.indexOf || function(e) {
					for(var t = 0, n = this.length; t < n; t++)
						if(this[t] === e) return t;
					return -1
				},
				ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				re = "[\\x20\\t\\r\\n\\f]",
				oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				se = oe.replace("w", "w#"),
				ae = "\\[" + re + "*(" + oe + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + re + "*\\]",
				le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
				ce = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
				de = new RegExp("^" + re + "*," + re + "*"),
				fe = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
				he = new RegExp(re + "*[+~]"),
				pe = new RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
				me = new RegExp(le),
				ge = new RegExp("^" + se + "$"),
				ve = {
					ID: new RegExp("^#(" + oe + ")"),
					CLASS: new RegExp("^\\.(" + oe + ")"),
					TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ae),
					PSEUDO: new RegExp("^" + le),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ie + ")$", "i"),
					needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
				},
				ye = /^[^{]+\{\s*\[native \w/,
				be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				we = /^(?:input|select|textarea|button)$/i,
				xe = /^h\d$/i,
				_e = /'|\\/g,
				Ce = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
				ke = function(e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				};
			try {
				ee.apply(J = te.call(F.childNodes), F.childNodes), J[F.childNodes.length].nodeType
			} catch(Ne) {
				ee = {
					apply: J.length ? function(e, t) {
						Z.apply(e, te.call(t))
					} : function(e, t) {
						for(var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			S = n.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, C = n.support = {}, U = n.setDocument = function(e) {
				var t = e ? e.ownerDocument || e : F,
					n = t.defaultView;
				return t !== M && 9 === t.nodeType && t.documentElement ? (M = t, O = t.documentElement, I = !S(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
					U()
				}), C.attributes = o(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), C.getElementsByTagName = o(function(e) {
					return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
				}), C.getElementsByClassName = o(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), C.getById = o(function(e) {
					return O.appendChild(e).id = j, !t.getElementsByName || !t.getElementsByName(j).length
				}), C.getById ? (N.find.ID = function(e, t) {
					if(typeof t.getElementById !== X && I) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, N.filter.ID = function(e) {
					var t = e.replace(Ce, ke);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete N.find.ID, N.filter.ID = function(e) {
					var t = e.replace(Ce, ke);
					return function(e) {
						var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), N.find.TAG = C.getElementsByTagName ? function(e, t) {
					if(typeof t.getElementsByTagName !== X) return t.getElementsByTagName(e)
				} : function(e, t) {
					var n, i = [],
						r = 0,
						o = t.getElementsByTagName(e);
					if("*" === e) {
						for(; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, N.find.CLASS = C.getElementsByClassName && function(e, t) {
					if(typeof t.getElementsByClassName !== X && I) return t.getElementsByClassName(e)
				}, P = [], L = [], (C.qsa = ye.test(t.querySelectorAll)) && (o(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
				}), o(function(e) {
					var n = t.createElement("input");
					n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
				})), (C.matchesSelector = ye.test(R = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
					C.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", le)
				}), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), B = ye.test(O.contains) || O.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if(t)
						for(; t = t.parentNode;)
							if(t === e) return !0;
					return !1
				}, Y = O.compareDocumentPosition ? function(e, n) {
					if(e === n) return V = !0, 0;
					var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
					return i ? 1 & i || !C.sortDetached && n.compareDocumentPosition(e) === i ? e === t || B(F, e) ? -1 : n === t || B(F, n) ? 1 : A ? ne.call(A, e) - ne.call(A, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, n) {
					var i, r = 0,
						o = e.parentNode,
						s = n.parentNode,
						l = [e],
						c = [n];
					if(e === n) return V = !0, 0;
					if(!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : A ? ne.call(A, e) - ne.call(A, n) : 0;
					if(o === s) return a(e, n);
					for(i = e; i = i.parentNode;) l.unshift(i);
					for(i = n; i = i.parentNode;) c.unshift(i);
					for(; l[r] === c[r];) r++;
					return r ? a(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
				}, t) : M
			}, n.matches = function(e, t) {
				return n(e, null, null, t)
			}, n.matchesSelector = function(e, t) {
				if((e.ownerDocument || e) !== M && U(e), t = t.replace(pe, "='$1']"), C.matchesSelector && I && (!P || !P.test(t)) && (!L || !L.test(t))) try {
					var i = R.call(e, t);
					if(i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch(r) {}
				return n(t, M, null, [e]).length > 0
			}, n.contains = function(e, t) {
				return(e.ownerDocument || e) !== M && U(e), B(e, t)
			}, n.attr = function(e, n) {
				(e.ownerDocument || e) !== M && U(e);
				var i = N.attrHandle[n.toLowerCase()],
					r = i && G.call(N.attrHandle, n.toLowerCase()) ? i(e, n, !I) : t;
				return r === t ? C.attributes || !I ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
			}, n.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, n.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					r = 0;
				if(V = !C.detectDuplicates, A = !C.sortStable && e.slice(0), e.sort(Y), V) {
					for(; t = e[r++];) t === e[r] && (i = n.push(r));
					for(; i--;) e.splice(n[i], 1)
				}
				return e
			}, E = n.getText = function(e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if(r) {
					if(1 === r || 9 === r || 11 === r) {
						if("string" == typeof e.textContent) return e.textContent;
						for(e = e.firstChild; e; e = e.nextSibling) n += E(e)
					} else if(3 === r || 4 === r) return e.nodeValue
				} else
					for(; t = e[i]; i++) n += E(t);
				return n
			}, N = n.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: ve,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(Ce, ke), e[3] = (e[4] || e[5] || "").replace(Ce, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, i = !e[5] && e[2];
						return ve.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && me.test(i) && (n = f(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(Ce, ke).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = $[e + " "];
						return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && $(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, i) {
						return function(r) {
							var o = n.attr(r, e);
							return null == o ? "!=" === t : !t || (o += "",
								"=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(e, t, n, i, r) {
						var o = "nth" !== e.slice(0, 3),
							s = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === i && 0 === r ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var c, u, d, f, h, p, m = o !== s ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = a && t.nodeName.toLowerCase(),
								y = !l && !a;
							if(g) {
								if(o) {
									for(; m;) {
										for(d = t; d = d[m];)
											if(a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
										p = m = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if(p = [s ? g.firstChild : g.lastChild], s && y) {
									for(u = g[j] || (g[j] = {}), c = u[e] || [], h = c[0] === H && c[1], f = c[0] === H && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
										if(1 === d.nodeType && ++f && d === t) {
											u[e] = [H, h, f];
											break
										}
								} else if(y && (c = (t[j] || (t[j] = {}))[e]) && c[0] === H) f = c[1];
								else
									for(;
										(d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[j] || (d[j] = {}))[e] = [H, f]), d !== t)););
								return f -= r, f === i || f % i === 0 && f / i >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var i, o = N.pseudos[e] || N.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
						return o[j] ? o(t) : o.length > 1 ? (i = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
							for(var i, r = o(e, t), s = r.length; s--;) i = ne.call(e, r[s]), e[i] = !(n[i] = r[s])
						}) : function(e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = T(e.replace(ce, "$1"));
						return i[j] ? r(function(e, t, n, r) {
							for(var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
						}) : function(e, r, o) {
							return t[0] = e, i(t, null, o, n), !n.pop()
						}
					}),
					has: r(function(e) {
						return function(t) {
							return n(e, t).length > 0
						}
					}),
					contains: r(function(e) {
						return function(t) {
							return(t.textContent || t.innerText || E(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ce, ke).toLowerCase(),
							function(t) {
								var n;
								do
									if(n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === O
					},
					focus: function(e) {
						return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for(e = e.firstChild; e; e = e.nextSibling)
							if(e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !N.pseudos.empty(e)
					},
					header: function(e) {
						return xe.test(e.nodeName)
					},
					input: function(e) {
						return we.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(e, t) {
						return [t - 1]
					}),
					eq: u(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: u(function(e, t) {
						for(var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: u(function(e, t) {
						for(var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: u(function(e, t, n) {
						for(var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: u(function(e, t, n) {
						for(var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}, N.pseudos.nth = N.pseudos.eq;
			for(_ in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) N.pseudos[_] = l(_);
			for(_ in {
					submit: !0,
					reset: !0
				}) N.pseudos[_] = c(_);
			d.prototype = N.filters = N.pseudos, N.setFilters = new d, T = n.compile = function(e, t) {
				var n, i = [],
					r = [],
					o = W[e + " "];
				if(!o) {
					for(t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[j] ? i.push(o) : r.push(o);
					o = W(e, b(r, i))
				}
				return o
			}, C.sortStable = j.split("").sort(Y).join("") === j, C.detectDuplicates = V, U(), C.sortDetached = o(function(e) {
				return 1 & e.compareDocumentPosition(M.createElement("div"))
			}), o(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || s("type|href|height|width", function(e, t, n) {
				if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), C.attributes && o(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || s("value", function(e, t, n) {
				if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), o(function(e) {
				return null == e.getAttribute("disabled")
			}) || s(ie, function(e, t, n) {
				var i;
				if(!n) return(i = e.getAttributeNode(t)) && i.specified ? i.value : e[t] === !0 ? t.toLowerCase() : null
			}), ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains
		}(e);
	var Ne = {};
	ue.Callbacks = function(e) {
		e = "string" == typeof e ? Ne[e] || i(e) : ue.extend({}, e);
		var n, r, o, s, a, l, c = [],
			u = !e.once && [],
			d = function(t) {
				for(r = e.memory && t, o = !0, a = l || 0, l = 0, s = c.length, n = !0; c && a < s; a++)
					if(c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, c && (u ? u.length && d(u.shift()) : r ? c = [] : f.disable())
			},
			f = {
				add: function() {
					if(c) {
						var t = c.length;
						! function i(t) {
							ue.each(t, function(t, n) {
								var r = ue.type(n);
								"function" === r ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
							})
						}(arguments), n ? s = c.length : r && (l = t, d(r))
					}
					return this
				},
				remove: function() {
					return c && ue.each(arguments, function(e, t) {
						for(var i;
							(i = ue.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (i <= s && s--, i <= a && a--)
					}), this
				},
				has: function(e) {
					return e ? ue.inArray(e, c) > -1 : !(!c || !c.length)
				},
				empty: function() {
					return c = [], s = 0, this
				},
				disable: function() {
					return c = u = r = t, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = t, r || f.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !c || o && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : d(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, ue.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ue.Callbacks("once memory"), "resolved"],
					["reject", "fail", ue.Callbacks("once memory"), "rejected"],
					["notify", "progress", ue.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ue.Deferred(function(n) {
							ue.each(t, function(t, o) {
								var s = o[0],
									a = ue.isFunction(e[t]) && e[t];
								r[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ue.extend(e, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, ue.each(t, function(e, o) {
				var s = o[2],
					a = o[3];
				i[o[1]] = s.add, a && s.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = s.fireWith
			}), i.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t, n, i, r = 0,
				o = oe.call(arguments),
				s = o.length,
				a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0,
				l = 1 === a ? e : ue.Deferred(),
				c = function(e, n, i) {
					return function(r) {
						n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if(s > 1)
				for(t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && ue.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
			return a || l.resolveWith(i, o), l.promise()
		}
	}), ue.support = function(t) {
		var n, i, r, o, s, a, l, c, u, d = G.createElement("div");
		if(d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
		o = G.createElement("select"), a = o.appendChild(G.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!r.value, t.optSelected = a.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
		try {
			delete d.test
		} catch(f) {
			t.deleteExpando = !1
		}
		r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(r), t.appendChecked = r.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for(u in {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for(u in ue(t)) break;
		return t.ownLast = "0" !== u, ue(function() {
			var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				s = G.getElementsByTagName("body")[0];
			s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(s, null != s.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, i = d.appendChild(G.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = r = i = null)
		}), n = o = s = a = i = r = null, t
	}({});
	var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Se = /([A-Z])/g;
	ue.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !a(e)
		},
		data: function(e, t, n) {
			return r(e, t, n)
		},
		removeData: function(e, t) {
			return o(e, t)
		},
		_data: function(e, t, n) {
			return r(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return o(e, t, !0)
		},
		acceptData: function(e) {
			if(e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), ue.fn.extend({
		data: function(e, n) {
			var i, r, o = null,
				a = 0,
				l = this[0];
			if(e === t) {
				if(this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
					for(i = l.attributes; a < i.length; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)), s(l, r, o[r]));
					ue._data(l, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				ue.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ue.data(this, e, n)
			}) : l ? s(l, e, ue.data(l, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				ue.removeData(this, e)
			})
		}
	}), ue.extend({
		queue: function(e, t, n) {
			var i;
			if(e) return t = (t || "fx") + "queue", i = ue._data(e, t), n && (!i || ue.isArray(n) ? i = ue._data(e, t, ue.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ue.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = ue._queueHooks(e, t),
				s = function() {
					ue.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ue._data(e, n) || ue._data(e, n, {
				empty: ue.Callbacks("once memory").add(function() {
					ue._removeData(e, t + "queue"), ue._removeData(e, n)
				})
			})
		}
	}), ue.fn.extend({
		queue: function(e, n) {
			var i = 2;
			return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = ue.queue(this, e, n);
				ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ue.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var i, r = 1,
				o = ue.Deferred(),
				s = this,
				a = this.length,
				l = function() {
					--r || o.resolveWith(s, [s])
				};
			for("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = ue._data(s[a], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var Te, De, Ae = /[\t\r\n\f]/g,
		Ue = /\r/g,
		Me = /^(?:input|select|textarea|button|object)$/i,
		Oe = /^(?:a|area)$/i,
		Ie = /^(?:checked|selected)$/i,
		Le = ue.support.getSetAttribute,
		Pe = ue.support.input;
	ue.fn.extend({
		attr: function(e, t) {
			return ue.access(this, ue.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ue.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ue.access(this, ue.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ue.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch(n) {}
			})
		},
		addClass: function(e) {
			var t, n, i, r, o, s = 0,
				a = this.length,
				l = "string" == typeof e && e;
			if(ue.isFunction(e)) return this.each(function(t) {
				ue(this).addClass(e.call(this, t, this.className))
			});
			if(l)
				for(t = (e || "").match(fe) || []; s < a; s++)
					if(n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
						for(o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						n.className = ue.trim(i)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, r, o, s = 0,
				a = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if(ue.isFunction(e)) return this.each(function(t) {
				ue(this).removeClass(e.call(this, t, this.className))
			});
			if(l)
				for(t = (e || "").match(fe) || []; s < a; s++)
					if(n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
						for(o = 0; r = t[o++];)
							for(; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
						n.className = e ? ue.trim(i) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function(n) {
				ue(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if("string" === n)
					for(var t, i = 0, r = ue(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else n !== X && "boolean" !== n || (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for(var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
				if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, i, r, o = this[0]; {
				if(arguments.length) return r = ue.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = r ? e.call(this, n, ue(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
						return null == e ? "" : e + ""
					})), i = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
				});
				if(o) return i = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Ue, "") : null == n ? "" : n)
			}
		}
	}), ue.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ue.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					for(var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
						if(n = i[l], (n.selected || l === r) && (ue.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ue.nodeName(n.parentNode, "optgroup"))) {
							if(t = ue(n).val(), o) return t;
							s.push(t)
						}
					return s
				},
				set: function(e, t) {
					for(var n, i, r = e.options, o = ue.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = ue.inArray(ue(i).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, i) {
			var r, o, s = e.nodeType;
			if(e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === X ? ue.prop(e, n, i) : (1 === s && ue.isXMLDoc(e) || (n = n.toLowerCase(), r = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? De : Te)), i === t ? r && "get" in r && null !== (o = r.get(e, n)) ? o : (o = ue.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : void ue.removeAttr(e, n))
		},
		removeAttr: function(e, t) {
			var n, i, r = 0,
				o = t && t.match(fe);
			if(o && 1 === e.nodeType)
				for(; n = o[r++];) i = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Pe && Le || !Ie.test(n) ? e[i] = !1 : e[ue.camelCase("default-" + n)] = e[i] = !1 : ue.attr(e, n, ""), e.removeAttribute(Le ? n : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, i) {
			var r, o, s, a = e.nodeType;
			if(e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ue.isXMLDoc(e), s && (n = ue.propFix[n] || n, o = ue.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ue.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Me.test(e.nodeName) || Oe.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), De = {
		set: function(e, t, n) {
			return t === !1 ? ue.removeAttr(e, n) : Pe && Le || !Ie.test(n) ? e.setAttribute(!Le && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var i = ue.expr.attrHandle[n] || ue.find.attr;
		ue.expr.attrHandle[n] = Pe && Le || !Ie.test(n) ? function(e, n, r) {
			var o = ue.expr.attrHandle[n],
				s = r ? t : (ue.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
			return ue.expr.attrHandle[n] = o, s
		} : function(e, n, i) {
			return i ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Pe && Le || (ue.attrHooks.value = {
		set: function(e, t, n) {
			return ue.nodeName(e, "input") ? void(e.defaultValue = t) : Te && Te.set(e, t, n)
		}
	}), Le || (Te = {
		set: function(e, n, i) {
			var r = e.getAttributeNode(i);
			return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
		}
	}, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, n, i) {
		var r;
		return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
	}, ue.valHooks.button = {
		get: function(e, n) {
			var i = e.getAttributeNode(n);
			return i && i.specified ? i.value : t
		},
		set: Te.set
	}, ue.attrHooks.contenteditable = {
		set: function(e, t, n) {
			Te.set(e, "" !== t && t, n)
		}
	}, ue.each(["width", "height"], function(e, t) {
		ue.attrHooks[t] = {
			set: function(e, n) {
				if("" === n) return e.setAttribute(t, "auto"), n
			}
		}
	})), ue.support.hrefNormalized || ue.each(["href", "src"], function(e, t) {
		ue.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ue.support.style || (ue.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), ue.support.optSelected || (ue.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ue.propFix[this.toLowerCase()] = this
	}), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function() {
		ue.valHooks[this] = {
			set: function(e, t) {
				if(ue.isArray(t)) return e.checked = ue.inArray(ue(e).val(), t) >= 0
			}
		}, ue.support.checkOn || (ue.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Re = /^(?:input|select|textarea)$/i,
		Be = /^key/,
		je = /^(?:mouse|contextmenu)|click/,
		Fe = /^(?:focusinfocus|focusoutblur)$/,
		He = /^([^.]*)(?:\.(.+)|)$/;
	ue.event = {
		global: {},
		add: function(e, n, i, r, o) {
			var s, a, l, c, u, d, f, h, p, m, g, v = ue._data(e);
			if(v) {
				for(i.handler && (c = i, i = c.handler, o = c.selector), i.guid || (i.guid = ue.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
						return typeof ue === X || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(d.elem, arguments)
					}, d.elem = e), n = (n || "").match(fe) || [""], l = n.length; l--;) s = He.exec(n[l]) || [], p = g = s[1], m = (s[2] || "").split(".").sort(), p && (u = ue.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = ue.event.special[p] || {}, f = ue.extend({
					type: p,
					origType: g,
					data: r,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && ue.expr.match.needsContext.test(o),
					namespace: m.join(".")
				}, c), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, u.setup && u.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, f) : h.push(f), ue.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, r) {
			var o, s, a, l, c, u, d, f, h, p, m, g = ue.hasData(e) && ue._data(e);
			if(g && (u = g.events)) {
				for(t = (t || "").match(fe) || [""], c = t.length; c--;)
					if(a = He.exec(t[c]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
						for(d = ue.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(e, s));
						l && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ue.removeEvent(e, h, g.handle), delete u[h])
					} else
						for(h in u) ue.event.remove(e, h + t[c], n, i, !0);
				ue.isEmptyObject(u) && (delete g.handle, ue._removeData(e, "events"))
			}
		},
		trigger: function(n, i, r, o) {
			var s, a, l, c, u, d, f, h = [r || G],
				p = le.call(n, "type") ? n.type : n,
				m = le.call(n, "namespace") ? n.namespace.split(".") : [];
			if(l = d = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Fe.test(p + ue.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), a = p.indexOf(":") < 0 && "on" + p, n = n[ue.expando] ? n : new ue.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ue.makeArray(i, [n]), u = ue.event.special[p] || {}, o || !u.trigger || u.trigger.apply(r, i) !== !1)) {
				if(!o && !u.noBubble && !ue.isWindow(r)) {
					for(c = u.delegateType || p, Fe.test(c + p) || (l = l.parentNode); l; l = l.parentNode) h.push(l), d = l;
					d === (r.ownerDocument || G) && h.push(d.defaultView || d.parentWindow || e)
				}
				for(f = 0;
					(l = h[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || p, s = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ue.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
				if(n.type = p, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), i) === !1) && ue.acceptData(r) && a && r[p] && !ue.isWindow(r)) {
					d = r[a], d && (r[a] = null), ue.event.triggered = p;
					try {
						r[p]()
					} catch(g) {}
					ue.event.triggered = t, d && (r[a] = d)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = ue.event.fix(e);
			var n, i, r, o, s, a = [],
				l = oe.call(arguments),
				c = (ue._data(this, "events") || {})[e.type] || [],
				u = ue.event.special[e.type] || {};
			if(l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for(a = ue.event.handlers.call(this, e, c), n = 0;
					(o = a[n++]) && !e.isPropagationStopped();)
					for(e.currentTarget = o.elem, s = 0;
						(r = o.handlers[s++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((ue.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var i, r, o, s, a = [],
				l = n.delegateCount,
				c = e.target;
			if(l && c.nodeType && (!e.button || "click" !== e.type))
				for(; c != this; c = c.parentNode || this)
					if(1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
						for(o = [], s = 0; s < l; s++) r = n[s], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ue(i, this).index(c) >= 0 : ue.find(i, this, null, [c]).length), o[i] && o.push(r);
						o.length && a.push({
							elem: c,
							handlers: o
						})
					}
			return l < n.length && a.push({
				elem: this,
				handlers: n.slice(l)
			}), a
		},
		fix: function(e) {
			if(e[ue.expando]) return e;
			var t, n, i, r = e.type,
				o = e,
				s = this.fixHooks[r];
			for(s || (this.fixHooks[r] = s = je.test(r) ? this.mouseHooks : Be.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ue.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var i, r, o, s = n.button,
					a = n.fromElement;
				return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== u() && this.focus) try {
						return this.focus(), !1
					} catch(e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === u() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if(ue.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
				},
				_default: function(e) {
					return ue.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var r = ue.extend(new ue.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? ue.event.trigger(r, null, t) : ue.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, ue.removeEvent = G.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n))
	}, ue.Event = function(e, t) {
		return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ue.extend(this, t), this.timeStamp = e && e.timeStamp || ue.now(), void(this[ue.expando] = !0)) : new ue.Event(e, t)
	}, ue.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, ue.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		ue.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					r = e.relatedTarget,
					o = e.handleObj;
				return r && (r === i || ue.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ue.support.submitBubbles || (ue.event.special.submit = {
		setup: function() {
			return !ue.nodeName(this, "form") && void ue.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					i = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
				i && !ue._data(i, "submitBubbles") && (ue.event.add(i, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ue._data(i, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return !ue.nodeName(this, "form") && void ue.event.remove(this, "._submit")
		}
	}), ue.support.changeBubbles || (ue.event.special.change = {
		setup: function() {
			return Re.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ue.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ue.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
			})), !1) : void ue.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Re.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
				}), ue._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if(this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return ue.event.remove(this, "._change"), !Re.test(this.nodeName)
		}
	}), ue.support.focusinBubbles || ue.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			i = function(e) {
				ue.event.simulate(t, e.target, ue.event.fix(e), !0)
			};
		ue.event.special[t] = {
			setup: function() {
				0 === n++ && G.addEventListener(e, i, !0)
			},
			teardown: function() {
				0 === --n && G.removeEventListener(e, i, !0)
			}
		}
	}), ue.fn.extend({
		on: function(e, n, i, r, o) {
			var s, a;
			if("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = t);
				for(s in e) this.on(s, n, i, e[s], o);
				return this
			}
			if(null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = c;
			else if(!r) return this;
			return 1 === o && (a = r, r = function(e) {
				return ue().off(e), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = ue.guid++)), this.each(function() {
				ue.event.add(this, e, r, i, n)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, n, i) {
			var r, o;
			if(e && e.preventDefault && e.handleObj) return r = e.handleObj, ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if("object" == typeof e) {
				for(o in e) this.off(o, n, e[o]);
				return this
			}
			return n !== !1 && "function" != typeof n || (i = n, n = t), i === !1 && (i = c), this.each(function() {
				ue.event.remove(this, e, i, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ue.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if(n) return ue.event.trigger(e, t, n, !0)
		}
	});
	var qe = /^.[^:#\[\.,]*$/,
		$e = /^(?:parents|prev(?:Until|All))/,
		ze = ue.expr.match.needsContext,
		We = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ue.fn.extend({
		find: function(e) {
			var t, n = [],
				i = this,
				r = i.length;
			if("string" != typeof e) return this.pushStack(ue(e).filter(function() {
				for(t = 0; t < r; t++)
					if(ue.contains(i[t], this)) return !0
			}));
			for(t = 0; t < r; t++) ue.find(e, i[t], n);
			return n = this.pushStack(r > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = ue(e, this),
				i = n.length;
			return this.filter(function() {
				for(t = 0; t < i; t++)
					if(ue.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(f(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(f(this, e || [], !1))
		},
		is: function(e) {
			return !!f(this, "string" == typeof e && ze.test(e) ? ue(e) : e || [], !1).length
		},
		closest: function(e, t) {
			for(var n, i = 0, r = this.length, o = [], s = ze.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i < r; i++)
				for(n = this[i]; n && n !== t; n = n.parentNode)
					if(n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? ue.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
				i = ue.merge(this.get(), n);
			return this.pushStack(ue.unique(i))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ue.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ue.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ue.dir(e, "parentNode", n)
		},
		next: function(e) {
			return d(e, "nextSibling")
		},
		prev: function(e) {
			return d(e, "previousSibling")
		},
		nextAll: function(e) {
			return ue.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ue.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ue.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ue.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ue.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ue.sibling(e.firstChild)
		},
		contents: function(e) {
			return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
		}
	}, function(e, t) {
		ue.fn[e] = function(n, i) {
			var r = ue.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ue.filter(i, r)), this.length > 1 && (We[e] || (r = ue.unique(r)), $e.test(e) && (r = r.reverse())), this.pushStack(r)
		}
	}), ue.extend({
		filter: function(e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ue.find.matchesSelector(i, e) ? [i] : [] : ue.find.matches(e, ue.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, i) {
			for(var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ue(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
			return r
		},
		sibling: function(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ye = / jQuery\d+="(?:null|\d+)"/g,
		Xe = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
		Ke = /^\s+/,
		Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Je = /<([\w:]+)/,
		Qe = /<tbody/i,
		Ze = /<|&#?\w+;/,
		et = /<(?:script|style|link)/i,
		tt = /^(?:checkbox|radio)$/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		it = /^$|\/(?:java|ecma)script/i,
		rt = /^true\/(.*)/,
		ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		st = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		at = h(G),
		lt = at.appendChild(G.createElement("div"));
	st.optgroup = st.option, st.tbody = st.tfoot = st.colgroup = st.caption = st.thead, st.th = st.td, ue.fn.extend({
		text: function(e) {
			return ue.access(this, function(e) {
				return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for(var n, i = e ? ue.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ue.cleanData(w(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) {
				for(1 === e.nodeType && ue.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ue.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return ue.clone(this, e, t)
			})
		},
		html: function(e) {
			return ue.access(this, function(e) {
				var n = this[0] || {},
					i = 0,
					r = this.length;
				if(e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ye, "") : t;
				if("string" == typeof e && !et.test(e) && (ue.support.htmlSerialize || !Xe.test(e)) && (ue.support.leadingWhitespace || !Ke.test(e)) && !st[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ge, "<$1></$2>");
					try {
						for(; i < r; i++) n = this[i] || {}, 1 === n.nodeType && (ue.cleanData(w(n, !1)), n.innerHTML = e);
						n = 0
					} catch(o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = ue.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var i = e[t++],
					r = e[t++];
				r && (i && i.parentNode !== r && (i = this.nextSibling), ue(this).remove(), r.insertBefore(n, i))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = ie.apply([], e);
			var i, r, o, s, a, l, c = 0,
				u = this.length,
				d = this,
				f = u - 1,
				h = e[0],
				p = ue.isFunction(h);
			if(p || !(u <= 1 || "string" != typeof h || ue.support.checkClone) && nt.test(h)) return this.each(function(i) {
				var r = d.eq(i);
				p && (e[0] = h.call(this, i, r.html())), r.domManip(e, t, n)
			});
			if(u && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for(s = ue.map(w(l, "script"), m), o = s.length; c < u; c++) r = l, c !== f && (r = ue.clone(r, !0, !0), o && ue.merge(s, w(r, "script"))), t.call(this[c], r, c);
				if(o)
					for(a = s[s.length - 1].ownerDocument, ue.map(s, g), c = 0; c < o; c++) r = s[c], it.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(a, r) && (r.src ? ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
				l = i = null
			}
			return this
		}
	}), ue.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ue.fn[e] = function(e) {
			for(var n, i = 0, r = [], o = ue(e), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), ue(o[i])[t](n), re.apply(r, n.get());
			return this.pushStack(r)
		}
	}), ue.extend({
		clone: function(e, t, n) {
			var i, r, o, s, a, l = ue.contains(e.ownerDocument, e);
			if(ue.support.html5Clone || ue.isXMLDoc(e) || !Xe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
				for(i = w(o), a = w(e), s = 0; null != (r = a[s]); ++s) i[s] && b(r, i[s]);
			if(t)
				if(n)
					for(a = a || w(e), i = i || w(o), s = 0; null != (r = a[s]); s++) y(r, i[s]);
				else y(e, o);
			return i = w(o, "script"), i.length > 0 && v(i, !l && w(e, "script")), i = a = r = null, o
		},
		buildFragment: function(e, t, n, i) {
			for(var r, o, s, a, l, c, u, d = e.length, f = h(t), p = [], m = 0; m < d; m++)
				if(o = e[m], o || 0 === o)
					if("object" === ue.type(o)) ue.merge(p, o.nodeType ? [o] : o);
					else if(Ze.test(o)) {
				for(a = a || f.appendChild(t.createElement("div")), l = (Je.exec(o) || ["", ""])[1].toLowerCase(), u = st[l] || st._default, a.innerHTML = u[1] + o.replace(Ge, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
				if(!ue.support.leadingWhitespace && Ke.test(o) && p.push(t.createTextNode(Ke.exec(o)[0])), !ue.support.tbody)
					for(o = "table" !== l || Qe.test(o) ? "<table>" !== u[1] || Qe.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) ue.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
				for(ue.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = f.lastChild
			} else p.push(t.createTextNode(o));
			for(a && f.removeChild(a), ue.support.appendChecked || ue.grep(w(p, "input"), x), m = 0; o = p[m++];)
				if((!i || ue.inArray(o, i) === -1) && (s = ue.contains(o.ownerDocument, o), a = w(f.appendChild(o), "script"), s && v(a), n))
					for(r = 0; o = a[r++];) it.test(o.type || "") && n.push(o);
			return a = null, f
		},
		cleanData: function(e, t) {
			for(var n, i, r, o, s = 0, a = ue.expando, l = ue.cache, c = ue.support.deleteExpando, u = ue.event.special; null != (n = e[s]); s++)
				if((t || ue.acceptData(n)) && (r = n[a], o = r && l[r])) {
					if(o.events)
						for(i in o.events) u[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, o.handle);
					l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== X ? n.removeAttribute(a) : n[a] = null, te.push(r))
				}
		},
		_evalUrl: function(e) {
			return ue.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ue.fn.extend({
		wrapAll: function(e) {
			if(ue.isFunction(e)) return this.each(function(t) {
				ue(this).wrapAll(e.call(this, t))
			});
			if(this[0]) {
				var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for(var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return ue.isFunction(e) ? this.each(function(t) {
				ue(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = ue(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ue.isFunction(e);
			return this.each(function(n) {
				ue(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var ct, ut, dt, ft = /alpha\([^)]*\)/i,
		ht = /opacity\s*=\s*([^)]*)/,
		pt = /^(top|right|bottom|left)$/,
		mt = /^(none|table(?!-c[ea]).+)/,
		gt = /^margin/,
		vt = new RegExp("^(" + de + ")(.*)$", "i"),
		yt = new RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
		bt = new RegExp("^([+-])=(" + de + ")", "i"),
		wt = {
			BODY: "block"
		},
		xt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		_t = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Ct = ["Top", "Right", "Bottom", "Left"],
		kt = ["Webkit", "O", "Moz", "ms"];
	ue.fn.extend({
		css: function(e, n) {
			return ue.access(this, function(e, n, i) {
				var r, o, s = {},
					a = 0;
				if(ue.isArray(n)) {
					for(o = ut(e), r = n.length; a < r; a++) s[n[a]] = ue.css(e, n[a], !1, o);
					return s
				}
				return i !== t ? ue.style(e, n, i) : ue.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				C(this) ? ue(this).show() : ue(this).hide()
			})
		}
	}), ue.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = dt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, i, r) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, s, a, l = ue.camelCase(n),
					c = e.style;
				if(n = ue.cssProps[l] || (ue.cssProps[l] = _(c, l)), a = ue.cssHooks[n] || ue.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : c[n];
				if(s = typeof i, "string" === s && (o = bt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ue.cssNumber[l] || (i += "px"), ue.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
					c[n] = i
				} catch(u) {}
			}
		},
		css: function(e, n, i, r) {
			var o, s, a, l = ue.camelCase(n);
			return n = ue.cssProps[l] || (ue.cssProps[l] = _(e.style, l)), a = ue.cssHooks[n] || ue.cssHooks[l], a && "get" in a && (s = a.get(e, !0, i)), s === t && (s = dt(e, n, r)), "normal" === s && n in _t && (s = _t[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ue.isNumeric(o) ? o || 0 : s) : s
		}
	}), e.getComputedStyle ? (ut = function(t) {
		return e.getComputedStyle(t, null)
	}, dt = function(e, n, i) {
		var r, o, s, a = i || ut(e),
			l = a ? a.getPropertyValue(n) || a[n] : t,
			c = e.style;
		return a && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, n)), yt.test(l) && gt.test(n) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = o, c.maxWidth = s)), l
	}) : G.documentElement.currentStyle && (ut = function(e) {
		return e.currentStyle
	}, dt = function(e, n, i) {
		var r, o, s, a = i || ut(e),
			l = a ? a[n] : t,
			c = e.style;
		return null == l && c && c[n] && (l = c[n]), yt.test(l) && !pt.test(n) && (r = c.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = r, s && (o.left = s)), "" === l ? "auto" : l
	}), ue.each(["height", "width"], function(e, t) {
		ue.cssHooks[t] = {
			get: function(e, n, i) {
				if(n) return 0 === e.offsetWidth && mt.test(ue.css(e, "display")) ? ue.swap(e, xt, function() {
					return S(e, t, i)
				}) : S(e, t, i)
			},
			set: function(e, n, i) {
				var r = i && ut(e);
				return N(e, n, i ? E(e, t, i, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), ue.support.opacity || (ue.cssHooks.opacity = {
		get: function(e, t) {
			return ht.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				r = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ft.test(o) ? o.replace(ft, r) : o + " " + r)
		}
	}), ue(function() {
		ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
			get: function(e, t) {
				if(t) return ue.swap(e, {
					display: "inline-block"
				}, dt, [e, "marginRight"])
			}
		}), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, t) {
			ue.cssHooks[t] = {
				get: function(e, n) {
					if(n) return n = dt(e, t), yt.test(n) ? ue(e).position()[t] + "px" : n
				}
			}
		})
	}), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
	}, ue.expr.filters.visible = function(e) {
		return !ue.expr.filters.hidden(e)
	}), ue.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ue.cssHooks[e + t] = {
			expand: function(n) {
				for(var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, gt.test(e) || (ue.cssHooks[e + t].set = N)
	});
	var Nt = /%20/g,
		Et = /\[\]$/,
		St = /\r?\n/g,
		Tt = /^(?:submit|button|image|reset|file)$/i,
		Dt = /^(?:input|select|textarea|keygen)/i;
	ue.fn.extend({
		serialize: function() {
			return ue.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ue.prop(this, "elements");
				return e ? ue.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ue(this).is(":disabled") && Dt.test(this.nodeName) && !Tt.test(e) && (this.checked || !tt.test(e))
			}).map(function(e, t) {
				var n = ue(this).val();
				return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(St, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(St, "\r\n")
				}
			}).get()
		}
	}), ue.param = function(e, n) {
		var i, r = [],
			o = function(e, t) {
				t = ue.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if(n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
			o(this.name, this.value)
		});
		else
			for(i in e) A(i, e[i], n, o);
		return r.join("&").replace(Nt, "+")
	}, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ue.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ue.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var At, Ut, Mt = ue.now(),
		Ot = /\?/,
		It = /#.*$/,
		Lt = /([?&])_=[^&]*/,
		Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Bt = /^(?:GET|HEAD)$/,
		jt = /^\/\//,
		Ft = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Ht = ue.fn.load,
		qt = {},
		$t = {},
		zt = "*/".concat("*");
	try {
		Ut = K.href
	} catch(Wt) {
		Ut = G.createElement("a"), Ut.href = "", Ut = Ut.href
	}
	At = Ft.exec(Ut.toLowerCase()) || [], ue.fn.load = function(e, n, i) {
		if("string" != typeof e && Ht) return Ht.apply(this, arguments);
		var r, o, s, a = this,
			l = e.indexOf(" ");
		return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ue.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ue.ajax({
			url: e,
			type: s,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, a.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
		}).complete(i && function(e, t) {
			a.each(i, o || [e.responseText, t, e])
		}), this
	}, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ue.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ue.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ut,
			type: "GET",
			isLocal: Rt.test(At[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": zt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ue.parseJSON,
				"text xml": ue.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? O(O(e, ue.ajaxSettings), t) : O(ue.ajaxSettings, e)
		},
		ajaxPrefilter: U(qt),
		ajaxTransport: U($t),
		ajax: function(n, i) {
			function r(n, i, r, o) {
				var s, f, b, w, _, k = i;
				2 !== x && (x = 2, c && clearTimeout(c), d = t, l = o || "", C.readyState = n > 0 ? 4 : 0, s = n >= 200 && n < 300 || 304 === n, r && (w = I(h, C, r)), w = L(h, w, C, s), s ? (h.ifModified && (_ = C.getResponseHeader("Last-Modified"), _ && (ue.lastModified[a] = _), _ = C.getResponseHeader("etag"), _ && (ue.etag[a] = _)), 204 === n || "HEAD" === h.type ? k = "nocontent" : 304 === n ? k = "notmodified" : (k = w.state, f = w.data, b = w.error, s = !b)) : (b = k, !n && k || (k = "error", n < 0 && (n = 0))), C.status = n, C.statusText = (i || k) + "", s ? (e.qyerUtil && "function" == typeof e.qyerUtil.ajaxFillter && e.qyerUtil.ajaxFillter(f, k, C), g.resolveWith(p, [f, k, C])) : g.rejectWith(p, [C, k, b]), C.statusCode(y), y = t, u && m.trigger(s ? "ajaxSuccess" : "ajaxError", [C, h, s ? f : b]), v.fireWith(p, [C, k]), u && (m.trigger("ajaxComplete", [C, h]), --ue.active || ue.event.trigger("ajaxStop")))
			}
			"object" == typeof n && (i = n, n = t), i = i || {};
			var o, s, a, l, c, u, d, f, h = ue.ajaxSetup({}, i),
				p = h.context || h,
				m = h.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
				g = ue.Deferred(),
				v = ue.Callbacks("once memory"),
				y = h.statusCode || {},
				b = {},
				w = {},
				x = 0,
				_ = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(2 === x) {
							if(!f)
								for(f = {}; t = Pt.exec(l);) f[t[1].toLowerCase()] = t[2];
							t = f[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? l : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = w[n] = w[n] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(x < 2)
								for(t in e) y[t] = [y[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || _;
						return d && d.abort(t), r(0, t), this
					}
				};
			if(g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, h.url = ((n || h.url || Ut) + "").replace(It, "").replace(jt, At[1] + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = ue.trim(h.dataType || "*").toLowerCase().match(fe) || [""], null == h.crossDomain && (o = Ft.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === At[1] && o[2] === At[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ue.param(h.data, h.traditional)), M(qt, h, i, C), 2 === x) return C;
			u = h.global, u && 0 === ue.active++ && ue.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bt.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Ot.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Lt.test(a) ? a.replace(Lt, "$1_=" + Mt++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Mt++)), h.ifModified && (ue.lastModified[a] && C.setRequestHeader("If-Modified-Since", ue.lastModified[a]), ue.etag[a] && C.setRequestHeader("If-None-Match", ue.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
			for(s in h.headers) C.setRequestHeader(s, h.headers[s]);
			if(h.beforeSend && (h.beforeSend.call(p, C, h) === !1 || 2 === x)) return C.abort();
			_ = "abort";
			for(s in {
					success: 1,
					error: 1,
					complete: 1
				}) C[s](h[s]);
			if(d = M($t, h, i, C)) {
				C.readyState = 1, u && m.trigger("ajaxSend", [C, h]), h.async && h.timeout > 0 && (c = setTimeout(function() {
					C.abort("timeout")
				}, h.timeout));
				try {
					x = 1, d.send(b, r)
				} catch(k) {
					if(!(x < 2)) throw k;
					r(-1, k)
				}
			} else r(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return ue.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return ue.get(e, t, n, "script")
		}
	}), ue.each(["get", "post"], function(e, n) {
		ue[n] = function(e, i, r, o) {
			return ue.isFunction(i) && (o = o || r, r = i, i = t), ue.ajax({
				url: e,
				type: n,
				dataType: o,
				data: i,
				success: r
			})
		}
	}), ue.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ue.globalEval(e), e
			}
		}
	}), ue.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ue.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var n, i = G.head || ue("head")[0] || G.documentElement;
			return {
				send: function(t, r) {
					n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
					}, i.insertBefore(n, i.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Vt = [],
		Yt = /(=)\?(?=&|$)|\?\?/;
	ue.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Vt.pop() || ue.expando + "_" + Mt++;
			return this[e] = !0, e
		}
	}), ue.ajaxPrefilter("json jsonp", function(n, i, r) {
		var o, s, a, l = n.jsonp !== !1 && (Yt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(n.data) && "data");
		if(l || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yt, "$1" + o) : n.jsonp !== !1 && (n.url += (Ot.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return a || ue.error(o + " was not called"), a[0]
		}, n.dataTypes[0] = "json", s = e[o], e[o] = function() {
			a = arguments
		}, r.always(function() {
			e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, Vt.push(o)), a && ue.isFunction(s) && s(a[0]), a = s = t
		}), "script"
	});
	var Xt, Kt, Gt = 0,
		Jt = e.ActiveXObject && function() {
			var e;
			for(e in Xt) Xt[e](t, !0)
		};
	ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && P() || R()
	} : P, Kt = ue.ajaxSettings.xhr(), ue.support.cors = !!Kt && "withCredentials" in Kt, Kt = ue.support.ajax = !!Kt, Kt && ue.ajaxTransport(function(n) {
		if(!n.crossDomain || ue.support.cors) {
			var i;
			return {
				send: function(r, o) {
					var s, a, l = n.xhr();
					if(n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for(a in n.xhrFields) l[a] = n.xhrFields[a];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for(a in r) l.setRequestHeader(a, r[a])
					} catch(c) {}
					l.send(n.hasContent && n.data || null), i = function(e, r) {
						var a, c, u, d;
						try {
							if(i && (r || 4 === l.readyState))
								if(i = t, s && (l.onreadystatechange = ue.noop, Jt && delete Xt[s]), r) 4 !== l.readyState && l.abort();
								else {
									d = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
									try {
										u = l.statusText
									} catch(f) {
										u = ""
									}
									a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
								}
						} catch(h) {
							r || o(-1, h)
						}
						d && o(a, u, d, c)
					}, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Gt, Jt && (Xt || (Xt = {}, ue(e).unload(Jt)), Xt[s] = i), l.onreadystatechange = i) : i()
				},
				abort: function() {
					i && i(t, !0)
				}
			}
		}
	});
	var Qt, Zt, en = /^(?:toggle|show|hide)$/,
		tn = new RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
		nn = /queueHooks$/,
		rn = [q],
		on = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					r = tn.exec(t),
					o = r && r[3] || (ue.cssNumber[e] ? "" : "px"),
					s = (ue.cssNumber[e] || "px" !== o && +i) && tn.exec(ue.css(n.elem, e)),
					a = 1,
					l = 20;
				if(s && s[3] !== o) {
					o = o || s[3], r = r || [], s = +i || 1;
					do a = a || ".5", s /= a, ue.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};
	ue.Animation = ue.extend(F, {
		tweener: function(e, t) {
			ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for(var n, i = 0, r = e.length; i < r; i++) n = e[i], on[n] = on[n] || [], on[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? rn.unshift(e) : rn.push(e)
		}
	}), ue.Tween = $, $.prototype = {
		constructor: $,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ue.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = $.propHooks[this.prop];
			return e && e.get ? e.get(this) : $.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = $.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
		}
	}, $.prototype.init.prototype = $.prototype, $.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ue.each(["toggle", "show", "hide"], function(e, t) {
		var n = ue.fn[t];
		ue.fn[t] = function(e, i, r) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
		}
	}), ue.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(C).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(e, t, n, i) {
			var r = ue.isEmptyObject(e),
				o = ue.speed(t, n, i),
				s = function() {
					var t = F(this, ue.extend({}, e), o);
					(r || ue._data(this, "finish")) && t.stop(!0)
				};
			return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(e, n, i) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(i)
			};
			return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = ue.timers,
					s = ue._data(this);
				if(n) s[n] && s[n].stop && r(s[n]);
				else
					for(n in s) s[n] && s[n].stop && nn.test(n) && r(s[n]);
				for(n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
				!t && i || ue.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = ue._data(this),
					i = n[e + "queue"],
					r = n[e + "queueHooks"],
					o = ue.timers,
					s = i ? i.length : 0;
				for(n.finish = !0, ue.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for(t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete n.finish
			})
		}
	}), ue.each({
		slideDown: z("show"),
		slideUp: z("hide"),
		slideToggle: z("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		ue.fn[e] = function(e, n, i) {
			return this.animate(t, e, n, i)
		}
	}), ue.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? ue.extend({}, e) : {
			complete: n || !n && t || ue.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ue.isFunction(t) && t
		};
		return i.duration = ue.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ue.fx.speeds ? ue.fx.speeds[i.duration] : ue.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			ue.isFunction(i.old) && i.old.call(this), i.queue && ue.dequeue(this, i.queue)
		}, i
	}, ue.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ue.timers = [], ue.fx = $.prototype.init, ue.fx.tick = function() {
		var e, n = ue.timers,
			i = 0;
		for(Qt = ue.now(); i < n.length; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
		n.length || ue.fx.stop(), Qt = t
	}, ue.fx.timer = function(e) {
		e() && ue.timers.push(e) && ue.fx.start()
	}, ue.fx.interval = 13, ue.fx.start = function() {
		Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
	}, ue.fx.stop = function() {
		clearInterval(Zt), Zt = null
	}, ue.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
		return ue.grep(ue.timers, function(t) {
			return e === t.elem
		}).length
	}), ue.fn.offset = function(e) {
		if(arguments.length) return e === t ? this : this.each(function(t) {
			ue.offset.setOffset(this, e, t)
		});
		var n, i, r = {
				top: 0,
				left: 0
			},
			o = this[0],
			s = o && o.ownerDocument;
		if(s) return n = s.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (r = o.getBoundingClientRect()), i = W(s), {
			top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : r
	}, ue.offset = {
		setOffset: function(e, t, n) {
			var i = ue.css(e, "position");
			"static" === i && (e.style.position = "relative");
			var r, o, s = ue(e),
				a = s.offset(),
				l = ue.css(e, "top"),
				c = ue.css(e, "left"),
				u = ("absolute" === i || "fixed" === i) && ue.inArray("auto", [l, c]) > -1,
				d = {},
				f = {};
			u ? (f = s.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), ue.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : s.css(d)
		}
	}, ue.fn.extend({
		position: function() {
			if(this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === ue.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ue.css(i, "marginTop", !0),
					left: t.left - n.left - ue.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var e = this.offsetParent || J; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
				return e || J
			})
		}
	}), ue.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var i = /Y/.test(n);
		ue.fn[e] = function(r) {
			return ue.access(this, function(e, r, o) {
				var s = W(e);
				return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(i ? ue(s).scrollLeft() : o, i ? o : ue(s).scrollTop()) : e[r] = o)
			}, e, r, arguments.length, null)
		}
	}), ue.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		ue.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(i, r) {
			ue.fn[r] = function(r, o) {
				var s = arguments.length && (i || "boolean" != typeof r),
					a = i || (r === !0 || o === !0 ? "margin" : "border");
				return ue.access(this, function(n, i, r) {
					var o;
					return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ue.css(n, i, a) : ue.style(n, i, r, a)
				}, n, s ? r : t, s, null)
			}
		})
	}), ue.fn.size = function() {
		return this.length
	}, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ue
	}))
}(window);
var requirejs, require, define;
! function(global) {
	function isFunction(e) {
		return "[object Function]" === ostring.call(e)
	}

	function isArray(e) {
		return "[object Array]" === ostring.call(e)
	}

	function each(e, t) {
		if(e) {
			var n;
			for(n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
		}
	}

	function eachReverse(e, t) {
		if(e) {
			var n;
			for(n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
		}
	}

	function hasProp(e, t) {
		return hasOwn.call(e, t)
	}

	function getOwn(e, t) {
		return hasProp(e, t) && e[t]
	}

	function eachProp(e, t) {
		var n;
		for(n in e)
			if(hasProp(e, n) && t(e[n], n)) break
	}

	function mixin(e, t, n, i) {
		return t && eachProp(t, function(t, r) {
			!n && hasProp(e, r) || (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
		}), e
	}

	function bind(e, t) {
		return function() {
			return t.apply(e, arguments)
		}
	}

	function scripts() {
		return document.getElementsByTagName("script")
	}

	function defaultOnError(e) {
		throw e
	}

	function getGlobal(e) {
		if(!e) return e;
		var t = global;
		return each(e.split("."), function(e) {
			t = t[e]
		}), t
	}

	function makeError(e, t, n, i) {
		var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
		return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
	}

	function newContext(e) {
		function t(e) {
			var t, n;
			for(t = 0; t < e.length; t++)
				if(n = e[t], "." === n) e.splice(t, 1), t -= 1;
				else if(".." === n) {
				if(0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
				t > 0 && (e.splice(t - 1, 2), t -= 2)
			}
		}

		function n(e, n, i) {
			var r, o, s, a, l, c, u, d, f, h, p, m, g = n && n.split("/"),
				v = C.map,
				y = v && v["*"];
			if(e && (e = e.split("/"), u = e.length - 1, C.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), i && v && (g || y)) {
				s = e.split("/");
				e: for(a = s.length; a > 0; a -= 1) {
					if(c = s.slice(0, a).join("/"), g)
						for(l = g.length; l > 0; l -= 1)
							if(o = getOwn(v, g.slice(0, l).join("/")), o && (o = getOwn(o, c))) {
								d = o, f = a;
								break e
							}!h && y && getOwn(y, c) && (h = getOwn(y, c), p = a)
				}!d && h && (d = h, f = p), d && (s.splice(0, f, d), e = s.join("/"))
			}
			return r = getOwn(C.pkgs, e),
				r ? r : e
		}

		function i(e) {
			isBrowser && each(scripts(), function(t) {
				if(t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === w.contextName) return t.parentNode.removeChild(t), !0
			})
		}

		function r(e) {
			var t = getOwn(C.paths, e);
			if(t && isArray(t) && t.length > 1) return t.shift(), w.require.undef(e), w.makeRequire(null, {
				skipMap: !0
			})([e]), !0
		}

		function o(e) {
			var t, n = e ? e.indexOf("!") : -1;
			return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
		}

		function s(e, t, i, r) {
			var s, a, l, c, u = null,
				d = t ? t.name : null,
				f = e,
				h = !0,
				p = "";
			return e || (h = !1, e = "_@r" + (U += 1)), c = o(e), u = c[0], e = c[1], u && (u = n(u, d, r), a = getOwn(T, u)), e && (u ? p = a && a.normalize ? a.normalize(e, function(e) {
				return n(e, d, r)
			}) : e.indexOf("!") === -1 ? n(e, d, r) : e : (p = n(e, d, r), c = o(p), u = c[0], p = c[1], i = !0, s = w.nameToUrl(p))), l = !u || a || i ? "" : "_unnormalized" + (M += 1), {
				prefix: u,
				name: p,
				parentMap: t,
				unnormalized: !!l,
				url: s,
				originalName: f,
				isDefine: h,
				id: (u ? u + "!" + p : p) + l
			}
		}

		function a(e) {
			var t = e.id,
				n = getOwn(k, t);
			return n || (n = k[t] = new w.Module(e)), n
		}

		function l(e, t, n) {
			var i = e.id,
				r = getOwn(k, i);
			!hasProp(T, i) || r && !r.defineEmitComplete ? (r = a(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(T[i])
		}

		function c(e, t) {
			var n = e.requireModules,
				i = !1;
			t ? t(e) : (each(n, function(t) {
				var n = getOwn(k, t);
				n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
			}), i || req.onError(e))
		}

		function u() {
			globalDefQueue.length && (apsp.apply(S, [S.length, 0].concat(globalDefQueue)), globalDefQueue = [])
		}

		function d(e) {
			delete k[e], delete N[e]
		}

		function f(e, t, n) {
			var i = e.map.id;
			e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function(i, r) {
				var o = i.id,
					s = getOwn(k, o);
				!s || e.depMatched[r] || n[o] || (getOwn(t, o) ? (e.defineDep(r, T[o]), e.check()) : f(s, t, n))
			}), n[i] = !0)
		}

		function h() {
			var e, t, n = 1e3 * C.waitSeconds,
				o = n && w.startTime + n < (new Date).getTime(),
				s = [],
				a = [],
				l = !1,
				u = !0;
			if(!y) {
				if(y = !0, eachProp(N, function(e) {
						var n = e.map,
							c = n.id;
						if(e.enabled && (n.isDefine || a.push(e), !e.error))
							if(!e.inited && o) r(c) ? (t = !0, l = !0) : (s.push(c), i(c));
							else if(!e.inited && e.fetched && n.isDefine && (l = !0, !n.prefix)) return u = !1
					}), o && s.length) return e = makeError("timeout", "Load timeout for modules: " + s, null, s), e.contextName = w.contextName, c(e);
				u && each(a, function(e) {
					f(e, {}, {})
				}), o && !t || !l || !isBrowser && !isWebWorker || _ || (_ = setTimeout(function() {
					_ = 0, h()
				}, 50)), y = !1
			}
		}

		function p(e) {
			hasProp(T, e[0]) || a(s(e[0], null, !0)).init(e[1], e[2])
		}

		function m(e, t, n, i) {
			e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
		}

		function g(e) {
			var t = e.currentTarget || e.srcElement;
			return m(t, w.onScriptLoad, "load", "onreadystatechange"), m(t, w.onScriptError, "error"), {
				node: t,
				id: t && t.getAttribute("data-requiremodule")
			}
		}

		function v() {
			var e;
			for(u(); S.length;) {
				if(e = S.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
				p(e)
			}
		}
		var y, b, w, x, _, C = {
				waitSeconds: 7,
				baseUrl: "./",
				paths: {},
				bundles: {},
				pkgs: {},
				shim: {},
				config: {}
			},
			k = {},
			N = {},
			E = {},
			S = [],
			T = {},
			D = {},
			A = {},
			U = 1,
			M = 1;
		return x = {
			require: function(e) {
				return e.require ? e.require : e.require = w.makeRequire(e.map)
			},
			exports: function(e) {
				if(e.usingExports = !0, e.map.isDefine) return e.exports ? T[e.map.id] = e.exports : e.exports = T[e.map.id] = {}
			},
			module: function(e) {
				return e.module ? e.module : e.module = {
					id: e.map.id,
					uri: e.map.url,
					config: function() {
						return getOwn(C.config, e.map.id) || {}
					},
					exports: e.exports || (e.exports = {})
				}
			}
		}, b = function(e) {
			this.events = getOwn(E, e.id) || {}, this.map = e, this.shim = getOwn(C.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
		}, b.prototype = {
			init: function(e, t, n, i) {
				i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
					this.emit("error", e)
				})), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
			},
			defineDep: function(e, t) {
				this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
			},
			fetch: function() {
				if(!this.fetched) {
					this.fetched = !0, w.startTime = (new Date).getTime();
					var e = this.map;
					return this.shim ? void w.makeRequire(this.map, {
						enableBuildCallback: !0
					})(this.shim.deps || [], bind(this, function() {
						return e.prefix ? this.callPlugin() : this.load()
					})) : e.prefix ? this.callPlugin() : this.load()
				}
			},
			load: function() {
				var e = this.map.url;
				D[e] || (D[e] = !0, w.load(this.map.id, e))
			},
			check: function() {
				if(this.enabled && !this.enabling) {
					var e, t, n = this.map.id,
						i = this.depExports,
						r = this.exports,
						o = this.factory;
					if(this.inited) {
						if(this.error) this.emit("error", this.error);
						else if(!this.defining) {
							if(this.defining = !0, this.depCount < 1 && !this.defined) {
								if(isFunction(o)) {
									if(this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
										r = w.execCb(n, o, i, r)
									} catch(s) {
										e = s
									} else r = w.execCb(n, o, i, r);
									if(this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
								} else r = o;
								this.exports = r, this.map.isDefine && !this.ignore && (T[n] = r, req.onResourceLoad && req.onResourceLoad(w, this.map, this.depMaps)), d(n), this.defined = !0
							}
							this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
						}
					} else this.fetch()
				}
			},
			callPlugin: function() {
				var e = this.map,
					t = e.id,
					i = s(e.prefix);
				this.depMaps.push(i), l(i, "defined", bind(this, function(i) {
					var r, o, u, f = getOwn(A, this.map.id),
						h = this.map.name,
						p = this.map.parentMap ? this.map.parentMap.name : null,
						m = w.makeRequire(e.parentMap, {
							enableBuildCallback: !0
						});
					return this.map.unnormalized ? (i.normalize && (h = i.normalize(h, function(e) {
						return n(e, p, !0)
					}) || ""), o = s(e.prefix + "!" + h, this.map.parentMap), l(o, "defined", bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0,
							ignore: !0
						})
					})), u = getOwn(k, o.id), void(u && (this.depMaps.push(o), this.events.error && u.on("error", bind(this, function(e) {
						this.emit("error", e)
					})), u.enable()))) : f ? (this.map.url = w.nameToUrl(f), void this.load()) : (r = bind(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0
						})
					}), r.error = bind(this, function(e) {
						this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function(e) {
							0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
						}), c(e)
					}), r.fromText = bind(this, function(n, i) {
						var o = e.name,
							l = s(o),
							u = useInteractive;
						i && (n = i), u && (useInteractive = !1), a(l), hasProp(C.config, t) && (C.config[o] = C.config[t]);
						try {
							req.exec(n)
						} catch(d) {
							return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
						}
						u && (useInteractive = !0), this.depMaps.push(l), w.completeLoad(o), m([o], r)
					}), void i.load(e.name, m, r, C))
				})), w.enable(i, this), this.pluginMaps[i.id] = i
			},
			enable: function() {
				N[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
					var n, i, r;
					if("string" == typeof e) {
						if(e = s(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(x, e.id)) return void(this.depExports[t] = r(this));
						this.depCount += 1, l(e, "defined", bind(this, function(e) {
							this.undefed || (this.defineDep(t, e), this.check())
						})), this.errback ? l(e, "error", bind(this, this.errback)) : this.events.error && l(e, "error", bind(this, function(e) {
							this.emit("error", e)
						}))
					}
					n = e.id, i = k[n], hasProp(x, n) || !i || i.enabled || w.enable(e, this)
				})), eachProp(this.pluginMaps, bind(this, function(e) {
					var t = getOwn(k, e.id);
					t && !t.enabled && w.enable(e, this)
				})), this.enabling = !1, this.check()
			},
			on: function(e, t) {
				var n = this.events[e];
				n || (n = this.events[e] = []), n.push(t)
			},
			emit: function(e, t) {
				each(this.events[e], function(e) {
					e(t)
				}), "error" === e && delete this.events[e]
			}
		}, w = {
			config: C,
			contextName: e,
			registry: k,
			defined: T,
			urlFetched: D,
			defQueue: S,
			Module: b,
			makeModuleMap: s,
			nextTick: req.nextTick,
			onError: c,
			configure: function(e) {
				e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
				var t = C.shim,
					n = {
						paths: !0,
						bundles: !0,
						config: !0,
						map: !0
					};
				eachProp(e, function(e, t) {
					n[t] ? (C[t] || (C[t] = {}), mixin(C[t], e, !0, !0)) : C[t] = e
				}), e.bundles && eachProp(e.bundles, function(e, t) {
					each(e, function(e) {
						e !== t && (A[e] = t)
					})
				}), e.shim && (eachProp(e.shim, function(e, n) {
					isArray(e) && (e = {
						deps: e
					}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = w.makeShimExports(e)), t[n] = e
				}), C.shim = t), e.packages && each(e.packages, function(e) {
					var t, n;
					e = "string" == typeof e ? {
						name: e
					} : e, n = e.name, t = e.location, t && (C.paths[n] = e.location), C.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
				}), eachProp(k, function(e, t) {
					e.inited || e.map.unnormalized || (e.map = s(t, null, !0))
				}), (e.deps || e.callback) && w.require(e.deps || [], e.callback)
			},
			makeShimExports: function(e) {
				function t() {
					var t;
					return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
				}
				return t
			},
			makeRequire: function(t, r) {
				function o(n, i, l) {
					var u, d, f;
					return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0), "string" == typeof n ? isFunction(i) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(x, n) ? x[n](k[t.id]) : req.get ? req.get(w, n, t, o) : (d = s(n, t, !1, !0), u = d.id, hasProp(T, u) ? T[u] : c(makeError("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), w.nextTick(function() {
						v(), f = a(s(null, t)), f.skipMap = r.skipMap, f.init(n, i, l, {
							enabled: !0
						}), h()
					}), o)
				}
				return r = r || {}, mixin(o, {
					isBrowser: isBrowser,
					toUrl: function(e) {
						var i, r = e.lastIndexOf("."),
							o = e.split("/")[0],
							s = "." === o || ".." === o;
						return r !== -1 && (!s || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)), w.nameToUrl(n(e, t && t.id, !0), i, !0)
					},
					defined: function(e) {
						return hasProp(T, s(e, t, !1, !0).id)
					},
					specified: function(e) {
						return e = s(e, t, !1, !0).id, hasProp(T, e) || hasProp(k, e)
					}
				}), t || (o.undef = function(e) {
					u();
					var n = s(e, t, !0),
						r = getOwn(k, e);
					r.undefed = !0, i(e), delete T[e], delete D[n.url], delete E[e], eachReverse(S, function(t, n) {
						t[0] === e && S.splice(n, 1)
					}), r && (r.events.defined && (E[e] = r.events), d(e))
				}), o
			},
			enable: function(e) {
				var t = getOwn(k, e.id);
				t && a(e).enable()
			},
			completeLoad: function(e) {
				var t, n, i, o = getOwn(C.shim, e) || {},
					s = o.exports;
				for(u(); S.length;) {
					if(n = S.shift(), null === n[0]) {
						if(n[0] = e, t) break;
						t = !0
					} else n[0] === e && (t = !0);
					p(n)
				}
				if(i = getOwn(k, e), !t && !hasProp(T, e) && i && !i.inited) {
					if(!(!C.enforceDefine || s && getGlobal(s))) return r(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
					p([e, o.deps || [], o.exportsFn])
				}
				h()
			},
			nameToUrl: function(e, t, n) {
				var i, r, o, s, a, l, c, u = getOwn(C.pkgs, e);
				if(u && (e = u), c = getOwn(A, e)) return w.nameToUrl(c, t, n);
				if(req.jsExtRegExp.test(e)) a = e + (t || "");
				else {
					for(i = C.paths, r = e.split("/"), o = r.length; o > 0; o -= 1)
						if(s = r.slice(0, o).join("/"), l = getOwn(i, s)) {
							isArray(l) && (l = l[0]), r.splice(0, o, l);
							break
						}
					a = r.join("/"), a += t || (/^data\:|\?/.test(a) || n ? "" : ".js"), a = ("/" === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : C.baseUrl) + a
				}
				return C.urlArgs ? a + ((a.indexOf("?") === -1 ? "?" : "&") + C.urlArgs) : a
			},
			load: function(e, t) {
				req.load(w, e, t)
			},
			execCb: function(e, t, n, i) {
				return t.apply(i, n)
			},
			onScriptLoad: function(e) {
				if("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
					interactiveScript = null;
					var t = g(e);
					w.completeLoad(t.id)
				}
			},
			onScriptError: function(e) {
				var t = g(e);
				if(!r(t.id)) return c(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
			}
		}, w.require = w.makeRequire(), w
	}

	function getInteractiveScript() {
		return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
			if("interactive" === e.readyState) return interactiveScript = e
		}), interactiveScript)
	}
	var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.18",
		commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
		cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		jsSuffixRegExp = /\.js$/,
		currDirRegExp = /^\.\//,
		op = Object.prototype,
		ostring = op.toString,
		hasOwn = op.hasOwnProperty,
		ap = Array.prototype,
		apsp = ap.splice,
		isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
		isWebWorker = !isBrowser && "undefined" != typeof importScripts,
		readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		defContextName = "_",
		isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		contexts = {},
		cfg = {},
		globalDefQueue = [],
		useInteractive = !1;
	if("undefined" == typeof define) {
		if("undefined" != typeof requirejs) {
			if(isFunction(requirejs)) return;
			cfg = requirejs, requirejs = void 0
		}
		"undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, i) {
			var r, o, s = defContextName;
			return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (s = o.context), r = getOwn(contexts, s), r || (r = contexts[s] = req.s.newContext(s)), o && r.configure(o), r.require(e, t, n)
		}, req.config = function(e) {
			return req(e)
		}, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
			setTimeout(e, 4)
		} : function(e) {
			e()
		}, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
			contexts: contexts,
			newContext: newContext
		}, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
			req[e] = function() {
				var t = contexts[defContextName];
				return t.require[e].apply(t, arguments)
			}
		}), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
			var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
		}, req.load = function(e, t, n) {
			var i, r = e && e.config || {};
			if(isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
			if(isWebWorker) try {
				importScripts(n), e.completeLoad(t)
			} catch(o) {
				e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
			}
		}, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
			if(head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
		}), define = function(e, t, n) {
			var i, r;
			"string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
				t.push(n)
			}), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])), (r ? r.defQueue : globalDefQueue).push([e, t, n])
		}, define.amd = {
			jQuery: !0
		}, req.exec = function(text) {
			return eval(text)
		}, req(cfg)
	}
}(this), requirejs.config({
		baseUrl: "//common1.qyerstatic.com/bbs/",
		urlArgs: "v=" + window.__qRequire__.version,
		map: {
			"*": {
				css: "common/models/basic/js/require-css",
				text: "common/models/basic/js/text"
			}
		},
		paths: {
			web_ct_logindialog: "bower_components/web_ct_logindialog/loginDialog",
			web_ct_logindialog_loginFormValid: "bower_components/web_ct_logindialog/loginFormValid",
			web_ct_antispam: "bower_components/web_ct_antispam/antiSpam",
			web_old_popup: "bower_components/web_old_popup/popup",
			web_old_select: "bower_components/web_old_select/select",
			web_old_tip: "bower_components/web_old_tip/tip",
			web_old_popup2: "bower_components/web_old_popup2/popup2",
			web_old_loading: "bower_components/web_old_loading/loading",
			web_ct_submitBeforeValidCode: "bower_components/web_ct_submitBeforeValidCode/submitBeforeValidCode",
			web_lib_jquerymousewheel: "bower_components/web_lib_jquerymousewheel/jquery.mousewheel",
			web_lib_jquerylazyload: "bower_components/web_lib_jquerylazyload/jquery.lazyload",
			web_old_tooltips: "bower_components/web_old_tooltips/tooltip",
			web_old_slidconfirm: "bower_components/web_old_slidconfirm/slidconfirm",
			web_old_confirm: "bower_components/web_old_confirm/confirm",
			web_old_share: "bower_components/web_old_share/share",
			web_old_textarea: "bower_components/web_old_textarea/textArea",
			web_old_inputautocomplete: "bower_components/web_old_inputautocomplete/inputAutocomplete",
			web_lib_template: "bower_components/web_lib_template/template",
			web_qui_controlbase: "bower_components/web_qui_controlbase/controlBase",
			web_qui_quiupload: "bower_components/web_qui_quiupload/QuiUpload",
			web_qui_quiupload_qiniu: "bower_components/web_qui_quiupload/qiniu",
			plupload: "bower_components/web_qui_quiupload/lib/plupload/plupload.full.min",
			web_old_datepicker: "bower_components/web_old_datepicker/datepicker",
			web_lib_jqueryuicore: "bower_components/web_lib_jqueryuicore/jquery.ui.core.min",
			web_ct_addlisttoplan: "bower_components/web_ct_addlisttoplan/addListToPlan",
			web_old_inputvalidation: "bower_components/web_old_inputvalidation/inputValidation",
			web_ct_openAsk: "bower_components/web_ct_openAsk/openAsk",
			web_ct_uploadpopup: "bower_components/web_ct_uploadpopup/uploadPopup"
		}
	}),
	function() {
		var e = this,
			t = e._,
			n = {},
			i = Array.prototype,
			r = Object.prototype,
			o = Function.prototype,
			s = i.push,
			a = i.slice,
			l = i.concat,
			c = r.toString,
			u = r.hasOwnProperty,
			d = i.forEach,
			f = i.map,
			h = i.reduce,
			p = i.reduceRight,
			m = i.filter,
			g = i.every,
			v = i.some,
			y = i.indexOf,
			b = i.lastIndexOf,
			w = Array.isArray,
			x = Object.keys,
			_ = o.bind,
			C = function(e) {
				return e instanceof C ? e : this instanceof C ? void(this._wrapped = e) : new C(e)
			};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.5.2";
		var k = C.each = C.forEach = function(e, t, i) {
			if(null != e)
				if(d && e.forEach === d) e.forEach(t, i);
				else if(e.length === +e.length) {
				for(var r = 0, o = e.length; o > r; r++)
					if(t.call(i, e[r], r, e) === n) return
			} else
				for(var s = C.keys(e), r = 0, o = s.length; o > r; r++)
					if(t.call(i, e[s[r]], s[r], e) === n) return
		};
		C.map = C.collect = function(e, t, n) {
			var i = [];
			return null == e ? i : f && e.map === f ? e.map(t, n) : (k(e, function(e, r, o) {
				i.push(t.call(n, e, r, o))
			}), i)
		};
		var N = "Reduce of empty array with no initial value";
		C.reduce = C.foldl = C.inject = function(e, t, n, i) {
			var r = arguments.length > 2;
			if(null == e && (e = []), h && e.reduce === h) return i && (t = C.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
			if(k(e, function(e, o, s) {
					r ? n = t.call(i, n, e, o, s) : (n = e, r = !0)
				}), !r) throw new TypeError(N);
			return n
		}, C.reduceRight = C.foldr = function(e, t, n, i) {
			var r = arguments.length > 2;
			if(null == e && (e = []), p && e.reduceRight === p) return i && (t = C.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
			var o = e.length;
			if(o !== +o) {
				var s = C.keys(e);
				o = s.length
			}
			if(k(e, function(a, l, c) {
					l = s ? s[--o] : --o, r ? n = t.call(i, n, e[l], l, c) : (n = e[l], r = !0)
				}), !r) throw new TypeError(N);
			return n
		}, C.find = C.detect = function(e, t, n) {
			var i;
			return E(e, function(e, r, o) {
				return t.call(n, e, r, o) ? (i = e, !0) : void 0
			}), i
		}, C.filter = C.select = function(e, t, n) {
			var i = [];
			return null == e ? i : m && e.filter === m ? e.filter(t, n) : (k(e, function(e, r, o) {
				t.call(n, e, r, o) && i.push(e)
			}), i)
		}, C.reject = function(e, t, n) {
			return C.filter(e, function(e, i, r) {
				return !t.call(n, e, i, r)
			}, n)
		}, C.every = C.all = function(e, t, i) {
			t || (t = C.identity);
			var r = !0;
			return null == e ? r : g && e.every === g ? e.every(t, i) : (k(e, function(e, o, s) {
				return(r = r && t.call(i, e, o, s)) ? void 0 : n
			}), !!r)
		};
		var E = C.some = C.any = function(e, t, i) {
			t || (t = C.identity);
			var r = !1;
			return null == e ? r : v && e.some === v ? e.some(t, i) : (k(e, function(e, o, s) {
				return r || (r = t.call(i, e, o, s)) ? n : void 0
			}), !!r)
		};
		C.contains = C.include = function(e, t) {
			return null != e && (y && e.indexOf === y ? e.indexOf(t) != -1 : E(e, function(e) {
				return e === t
			}))
		}, C.invoke = function(e, t) {
			var n = a.call(arguments, 2),
				i = C.isFunction(t);
			return C.map(e, function(e) {
				return(i ? t : e[t]).apply(e, n)
			})
		}, C.pluck = function(e, t) {
			return C.map(e, function(e) {
				return e[t]
			})
		}, C.where = function(e, t, n) {
			return C.isEmpty(t) ? n ? void 0 : [] : C[n ? "find" : "filter"](e, function(e) {
				for(var n in t)
					if(t[n] !== e[n]) return !1;
				return !0
			})
		}, C.findWhere = function(e, t) {
			return C.where(e, t, !0)
		}, C.max = function(e, t, n) {
			if(!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
			if(!t && C.isEmpty(e)) return -1 / 0;
			var i = {
				computed: -1 / 0,
				value: -1 / 0
			};
			return k(e, function(e, r, o) {
				var s = t ? t.call(n, e, r, o) : e;
				s > i.computed && (i = {
					value: e,
					computed: s
				})
			}), i.value
		}, C.min = function(e, t, n) {
			if(!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
			if(!t && C.isEmpty(e)) return 1 / 0;
			var i = {
				computed: 1 / 0,
				value: 1 / 0
			};
			return k(e, function(e, r, o) {
				var s = t ? t.call(n, e, r, o) : e;
				s < i.computed && (i = {
					value: e,
					computed: s
				})
			}), i.value
		}, C.shuffle = function(e) {
			var t, n = 0,
				i = [];
			return k(e, function(e) {
				t = C.random(n++), i[n - 1] = i[t], i[t] = e
			}), i
		}, C.sample = function(e, t, n) {
			return arguments.length < 2 || n ? e[C.random(e.length - 1)] : C.shuffle(e).slice(0, Math.max(0, t))
		};
		var S = function(e) {
			return C.isFunction(e) ? e : function(t) {
				return t[e]
			}
		};
		C.sortBy = function(e, t, n) {
			var i = S(t);
			return C.pluck(C.map(e, function(e, t, r) {
				return {
					value: e,
					index: t,
					criteria: i.call(n, e, t, r)
				}
			}).sort(function(e, t) {
				var n = e.criteria,
					i = t.criteria;
				if(n !== i) {
					if(n > i || void 0 === n) return 1;
					if(i > n || void 0 === i) return -1
				}
				return e.index - t.index
			}), "value")
		};
		var T = function(e) {
			return function(t, n, i) {
				var r = {},
					o = null == n ? C.identity : S(n);
				return k(t, function(n, s) {
					var a = o.call(i, n, s, t);
					e(r, a, n)
				}), r
			}
		};
		C.groupBy = T(function(e, t, n) {
			(C.has(e, t) ? e[t] : e[t] = []).push(n)
		}), C.indexBy = T(function(e, t, n) {
			e[t] = n
		}), C.countBy = T(function(e, t) {
			C.has(e, t) ? e[t]++ : e[t] = 1
		}), C.sortedIndex = function(e, t, n, i) {
			n = null == n ? C.identity : S(n);
			for(var r = n.call(i, t), o = 0, s = e.length; s > o;) {
				var a = o + s >>> 1;
				n.call(i, e[a]) < r ? o = a + 1 : s = a
			}
			return o
		}, C.toArray = function(e) {
			return e ? C.isArray(e) ? a.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
		}, C.size = function(e) {
			return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
		}, C.first = C.head = C.take = function(e, t, n) {
			return null == e ? void 0 : null == t || n ? e[0] : a.call(e, 0, t)
		}, C.initial = function(e, t, n) {
			return a.call(e, 0, e.length - (null == t || n ? 1 : t))
		}, C.last = function(e, t, n) {
			return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
		}, C.rest = C.tail = C.drop = function(e, t, n) {
			return a.call(e, null == t || n ? 1 : t)
		}, C.compact = function(e) {
			return C.filter(e, C.identity)
		};
		var D = function(e, t, n) {
			return t && C.every(e, C.isArray) ? l.apply(n, e) : (k(e, function(e) {
				C.isArray(e) || C.isArguments(e) ? t ? s.apply(n, e) : D(e, t, n) : n.push(e)
			}), n)
		};
		C.flatten = function(e, t) {
			return D(e, t, [])
		}, C.without = function(e) {
			return C.difference(e, a.call(arguments, 1))
		}, C.uniq = C.unique = function(e, t, n, i) {
			C.isFunction(t) && (i = n, n = t, t = !1);
			var r = n ? C.map(e, n, i) : e,
				o = [],
				s = [];
			return k(r, function(n, i) {
				(t ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(e[i]))
			}), o
		}, C.union = function() {
			return C.uniq(C.flatten(arguments, !0))
		}, C.intersection = function(e) {
			var t = a.call(arguments, 1);
			return C.filter(C.uniq(e), function(e) {
				return C.every(t, function(t) {
					return C.indexOf(t, e) >= 0
				})
			})
		}, C.difference = function(e) {
			var t = l.apply(i, a.call(arguments, 1));
			return C.filter(e, function(e) {
				return !C.contains(t, e)
			})
		}, C.zip = function() {
			for(var e = C.max(C.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = C.pluck(arguments, "" + n);
			return t
		}, C.object = function(e, t) {
			if(null == e) return {};
			for(var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
			return n
		}, C.indexOf = function(e, t, n) {
			if(null == e) return -1;
			var i = 0,
				r = e.length;
			if(n) {
				if("number" != typeof n) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
				i = 0 > n ? Math.max(0, r + n) : n
			}
			if(y && e.indexOf === y) return e.indexOf(t, n);
			for(; r > i; i++)
				if(e[i] === t) return i;
			return -1
		}, C.lastIndexOf = function(e, t, n) {
			if(null == e) return -1;
			var i = null != n;
			if(b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
			for(var r = i ? n : e.length; r--;)
				if(e[r] === t) return r;
			return -1
		}, C.range = function(e, t, n) {
			arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
			for(var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n;
			return o
		};
		var A = function() {};
		C.bind = function(e, t) {
			var n, i;
			if(_ && e.bind === _) return _.apply(e, a.call(arguments, 1));
			if(!C.isFunction(e)) throw new TypeError;
			return n = a.call(arguments, 2), i = function() {
				if(!(this instanceof i)) return e.apply(t, n.concat(a.call(arguments)));
				A.prototype = e.prototype;
				var r = new A;
				A.prototype = null;
				var o = e.apply(r, n.concat(a.call(arguments)));
				return Object(o) === o ? o : r
			}
		}, C.partial = function(e) {
			var t = a.call(arguments, 1);
			return function() {
				return e.apply(this, t.concat(a.call(arguments)))
			}
		}, C.bindAll = function(e) {
			var t = a.call(arguments, 1);
			if(0 === t.length) throw new Error("bindAll must be passed function names");
			return k(t, function(t) {
				e[t] = C.bind(e[t], e)
			}), e
		}, C.memoize = function(e, t) {
			var n = {};
			return t || (t = C.identity),
				function() {
					var i = t.apply(this, arguments);
					return C.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
				}
		}, C.delay = function(e, t) {
			var n = a.call(arguments, 2);
			return setTimeout(function() {
				return e.apply(null, n)
			}, t)
		}, C.defer = function(e) {
			return C.delay.apply(C, [e, 1].concat(a.call(arguments, 1)))
		}, C.throttle = function(e, t, n) {
			var i, r, o, s = null,
				a = 0;
			n || (n = {});
			var l = function() {
				a = n.leading === !1 ? 0 : new Date, s = null, o = e.apply(i, r)
			};
			return function() {
				var c = new Date;
				a || n.leading !== !1 || (a = c);
				var u = t - (c - a);
				return i = this, r = arguments, 0 >= u ? (clearTimeout(s), s = null, a = c, o = e.apply(i, r)) : s || n.trailing === !1 || (s = setTimeout(l, u)), o
			}
		}, C.debounce = function(e, t, n) {
			var i, r, o, s, a;
			return function() {
				o = this, r = arguments, s = new Date;
				var l = function() {
						var c = new Date - s;
						t > c ? i = setTimeout(l, t - c) : (i = null, n || (a = e.apply(o, r)))
					},
					c = n && !i;
				return i || (i = setTimeout(l, t)), c && (a = e.apply(o, r)), a
			}
		}, C.once = function(e) {
			var t, n = !1;
			return function() {
				return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
			}
		}, C.wrap = function(e, t) {
			return function() {
				var n = [e];
				return s.apply(n, arguments), t.apply(this, n)
			}
		}, C.compose = function() {
			var e = arguments;
			return function() {
				for(var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
				return t[0]
			}
		}, C.after = function(e, t) {
			return function() {
				return --e < 1 ? t.apply(this, arguments) : void 0
			}
		}, C.keys = x || function(e) {
			if(e !== Object(e)) throw new TypeError("Invalid object");
			var t = [];
			for(var n in e) C.has(e, n) && t.push(n);
			return t
		}, C.values = function(e) {
			for(var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
			return i
		}, C.pairs = function(e) {
			for(var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
			return i
		}, C.invert = function(e) {
			for(var t = {}, n = C.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
			return t
		}, C.functions = C.methods = function(e) {
			var t = [];
			for(var n in e) C.isFunction(e[n]) && t.push(n);
			return t.sort()
		}, C.extend = function(e) {
			return k(a.call(arguments, 1), function(t) {
				if(t)
					for(var n in t) e[n] = t[n]
			}), e
		}, C.pick = function(e) {
			var t = {},
				n = l.apply(i, a.call(arguments, 1));
			return k(n, function(n) {
				n in e && (t[n] = e[n])
			}), t
		}, C.omit = function(e) {
			var t = {},
				n = l.apply(i, a.call(arguments, 1));
			for(var r in e) C.contains(n, r) || (t[r] = e[r]);
			return t
		}, C.defaults = function(e) {
			return k(a.call(arguments, 1), function(t) {
				if(t)
					for(var n in t) void 0 === e[n] && (e[n] = t[n])
			}), e
		}, C.clone = function(e) {
			return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
		}, C.tap = function(e, t) {
			return t(e), e
		};
		var U = function(e, t, n, i) {
			if(e === t) return 0 !== e || 1 / e == 1 / t;
			if(null == e || null == t) return e === t;
			e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
			var r = c.call(e);
			if(r != c.call(t)) return !1;
			switch(r) {
				case "[object String]":
					return e == String(t);
				case "[object Number]":
					return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
				case "[object Date]":
				case "[object Boolean]":
					return +e == +t;
				case "[object RegExp]":
					return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
			}
			if("object" != typeof e || "object" != typeof t) return !1;
			for(var o = n.length; o--;)
				if(n[o] == e) return i[o] == t;
			var s = e.constructor,
				a = t.constructor;
			if(s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
			n.push(e), i.push(t);
			var l = 0,
				u = !0;
			if("[object Array]" == r) {
				if(l = e.length, u = l == t.length)
					for(; l-- && (u = U(e[l], t[l], n, i)););
			} else {
				for(var d in e)
					if(C.has(e, d) && (l++, !(u = C.has(t, d) && U(e[d], t[d], n, i)))) break;
				if(u) {
					for(d in t)
						if(C.has(t, d) && !l--) break;
					u = !l
				}
			}
			return n.pop(), i.pop(), u
		};
		C.isEqual = function(e, t) {
			return U(e, t, [], [])
		}, C.isEmpty = function(e) {
			if(null == e) return !0;
			if(C.isArray(e) || C.isString(e)) return 0 === e.length;
			for(var t in e)
				if(C.has(e, t)) return !1;
			return !0
		}, C.isElement = function(e) {
			return !(!e || 1 !== e.nodeType)
		}, C.isArray = w || function(e) {
			return "[object Array]" == c.call(e)
		}, C.isObject = function(e) {
			return e === Object(e)
		}, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
			C["is" + e] = function(t) {
				return c.call(t) == "[object " + e + "]"
			}
		}), C.isArguments(arguments) || (C.isArguments = function(e) {
			return !(!e || !C.has(e, "callee"))
		}), "function" != typeof /./ && (C.isFunction = function(e) {
			return "function" == typeof e
		}), C.isFinite = function(e) {
			return isFinite(e) && !isNaN(parseFloat(e))
		}, C.isNaN = function(e) {
			return C.isNumber(e) && e != +e
		}, C.isBoolean = function(e) {
			return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
		}, C.isNull = function(e) {
			return null === e
		}, C.isUndefined = function(e) {
			return void 0 === e
		}, C.has = function(e, t) {
			return u.call(e, t)
		}, C.noConflict = function() {
			return e._ = t, this
		}, C.identity = function(e) {
			return e
		}, C.times = function(e, t, n) {
			for(var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r);
			return i
		}, C.random = function(e, t) {
			return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
		};
		var M = {
			escape: {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;"
			}
		};
		M.unescape = C.invert(M.escape);
		var O = {
			escape: new RegExp("[" + C.keys(M.escape).join("") + "]", "g"),
			unescape: new RegExp("(" + C.keys(M.unescape).join("|") + ")", "g")
		};
		C.each(["escape", "unescape"], function(e) {
			C[e] = function(t) {
				return null == t ? "" : ("" + t).replace(O[e], function(t) {
					return M[e][t]
				})
			}
		}), C.result = function(e, t) {
			if(null != e) {
				var n = e[t];
				return C.isFunction(n) ? n.call(e) : n
			}
		}, C.mixin = function(e) {
			k(C.functions(e), function(t) {
				var n = C[t] = e[t];
				C.prototype[t] = function() {
					var e = [this._wrapped];
					return s.apply(e, arguments), B.call(this, n.apply(C, e))
				}
			})
		};
		var I = 0;
		C.uniqueId = function(e) {
			var t = ++I + "";
			return e ? e + t : t
		}, C.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var L = /(.)^/,
			P = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"        ": "t",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			R = /\\|'|\r|\n|\t|\u2028|\u2029/g;
		C.template = function(e, t, n) {
			var i;
			n = C.defaults({}, n, C.templateSettings);
			var r = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
				o = 0,
				s = "__p+='";
			e.replace(r, function(t, n, i, r, a) {
				return s += e.slice(o, a).replace(R, function(e) {
					return "\\" + P[e]
				}), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (s += "';\n" + r + "\n__p+='"), o = a + t.length, t
			}), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
			try {
				i = new Function(n.variable || "obj", "_", s)
			} catch(a) {
				throw a.source = s, a
			}
			if(t) return i(t, C);
			var l = function(e) {
				return i.call(this, e, C)
			};
			return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
		}, C.chain = function(e) {
			return C(e).chain()
		};
		var B = function(e) {
			return this._chain ? C(e).chain() : e
		};
		C.mixin(C), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
			var t = i[e];
			C.prototype[e] = function() {
				var n = this._wrapped;
				return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], B.call(this, n)
			}
		}), k(["concat", "join", "slice"], function(e) {
			var t = i[e];
			C.prototype[e] = function() {
				return B.call(this, t.apply(this._wrapped, arguments))
			}
		}), C.extend(C.prototype, {
			chain: function() {
				return this._chain = !0, this
			},
			value: function() {
				return this._wrapped
			}
		})
	}.call(this),
	function() {
		var e, t = this,
			n = t.Backbone,
			i = [],
			r = (i.push, i.slice);
		i.splice;
		e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.1.0";
		var o = t._;
		o || "undefined" == typeof require || (o = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, e.noConflict = function() {
			return t.Backbone = n, this
		}, e.emulateHTTP = !1, e.emulateJSON = !1;
		var s = e.Events = {
				on: function(e, t, n) {
					if(!l(this, "on", e, [t, n]) || !t) return this;
					this._events || (this._events = {});
					var i = this._events[e] || (this._events[e] = []);
					return i.push({
						callback: t,
						context: n,
						ctx: n || this
					}), this
				},
				once: function(e, t, n) {
					if(!l(this, "once", e, [t, n]) || !t) return this;
					var i = this,
						r = o.once(function() {
							i.off(e, r), t.apply(this, arguments)
						});
					return r._callback = t, this.on(e, r, n)
				},
				off: function(e, t, n) {
					var i, r, s, a, c, u, d, f;
					if(!this._events || !l(this, "off", e, [t, n])) return this;
					if(!e && !t && !n) return this._events = {},
						this;
					for(a = e ? [e] : o.keys(this._events), c = 0, u = a.length; c < u; c++)
						if(e = a[c], s = this._events[e]) {
							if(this._events[e] = i = [], t || n)
								for(d = 0, f = s.length; d < f; d++) r = s[d], (t && t !== r.callback && t !== r.callback._callback || n && n !== r.context) && i.push(r);
							i.length || delete this._events[e]
						}
					return this
				},
				trigger: function(e) {
					if(!this._events) return this;
					var t = r.call(arguments, 1);
					if(!l(this, "trigger", e, t)) return this;
					var n = this._events[e],
						i = this._events.all;
					return n && c(n, t), i && c(i, arguments), this
				},
				stopListening: function(e, t, n) {
					var i = this._listeningTo;
					if(!i) return this;
					var r = !t && !n;
					n || "object" != typeof t || (n = this), e && ((i = {})[e._listenId] = e);
					for(var s in i) e = i[s], e.off(t, n, this), (r || o.isEmpty(e._events)) && delete this._listeningTo[s];
					return this
				}
			},
			a = /\s+/,
			l = function(e, t, n, i) {
				if(!n) return !0;
				if("object" == typeof n) {
					for(var r in n) e[t].apply(e, [r, n[r]].concat(i));
					return !1
				}
				if(a.test(n)) {
					for(var o = n.split(a), s = 0, l = o.length; s < l; s++) e[t].apply(e, [o[s]].concat(i));
					return !1
				}
				return !0
			},
			c = function(e, t) {
				var n, i = -1,
					r = e.length,
					o = t[0],
					s = t[1],
					a = t[2];
				switch(t.length) {
					case 0:
						for(; ++i < r;)(n = e[i]).callback.call(n.ctx);
						return;
					case 1:
						for(; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
						return;
					case 2:
						for(; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s);
						return;
					case 3:
						for(; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s, a);
						return;
					default:
						for(; ++i < r;)(n = e[i]).callback.apply(n.ctx, t)
				}
			},
			u = {
				listenTo: "on",
				listenToOnce: "once"
			};
		o.each(u, function(e, t) {
			s[t] = function(t, n, i) {
				var r = this._listeningTo || (this._listeningTo = {}),
					s = t._listenId || (t._listenId = o.uniqueId("l"));
				return r[s] = t, i || "object" != typeof n || (i = this), t[e](n, i, this), this
			}
		}), s.bind = s.on, s.unbind = s.off, o.extend(e, s);
		var d = e.Model = function(e, t) {
			var n = e || {};
			t || (t = {}), this.cid = o.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = o.defaults({}, n, o.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
		};
		o.extend(d.prototype, s, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			initialize: function() {},
			toJSON: function(e) {
				return o.clone(this.attributes)
			},
			sync: function() {
				return e.sync.apply(this, arguments)
			},
			get: function(e) {
				return this.attributes[e]
			},
			escape: function(e) {
				return o.escape(this.get(e))
			},
			has: function(e) {
				return null != this.get(e)
			},
			set: function(e, t, n) {
				var i, r, s, a, l, c, u, d;
				if(null == e) return this;
				if("object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, n || (n = {}), !this._validate(r, n)) return !1;
				s = n.unset, l = n.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = o.clone(this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
				for(i in r) t = r[i], o.isEqual(d[i], t) || a.push(i), o.isEqual(u[i], t) ? delete this.changed[i] : this.changed[i] = t, s ? delete d[i] : d[i] = t;
				if(!l) {
					a.length && (this._pending = !0);
					for(var f = 0, h = a.length; f < h; f++) this.trigger("change:" + a[f], this, d[a[f]], n)
				}
				if(c) return this;
				if(!l)
					for(; this._pending;) this._pending = !1, this.trigger("change", this, n);
				return this._pending = !1, this._changing = !1, this
			},
			unset: function(e, t) {
				return this.set(e, void 0, o.extend({}, t, {
					unset: !0
				}))
			},
			clear: function(e) {
				var t = {};
				for(var n in this.attributes) t[n] = void 0;
				return this.set(t, o.extend({}, e, {
					unset: !0
				}))
			},
			hasChanged: function(e) {
				return null == e ? !o.isEmpty(this.changed) : o.has(this.changed, e)
			},
			changedAttributes: function(e) {
				if(!e) return !!this.hasChanged() && o.clone(this.changed);
				var t, n = !1,
					i = this._changing ? this._previousAttributes : this.attributes;
				for(var r in e) o.isEqual(i[r], t = e[r]) || ((n || (n = {}))[r] = t);
				return n
			},
			previous: function(e) {
				return null != e && this._previousAttributes ? this._previousAttributes[e] : null
			},
			previousAttributes: function() {
				return o.clone(this._previousAttributes)
			},
			fetch: function(e) {
				e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = this,
					n = e.success;
				return e.success = function(i) {
					return !!t.set(t.parse(i, e), e) && (n && n(t, i, e), void t.trigger("sync", t, i, e))
				}, P(this, e), this.sync("read", this, e)
			},
			save: function(e, t, n) {
				var i, r, s, a = this.attributes;
				if(null == e || "object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n = o.extend({
						validate: !0
					}, n), i && !n.wait) {
					if(!this.set(i, n)) return !1
				} else if(!this._validate(i, n)) return !1;
				i && n.wait && (this.attributes = o.extend({}, a, i)), void 0 === n.parse && (n.parse = !0);
				var l = this,
					c = n.success;
				return n.success = function(e) {
					l.attributes = a;
					var t = l.parse(e, n);
					return n.wait && (t = o.extend(i || {}, t)), !(o.isObject(t) && !l.set(t, n)) && (c && c(l, e, n), void l.trigger("sync", l, e, n))
				}, P(this, n), r = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === r && (n.attrs = i), s = this.sync(r, this, n), i && n.wait && (this.attributes = a), s
			},
			destroy: function(e) {
				e = e ? o.clone(e) : {};
				var t = this,
					n = e.success,
					i = function() {
						t.trigger("destroy", t, t.collection, e)
					};
				if(e.success = function(r) {
						(e.wait || t.isNew()) && i(), n && n(t, r, e), t.isNew() || t.trigger("sync", t, r, e)
					}, this.isNew()) return e.success(), !1;
				P(this, e);
				var r = this.sync("delete", this, e);
				return e.wait || i(), r
			},
			url: function() {
				var e = o.result(this, "urlRoot") || o.result(this.collection, "url") || L();
				return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
			},
			parse: function(e, t) {
				return e
			},
			clone: function() {
				return new this.constructor(this.attributes)
			},
			isNew: function() {
				return null == this.id
			},
			isValid: function(e) {
				return this._validate({}, o.extend(e || {}, {
					validate: !0
				}))
			},
			_validate: function(e, t) {
				if(!t.validate || !this.validate) return !0;
				e = o.extend({}, this.attributes, e);
				var n = this.validationError = this.validate(e, t) || null;
				return !n || (this.trigger("invalid", this, n, o.extend(t, {
					validationError: n
				})), !1)
			}
		});
		var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
		o.each(f, function(e) {
			d.prototype[e] = function() {
				var t = r.call(arguments);
				return t.unshift(this.attributes), o[e].apply(o, t)
			}
		});
		var h = e.Collection = function(e, t) {
				t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, o.extend({
					silent: !0
				}, t))
			},
			p = {
				add: !0,
				remove: !0,
				merge: !0
			},
			m = {
				add: !0,
				remove: !1
			};
		o.extend(h.prototype, s, {
			model: d,
			initialize: function() {},
			toJSON: function(e) {
				return this.map(function(t) {
					return t.toJSON(e)
				})
			},
			sync: function() {
				return e.sync.apply(this, arguments)
			},
			add: function(e, t) {
				return this.set(e, o.extend({
					merge: !1
				}, t, m))
			},
			remove: function(e, t) {
				var n = !o.isArray(e);
				e = n ? [e] : o.clone(e), t || (t = {});
				var i, r, s, a;
				for(i = 0, r = e.length; i < r; i++) a = e[i] = this.get(e[i]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a));
				return n ? e[0] : e
			},
			set: function(e, t) {
				t = o.defaults({}, t, p), t.parse && (e = this.parse(e, t));
				var n = !o.isArray(e);
				e = n ? e ? [e] : [] : o.clone(e);
				var i, r, s, a, l, c, u, f = t.at,
					h = this.model,
					m = this.comparator && null == f && t.sort !== !1,
					g = o.isString(this.comparator) ? this.comparator : null,
					v = [],
					y = [],
					b = {},
					w = t.add,
					x = t.merge,
					_ = t.remove,
					C = !(m || !w || !_) && [];
				for(i = 0, r = e.length; i < r; i++) {
					if(l = e[i], s = l instanceof d ? a = l : l[h.prototype.idAttribute], c = this.get(s)) _ && (b[c.cid] = !0), x && (l = l === a ? a.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), m && !u && c.hasChanged(g) && (u = !0)), e[i] = c;
					else if(w) {
						if(a = e[i] = this._prepareModel(l, t), !a) continue;
						v.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
					}
					C && C.push(c || a)
				}
				if(_) {
					for(i = 0, r = this.length; i < r; ++i) b[(a = this.models[i]).cid] || y.push(a);
					y.length && this.remove(y, t)
				}
				if(v.length || C && C.length)
					if(m && (u = !0), this.length += v.length, null != f)
						for(i = 0, r = v.length; i < r; i++) this.models.splice(f + i, 0, v[i]);
					else {
						C && (this.models.length = 0);
						var k = C || v;
						for(i = 0, r = k.length; i < r; i++) this.models.push(k[i])
					}
				if(u && this.sort({
						silent: !0
					}), !t.silent) {
					for(i = 0, r = v.length; i < r; i++)(a = v[i]).trigger("add", a, this, t);
					(u || C && C.length) && this.trigger("sort", this, t)
				}
				return n ? e[0] : e
			},
			reset: function(e, t) {
				t || (t = {});
				for(var n = 0, i = this.models.length; n < i; n++) this._removeReference(this.models[n]);
				return t.previousModels = this.models, this._reset(), e = this.add(e, o.extend({
					silent: !0
				}, t)), t.silent || this.trigger("reset", this, t), e
			},
			push: function(e, t) {
				return this.add(e, o.extend({
					at: this.length
				}, t))
			},
			pop: function(e) {
				var t = this.at(this.length - 1);
				return this.remove(t, e), t
			},
			unshift: function(e, t) {
				return this.add(e, o.extend({
					at: 0
				}, t))
			},
			shift: function(e) {
				var t = this.at(0);
				return this.remove(t, e), t
			},
			slice: function() {
				return r.apply(this.models, arguments)
			},
			get: function(e) {
				if(null != e) return this._byId[e.id] || this._byId[e.cid] || this._byId[e]
			},
			at: function(e) {
				return this.models[e]
			},
			where: function(e, t) {
				return o.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
					for(var n in e)
						if(e[n] !== t.get(n)) return !1;
					return !0
				})
			},
			findWhere: function(e) {
				return this.where(e, !0)
			},
			sort: function(e) {
				if(!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return e || (e = {}), o.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(o.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
			},
			pluck: function(e) {
				return o.invoke(this.models, "get", e)
			},
			fetch: function(e) {
				e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = e.success,
					n = this;
				return e.success = function(i) {
					var r = e.reset ? "reset" : "set";
					n[r](i, e), t && t(n, i, e), n.trigger("sync", n, i, e)
				}, P(this, e), this.sync("read", this, e)
			},
			create: function(e, t) {
				if(t = t ? o.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
				t.wait || this.add(e, t);
				var n = this,
					i = t.success;
				return t.success = function(e, t, r) {
					r.wait && n.add(e, r), i && i(e, t, r)
				}, e.save(null, t), e
			},
			parse: function(e, t) {
				return e
			},
			clone: function() {
				return new this.constructor(this.models)
			},
			_reset: function() {
				this.length = 0, this.models = [], this._byId = {}
			},
			_prepareModel: function(e, t) {
				if(e instanceof d) return e.collection || (e.collection = this), e;
				t = t ? o.clone(t) : {}, t.collection = this;
				var n = new this.model(e, t);
				return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
			},
			_removeReference: function(e) {
				this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
			},
			_onModelEvent: function(e, t, n, i) {
				("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
			}
		});
		var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
		o.each(g, function(e) {
			h.prototype[e] = function() {
				var t = r.call(arguments);
				return t.unshift(this.models), o[e].apply(o, t)
			}
		});
		var v = ["groupBy", "countBy", "sortBy"];
		o.each(v, function(e) {
			h.prototype[e] = function(t, n) {
				var i = o.isFunction(t) ? t : function(e) {
					return e.get(t)
				};
				return o[e](this.models, i, n)
			}
		});
		var y = e.View = function(e) {
				this.cid = o.uniqueId("view"), e || (e = {}), o.extend(this, o.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
			},
			b = /^(\S+)\s*(.*)$/,
			w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		o.extend(y.prototype, s, {
			tagName: "div",
			$: function(e) {
				return this.$el.find(e)
			},
			initialize: function() {},
			render: function() {
				return this
			},
			remove: function() {
				return this.$el.remove(), this.stopListening(), this
			},
			setElement: function(t, n) {
				return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
			},
			delegateEvents: function(e) {
				if(!e && !(e = o.result(this, "events"))) return this;
				this.undelegateEvents();
				for(var t in e) {
					var n = e[t];
					if(o.isFunction(n) || (n = this[e[t]]), n) {
						var i = t.match(b),
							r = i[1],
							s = i[2];
						n = o.bind(n, this), r += ".delegateEvents" + this.cid, "" === s ? this.$el.on(r, n) : this.$el.on(r, s, n)
					}
				}
				return this
			},
			undelegateEvents: function() {
				return this.$el.off(".delegateEvents" + this.cid), this
			},
			_ensureElement: function() {
				if(this.el) this.setElement(o.result(this, "el"), !1);
				else {
					var t = o.extend({}, o.result(this, "attributes"));
					this.id && (t.id = o.result(this, "id")), this.className && (t["class"] = o.result(this, "className"));
					var n = e.$("<" + o.result(this, "tagName") + ">").attr(t);
					this.setElement(n, !1)
				}
			}
		}), e.sync = function(t, n, i) {
			var r = _[t];
			o.defaults(i || (i = {}), {
				emulateHTTP: e.emulateHTTP,
				emulateJSON: e.emulateJSON
			});
			var s = {
				type: r,
				dataType: "json"
			};
			if(i.url || (s.url = o.result(n, "url") || L()), null != i.data || !n || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || n.toJSON(i))), i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
					model: s.data
				} : {}), i.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
				s.type = "POST", i.emulateJSON && (s.data._method = r);
				var a = i.beforeSend;
				i.beforeSend = function(e) {
					if(e.setRequestHeader("X-HTTP-Method-Override", r), a) return a.apply(this, arguments)
				}
			}
			"GET" === s.type || i.emulateJSON || (s.processData = !1), "PATCH" === s.type && x && (s.xhr = function() {
				return new ActiveXObject("Microsoft.XMLHTTP")
			});
			var l = i.xhr = e.ajax(o.extend(s, i));
			return n.trigger("request", n, l, i), l
		};
		var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
			_ = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				"delete": "DELETE",
				read: "GET"
			};
		e.ajax = function() {
			return e.$.ajax.apply(e.$, arguments)
		};
		var C = e.Router = function(e) {
				e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			k = /\((.*?)\)/g,
			N = /(\(\?)?:\w+/g,
			E = /\*\w+/g,
			S = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		o.extend(C.prototype, s, {
			initialize: function() {},
			route: function(t, n, i) {
				o.isRegExp(t) || (t = this._routeToRegExp(t)), o.isFunction(n) && (i = n, n = ""), i || (i = this[n]);
				var r = this;
				return e.history.route(t, function(o) {
					var s = r._extractParameters(t, o);
					i && i.apply(r, s), r.trigger.apply(r, ["route:" + n].concat(s)), r.trigger("route", n, s), e.history.trigger("route", r, n, s)
				}), this
			},
			navigate: function(t, n) {
				return e.history.navigate(t, n), this
			},
			_bindRoutes: function() {
				if(this.routes) {
					this.routes = o.result(this, "routes");
					for(var e, t = o.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
				}
			},
			_routeToRegExp: function(e) {
				return e = e.replace(S, "\\$&").replace(k, "(?:$1)?").replace(N, function(e, t) {
					return t ? e : "([^/]+)"
				}).replace(E, "(.*?)"), new RegExp("^" + e + "$")
			},
			_extractParameters: function(e, t) {
				var n = e.exec(t).slice(1);
				return o.map(n, function(e) {
					return e ? decodeURIComponent(e) : null
				})
			}
		});
		var T = e.History = function() {
				this.handlers = [], o.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			D = /^[#\/]|\s+$/g,
			A = /^\/+|\/+$/g,
			U = /msie [\w.]+/,
			M = /\/$/,
			O = /[?#].*$/;
		T.started = !1, o.extend(T.prototype, s, {
			interval: 50,
			getHash: function(e) {
				var t = (e || this).location.href.match(/#(.*)$/);
				return t ? t[1] : ""
			},
			getFragment: function(e, t) {
				if(null == e)
					if(this._hasPushState || !this._wantsHashChange || t) {
						e = this.location.pathname;
						var n = this.root.replace(M, "");
						e.indexOf(n) || (e = e.slice(n.length))
					} else e = this.getHash();
				return e.replace(D, "")
			},
			start: function(t) {
				if(T.started) throw new Error("Backbone.history has already been started");
				T.started = !0, this.options = o.extend({
					root: "/"
				}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
				var n = this.getFragment(),
					i = document.documentMode,
					r = U.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
				this.root = ("/" + this.root + "/").replace(A, "/"), r && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
				var s = this.location,
					a = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
				if(this._wantsHashChange && this._wantsPushState) {
					if(!this._hasPushState && !a) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
					this._hasPushState && a && s.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search))
				}
				if(!this.options.silent) return this.loadUrl()
			},
			stop: function() {
				e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), T.started = !1
			},
			route: function(e, t) {
				this.handlers.unshift({
					route: e,
					callback: t
				})
			},
			checkUrl: function(e) {
				var t = this.getFragment();
				return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t !== this.fragment && (this.iframe && this.navigate(t), void this.loadUrl())
			},
			loadUrl: function(e) {
				return e = this.fragment = this.getFragment(e), o.any(this.handlers, function(t) {
					if(t.route.test(e)) return t.callback(e), !0
				})
			},
			navigate: function(e, t) {
				if(!T.started) return !1;
				t && t !== !0 || (t = {
					trigger: !!t
				});
				var n = this.root + (e = this.getFragment(e || ""));
				if(e = e.replace(O, ""), this.fragment !== e) {
					if(this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
					else {
						if(!this._wantsHashChange) return this.location.assign(n);
						this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
					}
					return t.trigger ? this.loadUrl(e) : void 0
				}
			},
			_updateHash: function(e, t, n) {
				if(n) {
					var i = e.href.replace(/(javascript:|#).*$/, "");
					e.replace(i + "#" + t)
				} else e.hash = "#" + t
			}
		}), e.history = new T;
		var I = function(e, t) {
			var n, i = this;
			n = e && o.has(e, "constructor") ? e.constructor : function() {
				return i.apply(this, arguments)
			}, o.extend(n, i, t);
			var r = function() {
				this.constructor = n
			};
			return r.prototype = i.prototype, n.prototype = new r, e && o.extend(n.prototype, e), n.__super__ = i.prototype, n
		};
		d.extend = h.extend = C.extend = y.extend = T.extend = I;
		var L = function() {
				throw new Error('A "url" property or function must be specified')
			},
			P = function(e, t) {
				var n = t.error;
				t.error = function(i) {
					n && n(e, i, t), e.trigger("error", e, i, t)
				}
			}
	}.call(this),
	function(e, t) {
		function n(t, n) {
			var r, o, s, a = t.nodeName.toLowerCase();
			return "area" === a ? (r = t.parentNode, o = r.name, !(!t.href || !o || "map" !== r.nodeName.toLowerCase()) && (s = e("img[usemap=#" + o + "]")[0], !!s && i(s))) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t)
		}

		function i(t) {
			return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
				return "hidden" === e.css(this, "visibility")
			}).length
		}
		var r = 0,
			o = /^ui-id-\d+$/;
		e.ui = e.ui || {}, e.extend(e.ui, {
			version: "1.10.3",
			keyCode: {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				NUMPAD_ADD: 107,
				NUMPAD_DECIMAL: 110,
				NUMPAD_DIVIDE: 111,
				NUMPAD_ENTER: 108,
				NUMPAD_MULTIPLY: 106,
				NUMPAD_SUBTRACT: 109,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		}), e.fn.extend({
			focus: function(t) {
				return function(n, i) {
					return "number" == typeof n ? this.each(function() {
						var t = this;
						setTimeout(function() {
							e(t).focus(), i && i.call(t)
						}, n)
					}) : t.apply(this, arguments)
				}
			}(e.fn.focus),
			scrollParent: function() {
				var t;
				return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
					return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				}).eq(0) : this.parents().filter(function() {
					return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
			},
			zIndex: function(n) {
				if(n !== t) return this.css("zIndex", n);
				if(this.length)
					for(var i, r, o = e(this[0]); o.length && o[0] !== document;) {
						if(i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
						o = o.parent()
					}
				return 0
			},
			uniqueId: function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++r)
				})
			},
			removeUniqueId: function() {
				return this.each(function() {
					o.test(this.id) && e(this).removeAttr("id")
				})
			}
		}), e.extend(e.expr[":"], {
			data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
				return function(n) {
					return !!e.data(n, t)
				}
			}) : function(t, n, i) {
				return !!e.data(t, i[3])
			},
			focusable: function(t) {
				return n(t, !isNaN(e.attr(t, "tabindex")))
			},
			tabbable: function(t) {
				var i = e.attr(t, "tabindex"),
					r = isNaN(i);
				return(r || i >= 0) && n(t, !r)
			}
		}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
			function r(t, n, i, r) {
				return e.each(o, function() {
					n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
				}), n
			}
			var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
				s = i.toLowerCase(),
				a = {
					innerWidth: e.fn.innerWidth,
					innerHeight: e.fn.innerHeight,
					outerWidth: e.fn.outerWidth,
					outerHeight: e.fn.outerHeight
				};
			e.fn["inner" + i] = function(n) {
				return n === t ? a["inner" + i].call(this) : this.each(function() {
					e(this).css(s, r(this, n) + "px")
				})
			}, e.fn["outer" + i] = function(t, n) {
				return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
					e(this).css(s, r(this, t, !0, n) + "px")
				})
			}
		}), e.fn.addBack || (e.fn.addBack = function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
			return function(n) {
				return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
			}
		}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
			disableSelection: function() {
				return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
					e.preventDefault()
				})
			},
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			}
		}), e.extend(e.ui, {
			plugin: {
				add: function(t, n, i) {
					var r, o = e.ui[t].prototype;
					for(r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
				},
				call: function(e, t, n) {
					var i, r = e.plugins[t];
					if(r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
						for(i = 0; r.length > i; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
				}
			},
			hasScroll: function(t, n) {
				if("hidden" === e(t).css("overflow")) return !1;
				var i = n && "left" === n ? "scrollLeft" : "scrollTop",
					r = !1;
				return t[i] > 0 || (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
			}
		})
	}(jQuery),
	function(e, t) {
		var n = 0,
			i = Array.prototype.slice,
			r = e.cleanData;
		e.cleanData = function(t) {
			for(var n, i = 0; null != (n = t[i]); i++) try {
				e(n).triggerHandler("remove")
			} catch(o) {}
			r(t)
		}, e.widget = function(n, i, r) {
			var o, s, a, l, c = {},
				u = n.split(".")[0];
			n = n.split(".")[1], o = u + "-" + n, r || (r = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
				return !!e.data(t, o)
			}, e[u] = e[u] || {}, s = e[u][n], a = e[u][n] = function(e, n) {
				return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new a(e, n)
			}, e.extend(a, s, {
				version: r.version,
				_proto: e.extend({}, r),
				_childConstructors: []
			}), l = new i, l.options = e.widget.extend({}, l.options), e.each(r, function(n, r) {
				return e.isFunction(r) ? (c[n] = function() {
					var e = function() {
							return i.prototype[n].apply(this, arguments)
						},
						t = function(e) {
							return i.prototype[n].apply(this, e)
						};
					return function() {
						var n, i = this._super,
							o = this._superApply;
						return this._super = e, this._superApply = t, n = r.apply(this, arguments), this._super = i, this._superApply = o, n
					}
				}(), t) : (c[n] = r, t)
			}), a.prototype = e.widget.extend(l, {
				widgetEventPrefix: s ? l.widgetEventPrefix : n
			}, c, {
				constructor: a,
				namespace: u,
				widgetName: n,
				widgetFullName: o
			}), s ? (e.each(s._childConstructors, function(t, n) {
				var i = n.prototype;
				e.widget(i.namespace + "." + i.widgetName, a, n._proto)
			}), delete s._childConstructors) : i._childConstructors.push(a), e.widget.bridge(n, a)
		}, e.widget.extend = function(n) {
			for(var r, o, s = i.call(arguments, 1), a = 0, l = s.length; l > a; a++)
				for(r in s[a]) o = s[a][r], s[a].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
			return n
		}, e.widget.bridge = function(n, r) {
			var o = r.prototype.widgetFullName || n;
			e.fn[n] = function(s) {
				var a = "string" == typeof s,
					l = i.call(arguments, 1),
					c = this;
				return s = !a && l.length ? e.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function() {
					var i, r = e.data(this, o);
					return r ? e.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, l), i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : t) : e.error("no such method '" + s + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'")
				}) : this.each(function() {
					var t = e.data(this, o);
					t ? t.option(s || {})._init() : e.data(this, o, new r(s, this))
				}), c
			}
		}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function(t, i) {
				i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function(e) {
						e.target === i && this.destroy()
					}
				}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: e.noop,
			_getCreateEventData: e.noop,
			_create: e.noop,
			_init: e.noop,
			destroy: function() {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: e.noop,
			widget: function() {
				return this.element
			},
			option: function(n, i) {
				var r, o, s, a = n;
				if(0 === arguments.length) return e.widget.extend({}, this.options);
				if("string" == typeof n)
					if(a = {}, r = n.split("."), n = r.shift(), r.length) {
						for(o = a[n] = e.widget.extend({}, this.options[n]), s = 0; r.length - 1 > s; s++) o[r[s]] = o[r[s]] || {}, o = o[r[s]];
						if(n = r.pop(), i === t) return o[n] === t ? null : o[n];
						o[n] = i
					} else {
						if(i === t) return this.options[n] === t ? null : this.options[n];
						a[n] = i
					}
				return this._setOptions(a), this
			},
			_setOptions: function(e) {
				var t;
				for(t in e) this._setOption(t, e[t]);
				return this
			},
			_setOption: function(e, t) {
				return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
			},
			enable: function() {
				return this._setOption("disabled", !1)
			},
			disable: function() {
				return this._setOption("disabled", !0)
			},
			_on: function(n, i, r) {
				var o, s = this;
				"boolean" != typeof n && (r = i, i = n, n = !1), r ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, o = this.widget()), e.each(r, function(r, a) {
					function l() {
						return n || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : t
					}
					"string" != typeof a && (l.guid = a.guid = a.guid || l.guid || e.guid++);
					var c = r.match(/^(\w+)\s*(.*)$/),
						u = c[1] + s.eventNamespace,
						d = c[2];
					d ? o.delegate(d, u, l) : i.bind(u, l)
				})
			},
			_off: function(e, t) {
				t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
			},
			_delay: function(e, t) {
				function n() {
					return("string" == typeof e ? i[e] : e).apply(i, arguments)
				}
				var i = this;
				return setTimeout(n, t || 0)
			},
			_hoverable: function(t) {
				this.hoverable = this.hoverable.add(t), this._on(t, {
					mouseenter: function(t) {
						e(t.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function(t) {
						e(t.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function(t) {
				this.focusable = this.focusable.add(t), this._on(t, {
					focusin: function(t) {
						e(t.currentTarget).addClass("ui-state-focus")
					},
					focusout: function(t) {
						e(t.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function(t, n, i) {
				var r, o, s = this.options[t];
				if(i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
					for(r in o) r in n || (n[r] = o[r]);
				return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
			}
		}, e.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(t, n) {
			e.Widget.prototype["_" + t] = function(i, r, o) {
				"string" == typeof r && (r = {
					effect: r
				});
				var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
				r = r || {}, "number" == typeof r && (r = {
					duration: r
				}), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
					e(this)[t](), o && o.call(i[0]), n()
				})
			}
		})
	}(jQuery),
	function(e) {
		var t = !1;
		e(document).mouseup(function() {
			t = !1
		}), e.widget("ui.mouse", {
			version: "1.10.3",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function() {
				var t = this;
				this.element.bind("mousedown." + this.widgetName, function(e) {
					return t._mouseDown(e)
				}).bind("click." + this.widgetName, function(n) {
					return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
				}), this.started = !1
			},
			_mouseDestroy: function() {
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			},
			_mouseDown: function(n) {
				if(!t) {
					this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
					var i = this,
						r = 1 === n.which,
						o = !("string" != typeof this.options.cancel || !n.target.nodeName) && e(n.target).closest(this.options.cancel).length;
					return !(r && !o && this._mouseCapture(n)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
						i.mouseDelayMet = !0
					}, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
						return i._mouseMove(e)
					}, this._mouseUpDelegate = function(e) {
						return i._mouseUp(e)
					}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0))
				}
			},
			_mouseMove: function(t) {
				return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
			},
			_mouseUp: function(t) {
				return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
			},
			_mouseDistanceMet: function(e) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function() {
				return this.mouseDelayMet
			},
			_mouseStart: function() {},
			_mouseDrag: function() {},
			_mouseStop: function() {},
			_mouseCapture: function() {
				return !0
			}
		})
	}(jQuery),
	function(e) {
		function t(e, t, n) {
			return e > t && t + n > e
		}

		function n(e) {
			return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
		}
		e.widget("ui.sortable", e.ui.mouse, {
			version: "1.10.3",
			widgetEventPrefix: "sort",
			ready: !1,
			options: {
				appendTo: "parent",
				axis: !1,
				connectWith: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				dropOnEmpty: !0,
				forcePlaceholderSize: !1,
				forceHelperSize: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				items: "> *",
				opacity: !1,
				placeholder: !1,
				revert: !1,
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1e3,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_create: function() {
				var e = this.options;
				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === e.axis || n(this.items[0].item)),
					this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
			},
			_destroy: function() {
				this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
				for(var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
				return this
			},
			_setOption: function(t, n) {
				"disabled" === t ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
			},
			_mouseCapture: function(t, n) {
				var i = null,
					r = !1,
					o = this;
				return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), e(t.target).parents().each(function() {
					return e.data(this, o.widgetName + "-item") === o ? (i = e(this), !1) : void 0
				}), e.data(t.target, o.widgetName + "-item") === o && (i = e(t.target)), !!i && (!(this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each(function() {
					this === t.target && (r = !0)
				}), !r)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
			},
			_mouseStart: function(t, n, i) {
				var r, o, s = this.options;
				if(this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, e.extend(this.offset, {
						click: {
							left: t.pageX - this.offset.left,
							top: t.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
						prev: this.currentItem.prev()[0],
						parent: this.currentItem.parent()[0]
					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", s.cursor), this.storedStylesheet = e("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
					for(r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, this._uiHash(this));
				return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
			},
			_mouseDrag: function(t) {
				var n, i, r, o, s = this.options,
					a = !1;
				for(this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed)), t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed))), a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
					if(i = this.items[n], r = i.item[0], o = this._intersectsWithPointer(i), o && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" !== this.options.type || !e.contains(this.element[0], r))) {
						if(this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
						this._rearrange(t, i), this._trigger("change", t, this._uiHash());
						break
					}
				return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
			},
			_mouseStop: function(t, n) {
				if(t) {
					if(e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
						var i = this,
							r = this.placeholder.offset(),
							o = this.options.axis,
							s = {};
						o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
							i._clear(t)
						})
					} else this._clear(t, n);
					return !1
				}
			},
			cancel: function() {
				if(this.dragging) {
					this._mouseUp({
						target: null
					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
					for(var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
				}
				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
					helper: null,
					dragging: !1,
					reverting: !1,
					_noFinalSort: null
				}), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
			},
			serialize: function(t) {
				var n = this._getItemsAsjQuery(t && t.connected),
					i = [];
				return t = t || {}, e(n).each(function() {
					var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
					n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
				}), !i.length && t.key && i.push(t.key + "="), i.join("&")
			},
			toArray: function(t) {
				var n = this._getItemsAsjQuery(t && t.connected),
					i = [];
				return t = t || {}, n.each(function() {
					i.push(e(t.item || this).attr(t.attribute || "id") || "")
				}), i
			},
			_intersectsWith: function(e) {
				var t = this.positionAbs.left,
					n = t + this.helperProportions.width,
					i = this.positionAbs.top,
					r = i + this.helperProportions.height,
					o = e.left,
					s = o + e.width,
					a = e.top,
					l = a + e.height,
					c = this.offset.click.top,
					u = this.offset.click.left,
					d = "x" === this.options.axis || i + c > a && l > i + c,
					f = "y" === this.options.axis || t + u > o && s > t + u,
					h = d && f;
				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : t + this.helperProportions.width / 2 > o && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > r - this.helperProportions.height / 2
			},
			_intersectsWithPointer: function(e) {
				var n = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
					i = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
					r = n && i,
					o = this._getDragVerticalDirection(),
					s = this._getDragHorizontalDirection();
				return !!r && (this.floating ? s && "right" === s || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
			},
			_intersectsWithSides: function(e) {
				var n = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
					i = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
					r = this._getDragVerticalDirection(),
					o = this._getDragHorizontalDirection();
				return this.floating && o ? "right" === o && i || "left" === o && !i : r && ("down" === r && n || "up" === r && !n)
			},
			_getDragVerticalDirection: function() {
				var e = this.positionAbs.top - this.lastPositionAbs.top;
				return 0 !== e && (e > 0 ? "down" : "up")
			},
			_getDragHorizontalDirection: function() {
				var e = this.positionAbs.left - this.lastPositionAbs.left;
				return 0 !== e && (e > 0 ? "right" : "left")
			},
			refresh: function(e) {
				return this._refreshItems(e), this.refreshPositions(), this
			},
			_connectWith: function() {
				var e = this.options;
				return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
			},
			_getItemsAsjQuery: function(t) {
				var n, i, r, o, s = [],
					a = [],
					l = this._connectWith();
				if(l && t)
					for(n = l.length - 1; n >= 0; n--)
						for(r = e(l[n]), i = r.length - 1; i >= 0; i--) o = e.data(r[i], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
				for(a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
						options: this.options,
						item: this.currentItem
					}) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = a.length - 1; n >= 0; n--) a[n][0].each(function() {
					s.push(this)
				});
				return e(s)
			},
			_removeCurrentsFromItems: function() {
				var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = e.grep(this.items, function(e) {
					for(var n = 0; t.length > n; n++)
						if(t[n] === e.item[0]) return !1;
					return !0
				})
			},
			_refreshItems: function(t) {
				this.items = [], this.containers = [this];
				var n, i, r, o, s, a, l, c, u = this.items,
					d = [
						[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
							item: this.currentItem
						}) : e(this.options.items, this.element), this]
					],
					f = this._connectWith();
				if(f && this.ready)
					for(n = f.length - 1; n >= 0; n--)
						for(r = e(f[n]), i = r.length - 1; i >= 0; i--) o = e.data(r[i], this.widgetFullName), o && o !== this && !o.options.disabled && (d.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
							item: this.currentItem
						}) : e(o.options.items, o.element), o]), this.containers.push(o));
				for(n = d.length - 1; n >= 0; n--)
					for(s = d[n][1], a = d[n][0], i = 0, c = a.length; c > i; i++) l = e(a[i]), l.data(this.widgetName + "-item", s), u.push({
						item: l,
						instance: s,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
			},
			refreshPositions: function(t) {
				this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
				var n, i, r, o;
				for(n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, t || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
				if(this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
				else
					for(n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
				return this
			},
			_createPlaceholder: function(t) {
				t = t || this;
				var n, i = t.options;
				i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
					element: function() {
						var i = t.currentItem[0].nodeName.toLowerCase(),
							r = e("<" + i + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tr" === i ? t.currentItem.children().each(function() {
							e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(r)
						}) : "img" === i && r.attr("src", t.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
					},
					update: function(e, r) {
						(!n || i.forcePlaceholderSize) && (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
					}
				}), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
			},
			_contactContainers: function(i) {
				var r, o, s, a, l, c, u, d, f, h, p = null,
					m = null;
				for(r = this.containers.length - 1; r >= 0; r--)
					if(!e.contains(this.currentItem[0], this.containers[r].element[0]))
						if(this._intersectsWith(this.containers[r].containerCache)) {
							if(p && e.contains(this.containers[r].element[0], p.element[0])) continue;
							p = this.containers[r], m = r
						} else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", i, this._uiHash(this)), this.containers[r].containerCache.over = 0);
				if(p)
					if(1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", i, this._uiHash(this)), this.containers[m].containerCache.over = 1);
					else {
						for(s = 1e4, a = null, h = p.floating || n(this.currentItem), l = h ? "left" : "top", c = h ? "width" : "height", u = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) e.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!h || t(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (d = this.items[o].item.offset()[l], f = !1, Math.abs(d - u) > Math.abs(d + this.items[o][c] - u) && (f = !0, d += this.items[o][c]), s > Math.abs(d - u) && (s = Math.abs(d - u), a = this.items[o], this.direction = f ? "up" : "down"));
						if(!a && !this.options.dropOnEmpty) return;
						if(this.currentContainer === this.containers[m]) return;
						a ? this._rearrange(i, a, null, !0) : this._rearrange(i, null, this.containers[m].element, !0), this._trigger("change", i, this._uiHash()), this.containers[m]._trigger("change", i, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", i, this._uiHash(this)), this.containers[m].containerCache.over = 1
					}
			},
			_createHelper: function(t) {
				var n = this.options,
					i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
				return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
			},
			_adjustOffsetFromHelper: function(t) {
				"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
					left: +t[0],
					top: +t[1] || 0
				}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
			},
			_getParentOffset: function() {
				this.offsetParent = this.helper.offsetParent();
				var t = this.offsetParent.offset();
				return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
					top: 0,
					left: 0
				}), {
					top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function() {
				if("relative" === this.cssPosition) {
					var e = this.currentItem.position();
					return {
						top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
						left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
					}
				}
				return {
					top: 0,
					left: 0
				}
			},
			_cacheMargins: function() {
				this.margins = {
					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
				}
			},
			_cacheHelperProportions: function() {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function() {
				var t, n, i, r = this.options;
				"parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0], n = e(r.containment).offset(), i = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
			},
			_convertPositionTo: function(t, n) {
				n || (n = this.position);
				var i = "absolute" === t ? 1 : -1,
					r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					o = /(html|body)/i.test(r[0].tagName);
				return {
					top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
					left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
				}
			},
			_generatePosition: function(t) {
				var n, i, r = this.options,
					o = t.pageX,
					s = t.pageY,
					a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					l = /(html|body)/i.test(a[0].tagName);
				return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
					top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
					left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
				}
			},
			_rearrange: function(e, t, n, i) {
				n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
				var r = this.counter;
				this._delay(function() {
					r === this.counter && this.refreshPositions(!i)
				})
			},
			_clear: function(e, t) {
				this.reverting = !1;
				var n, i = [];
				if(!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
					for(n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else this.currentItem.show();
				for(this.fromOutside && !t && i.push(function(e) {
						this._trigger("receive", e, this._uiHash(this.fromOutside))
					}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || i.push(function(e) {
						this._trigger("update", e, this._uiHash())
					}), this !== this.currentContainer && (t || (i.push(function(e) {
						this._trigger("remove", e, this._uiHash())
					}), i.push(function(e) {
						return function(t) {
							e._trigger("receive", t, this._uiHash(this))
						}
					}.call(this, this.currentContainer)), i.push(function(e) {
						return function(t) {
							e._trigger("update", t, this._uiHash(this))
						}
					}.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || i.push(function(e) {
					return function(t) {
						e._trigger("deactivate", t, this._uiHash(this))
					}
				}.call(this, this.containers[n])), this.containers[n].containerCache.over && (i.push(function(e) {
					return function(t) {
						e._trigger("out", t, this._uiHash(this))
					}
				}.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
				if(this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
					if(!t) {
						for(this._trigger("beforeStop", e, this._uiHash()), n = 0; i.length > n; n++) i[n].call(this, e);
						this._trigger("stop", e, this._uiHash())
					}
					return this.fromOutside = !1, !1
				}
				if(t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
					for(n = 0; i.length > n; n++) i[n].call(this, e);
					this._trigger("stop", e, this._uiHash())
				}
				return this.fromOutside = !1, !0
			},
			_trigger: function() {
				e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
			},
			_uiHash: function(t) {
				var n = t || this;
				return {
					helper: n.helper,
					placeholder: n.placeholder || e([]),
					position: n.position,
					originalPosition: n.originalPosition,
					offset: n.positionAbs,
					item: n.currentItem,
					sender: t ? t.element : null
				}
			}
		})
	}(jQuery), window.QYER || (window.QYER = {
		uid: 0
	}), ! function() {
		var e = jQuery;
		! function() {
			window.qyerUtil = {
				init: function() {
					window.QYER && window.QYER.frameVersion > 1 && (this._initHead(), this.spam_text_filter(), this.includeGA(), this.frameCompatibleh())
				},
				frameCompatibleh: function() {
					window._qyer_userid = window.QYER.uid, window.setCookie = this.setCookie, window.getCookie = this.getCookie, window._gaq = window._gaq || []
				},
				includeGA: function() {
					window._gaq = window._gaq || [], window._gaq.push(["_setAccount", "UA-185023-1"], ["_setDomainName", "qyer.com"], ["_setSiteSpeedSampleRate", 10], ["_addIgnoredRef", "qyer.com"], ["_addOrganic", "soso", "w"], ["_addOrganic", "sogou", "query"], ["_addOrganic", "baidu", "word"], ["_addOrganic", "baidu", "q1"], ["_addOrganic", "baidu", "q2"], ["_addOrganic", "m.baidu", "word"], ["_addOrganic", "so.360", "q"], ["_addOrganic", "so", "q"], ["_addOrganic", "baidu", "w"], ["_addOrganic", "cn.bing", "q"], ["_addOrganic", "sm", "q"], ["_trackPageview"]), requirejs("https:" == document.location.protocol ? ["https://ssl.google-analytics.com/ga.js"] : ["http://www.google-analytics.com/ga.js"])
				},
				setCookie: function(e, t, n) {
					var i = 365,
						r = new Date;
					arguments[2] || (n = 1), 1 == n ? (r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com;expires=" + r.toGMTString()) : document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com", i = r = null
				},
				getCookie: function(e) {
					var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
					return null != t ? unescape(t[2]) : null
				},
				_initHead: function() {
					"ask.qyer.com" == window.location.hostname && e(".qyer_header_bg").css("position", "fixed")
				},
				_head: null,
				_getHead: function() {
					return this._head || (this._head = document.getElementsByTagName("head")[0]), this._head
				},
				loadCss: function(t, n) {
					n === !1 ? this.insertStyle(e.ajax({
						url: t,
						async: !1
					}).responseText) : e('<link rel="stylesheet" type="text/css" />').attr("href", t).appendTo(this._getHead())
				},
				insertStyle: function(e) {
					var t = document.createElement("style");
					t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, this._getHead().appendChild(t), t = null
				},
				sliceArguments: function(e, t) {
					for(var n = [], i = t; i < e.length; i++) n.push(e[i]);
					return n
				},
				isMobile: function() {
					var e = navigator.userAgent;
					return e.match(/Android/i) || -1 != e.indexOf("iPhone") || -1 != e.indexOf("iPad")
				},
				getWordLen: function(t, n) {
					function i(e) {
						if("undefined" == typeof e) return 0;
						var t = e.match(/[^\x00-\x80]/g);
						return e.length + (t ? t.length : 0)
					}

					function r(e) {
						return e.replace(/[^\x00-\xff]/g, "*")
					}
					return n && (t = r(t)), i(e.trim(t))
				},
				subStr: function(e, t) {
					for(var n, i, r = 0, o = 0; o < e.length; o++)
						if(n = e.charAt(o), r += encodeURI(n).length > 2 ? 1 : .5, r >= t) return i = r == t ? o + 1 : o, e.substr(0, i);
					return e
				},
				doTrackCode: function(t) {
					var n = "__dotarckcodebutton__";
					document.getElementById(n) || e('<button id="' + n + '" style="display:none;">dotarckcodebutton</button>').appendTo(document.body), e("#" + n).attr("data-bn-ipg", t).trigger("click"), n = null
				},
				ajaxFillter: function(e, t, n) {
					if(0 != window.location.href.indexOf("http://plan.qyer.com") && "object" == typeof e && e.extra && e.extra.code) switch(0 | e.extra.code) {
						case 1:
							window.qyerUtil.showAntiSpam(e.extra.msg)
					}
				},
				showAntiSpam: function(e) {
					requirejs(["web_ct_antispam"], function(t) {
						t.show(e)
					})
				},
				doAjax: function(t) {
					var n, i, r;
					if(n = t.minResponseTime ? new Date : null, r = function(e) {
							if("undefined" == typeof e.error_code) try {
								e.error_code = e.error, e.result = e.result, 0 != e.error_code && (e.data = e.data || {}, e.data.msg = e.msg)
							} catch(n) {}
							0 == e.error_code ? ("undefined" == typeof e.data && (e.data = t.__defaultData__), t.onCallSuccessBefore && t.onCallSuccessBefore(e), t.onSuccess && t.onSuccess(e), t.onCallSuccessAfter && t.onCallSuccessAfter(e)) : t.onError && t.onError(e)
						}, t.testData) return "undefined" == typeof t.testData.data && (t.testData.data = t.__defaultData__), void setTimeout(function() {
						r(t.testData)
					}, t.minResponseTime || 200);
					var o = window.location.host,
						s = t.url || t.posturl,
						a = t.data,
						l = "json";
					if(/static.qyer.com/.test(o) === !0 || /qyerstatic.com/.test(o) === !0) {
						var c;
						a = e.extend({}, a, {
							__qFED__: t.__qFED__
						}), t.__qFED__ && t.__qFED__.id && (c = t.__qFED__.id, t.type = "GET"), s = "http://fe.2b6.me:3000/service/api/" + c, l = "jsonp", api = null
					}
					var u = e.ajax({
						type: t.type || "POST",
						url: s,
						dataType: l,
						data: a,
						cache: t.cache || !1,
						success: function(e) {
							n ? (i = new Date - n, setTimeout(function() {
								r.call(null, e)
							}, i > t.minResponseTime ? 0 : t.minResponseTime - i)) : r.call(null, e), n = i = null
						},
						error: function(e, n) {
							t.onError && t.onError({
								error_code: -1,
								__server_error__: !0,
								__server_status__: u.statusText,
								result: "error",
								data: {
									msg: n || {}
								}
							})
						}
					});
					return u
				},
				runOneInPeriodOfTime: function(e, t) {
					var n;
					return function(i, r, o, s, a) {
						window.clearTimeout(n), n = window.setTimeout(function() {
							e(i, r, o, s, a)
						}, t || 300)
					}
				},
				isLogin: function() {
					return !(!window.QYER || !window.QYER.uid)
				},
				doLogin: function(e) {
					window.qyerUtil.isLogin() || requirejs(["web_ct_logindialog"], function(t) {
						t.show(e)
					})
				},
				doSignin: function(t) {
					requirejs(["web_ct_logindialog"], function(n) {
						n.show(e.extend({}, {
							page: "regist"
						}, t))
					})
				},
				getUrlParam: function(e, t) {
					var n, i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
					if(t) {
						var r = t.indexOf("?"); - 1 != r && (n = t.substr(t.indexOf("?") + 1))
					} else n = window.location.search.substr(1);
					if(!n) return null;
					var o = n.match(i);
					return null != o ? unescape(o[2]) : null
				},
				spam_text_filter: function() {
					var t, n, i, r, o;
					t = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim, o = e(".qyer_spam_text_filter"), o.find("a").each(function() {
						n = e(this), (-1 != (n.html() + n.attr("href")).indexOf("mafengwo.cn") || -1 != (n.html() + n.attr("href")).indexOf("mafengwo.com") || -1 != (n.html() + n.attr("href")).indexOf("mafengwo.net")) && n.replaceWith(e(this).html())
					}), o.each(function() {
						if(n = e(this), i = n.html().replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim, ""), r = i.match(/\<img[\s\S]*?\>/gim), null != r)
							for(var o = 0; o < r.length; o++) i = i.replace(r[o], "[imgimg]" + o + "[/imgimg]");
						if(i = i.replace(t, ""), null != r)
							for(var o = 0; o < r.length; o++) i = i.replace("[imgimg]" + o + "[/imgimg]", r[o]);
						n.html(i)
					}), t = n = i = r = o = null
				},
				openUrl: function(t) {
					var n = e('<form action="' + t + '" target="_blank" method="get"></form>');
					n.appendTo(document.body), n.submit(), setTimeout(function() {
						n.remove(), n = null
					}, 8e3)
				}
			}
		}(), ! function() {
			function e(e, t) {
				for(var n in t) e[n] = t[n]
			}
			e(Date.prototype, {
				qGetWeekStr: function() {
					return "星期" + ["日", "一", "二", "三", "四", "五", "六"][this.getDay()]
				},
				qAddDate: function(e) {
					return this.setDate(this.getDate() + e), this
				},
				qToString: function(e) {
					var t = [this.getFullYear(), this.getMonth() + 1, this.getDate()];
					return t.join(e || "-")
				}
			}), e(String.prototype, {
				qToDate: function(e) {
					var t = this.split(e || "-");
					t = [0 | t[0], (0 | t[1]) - 1, 0 | t[2]];
					var n = new Date(t[0], t[1], t[2]);
					return t.length = 0, t = null, n
				},
				qToIntFixed: function() {
					var e = 0 | this;
					return 10 > e ? "0" + e : e.toString()
				},
				qToHTML: function() {
					return this.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/\n/gi, "<br />").replace(/\t/gi, "&nbsp;&nbsp;&nbsp;&nbsp;")
				}
			})
		}()
	}(), $(function() {
		qyerUtil.init()
	}), window.qyerUtil.insertStyle([".qui-feedback { position:fixed; _position:absolute; z-index:99; top:120px; right:-246px; display:none;}", ".qui-feedback .icon { float:left; width:24px; height:150px; background:url(//static.qyer.com/models/common/component/feedback/icons_feedback.png) 0 0 no-repeat; cursor:pointer;}", ".qui-feedback.js-current > .icon { background-position:-29px 0;}", ".qui-feedback .cnt { float:left; width:246px; height:280px; background-color:#e8e4df;}", ".qui-feedback .cnt form { padding:10px; font-size:0;}", ".qui-feedback .cnt textarea { width:214px; height:192px; padding:2px 5px; border:1px solid #ccc; font-size:12px;}", ".qui-feedback .cnt input { float:right; margin-top:10px;}", ".qui-feedback .help { position:relative; top:-1px; border:1px solid #ccc; border-top:none; background:#fefdc9; height:24px; line-height:22px; text-align:center;font-size:12px;}", ".qui-feedback .help a { font-weight:bold; }"].join("")), setTimeout(function() {
		! function() {
			function e() {
				this.init()
			}
			var t;
			e.prototype = {
				$div: null,
				init: function() {
					this.createDom(), this.bindEvt()
				},
				tip: function(e) {
					requirejs(["common/models/common/ui/tip/tip"], function(t) {
						t.tip(e)
					})
				},
				createDom: function() {
					var e = ['<div class="qui-feedback">', '<div class="icon js-btn" title="意见反馈"></div>', '<div class="cnt">', '<form method="post">', '<textarea class="js-feedback-cnt" cols="50" rows="10" placeholder="有任何意见或建议请告诉我们"></textarea>', '<p class="help">使用遇到问题？请先进入<a href="//bbs.qyer.com/forum-10-1.html" target="_blank">帮助中心</a></p>', '<input class="ui_button js-submitBtn" type="button" value="提交" class="ui_button">', "</form>", "</div>", "</div>"].join("");
					$(document.body).append(e), this.$div = $(".qui-feedback").fadeIn(300), $div = null
				},
				showLogin: function() {
					window.qyerUtil.doLogin()
				},
				bindEvt: function() {
					var e = this;
					this.$div.on("click", ".js-btn", function(t) {
						e[e.$div.hasClass("js-current") ? "hideDiv" : "showDiv"]()
					}).on("click", "textarea.js-feedback-cnt", function(e) {
						window.QYER && window.QYER.uid || t.showLogin()
					}).on("click", "input.js-submitBtn", function(n) {
						if(window.QYER && window.QYER.uid) {
							var i = e.checkForm();
							i && e.submitForm(i)
						} else t.showLogin()
					}), $(document).on("click", function(t) {
						var n = $(t.target);
						n.closest(".qui-feedback").size() < 1 && e.hideDiv()
					})
				},
				showDiv: function() {
					var e = this;
					this.$div.animate({
						right: 0
					}, 200, function() {
						e.$div.addClass("js-current")
					})
				},
				hideDiv: function() {
					var e = this;
					this.$div.animate({
						right: -246
					}, 200, function() {
						e.$div.removeClass("js-current")
					})
				},
				checkValue: {
					cnt: function(e) {
						var n = $(".js-feedback-cnt").val();
						if(n = $.trim(n), "" == n || "有任何意见或建议请告诉我们" == n) return t.tip({
							text: "意见或建议不能为空",
							type: "error"
						}), !1;
						var i = window.qyerUtil.getWordLen(n);
						return i < 20 ? (t.tip({
							text: "不能少于10个字",
							type: "error"
						}), !1) : n
					}
				},
				checkForm: function() {
					var e = this.$div.find(".js-feedback-cnt").val();
					return this.checkValue.cnt(e)
				},
				submitForm: function(e) {
					var n = this,
						i = {
							data: {
								cnt: e,
								url: location.href
							},
							onSuccess: function(e) {
								n.$div.find("textarea.js-feedback-cnt").val(""), t.tip({
									text: e.data.msg
								})
							},
							onError: function(e) {
								77 == e.error_code ? t.showLogin() : t.tip({
									text: ret.data.msg,
									type: "error"
								})
							}
						};
					this.postFeedback(i)
				},
				postFeedback: function(e) {
					e.posturl = "/api_action_feedback", window.qyerUtil.doAjax(e)
				}
			}, t = new e
		}()
	}, 3e3), jQuery.datepicker || ! function(e, t) {
		function n() {
			this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
				closeText: "Done",
				prevText: "Prev",
				nextText: "Next",
				currentText: "Today",
				monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				weekHeader: "Wk",
				dateFormat: "mm/dd/yy",
				firstDay: 0,
				isRTL: !1,
				showMonthAfterYear: !1,
				yearSuffix: ""
			}, this._defaults = {
				showOn: "focus",
				showAnim: "fadeIn",
				showOptions: {},
				defaultDate: null,
				appendText: "",
				buttonText: "...",
				buttonImage: "",
				buttonImageOnly: !1,
				hideIfNoPrevNext: !1,
				navigationAsDateFormat: !1,
				gotoCurrent: !1,
				changeMonth: !1,
				changeYear: !1,
				yearRange: "c-10:c+10",
				showOtherMonths: !1,
				selectOtherMonths: !1,
				showWeek: !1,
				calculateWeek: this.iso8601Week,
				shortYearCutoff: "+10",
				minDate: null,
				maxDate: null,
				duration: "fast",
				beforeShowDay: null,
				beforeShow: null,
				onSelect: null,
				onChangeMonthYear: null,
				onClose: null,
				numberOfMonths: 1,
				showCurrentAtPos: 0,
				stepMonths: 1,
				stepBigMonths: 12,
				altField: "",
				altFormat: "",
				constrainInput: !0,
				showButtonPanel: !1,
				autoSize: !1,
				disabled: !1
			}, e.extend(this._defaults, this.regional[""]), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
		}

		function i(t) {
			var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
			return t.delegate(n, "mouseout", function() {
				e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
			}).delegate(n, "mouseover", function() {
				e.datepicker._isDisabledDatepicker(o.inline ? t.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
			})
		}

		function r(t, n) {
			e.extend(t, n);
			for(var i in n) null == n[i] && (t[i] = n[i]);
			return t
		}
		e.extend(e.ui, {
			datepicker: {
				version: "1.10.3"
			}
		});
		var o, s = "datepicker";
		e.extend(n.prototype, {
			markerClassName: "hasDatepicker",
			maxRows: 4,
			_widgetDatepicker: function() {
				return this.dpDiv
			},
			setDefaults: function(e) {
				return r(this._defaults, e || {}), this
			},
			_attachDatepicker: function(t, n) {
				var i, r, o;
				i = t.nodeName.toLowerCase(), r = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), o = this._newInst(e(t), r), o.settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, o) : r && this._inlineDatepicker(t, o)
			},
			_newInst: function(t, n) {
				var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
				return {
					id: r,
					input: t,
					selectedDay: 0,
					selectedMonth: 0,
					selectedYear: 0,
					drawMonth: 0,
					drawYear: 0,
					inline: n,
					dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
				}
			},
			_connectDatepicker: function(t, n) {
				var i = e(t);
				n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, s, n), n.settings.disabled && this._disableDatepicker(t))
			},
			_attachments: function(t, n) {
				var i, r, o, s = this._get(n, "appendText"),
					a = this._get(n, "isRTL");
				n.append && n.append.remove(), s && (n.append = e("<span class='" + this._appendClass + "'>" + s + "</span>"), t[a ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (r = this._get(n, "buttonText"), o = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
					src: o,
					alt: r,
					title: r
				}) : e("<button type='button'></button>").addClass(this._triggerClass).html(o ? e("<img/>").attr({
					src: o,
					alt: r,
					title: r
				}) : r)), t[a ? "before" : "after"](n.trigger), n.trigger.click(function() {
					return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
				}))
			},
			_autoSize: function(e) {
				if(this._get(e, "autoSize") && !e.inline) {
					var t, n, i, r, o = new Date(2009, 11, 20),
						s = this._get(e, "dateFormat");
					s.match(/[DM]/) && (t = function(e) {
						for(n = 0, i = 0, r = 0; e.length > r; r++) e[r].length > n && (n = e[r].length, i = r);
						return i
					}, o.setMonth(t(this._get(e, s.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(t(this._get(e, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), e.input.attr("size", this._formatDate(e, o).length)
				}
			},
			_inlineDatepicker: function(t, n) {
				var i = e(t);
				i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, s, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
			},
			_dialogDatepicker: function(t, n, i, o, a) {
				var l, c, u, d, f, h = this._dialogInst;
				return h || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, e.data(this._dialogInput[0], s, h)), r(h.settings, o || {}), n = n && n.constructor === Date ? this._formatDate(h, n) : n, this._dialogInput.val(n), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (c = document.documentElement.clientWidth, u = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, f = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + d, u / 2 - 150 + f]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], s, h), this
			},
			_destroyDatepicker: function(t) {
				var n, i = e(t),
					r = e.data(t, s);
				i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, s), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && i.removeClass(this.markerClassName).empty())
			},
			_enableDatepicker: function(t) {
				var n, i, r = e(t),
					o = e.data(t, s);
				r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, o.trigger.filter("button").each(function() {
					this.disabled = !1
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				})) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
					return e === t ? null : e
				}))
			},
			_disableDatepicker: function(t) {
				var n, i, r = e(t),
					o = e.data(t, s);
				r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, o.trigger.filter("button").each(function() {
					this.disabled = !0
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				})) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
					return e === t ? null : e
				}), this._disabledInputs[this._disabledInputs.length] = t)
			},
			_isDisabledDatepicker: function(e) {
				if(!e) return !1;
				for(var t = 0; this._disabledInputs.length > t; t++)
					if(this._disabledInputs[t] === e) return !0;
				return !1
			},
			_getInst: function(t) {
				try {
					return e.data(t, s)
				} catch(n) {
					throw "Missing instance data for this datepicker"
				}
			},
			_optionDatepicker: function(n, i, o) {
				var s, a, l, c, u = this._getInst(n);
				return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : u ? "all" === i ? e.extend({}, u.settings) : this._get(u, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = o), u && (this._curInst === u && this._hideDatepicker(), a = this._getDateDatepicker(n, !0), l = this._getMinMaxDate(u, "min"), c = this._getMinMaxDate(u, "max"), r(u.settings, s), null !== l && s.dateFormat !== t && s.minDate === t && (u.settings.minDate = this._formatDate(u, l)), null !== c && s.dateFormat !== t && s.maxDate === t && (u.settings.maxDate = this._formatDate(u, c)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), u), this._autoSize(u), this._setDate(u, a), this._updateAlternate(u), this._updateDatepicker(u)), t)
			},
			_changeDatepicker: function(e, t, n) {
				this._optionDatepicker(e, t, n)
			},
			_refreshDatepicker: function(e) {
				var t = this._getInst(e);
				t && this._updateDatepicker(t)
			},
			_setDateDatepicker: function(e, t) {
				var n = this._getInst(e);
				n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
			},
			_getDateDatepicker: function(e, t) {
				var n = this._getInst(e);
				return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
			},
			_doKeyDown: function(t) {
				var n, i, r, o = e.datepicker._getInst(t.target),
					s = !0,
					a = o.dpDiv.is(".ui-datepicker-rtl");
				if(o._keyEvent = !0, e.datepicker._datepickerShowing) switch(t.keyCode) {
					case 9:
						e.datepicker._hideDatepicker(), s = !1;
						break;
					case 13:
						return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", o.dpDiv), r[0] && e.datepicker._selectDay(t.target, o.selectedMonth, o.selectedYear, r[0]), n = e.datepicker._get(o, "onSelect"), n ? (i = e.datepicker._formatDate(o), n.apply(o.input ? o.input[0] : null, [i, o])) : e.datepicker._hideDatepicker(), !1;
					case 27:
						e.datepicker._hideDatepicker();
						break;
					case 33:
						e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
						break;
					case 34:
						e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
						break;
					case 35:
						(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), s = t.ctrlKey || t.metaKey;
						break;
					case 36:
						(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), s = t.ctrlKey || t.metaKey;
						break;
					case 37:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
						break;
					case 38:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), s = t.ctrlKey || t.metaKey;
						break;
					case 39:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
						break;
					case 40:
						(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), s = t.ctrlKey || t.metaKey;
						break;
					default:
						s = !1
				} else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : s = !1;
				s && (t.preventDefault(), t.stopPropagation())
			},
			_doKeyPress: function(n) {
				var i, r, o = e.datepicker._getInst(n.target);
				return e.datepicker._get(o, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(o, "dateFormat")), r = String.fromCharCode(null == n.charCode ? n.keyCode : n.charCode), n.ctrlKey || n.metaKey || " " > r || !i || i.indexOf(r) > -1) : t
			},
			_doKeyUp: function(t) {
				var n, i = e.datepicker._getInst(t.target);
				if(i.input.val() !== i.lastVal) try {
					n = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), n && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
				} catch(r) {}
				return !0
			},
			_showDatepicker: function(t) {
				if(t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
					var n, i, o, s, a, l, c;
					n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), i = e.datepicker._get(n, "beforeShow"), o = i ? i.apply(t, [t, n]) : {}, o !== !1 && (r(n.settings, o), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
						return s |= "fixed" === e(this).css("position"), !s
					}), a = {
						left: e.datepicker._pos[0],
						top: e.datepicker._pos[1]
					}, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
						position: "absolute",
						display: "block",
						top: "-1000px"
					}), e.datepicker._updateDatepicker(n), a = e.datepicker._checkOffset(n, a, s), n.dpDiv.css({
						position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
						display: "none",
						left: a.left + "px",
						top: a.top + "px"
					}), n.inline || (l = e.datepicker._get(n, "showAnim"), c = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? n.dpDiv.show(l, e.datepicker._get(n, "showOptions"), c) : n.dpDiv[l || "show"](l ? c : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n))
				}
			},
			_updateDatepicker: function(t) {
				this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
				var n, i = this._getNumberOfMonths(t),
					r = i[1],
					s = 17;
				t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", s * r + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
					n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
				}, 0))
			},
			_shouldFocusInput: function(e) {
				return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
			},
			_checkOffset: function(t, n, i) {
				var r = t.dpDiv.outerWidth(),
					o = t.dpDiv.outerHeight(),
					s = t.input ? t.input.outerWidth() : 0,
					a = t.input ? t.input.outerHeight() : 0,
					l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
					c = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
				return n.left -= this._get(t, "isRTL") ? r - s : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + a ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + o > c && c > o ? Math.abs(o + a) : 0), n
			},
			_findPos: function(t) {
				for(var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
				return n = e(t).offset(), [n.left, n.top]
			},
			_hideDatepicker: function(t) {
				var n, i, r, o, a = this._curInst;
				!a || t && a !== e.data(t, s) || this._datepickerShowing && (n = this._get(a, "showAnim"), i = this._get(a, "duration"), r = function() {
					e.datepicker._tidyDialog(a)
				}, e.effects && (e.effects.effect[n] || e.effects[n]) ? a.dpDiv.hide(n, e.datepicker._get(a, "showOptions"), i, r) : a.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
					position: "absolute",
					left: "0",
					top: "-100px"
				}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
			},
			_tidyDialog: function(e) {
				e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
			},
			_checkExternalClick: function(t) {
				if(e.datepicker._curInst) {
					var n = e(t.target),
						i = e.datepicker._getInst(n[0]);
					(n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
				}
			},
			_adjustDate: function(t, n, i) {
				var r = e(t),
					o = this._getInst(r[0]);
				this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(o, n + ("M" === i ? this._get(o, "showCurrentAtPos") : 0), i), this._updateDatepicker(o))
			},
			_gotoToday: function(t) {
				var n, i = e(t),
					r = this._getInst(i[0]);
				this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
			},
			_selectMonthYear: function(t, n, i) {
				var r = e(t),
					o = this._getInst(r[0]);
				o["selected" + ("M" === i ? "Month" : "Year")] = o["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(r)
			},
			_selectDay: function(t, n, i, r) {
				var o, s = e(t);
				e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (o = this._getInst(s[0]), o.selectedDay = o.currentDay = e("a", r).html(), o.selectedMonth = o.currentMonth = n, o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
			},
			_clearDate: function(t) {
				var n = e(t);
				this._selectDate(n, "")
			},
			_selectDate: function(t, n) {
				var i, r = e(t),
					o = this._getInst(r[0]);
				n = null != n ? n : this._formatDate(o), o.input && o.input.val(n), this._updateAlternate(o), i = this._get(o, "onSelect"), i ? i.apply(o.input ? o.input[0] : null, [n, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
			},
			_updateAlternate: function(t) {
				var n, i, r, o = this._get(t, "altField");
				o && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(o).each(function() {
					e(this).val(r)
				}))
			},
			noWeekends: function(e) {
				var t = e.getDay();
				return [t > 0 && 6 > t, ""]
			},
			iso8601Week: function(e) {
				var t, n = new Date(e.getTime());
				return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
			},
			parseDate: function(n, i, r) {
				if(null == n || null == i) throw "Invalid arguments";
				if(i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
				var o, s, a, l, c = 0,
					u = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
					d = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
					f = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
					h = (r ? r.dayNames : null) || this._defaults.dayNames,
					p = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
					m = (r ? r.monthNames : null) || this._defaults.monthNames,
					g = -1,
					v = -1,
					y = -1,
					b = -1,
					w = !1,
					x = function(e) {
						var t = n.length > o + 1 && n.charAt(o + 1) === e;
						return t && o++, t
					},
					_ = function(e) {
						var t = x(e),
							n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
							r = RegExp("^\\d{1," + n + "}"),
							o = i.substring(c).match(r);
						if(!o) throw "Missing number at position " + c;
						return c += o[0].length, parseInt(o[0], 10)
					},
					C = function(n, r, o) {
						var s = -1,
							a = e.map(x(n) ? o : r, function(e, t) {
								return [
									[t, e]
								]
							}).sort(function(e, t) {
								return -(e[1].length - t[1].length)
							});
						if(e.each(a, function(e, n) {
								var r = n[1];
								return i.substr(c, r.length).toLowerCase() === r.toLowerCase() ? (s = n[0], c += r.length, !1) : t
							}), -1 !== s) return s + 1;
						throw "Unknown name at position " + c
					},
					k = function() {
						if(i.charAt(c) !== n.charAt(o)) throw "Unexpected literal at position " + c;
						c++
					};
				for(o = 0; n.length > o; o++)
					if(w) "'" !== n.charAt(o) || x("'") ? k() : w = !1;
					else switch(n.charAt(o)) {
						case "d":
							y = _("d");
							break;
						case "D":
							C("D", f, h);
							break;
						case "o":
							b = _("o");
							break;
						case "m":
							v = _("m");
							break;
						case "M":
							v = C("M", p, m);
							break;
						case "y":
							g = _("y");
							break;
						case "@":
							l = new Date(_("@")), g = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
							break;
						case "!":
							l = new Date((_("!") - this._ticksTo1970) / 1e4), g = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
							break;
						case "'":
							x("'") ? k() : w = !0;
							break;
						default:
							k()
					}
				if(i.length > c && (a = i.substr(c), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
				if(-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= g ? 0 : -100)), b > -1)
					for(v = 1, y = b; s = this._getDaysInMonth(g, v - 1), !(s >= y);) v++, y -= s;
				if(l = this._daylightSavingAdjust(new Date(g, v - 1, y)), l.getFullYear() !== g || l.getMonth() + 1 !== v || l.getDate() !== y) throw "Invalid date";
				return l
			},
			ATOM: "yy-mm-dd",
			COOKIE: "D, dd M yy",
			ISO_8601: "yy-mm-dd",
			RFC_822: "D, d M y",
			RFC_850: "DD, dd-M-y",
			RFC_1036: "D, d M y",
			RFC_1123: "D, d M yy",
			RFC_2822: "D, d M yy",
			RSS: "D, d M y",
			TICKS: "!",
			TIMESTAMP: "@",
			W3C: "yy-mm-dd",
			_ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
			formatDate: function(e, t, n) {
				if(!t) return "";
				var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
					o = (n ? n.dayNames : null) || this._defaults.dayNames,
					s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
					a = (n ? n.monthNames : null) || this._defaults.monthNames,
					l = function(t) {
						var n = e.length > i + 1 && e.charAt(i + 1) === t;
						return n && i++, n
					},
					c = function(e, t, n) {
						var i = "" + t;
						if(l(e))
							for(; n > i.length;) i = "0" + i;
						return i
					},
					u = function(e, t, n, i) {
						return l(e) ? i[t] : n[t]
					},
					d = "",
					f = !1;
				if(t)
					for(i = 0; e.length > i; i++)
						if(f) "'" !== e.charAt(i) || l("'") ? d += e.charAt(i) : f = !1;
						else switch(e.charAt(i)) {
							case "d":
								d += c("d", t.getDate(), 2);
								break;
							case "D":
								d += u("D", t.getDay(), r, o);
								break;
							case "o":
								d += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
								break;
							case "m":
								d += c("m", t.getMonth() + 1, 2);
								break;
							case "M":
								d += u("M", t.getMonth(), s, a);
								break;
							case "y":
								d += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
								break;
							case "@":
								d += t.getTime();
								break;
							case "!":
								d += 1e4 * t.getTime() + this._ticksTo1970;
								break;
							case "'":
								l("'") ? d += "'" : f = !0;
								break;
							default:
								d += e.charAt(i)
						}
				return d
			},
			_possibleChars: function(e) {
				var t, n = "",
					i = !1,
					r = function(n) {
						var i = e.length > t + 1 && e.charAt(t + 1) === n;
						return i && t++, i
					};
				for(t = 0; e.length > t; t++)
					if(i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
					else switch(e.charAt(t)) {
						case "d":
						case "m":
						case "y":
						case "@":
							n += "0123456789";
							break;
						case "D":
						case "M":
							return null;
						case "'":
							r("'") ? n += "'" : i = !0;
							break;
						default:
							n += e.charAt(t)
					}
				return n
			},
			_get: function(e, n) {
				return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
			},
			_setDateFromField: function(e, t) {
				if(e.input.val() !== e.lastVal) {
					var n = this._get(e, "dateFormat"),
						i = e.lastVal = e.input ? e.input.val() : null,
						r = this._getDefaultDate(e),
						o = r,
						s = this._getFormatConfig(e);
					try {
						o = this.parseDate(n, i, s) || r
					} catch(a) {
						i = t ? "" : i
					}
					e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), e.currentDay = i ? o.getDate() : 0, e.currentMonth = i ? o.getMonth() : 0, e.currentYear = i ? o.getFullYear() : 0, this._adjustInstDate(e)
				}
			},
			_getDefaultDate: function(e) {
				return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
			},
			_determineDate: function(t, n, i) {
				var r = function(e) {
						var t = new Date;
						return t.setDate(t.getDate() + e), t
					},
					o = function(n) {
						try {
							return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
						} catch(i) {}
						for(var r = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, o = r.getFullYear(), s = r.getMonth(), a = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(n); c;) {
							switch(c[2] || "d") {
								case "d":
								case "D":
									a += parseInt(c[1], 10);
									break;
								case "w":
								case "W":
									a += 7 * parseInt(c[1], 10);
									break;
								case "m":
								case "M":
									s += parseInt(c[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(o, s));
									break;
								case "y":
								case "Y":
									o += parseInt(c[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(o, s))
							}
							c = l.exec(n)
						}
						return new Date(o, s, a)
					},
					s = null == n || "" === n ? i : "string" == typeof n ? o(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
				return s = s && "Invalid Date" == "" + s ? i : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
			},
			_daylightSavingAdjust: function(e) {
				return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
			},
			_setDate: function(e, t, n) {
				var i = !t,
					r = e.selectedMonth,
					o = e.selectedYear,
					s = this._restrictMinMax(e, this._determineDate(e, t, new Date));
				e.selectedDay = e.currentDay = s.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth(), e.drawYear = e.selectedYear = e.currentYear = s.getFullYear(), r === e.selectedMonth && o === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
			},
			_getDate: function(e) {
				var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
				return t
			},
			_attachHandlers: function(t) {
				var n = this._get(t, "stepMonths"),
					i = "#" + t.id.replace(/\\\\/g, "\\");
				t.dpDiv.find("[data-handler]").map(function() {
					var t = {
						prev: function() {
							e.datepicker._adjustDate(i, -n, "M")
						},
						next: function() {
							e.datepicker._adjustDate(i, +n, "M")
						},
						hide: function() {
							e.datepicker._hideDatepicker()
						},
						today: function() {
							e.datepicker._gotoToday(i)
						},
						selectDay: function() {
							return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
						},
						selectMonth: function() {
							return e.datepicker._selectMonthYear(i, this, "M"), !1
						},
						selectYear: function() {
							return e.datepicker._selectMonthYear(i, this, "Y"), !1
						}
					};
					e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
				})
			},
			_generateHTML: function(e) {
				var t, n, i, r, o, s, a, l, c, u, d, f, h, p, m, g, v, y, b, w, x, _, C, k, N, E, S, T, D, A, U, M, O, I, L, P, R, B, j, F = new Date,
					H = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
					q = this._get(e, "isRTL"),
					$ = this._get(e, "showButtonPanel"),
					z = this._get(e, "hideIfNoPrevNext"),
					W = this._get(e, "navigationAsDateFormat"),
					V = this._getNumberOfMonths(e),
					Y = this._get(e, "showCurrentAtPos"),
					X = this._get(e, "stepMonths"),
					K = 1 !== V[0] || 1 !== V[1],
					G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
					J = this._getMinMaxDate(e, "min"),
					Q = this._getMinMaxDate(e, "max"),
					Z = e.drawMonth - Y,
					ee = e.drawYear;
				if(0 > Z && (Z += 12, ee--), Q)
					for(t = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - V[0] * V[1] + 1, Q.getDate())), t = J && J > t ? J : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
				for(e.drawMonth = Z, e.drawYear = ee, n = this._get(e, "prevText"), n = W ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Z - X, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = W ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, Z + X, 1)), this._getFormatConfig(e)) : r, o = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>", s = this._get(e, "currentText"), a = this._get(e, "gotoCurrent") && e.currentDay ? G : H, s = W ? this.formatDate(s, a, this._getFormatConfig(e)) : s, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = $ ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(e, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + (q ? "" : l) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), f = this._get(e, "dayNames"), h = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", _ = 0; V[0] > _; _++) {
					for(C = "", this.maxRows = 4, k = 0; V[1] > k; k++) {
						if(N = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), E = " ui-corner-all", S = "", K) {
							if(S += "<div class='ui-datepicker-group", V[1] > 1) switch(k) {
								case 0:
									S += " ui-datepicker-group-first", E = " ui-corner-" + (q ? "right" : "left");
									break;
								case V[1] - 1:
									S += " ui-datepicker-group-last", E = " ui-corner-" + (q ? "left" : "right");
									break;
								default:
									S += " ui-datepicker-group-middle", E = ""
							}
							S += "'>"
						}
						for(S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + E + "'>" + (/all|left/.test(E) && 0 === _ ? q ? o : i : "") + (/all|right/.test(E) && 0 === _ ? q ? i : o : "") + this._generateMonthYearHeader(e, Z, ee, J, Q, _ > 0 || k > 0, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) D = (x + u) % 7, T += "<th" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + f[D] + "'>" + h[D] + "</span></th>";
						for(S += T + "</tr></thead><tbody>", A = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), U = (this._getFirstDayOfMonth(ee, Z) - u + 7) % 7, M = Math.ceil((U + A) / 7), O = K && this.maxRows > M ? this.maxRows : M, this.maxRows = O, I = this._daylightSavingAdjust(new Date(ee, Z, 1 - U)), L = 0; O > L; L++) {
							for(S += "<tr>", P = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(I) + "</td>" : "", x = 0; 7 > x; x++) R = g ? g.apply(e.input ? e.input[0] : null, [I]) : [!0, ""], B = I.getMonth() !== Z, j = B && !y || !R[0] || J && J > I || Q && I > Q, P += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (I.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === I.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + R[1] + (I.getTime() === G.getTime() ? " " + this._currentClass : "") + (I.getTime() === H.getTime() ? " ui-datepicker-today" : "")) + "'" + (B && !v || !R[2] ? "" : " title='" + R[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (B && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === H.getTime() ? " ui-state-highlight" : "") + (I.getTime() === G.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
							S += P + "</tr>"
						}
						Z++, Z > 11 && (Z = 0, ee++),
							S += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += S
					}
					w += C
				}
				return w += c, e._keyEvent = !1, w
			},
			_generateMonthYearHeader: function(e, t, n, i, r, o, s, a) {
				var l, c, u, d, f, h, p, m, g = this._get(e, "changeMonth"),
					v = this._get(e, "changeYear"),
					y = this._get(e, "showMonthAfterYear"),
					b = "<div class='ui-datepicker-title'>",
					w = "";
				if(o || !g) w += "<span class='ui-datepicker-month'>" + s[t] + "</span>";
				else {
					for(l = i && i.getFullYear() === n, c = r && r.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= i.getMonth()) && (!c || r.getMonth() >= u) && (w += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + a[u] + "</option>");
					w += "</select>"
				}
				if(y || (b += w + (!o && g && v ? "" : "&#xa0;")), !e.yearshtml)
					if(e.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
					else {
						for(d = this._get(e, "yearRange").split(":"), f = (new Date).getFullYear(), h = function(e) {
								var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? f + parseInt(e, 10) : parseInt(e, 10);
								return isNaN(t) ? f : t
							}, p = h(d[0]), m = Math.max(p, h(d[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, m = r ? Math.min(m, r.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= p; p++) e.yearshtml += "<option value='" + p + "'" + (p === n ? " selected='selected'" : "") + ">" + p + "</option>";
						e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
					}
				return b += this._get(e, "yearSuffix"), y && (b += (!o && g && v ? "" : "&#xa0;") + w), b += "</div>"
			},
			_adjustInstDate: function(e, t, n) {
				var i = e.drawYear + ("Y" === n ? t : 0),
					r = e.drawMonth + ("M" === n ? t : 0),
					o = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
					s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, o)));
				e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
			},
			_restrictMinMax: function(e, t) {
				var n = this._getMinMaxDate(e, "min"),
					i = this._getMinMaxDate(e, "max"),
					r = n && n > t ? n : t;
				return i && r > i ? i : r
			},
			_notifyChange: function(e) {
				var t = this._get(e, "onChangeMonthYear");
				t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
			},
			_getNumberOfMonths: function(e) {
				var t = this._get(e, "numberOfMonths");
				return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
			},
			_getMinMaxDate: function(e, t) {
				return this._determineDate(e, this._get(e, t + "Date"), null)
			},
			_getDaysInMonth: function(e, t) {
				return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
			},
			_getFirstDayOfMonth: function(e, t) {
				return new Date(e, t, 1).getDay()
			},
			_canAdjustMonth: function(e, t, n, i) {
				var r = this._getNumberOfMonths(e),
					o = this._daylightSavingAdjust(new Date(n, i + (0 > t ? t : r[0] * r[1]), 1));
				return 0 > t && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
			},
			_isInRange: function(e, t) {
				var n, i, r = this._getMinMaxDate(e, "min"),
					o = this._getMinMaxDate(e, "max"),
					s = null,
					a = null,
					l = this._get(e, "yearRange");
				return l && (n = l.split(":"), i = (new Date).getFullYear(), s = parseInt(n[0], 10), a = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (s += i), n[1].match(/[+\-].*/) && (a += i)), (!r || t.getTime() >= r.getTime()) && (!o || t.getTime() <= o.getTime()) && (!s || t.getFullYear() >= s) && (!a || a >= t.getFullYear())
			},
			_getFormatConfig: function(e) {
				var t = this._get(e, "shortYearCutoff");
				return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
					shortYearCutoff: t,
					dayNamesShort: this._get(e, "dayNamesShort"),
					dayNames: this._get(e, "dayNames"),
					monthNamesShort: this._get(e, "monthNamesShort"),
					monthNames: this._get(e, "monthNames")
				}
			},
			_formatDate: function(e, t, n, i) {
				t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
				var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
				return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
			}
		}), e.fn.datepicker = function(t) {
			if(!this.length) return this;
			e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
			var n = Array.prototype.slice.call(arguments, 1);
			return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
				"string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
			}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
		}, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
	}(jQuery), ! function(e, t, n, i) {
		var r = e(t);
		e.fn.lazyload = function(o) {
			function s() {
				var t = 0;
				l.each(function() {
					var n = e(this);
					if(!c.skip_invisible || n.is(":visible"))
						if(e.abovethetop(this, c) || e.leftofbegin(this, c));
						else if(e.belowthefold(this, c) || e.rightoffold(this, c)) {
						if(++t > c.failure_limit) return !1
					} else n.trigger("appear"), t = 0
				})
			}
			var a, l = this,
				c = {
					threshold: 0,
					failure_limit: 0,
					event: "scroll",
					effect: "show",
					container: t,
					data_attribute: "original",
					skip_invisible: !0,
					appear: null,
					load: null,
					placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
				};
			return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(c, o)), a = c.container === i || c.container === t ? r : e(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function() {
				return s()
			}), this.each(function() {
				var t = this,
					n = e(t);
				t.loaded = !1, (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", c.placeholder), n.one("appear", function() {
					if(!this.loaded) {
						if(c.appear) {
							var i = l.length;
							c.appear.call(t, i, c)
						}
						e("<img />").bind("load", function() {
							var i = n.attr("data-" + c.data_attribute);
							n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[c.effect](c.effect_speed), t.loaded = !0;
							var r = e.grep(l, function(e) {
								return !e.loaded
							});
							if(l = e(r), c.load) {
								var o = l.length;
								c.load.call(t, o, c)
							}
						}).attr("src", n.attr("data-" + c.data_attribute))
					}
				}), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function() {
					t.loaded || n.trigger("appear")
				})
			}), r.bind("resize", function() {
				s()
			}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) {
				t.originalEvent && t.originalEvent.persisted && l.each(function() {
					e(this).trigger("appear")
				})
			}), e(n).ready(function() {
				s()
			}), this
		}, e.belowthefold = function(n, o) {
			var s;
			return s = o.container === i || o.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(o.container).offset().top + e(o.container).height(), s <= e(n).offset().top - o.threshold
		}, e.rightoffold = function(n, o) {
			var s;
			return s = o.container === i || o.container === t ? r.width() + r.scrollLeft() : e(o.container).offset().left + e(o.container).width(), s <= e(n).offset().left - o.threshold
		}, e.abovethetop = function(n, o) {
			var s;
			return s = o.container === i || o.container === t ? r.scrollTop() : e(o.container).offset().top, s >= e(n).offset().top + o.threshold + e(n).height()
		}, e.leftofbegin = function(n, o) {
			var s;
			return s = o.container === i || o.container === t ? r.scrollLeft() : e(o.container).offset().left, s >= e(n).offset().left + o.threshold + e(n).width()
		}, e.inviewport = function(t, n) {
			return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
		}, e.extend(e.expr[":"], {
			"below-the-fold": function(t) {
				return e.belowthefold(t, {
					threshold: 0
				})
			},
			"above-the-top": function(t) {
				return !e.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-screen": function(t) {
				return e.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-screen": function(t) {
				return !e.rightoffold(t, {
					threshold: 0
				})
			},
			"in-viewport": function(t) {
				return e.inviewport(t, {
					threshold: 0
				})
			},
			"above-the-fold": function(t) {
				return !e.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-fold": function(t) {
				return e.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-fold": function(t) {
				return !e.rightoffold(t, {
					threshold: 0
				})
			}
		})
	}(jQuery, window, document),
	function() {
		function e(e, i) {
			return n(e || self.document.URL || self.location.href, i || t())
		}

		function t() {
			var e = document.getElementsByTagName("script");
			return e[e.length - 1].src
		}

		function n(e, t) {
			var n = t;
			return /^(\/|\\\\)/.test(t) ? n = /^.+?\w(\/|\\\\)/.exec(e)[0] + t.replace(/^(\/|\\\\)/, "") : /^[a-z]+:/i.test(t) || (e = e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, ""), n = e + "" + t), i(n)
		}

		function i(e) {
			var t = /^[a-z]+:\/\//.exec(e)[0],
				n = null,
				i = [];
			for(e = e.replace(t, "").split("?")[0].split("#")[0], e = e.replace(/\\/g, "/").split(/\//), e[e.length - 1] = ""; e.length;) ".." === (n = e.shift()) ? i.pop() : "." !== n && i.push(n);
			return t + i.join("/")
		}
		window.UEDITOR_HOME_URL = "//common1.qyerstatic.com/bbs/old/js/utf8-php/";
		var r = window.UEDITOR_HOME_URL || e();
		window.UEDITOR_CONFIG = {
			UEDITOR_HOME_URL: r,
			serverUrl: r + "php/controller.php",
			imageScaleEnabled: !1,
			pasteplain: !0,
			filterTxtRules: function() {
				function e(e) {
					e.tagName = "p", e.attrs = {}
				}

				function t(e) {
					e.parentNode.removeChild(e, !0)
				}

				function n(e) {
					var t = e.parentNode.children;
					1 != t.length && (e.tagName = "p", e.attrs = {})
				}
				return {
					"-": "script style object iframe embed input select",
					p: {
						$: {}
					},
					img: function(e) {
						return "emotion" == e.attrs["data-id"] ? e : void t(e)
					},
					a: function(e) {
						for(var t in e.attrs) "href" != t && delete e.attrs[t];
						e.attrs.target = "_blank"
					},
					br: n,
					div: function(e) {
						for(var t, n = UE.uNode.createElement("p"); t = e.firstChild();) "text" != t.type && UE.dom.dtd.$block[t.tagName] ? n.firstChild() ? (e.parentNode.insertBefore(n, e), n = UE.uNode.createElement("p")) : e.parentNode.insertBefore(t, e) : n.appendChild(t);
						n.firstChild() && e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e)
					},
					ol: t,
					ul: t,
					dl: t,
					dt: t,
					dd: t,
					li: t,
					caption: e,
					th: e,
					tr: e,
					h3: e,
					h4: e,
					h5: e,
					h6: e,
					td: function(e) {
						var t = !!e.innerText();
						t && e.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"), e), e.parentNode.removeChild(e, e.innerText())
					}
				}
			}(),
			elementPathEnabled: !1,
			wordCount: !1
		}, window.UE = {
			getUEBasePath: e
		}
	}(), UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};
var baidu = window.baidu || {};
window.baidu = baidu, window.UE = baidu.editor = {
	plugins: {},
	commands: {},
	instants: {},
	I18N: {},
	_customizeUI: {},
	version: "1.5.0"
};
var dom = UE.dom = {},
	browser = UE.browser = function() {
		var e = navigator.userAgent.toLowerCase(),
			t = window.opera,
			n = {
				ie: /(msie\s|trident.*rv:)([\w.]+)/i.test(e),
				opera: !!t && t.version,
				webkit: e.indexOf(" applewebkit/") > -1,
				mac: e.indexOf("macintosh") > -1,
				quirks: "BackCompat" == document.compatMode
			};
		n.gecko = "Gecko" == navigator.product && !n.webkit && !n.opera && !n.ie;
		var i = 0;
		if(n.ie) {
			var r = e.match(/(?:msie\s([\w.]+))/),
				o = e.match(/(?:trident.*rv:([\w.]+))/);
			i = r && o && r[1] && o[1] ? Math.max(1 * r[1], 1 * o[1]) : r && r[1] ? 1 * r[1] : o && o[1] ? 1 * o[1] : 0, n.ie11Compat = 11 == document.documentMode, n.ie9Compat = 9 == document.documentMode, n.ie8 = !!document.documentMode, n.ie8Compat = 8 == document.documentMode, n.ie7Compat = 7 == i && !document.documentMode || 7 == document.documentMode, n.ie6Compat = i < 7 || n.quirks, n.ie9above = i > 8, n.ie9below = i < 9, n.ie11above = i > 10, n.ie11below = i < 11
		}
		if(n.gecko) {
			var s = e.match(/rv:([\d\.]+)/);
			s && (s = s[1].split("."), i = 1e4 * s[0] + 100 * (s[1] || 0) + 1 * (s[2] || 0))
		}
		return /chrome\/(\d+\.\d)/i.test(e) && (n.chrome = +RegExp.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) && (n.safari = +(RegExp.$1 || RegExp.$2)), n.opera && (i = parseFloat(t.version())), n.webkit && (i = parseFloat(e.match(/ applewebkit\/(\d+)/)[1])), n.version = i, n.isCompatible = !n.mobile && (n.ie && i >= 6 || n.gecko && i >= 10801 || n.opera && i >= 9.5 || n.air && i >= 1 || n.webkit && i >= 522 || !1), n
	}(),
	ie = browser.ie,
	webkit = browser.webkit,
	gecko = browser.gecko,
	opera = browser.opera,
	utils = UE.utils = {
		each: function(e, t, n) {
			if(null != e)
				if(e.length === +e.length) {
					for(var i = 0, r = e.length; i < r; i++)
						if(t.call(n, e[i], i, e) === !1) return !1
				} else
					for(var o in e)
						if(e.hasOwnProperty(o) && t.call(n, e[o], o, e) === !1) return !1
		},
		makeInstance: function(e) {
			var t = new Function;
			return t.prototype = e, e = new t, t.prototype = null, e
		},
		extend: function(e, t, n) {
			if(t)
				for(var i in t) n && e.hasOwnProperty(i) || (e[i] = t[i]);
			return e
		},
		extend2: function(e) {
			for(var t = arguments, n = 1; n < t.length; n++) {
				var i = t[n];
				for(var r in i) e.hasOwnProperty(r) || (e[r] = i[r])
			}
			return e
		},
		inherits: function(e, t) {
			var n = e.prototype,
				i = utils.makeInstance(t.prototype);
			return utils.extend(i, n, !0), e.prototype = i, i.constructor = e
		},
		bind: function(e, t) {
			return function() {
				return e.apply(t, arguments)
			}
		},
		defer: function(e, t, n) {
			var i;
			return function() {
				n && clearTimeout(i), i = setTimeout(e, t)
			}
		},
		indexOf: function(e, t, n) {
			var i = -1;
			return n = this.isNumber(n) ? n : 0, this.each(e, function(e, r) {
				if(r >= n && e === t) return i = r, !1
			}), i
		},
		removeItem: function(e, t) {
			for(var n = 0, i = e.length; n < i; n++) e[n] === t && (e.splice(n, 1), n--)
		},
		trim: function(e) {
			return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "")
		},
		listToMap: function(e) {
			if(!e) return {};
			e = utils.isArray(e) ? e : e.split(",");
			for(var t, n = 0, i = {}; t = e[n++];) i[t.toUpperCase()] = i[t] = 1;
			return i
		},
		unhtml: function(e, t) {
			return e ? e.replace(t || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function(e, t) {
				return t ? e : {
					"<": "&lt;",
					"&": "&amp;",
					'"': "&quot;",
					">": "&gt;",
					"'": "&#39;"
				}[e]
			}) : ""
		},
		html: function(e) {
			return e ? e.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function(e) {
				return {
					"&lt;": "<",
					"&amp;": "&",
					"&quot;": '"',
					"&gt;": ">",
					"&#39;": "'",
					"&nbsp;": " "
				}[e]
			}) : ""
		},
		cssStyleToDomStyle: function() {
			var e = document.createElement("div").style,
				t = {
					"float": void 0 != e.cssFloat ? "cssFloat" : void 0 != e.styleFloat ? "styleFloat" : "float"
				};
			return function(e) {
				return t[e] || (t[e] = e.toLowerCase().replace(/-./g, function(e) {
					return e.charAt(1).toUpperCase()
				}))
			}
		}(),
		loadFile: function() {
			function e(e, n) {
				try {
					for(var i, r = 0; i = t[r++];)
						if(i.doc === e && i.url == (n.src || n.href)) return i
				} catch(o) {
					return null
				}
			}
			var t = [];
			return function(n, i, r) {
				var o = e(n, i);
				if(o) return void(o.ready ? r && r() : o.funs.push(r));
				if(t.push({
						doc: n,
						url: i.src || i.href,
						funs: [r]
					}), !n.body) {
					var s = [];
					for(var a in i) "tag" != a && s.push(a + '="' + i[a] + '"');
					return void n.write("<" + i.tag + " " + s.join(" ") + " ></" + i.tag + ">")
				}
				if(!i.id || !n.getElementById(i.id)) {
					var l = n.createElement(i.tag);
					delete i.tag;
					for(var a in i) l.setAttribute(a, i[a]);
					l.onload = l.onreadystatechange = function() {
						if(!this.readyState || /loaded|complete/.test(this.readyState)) {
							if(o = e(n, i), o.funs.length > 0) {
								o.ready = 1;
								for(var t; t = o.funs.pop();) t()
							}
							l.onload = l.onreadystatechange = null
						}
					}, l.onerror = function() {
						throw Error("The load " + (i.href || i.src) + " fails,check the url settings of file ueditor.config.js ")
					}, n.getElementsByTagName("head")[0].appendChild(l)
				}
			}
		}(),
		isEmptyObject: function(e) {
			if(null == e) return !0;
			if(this.isArray(e) || this.isString(e)) return 0 === e.length;
			for(var t in e)
				if(e.hasOwnProperty(t)) return !1;
			return !0
		},
		fixColor: function(e, t) {
			if(/color/i.test(e) && /rgba?/.test(t)) {
				var n = t.split(",");
				if(n.length > 3) return "";
				t = "#";
				for(var i, r = 0; i = n[r++];) i = parseInt(i.replace(/[^\d]/gi, ""), 10).toString(16), t += 1 == i.length ? "0" + i : i;
				t = t.toUpperCase()
			}
			return t
		},
		optCss: function(e) {
			function t(e, t) {
				if(!e) return "";
				var n = e.top,
					i = e.bottom,
					r = e.left,
					o = e.right,
					s = "";
				if(n && r && i && o) s += ";" + t + ":" + (n == i && i == r && r == o ? n : n == i && r == o ? n + " " + r : r == o ? n + " " + r + " " + i : n + " " + o + " " + i + " " + r) + ";";
				else
					for(var a in e) s += ";" + t + "-" + a + ":" + e[a] + ";";
				return s
			}
			var n, i;
			return e = e.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function(e, t, r, o) {
				if(1 == o.split(" ").length) switch(t) {
					case "padding":
						return !n && (n = {}), n[r] = o, "";
					case "margin":
						return !i && (i = {}), i[r] = o, "";
					case "border":
						return "initial" == o ? "" : e
				}
				return e
			}), e += t(n, "padding") + t(i, "margin"), e.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, "").replace(/;([ \n\r\t]+)|\1;/g, ";").replace(/(&((l|g)t|quot|#39))?;{2,}/g, function(e, t) {
				return t ? t + ";;" : ";"
			})
		},
		clone: function(e, t) {
			var n;
			t = t || {};
			for(var i in e) e.hasOwnProperty(i) && (n = e[i], "object" == typeof n ? (t[i] = utils.isArray(n) ? [] : {}, utils.clone(e[i], t[i])) : t[i] = n);
			return t
		},
		transUnitToPx: function(e) {
			if(!/(pt|cm)/.test(e)) return e;
			var t;
			switch(e.replace(/([\d.]+)(\w+)/, function(n, i, r) {
				e = i, t = r
			}), t) {
				case "cm":
					e = 25 * parseFloat(e);
					break;
				case "pt":
					e = Math.round(96 * parseFloat(e) / 72)
			}
			return e + (e ? "px" : "")
		},
		domReady: function() {
			function e(e) {
				e.isReady = !0;
				for(var n; n = t.pop(); n());
			}
			var t = [];
			return function(n, i) {
				i = i || window;
				var r = i.document;
				n && t.push(n), "complete" === r.readyState ? e(r) : (r.isReady && e(r), browser.ie && 11 != browser.version ? (! function() {
					if(!r.isReady) {
						try {
							r.documentElement.doScroll("left")
						} catch(t) {
							return void setTimeout(arguments.callee, 0)
						}
						e(r)
					}
				}(), i.attachEvent("onload", function() {
					e(r)
				})) : (r.addEventListener("DOMContentLoaded", function() {
					r.removeEventListener("DOMContentLoaded", arguments.callee, !1), e(r)
				}, !1), i.addEventListener("load", function() {
					e(r)
				}, !1)))
			}
		}(),
		cssRule: browser.ie && 11 != browser.version ? function(e, t, n) {
			var i, r;
			if(void 0 === t || t && t.nodeType && 9 == t.nodeType) {
				if(n = t && t.nodeType && 9 == t.nodeType ? t : n || document, i = n.indexList || (n.indexList = {}), r = i[e], void 0 !== r) return n.styleSheets[r].cssText
			} else {
				if(n = n || document, i = n.indexList || (n.indexList = {}), r = i[e], "" === t) return void 0 !== r && (n.styleSheets[r].cssText = "", delete i[e], !0);
				void 0 !== r ? sheetStyle = n.styleSheets[r] : (sheetStyle = n.createStyleSheet("", r = n.styleSheets.length), i[e] = r), sheetStyle.cssText = t
			}
		} : function(e, t, n) {
			var i;
			return void 0 === t || t && t.nodeType && 9 == t.nodeType ? (n = t && t.nodeType && 9 == t.nodeType ? t : n || document, i = n.getElementById(e), i ? i.innerHTML : void 0) : (n = n || document, i = n.getElementById(e), "" === t ? !!i && (i.parentNode.removeChild(i), !0) : void(i ? i.innerHTML = t : (i = n.createElement("style"), i.id = e, i.innerHTML = t, n.getElementsByTagName("head")[0].appendChild(i))))
		},
		sort: function(e, t) {
			t = t || function(e, t) {
				return e.localeCompare(t)
			};
			for(var n = 0, i = e.length; n < i; n++)
				for(var r = n, o = e.length; r < o; r++)
					if(t(e[n], e[r]) > 0) {
						var s = e[n];
						e[n] = e[r], e[r] = s
					}
			return e
		},
		serializeParam: function(e) {
			var t = [];
			for(var n in e)
				if("method" != n && "timeout" != n && "async" != n)
					if("function" != (typeof e[n]).toLowerCase() && "object" != (typeof e[n]).toLowerCase()) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
					else if(utils.isArray(e[n]))
				for(var i = 0; i < e[n].length; i++) t.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][i]));
			return t.join("&")
		},
		formatUrl: function(e) {
			var t = e.replace(/&&/g, "&");
			return t = t.replace(/\?&/g, "?"), t = t.replace(/&$/g, ""), t = t.replace(/&#/g, "#"), t = t.replace(/&+/g, "&")
		},
		isCrossDomainUrl: function(e) {
			var t = document.createElement("a");
			return t.href = e, browser.ie && (t.href = t.href), !(t.protocol == location.protocol && t.hostname == location.hostname && (t.port == location.port || "80" == t.port && "" == location.port || "" == t.port && "80" == location.port))
		},
		clearEmptyAttrs: function(e) {
			for(var t in e) "" === e[t] && delete e[t];
			return e
		},
		str2json: function(e) {
			return utils.isString(e) ? window.JSON ? JSON.parse(e) : new Function("return " + utils.trim(e || ""))() : null
		},
		json2str: function() {
			function e(e) {
				return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
					var t = r[e];
					return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
				})), '"' + e + '"'
			}

			function t(e) {
				var t, n, i, r = ["["],
					o = e.length;
				for(n = 0; n < o; n++) switch(i = e[n], typeof i) {
					case "undefined":
					case "function":
					case "unknown":
						break;
					default:
						t && r.push(","), r.push(utils.json2str(i)), t = 1
				}
				return r.push("]"), r.join("")
			}

			function n(e) {
				return e < 10 ? "0" + e : e
			}

			function i(e) {
				return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
			}
			if(window.JSON) return JSON.stringify;
			var r = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			};
			return function(n) {
				switch(typeof n) {
					case "undefined":
						return "undefined";
					case "number":
						return isFinite(n) ? String(n) : "null";
					case "string":
						return e(n);
					case "boolean":
						return String(n);
					default:
						if(null === n) return "null";
						if(utils.isArray(n)) return t(n);
						if(utils.isDate(n)) return i(n);
						var r, o, s = ["{"],
							a = utils.json2str;
						for(var l in n)
							if(Object.prototype.hasOwnProperty.call(n, l)) switch(o = n[l], typeof o) {
								case "undefined":
								case "unknown":
								case "function":
									break;
								default:
									r && s.push(","), r = 1, s.push(a(l) + ":" + a(o))
							}
						return s.push("}"), s.join("")
				}
			}
		}()
	};
utils.each(["String", "Function", "Array", "Number", "RegExp", "Object", "Date"], function(e) {
	UE.utils["is" + e] = function(t) {
		return Object.prototype.toString.apply(t) == "[object " + e + "]"
	}
});
var EventBase = UE.EventBase = function() {};
EventBase.prototype = {
	addListener: function(e, t) {
		e = utils.trim(e).split(/\s+/);
		for(var n, i = 0; n = e[i++];) getListener(this, n, !0).push(t)
	},
	on: function(e, t) {
		return this.addListener(e, t)
	},
	off: function(e, t) {
		return this.removeListener(e, t)
	},
	trigger: function() {
		return this.fireEvent.apply(this, arguments)
	},
	removeListener: function(e, t) {
		e = utils.trim(e).split(/\s+/);
		for(var n, i = 0; n = e[i++];) utils.removeItem(getListener(this, n) || [], t)
	},
	fireEvent: function() {
		var e = arguments[0];
		e = utils.trim(e).split(" ");
		for(var t, n = 0; t = e[n++];) {
			var i, r, o, s = getListener(this, t);
			if(s)
				for(o = s.length; o--;)
					if(s[o]) {
						if(r = s[o].apply(this, arguments), r === !0) return r;
						void 0 !== r && (i = r)
					}(r = this["on" + t.toLowerCase()]) && (i = r.apply(this, arguments))
		}
		return i
	}
};
var dtd = dom.dtd = function() {
		function e(e) {
			for(var t in e) e[t.toUpperCase()] = e[t];
			return e
		}
		var t = utils.extend2,
			n = e({
				isindex: 1,
				fieldset: 1
			}),
			i = e({
				input: 1,
				button: 1,
				select: 1,
				textarea: 1,
				label: 1
			}),
			r = t(e({
				a: 1
			}), i),
			o = t({
				iframe: 1
			}, r),
			s = e({
				hr: 1,
				ul: 1,
				menu: 1,
				div: 1,
				blockquote: 1,
				noscript: 1,
				table: 1,
				center: 1,
				address: 1,
				dir: 1,
				pre: 1,
				h5: 1,
				dl: 1,
				h4: 1,
				noframes: 1,
				h6: 1,
				ol: 1,
				h1: 1,
				h3: 1,
				h2: 1
			}),
			a = e({
				ins: 1,
				del: 1,
				script: 1,
				style: 1
			}),
			l = t(e({
				mark: 1,
				b: 1,
				acronym: 1,
				bdo: 1,
				"var": 1,
				"#": 1,
				abbr: 1,
				code: 1,
				br: 1,
				i: 1,
				cite: 1,
				kbd: 1,
				u: 1,
				strike: 1,
				s: 1,
				tt: 1,
				strong: 1,
				q: 1,
				samp: 1,
				em: 1,
				dfn: 1,
				span: 1
			}), a),
			c = t(e({
				sub: 1,
				img: 1,
				embed: 1,
				object: 1,
				sup: 1,
				basefont: 1,
				map: 1,
				applet: 1,
				font: 1,
				big: 1,
				small: 1
			}), l),
			u = t(e({
				p: 1
			}), c),
			d = t(e({
				iframe: 1
			}), c, i),
			f = e({
				img: 1,
				embed: 1,
				noscript: 1,
				br: 1,
				kbd: 1,
				center: 1,
				button: 1,
				basefont: 1,
				h5: 1,
				h4: 1,
				samp: 1,
				h6: 1,
				ol: 1,
				h1: 1,
				h3: 1,
				h2: 1,
				form: 1,
				font: 1,
				"#": 1,
				select: 1,
				menu: 1,
				ins: 1,
				abbr: 1,
				label: 1,
				code: 1,
				table: 1,
				script: 1,
				cite: 1,
				input: 1,
				iframe: 1,
				strong: 1,
				textarea: 1,
				noframes: 1,
				big: 1,
				small: 1,
				span: 1,
				hr: 1,
				sub: 1,
				bdo: 1,
				"var": 1,
				div: 1,
				object: 1,
				sup: 1,
				strike: 1,
				dir: 1,
				map: 1,
				dl: 1,
				applet: 1,
				del: 1,
				isindex: 1,
				fieldset: 1,
				ul: 1,
				b: 1,
				acronym: 1,
				a: 1,
				blockquote: 1,
				i: 1,
				u: 1,
				s: 1,
				tt: 1,
				address: 1,
				q: 1,
				pre: 1,
				p: 1,
				em: 1,
				dfn: 1
			}),
			h = t(e({
				a: 0
			}), d),
			p = e({
				tr: 1
			}),
			m = e({
				"#": 1
			}),
			g = t(e({
				param: 1
			}), f),
			v = t(e({
				form: 1
			}), n, o, s, u),
			y = e({
				li: 1,
				ol: 1,
				ul: 1
			}),
			b = e({
				style: 1,
				script: 1
			}),
			w = e({
				base: 1,
				link: 1,
				meta: 1,
				title: 1
			}),
			x = t(w, b),
			_ = e({
				head: 1,
				body: 1
			}),
			C = e({
				html: 1
			}),
			k = e({
				address: 1,
				blockquote: 1,
				center: 1,
				dir: 1,
				div: 1,
				dl: 1,
				fieldset: 1,
				form: 1,
				h1: 1,
				h2: 1,
				h3: 1,
				h4: 1,
				h5: 1,
				h6: 1,
				hr: 1,
				isindex: 1,
				menu: 1,
				noframes: 1,
				ol: 1,
				p: 1,
				pre: 1,
				table: 1,
				ul: 1
			}),
			N = e({
				area: 1,
				base: 1,
				basefont: 1,
				br: 1,
				col: 1,
				command: 1,
				dialog: 1,
				embed: 1,
				hr: 1,
				img: 1,
				input: 1,
				isindex: 1,
				keygen: 1,
				link: 1,
				meta: 1,
				param: 1,
				source: 1,
				track: 1,
				wbr: 1
			});
		return e({
			$nonBodyContent: t(C, _, w),
			$block: k,
			$inline: h,
			$inlineWithA: t(e({
				a: 1
			}), h),
			$body: t(e({
				script: 1,
				style: 1
			}), k),
			$cdata: e({
				script: 1,
				style: 1
			}),
			$empty: N,
			$nonChild: e({
				iframe: 1,
				textarea: 1
			}),
			$listItem: e({
				dd: 1,
				dt: 1,
				li: 1
			}),
			$list: e({
				ul: 1,
				ol: 1,
				dl: 1
			}),
			$isNotEmpty: e({
				table: 1,
				ul: 1,
				ol: 1,
				dl: 1,
				iframe: 1,
				area: 1,
				base: 1,
				col: 1,
				hr: 1,
				img: 1,
				embed: 1,
				input: 1,
				link: 1,
				meta: 1,
				param: 1,
				h1: 1,
				h2: 1,
				h3: 1,
				h4: 1,
				h5: 1,
				h6: 1
			}),
			$removeEmpty: e({
				a: 1,
				abbr: 1,
				acronym: 1,
				address: 1,
				b: 1,
				bdo: 1,
				big: 1,
				cite: 1,
				code: 1,
				del: 1,
				dfn: 1,
				em: 1,
				font: 1,
				i: 1,
				ins: 1,
				label: 1,
				kbd: 1,
				q: 1,
				s: 1,
				samp: 1,
				small: 1,
				span: 1,
				strike: 1,
				strong: 1,
				sub: 1,
				sup: 1,
				tt: 1,
				u: 1,
				"var": 1
			}),
			$removeEmptyBlock: e({
				p: 1,
				div: 1
			}),
			$tableContent: e({
				caption: 1,
				col: 1,
				colgroup: 1,
				tbody: 1,
				td: 1,
				tfoot: 1,
				th: 1,
				thead: 1,
				tr: 1,
				table: 1
			}),
			$notTransContent: e({
				pre: 1,
				script: 1,
				style: 1,
				textarea: 1
			}),
			html: _,
			head: x,
			style: m,
			script: m,
			body: v,
			base: {},
			link: {},
			meta: {},
			title: m,
			col: {},
			tr: e({
				td: 1,
				th: 1
			}),
			img: {},
			embed: {},
			colgroup: e({
				thead: 1,
				col: 1,
				tbody: 1,
				tr: 1,
				tfoot: 1
			}),
			noscript: v,
			td: v,
			br: {},
			th: v,
			center: v,
			kbd: h,
			button: t(u, s),
			basefont: {},
			h5: h,
			h4: h,
			samp: h,
			h6: h,
			ol: y,
			h1: h,
			h3: h,
			option: m,
			h2: h,
			form: t(n, o, s, u),
			select: e({
				optgroup: 1,
				option: 1
			}),
			font: h,
			ins: h,
			menu: y,
			abbr: h,
			label: h,
			table: e({
				thead: 1,
				col: 1,
				tbody: 1,
				tr: 1,
				colgroup: 1,
				caption: 1,
				tfoot: 1
			}),
			code: h,
			tfoot: p,
			cite: h,
			li: v,
			input: {},
			iframe: v,
			strong: h,
			textarea: m,
			noframes: v,
			big: h,
			small: h,
			span: e({
				"#": 1,
				br: 1,
				b: 1,
				strong: 1,
				u: 1,
				i: 1,
				em: 1,
				sub: 1,
				sup: 1,
				strike: 1,
				span: 1
			}),
			hr: h,
			dt: h,
			sub: h,
			optgroup: e({
				option: 1
			}),
			param: {},
			bdo: h,
			"var": h,
			div: v,
			object: g,
			sup: h,
			dd: v,
			strike: h,
			area: {},
			dir: y,
			map: t(e({
				area: 1,
				form: 1,
				p: 1
			}), n, a, s),
			applet: g,
			dl: e({
				dt: 1,
				dd: 1
			}),
			del: h,
			isindex: {},
			fieldset: t(e({
				legend: 1
			}), f),
			thead: p,
			ul: y,
			acronym: h,
			b: h,
			a: t(e({
				a: 1
			}), d),
			blockquote: t(e({
				td: 1,
				tr: 1,
				tbody: 1,
				li: 1
			}), v),
			caption: h,
			i: h,
			u: h,
			tbody: p,
			s: h,
			address: t(o, u),
			tt: h,
			legend: h,
			q: h,
			pre: t(l, r),
			p: t(e({
				a: 1
			}), h),
			em: h,
			dfn: h,
			mark: h
		})
	}(),
	attrFix = ie && browser.version < 9 ? {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder"
	} : {
		tabindex: "tabIndex",
		readonly: "readOnly"
	},
	styleBlock = utils.listToMap(["-webkit-box", "-moz-box", "block", "list-item", "table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"]),
	domUtils = dom.domUtils = {
		NODE_ELEMENT: 1,
		NODE_DOCUMENT: 9,
		NODE_TEXT: 3,
		NODE_COMMENT: 8,
		NODE_DOCUMENT_FRAGMENT: 11,
		POSITION_IDENTICAL: 0,
		POSITION_DISCONNECTED: 1,
		POSITION_FOLLOWING: 2,
		POSITION_PRECEDING: 4,
		POSITION_IS_CONTAINED: 8,
		POSITION_CONTAINS: 16,
		fillChar: ie && "6" == browser.version ? "\ufeff" : "​",
		keys: {
			8: 1,
			46: 1,
			16: 1,
			17: 1,
			18: 1,
			37: 1,
			38: 1,
			39: 1,
			40: 1,
			13: 1
		},
		getPosition: function(e, t) {
			if(e === t) return 0;
			var n, i = [e],
				r = [t];
			for(n = e; n = n.parentNode;) {
				if(n === t) return 10;
				i.push(n)
			}
			for(n = t; n = n.parentNode;) {
				if(n === e) return 20;
				r.push(n)
			}
			if(i.reverse(), r.reverse(), i[0] !== r[0]) return 1;
			for(var o = -1; o++, i[o] === r[o];);
			for(e = i[o], t = r[o]; e = e.nextSibling;)
				if(e === t) return 4;
			return 2
		},
		getNodeIndex: function(e, t) {
			for(var n = e, i = 0; n = n.previousSibling;) t && 3 == n.nodeType ? n.nodeType != n.nextSibling.nodeType && i++ : i++;
			return i
		},
		inDoc: function(e, t) {
			return 10 == domUtils.getPosition(e, t)
		},
		findParent: function(e, t, n) {
			if(e && !domUtils.isBody(e))
				for(e = n ? e : e.parentNode; e;) {
					if(!t || t(e) || domUtils.isBody(e)) return t && !t(e) && domUtils.isBody(e) ? null : e;
					e = e.parentNode
				}
			return null
		},
		findParentByTagName: function(e, t, n, i) {
			return t = utils.listToMap(utils.isArray(t) ? t : [t]), domUtils.findParent(e, function(e) {
				return t[e.tagName] && !(i && i(e))
			}, n)
		},
		findParents: function(e, t, n, i) {
			for(var r = t && (n && n(e) || !n) ? [e] : []; e = domUtils.findParent(e, n);) r.push(e);
			return i ? r : r.reverse()
		},
		insertAfter: function(e, t) {
			return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
		},
		remove: function(e, t) {
			var n, i = e.parentNode;
			if(i) {
				if(t && e.hasChildNodes())
					for(; n = e.firstChild;) i.insertBefore(n, e);
				i.removeChild(e)
			}
			return e
		},
		getNextDomNode: function(e, t, n, i) {
			return getDomNode(e, "firstChild", "nextSibling", t, n, i)
		},
		getPreDomNode: function(e, t, n, i) {
			return getDomNode(e, "lastChild", "previousSibling", t, n, i)
		},
		isBookmarkNode: function(e) {
			return 1 == e.nodeType && e.id && /^_baidu_bookmark_/i.test(e.id)
		},
		getWindow: function(e) {
			var t = e.ownerDocument || e;
			return t.defaultView || t.parentWindow
		},
		getCommonAncestor: function(e, t) {
			if(e === t) return e;
			for(var n = [e], i = [t], r = e, o = -1; r = r.parentNode;) {
				if(r === t) return r;
				n.push(r)
			}
			for(r = t; r = r.parentNode;) {
				if(r === e) return r;
				i.push(r)
			}
			for(n.reverse(), i.reverse(); o++, n[o] === i[o];);
			return 0 == o ? null : n[o - 1]
		},
		clearEmptySibling: function(e, t, n) {
			function i(e, t) {
				for(var n; e && !domUtils.isBookmarkNode(e) && (domUtils.isEmptyInlineElement(e) || !new RegExp("[^\t\n\r" + domUtils.fillChar + "]").test(e.nodeValue));) n = e[t], domUtils.remove(e), e = n
			}!t && i(e.nextSibling, "nextSibling"), !n && i(e.previousSibling, "previousSibling")
		},
		split: function(e, t) {
			var n = e.ownerDocument;
			if(browser.ie && t == e.nodeValue.length) {
				var i = n.createTextNode("");
				return domUtils.insertAfter(e, i)
			}
			var r = e.splitText(t);
			if(browser.ie8) {
				var o = n.createTextNode("");
				domUtils.insertAfter(r, o), domUtils.remove(o)
			}
			return r
		},
		isWhitespace: function(e) {
			return !new RegExp("[^ \t\n\r" + domUtils.fillChar + "]").test(e.nodeValue)
		},
		getXY: function(e) {
			for(var t = 0, n = 0; e.offsetParent;) n += e.offsetTop, t += e.offsetLeft, e = e.offsetParent;
			return {
				x: t,
				y: n
			}
		},
		on: function(e, t, n) {
			var i = utils.isArray(t) ? t : utils.trim(t).split(/\s+/),
				r = i.length;
			if(r)
				for(; r--;)
					if(t = i[r], e.addEventListener) e.addEventListener(t, n, !1);
					else {
						n._d || (n._d = {
							els: []
						});
						var o = t + n.toString(),
							s = utils.indexOf(n._d.els, e);
						n._d[o] && s != -1 || (s == -1 && n._d.els.push(e), n._d[o] || (n._d[o] = function(e) {
							return n.call(e.srcElement, e || window.event)
						}), e.attachEvent("on" + t, n._d[o]))
					}
			e = null
		},
		un: function(e, t, n) {
			var i = utils.isArray(t) ? t : utils.trim(t).split(/\s+/),
				r = i.length;
			if(r)
				for(; r--;)
					if(t = i[r], e.removeEventListener) e.removeEventListener(t, n, !1);
					else {
						var o = t + n.toString();
						try {
							e.detachEvent("on" + t, n._d ? n._d[o] : n)
						} catch(s) {}
						if(n._d && n._d[o]) {
							var a = utils.indexOf(n._d.els, e);
							a != -1 && n._d.els.splice(a, 1), 0 == n._d.els.length && delete n._d[o]
						}
					}
		},
		isSameElement: function(e, t) {
			if(e.tagName != t.tagName) return !1;
			var n = e.attributes,
				i = t.attributes;
			if(!ie && n.length != i.length) return !1;
			for(var r, o, s = 0, a = 0, l = 0; r = n[l++];) {
				if("style" == r.nodeName) {
					if(r.specified && s++, domUtils.isSameStyle(e, t)) continue;
					return !1
				}
				if(ie) {
					if(!r.specified) continue;
					s++, o = i.getNamedItem(r.nodeName)
				} else o = t.attributes[r.nodeName];
				if(!o.specified || r.nodeValue != o.nodeValue) return !1
			}
			if(ie) {
				for(l = 0; o = i[l++];) o.specified && a++;
				if(s != a) return !1
			}
			return !0
		},
		isSameStyle: function(e, t) {
			var n = e.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":"),
				i = t.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":");
			if(browser.opera) {
				if(n = e.style, i = t.style, n.length != i.length) return !1;
				for(var r in n)
					if(!/^(\d+|csstext)$/i.test(r) && n[r] != i[r]) return !1;
				return !0
			}
			if(!n || !i) return n == i;
			if(n = n.split(";"), i = i.split(";"), n.length != i.length) return !1;
			for(var o, s = 0; o = n[s++];)
				if(utils.indexOf(i, o) == -1) return !1;
			return !0
		},
		isBlockElm: function(e) {
			return 1 == e.nodeType && (dtd.$block[e.tagName] || styleBlock[domUtils.getComputedStyle(e, "display")]) && !dtd.$nonChild[e.tagName]
		},
		isBody: function(e) {
			return e && 1 == e.nodeType && "body" == e.tagName.toLowerCase()
		},
		breakParent: function(e, t) {
			var n, i, r, o = e,
				s = e;
			do {
				for(o = o.parentNode, i ? (n = o.cloneNode(!1), n.appendChild(i), i = n, n = o.cloneNode(!1), n.appendChild(r), r = n) : (i = o.cloneNode(!1), r = i.cloneNode(!1)); n = s.previousSibling;) i.insertBefore(n, i.firstChild);
				for(; n = s.nextSibling;) r.appendChild(n);
				s = o
			} while (t !== o);
			return n = t.parentNode, n.insertBefore(i, t), n.insertBefore(r, t), n.insertBefore(e, r), domUtils.remove(t), e
		},
		isEmptyInlineElement: function(e) {
			if(1 != e.nodeType || !dtd.$removeEmpty[e.tagName]) return 0;
			for(e = e.firstChild; e;) {
				if(domUtils.isBookmarkNode(e)) return 0;
				if(1 == e.nodeType && !domUtils.isEmptyInlineElement(e) || 3 == e.nodeType && !domUtils.isWhitespace(e)) return 0;
				e = e.nextSibling
			}
			return 1
		},
		trimWhiteTextNode: function(e) {
			function t(t) {
				for(var n;
					(n = e[t]) && 3 == n.nodeType && domUtils.isWhitespace(n);) e.removeChild(n)
			}
			t("firstChild"), t("lastChild")
		},
		mergeChild: function(e, t, n) {
			for(var i, r = domUtils.getElementsByTagName(e, e.tagName.toLowerCase()), o = 0; i = r[o++];)
				if(i.parentNode && !domUtils.isBookmarkNode(i))
					if("span" != i.tagName.toLowerCase()) domUtils.isSameElement(e, i) && domUtils.remove(i, !0);
					else {
						if(e === i.parentNode && (domUtils.trimWhiteTextNode(e), 1 == e.childNodes.length)) {
							e.style.cssText = i.style.cssText + ";" + e.style.cssText, domUtils.remove(i, !0);
							continue
						}
						if(i.style.cssText = e.style.cssText + ";" + i.style.cssText, n) {
							var s = n.style;
							if(s) {
								s = s.split(";");
								for(var a, l = 0; a = s[l++];) i.style[utils.cssStyleToDomStyle(a.split(":")[0])] = a.split(":")[1]
							}
						}
						domUtils.isSameStyle(i, e) && domUtils.remove(i, !0)
					}
		},
		getElementsByTagName: function(e, t, n) {
			var i = [];
			if(e && e.length) {
				if(n && utils.isString(n)) {
					var r = n;
					n = function(e) {
						return domUtils.hasClass(e, r)
					}
				}
				t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
				for(var o, s = 0; o = t[s++];)
					if(e.getElementsByTagName)
						for(var a, l = e.getElementsByTagName(o), c = 0; a = l[c++];) n && !n(a) || i.push(a)
			}
			return i
		},
		mergeToParent: function(e) {
			for(var t = e.parentNode; t && dtd.$removeEmpty[t.tagName];) {
				if(t.tagName == e.tagName || "A" == t.tagName) {
					if(domUtils.trimWhiteTextNode(t), "SPAN" == t.tagName && !domUtils.isSameStyle(t, e) || "A" == t.tagName && "SPAN" == e.tagName) {
						if(t.childNodes.length > 1 || t !== e.parentNode) {
							e.style.cssText = t.style.cssText + ";" + e.style.cssText, t = t.parentNode;
							continue
						}
						t.style.cssText += ";" + e.style.cssText, "A" == t.tagName && (t.style.textDecoration = "underline")
					}
					if("A" != t.tagName) {
						t === e.parentNode && domUtils.remove(e, !0);
						break
					}
				}
				t = t.parentNode
			}
		},
		mergeSibling: function(e, t, n) {
			function i(e, t, n) {
				var i;
				if((i = n[e]) && !domUtils.isBookmarkNode(i) && 1 == i.nodeType && domUtils.isSameElement(n, i)) {
					for(; i.firstChild;) "firstChild" == t ? n.insertBefore(i.lastChild, n.firstChild) : n.appendChild(i.firstChild);
					domUtils.remove(i)
				}
			}!t && i("previousSibling", "firstChild", e), !n && i("nextSibling", "lastChild", e)
		},
		unSelectable: ie && browser.ie9below || browser.opera ? function(e) {
			e.onselectstart = function() {
				return !1
			}, e.onclick = e.onkeyup = e.onkeydown = function() {
				return !1
			}, e.unselectable = "on", e.setAttribute("unselectable", "on");
			for(var t, n = 0; t = e.all[n++];) switch(t.tagName.toLowerCase()) {
				case "iframe":
				case "textarea":
				case "input":
				case "select":
					break;
				default:
					t.unselectable = "on", e.setAttribute("unselectable", "on")
			}
		} : function(e) {
			e.style.MozUserSelect = e.style.webkitUserSelect = e.style.msUserSelect = e.style.KhtmlUserSelect = "none"
		},
		removeAttributes: function(e, t) {
			t = utils.isArray(t) ? t : utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
			for(var n, i = 0; n = t[i++];) {
				switch(n = attrFix[n] || n) {
					case "className":
						e[n] = "";
						break;
					case "style":
						e.style.cssText = "";
						var r = e.getAttributeNode("style");
						!browser.ie && r && e.removeAttributeNode(r)
				}
				e.removeAttribute(n)
			}
		},
		createElement: function(e, t, n) {
			return domUtils.setAttributes(e.createElement(t), n)
		},
		setAttributes: function(e, t) {
			for(var n in t)
				if(t.hasOwnProperty(n)) {
					var i = t[n];
					switch(n) {
						case "class":
							e.className = i;
							break;
						case "style":
							e.style.cssText = e.style.cssText + ";" + i;
							break;
						case "innerHTML":
							e[n] = i;
							break;
						case "value":
							e.value = i;
							break;
						default:
							e.setAttribute(attrFix[n] || n, i)
					}
				}
			return e
		},
		getComputedStyle: function(e, t) {
			var n = "width height top left";
			if(n.indexOf(t) > -1) return e["offset" + t.replace(/^\w/, function(e) {
				return e.toUpperCase()
			})] + "px";
			if(3 == e.nodeType && (e = e.parentNode), browser.ie && browser.version < 9 && "font-size" == t && !e.style.fontSize && !dtd.$empty[e.tagName] && !dtd.$nonChild[e.tagName]) {
				var i = e.ownerDocument.createElement("span");
				i.style.cssText = "padding:0;border:0;font-family:simsun;", i.innerHTML = ".", e.appendChild(i);
				var r = i.offsetHeight;
				return e.removeChild(i), i = null, r + "px"
			}
			try {
				var o = domUtils.getStyle(e, t) || (window.getComputedStyle ? domUtils.getWindow(e).getComputedStyle(e, "").getPropertyValue(t) : (e.currentStyle || e.style)[utils.cssStyleToDomStyle(t)])
			} catch(s) {
				return ""
			}
			return utils.transUnitToPx(utils.fixColor(t, o))
		},
		removeClasses: function(e, t) {
			t = utils.isArray(t) ? t : utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
			for(var n, i = 0, r = e.className; n = t[i++];) r = r.replace(new RegExp("\\b" + n + "\\b"), "");
			r = utils.trim(r).replace(/[ ]{2,}/g, " "), r ? e.className = r : domUtils.removeAttributes(e, ["class"])
		},
		addClass: function(e, t) {
			if(e) {
				t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
				for(var n, i = 0, r = e.className; n = t[i++];) new RegExp("\\b" + n + "\\b").test(r) || (r += " " + n);
				e.className = utils.trim(r)
			}
		},
		hasClass: function(e, t) {
			if(utils.isRegExp(t)) return t.test(e.className);
			t = utils.trim(t).replace(/[ ]{2,}/g, " ").split(" ");
			for(var n, i = 0, r = e.className; n = t[i++];)
				if(!new RegExp("\\b" + n + "\\b", "i").test(r)) return !1;
			return i - 1 == t.length
		},
		preventDefault: function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		removeStyle: function(e, t) {
			browser.ie ? ("color" == t && (t = "(^|;)" + t), e.style.cssText = e.style.cssText.replace(new RegExp(t + "[^:]*:[^;]+;?", "ig"), "")) : e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(utils.cssStyleToDomStyle(t)), e.style.cssText || domUtils.removeAttributes(e, ["style"])
		},
		getStyle: function(e, t) {
			var n = e.style[utils.cssStyleToDomStyle(t)];
			return utils.fixColor(t, n)
		},
		setStyle: function(e, t, n) {
			e.style[utils.cssStyleToDomStyle(t)] = n, utils.trim(e.style.cssText) || this.removeAttributes(e, "style")
		},
		setStyles: function(e, t) {
			for(var n in t) t.hasOwnProperty(n) && domUtils.setStyle(e, n, t[n])
		},
		removeDirtyAttr: function(e) {
			for(var t, n = 0, i = e.getElementsByTagName("*"); t = i[n++];) t.removeAttribute("_moz_dirty");
			e.removeAttribute("_moz_dirty")
		},
		getChildCount: function(e, t) {
			var n = 0,
				i = e.firstChild;
			for(t = t || function() {
					return 1
				}; i;) t(i) && n++, i = i.nextSibling;
			return n
		},
		isEmptyNode: function(e) {
			return !e.firstChild || 0 == domUtils.getChildCount(e, function(e) {
				return !domUtils.isBr(e) && !domUtils.isBookmarkNode(e) && !domUtils.isWhitespace(e)
			})
		},
		clearSelectedArr: function(e) {
			for(var t; t = e.pop();) domUtils.removeAttributes(t, ["class"])
		},
		scrollToView: function(e, t, n) {
			var i = function() {
					var e = t.document,
						n = "CSS1Compat" == e.compatMode;
					return {
						width: (n ? e.documentElement.clientWidth : e.body.clientWidth) || 0,
						height: (n ? e.documentElement.clientHeight : e.body.clientHeight) || 0
					}
				},
				r = function(e) {
					if("pageXOffset" in e) return {
						x: e.pageXOffset || 0,
						y: e.pageYOffset || 0
					};
					var t = e.document;
					return {
						x: t.documentElement.scrollLeft || t.body.scrollLeft || 0,
						y: t.documentElement.scrollTop || t.body.scrollTop || 0
					}
				},
				o = i().height,
				s = o * -1 + n || 0;
			s += e.offsetHeight || 0;
			var a = domUtils.getXY(e);
			s += a.y;
			var l = r(t).y;
			(s > l || s < l - o) && t.scrollTo(0, s + (s < 0 ? -20 : 20))
		},
		isBr: function(e) {
			return 1 == e.nodeType && "BR" == e.tagName
		},
		isFillChar: function(e, t) {
			if(3 != e.nodeType) return !1;
			var n = e.nodeValue;
			return t ? new RegExp("^" + domUtils.fillChar).test(n) : !n.replace(new RegExp(domUtils.fillChar, "g"), "").length
		},
		isStartInblock: function(e) {
			var t, n = e.cloneRange(),
				i = 0,
				r = n.startContainer;
			if(1 == r.nodeType && r.childNodes[n.startOffset]) {
				r = r.childNodes[n.startOffset];
				for(var o = r.previousSibling; o && domUtils.isFillChar(o);) r = o, o = o.previousSibling
			}
			for(this.isFillChar(r, !0) && 1 == n.startOffset && (n.setStartBefore(r), r = n.startContainer); r && domUtils.isFillChar(r);) t = r, r = r.previousSibling;
			for(t && (n.setStartBefore(t), r = n.startContainer), 1 == r.nodeType && domUtils.isEmptyNode(r) && 1 == n.startOffset && n.setStart(r, 0).collapse(!0); !n.startOffset;) {
				if(r = n.startContainer, domUtils.isBlockElm(r) || domUtils.isBody(r)) {
					i = 1;
					break
				}
				var s, o = n.startContainer.previousSibling;
				if(o) {
					for(; o && domUtils.isFillChar(o);) s = o, o = o.previousSibling;
					s ? n.setStartBefore(s) : n.setStartBefore(n.startContainer)
				} else n.setStartBefore(n.startContainer)
			}
			return i && !domUtils.isBody(n.startContainer) ? 1 : 0
		},
		isEmptyBlock: function(e, t) {
			if(1 != e.nodeType) return 0;
			if(t = t || new RegExp("[  \t\r\n" + domUtils.fillChar + "]", "g"), e[browser.ie ? "innerText" : "textContent"].replace(t, "").length > 0) return 0;
			for(var n in dtd.$isNotEmpty)
				if(e.getElementsByTagName(n).length) return 0;
			return 1
		},
		setViewportOffset: function(e, t) {
			var n = 0 | parseInt(e.style.left),
				i = 0 | parseInt(e.style.top),
				r = e.getBoundingClientRect(),
				o = t.left - r.left,
				s = t.top - r.top;
			o && (e.style.left = n + o + "px"), s && (e.style.top = i + s + "px")
		},
		fillNode: function(e, t) {
			var n = browser.ie ? e.createTextNode(domUtils.fillChar) : e.createElement("br");
			t.innerHTML = "", t.appendChild(n)
		},
		moveChild: function(e, t, n) {
			for(; e.firstChild;) n && t.firstChild ? t.insertBefore(e.lastChild, t.firstChild) : t.appendChild(e.firstChild)
		},
		hasNoAttributes: function(e) {
			return browser.ie ? /^<\w+\s*?>/.test(e.outerHTML) : 0 == e.attributes.length
		},
		isCustomeNode: function(e) {
			return 1 == e.nodeType && e.getAttribute("_ue_custom_node_")
		},
		isTagNode: function(e, t) {
			return 1 == e.nodeType && new RegExp("\\b" + e.tagName + "\\b", "i").test(t)
		},
		filterNodeList: function(e, t, n) {
			var i = [];
			if(!utils.isFunction(t)) {
				var r = t;
				t = function(e) {
					return utils.indexOf(utils.isArray(r) ? r : r.split(" "), e.tagName.toLowerCase()) != -1
				}
			}
			return utils.each(e, function(e) {
				t(e) && i.push(e)
			}), 0 == i.length ? null : 1 != i.length && n ? i : i[0]
		},
		isInNodeEndBoundary: function(e, t) {
			var n = e.startContainer;
			if(3 == n.nodeType && e.startOffset != n.nodeValue.length) return 0;
			if(1 == n.nodeType && e.startOffset != n.childNodes.length) return 0;
			for(; n !== t;) {
				if(n.nextSibling) return 0;
				n = n.parentNode
			}
			return 1
		},
		isBoundaryNode: function(e, t) {
			for(var n; !domUtils.isBody(e);)
				if(n = e, e = e.parentNode, n !== e[t]) return !1;
			return !0
		},
		fillHtml: browser.ie11below ? "&nbsp;" : "<br/>"
	},
	fillCharReg = new RegExp(domUtils.fillChar, "g");
! function() {
	function e(e) {
		e.collapsed = e.startContainer && e.endContainer && e.startContainer === e.endContainer && e.startOffset == e.endOffset
	}

	function t(e) {
		return !e.collapsed && 1 == e.startContainer.nodeType && e.startContainer === e.endContainer && e.endOffset - e.startOffset == 1
	}

	function n(t, n, i, r) {
		return 1 == n.nodeType && (dtd.$empty[n.tagName] || dtd.$nonChild[n.tagName]) && (i = domUtils.getNodeIndex(n) + (t ? 0 : 1), n = n.parentNode), t ? (r.startContainer = n, r.startOffset = i, r.endContainer || r.collapse(!0)) : (r.endContainer = n, r.endOffset = i, r.startContainer || r.collapse(!1)), e(r), r
	}

	function i(e, t) {
		var n, i, r = e.startContainer,
			o = e.endContainer,
			s = e.startOffset,
			a = e.endOffset,
			l = e.document,
			c = l.createDocumentFragment();
		if(1 == r.nodeType && (r = r.childNodes[s] || (n = r.appendChild(l.createTextNode("")))), 1 == o.nodeType && (o = o.childNodes[a] || (i = o.appendChild(l.createTextNode("")))), r === o && 3 == r.nodeType) return c.appendChild(l.createTextNode(r.substringData(s, a - s))), t && (r.deleteData(s, a - s), e.collapse(!0)), c;
		for(var u, d, f = c, h = domUtils.findParents(r, !0), p = domUtils.findParents(o, !0), m = 0; h[m] == p[m];) m++;
		for(var g, v = m; g = h[v]; v++) {
			for(u = g.nextSibling, g == r ? n || (3 == e.startContainer.nodeType ? (f.appendChild(l.createTextNode(r.nodeValue.slice(s))), t && r.deleteData(s, r.nodeValue.length - s)) : f.appendChild(t ? r : r.cloneNode(!0))) : (d = g.cloneNode(!1), f.appendChild(d)); u && u !== o && u !== p[v];) g = u.nextSibling, f.appendChild(t ? u : u.cloneNode(!0)), u = g;
			f = d
		}
		f = c, h[m] || (f.appendChild(h[m - 1].cloneNode(!1)), f = f.firstChild);
		for(var y, v = m; y = p[v]; v++) {
			if(u = y.previousSibling, y == o ? i || 3 != e.endContainer.nodeType || (f.appendChild(l.createTextNode(o.substringData(0, a))), t && o.deleteData(0, a)) : (d = y.cloneNode(!1), f.appendChild(d)), v != m || !h[m])
				for(; u && u !== r;) y = u.previousSibling, f.insertBefore(t ? u : u.cloneNode(!0), f.firstChild), u = y;
			f = d
		}
		return t && e.setStartBefore(p[m] ? h[m] ? p[m] : h[m - 1] : p[m - 1]).collapse(!0), n && domUtils.remove(n), i && domUtils.remove(i), c
	}

	function r(e, t) {
		try {
			if(s && domUtils.inDoc(s, e))
				if(s.nodeValue.replace(fillCharReg, "").length) s.nodeValue = s.nodeValue.replace(fillCharReg, "");
				else {
					var n = s.parentNode;
					for(domUtils.remove(s); n && domUtils.isEmptyInlineElement(n) && (browser.safari ? !(domUtils.getPosition(n, t) & domUtils.POSITION_CONTAINS) : !n.contains(t));) s = n.parentNode, domUtils.remove(n), n = s
				}
		} catch(i) {}
	}

	function o(e, t) {
		var n;
		for(e = e[t]; e && domUtils.isFillChar(e);) n = e[t], domUtils.remove(e), e = n
	}
	var s, a = 0,
		l = domUtils.fillChar,
		c = dom.Range = function(e) {
			var t = this;
			t.startContainer = t.startOffset = t.endContainer = t.endOffset = null, t.document = e, t.collapsed = !0
		};
	c.prototype = {
		cloneContents: function() {
			return this.collapsed ? null : i(this, 0)
		},
		deleteContents: function() {
			var e;
			return this.collapsed || i(this, 1), browser.webkit && (e = this.startContainer, 3 != e.nodeType || e.nodeValue.length || (this.setStartBefore(e).collapse(!0), domUtils.remove(e))), this
		},
		extractContents: function() {
			return this.collapsed ? null : i(this, 2)
		},
		setStart: function(e, t) {
			return n(!0, e, t, this)
		},
		setEnd: function(e, t) {
			return n(!1, e, t, this)
		},
		setStartAfter: function(e) {
			return this.setStart(e.parentNode, domUtils.getNodeIndex(e) + 1)
		},
		setStartBefore: function(e) {
			return this.setStart(e.parentNode, domUtils.getNodeIndex(e))
		},
		setEndAfter: function(e) {
			return this.setEnd(e.parentNode, domUtils.getNodeIndex(e) + 1)
		},
		setEndBefore: function(e) {
			return this.setEnd(e.parentNode, domUtils.getNodeIndex(e))
		},
		setStartAtFirst: function(e) {
			return this.setStart(e, 0)
		},
		setStartAtLast: function(e) {
			return this.setStart(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length)
		},
		setEndAtFirst: function(e) {
			return this.setEnd(e, 0)
		},
		setEndAtLast: function(e) {
			return this.setEnd(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length)
		},
		selectNode: function(e) {
			return this.setStartBefore(e).setEndAfter(e)
		},
		selectNodeContents: function(e) {
			return this.setStart(e, 0).setEndAtLast(e)
		},
		cloneRange: function() {
			var e = this;
			return new c(e.document).setStart(e.startContainer, e.startOffset).setEnd(e.endContainer, e.endOffset)
		},
		collapse: function(e) {
			var t = this;
			return e ? (t.endContainer = t.startContainer, t.endOffset = t.startOffset) : (t.startContainer = t.endContainer, t.startOffset = t.endOffset), t.collapsed = !0, t
		},
		shrinkBoundary: function(e) {
			function t(e) {
				return 1 == e.nodeType && !domUtils.isBookmarkNode(e) && !dtd.$empty[e.tagName] && !dtd.$nonChild[e.tagName]
			}
			for(var n, i = this, r = i.collapsed; 1 == i.startContainer.nodeType && (n = i.startContainer.childNodes[i.startOffset]) && t(n);) i.setStart(n, 0);
			if(r) return i.collapse(!0);
			if(!e)
				for(; 1 == i.endContainer.nodeType && i.endOffset > 0 && (n = i.endContainer.childNodes[i.endOffset - 1]) && t(n);) i.setEnd(n, n.childNodes.length);
			return i
		},
		getCommonAncestor: function(e, n) {
			var i = this,
				r = i.startContainer,
				o = i.endContainer;
			return r === o ? e && t(this) && (r = r.childNodes[i.startOffset], 1 == r.nodeType) ? r : n && 3 == r.nodeType ? r.parentNode : r : domUtils.getCommonAncestor(r, o)
		},
		trimBoundary: function(e) {
			this.txtToElmBoundary();
			var t = this.startContainer,
				n = this.startOffset,
				i = this.collapsed,
				r = this.endContainer;
			if(3 == t.nodeType) {
				if(0 == n) this.setStartBefore(t);
				else if(n >= t.nodeValue.length) this.setStartAfter(t);
				else {
					var o = domUtils.split(t, n);
					t === r ? this.setEnd(o, this.endOffset - n) : t.parentNode === r && (this.endOffset += 1), this.setStartBefore(o)
				}
				if(i) return this.collapse(!0)
			}
			return e || (n = this.endOffset, r = this.endContainer, 3 == r.nodeType && (0 == n ? this.setEndBefore(r) : (n < r.nodeValue.length && domUtils.split(r, n), this.setEndAfter(r)))), this
		},
		txtToElmBoundary: function(e) {
			function t(e, t) {
				var n = e[t + "Container"],
					i = e[t + "Offset"];
				3 == n.nodeType && (i ? i >= n.nodeValue.length && e["set" + t.replace(/(\w)/, function(e) {
					return e.toUpperCase()
				}) + "After"](n) : e["set" + t.replace(/(\w)/, function(e) {
					return e.toUpperCase()
				}) + "Before"](n))
			}
			return !e && this.collapsed || (t(this, "start"), t(this, "end")), this
		},
		insertNode: function(e) {
			var t = e,
				n = 1;
			11 == e.nodeType && (t = e.firstChild, n = e.childNodes.length), this.trimBoundary(!0);
			var i = this.startContainer,
				r = this.startOffset,
				o = i.childNodes[r];
			return o ? i.insertBefore(e, o) : i.appendChild(e), t.parentNode === this.endContainer && (this.endOffset = this.endOffset + n), this.setStartBefore(t)
		},
		setCursor: function(e, t) {
			return this.collapse(!e).select(t)
		},
		createBookmark: function(e, t) {
			var n, i = this.document.createElement("span");
			return i.style.cssText = "display:inline-block;line-height:0px;", i.appendChild(this.document.createTextNode("‍")), i.id = "_baidu_bookmark_start_" + (t ? "" : a++), this.collapsed || (n = i.cloneNode(!0), n.id = "_baidu_bookmark_end_" + (t ? "" : a++)), this.insertNode(i), n && this.collapse().insertNode(n).setEndBefore(n), this.setStartAfter(i), {
				start: e ? i.id : i,
				end: n ? e ? n.id : n : null,
				id: e
			}
		},
		moveToBookmark: function(e) {
			var t = e.id ? this.document.getElementById(e.start) : e.start,
				n = e.end && e.id ? this.document.getElementById(e.end) : e.end;
			return this.setStartBefore(t), domUtils.remove(t), n ? (this.setEndBefore(n), domUtils.remove(n)) : this.collapse(!0), this
		},
		enlarge: function(e, t) {
			var n, i, r = domUtils.isBody,
				o = this.document.createTextNode("");
			if(e) {
				for(i = this.startContainer, 1 == i.nodeType ? i.childNodes[this.startOffset] ? n = i = i.childNodes[this.startOffset] : (i.appendChild(o), n = i = o) : n = i;;) {
					if(domUtils.isBlockElm(i)) {
						for(i = n;
							(n = i.previousSibling) && !domUtils.isBlockElm(n);) i = n;
						this.setStartBefore(i);
						break
					}
					n = i, i = i.parentNode
				}
				for(i = this.endContainer, 1 == i.nodeType ? ((n = i.childNodes[this.endOffset]) ? i.insertBefore(o, n) : i.appendChild(o), n = i = o) : n = i;;) {
					if(domUtils.isBlockElm(i)) {
						for(i = n;
							(n = i.nextSibling) && !domUtils.isBlockElm(n);) i = n;
						this.setEndAfter(i);
						break
					}
					n = i, i = i.parentNode
				}
				o.parentNode === this.endContainer && this.endOffset--, domUtils.remove(o)
			}
			if(!this.collapsed) {
				for(; !(0 != this.startOffset || t && t(this.startContainer) || r(this.startContainer));) this.setStartBefore(this.startContainer);
				for(; !(this.endOffset != (1 == this.endContainer.nodeType ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length) || t && t(this.endContainer) || r(this.endContainer));) this.setEndAfter(this.endContainer)
			}
			return this
		},
		enlargeToBlockElm: function(e) {
			for(; !domUtils.isBlockElm(this.startContainer);) this.setStartBefore(this.startContainer);
			if(!e)
				for(; !domUtils.isBlockElm(this.endContainer);) this.setEndAfter(this.endContainer);
			return this
		},
		adjustmentBoundary: function() {
			if(!this.collapsed) {
				for(; !domUtils.isBody(this.startContainer) && this.startOffset == this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length && this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setStartAfter(this.startContainer);
				for(; !domUtils.isBody(this.endContainer) && !this.endOffset && this.endContainer[3 == this.endContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setEndBefore(this.endContainer)
			}
			return this
		},
		applyInlineStyle: function(e, t, n) {
			if(this.collapsed) return this;
			this.trimBoundary().enlarge(!1, function(e) {
				return 1 == e.nodeType && domUtils.isBlockElm(e)
			}).adjustmentBoundary();
			for(var i, r, o = this.createBookmark(), s = o.end, a = function(e) {
					return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() : !domUtils.isWhitespace(e)
				}, l = domUtils.getNextDomNode(o.start, !1, a), c = this.cloneRange(); l && domUtils.getPosition(l, s) & domUtils.POSITION_PRECEDING;)
				if(/qyer_block/gi.test(l.className)) l = domUtils.getNextDomNode(l, !1, a);
				else if(3 == l.nodeType || dtd[e][l.tagName]) {
				for(c.setStartBefore(l), i = l; i && (3 == i.nodeType || dtd[e][i.tagName]) && i !== s;) r = i, i = domUtils.getNextDomNode(i, 1 == i.nodeType, null, function(t) {
					return dtd[e][t.tagName]
				});
				var u, d = c.setEndAfter(r).extractContents();
				if(n && n.length > 0) {
					var f, h;
					h = f = n[0].cloneNode(!1);
					for(var p, m = 1; p = n[m++];) f.appendChild(p.cloneNode(!1)), f = f.firstChild;
					u = f
				} else u = c.document.createElement(e);
				t && domUtils.setAttributes(u, t), u.appendChild(d), "SPAN" == u.tagName && t && t.style && utils.each(u.getElementsByTagName("span"), function(e) {
					e.style.cssText = e.style.cssText + ";" + t.style
				}), c.insertNode(n ? h : u);
				var g;
				if("span" == e && t.style && /text\-decoration/.test(t.style) && (g = domUtils.findParentByTagName(u, "a", !0)) ? (domUtils.setAttributes(g, t), domUtils.remove(u, !0), u = g) : (domUtils.mergeSibling(u), domUtils.clearEmptySibling(u)), domUtils.mergeChild(u, t), l = domUtils.getNextDomNode(u, !1, a), domUtils.mergeToParent(u), i === s) break
			} else l = domUtils.getNextDomNode(l, !0, a);
			return this.moveToBookmark(o)
		},
		removeInlineStyle: function(e) {
			if(this.collapsed) return this;
			e = utils.isArray(e) ? e : [e], this.shrinkBoundary().adjustmentBoundary();
			for(var t = this.startContainer, n = this.endContainer;;) {
				if(1 == t.nodeType) {
					if(utils.indexOf(e, t.tagName.toLowerCase()) > -1) break;
					if("body" == t.tagName.toLowerCase()) {
						t = null;
						break
					}
				}
				t = t.parentNode
			}
			for(;;) {
				if(1 == n.nodeType) {
					if(utils.indexOf(e, n.tagName.toLowerCase()) > -1) break;
					if("body" == n.tagName.toLowerCase()) {
						n = null;
						break
					}
				}
				n = n.parentNode
			}
			var i, r, o = this.createBookmark();
			t && (r = this.cloneRange().setEndBefore(o.start).setStartBefore(t), i = r.extractContents(), r.insertNode(i), domUtils.clearEmptySibling(t, !0), t.parentNode.insertBefore(o.start, t)), n && (r = this.cloneRange().setStartAfter(o.end).setEndAfter(n), i = r.extractContents(), r.insertNode(i), domUtils.clearEmptySibling(n, !1, !0), n.parentNode.insertBefore(o.end, n.nextSibling));
			for(var s, a = domUtils.getNextDomNode(o.start, !1, function(e) {
					return 1 == e.nodeType
				}); a && a !== o.end;) s = domUtils.getNextDomNode(a, !0, function(e) {
				var t = domUtils.findParent(e, function(e) {
					if(/qyer_block/gi.test(e.className)) return e
				}, !0);
				if(!t) return 1 == e.nodeType
			}), utils.indexOf(e, a.tagName.toLowerCase()) > -1 && domUtils.remove(a, !0), a = s;
			return this.moveToBookmark(o)
		},
		getClosedNode: function() {
			var e;
			if(!this.collapsed) {
				var n = this.cloneRange().adjustmentBoundary().shrinkBoundary();
				if(t(n)) {
					var i = n.startContainer.childNodes[n.startOffset];
					i && 1 == i.nodeType && (dtd.$empty[i.tagName] || dtd.$nonChild[i.tagName]) && (e = i)
				}
			}
			return e
		},
		select: browser.ie ? function(e, t) {
			var n;
			this.collapsed || this.shrinkBoundary();
			var i = this.getClosedNode();
			if(i && !t) {
				try {
					n = this.document.body.createControlRange(), n.addElement(i), n.select()
				} catch(a) {}
				return this
			}
			var c, u = this.createBookmark(),
				d = u.start;
			if(n = this.document.body.createTextRange(), n.moveToElementText(d), n.moveStart("character", 1), this.collapsed) {
				if(!e && 3 != this.startContainer.nodeType) {
					var f = this.document.createTextNode(l),
						h = this.document.createElement("span");
					h.appendChild(this.document.createTextNode(l)), d.parentNode.insertBefore(h, d), d.parentNode.insertBefore(f, d), r(this.document, f), s = f, o(h, "previousSibling"), o(d, "nextSibling"), n.moveStart("character", -1), n.collapse(!0)
				}
			} else {
				var p = this.document.body.createTextRange();
				c = u.end, p.moveToElementText(c), n.setEndPoint("EndToEnd", p)
			}
			this.moveToBookmark(u), h && domUtils.remove(h);
			try {
				n.select()
			} catch(a) {}
			return this
		} : function(e) {
			function t(e) {
				function t(t, n, i) {
					3 == t.nodeType && t.nodeValue.length < n && (e[i + "Offset"] = t.nodeValue.length)
				}
				t(e.startContainer, e.startOffset, "start"), t(e.endContainer, e.endOffset, "end")
			}
			var n, i = domUtils.getWindow(this.document),
				a = i.getSelection();
			if(browser.gecko ? this.document.body.focus() : i.focus(), a) {
				if(a.removeAllRanges(), this.collapsed && !e) {
					var c = this.startContainer,
						u = c;
					1 == c.nodeType && (u = c.childNodes[this.startOffset]), 3 == c.nodeType && this.startOffset || (u ? u.previousSibling && 3 == u.previousSibling.nodeType : c.lastChild && 3 == c.lastChild.nodeType) || (n = this.document.createTextNode(l), this.insertNode(n), r(this.document, n), o(n, "previousSibling"), o(n, "nextSibling"), s = n, this.setStart(n, browser.webkit ? 1 : 0).collapse(!0))
				}
				var d = this.document.createRange();
				if(this.collapsed && browser.opera && 1 == this.startContainer.nodeType) {
					var u = this.startContainer.childNodes[this.startOffset];
					if(u) {
						for(; u && domUtils.isBlockElm(u) && 1 == u.nodeType && u.childNodes[0];) u = u.childNodes[0];
						u && this.setStartBefore(u).collapse(!0)
					} else u = this.startContainer.lastChild, u && domUtils.isBr(u) && this.setStartBefore(u).collapse(!0)
				}
				t(this), d.setStart(this.startContainer, this.startOffset), d.setEnd(this.endContainer, this.endOffset), a.addRange(d)
			}
			return this
		},
		scrollToView: function(e, t) {
			e = e ? window : domUtils.getWindow(this.document);
			var n = this,
				i = n.document.createElement("span");
			return i.innerHTML = "&nbsp;", n.cloneRange().insertNode(i), domUtils.scrollToView(i, e, t), domUtils.remove(i), n
		},
		inFillChar: function() {
			var e = this.startContainer;
			return !(!this.collapsed || 3 != e.nodeType || e.nodeValue.replace(new RegExp("^" + domUtils.fillChar), "").length + 1 != e.nodeValue.length)
		},
		createAddress: function(e, t) {
			function n(e) {
				for(var n, i = e ? r.startContainer : r.endContainer, o = domUtils.findParents(i, !0, function(e) {
						return !domUtils.isBody(e)
					}), s = [], a = 0; n = o[a++];) s.push(domUtils.getNodeIndex(n, t));
				var l = 0;
				if(t)
					if(3 == i.nodeType) {
						for(var c = i.previousSibling; c && 3 == c.nodeType;) l += c.nodeValue.replace(fillCharReg, "").length, c = c.previousSibling;
						l += e ? r.startOffset : r.endOffset
					} else if(i = i.childNodes[e ? r.startOffset : r.endOffset]) l = domUtils.getNodeIndex(i, t);
				else {
					i = e ? r.startContainer : r.endContainer;
					for(var u = i.firstChild; u;)
						if(domUtils.isFillChar(u)) u = u.nextSibling;
						else if(l++, 3 == u.nodeType)
						for(; u && 3 == u.nodeType;) u = u.nextSibling;
					else u = u.nextSibling
				} else l = e ? domUtils.isFillChar(i) ? 0 : r.startOffset : r.endOffset;
				return l < 0 && (l = 0), s.push(l), s
			}
			var i = {},
				r = this;
			return i.startAddress = n(!0), e || (i.endAddress = r.collapsed ? [].concat(i.startAddress) : n()), i
		},
		moveToAddress: function(e, t) {
			function n(e, t) {
				for(var n, r, o, s = i.document.body, a = 0, l = e.length; a < l; a++)
					if(o = e[a], n = s, s = s.childNodes[o], !s) {
						r = o;
						break
					}
				t ? s ? i.setStartBefore(s) : i.setStart(n, r) : s ? i.setEndBefore(s) : i.setEnd(n, r)
			}
			var i = this;
			return n(e.startAddress, !0), !t && e.endAddress && n(e.endAddress), i
		},
		equals: function(e) {
			for(var t in this)
				if(this.hasOwnProperty(t) && this[t] !== e[t]) return !1;
			return !0
		},
		traversal: function(e, t) {
			if(this.collapsed) return this;
			for(var n = this.createBookmark(), i = n.end, r = domUtils.getNextDomNode(n.start, !1, t); r && r !== i && domUtils.getPosition(r, i) & domUtils.POSITION_PRECEDING;) {
				var o = domUtils.getNextDomNode(r, !1, t);
				e(r), r = o
			}
			return this.moveToBookmark(n)
		}
	}
}(),
function() {
	function e(e, t) {
		var n = domUtils.getNodeIndex;
		e = e.duplicate(), e.collapse(t);
		var i = e.parentElement();
		if(!i.hasChildNodes()) return {
			container: i,
			offset: 0
		};
		for(var r, o, s = i.children, a = e.duplicate(), l = 0, c = s.length - 1, u = -1; l <= c;) {
			u = Math.floor((l + c) / 2), r = s[u], a.moveToElementText(r);
			var d = a.compareEndPoints("StartToStart", e);
			if(d > 0) c = u - 1;
			else {
				if(!(d < 0)) return {
					container: i,
					offset: n(r)
				};
				l = u + 1
			}
		}
		if(u == -1) {
			if(a.moveToElementText(i), a.setEndPoint("StartToStart", e), o = a.text.replace(/(\r\n|\r)/g, "\n").length, s = i.childNodes, !o) return r = s[s.length - 1], {
				container: r,
				offset: r.nodeValue.length
			};
			for(var f = s.length; o > 0;) o -= s[--f].nodeValue.length;
			return {
				container: s[f],
				offset: -o
			}
		}
		if(a.collapse(d > 0), a.setEndPoint(d > 0 ? "StartToStart" : "EndToStart", e), o = a.text.replace(/(\r\n|\r)/g, "\n").length, !o) return dtd.$empty[r.tagName] || dtd.$nonChild[r.tagName] ? {
			container: i,
			offset: n(r) + (d > 0 ? 0 : 1)
		} : {
			container: r,
			offset: d > 0 ? 0 : r.childNodes.length
		};
		for(; o > 0;) try {
			var h = r;
			r = r[d > 0 ? "previousSibling" : "nextSibling"], o -= r.nodeValue.length
		} catch(p) {
			return {
				container: i,
				offset: n(h)
			}
		}
		return {
			container: r,
			offset: d > 0 ? -o : r.nodeValue.length + o
		}
	}

	function t(t, n) {
		if(t.item) n.selectNode(t.item(0));
		else {
			var i = e(t, !0);
			n.setStart(i.container, i.offset), 0 != t.compareEndPoints("StartToEnd", t) && (i = e(t, !1), n.setEnd(i.container, i.offset))
		}
		return n
	}

	function n(e) {
		var t;
		try {
			t = e.getNative().createRange()
		} catch(n) {
			return null
		}
		var i = t.item ? t.item(0) : t.parentElement();
		return(i.ownerDocument || i) === e.document ? t : null
	}
	var i = dom.Selection = function(e) {
		var t, i = this;
		i.document = e, browser.ie9below && (t = domUtils.getWindow(e).frameElement, domUtils.on(t, "beforedeactivate", function() {
			i._bakIERange = i.getIERange()
		}), domUtils.on(t, "activate", function() {
			try {
				!n(i) && i._bakIERange && i._bakIERange.select()
			} catch(e) {}
			i._bakIERange = null
		})), t = e = null
	};
	i.prototype = {
		rangeInBody: function(e, t) {
			var n = browser.ie9below || t ? e.item ? e.item() : e.parentElement() : e.startContainer;
			return n === this.document.body || domUtils.inDoc(n, this.document)
		},
		getNative: function() {
			var e = this.document;
			try {
				return e ? browser.ie9below ? e.selection : domUtils.getWindow(e).getSelection() : null
			} catch(t) {
				return null
			}
		},
		getIERange: function() {
			var e = n(this);
			return !e && this._bakIERange ? this._bakIERange : e
		},
		cache: function() {
			this.clear(), this._cachedRange = this.getRange(), this._cachedStartElement = this.getStart(), this._cachedStartElementPath = this.getStartElementPath()
		},
		getStartElementPath: function() {
			if(this._cachedStartElementPath) return this._cachedStartElementPath;
			var e = this.getStart();
			return e ? domUtils.findParents(e, !0, null, !0) : []
		},
		clear: function() {
			this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null
		},
		isFocus: function() {
			try {
				if(browser.ie9below) {
					var e = n(this);
					return !(!e || !this.rangeInBody(e))
				}
				return !!this.getNative().rangeCount
			} catch(t) {
				return !1
			}
		},
		getRange: function() {
			function e(e) {
				for(var t = n.document.body.firstChild, i = e.collapsed; t && t.firstChild;) e.setStart(t, 0), t = t.firstChild;
				e.startContainer || e.setStart(n.document.body, 0), i && e.collapse(!0)
			}
			var n = this;
			if(null != n._cachedRange) return this._cachedRange;
			var i = new baidu.editor.dom.Range(n.document);
			if(browser.ie9below) {
				var r = n.getIERange();
				if(r) try {
					t(r, i)
				} catch(o) {
					e(i)
				} else e(i)
			} else {
				var s = n.getNative();
				if(s && s.rangeCount) {
					var a = s.getRangeAt(0),
						l = s.getRangeAt(s.rangeCount - 1);
					i.setStart(a.startContainer, a.startOffset).setEnd(l.endContainer, l.endOffset), i.collapsed && domUtils.isBody(i.startContainer) && !i.startOffset && e(i)
				} else {
					if(this._bakRange && domUtils.inDoc(this._bakRange.startContainer, this.document)) return this._bakRange;
					e(i)
				}
			}
			return this._bakRange = i
		},
		getStart: function() {
			if(this._cachedStartElement) return this._cachedStartElement;
			var e, t, n, i, r = browser.ie9below ? this.getIERange() : this.getRange();
			if(browser.ie9below) {
				if(!r) return this.document.body.firstChild;
				if(r.item) return r.item(0);
				for(e = r.duplicate(), e.text.length > 0 && e.moveStart("character", 1), e.collapse(1), t = e.parentElement(), i = n = r.parentElement(); n = n.parentNode;)
					if(n == t) {
						t = i;
						break
					}
			} else if(r.shrinkBoundary(), t = r.startContainer, 1 == t.nodeType && t.hasChildNodes() && (t = t.childNodes[Math.min(t.childNodes.length - 1, r.startOffset)]), 3 == t.nodeType) return t.parentNode;
			return t
		},
		getText: function() {
			var e, t;
			return this.isFocus() && (e = this.getNative()) ? (t = browser.ie9below ? e.createRange() : e.getRangeAt(0), browser.ie9below ? t.text : t.toString()) : ""
		},
		clearRange: function() {
			this.getNative()[browser.ie9below ? "empty" : "removeAllRanges"]()
		}
	}
}(),
function() {
	function e(e, t) {
		var n;
		if(t.textarea)
			if(utils.isString(t.textarea)) {
				for(var i, r = 0, o = domUtils.getElementsByTagName(e, "textarea"); i = o[r++];)
					if(i.id == "ueditor_textarea_" + t.options.textarea) {
						n = i;
						break
					}
			} else n = t.textarea;
		n || (e.appendChild(n = domUtils.createElement(document, "textarea", {
			name: t.options.textarea,
			id: "ueditor_textarea_" + t.options.textarea,
			style: "display:none"
		})), t.textarea = n), !n.getAttribute("name") && n.setAttribute("name", t.options.textarea), n.value = t.hasContents() ? t.options.allHtmlEnabled ? t.getAllHtml() : t.getContent(null, null, !0) : ""
	}

	function t(e) {
		for(var t in e) return t
	}

	function n(e) {
		e.langIsReady = !0, e.fireEvent("langReady")
	}
	var i, r = 0,
		o = UE.Editor = function(e) {
			var i = this;
			i.uid = r++, EventBase.call(i), i.commands = {}, i.options = utils.extend(utils.clone(e || {}), UEDITOR_CONFIG, !0), i.shortcutkeys = {}, i.inputRules = [], i.outputRules = [], i.setOpt(o.defaultOptions(i)), utils.isEmptyObject(UE.I18N) ? utils.loadFile(document, {
				src: i.options.langPath + i.options.lang + "/" + i.options.lang + ".js",
				tag: "script",
				type: "text/javascript",
				defer: "defer"
			}, function() {
				UE.plugin.load(i), n(i)
			}) : (i.options.lang = t(UE.I18N), UE.plugin.load(i), n(i)), UE.instants["ueditorInstant" + i.uid] = i
		};
	o.prototype = {
		registerCommand: function(e, t) {
			this.commands[e] = t
		},
		ready: function(e) {
			var t = this;
			e && (t.isReady ? e.apply(t) : t.addListener("ready", e))
		},
		setOpt: function(e, t) {
			var n = {};
			utils.isString(e) ? n[e] = t : n = e, utils.extend(this.options, n, !0)
		},
		getOpt: function(e) {
			return this.options[e]
		},
		destroy: function() {
			var e = this;
			e.fireEvent("destroy");
			var t = e.container.parentNode,
				n = e.textarea;
			n ? n.style.display = "" : (n = document.createElement("textarea"), t.parentNode.insertBefore(n, t)), n.style.width = e.iframe.offsetWidth + "px", n.style.height = e.iframe.offsetHeight + "px", n.value = e.getContent(), n.id = e.key, t.innerHTML = "", domUtils.remove(t);
			var i = e.key;
			for(var r in e) e.hasOwnProperty(r) && delete this[r];
			UE.delEditor(i)
		},
		render: function(e) {
			var t = this,
				n = t.options,
				i = function(t) {
					return parseInt(domUtils.getComputedStyle(e, t))
				};
			if(utils.isString(e) && (e = document.getElementById(e)), e) {
				n.initialFrameWidth ? n.minFrameWidth = n.initialFrameWidth : n.minFrameWidth = n.initialFrameWidth = e.offsetWidth, n.initialFrameHeight ? n.minFrameHeight = n.initialFrameHeight : n.initialFrameHeight = n.minFrameHeight = e.offsetHeight, e.style.width = /%$/.test(n.initialFrameWidth) ? "100%" : n.initialFrameWidth - i("padding-left") - i("padding-right") + "px", e.style.height = /%$/.test(n.initialFrameHeight) ? "100%" : n.initialFrameHeight - i("padding-top") - i("padding-bottom") + "px", e.style.zIndex = n.zIndex;
				var r = (ie && browser.version < 9 ? "" : "<!DOCTYPE html>") + "<html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{word-wrap:break-word;cursor:text;height:90%;}\nbody{margin:0;font-family:sans-serif;font-size:16px;}p{margin:0;}</style>" + (n.iframeCssUrl ? "<link rel='stylesheet' type='text/css' href='" + utils.unhtml(n.iframeCssUrl) + "'/>" : "") + (n.initialStyle ? "<style>" + n.initialStyle + "</style>" : "") + "</head><body class='view' ></body><script type='text/javascript' " + (ie ? "defer='defer'" : "") + " id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant" + t.uid + "'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script>" + (n.iframeJsUrl ? "<script type='text/javascript' src='" + utils.unhtml(n.iframeJsUrl) + "'></script>" : "") + "</html>";
				e.appendChild(domUtils.createElement(document, "iframe", {
					id: "ueditor_" + t.uid,
					width: "100%",
					height: "100%",
					frameborder: "0",
					src: "javascript:void(function(){document.open();" + (n.customDomain && document.domain != location.hostname ? 'document.domain="' + document.domain + '";' : "") + 'document.write("' + r + '");document.close();}())'
				})), e.style.overflow = "hidden", setTimeout(function() {
					/%$/.test(n.initialFrameWidth) && (n.minFrameWidth = n.initialFrameWidth = e.offsetWidth), /%$/.test(n.initialFrameHeight) && (n.minFrameHeight = n.initialFrameHeight = e.offsetHeight, e.style.height = n.initialFrameHeight + "px")
				})
			}
		},
		_setup: function(t) {
			var n = this,
				i = n.options;
			ie ? (t.body.disabled = !0, t.body.contentEditable = !0, t.body.disabled = !1) : t.body.contentEditable = !0, t.body.spellcheck = !1, n.document = t, n.window = t.defaultView || t.parentWindow, n.iframe = n.window.frameElement, n.body = t.body, n.selection = new dom.Selection(t);
			var r;
			browser.gecko && (r = this.selection.getNative()) && r.removeAllRanges(), this._initEvents();
			for(var o = this.iframe.parentNode; !domUtils.isBody(o); o = o.parentNode)
				if("FORM" == o.tagName) {
					n.form = o, n.options.autoSyncData ? domUtils.on(n.window, "blur", function() {
						e(o, n)
					}) : domUtils.on(o, "submit", function() {
						e(this, n)
					});
					break
				}
			if(i.initialContent)
				if(i.autoClearinitialContent) {
					var s = n.execCommand;
					n.execCommand = function() {
						return n.fireEvent("firstBeforeExecCommand"), s.apply(n, arguments)
					}, this._setDefaultContent(i.initialContent)
				} else this.setContent(i.initialContent, !1, !0);
			domUtils.isEmptyNode(n.body) && (n.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>"), i.focus && setTimeout(function() {
					n.focus(n.options.focusInEnd), !n.options.autoClearinitialContent && n._selectionChange()
				}, 0), n.container || (n.container = this.iframe.parentNode),
				i.fullscreen && n.ui && n.ui.setFullScreen(!0);
			try {
				n.document.execCommand("2D-position", !1, !1)
			} catch(a) {}
			try {
				n.document.execCommand("enableInlineTableEditing", !1, !1)
			} catch(a) {}
			try {
				n.document.execCommand("enableObjectResizing", !1, !1)
			} catch(a) {}
			n._bindshortcutKeys(), n.isReady = 1, n.fireEvent("ready"), i.onready && i.onready.call(n), browser.ie9below || domUtils.on(n.window, ["blur", "focus"], function(e) {
				if("blur" == e.type) {
					n._bakRange = n.selection.getRange();
					try {
						n._bakNativeRange = n.selection.getNative().getRangeAt(0), n.selection.getNative().removeAllRanges()
					} catch(e) {
						n._bakNativeRange = null
					}
				} else try {
					n._bakRange && n._bakRange.select()
				} catch(e) {}
			}), browser.gecko && browser.version <= 10902 && (n.body.contentEditable = !1, setTimeout(function() {
				n.body.contentEditable = !0
			}, 100), setInterval(function() {
				n.body.style.height = n.iframe.offsetHeight - 20 + "px"
			}, 100)), !i.isShow && n.setHide(), i.readonly && n.setDisabled()
		},
		sync: function(t) {
			var n = this,
				i = t ? document.getElementById(t) : domUtils.findParent(n.iframe.parentNode, function(e) {
					return "FORM" == e.tagName
				}, !0);
			i && e(i, n)
		},
		setHeight: function(e, t) {
			e !== parseInt(this.iframe.parentNode.style.height) && (this.iframe.parentNode.style.height = e + "px"), !t && (this.options.minFrameHeight = this.options.initialFrameHeight = e), this.body.style.height = e + "px", !t && this.trigger("setHeight")
		},
		addshortcutkey: function(e, t) {
			var n = {};
			t ? n[e] = t : n = e, utils.extend(this.shortcutkeys, n)
		},
		_bindshortcutKeys: function() {
			var e = this,
				t = this.shortcutkeys;
			e.addListener("keydown", function(n, i) {
				var r = i.keyCode || i.which;
				for(var o in t)
					for(var s, a = t[o].split(","), l = 0; s = a[l++];) {
						s = s.split(":");
						var c = s[0],
							u = s[1];
						(/^(ctrl)(\+shift)?\+(\d+)$/.test(c.toLowerCase()) || /^(\d+)$/.test(c)) && (("ctrl" == RegExp.$1 ? i.ctrlKey || i.metaKey : 0) && ("" != RegExp.$2 ? i[RegExp.$2.slice(1) + "Key"] : 1) && r == RegExp.$3 || r == RegExp.$1) && (e.queryCommandState(o, u) != -1 && e.execCommand(o, u), domUtils.preventDefault(i))
					}
			})
		},
		getContent: function(e, t, n, i, r) {
			var o = this;
			if(e && utils.isFunction(e) && (t = e, e = ""), t ? !t() : !this.hasContents()) return "";
			o.fireEvent("beforegetcontent");
			var s = UE.htmlparser(o.body.innerHTML, i);
			return o.filterOutputRule(s), o.fireEvent("aftergetcontent", e, s), s.toHtml(r)
		},
		getAllHtml: function() {
			var e = this,
				t = [];
			if(e.fireEvent("getAllHtml", t), browser.ie && browser.version > 8) {
				var n = "";
				utils.each(e.document.styleSheets, function(e) {
					n += e.href ? '<link rel="stylesheet" type="text/css" href="' + e.href + '" />' : "<style>" + e.cssText + "</style>"
				}), utils.each(e.document.getElementsByTagName("script"), function(e) {
					n += e.outerHTML
				})
			}
			return "<html><head>" + (e.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + e.options.charset + '"/>' : "") + (n || e.document.getElementsByTagName("head")[0].innerHTML) + t.join("\n") + "</head><body " + (ie && browser.version < 9 ? 'class="view"' : "") + ">" + e.getContent(null, null, !0) + "</body></html>"
		},
		getPlainTxt: function() {
			var e = new RegExp(domUtils.fillChar, "g"),
				t = this.body.innerHTML.replace(/[\n\r]/g, "");
			return t = t.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, "\n").replace(/<br\/?>/gi, "\n").replace(/<[^>\/]+>/g, "").replace(/(\n)?<\/([^>]+)>/g, function(e, t, n) {
				return dtd.$block[n] ? "\n" : t ? t : ""
			}), t.replace(e, "").replace(/\u00a0/g, " ").replace(/&nbsp;/g, " ")
		},
		getContentTxt: function() {
			var e = new RegExp(domUtils.fillChar, "g");
			return this.body[browser.ie ? "innerText" : "textContent"].replace(e, "").replace(/\u00a0/g, " ")
		},
		setContent: function(t, n, i) {
			function r(e) {
				return "DIV" == e.tagName && e.getAttribute("cdata_tag")
			}
			var o = this;
			o.fireEvent("beforesetcontent", t);
			var s = UE.htmlparser(t);
			if(o.filterInputRule(s), t = s.toHtml(), o.body.innerHTML = (n ? o.body.innerHTML : "") + t, "p" == o.options.enterTag) {
				var a, l = this.body.firstChild;
				if(!l || 1 == l.nodeType && (dtd.$cdata[l.tagName] || r(l) || domUtils.isCustomeNode(l)) && l === this.body.lastChild) this.body.innerHTML = "<p>" + (browser.ie ? "&nbsp;" : "<br/>") + "</p>" + this.body.innerHTML;
				else
					for(var c = o.document.createElement("p"); l;) {
						for(; l && (3 == l.nodeType || 1 == l.nodeType && dtd.p[l.tagName] && !dtd.$cdata[l.tagName]);) a = l.nextSibling, c.appendChild(l), l = a;
						if(c.firstChild) {
							if(!l) {
								o.body.appendChild(c);
								break
							}
							l.parentNode.insertBefore(c, l), c = o.document.createElement("p")
						}
						l = l.nextSibling
					}
			}
			o.fireEvent("aftersetcontent"), o.fireEvent("contentchange"), !i && o._selectionChange(), o._bakRange = o._bakIERange = o._bakNativeRange = null;
			var u;
			browser.gecko && (u = this.selection.getNative()) && u.removeAllRanges(), o.options.autoSyncData && o.form && e(o.form, o)
		},
		focus: function(e) {
			try {
				var t = this,
					n = t.selection.getRange();
				if(e) {
					var i = t.body.lastChild;
					i && 1 == i.nodeType && !dtd.$empty[i.tagName] && (domUtils.isEmptyBlock(i) ? n.setStartAtFirst(i) : n.setStartAtLast(i), n.collapse(!0)), n.setCursor(!0)
				} else {
					if(!n.collapsed && domUtils.isBody(n.startContainer) && 0 == n.startOffset) {
						var i = t.body.firstChild;
						i && 1 == i.nodeType && !dtd.$empty[i.tagName] && n.setStartAtFirst(i).collapse(!0)
					}
					n.select(!0)
				}
				this.fireEvent("focus selectionchange")
			} catch(r) {}
		},
		isFocus: function() {
			return this.selection.isFocus()
		},
		blur: function() {
			var e = this.selection.getNative();
			if(e.empty && browser.ie) {
				var t = document.body.createTextRange();
				t.moveToElementText(document.body), t.collapse(!0), t.select(), e.empty()
			} else e.removeAllRanges()
		},
		_initEvents: function() {
			var e = this,
				t = e.document,
				n = e.window;
			e._proxyDomEvent = utils.bind(e._proxyDomEvent, e), domUtils.on(t, ["click", "contextmenu", "mousedown", "keydown", "keyup", "keypress", "mouseup", "mouseover", "mouseout", "selectstart"], e._proxyDomEvent), domUtils.on(n, ["focus", "blur"], e._proxyDomEvent), domUtils.on(e.body, "drop", function(t) {
				browser.gecko && t.stopPropagation && t.stopPropagation(), e.fireEvent("contentchange")
			}), domUtils.on(t, ["mouseup", "keydown"], function(t) {
				"keydown" == t.type && (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey) || 2 != t.button && e._selectionChange(250, t)
			})
		},
		_proxyDomEvent: function(e) {
			return this.fireEvent("before" + e.type.replace(/^on/, "").toLowerCase()) !== !1 && (this.fireEvent(e.type.replace(/^on/, ""), e) !== !1 && this.fireEvent("after" + e.type.replace(/^on/, "").toLowerCase()))
		},
		_selectionChange: function(e, t) {
			var n, r, o = this,
				s = !1;
			if(browser.ie && browser.version < 9 && t && "mouseup" == t.type) {
				var a = this.selection.getRange();
				a.collapsed || (s = !0, n = t.clientX, r = t.clientY)
			}
			clearTimeout(i), i = setTimeout(function() {
				if(o.selection && o.selection.getNative()) {
					var e;
					if(s && "None" == o.selection.getNative().type) {
						e = o.document.body.createTextRange();
						try {
							e.moveToPoint(n, r)
						} catch(i) {
							e = null
						}
					}
					var a;
					e && (a = o.selection.getIERange, o.selection.getIERange = function() {
						return e
					}), o.selection.cache(), a && (o.selection.getIERange = a), o.selection._cachedRange && o.selection._cachedStartElement && (o.fireEvent("beforeselectionchange"), o.fireEvent("selectionchange", !!t), o.fireEvent("afterselectionchange"), o.selection.clear())
				}
			}, e || 50)
		},
		_callCmdFn: function(e, t) {
			var n, i, r = t[0].toLowerCase();
			return n = this.commands[r] || UE.commands[r], i = n && n[e], n && i || "queryCommandState" != e ? i ? i.apply(this, t) : void 0 : 0
		},
		execCommand: function(e) {
			e = e.toLowerCase();
			var t, n = this,
				i = n.commands[e] || UE.commands[e];
			return i && i.execCommand ? (i.notNeedUndo || n.__hasEnterExecCommand ? (t = this._callCmdFn("execCommand", arguments), !n.__hasEnterExecCommand && !i.ignoreContentChange && !n._ignoreContentChange && n.fireEvent("contentchange")) : (n.__hasEnterExecCommand = !0, n.queryCommandState.apply(n, arguments) != -1 && (n.fireEvent("saveScene"), n.fireEvent.apply(n, ["beforeexeccommand", e].concat(arguments)), t = this._callCmdFn("execCommand", arguments), n.fireEvent.apply(n, ["afterexeccommand", e].concat(arguments)), n.fireEvent("saveScene")), n.__hasEnterExecCommand = !1), !n.__hasEnterExecCommand && !i.ignoreContentChange && !n._ignoreContentChange && n._selectionChange(), t) : null
		},
		queryCommandState: function(e) {
			return this._callCmdFn("queryCommandState", arguments)
		},
		queryCommandValue: function(e) {
			return this._callCmdFn("queryCommandValue", arguments)
		},
		hasContents: function(e) {
			if(e)
				for(var t, n = 0; t = e[n++];)
					if(this.document.getElementsByTagName(t).length > 0) return !0;
			if(!domUtils.isEmptyBlock(this.body)) return !0;
			for(e = ["div"], n = 0; t = e[n++];)
				for(var i, r = domUtils.getElementsByTagName(this.document, t), o = 0; i = r[o++];)
					if(domUtils.isCustomeNode(i)) return !0;
			return !1
		},
		reset: function() {
			this.fireEvent("reset")
		},
		setEnabled: function() {
			var e, t = this;
			if("false" == t.body.contentEditable) {
				t.body.contentEditable = !0, e = t.selection.getRange();
				try {
					e.moveToBookmark(t.lastBk), delete t.lastBk
				} catch(n) {
					e.setStartAtFirst(t.body).collapse(!0)
				}
				e.select(!0), t.bkqueryCommandState && (t.queryCommandState = t.bkqueryCommandState, delete t.bkqueryCommandState), t.bkqueryCommandValue && (t.queryCommandValue = t.bkqueryCommandValue, delete t.bkqueryCommandValue), t.fireEvent("selectionchange")
			}
		},
		enable: function() {
			return this.setEnabled()
		},
		setDisabled: function(e) {
			var t = this;
			e = e ? utils.isArray(e) ? e : [e] : [], "true" == t.body.contentEditable && (t.lastBk || (t.lastBk = t.selection.getRange().createBookmark(!0)), t.body.contentEditable = !1, t.bkqueryCommandState = t.queryCommandState, t.bkqueryCommandValue = t.queryCommandValue, t.queryCommandState = function(n) {
				return utils.indexOf(e, n) != -1 ? t.bkqueryCommandState.apply(t, arguments) : -1
			}, t.queryCommandValue = function(n) {
				return utils.indexOf(e, n) != -1 ? t.bkqueryCommandValue.apply(t, arguments) : null
			}, t.fireEvent("selectionchange"))
		},
		disable: function(e) {
			return this.setDisabled(e)
		},
		_setDefaultContent: function() {
			function e() {
				var t = this;
				t.document.getElementById("initContent") && (t.body.innerHTML = "<p>" + (ie ? "" : "<br/>") + "</p>", t.removeListener("firstBeforeExecCommand focus", e), setTimeout(function() {
					t.focus(), t._selectionChange()
				}, 0))
			}
			return function(t) {
				var n = this;
				n.body.innerHTML = '<p id="initContent">' + t + "</p>", n.addListener("firstBeforeExecCommand focus", e)
			}
		}(),
		setShow: function() {
			var e = this,
				t = e.selection.getRange();
			if("none" == e.container.style.display) {
				try {
					t.moveToBookmark(e.lastBk), delete e.lastBk
				} catch(n) {
					t.setStartAtFirst(e.body).collapse(!0)
				}
				setTimeout(function() {
					t.select(!0)
				}, 100), e.container.style.display = ""
			}
		},
		show: function() {
			return this.setShow()
		},
		setHide: function() {
			var e = this;
			e.lastBk || (e.lastBk = e.selection.getRange().createBookmark(!0)), e.container.style.display = "none"
		},
		hide: function() {
			return this.setHide()
		},
		getLang: function(e) {
			var t = UE.I18N[this.options.lang];
			if(!t) throw Error("not import language file");
			e = (e || "").split(".");
			for(var n, i = 0;
				(n = e[i++]) && (t = t[n], t););
			return t
		},
		getContentLength: function(e, t) {
			var n = this.getContent(!1, !1, !0).length;
			if(e) {
				t = (t || []).concat(["hr", "img", "iframe"]), n = this.getContentTxt().replace(/[\t\r\n]+/g, "").length;
				for(var i, r = 0; i = t[r++];) n += this.document.getElementsByTagName(i).length
			}
			return n
		},
		addInputRule: function(e) {
			this.inputRules.push(e)
		},
		filterInputRule: function(e) {
			for(var t, n = 0; t = this.inputRules[n++];) t.call(this, e)
		},
		addOutputRule: function(e) {
			this.outputRules.push(e)
		},
		filterOutputRule: function(e) {
			for(var t, n = 0; t = this.outputRules[n++];) t.call(this, e)
		},
		getActionUrl: function(e) {
			var t = this.getOpt(e) || e,
				n = this.getOpt("imageUrl"),
				i = this.getOpt("serverUrl");
			return !i && n && (i = n.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2")), i ? (i = i + (i.indexOf("?") == -1 ? "?" : "&") + "action=" + (t || ""), utils.formatUrl(i)) : ""
		}
	}, utils.inherits(o, EventBase)
}(), UE.Editor.defaultOptions = function(e) {
		var t = e.options.UEDITOR_HOME_URL;
		return {
			isShow: !0,
			initialContent: "",
			initialStyle: "",
			autoClearinitialContent: !1,
			iframeCssUrl: t + "themes/iframe.css",
			textarea: "editorValue",
			focus: !1,
			focusInEnd: !0,
			autoClearEmptyNode: !0,
			fullscreen: !1,
			readonly: !1,
			zIndex: 999,
			imagePopup: !0,
			enterTag: "p",
			customDomain: !1,
			lang: "zh-cn",
			langPath: t + "lang/",
			theme: "default",
			themePath: t + "themes/",
			allHtmlEnabled: !1,
			scaleEnabled: !1,
			tableNativeEditInFF: !1,
			autoSyncData: !0,
			fileNameFormat: "{time}{rand:6}"
		}
	},
	function() {
		UE.Editor.prototype.loadServerConfig = function() {
			function showErrorMsg(e) {
				console && console.error(e)
			}
			var me = this;
			setTimeout(function() {
				try {
					me.options.imageUrl && me.setOpt("serverUrl", me.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2"));
					var configUrl = me.getActionUrl("config"),
						isJsonp = utils.isCrossDomainUrl(configUrl);
					me._serverConfigLoaded = !1, configUrl && UE.ajax.request(configUrl, {
						method: "GET",
						dataType: isJsonp ? "jsonp" : "",
						onsuccess: function(r) {
							try {
								var config = isJsonp ? r : eval("(" + r.responseText + ")");
								utils.extend(me.options, config), me.fireEvent("serverConfigLoaded"), me._serverConfigLoaded = !0
							} catch(e) {
								showErrorMsg(me.getLang("loadconfigFormatError"))
							}
						},
						onerror: function() {
							showErrorMsg(me.getLang("loadconfigHttpError"))
						}
					})
				} catch(e) {
					showErrorMsg(me.getLang("loadconfigError"))
				}
			})
		}, UE.Editor.prototype.isServerConfigLoaded = function() {
			var e = this;
			return e._serverConfigLoaded || !1
		}, UE.Editor.prototype.afterConfigReady = function(e) {
			if(e && utils.isFunction(e)) {
				var t = this,
					n = function() {
						e.apply(t, arguments), t.removeListener("serverConfigLoaded", n)
					};
				t.isServerConfigLoaded() ? e.call(t, "serverConfigLoaded") : t.addListener("serverConfigLoaded", n)
			}
		}
	}(), UE.ajax = function() {
		function e(e) {
			var t = [];
			for(var n in e)
				if("method" != n && "timeout" != n && "async" != n && "dataType" != n && "callback" != n && void 0 != e[n] && null != e[n])
					if("function" != (typeof e[n]).toLowerCase() && "object" != (typeof e[n]).toLowerCase()) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
					else if(utils.isArray(e[n]))
				for(var i = 0; i < e[n].length; i++) t.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][i]));
			return t.join("&")
		}

		function t(t, n) {
			var i = o(),
				r = !1,
				s = {
					method: "POST",
					timeout: 5e3,
					async: !0,
					data: {},
					onsuccess: function() {},
					onerror: function() {}
				};
			if("object" == typeof t && (n = t, t = n.url), i && t) {
				var a = n ? utils.extend(s, n) : s,
					l = e(a);
				utils.isEmptyObject(a.data) || (l += (l ? "&" : "") + e(a.data));
				var c = setTimeout(function() {
						4 != i.readyState && (r = !0, i.abort(), clearTimeout(c))
					}, a.timeout),
					u = a.method.toUpperCase(),
					d = t + (t.indexOf("?") == -1 ? "?" : "&") + ("POST" == u ? "" : l + "&noCache=" + +new Date);
				i.open(u, d, a.async), i.onreadystatechange = function() {
					4 == i.readyState && (r || 200 != i.status ? a.onerror(i) : a.onsuccess(i))
				}, "POST" == u ? (i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(l)) : i.send(null)
			}
		}

		function n(t, n) {
			function i(e, t, n) {
				e.setAttribute("type", "text/javascript"), e.setAttribute("defer", "defer"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
			}

			function r(e) {
				return function() {
					try {
						if(e) u.onerror && u.onerror();
						else try {
							clearTimeout(s), l.apply(window, arguments)
						} catch(t) {}
					} catch(n) {
						u.onerror && u.onerror.call(window, n)
					} finally {
						u.oncomplete && u.oncomplete.apply(window, arguments), c.parentNode && c.parentNode.removeChild(c), window[o] = null;
						try {
							delete window[o]
						} catch(t) {}
					}
				}
			}
			var o, s, a, l = n.onsuccess || function() {},
				c = document.createElement("SCRIPT"),
				u = n || {},
				d = u.charset,
				f = u.jsonp || "callback",
				h = u.timeOut || 0,
				p = new RegExp("(\\?|&)" + f + "=([^&]*)");
			utils.isFunction(l) ? (o = "bd__editor__" + Math.floor(2147483648 * Math.random()).toString(36), window[o] = r(0)) : utils.isString(l) ? o = l : (a = p.exec(t)) && (o = a[2]), t = t.replace(p, "$1" + f + "=" + o), t.search(p) < 0 && (t += (t.indexOf("?") < 0 ? "?" : "&") + f + "=" + o);
			var m = e(n);
			utils.isEmptyObject(n.data) || (m += (m ? "&" : "") + e(n.data)), m && (t = t.replace(/\?/, "?" + m + "&")), c.onerror = r(1), h && (s = setTimeout(r(1), h)), i(c, t, d)
		}
		var i = "XMLHttpRequest()";
		try {
			new ActiveXObject("Msxml2.XMLHTTP"), i = "ActiveXObject('Msxml2.XMLHTTP')"
		} catch(r) {
			try {
				new ActiveXObject("Microsoft.XMLHTTP"), i = "ActiveXObject('Microsoft.XMLHTTP')"
			} catch(r) {}
		}
		var o = new Function("return new " + i);
		return {
			request: function(e, i) {
				i && "jsonp" == i.dataType ? n(e, i) : t(e, i)
			},
			getJSONP: function(e, t, i) {
				var r = {
					data: t,
					oncomplete: i
				};
				n(e, r)
			}
		}
	}();
var filterWord = UE.filterWord = function() {
	function e(e) {
		return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/gi.test(e)
	}

	function t(e) {
		return e = e.replace(/[\d.]+\w+/g, function(e) {
			return utils.transUnitToPx(e)
		})
	}

	function n(e) {
		return e.replace(/[\t\r\n]+/g, " ").replace(/<!--[\s\S]*?-->/gi, "").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi, function(e) {
			if(browser.opera) return "";
			try {
				if(/Bitmap/i.test(e)) return "";
				var n = e.match(/width:([ \d.]*p[tx])/i)[1],
					i = e.match(/height:([ \d.]*p[tx])/i)[1],
					r = e.match(/src=\s*"([^"]*)"/i)[1];
				return '<img width="' + t(n) + '" height="' + t(i) + '" src="' + r + '" />'
			} catch(o) {
				return ""
			}
		}).replace(/<\/?div[^>]*>/g, "").replace(/v:\w+=(["']?)[^'"]+\1/g, "").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/gi, function(e, t, n, i) {
			return "class" == t && "MsoListParagraph" == i ? e : ""
		}).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi, function(e, t, n) {
			return n.replace(/[\t\r\n ]+/g, " ")
		}).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function(e, n, i, r) {
			for(var o, s = [], a = r.replace(/^\s+|\s+$/, "").replace(/&#39;/g, "'").replace(/&quot;/gi, "'").replace(/[\d.]+(cm|pt)/g, function(e) {
					return utils.transUnitToPx(e)
				}).split(/;\s*/g), l = 0; o = a[l]; l++) {
				var c, u, d = o.split(":");
				if(2 == d.length) {
					if(c = d[0].toLowerCase(), u = d[1].toLowerCase(), /^(background)\w*/.test(c) && 0 == u.replace(/(initial|\s)/g, "").length || /^(margin)\w*/.test(c) && /^0\w+$/.test(u)) continue;
					switch(c) {
						case "mso-padding-alt":
						case "mso-padding-top-alt":
						case "mso-padding-right-alt":
						case "mso-padding-bottom-alt":
						case "mso-padding-left-alt":
						case "mso-margin-alt":
						case "mso-margin-top-alt":
						case "mso-margin-right-alt":
						case "mso-margin-bottom-alt":
						case "mso-margin-left-alt":
						case "mso-height":
						case "mso-width":
						case "mso-vertical-align-alt":
							/<table/.test(n) || (s[l] = c.replace(/^mso-|-alt$/g, "") + ":" + t(u));
							continue;
						case "horiz-align":
							s[l] = "text-align:" + u;
							continue;
						case "vert-align":
							s[l] = "vertical-align:" + u;
							continue;
						case "font-color":
						case "mso-foreground":
							s[l] = "color:" + u;
							continue;
						case "mso-background":
						case "mso-highlight":
							s[l] = "background:" + u;
							continue;
						case "mso-default-height":
							s[l] = "min-height:" + t(u);
							continue;
						case "mso-default-width":
							s[l] = "min-width:" + t(u);
							continue;
						case "mso-padding-between-alt":
							s[l] = "border-collapse:separate;border-spacing:" + t(u);
							continue;
						case "text-line-through":
							"single" != u && "double" != u || (s[l] = "text-decoration:line-through");
							continue;
						case "mso-zero-height":
							"yes" == u && (s[l] = "display:none");
							continue;
						case "margin":
							if(!/[1-9]/.test(u)) continue
					}
					if(/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(c) || /text\-indent|padding|margin/.test(c) && /\-[\d.]+/.test(u)) continue;
					s[l] = c + ":" + d[1]
				}
			}
			return n + (s.length ? ' style="' + s.join(";").replace(/;{2,}/g, ";") + '"' : "")
		})
	}
	return function(t) {
		return e(t) ? n(t) : t
	}
}();
! function() {
	function e(e, t, n) {
		return e.push(h), t + (n ? 1 : -1)
	}

	function t(e, t) {
		for(var n = 0; n < t; n++) e.push(f)
	}

	function n(s, a, l, c) {
		switch(s.type) {
			case "root":
				for(var u, d = 0; u = s.children[d++];) l && "element" == u.type && !dtd.$inlineWithA[u.tagName] && d > 1 && (e(a, c, !0), t(a, c)), n(u, a, l, c);
				break;
			case "text":
				i(s, a);
				break;
			case "element":
				r(s, a, l, c);
				break;
			case "comment":
				o(s, a, l)
		}
		return a
	}

	function i(e, t) {
		"pre" == e.parentNode.tagName ? t.push(e.data) : t.push(d[e.parentNode.tagName] ? utils.html(e.data) : e.data.replace(/[ ]{2}/g, " &nbsp;"))
	}

	function r(i, r, o, s) {
		var a = "";
		if(i.attrs) {
			a = [];
			var l = i.attrs;
			for(var c in l) a.push(c + (void 0 !== l[c] ? '="' + (u[c] ? utils.html(l[c]).replace(/["]/g, function(e) {
				return "&quot;"
			}) : utils.unhtml(l[c])) + '"' : ""));
			a = a.join(" ")
		}
		if(r.push("<" + i.tagName + (a ? " " + a : "") + (dtd.$empty[i.tagName] ? "/" : "") + ">"), o && !dtd.$inlineWithA[i.tagName] && "pre" != i.tagName && i.children && i.children.length && (s = e(r, s, !0), t(r, s)), i.children && i.children.length)
			for(var d, f = 0; d = i.children[f++];) o && "element" == d.type && !dtd.$inlineWithA[d.tagName] && f > 1 && (e(r, s), t(r, s)), n(d, r, o, s);
		dtd.$empty[i.tagName] || (o && !dtd.$inlineWithA[i.tagName] && "pre" != i.tagName && i.children && i.children.length && (s = e(r, s), t(r, s)), r.push("</" + i.tagName + ">"))
	}

	function o(e, t) {
		t.push("<!--" + e.data + "-->")
	}

	function s(e, t) {
		var n;
		if("element" == e.type && e.getAttr("id") == t) return e;
		if(e.children && e.children.length)
			for(var i, r = 0; i = e.children[r++];)
				if(n = s(i, t)) return n
	}

	function a(e, t, n) {
		if("element" == e.type && e.tagName == t && n.push(e), e.children && e.children.length)
			for(var i, r = 0; i = e.children[r++];) a(i, t, n)
	}

	function l(e, t) {
		if(e.children && e.children.length)
			for(var n, i = 0; n = e.children[i];) l(n, t), n.parentNode && (n.children && n.children.length && t(n), n.parentNode && i++);
		else t(e)
	}
	var c = UE.uNode = function(e) {
			this.type = e.type, this.data = e.data, this.tagName = e.tagName, this.parentNode = e.parentNode, this.attrs = e.attrs || {}, this.children = e.children
		},
		u = {
			href: 1,
			src: 1,
			_src: 1,
			_href: 1,
			cdata_data: 1
		},
		d = {
			style: 1,
			script: 1
		},
		f = "    ",
		h = "\n";
	c.createElement = function(e) {
		return /[<>]/.test(e) ? UE.htmlparser(e).children[0] : new c({
			type: "element",
			children: [],
			tagName: e
		})
	}, c.createText = function(e, t) {
		return new UE.uNode({
			type: "text",
			data: t ? e : utils.unhtml(e || "")
		})
	}, c.prototype = {
		toHtml: function(e) {
			var t = [];
			return n(this, t, e, 0), t.join("")
		},
		innerHTML: function(e) {
			if("element" != this.type || dtd.$empty[this.tagName]) return this;
			if(utils.isString(e)) {
				if(this.children)
					for(var t, n = 0; t = this.children[n++];) t.parentNode = null;
				this.children = [];
				for(var t, i = UE.htmlparser(e), n = 0; t = i.children[n++];) this.children.push(t), t.parentNode = this;
				return this
			}
			var i = new UE.uNode({
				type: "root",
				children: this.children
			});
			return i.toHtml()
		},
		innerText: function(e, t) {
			if("element" != this.type || dtd.$empty[this.tagName]) return this;
			if(e) {
				if(this.children)
					for(var n, i = 0; n = this.children[i++];) n.parentNode = null;
				return this.children = [], this.appendChild(c.createText(e, t)), this
			}
			return this.toHtml().replace(/<[^>]+>/g, "")
		},
		getData: function() {
			return "element" == this.type ? "" : this.data
		},
		firstChild: function() {
			return this.children ? this.children[0] : null
		},
		lastChild: function() {
			return this.children ? this.children[this.children.length - 1] : null
		},
		previousSibling: function() {
			for(var e, t = this.parentNode, n = 0; e = t.children[n]; n++)
				if(e === this) return 0 == n ? null : t.children[n - 1]
		},
		nextSibling: function() {
			for(var e, t = this.parentNode, n = 0; e = t.children[n++];)
				if(e === this) return t.children[n]
		},
		replaceChild: function(e, t) {
			if(this.children) {
				e.parentNode && e.parentNode.removeChild(e);
				for(var n, i = 0; n = this.children[i]; i++)
					if(n === t) return this.children.splice(i, 1, e), t.parentNode = null, e.parentNode = this, e
			}
		},
		appendChild: function(e) {
			if("root" == this.type || "element" == this.type && !dtd.$empty[this.tagName]) {
				this.children || (this.children = []), e.parentNode && e.parentNode.removeChild(e);
				for(var t, n = 0; t = this.children[n]; n++)
					if(t === e) {
						this.children.splice(n, 1);
						break
					}
				return this.children.push(e), e.parentNode = this, e
			}
		},
		insertBefore: function(e, t) {
			if(this.children) {
				e.parentNode && e.parentNode.removeChild(e);
				for(var n, i = 0; n = this.children[i]; i++)
					if(n === t) return this.children.splice(i, 0, e), e.parentNode = this, e
			}
		},
		insertAfter: function(e, t) {
			if(this.children) {
				e.parentNode && e.parentNode.removeChild(e);
				for(var n, i = 0; n = this.children[i]; i++)
					if(n === t) return this.children.splice(i + 1, 0, e), e.parentNode = this, e
			}
		},
		removeChild: function(e, t) {
			if(this.children)
				for(var n, i = 0; n = this.children[i]; i++)
					if(n === e) {
						if(this.children.splice(i, 1), n.parentNode = null, t && n.children && n.children.length)
							for(var r, o = 0; r = n.children[o]; o++) this.children.splice(i + o, 0, r), r.parentNode = this;
						return n
					}
		},
		getAttr: function(e) {
			return this.attrs && this.attrs[e.toLowerCase()]
		},
		setAttr: function(e, t) {
			if(!e) return void delete this.attrs;
			if(this.attrs || (this.attrs = {}), utils.isObject(e))
				for(var n in e) e[n] ? this.attrs[n.toLowerCase()] = e[n] : delete this.attrs[n];
			else t ? this.attrs[e.toLowerCase()] = t : delete this.attrs[e]
		},
		getIndex: function() {
			for(var e, t = this.parentNode, n = 0; e = t.children[n]; n++)
				if(e === this) return n;
			return -1
		},
		getNodeById: function(e) {
			var t;
			if(this.children && this.children.length)
				for(var n, i = 0; n = this.children[i++];)
					if(t = s(n, e)) return t
		},
		getNodesByTagName: function(e) {
			e = utils.trim(e).replace(/[ ]{2,}/g, " ").split(" ");
			var t = [],
				n = this;
			return utils.each(e, function(e) {
				if(n.children && n.children.length)
					for(var i, r = 0; i = n.children[r++];) a(i, e, t)
			}), t
		},
		getStyle: function(e) {
			var t = this.getAttr("style");
			if(!t) return "";
			var n = new RegExp("(^|;)\\s*" + e + ":([^;]+)", "i"),
				i = t.match(n);
			return i && i[0] ? i[2] : ""
		},
		setStyle: function(e, t) {
			function n(e, t) {
				var n = new RegExp("(^|;)\\s*" + e + ":([^;]+;?)", "gi");
				i = i.replace(n, "$1"), t && (i = e + ":" + utils.unhtml(t) + ";" + i)
			}
			var i = this.getAttr("style");
			if(i || (i = ""), utils.isObject(e))
				for(var r in e) n(r, e[r]);
			else n(e, t);
			this.setAttr("style", utils.trim(i))
		},
		traversal: function(e) {
			return this.children && this.children.length && l(this, e), this
		}
	}
}();
var htmlparser = UE.htmlparser = function(e, t) {
		function n(e, t) {
			if(f[e.tagName]) {
				var n = u.createElement(f[e.tagName]);
				e.appendChild(n), n.appendChild(u.createText(t)), e = n
			} else e.appendChild(u.createText(t))
		}

		function i(e, t, n) {
			var r;
			if(r = d[t]) {
				for(var o, a = e;
					"root" != a.type;) {
					if(utils.isArray(r) ? utils.indexOf(r, a.tagName) != -1 : r == a.tagName) {
						e = a, o = !0;
						break
					}
					a = a.parentNode
				}
				o || (e = i(e, utils.isArray(r) ? r[0] : r))
			}
			var l = new u({
				parentNode: e,
				type: "element",
				tagName: t.toLowerCase(),
				children: dtd.$empty[t] ? null : []
			});
			if(n) {
				for(var f, h = {}; f = s.exec(n);) h[f[1].toLowerCase()] = c[f[1].toLowerCase()] ? f[2] || f[3] || f[4] : utils.unhtml(f[2] || f[3] || f[4]);
				l.attrs = h
			}
			return e.children.push(l), dtd.$empty[t] ? e : l
		}

		function r(e, t) {
			e.children.push(new u({
				type: "comment",
				data: t,
				parentNode: e
			}))
		}
		var o = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
			s = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
			a = {
				b: 1,
				code: 1,
				i: 1,
				u: 1,
				strike: 1,
				s: 1,
				tt: 1,
				strong: 1,
				q: 1,
				samp: 1,
				em: 1,
				span: 1,
				sub: 1,
				img: 1,
				sup: 1,
				font: 1,
				big: 1,
				small: 1,
				iframe: 1,
				a: 1,
				br: 1,
				pre: 1
			};
		e = e.replace(new RegExp(domUtils.fillChar, "g"), ""), t || (e = e.replace(new RegExp("[\\r\\t\\n" + (t ? "" : " ") + "]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n" + (t ? "" : " ") + "]*", "g"), function(e, n) {
			return n && a[n.toLowerCase()] ? e.replace(/(^[\n\r]+)|([\n\r]+$)/g, "") : e.replace(new RegExp("^[\\r\\n" + (t ? "" : " ") + "]+"), "").replace(new RegExp("[\\r\\n" + (t ? "" : " ") + "]+$"), "")
		}));
		for(var l, c = {
				href: 1,
				src: 1
			}, u = UE.uNode, d = {
				td: "tr",
				tr: ["tbody", "thead", "tfoot"],
				tbody: "table",
				th: "tr",
				thead: "table",
				tfoot: "table",
				caption: "table",
				li: ["ul", "ol"],
				dt: "dl",
				dd: "dl",
				option: "select"
			}, f = {
				ol: "li",
				ul: "li"
			}, h = 0, p = 0, m = new u({
				type: "root",
				children: []
			}), g = m; l = o.exec(e);) {
			h = l.index;
			try {
				if(h > p && n(g, e.slice(p, h)), l[3]) dtd.$cdata[g.tagName] ? n(g, l[0]) : g = i(g, l[3].toLowerCase(), l[4]);
				else if(l[1]) {
					if("root" != g.type)
						if(dtd.$cdata[g.tagName] && !dtd.$cdata[l[1]]) n(g, l[0]);
						else {
							for(var v = g;
								"element" == g.type && g.tagName != l[1].toLowerCase();)
								if(g = g.parentNode, "root" == g.type) throw g = v, "break";
							g = g.parentNode
						}
				} else l[2] && r(g, l[2])
			} catch(y) {}
			p = o.lastIndex
		}
		return p < e.length && n(g, e.slice(p)), m
	},
	filterNode = UE.filterNode = function() {
		function e(t, n) {
			switch(t.type) {
				case "text":
					break;
				case "element":
					var i;
					if(i = n[t.tagName])
						if("-" === i) t.parentNode.removeChild(t);
						else if(utils.isFunction(i)) {
						var r = t.parentNode,
							o = t.getIndex();
						if(i(t), t.parentNode) {
							if(t.children)
								for(var s, a = 0; s = t.children[a];) e(s, n), s.parentNode && a++
						} else
							for(var s, a = o; s = r.children[a];) e(s, n), s.parentNode && a++
					} else {
						var l = i.$;
						if(l && t.attrs) {
							var c, u = {};
							for(var d in l) {
								if(c = t.getAttr(d), "style" == d && utils.isArray(l[d])) {
									var f = [];
									utils.each(l[d], function(e) {
										var n;
										(n = t.getStyle(e)) && f.push(e + ":" + n)
									}), c = f.join(";")
								}
								c && (u[d] = c)
							}
							t.attrs = u
						}
						if(t.children)
							for(var s, a = 0; s = t.children[a];) e(s, n), s.parentNode && a++
					} else if(dtd.$cdata[t.tagName]) t.parentNode.removeChild(t);
					else {
						var r = t.parentNode,
							o = t.getIndex();
						t.parentNode.removeChild(t, !0);
						for(var s, a = o; s = r.children[a];) e(s, n), s.parentNode && a++
					}
					break;
				case "comment":
					t.parentNode.removeChild(t)
			}
		}
		return function(t, n) {
			if(utils.isEmptyObject(n)) return t;
			var i;
			(i = n["-"]) && utils.each(i.split(" "), function(e) {
				n[e] = "-"
			});
			for(var r, o = 0; r = t.children[o];) e(r, n), r.parentNode && o++;
			return t
		}
	}();
UE.plugin = function() {
	var e = {};
	return {
		register: function(t, n, i, r) {
			i && utils.isFunction(i) && (r = i, i = null), e[t] = {
				optionName: i || t,
				execFn: n,
				afterDisabled: r
			}
		},
		load: function(t) {
			utils.each(e, function(e) {
				var n = e.execFn.call(t);
				t.options[e.optionName] !== !1 ? n && utils.each(n, function(e, n) {
					switch(n.toLowerCase()) {
						case "shortcutkey":
							t.addshortcutkey(e);
							break;
						case "bindevents":
							utils.each(e, function(e, n) {
								t.addListener(n, e)
							});
							break;
						case "bindmultievents":
							utils.each(utils.isArray(e) ? e : [e], function(e) {
								var n = utils.trim(e.type).split(/\s+/);
								utils.each(n, function(n) {
									t.addListener(n, e.handler)
								})
							});
							break;
						case "commands":
							utils.each(e, function(e, n) {
								t.commands[n] = e
							});
							break;
						case "outputrule":
							t.addOutputRule(e);
							break;
						case "inputrule":
							t.addInputRule(e);
							break;
						case "defaultoptions":
							t.setOpt(e)
					}
				}) : e.afterDisabled && e.afterDisabled.call(t)
			}), utils.each(UE.plugins, function(e) {
				e.call(t)
			})
		},
		run: function(t, n) {
			var i = e[t];
			i && i.exeFn.call(n)
		}
	}
}();
var keymap = UE.keymap = {
		Backspace: 8,
		Tab: 9,
		Enter: 13,
		Shift: 16,
		Control: 17,
		Alt: 18,
		CapsLock: 20,
		Esc: 27,
		Spacebar: 32,
		PageUp: 33,
		PageDown: 34,
		End: 35,
		Home: 36,
		Left: 37,
		Up: 38,
		Right: 39,
		Down: 40,
		Insert: 45,
		Del: 46,
		NumLock: 144,
		Cmd: 91,
		"=": 187,
		"-": 189,
		b: 66,
		i: 73,
		z: 90,
		y: 89,
		v: 86,
		x: 88,
		s: 83,
		n: 78
	},
	LocalStorage = UE.LocalStorage = function() {
		function e() {
			var e = document.createElement("div");
			return e.style.display = "none", e.addBehavior ? (e.addBehavior("#default#userdata"), {
				getItem: function(t) {
					var i = null;
					try {
						document.body.appendChild(e), e.load(n), i = e.getAttribute(t), document.body.removeChild(e)
					} catch(r) {}
					return i
				},
				setItem: function(t, i) {
					document.body.appendChild(e), e.setAttribute(t, i), e.save(n), document.body.removeChild(e)
				},
				removeItem: function(t) {
					document.body.appendChild(e), e.removeAttribute(t), e.save(n), document.body.removeChild(e)
				}
			}) : null
		}
		var t = window.localStorage || e() || null,
			n = "localStorage";
		return {
			saveLocalData: function(e, n) {
				return !(!t || !n) && (t.setItem(e, n), !0)
			},
			getLocalData: function(e) {
				return t ? t.getItem(e) : null
			},
			removeItem: function(e) {
				t && t.removeItem(e)
			}
		}
	}();
! function() {
	var e = "ueditor_preference";
	UE.Editor.prototype.setPreferences = function(t, n) {
		var i = {};
		utils.isString(t) ? i[t] = n : i = t;
		var r = LocalStorage.getLocalData(e);
		r && (r = utils.str2json(r)) ? utils.extend(r, i) : r = i, r && LocalStorage.saveLocalData(e, utils.json2str(r))
	}, UE.Editor.prototype.getPreferences = function(t) {
		var n = LocalStorage.getLocalData(e);
		return n && (n = utils.str2json(n)) ? t ? n[t] : n : null
	}, UE.Editor.prototype.removePreferences = function(t) {
		var n = LocalStorage.getLocalData(e);
		n && (n = utils.str2json(n)) && (n[t] = void 0, delete n[t]), n && LocalStorage.saveLocalData(e, utils.json2str(n))
	}
}(), UE.plugin.register("autolink", function() {
	var e = 0;
	return browser.ie ? {} : {
		bindEvents: {
			reset: function() {
				e = 0
			},
			keydown: function(e, t) {
				var n = this,
					i = t.keyCode || t.which;
				if(32 == i || 13 == i) {
					for(var r, o, s = n.selection.getNative(), a = s.getRangeAt(0).cloneRange(), l = a.startContainer; 1 == l.nodeType && a.startOffset > 0 && (l = a.startContainer.childNodes[a.startOffset - 1]);) a.setStart(l, 1 == l.nodeType ? l.childNodes.length : l.nodeValue.length), a.collapse(!0), l = a.startContainer;
					do {
						if(0 == a.startOffset) {
							for(l = a.startContainer.previousSibling; l && 1 == l.nodeType;) l = l.lastChild;
							if(!l || domUtils.isFillChar(l)) break;
							r = l.nodeValue.length
						} else l = a.startContainer, r = a.startOffset;
						a.setStart(l, r - 1), o = a.toString().charCodeAt(0)
					} while (160 != o && 32 != o);
					if(a.toString().replace(new RegExp(domUtils.fillChar, "g"), "").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
						for(; a.toString().length && !/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(a.toString());) try {
							a.setStart(a.startContainer, a.startOffset + 1)
						} catch(c) {
							for(var l = a.startContainer; !(next = l.nextSibling);) {
								if(domUtils.isBody(l)) return;
								l = l.parentNode
							}
							a.setStart(next, 0)
						}
						if(domUtils.findParentByTagName(a.startContainer, "a", !0)) return;
						var u, d = n.document.createElement("a"),
							f = n.document.createTextNode(" ");
						n.undoManger && n.undoManger.save(), d.appendChild(a.extractContents()), d.href = d.innerHTML = d.innerHTML.replace(/<[^>]+>/g, ""), u = d.getAttribute("href").replace(new RegExp(domUtils.fillChar, "g"), ""), u = /^(?:https?:\/\/)/gi.test(u) ? u : "http://" + u, d.setAttribute("_src", utils.html(u)), d.href = utils.html(u), a.insertNode(d), d.parentNode.insertBefore(f, d.nextSibling), a.setStart(f, 0), a.collapse(!0), s.removeAllRanges(), s.addRange(a), n.undoManger && n.undoManger.save()
					}
				}
			}
		}
	}
}, function() {
	function e(e) {
		if(3 == e.nodeType) return null;
		if("A" == e.nodeName) return e;
		for(var t = e.lastChild; t;) {
			if("A" == t.nodeName) return t;
			if(3 == t.nodeType) {
				if(domUtils.isWhitespace(t)) {
					t = t.previousSibling;
					continue
				}
				return null
			}
			t = t.lastChild
		}
	}
	var t = {
		37: 1,
		38: 1,
		39: 1,
		40: 1,
		13: 1,
		32: 1
	};
	browser.ie && this.addListener("keyup", function(n, i) {
		var r = this,
			o = i.keyCode;
		if(t[o]) {
			var s = r.selection.getRange(),
				a = s.startContainer;
			if(13 == o) {
				for(; a && !domUtils.isBody(a) && !domUtils.isBlockElm(a);) a = a.parentNode;
				if(a && !domUtils.isBody(a) && "P" == a.nodeName) {
					var l = a.previousSibling;
					if(l && 1 == l.nodeType) {
						var l = e(l);
						l && !l.getAttribute("_href") && domUtils.remove(l, !0)
					}
				}
			} else if(32 == o) 3 == a.nodeType && /^\s$/.test(a.nodeValue) && (a = a.previousSibling, a && "A" == a.nodeName && !a.getAttribute("_href") && domUtils.remove(a, !0));
			else if(a = domUtils.findParentByTagName(a, "a", !0),
				a && !a.getAttribute("_href")) {
				var c = s.createBookmark();
				domUtils.remove(a, !0), s.moveToBookmark(c).select(!0)
			}
		}
	})
}), UE.plugins.defaultfilter = function() {
	var e = this;
	e.setOpt({
		allowDivTransToP: !0,
		disabledTableInTable: !0,
		rgb2Hex: !0
	}), e.addInputRule(function(t) {
		function n(e) {
			for(; e && "element" == e.type;) {
				if("td" == e.tagName) return !0;
				e = e.parentNode
			}
			return !1
		}
		var i, r = this.options.allowDivTransToP;
		t.traversal(function(t) {
			if("element" == t.type) {
				if(!dtd.$cdata[t.tagName] && e.options.autoClearEmptyNode && dtd.$inline[t.tagName] && !dtd.$empty[t.tagName] && (!t.attrs || utils.isEmptyObject(t.attrs))) return void(t.firstChild() ? "span" != t.tagName || t.attrs && !utils.isEmptyObject(t.attrs) || t.parentNode.removeChild(t, !0) : t.parentNode.removeChild(t));
				switch(t.tagName) {
					case "style":
					case "script":
						t.setAttr({
							cdata_tag: t.tagName,
							cdata_data: t.innerHTML() || "",
							_ue_custom_node_: "true"
						}), t.tagName = "div", t.innerHTML("");
						break;
					case "a":
						(i = t.getAttr("href")) && t.setAttr("_href", i);
						break;
					case "img":
						if((i = t.getAttr("src")) && /^data:/.test(i)) {
							t.parentNode.removeChild(t);
							break
						}
						t.setAttr("_src", t.getAttr("src"));
						break;
					case "span":
						browser.webkit && (i = t.getStyle("white-space")) && /nowrap|normal/.test(i) && (t.setStyle("white-space", ""), e.options.autoClearEmptyNode && utils.isEmptyObject(t.attrs) && t.parentNode.removeChild(t, !0)), i = t.getAttr("id"), i && /^_baidu_bookmark_/i.test(i) && t.parentNode.removeChild(t);
						break;
					case "p":
						(i = t.getAttr("align")) && (t.setAttr("align"), t.setStyle("text-align", i)), utils.each(t.children, function(e) {
							if("element" == e.type && "p" == e.tagName) {
								var n = e.nextSibling();
								t.parentNode.insertAfter(e, t);
								for(var i = e; n;) {
									var r = n.nextSibling();
									t.parentNode.insertAfter(n, i), i = n, n = r
								}
								return !1
							}
						}), t.firstChild() || t.innerHTML(browser.ie ? "&nbsp;" : "<br/>");
						break;
					case "div":
						if(t.getAttr("cdata_tag")) break;
						if(i = t.getAttr("class"), i && /^line number\d+/.test(i)) break;
						if(!r) break;
						for(var o, s = UE.uNode.createElement("p"); o = t.firstChild();) "text" != o.type && UE.dom.dtd.$block[o.tagName] ? s.firstChild() ? (t.parentNode.insertBefore(s, t), s = UE.uNode.createElement("p")) : t.parentNode.insertBefore(o, t) : s.appendChild(o);
						s.firstChild() && t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t);
						break;
					case "dl":
						t.tagName = "ul";
						break;
					case "dt":
					case "dd":
						t.tagName = "li";
						break;
					case "li":
						var a = t.getAttr("class");
						a && /list\-/.test(a) || t.setAttr();
						var l = t.getNodesByTagName("ol ul");
						UE.utils.each(l, function(e) {
							t.parentNode.insertAfter(e, t)
						});
						break;
					case "td":
					case "th":
					case "caption":
						t.children && t.children.length || t.appendChild(browser.ie11below ? UE.uNode.createText(" ") : UE.uNode.createElement("br"));
						break;
					case "table":
						e.options.disabledTableInTable && n(t) && (t.parentNode.insertBefore(UE.uNode.createText(t.innerText()), t), t.parentNode.removeChild(t))
				}
			}
		})
	}), e.addOutputRule(function(t) {
		var n;
		t.traversal(function(t) {
			if("element" == t.type) {
				if(e.options.autoClearEmptyNode && dtd.$inline[t.tagName] && !dtd.$empty[t.tagName] && (!t.attrs || utils.isEmptyObject(t.attrs))) return void(t.firstChild() ? "span" != t.tagName || t.attrs && !utils.isEmptyObject(t.attrs) || t.parentNode.removeChild(t, !0) : t.parentNode.removeChild(t));
				switch(t.tagName) {
					case "div":
						(n = t.getAttr("cdata_tag")) && (t.tagName = n, t.appendChild(UE.uNode.createText(t.getAttr("cdata_data"))), t.setAttr({
							cdata_tag: "",
							cdata_data: "",
							_ue_custom_node_: ""
						}));
						break;
					case "a":
						(n = t.getAttr("_href")) && t.setAttr({
							href: utils.html(n),
							_href: ""
						});
						break;
					case "span":
						if(n = t.getAttr("id"), n && /^_baidu_bookmark_/i.test(n) && t.parentNode.removeChild(t), e.getOpt("rgb2Hex")) {
							var i = t.getAttr("style");
							i && t.setAttr("style", i.replace(/rgba?\(([\d,\s]+)\)/g, function(e, t) {
								var n = t.split(",");
								if(n.length > 3) return "";
								t = "#";
								for(var i, r = 0; i = n[r++];) i = parseInt(i.replace(/[^\d]/gi, ""), 10).toString(16), t += 1 == i.length ? "0" + i : i;
								return t.toUpperCase()
							}))
						}
						break;
					case "img":
						(n = t.getAttr("_src")) && t.setAttr({
							src: t.getAttr("_src"),
							_src: ""
						})
				}
			}
		})
	})
}, UE.commands.inserthtml = {
	execCommand: function(e, t, n) {
		var i, r, o = this;
		if(t && o.fireEvent("beforeinserthtml", t) !== !0) {
			if(i = o.selection.getRange(), r = i.document.createElement("div"), r.style.display = "inline", !n) {
				var s = UE.htmlparser(t);
				o.options.filterRules && UE.filterNode(s, o.options.filterRules), o.filterInputRule(s), t = s.toHtml()
			}
			if(r.innerHTML = utils.trim(t), !i.collapsed) {
				var a = i.startContainer;
				if(domUtils.isFillChar(a) && i.setStartBefore(a), a = i.endContainer, domUtils.isFillChar(a) && i.setEndAfter(a), i.txtToElmBoundary(), i.endContainer && 1 == i.endContainer.nodeType && (a = i.endContainer.childNodes[i.endOffset], a && domUtils.isBr(a) && i.setEndAfter(a)), 0 == i.startOffset && (a = i.startContainer, domUtils.isBoundaryNode(a, "firstChild") && (a = i.endContainer, i.endOffset == (3 == a.nodeType ? a.nodeValue.length : a.childNodes.length) && domUtils.isBoundaryNode(a, "lastChild") && (o.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>", i.setStart(o.body.firstChild, 0).collapse(!0)))), !i.collapsed && i.deleteContents(), 1 == i.startContainer.nodeType) {
					var l, c = i.startContainer.childNodes[i.startOffset];
					if(c && domUtils.isBlockElm(c) && (l = c.previousSibling) && domUtils.isBlockElm(l)) {
						for(i.setEnd(l, l.childNodes.length).collapse(); c.firstChild;) l.appendChild(c.firstChild);
						domUtils.remove(c)
					}
				}
			}
			var c, u, l, d, f, h = 0;
			i.inFillChar() && (c = i.startContainer, domUtils.isFillChar(c) ? (i.setStartBefore(c).collapse(!0), domUtils.remove(c)) : domUtils.isFillChar(c, !0) && (c.nodeValue = c.nodeValue.replace(fillCharReg, ""), i.startOffset--, i.collapsed && i.collapse(!0)));
			var p = domUtils.findParentByTagName(i.startContainer, "li", !0);
			if(p) {
				for(var m, g; c = r.firstChild;) {
					for(; c && (3 == c.nodeType || !domUtils.isBlockElm(c) || "HR" == c.tagName);) m = c.nextSibling, i.insertNode(c).collapse(), g = c, c = m;
					if(c)
						if(/^(ol|ul)$/i.test(c.tagName)) {
							for(; c.firstChild;) g = c.firstChild, domUtils.insertAfter(p, c.firstChild), p = p.nextSibling;
							domUtils.remove(c)
						} else {
							var v;
							m = c.nextSibling, v = o.document.createElement("li"), domUtils.insertAfter(p, v), v.appendChild(c), g = c, c = m, p = v
						}
				}
				p = domUtils.findParentByTagName(i.startContainer, "li", !0), domUtils.isEmptyBlock(p) && domUtils.remove(p), g && i.setStartAfter(g).collapse(!0).select(!0)
			} else {
				for(; c = r.firstChild;) {
					if(h) {
						for(var y = o.document.createElement("p"); c && (3 == c.nodeType || !dtd.$block[c.tagName]);) f = c.nextSibling, y.appendChild(c), c = f;
						y.firstChild && (c = y)
					}
					if(i.insertNode(c), f = c.nextSibling, !h && c.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm(c) && (u = domUtils.findParent(c, function(e) {
							return domUtils.isBlockElm(e)
						}), u && "body" != u.tagName.toLowerCase() && (!dtd[u.tagName][c.nodeName] || c.parentNode !== u))) {
						if(dtd[u.tagName][c.nodeName])
							for(d = c.parentNode; d !== u;) l = d, d = d.parentNode;
						else l = u;
						domUtils.breakParent(c, l || d);
						var l = c.previousSibling;
						domUtils.trimWhiteTextNode(l), l.childNodes.length || domUtils.remove(l), !browser.ie && (m = c.nextSibling) && domUtils.isBlockElm(m) && m.lastChild && !domUtils.isBr(m.lastChild) && m.appendChild(o.document.createElement("br")), h = 1
					}
					var m = c.nextSibling;
					if(!r.firstChild && m && domUtils.isBlockElm(m)) {
						i.setStart(m, 0).collapse(!0);
						break
					}
					i.setEndAfter(c).collapse()
				}
				if(c = i.startContainer, f && domUtils.isBr(f) && domUtils.remove(f), domUtils.isBlockElm(c) && domUtils.isEmptyNode(c))
					if(f = c.nextSibling) domUtils.remove(c), 1 == f.nodeType && dtd.$block[f.tagName] && i.setStart(f, 0).collapse(!0).shrinkBoundary();
					else try {
						c.innerHTML = browser.ie ? domUtils.fillChar : "<br/>"
					} catch(b) {
						i.setStartBefore(c), domUtils.remove(c)
					}
				try {
					i.select(!0)
				} catch(b) {}
			}
			setTimeout(function() {
				i = o.selection.getRange(), i.scrollToView(o.autoHeightEnabled, o.autoHeightEnabled ? domUtils.getXY(o.iframe).y : 0), o.fireEvent("afterinserthtml", t)
			}, 200)
		}
	}
}, UE.plugins.link = function() {
	function e(e) {
		var t = e.startContainer,
			n = e.endContainer;
		(t = domUtils.findParentByTagName(t, "a", !0)) && e.setStartBefore(t), (n = domUtils.findParentByTagName(n, "a", !0)) && e.setEndAfter(n)
	}

	function t(t, n, i) {
		var r = t.cloneRange(),
			o = i.queryCommandValue("link");
		e(t = t.adjustmentBoundary());
		var s = t.startContainer;
		if(1 == s.nodeType && o && (s = s.childNodes[t.startOffset], s && 1 == s.nodeType && "A" == s.tagName && /^(?:https?|ftp|file)\s*:\s*\/\//.test(s[browser.ie ? "innerText" : "textContent"]) && (s[browser.ie ? "innerText" : "textContent"] = utils.html(n.textValue || n.href))), r.collapsed && !o || (t.removeInlineStyle("a"), r = t.cloneRange()), r.collapsed) {
			var a = t.document.createElement("a"),
				l = "";
			n.textValue ? (l = utils.html(n.textValue), delete n.textValue) : l = utils.html(n.href), domUtils.setAttributes(a, n), s = domUtils.findParentByTagName(r.startContainer, "a", !0), s && domUtils.isInNodeEndBoundary(r, s) && t.setStartAfter(s).collapse(!0), a[browser.ie ? "innerText" : "textContent"] = l, t.insertNode(a).selectNode(a)
		} else t.applyInlineStyle("a", n)
	}
	UE.commands.unlink = {
		execCommand: function() {
			var t, n = this.selection.getRange();
			n.collapsed && !domUtils.findParentByTagName(n.startContainer, "a", !0) || (t = n.createBookmark(), e(n), n.removeInlineStyle("a").moveToBookmark(t).select())
		},
		queryCommandState: function() {
			return !this.highlight && this.queryCommandValue("link") ? 0 : -1
		}
	}, UE.commands.link = {
		execCommand: function(e, n) {
			var i;
			n._href && (n._href = utils.unhtml(n._href, /[<">]/g)), n.href && (n.href = utils.unhtml(n.href, /[<">]/g)), n.textValue && (n.textValue = utils.unhtml(n.textValue, /[<">]/g)), t(i = this.selection.getRange(), n, this), i.collapse().select(!0)
		},
		queryCommandValue: function() {
			var e, t = this.selection.getRange();
			if(!t.collapsed) {
				t.shrinkBoundary();
				var n = 3 != t.startContainer.nodeType && t.startContainer.childNodes[t.startOffset] ? t.startContainer.childNodes[t.startOffset] : t.startContainer,
					i = 3 == t.endContainer.nodeType || 0 == t.endOffset ? t.endContainer : t.endContainer.childNodes[t.endOffset - 1],
					r = t.getCommonAncestor();
				if(e = domUtils.findParentByTagName(r, "a", !0), !e && 1 == r.nodeType)
					for(var o, s, a, l = r.getElementsByTagName("a"), c = 0; a = l[c++];)
						if(o = domUtils.getPosition(a, n), s = domUtils.getPosition(a, i), (o & domUtils.POSITION_FOLLOWING || o & domUtils.POSITION_CONTAINS) && (s & domUtils.POSITION_PRECEDING || s & domUtils.POSITION_CONTAINS)) {
							e = a;
							break
						}
				return e
			}
			if(e = t.startContainer, e = 1 == e.nodeType ? e : e.parentNode, e && (e = domUtils.findParentByTagName(e, "a", !0)) && !domUtils.isInNodeEndBoundary(t, e)) return e
		},
		queryCommandState: function() {
			var e = this.selection.getRange().getClosedNode(),
				t = e && ("edui-faked-video" == e.className || e.className.indexOf("edui-upload-video") != -1);
			return t ? -1 : 0
		}
	}
}, UE.plugins.paragraph = function() {
	var e = this,
		t = domUtils.isBlockElm,
		n = ["TD", "LI", "PRE"],
		i = function(i, r, o, s) {
			var a, l = i.createBookmark(),
				c = function(e) {
					return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() && !domUtils.isBookmarkNode(e) : !domUtils.isWhitespace(e)
				};
			i.enlarge(!0);
			for(var u, d = i.createBookmark(), f = domUtils.getNextDomNode(d.start, !1, c), h = i.cloneRange(); f && !(domUtils.getPosition(f, d.end) & domUtils.POSITION_FOLLOWING);)
				if(/qyer_block/gi.test(f.className)) f = domUtils.getNextDomNode(f, !1, c);
				else if(3 != f.nodeType && t(f)) f = domUtils.getNextDomNode(f, !0, c);
			else {
				for(h.setStartBefore(f); f && f !== d.end && !t(f);) u = f, f = domUtils.getNextDomNode(f, !1, null, function(e) {
					return !t(e)
				});
				h.setEndAfter(u), a = i.document.createElement(r), o && (domUtils.setAttributes(a, o), s && "customstyle" == s && o.style && (a.style.cssText = o.style)), a.appendChild(h.extractContents()), domUtils.isEmptyNode(a) && domUtils.fillChar(i.document, a), h.insertNode(a);
				var p = a.parentNode;
				t(p) && !domUtils.isBody(a.parentNode) && utils.indexOf(n, p.tagName) == -1 && (s && "customstyle" == s || (p.getAttribute("dir") && a.setAttribute("dir", p.getAttribute("dir")), p.style.cssText && (a.style.cssText = p.style.cssText + ";" + a.style.cssText), p.style.textAlign && !a.style.textAlign && (a.style.textAlign = p.style.textAlign), p.style.textIndent && !a.style.textIndent && (a.style.textIndent = p.style.textIndent), p.style.padding && !a.style.padding && (a.style.padding = p.style.padding)), o && /h\d/i.test(p.tagName) && !/h\d/i.test(a.tagName) ? (domUtils.setAttributes(p, o), s && "customstyle" == s && o.style && (p.style.cssText = o.style), domUtils.remove(a.parentNode, !0), a = p) : domUtils.remove(a.parentNode, !0)), f = utils.indexOf(n, p.tagName) != -1 ? p : a, f = domUtils.getNextDomNode(f, !1, c)
			}
			return domUtils.insertAfter(d.end, e.document.createTextNode("")), i.moveToBookmark(d).moveToBookmark(l)
		};
	e.setOpt("paragraph", {
		p: "",
		h1: "",
		h2: "",
		h3: "",
		h4: "",
		h5: "",
		h6: ""
	}), e.commands.paragraph = {
		execCommand: function(e, t, n, r) {
			var o = this.selection.getRange();
			if(o.collapsed) {
				var s = this.document.createTextNode("p");
				if(o.insertNode(s), browser.ie) {
					var a = s.previousSibling;
					a && domUtils.isWhitespace(a) && domUtils.remove(a), a = s.nextSibling, a && domUtils.isWhitespace(a) && domUtils.remove(a)
				}
			}
			if(o = i(o, t, n, r), s && (o.setStartBefore(s).collapse(!0), pN = s.parentNode, domUtils.remove(s), domUtils.isBlockElm(pN) && domUtils.isEmptyNode(pN) && domUtils.fillNode(this.document, pN)), browser.gecko && o.collapsed && 1 == o.startContainer.nodeType) {
				var l = o.startContainer.childNodes[o.startOffset];
				l && 1 == l.nodeType && l.tagName.toLowerCase() == t && o.setStart(l, 0).collapse(!0)
			}
			return o.select(), !0
		},
		queryCommandValue: function() {
			var e = domUtils.filterNodeList(this.selection.getStartElementPath(), "p h1 h2 h3 h4 h5 h6");
			return e ? e.tagName.toLowerCase() : ""
		}
	}
}, UE.commands.cleardoc = {
	execCommand: function(e) {
		var t = this,
			n = t.options.enterTag,
			i = t.selection.getRange();
		"br" == n ? (t.body.innerHTML = "<br/>", i.setStart(t.body, 0).setCursor()) : (t.body.innerHTML = "<p>" + (ie ? "" : "<br/>") + "</p>", i.setStart(t.body.firstChild, 0).setCursor(!1, !0)), setTimeout(function() {
			t.fireEvent("clearDoc")
		}, 0)
	}
}, UE.plugins.wordcount = function() {
	var e = this;
	e.setOpt("wordCount", !0), e.addListener("contentchange", function() {
		e.fireEvent("wordcount")
	});
	var t;
	e.addListener("ready", function() {
		var e = this;
		domUtils.on(e.body, "keyup", function(n) {
			var i = n.keyCode || n.which,
				r = {
					16: 1,
					18: 1,
					20: 1,
					37: 1,
					38: 1,
					39: 1,
					40: 1
				};
			i in r || (clearTimeout(t), t = setTimeout(function() {
				e.fireEvent("wordcount")
			}, 200))
		})
	})
}, UE.plugins.undo = function() {
	function e(e, t) {
		if(e.length != t.length) return 0;
		for(var n = 0, i = e.length; n < i; n++)
			if(e[n] != t[n]) return 0;
		return 1
	}

	function t(t, n) {
		return t.collapsed != n.collapsed ? 0 : e(t.startAddress, n.startAddress) && e(t.endAddress, n.endAddress) ? 1 : 0
	}

	function n() {
		this.list = [], this.index = 0, this.hasUndo = !1, this.hasRedo = !1, this.undo = function() {
			if(this.hasUndo) {
				if(!this.list[this.index - 1] && 1 == this.list.length) return void this.reset();
				for(; this.list[this.index].content == this.list[this.index - 1].content;)
					if(this.index--, 0 == this.index) return this.restore(0);
				this.restore(--this.index)
			}
		}, this.redo = function() {
			if(this.hasRedo) {
				for(; this.list[this.index].content == this.list[this.index + 1].content;)
					if(this.index++, this.index == this.list.length - 1) return this.restore(this.index);
				this.restore(++this.index)
			}
		}, this.restore = function() {
			var e = this.editor,
				t = this.list[this.index],
				n = UE.htmlparser(t.content.replace(a, ""));
			e.options.autoClearEmptyNode = !1, e.filterInputRule(n), e.options.autoClearEmptyNode = c, e.document.body.innerHTML = n.toHtml(), e.fireEvent("afterscencerestore"), browser.ie && utils.each(domUtils.getElementsByTagName(e.document, "td th caption p"), function(t) {
				domUtils.isEmptyNode(t) && domUtils.fillNode(e.document, t)
			});
			try {
				var i = new dom.Range(e.document).moveToAddress(t.address);
				i.select(l[i.startContainer.nodeName.toLowerCase()])
			} catch(r) {}
			this.update(), this.clearKey(), e.fireEvent("reset", !0)
		}, this.getScene = function() {
			var e = this.editor,
				t = e.selection.getRange(),
				n = t.createAddress(!1, !0);
			e.fireEvent("beforegetscene");
			var i = UE.htmlparser(e.body.innerHTML);
			e.options.autoClearEmptyNode = !1, e.filterOutputRule(i), e.options.autoClearEmptyNode = c;
			var r = i.toHtml();
			return e.fireEvent("aftergetscene"), {
				address: n,
				content: r
			}
		}, this.save = function(e, n) {
			clearTimeout(i);
			var s = this.getScene(n),
				a = this.list[this.index];
			a && a.content != s.content && r.trigger("contentchange"), a && a.content == s.content && (e ? 1 : t(a.address, s.address)) || (this.list = this.list.slice(0, this.index + 1), this.list.push(s), this.list.length > o && this.list.shift(), this.index = this.list.length - 1, this.clearKey(), this.update())
		}, this.update = function() {
			this.hasRedo = !!this.list[this.index + 1], this.hasUndo = !!this.list[this.index - 1]
		}, this.reset = function() {
			this.list = [], this.index = 0, this.hasUndo = !1, this.hasRedo = !1, this.clearKey()
		}, this.clearKey = function() {
			f = 0, u = null
		}
	}
	var i, r = this,
		o = r.options.maxUndoCount || 20,
		s = r.options.maxInputCount || 20,
		a = new RegExp(domUtils.fillChar + "|</hr>", "gi"),
		l = {
			ol: 1,
			ul: 1,
			table: 1,
			tbody: 1,
			tr: 1,
			body: 1
		},
		c = r.options.autoClearEmptyNode;
	r.undoManger = new n, r.undoManger.editor = r, r.addListener("saveScene", function() {
		var e = Array.prototype.splice.call(arguments, 1);
		this.undoManger.save.apply(this.undoManger, e)
	}), r.addListener("reset", function(e, t) {
		t || this.undoManger.reset()
	}), r.commands.redo = r.commands.undo = {
		execCommand: function(e) {
			this.undoManger[e]()
		},
		queryCommandState: function(e) {
			return this.undoManger["has" + ("undo" == e.toLowerCase() ? "Undo" : "Redo")] ? 0 : -1
		},
		notNeedUndo: 1
	};
	var u, d = {
			16: 1,
			17: 1,
			18: 1,
			37: 1,
			38: 1,
			39: 1,
			40: 1
		},
		f = 0,
		h = !1;
	r.addListener("ready", function() {
		domUtils.on(this.body, "compositionstart", function() {
			h = !0
		}), domUtils.on(this.body, "compositionend", function() {
			h = !1
		})
	}), r.addshortcutkey({
		Undo: "ctrl+90",
		Redo: "ctrl+89"
	});
	var p = !0;
	r.addListener("keydown", function(e, t) {
		function n(e) {
			e.undoManger.save(!1, !0), e.fireEvent("selectionchange")
		}
		var r = this,
			o = t.keyCode || t.which;
		if(!(d[o] || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
			if(h) return;
			if(!r.selection.getRange().collapsed) return r.undoManger.save(!1, !0), void(p = !1);
			0 == r.undoManger.list.length && r.undoManger.save(!0), clearTimeout(i), i = setTimeout(function() {
				if(h) var e = setInterval(function() {
					h || (n(r), clearInterval(e))
				}, 300);
				else n(r)
			}, 200), u = o, f++, f >= s && n(r)
		}
	}), r.addListener("keyup", function(e, t) {
		var n = t.keyCode || t.which;
		if(!(d[n] || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) {
			if(h) return;
			p || (this.undoManger.save(!1, !0), p = !0)
		}
	}), r.stopCmdUndo = function() {
		r.__hasEnterExecCommand = !0
	}, r.startCmdUndo = function() {
		r.__hasEnterExecCommand = !1
	}
}, UE.plugin.register("copy", function() {
	function e() {
		ZeroClipboard.config({
			debug: !1,
			swfPath: t.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.swf"
		});
		var e = t.zeroclipboard = new ZeroClipboard;
		e.on("copy", function(e) {
			var n = e.client,
				i = t.selection.getRange(),
				r = document.createElement("div");
			r.appendChild(i.cloneContents()), n.setText(r.innerText || r.textContent), n.setHtml(r.innerHTML), i.select()
		}), e.on("mouseover mouseout", function(e) {
			var t = e.target;
			t && ("mouseover" == e.type ? domUtils.addClass(t, "edui-state-hover") : "mouseout" == e.type && domUtils.removeClasses(t, "edui-state-hover"))
		}), e.on("wrongflash noflash", function() {
			ZeroClipboard.destroy()
		}), t.fireEvent("zeroclipboardready", e)
	}
	var t = this;
	return {
		bindEvents: {
			ready: function() {
				browser.ie || (window.ZeroClipboard ? e() : utils.loadFile(document, {
					src: t.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.js",
					tag: "script",
					type: "text/javascript",
					defer: "defer"
				}, function() {
					e()
				}))
			}
		},
		commands: {
			copy: {
				execCommand: function(e) {
					t.document.execCommand("copy") || alert(t.getLang("copymsg"))
				}
			}
		}
	}
}), UE.plugins.paste = function() {
	function e(e) {
		var t = this.document;
		if(!t.getElementById("baidu_pastebin")) {
			var n = this.selection.getRange(),
				i = n.createBookmark(),
				r = t.createElement("div");
			r.id = "baidu_pastebin", browser.webkit && r.appendChild(t.createTextNode(domUtils.fillChar + domUtils.fillChar)), t.body.appendChild(r), i.start.style.display = "", r.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" + domUtils.getXY(i.start).y + "px", n.selectNodeContents(r).select(!0), setTimeout(function() {
				if(browser.webkit)
					for(var o, s = 0, a = t.querySelectorAll("#baidu_pastebin"); o = a[s++];) {
						if(!domUtils.isEmptyNode(o)) {
							r = o;
							break
						}
						domUtils.remove(o)
					}
				try {
					r.parentNode.removeChild(r)
				} catch(l) {}
				n.moveToBookmark(i).select(!0), e(r)
			}, 0)
		}
	}

	function t(e) {
		return e.replace(/<(\/?)([\w\-]+)([^>]*)>/gi, function(e, t, n, i) {
			return n = n.toLowerCase(), {
				img: 1
			}[n] ? e : (i = i.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi, function(e, t, n) {
				return {
					src: 1,
					href: 1,
					name: 1
				}[t.toLowerCase()] ? t + "=" + n + " ": ""
			}), {
				span: 1,
				div: 1
			}[n] ? "" : "<" + t + n + " " + utils.trim(i) + ">")
		})
	}

	function n(e) {
		var n;
		if(e.firstChild) {
			for(var a, l = domUtils.getElementsByTagName(e, "span"), c = 0; a = l[c++];) "_baidu_cut_start" != a.id && "_baidu_cut_end" != a.id || domUtils.remove(a);
			if(browser.webkit) {
				for(var u, d = e.querySelectorAll("div br"), c = 0; u = d[c++];) {
					var f = u.parentNode;
					"DIV" == f.tagName && 1 == f.childNodes.length && (f.innerHTML = "<p><br/></p>", domUtils.remove(f))
				}
				for(var h, p = e.querySelectorAll("#baidu_pastebin"), c = 0; h = p[c++];) {
					var m = i.document.createElement("p");
					for(h.parentNode.insertBefore(m, h); h.firstChild;) m.appendChild(h.firstChild);
					domUtils.remove(h)
				}
				for(var g, v = e.querySelectorAll("meta"), c = 0; g = v[c++];) domUtils.remove(g);
				var d = e.querySelectorAll("br");
				for(c = 0; g = d[c++];) /^apple-/i.test(g.className) && domUtils.remove(g)
			}
			if(browser.gecko) {
				var y = e.querySelectorAll("[_moz_dirty]");
				for(c = 0; g = y[c++];) g.removeAttribute("_moz_dirty")
			}
			if(!browser.ie)
				for(var g, b = e.querySelectorAll("span.Apple-style-span"), c = 0; g = b[c++];) domUtils.remove(g, !0);
			n = e.innerHTML, n = UE.filterWord(n);
			var w = UE.htmlparser(n);
			if(i.options.filterRules && UE.filterNode(w, i.options.filterRules), i.filterInputRule(w), browser.webkit) {
				var x = w.lastChild();
				x && "element" == x.type && "br" == x.tagName && w.removeChild(x), utils.each(i.body.querySelectorAll("div"), function(e) {
					domUtils.isEmptyBlock(e) && domUtils.remove(e, !0)
				})
			}
			if(n = {
					html: w.toHtml()
				}, i.fireEvent("beforepaste", n, w), !n.html) return;
			w = UE.htmlparser(n.html, !0), 1 === i.queryCommandState("pasteplain") ? i.execCommand("insertHtml", UE.filterNode(w, i.options.filterTxtRules).toHtml(), !0) : (UE.filterNode(w, i.options.filterTxtRules), r = w.toHtml(), o = n.html, s = i.selection.getRange().createAddress(!0), i.execCommand("insertHtml", i.getOpt("retainOnlyLabelPasted") === !0 ? t(o) : o, !0)), i.fireEvent("afterpaste", n)
		}
	}
	var i = this;
	i.setOpt({
		retainOnlyLabelPasted: !1
	});
	var r, o, s;
	i.addListener("pasteTransfer", function(e, n) {
		if(s && r && o && r != o) {
			var a = i.selection.getRange();
			if(a.moveToAddress(s, !0), !a.collapsed) {
				for(; !domUtils.isBody(a.startContainer);) {
					var l = a.startContainer;
					if(1 == l.nodeType) {
						if(l = l.childNodes[a.startOffset], !l) {
							a.setStartBefore(a.startContainer);
							continue
						}
						var c = l.previousSibling;
						c && 3 == c.nodeType && new RegExp("^[\n\r\t " + domUtils.fillChar + "]*$").test(c.nodeValue) && a.setStartBefore(c)
					}
					if(0 != a.startOffset) break;
					a.setStartBefore(a.startContainer)
				}
				for(; !domUtils.isBody(a.endContainer);) {
					var u = a.endContainer;
					if(1 == u.nodeType) {
						if(u = u.childNodes[a.endOffset], !u) {
							a.setEndAfter(a.endContainer);
							continue
						}
						var d = u.nextSibling;
						d && 3 == d.nodeType && new RegExp("^[\n\r\t" + domUtils.fillChar + "]*$").test(d.nodeValue) && a.setEndAfter(d)
					}
					if(a.endOffset != a.endContainer[3 == a.endContainer.nodeType ? "nodeValue" : "childNodes"].length) break;
					a.setEndAfter(a.endContainer)
				}
			}
			a.deleteContents(), a.select(!0), i.__hasEnterExecCommand = !0;
			var f = o;
			2 === n ? f = t(f) : n && (f = r), i.execCommand("inserthtml", f, !0), i.__hasEnterExecCommand = !1;
			for(var h = i.selection.getRange(); !domUtils.isBody(h.startContainer) && !h.startOffset && h.startContainer[3 == h.startContainer.nodeType ? "nodeValue" : "childNodes"].length;) h.setStartBefore(h.startContainer);
			var p = h.createAddress(!0);
			s.endAddress = p.startAddress
		}
	}), i.addListener("ready", function() {
		domUtils.on(i.body, "cut", function() {
			var e = i.selection.getRange();
			!e.collapsed && i.undoManger && i.undoManger.save()
		}), domUtils.on(i.body, browser.ie || browser.opera ? "keydown" : "paste", function(t) {
			(!browser.ie && !browser.opera || (t.ctrlKey || t.metaKey) && "86" == t.keyCode) && e.call(i, function(e) {
				n(e)
			})
		})
	}), i.commands.paste = {
		execCommand: function(t) {
			browser.ie ? (e.call(i, function(e) {
				n(e)
			}), i.document.execCommand("paste")) : alert(i.getLang("pastemsg"))
		}
	}
}, UE.plugins.pasteplain = function() {
	var e = this;
	e.setOpt({
		pasteplain: !1,
		filterTxtRules: function() {
			function e(e) {
				e.tagName = "p", e.setStyle()
			}

			function t(e) {
				e.parentNode.removeChild(e, !0)
			}
			return {
				"-": "script style object iframe embed input select",
				p: {
					$: {}
				},
				br: {
					$: {}
				},
				div: function(e) {
					for(var t, n = UE.uNode.createElement("p"); t = e.firstChild();) "text" != t.type && UE.dom.dtd.$block[t.tagName] ? n.firstChild() ? (e.parentNode.insertBefore(n, e), n = UE.uNode.createElement("p")) : e.parentNode.insertBefore(t, e) : n.appendChild(t);
					n.firstChild() && e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e)
				},
				ol: t,
				ul: t,
				dl: t,
				dt: t,
				dd: t,
				li: t,
				caption: e,
				th: e,
				tr: e,
				h1: e,
				h2: e,
				h3: e,
				h4: e,
				h5: e,
				h6: e,
				td: function(e) {
					var t = !!e.innerText();
					t && e.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"), e), e.parentNode.removeChild(e, e.innerText())
				}
			}
		}()
	});
	var t = e.options.pasteplain;
	e.commands.pasteplain = {
		queryCommandState: function() {
			return t ? 1 : 0
		},
		execCommand: function() {
			t = 0 | !t
		},
		notNeedUndo: 1
	}
}, UE.plugins.enterkey = function() {
	var e, t = this,
		n = t.options.enterTag;
	t.addListener("keyup", function(n, i) {
		var r = i.keyCode || i.which;
		if(13 == r) {
			var o, s = t.selection.getRange(),
				a = s.startContainer;
			if(browser.ie) t.fireEvent("saveScene", !0, !0);
			else {
				if(/h\d/i.test(e)) {
					if(browser.gecko) {
						var l = domUtils.findParentByTagName(a, ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption", "table"], !0);
						l || (t.document.execCommand("formatBlock", !1, "<p>"), o = 1)
					} else if(1 == a.nodeType) {
						var c, u = t.document.createTextNode("");
						if(s.insertNode(u), c = domUtils.findParentByTagName(u, "div", !0)) {
							for(var d = t.document.createElement("p"); c.firstChild;) d.appendChild(c.firstChild);
							c.parentNode.insertBefore(d, c), domUtils.remove(c), s.setStartBefore(u).setCursor(), o = 1
						}
						domUtils.remove(u)
					}
					t.undoManger && o && t.undoManger.save()
				}
				browser.opera && s.select()
			}
		}
	}), t.addListener("keydown", function(i, r) {
		var o = r.keyCode || r.which;
		if(13 == o) {
			if(t.fireEvent("beforeenterkeydown")) return void domUtils.preventDefault(r);
			t.fireEvent("saveScene", !0, !0), e = "";
			var s = t.selection.getRange();
			if(!s.collapsed) {
				var a = s.startContainer,
					l = s.endContainer,
					c = domUtils.findParentByTagName(a, "td", !0),
					u = domUtils.findParentByTagName(l, "td", !0);
				if(c && u && c !== u || !c && u || c && !u) return void(r.preventDefault ? r.preventDefault() : r.returnValue = !1)
			}
			if("p" == n) browser.ie || (a = domUtils.findParentByTagName(s.startContainer, ["ol", "ul", "p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "caption"], !0), a || browser.opera ? (e = a.tagName, "p" == a.tagName.toLowerCase() && browser.gecko && domUtils.removeDirtyAttr(a)) : (t.document.execCommand("formatBlock", !1, "<p>"), browser.gecko && (s = t.selection.getRange(), a = domUtils.findParentByTagName(s.startContainer, "p", !0), a && domUtils.removeDirtyAttr(a))));
			else if(r.preventDefault ? r.preventDefault() : r.returnValue = !1, s.collapsed) {
				f = s.document.createElement("br"), s.insertNode(f);
				var d = f.parentNode;
				d.lastChild === f ? (f.parentNode.insertBefore(f.cloneNode(!0), f), s.setStartBefore(f)) : s.setStartAfter(f), s.setCursor()
			} else if(s.deleteContents(), a = s.startContainer, 1 == a.nodeType && (a = a.childNodes[s.startOffset])) {
				for(; 1 == a.nodeType;) {
					if(dtd.$empty[a.tagName]) return s.setStartBefore(a).setCursor(), t.undoManger && t.undoManger.save(), !1;
					if(!a.firstChild) {
						var f = s.document.createElement("br");
						return a.appendChild(f), s.setStart(a, 0).setCursor(), t.undoManger && t.undoManger.save(), !1
					}
					a = a.firstChild
				}
				a === s.startContainer.childNodes[s.startOffset] ? (f = s.document.createElement("br"), s.insertNode(f).setCursor()) : s.setStart(a, 0).setCursor()
			} else f = s.document.createElement("br"), s.insertNode(f).setStartAfter(f).setCursor()
		}
	})
}, UE.plugins.keystrokes = function() {
	var e = this,
		t = !0;
	e.addListener("keydown", function(n, i) {
		var r = i.keyCode || i.which,
			o = e.selection.getRange();
		if(!o.collapsed && !(i.ctrlKey || i.shiftKey || i.altKey || i.metaKey) && (r >= 65 && r <= 90 || r >= 48 && r <= 57 || r >= 96 && r <= 111 || {
				13: 1,
				8: 1,
				46: 1
			}[r])) {
			var s = o.startContainer;
			if(domUtils.isFillChar(s) && o.setStartBefore(s), s = o.endContainer, domUtils.isFillChar(s) && o.setEndAfter(s), o.txtToElmBoundary(), o.endContainer && 1 == o.endContainer.nodeType && (s = o.endContainer.childNodes[o.endOffset], s && domUtils.isBr(s) && o.setEndAfter(s)), 0 == o.startOffset && (s = o.startContainer, domUtils.isBoundaryNode(s, "firstChild") && (s = o.endContainer, o.endOffset == (3 == s.nodeType ? s.nodeValue.length : s.childNodes.length) && domUtils.isBoundaryNode(s, "lastChild")))) return e.fireEvent("saveScene"), e.body.innerHTML = "<p>" + (browser.ie ? "" : "<br/>") + "</p>", o.setStart(e.body.firstChild, 0).setCursor(!1, !0), void e._selectionChange()
		}
		if(r == keymap.Backspace) {
			if(o = e.selection.getRange(), t = o.collapsed, e.fireEvent("delkeydown", i)) return;
			var a, l;
			if(o.collapsed && o.inFillChar() && (a = o.startContainer, domUtils.isFillChar(a) ? (o.setStartBefore(a).shrinkBoundary(!0).collapse(!0), domUtils.remove(a)) : (a.nodeValue = a.nodeValue.replace(new RegExp("^" + domUtils.fillChar), ""), o.startOffset--, o.collapse(!0).select(!0))), a = o.getClosedNode()) return e.fireEvent("saveScene"), o.setStartBefore(a), domUtils.remove(a), o.setCursor(), e.fireEvent("saveScene"), void domUtils.preventDefault(i);
			if(!browser.ie && (a = domUtils.findParentByTagName(o.startContainer, "table", !0), l = domUtils.findParentByTagName(o.endContainer, "table", !0), a && !l || !a && l || a !== l)) return void i.preventDefault()
		}
		if(r == keymap.Tab) {
			var c = {
				ol: 1,
				ul: 1,
				table: 1
			};
			if(e.fireEvent("tabkeydown", i)) return void domUtils.preventDefault(i);
			var u = e.selection.getRange();
			e.fireEvent("saveScene");
			for(var d = 0, f = "", h = e.options.tabSize || 4, p = e.options.tabNode || "&nbsp;"; d < h; d++) f += p;
			var m = e.document.createElement("span");
			if(m.innerHTML = f + domUtils.fillChar, u.collapsed) u.insertNode(m.cloneNode(!0).firstChild).setCursor(!0);
			else {
				var g = function(e) {
					return domUtils.isBlockElm(e) && !c[e.tagName.toLowerCase()]
				};
				if(a = domUtils.findParent(u.startContainer, g, !0), l = domUtils.findParent(u.endContainer, g, !0), a && l && a === l) u.deleteContents(), u.insertNode(m.cloneNode(!0).firstChild).setCursor(!0);
				else {
					var v = u.createBookmark();
					u.enlarge(!0);
					for(var y = u.createBookmark(), b = domUtils.getNextDomNode(y.start, !1, g); b && !(domUtils.getPosition(b, y.end) & domUtils.POSITION_FOLLOWING);) b.insertBefore(m.cloneNode(!0).firstChild, b.firstChild), b = domUtils.getNextDomNode(b, !1, g);
					u.moveToBookmark(y).moveToBookmark(v).select()
				}
			}
			domUtils.preventDefault(i)
		}
		if(browser.gecko && 46 == r && (u = e.selection.getRange(), u.collapsed && (a = u.startContainer, domUtils.isEmptyBlock(a)))) {
			for(var w = a.parentNode; 1 == domUtils.getChildCount(w) && !domUtils.isBody(w);) a = w, w = w.parentNode;
			return void(a === w.lastChild && i.preventDefault())
		}
		browser.chrome && e.on("keydown", function(e, t) {
			var n = t.keyCode || t.which;
			if((t.metaKey && t.altKey || t.ctrlKey && t.shiftKey) && 73 == n) return !0
		})
	}), e.addListener("keyup", function(e, n) {
		var i, r = n.keyCode || n.which,
			o = this;
		if(r == keymap.Backspace) {
			if(o.fireEvent("delkeyup")) return;
			if(i = o.selection.getRange(), i.collapsed) {
				var s, a = ["h1", "h2", "h3", "h4", "h5", "h6"];
				if((s = domUtils.findParentByTagName(i.startContainer, a, !0)) && domUtils.isEmptyBlock(s)) {
					var l = s.previousSibling;
					if(l && "TABLE" != l.nodeName) return domUtils.remove(s), void i.setStartAtLast(l).setCursor(!1, !0);
					var c = s.nextSibling;
					if(c && "TABLE" != c.nodeName) return domUtils.remove(s), void i.setStartAtFirst(c).setCursor(!1, !0)
				}
				if(domUtils.isBody(i.startContainer)) {
					var s = domUtils.createElement(o.document, "p", {
						innerHTML: browser.ie ? domUtils.fillChar : "<br/>"
					});
					i.insertNode(s).setStart(s, 0).setCursor(!1, !0)
				}
			}
			if(!t && (3 == i.startContainer.nodeType || 1 == i.startContainer.nodeType && domUtils.isEmptyBlock(i.startContainer)))
				if(browser.ie) {
					var u = i.document.createElement("span");
					i.insertNode(u).setStartBefore(u).collapse(!0), i.select(), domUtils.remove(u)
				} else i.select()
		}
	})
}, UE.plugins.fiximgclick = function() {
	function e() {
		this.editor = null, this.resizer = null, this.cover = null, this.doc = document, this.prePos = {
			x: 0,
			y: 0
		}, this.startPos = {
			x: 0,
			y: 0
		}
	}
	var t = !1;
	return function() {
			var n = [
				[0, 0, -1, -1],
				[0, 0, 0, -1],
				[0, 0, 1, -1],
				[0, 0, -1, 0],
				[0, 0, 1, 0],
				[0, 0, -1, 1],
				[0, 0, 0, 1],
				[0, 0, 1, 1]
			];
			e.prototype = {
				init: function(e) {
					var t = this;
					t.editor = e, t.startPos = this.prePos = {
						x: 0,
						y: 0
					}, t.dragId = -1;
					var n = [],
						r = t.cover = document.createElement("div"),
						o = t.resizer = document.createElement("div");
					for(r.id = t.editor.ui.id + "_imagescale_cover", r.style.cssText = "position:absolute;display:none;z-index:" + t.editor.options.zIndex + ";filter:alpha(opacity=0); opacity:0;background:#CCC;", domUtils.on(r, "mousedown click", function() {
							t.hide()
						}), i = 0; i < 8; i++) n.push('<span class="edui-editor-imagescale-hand' + i + '"></span>');
					o.id = t.editor.ui.id + "_imagescale", o.className = "edui-editor-imagescale", o.innerHTML = n.join(""), o.style.cssText += ";display:none;border:1px solid #3b77ff;z-index:" + t.editor.options.zIndex + ";", t.editor.ui.getDom().appendChild(r), t.editor.ui.getDom().appendChild(o), t.initStyle(), t.initEvents()
				},
				initStyle: function() {
					utils.cssRule("imagescale", ".edui-editor-imagescale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}");
				},
				initEvents: function() {
					var e = this;
					e.startPos.x = e.startPos.y = 0, e.isDraging = !1
				},
				_eventHandler: function(e) {
					var n = this;
					switch(e.type) {
						case "mousedown":
							var i, i = e.target || e.srcElement;
							i.className.indexOf("edui-editor-imagescale-hand") != -1 && n.dragId == -1 && (n.dragId = i.className.slice(-1), n.startPos.x = n.prePos.x = e.clientX, n.startPos.y = n.prePos.y = e.clientY, domUtils.on(n.doc, "mousemove", n.proxy(n._eventHandler, n)));
							break;
						case "mousemove":
							n.dragId != -1 && (n.updateContainerStyle(n.dragId, {
								x: e.clientX - n.prePos.x,
								y: e.clientY - n.prePos.y
							}), n.prePos.x = e.clientX, n.prePos.y = e.clientY, t = !0, n.updateTargetElement());
							break;
						case "mouseup":
							n.dragId != -1 && (n.updateContainerStyle(n.dragId, {
								x: e.clientX - n.prePos.x,
								y: e.clientY - n.prePos.y
							}), n.updateTargetElement(), n.target.parentNode && n.attachTo(n.target), n.dragId = -1), domUtils.un(n.doc, "mousemove", n.proxy(n._eventHandler, n)), t && (t = !1, n.editor.fireEvent("contentchange"))
					}
				},
				updateTargetElement: function() {
					var e = this;
					domUtils.setStyles(e.target, {
						width: e.resizer.style.width,
						height: e.resizer.style.height
					}), e.target.width = parseInt(e.resizer.style.width), e.target.height = parseInt(e.resizer.style.height), e.attachTo(e.target)
				},
				updateContainerStyle: function(e, t) {
					var i, r = this,
						o = r.resizer;
					0 != n[e][0] && (i = parseInt(o.style.left) + t.x, o.style.left = r._validScaledProp("left", i) + "px"), 0 != n[e][1] && (i = parseInt(o.style.top) + t.y, o.style.top = r._validScaledProp("top", i) + "px"), 0 != n[e][2] && (i = o.clientWidth + n[e][2] * t.x, o.style.width = r._validScaledProp("width", i) + "px"), 0 != n[e][3] && (i = o.clientHeight + n[e][3] * t.y, o.style.height = r._validScaledProp("height", i) + "px")
				},
				_validScaledProp: function(e, t) {
					var n = this.resizer,
						i = document;
					switch(t = isNaN(t) ? 0 : t, e) {
						case "left":
							return t < 0 ? 0 : t + n.clientWidth > i.clientWidth ? i.clientWidth - n.clientWidth : t;
						case "top":
							return t < 0 ? 0 : t + n.clientHeight > i.clientHeight ? i.clientHeight - n.clientHeight : t;
						case "width":
							return t <= 0 ? 1 : t + n.offsetLeft > i.clientWidth ? i.clientWidth - n.offsetLeft : t;
						case "height":
							return t <= 0 ? 1 : t + n.offsetTop > i.clientHeight ? i.clientHeight - n.offsetTop : t
					}
				},
				hideCover: function() {
					this.cover.style.display = "none"
				},
				showCover: function() {
					var e = this,
						t = domUtils.getXY(e.editor.ui.getDom()),
						n = domUtils.getXY(e.editor.iframe);
					domUtils.setStyles(e.cover, {
						width: e.editor.iframe.offsetWidth + "px",
						height: e.editor.iframe.offsetHeight + "px",
						top: n.y - t.y + "px",
						left: n.x - t.x + "px",
						position: "absolute",
						display: ""
					})
				},
				show: function(e) {
					var t = this;
					t.resizer.style.display = "block", e && t.attachTo(e), domUtils.on(this.resizer, "mousedown", t.proxy(t._eventHandler, t)), domUtils.on(t.doc, "mouseup", t.proxy(t._eventHandler, t)), t.showCover(), t.editor.fireEvent("afterscaleshow", t), t.editor.fireEvent("saveScene")
				},
				hide: function() {
					var e = this;
					e.hideCover(), e.resizer.style.display = "none", domUtils.un(e.resizer, "mousedown", e.proxy(e._eventHandler, e)), domUtils.un(e.doc, "mouseup", e.proxy(e._eventHandler, e)), e.editor.fireEvent("afterscalehide", e)
				},
				proxy: function(e, t) {
					return function(n) {
						return e.apply(t || this, arguments)
					}
				},
				attachTo: function(e) {
					var t = this,
						n = t.target = e,
						i = this.resizer,
						r = domUtils.getXY(n),
						o = domUtils.getXY(t.editor.iframe),
						s = domUtils.getXY(i.parentNode);
					domUtils.setStyles(i, {
						width: n.width + "px",
						height: n.height + "px",
						left: o.x + r.x - t.editor.document.body.scrollLeft - s.x - parseInt(i.style.borderLeftWidth) + "px",
						top: o.y + r.y - t.editor.document.body.scrollTop - s.y - parseInt(i.style.borderTopWidth) + "px"
					})
				}
			}
		}(),
		function() {
			var t, n = this;
			n.setOpt("imageScaleEnabled", !0), !browser.ie && n.options.imageScaleEnabled && n.addListener("click", function(i, r) {
				var o = n.selection.getRange(),
					s = o.getClosedNode();
				if(s && "IMG" == s.tagName && "false" != n.body.contentEditable) {
					if(s.className.indexOf("edui-faked-music") != -1 || s.getAttribute("anchorname") || domUtils.hasClass(s, "loadingclass") || domUtils.hasClass(s, "loaderrorclass")) return;
					if(!t) {
						t = new e, t.init(n), n.ui.getDom().appendChild(t.resizer);
						var a, l = function(e) {
								t.hide(), t.target && n.selection.getRange().selectNode(t.target).select()
							},
							c = function(e) {
								var t = e.target || e.srcElement;
								!t || void 0 !== t.className && t.className.indexOf("edui-editor-imagescale") != -1 || l(e)
							};
						n.addListener("afterscaleshow", function(e) {
							n.addListener("beforekeydown", l), n.addListener("beforemousedown", c), domUtils.on(document, "keydown", l), domUtils.on(document, "mousedown", c), n.selection.getNative().removeAllRanges()
						}), n.addListener("afterscalehide", function(e) {
							n.removeListener("beforekeydown", l), n.removeListener("beforemousedown", c), domUtils.un(document, "keydown", l), domUtils.un(document, "mousedown", c);
							var i = t.target;
							i.parentNode && n.selection.getRange().selectNode(i).select()
						}), domUtils.on(t.resizer, "mousedown", function(e) {
							n.selection.getNative().removeAllRanges();
							var i = e.target || e.srcElement;
							i && i.className.indexOf("edui-editor-imagescale-hand") == -1 && (a = setTimeout(function() {
								t.hide(), t.target && n.selection.getRange().selectNode(i).select()
							}, 200))
						}), domUtils.on(t.resizer, "mouseup", function(e) {
							var t = e.target || e.srcElement;
							t && t.className.indexOf("edui-editor-imagescale-hand") == -1 && clearTimeout(a)
						})
					}
					t.show(s)
				} else t && "none" != t.resizer.style.display && t.hide()
			}), browser.webkit && n.addListener("click", function(e, t) {
				if("IMG" == t.target.tagName && "false" != n.body.contentEditable) {
					var i = new dom.Range(n.document);
					i.selectNode(t.target).select()
				}
			})
		}
}(), UE.plugins.autoheight = function() {
	function e() {
		var e = this;
		clearTimeout(r), o || (!e.queryCommandState || e.queryCommandState && 1 != e.queryCommandState("source")) && (r = setTimeout(function() {
			for(var t = e.body.lastChild; t && 1 != t.nodeType;) t = t.previousSibling;
			t && 1 == t.nodeType && (t.style.clear = "both", i = Math.max(domUtils.getXY(t).y + t.offsetHeight + 25, Math.max(a.minFrameHeight, a.initialFrameHeight)), i != s && (i !== parseInt(e.iframe.parentNode.style.height) && (e.iframe.parentNode.style.height = i + "px"), e.body.style.height = i + "px", s = i), domUtils.removeStyle(t, "clear"))
		}, 50))
	}
	var t = this;
	if(t.autoHeightEnabled = t.options.autoHeightEnabled !== !1, t.autoHeightEnabled) {
		var n, i, r, o, s = 0,
			a = t.options;
		t.addListener("fullscreenchanged", function(e, t) {
			o = t
		}), t.addListener("destroy", function() {
			t.removeListener("contentchange afterinserthtml keyup mouseup", e)
		}), t.enableAutoHeight = function() {
			var t = this;
			if(t.autoHeightEnabled) {
				var i = t.document;
				t.autoHeightEnabled = !0, n = i.body.style.overflowY, i.body.style.overflowY = "hidden", t.addListener("contentchange afterinserthtml keyup mouseup", e), setTimeout(function() {
					e.call(t)
				}, browser.gecko ? 100 : 0), t.fireEvent("autoheightchanged", t.autoHeightEnabled)
			}
		}, t.disableAutoHeight = function() {
			t.body.style.overflowY = n || "", t.removeListener("contentchange", e), t.removeListener("keyup", e), t.removeListener("mouseup", e), t.autoHeightEnabled = !1, t.fireEvent("autoheightchanged", t.autoHeightEnabled)
		}, t.on("setHeight", function() {
			t.disableAutoHeight()
		}), t.addListener("ready", function() {
			t.enableAutoHeight();
			var n;
			domUtils.on(browser.ie ? t.body : t.document, browser.webkit ? "dragover" : "drop", function() {
				clearTimeout(n), n = setTimeout(function() {
					e.call(t)
				}, 100)
			});
			var i;
			window.onscroll = function() {
				null === i ? i = this.scrollY : 0 == this.scrollY && 0 != i && (t.window.scrollTo(0, 0), i = null)
			}
		})
	}
}, UE.plugins.basestyle = function() {
	var e = {
			bold: ["strong", "b"],
			italic: ["em", "i"],
			subscript: ["sub"],
			superscript: ["sup"]
		},
		t = function(e, t) {
			return domUtils.filterNodeList(e.selection.getStartElementPath(), t)
		},
		n = this;
	n.addshortcutkey({
		Bold: "ctrl+66",
		Italic: "ctrl+73",
		Underline: "ctrl+85"
	}), n.addInputRule(function(e) {
		utils.each(e.getNodesByTagName("b i"), function(e) {
			switch(e.tagName) {
				case "b":
					e.tagName = "strong";
					break;
				case "i":
					e.tagName = "em"
			}
		})
	});
	for(var i in e) ! function(e, i) {
		n.commands[e] = {
			execCommand: function(e) {
				var r = n.selection.getRange(),
					o = t(this, i);
				if(r.collapsed) {
					if(o) {
						var s = n.document.createTextNode("");
						r.insertNode(s).removeInlineStyle(i), r.setStartBefore(s), domUtils.remove(s)
					} else {
						var a = r.document.createElement(i[0]);
						"superscript" != e && "subscript" != e || (s = n.document.createTextNode(""), r.insertNode(s).removeInlineStyle(["sub", "sup"]).setStartBefore(s).collapse(!0)), r.insertNode(a).setStart(a, 0)
					}
					r.collapse(!0)
				} else "superscript" != e && "subscript" != e || o && o.tagName.toLowerCase() == e || r.removeInlineStyle(["sub", "sup"]), o ? r.removeInlineStyle(i) : r.applyInlineStyle(i[0]);
				r.select()
			},
			queryCommandState: function() {
				return t(this, i) ? 1 : 0
			}
		}
	}(i, e[i])
}, UE.plugins.elementpath = function() {
	var e, t, n = this;
	n.setOpt("elementPathEnabled", !0), n.options.elementPathEnabled && (n.commands.elementpath = {
		execCommand: function(i, r) {
			var o = t[r],
				s = n.selection.getRange();
			e = 1 * r, s.selectNode(o).select()
		},
		queryCommandValue: function() {
			var n = [].concat(this.selection.getStartElementPath()).reverse(),
				i = [];
			t = n;
			for(var r, o = 0; r = n[o]; o++)
				if(3 != r.nodeType) {
					var s = r.tagName.toLowerCase();
					if("img" == s && r.getAttribute("anchorname") && (s = "anchor"), i[o] = s, e == o) {
						e = -1;
						break
					}
				}
			return i
		}
	})
}, UE.plugin.register("autosave", function() {
	function e(e) {
		var o;
		if(!(new Date - n < i)) {
			if(!e.hasContents()) return void(r && t.removePreferences(r));
			n = new Date, e._saveFlag = null, o = t.body.innerHTML, e.fireEvent("beforeautosave", {
				content: o
			}) !== !1 && (t.setPreferences(r, o), e.fireEvent("afterautosave", {
				content: o
			}))
		}
	}
	var t = this,
		n = new Date,
		i = 20,
		r = null;
	return {
		defaultOptions: {
			saveInterval: 500,
			enableAutoSave: !0
		},
		bindEvents: {
			ready: function() {
				var e = "-drafts-data",
					n = null;
				n = t.key ? t.key + e : (t.container.parentNode.id || "ue-common") + e, r = (location.protocol + location.host + location.pathname).replace(/[.:\/]/g, "_") + n
			},
			contentchange: function() {
				t.getOpt("enableAutoSave") && r && (t._saveFlag && window.clearTimeout(t._saveFlag), t.options.saveInterval > 0 ? t._saveFlag = window.setTimeout(function() {
					e(t)
				}, t.options.saveInterval) : e(t))
			}
		},
		commands: {
			clearlocaldata: {
				execCommand: function(e, n) {
					r && t.getPreferences(r) && t.removePreferences(r)
				},
				notNeedUndo: !0,
				ignoreContentChange: !0
			},
			getlocaldata: {
				execCommand: function(e, n) {
					return r ? t.getPreferences(r) || "" : ""
				},
				notNeedUndo: !0,
				ignoreContentChange: !0
			},
			drafts: {
				execCommand: function(e, n) {
					r && (t.body.innerHTML = t.getPreferences(r) || "<p>" + domUtils.fillHtml + "</p>", t.focus(!0))
				},
				queryCommandState: function() {
					return r ? null === t.getPreferences(r) ? -1 : 0 : -1
				},
				notNeedUndo: !0,
				ignoreContentChange: !0
			}
		}
	}
}), UE.plugin.register("insertfile", function() {
	function e(e) {
		var t = e.substr(e.lastIndexOf(".") + 1).toLowerCase(),
			n = {
				rar: "icon_rar.gif",
				zip: "icon_rar.gif",
				tar: "icon_rar.gif",
				gz: "icon_rar.gif",
				bz2: "icon_rar.gif",
				doc: "icon_doc.gif",
				docx: "icon_doc.gif",
				pdf: "icon_pdf.gif",
				mp3: "icon_mp3.gif",
				xls: "icon_xls.gif",
				chm: "icon_chm.gif",
				ppt: "icon_ppt.gif",
				pptx: "icon_ppt.gif",
				avi: "icon_mv.gif",
				rmvb: "icon_mv.gif",
				wmv: "icon_mv.gif",
				flv: "icon_mv.gif",
				swf: "icon_mv.gif",
				rm: "icon_mv.gif",
				exe: "icon_exe.gif",
				psd: "icon_psd.gif",
				txt: "icon_txt.gif",
				jpg: "icon_jpg.gif",
				png: "icon_jpg.gif",
				jpeg: "icon_jpg.gif",
				gif: "icon_jpg.gif",
				ico: "icon_jpg.gif",
				bmp: "icon_jpg.gif"
			};
		return n[t] ? n[t] : n.txt
	}
	var t = this;
	return {
		commands: {
			insertfile: {
				execCommand: function(n, i) {
					if(i = utils.isArray(i) ? i : [i], t.fireEvent("beforeinsertfile", i) !== !0) {
						var r, o, s, a, l = "",
							c = t.getOpt("UEDITOR_HOME_URL"),
							u = c + ("/" == c.substr(c.length - 1) ? "" : "/") + "dialogs/attachment/fileTypeImages/";
						for(r = 0; r < i.length; r++) o = i[r], s = u + e(o.url), a = o.title || o.url.substr(o.url.lastIndexOf("/") + 1), l += '<p style="line-height: 16px;"><img style="vertical-align: middle; margin-right: 2px;" src="' + s + '" _src="' + s + '" /><a style="font-size:12px; color:#0066cc;" href="' + o.url + '" title="' + a + '">' + a + "</a></p>";
						t.execCommand("insertHtml", l), t.fireEvent("afterinsertfile", i)
					}
				}
			}
		}
	}
}), UE.plugins.font = function() {
	function e(e) {
		for(var t;
			(t = e.parentNode) && "SPAN" == t.tagName && 1 == domUtils.getChildCount(t, function(e) {
				return !domUtils.isBookmarkNode(e) && !domUtils.isBr(e)
			});) t.style.cssText += e.style.cssText, domUtils.remove(e, !0), e = t
	}

	function t(e, t, n) {
		if(s[t] && (e.adjustmentBoundary(), !e.collapsed && 1 == e.startContainer.nodeType)) {
			var i = e.startContainer.childNodes[e.startOffset];
			if(i && domUtils.isTagNode(i, "span")) {
				var r = e.createBookmark();
				utils.each(domUtils.getElementsByTagName(i, "span"), function(e) {
					e.parentNode && !domUtils.isBookmarkNode(e) && ("backcolor" == t && domUtils.getComputedStyle(e, "background-color").toLowerCase() === n || (domUtils.removeStyle(e, s[t]), 0 == e.style.cssText.replace(/^\s+$/, "").length && domUtils.remove(e, !0)))
				}), e.moveToBookmark(r)
			}
		}
	}

	function n(n, i, r) {
		var o, s = n.collapsed,
			a = n.createBookmark();
		if(s)
			for(o = a.start.parentNode; dtd.$inline[o.tagName];) o = o.parentNode;
		else o = domUtils.getCommonAncestor(a.start, a.end);
		utils.each(domUtils.getElementsByTagName(o, "span"), function(t) {
			if(t.parentNode && !domUtils.isBookmarkNode(t)) {
				if(/\s*border\s*:\s*none;?\s*/i.test(t.style.cssText)) return void(/^\s*border\s*:\s*none;?\s*$/.test(t.style.cssText) ? domUtils.remove(t, !0) : domUtils.removeStyle(t, "border"));
				if(/border/i.test(t.style.cssText) && "SPAN" == t.parentNode.tagName && /border/i.test(t.parentNode.style.cssText) && (t.style.cssText = t.style.cssText.replace(/border[^:]*:[^;]+;?/gi, "")), "fontborder" != i || "none" != r)
					for(var n = t.nextSibling; n && 1 == n.nodeType && "SPAN" == n.tagName;)
						if(domUtils.isBookmarkNode(n) && "fontborder" == i) t.appendChild(n), n = t.nextSibling;
						else {
							if(n.style.cssText == t.style.cssText && (domUtils.moveChild(n, t), domUtils.remove(n)), t.nextSibling === n) break;
							n = t.nextSibling
						}
				if(e(t), browser.ie && browser.version > 8) {
					var o = domUtils.findParent(t, function(e) {
						return "SPAN" == e.tagName && /background-color/.test(e.style.cssText)
					});
					o && !/background-color/.test(t.style.cssText) && (t.style.backgroundColor = o.style.backgroundColor)
				}
			}
		}), n.moveToBookmark(a), t(n, i, r)
	}
	var i = this,
		r = {
			forecolor: "color",
			backcolor: "background-color",
			fontsize: "font-size",
			fontfamily: "font-family",
			underline: "text-decoration",
			strikethrough: "text-decoration",
			fontborder: "border"
		},
		o = {
			underline: 1,
			strikethrough: 1,
			fontborder: 1
		},
		s = {
			forecolor: "color",
			backcolor: "background-color",
			fontsize: "font-size",
			fontfamily: "font-family"
		};
	i.setOpt({
		fontfamily: [{
			name: "songti",
			val: "宋体,SimSun"
		}, {
			name: "yahei",
			val: "微软雅黑,Microsoft YaHei"
		}, {
			name: "kaiti",
			val: "楷体,楷体_GB2312, SimKai"
		}, {
			name: "heiti",
			val: "黑体, SimHei"
		}, {
			name: "lishu",
			val: "隶书, SimLi"
		}, {
			name: "andaleMono",
			val: "andale mono"
		}, {
			name: "arial",
			val: "arial, helvetica,sans-serif"
		}, {
			name: "arialBlack",
			val: "arial black,avant garde"
		}, {
			name: "comicSansMs",
			val: "comic sans ms"
		}, {
			name: "impact",
			val: "impact,chicago"
		}, {
			name: "timesNewRoman",
			val: "times new roman"
		}],
		fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36]
	}), i.addInputRule(function(e) {
		utils.each(e.getNodesByTagName("u s del font strike"), function(e) {
			if("font" == e.tagName) {
				var t = [];
				for(var n in e.attrs) switch(n) {
					case "size":
						t.push("font-size:" + ({
							1: "16",
							2: "16",
							3: "18",
							4: "24",
							5: "24",
							6: "24",
							7: "24"
						}[e.attrs[n]] || e.attrs[n]) + "px");
						break;
					case "color":
						t.push("color:" + e.attrs[n]);
						break;
					case "face":
						t.push("font-family:" + e.attrs[n]);
						break;
					case "style":
						t.push(e.attrs[n])
				}
				e.attrs = {
					style: t.join(";")
				}
			} else {
				var i = "u" == e.tagName ? "underline" : "line-through";
				e.attrs = {
					style: (e.getAttr("style") || "") + "text-decoration:" + i + ";"
				}
			}
			e.tagName = "span"
		})
	});
	for(var a in r) ! function(e, t) {
		UE.commands[e] = {
			execCommand: function(i, r) {
				r = r || (this.queryCommandState(i) ? "none" : "underline" == i ? "underline" : "fontborder" == i ? "1px solid #000" : "line-through");
				var s, a = this,
					l = this.selection.getRange();
				if("default" == r) l.collapsed && (s = a.document.createTextNode("font"), l.insertNode(s).select()), a.execCommand("removeFormat", "span,a", t), s && (l.setStartBefore(s).collapse(!0), domUtils.remove(s)), n(l, i, r), l.select();
				else if(l.collapsed) {
					var c = domUtils.findParentByTagName(l.startContainer, "span", !0);
					if(s = a.document.createTextNode("font"), !c || c.children.length || c[browser.ie ? "innerText" : "textContent"].replace(fillCharReg, "").length) {
						if(l.insertNode(s), l.selectNode(s).select(), c = l.document.createElement("span"), o[e]) {
							if(domUtils.findParentByTagName(s, "a", !0)) return l.setStartBefore(s).setCursor(), void domUtils.remove(s);
							a.execCommand("removeFormat", "span,a", t)
						}
						if(c.style.cssText = t + ":" + r, s.parentNode.insertBefore(c, s), !browser.ie || browser.ie && 9 == browser.version)
							for(var u = c.parentNode; !domUtils.isBlockElm(u);) "SPAN" == u.tagName && (c.style.cssText = u.style.cssText + ";" + c.style.cssText), u = u.parentNode;
						opera ? setTimeout(function() {
							l.setStart(c, 0).collapse(!0), n(l, i, r), l.select()
						}) : (l.setStart(c, 0).collapse(!0), n(l, i, r), l.select())
					} else l.insertNode(s), o[e] && (l.selectNode(s).select(), a.execCommand("removeFormat", "span,a", t, null), c = domUtils.findParentByTagName(s, "span", !0), l.setStartBefore(s)), c && (c.style.cssText += ";" + t + ":" + r), l.collapse(!0).select();
					domUtils.remove(s)
				} else o[e] && a.queryCommandValue(e) && a.execCommand("removeFormat", "span,a", t), l = a.selection.getRange(), l.applyInlineStyle("span", {
					style: t + ":" + r
				}), n(l, i, r), l.select();
				return !0
			},
			queryCommandValue: function(e) {
				var n = this.selection.getStart();
				if("underline" == e || "strikethrough" == e) {
					for(var i, r = n; r && !domUtils.isBlockElm(r) && !domUtils.isBody(r);) {
						if(1 == r.nodeType && (i = domUtils.getComputedStyle(r, t), "none" != i)) return i;
						r = r.parentNode
					}
					return "none"
				}
				if("fontborder" == e) {
					for(var o, s = n; s && dtd.$inline[s.tagName];) {
						if((o = domUtils.getComputedStyle(s, "border")) && /1px/.test(o) && /solid/.test(o)) return o;
						s = s.parentNode
					}
					return ""
				}
				if("FontSize" == e) {
					var a = domUtils.getComputedStyle(n, t),
						s = /^([\d\.]+)(\w+)$/.exec(a);
					return s ? Math.floor(s[1]) + s[2] : a
				}
				return domUtils.getComputedStyle(n, t)
			},
			queryCommandState: function(e) {
				if(!o[e]) return 0;
				var t = this.queryCommandValue(e);
				return "fontborder" == e ? /1px/.test(t) && /solid/.test(t) : "underline" == e ? /underline/.test(t) : /line\-through/.test(t)
			}
		}
	}(a, r[a])
}, UE.commands.imagefloat = {
	execCommand: function(e, t) {
		var n = this,
			i = n.selection.getRange();
		if(!i.collapsed) {
			var r = i.getClosedNode();
			if(r && "IMG" == r.tagName) switch(t) {
				case "left":
				case "right":
				case "none":
					for(var o, s, a, l = r.parentNode; dtd.$inline[l.tagName] || "A" == l.tagName;) l = l.parentNode;
					if(o = l, "P" == o.tagName && "center" == domUtils.getStyle(o, "text-align")) {
						if(!domUtils.isBody(o) && 1 == domUtils.getChildCount(o, function(e) {
								return !domUtils.isBr(e) && !domUtils.isWhitespace(e)
							}))
							if(s = o.previousSibling, a = o.nextSibling, s && a && 1 == s.nodeType && 1 == a.nodeType && s.tagName == a.tagName && domUtils.isBlockElm(s)) {
								for(s.appendChild(o.firstChild); a.firstChild;) s.appendChild(a.firstChild);
								domUtils.remove(o), domUtils.remove(a)
							} else domUtils.setStyle(o, "text-align", "");
						i.selectNode(r).select()
					}
					domUtils.setStyle(r, "float", "none" == t ? "" : t), "none" == t && domUtils.removeAttributes(r, "align");
					break;
				case "center":
					if("center" != n.queryCommandValue("imagefloat")) {
						for(l = r.parentNode, domUtils.setStyle(r, "float", ""), domUtils.removeAttributes(r, "align"), o = r; l && 1 == domUtils.getChildCount(l, function(e) {
								return !domUtils.isBr(e) && !domUtils.isWhitespace(e)
							}) && (dtd.$inline[l.tagName] || "A" == l.tagName);) o = l, l = l.parentNode;
						i.setStartBefore(o).setCursor(!1), l = n.document.createElement("div"), l.appendChild(o), domUtils.setStyle(o, "float", ""), n.execCommand("insertHtml", '<p id="_img_parent_tmp" style="text-align:center">' + l.innerHTML + "</p>"), o = n.document.getElementById("_img_parent_tmp"), o.removeAttribute("id"), o = o.firstChild, i.selectNode(o).select(), a = o.parentNode.nextSibling, a && domUtils.isEmptyNode(a) && domUtils.remove(a)
					}
			}
		}
	},
	queryCommandValue: function() {
		var e, t, n = this.selection.getRange();
		return n.collapsed ? "none" : (e = n.getClosedNode(), e && 1 == e.nodeType && "IMG" == e.tagName ? (t = domUtils.getComputedStyle(e, "float") || e.getAttribute("align"), "none" == t && (t = "center" == domUtils.getComputedStyle(e.parentNode, "text-align") ? "center" : t), {
			left: 1,
			right: 1,
			center: 1
		}[t] ? t : "none") : "none")
	},
	queryCommandState: function() {
		var e, t = this.selection.getRange();
		return t.collapsed ? -1 : (e = t.getClosedNode(), e && 1 == e.nodeType && "IMG" == e.tagName ? 0 : -1)
	}
}, UE.plugins.qyer_image = function() {
	var e = this;
	e.addInputRule(function(e) {
		utils.each(e.getNodesByTagName("img"), function(e) {
			var t = e.getAttr("data-type");
			if(t && t.indexOf("photo") != -1) {
				var n = '<img class="qyer_image" src="' + e.getAttr("data-original") + '" _src="' + e.getAttr("data-original") + '" data-id="' + e.getAttr("data-id") + '">';
				e.parentNode.replaceChild(UE.uNode.createElement(n), e)
			}
		})
	}), UE.commands.insertimage = {
		execCommand: function(e, t) {
			if(t = utils.isArray(t) ? t : [t], t.curScrollTop = document.body.scrollTop || document.documentElement.scrollTop, t.length) {
				var n = this,
					i = n.selection.getRange(),
					r = i.getClosedNode();
				if(n.fireEvent("beforeinsertimage", t) !== !0) {
					if(!r || !/img/i.test(r.tagName) || "edui-faked-video" == r.className && r.className.indexOf("edui-upload-video") == -1 || r.getAttribute("word_img")) {
						var o, s = [],
							a = "";
						if(o = t[0], 1 == t.length) a = '<img src="' + o.src + '" ' + (o._src ? ' _src="' + o._src + '" ' : "") + (o.floatStyle ? 'class="qyer_image" ' : "") + (o.id ? 'data-id="' + o.id + '" ' : "") + (o.width ? 'width="' + o.width + '" ' : "") + (o.height ? ' height="' + o.height + '" ' : "") + ("left" == o.floatStyle || "right" == o.floatStyle ? ' style="float:' + o.floatStyle + ';"' : "") + (o.title && "" != o.title ? ' title="' + o.title + '"' : "") + (o.border && "0" != o.border ? ' border="' + o.border + '"' : "") + (o.alt && "" != o.alt ? ' alt="' + o.alt + '"' : "") + (o.hspace && "0" != o.hspace ? ' hspace = "' + o.hspace + '"' : "") + (o.vspace && "0" != o.vspace ? ' vspace = "' + o.vspace + '"' : "") + ("emotion" == o.type ? "" : "style='display:none;'  onload='imageLoad(this," + o.id + ",1)' onerror='imageLoad(this," + o.id + ",0)'") + "/>", "center" == o.floatStyle && (a = '<p style="text-align: center">' + a + "</p>"), s.push(a);
						else
							for(var l = 0; o = t[l++];) a = "<p " + ("center" == o.floatStyle ? 'style="text-align: center" ' : "") + '><img src="' + o.src + '" ' + (o.width ? 'width="' + o.width + '" ' : "") + (o._src ? ' _src="' + o._src + '" ' : "") + (o.height ? ' height="' + o.height + '" ' : "") + ' style="' + (o.floatStyle && "center" != o.floatStyle ? "float:" + o.floatStyle + ";" : "") + (o.border || "") + '" ' + (o.title ? ' title="' + o.title + '"' : "") + " /></p>", s.push(a);
						n.execCommand("insertHtml", s.join(""))
					} else {
						var c = t.shift(),
							u = c.floatStyle;
						delete c.floatStyle, domUtils.setAttributes(r, c), n.execCommand("imagefloat", u), t.length > 0 && (i.setStartAfter(r).setCursor(!1, !0), n.execCommand("insertimage", t))
					}
					n.fireEvent("afterinsertimage", t)
				}
			}
		}
	}
}, UE.plugins.insertimage_ext = function() {
	var e = this,
		t = (baidu.editor.dom.domUtils, baidu.editor.ui.uiUtils, null),
		n = function(e) {
			e !== !0 && t.data("is_hover") || t.css({
				display: "none"
			})
		},
		i = function(e) {
			var t = document.createElement("b");
			return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
		},
		r = i(9);
	e.addListener("beforeinsertimage", function(t, n) {
		var i = n.length > 0 ? n[0] : {},
			o = !1;
		if(!i.type || "emotion" != i.type) return "noload" == i.type || r || e.execCommand("inserthtml", '<img class="phimage" id="' + i.id + '" data-pkey="' + i.id + '" src="//static.qyer.com/models/project/bbs/images/loading.gif" _src="' + i.src + '">'), $.ajax({
			url: BBS_Url.addAttach2ssdb,
			async: !1,
			data: {
				photoid: i.id,
				type: 1
			},
			success: function(e) {
				var e = JSON.parse(e);
				0 != e.error_code && (o = !0)
			}
		}), o
	}), e.addListener("ready", function() {
		e.window.imageLoad = function(t, n, i) {
			var r = $(e.document).find(".phimage[data-pkey=" + n + "]");
			1 == i ? "emotion" == $(t).attr("data-id") ? $(t).css("display", "inline") : $(t).css("display", "") : requirejs(["web_old_tip"], function(e) {
				e.tip({
					text: "加载图片失败",
					type: "error"
				})
			}), 0 != r.length && r.remove(), e.fireEvent("contentchange")
		}
	}), e.addListener("keyup", function(e, t) {
		var i = this,
			r = i.selection.getRange(),
			o = r.getClosedNode();
		8 == t.keyCode && o && /img/i.test(o.tagName) && n(!0)
	}), e.addListener("fullscreenchanged", function() {
		var t = $(".qyer_rotate_img_loading", e.document),
			n = $(e.document.body).css("padding");
		e.ui._fullscreen ? t.css("left", parseInt(t.css("left")) + parseInt(n.split(" ")[1]) - 4) : t.css("left", 8)
	})
}, UE.plugin.register("qyerimgpopup", function() {
	var e = (baidu.editor.dom.domUtils, baidu.editor.utils),
		t = baidu.editor.ui.uiUtils,
		n = (baidu.editor.ui, baidu.editor.ui.Popup),
		i = baidu.editor.ui.QyerImgPopup = function(e) {
			this.initOptions(e), this.initImgPopup()
		},
		r = 0;
	i.prototype = {
		uiName: "bbs_img_popup",
		upStatus: "",
		initImgPopup: function() {
			this.initPopup(), this.bindTargetDom(), this.initSelPhoto()
		},
		bindTargetDom: function() {
			var e = this;
			$(this.targetDom).on("click", function() {
				var n = t.getClientRect(this);
				e.showAt({
					left: n.left - 40,
					top: n.top - 80
				})
			})
		},
		initSelPhoto: function() {
			var e = this;
			requirejs(["old/js/bbs_selimage"], function(t) {
				var n = {
					showTitle: !1,
					showCancelBtn: !1,
					showOKBtn: !1,
					showCloseIcon: !1,
					editor: e.editor
				};
				e.selPhoto = new t(n)
			})
		},
		getContentHtmlTpl: function() {
			return '<ul><li><div id="imguploadwrap" class="imguploadWrapcla" style="position:relative;"><a href="javascript:;" id="uploadbtn" class="imgupload" onclick="$$._onClick(\'localupload\')">本地上传</a></div></li><li><a href="javascript:;" class="selphoto" onclick="$$._onClick(\'selphoto\')">相册选择</a></li></ul><div class="arrowDown"><span class="arrow1"></span><span class="arrow2"></span></div>'
		},
		initUpload: function() {
			var e = this;
			requirejs(["web_qui_quiupload", "web_old_tip"], function(t, n) {
				var i = [],
					o = {},
					s = "/photo.php?action=getUploadPhotoId&count=<%= count %>&album_id=<%= album_id %>",
					a = function(e) {
						var t = o[e.id] || {};
						return t
					},
					l = function(e, t) {
						var n = _.template(s)({
							count: e,
							album_id: t
						});
						return $.getJSON(n).then(function(e) {
							return i = e.data
						})
					};
				e.upload = new t({
					browse_button: $(e.getDom()).find(".imgupload").get(0),
					container: $(e.getDom()).find(".imguploadWrapcla").get(0),
					multi_selection: !1,
					filters: [{
						extensions: "jpg,jpeg,png"
					}],
					max_file_size: "20mb",
					auto_start: !1,
					qyer_token_url: "/photo.php?action=token",
					token_format: function(e) {
						return e.data.tk = e.data.token, e.data.domain = "//pic.qyer.com", e
					},
					x_vars: {
						photo_id: function(e, t) {
							return a(t).id.toString()
						},
						credit_jy: function(e, t) {
							return((a(t).credit || {}).credit_jy || 0).toString()
						},
						credit_qb: function(e, t) {
							return((a(t).credit || {}).credit_qb || 0).toString()
						},
						style: function(e, t) {
							return ""
						}
					},
					init: {
						FilesAdded: function(t, n) {
							l(n.length, 0).then(function(t) {
								_.each(t, function(t, i) {
									o[n[i].id] = t, n[i].key = t.key, n[i].photo_id = t.id, n[i].url = t.url, e.insertPlaceHolder(t.id)
								})
							}).then(function() {
								t.start()
							})
						},
						BeforeUpload: function(e, t) {
							t.timer = +new Date;
							var n = {
								source: "bbs",
								label: "photoUploadStart",
								uid: window.QYER.uid,
								fileId: t.photo_id,
								fileSize: t.origSize,
								url: encodeURIComponent(t.url),
								time: t.timer,
								uploadTime: 0
							};
							$.get("/qcross/photo/trace/tc", n)
						},
						UploadProgress: function(e, t) {},
						FileUploaded: function(t, n, i) {
							var o = JSON.parse(i),
								s = {
									source: "bbs",
									label: "photoUploadEnd",
									uid: window.QYER.uid,
									fileId: n.photo_id,
									fileSize: n.origSize,
									url: encodeURIComponent(n.url),
									time: +new Date,
									uploadTime: new Date - n.timer
								};
							$.get("/qcross/photo/trace/tc", s), e.editor.execCommand("insertimage", {
								src: o.data.photo.url,
								_src: o.data.photo.url,
								floatStyle: "left",
								id: o.data.photo.id,
								type: "noload"
							}), $(document).trigger("x-editDomInsert", r)
						},
						UploadError: function(e, t, i) {
							n.tip({
								text: i,
								type: "error"
							})
						},
						Key: function(e, t) {
							return a(t).key
						}
					}
				})
			})
		},
		onshow: function() {
			this.upload || this.initUpload()
		},
		insertPlaceHolder: function(e) {
			this.editor.execCommand("inserthtml", '<img class="phimage" id="' + e + '" data-pkey="' + e + '" src="//static.qyer.com/models/project/bbs/images/loading.gif">')
		},
		_onClick: function(e) {
			switch(e) {
				case "localupload":
					r = document.body.scrollTop || document.documentElement.scrollTop, this.hide();
					break;
				case "selphoto":
					this.selPhoto.loadAlbumList(), this.selPhoto.show(), this.hide()
			}
		}
	}, e.inherits(i, n)
}), UE.plugins.qyer_video = function() {
	function e(e) {
		var t = e.videoTitle.length > 10 ? e.videoTitle.substring(0, 10) + "..." : e.videoTitle;
		return t = t.replace(/\"/g, "'").replace(/\</g, "&lt;").replace(/\>/g, "&gt;"), '<span class="qyer_block qyer_video" data-live="' + e.live + '" data-poster="' + e.poster + '"  data-title="' + e.videoTitle + '" data-videofrom="' + e.title + '"  contenteditable="false" data-url="' + e.url + '" data-videotitle="' + t + '" data-osrc="' + (e.src || "") + '"><a class="title fontSong"><span>' + t + "</span>&nbsp;&nbsp;-&nbsp;&nbsp;" + e.title + "视频</a></span>"
	}

	function t(t, n) {
		utils.each(t.getNodesByTagName("span"), function(t) {
			var n = (t.getAttr("class"), t.getAttr("data-type")),
				r = t.getAttr("data-src"),
				o = t.getAttr("data-poster"),
				s = t.getAttr("data-osrc"),
				a = t.getAttr("data-live"),
				l = t.getAttr("data-title") || t.getAttr("data-videotitle");
			if(n && n.indexOf("video") != -1) {
				var c = r.match("([a-z1-9]*).com"),
					u = e({
						url: r,
						src: s,
						title: i[c[1]] || "",
						poster: o,
						live: a,
						videoTitle: l
					});
				t.parentNode.replaceChild(UE.uNode.createElement(u), t)
			}
		})
	}
	var n = this,
		i = {
			youku: "优酷",
			youtube: "youtube",
			sina: "新浪",
			56: "我乐",
			pps: "PPS影音",
			letv: "乐视网",
			tudou: "土豆",
			qq: "腾讯",
			ku6: "酷6",
			sohu: "搜狐"
		};
	n.addInputRule(function(e) {
		t(e)
	}), n.commands.insertvideo = {
		execCommand: function(t, i) {
			var r = "";
			r = e(i), n.fireEvent("beforeinsertvideo"), n.execCommand("inserthtml", r), n.fireEvent("afterinsertvideo")
		}
	}
}, UE.plugin.register("insertfile", function() {
	function e(e) {
		var t, e = e || 0;
		return t = e < 1048576 ? (e / 1024).toFixed(2) + "KB" : (e / 1024 / 1024).toFixed(2) + "MB"
	}

	function t(t) {
		var n = 0 === +e(t.size).replace(/[a-z]+/gi, "") ? "" : '<a class="size">' + e(t.size) + "</a>";
		return '<span class="qyer_block qyer_attach" contenteditable="false" data-key="' + t.key + '"><a class="name" data-bn-ipg="bbs-thread-attachment">' + t.name + "</a>" + n + "</span>"
	}
	var n = this;
	baidu.editor.dom.domUtils;
	return {
		commands: {
			insertfile: {
				execCommand: function(e, i) {
					if(i = utils.isArray(i) ? i : [i], n.fireEvent("beforeinsertfile", i) !== !0) {
						var r, o, s = "",
							a = n.getOpt("UEDITOR_HOME_URL");
						a + ("/" == a.substr(a.length - 1) ? "" : "/") + "dialogs/attachment/fileTypeImages/";
						for(r = 0; r < i.length; r++) o = i[r], s = t(o);
						n.fireEvent("beforeinsertfile", i), n.execCommand("insertHtml", s), n.fireEvent("afterinsertfile", i)
					}
				}
			}
		}
	}
}), UE.plugin.register("qyeremotion", function() {
	var e = (baidu.editor.dom.domUtils, baidu.editor.utils),
		t = (baidu.editor.ui.uiUtils, baidu.editor.ui.Popup),
		n = baidu.editor.ui.QyerEmotion = function(e) {
			this.initOptions(e), this.initQyerEmotion()
		};
	n.prototype = {
		uiName: "bbs_emotion",
		maxNum: 30,
		baseUrl: "//static.qyer.com/models/project/bbs/css/images/face/",
		initQyerEmotion: function() {
			this.initPopup()
		},
		getContentHtmlTpl: function() {
			return '<div class="arrowUp"><span class="arrow1"></span><span class="arrow2"></span></div>' + this.getEmotionHtml()
		},
		getEmotionHtml: function() {
			for(var e, t = [], n = 0; n < this.maxNum; n++) e = -26 * n + "px", t.push("<a href='javascript:;' style='background-position:0 " + e + ";' onclick=$$._onClick(" + n + ")></a>");
			return t.join("")
		},
		_onClick: function(e) {
			var t = {
				src: this.baseUrl + "face" + e + ".png"
			};
			t._src = t.src, t.type = "emotion", this.editor.execCommand("insertimage", t), this.hide()
		}
	}, e.inherits(n, t)
}), UE.plugin.register("stylecontrol", function() {
	function e(e) {
		setTimeout(function() {
			if(browser.ie) {
				var t = e.createTextRange();
				t.collapse(!1), t.select()
			} else e.focus()
		}, 0)
	}

	function t(e, t) {
		if(n.getOpt("bbs_font")) {
			var s, a, l, c, u, d = "",
				f = n.selection.getRange();
			n.ui._dialogs;
			if(f.collapsed === !0) return void o.hide();
			s = f.startContainer, a = f.endContainer;
			var h = i.findParent(s, function(e) {
					if(/qyer_block/gi.test(e.className)) return e
				}, !0),
				p = f.getClosedNode();
			if(!(h || p && /qyer_image/gi.test(p.className))) {
				var m = f.createBookmark(),
					g = r.getClientRect(m.start),
					v = r.getClientRect(m.end),
					y = {};
				if(l = i.findParent(s, function(e) {
						if(i.isBody(e.parentNode)) return e
					}, !0), c = i.findParent(a, function(e) {
						if(i.isBody(e.parentNode)) return e
					}, !0), !l || !c) return void f.moveToBookmark(m);
				if(!d && o._setContentHtml(), u = r.getClientRect(l), o.getDom().style.visibility = "hidden", o.w = $(o.getDom()).width(), l === c) y = {
					left: g.left + (v.left - g.left) / 2 - o.w / 2 - 10,
					top: g.top - o.h - 22
				};
				else {
					var b = r.getClientRect(this.document.body);
					y = {
						left: b.left + b.width / 2 - o.w / 2,
						top: g.top - o.h - 22
					}
				}
				o.showAt(y), f.moveToBookmark(m)
			}
		}
	}
	var n = this,
		i = baidu.editor.dom.domUtils,
		r = (baidu.editor.utils, baidu.editor.ui.uiUtils),
		o = new baidu.editor.ui.Popup({
			editor: n,
			content: "",
			className: "edui-fontstyle",
			h: 52,
			_bold: function() {
				n.execCommand("bold"), this.hide(), n.selection.getRange().select()
			},
			_paragraph: function(e) {
				var t = n.queryCommandValue("Paragraph");
				switch(t) {
					case "p":
						break;
					case "h1":
					case "h2":
						e == t && (e = "p")
				}
				var i = n.selection.getRange(),
					r = i.getCommonAncestor(!0, !0),
					o = $(r).find(".qyer_image");
				o.css("display", "inline"), n.execCommand("Paragraph", e), o.css("display", "block"), this.hide(), i.select()
			},
			_execColor: function(e) {
				n.execCommand("forecolor", e), this.hide(), n.selection.getRange().select()
			},
			_color: function() {
				s.showColor()
			},
			_link: function() {
				s.showLink()
			},
			_setContentHtml: function() {
				this.getDom("content").innerHTML = s.getHtml(), s.dom = $(this.getDom("fontcontrol")), setTimeout(function() {
					s.queryStyle()
				}, 0)
			},
			queryAutoHide: function(e) {
				return e && e.ownerDocument == n.document && ("img" == e.tagName.toLowerCase() || i.findParentByTagName(e, "a", !0)) ? e !== o.anchorEl : baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, e)
			}
		});
	o.render();
	var s = {
		className: "edit_font_box",
		modelList: {},
		sort: ["Bold", "Color", "|", "Title1", "Title2", "Text", "|", "Link"],
		popup: o
	};
	s.models = {}, s.Base = {
		status: 0,
		getHtml: function() {
			return '<a href="javascript:;" class="' + this.className + '" title="' + this.label + '" onclick="' + this.command + '">' + this.label + "</a>"
		},
		queryStatus: function() {
			var e = i.filterNodeList(n.selection.getStartElementPath(), this.commandName),
				t = s.dom.find("." + this.className);
			e ? t.addClass(this.activeClass) : t.removeClass(this.activeClass)
		}
	}, s.models.Bold = function() {
		this.label = "加粗", this.className = "weight", this.command = "$$._bold()", this.commandName = "bold", this.activeClass = "weight_active", $.extend(this, s.Base), this.queryStatus = function() {
			var e = n.queryCommandState(this.commandName);
			if(e != this.status) {
				this.status = e;
				var t = s.dom.find("." + this.className);
				1 == this.status ? t.addClass(this.activeClass) : t.removeClass(this.activeClass)
			}
		}
	}, s.models.Color = function() {
		this.label = "颜色", this.className = "color", this.command = "$$._color()", this.commandName = "forecolor", this.colorList = ["#323232", "#636363", "#ff0f00", "#ff8d00", "#818100", "#308b50", "#038081", "#3d67e9", "#000086", "#7f0085", "#4a0088", "#8b0400"], this.defColor = "#636363", this.noColor = ["#636363", "#323232"], $.extend(this, s.Base), this.getHtml = function() {
			return '<a href="javascript:;" class="' + this.className + '" title="' + this.label + '" onclick="' + this.command + '"><span class="default">' + this.label + "</span></a>"
		}, this.getInputHtml = function() {
			for(var e, t = ['<div class="text_color clearfix">'], n = new RegExp(this.defColor, "ig"), i = 0; e = this.colorList[i++];) t.push('<a href="javascript:;" ' + (null != n.exec(e) ? "class='active'" : "") + ' title="" style="background:' + e + '" onclick="$$._execColor(\'' + e + "')\"></a>");
			return t.push("</div>"), t.join("")
		}, this.queryStatus = function() {
			var e = s.dom.find("." + this.className),
				t = n.queryCommandValue(this.commandName);
			this.inArray(t, this.colorList) != -1 && (this.defColor = t, e.find("span").css({
				"border-bottom-color": t
			}))
		}, this.inArray = function(e, t) {
			for(var n, i = -1, r = new RegExp(e, "ig"), o = 0; n = t[o++];) null != r.exec(n) && (i = o);
			return i
		}
	}, s.models.Link = function() {
		this.label = "超链接", this.className = "link", this.command = "$$._link()", this.commandName = "link", $.extend(this, s.Base), this.queryStatus = function() {}, this.getInputHtml = function() {
			return '<div class="linkInput"><input type="text" class="ipt_link" value="" placeholder="粘贴超链接地址"><div class="icon_tips"><span class="enter" title=""></span></div></div>'
		}
	}, s.models.Title1 = function() {
		this.label = "标题1", this.className = "title1", this.command = "$$._paragraph('h1')", this.commandName = "h1", this.activeClass = "title1_active", $.extend(this, s.Base)
	}, s.models.Title2 = function() {
		this.label = "标题2", this.className = "title2", this.command = "$$._paragraph('h2')", this.commandName = "h2", this.activeClass = "title2_active", $.extend(this, s.Base)
	}, s.models.Text = function() {
		this.label = "正文", this.className = "text", this.command = "$$._paragraph('p')", this.commandName = "p", this.activeClass = "text_active", $.extend(this, s.Base)
	}, s.models.Separate = function() {
		this.label = "&nbsp;", this.className = "line", $.extend(this, s.Base), this.command = "", this.queryStyle = function() {}, this.queryStatus = function() {}
	}, s.showColor = function() {
		var e = $(this.dom).find("p"),
			t = this.modelList.Color.getInputHtml();
		t = this.popup.formatHtml(t), $(t).insertBefore(e), o.fitSize(), e.hide()
	}, s.showLink = function() {
		function t(e) {
			function t(e, t) {
				e = e.replace(/^\s+|\s+$/g, "");
				for(var n, i = 0; n = t[i++];)
					if(0 == e.indexOf(n)) return !0;
				return !1
			}
			var i = ["http:", "https:", "#", "/", "ftp:", "mailto:", "tel:"],
				r = "^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z].com|net|cn|cc (:s[0-9]{1-4})?/$",
				s = (new RegExp(r), e.replace(/^\s+|\s+$/g, ""));
			if(l.select(), s) {
				t(s, i) || (s = "http://" + s);
				var a = {
					href: s,
					target: "_blank",
					title: s,
					_href: s
				};
				n.execCommand("link", a), o.hide()
			} else n.execCommand("unlink"), o.hide()
		}
		var r, o = this,
			s = $(this.dom).find("p"),
			a = this.modelList.Link.getInputHtml();
		a = this.popup.formatHtml(a);
		var l = n.selection.getRange(),
			c = l.collapsed ? n.queryCommandValue("link") : n.selection.getStart();
		c = i.findParentByTagName(c, "a", !0), $(a).insertBefore(s), r = $(this.dom).find("input"), r.val(c ? $(c).attr("href") || $(c).attr("_href") : ""), "" != r.val() && r.siblings().find("span").removeClass("enter").addClass("delete"), e(r.get(0)), this.dom.undelegate().delegate(".icon_tips span", "click", function() {
			var e = $(this);
			"delete" == $.trim(e.attr("class")) ? (r.val(""), this.className = "enter", n.execCommand("unlink")) : t(r.val())
		}), r.unbind().on("keydown", function(e) {
			13 == e.keyCode ? t($(this).val()) : o.dom.find(".icon_tips span").get(0).className = "enter"
		}), s.hide()
	}, s.getHtml = function() {
		var e, t = ['<div class="' + this.className + ' edit_font_box_down" id="##_fontcontrol">'];
		t.push('<p class="enable clearfix">'), o = "";
		var r = i.filterNodeList(n.selection.getStartElementPath(), "h1 h2"),
			o = "";
		r && /(h1|h2)/.test(r.tagName) != -1 && (o = "Bold");
		for(var s, a = 0; s = this.sort[a++];) s != o && ("|" == s ? (s = "Separate", e = new this.models.Separate) : e = new this.models[s], t.push(e.getHtml()), this.modelList[s] = e);
		return t.push('</p><span class="arrow"></span></div>'), this.popup.formatHtml(t.join(""))
	}, s.hide = function() {
		this.popup.hide()
	}, s.queryStyle = function() {
		for(var e in this.modelList) "|" == e && (e = "Separate"), this.modelList[e].queryStatus()
	}, n.addListener("keyup", t), n.addListener("selectionchange", t)
}), UE.plugins.bbs_common = function() {
	var e = this,
		t = baidu.editor.dom.domUtils;
	e.addListener("click", function(e, n) {
		var i, r = n.target || n.srcElement;
		1 == /close/gi.test(r.className) && (i = t.findParent(r, function(e) {
			if(1 == /phimage/gi.test(e.className)) return e
		}), i && t.remove(i))
	}), e.addListener("afterinsertvideo afterinsertfile", function() {
		var n, i = e.selection.getRange(),
			r = e.document,
			o = r.createElement("p");
		n = t.findParent(i.startContainer, function(e) {
			if(t.isBody(e.parentNode)) return e
		}, !0), t.insertAfter(n, o), t.fillNode(r, o), i.selectNode(o).shrinkBoundary().setCursor().select()
	}), e.addListener("beforeinsertvideo beforeinsertfile", function() {
		var n, i = e.selection.getRange(),
			r = e.document,
			o = r.createElement("p");
		n = t.findParent(i.startContainer, function(e) {
			if(t.isBody(e.parentNode)) return e
		}, !0), 0 == t.isEmptyNode(n) && (t.insertAfter(n, o), i.selectNode(o).shrinkBoundary().setCursor().select())
	}), e.addListener("selectionchange", function() {
		var n, i, r = e.selection.getRange(),
			o = r.startContainer;
		n = t.findParent(o, function(e) {
			if(t.isBody(e.parentNode)) return e
		}, !0), t.getElementsByTagName(n, "span", function(o) {
			if(/qyer_video|qyer_attach/gi.test(o.className)) return i = n.nextSibling, i || (i = e.document.createElement("p"), t.insertAfter(n, i)), void r.selectNode(i).shrinkBoundary().setCursor().select()
		})
	}), e.addListener("keydown", function(n, i) {
		var r = i.keyCode || i.which,
			o = e.selection.getRange();
		if((46 == r || browser.mac && 8 == r) && 1 == o.collapsed) {
			var s, a = o.startContainer,
				l = /qyer_video|qyer_attach/gi,
				c = t.findParent(a, function(e) {
					if(t.isBody(e.parentNode)) return e
				}, !0);
			s = c.previousSibling, !s || a.previousSibling && !/p/gi.test(a.tagName) || 0 != o.startOffset || s.firstChild && l.test(s.firstChild.className) && (e.fireEvent("saveScene"), t.remove(s))
		}
		i.metaKey && 83 == r && (t.preventDefault(i), e.fireEvent("saveScene"))
	}), e.addListener("aftergetcontent", function(n, i, r) {
		e.getOpt("isSubmit") && (utils.each(r.getNodesByTagName("img"), function(e) {
			var n = e.getAttr("class");
			if(n && n.indexOf("qyer_image") != -1) {
				var i = '<span data-type="photo" data-id="' + e.getAttr("data-id") + '"></span>';
				t.insertAfter(e, UE.uNode.createElement("<br/>")), e.parentNode.replaceChild(UE.uNode.createElement(i), e)
			}
			n && n.indexOf("phimage") != -1 && (t.insertAfter(e, UE.uNode.createElement("<br/>")), t.remove(e))
		}), utils.each(r.getNodesByTagName("span"), function(e) {
			var n = e.getAttr("class");
			if(n && n.indexOf("qyer_video") != -1) {
				var i = e.getAttr("data-videotitle"),
					r = e.getAttr("data-title"),
					o = e.getAttr("data-videofrom"),
					s = e.getAttr("data-poster") || "",
					a = e.getAttr("data-live") || "",
					l = '<span data-type="video" data-live="' + a + '"  data-title="' + r + '" data-videofrom="' + o + '" data-poster="' + s + '" data-src="' + e.getAttr("data-url") + '" data-videotitle="' + i + '" data-osrc="' + e.getAttr("data-osrc") + '"></span>';
				t.insertAfter(e, UE.uNode.createElement("<br/>")), e.parentNode.replaceChild(UE.uNode.createElement(l), e)
			}
		}), utils.each(r.getNodesByTagName("span"), function(e) {
			var t = e.getAttr("class"),
				n = e.getAttr("data-key"),
				i = e.getAttr("data-id");
			if(t && t.indexOf("qyer_attach") != -1) {
				var r = n ? "data-key=" + n : i ? "data-id=" + i : "",
					o = '<span data-type="attach" ' + r + "></span>";
				e.parentNode.replaceChild(UE.uNode.createElement(o), e)
			}
		}))
	}), e.addInputRule(function(e) {
		utils.each(e.getNodesByTagName("br"), function(e) {
			var t = e.parentNode.children;
			1 != t.length && (e.tagName = "p", e.attrs = {})
		})
	}), e.addInputRule(function(e) {
		var t = /(color:.*?)(?:;|$)/i,
			n = /(font-weight:.*?)(?:;|$)/i;
		utils.each("span strong".split(" "), function(i) {
			utils.each(e.getNodesByTagName(i), function(e) {
				var i = e.getAttr("style") || "",
					r = i.match(t) || [],
					o = i.match(n) || [],
					s = r[1] || "",
					a = o[1] || "",
					l = [s, a].join("; ");
				e.setAttr("style", l)
			})
		})
	})
};
var baidu = baidu || {};
baidu.editor = baidu.editor || {}, UE.ui = baidu.editor.ui = {},
	function() {
		function e() {
			var e = document.getElementById("edui_fixedlayer");
			l.setViewportOffset(e, {
				left: 0,
				top: 0
			})
		}

		function t(t) {
			i.on(window, "scroll", e), i.on(window, "resize", baidu.editor.utils.defer(e, 0, !0))
		}
		var n = baidu.editor.browser,
			i = baidu.editor.dom.domUtils,
			r = "$EDITORUI",
			o = window[r] = {},
			s = "ID" + r,
			a = 0,
			l = baidu.editor.ui.uiUtils = {
				uid: function(e) {
					return e ? e[s] || (e[s] = ++a) : ++a
				},
				hook: function(e, t) {
					var n;
					return e && e._callbacks ? n = e : (n = function() {
						var t;
						e && (t = e.apply(this, arguments));
						for(var i = n._callbacks, r = i.length; r--;) {
							var o = i[r].apply(this, arguments);
							void 0 === t && (t = o)
						}
						return t
					}, n._callbacks = []), n._callbacks.push(t), n
				},
				createElementByHtml: function(e) {
					var t = document.createElement("div");
					return t.innerHTML = e, t = t.firstChild, t.parentNode.removeChild(t), t
				},
				getViewportElement: function() {
					return n.ie && n.quirks ? document.body : document.documentElement
				},
				getClientRect: function(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch(n) {
						t = {
							left: 0,
							top: 0,
							height: 0,
							width: 0
						}
					}
					for(var r, o = {
							left: Math.round(t.left),
							top: Math.round(t.top),
							height: Math.round(t.bottom - t.top),
							width: Math.round(t.right - t.left)
						};
						(r = e.ownerDocument) !== document && (e = i.getWindow(r).frameElement);) t = e.getBoundingClientRect(), o.left += t.left, o.top += t.top;
					return o.bottom = o.top + o.height, o.right = o.left + o.width, o
				},
				getViewportRect: function() {
					var e = l.getViewportElement(),
						t = 0 | (window.innerWidth || e.clientWidth),
						n = 0 | (window.innerHeight || e.clientHeight);
					return {
						left: 0,
						top: 0,
						height: n,
						width: t,
						bottom: n,
						right: t
					}
				},
				setViewportOffset: function(e, t) {
					var n = l.getFixedLayer();
					e.parentNode === n ? (e.style.left = t.left + "px", e.style.top = t.top + "px") : i.setViewportOffset(e, t)
				},
				getEventOffset: function(e) {
					var t = e.target || e.srcElement,
						n = l.getClientRect(t),
						i = l.getViewportOffsetByEvent(e);
					return {
						left: i.left - n.left,
						top: i.top - n.top
					}
				},
				getViewportOffsetByEvent: function(e) {
					var t = e.target || e.srcElement,
						n = i.getWindow(t).frameElement,
						r = {
							left: e.clientX,
							top: e.clientY
						};
					if(n && t.ownerDocument !== document) {
						var o = l.getClientRect(n);
						r.left += o.left, r.top += o.top
					}
					return r
				},
				setGlobal: function(e, t) {
					return o[e] = t, r + '["' + e + '"]'
				},
				unsetGlobal: function(e) {
					delete o[e]
				},
				copyAttributes: function(e, t) {
					for(var r = t.attributes, o = r.length; o--;) {
						var s = r[o];
						"style" == s.nodeName || "class" == s.nodeName || n.ie && !s.specified || e.setAttribute(s.nodeName, s.nodeValue)
					}
					t.className && i.addClass(e, t.className), t.style.cssText && (e.style.cssText += ";" + t.style.cssText)
				},
				removeStyle: function(e, t) {
					if(e.style.removeProperty) e.style.removeProperty(t);
					else {
						if(!e.style.removeAttribute) throw "";
						e.style.removeAttribute(t)
					}
				},
				contains: function(e, t) {
					return e && t && e !== t && (e.contains ? e.contains(t) : 16 & e.compareDocumentPosition(t))
				},
				startDrag: function(e, t, n) {
					function i(e) {
						var n = e.clientX - s,
							i = e.clientY - a;
						t.ondragmove(n, i, e), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
					}

					function r(e) {
						n.removeEventListener("mousemove", i, !0), n.removeEventListener("mouseup", r, !0), window.removeEventListener("mouseup", r, !0), t.ondragstop()
					}

					function o() {
						l.releaseCapture(), l.detachEvent("onmousemove", i), l.detachEvent("onmouseup", o), l.detachEvent("onlosecaptrue", o), t.ondragstop()
					}
					var n = n || document,
						s = e.clientX,
						a = e.clientY;
					if(n.addEventListener) n.addEventListener("mousemove", i, !0), n.addEventListener("mouseup", r, !0), window.addEventListener("mouseup", r, !0), e.preventDefault();
					else {
						var l = e.srcElement;
						l.setCapture(), l.attachEvent("onmousemove", i), l.attachEvent("onmouseup", o), l.attachEvent("onlosecaptrue", o), e.returnValue = !1
					}
					t.ondragstart()
				},
				getFixedLayer: function() {
					var i = document.getElementById("edui_fixedlayer");
					return null == i && (i = document.createElement("div"), i.id = "edui_fixedlayer", document.body.appendChild(i), n.ie && n.version <= 8 ? (i.style.position = "absolute", t(), setTimeout(e)) : i.style.position = "fixed", i.style.left = "0", i.style.top = "0", i.style.width = "0", i.style.height = "0"), i
				},
				makeUnselectable: function(e) {
					if(n.opera || n.ie && n.version < 9) {
						if(e.unselectable = "on", e.hasChildNodes())
							for(var t = 0; t < e.childNodes.length; t++) 1 == e.childNodes[t].nodeType && l.makeUnselectable(e.childNodes[t])
					} else void 0 !== e.style.MozUserSelect ? e.style.MozUserSelect = "none" : void 0 !== e.style.WebkitUserSelect ? e.style.WebkitUserSelect = "none" : void 0 !== e.style.KhtmlUserSelect && (e.style.KhtmlUserSelect = "none")
				}
			}
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.ui.uiUtils,
			n = baidu.editor.EventBase,
			i = baidu.editor.ui.UIBase = function() {};
		i.prototype = {
			className: "",
			uiName: "",
			initOptions: function(e) {
				var n = this;
				for(var i in e) n[i] = e[i];
				this.id = this.id || "edui" + t.uid()
			},
			initUIBase: function() {
				this._globalKey = e.unhtml(t.setGlobal(this.id, this))
			},
			render: function(e) {
				for(var n, i = this.renderHtml(), r = t.createElementByHtml(i), o = domUtils.getElementsByTagName(r, "*"), s = "edui-" + (this.theme || this.editor.options.theme), a = document.getElementById("edui_fixedlayer"), l = 0; n = o[l++];) domUtils.addClass(n, s);
				domUtils.addClass(r, s), a && (a.className = "", domUtils.addClass(a, s));
				var c = this.getDom();
				null != c ? (c.parentNode.replaceChild(r, c), t.copyAttributes(r, c)) : ("string" == typeof e && (e = document.getElementById(e)), e = e || t.getFixedLayer(), domUtils.addClass(e, s), e.appendChild(r)), this.postRender()
			},
			getDom: function(e) {
				return e ? document.getElementById(this.id + "_" + e) : document.getElementById(this.id)
			},
			postRender: function() {
				this.fireEvent("postrender")
			},
			getHtmlTpl: function() {
				return ""
			},
			formatHtml: function(e) {
				var t = "edui-" + this.uiName;
				return e.replace(/##/g, this.id).replace(/%%-/g, this.uiName ? t + "-" : "").replace(/%%/g, (this.uiName ? t : "") + " " + this.className).replace(/\$\$/g, this._globalKey)
			},
			renderHtml: function() {
				return this.formatHtml(this.getHtmlTpl())
			},
			dispose: function() {
				var e = this.getDom();
				e && baidu.editor.dom.domUtils.remove(e), t.unsetGlobal(this.id)
			}
		}, e.inherits(i, n)
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.ui.UIBase,
			n = baidu.editor.ui.Separator = function(e) {
				this.initOptions(e), this.initSeparator()
			};
		n.prototype = {
			uiName: "separator",
			initSeparator: function() {
				this.initUIBase()
			},
			getHtmlTpl: function() {
				return '<div id="##" class="edui-box %%"></div>'
			}
		}, e.inherits(n, t)
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.dom.domUtils,
			n = baidu.editor.ui.UIBase,
			i = baidu.editor.ui.uiUtils,
			r = baidu.editor.ui.Mask = function(e) {
				this.initOptions(e), this.initUIBase()
			};
		r.prototype = {
			getHtmlTpl: function() {
				return '<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>'
			},
			postRender: function() {
				var e = this;
				t.on(window, "resize", function() {
					setTimeout(function() {
						e.isHidden() || e._fill()
					})
				})
			},
			show: function(e) {
				this._fill(), this.getDom().style.display = "", this.getDom().style.zIndex = e
			},
			hide: function() {
				this.getDom().style.display = "none", this.getDom().style.zIndex = ""
			},
			isHidden: function() {
				return "none" == this.getDom().style.display
			},
			_onMouseDown: function() {
				return !1
			},
			_onClick: function(e, t) {
				this.fireEvent("click", e, t)
			},
			_fill: function() {
				var e = this.getDom(),
					t = i.getViewportRect();
				e.style.width = t.width + "px", e.style.height = t.height + "px"
			}
		}, e.inherits(r, n)
	}(),
	function() {
		function e(e, t) {
			for(var n = 0; n < s.length; n++) {
				var i = s[n];
				if(!i.isHidden() && i.queryAutoHide(t) !== !1) {
					if(e && /scroll/gi.test(e.type) && "edui-wordpastepop" == i.className) return;
					i.hide()
				}
			}
			s.length && i.editor.fireEvent("afterhidepop")
		}
		var t = baidu.editor.utils,
			n = baidu.editor.ui.uiUtils,
			i = baidu.editor.dom.domUtils,
			r = baidu.editor.ui.UIBase,
			o = baidu.editor.ui.Popup = function(e) {
				this.initOptions(e), this.initPopup()
			},
			s = [];
		o.postHide = e;
		var a = ["edui-anchor-topleft", "edui-anchor-topright", "edui-anchor-bottomleft", "edui-anchor-bottomright"];
		o.prototype = {
			SHADOW_RADIUS: 5,
			content: null,
			_hidden: !1,
			autoRender: !0,
			canSideLeft: !0,
			canSideUp: !0,
			initPopup: function() {
				this.initUIBase(), s.push(this)
			},
			getHtmlTpl: function() {
				return '<div id="##" class="edui-popup %%" > <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">' + this.getContentHtmlTpl() + "  </div> </div></div>"
			},
			getContentHtmlTpl: function() {
				return this.content ? "string" == typeof this.content ? this.content : this.content.renderHtml() : ""
			},
			_UIBase_postRender: r.prototype.postRender,
			postRender: function() {
				if(this.content instanceof r && this.content.postRender(), this.captureWheel && !this.captured) {
					this.captured = !0;
					var e = (document.documentElement.clientHeight || document.body.clientHeight) - 80,
						t = this.getDom().offsetHeight,
						o = n.getClientRect(this.combox.getDom()).top,
						s = this.getDom("content"),
						a = this.getDom("body").getElementsByTagName("iframe"),
						l = this;
					for(a.length && (a = a[0]); o + t > e;) t -= 30;
					s.style.height = t + "px", a && (a.style.height = t + "px"), window.XMLHttpRequest ? i.on(s, "onmousewheel" in document.body ? "mousewheel" : "DOMMouseScroll", function(e) {
						e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.wheelDelta ? s.scrollTop -= e.wheelDelta / 120 * 60 : s.scrollTop -= e.detail / -3 * 60
					}) : i.on(this.getDom(), "mousewheel", function(e) {
						e.returnValue = !1, l.getDom("content").scrollTop -= e.wheelDelta / 120 * 60
					})
				}
				this.fireEvent("postRenderAfter"), this.hide(!0), this._UIBase_postRender()
			},
			_doAutoRender: function() {
				!this.getDom() && this.autoRender && this.render()
			},
			mesureSize: function() {
				var e = this.getDom("content");
				return n.getClientRect(e)
			},
			fitSize: function() {
				if(this.captureWheel && this.sized) return this.__size;
				this.sized = !0;
				var e = this.getDom("body");
				e.style.width = "", e.style.height = "";
				var t = this.mesureSize();
				if(this.captureWheel) {
					e.style.width = -(-20 - t.width) + "px";
					var n = parseInt(this.getDom("content").style.height, 10);
					!window.isNaN(n) && (t.height = n)
				} else e.style.width = t.width + "px";
				return e.style.height = t.height + "px", this.__size = t, this.captureWheel && (this.getDom("content").style.overflow = "auto"), t
			},
			showAnchor: function(e, t) {
				this.showAnchorRect(n.getClientRect(e), t)
			},
			showAnchorRect: function(e, t, r) {
				this._doAutoRender();
				var o = n.getViewportRect();
				this.getDom().style.visibility = "hidden", this._show();
				var s, l, c, u, d = this.fitSize();
				t ? (s = this.canSideLeft && e.right + d.width > o.right && e.left > d.width, l = this.canSideUp && e.top + d.height > o.bottom && e.bottom > d.height, c = s ? e.left - d.width : e.right, u = l ? e.bottom - d.height : e.top) : (s = this.canSideLeft && e.right + d.width > o.right && e.left > d.width, l = this.canSideUp && e.top + d.height > o.bottom && e.bottom > d.height, c = s ? e.right - d.width : e.left, u = l ? e.top - d.height : e.bottom);
				var f = this.getDom();
				n.setViewportOffset(f, {
					left: c,
					top: u
				}), i.removeClasses(f, a), f.className += " " + a[2 * (l ? 1 : 0) + (s ? 1 : 0)], this.editor && (f.style.zIndex = 1 * this.editor.container.style.zIndex + 10, baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = f.style.zIndex - 1), this.getDom().style.visibility = "visible"
			},
			showAt: function(e) {
				var t = e.left,
					n = e.top,
					i = {
						left: t,
						top: n,
						right: t,
						bottom: n,
						height: 0,
						width: 0
					};
				this.showAnchorRect(i, !1, !0)
			},
			_show: function() {
				if(this._hidden) {
					var e = this.getDom();
					e.style.display = "", this._hidden = !1, this.fireEvent("show")
				}
			},
			isHidden: function() {
				return this._hidden
			},
			show: function() {
				this._doAutoRender(), this._show()
			},
			hide: function(e) {
				!this._hidden && this.getDom() && (this.getDom().style.display = "none", this._hidden = !0, e || this.fireEvent("hide"))
			},
			queryAutoHide: function(e) {
				return !e || !n.contains(this.getDom(), e)
			}
		}, t.inherits(o, r), i.on(document, "mousedown", function(t) {
			var n = t.target || t.srcElement;
			e(t, n)
		}), i.on(window, "scroll", function(t, n) {
			e(t, n)
		})
	}(),
	function() {
		var e = baidu.editor.browser,
			t = baidu.editor.dom.domUtils,
			n = baidu.editor.ui.uiUtils,
			i = 'onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"' + (e.ie ? ' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"' : ' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
		baidu.editor.ui.Stateful = {
			alwalysHoverable: !1,
			target: null,
			Stateful_init: function() {
				this._Stateful_dGetHtmlTpl = this.getHtmlTpl, this.getHtmlTpl = this.Stateful_getHtmlTpl
			},
			Stateful_getHtmlTpl: function() {
				var e = this._Stateful_dGetHtmlTpl();
				return e.replace(/stateful/g, function() {
					return i
				})
			},
			Stateful_onMouseEnter: function(e, t) {
				this.target = t, this.isDisabled() && !this.alwalysHoverable || (this.addState("hover"), this.fireEvent("over"))
			},
			Stateful_onMouseLeave: function(e, t) {
				this.isDisabled() && !this.alwalysHoverable || (this.removeState("hover"), this.removeState("active"), this.fireEvent("out"))
			},
			Stateful_onMouseOver: function(e, t) {
				var i = e.relatedTarget;
				n.contains(t, i) || t === i || this.Stateful_onMouseEnter(e, t)
			},
			Stateful_onMouseOut: function(e, t) {
				var i = e.relatedTarget;
				n.contains(t, i) || t === i || this.Stateful_onMouseLeave(e, t)
			},
			Stateful_onMouseDown: function(e, t) {
				this.isDisabled() || this.addState("active")
			},
			Stateful_onMouseUp: function(e, t) {
				this.isDisabled() || this.removeState("active")
			},
			Stateful_postRender: function() {
				this.disabled && !this.hasState("disabled") && this.addState("disabled")
			},
			hasState: function(e) {
				return t.hasClass(this.getStateDom(), "edui-state-" + e)
			},
			addState: function(e) {
				this.hasState(e) || (this.getStateDom().className += " edui-state-" + e)
			},
			removeState: function(e) {
				this.hasState(e) && t.removeClasses(this.getStateDom(), ["edui-state-" + e])
			},
			getStateDom: function() {
				return this.getDom("state")
			},
			isChecked: function() {
				return this.hasState("checked")
			},
			setChecked: function(e) {
				!this.isDisabled() && e ? this.addState("checked") : this.removeState("checked")
			},
			isDisabled: function() {
				return this.hasState("disabled")
			},
			setDisabled: function(e) {
				e ? (this.removeState("hover"), this.removeState("checked"), this.removeState("active"), this.addState("disabled")) : this.removeState("disabled")
			}
		}
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.ui.UIBase,
			n = baidu.editor.ui.Stateful,
			i = baidu.editor.ui.Button = function(e) {
				if(e.name) {
					var t = e.name,
						n = e.cssRules;
					e.className || (e.className = "edui-for-" + t), e.cssRules = ".edui-" + (e.theme || "default") + " .edui-toolbar .edui-button.edui-for-" + t + " .edui-icon {" + n + "}"
				}
				this.initOptions(e), this.initButton()
			};
		i.prototype = {
			uiName: "button",
			label: "",
			title: "",
			showIcon: !0,
			showText: !0,
			cssRules: "",
			initButton: function() {
				this.initUIBase(), this.Stateful_init(), this.cssRules && e.cssRule("edui-customize-" + this.name + "-style", this.cssRules)
			},
			getHtmlTpl: function() {
				return '<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : "") + ' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">' + (this.showIcon ? '<div class="edui-box edui-icon"></div>' : "") + (this.showText ? '<div class="edui-box edui-label">' + this.label + "</div>" : "") + "</div></div></div></div>"
			},
			postRender: function() {
				this.Stateful_postRender(), this.setDisabled(this.disabled)
			},
			_onMouseDown: function(e) {
				var t = e.target || e.srcElement,
					n = t && t.tagName && t.tagName.toLowerCase();
				if("input" == n || "object" == n || "object" == n) return !1
			},
			_onClick: function() {
				this.isDisabled() || this.fireEvent("click")
			},
			setTitle: function(e) {
				var t = this.getDom("label");
				t.innerHTML = e
			}
		}, e.inherits(i, t), e.extend(i.prototype, n)
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.ui.uiUtils,
			n = baidu.editor.ui.UIBase,
			i = baidu.editor.ui.Toolbar = function(e) {
				this.initOptions(e), this.initToolbar()
			};
		i.prototype = {
			items: null,
			initToolbar: function() {
				this.items = this.items || [], this.initUIBase()
			},
			add: function(e, t) {
				void 0 === t ? this.items.push(e) : this.items.splice(t, 0, e)
			},
			getHtmlTpl: function() {
				for(var e = [], t = 0; t < this.items.length; t++) e[t] = this.items[t].renderHtml();
				return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' + e.join("") + "</div>"
			},
			postRender: function() {
				for(var e = this.getDom(), n = 0; n < this.items.length; n++) this.items[n].postRender();
				t.makeUnselectable(e)
			},
			_onMouseDown: function(e) {
				var t = e.target || e.srcElement,
					n = t && t.tagName && t.tagName.toLowerCase();
				if("input" == n || "object" == n || "object" == n) return !1
			}
		}, e.inherits(i, n)
	}(),
	function() {
		var e, t, n, i = baidu.editor.utils,
			r = baidu.editor.dom.domUtils,
			o = baidu.editor.ui.uiUtils,
			s = baidu.editor.ui.Mask,
			a = baidu.editor.ui.UIBase,
			l = baidu.editor.ui.Button,
			c = baidu.editor.ui.Dialog = function(e) {
				if(e.name) {
					var t = e.name,
						n = e.cssRules;
					e.className || (e.className = "edui-for-" + t), n && (e.cssRules = ".edui-default .edui-for-" + t + " .edui-dialog-content  {" + n + "}")
				}
				this.initOptions(i.extend({
					autoReset: !0,
					draggable: !0,
					onok: function() {},
					oncancel: function() {},
					onclose: function(e, t) {
						return t ? this.onok() : this.oncancel()
					},
					holdScroll: !1
				}, e)), this.initDialog()
			};
		c.prototype = {
			draggable: !1,
			uiName: "dialog",
			initDialog: function() {
				var r = this,
					o = this.editor.options.theme;
				if(this.cssRules && i.cssRule("edui-customize-" + this.name + "-style", this.cssRules), this.initUIBase(), this.modalMask = e || (e = new s({
						className: "edui-dialog-modalmask",
						theme: o,
						onclick: function() {
							n && n.close(!1)
						}
					})), this.dragMask = t || (t = new s({
						className: "edui-dialog-dragmask",
						theme: o
					})), this.closeButton = new l({
						className: "edui-dialog-closebutton",
						title: r.closeDialog,
						theme: o,
						onclick: function() {
							r.close(!1)
						}
					}), this.fullscreen && this.initResizeEvent(), this.buttons)
					for(var a = 0; a < this.buttons.length; a++) this.buttons[a] instanceof l || (this.buttons[a] = new l(i.extend(this.buttons[a], {
						editor: this.editor
					}, !0)))
			},
			initResizeEvent: function() {
				var e = this;
				r.on(window, "resize", function() {
					e._hidden || void 0 === e._hidden || (e.__resizeTimer && window.clearTimeout(e.__resizeTimer), e.__resizeTimer = window.setTimeout(function() {
						e.__resizeTimer = null;
						var t = e.getDom(),
							n = e.getDom("content"),
							i = UE.ui.uiUtils.getClientRect(t),
							r = UE.ui.uiUtils.getClientRect(n),
							s = o.getViewportRect();
						n.style.width = s.width - i.width + r.width + "px", n.style.height = s.height - i.height + r.height + "px", t.style.width = s.width + "px", t.style.height = s.height + "px", e.fireEvent("resize")
					}, 100))
				})
			},
			fitSize: function() {
				var e = this.getDom("body"),
					t = this.mesureSize();
				return e.style.width = t.width + "px", e.style.height = t.height + "px", t
			},
			safeSetOffset: function(e) {
				var t = this,
					n = t.getDom(),
					i = o.getViewportRect(),
					r = o.getClientRect(n),
					s = e.left;
				s + r.width > i.right && (s = i.right - r.width);
				var a = e.top;
				a + r.height > i.bottom && (a = i.bottom - r.height), n.style.left = Math.max(s, 0) + "px", n.style.top = Math.max(a, 0) + "px"
			},
			showAtCenter: function() {
				var e = o.getViewportRect();
				if(this.fullscreen) {
					var t = this.getDom(),
						n = this.getDom("content");
					t.style.display = "block";
					var i = UE.ui.uiUtils.getClientRect(t),
						s = UE.ui.uiUtils.getClientRect(n);
					t.style.left = "-100000px", n.style.width = e.width - i.width + s.width + "px", n.style.height = e.height - i.height + s.height + "px", t.style.width = e.width + "px", t.style.height = e.height + "px", t.style.left = 0, this._originalContext = {
						html: {
							overflowX: document.documentElement.style.overflowX,
							overflowY: document.documentElement.style.overflowY
						},
						body: {
							overflowX: document.body.style.overflowX,
							overflowY: document.body.style.overflowY
						}
					}, document.documentElement.style.overflowX = "hidden", document.documentElement.style.overflowY = "hidden", document.body.style.overflowX = "hidden", document.body.style.overflowY = "hidden"
				} else {
					this.getDom().style.display = "";
					var a = this.fitSize(),
						l = 0 | this.getDom("titlebar").offsetHeight,
						c = e.width / 2 - a.width / 2,
						u = e.height / 2 - (a.height - l) / 2 - l,
						d = this.getDom();
					this.safeSetOffset({
						left: Math.max(0 | c, 0),
						top: Math.max(0 | u, 0)
					}), r.hasClass(d, "edui-state-centered") || (d.className += " edui-state-centered")
				}
				this._show()
			},
			getContentHtml: function() {
				var e = "";
				return "string" == typeof this.content ? e = this.content : this.iframeUrl && (e = '<span id="' + this.id + '_contmask" class="dialogcontmask"></span><iframe id="' + this.id + '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="' + this.iframeUrl + '"></iframe>'), e
			},
			getHtmlTpl: function() {
				var e = "";
				if(this.buttons) {
					for(var t = [], n = 0; n < this.buttons.length; n++) t[n] = this.buttons[n].renderHtml();
					e = '<div class="%%-foot"><div id="##_buttons" class="%%-buttons">' + t.join("") + "</div></div>"
				}
				return '<div id="##" class="%%"><div ' + (this.fullscreen ? 'class="%%-wrap edui-dialog-fullscreen-flag"' : 'class="%%"') + '><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">' + (this.title || "") + "</span></div>" + this.closeButton.renderHtml() + '</div><div id="##_content" class="%%-content">' + (this.autoReset ? "" : this.getContentHtml()) + "</div>" + e + "</div></div></div>"
			},
			postRender: function() {
				this.modalMask.getDom() || (this.modalMask.render(), this.modalMask.hide()), this.dragMask.getDom() || (this.dragMask.render(), this.dragMask.hide());
				var e = this;
				if(this.addListener("show", function() {
						e.modalMask.show(this.getDom().style.zIndex - 2)
					}), this.addListener("hide", function() {
						e.modalMask.hide()
					}), this.buttons)
					for(var t = 0; t < this.buttons.length; t++) this.buttons[t].postRender();
				r.on(window, "resize", function() {
					setTimeout(function() {
						e.isHidden() || e.safeSetOffset(o.getClientRect(e.getDom()))
					})
				}), this._hide()
			},
			mesureSize: function() {
				var e = this.getDom("body"),
					t = o.getClientRect(this.getDom("content")).width,
					n = e.style;
				return n.width = t, o.getClientRect(e)
			},
			_onTitlebarMouseDown: function(e, t) {
				if(this.draggable) {
					var n, i = (o.getViewportRect(), this);
					o.startDrag(e, {
						ondragstart: function() {
							n = o.getClientRect(i.getDom()), i.getDom("contmask").style.visibility = "visible", i.dragMask.show(i.getDom().style.zIndex - 1)
						},
						ondragmove: function(e, t) {
							var r = n.left + e,
								o = n.top + t;
							i.safeSetOffset({
								left: r,
								top: o
							})
						},
						ondragstop: function() {
							i.getDom("contmask").style.visibility = "hidden", r.removeClasses(i.getDom(), ["edui-state-centered"]), i.dragMask.hide()
						}
					})
				}
			},
			reset: function() {
				this.getDom("content").innerHTML = this.getContentHtml(), this.fireEvent("dialogafterreset")
			},
			_show: function() {
				this._hidden && (this.getDom().style.display = "", this.editor.container.style.zIndex && (this.getDom().style.zIndex = 1 * this.editor.container.style.zIndex + 10), this._hidden = !1, this.fireEvent("show"), baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4)
			},
			isHidden: function() {
				return this._hidden
			},
			_hide: function() {
				if(!this._hidden) {
					var e = this.getDom();
					e.style.display = "none", e.style.zIndex = "", e.style.width = "", e.style.height = "", this._hidden = !0, this.fireEvent("hide")
				}
			},
			open: function() {
				if(this.autoReset) try {
					this.reset()
				} catch(e) {
					this.render(), this.open()
				}
				if(this.showAtCenter(), this.iframeUrl) try {
					this.getDom("iframe").focus()
				} catch(t) {}
				n = this
			},
			_onCloseButtonClick: function(e, t) {
				this.close(!1)
			},
			close: function(e) {
				if(this.fireEvent("close", e) !== !1) {
					this.fullscreen && (document.documentElement.style.overflowX = this._originalContext.html.overflowX, document.documentElement.style.overflowY = this._originalContext.html.overflowY, document.body.style.overflowX = this._originalContext.body.overflowX, document.body.style.overflowY = this._originalContext.body.overflowY, delete this._originalContext), this._hide();
					var t = this.getDom("content"),
						n = this.getDom("iframe");
					if(t && n) {
						var i = n.contentDocument || n.contentWindow.document;
						i && (i.body.innerHTML = ""), r.remove(t)
					}
				}
			}
		}, i.inherits(c, a)
	}(),
	function() {
		function e(e) {
			var t = e.target || e.srcElement,
				n = s.findParent(t, function(e) {
					return s.hasClass(e, "edui-shortcutmenu") || s.hasClass(e, "edui-popup")
				}, !0);
			if(!n)
				for(var i, r = 0; i = a[r++];) i.hide()
		}
		var t, n = baidu.editor.ui,
			i = n.UIBase,
			r = n.uiUtils,
			o = baidu.editor.utils,
			s = baidu.editor.dom.domUtils,
			a = [],
			l = !1,
			c = n.ShortCutMenu = function(e) {
				this.initOptions(e), this.initShortCutMenu()
			};
		c.postHide = e, c.prototype = {
			isHidden: !0,
			SPACE: 5,
			initShortCutMenu: function() {
				this.items = this.items || [], this.initUIBase(), this.initItems(), this.initEvent(), a.push(this)
			},
			initEvent: function() {
				var e = this,
					n = e.editor.document;
				s.on(n, "mousemove", function(n) {
					if(e.isHidden === !1) {
						if(e.getSubMenuMark() || "contextmenu" == e.eventType) return;
						var i = !0,
							r = e.getDom(),
							o = r.offsetWidth,
							s = r.offsetHeight,
							a = o / 2 + e.SPACE,
							l = s / 2,
							c = Math.abs(n.screenX - e.left),
							u = Math.abs(n.screenY - e.top);
						clearTimeout(t), t = setTimeout(function() {
							u > 0 && u < l ? e.setOpacity(r, "1") : u > l && u < l + 70 ? (e.setOpacity(r, "0.5"), i = !1) : u > l + 70 && u < l + 140 && e.hide(), i && c > 0 && c < a ? e.setOpacity(r, "1") : c > a && c < a + 70 ? e.setOpacity(r, "0.5") : c > a + 70 && c < a + 140 && e.hide()
						})
					}
				}), browser.chrome && s.on(n, "mouseout", function(t) {
					var n = t.relatedTarget || t.toElement;
					null != n && "HTML" != n.tagName || e.hide();
				}), e.editor.addListener("afterhidepop", function() {
					e.isHidden || (l = !0)
				})
			},
			initItems: function() {
				if(o.isArray(this.items))
					for(var e = 0, t = this.items.length; e < t; e++) {
						var i = this.items[e].toLowerCase();
						n[i] && (this.items[e] = new n[i](this.editor), this.items[e].className += " edui-shortcutsubmenu ")
					}
			},
			setOpacity: function(e, t) {
				browser.ie && browser.version < 9 ? e.style.filter = "alpha(opacity = " + 100 * parseFloat(t) + ");" : e.style.opacity = t
			},
			getSubMenuMark: function() {
				l = !1;
				for(var e, t = r.getFixedLayer(), n = s.getElementsByTagName(t, "div", function(e) {
						return s.hasClass(e, "edui-shortcutsubmenu edui-popup")
					}), i = 0; e = n[i++];) "none" != e.style.display && (l = !0);
				return l
			},
			show: function(e, t) {
				function n(e) {
					e.left < 0 && (e.left = 0), e.top < 0 && (e.top = 0), l.style.cssText = "position:absolute;left:" + e.left + "px;top:" + e.top + "px;"
				}

				function i(e) {
					e.tagName || (e = e.getDom()), a.left = parseInt(e.style.left), a.top = parseInt(e.style.top), a.top -= l.offsetHeight + 15, n(a)
				}
				var o = this,
					a = {},
					l = this.getDom(),
					c = r.getFixedLayer();
				if(o.eventType = e.type, l.style.cssText = "display:block;left:-9999px", "contextmenu" == e.type && t) {
					var u = s.getElementsByTagName(c, "div", "edui-contextmenu")[0];
					u ? i(u) : o.editor.addListener("aftershowcontextmenu", function(e, t) {
						i(t)
					})
				} else a = r.getViewportOffsetByEvent(e), a.top -= l.offsetHeight + o.SPACE, a.left += o.SPACE + 20, n(a), o.setOpacity(l, .2);
				o.isHidden = !1, o.left = e.screenX + l.offsetWidth / 2 - o.SPACE, o.top = e.screenY - l.offsetHeight / 2 - o.SPACE, o.editor && (l.style.zIndex = 1 * o.editor.container.style.zIndex + 10, c.style.zIndex = l.style.zIndex - 1)
			},
			hide: function() {
				this.getDom() && (this.getDom().style.display = "none"), this.isHidden = !0
			},
			postRender: function() {
				if(o.isArray(this.items))
					for(var e, t = 0; e = this.items[t++];) e.postRender()
			},
			getHtmlTpl: function() {
				var e;
				if(o.isArray(this.items)) {
					e = [];
					for(var t = 0; t < this.items.length; t++) e[t] = this.items[t].renderHtml();
					e = e.join("")
				} else e = this.items;
				return '<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >' + e + "</div>"
			}
		}, o.inherits(c, i), s.on(document, "mousedown", function(t) {
			e(t)
		}), s.on(window, "scroll", function(t) {
			e(t)
		})
	}(),
	function() {
		var e = baidu.editor.utils,
			t = baidu.editor.ui,
			n = t.Dialog;
		t.buttons = {}, t.Dialog = function(e) {
			var t = new n(e);
			return t.addListener("hide", function() {
				if(t.editor) {
					var e = t.editor;
					try {
						if(browser.gecko) {
							var n = e.window.scrollY,
								i = e.window.scrollX;
							e.body.focus(), e.window.scrollTo(i, n)
						} else e.focus()
					} catch(r) {}
				}
			}), t
		};
		for(var i, r = {
				anchor: "~/dialogs/anchor/anchor.html",
				insertimage: "~/dialogs/image/image.html",
				link: "~/dialogs/link/link.html",
				spechars: "~/dialogs/spechars/spechars.html",
				searchreplace: "~/dialogs/searchreplace/searchreplace.html",
				map: "~/dialogs/map/map.html",
				gmap: "~/dialogs/gmap/gmap.html",
				insertvideo: "~/dialogs/video/video.html",
				help: "~/dialogs/help/help.html",
				preview: "~/dialogs/preview/preview.html",
				emotion: "~/dialogs/emotion/emotion.html",
				wordimage: "~/dialogs/wordimage/wordimage.html",
				attachment: "~/dialogs/attachment/attachment.html",
				insertframe: "~/dialogs/insertframe/insertframe.html",
				edittip: "~/dialogs/table/edittip.html",
				edittable: "~/dialogs/table/edittable.html",
				edittd: "~/dialogs/table/edittd.html",
				webapp: "~/dialogs/webapp/webapp.html",
				snapscreen: "~/dialogs/snapscreen/snapscreen.html",
				scrawl: "~/dialogs/scrawl/scrawl.html",
				music: "~/dialogs/music/music.html",
				template: "~/dialogs/template/template.html",
				background: "~/dialogs/background/background.html",
				charts: "~/dialogs/charts/charts.html"
			}, o = ["undo", "redo", "formatmatch", "bold", "italic", "underline", "fontborder", "touppercase", "tolowercase", "strikethrough", "subscript", "superscript", "source", "indent", "outdent", "blockquote", "pasteplain", "pagebreak", "selectall", "print", "horizontal", "removeformat", "time", "date", "unlink", "insertparagraphbeforetable", "insertrow", "insertcol", "mergeright", "mergedown", "deleterow", "deletecol", "splittorows", "splittocols", "splittocells", "mergecells", "deletetable", "drafts"], s = 0; i = o[s++];) i = i.toLowerCase(), t[i] = function(e) {
			return function(n) {
				var i = new t.Button({
					className: "edui-for-" + e,
					title: n.options.labelMap[e] || n.getLang("labelMap." + e) || "",
					onclick: function() {
						n.execCommand(e)
					},
					theme: n.options.theme,
					showText: !1
				});
				return t.buttons[e] = i, n.addListener("selectionchange", function(t, r, o) {
					var s = n.queryCommandState(e);
					s == -1 ? (i.setDisabled(!0), i.setChecked(!1)) : o || (i.setDisabled(!1), i.setChecked(s))
				}), i
			}
		}(i);
		t.cleardoc = function(e) {
			var n = new t.Button({
				className: "edui-for-cleardoc",
				title: e.options.labelMap.cleardoc || e.getLang("labelMap.cleardoc") || "",
				theme: e.options.theme,
				onclick: function() {
					confirm(e.getLang("confirmClear")) && e.execCommand("cleardoc")
				}
			});
			return t.buttons.cleardoc = n, e.addListener("selectionchange", function() {
				n.setDisabled(e.queryCommandState("cleardoc") == -1)
			}), n
		};
		var a = {
			justify: ["left", "right", "center", "justify"],
			imagefloat: ["none", "left", "center", "right"],
			directionality: ["ltr", "rtl"]
		};
		for(var l in a) ! function(e, n) {
			for(var i, r = 0; i = n[r++];) ! function(n) {
				t[e.replace("float", "") + n] = function(i) {
					var r = new t.Button({
						className: "edui-for-" + e.replace("float", "") + n,
						title: i.options.labelMap[e.replace("float", "") + n] || i.getLang("labelMap." + e.replace("float", "") + n) || "",
						theme: i.options.theme,
						onclick: function() {
							i.execCommand(e, n)
						}
					});
					return t.buttons[e] = r, i.addListener("selectionchange", function(t, o, s) {
						r.setDisabled(i.queryCommandState(e) == -1), r.setChecked(i.queryCommandValue(e) == n && !s)
					}), r
				}
			}(i)
		}(l, a[l]);
		for(var i, s = 0; i = ["backcolor", "forecolor"][s++];) t[i] = function(e) {
			return function(n) {
				var i = new t.ColorButton({
					className: "edui-for-" + e,
					color: "default",
					title: n.options.labelMap[e] || n.getLang("labelMap." + e) || "",
					editor: n,
					onpickcolor: function(t, i) {
						n.execCommand(e, i)
					},
					onpicknocolor: function() {
						n.execCommand(e, "default"), this.setColor("transparent"), this.color = "default"
					},
					onbuttonclick: function() {
						n.execCommand(e, this.color)
					}
				});
				return t.buttons[e] = i, n.addListener("selectionchange", function() {
					i.setDisabled(n.queryCommandState(e) == -1)
				}), i
			}
		}(i);
		var c = {
			noOk: ["searchreplace", "help", "spechars", "webapp", "preview"],
			ok: ["attachment", "anchor", "link", "insertimage", "map", "gmap", "insertframe", "wordimage", "insertvideo", "insertframe", "edittip", "edittable", "edittd", "scrawl", "template", "music", "background", "charts"]
		};
		for(var l in c) ! function(n, i) {
			for(var o, s = 0; o = i[s++];) browser.opera && "searchreplace" === o || ! function(i) {
				t[i] = function(o, s, a) {
					s = s || (o.options.iframeUrlMap || {})[i] || r[i], a = o.options.labelMap[i] || o.getLang("labelMap." + i) || "";
					var l;
					s && (l = new t.Dialog(e.extend({
						iframeUrl: o.ui.mapUrl(s),
						editor: o,
						className: "edui-for-" + i,
						title: a,
						holdScroll: "insertimage" === i,
						fullscreen: /charts|preview/.test(i),
						closeDialog: o.getLang("closeDialog")
					}, "ok" == n ? {
						buttons: [{
							className: "edui-okbutton",
							label: o.getLang("ok"),
							editor: o,
							onclick: function() {
								l.close(!0)
							}
						}, {
							className: "edui-cancelbutton",
							label: o.getLang("cancel"),
							editor: o,
							onclick: function() {
								l.close(!1)
							}
						}]
					} : {})), o.ui._dialogs[i + "Dialog"] = l);
					var c = new t.Button({
						className: "edui-for-" + i,
						title: a,
						onclick: function() {
							if(l) switch(i) {
								case "wordimage":
									var e = o.execCommand("wordimage");
									e && e.length && (l.render(), l.open());
									break;
								case "scrawl":
									o.queryCommandState("scrawl") != -1 && (l.render(), l.open());
									break;
								default:
									l.render(), l.open()
							}
						},
						theme: o.options.theme,
						disabled: "scrawl" == i && o.queryCommandState("scrawl") == -1 || "charts" == i
					});
					return t.buttons[i] = c, o.addListener("selectionchange", function() {
						var e = {
							edittable: 1
						};
						if(!(i in e)) {
							var t = o.queryCommandState(i);
							c.getDom() && (c.setDisabled(t == -1), c.setChecked(t))
						}
					}), c
				}
			}(o.toLowerCase())
		}(l, c[l]);
		t.snapscreen = function(e, n, i) {
			i = e.options.labelMap.snapscreen || e.getLang("labelMap.snapscreen") || "";
			var o = new t.Button({
				className: "edui-for-snapscreen",
				title: i,
				onclick: function() {
					e.execCommand("snapscreen")
				},
				theme: e.options.theme
			});
			if(t.buttons.snapscreen = o, n = n || (e.options.iframeUrlMap || {}).snapscreen || r.snapscreen) {
				var s = new t.Dialog({
					iframeUrl: e.ui.mapUrl(n),
					editor: e,
					className: "edui-for-snapscreen",
					title: i,
					buttons: [{
						className: "edui-okbutton",
						label: e.getLang("ok"),
						editor: e,
						onclick: function() {
							s.close(!0)
						}
					}, {
						className: "edui-cancelbutton",
						label: e.getLang("cancel"),
						editor: e,
						onclick: function() {
							s.close(!1)
						}
					}]
				});
				s.render(), e.ui._dialogs.snapscreenDialog = s
			}
			return e.addListener("selectionchange", function() {
				o.setDisabled(e.queryCommandState("snapscreen") == -1)
			}), o
		}, t.insertcode = function(n, i, r) {
			i = n.options.insertcode || [], r = n.options.labelMap.insertcode || n.getLang("labelMap.insertcode") || "";
			var o = [];
			e.each(i, function(e, t) {
				o.push({
					label: e,
					value: t,
					theme: n.options.theme,
					renderLabelHtml: function() {
						return '<div class="edui-label %%-label" >' + (this.label || "") + "</div>"
					}
				})
			});
			var s = new t.Combox({
				editor: n,
				items: o,
				onselect: function(e, t) {
					n.execCommand("insertcode", this.items[t].value)
				},
				onbuttonclick: function() {
					this.showPopup()
				},
				title: r,
				initValue: r,
				className: "edui-for-insertcode",
				indexByValue: function(e) {
					if(e)
						for(var t, n = 0; t = this.items[n]; n++)
							if(t.value.indexOf(e) != -1) return n;
					return -1
				}
			});
			return t.buttons.insertcode = s, n.addListener("selectionchange", function(e, t, i) {
				if(!i) {
					var o = n.queryCommandState("insertcode");
					if(o == -1) s.setDisabled(!0);
					else {
						s.setDisabled(!1);
						var a = n.queryCommandValue("insertcode");
						if(!a) return void s.setValue(r);
						a && (a = a.replace(/['"]/g, "").split(",")[0]), s.setValue(a)
					}
				}
			}), s
		}, t.fontfamily = function(n, i, r) {
			if(i = n.options.fontfamily || [], r = n.options.labelMap.fontfamily || n.getLang("labelMap.fontfamily") || "", i.length) {
				for(var o, s = 0, a = []; o = i[s]; s++) {
					var l = n.getLang("fontfamily")[o.name] || "";
					! function(t, i) {
						a.push({
							label: t,
							value: i,
							theme: n.options.theme,
							renderLabelHtml: function() {
								return '<div class="edui-label %%-label" style="font-family:' + e.unhtml(this.value) + '">' + (this.label || "") + "</div>"
							}
						})
					}(o.label || l, o.val)
				}
				var c = new t.Combox({
					editor: n,
					items: a,
					onselect: function(e, t) {
						n.execCommand("FontFamily", this.items[t].value)
					},
					onbuttonclick: function() {
						this.showPopup()
					},
					title: r,
					initValue: r,
					className: "edui-for-fontfamily",
					indexByValue: function(e) {
						if(e)
							for(var t, n = 0; t = this.items[n]; n++)
								if(t.value.indexOf(e) != -1) return n;
						return -1
					}
				});
				return t.buttons.fontfamily = c, n.addListener("selectionchange", function(e, t, i) {
					if(!i) {
						var r = n.queryCommandState("FontFamily");
						if(r == -1) c.setDisabled(!0);
						else {
							c.setDisabled(!1);
							var o = n.queryCommandValue("FontFamily");
							o && (o = o.replace(/['"]/g, "").split(",")[0]), c.setValue(o)
						}
					}
				}), c
			}
		}, t.fontsize = function(e, n, i) {
			if(i = e.options.labelMap.fontsize || e.getLang("labelMap.fontsize") || "", n = n || e.options.fontsize || [], n.length) {
				for(var r = [], o = 0; o < n.length; o++) {
					var s = n[o] + "px";
					r.push({
						label: s,
						value: s,
						theme: e.options.theme,
						renderLabelHtml: function() {
							return '<div class="edui-label %%-label" style="line-height:1;font-size:' + this.value + '">' + (this.label || "") + "</div>"
						}
					})
				}
				var a = new t.Combox({
					editor: e,
					items: r,
					title: i,
					initValue: i,
					onselect: function(t, n) {
						e.execCommand("FontSize", this.items[n].value)
					},
					onbuttonclick: function() {
						this.showPopup()
					},
					className: "edui-for-fontsize"
				});
				return t.buttons.fontsize = a, e.addListener("selectionchange", function(t, n, i) {
					if(!i) {
						var r = e.queryCommandState("FontSize");
						r == -1 ? a.setDisabled(!0) : (a.setDisabled(!1), a.setValue(e.queryCommandValue("FontSize")))
					}
				}), a
			}
		}, t.paragraph = function(n, i, r) {
			if(r = n.options.labelMap.paragraph || n.getLang("labelMap.paragraph") || "", i = n.options.paragraph || [], !e.isEmptyObject(i)) {
				var o = [];
				for(var s in i) o.push({
					value: s,
					label: i[s] || n.getLang("paragraph")[s],
					theme: n.options.theme,
					renderLabelHtml: function() {
						return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || "") + "</span></div>"
					}
				});
				var a = new t.Combox({
					editor: n,
					items: o,
					title: r,
					initValue: r,
					className: "edui-for-paragraph",
					onselect: function(e, t) {
						n.execCommand("Paragraph", this.items[t].value)
					},
					onbuttonclick: function() {
						this.showPopup()
					}
				});
				return t.buttons.paragraph = a, n.addListener("selectionchange", function(e, t, i) {
					if(!i) {
						var r = n.queryCommandState("Paragraph");
						if(r == -1) a.setDisabled(!0);
						else {
							a.setDisabled(!1);
							var o = n.queryCommandValue("Paragraph"),
								s = a.indexByValue(o);
							s != -1 ? a.setValue(o) : a.setValue(a.initValue)
						}
					}
				}), a
			}
		}, t.customstyle = function(e) {
			var n = e.options.customstyle || [],
				i = e.options.labelMap.customstyle || e.getLang("labelMap.customstyle") || "";
			if(n.length) {
				for(var r, o = e.getLang("customstyle"), s = 0, a = []; r = n[s++];) ! function(t) {
					var n = {};
					n.label = t.label ? t.label : o[t.name], n.style = t.style, n.className = t.className, n.tag = t.tag, a.push({
						label: n.label,
						value: n,
						theme: e.options.theme,
						renderLabelHtml: function() {
							return '<div class="edui-label %%-label"><' + n.tag + " " + (n.className ? ' class="' + n.className + '"' : "") + (n.style ? ' style="' + n.style + '"' : "") + ">" + n.label + "</" + n.tag + "></div>"
						}
					})
				}(r);
				var l = new t.Combox({
					editor: e,
					items: a,
					title: i,
					initValue: i,
					className: "edui-for-customstyle",
					onselect: function(t, n) {
						e.execCommand("customstyle", this.items[n].value)
					},
					onbuttonclick: function() {
						this.showPopup()
					},
					indexByValue: function(e) {
						for(var t, n = 0; t = this.items[n++];)
							if(t.label == e) return n - 1;
						return -1
					}
				});
				return t.buttons.customstyle = l, e.addListener("selectionchange", function(t, n, i) {
					if(!i) {
						var r = e.queryCommandState("customstyle");
						if(r == -1) l.setDisabled(!0);
						else {
							l.setDisabled(!1);
							var o = e.queryCommandValue("customstyle"),
								s = l.indexByValue(o);
							s != -1 ? l.setValue(o) : l.setValue(l.initValue)
						}
					}
				}), l
			}
		}, t.inserttable = function(e, n, i) {
			i = e.options.labelMap.inserttable || e.getLang("labelMap.inserttable") || "";
			var r = new t.TableButton({
				editor: e,
				title: i,
				className: "edui-for-inserttable",
				onpicktable: function(t, n, i) {
					e.execCommand("InsertTable", {
						numRows: i,
						numCols: n,
						border: 1
					})
				},
				onbuttonclick: function() {
					this.showPopup()
				}
			});
			return t.buttons.inserttable = r, e.addListener("selectionchange", function() {
				r.setDisabled(e.queryCommandState("inserttable") == -1)
			}), r
		}, t.lineheight = function(e) {
			var n = e.options.lineheight || [];
			if(n.length) {
				for(var i, r = 0, o = []; i = n[r++];) o.push({
					label: i,
					value: i,
					theme: e.options.theme,
					onclick: function() {
						e.execCommand("lineheight", this.value)
					}
				});
				var s = new t.MenuButton({
					editor: e,
					className: "edui-for-lineheight",
					title: e.options.labelMap.lineheight || e.getLang("labelMap.lineheight") || "",
					items: o,
					onbuttonclick: function() {
						var t = e.queryCommandValue("LineHeight") || this.value;
						e.execCommand("LineHeight", t)
					}
				});
				return t.buttons.lineheight = s, e.addListener("selectionchange", function() {
					var t = e.queryCommandState("LineHeight");
					if(t == -1) s.setDisabled(!0);
					else {
						s.setDisabled(!1);
						var n = e.queryCommandValue("LineHeight");
						n && s.setValue((n + "").replace(/cm/, "")), s.setChecked(t)
					}
				}), s
			}
		};
		for(var u, d = ["top", "bottom"], f = 0; u = d[f++];) ! function(e) {
			t["rowspacing" + e] = function(n) {
				var i = n.options["rowspacing" + e] || [];
				if(!i.length) return null;
				for(var r, o = 0, s = []; r = i[o++];) s.push({
					label: r,
					value: r,
					theme: n.options.theme,
					onclick: function() {
						n.execCommand("rowspacing", this.value, e)
					}
				});
				var a = new t.MenuButton({
					editor: n,
					className: "edui-for-rowspacing" + e,
					title: n.options.labelMap["rowspacing" + e] || n.getLang("labelMap.rowspacing" + e) || "",
					items: s,
					onbuttonclick: function() {
						var t = n.queryCommandValue("rowspacing", e) || this.value;
						n.execCommand("rowspacing", t, e)
					}
				});
				return t.buttons[e] = a, n.addListener("selectionchange", function() {
					var t = n.queryCommandState("rowspacing", e);
					if(t == -1) a.setDisabled(!0);
					else {
						a.setDisabled(!1);
						var i = n.queryCommandValue("rowspacing", e);
						i && a.setValue((i + "").replace(/%/, "")), a.setChecked(t)
					}
				}), a
			}
		}(u);
		for(var h, p = ["insertorderedlist", "insertunorderedlist"], m = 0; h = p[m++];) ! function(e) {
			t[e] = function(n) {
				var i = n.options[e],
					r = function() {
						n.execCommand(e, this.value)
					},
					o = [];
				for(var s in i) o.push({
					label: i[s] || n.getLang()[e][s] || "",
					value: s,
					theme: n.options.theme,
					onclick: r
				});
				var a = new t.MenuButton({
					editor: n,
					className: "edui-for-" + e,
					title: n.getLang("labelMap." + e) || "",
					items: o,
					onbuttonclick: function() {
						var t = n.queryCommandValue(e) || this.value;
						n.execCommand(e, t)
					}
				});
				return t.buttons[e] = a, n.addListener("selectionchange", function() {
					var t = n.queryCommandState(e);
					if(t == -1) a.setDisabled(!0);
					else {
						a.setDisabled(!1);
						var i = n.queryCommandValue(e);
						a.setValue(i), a.setChecked(t)
					}
				}), a
			}
		}(h);
		t.fullscreen = function(e, n) {
			n = e.options.labelMap.fullscreen || e.getLang("labelMap.fullscreen") || "";
			var i = new t.Button({
				className: "edui-for-fullscreen",
				title: n,
				theme: e.options.theme,
				onclick: function() {
					e.ui && e.ui.setFullScreen(!e.ui.isFullScreen()), this.setChecked(e.ui.isFullScreen())
				}
			});
			return t.buttons.fullscreen = i, e.addListener("selectionchange", function() {
				var t = e.queryCommandState("fullscreen");
				i.setDisabled(t == -1), i.setChecked(e.ui.isFullScreen())
			}), i
		}, t.emotion = function(e, n) {
			var i = "emotion",
				o = new t.MultiMenuPop({
					title: e.options.labelMap[i] || e.getLang("labelMap." + i) || "",
					editor: e,
					className: "edui-for-" + i,
					iframeUrl: e.ui.mapUrl(n || (e.options.iframeUrlMap || {})[i] || r[i])
				});
			return t.buttons[i] = o, e.addListener("selectionchange", function() {
				o.setDisabled(e.queryCommandState(i) == -1)
			}), o
		}, t.autotypeset = function(e) {
			var n = new t.AutoTypeSetButton({
				editor: e,
				title: e.options.labelMap.autotypeset || e.getLang("labelMap.autotypeset") || "",
				className: "edui-for-autotypeset",
				onbuttonclick: function() {
					e.execCommand("autotypeset")
				}
			});
			return t.buttons.autotypeset = n, e.addListener("selectionchange", function() {
				n.setDisabled(e.queryCommandState("autotypeset") == -1)
			}), n
		}, t.simpleupload = function(e) {
			var n = "simpleupload",
				i = new t.Button({
					className: "edui-for-" + n,
					title: e.options.labelMap[n] || e.getLang("labelMap." + n) || "",
					onclick: function() {},
					theme: e.options.theme,
					showText: !1
				});
			return t.buttons[n] = i, e.addListener("ready", function() {
				var t = i.getDom("body"),
					n = t.children[0];
				e.fireEvent("simpleuploadbtnready", n)
			}), e.addListener("selectionchange", function(t, r, o) {
				var s = e.queryCommandState(n);
				s == -1 ? (i.setDisabled(!0), i.setChecked(!1)) : o || (i.setDisabled(!1), i.setChecked(s))
			}), i
		}
	}(),
	function() {
		function e(e) {
			this.initOptions(e), this.initEditorUI()
		}
		var t = baidu.editor.utils,
			n = baidu.editor.ui.uiUtils,
			i = baidu.editor.ui.UIBase,
			r = baidu.editor.dom.domUtils,
			o = [];
		e.prototype = {
			uiName: "editor",
			initEditorUI: function() {
				function e(e, t) {
					e.setOpt({
						wordCount: !0,
						maximumWords: 1e4,
						wordCountMsg: e.options.wordCountMsg || e.getLang("wordCountMsg"),
						wordOverFlowMsg: e.options.wordOverFlowMsg || e.getLang("wordOverFlowMsg")
					});
					var n = e.options,
						i = n.maximumWords,
						r = n.wordCountMsg,
						o = n.wordOverFlowMsg,
						s = t.getDom("wordcount");
					if(n.wordCount) {
						var a = e.getContentLength(!0);
						a > i ? (s.innerHTML = o, e.fireEvent("wordcountoverflow")) : s.innerHTML = r.replace("{#leave}", i - a).replace("{#count}", a)
					}
				}
				this.editor.ui = this, this._dialogs = {}, this.initUIBase(), this._initToolbars();
				var t = this.editor,
					n = this;
				t.addListener("ready", function() {
					function i() {
						e(t, n), r.un(t.document, "click", arguments.callee)
					}
					t.getDialog = function(e) {
						return t.ui._dialogs[e + "Dialog"]
					}, r.on(t.window, "scroll", function(e) {
						baidu.editor.ui.Popup.postHide(e)
					}), t.ui._actualFrameWidth = t.options.initialFrameWidth, UE.browser.ie && 6 === UE.browser.version && t.container.ownerDocument.execCommand("BackgroundImageCache", !1, !0), t.options.elementPathEnabled && (t.ui.getDom("elementpath").innerHTML = '<div class="edui-editor-breadcrumb">' + t.getLang("elementPathTip") + ":</div>"), t.options.wordCount && (r.on(t.document, "click", i), t.ui.getDom("wordcount").innerHTML = t.getLang("wordCountTip")), t.ui._scale(), t.options.scaleEnabled ? (t.autoHeightEnabled && t.disableAutoHeight(), n.enableScale()) : n.disableScale(), t.options.elementPathEnabled || t.options.wordCount || t.options.scaleEnabled || (t.ui.getDom("elementpath").style.display = "none", t.ui.getDom("wordcount").style.display = "none", t.ui.getDom("scale").style.display = "none"), t.selection.isFocus() && t.fireEvent("selectionchange", !1, !0)
				}), t.addListener("mousedown", function(e, t) {
					var n = t.target || t.srcElement;
					baidu.editor.ui.Popup.postHide(t, n), baidu.editor.ui.ShortCutMenu.postHide(t)
				}), t.addListener("delcells", function() {
					UE.ui.edittip && new UE.ui.edittip(t), t.getDialog("edittip").open()
				});
				var i, o, s = !1;
				t.addListener("afterpaste", function() {
					t.queryCommandState("pasteplain") || (baidu.editor.ui.PastePicker && (i = new baidu.editor.ui.Popup({
						content: new baidu.editor.ui.PastePicker({
							editor: t
						}),
						editor: t,
						className: "edui-wordpastepop"
					}), i.render()), s = !0)
				}), t.addListener("afterinserthtml", function() {
					clearTimeout(o), o = setTimeout(function() {
						if(i && (s || t.ui._isTransfer)) {
							if(i.isHidden()) {
								var e = r.createElement(t.document, "span", {
										style: "line-height:0px;",
										innerHTML: "\ufeff"
									}),
									n = t.selection.getRange();
								n.insertNode(e);
								var o = getDomNode(e, "firstChild", "previousSibling");
								o && i.showAnchor(3 == o.nodeType ? o.parentNode : o), r.remove(e)
							} else i.show();
							delete t.ui._isTransfer, s = !1
						}
					}, 200)
				}), t.addListener("contextmenu", function(e, t) {
					baidu.editor.ui.Popup.postHide(t)
				}), t.addListener("keydown", function(e, t) {
					i && i.dispose(t);
					var n = t.keyCode || t.which;
					t.altKey && 90 == n && UE.ui.buttons.fullscreen.onclick()
				}), t.addListener("wordcount", function(t) {
					e(this, n)
				}), t.addListener("selectionchange", function() {
					t.options.elementPathEnabled && n[(t.queryCommandState("elementpath") == -1 ? "dis" : "en") + "ableElementPath"](), t.options.scaleEnabled && n[(t.queryCommandState("scale") == -1 ? "dis" : "en") + "ableScale"]()
				});
				var a = new baidu.editor.ui.Popup({
					editor: t,
					content: "",
					className: "edui-bubble",
					_onEditButtonClick: function() {
						this.hide(), t.ui._dialogs.linkDialog.open()
					},
					_onImgEditButtonClick: function(e) {
						this.hide(), t.ui._dialogs[e] && t.ui._dialogs[e].open()
					},
					_onImgSetFloat: function(e) {
						this.hide(), t.execCommand("imagefloat", e)
					},
					_setIframeAlign: function(e) {
						var t = a.anchorEl,
							n = t.cloneNode(!0);
						switch(e) {
							case -2:
								n.setAttribute("align", "");
								break;
							case -1:
								n.setAttribute("align", "left");
								break;
							case 1:
								n.setAttribute("align", "right")
						}
						t.parentNode.insertBefore(n, t), r.remove(t), a.anchorEl = n, a.showAnchor(a.anchorEl)
					},
					_updateIframe: function() {
						var e = t._iframe = a.anchorEl;
						r.hasClass(e, "ueditor_baidumap") ? (t.selection.getRange().selectNode(e).select(), t.ui._dialogs.mapDialog.open(), a.hide()) : (t.ui._dialogs.insertframeDialog.open(), a.hide())
					},
					_onRemoveButtonClick: function(e) {
						t.execCommand(e), this.hide()
					},
					queryAutoHide: function(e) {
						return e && e.ownerDocument == t.document && ("img" == e.tagName.toLowerCase() || r.findParentByTagName(e, "a", !0)) ? e !== a.anchorEl : baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, e)
					}
				});
				a.render(), t.options.imagePopup && (t.addListener("mouseover", function(e, n) {
					n = n || window.event;
					var i = n.target || n.srcElement;
					if(t.ui._dialogs.insertframeDialog && /iframe/gi.test(i.tagName)) {
						var r = a.formatHtml("<nobr>" + t.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + t.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + t.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + t.getLang("justifyright") + '</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">' + t.getLang("modify") + "</span></nobr>");
						r ? (a.getDom("content").innerHTML = r, a.anchorEl = i, a.showAnchor(a.anchorEl)) : a.hide()
					}
				}), t.addListener("selectionchange", function(e, n) {
					if(n) {
						var i = "",
							o = "",
							s = t.selection.getRange().getClosedNode(),
							l = t.ui._dialogs;
						if(s && "IMG" == s.tagName) {
							var c = "insertimageDialog";
							if(s.className.indexOf("edui-faked-video") == -1 && s.className.indexOf("edui-upload-video") == -1 || (c = "insertvideoDialog"), s.className.indexOf("edui-faked-webapp") != -1 && (c = "webappDialog"), s.src.indexOf("http://api.map.baidu.com") != -1 && (c = "mapDialog"), s.className.indexOf("edui-faked-music") != -1 && (c = "musicDialog"), s.src.indexOf("http://maps.google.com/maps/api/staticmap") != -1 && (c = "gmapDialog"), s.getAttribute("anchorname") && (c = "anchorDialog", i = a.formatHtml("<nobr>" + t.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + t.getLang("modify") + "</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">" + t.getLang("delete") + "</span></nobr>")), s.getAttribute("word_img") && (t.word_img = [s.getAttribute("word_img")], c = "wordimageDialog"), (r.hasClass(s, "loadingclass") || r.hasClass(s, "loaderrorclass")) && (c = ""), !l[c]) return;
							o = "<nobr>" + t.getLang("property") + ': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + t.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + t.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + t.getLang("justifyright") + '</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + t.getLang("justifycenter") + "</span>&nbsp;&nbsp;<span onclick=\"$$._onImgEditButtonClick('" + c + '\');" class="edui-clickable">' + t.getLang("modify") + "</span></nobr>", !i && (i = a.formatHtml(o))
						}
						if(t.ui._dialogs.linkDialog) {
							var u, d = t.queryCommandValue("link");
							if(d && (u = d.getAttribute("_href") || d.getAttribute("href", 2))) {
								var f = u;
								u.length > 30 && (f = u.substring(0, 20) + "..."), i && (i += '<div style="height:5px;"></div>'), i += a.formatHtml("<nobr>" + t.getLang("anthorMsg") + ': <a target="_blank" href="' + u + '" title="' + u + '" >' + f + '</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + t.getLang("modify") + '</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + t.getLang("clear") + "</span></nobr>"), a.showAnchor(d)
							}
						}
						i ? (a.getDom("content").innerHTML = i, a.anchorEl = s || d, a.showAnchor(a.anchorEl)) : a.hide()
					}
				}))
			},
			_initToolbars: function() {
				for(var e = this.editor, n = this.toolbars || [], i = [], r = [], o = 0; o < n.length; o++) {
					for(var s = n[o], a = new baidu.editor.ui.Toolbar({
							theme: e.options.theme
						}), l = 0; l < s.length; l++) {
						var c = s[l],
							u = null;
						if("string" == typeof c) {
							c = c.toLowerCase(), "|" == c && (c = "Separator"), "||" == c && (c = "Breakline");
							var d = baidu.editor.ui[c];
							if(d)
								if(t.isFunction(d)) u = new baidu.editor.ui[c](e);
								else {
									if(d.id && d.id != e.key) continue;
									var f = d.execFn.call(e, e, c);
									if(f) {
										if(void 0 === d.index) {
											a.add(f);
											continue
										}
										r.push({
											index: d.index,
											itemUI: f
										})
									}
								}
							if("fullscreen" == c) {
								i && i[0] ? i[0].items.splice(0, 0, u) : u && a.items.splice(0, 0, u);
								continue
							}
						} else u = c;
						u && u.id && a.add(u)
					}
					i[o] = a
				}
				t.each(r, function(e) {
					a.add(e.itemUI, e.index)
				}), this.toolbars = i
			},
			getHtmlTpl: function() {
				return '<div id="##" class="%%"><div id="##_toolbarbox" class="%%-toolbarbox">' + (this.toolbars.length ? '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' + this.renderToolbarBoxHtml() + "</div></div>" : "") + '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div><div id="##_message_holder" class="%%-messageholder"></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div>'
			},
			showWordImageDialog: function() {
				this._dialogs.wordimageDialog.open()
			},
			renderToolbarBoxHtml: function() {
				for(var e = [], t = 0; t < this.toolbars.length; t++) e.push(this.toolbars[t].renderHtml());
				return e.join("")
			},
			setFullScreen: function(e) {
				var t = this.editor,
					n = t.container.parentNode.parentNode;
				if(this._fullscreen != e) {
					if(this._fullscreen = e, this.editor.fireEvent("beforefullscreenchange", e), baidu.editor.browser.gecko) var i = t.selection.getRange().createBookmark();
					if(e) {
						for(;
							"BODY" != n.tagName;) {
							var r = baidu.editor.dom.domUtils.getComputedStyle(n, "position");
							o.push(r), n.style.position = "static", n = n.parentNode
						}
						this._bakHtmlOverflow = document.documentElement.style.overflow, this._bakBodyOverflow = document.body.style.overflow, this._bakAutoHeight = this.editor.autoHeightEnabled, this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop), this._bakEditorContaninerWidth = t.iframe.parentNode.offsetWidth, this._bakAutoHeight && (t.autoHeightEnabled = !1, this.editor.disableAutoHeight()), document.documentElement.style.overflow = "hidden", window.scrollTo(0, window.scrollY), this._bakCssText = this.getDom().style.cssText, this._bakCssText1 = this.getDom("iframeholder").style.cssText, t.iframe.parentNode.style.width = "", this._updateFullScreen()
					} else {
						for(;
							"BODY" != n.tagName;) n.style.position = o.shift(), n = n.parentNode;
						this.getDom().style.cssText = this._bakCssText, this.getDom("iframeholder").style.cssText = this._bakCssText1, this._bakAutoHeight && (t.autoHeightEnabled = !0, this.editor.enableAutoHeight()), document.documentElement.style.overflow = this._bakHtmlOverflow, document.body.style.overflow = this._bakBodyOverflow, t.iframe.parentNode.style.width = this._bakEditorContaninerWidth + "px", window.scrollTo(0, this._bakScrollTop)
					}
					if(browser.gecko && "true" === t.body.contentEditable) {
						var s = document.createElement("input");
						document.body.appendChild(s), t.body.contentEditable = !1, setTimeout(function() {
							s.focus(), setTimeout(function() {
								t.body.contentEditable = !0, t.fireEvent("fullscreenchanged", e), t.selection.getRange().moveToBookmark(i).select(!0), baidu.editor.dom.domUtils.remove(s), e && window.scroll(0, 0)
							}, 0)
						}, 0)
					}
					"true" === t.body.contentEditable && (this.editor.fireEvent("fullscreenchanged", e), this.triggerLayout())
				}
			},
			_updateFullScreen: function() {
				if(this._fullscreen) {
					var e = n.getViewportRect();
					if(this.getDom().style.cssText = "border:0;position:absolute;left:0;top:" + (this.editor.options.topOffset || 0) + "px;width:" + e.width + "px;height:" + e.height + "px;z-index:" + (1 * this.getDom().style.zIndex + 100), browser.gecko || n.setViewportOffset(this.getDom(), {
							left: 0,
							top: this.editor.options.topOffset || 0
						}), this.editor.setHeight(e.height - this.getDom("toolbarbox").offsetHeight - this.getDom("bottombar").offsetHeight - (this.editor.options.topOffset || 0), !0), browser.gecko) try {
						window.onresize()
					} catch(t) {}
				}
			},
			_updateElementPath: function() {
				var e, t = this.getDom("elementpath");
				if(this.elementPathEnabled && (e = this.editor.queryCommandValue("elementpath"))) {
					for(var n, i = [], r = 0; n = e[r]; r++) i[r] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + r + '&quot;);">' + n + "</span>");
					t.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ": " + i.join(" &gt; ") + "</div>"
				} else t.style.display = "none"
			},
			disableElementPath: function() {
				var e = this.getDom("elementpath");
				e.innerHTML = "", e.style.display = "none", this.elementPathEnabled = !1
			},
			enableElementPath: function() {
				var e = this.getDom("elementpath");
				e.style.display = "", this.elementPathEnabled = !0, this._updateElementPath()
			},
			_scale: function() {
				function e() {
					p = r.getXY(a), m || (m = s.options.minFrameHeight + c.offsetHeight + u.offsetHeight), f.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + a.offsetWidth + "px;height:" + a.offsetHeight + "px;z-index:" + (s.options.zIndex + 1), r.on(o, "mousemove", t), r.on(l, "mouseup", n), r.on(o, "mouseup", n)
				}

				function t(e) {
					i();
					var t = e || window.event;
					v = t.pageX || o.documentElement.scrollLeft + t.clientX, y = t.pageY || o.documentElement.scrollTop + t.clientY, b = v - p.x, w = y - p.y, b >= g && (h = !0, f.style.width = b + "px"), w >= m && (h = !0, f.style.height = w + "px")
				}

				function n() {
					h && (h = !1, s.ui._actualFrameWidth = f.offsetWidth - 2, a.style.width = s.ui._actualFrameWidth + "px", s.setHeight(f.offsetHeight - u.offsetHeight - c.offsetHeight - 2, !0)), f && (f.style.display = "none"), i(), r.un(o, "mousemove", t), r.un(l, "mouseup", n), r.un(o, "mouseup", n)
				}

				function i() {
					browser.ie ? o.selection.clear() : window.getSelection().removeAllRanges()
				}
				var o = document,
					s = this.editor,
					a = s.container,
					l = s.document,
					c = this.getDom("toolbarbox"),
					u = this.getDom("bottombar"),
					d = this.getDom("scale"),
					f = this.getDom("scalelayer"),
					h = !1,
					p = null,
					m = 0,
					g = s.options.minFrameWidth,
					v = 0,
					y = 0,
					b = 0,
					w = 0,
					x = this;
				this.editor.addListener("fullscreenchanged", function(e, t) {
					if(t) x.disableScale();
					else if(x.editor.options.scaleEnabled) {
						x.enableScale();
						var n = x.editor.document.createElement("span");
						x.editor.body.appendChild(n), x.editor.body.style.height = Math.max(r.getXY(n).y, x.editor.iframe.offsetHeight - 20) + "px", r.remove(n)
					}
				}), this.enableScale = function() {
					1 != s.queryCommandState("source") && (d.style.display = "", this.scaleEnabled = !0, r.on(d, "mousedown", e))
				}, this.disableScale = function() {
					d.style.display = "none", this.scaleEnabled = !1, r.un(d, "mousedown", e)
				}
			},
			isFullScreen: function() {
				return this._fullscreen
			},
			postRender: function() {
				i.prototype.postRender.call(this);
				for(var e = 0; e < this.toolbars.length; e++) this.toolbars[e].postRender();
				var t, n = this,
					r = baidu.editor.dom.domUtils,
					o = function() {
						clearTimeout(t), t = setTimeout(function() {
							n._updateFullScreen()
						})
					};
				r.on(window, "resize", o), n.addListener("destroy", function() {
					r.un(window, "resize", o), clearTimeout(t)
				})
			},
			showToolbarMsg: function(e, t) {
				if(this.getDom("toolbarmsg_label").innerHTML = e, this.getDom("toolbarmsg").style.display = "", !t) {
					var n = this.getDom("upload_dialog");
					n.style.display = "none"
				}
			},
			hideToolbarMsg: function() {
				this.getDom("toolbarmsg").style.display = "none"
			},
			mapUrl: function(e) {
				return e ? e.replace("~/", this.editor.options.UEDITOR_HOME_URL || "") : ""
			},
			triggerLayout: function() {
				var e = this.getDom();
				"1" == e.style.zoom ? e.style.zoom = "100%" : e.style.zoom = "1"
			}
		}, t.inherits(e, baidu.editor.ui.UIBase);
		var s = {};
		UE.ui.Editor = function(n) {
			var i = new UE.Editor(n);
			i.options.editor = i, t.loadFile(document, {
				href: i.options.themePath + i.options.theme + "/_css/ueditor.css",
				tag: "link",
				type: "text/css",
				rel: "stylesheet"
			});
			var o = i.render;
			return i.render = function(t) {
				t.constructor === String && (i.key = t, s[t] = i), jQuery(document).ready(function() {
					function n() {
						if(i.setOpt({
								labelMap: i.options.labelMap || i.getLang("labelMap")
							}), new e(i.options), t && (t.constructor === String && (t = document.getElementById(t)), t && t.getAttribute("name") && (i.options.textarea = t.getAttribute("name")), t && /script|textarea/gi.test(t.tagName))) {
							var n = document.createElement("div");
							t.parentNode.insertBefore(n, t);
							var s = t.value || t.innerHTML;
							i.options.initialContent = /^[\t\r\n ]*$/.test(s) ? i.options.initialContent : s.replace(/>[\n\r\t]+([ ]{4})+/g, ">").replace(/[\n\r\t]+([ ]{4})+</g, "<").replace(/>[\n\r\t]+</g, "><"), t.className && (n.className = t.className), t.style.cssText && (n.style.cssText = t.style.cssText), /textarea/i.test(t.tagName) ? (i.textarea = t, i.textarea.style.display = "none") : t.parentNode.removeChild(t), t.id && (n.id = t.id, r.removeAttributes(t, "id")), t = n, t.innerHTML = ""
						}
						r.addClass(t, "edui-" + i.options.theme), i.ui.render(t);
						var a = i.options;
						i.container = i.ui.getDom();
						for(var l, c = r.findParents(t, !0), u = [], d = 0; l = c[d]; d++) u[d] = l.style.display, l.style.display = "block";
						if(a.initialFrameWidth) a.minFrameWidth = a.initialFrameWidth;
						else {
							a.minFrameWidth = a.initialFrameWidth = t.offsetWidth;
							var f = t.style.width;
							/%$/.test(f) && (a.initialFrameWidth = f)
						}
						a.initialFrameHeight ? a.minFrameHeight = a.initialFrameHeight : a.initialFrameHeight = a.minFrameHeight = t.offsetHeight;
						for(var l, d = 0; l = c[d]; d++) l.style.display = u[d];
						t.style.height && (t.style.height = ""), i.container.style.width = a.initialFrameWidth + (/%$/.test(a.initialFrameWidth) ? "" : "px"), i.container.style.zIndex = a.zIndex, o.call(i, i.ui.getDom("iframeholder")), i.fireEvent("afteruiready")
					}
					i.langIsReady ? n() : i.addListener("langReady", n)
				})
			}, i
		}, UE.getEditor = function(e, t) {
			var n = s[e];
			return n || (n = s[e] = new UE.ui.Editor(t), n.render(e)), n
		}, UE.delEditor = function(e) {
			var t;
			(t = s[e]) && (t.key && t.destroy(), delete s[e])
		}, UE.registerUI = function(e, n, i, r) {
			t.each(e.split(/\s+/), function(e) {
				baidu.editor.ui[e] = {
					id: r,
					execFn: n,
					index: i
				}
			})
		}
	}(), UE.registerUI("message", function(e) {
		function t() {
			if(n && s.ui) {
				var e = s.ui.getDom("toolbarbox");
				e && (n.style.top = e.offsetHeight + 3 + "px"), n.style.zIndex = Math.max(s.options.zIndex, s.iframe.style.zIndex) + 1
			}
		}
		var n, i = baidu.editor.ui,
			r = i.Message,
			o = [],
			s = e;
		s.setOpt("enableMessageShow", !0), s.getOpt("enableMessageShow") !== !1 && (s.addListener("ready", function() {
			n = document.getElementById(s.ui.id + "_message_holder"), t(), setTimeout(function() {
				t()
			}, 500)
		}), s.addListener("showmessage", function(e, i) {
			i = utils.isString(i) ? {
				content: i
			} : i;
			var a = new r({
					timeout: i.timeout,
					type: i.type,
					content: i.content,
					keepshow: i.keepshow,
					editor: s
				}),
				l = i.id || "msg_" + (+new Date).toString(36);
			return a.render(n), o[l] = a, a.reset(i), t(), l
		}), s.addListener("updatemessage", function(e, t, i) {
			i = utils.isString(i) ? {
				content: i
			} : i;
			var r = o[t];
			r.render(n), r && r.reset(i)
		}), s.addListener("hidemessage", function(e, t) {
			var n = o[t];
			n && n.hide()
		}))
	}), UE.registerUI("autosave", function(e) {
		var t = null,
			n = null;
		e.on("afterautosave", function() {
			clearTimeout(t), t = setTimeout(function() {
				n && e.trigger("hidemessage", n), n = e.trigger("showmessage", {
					content: e.getLang("autosave.success"),
					timeout: 2e3
				})
			}, 2e3)
		})
	});
var BBS_Url = {
		createAlbum: "/qcross/pictrip/album.php?action=createAlbum",
		getMyAlbumList: "/qcross/pictrip/album.php?action=getMyAlbumList",
		getAlbumPhotoPage: "/qcross/pictrip/album.php?action=getAlbumPhotoPage",
		addAttach2ssdb: "/qcross/bbs/attachment.php?action=addAttach2ssdb",
		getHashAttach: "/qcross/bbs/attachment.php?action=getHashAttach",
		uploadAttach: "/qcross/bbs/attachment.php?action=uploadAttach",
		saveUploadAlbumPhoto: "/attachment.php?action=saveUploadAlbumPhoto",
		searchphotopoi: "/qcross/place/poi.php?action=poisearch",
		editPhotoPlace: "/qcross/pictrip/detail.php?action=editPhotoPlace",
		editPhotoDescript: "/qcross/pictrip/detail.php?action=editPhotoDescript",
		getNewPhoto: "/qcross/pictrip/detail.php?action=getNewPhoto",
		rotate: "/qcross/pictrip/index.php?action=rotate",
		opensession: "/qcross/pictrip/api.php?action=createalbum&oper=showform",
		singleCreateAlbum: "/qcross/pictrip/api.php?action=createalbum",
		checkVideo: "/qcross/bbs/thread.php?action=videoUrl",
		fontfix: "/post.php?action=fontfix"
	},
	_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
! function e(t, n, i) {
	function r(s, a) {
		if(!n[s]) {
			if(!t[s]) {
				var l = "function" == typeof require && require;
				if(!a && l) return l(s, !0);
				if(o) return o(s, !0);
				var c = new Error("Cannot find module '" + s + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			var u = n[s] = {
				exports: {}
			};
			t[s][0].call(u.exports, function(e) {
				var n = t[s][1][e];
				return r(n ? n : e)
			}, u, u.exports, e, t, n, i)
		}
		return n[s].exports
	}
	for(var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
	return r
}({
	1: [function(e, t, n) {
		(function(t) {
			"use strict";

			function n(e, t, n) {
				e[t] || Object[i](e, t, {
					writable: !0,
					configurable: !0,
					value: n
				})
			}
			if(e(295), e(296), e(2), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
			t._babelPolyfill = !0;
			var i = "defineProperty";
			n(String.prototype, "padLeft", "".padStart), n(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e) {
				[][e] && n(Array, e, Function.call.bind([][e]))
			})
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		2: 2,
		295: 295,
		296: 296
	}],
	2: [function(e, t, n) {
		e(119), t.exports = e(23).RegExp.escape
	}, {
		119: 119,
		23: 23
	}],
	3: [function(e, t, n) {
		t.exports = function(e) {
			if("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	}, {}],
	4: [function(e, t, n) {
		var i = e(18);
		t.exports = function(e, t) {
			if("number" != typeof e && "Number" != i(e)) throw TypeError(t);
			return +e
		}
	}, {
		18: 18
	}],
	5: [function(e, t, n) {
		var i = e(117)("unscopables"),
			r = Array.prototype;
		void 0 == r[i] && e(40)(r, i, {}), t.exports = function(e) {
			r[i][e] = !0
		}
	}, {
		117: 117,
		40: 40
	}],
	6: [function(e, t, n) {
		t.exports = function(e, t, n, i) {
			if(!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
			return e
		}
	}, {}],
	7: [function(e, t, n) {
		var i = e(49);
		t.exports = function(e) {
			if(!i(e)) throw TypeError(e + " is not an object!");
			return e
		}
	}, {
		49: 49
	}],
	8: [function(e, t, n) {
		"use strict";
		var i = e(109),
			r = e(105),
			o = e(108);
		t.exports = [].copyWithin || function(e, t) {
			var n = i(this),
				s = o(n.length),
				a = r(e, s),
				l = r(t, s),
				c = arguments.length > 2 ? arguments[2] : void 0,
				u = Math.min((void 0 === c ? s : r(c, s)) - l, s - a),
				d = 1;
			for(l < a && a < l + u && (d = -1, l += u - 1, a += u - 1); u-- > 0;) l in n ? n[a] = n[l] : delete n[a], a += d, l += d;
			return n
		}
	}, {
		105: 105,
		108: 108,
		109: 109
	}],
	9: [function(e, t, n) {
		"use strict";
		var i = e(109),
			r = e(105),
			o = e(108);
		t.exports = function(e) {
			for(var t = i(this), n = o(t.length), s = arguments.length, a = r(s > 1 ? arguments[1] : void 0, n), l = s > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > a;) t[a++] = e;
			return t
		}
	}, {
		105: 105,
		108: 108,
		109: 109
	}],
	10: [function(e, t, n) {
		var i = e(37);
		t.exports = function(e, t) {
			var n = [];
			return i(e, !1, n.push, n, t), n
		}
	}, {
		37: 37
	}],
	11: [function(e, t, n) {
		var i = e(107),
			r = e(108),
			o = e(105);
		t.exports = function(e) {
			return function(t, n, s) {
				var a, l = i(t),
					c = r(l.length),
					u = o(s, c);
				if(e && n != n) {
					for(; c > u;)
						if(a = l[u++], a != a) return !0
				} else
					for(; c > u; u++)
						if((e || u in l) && l[u] === n) return e || u || 0;
				return !e && -1
			}
		}
	}, {
		105: 105,
		107: 107,
		108: 108
	}],
	12: [function(e, t, n) {
		var i = e(25),
			r = e(45),
			o = e(109),
			s = e(108),
			a = e(15);
		t.exports = function(e, t) {
			var n = 1 == e,
				l = 2 == e,
				c = 3 == e,
				u = 4 == e,
				d = 6 == e,
				f = 5 == e || d,
				h = t || a;
			return function(t, a, p) {
				for(var m, g, v = o(t), y = r(v), b = i(a, p, 3), w = s(y.length), x = 0, _ = n ? h(t, w) : l ? h(t, 0) : void 0; w > x; x++)
					if((f || x in y) && (m = y[x], g = b(m, x, v), e))
						if(n) _[x] = g;
						else if(g) switch(e) {
					case 3:
						return !0;
					case 5:
						return m;
					case 6:
						return x;
					case 2:
						_.push(m)
				} else if(u) return !1;
				return d ? -1 : c || u ? u : _
			}
		}
	}, {
		108: 108,
		109: 109,
		15: 15,
		25: 25,
		45: 45
	}],
	13: [function(e, t, n) {
		var i = e(3),
			r = e(109),
			o = e(45),
			s = e(108);
		t.exports = function(e, t, n, a, l) {
			i(t);
			var c = r(e),
				u = o(c),
				d = s(c.length),
				f = l ? d - 1 : 0,
				h = l ? -1 : 1;
			if(n < 2)
				for(;;) {
					if(f in u) {
						a = u[f], f += h;
						break
					}
					if(f += h, l ? f < 0 : d <= f) throw TypeError("Reduce of empty array with no initial value")
				}
			for(; l ? f >= 0 : d > f; f += h) f in u && (a = t(a, u[f], f, c));
			return a
		}
	}, {
		108: 108,
		109: 109,
		3: 3,
		45: 45
	}],
	14: [function(e, t, n) {
		var i = e(49),
			r = e(47),
			o = e(117)("species");
		t.exports = function(e) {
			var t;
			return r(e) && (t = e.constructor, "function" != typeof t || t !== Array && !r(t.prototype) || (t = void 0), i(t) && (t = t[o], null === t && (t = void 0))), void 0 === t ? Array : t
		}
	}, {
		117: 117,
		47: 47,
		49: 49
	}],
	15: [function(e, t, n) {
		var i = e(14);
		t.exports = function(e, t) {
			return new(i(e))(t)
		}
	}, {
		14: 14
	}],
	16: [function(e, t, n) {
		"use strict";
		var i = e(3),
			r = e(49),
			o = e(44),
			s = [].slice,
			a = {},
			l = function(e, t, n) {
				if(!(t in a)) {
					for(var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
					a[t] = Function("F,a", "return new F(" + i.join(",") + ")")
				}
				return a[t](e, n)
			};
		t.exports = Function.bind || function(e) {
			var t = i(this),
				n = s.call(arguments, 1),
				a = function c() {
					var i = n.concat(s.call(arguments));
					return this instanceof c ? l(t, i.length, i) : o(t, i, e)
				};
			return r(t.prototype) && (a.prototype = t.prototype), a
		}
	}, {
		3: 3,
		44: 44,
		49: 49
	}],
	17: [function(e, t, n) {
		var i = e(18),
			r = e(117)("toStringTag"),
			o = "Arguments" == i(function() {
				return arguments
			}()),
			s = function(e, t) {
				try {
					return e[t]
				} catch(n) {}
			};
		t.exports = function(e) {
			var t, n, a;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = s(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
		}
	}, {
		117: 117,
		18: 18
	}],
	18: [function(e, t, n) {
		var i = {}.toString;
		t.exports = function(e) {
			return i.call(e).slice(8, -1)
		}
	}, {}],
	19: [function(e, t, n) {
		"use strict";
		var i = e(67).f,
			r = e(66),
			o = e(86),
			s = e(25),
			a = e(6),
			l = e(27),
			c = e(37),
			u = e(53),
			d = e(55),
			f = e(91),
			h = e(28),
			p = e(62).fastKey,
			m = h ? "_s" : "size",
			g = function(e, t) {
				var n, i = p(t);
				if("F" !== i) return e._i[i];
				for(n = e._f; n; n = n.n)
					if(n.k == t) return n
			};
		t.exports = {
			getConstructor: function(e, t, n, u) {
				var d = e(function(e, i) {
					a(e, d, t, "_i"), e._i = r(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != i && c(i, n, e[u], e)
				});
				return o(d.prototype, {
					clear: function() {
						for(var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
						e._f = e._l = void 0, e[m] = 0
					},
					"delete": function(e) {
						var t = this,
							n = g(t, e);
						if(n) {
							var i = n.n,
								r = n.p;
							delete t._i[n.i], n.r = !0, r && (r.n = i), i && (i.p = r), t._f == n && (t._f = i), t._l == n && (t._l = r), t[m]--
						}
						return !!n
					},
					forEach: function(e) {
						a(this, d, "forEach");
						for(var t, n = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
							for(n(t.v, t.k, this); t && t.r;) t = t.p
					},
					has: function(e) {
						return !!g(this, e)
					}
				}), h && i(d.prototype, "size", {
					get: function() {
						return l(this[m])
					}
				}), d
			},
			def: function(e, t, n) {
				var i, r, o = g(e, t);
				return o ? o.v = n : (e._l = o = {
					i: r = p(t, !0),
					k: t,
					v: n,
					p: i = e._l,
					n: void 0,
					r: !1
				}, e._f || (e._f = o), i && (i.n = o), e[m]++, "F" !== r && (e._i[r] = o)), e
			},
			getEntry: g,
			setStrong: function(e, t, n) {
				u(e, t, function(e, t) {
					this._t = e, this._k = t, this._l = void 0
				}, function() {
					for(var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
					return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [n.k, n.v]) : (e._t = void 0, d(1))
				}, n ? "entries" : "values", !n, !0), f(t)
			}
		}
	}, {
		25: 25,
		27: 27,
		28: 28,
		37: 37,
		53: 53,
		55: 55,
		6: 6,
		62: 62,
		66: 66,
		67: 67,
		86: 86,
		91: 91
	}],
	20: [function(e, t, n) {
		var i = e(17),
			r = e(10);
		t.exports = function(e) {
			return function() {
				if(i(this) != e) throw TypeError(e + "#toJSON isn't generic");
				return r(this)
			}
		}
	}, {
		10: 10,
		17: 17
	}],
	21: [function(e, t, n) {
		"use strict";
		var i = e(86),
			r = e(62).getWeak,
			o = e(7),
			s = e(49),
			a = e(6),
			l = e(37),
			c = e(12),
			u = e(39),
			d = c(5),
			f = c(6),
			h = 0,
			p = function(e) {
				return e._l || (e._l = new m)
			},
			m = function() {
				this.a = []
			},
			g = function(e, t) {
				return d(e.a, function(e) {
					return e[0] === t
				})
			};
		m.prototype = {
			get: function(e) {
				var t = g(this, e);
				if(t) return t[1]
			},
			has: function(e) {
				return !!g(this, e)
			},
			set: function(e, t) {
				var n = g(this, e);
				n ? n[1] = t : this.a.push([e, t])
			},
			"delete": function(e) {
				var t = f(this.a, function(t) {
					return t[0] === e
				});
				return ~t && this.a.splice(t, 1), !!~t
			}
		}, t.exports = {
			getConstructor: function(e, t, n, o) {
				var c = e(function(e, i) {
					a(e, c, t, "_i"), e._i = h++, e._l = void 0, void 0 != i && l(i, n, e[o], e)
				});
				return i(c.prototype, {
					"delete": function(e) {
						if(!s(e)) return !1;
						var t = r(e);
						return t === !0 ? p(this)["delete"](e) : t && u(t, this._i) && delete t[this._i]
					},
					has: function(e) {
						if(!s(e)) return !1;
						var t = r(e);
						return t === !0 ? p(this).has(e) : t && u(t, this._i)
					}
				}), c
			},
			def: function(e, t, n) {
				var i = r(o(t), !0);
				return i === !0 ? p(e).set(t, n) : i[e._i] = n, e
			},
			ufstore: p
		}
	}, {
		12: 12,
		37: 37,
		39: 39,
		49: 49,
		6: 6,
		62: 62,
		7: 7,
		86: 86
	}],
	22: [function(e, t, n) {
		"use strict";
		var i = e(38),
			r = e(32),
			o = e(87),
			s = e(86),
			a = e(62),
			l = e(37),
			c = e(6),
			u = e(49),
			d = e(34),
			f = e(54),
			h = e(92),
			p = e(43);
		t.exports = function(e, t, n, m, g, v) {
			var y = i[e],
				b = y,
				w = g ? "set" : "add",
				x = b && b.prototype,
				_ = {},
				C = function(e) {
					var t = x[e];
					o(x, e, "delete" == e ? function(e) {
						return !(v && !u(e)) && t.call(this, 0 === e ? 0 : e)
					} : "has" == e ? function(e) {
						return !(v && !u(e)) && t.call(this, 0 === e ? 0 : e)
					} : "get" == e ? function(e) {
						return v && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
					} : "add" == e ? function(e) {
						return t.call(this, 0 === e ? 0 : e), this
					} : function(e, n) {
						return t.call(this, 0 === e ? 0 : e, n), this
					})
				};
			if("function" == typeof b && (v || x.forEach && !d(function() {
					(new b).entries().next()
				}))) {
				var k = new b,
					N = k[w](v ? {} : -0, 1) != k,
					E = d(function() {
						k.has(1)
					}),
					S = f(function(e) {
						new b(e)
					}),
					T = !v && d(function() {
						for(var e = new b, t = 5; t--;) e[w](t, t);
						return !e.has(-0)
					});
				S || (b = t(function(t, n) {
					c(t, b, e);
					var i = p(new y, t, b);
					return void 0 != n && l(n, g, i[w], i), i
				}), b.prototype = x, x.constructor = b), (E || T) && (C("delete"), C("has"), g && C("get")), (T || N) && C(w), v && x.clear && delete x.clear
			} else b = m.getConstructor(t, e, g, w), s(b.prototype, n), a.NEED = !0;
			return h(b, e), _[e] = b, r(r.G + r.W + r.F * (b != y), _), v || m.setStrong(b, e, g), b
		}
	}, {
		32: 32,
		34: 34,
		37: 37,
		38: 38,
		43: 43,
		49: 49,
		54: 54,
		6: 6,
		62: 62,
		86: 86,
		87: 87,
		92: 92
	}],
	23: [function(e, t, n) {
		var i = t.exports = {
			version: "2.4.0"
		};
		"number" == typeof __e && (__e = i)
	}, {}],
	24: [function(e, t, n) {
		"use strict";
		var i = e(67),
			r = e(85);
		t.exports = function(e, t, n) {
			t in e ? i.f(e, t, r(0, n)) : e[t] = n
		}
	}, {
		67: 67,
		85: 85
	}],
	25: [function(e, t, n) {
		var i = e(3);
		t.exports = function(e, t, n) {
			if(i(e), void 0 === t) return e;
			switch(n) {
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, i) {
						return e.call(t, n, i)
					};
				case 3:
					return function(n, i, r) {
						return e.call(t, n, i, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	}, {
		3: 3
	}],
	26: [function(e, t, n) {
		"use strict";
		var i = e(7),
			r = e(110),
			o = "number";
		t.exports = function(e) {
			if("string" !== e && e !== o && "default" !== e) throw TypeError("Incorrect hint");
			return r(i(this), e != o)
		}
	}, {
		110: 110,
		7: 7
	}],
	27: [function(e, t, n) {
		t.exports = function(e) {
			if(void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	}, {}],
	28: [function(e, t, n) {
		t.exports = !e(34)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, {
		34: 34
	}],
	29: [function(e, t, n) {
		var i = e(49),
			r = e(38).document,
			o = i(r) && i(r.createElement);
		t.exports = function(e) {
			return o ? r.createElement(e) : {}
		}
	}, {
		38: 38,
		49: 49
	}],
	30: [function(e, t, n) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, {}],
	31: [function(e, t, n) {
		var i = e(76),
			r = e(73),
			o = e(77);
		t.exports = function(e) {
			var t = i(e),
				n = r.f;
			if(n)
				for(var s, a = n(e), l = o.f, c = 0; a.length > c;) l.call(e, s = a[c++]) && t.push(s);
			return t
		}
	}, {
		73: 73,
		76: 76,
		77: 77
	}],
	32: [function(e, t, n) {
		var i = e(38),
			r = e(23),
			o = e(40),
			s = e(87),
			a = e(25),
			l = "prototype",
			c = function u(e, t, n) {
				var c, d, f, h, p = e & u.F,
					m = e & u.G,
					g = e & u.S,
					v = e & u.P,
					y = e & u.B,
					b = m ? i : g ? i[t] || (i[t] = {}) : (i[t] || {})[l],
					w = m ? r : r[t] || (r[t] = {}),
					x = w[l] || (w[l] = {});
				m && (n = t);
				for(c in n) d = !p && b && void 0 !== b[c], f = (d ? b : n)[c], h = y && d ? a(f, i) : v && "function" == typeof f ? a(Function.call, f) : f, b && s(b, c, f, e & u.U), w[c] != f && o(w, c, h), v && x[c] != f && (x[c] = f)
			};
		i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
	}, {
		23: 23,
		25: 25,
		38: 38,
		40: 40,
		87: 87
	}],
	33: [function(e, t, n) {
		var i = e(117)("match");
		t.exports = function(e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch(n) {
				try {
					return t[i] = !1, !"/./" [e](t)
				} catch(r) {}
			}
			return !0
		}
	}, {
		117: 117
	}],
	34: [function(e, t, n) {
		t.exports = function(e) {
			try {
				return !!e()
			} catch(t) {
				return !0
			}
		}
	}, {}],
	35: [function(e, t, n) {
		"use strict";
		var i = e(40),
			r = e(87),
			o = e(34),
			s = e(27),
			a = e(117);
		t.exports = function(e, t, n) {
			var l = a(e),
				c = n(s, l, "" [e]),
				u = c[0],
				d = c[1];
			o(function() {
				var t = {};
				return t[l] = function() {
					return 7
				}, 7 != "" [e](t)
			}) && (r(String.prototype, e, u), i(RegExp.prototype, l, 2 == t ? function(e, t) {
				return d.call(e, this, t)
			} : function(e) {
				return d.call(e, this)
			}))
		}
	}, {
		117: 117,
		27: 27,
		34: 34,
		40: 40,
		87: 87
	}],
	36: [function(e, t, n) {
		"use strict";
		var i = e(7);
		t.exports = function() {
			var e = i(this),
				t = "";
			return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
		}
	}, {
		7: 7
	}],
	37: [function(e, t, n) {
		var i = e(25),
			r = e(51),
			o = e(46),
			s = e(7),
			a = e(108),
			l = e(118),
			c = {},
			u = {},
			n = t.exports = function(e, t, n, d, f) {
				var h, p, m, g, v = f ? function() {
						return e
					} : l(e),
					y = i(n, d, t ? 2 : 1),
					b = 0;
				if("function" != typeof v) throw TypeError(e + " is not iterable!");
				if(o(v)) {
					for(h = a(e.length); h > b; b++)
						if(g = t ? y(s(p = e[b])[0], p[1]) : y(e[b]), g === c || g === u) return g
				} else
					for(m = v.call(e); !(p = m.next()).done;)
						if(g = r(m, y, p.value, t), g === c || g === u) return g
			};
		n.BREAK = c, n.RETURN = u
	}, {
		108: 108,
		118: 118,
		25: 25,
		46: 46,
		51: 51,
		7: 7
	}],
	38: [function(e, t, n) {
		var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = i)
	}, {}],
	39: [function(e, t, n) {
		var i = {}.hasOwnProperty;
		t.exports = function(e, t) {
			return i.call(e, t)
		}
	}, {}],
	40: [function(e, t, n) {
		var i = e(67),
			r = e(85);
		t.exports = e(28) ? function(e, t, n) {
			return i.f(e, t, r(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	}, {
		28: 28,
		67: 67,
		85: 85
	}],
	41: [function(e, t, n) {
		t.exports = e(38).document && document.documentElement
	}, {
		38: 38
	}],
	42: [function(e, t, n) {
		t.exports = !e(28) && !e(34)(function() {
			return 7 != Object.defineProperty(e(29)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, {
		28: 28,
		29: 29,
		34: 34
	}],
	43: [function(e, t, n) {
		var i = e(49),
			r = e(90).set;
		t.exports = function(e, t, n) {
			var o, s = t.constructor;
			return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(e, o), e
		}
	}, {
		49: 49,
		90: 90
	}],
	44: [function(e, t, n) {
		t.exports = function(e, t, n) {
			var i = void 0 === n;
			switch(t.length) {
				case 0:
					return i ? e() : e.call(n);
				case 1:
					return i ? e(t[0]) : e.call(n, t[0]);
				case 2:
					return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
				case 3:
					return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
				case 4:
					return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
			}
			return e.apply(n, t)
		}
	}, {}],
	45: [function(e, t, n) {
		var i = e(18);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == i(e) ? e.split("") : Object(e)
		}
	}, {
		18: 18
	}],
	46: [function(e, t, n) {
		var i = e(56),
			r = e(117)("iterator"),
			o = Array.prototype;
		t.exports = function(e) {
			return void 0 !== e && (i.Array === e || o[r] === e)
		}
	}, {
		117: 117,
		56: 56
	}],
	47: [function(e, t, n) {
		var i = e(18);
		t.exports = Array.isArray || function(e) {
			return "Array" == i(e)
		}
	}, {
		18: 18
	}],
	48: [function(e, t, n) {
		var i = e(49),
			r = Math.floor;
		t.exports = function(e) {
			return !i(e) && isFinite(e) && r(e) === e
		}
	}, {
		49: 49
	}],
	49: [function(e, t, n) {
		t.exports = function(e) {
			return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e
		}
	}, {}],
	50: [function(e, t, n) {
		var i = e(49),
			r = e(18),
			o = e(117)("match");
		t.exports = function(e) {
			var t;
			return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
		}
	}, {
		117: 117,
		18: 18,
		49: 49
	}],
	51: [function(e, t, n) {
		var i = e(7);
		t.exports = function(e, t, n, r) {
			try {
				return r ? t(i(n)[0], n[1]) : t(n)
			} catch(o) {
				var s = e["return"];
				throw void 0 !== s && i(s.call(e)), o
			}
		}
	}, {
		7: 7
	}],
	52: [function(e, t, n) {
		"use strict";
		var i = e(66),
			r = e(85),
			o = e(92),
			s = {};
		e(40)(s, e(117)("iterator"), function() {
			return this
		}), t.exports = function(e, t, n) {
			e.prototype = i(s, {
				next: r(1, n)
			}), o(e, t + " Iterator")
		}
	}, {
		117: 117,
		40: 40,
		66: 66,
		85: 85,
		92: 92
	}],
	53: [function(e, t, n) {
		"use strict";
		var i = e(58),
			r = e(32),
			o = e(87),
			s = e(40),
			a = e(39),
			l = e(56),
			c = e(52),
			u = e(92),
			d = e(74),
			f = e(117)("iterator"),
			h = !([].keys && "next" in [].keys()),
			p = "@@iterator",
			m = "keys",
			g = "values",
			v = function() {
				return this
			};
		t.exports = function(e, t, n, y, b, w, x) {
			c(n, t, y);
			var _, C, k, N = function(e) {
					if(!h && e in D) return D[e];
					switch(e) {
						case m:
							return function() {
								return new n(this, e)
							};
						case g:
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this, e)
					}
				},
				E = t + " Iterator",
				S = b == g,
				T = !1,
				D = e.prototype,
				A = D[f] || D[p] || b && D[b],
				U = A || N(b),
				M = b ? S ? N("entries") : U : void 0,
				O = "Array" == t ? D.entries || A : A;
			if(O && (k = d(O.call(new e)), k !== Object.prototype && (u(k, E, !0), i || a(k, f) || s(k, f, v))), S && A && A.name !== g && (T = !0, U = function() {
					return A.call(this)
				}), i && !x || !h && !T && D[f] || s(D, f, U), l[t] = U, l[E] = v, b)
				if(_ = {
						values: S ? U : N(g),
						keys: w ? U : N(m),
						entries: M
					}, x)
					for(C in _) C in D || o(D, C, _[C]);
				else r(r.P + r.F * (h || T), t, _);
			return _
		}
	}, {
		117: 117,
		32: 32,
		39: 39,
		40: 40,
		52: 52,
		56: 56,
		58: 58,
		74: 74,
		87: 87,
		92: 92
	}],
	54: [function(e, t, n) {
		var i = e(117)("iterator"),
			r = !1;
		try {
			var o = [7][i]();
			o["return"] = function() {
				r = !0
			}, Array.from(o, function() {
				throw 2
			})
		} catch(s) {}
		t.exports = function(e, t) {
			if(!t && !r) return !1;
			var n = !1;
			try {
				var o = [7],
					s = o[i]();
				s.next = function() {
					return {
						done: n = !0
					}
				}, o[i] = function() {
					return s
				}, e(o)
			} catch(a) {}
			return n
		}
	}, {
		117: 117
	}],
	55: [function(e, t, n) {
		t.exports = function(e, t) {
			return {
				value: t,
				done: !!e
			}
		}
	}, {}],
	56: [function(e, t, n) {
		t.exports = {}
	}, {}],
	57: [function(e, t, n) {
		var i = e(76),
			r = e(107);
		t.exports = function(e, t) {
			for(var n, o = r(e), s = i(o), a = s.length, l = 0; a > l;)
				if(o[n = s[l++]] === t) return n
		}
	}, {
		107: 107,
		76: 76
	}],
	58: [function(e, t, n) {
		t.exports = !1
	}, {}],
	59: [function(e, t, n) {
		var i = Math.expm1;
		t.exports = !i || i(10) > 22025.465794806718 || i(10) < 22025.465794806718 || i(-2e-17) != -2e-17 ? function(e) {
			return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
		} : i
	}, {}],
	60: [function(e, t, n) {
		t.exports = Math.log1p || function(e) {
			return(e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
		}
	}, {}],
	61: [function(e, t, n) {
		t.exports = Math.sign || function(e) {
			return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
		}
	}, {}],
	62: [function(e, t, n) {
		var i = e(114)("meta"),
			r = e(49),
			o = e(39),
			s = e(67).f,
			a = 0,
			l = Object.isExtensible || function() {
				return !0
			},
			c = !e(34)(function() {
				return l(Object.preventExtensions({}))
			}),
			u = function(e) {
				s(e, i, {
					value: {
						i: "O" + ++a,
						w: {}
					}
				})
			},
			d = function(e, t) {
				if(!r(e)) return "symbol" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
				if(!o(e, i)) {
					if(!l(e)) return "F";
					if(!t) return "E";
					u(e)
				}
				return e[i].i
			},
			f = function(e, t) {
				if(!o(e, i)) {
					if(!l(e)) return !0;
					if(!t) return !1;
					u(e)
				}
				return e[i].w
			},
			h = function(e) {
				return c && p.NEED && l(e) && !o(e, i) && u(e), e
			},
			p = t.exports = {
				KEY: i,
				NEED: !1,
				fastKey: d,
				getWeak: f,
				onFreeze: h
			}
	}, {
		114: 114,
		34: 34,
		39: 39,
		49: 49,
		67: 67
	}],
	63: [function(e, t, n) {
		var i = e(149),
			r = e(32),
			o = e(94)("metadata"),
			s = o.store || (o.store = new(e(255))),
			a = function(e, t, n) {
				var r = s.get(e);
				if(!r) {
					if(!n) return;
					s.set(e, r = new i)
				}
				var o = r.get(t);
				if(!o) {
					if(!n) return;
					r.set(t, o = new i)
				}
				return o
			},
			l = function(e, t, n) {
				var i = a(t, n, !1);
				return void 0 !== i && i.has(e)
			},
			c = function(e, t, n) {
				var i = a(t, n, !1);
				return void 0 === i ? void 0 : i.get(e)
			},
			u = function(e, t, n, i) {
				a(n, i, !0).set(e, t)
			},
			d = function(e, t) {
				var n = a(e, t, !1),
					i = [];
				return n && n.forEach(function(e, t) {
					i.push(t)
				}), i
			},
			f = function(e) {
				return void 0 === e || "symbol" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e : String(e)
			},
			h = function(e) {
				r(r.S, "Reflect", e)
			};
		t.exports = {
			store: s,
			map: a,
			has: l,
			get: c,
			set: u,
			keys: d,
			key: f,
			exp: h
		}
	}, {
		149: 149,
		255: 255,
		32: 32,
		94: 94
	}],
	64: [function(e, t, n) {
		var i = e(38),
			r = e(104).set,
			o = i.MutationObserver || i.WebKitMutationObserver,
			s = i.process,
			a = i.Promise,
			l = "process" == e(18)(s);
		t.exports = function() {
			var e, t, n, c = function() {
				var i, r;
				for(l && (i = s.domain) && i.exit(); e;) {
					r = e.fn, e = e.next;
					try {
						r()
					} catch(o) {
						throw e ? n() : t = void 0, o
					}
				}
				t = void 0, i && i.enter()
			};
			if(l) n = function() {
				s.nextTick(c)
			};
			else if(o) {
				var u = !0,
					d = document.createTextNode("");
				new o(c).observe(d, {
					characterData: !0
				}), n = function() {
					d.data = u = !u
				}
			} else if(a && a.resolve) {
				var f = a.resolve();
				n = function() {
					f.then(c)
				}
			} else n = function() {
				r.call(i, c)
			};
			return function(i) {
				var r = {
					fn: i,
					next: void 0
				};
				t && (t.next = r), e || (e = r, n()), t = r
			}
		}
	}, {
		104: 104,
		18: 18,
		38: 38
	}],
	65: [function(e, t, n) {
		"use strict";
		var i = e(76),
			r = e(73),
			o = e(77),
			s = e(109),
			a = e(45),
			l = Object.assign;
		t.exports = !l || e(34)(function() {
			var e = {},
				t = {},
				n = Symbol(),
				i = "abcdefghijklmnopqrst";
			return e[n] = 7, i.split("").forEach(function(e) {
				t[e] = e
			}), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != i
		}) ? function(e, t) {
			for(var n = s(e), l = arguments.length, c = 1, u = r.f, d = o.f; l > c;)
				for(var f, h = a(arguments[c++]), p = u ? i(h).concat(u(h)) : i(h), m = p.length, g = 0; m > g;) d.call(h, f = p[g++]) && (n[f] = h[f]);
			return n
		} : l
	}, {
		109: 109,
		34: 34,
		45: 45,
		73: 73,
		76: 76,
		77: 77
	}],
	66: [function(e, t, n) {
		var i = e(7),
			r = e(68),
			o = e(30),
			s = e(93)("IE_PROTO"),
			a = function() {},
			l = "prototype",
			c = function() {
				var t, n = e(29)("iframe"),
					i = o.length,
					r = "<",
					s = ">";
				for(n.style.display = "none", e(41).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write(r + "script" + s + "document.F=Object" + r + "/script" + s), t.close(), c = t.F; i--;) delete c[l][o[i]];
				return c()
			};
		t.exports = Object.create || function(e, t) {
			var n;
			return null !== e ? (a[l] = i(e), n = new a, a[l] = null, n[s] = e) : n = c(), void 0 === t ? n : r(n, t)
		}
	}, {
		29: 29,
		30: 30,
		41: 41,
		68: 68,
		7: 7,
		93: 93
	}],
	67: [function(e, t, n) {
		var i = e(7),
			r = e(42),
			o = e(110),
			s = Object.defineProperty;
		n.f = e(28) ? Object.defineProperty : function(e, t, n) {
			if(i(e), t = o(t, !0), i(n), r) try {
				return s(e, t, n)
			} catch(a) {}
			if("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	}, {
		110: 110,
		28: 28,
		42: 42,
		7: 7
	}],
	68: [function(e, t, n) {
		var i = e(67),
			r = e(7),
			o = e(76);
		t.exports = e(28) ? Object.defineProperties : function(e, t) {
			r(e);
			for(var n, s = o(t), a = s.length, l = 0; a > l;) i.f(e, n = s[l++], t[n]);
			return e
		}
	}, {
		28: 28,
		67: 67,
		7: 7,
		76: 76
	}],
	69: [function(e, t, n) {
		t.exports = e(58) || !e(34)(function() {
			var t = Math.random();
			__defineSetter__.call(null, t, function() {}), delete e(38)[t]
		})
	}, {
		34: 34,
		38: 38,
		58: 58
	}],
	70: [function(e, t, n) {
		var i = e(77),
			r = e(85),
			o = e(107),
			s = e(110),
			a = e(39),
			l = e(42),
			c = Object.getOwnPropertyDescriptor;
		n.f = e(28) ? c : function(e, t) {
			if(e = o(e), t = s(t, !0), l) try {
				return c(e, t)
			} catch(n) {}
			if(a(e, t)) return r(!i.f.call(e, t), e[t])
		}
	}, {
		107: 107,
		110: 110,
		28: 28,
		39: 39,
		42: 42,
		77: 77,
		85: 85
	}],
	71: [function(e, t, n) {
		var i = e(107),
			r = e(72).f,
			o = {}.toString,
			s = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			a = function(e) {
				try {
					return r(e)
				} catch(t) {
					return s.slice()
				}
			};
		t.exports.f = function(e) {
			return s && "[object Window]" == o.call(e) ? a(e) : r(i(e))
		}
	}, {
		107: 107,
		72: 72
	}],
	72: [function(e, t, n) {
		var i = e(75),
			r = e(30).concat("length", "prototype");
		n.f = Object.getOwnPropertyNames || function(e) {
			return i(e, r)
		}
	}, {
		30: 30,
		75: 75
	}],
	73: [function(e, t, n) {
		n.f = Object.getOwnPropertySymbols
	}, {}],
	74: [function(e, t, n) {
		var i = e(39),
			r = e(109),
			o = e(93)("IE_PROTO"),
			s = Object.prototype;
		t.exports = Object.getPrototypeOf || function(e) {
			return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
		}
	}, {
		109: 109,
		39: 39,
		93: 93
	}],
	75: [function(e, t, n) {
		var i = e(39),
			r = e(107),
			o = e(11)(!1),
			s = e(93)("IE_PROTO");
		t.exports = function(e, t) {
			var n, a = r(e),
				l = 0,
				c = [];
			for(n in a) n != s && i(a, n) && c.push(n);
			for(; t.length > l;) i(a, n = t[l++]) && (~o(c, n) || c.push(n));
			return c
		}
	}, {
		107: 107,
		11: 11,
		39: 39,
		93: 93
	}],
	76: [function(e, t, n) {
		var i = e(75),
			r = e(30);
		t.exports = Object.keys || function(e) {
			return i(e, r)
		}
	}, {
		30: 30,
		75: 75
	}],
	77: [function(e, t, n) {
		n.f = {}.propertyIsEnumerable
	}, {}],
	78: [function(e, t, n) {
		var i = e(32),
			r = e(23),
			o = e(34);
		t.exports = function(e, t) {
			var n = (r.Object || {})[e] || Object[e],
				s = {};
			s[e] = t(n), i(i.S + i.F * o(function() {
				n(1)
			}), "Object", s)
		}
	}, {
		23: 23,
		32: 32,
		34: 34
	}],
	79: [function(e, t, n) {
		var i = e(76),
			r = e(107),
			o = e(77).f;
		t.exports = function(e) {
			return function(t) {
				for(var n, s = r(t), a = i(s), l = a.length, c = 0, u = []; l > c;) o.call(s, n = a[c++]) && u.push(e ? [n, s[n]] : s[n]);
				return u
			}
		}
	}, {
		107: 107,
		76: 76,
		77: 77
	}],
	80: [function(e, t, n) {
		var i = e(72),
			r = e(73),
			o = e(7),
			s = e(38).Reflect;
		t.exports = s && s.ownKeys || function(e) {
			var t = i.f(o(e)),
				n = r.f;
			return n ? t.concat(n(e)) : t
		}
	}, {
		38: 38,
		7: 7,
		72: 72,
		73: 73
	}],
	81: [function(e, t, n) {
		var i = e(38).parseFloat,
			r = e(102).trim;
		t.exports = 1 / i(e(103) + "-0") !== -(1 / 0) ? function(e) {
			var t = r(String(e), 3),
				n = i(t);
			return 0 === n && "-" == t.charAt(0) ? -0 : n
		} : i
	}, {
		102: 102,
		103: 103,
		38: 38
	}],
	82: [function(e, t, n) {
		var i = e(38).parseInt,
			r = e(102).trim,
			o = e(103),
			s = /^[\-+]?0[xX]/;
		t.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function(e, t) {
			var n = r(String(e), 3);
			return i(n, t >>> 0 || (s.test(n) ? 16 : 10))
		} : i
	}, {
		102: 102,
		103: 103,
		38: 38
	}],
	83: [function(e, t, n) {
		"use strict";
		var i = e(84),
			r = e(44),
			o = e(3);
		t.exports = function() {
			for(var e = o(this), t = arguments.length, n = Array(t), s = 0, a = i._, l = !1; t > s;)(n[s] = arguments[s++]) === a && (l = !0);
			return function() {
				var i, o = this,
					s = arguments.length,
					c = 0,
					u = 0;
				if(!l && !s) return r(e, n, o);
				if(i = n.slice(), l)
					for(; t > c; c++) i[c] === a && (i[c] = arguments[u++]);
				for(; s > u;) i.push(arguments[u++]);
				return r(e, i, o)
			}
		}
	}, {
		3: 3,
		44: 44,
		84: 84
	}],
	84: [function(e, t, n) {
		t.exports = e(38)
	}, {
		38: 38
	}],
	85: [function(e, t, n) {
		t.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, {}],
	86: [function(e, t, n) {
		var i = e(87);
		t.exports = function(e, t, n) {
			for(var r in t) i(e, r, t[r], n);
			return e
		}
	}, {
		87: 87
	}],
	87: [function(e, t, n) {
		var i = e(38),
			r = e(40),
			o = e(39),
			s = e(114)("src"),
			a = "toString",
			l = Function[a],
			c = ("" + l).split(a);
		e(23).inspectSource = function(e) {
			return l.call(e)
		}, (t.exports = function(e, t, n, a) {
			var l = "function" == typeof n;
			l && (o(n, "name") || r(n, "name", t)), e[t] !== n && (l && (o(n, s) || r(n, s, e[t] ? "" + e[t] : c.join(String(t)))), e === i ? e[t] = n : a ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
		})(Function.prototype, a, function() {
			return "function" == typeof this && this[s] || l.call(this)
		})
	}, {
		114: 114,
		23: 23,
		38: 38,
		39: 39,
		40: 40
	}],
	88: [function(e, t, n) {
		t.exports = function(e, t) {
			var n = t === Object(t) ? function(e) {
				return t[e]
			} : t;
			return function(t) {
				return String(t).replace(e, n)
			}
		}
	}, {}],
	89: [function(e, t, n) {
		t.exports = Object.is || function(e, t) {
			return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
		}
	}, {}],
	90: [function(e, t, n) {
		var i = e(49),
			r = e(7),
			o = function(e, t) {
				if(r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, i) {
				try {
					i = e(25)(Function.call, e(70).f(Object.prototype, "__proto__").set, 2), i(t, []), n = !(t instanceof Array)
				} catch(r) {
					n = !0
				}
				return function(e, t) {
					return o(e, t), n ? e.__proto__ = t : i(e, t), e
				}
			}({}, !1) : void 0),
			check: o
		}
	}, {
		25: 25,
		49: 49,
		7: 7,
		70: 70
	}],
	91: [function(e, t, n) {
		"use strict";
		var i = e(38),
			r = e(67),
			o = e(28),
			s = e(117)("species");
		t.exports = function(e) {
			var t = i[e];
			o && t && !t[s] && r.f(t, s, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, {
		117: 117,
		28: 28,
		38: 38,
		67: 67
	}],
	92: [function(e, t, n) {
		var i = e(67).f,
			r = e(39),
			o = e(117)("toStringTag");
		t.exports = function(e, t, n) {
			e && !r(e = n ? e : e.prototype, o) && i(e, o, {
				configurable: !0,
				value: t
			})
		}
	}, {
		117: 117,
		39: 39,
		67: 67
	}],
	93: [function(e, t, n) {
		var i = e(94)("keys"),
			r = e(114);
		t.exports = function(e) {
			return i[e] || (i[e] = r(e))
		}
	}, {
		114: 114,
		94: 94
	}],
	94: [function(e, t, n) {
		var i = e(38),
			r = "__core-js_shared__",
			o = i[r] || (i[r] = {});
		t.exports = function(e) {
			return o[e] || (o[e] = {})
		}
	}, {
		38: 38
	}],
	95: [function(e, t, n) {
		var i = e(7),
			r = e(3),
			o = e(117)("species");
		t.exports = function(e, t) {
			var n, s = i(e).constructor;
			return void 0 === s || void 0 == (n = i(s)[o]) ? t : r(n)
		}
	}, {
		117: 117,
		3: 3,
		7: 7
	}],
	96: [function(e, t, n) {
		var i = e(34);
		t.exports = function(e, t) {
			return !!e && i(function() {
				t ? e.call(null, function() {}, 1) : e.call(null)
			})
		}
	}, {
		34: 34
	}],
	97: [function(e, t, n) {
		var i = e(106),
			r = e(27);
		t.exports = function(e) {
			return function(t, n) {
				var o, s, a = String(r(t)),
					l = i(n),
					c = a.length;
				return l < 0 || l >= c ? e ? "" : void 0 : (o = a.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : o : e ? a.slice(l, l + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
			}
		}
	}, {
		106: 106,
		27: 27
	}],
	98: [function(e, t, n) {
		var i = e(50),
			r = e(27);
		t.exports = function(e, t, n) {
			if(i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
			return String(r(e))
		}
	}, {
		27: 27,
		50: 50
	}],
	99: [function(e, t, n) {
		var i = e(32),
			r = e(34),
			o = e(27),
			s = /"/g,
			a = function(e, t, n, i) {
				var r = String(o(e)),
					a = "<" + t;
				return "" !== n && (a += " " + n + '="' + String(i).replace(s, "&quot;") + '"'), a + ">" + r + "</" + t + ">"
			};
		t.exports = function(e, t) {
			var n = {};
			n[e] = t(a), i(i.P + i.F * r(function() {
				var t = "" [e]('"');
				return t !== t.toLowerCase() || t.split('"').length > 3
			}), "String", n)
		}
	}, {
		27: 27,
		32: 32,
		34: 34
	}],
	100: [function(e, t, n) {
		var i = e(108),
			r = e(101),
			o = e(27);
		t.exports = function(e, t, n, s) {
			var a = String(o(e)),
				l = a.length,
				c = void 0 === n ? " " : String(n),
				u = i(t);
			if(u <= l || "" == c) return a;
			var d = u - l,
				f = r.call(c, Math.ceil(d / c.length));
			return f.length > d && (f = f.slice(0, d)), s ? f + a : a + f
		}
	}, {
		101: 101,
		108: 108,
		27: 27
	}],
	101: [function(e, t, n) {
		"use strict";
		var i = e(106),
			r = e(27);
		t.exports = function(e) {
			var t = String(r(this)),
				n = "",
				o = i(e);
			if(o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
			for(; o > 0;
				(o >>>= 1) && (t += t)) 1 & o && (n += t);
			return n
		}
	}, {
		106: 106,
		27: 27
	}],
	102: [function(e, t, n) {
		var i = e(32),
			r = e(27),
			o = e(34),
			s = e(103),
			a = "[" + s + "]",
			l = "​",
			c = RegExp("^" + a + a + "*"),
			u = RegExp(a + a + "*$"),
			d = function(e, t, n) {
				var r = {},
					a = o(function() {
						return !!s[e]() || l[e]() != l
					}),
					c = r[e] = a ? t(f) : s[e];
				n && (r[n] = c), i(i.P + i.F * a, "String", r)
			},
			f = d.trim = function(e, t) {
				return e = String(r(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
			};
		t.exports = d
	}, {
		103: 103,
		27: 27,
		32: 32,
		34: 34
	}],
	103: [function(e, t, n) {
		t.exports = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
	}, {}],
	104: [function(e, t, n) {
		var i, r, o, s = e(25),
			a = e(44),
			l = e(41),
			c = e(29),
			u = e(38),
			d = u.process,
			f = u.setImmediate,
			h = u.clearImmediate,
			p = u.MessageChannel,
			m = 0,
			g = {},
			v = "onreadystatechange",
			y = function() {
				var e = +this;
				if(g.hasOwnProperty(e)) {
					var t = g[e];
					delete g[e], t()
				}
			},
			b = function(e) {
				y.call(e.data)
			};
		f && h || (f = function(e) {
			for(var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
			return g[++m] = function() {
				a("function" == typeof e ? e : Function(e), t)
			}, i(m), m
		}, h = function(e) {
			delete g[e]
		}, "process" == e(18)(d) ? i = function(e) {
			d.nextTick(s(y, e, 1))
		} : p ? (r = new p, o = r.port2, r.port1.onmessage = b, i = s(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function(e) {
			u.postMessage(e + "", "*")
		}, u.addEventListener("message", b, !1)) : i = v in c("script") ? function(e) {
			l.appendChild(c("script"))[v] = function() {
				l.removeChild(this), y.call(e)
			}
		} : function(e) {
			setTimeout(s(y, e, 1), 0)
		}), t.exports = {
			set: f,
			clear: h
		}
	}, {
		18: 18,
		25: 25,
		29: 29,
		38: 38,
		41: 41,
		44: 44
	}],
	105: [function(e, t, n) {
		var i = e(106),
			r = Math.max,
			o = Math.min;
		t.exports = function(e, t) {
			return e = i(e), e < 0 ? r(e + t, 0) : o(e, t)
		}
	}, {
		106: 106
	}],
	106: [function(e, t, n) {
		var i = Math.ceil,
			r = Math.floor;
		t.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? r : i)(e)
		}
	}, {}],
	107: [function(e, t, n) {
		var i = e(45),
			r = e(27);
		t.exports = function(e) {
			return i(r(e))
		}
	}, {
		27: 27,
		45: 45
	}],
	108: [function(e, t, n) {
		var i = e(106),
			r = Math.min;
		t.exports = function(e) {
			return e > 0 ? r(i(e), 9007199254740991) : 0
		}
	}, {
		106: 106
	}],
	109: [function(e, t, n) {
		var i = e(27);
		t.exports = function(e) {
			return Object(i(e))
		}
	}, {
		27: 27
	}],
	110: [function(e, t, n) {
		var i = e(49);
		t.exports = function(e, t) {
			if(!i(e)) return e;
			var n, r;
			if(t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
			if("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
			if(!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
			throw TypeError("Can't convert object to primitive value")
		}
	}, {
		49: 49
	}],
	111: [function(e, t, n) {
		"use strict";
		if(e(28)) {
			var i = e(58),
				r = e(38),
				o = e(34),
				s = e(32),
				a = e(113),
				l = e(112),
				c = e(25),
				u = e(6),
				d = e(85),
				f = e(40),
				h = e(86),
				p = e(106),
				m = e(108),
				g = e(105),
				v = e(110),
				y = e(39),
				b = e(89),
				w = e(17),
				x = e(49),
				_ = e(109),
				C = e(46),
				k = e(66),
				N = e(74),
				E = e(72).f,
				S = e(118),
				T = e(114),
				D = e(117),
				A = e(12),
				U = e(11),
				M = e(95),
				O = e(130),
				I = e(56),
				L = e(54),
				P = e(91),
				R = e(9),
				B = e(8),
				j = e(67),
				F = e(70),
				H = j.f,
				q = F.f,
				$ = r.RangeError,
				z = r.TypeError,
				W = r.Uint8Array,
				V = "ArrayBuffer",
				Y = "Shared" + V,
				X = "BYTES_PER_ELEMENT",
				K = "prototype",
				G = Array[K],
				J = l.ArrayBuffer,
				Q = l.DataView,
				Z = A(0),
				ee = A(2),
				te = A(3),
				ne = A(4),
				ie = A(5),
				re = A(6),
				oe = U(!0),
				se = U(!1),
				ae = O.values,
				le = O.keys,
				ce = O.entries,
				ue = G.lastIndexOf,
				de = G.reduce,
				fe = G.reduceRight,
				he = G.join,
				pe = G.sort,
				me = G.slice,
				ge = G.toString,
				ve = G.toLocaleString,
				ye = D("iterator"),
				be = D("toStringTag"),
				we = T("typed_constructor"),
				xe = T("def_constructor"),
				_e = a.CONSTR,
				Ce = a.TYPED,
				ke = a.VIEW,
				Ne = "Wrong length!",
				Ee = A(1, function(e, t) {
					return Me(M(e, e[xe]), t)
				}),
				Se = o(function() {
					return 1 === new W(new Uint16Array([1]).buffer)[0]
				}),
				Te = !!W && !!W[K].set && o(function() {
					new W(1).set({})
				}),
				De = function(e, t) {
					if(void 0 === e) throw z(Ne);
					var n = +e,
						i = m(e);
					if(t && !b(n, i)) throw $(Ne);
					return i
				},
				Ae = function(e, t) {
					var n = p(e);
					if(n < 0 || n % t) throw $("Wrong offset!");
					return n
				},
				Ue = function(e) {
					if(x(e) && Ce in e) return e;
					throw z(e + " is not a typed array!")
				},
				Me = function(e, t) {
					if(!(x(e) && we in e)) throw z("It is not a typed array constructor!");
					return new e(t)
				},
				Oe = function(e, t) {
					return Ie(M(e, e[xe]), t)
				},
				Ie = function(e, t) {
					for(var n = 0, i = t.length, r = Me(e, i); i > n;) r[n] = t[n++];
					return r
				},
				Le = function(e, t, n) {
					H(e, t, {
						get: function() {
							return this._d[n]
						}
					})
				},
				Pe = function(e) {
					var t, n, i, r, o, s, a = _(e),
						l = arguments.length,
						u = l > 1 ? arguments[1] : void 0,
						d = void 0 !== u,
						f = S(a);
					if(void 0 != f && !C(f)) {
						for(s = f.call(a), i = [], t = 0; !(o = s.next()).done; t++) i.push(o.value);
						a = i
					}
					for(d && l > 2 && (u = c(u, arguments[2], 2)), t = 0, n = m(a.length), r = Me(this, n); n > t; t++) r[t] = d ? u(a[t], t) : a[t];
					return r
				},
				Re = function() {
					for(var e = 0, t = arguments.length, n = Me(this, t); t > e;) n[e] = arguments[e++];
					return n
				},
				Be = !!W && o(function() {
					ve.call(new W(1))
				}),
				je = function() {
					return ve.apply(Be ? me.call(Ue(this)) : Ue(this), arguments)
				},
				Fe = {
					copyWithin: function(e, t) {
						return B.call(Ue(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
					},
					every: function(e) {
						return ne(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					fill: function(e) {
						return R.apply(Ue(this), arguments)
					},
					filter: function(e) {
						return Oe(this, ee(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0))
					},
					find: function(e) {
						return ie(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					findIndex: function(e) {
						return re(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					forEach: function(e) {
						Z(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					indexOf: function(e) {
						return se(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					includes: function(e) {
						return oe(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					join: function(e) {
						return he.apply(Ue(this), arguments)
					},
					lastIndexOf: function(e) {
						return ue.apply(Ue(this), arguments)
					},
					map: function(e) {
						return Ee(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					reduce: function(e) {
						return de.apply(Ue(this), arguments)
					},
					reduceRight: function(e) {
						return fe.apply(Ue(this), arguments)
					},
					reverse: function() {
						for(var e, t = this, n = Ue(t).length, i = Math.floor(n / 2), r = 0; r < i;) e = t[r], t[r++] = t[--n], t[n] = e;
						return t
					},
					some: function(e) {
						return te(Ue(this), e, arguments.length > 1 ? arguments[1] : void 0)
					},
					sort: function(e) {
						return pe.call(Ue(this), e)
					},
					subarray: function(e, t) {
						var n = Ue(this),
							i = n.length,
							r = g(e, i);
						return new(M(n, n[xe]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, m((void 0 === t ? i : g(t, i)) - r))
					}
				},
				He = function(e, t) {
					return Oe(this, me.call(Ue(this), e, t))
				},
				qe = function(e) {
					Ue(this);
					var t = Ae(arguments[1], 1),
						n = this.length,
						i = _(e),
						r = m(i.length),
						o = 0;
					if(r + t > n) throw $(Ne);
					for(; o < r;) this[t + o] = i[o++]
				},
				$e = {
					entries: function() {
						return ce.call(Ue(this))
					},
					keys: function() {
						return le.call(Ue(this))
					},
					values: function() {
						return ae.call(Ue(this))
					}
				},
				ze = function(e, t) {
					return x(e) && e[Ce] && "symbol" != ("undefined" == typeof t ? "undefined" : _typeof(t)) && t in e && String(+t) == String(t)
				},
				We = function(e, t) {
					return ze(e, t = v(t, !0)) ? d(2, e[t]) : q(e, t)
				},
				Ve = function(e, t, n) {
					return !(ze(e, t = v(t, !0)) && x(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? H(e, t, n) : (e[t] = n.value, e)
				};
			_e || (F.f = We, j.f = Ve), s(s.S + s.F * !_e, "Object", {
				getOwnPropertyDescriptor: We,
				defineProperty: Ve
			}), o(function() {
				ge.call({})
			}) && (ge = ve = function() {
				return he.call(this)
			});
			var Ye = h({}, Fe);
			h(Ye, $e), f(Ye, ye, $e.values), h(Ye, {
				slice: He,
				set: qe,
				constructor: function() {},
				toString: ge,
				toLocaleString: je
			}), Le(Ye, "buffer", "b"), Le(Ye, "byteOffset", "o"), Le(Ye, "byteLength", "l"), Le(Ye, "length", "e"), H(Ye, be, {
				get: function() {
					return this[Ce]
				}
			}), t.exports = function(e, t, n, l) {
				l = !!l;
				var c = e + (l ? "Clamped" : "") + "Array",
					d = "Uint8Array" != c,
					h = "get" + e,
					p = "set" + e,
					g = r[c],
					v = g || {},
					y = g && N(g),
					b = !g || !a.ABV,
					_ = {},
					C = g && g[K],
					S = function(e, n) {
						var i = e._d;
						return i.v[h](n * t + i.o, Se)
					},
					T = function(e, n, i) {
						var r = e._d;
						l && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[p](n * t + r.o, i, Se)
					},
					D = function(e, t) {
						H(e, t, {
							get: function() {
								return S(this, t)
							},
							set: function(e) {
								return T(this, t, e)
							},
							enumerable: !0
						})
					};
				b ? (g = n(function(e, n, i, r) {
					u(e, g, c, "_d");
					var o, s, a, l, d = 0,
						h = 0;
					if(x(n)) {
						if(!(n instanceof J || (l = w(n)) == V || l == Y)) return Ce in n ? Ie(g, n) : Pe.call(g, n);
						o = n, h = Ae(i, t);
						var p = n.byteLength;
						if(void 0 === r) {
							if(p % t) throw $(Ne);
							if(s = p - h, s < 0) throw $(Ne)
						} else if(s = m(r) * t, s + h > p) throw $(Ne);
						a = s / t
					} else a = De(n, !0), s = a * t, o = new J(s);
					for(f(e, "_d", {
							b: o,
							o: h,
							l: s,
							e: a,
							v: new Q(o)
						}); d < a;) D(e, d++)
				}), C = g[K] = k(Ye), f(C, "constructor", g)) : L(function(e) {
					new g(null), new g(e)
				}, !0) || (g = n(function(e, n, i, r) {
					u(e, g, c);
					var o;
					return x(n) ? n instanceof J || (o = w(n)) == V || o == Y ? void 0 !== r ? new v(n, Ae(i, t), r) : void 0 !== i ? new v(n, Ae(i, t)) : new v(n) : Ce in n ? Ie(g, n) : Pe.call(g, n) : new v(De(n, d))
				}), Z(y !== Function.prototype ? E(v).concat(E(y)) : E(v), function(e) {
					e in g || f(g, e, v[e])
				}), g[K] = C, i || (C.constructor = g));
				var A = C[ye],
					U = !!A && ("values" == A.name || void 0 == A.name),
					M = $e.values;
				f(g, we, !0), f(C, Ce, c), f(C, ke, !0), f(C, xe, g), (l ? new g(1)[be] == c : be in C) || H(C, be, {
					get: function() {
						return c
					}
				}), _[c] = g, s(s.G + s.W + s.F * (g != v), _), s(s.S, c, {
					BYTES_PER_ELEMENT: t,
					from: Pe,
					of: Re
				}), X in C || f(C, X, t), s(s.P, c, Fe), P(c), s(s.P + s.F * Te, c, {
					set: qe
				}), s(s.P + s.F * !U, c, $e), s(s.P + s.F * (C.toString != ge), c, {
					toString: ge
				}), s(s.P + s.F * o(function() {
					new g(1).slice()
				}), c, {
					slice: He
				}), s(s.P + s.F * (o(function() {
					return [1, 2].toLocaleString() != new g([1, 2]).toLocaleString()
				}) || !o(function() {
					C.toLocaleString.call([1, 2])
				})), c, {
					toLocaleString: je
				}), I[c] = U ? A : M, i || U || f(C, ye, M)
			}
		} else t.exports = function() {}
	}, {
		105: 105,
		106: 106,
		108: 108,
		109: 109,
		11: 11,
		110: 110,
		112: 112,
		113: 113,
		114: 114,
		117: 117,
		118: 118,
		12: 12,
		130: 130,
		17: 17,
		25: 25,
		28: 28,
		32: 32,
		34: 34,
		38: 38,
		39: 39,
		40: 40,
		46: 46,
		49: 49,
		54: 54,
		56: 56,
		58: 58,
		6: 6,
		66: 66,
		67: 67,
		70: 70,
		72: 72,
		74: 74,
		8: 8,
		85: 85,
		86: 86,
		89: 89,
		9: 9,
		91: 91,
		95: 95
	}],
	112: [function(e, t, n) {
		"use strict";
		var i = e(38),
			r = e(28),
			o = e(58),
			s = e(113),
			a = e(40),
			l = e(86),
			c = e(34),
			u = e(6),
			d = e(106),
			f = e(108),
			h = e(72).f,
			p = e(67).f,
			m = e(9),
			g = e(92),
			v = "ArrayBuffer",
			y = "DataView",
			b = "prototype",
			w = "Wrong length!",
			x = "Wrong index!",
			_ = i[v],
			C = i[y],
			k = i.Math,
			N = i.RangeError,
			E = i.Infinity,
			S = _,
			T = k.abs,
			D = k.pow,
			A = k.floor,
			U = k.log,
			M = k.LN2,
			O = "buffer",
			I = "byteLength",
			L = "byteOffset",
			P = r ? "_b" : O,
			R = r ? "_l" : I,
			B = r ? "_o" : L,
			j = function(e, t, n) {
				var i, r, o, s = Array(n),
					a = 8 * n - t - 1,
					l = (1 << a) - 1,
					c = l >> 1,
					u = 23 === t ? D(2, -24) - D(2, -77) : 0,
					d = 0,
					f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
				for(e = T(e), e != e || e === E ? (r = e != e ? 1 : 0, i = l) : (i = A(U(e) / M), e * (o = D(2, -i)) < 1 && (i--, o *= 2), e += i + c >= 1 ? u / o : u * D(2, 1 - c), e * o >= 2 && (i++, o /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * o - 1) * D(2, t), i += c) : (r = e * D(2, c - 1) * D(2, t), i = 0)); t >= 8; s[d++] = 255 & r, r /= 256, t -= 8);
				for(i = i << t | r, a += t; a > 0; s[d++] = 255 & i, i /= 256, a -= 8);
				return s[--d] |= 128 * f, s
			},
			F = function(e, t, n) {
				var i, r = 8 * n - t - 1,
					o = (1 << r) - 1,
					s = o >> 1,
					a = r - 7,
					l = n - 1,
					c = e[l--],
					u = 127 & c;
				for(c >>= 7; a > 0; u = 256 * u + e[l], l--, a -= 8);
				for(i = u & (1 << -a) - 1, u >>= -a, a += t; a > 0; i = 256 * i + e[l], l--, a -= 8);
				if(0 === u) u = 1 - s;
				else {
					if(u === o) return i ? NaN : c ? -E : E;
					i += D(2, t), u -= s
				}
				return(c ? -1 : 1) * i * D(2, u - t)
			},
			H = function(e) {
				return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
			},
			q = function(e) {
				return [255 & e]
			},
			$ = function(e) {
				return [255 & e, e >> 8 & 255]
			},
			z = function(e) {
				return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
			},
			W = function(e) {
				return j(e, 52, 8)
			},
			V = function(e) {
				return j(e, 23, 4)
			},
			Y = function(e, t, n) {
				p(e[b], t, {
					get: function() {
						return this[n]
					}
				})
			},
			X = function(e, t, n, i) {
				var r = +n,
					o = d(r);
				if(r != o || o < 0 || o + t > e[R]) throw N(x);
				var s = e[P]._b,
					a = o + e[B],
					l = s.slice(a, a + t);
				return i ? l : l.reverse()
			},
			K = function(e, t, n, i, r, o) {
				var s = +n,
					a = d(s);
				if(s != a || a < 0 || a + t > e[R]) throw N(x);
				for(var l = e[P]._b, c = a + e[B], u = i(+r), f = 0; f < t; f++) l[c + f] = u[o ? f : t - f - 1]
			},
			G = function(e, t) {
				u(e, _, v);
				var n = +t,
					i = f(n);
				if(n != i) throw N(w);
				return i
			};
		if(s.ABV) {
			if(!c(function() {
					new _
				}) || !c(function() {
					new _(.5)
				})) {
				_ = function(e) {
					return new S(G(this, e))
				};
				for(var J, Q = _[b] = S[b], Z = h(S), ee = 0; Z.length > ee;)(J = Z[ee++]) in _ || a(_, J, S[J]);
				o || (Q.constructor = _)
			}
			var te = new C(new _(2)),
				ne = C[b].setInt8;
			te.setInt8(0, 2147483648), te.setInt8(1, 2147483649), !te.getInt8(0) && te.getInt8(1) || l(C[b], {
				setInt8: function(e, t) {
					ne.call(this, e, t << 24 >> 24)
				},
				setUint8: function(e, t) {
					ne.call(this, e, t << 24 >> 24)
				}
			}, !0)
		} else _ = function(e) {
			var t = G(this, e);
			this._b = m.call(Array(t), 0), this[R] = t
		}, C = function(e, t, n) {
			u(this, C, y), u(e, _, y);
			var i = e[R],
				r = d(t);
			if(r < 0 || r > i) throw N("Wrong offset!");
			if(n = void 0 === n ? i - r : f(n), r + n > i) throw N(w);
			this[P] = e, this[B] = r, this[R] = n
		}, r && (Y(_, I, "_l"), Y(C, O, "_b"), Y(C, I, "_l"), Y(C, L, "_o")), l(C[b], {
			getInt8: function(e) {
				return X(this, 1, e)[0] << 24 >> 24
			},
			getUint8: function(e) {
				return X(this, 1, e)[0]
			},
			getInt16: function(e) {
				var t = X(this, 2, e, arguments[1]);
				return(t[1] << 8 | t[0]) << 16 >> 16
			},
			getUint16: function(e) {
				var t = X(this, 2, e, arguments[1]);
				return t[1] << 8 | t[0]
			},
			getInt32: function(e) {
				return H(X(this, 4, e, arguments[1]))
			},
			getUint32: function(e) {
				return H(X(this, 4, e, arguments[1])) >>> 0
			},
			getFloat32: function(e) {
				return F(X(this, 4, e, arguments[1]), 23, 4)
			},
			getFloat64: function(e) {
				return F(X(this, 8, e, arguments[1]), 52, 8)
			},
			setInt8: function(e, t) {
				K(this, 1, e, q, t)
			},
			setUint8: function(e, t) {
				K(this, 1, e, q, t)
			},
			setInt16: function(e, t) {
				K(this, 2, e, $, t, arguments[2])
			},
			setUint16: function(e, t) {
				K(this, 2, e, $, t, arguments[2])
			},
			setInt32: function(e, t) {
				K(this, 4, e, z, t, arguments[2])
			},
			setUint32: function(e, t) {
				K(this, 4, e, z, t, arguments[2])
			},
			setFloat32: function(e, t) {
				K(this, 4, e, V, t, arguments[2])
			},
			setFloat64: function(e, t) {
				K(this, 8, e, W, t, arguments[2])
			}
		});
		g(_, v), g(C, y), a(C[b], s.VIEW, !0), n[v] = _, n[y] = C
	}, {
		106: 106,
		108: 108,
		113: 113,
		28: 28,
		34: 34,
		38: 38,
		40: 40,
		58: 58,
		6: 6,
		67: 67,
		72: 72,
		86: 86,
		9: 9,
		92: 92
	}],
	113: [function(e, t, n) {
		for(var i, r = e(38), o = e(40), s = e(114), a = s("typed_array"), l = s("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, d = 0, f = 9, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); d < f;)(i = r[h[d++]]) ? (o(i.prototype, a, !0), o(i.prototype, l, !0)) : u = !1;
		t.exports = {
			ABV: c,
			CONSTR: u,
			TYPED: a,
			VIEW: l
		}
	}, {
		114: 114,
		38: 38,
		40: 40
	}],
	114: [function(e, t, n) {
		var i = 0,
			r = Math.random();
		t.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36))
		}
	}, {}],
	115: [function(e, t, n) {
		var i = e(38),
			r = e(23),
			o = e(58),
			s = e(116),
			a = e(67).f;
		t.exports = function(e) {
			var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
			"_" == e.charAt(0) || e in t || a(t, e, {
				value: s.f(e)
			})
		}
	}, {
		116: 116,
		23: 23,
		38: 38,
		58: 58,
		67: 67
	}],
	116: [function(e, t, n) {
		n.f = e(117)
	}, {
		117: 117
	}],
	117: [function(e, t, n) {
		var i = e(94)("wks"),
			r = e(114),
			o = e(38).Symbol,
			s = "function" == typeof o,
			a = t.exports = function(e) {
				return i[e] || (i[e] = s && o[e] || (s ? o : r)("Symbol." + e))
			};
		a.store = i
	}, {
		114: 114,
		38: 38,
		94: 94
	}],
	118: [function(e, t, n) {
		var i = e(17),
			r = e(117)("iterator"),
			o = e(56);
		t.exports = e(23).getIteratorMethod = function(e) {
			if(void 0 != e) return e[r] || e["@@iterator"] || o[i(e)]
		}
	}, {
		117: 117,
		17: 17,
		23: 23,
		56: 56
	}],
	119: [function(e, t, n) {
		var i = e(32),
			r = e(88)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
		i(i.S, "RegExp", {
			escape: function(e) {
				return r(e)
			}
		})
	}, {
		32: 32,
		88: 88
	}],
	120: [function(e, t, n) {
		var i = e(32);
		i(i.P, "Array", {
			copyWithin: e(8)
		}), e(5)("copyWithin")
	}, {
		32: 32,
		5: 5,
		8: 8
	}],
	121: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(4);
		i(i.P + i.F * !e(96)([].every, !0), "Array", {
			every: function(e) {
				return r(this, e, arguments[1])
			}
		})
	}, {
		12: 12,
		32: 32,
		96: 96
	}],
	122: [function(e, t, n) {
		var i = e(32);
		i(i.P, "Array", {
			fill: e(9)
		}), e(5)("fill")
	}, {
		32: 32,
		5: 5,
		9: 9
	}],
	123: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(2);
		i(i.P + i.F * !e(96)([].filter, !0), "Array", {
			filter: function(e) {
				return r(this, e, arguments[1])
			}
		})
	}, {
		12: 12,
		32: 32,
		96: 96
	}],
	124: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(6),
			o = "findIndex",
			s = !0;
		o in [] && Array(1)[o](function() {
			s = !1
		}), i(i.P + i.F * s, "Array", {
			findIndex: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), e(5)(o)
	}, {
		12: 12,
		32: 32,
		5: 5
	}],
	125: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(5),
			o = "find",
			s = !0;
		o in [] && Array(1)[o](function() {
			s = !1
		}), i(i.P + i.F * s, "Array", {
			find: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), e(5)(o)
	}, {
		12: 12,
		32: 32,
		5: 5
	}],
	126: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(0),
			o = e(96)([].forEach, !0);
		i(i.P + i.F * !o, "Array", {
			forEach: function(e) {
				return r(this, e, arguments[1])
			}
		})
	}, {
		12: 12,
		32: 32,
		96: 96
	}],
	127: [function(e, t, n) {
		"use strict";
		var i = e(25),
			r = e(32),
			o = e(109),
			s = e(51),
			a = e(46),
			l = e(108),
			c = e(24),
			u = e(118);
		r(r.S + r.F * !e(54)(function(e) {
			Array.from(e)
		}), "Array", {
			from: function(e) {
				var t, n, r, d, f = o(e),
					h = "function" == typeof this ? this : Array,
					p = arguments.length,
					m = p > 1 ? arguments[1] : void 0,
					g = void 0 !== m,
					v = 0,
					y = u(f);
				if(g && (m = i(m, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || h == Array && a(y))
					for(t = l(f.length), n = new h(t); t > v; v++) c(n, v, g ? m(f[v], v) : f[v]);
				else
					for(d = y.call(f), n = new h; !(r = d.next()).done; v++) c(n, v, g ? s(d, m, [r.value, v], !0) : r.value);
				return n.length = v, n
			}
		})
	}, {
		108: 108,
		109: 109,
		118: 118,
		24: 24,
		25: 25,
		32: 32,
		46: 46,
		51: 51,
		54: 54
	}],
	128: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(11)(!1),
			o = [].indexOf,
			s = !!o && 1 / [1].indexOf(1, -0) < 0;
		i(i.P + i.F * (s || !e(96)(o)), "Array", {
			indexOf: function(e) {
				return s ? o.apply(this, arguments) || 0 : r(this, e, arguments[1])
			}
		})
	}, {
		11: 11,
		32: 32,
		96: 96
	}],
	129: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Array", {
			isArray: e(47)
		})
	}, {
		32: 32,
		47: 47
	}],
	130: [function(e, t, n) {
		"use strict";
		var i = e(5),
			r = e(55),
			o = e(56),
			s = e(107);
		t.exports = e(53)(Array, "Array", function(e, t) {
			this._t = s(e), this._i = 0, this._k = t
		}, function() {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
		}, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
	}, {
		107: 107,
		5: 5,
		53: 53,
		55: 55,
		56: 56
	}],
	131: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(107),
			o = [].join;
		i(i.P + i.F * (e(45) != Object || !e(96)(o)), "Array", {
			join: function(e) {
				return o.call(r(this), void 0 === e ? "," : e)
			}
		})
	}, {
		107: 107,
		32: 32,
		45: 45,
		96: 96
	}],
	132: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(107),
			o = e(106),
			s = e(108),
			a = [].lastIndexOf,
			l = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
		i(i.P + i.F * (l || !e(96)(a)), "Array", {
			lastIndexOf: function(e) {
				if(l) return a.apply(this, arguments) || 0;
				var t = r(this),
					n = s(t.length),
					i = n - 1;
				for(arguments.length > 1 && (i = Math.min(i, o(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
					if(i in t && t[i] === e) return i || 0;
				return -1
			}
		})
	}, {
		106: 106,
		107: 107,
		108: 108,
		32: 32,
		96: 96
	}],
	133: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(1);
		i(i.P + i.F * !e(96)([].map, !0), "Array", {
			map: function(e) {
				return r(this, e, arguments[1])
			}
		})
	}, {
		12: 12,
		32: 32,
		96: 96
	}],
	134: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(24);
		i(i.S + i.F * e(34)(function() {
			function e() {}
			return !(Array.of.call(e) instanceof e)
		}), "Array", { of: function() {
				for(var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) r(n, e, arguments[e++]);
				return n.length = t, n
			}
		})
	}, {
		24: 24,
		32: 32,
		34: 34
	}],
	135: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(13);
		i(i.P + i.F * !e(96)([].reduceRight, !0), "Array", {
			reduceRight: function(e) {
				return r(this, e, arguments.length, arguments[1], !0)
			}
		})
	}, {
		13: 13,
		32: 32,
		96: 96
	}],
	136: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(13);
		i(i.P + i.F * !e(96)([].reduce, !0), "Array", {
			reduce: function(e) {
				return r(this, e, arguments.length, arguments[1], !1)
			}
		})
	}, {
		13: 13,
		32: 32,
		96: 96
	}],
	137: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(41),
			o = e(18),
			s = e(105),
			a = e(108),
			l = [].slice;
		i(i.P + i.F * e(34)(function() {
			r && l.call(r)
		}), "Array", {
			slice: function(e, t) {
				var n = a(this.length),
					i = o(this);
				if(t = void 0 === t ? n : t, "Array" == i) return l.call(this, e, t);
				for(var r = s(e, n), c = s(t, n), u = a(c - r), d = Array(u), f = 0; f < u; f++) d[f] = "String" == i ? this.charAt(r + f) : this[r + f];
				return d
			}
		})
	}, {
		105: 105,
		108: 108,
		18: 18,
		32: 32,
		34: 34,
		41: 41
	}],
	138: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(12)(3);
		i(i.P + i.F * !e(96)([].some, !0), "Array", {
			some: function(e) {
				return r(this, e, arguments[1])
			}
		})
	}, {
		12: 12,
		32: 32,
		96: 96
	}],
	139: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(3),
			o = e(109),
			s = e(34),
			a = [].sort,
			l = [1, 2, 3];
		i(i.P + i.F * (s(function() {
			l.sort(void 0)
		}) || !s(function() {
			l.sort(null)
		}) || !e(96)(a)), "Array", {
			sort: function(e) {
				return void 0 === e ? a.call(o(this)) : a.call(o(this), r(e))
			}
		})
	}, {
		109: 109,
		3: 3,
		32: 32,
		34: 34,
		96: 96
	}],
	140: [function(e, t, n) {
		e(91)("Array")
	}, {
		91: 91
	}],
	141: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Date", {
			now: function() {
				return(new Date).getTime()
			}
		})
	}, {
		32: 32
	}],
	142: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(34),
			o = Date.prototype.getTime,
			s = function(e) {
				return e > 9 ? e : "0" + e
			};
		i(i.P + i.F * (r(function() {
			return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
		}) || !r(function() {
			new Date(NaN).toISOString()
		})), "Date", {
			toISOString: function() {
				if(!isFinite(o.call(this))) throw RangeError("Invalid time value");
				var e = this,
					t = e.getUTCFullYear(),
					n = e.getUTCMilliseconds(),
					i = t < 0 ? "-" : t > 9999 ? "+" : "";
				return i + ("00000" + Math.abs(t)).slice(i ? -6 : -4) + "-" + s(e.getUTCMonth() + 1) + "-" + s(e.getUTCDate()) + "T" + s(e.getUTCHours()) + ":" + s(e.getUTCMinutes()) + ":" + s(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
			}
		})
	}, {
		32: 32,
		34: 34
	}],
	143: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(109),
			o = e(110);
		i(i.P + i.F * e(34)(function() {
			return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
				toISOString: function() {
					return 1
				}
			})
		}), "Date", {
			toJSON: function(e) {
				var t = r(this),
					n = o(t);
				return "number" != typeof n || isFinite(n) ? t.toISOString() : null
			}
		})
	}, {
		109: 109,
		110: 110,
		32: 32,
		34: 34
	}],
	144: [function(e, t, n) {
		var i = e(117)("toPrimitive"),
			r = Date.prototype;
		i in r || e(40)(r, i, e(26))
	}, {
		117: 117,
		26: 26,
		40: 40
	}],
	145: [function(e, t, n) {
		var i = Date.prototype,
			r = "Invalid Date",
			o = "toString",
			s = i[o],
			a = i.getTime;
		new Date(NaN) + "" != r && e(87)(i, o, function() {
			var e = a.call(this);
			return e === e ? s.call(this) : r
		})
	}, {
		87: 87
	}],
	146: [function(e, t, n) {
		var i = e(32);
		i(i.P, "Function", {
			bind: e(16)
		})
	}, {
		16: 16,
		32: 32
	}],
	147: [function(e, t, n) {
		"use strict";
		var i = e(49),
			r = e(74),
			o = e(117)("hasInstance"),
			s = Function.prototype;
		o in s || e(67).f(s, o, {
			value: function(e) {
				if("function" != typeof this || !i(e)) return !1;
				if(!i(this.prototype)) return e instanceof this;
				for(; e = r(e);)
					if(this.prototype === e) return !0;
				return !1
			}
		})
	}, {
		117: 117,
		49: 49,
		67: 67,
		74: 74
	}],
	148: [function(e, t, n) {
		var i = e(67).f,
			r = e(85),
			o = e(39),
			s = Function.prototype,
			a = /^\s*function ([^ (]*)/,
			l = "name",
			c = Object.isExtensible || function() {
				return !0
			};
		l in s || e(28) && i(s, l, {
			configurable: !0,
			get: function() {
				try {
					var e = this,
						t = ("" + e).match(a)[1];
					return o(e, l) || !c(e) || i(e, l, r(5, t)), t
				} catch(n) {
					return ""
				}
			}
		})
	}, {
		28: 28,
		39: 39,
		67: 67,
		85: 85
	}],
	149: [function(e, t, n) {
		"use strict";
		var i = e(19);
		t.exports = e(22)("Map", function(e) {
			return function() {
				return e(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		}, {
			get: function(e) {
				var t = i.getEntry(this, e);
				return t && t.v
			},
			set: function(e, t) {
				return i.def(this, 0 === e ? 0 : e, t)
			}
		}, i, !0)
	}, {
		19: 19,
		22: 22
	}],
	150: [function(e, t, n) {
		var i = e(32),
			r = e(60),
			o = Math.sqrt,
			s = Math.acosh;
		i(i.S + i.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
			acosh: function(e) {
				return(e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : r(e - 1 + o(e - 1) * o(e + 1))
			}
		})
	}, {
		32: 32,
		60: 60
	}],
	151: [function(e, t, n) {
		function i(e) {
			return isFinite(e = +e) && 0 != e ? e < 0 ? -i(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
		}
		var r = e(32),
			o = Math.asinh;
		r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
			asinh: i
		})
	}, {
		32: 32
	}],
	152: [function(e, t, n) {
		var i = e(32),
			r = Math.atanh;
		i(i.S + i.F * !(r && 1 / r(-0) < 0), "Math", {
			atanh: function(e) {
				return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
			}
		})
	}, {
		32: 32
	}],
	153: [function(e, t, n) {
		var i = e(32),
			r = e(61);
		i(i.S, "Math", {
			cbrt: function(e) {
				return r(e = +e) * Math.pow(Math.abs(e), 1 / 3)
			}
		})
	}, {
		32: 32,
		61: 61
	}],
	154: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			clz32: function(e) {
				return(e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
			}
		})
	}, {
		32: 32
	}],
	155: [function(e, t, n) {
		var i = e(32),
			r = Math.exp;
		i(i.S, "Math", {
			cosh: function(e) {
				return(r(e = +e) + r(-e)) / 2
			}
		})
	}, {
		32: 32
	}],
	156: [function(e, t, n) {
		var i = e(32),
			r = e(59);
		i(i.S + i.F * (r != Math.expm1), "Math", {
			expm1: r
		})
	}, {
		32: 32,
		59: 59
	}],
	157: [function(e, t, n) {
		var i = e(32),
			r = e(61),
			o = Math.pow,
			s = o(2, -52),
			a = o(2, -23),
			l = o(2, 127) * (2 - a),
			c = o(2, -126),
			u = function(e) {
				return e + 1 / s - 1 / s
			};
		i(i.S, "Math", {
			fround: function(e) {
				var t, n, i = Math.abs(e),
					o = r(e);
				return i < c ? o * u(i / c / a) * c * a : (t = (1 + a / s) * i, n = t - (t - i), n > l || n != n ? o * (1 / 0) : o * n)
			}
		})
	}, {
		32: 32,
		61: 61
	}],
	158: [function(e, t, n) {
		var i = e(32),
			r = Math.abs;
		i(i.S, "Math", {
			hypot: function(e, t) {
				for(var n, i, o = 0, s = 0, a = arguments.length, l = 0; s < a;) n = r(arguments[s++]), l < n ? (i = l / n, o = o * i * i + 1, l = n) : n > 0 ? (i = n / l, o += i * i) : o += n;
				return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(o)
			}
		})
	}, {
		32: 32
	}],
	159: [function(e, t, n) {
		var i = e(32),
			r = Math.imul;
		i(i.S + i.F * e(34)(function() {
			return r(4294967295, 5) != -5 || 2 != r.length
		}), "Math", {
			imul: function(e, t) {
				var n = 65535,
					i = +e,
					r = +t,
					o = n & i,
					s = n & r;
				return 0 | o * s + ((n & i >>> 16) * s + o * (n & r >>> 16) << 16 >>> 0)
			}
		})
	}, {
		32: 32,
		34: 34
	}],
	160: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			log10: function(e) {
				return Math.log(e) / Math.LN10
			}
		})
	}, {
		32: 32
	}],
	161: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			log1p: e(60)
		})
	}, {
		32: 32,
		60: 60
	}],
	162: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			log2: function(e) {
				return Math.log(e) / Math.LN2
			}
		})
	}, {
		32: 32
	}],
	163: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			sign: e(61)
		})
	}, {
		32: 32,
		61: 61
	}],
	164: [function(e, t, n) {
		var i = e(32),
			r = e(59),
			o = Math.exp;
		i(i.S + i.F * e(34)(function() {
			return !Math.sinh(-2e-17) != -2e-17
		}), "Math", {
			sinh: function(e) {
				return Math.abs(e = +e) < 1 ? (r(e) - r(-e)) / 2 : (o(e - 1) - o(-e - 1)) * (Math.E / 2)
			}
		})
	}, {
		32: 32,
		34: 34,
		59: 59
	}],
	165: [function(e, t, n) {
		var i = e(32),
			r = e(59),
			o = Math.exp;
		i(i.S, "Math", {
			tanh: function(e) {
				var t = r(e = +e),
					n = r(-e);
				return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e))
			}
		})
	}, {
		32: 32,
		59: 59
	}],
	166: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			trunc: function(e) {
				return(e > 0 ? Math.floor : Math.ceil)(e)
			}
		})
	}, {
		32: 32
	}],
	167: [function(e, t, n) {
		"use strict";
		var i = e(38),
			r = e(39),
			o = e(18),
			s = e(43),
			a = e(110),
			l = e(34),
			c = e(72).f,
			u = e(70).f,
			d = e(67).f,
			f = e(102).trim,
			h = "Number",
			p = i[h],
			m = p,
			g = p.prototype,
			v = o(e(66)(g)) == h,
			y = "trim" in String.prototype,
			b = function(e) {
				var t = a(e, !1);
				if("string" == typeof t && t.length > 2) {
					t = y ? t.trim() : f(t, 3);
					var n, i, r, o = t.charCodeAt(0);
					if(43 === o || 45 === o) {
						if(n = t.charCodeAt(2), 88 === n || 120 === n) return NaN
					} else if(48 === o) {
						switch(t.charCodeAt(1)) {
							case 66:
							case 98:
								i = 2, r = 49;
								break;
							case 79:
							case 111:
								i = 8, r = 55;
								break;
							default:
								return +t
						}
						for(var s, l = t.slice(2), c = 0, u = l.length; c < u; c++)
							if(s = l.charCodeAt(c), s < 48 || s > r) return NaN;
						return parseInt(l, i)
					}
				}
				return +t
			};
		if(!p(" 0o1") || !p("0b1") || p("+0x1")) {
			p = function(e) {
				var t = arguments.length < 1 ? 0 : e,
					n = this;
				return n instanceof p && (v ? l(function() {
					g.valueOf.call(n)
				}) : o(n) != h) ? s(new m(b(t)), n, p) : b(t)
			};
			for(var w, x = e(28) ? c(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; x.length > _; _++) r(m, w = x[_]) && !r(p, w) && d(p, w, u(m, w));
			p.prototype = g, g.constructor = p, e(87)(i, h, p)
		}
	}, {
		102: 102,
		110: 110,
		18: 18,
		28: 28,
		34: 34,
		38: 38,
		39: 39,
		43: 43,
		66: 66,
		67: 67,
		70: 70,
		72: 72,
		87: 87
	}],
	168: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Number", {
			EPSILON: Math.pow(2, -52)
		})
	}, {
		32: 32
	}],
	169: [function(e, t, n) {
		var i = e(32),
			r = e(38).isFinite;
		i(i.S, "Number", {
			isFinite: function(e) {
				return "number" == typeof e && r(e)
			}
		})
	}, {
		32: 32,
		38: 38
	}],
	170: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Number", {
			isInteger: e(48)
		})
	}, {
		32: 32,
		48: 48
	}],
	171: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Number", {
			isNaN: function(e) {
				return e != e
			}
		})
	}, {
		32: 32
	}],
	172: [function(e, t, n) {
		var i = e(32),
			r = e(48),
			o = Math.abs;
		i(i.S, "Number", {
			isSafeInteger: function(e) {
				return r(e) && o(e) <= 9007199254740991
			}
		})
	}, {
		32: 32,
		48: 48
	}],
	173: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Number", {
			MAX_SAFE_INTEGER: 9007199254740991
		})
	}, {
		32: 32
	}],
	174: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Number", {
			MIN_SAFE_INTEGER: -9007199254740991
		})
	}, {
		32: 32
	}],
	175: [function(e, t, n) {
		var i = e(32),
			r = e(81);
		i(i.S + i.F * (Number.parseFloat != r), "Number", {
			parseFloat: r
		})
	}, {
		32: 32,
		81: 81
	}],
	176: [function(e, t, n) {
		var i = e(32),
			r = e(82);
		i(i.S + i.F * (Number.parseInt != r), "Number", {
			parseInt: r
		})
	}, {
		32: 32,
		82: 82
	}],
	177: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(106),
			o = e(4),
			s = e(101),
			a = 1..toFixed,
			l = Math.floor,
			c = [0, 0, 0, 0, 0, 0],
			u = "Number.toFixed: incorrect invocation!",
			d = "0",
			f = function(e, t) {
				for(var n = -1, i = t; ++n < 6;) i += e * c[n], c[n] = i % 1e7, i = l(i / 1e7)
			},
			h = function(e) {
				for(var t = 6, n = 0; --t >= 0;) n += c[t], c[t] = l(n / e), n = n % e * 1e7
			},
			p = function() {
				for(var e = 6, t = ""; --e >= 0;)
					if("" !== t || 0 === e || 0 !== c[e]) {
						var n = String(c[e]);
						t = "" === t ? n : t + s.call(d, 7 - n.length) + n
					}
				return t
			},
			m = function v(e, t, n) {
				return 0 === t ? n : t % 2 === 1 ? v(e, t - 1, n * e) : v(e * e, t / 2, n)
			},
			g = function(e) {
				for(var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
				for(; n >= 2;) t += 1, n /= 2;
				return t
			};
		i(i.P + i.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !e(34)(function() {
			a.call({})
		})), "Number", {
			toFixed: function(e) {
				var t, n, i, a, l = o(this, u),
					c = r(e),
					v = "",
					y = d;
				if(c < 0 || c > 20) throw RangeError(u);
				if(l != l) return "NaN";
				if(l <= -1e21 || l >= 1e21) return String(l);
				if(l < 0 && (v = "-", l = -l), l > 1e-21)
					if(t = g(l * m(2, 69, 1)) - 69, n = t < 0 ? l * m(2, -t, 1) : l / m(2, t, 1), n *= 4503599627370496, t = 52 - t, t > 0) {
						for(f(0, n), i = c; i >= 7;) f(1e7, 0), i -= 7;
						for(f(m(10, i, 1), 0), i = t - 1; i >= 23;) h(1 << 23), i -= 23;
						h(1 << i), f(1, 1), h(2), y = p()
					} else f(0, n), f(1 << -t, 0), y = p() + s.call(d, c);
				return c > 0 ? (a = y.length, y = v + (a <= c ? "0." + s.call(d, c - a) + y : y.slice(0, a - c) + "." + y.slice(a - c))) : y = v + y, y
			}
		})
	}, {
		101: 101,
		106: 106,
		32: 32,
		34: 34,
		4: 4
	}],
	178: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(34),
			o = e(4),
			s = 1..toPrecision;
		i(i.P + i.F * (r(function() {
			return "1" !== s.call(1, void 0)
		}) || !r(function() {
			s.call({})
		})), "Number", {
			toPrecision: function(e) {
				var t = o(this, "Number#toPrecision: incorrect invocation!");
				return void 0 === e ? s.call(t) : s.call(t, e)
			}
		})
	}, {
		32: 32,
		34: 34,
		4: 4
	}],
	179: [function(e, t, n) {
		var i = e(32);
		i(i.S + i.F, "Object", {
			assign: e(65)
		})
	}, {
		32: 32,
		65: 65
	}],
	180: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Object", {
			create: e(66)
		})
	}, {
		32: 32,
		66: 66
	}],
	181: [function(e, t, n) {
		var i = e(32);
		i(i.S + i.F * !e(28), "Object", {
			defineProperties: e(68)
		})
	}, {
		28: 28,
		32: 32,
		68: 68
	}],
	182: [function(e, t, n) {
		var i = e(32);
		i(i.S + i.F * !e(28), "Object", {
			defineProperty: e(67).f
		})
	}, {
		28: 28,
		32: 32,
		67: 67
	}],
	183: [function(e, t, n) {
		var i = e(49),
			r = e(62).onFreeze;
		e(78)("freeze", function(e) {
			return function(t) {
				return e && i(t) ? e(r(t)) : t
			}
		})
	}, {
		49: 49,
		62: 62,
		78: 78
	}],
	184: [function(e, t, n) {
		var i = e(107),
			r = e(70).f;
		e(78)("getOwnPropertyDescriptor", function() {
			return function(e, t) {
				return r(i(e), t)
			}
		})
	}, {
		107: 107,
		70: 70,
		78: 78
	}],
	185: [function(e, t, n) {
		e(78)("getOwnPropertyNames", function() {
			return e(71).f
		})
	}, {
		71: 71,
		78: 78
	}],
	186: [function(e, t, n) {
		var i = e(109),
			r = e(74);
		e(78)("getPrototypeOf", function() {
			return function(e) {
				return r(i(e))
			}
		})
	}, {
		109: 109,
		74: 74,
		78: 78
	}],
	187: [function(e, t, n) {
		var i = e(49);
		e(78)("isExtensible", function(e) {
			return function(t) {
				return !!i(t) && (!e || e(t))
			}
		})
	}, {
		49: 49,
		78: 78
	}],
	188: [function(e, t, n) {
		var i = e(49);
		e(78)("isFrozen", function(e) {
			return function(t) {
				return !i(t) || !!e && e(t)
			}
		})
	}, {
		49: 49,
		78: 78
	}],
	189: [function(e, t, n) {
		var i = e(49);
		e(78)("isSealed", function(e) {
			return function(t) {
				return !i(t) || !!e && e(t)
			}
		})
	}, {
		49: 49,
		78: 78
	}],
	190: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Object", {
			is: e(89)
		})
	}, {
		32: 32,
		89: 89
	}],
	191: [function(e, t, n) {
		var i = e(109),
			r = e(76);
		e(78)("keys", function() {
			return function(e) {
				return r(i(e))
			}
		})
	}, {
		109: 109,
		76: 76,
		78: 78
	}],
	192: [function(e, t, n) {
		var i = e(49),
			r = e(62).onFreeze;
		e(78)("preventExtensions", function(e) {
			return function(t) {
				return e && i(t) ? e(r(t)) : t
			}
		})
	}, {
		49: 49,
		62: 62,
		78: 78
	}],
	193: [function(e, t, n) {
		var i = e(49),
			r = e(62).onFreeze;
		e(78)("seal", function(e) {
			return function(t) {
				return e && i(t) ? e(r(t)) : t
			}
		})
	}, {
		49: 49,
		62: 62,
		78: 78
	}],
	194: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Object", {
			setPrototypeOf: e(90).set
		})
	}, {
		32: 32,
		90: 90
	}],
	195: [function(e, t, n) {
		"use strict";
		var i = e(17),
			r = {};
		r[e(117)("toStringTag")] = "z", r + "" != "[object z]" && e(87)(Object.prototype, "toString", function() {
			return "[object " + i(this) + "]"
		}, !0)
	}, {
		117: 117,
		17: 17,
		87: 87
	}],
	196: [function(e, t, n) {
		var i = e(32),
			r = e(81);
		i(i.G + i.F * (parseFloat != r), {
			parseFloat: r
		})
	}, {
		32: 32,
		81: 81
	}],
	197: [function(e, t, n) {
		var i = e(32),
			r = e(82);
		i(i.G + i.F * (parseInt != r), {
			parseInt: r
		})
	}, {
		32: 32,
		82: 82
	}],
	198: [function(e, t, n) {
		"use strict";
		var i, r, o, s = e(58),
			a = e(38),
			l = e(25),
			c = e(17),
			u = e(32),
			d = e(49),
			f = e(3),
			h = e(6),
			p = e(37),
			m = e(95),
			g = e(104).set,
			v = e(64)(),
			y = "Promise",
			b = a.TypeError,
			w = a.process,
			x = a[y],
			w = a.process,
			_ = "process" == c(w),
			C = function() {},
			k = !! function() {
				try {
					var t = x.resolve(1),
						n = (t.constructor = {})[e(117)("species")] = function(e) {
							e(C, C)
						};
					return(_ || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof n
				} catch(i) {}
			}(),
			N = function(e, t) {
				return e === t || e === x && t === o
			},
			E = function(e) {
				var t;
				return !(!d(e) || "function" != typeof(t = e.then)) && t
			},
			S = function(e) {
				return N(x, e) ? new T(e) : new r(e)
			},
			T = r = function(e) {
				var t, n;
				this.promise = new e(function(e, i) {
					if(void 0 !== t || void 0 !== n) throw b("Bad Promise constructor");
					t = e, n = i
				}), this.resolve = f(t), this.reject = f(n)
			},
			D = function(e) {
				try {
					e()
				} catch(t) {
					return {
						error: t
					}
				}
			},
			A = function(e, t) {
				if(!e._n) {
					e._n = !0;
					var n = e._c;
					v(function() {
						for(var i = e._v, r = 1 == e._s, o = 0, s = function(t) {
								var n, o, s = r ? t.ok : t.fail,
									a = t.resolve,
									l = t.reject,
									c = t.domain;
								try {
									s ? (r || (2 == e._h && O(e), e._h = 1), s === !0 ? n = i : (c && c.enter(), n = s(i), c && c.exit()), n === t.promise ? l(b("Promise-chain cycle")) : (o = E(n)) ? o.call(n, a, l) : a(n)) : l(i)
								} catch(u) {
									l(u)
								}
							}; n.length > o;) s(n[o++]);
						e._c = [], e._n = !1, t && !e._h && U(e)
					})
				}
			},
			U = function(e) {
				g.call(a, function() {
					var t, n, i, r = e._v;
					if(M(e) && (t = D(function() {
							_ ? w.emit("unhandledRejection", r, e) : (n = a.onunhandledrejection) ? n({
								promise: e,
								reason: r
							}) : (i = a.console) && i.error && i.error("Unhandled promise rejection", r)
						}), e._h = _ || M(e) ? 2 : 1), e._a = void 0, t) throw t.error
				})
			},
			M = function P(e) {
				if(1 == e._h) return !1;
				for(var t, n = e._a || e._c, i = 0; n.length > i;)
					if(t = n[i++], t.fail || !P(t.promise)) return !1;
				return !0
			},
			O = function(e) {
				g.call(a, function() {
					var t;
					_ ? w.emit("rejectionHandled", e) : (t = a.onrejectionhandled) && t({
						promise: e,
						reason: e._v
					})
				})
			},
			I = function(e) {
				var t = this;
				t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), A(t, !0))
			},
			L = function R(e) {
				var t, n = this;
				if(!n._d) {
					n._d = !0, n = n._w || n;
					try {
						if(n === e) throw b("Promise can't be resolved itself");
						(t = E(e)) ? v(function() {
							var i = {
								_w: n,
								_d: !1
							};
							try {
								t.call(e, l(R, i, 1), l(I, i, 1))
							} catch(r) {
								I.call(i, r)
							}
						}): (n._v = e, n._s = 1, A(n, !1))
					} catch(i) {
						I.call({
							_w: n,
							_d: !1
						}, i)
					}
				}
			};
		k || (x = function(e) {
			h(this, x, y, "_h"),
				f(e), i.call(this);
			try {
				e(l(L, this, 1), l(I, this, 1))
			} catch(t) {
				I.call(this, t)
			}
		}, i = function(e) {
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		}, i.prototype = e(86)(x.prototype, {
			then: function(e, t) {
				var n = S(m(this, x));
				return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = _ ? w.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise
			},
			"catch": function(e) {
				return this.then(void 0, e)
			}
		}), T = function() {
			var e = new i;
			this.promise = e, this.resolve = l(L, e, 1), this.reject = l(I, e, 1)
		}), u(u.G + u.W + u.F * !k, {
			Promise: x
		}), e(92)(x, y), e(91)(y), o = e(23)[y], u(u.S + u.F * !k, y, {
			reject: function(e) {
				var t = S(this),
					n = t.reject;
				return n(e), t.promise
			}
		}), u(u.S + u.F * (s || !k), y, {
			resolve: function(e) {
				if(e instanceof x && N(e.constructor, this)) return e;
				var t = S(this),
					n = t.resolve;
				return n(e), t.promise
			}
		}), u(u.S + u.F * !(k && e(54)(function(e) {
			x.all(e)["catch"](C)
		})), y, {
			all: function(e) {
				var t = this,
					n = S(t),
					i = n.resolve,
					r = n.reject,
					o = D(function() {
						var n = [],
							o = 0,
							s = 1;
						p(e, !1, function(e) {
							var a = o++,
								l = !1;
							n.push(void 0), s++, t.resolve(e).then(function(e) {
								l || (l = !0, n[a] = e, --s || i(n))
							}, r)
						}), --s || i(n)
					});
				return o && r(o.error), n.promise
			},
			race: function(e) {
				var t = this,
					n = S(t),
					i = n.reject,
					r = D(function() {
						p(e, !1, function(e) {
							t.resolve(e).then(n.resolve, i)
						})
					});
				return r && i(r.error), n.promise
			}
		})
	}, {
		104: 104,
		117: 117,
		17: 17,
		23: 23,
		25: 25,
		3: 3,
		32: 32,
		37: 37,
		38: 38,
		49: 49,
		54: 54,
		58: 58,
		6: 6,
		64: 64,
		86: 86,
		91: 91,
		92: 92,
		95: 95
	}],
	199: [function(e, t, n) {
		var i = e(32),
			r = e(3),
			o = e(7),
			s = (e(38).Reflect || {}).apply,
			a = Function.apply;
		i(i.S + i.F * !e(34)(function() {
			s(function() {})
		}), "Reflect", {
			apply: function(e, t, n) {
				var i = r(e),
					l = o(n);
				return s ? s(i, t, l) : a.call(i, t, l)
			}
		})
	}, {
		3: 3,
		32: 32,
		34: 34,
		38: 38,
		7: 7
	}],
	200: [function(e, t, n) {
		var i = e(32),
			r = e(66),
			o = e(3),
			s = e(7),
			a = e(49),
			l = e(34),
			c = e(16),
			u = (e(38).Reflect || {}).construct,
			d = l(function() {
				function e() {}
				return !(u(function() {}, [], e) instanceof e)
			}),
			f = !l(function() {
				u(function() {})
			});
		i(i.S + i.F * (d || f), "Reflect", {
			construct: function(e, t) {
				o(e), s(t);
				var n = arguments.length < 3 ? e : o(arguments[2]);
				if(f && !d) return u(e, t, n);
				if(e == n) {
					switch(t.length) {
						case 0:
							return new e;
						case 1:
							return new e(t[0]);
						case 2:
							return new e(t[0], t[1]);
						case 3:
							return new e(t[0], t[1], t[2]);
						case 4:
							return new e(t[0], t[1], t[2], t[3])
					}
					var i = [null];
					return i.push.apply(i, t), new(c.apply(e, i))
				}
				var l = n.prototype,
					h = r(a(l) ? l : Object.prototype),
					p = Function.apply.call(e, h, t);
				return a(p) ? p : h
			}
		})
	}, {
		16: 16,
		3: 3,
		32: 32,
		34: 34,
		38: 38,
		49: 49,
		66: 66,
		7: 7
	}],
	201: [function(e, t, n) {
		var i = e(67),
			r = e(32),
			o = e(7),
			s = e(110);
		r(r.S + r.F * e(34)(function() {
			Reflect.defineProperty(i.f({}, 1, {
				value: 1
			}), 1, {
				value: 2
			})
		}), "Reflect", {
			defineProperty: function(e, t, n) {
				o(e), t = s(t, !0), o(n);
				try {
					return i.f(e, t, n), !0
				} catch(r) {
					return !1
				}
			}
		})
	}, {
		110: 110,
		32: 32,
		34: 34,
		67: 67,
		7: 7
	}],
	202: [function(e, t, n) {
		var i = e(32),
			r = e(70).f,
			o = e(7);
		i(i.S, "Reflect", {
			deleteProperty: function(e, t) {
				var n = r(o(e), t);
				return !(n && !n.configurable) && delete e[t]
			}
		})
	}, {
		32: 32,
		7: 7,
		70: 70
	}],
	203: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(7),
			o = function(e) {
				this._t = r(e), this._i = 0;
				var t, n = this._k = [];
				for(t in e) n.push(t)
			};
		e(52)(o, "Object", function() {
			var e, t = this,
				n = t._k;
			do
				if(t._i >= n.length) return {
					value: void 0,
					done: !0
				}; while (!((e = n[t._i++]) in t._t));
			return {
				value: e,
				done: !1
			}
		}), i(i.S, "Reflect", {
			enumerate: function(e) {
				return new o(e)
			}
		})
	}, {
		32: 32,
		52: 52,
		7: 7
	}],
	204: [function(e, t, n) {
		var i = e(70),
			r = e(32),
			o = e(7);
		r(r.S, "Reflect", {
			getOwnPropertyDescriptor: function(e, t) {
				return i.f(o(e), t)
			}
		})
	}, {
		32: 32,
		7: 7,
		70: 70
	}],
	205: [function(e, t, n) {
		var i = e(32),
			r = e(74),
			o = e(7);
		i(i.S, "Reflect", {
			getPrototypeOf: function(e) {
				return r(o(e))
			}
		})
	}, {
		32: 32,
		7: 7,
		74: 74
	}],
	206: [function(e, t, n) {
		function i(e, t) {
			var n, a, u = arguments.length < 3 ? e : arguments[2];
			return c(e) === u ? e[t] : (n = r.f(e, t)) ? s(n, "value") ? n.value : void 0 !== n.get ? n.get.call(u) : void 0 : l(a = o(e)) ? i(a, t, u) : void 0
		}
		var r = e(70),
			o = e(74),
			s = e(39),
			a = e(32),
			l = e(49),
			c = e(7);
		a(a.S, "Reflect", {
			get: i
		})
	}, {
		32: 32,
		39: 39,
		49: 49,
		7: 7,
		70: 70,
		74: 74
	}],
	207: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Reflect", {
			has: function(e, t) {
				return t in e
			}
		})
	}, {
		32: 32
	}],
	208: [function(e, t, n) {
		var i = e(32),
			r = e(7),
			o = Object.isExtensible;
		i(i.S, "Reflect", {
			isExtensible: function(e) {
				return r(e), !o || o(e)
			}
		})
	}, {
		32: 32,
		7: 7
	}],
	209: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Reflect", {
			ownKeys: e(80)
		})
	}, {
		32: 32,
		80: 80
	}],
	210: [function(e, t, n) {
		var i = e(32),
			r = e(7),
			o = Object.preventExtensions;
		i(i.S, "Reflect", {
			preventExtensions: function(e) {
				r(e);
				try {
					return o && o(e), !0
				} catch(t) {
					return !1
				}
			}
		})
	}, {
		32: 32,
		7: 7
	}],
	211: [function(e, t, n) {
		var i = e(32),
			r = e(90);
		r && i(i.S, "Reflect", {
			setPrototypeOf: function(e, t) {
				r.check(e, t);
				try {
					return r.set(e, t), !0
				} catch(n) {
					return !1
				}
			}
		})
	}, {
		32: 32,
		90: 90
	}],
	212: [function(e, t, n) {
		function i(e, t, n) {
			var l, f, h = arguments.length < 4 ? e : arguments[3],
				p = o.f(u(e), t);
			if(!p) {
				if(d(f = s(e))) return i(f, t, n, h);
				p = c(0)
			}
			return a(p, "value") ? !(p.writable === !1 || !d(h)) && (l = o.f(h, t) || c(0), l.value = n, r.f(h, t, l), !0) : void 0 !== p.set && (p.set.call(h, n), !0)
		}
		var r = e(67),
			o = e(70),
			s = e(74),
			a = e(39),
			l = e(32),
			c = e(85),
			u = e(7),
			d = e(49);
		l(l.S, "Reflect", {
			set: i
		})
	}, {
		32: 32,
		39: 39,
		49: 49,
		67: 67,
		7: 7,
		70: 70,
		74: 74,
		85: 85
	}],
	213: [function(e, t, n) {
		var i = e(38),
			r = e(43),
			o = e(67).f,
			s = e(72).f,
			a = e(50),
			l = e(36),
			c = i.RegExp,
			u = c,
			d = c.prototype,
			f = /a/g,
			h = /a/g,
			p = new c(f) !== f;
		if(e(28) && (!p || e(34)(function() {
				return h[e(117)("match")] = !1, c(f) != f || c(h) == h || "/a/i" != c(f, "i")
			}))) {
			c = function(e, t) {
				var n = this instanceof c,
					i = a(e),
					o = void 0 === t;
				return !n && i && e.constructor === c && o ? e : r(p ? new u(i && !o ? e.source : e, t) : u((i = e instanceof c) ? e.source : e, i && o ? l.call(e) : t), n ? this : d, c)
			};
			for(var m = (function(e) {
					e in c || o(c, e, {
						configurable: !0,
						get: function() {
							return u[e]
						},
						set: function(t) {
							u[e] = t
						}
					})
				}), g = s(u), v = 0; g.length > v;) m(g[v++]);
			d.constructor = c, c.prototype = d, e(87)(i, "RegExp", c)
		}
		e(91)("RegExp")
	}, {
		117: 117,
		28: 28,
		34: 34,
		36: 36,
		38: 38,
		43: 43,
		50: 50,
		67: 67,
		72: 72,
		87: 87,
		91: 91
	}],
	214: [function(e, t, n) {
		e(28) && "g" != /./g.flags && e(67).f(RegExp.prototype, "flags", {
			configurable: !0,
			get: e(36)
		})
	}, {
		28: 28,
		36: 36,
		67: 67
	}],
	215: [function(e, t, n) {
		e(35)("match", 1, function(e, t, n) {
			return [function(n) {
				"use strict";
				var i = e(this),
					r = void 0 == n ? void 0 : n[t];
				return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
			}, n]
		})
	}, {
		35: 35
	}],
	216: [function(e, t, n) {
		e(35)("replace", 2, function(e, t, n) {
			return [function(i, r) {
				"use strict";
				var o = e(this),
					s = void 0 == i ? void 0 : i[t];
				return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r)
			}, n]
		})
	}, {
		35: 35
	}],
	217: [function(e, t, n) {
		e(35)("search", 1, function(e, t, n) {
			return [function(n) {
				"use strict";
				var i = e(this),
					r = void 0 == n ? void 0 : n[t];
				return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
			}, n]
		})
	}, {
		35: 35
	}],
	218: [function(e, t, n) {
		e(35)("split", 2, function(t, n, i) {
			"use strict";
			var r = e(50),
				o = i,
				s = [].push,
				a = "split",
				l = "length",
				c = "lastIndex";
			if("c" == "abbc" [a](/(b)*/)[1] || 4 != "test" [a](/(?:)/, -1)[l] || 2 != "ab" [a](/(?:ab)*/)[l] || 4 != "." [a](/(.?)(.?)/)[l] || "." [a](/()()/)[l] > 1 || "" [a](/.?/)[l]) {
				var u = void 0 === /()??/.exec("")[1];
				i = function(e, t) {
					var n = String(this);
					if(void 0 === e && 0 === t) return [];
					if(!r(e)) return o.call(n, e, t);
					var i, a, d, f, h, p = [],
						m = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
						g = 0,
						v = void 0 === t ? 4294967295 : t >>> 0,
						y = new RegExp(e.source, m + "g");
					for(u || (i = new RegExp("^" + y.source + "$(?!\\s)", m));
						(a = y.exec(n)) && (d = a.index + a[0][l], !(d > g && (p.push(n.slice(g, a.index)), !u && a[l] > 1 && a[0].replace(i, function() {
							for(h = 1; h < arguments[l] - 2; h++) void 0 === arguments[h] && (a[h] = void 0)
						}), a[l] > 1 && a.index < n[l] && s.apply(p, a.slice(1)), f = a[0][l], g = d, p[l] >= v)));) y[c] === a.index && y[c]++;
					return g === n[l] ? !f && y.test("") || p.push("") : p.push(n.slice(g)), p[l] > v ? p.slice(0, v) : p
				}
			} else "0" [a](void 0, 0)[l] && (i = function(e, t) {
				return void 0 === e && 0 === t ? [] : o.call(this, e, t)
			});
			return [function(e, r) {
				var o = t(this),
					s = void 0 == e ? void 0 : e[n];
				return void 0 !== s ? s.call(e, o, r) : i.call(String(o), e, r)
			}, i]
		})
	}, {
		35: 35,
		50: 50
	}],
	219: [function(e, t, n) {
		"use strict";
		e(214);
		var i = e(7),
			r = e(36),
			o = e(28),
			s = "toString",
			a = /./ [s],
			l = function(t) {
				e(87)(RegExp.prototype, s, t, !0)
			};
		e(34)(function() {
			return "/a/b" != a.call({
				source: "a",
				flags: "b"
			})
		}) ? l(function() {
			var e = i(this);
			return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? r.call(e) : void 0)
		}) : a.name != s && l(function() {
			return a.call(this)
		})
	}, {
		214: 214,
		28: 28,
		34: 34,
		36: 36,
		7: 7,
		87: 87
	}],
	220: [function(e, t, n) {
		"use strict";
		var i = e(19);
		t.exports = e(22)("Set", function(e) {
			return function() {
				return e(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		}, {
			add: function(e) {
				return i.def(this, e = 0 === e ? 0 : e, e)
			}
		}, i)
	}, {
		19: 19,
		22: 22
	}],
	221: [function(e, t, n) {
		"use strict";
		e(99)("anchor", function(e) {
			return function(t) {
				return e(this, "a", "name", t)
			}
		})
	}, {
		99: 99
	}],
	222: [function(e, t, n) {
		"use strict";
		e(99)("big", function(e) {
			return function() {
				return e(this, "big", "", "")
			}
		})
	}, {
		99: 99
	}],
	223: [function(e, t, n) {
		"use strict";
		e(99)("blink", function(e) {
			return function() {
				return e(this, "blink", "", "")
			}
		})
	}, {
		99: 99
	}],
	224: [function(e, t, n) {
		"use strict";
		e(99)("bold", function(e) {
			return function() {
				return e(this, "b", "", "")
			}
		})
	}, {
		99: 99
	}],
	225: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(97)(!1);
		i(i.P, "String", {
			codePointAt: function(e) {
				return r(this, e)
			}
		})
	}, {
		32: 32,
		97: 97
	}],
	226: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(108),
			o = e(98),
			s = "endsWith",
			a = "" [s];
		i(i.P + i.F * e(33)(s), "String", {
			endsWith: function(e) {
				var t = o(this, e, s),
					n = arguments.length > 1 ? arguments[1] : void 0,
					i = r(t.length),
					l = void 0 === n ? i : Math.min(r(n), i),
					c = String(e);
				return a ? a.call(t, c, l) : t.slice(l - c.length, l) === c
			}
		})
	}, {
		108: 108,
		32: 32,
		33: 33,
		98: 98
	}],
	227: [function(e, t, n) {
		"use strict";
		e(99)("fixed", function(e) {
			return function() {
				return e(this, "tt", "", "")
			}
		})
	}, {
		99: 99
	}],
	228: [function(e, t, n) {
		"use strict";
		e(99)("fontcolor", function(e) {
			return function(t) {
				return e(this, "font", "color", t)
			}
		})
	}, {
		99: 99
	}],
	229: [function(e, t, n) {
		"use strict";
		e(99)("fontsize", function(e) {
			return function(t) {
				return e(this, "font", "size", t)
			}
		})
	}, {
		99: 99
	}],
	230: [function(e, t, n) {
		var i = e(32),
			r = e(105),
			o = String.fromCharCode,
			s = String.fromCodePoint;
		i(i.S + i.F * (!!s && 1 != s.length), "String", {
			fromCodePoint: function(e) {
				for(var t, n = [], i = arguments.length, s = 0; i > s;) {
					if(t = +arguments[s++], r(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
					n.push(t < 65536 ? o(t) : o(((t -= 65536) >> 10) + 55296, t % 1024 + 56320))
				}
				return n.join("")
			}
		})
	}, {
		105: 105,
		32: 32
	}],
	231: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(98),
			o = "includes";
		i(i.P + i.F * e(33)(o), "String", {
			includes: function(e) {
				return !!~r(this, e, o).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	}, {
		32: 32,
		33: 33,
		98: 98
	}],
	232: [function(e, t, n) {
		"use strict";
		e(99)("italics", function(e) {
			return function() {
				return e(this, "i", "", "")
			}
		})
	}, {
		99: 99
	}],
	233: [function(e, t, n) {
		"use strict";
		var i = e(97)(!0);
		e(53)(String, "String", function(e) {
			this._t = String(e), this._i = 0
		}, function() {
			var e, t = this._t,
				n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			} : (e = i(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		})
	}, {
		53: 53,
		97: 97
	}],
	234: [function(e, t, n) {
		"use strict";
		e(99)("link", function(e) {
			return function(t) {
				return e(this, "a", "href", t)
			}
		})
	}, {
		99: 99
	}],
	235: [function(e, t, n) {
		var i = e(32),
			r = e(107),
			o = e(108);
		i(i.S, "String", {
			raw: function(e) {
				for(var t = r(e.raw), n = o(t.length), i = arguments.length, s = [], a = 0; n > a;) s.push(String(t[a++])), a < i && s.push(String(arguments[a]));
				return s.join("")
			}
		})
	}, {
		107: 107,
		108: 108,
		32: 32
	}],
	236: [function(e, t, n) {
		var i = e(32);
		i(i.P, "String", {
			repeat: e(101)
		})
	}, {
		101: 101,
		32: 32
	}],
	237: [function(e, t, n) {
		"use strict";
		e(99)("small", function(e) {
			return function() {
				return e(this, "small", "", "")
			}
		})
	}, {
		99: 99
	}],
	238: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(108),
			o = e(98),
			s = "startsWith",
			a = "" [s];
		i(i.P + i.F * e(33)(s), "String", {
			startsWith: function(e) {
				var t = o(this, e, s),
					n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
					i = String(e);
				return a ? a.call(t, i, n) : t.slice(n, n + i.length) === i
			}
		})
	}, {
		108: 108,
		32: 32,
		33: 33,
		98: 98
	}],
	239: [function(e, t, n) {
		"use strict";
		e(99)("strike", function(e) {
			return function() {
				return e(this, "strike", "", "")
			}
		})
	}, {
		99: 99
	}],
	240: [function(e, t, n) {
		"use strict";
		e(99)("sub", function(e) {
			return function() {
				return e(this, "sub", "", "")
			}
		})
	}, {
		99: 99
	}],
	241: [function(e, t, n) {
		"use strict";
		e(99)("sup", function(e) {
			return function() {
				return e(this, "sup", "", "")
			}
		})
	}, {
		99: 99
	}],
	242: [function(e, t, n) {
		"use strict";
		e(102)("trim", function(e) {
			return function() {
				return e(this, 3)
			}
		})
	}, {
		102: 102
	}],
	243: [function(e, t, n) {
		"use strict";
		var i = e(38),
			r = e(39),
			o = e(28),
			s = e(32),
			a = e(87),
			l = e(62).KEY,
			c = e(34),
			u = e(94),
			d = e(92),
			f = e(114),
			h = e(117),
			p = e(116),
			m = e(115),
			g = e(57),
			v = e(31),
			y = e(47),
			b = e(7),
			w = e(107),
			x = e(110),
			_ = e(85),
			C = e(66),
			k = e(71),
			N = e(70),
			E = e(67),
			S = e(76),
			T = N.f,
			D = E.f,
			A = k.f,
			U = i.Symbol,
			M = i.JSON,
			O = M && M.stringify,
			I = "prototype",
			L = h("_hidden"),
			P = h("toPrimitive"),
			R = {}.propertyIsEnumerable,
			B = u("symbol-registry"),
			j = u("symbols"),
			F = u("op-symbols"),
			H = Object[I],
			q = "function" == typeof U,
			$ = i.QObject,
			z = !$ || !$[I] || !$[I].findChild,
			W = o && c(function() {
				return 7 != C(D({}, "a", {
					get: function() {
						return D(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, n) {
				var i = T(H, t);
				i && delete H[t], D(e, t, n), i && e !== H && D(H, t, i)
			} : D,
			V = function(e) {
				var t = j[e] = C(U[I]);
				return t._k = e, t
			},
			Y = q && "symbol" == _typeof(U.iterator) ? function(e) {
				return "symbol" == ("undefined" == typeof e ? "undefined" : _typeof(e))
			} : function(e) {
				return e instanceof U
			},
			X = function(e, t, n) {
				return e === H && X(F, t, n), b(e), t = x(t, !0), b(n), r(j, t) ? (n.enumerable ? (r(e, L) && e[L][t] && (e[L][t] = !1), n = C(n, {
					enumerable: _(0, !1)
				})) : (r(e, L) || D(e, L, _(1, {})), e[L][t] = !0), W(e, t, n)) : D(e, t, n)
			},
			K = function(e, t) {
				b(e);
				for(var n, i = v(t = w(t)), r = 0, o = i.length; o > r;) X(e, n = i[r++], t[n]);
				return e
			},
			G = function(e, t) {
				return void 0 === t ? C(e) : K(C(e), t)
			},
			J = function(e) {
				var t = R.call(this, e = x(e, !0));
				return !(this === H && r(j, e) && !r(F, e)) && (!(t || !r(this, e) || !r(j, e) || r(this, L) && this[L][e]) || t)
			},
			Q = function(e, t) {
				if(e = w(e), t = x(t, !0), e !== H || !r(j, t) || r(F, t)) {
					var n = T(e, t);
					return !n || !r(j, t) || r(e, L) && e[L][t] || (n.enumerable = !0), n
				}
			},
			Z = function(e) {
				for(var t, n = A(w(e)), i = [], o = 0; n.length > o;) r(j, t = n[o++]) || t == L || t == l || i.push(t);
				return i
			},
			ee = function(e) {
				for(var t, n = e === H, i = A(n ? F : w(e)), o = [], s = 0; i.length > s;) !r(j, t = i[s++]) || n && !r(H, t) || o.push(j[t]);
				return o
			};
		q || (U = function() {
			if(this instanceof U) throw TypeError("Symbol is not a constructor!");
			var e = f(arguments.length > 0 ? arguments[0] : void 0),
				t = function n(t) {
					this === H && n.call(F, t), r(this, L) && r(this[L], e) && (this[L][e] = !1), W(this, e, _(1, t))
				};
			return o && z && W(H, e, {
				configurable: !0,
				set: t
			}), V(e)
		}, a(U[I], "toString", function() {
			return this._k
		}), N.f = Q, E.f = X, e(72).f = k.f = Z, e(77).f = J, e(73).f = ee, o && !e(58) && a(H, "propertyIsEnumerable", J, !0), p.f = function(e) {
			return V(h(e))
		}), s(s.G + s.W + s.F * !q, {
			Symbol: U
		});
		for(var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) h(te[ne++]);
		for(var te = S(h.store), ne = 0; te.length > ne;) m(te[ne++]);
		s(s.S + s.F * !q, "Symbol", {
			"for": function(e) {
				return r(B, e += "") ? B[e] : B[e] = U(e)
			},
			keyFor: function(e) {
				if(Y(e)) return g(B, e);
				throw TypeError(e + " is not a symbol!")
			},
			useSetter: function() {
				z = !0
			},
			useSimple: function() {
				z = !1
			}
		}), s(s.S + s.F * !q, "Object", {
			create: G,
			defineProperty: X,
			defineProperties: K,
			getOwnPropertyDescriptor: Q,
			getOwnPropertyNames: Z,
			getOwnPropertySymbols: ee
		}), M && s(s.S + s.F * (!q || c(function() {
			var e = U();
			return "[null]" != O([e]) || "{}" != O({
				a: e
			}) || "{}" != O(Object(e))
		})), "JSON", {
			stringify: function(e) {
				if(void 0 !== e && !Y(e)) {
					for(var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
					return t = i[1], "function" == typeof t && (n = t), !n && y(t) || (t = function(e, t) {
						if(n && (t = n.call(this, e, t)), !Y(t)) return t
					}), i[1] = t, O.apply(M, i)
				}
			}
		}), U[I][P] || e(40)(U[I], P, U[I].valueOf), d(U, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
	}, {
		107: 107,
		110: 110,
		114: 114,
		115: 115,
		116: 116,
		117: 117,
		28: 28,
		31: 31,
		32: 32,
		34: 34,
		38: 38,
		39: 39,
		40: 40,
		47: 47,
		57: 57,
		58: 58,
		62: 62,
		66: 66,
		67: 67,
		7: 7,
		70: 70,
		71: 71,
		72: 72,
		73: 73,
		76: 76,
		77: 77,
		85: 85,
		87: 87,
		92: 92,
		94: 94
	}],
	244: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(113),
			o = e(112),
			s = e(7),
			a = e(105),
			l = e(108),
			c = e(49),
			u = e(38).ArrayBuffer,
			d = e(95),
			f = o.ArrayBuffer,
			h = o.DataView,
			p = r.ABV && u.isView,
			m = f.prototype.slice,
			g = r.VIEW,
			v = "ArrayBuffer";
		i(i.G + i.W + i.F * (u !== f), {
			ArrayBuffer: f
		}), i(i.S + i.F * !r.CONSTR, v, {
			isView: function(e) {
				return p && p(e) || c(e) && g in e
			}
		}), i(i.P + i.U + i.F * e(34)(function() {
			return !new f(2).slice(1, void 0).byteLength
		}), v, {
			slice: function(e, t) {
				if(void 0 !== m && void 0 === t) return m.call(s(this), e);
				for(var n = s(this).byteLength, i = a(e, n), r = a(void 0 === t ? n : t, n), o = new(d(this, f))(l(r - i)), c = new h(this), u = new h(o), p = 0; i < r;) u.setUint8(p++, c.getUint8(i++));
				return o
			}
		}), e(91)(v)
	}, {
		105: 105,
		108: 108,
		112: 112,
		113: 113,
		32: 32,
		34: 34,
		38: 38,
		49: 49,
		7: 7,
		91: 91,
		95: 95
	}],
	245: [function(e, t, n) {
		var i = e(32);
		i(i.G + i.W + i.F * !e(113).ABV, {
			DataView: e(112).DataView
		})
	}, {
		112: 112,
		113: 113,
		32: 32
	}],
	246: [function(e, t, n) {
		e(111)("Float32", 4, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	247: [function(e, t, n) {
		e(111)("Float64", 8, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	248: [function(e, t, n) {
		e(111)("Int16", 2, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	249: [function(e, t, n) {
		e(111)("Int32", 4, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	250: [function(e, t, n) {
		e(111)("Int8", 1, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	251: [function(e, t, n) {
		e(111)("Uint16", 2, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	252: [function(e, t, n) {
		e(111)("Uint32", 4, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	253: [function(e, t, n) {
		e(111)("Uint8", 1, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		})
	}, {
		111: 111
	}],
	254: [function(e, t, n) {
		e(111)("Uint8", 1, function(e) {
			return function(t, n, i) {
				return e(this, t, n, i)
			}
		}, !0)
	}, {
		111: 111
	}],
	255: [function(e, t, n) {
		"use strict";
		var i, r = e(12)(0),
			o = e(87),
			s = e(62),
			a = e(65),
			l = e(21),
			c = e(49),
			u = s.getWeak,
			d = Object.isExtensible,
			f = l.ufstore,
			h = {},
			p = function(e) {
				return function() {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			},
			m = {
				get: function(e) {
					if(c(e)) {
						var t = u(e);
						return t === !0 ? f(this).get(e) : t ? t[this._i] : void 0
					}
				},
				set: function(e, t) {
					return l.def(this, e, t)
				}
			},
			g = t.exports = e(22)("WeakMap", p, m, l, !0, !0);
		7 != (new g).set((Object.freeze || Object)(h), 7).get(h) && (i = l.getConstructor(p), a(i.prototype, m), s.NEED = !0, r(["delete", "has", "get", "set"], function(e) {
			var t = g.prototype,
				n = t[e];
			o(t, e, function(t, r) {
				if(c(t) && !d(t)) {
					this._f || (this._f = new i);
					var o = this._f[e](t, r);
					return "set" == e ? this : o
				}
				return n.call(this, t, r)
			})
		}))
	}, {
		12: 12,
		21: 21,
		22: 22,
		49: 49,
		62: 62,
		65: 65,
		87: 87
	}],
	256: [function(e, t, n) {
		"use strict";
		var i = e(21);
		e(22)("WeakSet", function(e) {
			return function() {
				return e(this, arguments.length > 0 ? arguments[0] : void 0)
			}
		}, {
			add: function(e) {
				return i.def(this, e, !0)
			}
		}, i, !1, !0)
	}, {
		21: 21,
		22: 22
	}],
	257: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(11)(!0);
		i(i.P, "Array", {
			includes: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), e(5)("includes")
	}, {
		11: 11,
		32: 32,
		5: 5
	}],
	258: [function(e, t, n) {
		var i = e(32),
			r = e(64)(),
			o = e(38).process,
			s = "process" == e(18)(o);
		i(i.G, {
			asap: function(e) {
				var t = s && o.domain;
				r(t ? t.bind(e) : e)
			}
		})
	}, {
		18: 18,
		32: 32,
		38: 38,
		64: 64
	}],
	259: [function(e, t, n) {
		var i = e(32),
			r = e(18);
		i(i.S, "Error", {
			isError: function(e) {
				return "Error" === r(e)
			}
		})
	}, {
		18: 18,
		32: 32
	}],
	260: [function(e, t, n) {
		var i = e(32);
		i(i.P + i.R, "Map", {
			toJSON: e(20)("Map")
		})
	}, {
		20: 20,
		32: 32
	}],
	261: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			iaddh: function(e, t, n, i) {
				var r = e >>> 0,
					o = t >>> 0,
					s = n >>> 0;
				return o + (i >>> 0) + ((r & s | (r | s) & ~(r + s >>> 0)) >>> 31) | 0
			}
		})
	}, {
		32: 32
	}],
	262: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			imulh: function(e, t) {
				var n = 65535,
					i = +e,
					r = +t,
					o = i & n,
					s = r & n,
					a = i >> 16,
					l = r >> 16,
					c = (a * s >>> 0) + (o * s >>> 16);
				return a * l + (c >> 16) + ((o * l >>> 0) + (c & n) >> 16)
			}
		})
	}, {
		32: 32
	}],
	263: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			isubh: function(e, t, n, i) {
				var r = e >>> 0,
					o = t >>> 0,
					s = n >>> 0;
				return o - (i >>> 0) - ((~r & s | ~(r ^ s) & r - s >>> 0) >>> 31) | 0
			}
		})
	}, {
		32: 32
	}],
	264: [function(e, t, n) {
		var i = e(32);
		i(i.S, "Math", {
			umulh: function(e, t) {
				var n = 65535,
					i = +e,
					r = +t,
					o = i & n,
					s = r & n,
					a = i >>> 16,
					l = r >>> 16,
					c = (a * s >>> 0) + (o * s >>> 16);
				return a * l + (c >>> 16) + ((o * l >>> 0) + (c & n) >>> 16)
			}
		})
	}, {
		32: 32
	}],
	265: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(109),
			o = e(3),
			s = e(67);
		e(28) && i(i.P + e(69), "Object", {
			__defineGetter__: function(e, t) {
				s.f(r(this), e, {
					get: o(t),
					enumerable: !0,
					configurable: !0
				})
			}
		})
	}, {
		109: 109,
		28: 28,
		3: 3,
		32: 32,
		67: 67,
		69: 69
	}],
	266: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(109),
			o = e(3),
			s = e(67);
		e(28) && i(i.P + e(69), "Object", {
			__defineSetter__: function(e, t) {
				s.f(r(this), e, {
					set: o(t),
					enumerable: !0,
					configurable: !0
				})
			}
		})
	}, {
		109: 109,
		28: 28,
		3: 3,
		32: 32,
		67: 67,
		69: 69
	}],
	267: [function(e, t, n) {
		var i = e(32),
			r = e(79)(!0);
		i(i.S, "Object", {
			entries: function(e) {
				return r(e)
			}
		})
	}, {
		32: 32,
		79: 79
	}],
	268: [function(e, t, n) {
		var i = e(32),
			r = e(80),
			o = e(107),
			s = e(70),
			a = e(24);
		i(i.S, "Object", {
			getOwnPropertyDescriptors: function(e) {
				for(var t, n = o(e), i = s.f, l = r(n), c = {}, u = 0; l.length > u;) a(c, t = l[u++], i(n, t));
				return c
			}
		})
	}, {
		107: 107,
		24: 24,
		32: 32,
		70: 70,
		80: 80
	}],
	269: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(109),
			o = e(110),
			s = e(74),
			a = e(70).f;
		e(28) && i(i.P + e(69), "Object", {
			__lookupGetter__: function(e) {
				var t, n = r(this),
					i = o(e, !0);
				do
					if(t = a(n, i)) return t.get; while (n = s(n))
			}
		})
	}, {
		109: 109,
		110: 110,
		28: 28,
		32: 32,
		69: 69,
		70: 70,
		74: 74
	}],
	270: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(109),
			o = e(110),
			s = e(74),
			a = e(70).f;
		e(28) && i(i.P + e(69), "Object", {
			__lookupSetter__: function(e) {
				var t, n = r(this),
					i = o(e, !0);
				do
					if(t = a(n, i)) return t.set; while (n = s(n))
			}
		})
	}, {
		109: 109,
		110: 110,
		28: 28,
		32: 32,
		69: 69,
		70: 70,
		74: 74
	}],
	271: [function(e, t, n) {
		var i = e(32),
			r = e(79)(!1);
		i(i.S, "Object", {
			values: function(e) {
				return r(e)
			}
		})
	}, {
		32: 32,
		79: 79
	}],
	272: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(38),
			o = e(23),
			s = e(64)(),
			a = e(117)("observable"),
			l = e(3),
			c = e(7),
			u = e(6),
			d = e(86),
			f = e(40),
			h = e(37),
			p = h.RETURN,
			m = function(e) {
				return null == e ? void 0 : l(e)
			},
			g = function(e) {
				var t = e._c;
				t && (e._c = void 0, t())
			},
			v = function(e) {
				return void 0 === e._o
			},
			y = function(e) {
				v(e) || (e._o = void 0, g(e))
			},
			b = function(e, t) {
				c(e), this._c = void 0, this._o = e, e = new w(this);
				try {
					var n = t(e),
						i = n;
					null != n && ("function" == typeof n.unsubscribe ? n = function() {
						i.unsubscribe()
					} : l(n), this._c = n)
				} catch(r) {
					return void e.error(r)
				}
				v(this) && g(this)
			};
		b.prototype = d({}, {
			unsubscribe: function() {
				y(this)
			}
		});
		var w = function(e) {
			this._s = e
		};
		w.prototype = d({}, {
			next: function(e) {
				var t = this._s;
				if(!v(t)) {
					var n = t._o;
					try {
						var i = m(n.next);
						if(i) return i.call(n, e)
					} catch(r) {
						try {
							y(t)
						} finally {
							throw r
						}
					}
				}
			},
			error: function(e) {
				var t = this._s;
				if(v(t)) throw e;
				var n = t._o;
				t._o = void 0;
				try {
					var i = m(n.error);
					if(!i) throw e;
					e = i.call(n, e)
				} catch(r) {
					try {
						g(t)
					} finally {
						throw r
					}
				}
				return g(t), e
			},
			complete: function(e) {
				var t = this._s;
				if(!v(t)) {
					var n = t._o;
					t._o = void 0;
					try {
						var i = m(n.complete);
						e = i ? i.call(n, e) : void 0
					} catch(r) {
						try {
							g(t)
						} finally {
							throw r
						}
					}
					return g(t), e
				}
			}
		});
		var x = function(e) {
			u(this, x, "Observable", "_f")._f = l(e)
		};
		d(x.prototype, {
			subscribe: function(e) {
				return new b(e, this._f)
			},
			forEach: function(e) {
				var t = this;
				return new(o.Promise || r.Promise)(function(n, i) {
					l(e);
					var r = t.subscribe({
						next: function(t) {
							try {
								return e(t)
							} catch(n) {
								i(n), r.unsubscribe()
							}
						},
						error: i,
						complete: n
					})
				})
			}
		}), d(x, {
			from: function(e) {
				var t = "function" == typeof this ? this : x,
					n = m(c(e)[a]);
				if(n) {
					var i = c(n.call(e));
					return i.constructor === t ? i : new t(function(e) {
						return i.subscribe(e)
					})
				}
				return new t(function(t) {
					var n = !1;
					return s(function() {
							if(!n) {
								try {
									if(h(e, !1, function(e) {
											if(t.next(e), n) return p
										}) === p) return
								} catch(i) {
									if(n) throw i;
									return void t.error(i)
								}
								t.complete()
							}
						}),
						function() {
							n = !0
						}
				})
			},
			of: function() {
				for(var e = 0, t = arguments.length, n = Array(t); e < t;) n[e] = arguments[e++];
				return new("function" == typeof this ? this : x)(function(e) {
					var t = !1;
					return s(function() {
							if(!t) {
								for(var i = 0; i < n.length; ++i)
									if(e.next(n[i]), t) return;
								e.complete()
							}
						}),
						function() {
							t = !0
						}
				})
			}
		}), f(x.prototype, a, function() {
			return this
		}), i(i.G, {
			Observable: x
		}), e(91)("Observable")
	}, {
		117: 117,
		23: 23,
		3: 3,
		32: 32,
		37: 37,
		38: 38,
		40: 40,
		6: 6,
		64: 64,
		7: 7,
		86: 86,
		91: 91
	}],
	273: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = i.key,
			s = i.set;
		i.exp({
			defineMetadata: function(e, t, n, i) {
				s(e, t, r(n), o(i))
			}
		})
	}, {
		63: 63,
		7: 7
	}],
	274: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = i.key,
			s = i.map,
			a = i.store;
		i.exp({
			deleteMetadata: function(e, t) {
				var n = arguments.length < 3 ? void 0 : o(arguments[2]),
					i = s(r(t), n, !1);
				if(void 0 === i || !i["delete"](e)) return !1;
				if(i.size) return !0;
				var l = a.get(t);
				return l["delete"](n), !!l.size || a["delete"](t)
			}
		})
	}, {
		63: 63,
		7: 7
	}],
	275: [function(e, t, n) {
		var i = e(220),
			r = e(10),
			o = e(63),
			s = e(7),
			a = e(74),
			l = o.keys,
			c = o.key,
			u = function d(e, t) {
				var n = l(e, t),
					o = a(e);
				if(null === o) return n;
				var s = d(o, t);
				return s.length ? n.length ? r(new i(n.concat(s))) : s : n
			};
		o.exp({
			getMetadataKeys: function(e) {
				return u(s(e), arguments.length < 2 ? void 0 : c(arguments[1]))
			}
		})
	}, {
		10: 10,
		220: 220,
		63: 63,
		7: 7,
		74: 74
	}],
	276: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = e(74),
			s = i.has,
			a = i.get,
			l = i.key,
			c = function u(e, t, n) {
				var i = s(e, t, n);
				if(i) return a(e, t, n);
				var r = o(t);
				return null !== r ? u(e, r, n) : void 0
			};
		i.exp({
			getMetadata: function(e, t) {
				return c(e, r(t), arguments.length < 3 ? void 0 : l(arguments[2]))
			}
		})
	}, {
		63: 63,
		7: 7,
		74: 74
	}],
	277: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = i.keys,
			s = i.key;
		i.exp({
			getOwnMetadataKeys: function(e) {
				return o(r(e), arguments.length < 2 ? void 0 : s(arguments[1]))
			}
		})
	}, {
		63: 63,
		7: 7
	}],
	278: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = i.get,
			s = i.key;
		i.exp({
			getOwnMetadata: function(e, t) {
				return o(e, r(t), arguments.length < 3 ? void 0 : s(arguments[2]))
			}
		})
	}, {
		63: 63,
		7: 7
	}],
	279: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = e(74),
			s = i.has,
			a = i.key,
			l = function c(e, t, n) {
				var i = s(e, t, n);
				if(i) return !0;
				var r = o(t);
				return null !== r && c(e, r, n)
			};
		i.exp({
			hasMetadata: function(e, t) {
				return l(e, r(t), arguments.length < 3 ? void 0 : a(arguments[2]))
			}
		})
	}, {
		63: 63,
		7: 7,
		74: 74
	}],
	280: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = i.has,
			s = i.key;
		i.exp({
			hasOwnMetadata: function(e, t) {
				return o(e, r(t), arguments.length < 3 ? void 0 : s(arguments[2]))
			}
		})
	}, {
		63: 63,
		7: 7
	}],
	281: [function(e, t, n) {
		var i = e(63),
			r = e(7),
			o = e(3),
			s = i.key,
			a = i.set;
		i.exp({
			metadata: function(e, t) {
				return function(n, i) {
					a(e, t, (void 0 !== i ? r : o)(n), s(i))
				}
			}
		})
	}, {
		3: 3,
		63: 63,
		7: 7
	}],
	282: [function(e, t, n) {
		var i = e(32);
		i(i.P + i.R, "Set", {
			toJSON: e(20)("Set")
		})
	}, {
		20: 20,
		32: 32
	}],
	283: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(97)(!0);
		i(i.P, "String", {
			at: function(e) {
				return r(this, e)
			}
		})
	}, {
		32: 32,
		97: 97
	}],
	284: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(27),
			o = e(108),
			s = e(50),
			a = e(36),
			l = RegExp.prototype,
			c = function(e, t) {
				this._r = e, this._s = t
			};
		e(52)(c, "RegExp String", function() {
			var e = this._r.exec(this._s);
			return {
				value: e,
				done: null === e
			}
		}), i(i.P, "String", {
			matchAll: function(e) {
				if(r(this), !s(e)) throw TypeError(e + " is not a regexp!");
				var t = String(this),
					n = "flags" in l ? String(e.flags) : a.call(e),
					i = new RegExp(e.source, ~n.indexOf("g") ? n : "g" + n);
				return i.lastIndex = o(e.lastIndex), new c(i, t)
			}
		})
	}, {
		108: 108,
		27: 27,
		32: 32,
		36: 36,
		50: 50,
		52: 52
	}],
	285: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(100);
		i(i.P, "String", {
			padEnd: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
			}
		})
	}, {
		100: 100,
		32: 32
	}],
	286: [function(e, t, n) {
		"use strict";
		var i = e(32),
			r = e(100);
		i(i.P, "String", {
			padStart: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
			}
		})
	}, {
		100: 100,
		32: 32
	}],
	287: [function(e, t, n) {
		"use strict";
		e(102)("trimLeft", function(e) {
			return function() {
				return e(this, 1)
			}
		}, "trimStart")
	}, {
		102: 102
	}],
	288: [function(e, t, n) {
		"use strict";
		e(102)("trimRight", function(e) {
			return function() {
				return e(this, 2)
			}
		}, "trimEnd")
	}, {
		102: 102
	}],
	289: [function(e, t, n) {
		e(115)("asyncIterator")
	}, {
		115: 115
	}],
	290: [function(e, t, n) {
		e(115)("observable")
	}, {
		115: 115
	}],
	291: [function(e, t, n) {
		var i = e(32);
		i(i.S, "System", {
			global: e(38)
		})
	}, {
		32: 32,
		38: 38
	}],
	292: [function(e, t, n) {
		for(var i = e(130), r = e(87), o = e(38), s = e(40), a = e(56), l = e(117), c = l("iterator"), u = l("toStringTag"), d = a.Array, f = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], h = 0; h < 5; h++) {
			var p, m = f[h],
				g = o[m],
				v = g && g.prototype;
			if(v) {
				v[c] || s(v, c, d), v[u] || s(v, u, m), a[m] = d;
				for(p in i) v[p] || r(v, p, i[p], !0)
			}
		}
	}, {
		117: 117,
		130: 130,
		38: 38,
		40: 40,
		56: 56,
		87: 87
	}],
	293: [function(e, t, n) {
		var i = e(32),
			r = e(104);
		i(i.G + i.B, {
			setImmediate: r.set,
			clearImmediate: r.clear
		})
	}, {
		104: 104,
		32: 32
	}],
	294: [function(e, t, n) {
		var i = e(38),
			r = e(32),
			o = e(44),
			s = e(83),
			a = i.navigator,
			l = !!a && /MSIE .\./.test(a.userAgent),
			c = function(e) {
				return l ? function(t, n) {
					return e(o(s, [].slice.call(arguments, 2), "function" == typeof t ? t : Function(t)), n)
				} : e
			};
		r(r.G + r.B + r.F * l, {
			setTimeout: c(i.setTimeout),
			setInterval: c(i.setInterval)
		})
	}, {
		32: 32,
		38: 38,
		44: 44,
		83: 83
	}],
	295: [function(e, t, n) {
		e(243), e(180), e(182), e(181), e(184), e(186), e(191), e(185), e(183), e(193), e(192), e(188), e(189), e(187), e(179), e(190), e(194), e(195), e(146), e(148), e(147), e(197), e(196), e(167), e(177), e(178), e(168), e(169), e(170), e(171), e(172), e(173), e(174), e(175), e(176), e(150), e(151), e(152), e(153), e(154), e(155), e(156), e(157), e(158), e(159), e(160), e(161), e(162), e(163), e(164), e(165), e(166), e(230), e(235), e(242), e(233), e(225), e(226), e(231), e(236), e(238), e(221), e(222), e(223), e(224), e(227), e(228), e(229), e(232), e(234), e(237), e(239), e(240), e(241), e(141), e(143), e(142), e(145), e(144), e(129), e(127), e(134), e(131), e(137), e(139), e(126), e(133), e(123), e(138), e(121), e(136), e(135), e(128), e(132), e(120), e(122), e(125), e(124), e(140), e(130), e(213), e(219), e(214), e(215), e(216), e(217), e(218), e(198), e(149), e(220), e(255), e(256), e(244), e(245), e(250), e(253), e(254), e(248), e(251), e(249), e(252), e(246), e(247), e(199), e(200), e(201), e(202), e(203), e(206), e(204), e(205), e(207), e(208), e(209), e(210), e(212), e(211), e(257), e(283), e(286), e(285), e(287), e(288), e(284), e(289), e(290), e(268), e(271), e(267), e(265), e(266), e(269), e(270), e(260), e(282), e(291), e(259), e(261), e(263), e(262), e(264), e(273), e(274), e(276), e(275), e(278), e(277), e(279), e(280), e(281), e(258), e(272), e(294), e(293), e(292), t.exports = e(23)
	}, {
		120: 120,
		121: 121,
		122: 122,
		123: 123,
		124: 124,
		125: 125,
		126: 126,
		127: 127,
		128: 128,
		129: 129,
		130: 130,
		131: 131,
		132: 132,
		133: 133,
		134: 134,
		135: 135,
		136: 136,
		137: 137,
		138: 138,
		139: 139,
		140: 140,
		141: 141,
		142: 142,
		143: 143,
		144: 144,
		145: 145,
		146: 146,
		147: 147,
		148: 148,
		149: 149,
		150: 150,
		151: 151,
		152: 152,
		153: 153,
		154: 154,
		155: 155,
		156: 156,
		157: 157,
		158: 158,
		159: 159,
		160: 160,
		161: 161,
		162: 162,
		163: 163,
		164: 164,
		165: 165,
		166: 166,
		167: 167,
		168: 168,
		169: 169,
		170: 170,
		171: 171,
		172: 172,
		173: 173,
		174: 174,
		175: 175,
		176: 176,
		177: 177,
		178: 178,
		179: 179,
		180: 180,
		181: 181,
		182: 182,
		183: 183,
		184: 184,
		185: 185,
		186: 186,
		187: 187,
		188: 188,
		189: 189,
		190: 190,
		191: 191,
		192: 192,
		193: 193,
		194: 194,
		195: 195,
		196: 196,
		197: 197,
		198: 198,
		199: 199,
		200: 200,
		201: 201,
		202: 202,
		203: 203,
		204: 204,
		205: 205,
		206: 206,
		207: 207,
		208: 208,
		209: 209,
		210: 210,
		211: 211,
		212: 212,
		213: 213,
		214: 214,
		215: 215,
		216: 216,
		217: 217,
		218: 218,
		219: 219,
		220: 220,
		221: 221,
		222: 222,
		223: 223,
		224: 224,
		225: 225,
		226: 226,
		227: 227,
		228: 228,
		229: 229,
		23: 23,
		230: 230,
		231: 231,
		232: 232,
		233: 233,
		234: 234,
		235: 235,
		236: 236,
		237: 237,
		238: 238,
		239: 239,
		240: 240,
		241: 241,
		242: 242,
		243: 243,
		244: 244,
		245: 245,
		246: 246,
		247: 247,
		248: 248,
		249: 249,
		250: 250,
		251: 251,
		252: 252,
		253: 253,
		254: 254,
		255: 255,
		256: 256,
		257: 257,
		258: 258,
		259: 259,
		260: 260,
		261: 261,
		262: 262,
		263: 263,
		264: 264,
		265: 265,
		266: 266,
		267: 267,
		268: 268,
		269: 269,
		270: 270,
		271: 271,
		272: 272,
		273: 273,
		274: 274,
		275: 275,
		276: 276,
		277: 277,
		278: 278,
		279: 279,
		280: 280,
		281: 281,
		282: 282,
		283: 283,
		284: 284,
		285: 285,
		286: 286,
		287: 287,
		288: 288,
		289: 289,
		290: 290,
		291: 291,
		292: 292,
		293: 293,
		294: 294
	}],
	296: [function(e, t, n) {
		(function(e) {
			! function(e) {
				"use strict";

				function n(e, t, n, i) {
					var o = t && t.prototype instanceof r ? t : r,
						s = Object.create(o.prototype),
						a = new f(i || []);
					return s._invoke = c(e, n, a), s
				}

				function i(e, t, n) {
					try {
						return {
							type: "normal",
							arg: e.call(t, n)
						}
					} catch(i) {
						return {
							type: "throw",
							arg: i
						}
					}
				}

				function r() {}

				function o() {}

				function s() {}

				function a(e) {
					["next", "throw", "return"].forEach(function(t) {
						e[t] = function(e) {
							return this._invoke(t, e)
						}
					})
				}

				function l(e) {
					function t(n, r, o, s) {
						var a = i(e[n], e, r);
						if("throw" !== a.type) {
							var l = a.arg,
								c = l.value;
							return c && "object" === ("undefined" == typeof c ? "undefined" : _typeof(c)) && v.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
								t("next", e, o, s)
							}, function(e) {
								t("throw", e, o, s)
							}) : Promise.resolve(c).then(function(e) {
								l.value = e, o(l)
							}, s)
						}
						s(a.arg)
					}

					function n(e, n) {
						function i() {
							return new Promise(function(i, r) {
								t(e, n, i, r)
							})
						}
						return r = r ? r.then(i, i) : i()
					}
					"object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.domain && (t = process.domain.bind(t));
					var r;
					this._invoke = n
				}

				function c(e, t, n) {
					var r = C;
					return function(o, s) {
						if(r === N) throw new Error("Generator is already running");
						if(r === E) {
							if("throw" === o) throw s;
							return p()
						}
						for(;;) {
							var a = n.delegate;
							if(a) {
								if("return" === o || "throw" === o && a.iterator[o] === m) {
									n.delegate = null;
									var l = a.iterator["return"];
									if(l) {
										var c = i(l, a.iterator, s);
										if("throw" === c.type) {
											o = "throw", s = c.arg;
											continue
										}
									}
									if("return" === o) continue
								}
								var c = i(a.iterator[o], a.iterator, s);
								if("throw" === c.type) {
									n.delegate = null, o = "throw", s = c.arg;
									continue
								}
								o = "next", s = m;
								var u = c.arg;
								if(!u.done) return r = k, u;
								n[a.resultName] = u.value, n.next = a.nextLoc, n.delegate = null
							}
							if("next" === o) n.sent = n._sent = s;
							else if("throw" === o) {
								if(r === C) throw r = E, s;
								n.dispatchException(s) && (o = "next", s = m)
							} else "return" === o && n.abrupt("return", s);
							r = N;
							var c = i(e, t, n);
							if("normal" === c.type) {
								r = n.done ? E : k;
								var u = {
									value: c.arg,
									done: n.done
								};
								if(c.arg !== S) return u;
								n.delegate && "next" === o && (s = m)
							} else "throw" === c.type && (r = E, o = "throw", s = c.arg)
						}
					}
				}

				function u(e) {
					var t = {
						tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
				}

				function d(e) {
					var t = e.completion || {};
					t.type = "normal", delete t.arg, e.completion = t;
				}

				function f(e) {
					this.tryEntries = [{
						tryLoc: "root"
					}], e.forEach(u, this), this.reset(!0)
				}

				function h(e) {
					if(e) {
						var t = e[b];
						if(t) return t.call(e);
						if("function" == typeof e.next) return e;
						if(!isNaN(e.length)) {
							var n = -1,
								i = function r() {
									for(; ++n < e.length;)
										if(v.call(e, n)) return r.value = e[n], r.done = !1, r;
									return r.value = m, r.done = !0, r
								};
							return i.next = i
						}
					}
					return {
						next: p
					}
				}

				function p() {
					return {
						value: m,
						done: !0
					}
				}
				var m, g = Object.prototype,
					v = g.hasOwnProperty,
					y = "function" == typeof Symbol ? Symbol : {},
					b = y.iterator || "@@iterator",
					w = y.toStringTag || "@@toStringTag",
					x = "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)),
					_ = e.regeneratorRuntime;
				if(_) return void(x && (t.exports = _));
				_ = e.regeneratorRuntime = x ? t.exports : {}, _.wrap = n;
				var C = "suspendedStart",
					k = "suspendedYield",
					N = "executing",
					E = "completed",
					S = {},
					T = {};
				T[b] = function() {
					return this
				};
				var D = Object.getPrototypeOf,
					A = D && D(D(h([])));
				A && A !== g && v.call(A, b) && (T = A);
				var U = s.prototype = r.prototype = Object.create(T);
				o.prototype = U.constructor = s, s.constructor = o, s[w] = o.displayName = "GeneratorFunction", _.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
				}, _.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, w in e || (e[w] = "GeneratorFunction")), e.prototype = Object.create(U), e
				}, _.awrap = function(e) {
					return {
						__await: e
					}
				}, a(l.prototype), _.AsyncIterator = l, _.async = function(e, t, i, r) {
					var o = new l(n(e, t, i, r));
					return _.isGeneratorFunction(t) ? o : o.next().then(function(e) {
						return e.done ? e.value : o.next()
					})
				}, a(U), U[w] = "Generator", U.toString = function() {
					return "[object Generator]"
				}, _.keys = function(e) {
					var t = [];
					for(var n in e) t.push(n);
					return t.reverse(),
						function i() {
							for(; t.length;) {
								var n = t.pop();
								if(n in e) return i.value = n, i.done = !1, i
							}
							return i.done = !0, i
						}
				}, _.values = h, f.prototype = {
					constructor: f,
					reset: function(e) {
						if(this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(d), !e)
							for(var t in this) "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0],
							t = e.completion;
						if("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(e) {
						function t(t, i) {
							return o.type = "throw", o.arg = e, n.next = t, !!i
						}
						if(this.done) throw e;
						for(var n = this, i = this.tryEntries.length - 1; i >= 0; --i) {
							var r = this.tryEntries[i],
								o = r.completion;
							if("root" === r.tryLoc) return t("end");
							if(r.tryLoc <= this.prev) {
								var s = v.call(r, "catchLoc"),
									a = v.call(r, "finallyLoc");
								if(s && a) {
									if(this.prev < r.catchLoc) return t(r.catchLoc, !0);
									if(this.prev < r.finallyLoc) return t(r.finallyLoc)
								} else if(s) {
									if(this.prev < r.catchLoc) return t(r.catchLoc, !0)
								} else {
									if(!a) throw new Error("try statement without catch or finally");
									if(this.prev < r.finallyLoc) return t(r.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for(var n = this.tryEntries.length - 1; n >= 0; --n) {
							var i = this.tryEntries[n];
							if(i.tryLoc <= this.prev && v.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
								var r = i;
								break
							}
						}
						r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
						var o = r ? r.completion : {};
						return o.type = e, o.arg = t, r ? this.next = r.finallyLoc : this.complete(o), S
					},
					complete: function(e, t) {
						if("throw" === e.type) throw e.arg;
						"break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
					},
					finish: function(e) {
						for(var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if(n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), S
						}
					},
					"catch": function(e) {
						for(var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if(n.tryLoc === e) {
								var i = n.completion;
								if("throw" === i.type) {
									var r = i.arg;
									d(n)
								}
								return r
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, n) {
						return this.delegate = {
							iterator: h(e),
							resultName: t,
							nextLoc: n
						}, S
					}
				}
			}("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e : "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) ? self : this)
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {}]
}, {}, [1]);