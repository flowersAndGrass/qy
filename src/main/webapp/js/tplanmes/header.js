! function(e, t) {
	function n(e) {
		var t = e.length,
			n = ce.type(e);
		return !ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
	}

	function r(e) {
		var t = Ce[e] = {};
		return ce.each(e.match(fe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function i(e, n, r, i) {
		if (ce.acceptData(e)) {
			var o, a, s = ce.expando,
				l = e.nodeType,
				u = l ? ce.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = te.pop() || ce.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: ce.noop
			}), "object" != typeof n && "function" != typeof n || (i ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ce.camelCase(n)] = r), "string" == typeof n ? null == (o = a[n]) && (o = a[ce.camelCase(n)]) : o = a, o
		}
	}

	function o(e, t, n) {
		if (ce.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? ce.cache : e,
				l = o ? e[ce.expando] : ce.expando;
			if (a[l]) {
				if (t && (r = n ? a[l] : a[l].data)) {
					ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in r ? t = [t] : (t = ce.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					for (; i--;) delete r[t[i]];
					if (n ? !s(r) : !ce.isEmptyObject(r)) return
				}(n || (delete a[l].data, s(a[l]))) && (o ? ce.cleanData([e], !0) : ce.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
			}
		}
	}

	function a(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
			if ("string" == typeof(r = e.getAttribute(i))) {
				try {
					r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Ee.test(r) ? ce.parseJSON(r) : r)
				} catch (e) {}
				ce.data(e, n, r)
			} else r = t
		}
		return r
	}

	function s(e) {
		var t;
		for (t in e)
			if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function l() {
		return !0
	}

	function u() {
		return !1
	}

	function c() {
		try {
			return Y.activeElement
		} catch (e) {}
	}

	function p(e, t) {
		do {
			e = e[t]
		} while (e && 1 !== e.nodeType);
		return e
	}

	function f(e, t, n) {
		if (ce.isFunction(t)) return ce.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return ce.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (We.test(t)) return ce.filter(t, e, n);
			t = ce.filter(t, e)
		}
		return ce.grep(e, function(e) {
			return ce.inArray(e, t) >= 0 !== n
		})
	}

	function d(e) {
		var t = Xe.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function h(e, t) {
		return ce.nodeName(e, "table") && ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function m(e) {
		return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
	}

	function g(e) {
		var t = it.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function y(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) ce._data(n, "globalEval", !t || ce._data(t[r], "globalEval"))
	}

	function v(e, t) {
		if (1 === t.nodeType && ce.hasData(e)) {
			var n, r, i, o = ce._data(e),
				a = ce._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (r = 0, i = s[n].length; r < i; r++) ce.event.add(t, n, s[n][r])
			}
			a.data && (a.data = ce.extend({}, a.data))
		}
	}

	function b(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
				i = ce._data(t);
				for (r in i.events) ce.removeEvent(t, r, i.handle);
				t.removeAttribute(ce.expando)
			}
			"script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}
	}

	function x(e, n) {
		var r, i, o = 0,
			a = typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Q ? e.querySelectorAll(n || "*") : t;
		if (!a)
			for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ce.nodeName(i, n) ? a.push(i) : ce.merge(a, x(i, n));
		return n === t || n && ce.nodeName(e, n) ? ce.merge([e], a) : a
	}

	function w(e) {
		tt.test(e.type) && (e.defaultChecked = e.checked)
	}

	function _(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kt.length; i--;)
			if ((t = kt[i] + n) in e) return t;
		return r
	}

	function T(e, t) {
		return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
	}

	function k(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = ce._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ce._data(r, "olddisplay", j(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ce._data(r, "olddisplay", i ? n : ce.css(r, "display"))));
		for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function C(e, t, n) {
		var r = yt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function E(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ce.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (a -= ce.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (a -= ce.css(e, "border" + Tt[o] + "Width", !0, i))) : (a += ce.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (a += ce.css(e, "border" + Tt[o] + "Width", !0, i)));
		return a
	}

	function N(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = ct(e),
			a = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
		if (i <= 0 || null == i) {
			if (i = pt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), vt.test(i)) return i;
			r = a && (ce.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function j(e) {
		var t = Y,
			n = xt[e];
		return n || (n = S(e, t), "none" !== n && n || (ut = (ut || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), ut.detach()), xt[e] = n), n
	}

	function S(e, t) {
		var n = ce(t.createElement(e)).appendTo(t.body),
			r = ce.css(n[0], "display");
		return n.remove(), r
	}

	function q(e, t, n, r) {
		var i;
		if (ce.isArray(t)) ce.each(t, function(t, i) {
			n || Et.test(e) ? r(e, i) : q(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== ce.type(t)) r(e, t);
		else
			for (i in t) q(e + "[" + i + "]", t[i], n, r)
	}

	function A(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(fe) || [];
			if (ce.isFunction(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function D(e, t, n, r) {
		function i(s) {
			var l;
			return o[s] = !0, ce.each(e[s] || [], function(e, s) {
				var u = s(t, n, r);
				return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
			}), l
		}
		var o = {},
			a = e === $t;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function L(e, n) {
		var r, i, o = ce.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && ce.extend(!0, e, r), e
	}

	function H(e, n, r) {
		for (var i, o, a, s, l = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o)
			for (s in l)
				if (l[s] && l[s].test(o)) {
					u.unshift(s);
					break
				}
		if (u[0] in r) a = u[0];
		else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		} if (a) return a !== u[0] && u.unshift(a), r[a]
	}

	function M(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (!(a = u[l + " " + o] || u["* " + o]))
				for (i in u)
					if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						!0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
						break
					}
			if (!0 !== a)
				if (a && e.throws) t = a(t);
				else try {
					t = a(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: a ? e : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function O() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	}

	function F() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}

	function B() {
		return setTimeout(function() {
			Jt = t
		}), Jt = ce.now()
	}

	function R(e, t, n) {
		for (var r, i = (rn[t] || []).concat(rn["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function P(e, t, n) {
		var r, i, o = 0,
			a = nn.length,
			s = ce.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				for (var t = Jt || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: ce.extend({}, t),
				opts: ce.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Jt || B(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = ce.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (z(c, u.opts.specialEasing); o < a; o++)
			if (r = nn[o].call(u, e, c, u.opts)) return r;
		return ce.map(c, R, u), ce.isFunction(u.opts.start) && u.opts.start.call(e, u), ce.fx.timer(ce.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function z(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = ce.camelCase(n), i = t[r], o = e[n], ce.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function W(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {},
			p = e.style,
			f = e.nodeType && T(e),
			d = ce._data(e, "fxshow");
		n.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], Zt.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
				c[r] = d && d[r] || ce.style(e, r)
			}
		if (!ce.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = ce._data(e, "fxshow", {}), o && (d.hidden = !f), f ? ce(e).show() : u.done(function() {
				ce(e).hide()
			}), u.done(function() {
				var t;
				ce._removeData(e, "fxshow");
				for (t in c) ce.style(e, t, c[t])
			});
			for (r in c) a = R(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function $(e, t, n, r, i) {
		return new $.prototype.init(e, t, n, r, i)
	}

	function I(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Tt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function U(e) {
		return ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var X, V, Q = typeof t,
		G = e.location,
		Y = e.document,
		J = Y.documentElement,
		K = e.jQuery,
		Z = e.$,
		ee = {},
		te = [],
		ne = "1.10.2",
		re = te.concat,
		ie = te.push,
		oe = te.slice,
		ae = te.indexOf,
		se = ee.toString,
		le = ee.hasOwnProperty,
		ue = ne.trim,
		ce = function(e, t) {
			return new ce.fn.init(e, t, V)
		},
		pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		fe = /\S+/g,
		de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ge = /^[\],:{}\s]*$/,
		ye = /(?:^|:|,)(?:\s*\[)+/g,
		ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		xe = /^-ms-/,
		we = /-([\da-z])/gi,
		_e = function(e, t) {
			return t.toUpperCase()
		},
		Te = function(e) {
			(Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (ke(), ce.ready())
		},
		ke = function() {
			Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", Te, !1), e.removeEventListener("load", Te, !1)) : (Y.detachEvent("onreadystatechange", Te), e.detachEvent("onload", Te))
		};
	ce.fn = ce.prototype = {
			jquery: ne,
			constructor: ce,
			init: function(e, n, r) {
				var i, o;
				if (!e) return this;
				if ("string" == typeof e) {
					if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
					if (i[1]) {
						if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), me.test(i[1]) && ce.isPlainObject(n))
							for (i in n) ce.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
						return this
					}
					if ((o = Y.getElementById(i[2])) && o.parentNode) {
						if (o.id !== i[2]) return r.find(e);
						this.length = 1, this[0] = o
					}
					return this.context = Y, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
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
				var t = ce.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ce.each(this, e, t)
			},
			ready: function(e) {
				return ce.ready.promise().done(e), this
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
				return this.pushStack(ce.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: ie,
			sort: [].sort,
			splice: [].splice
		}, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
			var e, n, r, i, o, a, s = arguments[0] || {},
				l = 1,
				u = arguments.length,
				c = !1;
			for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), u === l && (s = this, --l); l < u; l++)
				if (null != (o = arguments[l]))
					for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ce.isPlainObject(r) || (n = ce.isArray(r))) ? (n ? (n = !1, a = e && ce.isArray(e) ? e : []) : a = e && ce.isPlainObject(e) ? e : {}, s[i] = ce.extend(c, a, r)) : r !== t && (s[i] = r));
			return s
		}, ce.extend({
			expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
			noConflict: function(t) {
				return e.$ === ce && (e.$ = Z), t && e.jQuery === ce && (e.jQuery = K), ce
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ce.readyWait++ : ce.ready(!0)
			},
			ready: function(e) {
				if (!0 === e ? !--ce.readyWait : !ce.isReady) {
					if (!Y.body) return setTimeout(ce.ready);
					ce.isReady = !0, !0 !== e && --ce.readyWait > 0 || (X.resolveWith(Y, [ce]), ce.fn.trigger && ce(Y).trigger("ready").off("ready"))
				}
			},
			isFunction: function(e) {
				return "function" === ce.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ce.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				var n;
				if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
				try {
					if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (e) {
					return !1
				}
				if (ce.support.ownLast)
					for (n in e) return le.call(e, n);
				for (n in e);
				return n === t || le.call(e, n)
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			error: function(e) {
				throw new Error(e)
			},
			parseHTML: function(e, t, n) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || Y;
				var r = me.exec(e),
					i = !n && [];
				return r ? [t.createElement(r[1])] : (r = ce.buildFragment([e], t, i), i && ce(i).remove(), ce.merge([], r.childNodes))
			},
			parseJSON: function(t) {
				return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ce.trim(t)) && ge.test(t.replace(ve, "@").replace(be, "]").replace(ye, "")) ? new Function("return " + t)() : void ce.error("Invalid JSON: " + t)
			},
			parseXML: function(n) {
				var r, i;
				if (!n || "string" != typeof n) return null;
				try {
					e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
				} catch (e) {
					r = t
				}
				return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), r
			},
			noop: function() {},
			globalEval: function(t) {
				t && ce.trim(t) && (e.execScript || function(t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function(e) {
				return e.replace(xe, "ms-").replace(we, _e)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, r) {
				var i = 0,
					o = e.length,
					a = n(e);
				if (r) {
					if (a)
						for (; i < o && !1 !== t.apply(e[i], r); i++);
					else
						for (i in e)
							if (!1 === t.apply(e[i], r)) break
				} else if (a)
					for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
				else
					for (i in e)
						if (!1 === t.call(e[i], i, e[i])) break; return e
			},
			trim: ue && !ue.call("\ufeff ") ? function(e) {
				return null == e ? "" : ue.call(e)
			} : function(e) {
				return null == e ? "" : (e + "").replace(de, "")
			},
			makeArray: function(e, t) {
				var r = t || [];
				return null != e && (n(Object(e)) ? ce.merge(r, "string" == typeof e ? [e] : e) : ie.call(r, e)), r
			},
			inArray: function(e, t, n) {
				var r;
				if (t) {
					if (ae) return ae.call(t, e, n);
					for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
						if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, n) {
				var r = n.length,
					i = e.length,
					o = 0;
				if ("number" == typeof r)
					for (; o < r; o++) e[i++] = n[o];
				else
					for (; n[o] !== t;) e[i++] = n[o++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				var r, i = [],
					o = 0,
					a = e.length;
				for (n = !!n; o < a; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
				return i
			},
			map: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e),
					l = [];
				if (s)
					for (; o < a; o++) null != (i = t(e[o], o, r)) && (l[l.length] = i);
				else
					for (o in e) null != (i = t(e[o], o, r)) && (l[l.length] = i);
				return re.apply([], l)
			},
			guid: 1,
			proxy: function(e, n) {
				var r, i, o;
				return "string" == typeof n && (o = e[n], n = e, e = o), ce.isFunction(e) ? (r = oe.call(arguments, 2), i = function() {
					return e.apply(n || this, r.concat(oe.call(arguments)))
				}, i.guid = e.guid = e.guid || ce.guid++, i) : t
			},
			access: function(e, n, r, i, o, a, s) {
				var l = 0,
					u = e.length,
					c = null == r;
				if ("object" === ce.type(r)) {
					o = !0;
					for (l in r) ce.access(e, n, l, r[l], !0, a, s)
				} else if (i !== t && (o = !0, ce.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
					return c.call(ce(e), n)
				})), n))
					for (; l < u; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
				return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
			},
			now: function() {
				return (new Date).getTime()
			},
			swap: function(e, t, n, r) {
				var i, o, a = {};
				for (o in t) a[o] = e.style[o], e.style[o] = t[o];
				i = n.apply(e, r || []);
				for (o in t) e.style[o] = a[o];
				return i
			}
		}), ce.ready.promise = function(t) {
			if (!X)
				if (X = ce.Deferred(), "complete" === Y.readyState) setTimeout(ce.ready);
				else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", Te, !1), e.addEventListener("load", Te, !1);
			else {
				Y.attachEvent("onreadystatechange", Te), e.attachEvent("onload", Te);
				var n = !1;
				try {
					n = null == e.frameElement && Y.documentElement
				} catch (e) {}
				n && n.doScroll && function e() {
					if (!ce.isReady) {
						try {
							n.doScroll("left")
						} catch (t) {
							return setTimeout(e, 50)
						}
						ke(), ce.ready()
					}
				}()
			}
			return X.promise(t)
		}, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			ee["[object " + t + "]"] = t.toLowerCase()
		}), V = ce(Y),
		function(e, t) {
			function n(e, t, n, r) {
				var i, o, a, s, l, u, f, d, h, m;
				if ((t ? t.ownerDocument || t : B) !== q && S(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (s = t.nodeType) && 9 !== s) return [];
				if (D && !r) {
					if (i = ye.exec(e))
						if (a = i[1]) {
							if (9 === s) {
								if (!(o = t.getElementById(a)) || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
							if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
						}
					if (w.qsa && (!L || !L.test(e))) {
						if (d = f = F, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (u = c(e), (f = t.getAttribute("id")) ? d = f.replace(xe, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
							h = pe.test(e) && t.parentNode || t, m = u.join(",")
						}
						if (m) try {
							return K.apply(n, h.querySelectorAll(m)), n
						} catch (e) {} finally {
							f || t.removeAttribute("id")
						}
					}
				}
				return b(e.replace(se, "$1"), t, n, r)
			}

			function r() {
				function e(n, r) {
					return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = r
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[F] = !0, e
			}

			function o(e) {
				var t = q.createElement("div");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function a(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
			}

			function s(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function l(e) {
				return i(function(t) {
					return t = +t, i(function(n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function u() {}

			function c(e, t) {
				var r, i, o, a, s, l, u, c = W[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (s = e, l = [], u = T.preFilter; s;) {
					r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(se, " ")
					}), s = s.slice(r.length));
					for (a in T.filter) !(i = me[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
						value: r,
						type: a,
						matches: i
					}), s = s.slice(r.length));
					if (!r) break
				}
				return t ? s.length : s ? n.error(e) : W(e, l).slice(0)
			}

			function p(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function f(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					o = P++;
				return t.first ? function(t, n, o) {
					for (; t = t[r];)
						if (1 === t.nodeType || i) return e(t, n, o)
				} : function(t, n, a) {
					var s, l, u, c = R + " " + o;
					if (a) {
						for (; t = t[r];)
							if ((1 === t.nodeType || i) && e(t, n, a)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || i)
								if (u = t[F] || (t[F] = {}), (l = u[r]) && l[0] === c) {
									if (!0 === (s = l[1]) || s === _) return !0 === s
								} else if (l = u[r] = [c], l[1] = e(t, n, a) || _, !0 === l[1]) return !0
				}
			}

			function d(e) {
				return e.length > 1 ? function(t, n, r) {
					for (var i = e.length; i--;)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function h(e, t, n, r, i) {
				for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
				return a
			}

			function m(e, t, n, r, o, a) {
				return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, a)), i(function(i, a, s, l) {
					var u, c, p, f = [],
						d = [],
						m = a.length,
						g = i || v(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !i && t ? g : h(g, f, e, s, l),
						b = n ? o || (i ? e : m || r) ? [] : a : y;
					if (n && n(y, b, s, l), r)
						for (u = h(b, d), r(u, [], s, l), c = u.length; c--;)(p = u[c]) && (b[d[c]] = !(y[d[c]] = p));
					if (i) {
						if (o || e) {
							if (o) {
								for (u = [], c = b.length; c--;)(p = b[c]) && u.push(y[c] = p);
								o(null, b = [], u, l)
							}
							for (c = b.length; c--;)(p = b[c]) && (u = o ? ee.call(i, p) : f[c]) > -1 && (i[u] = !(a[u] = p))
						}
					} else b = h(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
				})
			}

			function g(e) {
				for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function(e) {
					return e === t
				}, a, !0), u = f(function(e) {
					return ee.call(t, e) > -1
				}, a, !0), c = [
					function(e, n, r) {
						return !o && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
					}
				]; s < i; s++)
					if (n = T.relative[e[s].type]) c = [f(d(c), n)];
					else {
						if (n = T.filter[e[s].type].apply(null, e[s].matches), n[F]) {
							for (r = ++s; r < i && !T.relative[e[r].type]; r++);
							return m(s > 1 && d(c), s > 1 && p(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(se, "$1"), n, s < r && g(e.slice(s, r)), r < i && g(e = e.slice(r)), r < i && p(e))
						}
						c.push(n)
					}
				return d(c)
			}

			function y(e, t) {
				var r = 0,
					o = t.length > 0,
					a = e.length > 0,
					s = function(i, s, l, u, c) {
						var p, f, d, m = [],
							g = 0,
							y = "0",
							v = i && [],
							b = null != c,
							x = N,
							w = i || a && T.find.TAG("*", c && s.parentNode || s),
							k = R += null == x ? 1 : Math.random() || .1;
						for (b && (N = s !== q && s, _ = r); null != (p = w[y]); y++) {
							if (a && p) {
								for (f = 0; d = e[f++];)
									if (d(p, s, l)) {
										u.push(p);
										break
									}
								b && (R = k, _ = ++r)
							}
							o && ((p = !d && p) && g--, i && v.push(p))
						}
						if (g += y, o && y !== g) {
							for (f = 0; d = t[f++];) d(v, m, s, l);
							if (i) {
								if (g > 0)
									for (; y--;) v[y] || m[y] || (m[y] = Y.call(u));
								m = h(m)
							}
							K.apply(u, m), b && !i && m.length > 0 && g + t.length > 1 && n.uniqueSort(u)
						}
						return b && (R = k, N = x), v
					};
				return o ? i(s) : s
			}

			function v(e, t, r) {
				for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
				return r
			}

			function b(e, t, n, r) {
				var i, o, a, s, l, u = c(e);
				if (!r && 1 === u.length) {
					if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && D && T.relative[o[1].type]) {
						if (!(t = (T.find.ID(a.matches[0].replace(we, _e), t) || [])[0])) return n;
						e = e.slice(o.shift().value.length)
					}
					for (i = me.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
						if ((l = T.find[s]) && (r = l(a.matches[0].replace(we, _e), pe.test(o[0].type) && t.parentNode || t))) {
							if (o.splice(i, 1), !(e = r.length && p(o))) return K.apply(n, r), n;
							break
						}
				}
				return E(e, u)(r, t, !D, n, pe.test(e)), n
			}
			var x, w, _, T, k, C, E, N, j, S, q, A, D, L, H, M, O, F = "sizzle" + -new Date,
				B = e.document,
				R = 0,
				P = 0,
				z = r(),
				W = r(),
				$ = r(),
				I = !1,
				U = function(e, t) {
					return e === t ? (I = !0, 0) : 0
				},
				X = typeof t,
				V = 1 << 31,
				Q = {}.hasOwnProperty,
				G = [],
				Y = G.pop,
				J = G.push,
				K = G.push,
				Z = G.slice,
				ee = G.indexOf || function(e) {
					for (var t = 0, n = this.length; t < n; t++)
						if (this[t] === e) return t;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ie = re.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + re + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + ne + "*\\]",
				ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
				se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				le = new RegExp("^" + ne + "*," + ne + "*"),
				ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				pe = new RegExp(ne + "*[+~]"),
				fe = new RegExp("=" + ne + "*([^\\]'\"]*)" + ne + "*\\]", "g"),
				de = new RegExp(ae),
				he = new RegExp("^" + ie + "$"),
				me = {
					ID: new RegExp("^#(" + re + ")"),
					CLASS: new RegExp("^\\.(" + re + ")"),
					TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + ae),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				ge = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ve = /^(?:input|select|textarea|button)$/i,
				be = /^h\d$/i,
				xe = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				_e = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				};
			try {
				K.apply(G = Z.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
			} catch (e) {
				K = {
					apply: G.length ? function(e, t) {
						J.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			C = n.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, w = n.support = {}, S = n.setDocument = function(e) {
				var t = e ? e.ownerDocument || e : B,
					n = t.defaultView;
				return t !== q && 9 === t.nodeType && t.documentElement ? (q = t, A = t.documentElement, D = !C(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
					S()
				}), w.attributes = o(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), w.getElementsByTagName = o(function(e) {
					return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
				}), w.getElementsByClassName = o(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), w.getById = o(function(e) {
					return A.appendChild(e).id = F, !t.getElementsByName || !t.getElementsByName(F).length
				}), w.getById ? (T.find.ID = function(e, t) {
					if (typeof t.getElementById !== X && D) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, T.filter.ID = function(e) {
					var t = e.replace(we, _e);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete T.find.ID, T.filter.ID = function(e) {
					var t = e.replace(we, _e);
					return function(e) {
						var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), T.find.TAG = w.getElementsByTagName ? function(e, t) {
					if (typeof t.getElementsByTagName !== X) return t.getElementsByTagName(e)
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, T.find.CLASS = w.getElementsByClassName && function(e, t) {
					if (typeof t.getElementsByClassName !== X && D) return t.getElementsByClassName(e)
				}, H = [], L = [], (w.qsa = ge.test(t.querySelectorAll)) && (o(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
				}), o(function(e) {
					var n = t.createElement("input");
					n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
				})), (w.matchesSelector = ge.test(M = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(e) {
					w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), H.push("!=", ae)
				}), L = L.length && new RegExp(L.join("|")), H = H.length && new RegExp(H.join("|")), O = ge.test(A.contains) || A.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, U = A.compareDocumentPosition ? function(e, n) {
					if (e === n) return I = !0, 0;
					var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
					return r ? 1 & r || !w.sortDetached && n.compareDocumentPosition(e) === r ? e === t || O(B, e) ? -1 : n === t || O(B, n) ? 1 : j ? ee.call(j, e) - ee.call(j, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, n) {
					var r, i = 0,
						o = e.parentNode,
						a = n.parentNode,
						l = [e],
						u = [n];
					if (e === n) return I = !0, 0;
					if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : j ? ee.call(j, e) - ee.call(j, n) : 0;
					if (o === a) return s(e, n);
					for (r = e; r = r.parentNode;) l.unshift(r);
					for (r = n; r = r.parentNode;) u.unshift(r);
					for (; l[i] === u[i];) i++;
					return i ? s(l[i], u[i]) : l[i] === B ? -1 : u[i] === B ? 1 : 0
				}, t) : q
			}, n.matches = function(e, t) {
				return n(e, null, null, t)
			}, n.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== q && S(e), t = t.replace(fe, "='$1']"), w.matchesSelector && D && (!H || !H.test(t)) && (!L || !L.test(t))) try {
					var r = M.call(e, t);
					if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (e) {}
				return n(t, q, null, [e]).length > 0
			}, n.contains = function(e, t) {
				return (e.ownerDocument || e) !== q && S(e), O(e, t)
			}, n.attr = function(e, n) {
				(e.ownerDocument || e) !== q && S(e);
				var r = T.attrHandle[n.toLowerCase()],
					i = r && Q.call(T.attrHandle, n.toLowerCase()) ? r(e, n, !D) : t;
				return i === t ? w.attributes || !D ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
			}, n.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, n.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (I = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), I) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return e
			}, k = n.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += k(t);
				return n
			}, T = n.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: me,
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
						return e[1] = e[1].replace(we, _e), e[3] = (e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, r = !e[5] && e[2];
						return me.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && de.test(r) && (n = c(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, _e).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = z[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, r) {
						return function(i) {
							var o = n.attr(i, e);
							return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, p, f, d, h, m = o !== a ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if (g) {
								if (o) {
									for (; m;) {
										for (p = t; p = p[m];)
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? g.firstChild : g.lastChild], a && v) {
									for (c = g[F] || (g[F] = {}), u = c[e] || [], d = u[0] === R && u[1], f = u[0] === R && u[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (f = d = 0) || h.pop();)
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [R, d, f];
											break
										}
								} else if (v && (u = (t[F] || (t[F] = {}))[e]) && u[0] === R) f = u[1];
								else
									for (;
										(p = ++d && p && p[m] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[F] || (p[F] = {}))[e] = [R, f]), p !== t)););
								return (f -= i) === r || f % r == 0 && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
						return o[F] ? o(t) : o.length > 1 ? (r = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
							for (var r, i = o(e, t), a = i.length; a--;) r = ee.call(e, i[a]), e[r] = !(n[r] = i[a])
						}) : function(e) {
							return o(e, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: i(function(e) {
						var t = [],
							n = [],
							r = E(e.replace(se, "$1"));
						return r[F] ? i(function(e, t, n, i) {
							for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: i(function(e) {
						return function(t) {
							return n(e, t).length > 0
						}
					}),
					contains: i(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
						}
					}),
					lang: i(function(e) {
						return he.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),
							function(t) {
								var n;
								do {
									if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === A
					},
					focus: function(e) {
						return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return !1 === e.disabled
					},
					disabled: function(e) {
						return !0 === e.disabled
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !T.pseudos.empty(e)
					},
					header: function(e) {
						return be.test(e.nodeName)
					},
					input: function(e) {
						return ve.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: l(function() {
						return [0]
					}),
					last: l(function(e, t) {
						return [t - 1]
					}),
					eq: l(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: l(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: l(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: l(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: l(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, T.pseudos.nth = T.pseudos.eq;
			for (x in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[x] = function(e) {
				return function(t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}(x);
			for (x in {
				submit: !0,
				reset: !0
			}) T.pseudos[x] = function(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}(x);
			u.prototype = T.filters = T.pseudos, T.setFilters = new u, E = n.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = $[e + " "];
				if (!o) {
					for (t || (t = c(e)), n = t.length; n--;) o = g(t[n]), o[F] ? r.push(o) : i.push(o);
					o = $(e, y(i, r))
				}
				return o
			}, w.sortStable = F.split("").sort(U).join("") === F, w.detectDuplicates = I, S(), w.sortDetached = o(function(e) {
				return 1 & e.compareDocumentPosition(q.createElement("div"))
			}), o(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || a("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), w.attributes && o(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || a("value", function(e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), o(function(e) {
				return null == e.getAttribute("disabled")
			}) || a(te, function(e, t, n) {
				var r;
				if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : !0 === e[t] ? t.toLowerCase() : null
			}), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
		}(e);
	var Ce = {};
	ce.Callbacks = function(e) {
		e = "string" == typeof e ? Ce[e] || r(e) : ce.extend({}, e);
		var n, i, o, a, s, l, u = [],
			c = !e.once && [],
			p = function(t) {
				for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && s < a; s++)
					if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) {
						i = !1;
						break
					}
				n = !1, u && (c ? c.length && p(c.shift()) : i ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var t = u.length;
						! function t(n) {
							ce.each(n, function(n, r) {
								var i = ce.type(r);
								"function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
							})
						}(arguments), n ? a = u.length : i && (l = t, p(i))
					}
					return this
				},
				remove: function() {
					return u && ce.each(arguments, function(e, t) {
						for (var r;
							(r = ce.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (r <= a && a--, r <= s && s--)
					}), this
				},
				has: function(e) {
					return e ? ce.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = c = i = t, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return c = t, i || f.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : p(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, ce.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ce.Callbacks("once memory"), "resolved"],
					["reject", "fail", ce.Callbacks("once memory"), "rejected"],
					["notify", "progress", ce.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ce.Deferred(function(n) {
							ce.each(t, function(t, o) {
								var a = o[0],
									s = ce.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ce.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, ce.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = oe.call(arguments),
				a = o.length,
				s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : ce.Deferred(),
				u = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ce.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
			return s || l.resolveWith(r, o), l.promise()
		}
	}), ce.support = function(t) {
		var n, r, i, o, a, s, l, u, c, p = Y.createElement("div");
		if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], !(r = p.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
		o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!Y.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
		try {
			delete p.test
		} catch (e) {
			t.deleteExpando = !1
		}
		i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).click());
		for (c in {
			submit: !0,
			change: !0,
			focusin: !0
		}) p.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || !1 === p.attributes[l].expando;
		p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
		for (c in ce(t)) break;
		return t.ownLast = "0" !== c, ce(function() {
			var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				a = Y.getElementsByTagName("body")[0];
			a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === p.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
				width: "4px"
			}).width, r = p.appendChild(Y.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== Q && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null)
		}), n = o = a = s = r = i = null, t
	}({});
	var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Ne = /([A-Z])/g;
	ce.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return !!(e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando]) && !s(e)
		},
		data: function(e, t, n) {
			return i(e, t, n)
		},
		removeData: function(e, t) {
			return o(e, t)
		},
		_data: function(e, t, n) {
			return i(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return o(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
			return !t || !0 !== t && e.getAttribute("classid") === t
		}
	}), ce.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				s = 0,
				l = this[0];
			if (e === t) {
				if (this.length && (o = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
					for (r = l.attributes; s < r.length; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)), a(l, i, o[i]));
					ce._data(l, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				ce.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ce.data(this, e, n)
			}) : l ? a(l, e, ce.data(l, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				ce.removeData(this, e)
			})
		}
	}), ce.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = ce._data(e, t), n && (!r || ce.isArray(n) ? r = ce._data(e, t, ce.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ce.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = ce._queueHooks(e, t),
				a = function() {
					ce.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ce._data(e, n) || ce._data(e, n, {
				empty: ce.Callbacks("once memory").add(function() {
					ce._removeData(e, t + "queue"), ce._removeData(e, n)
				})
			})
		}
	}), ce.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ce.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = ce.queue(this, e, n);
				ce._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ce.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = ce.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--i || o.resolveWith(a, [a])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = ce._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var je, Se, qe = /[\t\r\n\f]/g,
		Ae = /\r/g,
		De = /^(?:input|select|textarea|button|object)$/i,
		Le = /^(?:a|area)$/i,
		He = /^(?:checked|selected)$/i,
		Me = ce.support.getSetAttribute,
		Oe = ce.support.input;
	ce.fn.extend({
		attr: function(e, t) {
			return ce.access(this, ce.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ce.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ce.access(this, ce.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ce.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (e) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (ce.isFunction(e)) return this.each(function(t) {
				ce(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(fe) || []; a < s; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qe, " ") : " ")) {
						for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						n.className = ce.trim(r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (ce.isFunction(e)) return this.each(function(t) {
				ce(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(fe) || []; a < s; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qe, " ") : "")) {
						for (o = 0; i = t[o++];)
							for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						n.className = e ? ce.trim(r) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function(n) {
				ce(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n)
					for (var t, r = 0, i = ce(this), o = e.match(fe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else n !== Q && "boolean" !== n || (this.className && ce._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ce._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(qe, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = ce.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, ce(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function(e) {
						return null == e ? "" : e + ""
					})), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return (r = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
			}
		}
	}), ce.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ce.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)
						if (n = r[l], (n.selected || l === i) && (ce.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ce.nodeName(n.parentNode, "optgroup"))) {
							if (t = ce(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = ce.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ce.inArray(ce(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var i, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Q ? ce.prop(e, n, r) : (1 === a && ce.isXMLDoc(e) || (n = n.toLowerCase(), i = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Se : je)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ce.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : void ce.removeAttr(e, n))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(fe);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Oe && Me || !He.test(n) ? e[r] = !1 : e[ce.camelCase("default-" + n)] = e[r] = !1 : ce.attr(e, n, ""), e.removeAttribute(Me ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ce.isXMLDoc(e), a && (n = ce.propFix[n] || n, o = ce.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ce.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : De.test(e.nodeName) || Le.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), Se = {
		set: function(e, t, n) {
			return !1 === t ? ce.removeAttr(e, n) : Oe && Me || !He.test(n) ? e.setAttribute(!Me && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = ce.expr.attrHandle[n] || ce.find.attr;
		ce.expr.attrHandle[n] = Oe && Me || !He.test(n) ? function(e, n, i) {
			var o = ce.expr.attrHandle[n],
				a = i ? t : (ce.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return ce.expr.attrHandle[n] = o, a
		} : function(e, n, r) {
			return r ? t : e[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Oe && Me || (ce.attrHooks.value = {
		set: function(e, t, n) {
			if (!ce.nodeName(e, "input")) return je && je.set(e, t, n);
			e.defaultValue = t
		}
	}), Me || (je = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, ce.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: je.set
	}, ce.attrHooks.contenteditable = {
		set: function(e, t, n) {
			je.set(e, "" !== t && t, n)
		}
	}, ce.each(["width", "height"], function(e, t) {
		ce.attrHooks[t] = {
			set: function(e, n) {
				if ("" === n) return e.setAttribute(t, "auto"), n
			}
		}
	})), ce.support.hrefNormalized || ce.each(["href", "src"], function(e, t) {
		ce.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ce.support.style || (ce.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), ce.support.optSelected || (ce.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ce.propFix[this.toLowerCase()] = this
	}), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
		ce.valHooks[this] = {
			set: function(e, t) {
				if (ce.isArray(t)) return e.checked = ce.inArray(ce(e).val(), t) >= 0
			}
		}, ce.support.checkOn || (ce.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Fe = /^(?:input|select|textarea)$/i,
		Be = /^key/,
		Re = /^(?:mouse|contextmenu)|click/,
		Pe = /^(?:focusinfocus|focusoutblur)$/,
		ze = /^([^.]*)(?:\.(.+)|)$/;
	ce.event = {
		global: {},
		add: function(e, n, r, i, o) {
			var a, s, l, u, c, p, f, d, h, m, g, y = ce._data(e);
			if (y) {
				for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ce.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function(e) {
					return typeof ce === Q || e && ce.event.triggered === e.type ? t : ce.event.dispatch.apply(p.elem, arguments)
				}, p.elem = e), n = (n || "").match(fe) || [""], l = n.length; l--;) a = ze.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (c = ce.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ce.event.special[h] || {}, f = ce.extend({
					type: h,
					origType: g,
					data: i,
					handler: r,
					guid: r.guid,
					selector: o,
					needsContext: o && ce.expr.match.needsContext.test(o),
					namespace: m.join(".")
				}, u), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, m, p) || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ce.event.global[h] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, m, g = ce.hasData(e) && ce._data(e);
			if (g && (c = g.events)) {
				for (t = (t || "").match(fe) || [""], u = t.length; u--;)
					if (s = ze.exec(t[u]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
						for (p = ce.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						l && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || ce.removeEvent(e, d, g.handle), delete c[d])
					} else
						for (d in c) ce.event.remove(e, d + t[u], n, r, !0);
				ce.isEmptyObject(c) && (delete g.handle, ce._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var a, s, l, u, c, p, f, d = [i || Y],
				h = le.call(n, "type") ? n.type : n,
				m = le.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = p = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ce.makeArray(r, [n]), c = ce.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, r))) {
				if (!o && !c.noBubble && !ce.isWindow(i)) {
					for (u = c.delegateType || h, Pe.test(u + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
					p === (i.ownerDocument || Y) && d.push(p.defaultView || p.parentWindow || e)
				}
				for (f = 0;
					(l = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? u : c.bindType || h, a = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), a && a.apply(l, r), (a = s && l[s]) && ce.acceptData(l) && a.apply && !1 === a.apply(l, r) && n.preventDefault();
				if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), r)) && ce.acceptData(i) && s && i[h] && !ce.isWindow(i)) {
					p = i[s], p && (i[s] = null), ce.event.triggered = h;
					try {
						i[h]()
					} catch (e) {}
					ce.event.triggered = t, p && (i[s] = p)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = ce.event.fix(e);
			var n, r, i, o, a, s = [],
				l = oe.call(arguments),
				u = (ce._data(this, "events") || {})[e.type] || [],
				c = ce.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (s = ce.event.handlers.call(this, e, u), n = 0;
					(o = s[n++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, a = 0;
						(i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (r = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
						for (o = [], a = 0; a < l; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ce(r, this).index(u) >= 0 : ce.find(r, this, null, [u]).length), o[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					}
			return l < n.length && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[ce.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Re.test(i) ? this.mouseHooks : Be.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
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
				var r, i, o, a = n.button,
					s = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== c() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === c() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (ce.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
				},
				_default: function(e) {
					return ce.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = ce.extend(new ce.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? ce.event.trigger(i, null, t) : ce.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ce.removeEvent = Y.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === Q && (e[r] = null), e.detachEvent(r, n))
	}, ce.Event = function(e, t) {
		if (!(this instanceof ce.Event)) return new ce.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0
	}, ce.Event.prototype = {
		isDefaultPrevented: u,
		isPropagationStopped: u,
		isImmediatePropagationStopped: u,
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
	}, ce.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		ce.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || ce.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ce.support.submitBubbles || (ce.event.special.submit = {
		setup: function() {
			if (ce.nodeName(this, "form")) return !1;
			ce.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : t;
				r && !ce._data(r, "submitBubbles") && (ce.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ce._data(r, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			if (ce.nodeName(this, "form")) return !1;
			ce.event.remove(this, "._submit")
		}
	}), ce.support.changeBubbles || (ce.event.special.change = {
		setup: function() {
			if (Fe.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ce.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ce.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
			})), !1;
			ce.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Fe.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
				}), ce._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return ce.event.remove(this, "._change"), !Fe.test(this.nodeName)
		}
	}), ce.support.focusinBubbles || ce.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				ce.event.simulate(t, e.target, ce.event.fix(e), !0)
			};
		ce.event.special[t] = {
			setup: function() {
				0 == n++ && Y.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 == --n && Y.removeEventListener(e, r, !0)
			}
		}
	}), ce.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = u;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return ce().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = ce.guid++)), this.each(function() {
				ce.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = u), this.each(function() {
				ce.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ce.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return ce.event.trigger(e, t, n, !0)
		}
	});
	var We = /^.[^:#\[\.,]*$/,
		$e = /^(?:parents|prev(?:Until|All))/,
		Ie = ce.expr.match.needsContext,
		Ue = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ce.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
				for (t = 0; t < i; t++)
					if (ce.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) ce.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = ce(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++)
					if (ce.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(f(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(f(this, e || [], !1))
		},
		is: function(e) {
			return !!f(this, "string" == typeof e && Ie.test(e) ? ce(e) : e || [], !1).length
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = Ie.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? ce.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
				r = ce.merge(this.get(), n);
			return this.pushStack(ce.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ce.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ce.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ce.dir(e, "parentNode", n)
		},
		next: function(e) {
			return p(e, "nextSibling")
		},
		prev: function(e) {
			return p(e, "previousSibling")
		},
		nextAll: function(e) {
			return ce.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ce.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ce.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ce.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ce.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ce.sibling(e.firstChild)
		},
		contents: function(e) {
			return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
		}
	}, function(e, t) {
		ce.fn[e] = function(n, r) {
			var i = ce.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ce.filter(r, i)), this.length > 1 && (Ue[e] || (i = ce.unique(i)), $e.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), ce.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ce(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ve = / jQuery\d+="(?:null|\d+)"/g,
		Qe = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
		Ge = /^\s+/,
		Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Je = /<([\w:]+)/,
		Ke = /<tbody/i,
		Ze = /<|&#?\w+;/,
		et = /<(?:script|style|link)/i,
		tt = /^(?:checkbox|radio)$/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rt = /^$|\/(?:java|ecma)script/i,
		it = /^true\/(.*)/,
		ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		at = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		st = d(Y),
		lt = st.appendChild(Y.createElement("div"));
	at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ce.fn.extend({
		text: function(e) {
			return ce.access(this, function(e) {
				return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					h(this, e).appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
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
			for (var n, r = e ? ce.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ce.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return ce.clone(this, e, t)
			})
		},
		html: function(e) {
			return ce.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
				if ("string" == typeof e && !et.test(e) && (ce.support.htmlSerialize || !Qe.test(e)) && (ce.support.leadingWhitespace || !Ge.test(e)) && !at[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ye, "<$1></$2>");
					try {
						for (; r < i; r++) n = this[r] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
						n = 0
					} catch (e) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = ce.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), ce(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = re.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				d = e[0],
				h = ce.isFunction(d);
			if (h || !(c <= 1 || "string" != typeof d || ce.support.checkClone) && nt.test(d)) return this.each(function(r) {
				var i = p.eq(r);
				h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (l = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = ce.map(x(l, "script"), m), o = a.length; u < c; u++) i = l, u !== f && (i = ce.clone(i, !0, !0), o && ce.merge(a, x(i, "script"))), t.call(this[u], i, u);
				if (o)
					for (s = a[a.length - 1].ownerDocument, ce.map(a, g), u = 0; u < o; u++) i = a[u], rt.test(i.type || "") && !ce._data(i, "globalEval") && ce.contains(s, i) && (i.src ? ce._evalUrl(i.src) : ce.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ot, "")));
				l = r = null
			}
			return this
		}
	}), ce.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ce.fn[e] = function(e) {
			for (var n, r = 0, i = [], o = ce(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ce(o[r])[t](n), ie.apply(i, n.get());
			return this.pushStack(i)
		}
	}), ce.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, l = ce.contains(e.ownerDocument, e);
			if (ce.support.html5Clone || ce.isXMLDoc(e) || !Qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
				for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
			if (t)
				if (n)
					for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
				else v(e, o);
			return r = x(o, "script"), r.length > 0 && y(r, !l && x(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, l, u, c, p = e.length, f = d(t), h = [], m = 0; m < p; m++)
				if ((o = e[m]) || 0 === o)
					if ("object" === ce.type(o)) ce.merge(h, o.nodeType ? [o] : o);
					else if (Ze.test(o)) {
				for (s = s || f.appendChild(t.createElement("div")), l = (Je.exec(o) || ["", ""])[1].toLowerCase(), c = at[l] || at._default, s.innerHTML = c[1] + o.replace(Ye, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
				if (!ce.support.leadingWhitespace && Ge.test(o) && h.push(t.createTextNode(Ge.exec(o)[0])), !ce.support.tbody)
					for (o = "table" !== l || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ce.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (ce.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = f.lastChild
			} else h.push(t.createTextNode(o));
			for (s && f.removeChild(s), ce.support.appendChecked || ce.grep(x(h, "input"), w), m = 0; o = h[m++];)
				if ((!r || -1 === ce.inArray(o, r)) && (a = ce.contains(o.ownerDocument, o), s = x(f.appendChild(o), "script"), a && y(s), n))
					for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
			return s = null, f
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0, s = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = e[a]); a++)
				if ((t || ce.acceptData(n)) && (i = n[s], o = i && l[i])) {
					if (o.events)
						for (r in o.events) c[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, o.handle);
					l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Q ? n.removeAttribute(s) : n[s] = null, te.push(i))
				}
		},
		_evalUrl: function(e) {
			return ce.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0
			})
		}
	}), ce.fn.extend({
		wrapAll: function(e) {
			if (ce.isFunction(e)) return this.each(function(t) {
				ce(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return ce.isFunction(e) ? this.each(function(t) {
				ce(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = ce(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ce.isFunction(e);
			return this.each(function(n) {
				ce(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var ut, ct, pt, ft = /alpha\([^)]*\)/i,
		dt = /opacity\s*=\s*([^)]*)/,
		ht = /^(top|right|bottom|left)$/,
		mt = /^(none|table(?!-c[ea]).+)/,
		gt = /^margin/,
		yt = new RegExp("^(" + pe + ")(.*)$", "i"),
		vt = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
		bt = new RegExp("^([+-])=(" + pe + ")", "i"),
		xt = {
			BODY: "block"
		},
		wt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		_t = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Tt = ["Top", "Right", "Bottom", "Left"],
		kt = ["Webkit", "O", "Moz", "ms"];
	ce.fn.extend({
		css: function(e, n) {
			return ce.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (ce.isArray(n)) {
					for (o = ct(e), i = n.length; s < i; s++) a[n[s]] = ce.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? ce.style(e, n, r) : ce.css(e, n)
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
				T(this) ? ce(this).show() : ce(this).hide()
			})
		}
	}), ce.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = pt(e, "opacity");
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
			float: ce.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = ce.camelCase(n),
					u = e.style;
				if (n = ce.cssProps[l] || (ce.cssProps[l] = _(u, l)), s = ce.cssHooks[n] || ce.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if (!(a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ce.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || ce.cssNumber[l] || (r += "px"), ce.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch (e) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, l = ce.camelCase(n);
			return n = ce.cssProps[l] || (ce.cssProps[l] = _(e.style, l)), s = ce.cssHooks[n] || ce.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pt(e, n, i)), "normal" === a && n in _t && (a = _t[n]), "" === r || r ? (o = parseFloat(a), !0 === r || ce.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (ct = function(t) {
		return e.getComputedStyle(t, null)
	}, pt = function(e, n, r) {
		var i, o, a, s = r || ct(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || ce.contains(e.ownerDocument, e) || (l = ce.style(e, n)), vt.test(l) && gt.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : Y.documentElement.currentStyle && (ct = function(e) {
		return e.currentStyle
	}, pt = function(e, n, r) {
		var i, o, a, s = r || ct(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), vt.test(l) && !ht.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	}), ce.each(["height", "width"], function(e, t) {
		ce.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return 0 === e.offsetWidth && mt.test(ce.css(e, "display")) ? ce.swap(e, wt, function() {
					return N(e, t, r)
				}) : N(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && ct(e);
				return C(e, n, r ? E(e, t, r, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ce.support.opacity || (ce.cssHooks.opacity = {
		get: function(e, t) {
			return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i)
		}
	}), ce(function() {
		ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
			get: function(e, t) {
				if (t) return ce.swap(e, {
					display: "inline-block"
				}, pt, [e, "marginRight"])
			}
		}), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(e, t) {
			ce.cssHooks[t] = {
				get: function(e, n) {
					if (n) return n = pt(e, t), vt.test(n) ? ce(e).position()[t] + "px" : n
				}
			}
		})
	}), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
	}, ce.expr.filters.visible = function(e) {
		return !ce.expr.filters.hidden(e)
	}), ce.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ce.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, gt.test(e) || (ce.cssHooks[e + t].set = C)
	});
	var Ct = /%20/g,
		Et = /\[\]$/,
		Nt = /\r?\n/g,
		jt = /^(?:submit|button|image|reset|file)$/i,
		St = /^(?:input|select|textarea|keygen)/i;
	ce.fn.extend({
		serialize: function() {
			return ce.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ce.prop(this, "elements");
				return e ? ce.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ce(this).is(":disabled") && St.test(this.nodeName) && !jt.test(e) && (this.checked || !tt.test(e))
			}).map(function(e, t) {
				var n = ce(this).val();
				return null == n ? null : ce.isArray(n) ? ce.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Nt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Nt, "\r\n")
				}
			}).get()
		}
	}), ce.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = ce.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (r in e) q(r, e[r], n, o);
		return i.join("&").replace(Ct, "+")
	}, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ce.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ce.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var qt, At, Dt = ce.now(),
		Lt = /\?/,
		Ht = /#.*$/,
		Mt = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Bt = /^(?:GET|HEAD)$/,
		Rt = /^\/\//,
		Pt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		zt = ce.fn.load,
		Wt = {},
		$t = {},
		It = "*/".concat("*");
	try {
		At = G.href
	} catch (e) {
		At = Y.createElement("a"), At.href = "", At = At.href
	}
	qt = Pt.exec(At.toLowerCase()) || [], ce.fn.load = function(e, n, r) {
		if ("string" != typeof e && zt) return zt.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ce.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ce.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ce.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: At,
			type: "GET",
			isLocal: Ft.test(qt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": It,
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
				"text json": ce.parseJSON,
				"text xml": ce.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? L(L(e, ce.ajaxSettings), t) : L(ce.ajaxSettings, e)
		},
		ajaxPrefilter: A(Wt),
		ajaxTransport: A($t),
		ajax: function(n, r) {
			function i(n, r, i, o) {
				var a, f, b, x, _, k = r;
				2 !== w && (w = 2, u && clearTimeout(u), p = t, l = o || "", T.readyState = n > 0 ? 4 : 0, a = n >= 200 && n < 300 || 304 === n, i && (x = H(d, T, i)), x = M(d, x, T, a), a ? (d.ifModified && (_ = T.getResponseHeader("Last-Modified"), _ && (ce.lastModified[s] = _), (_ = T.getResponseHeader("etag")) && (ce.etag[s] = _)), 204 === n || "HEAD" === d.type ? k = "nocontent" : 304 === n ? k = "notmodified" : (k = x.state, f = x.data, b = x.error, a = !b)) : (b = k, !n && k || (k = "error", n < 0 && (n = 0))), T.status = n, T.statusText = (r || k) + "", a ? (e.qyerUtil && "function" == typeof e.qyerUtil.ajaxFillter && e.qyerUtil.ajaxFillter(f, k, T), g.resolveWith(h, [f, k, T])) : g.rejectWith(h, [T, k, b]), T.statusCode(v), v = t, c && m.trigger(a ? "ajaxSuccess" : "ajaxError", [T, d, a ? f : b]), y.fireWith(h, [T, k]), c && (m.trigger("ajaxComplete", [T, d]), --ce.active || ce.event.trigger("ajaxStop")))
			}
			"object" == typeof n && (r = n, n = t), r = r || {};
			var o, a, s, l, u, c, p, f, d = ce.ajaxSetup({}, r),
				h = d.context || d,
				m = d.context && (h.nodeType || h.jquery) ? ce(h) : ce.event,
				g = ce.Deferred(),
				y = ce.Callbacks("once memory"),
				v = d.statusCode || {},
				b = {},
				x = {},
				w = 0,
				_ = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === w) {
							if (!f)
								for (f = {}; t = Ot.exec(l);) f[t[1].toLowerCase()] = t[2];
							t = f[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === w ? l : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return w || (e = x[n] = x[n] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return w || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (w < 2)
								for (t in e) v[t] = [v[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function(e) {
						var t = e || _;
						return p && p.abort(t), i(0, t), this
					}
				};
			if (g.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, d.url = ((n || d.url || At) + "").replace(Ht, "").replace(Rt, qt[1] + "//"), d.type = r.method || r.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (o = Pt.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === qt[1] && o[2] === qt[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), D(Wt, d, r, T), 2 === w) return T;
			c = d.global, c && 0 == ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Lt.test(s) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Mt.test(s) ? s.replace(Mt, "$1_=" + Dt++) : s + (Lt.test(s) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (ce.lastModified[s] && T.setRequestHeader("If-Modified-Since", ce.lastModified[s]), ce.etag[s] && T.setRequestHeader("If-None-Match", ce.etag[s])), (d.data && d.hasContent && !1 !== d.contentType || r.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
			for (a in d.headers) T.setRequestHeader(a, d.headers[a]);
			if (d.beforeSend && (!1 === d.beforeSend.call(h, T, d) || 2 === w)) return T.abort();
			_ = "abort";
			for (a in {
				success: 1,
				error: 1,
				complete: 1
			}) T[a](d[a]);
			if (p = D($t, d, r, T)) {
				T.readyState = 1, c && m.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (u = setTimeout(function() {
					T.abort("timeout")
				}, d.timeout));
				try {
					w = 1, p.send(b, i)
				} catch (e) {
					if (!(w < 2)) throw e;
					i(-1, e)
				}
			} else i(-1, "No Transport");
			return T
		},
		getJSON: function(e, t, n) {
			return ce.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return ce.get(e, t, n, "script")
		}
	}), ce.each(["get", "post"], function(e, n) {
		ce[n] = function(e, r, i, o) {
			return ce.isFunction(r) && (o = o || i, i = r, r = t), ce.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), ce.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ce.globalEval(e), e
			}
		}
	}), ce.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ce.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = Y.head || ce("head")[0] || Y.documentElement;
			return {
				send: function(t, i) {
					n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Ut = [],
		Xt = /(=)\?(?=&|$)|\?\?/;
	ce.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Ut.pop() || ce.expando + "_" + Dt++;
			return this[e] = !0, e
		}
	}), ce.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, l = !1 !== n.jsonp && (Xt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(n.data) && "data");
		if (l || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xt, "$1" + o) : !1 !== n.jsonp && (n.url += (Lt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || ce.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Ut.push(o)), s && ce.isFunction(a) && a(s[0]), s = a = t
		}), "script"
	});
	var Vt, Qt, Gt = 0,
		Yt = e.ActiveXObject && function() {
			var e;
			for (e in Vt) Vt[e](t, !0)
		};
	ce.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && O() || F()
	} : O, Qt = ce.ajaxSettings.xhr(), ce.support.cors = !!Qt && "withCredentials" in Qt, (Qt = ce.support.ajax = !!Qt) && ce.ajaxTransport(function(n) {
		if (!n.crossDomain || ce.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) l.setRequestHeader(s, i[s])
					} catch (e) {}
					l.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState))
								if (r = t, a && (l.onreadystatechange = ce.noop, Yt && delete Vt[a]), i) 4 !== l.readyState && l.abort();
								else {
									p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										c = l.statusText
									} catch (e) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
						} catch (e) {
							i || o(-1, e)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gt, Yt && (Vt || (Vt = {}, ce(e).unload(Yt)), Vt[a] = r), l.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Jt, Kt, Zt = /^(?:toggle|show|hide)$/,
		en = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
		tn = /queueHooks$/,
		nn = [W],
		rn = {
			"*": [
				function(e, t) {
					var n = this.createTween(e, t),
						r = n.cur(),
						i = en.exec(t),
						o = i && i[3] || (ce.cssNumber[e] ? "" : "px"),
						a = (ce.cssNumber[e] || "px" !== o && +r) && en.exec(ce.css(n.elem, e)),
						s = 1,
						l = 20;
					if (a && a[3] !== o) {
						o = o || a[3], i = i || [], a = +r || 1;
						do {
							s = s || ".5", a /= s, ce.style(n.elem, e, a + o)
						} while (s !== (s = n.cur() / r) && 1 !== s && --l)
					}
					return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
				}
			]
		};
	ce.Animation = ce.extend(P, {
		tweener: function(e, t) {
			ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], rn[n] = rn[n] || [], rn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? nn.unshift(e) : nn.push(e)
		}
	}), ce.Tween = $, $.prototype = {
		constructor: $,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = $.propHooks[this.prop];
			return e && e.get ? e.get(this) : $.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = $.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
		}
	}, $.prototype.init.prototype = $.prototype, $.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ce.each(["toggle", "show", "hide"], function(e, t) {
		var n = ce.fn[t];
		ce.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
		}
	}), ce.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(T).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = ce.isEmptyObject(e),
				o = ce.speed(t, n, r),
				a = function() {
					var t = P(this, ce.extend({}, e), o);
					(i || ce._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = ce.timers,
					a = ce._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && tn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				!t && r || ce.dequeue(this, e)
			})
		},
		finish: function(e) {
			return !1 !== e && (e = e || "fx"), this.each(function() {
				var t, n = ce._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = ce.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, ce.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), ce.each({
		slideDown: I("show"),
		slideUp: I("hide"),
		slideToggle: I("toggle"),
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
		ce.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), ce.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ce.extend({}, e) : {
			complete: n || !n && t || ce.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ce.isFunction(t) && t
		};
		return r.duration = ce.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ce.fx.speeds ? ce.fx.speeds[r.duration] : ce.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			ce.isFunction(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
		}, r
	}, ce.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ce.timers = [], ce.fx = $.prototype.init, ce.fx.tick = function() {
		var e, n = ce.timers,
			r = 0;
		for (Jt = ce.now(); r < n.length; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
		n.length || ce.fx.stop(), Jt = t
	}, ce.fx.timer = function(e) {
		e() && ce.timers.push(e) && ce.fx.start()
	}, ce.fx.interval = 13, ce.fx.start = function() {
		Kt || (Kt = setInterval(ce.fx.tick, ce.fx.interval))
	}, ce.fx.stop = function() {
		clearInterval(Kt), Kt = null
	}, ce.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(e) {
		return ce.grep(ce.timers, function(t) {
			return e === t.elem
		}).length
	}), ce.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			ce.offset.setOffset(this, e, t)
		});
		var n, r, i = {
				top: 0,
				left: 0
			},
			o = this[0],
			a = o && o.ownerDocument;
		if (a) return n = a.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== Q && (i = o.getBoundingClientRect()), r = U(a), {
			top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : i
	}, ce.offset = {
		setOffset: function(e, t, n) {
			var r = ce.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i, o, a = ce(e),
				s = a.offset(),
				l = ce.css(e, "top"),
				u = ce.css(e, "left"),
				c = ("absolute" === r || "fixed" === r) && ce.inArray("auto", [l, u]) > -1,
				p = {},
				f = {};
			c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : a.css(p)
		}
	}, ce.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === ce.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ce.css(r, "marginTop", !0),
					left: t.left - n.left - ce.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || J; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
				return e || J
			})
		}
	}), ce.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		ce.fn[e] = function(i) {
			return ce.access(this, function(e, i, o) {
				var a = U(e);
				if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i];
				a ? a.scrollTo(r ? ce(a).scrollLeft() : o, r ? o : ce(a).scrollTop()) : e[i] = o
			}, e, i, arguments.length, null)
		}
	}), ce.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		ce.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			ce.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (!0 === i || !0 === o ? "margin" : "border");
				return ce.access(this, function(n, r, i) {
					var o;
					return ce.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ce.css(n, r, s) : ce.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), ce.fn.size = function() {
		return this.length
	}, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (e.jQuery = e.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ce
	}))
}(window);
var requirejs, require, define;
! function(ca) {
	function G(e) {
		return "[object Function]" === M.call(e)
	}

	function H(e) {
		return "[object Array]" === M.call(e)
	}

	function v(e, t) {
		if (e) {
			var n;
			for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
		}
	}

	function U(e, t) {
		if (e) {
			var n;
			for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
		}
	}

	function s(e, t) {
		return ga.call(e, t)
	}

	function j(e, t) {
		return s(e, t) && e[t]
	}

	function B(e, t) {
		for (var n in e)
			if (s(e, n) && t(e[n], n)) break
	}

	function V(e, t, n, r) {
		return t && B(t, function(t, i) {
			!n && s(e, i) || (!r || "object" != typeof t || !t || H(t) || G(t) || t instanceof RegExp ? e[i] = t : (e[i] || (e[i] = {}), V(e[i], t, n, r)))
		}), e
	}

	function t(e, t) {
		return function() {
			return t.apply(e, arguments)
		}
	}

	function da(e) {
		throw e
	}

	function ea(e) {
		if (!e) return e;
		var t = ca;
		return v(e.split("."), function(e) {
			t = t[e]
		}), t
	}

	function C(e, t, n, r) {
		return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = r, n && (t.originalError = n), t
	}

	function ha(e) {
		function n(e, t, n) {
			var r, i, o, a, s, l, u, c = t && t.split("/");
			i = c;
			var p = E.map,
				f = p && p["*"];
			if (e && "." === e.charAt(0))
				if (t) {
					for (i = c.slice(0, c.length - 1), e = e.split("/"), t = e.length - 1, E.nodeIdCompat && R.test(e[t]) && (e[t] = e[t].replace(R, "")), i = e = i.concat(e), a = i.length, t = 0; t < a; t++)
						if ("." === (o = i[t])) i.splice(t, 1), t -= 1;
						else if (".." === o) {
						if (1 === t && (".." === i[2] || ".." === i[0])) break;
						0 < t && (i.splice(t - 1, 2), t -= 2)
					}
					e = e.join("/")
				} else 0 === e.indexOf("./") && (e = e.substring(2));
			if (n && p && (c || f)) {
				i = e.split("/"), t = i.length;
				e: for (; 0 < t; t -= 1) {
					if (a = i.slice(0, t).join("/"), c)
						for (o = c.length; 0 < o; o -= 1)
							if ((n = j(p, c.slice(0, o).join("/"))) && (n = j(n, a))) {
								r = n, s = t;
								break e
							}!l && f && j(f, a) && (l = j(f, a), u = t)
				}!r && l && (r = l, s = u), r && (i.splice(0, s, r), e = i.join("/"))
			}
			return (r = j(E.pkgs, e)) ? r : e
		}

		function r(e) {
			z && v(document.getElementsByTagName("script"), function(t) {
				if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === _.contextName) return t.parentNode.removeChild(t), !0
			})
		}

		function i(e) {
			var t = j(E.paths, e);
			if (t && H(t) && 1 < t.length) return t.shift(), _.require.undef(e), _.require([e]), !0
		}

		function o(e) {
			var t, n = e ? e.indexOf("!") : -1;
			return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
		}

		function a(e, t, r, i) {
			var a, s, l = null,
				u = t ? t.name : null,
				c = e,
				p = !0,
				f = "";
			return e || (p = !1, e = "_@r" + (W += 1)),
				e = o(e), l = e[0], e = e[1], l && (l = n(l, u, i), s = j(L, l)), e && (l ? f = s && s.normalize ? s.normalize(e, function(e) {
					return n(e, u, i)
				}) : n(e, u, i) : (f = n(e, u, i), e = o(f), l = e[0], f = e[1], r = !0, a = _.nameToUrl(f))), r = !l || s || r ? "" : "_unnormalized" + ($ += 1), {
					prefix: l,
					name: f,
					parentMap: t,
					unnormalized: !!r,
					url: a,
					originalName: c,
					isDefine: p,
					id: (l ? l + "!" + f : f) + r
				}
		}

		function l(e) {
			var t = e.id,
				n = j(N, t);
			return n || (n = N[t] = new _.Module(e)), n
		}

		function u(e, t, n) {
			var r = e.id,
				i = j(N, r);
			!s(L, r) || i && !i.defineEmitComplete ? (i = l(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(L[r])
		}

		function c(e, t) {
			var n = e.requireModules,
				r = !1;
			t ? t(e) : (v(n, function(t) {
				(t = j(N, t)) && (t.error = e, t.events.error && (r = !0, t.emit("error", e)))
			}), r || h.onError(e))
		}

		function p() {
			S.length && (ia.apply(D, [D.length, 0].concat(S)), S = [])
		}

		function f(e) {
			delete N[e], delete q[e]
		}

		function d(e, t, n) {
			var r = e.map.id;
			e.error ? e.emit("error", e.error) : (t[r] = !0, v(e.depMaps, function(r, i) {
				var o = r.id,
					a = j(N, o);
				a && !e.depMatched[i] && !n[o] && (j(t, o) ? (e.defineDep(i, L[o]), e.check()) : d(a, t, n))
			}), n[r] = !0)
		}

		function m() {
			var e, t, n = (e = 1e3 * E.waitSeconds) && _.startTime + e < (new Date).getTime(),
				o = [],
				a = [],
				s = !1,
				l = !0;
			if (!x) {
				if (x = !0, B(q, function(e) {
					var u = e.map,
						c = u.id;
					if (e.enabled && (u.isDefine || a.push(e), !e.error))
						if (!e.inited && n) i(c) ? s = t = !0 : (o.push(c), r(c));
						else if (!e.inited && e.fetched && u.isDefine && (s = !0, !u.prefix)) return l = !1
				}), n && o.length) return e = C("timeout", "Load timeout for modules: " + o, null, o), e.contextName = _.contextName, c(e);
				l && v(a, function(e) {
					d(e, {}, {})
				}), n && !t || !s || !z && !fa || k || (k = setTimeout(function() {
					k = 0, m()
				}, 50)), x = !1
			}
		}

		function g(e) {
			s(L, e[0]) || l(a(e[0], null, !0)).init(e[1], e[2])
		}

		function y(e) {
			var e = e.currentTarget || e.srcElement,
				t = _.onScriptLoad;
			return e.detachEvent && !Z ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = _.onScriptError, (!e.detachEvent || Z) && e.removeEventListener("error", t, !1), {
				node: e,
				id: e && e.getAttribute("data-requiremodule")
			}
		}

		function b() {
			var e;
			for (p(); D.length;) {
				if (e = D.shift(), null === e[0]) return c(C("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
				g(e)
			}
		}
		var x, w, _, T, k, E = {
				waitSeconds: 7,
				baseUrl: "./",
				paths: {},
				bundles: {},
				pkgs: {},
				shim: {},
				config: {}
			},
			N = {},
			q = {},
			A = {},
			D = [],
			L = {},
			M = {},
			F = {},
			W = 1,
			$ = 1;
		return T = {
			require: function(e) {
				return e.require ? e.require : e.require = _.makeRequire(e.map)
			},
			exports: function(e) {
				if (e.usingExports = !0, e.map.isDefine) return e.exports ? L[e.map.id] = e.exports : e.exports = L[e.map.id] = {}
			},
			module: function(e) {
				return e.module ? e.module : e.module = {
					id: e.map.id,
					uri: e.map.url,
					config: function() {
						return j(E.config, e.map.id) || {}
					},
					exports: e.exports || (e.exports = {})
				}
			}
		}, w = function(e) {
			this.events = j(A, e.id) || {}, this.map = e, this.shim = j(E.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
		}, w.prototype = {
			init: function(e, n, r, i) {
				i = i || {}, this.inited || (this.factory = n, r ? this.on("error", r) : this.events.error && (r = t(this, function(e) {
					this.emit("error", e)
				})), this.depMaps = e && e.slice(0), this.errback = r, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
			},
			defineDep: function(e, t) {
				this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
			},
			fetch: function() {
				if (!this.fetched) {
					this.fetched = !0, _.startTime = (new Date).getTime();
					var e = this.map;
					if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
					_.makeRequire(this.map, {
						enableBuildCallback: !0
					})(this.shim.deps || [], t(this, function() {
						return e.prefix ? this.callPlugin() : this.load()
					}))
				}
			},
			load: function() {
				var e = this.map.url;
				M[e] || (M[e] = !0, _.load(this.map.id, e))
			},
			check: function() {
				if (this.enabled && !this.enabling) {
					var e, t, n = this.map.id;
					t = this.depExports;
					var r = this.exports,
						i = this.factory;
					if (this.inited) {
						if (this.error) this.emit("error", this.error);
						else if (!this.defining) {
							if (this.defining = !0, 1 > this.depCount && !this.defined) {
								if (G(i)) {
									if (this.events.error && this.map.isDefine || h.onError !== da) try {
										r = _.execCb(n, i, t, r)
									} catch (t) {
										e = t
									} else r = _.execCb(n, i, t, r);
									if (this.map.isDefine && void 0 === r && ((t = this.module) ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
								} else r = i;
								this.exports = r, this.map.isDefine && !this.ignore && (L[n] = r, h.onResourceLoad) && h.onResourceLoad(_, this.map, this.depMaps), f(n), this.defined = !0
							}
							this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
						}
					} else this.fetch()
				}
			},
			callPlugin: function() {
				var e = this.map,
					r = e.id,
					i = a(e.prefix);
				this.depMaps.push(i), u(i, "defined", t(this, function(i) {
					var o, p;
					p = j(F, this.map.id);
					var d = this.map.name,
						m = this.map.parentMap ? this.map.parentMap.name : null,
						g = _.makeRequire(e.parentMap, {
							enableBuildCallback: !0
						});
					this.map.unnormalized ? (i.normalize && (d = i.normalize(d, function(e) {
						return n(e, m, !0)
					}) || ""), i = a(e.prefix + "!" + d, this.map.parentMap), u(i, "defined", t(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0,
							ignore: !0
						})
					})), (p = j(N, i.id)) && (this.depMaps.push(i), this.events.error && p.on("error", t(this, function(e) {
						this.emit("error", e)
					})), p.enable())) : p ? (this.map.url = _.nameToUrl(p), this.load()) : (o = t(this, function(e) {
						this.init([], function() {
							return e
						}, null, {
							enabled: !0
						})
					}), o.error = t(this, function(e) {
						this.inited = !0, this.error = e, e.requireModules = [r], B(N, function(e) {
							0 === e.map.id.indexOf(r + "_unnormalized") && f(e.map.id)
						}), c(e)
					}), o.fromText = t(this, function(t, n) {
						var i = e.name,
							u = a(i),
							p = O;
						n && (t = n), p && (O = !1), l(u), s(E.config, r) && (E.config[i] = E.config[r]);
						try {
							h.exec(t)
						} catch (e) {
							return c(C("fromtexteval", "fromText eval for " + r + " failed: " + e, e, [r]))
						}
						p && (O = !0), this.depMaps.push(u), _.completeLoad(i), g([i], o)
					}), i.load(e.name, g, o, E))
				})), _.enable(i, this), this.pluginMaps[i.id] = i
			},
			enable: function() {
				q[this.map.id] = this, this.enabling = this.enabled = !0, v(this.depMaps, t(this, function(e, n) {
					var r, i;
					if ("string" == typeof e) {
						if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[n] = e, r = j(T, e.id)) return void(this.depExports[n] = r(this));
						this.depCount += 1, u(e, "defined", t(this, function(e) {
							this.defineDep(n, e), this.check()
						})), this.errback && u(e, "error", t(this, this.errback))
					}
					r = e.id, i = N[r], !s(T, r) && i && !i.enabled && _.enable(e, this)
				})), B(this.pluginMaps, t(this, function(e) {
					var t = j(N, e.id);
					t && !t.enabled && _.enable(e, this)
				})), this.enabling = !1, this.check()
			},
			on: function(e, t) {
				var n = this.events[e];
				n || (n = this.events[e] = []), n.push(t)
			},
			emit: function(e, t) {
				v(this.events[e], function(e) {
					e(t)
				}), "error" === e && delete this.events[e]
			}
		}, _ = {
			config: E,
			contextName: e,
			registry: N,
			defined: L,
			urlFetched: M,
			defQueue: D,
			Module: w,
			makeModuleMap: a,
			nextTick: h.nextTick,
			onError: c,
			configure: function(e) {
				e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
				var t = E.shim,
					n = {
						paths: !0,
						bundles: !0,
						config: !0,
						map: !0
					};
				B(e, function(e, t) {
					n[t] ? (E[t] || (E[t] = {}), V(E[t], e, !0, !0)) : E[t] = e
				}), e.bundles && B(e.bundles, function(e, t) {
					v(e, function(e) {
						e !== t && (F[e] = t)
					})
				}), e.shim && (B(e.shim, function(e, n) {
					H(e) && (e = {
						deps: e
					}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = _.makeShimExports(e)), t[n] = e
				}), E.shim = t), e.packages && v(e.packages, function(e) {
					var t, e = "string" == typeof e ? {
						name: e
					} : e;
					t = e.name, e.location && (E.paths[t] = e.location), E.pkgs[t] = e.name + "/" + (e.main || "main").replace(ja, "").replace(R, "")
				}), B(N, function(e, t) {
					!e.inited && !e.map.unnormalized && (e.map = a(t))
				}), (e.deps || e.callback) && _.require(e.deps || [], e.callback)
			},
			makeShimExports: function(e) {
				return function() {
					var t;
					return e.init && (t = e.init.apply(ca, arguments)), t || e.exports && ea(e.exports)
				}
			},
			makeRequire: function(t, i) {
				function o(n, r, u) {
					var p, f;
					return i.enableBuildCallback && r && G(r) && (r.__requireJsBuild = !0), "string" == typeof n ? G(r) ? c(C("requireargs", "Invalid require call"), u) : t && s(T, n) ? T[n](N[t.id]) : h.get ? h.get(_, n, t, o) : (p = a(n, t, !1, !0), p = p.id, s(L, p) ? L[p] : c(C("notloaded", 'Module name "' + p + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (b(), _.nextTick(function() {
						b(), f = l(a(null, t)), f.skipMap = i.skipMap, f.init(n, r, u, {
							enabled: !0
						}), m()
					}), o)
				}
				return i = i || {}, V(o, {
					isBrowser: z,
					toUrl: function(e) {
						var r, i = e.lastIndexOf("."),
							o = e.split("/")[0];
						return -1 !== i && ("." !== o && ".." !== o || 1 < i) && (r = e.substring(i, e.length), e = e.substring(0, i)), _.nameToUrl(n(e, t && t.id, !0), r, !0)
					},
					defined: function(e) {
						return s(L, a(e, t, !1, !0).id)
					},
					specified: function(e) {
						return e = a(e, t, !1, !0).id, s(L, e) || s(N, e)
					}
				}), t || (o.undef = function(e) {
					p();
					var n = a(e, t, !0),
						i = j(N, e);
					r(e), delete L[e], delete M[n.url], delete A[e], U(D, function(t, n) {
						t[0] === e && D.splice(n, 1)
					}), i && (i.events.defined && (A[e] = i.events), f(e))
				}), o
			},
			enable: function(e) {
				j(N, e.id) && l(e).enable()
			},
			completeLoad: function(e) {
				var t, n, r = j(E.shim, e) || {},
					o = r.exports;
				for (p(); D.length;) {
					if (n = D.shift(), null === n[0]) {
						if (n[0] = e, t) break;
						t = !0
					} else n[0] === e && (t = !0);
					g(n)
				}
				if (n = j(N, e), !t && !s(L, e) && n && !n.inited) {
					if (E.enforceDefine && (!o || !ea(o))) return i(e) ? void 0 : c(C("nodefine", "No define call for " + e, null, [e]));
					g([e, r.deps || [], r.exportsFn])
				}
				m()
			},
			nameToUrl: function(e, t, n) {
				var r, i, o;
				if ((r = j(E.pkgs, e)) && (e = r), r = j(F, e)) return _.nameToUrl(r, t, n);
				if (h.jsExtRegExp.test(e)) r = e + (t || "");
				else {
					for (r = E.paths, e = e.split("/"), i = e.length; 0 < i; i -= 1)
						if (o = e.slice(0, i).join("/"), o = j(r, o)) {
							H(o) && (o = o[0]), e.splice(0, i, o);
							break
						}
					r = e.join("/"), r += t || (/^data\:|\?/.test(r) || n ? "" : ".js"), r = ("/" === r.charAt(0) || r.match(/^[\w\+\.\-]+:/) ? "" : E.baseUrl) + r
				}
				return E.urlArgs ? r + (-1 === r.indexOf("?") ? "?" : "&") + E.urlArgs : r
			},
			load: function(e, t) {
				h.load(_, e, t)
			},
			execCb: function(e, t, n, r) {
				return t.apply(r, n)
			},
			onScriptLoad: function(e) {
				("load" === e.type || ka.test((e.currentTarget || e.srcElement).readyState)) && (P = null, e = y(e), _.completeLoad(e.id))
			},
			onScriptError: function(e) {
				var t = y(e);
				if (!i(t.id)) return c(C("scripterror", "Script error for: " + t.id, e, [t.id]))
			}
		}, _.require = _.makeRequire(), _
	}
	var h, x, y, D, K, E, P, L, q, Q, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
		ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		R = /\.js$/,
		ja = /^\.\//;
	x = Object.prototype;
	var M = x.toString,
		ga = x.hasOwnProperty,
		ia = Array.prototype.splice,
		z = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
		fa = !z && "undefined" != typeof importScripts,
		ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		Z = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		F = {},
		r = {},
		S = [],
		O = !1;
	if (void 0 === define) {
		if (void 0 !== requirejs) {
			if (G(requirejs)) return;
			r = requirejs, requirejs = void 0
		}
		void 0 !== require && !G(require) && (r = require, require = void 0), h = requirejs = function(e, t, n, r) {
			var i, o = "_";
			return !H(e) && "string" != typeof e && (i = e, H(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (o = i.context), (r = j(F, o)) || (r = F[o] = h.s.newContext(o)), i && r.configure(i), r.require(e, t, n)
		}, h.config = function(e) {
			return h(e)
		}, h.nextTick = "undefined" != typeof setTimeout ? function(e) {
			setTimeout(e, 4)
		} : function(e) {
			e()
		}, require || (require = h), h.version = "2.1.11", h.jsExtRegExp = /^\/|:|\?|\.js$/, h.isBrowser = z, x = h.s = {
			contexts: F,
			newContext: ha
		}, h({}), v(["toUrl", "undef", "defined", "specified"], function(e) {
			h[e] = function() {
				var t = F._;
				return t.require[e].apply(t, arguments)
			}
		}), z && (y = x.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0]) && (y = x.head = D.parentNode), h.onError = da, h.createNode = function(e) {
			var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
		}, h.load = function(e, t, n) {
			var r = e && e.config || {};
			if (z) return r = h.createNode(r, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code") || Z ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (O = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, L = r, D ? y.insertBefore(r, D) : y.appendChild(r), L = null, r;
			if (fa) try {
				importScripts(n), e.completeLoad(t)
			} catch (r) {
				e.onError(C("importscripts", "importScripts failed for " + t + " at " + n, r, [t]))
			}
		}, z && !r.skipDataMain && U(document.getElementsByTagName("script"), function(e) {
			if (y || (y = e.parentNode), K = e.getAttribute("data-main")) return q = K, r.baseUrl || (E = q.split("/"), q = E.pop(), Q = E.length ? E.join("/") + "/" : "./", r.baseUrl = Q), q = q.replace(R, ""), h.jsExtRegExp.test(q) && (q = K), r.deps = r.deps ? r.deps.concat(q) : [q], !0
		}), define = function(e, t, n) {
			var r, i;
			"string" != typeof e && (n = t, t = e, e = null), H(t) || (n = t, t = null), !t && G(n) && (t = [], n.length && (n.toString().replace(la, "").replace(ma, function(e, n) {
				t.push(n)
			}), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), O && ((r = L) || (P && "interactive" === P.readyState || U(document.getElementsByTagName("script"), function(e) {
				if ("interactive" === e.readyState) return P = e
			}), r = P), r && (e || (e = r.getAttribute("data-requiremodule")), i = F[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : S).push([e, t, n])
		}, define.amd = {
			jQuery: !0
		}, h.exec = function(b) {
			return eval(b)
		}, h(r)
	}
}(this), requirejs.config({
	baseUrl: "//common1.qyerstatic.com/plan/modules",
	urlArgs: "_plants=201709211022",
	paths: {
		web_lib_jqueryuicore: "web_lib_jqueryuicore/jquery.ui.core.min",
		web_old_map: "web_old_map/qymap",
		web_old_map_labelmarker: "web_old_map/labelmarker",
		web_old_gmap: "web_old_gmap/gmap",
		web_old_gmap_infobox: "web_old_gmap/infobox",
		web_old_tip: "web_old_tip/tip",
		web_old_tip2: "web_old_tip2/tip2",
		web_old_tooltips: "web_old_tooltips/tooltip",
		web_old_popup: "web_old_popup/popup",
		web_old_pages: "web_old_pages/pages",
		web_old_select: "web_old_select/select",
		web_old_swfobject: "web_old_swfobject/swfobject",
		web_old_datepicker: "web_old_datepicker/datepicker",
		web_old_slidconfirm: "web_old_slidconfirm/slidconfirm",
		web_old_inputautocomplete: "web_old_inputautocomplete/inputAutocomplete",
		web_old_loading: "web_old_loading/loading",
		web_old_dwonreflesh: "web_old_dwonreflesh/dwonReflesh",
		web_old_confirm: "web_old_confirm/confirm",
		web_old_inputvalidation: "web_old_inputvalidation/inputValidation",
		web_old_popuplong: "web_old_popuplong/popupLong",
		web_old_textarea: "web_old_textarea/textArea",
		web_old_share: "web_old_share/share",
		web_old_selectmarker: "web_old_selectmarker/selectMarker",
		web_old_slidimg: "web_old_slidimg/slidImg",
		m_lib_zeptofx: "m_lib_zeptofx/zepto-fx",
		m_old_search: "m_old_search/search",
		m_old_search2: "m_old_search2/search2",
		m_old_cliptext: "m_old_cliptext/clipText",
		m_old_tabs: "m_old_tabs/tabs",
		m_old_swipe: "m_old_swipe/swipe",
		m_old_slide: "m_old_slide/slide",
		m_old_loadmore: "m_old_loadmore/loadmore",
		m_old_popup_base: "m_old_popup_base/popup_base",
		m_old_share: "m_old_share/share",
		m_old_share2: "m_old_share2/share2",
		m_old_time: "m_old_time/time",
		m_old_toast: "m_old_toast/toast",
		m_old_list: "m_old_list/list",
		m_old_list2: "m_old_list2/list2",
		m_old_slidtip: "m_old_slidtip/slidTip",
		m_old_leftslide: "m_old_leftslide/leftSlide",
		m_old_rightslide: "m_old_rightslide/rightSlide",
		m_old_editer1: "m_old_editer1/editer1",
		m_old_datepicker: "m_old_datepicker/datePicker",
		m_old_multi_list: "m_old_multi_list/multi_list",
		m_old_select: "m_old_select/select",
		m_old_loading: "m_old_loading/loading",
		m_old_selectnum: "m_old_selectnum/selectNum",
		m_ct_antiSpam: "m_ct_antiSpam/antiSpam",
		web_ct_feedback: "web_ct_feedback/feedback",
		web_ct_copyplan: "web_ct_copyplan/copyPlan",
		web_ct_logindialog: "web_ct_logindialog/loginDialog",
		web_ct_logindialog_loginFormValid: "web_ct_logindialog/loginFormValid",
		web_qui_controlbase: "web_qui_controlbase/controlBase",
		web_qui_quiupload: "web_qui_quiupload/QuiUpload",
		web_qui_quiupload_qiniu: "web_qui_quiupload/qiniu",
		web_qui_quiselect: "web_qui_quiselect/QuiSelect",
		web_qui_quiselectmarker: "web_qui_quiselectmarker/QuiSelectMarker",
		web_qui_quitip: "web_qui_quitip/QuiTip",
		web_qui_quigmap: "web_qui_quigmap/QuiGmap",
		web_qui_quigmap_infobox: "web_qui_quigmap/infobox",
		plupload: "web_qui_quiupload/lib/plupload/plupload.full.min",
		lodash: "plan_libs/lodash"
	},
	map: {
		"*": {
			css: "//common1.qyerstatic.com/plan/modules/lib_require_css/css.js"
		}
	}
});