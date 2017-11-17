! function(e, t) {
	function n(e) {
		var t = e.length,
			n = ce.type(e);
		return !ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
	}

	function r(e) {
		var t = Ee[e] = {};
		return ce.each(e.match(pe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function i(e, n, r, i) {
		if(ce.acceptData(e)) {
			var o, a, s = ce.expando,
				u = e.nodeType,
				l = u ? ce.cache : e,
				c = u ? e[s] : e[s] && s;
			if(c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = te.pop() || ce.guid++ : s), l[c] || (l[c] = u ? {} : {
				toJSON: ce.noop
			}), "object" != typeof n && "function" != typeof n || (i ? l[c] = ce.extend(l[c], n) : l[c].data = ce.extend(l[c].data, n)), a = l[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ce.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ce.camelCase(n)])) : o = a, o
		}
	}

	function o(e, t, n) {
		if(ce.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? ce.cache : e,
				u = o ? e[ce.expando] : ce.expando;
			if(a[u]) {
				if(t && (r = n ? a[u] : a[u].data)) {
					ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in r ? t = [t] : (t = ce.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					for(; i--;) delete r[t[i]];
					if(n ? !s(r) : !ce.isEmptyObject(r)) return
				}(n || (delete a[u].data, s(a[u]))) && (o ? ce.cleanData([e], !0) : ce.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
			}
		}
	}

	function a(e, n, r) {
		if(r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(je, "-$1").toLowerCase();
			if(r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ke.test(r) ? ce.parseJSON(r) : r)
				} catch(o) {}
				ce.data(e, n, r)
			} else r = t
		}
		return r
	}

	function s(e) {
		var t;
		for(t in e)
			if(("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function u() {
		return !0
	}

	function l() {
		return !1
	}

	function c() {
		try {
			return V.activeElement
		} catch(e) {}
	}

	function f(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function p(e, t, n) {
		if(ce.isFunction(t)) return ce.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if(t.nodeType) return ce.grep(e, function(e) {
			return e === t !== n
		});
		if("string" == typeof t) {
			if(We.test(t)) return ce.filter(t, e, n);
			t = ce.filter(t, e)
		}
		return ce.grep(e, function(e) {
			return ce.inArray(e, t) >= 0 !== n
		})
	}

	function d(e) {
		var t = Xe.split("|"),
			n = e.createDocumentFragment();
		if(n.createElement)
			for(; t.length;) n.createElement(t.pop());
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
		for(var n, r = 0; null != (n = e[r]); r++) ce._data(n, "globalEval", !t || ce._data(t[r], "globalEval"))
	}

	function v(e, t) {
		if(1 === t.nodeType && ce.hasData(e)) {
			var n, r, i, o = ce._data(e),
				a = ce._data(t, o),
				s = o.events;
			if(s) {
				delete a.handle, a.events = {};
				for(n in s)
					for(r = 0, i = s[n].length; r < i; r++) ce.event.add(t, n, s[n][r])
			}
			a.data && (a.data = ce.extend({}, a.data))
		}
	}

	function b(e, t) {
		var n, r, i;
		if(1 === t.nodeType) {
			if(n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
				i = ce._data(t);
				for(r in i.events) ce.removeEvent(t, r, i.handle);
				t.removeAttribute(ce.expando)
			}
			"script"
			http: //common1.qyerstatic.com/place/js/common/===n&&t.text!==e.text?(m(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),ce.support.html5Clone&&e.innerHTML&&!ce.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&tt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function x(e,n){var r,i,o=0,a=typeof e.getElementsByTagName!==Y?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==Y?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||ce.nodeName(i,n)?a.push(i):ce.merge(a,x(i,n));return n===t||n&&ce.nodeName(e,n)?ce.merge([e],a):a}function w(e){tt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Ct.length;i--;)if(t=Ct[i]+n,t in e)return t;return r}function _(e,t){return e=t||e,"none"===ce.css(e,"display")||!ce.contains(e.ownerDocument,e)}function C(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=ce._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&_(r)&&(o[a]=ce._data(r,"olddisplay",N(r.nodeName)))):o[a]||(i=_(r),(n&&"none"!==n||!i)&&ce._data(r,"olddisplay",i?n:ce.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function E(e,t,n){var r=yt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=ce.css(e,n+_t[o],!0,i)),r?("content"===n&&(a-=ce.css(e,"padding"+_t[o],!0,i)),"margin"!==n&&(a-=ce.css(e,"border"+_t[o]+"Width",!0,i))):(a+=ce.css(e,"padding"+_t[o],!0,i),"padding"!==n&&(a+=ce.css(e,"border"+_t[o]+"Width",!0,i)));return a}function j(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ct(e),a=ce.support.boxSizing&&"border-box"===ce.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(i=ft(e,t,o),(i<0||null==i)&&(i=e.style[t]),vt.test(i))return i;r=a&&(ce.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function N(e){var t=V,n=xt[e];return n||(n=S(e,t),"none"!==n&&n||(lt=(lt||ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(lt[0].contentWindow||lt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=S(e,t),lt.detach()),xt[e]=n),n}function S(e,t){var n=ce(t.createElement(e)).appendTo(t.body),r=ce.css(n[0],"display");return n.remove(),r}function q(e,t,n,r){var i;if(ce.isArray(t))ce.each(t,function(t,i){n||kt.test(e)?r(e,i):q(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ce.type(t))r(e,t);else for(i in t)q(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(pe)||[];if(ce.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function A(e,t,n,r){function i(s){var u;return o[s]=!0,ce.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===zt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function L(e,n){var r,i,o=ce.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&ce.extend(!0,e,r),e}function H(e,n,r){for(var i,o,a,s,u=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}if(a)return a!==l[0]&&l.unshift(a),r[a]}function M(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function O(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function R(){return setTimeout(function(){Kt=t}),Kt=ce.now()}function B(e,t,n){for(var r,i=(on[t]||[]).concat(on["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function P(e,t,n){var r,i,o=0,a=rn.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Kt||R(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ce.extend({},t),opts:ce.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Kt||R(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ce.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for($(c,l.opts.specialEasing);o<a;o++)if(r=rn[o].call(l,e,c,l.opts))return r;return ce.map(c,B,l),ce.isFunction(l.opts.start)&&l.opts.start.call(e,l),ce.fx.timer(ce.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function $(e,t){var n,r,i,o,a;for(n in e)if(r=ce.camelCase(n),i=t[r],o=e[n],ce.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ce.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l=this,c={},f=e.style,p=e.nodeType&&_(e),d=ce._data(e,"fxshow");n.queue||(s=ce._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,l.always(function(){l.always(function(){s.unqueued--,ce.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===ce.css(e,"display")&&"none"===ce.css(e,"float")&&(ce.support.inlineBlockNeedsLayout&&"inline"!==N(e.nodeName)?f.zoom=1:f.display="inline-block")),n.overflow&&(f.overflow="hidden",ce.support.shrinkWrapBlocks||l.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],en.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show"))continue;c[r]=d&&d[r]||ce.style(e,r)}if(!ce.isEmptyObject(c)){d?"hidden"in d&&(p=d.hidden):d=ce._data(e,"fxshow",{}),o&&(d.hidden=!p),p?ce(e).show():l.done(function(){ce(e).hide()}),l.done(function(){var t;ce._removeData(e,"fxshow");for(t in c)ce.style(e,t,c[t])});for(r in c)a=B(p?d[r]:0,r,l),r in d||(d[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function z(e,t,n,r,i){return new z.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)n=_t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function U(e){return ce.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var X,Q,Y=typeof t,G=e.location,V=e.document,J=V.documentElement,K=e.jQuery,Z=e.$,ee={},te=[],ne="1.10.2",re=te.concat,ie=te.push,oe=te.slice,ae=te.indexOf,se=ee.toString,ue=ee.hasOwnProperty,le=ne.trim,ce=function(e,t){return new ce.fn.init(e,t,Q)},fe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,pe=/\S+/g,de=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,he=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,me=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ge=/^[\],:{}\s]*$/,ye=/(?:^|:|,)(?:\s*\[)+/g,ve=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,be=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,xe=/^-ms-/,we=/-([\da-z])/gi,Te=function(e,t){return t.toUpperCase()},_e=function(e){(V.addEventListener||"load"===e.type||"complete"===V.readyState)&&(Ce(),ce.ready())},Ce=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",_e,!1),e.removeEventListener("load",_e,!1)):(V.detachEvent("onreadystatechange",_e),e.detachEvent("onload",_e))};ce.fn=ce.prototype={jquery:ne,constructor:ce,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:he.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof ce?n[0]:n,ce.merge(this,ce.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),me.test(i[1])&&ce.isPlainObject(n))for(i in n)ce.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ce.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),ce.makeArray(e,this))},selector:"",length:0,toArray:function(){return oe.call(this)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ce.each(this,e,t)},ready:function(e){return ce.ready.promise().done(e),this},slice:function(){return this.pushStack(oe.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(ce.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:ie,sort:[].sort,splice:[].splice},ce.fn.init.prototype=ce.fn,ce.extend=ce.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||ce.isFunction(s)||(s={}),l===u&&(s=this,--u);u<l;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(ce.isPlainObject(r)||(n=ce.isArray(r)))?(n?(n=!1,a=e&&ce.isArray(e)?e:[]):a=e&&ce.isPlainObject(e)?e:{},s[i]=ce.extend(c,a,r)):r!==t&&(s[i]=r));return s},ce.extend({expando:"jQuery"+(ne+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===ce&&(e.$=Z),t&&e.jQuery===ce&&(e.jQuery=K),ce},isReady:!1,readyWait:1,holdReady:function(e){e?ce.readyWait++:ce.ready(!0)},ready:function(e){if(e===!0?!--ce.readyWait:!ce.isReady){if(!V.body)return setTimeout(ce.ready);ce.isReady=!0,e!==!0&&--ce.readyWait>0||(X.resolveWith(V,[ce]),ce.fn.trigger&&ce(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===ce.type(e)},isArray:Array.isArray||function(e){return"array"===ce.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?ee[se.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==ce.type(e)||e.nodeType||ce.isWindow(e))return!1;try{if(e.constructor&&!ue.call(e,"constructor")&&!ue.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(ce.support.ownLast)for(n in e)return ue.call(e,n);for(n in e);return n===t||ue.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=me.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ce.buildFragment([e],t,i),i&&ce(i).remove(),ce.merge([],r.childNodes))},parseJSON:function(t){return e.JSON&&e.JSON.parse?e.JSON.parse(t):null===t?t:"string"==typeof t&&(t=ce.trim(t),t&&ge.test(t.replace(ve,"@").replace(be,"]").replace(ye,"")))?new Function("return "+t)():void ce.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||ce.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&ce.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(xe,"ms-").replace(we,Te)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;o<a&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;o<a&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:le&&!le.call("\ufeff ")?function(e){return null==e?"":le.call(e)}:function(e){return null==e?"":(e+"").replace(de,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ce.merge(r,"string"==typeof e?[e]:e):ie.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(ae)return ae.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;o<r;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;o<a;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;o<a;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return re.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),ce.isFunction(e)?(r=oe.call(arguments,2),i=function(){return e.apply(n||this,r.concat(oe.call(arguments)))},i.guid=e.guid=e.guid||ce.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===ce.type(r)){o=!0;for(u in r)ce.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,ce.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(ce(e),n)})),n))for(;u<l;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),ce.ready.promise=function(t){if(!X)if(X=ce.Deferred(),"complete"===V.readyState)setTimeout(ce.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",_e,!1),e.addEventListener("load",_e,!1);else{V.attachEvent("onreadystatechange",_e),e.attachEvent("onload",_e);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!ce.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}Ce(),ce.ready()}}()}return X.promise(t)},ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()}),Q=ce(V),function(e,t){function n(e,t,n,r){var i,o,a,s,u,l,c,f,h,m;if((t?t.ownerDocument||t:P)!==A&&D(t),t=t||A,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(H&&!r){if(i=be.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&R(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return ee.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&_.getElementsByClassName&&t.getElementsByClassName)return ee.apply(n,t.getElementsByClassName(a)),n}if(_.qsa&&(!M||!M.test(e))){if(f=c=B,h=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=p(e),(c=t.getAttribute("id"))?f=c.replace(Te,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",u=l.length;u--;)l[u]=f+d(l[u]);h=de.test(e)&&t.parentNode||t,m=l.join(",")}if(m)try{return ee.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{c||t.removeAttribute("id")}}}return w(e.replace(le,"$1"),t,n,r)}function r(){function e(n,r){return t.push(n+=" ")>E.cacheLength&&delete e[t.shift()],e[n]=r}var t=[];return e}function i(e){return e[B]=!0,e}function o(e){var t=A.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),r=e.length;r--;)E.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(){}function p(e,t){var r,i,o,a,s,u,l,c=I[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=E.preFilter;s;){r&&!(i=fe.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=pe.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(le," ")}),s=s.slice(r.length));for(a in E.filter)!(i=ye[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return t?s.length:s?n.error(e):I(e,u).slice(0)}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[B]||(t[B]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===C)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||C,u[1]===!0)return!0}}function m(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,r,o,a){return r&&!r[B]&&(r=y(r)),o&&!o[B]&&(o=y(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||x(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?ne.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):ee.apply(a,v)})}function v(e){for(var t,n,r,i=e.length,o=E.relative[e[0].type],a=o||E.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ne.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];s<i;s++)if(n=E.relative[e[s].type])c=[h(m(c),n)];else{if(n=E.filter[e[s].type].apply(null,e[s].matches),n[B]){for(r=++s;r<i&&!E.relative[e[r].type];r++);return y(s>1&&m(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(le,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&d(e))}c.push(n)}return m(c)}function b(e,t){var r=0,o=t.length>0,a=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=S,w=i||a&&E.find.TAG("*",c&&s.parentNode||s),T=$+=null==x?1:Math.random()||.1;for(b&&(S=s!==A&&s,C=r);null!=(f=w[y]);y++){if(a&&f){for(p=0;d=e[p++];)if(d(f,s,u)){l.push(f);break}b&&($=T,C=++r)}o&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,o&&y!==m){for(p=0;d=t[p++];)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=K.call(l));h=g(h)}ee.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&n.uniqueSort(l)}return b&&($=T,S=x),v};return o?i(s):s}function x(e,t,r){for(var i=0,o=t.length;i<o;i++)n(e,t[i],r);return r}function w(e,t,n,r){var i,o,a,s,u,l=p(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&_.getById&&9===t.nodeType&&H&&E.relative[o[1].type]){if(t=(E.find.ID(a.matches[0].replace(_e,Ce),t)||[])[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=ye.needsContext.test(e)?0:o.length;i--&&(a=o[i],!E.relative[s=a.type]);)if((u=E.find[s])&&(r=u(a.matches[0].replace(_e,Ce),de.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return ee.apply(n,r),n;break}}return N(e,l)(r,t,!H,n,de.test(e)),n}var T,_,C,E,k,j,N,S,q,D,A,L,H,M,O,F,R,B="sizzle"+-new Date,P=e.document,$=0,W=0,z=r(),I=r(),U=r(),X=!1,Q=function(e,t){return e===t?(X=!0,0):0},Y=typeof t,G=1<<31,V={}.hasOwnProperty,J=[],K=J.pop,Z=J.push,ee=J.push,te=J.slice,ne=J.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},re="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="[\\x20\\t\\r\\n\\f]",oe="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ae=oe.replace("w","w#"),se="\\["+ie+"*("+oe+")"+ie+"*(?:([*^$|!~]?=)"+ie+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ae+")|)|)"+ie+"*\\]",ue=":("+oe+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+se.replace(3,8)+")*)|.*)\\)|)",le=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g"),fe=new RegExp("^"+ie+"*,"+ie+"*"),pe=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),de=new RegExp(ie+"*[+~]"),he=new RegExp("="+ie+"*([^\\]'\"]*)"+ie+"*\\]","g"),me=new RegExp(ue),ge=new RegExp("^"+ae+"$"),ye={ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),TAG:new RegExp("^("+oe.replace("w","w*")+")"),ATTR:new RegExp("^"+se),PSEUDO:new RegExp("^"+ue),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),bool:new RegExp("^(?:"+re+")$","i"),needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")},ve=/^[^{]+\{\s*\[native \w/,be=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/^(?:input|select|textarea|button)$/i,we=/^h\d$/i,Te=/'|\\/g,_e=new RegExp("\\\\([\\da-f]{1,6}"+ie+"?|("+ie+")|.)","ig"),Ce=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{ee.apply(J=te.call(P.childNodes),P.childNodes),J[P.childNodes.length].nodeType}catch(Ee){ee={apply:J.length?function(e,t){Z.apply(e,te.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}j=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},_=n.support={},D=n.setDocument=function(e){var t=e?e.ownerDocument||e:P,n=t.defaultView;return t!==A&&9===t.nodeType&&t.documentElement?(A=t,L=t.documentElement,H=!j(t),n&&n.attachEvent&&n!==n.top&&n.attachEvent("onbeforeunload",function(){D()}),_.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),_.getElementsByTagName=o(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),_.getElementsByClassName=o(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),_.getById=o(function(e){return L.appendChild(e).id=B,!t.getElementsByName||!t.getElementsByName(B).length}),_.getById?(E.find.ID=function(e,t){if(typeof t.getElementById!==Y&&H){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},E.filter.ID=function(e){var t=e.replace(_e,Ce);return function(e){return e.getAttribute("id")===t}}):(delete E.find.ID,E.filter.ID=function(e){var t=e.replace(_e,Ce);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),E.find.TAG=_.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Y)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},E.find.CLASS=_.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==Y&&H)return t.getElementsByClassName(e)},O=[],M=[],(_.qsa=ve.test(t.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||M.push("\\["+ie+"*(?:value|"+re+")"),e.querySelectorAll(":checked").length||M.push(":checked")}),o(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&M.push("[*^$]="+ie+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(_.matchesSelector=ve.test(F=L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&o(function(e){_.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),O.push("!=",ue)}),M=M.length&&new RegExp(M.join("|")),O=O.length&&new RegExp(O.join("|")),R=ve.test(L.contains)||L.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Q=L.compareDocumentPosition?function(e,n){if(e===n)return X=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return r?1&r||!_.sortDetached&&n.compareDocumentPosition(e)===r?e===t||R(P,e)?-1:n===t||R(P,n)?1:q?ne.call(q,e)-ne.call(q,n):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,u=[e],l=[n];if(e===n)return X=!0,0;if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:q?ne.call(q,e)-ne.call(q,n):0;if(o===a)return s(e,n);for(r=e;r=r.parentNode;)u.unshift(r);for(r=n;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===P?-1:l[i]===P?1:0},t):A},n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){if((e.ownerDocument||e)!==A&&D(e),t=t.replace(he,"='$1']"),_.matchesSelector&&H&&(!O||!O.test(t))&&(!M||!M.test(t)))try{var r=F.call(e,t);if(r||_.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return n(t,A,null,[e]).length>0},n.contains=function(e,t){return(e.ownerDocument||e)!==A&&D(e),R(e,t)},n.attr=function(e,n){(e.ownerDocument||e)!==A&&D(e);var r=E.attrHandle[n.toLowerCase()],i=r&&V.call(E.attrHandle,n.toLowerCase())?r(e,n,!H):t;return i===t?_.attributes||!H?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null:i},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},n.uniqueSort=function(e){var t,n=[],r=0,i=0;if(X=!_.detectDuplicates,q=!_.sortStable&&e.slice(0),e.sort(Q),X){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return e},k=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},E=n.selectors={cacheLength:50,createPseudo:i,match:ye,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(_e,Ce),e[3]=(e[4]||e[5]||"").replace(_e,Ce),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||n.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&n.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return ye.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&me.test(r)&&(n=p(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(_e,Ce).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ie+")"+e+"("+ie+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(i){var o=n.attr(i,e);return null==o?"!="===t:!t||(o+="","="===t?o===r:"!="===t?o!==r:"^="===t?r&&0===o.indexOf(r):"*="===t?r&&o.indexOf(r)>-1:"$="===t?r&&o.slice(-r.length)===r:"~="===t?(" "+o+" ").indexOf(r)>-1:"|="===t&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){
				return !!e.parentNode
		}: function(t, n, u) {
			var l, c, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling",
				g = t.parentNode,
				y = s && t.nodeName.toLowerCase(),
				v = !u && !s;
			if(g) {
				if(o) {
					for(; m;) {
						for(f = t; f = f[m];)
							if(s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
						h = m = "only" === e && !h && "nextSibling"
					}
					return !0
				}
				if(h = [a ? g.firstChild : g.lastChild], a && v) {
					for(c = g[B] || (g[B] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (p = d = 0) || h.pop();)
						if(1 === f.nodeType && ++p && f === t) {
							c[e] = [$, d, p];
							break
						}
				} else if(v && (l = (t[B] || (t[B] = {}))[e]) && l[0] === $) p = l[1];
				else
					for(;
						(f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[B] || (f[B] = {}))[e] = [$, p]), f !== t)););
				return p -= i, p === r || p % r === 0 && p / r >= 0
			}
		}
	}, PSEUDO: function(e, t) {
		var r, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
		return o[B] ? o(t) : o.length > 1 ? (r = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
			for(var r, i = o(e, t), a = i.length; a--;) r = ne.call(e, i[a]), e[r] = !(n[r] = i[a])
		}) : function(e) {
			return o(e, 0, r)
		}) : o
	}
}, pseudos: {
	not: i(function(e) {
		var t = [],
			n = [],
			r = N(e.replace(le, "$1"));
		return r[B] ? i(function(e, t, n, i) {
			for(var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
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
			return(t.textContent || t.innerText || k(t)).indexOf(e) > -1
		}
	}),
	lang: i(function(e) {
		return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(_e, Ce).toLowerCase(),
			function(t) {
				var n;
				do
					if(n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
				return !1
			}
	}),
	target: function(t) {
		var n = e.location && e.location.hash;
		return n && n.slice(1) === t.id
	},
	root: function(e) {
		return e === L
	},
	focus: function(e) {
		return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
		return !E.pseudos.empty(e)
	},
	header: function(e) {
		return we.test(e.nodeName)
	},
	input: function(e) {
		return xe.test(e.nodeName)
	},
	button: function(e) {
		var t = e.nodeName.toLowerCase();
		return "input" === t && "button" === e.type || "button" === t
	},
	text: function(e) {
		var t;
		return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
	},
	first: c(function() {
		return [0]
	}),
	last: c(function(e, t) {
		return [t - 1]
	}),
	eq: c(function(e, t, n) {
		return [n < 0 ? n + t : n]
	}),
	even: c(function(e, t) {
		for(var n = 0; n < t; n += 2) e.push(n);
		return e
	}),
	odd: c(function(e, t) {
		for(var n = 1; n < t; n += 2) e.push(n);
		return e
	}),
	lt: c(function(e, t, n) {
		for(var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
		return e
	}),
	gt: c(function(e, t, n) {
		for(var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
		return e
	})
}
}, E.pseudos.nth = E.pseudos.eq;
for(T in {
		radio: !0,
		checkbox: !0,
		file: !0,
		password: !0,
		image: !0
	}) E.pseudos[T] = u(T);
for(T in {
		submit: !0,
		reset: !0
	}) E.pseudos[T] = l(T);
f.prototype = E.filters = E.pseudos, E.setFilters = new f, N = n.compile = function(e, t) {
	var n, r = [],
		i = [],
		o = U[e + " "];
	if(!o) {
		for(t || (t = p(e)), n = t.length; n--;) o = v(t[n]), o[B] ? r.push(o) : i.push(o);
		o = U(e, b(i, r))
	}
	return o
}, _.sortStable = B.split("").sort(Q).join("") === B, _.detectDuplicates = X, D(), _.sortDetached = o(function(e) {
	return 1 & e.compareDocumentPosition(A.createElement("div"))
}), o(function(e) {
	return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
}) || a("type|href|height|width", function(e, t, n) {
	if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
}), _.attributes && o(function(e) {
	return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
}) || a("value", function(e, t, n) {
	if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
}), o(function(e) {
	return null == e.getAttribute("disabled")
}) || a(re, function(e, t, n) {
	var r;
	if(!n) return(r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
}), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
}(e);
var Ee = {};
ce.Callbacks = function(e) {
		e = "string" == typeof e ? Ee[e] || r(e) : ce.extend({}, e);
		var n, i, o, a, s, u, l = [],
			c = !e.once && [],
			f = function(t) {
				for(i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && s < a; s++)
					if(l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						i = !1;
						break
					}
				n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
			},
			p = {
				add: function() {
					if(l) {
						var t = l.length;
						! function r(t) {
							ce.each(t, function(t, n) {
								var i = ce.type(n);
								"function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), n ? a = l.length : i && (u = t, f(i))
					}
					return this
				},
				remove: function() {
					return l && ce.each(arguments, function(e, t) {
						for(var r;
							(r = ce.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (r <= a && a--, r <= s && s--)
					}), this
				},
				has: function(e) {
					return e ? ce.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], a = 0, this
				},
				disable: function() {
					return l = c = i = t, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return c = t, i || p.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : f(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return p
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
				u = 1 === s ? e : ce.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if(a > 1)
				for(t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ce.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	}), ce.support = function(t) {
		var n, r, i, o, a, s, u, l, c, f = V.createElement("div");
		if(f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='http://common1.qyerstatic.com/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		o = V.createElement("select"), s = o.appendChild(V.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!V.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
		try {
			delete f.test
		} catch(p) {
			t.deleteExpando = !1
		}
		i = V.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = V.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), f.cloneNode(!0).click());
		for(c in {
				submit: !0,
				change: !0,
				focusin: !0
			}) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
		f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
		for(c in ce(t)) break;
		return t.ownLast = "0" !== c, ce(function() {
			var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				a = V.getElementsByTagName("body")[0];
			a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"
				http: //common1.qyerstatic.com/place/js/common/,ce.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===f.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(V.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==Y&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=f=i=r=null)}),n=o=a=s=r=i=null,t}({});var ke=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,je=/([A-Z])/g;ce.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?ce.cache[e[ce.expando]]:e[ce.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n)},removeData:function(e,t){return o(e,t)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&ce.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),ce.fn.extend({data:function(e,n){var r,i,o=null,s=0,u=this[0];if(e===t){if(this.length&&(o=ce.data(u),1===u.nodeType&&!ce._data(u,"parsedAttrs"))){for(r=u.attributes;s<r.length;s++)i=r[s].name,0===i.indexOf("data-")&&(i=ce.camelCase(i.slice(5)),a(u,i,o[i]));ce._data(u,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){ce.data(this,e)}):arguments.length>1?this.each(function(){ce.data(this,e,n)}):u?a(u,e,ce.data(u,e)):null},removeData:function(e){return this.each(function(){ce.removeData(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=ce._data(e,t),n&&(!r||ce.isArray(n)?r=ce._data(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t),a=function(){ce.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ce._data(e,n)||ce._data(e,n,{empty:ce.Callbacks("once memory").add(function(){ce._removeData(e,t+"queue"),ce._removeData(e,n)})})}}),ce.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?ce.queue(this[0],e):n===t?this:this.each(function(){var t=ce.queue(this,e,n);ce._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&ce.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},delay:function(e,t){return e=ce.fx?ce.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=ce.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=ce._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ne,Se,qe=/[\t\r\n\f]/g,De=/\r/g,Ae=/^(?:input|select|textarea|button|object)$/i,Le=/^(?:a|area)$/i,He=/^(?:checked|selected)$/i,Me=ce.support.getSetAttribute,Oe=ce.support.input;ce.fn.extend({attr:function(e,t){return ce.access(this,ce.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})},prop:function(e,t){return ce.access(this,ce.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ce.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(ce.isFunction(e))return this.each(function(t){ce(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(pe)||[];a<s;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(qe," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=ce.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ce.isFunction(e))return this.each(function(t){ce(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(pe)||[];a<s;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(qe," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?ce.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ce.isFunction(e)?this.each(function(n){ce(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=ce(this),o=e.match(pe)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else n!==Y&&"boolean"!==n||(this.className&&ce._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ce._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(qe," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=ce.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,ce(this).val()):e,null==o?o="":"number"==typeof o?o+="":ce.isArray(o)&&(o=ce.map(o,function(e){return null==e?"":e+""})),r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=ce.valHooks[o.type]||ce.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(De,""):null==n?"":n)}}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(ce.support.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ce.nodeName(n.parentNode,"optgroup"))){if(t=ce(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ce.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=ce.inArray(ce(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===Y?ce.prop(e,n,r):(1===a&&ce.isXMLDoc(e)||(n=n.toLowerCase(),i=ce.attrHooks[n]||(ce.expr.match.bool.test(n)?Se:Ne)),r===t?i&&"get"in i&&null!==(o=i.get(e,n))?o:(o=ce.find.attr(e,n),null==o?t:o):null!==r?i&&"set"in i&&(o=i.set(e,r,n))!==t?o:(e.setAttribute(n,r+""),r):void ce.removeAttr(e,n))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(pe);if(o&&1===e.nodeType)for(;n=o[i++];)r=ce.propFix[n]||n,ce.expr.match.bool.test(n)?Oe&&Me||!He.test(n)?e[r]=!1:e[ce.camelCase("default-"+n)]=e[r]=!1:ce.attr(e,n,""),e.removeAttribute(Me?n:r)},attrHooks:{type:{set:function(e,t){if(!ce.support.radioValue&&"radio"===t&&ce.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!ce.isXMLDoc(e),a&&(n=ce.propFix[n]||n,o=ce.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):Ae.test(e.nodeName)||Le.test(e.nodeName)&&e.href?0:-1}}}}),Se={set:function(e,t,n){return t===!1?ce.removeAttr(e,n):Oe&&Me||!He.test(n)?e.setAttribute(!Me&&ce.propFix[n]||n,n):e[ce.camelCase("default-"+n)]=e[n]=!0,n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,n){var r=ce.expr.attrHandle[n]||ce.find.attr;ce.expr.attrHandle[n]=Oe&&Me||!He.test(n)?function(e,n,i){var o=ce.expr.attrHandle[n],a=i?t:(ce.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return ce.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[ce.camelCase("default-"+n)]?n.toLowerCase():null}}),Oe&&Me||(ce.attrHooks.value={set:function(e,t,n){return ce.nodeName(e,"input")?void(e.defaultValue=t):Ne&&Ne.set(e,t,n)}}),Me||(Ne={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},ce.expr.attrHandle.id=ce.expr.attrHandle.name=ce.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},ce.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:Ne.set},ce.attrHooks.contenteditable={set:function(e,t,n){Ne.set(e,""!==t&&t,n)}},ce.each(["width","height"],function(e,t){ce.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),ce.support.hrefNormalized||ce.each(["href","src"],function(e,t){ce.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),ce.support.style||(ce.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),ce.support.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.support.enctype||(ce.propFix.enctype="encoding"),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(ce.isArray(t))return e.checked=ce.inArray(ce(e).val(),t)>=0}},ce.support.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Fe=/^(?:input|select|textarea)$/i,Re=/^key/,Be=/^(?:mouse|contextmenu)|click/,Pe=/^(?:focusinfocus|focusoutblur)$/,$e=/^([^.]*)(?:\.(.+)|)$/;ce.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,m,g,y=ce._data(e);if(y){for(r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=ce.guid++),(s=y.events)||(s=y.events={}),(f=y.handle)||(f=y.handle=function(e){return typeof ce===Y||e&&ce.event.triggered===e.type?t:ce.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(pe)||[""],u=n.length;u--;)a=$e.exec(n[u])||[],h=g=a[1],m=(a[2]||"").split(".").sort(),h&&(c=ce.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=ce.event.special[h]||{},p=ce.extend({type:h,origType:g,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ce.expr.match.needsContext.test(o),namespace:m.join(".")},l),(d=s[h])||(d=s[h]=[],d.delegateCount=0,c.setup&&c.setup.call(e,i,m,f)!==!1||(e.addEventListener?e.addEventListener(h,f,!1):e.attachEvent&&e.attachEvent("on"+h,f))),c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),ce.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=ce.hasData(e)&&ce._data(e);if(g&&(c=g.events)){for(t=(t||"").match(pe)||[""],l=t.length;l--;)if(s=$e.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ce.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||ce.removeEvent(e,d,g.handle),delete c[d])}else for(d in c)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(c)&&(delete g.handle,ce._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=ue.call(n,"type")?n.type:n,m=ue.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Pe.test(h+ce.event.triggered)&&(h.indexOf(".")>=0&&(m=h.split("."),h=m.shift(),m.sort()),s=h.indexOf(":")<0&&"on"+h,n=n[ce.expando]?n:new ce.Event(h,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:ce.makeArray(r,[n]),c=ce.event.special[h]||{},o||!c.trigger||c.trigger.apply(i,r)!==!1)){if(!o&&!c.noBubble&&!ce.isWindow(i)){for(l=c.delegateType||h,Pe.test(l+h)||(u=u.parentNode);u;u=u.parentNode)d.push(u),f=u;f===(i.ownerDocument||V)&&d.push(f.defaultView||f.parentWindow||e)}for(p=0;(u=d[p++])&&!n.isPropagationStopped();)n.type=p>1?l:c.bindType||h,a=(ce._data(u,"events")||{})[n.type]&&ce._data(u,"handle"),a&&a.apply(u,r),a=s&&u[s],a&&ce.acceptData(u)&&a.apply&&a.apply(u,r)===!1&&n.preventDefault();if(n.type=h,!o&&!n.isDefaultPrevented()&&(!c._default||c._default.apply(d.pop(),r)===!1)&&ce.acceptData(i)&&s&&i[h]&&!ce.isWindow(i)){f=i[s],f&&(i[s]=null),ce.event.triggered=h;try{i[h]()}catch(g){}ce.event.triggered=t,f&&(i[s]=f)}return n.result}},dispatch:function(e){e=ce.event.fix(e);var n,r,i,o,a,s=[],u=oe.call(arguments),l=(ce._data(this,"events")||{})[e.type]||[],c=ce.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=ce.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,r=((ce.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;a<u;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?ce(r,this).index(l)>=0:ce.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return u<n.length&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[ce.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Be.test(i)?this.mouseHooks:Re.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ce.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||V,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==c()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===c()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ce.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return ce.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ce.extend(new ce.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ce.event.trigger(i,null,t):ce.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ce.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===Y&&(e[r]=null),e.detachEvent(r,n))},ce.Event=function(e,t){return this instanceof ce.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||ce.now(),void(this[ce.expando]=!0)):new ce.Event(e,t)},ce.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},ce.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ce.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||ce.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ce.support.submitBubbles||(ce.event.special.submit={setup:function(){return!ce.nodeName(this,"form")&&void ce.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=ce.nodeName(n,"input")||ce.nodeName(n,"button")?n.form:t;r&&!ce._data(r,"submitBubbles")&&(ce.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),ce._data(r,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ce.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!ce.nodeName(this,"form")&&void ce.event.remove(this,"._submit")}}),ce.support.changeBubbles||(ce.event.special.change={setup:function(){return Fe.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(ce.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),ce.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),ce.event.simulate("change",this,e,!0)})),!1):void ce.event.add(this,"beforeactivate._change",function(e){var t=e.target;Fe.test(t.nodeName)&&!ce._data(t,"changeBubbles")&&(ce.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ce.event.simulate("change",this.parentNode,e,!0)}),ce._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return ce.event.remove(this,"._change"),!Fe.test(this.nodeName)}}),ce.support.focusinBubbles||ce.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){ce.event.simulate(t,e.target,ce.event.fix(e),!0)};ce.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),ce.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(s=i,i=function(e){return ce().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=ce.guid++)),this.each(function(){ce.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ce(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return n!==!1&&"function"!=typeof n||(r=n,n=t),r===!1&&(r=l),this.each(function(){ce.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var We=/^.[^:#\[\.,]*$/,ze=/^(?:parents|prev(?:Until|All))/,Ie=ce.expr.match.needsContext,Ue={children:!0,contents:!0,next:!0,prev:!0};ce.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<i;t++)if(ce.contains(r[t],this))return!0}));for(t=0;t<i;t++)ce.find(e,r[t],n);return n=this.pushStack(i>1?ce.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=ce(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(ce.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(p(this,e||[],!0))},filter:function(e){return this.pushStack(p(this,e||[],!1))},is:function(e){return!!p(this,"string"==typeof e&&Ie.test(e)?ce(e):e||[],!1).length},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=Ie.test(e)||"string"!=typeof e?ce(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ce.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?ce.unique(o):o)},index:function(e){return e?"string"==typeof e?ce.inArray(this[0],ce(e)):ce.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?ce(e,t):ce.makeArray(e&&e.nodeType?[e]:e),r=ce.merge(this.get(),n);return this.pushStack(ce.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ce.dir(e,"parentNode")},parentsUntil:function(e,t,n){
				return ce.dir(e, "parentNode", n)
			}, next: function(e) {
				return f(e, "nextSibling")
			}, prev: function(e) {
				return f(e, "previousSibling")
			}, nextAll: function(e) {
				return ce.dir(e, "nextSibling")
			}, prevAll: function(e) {
				return ce.dir(e, "previousSibling")
			}, nextUntil: function(e, t, n) {
				return ce.dir(e, "nextSibling", n)
			}, prevUntil: function(e, t, n) {
				return ce.dir(e, "previousSibling", n)
			}, siblings: function(e) {
				return ce.sibling((e.parentNode || {}).firstChild, e)
			}, children: function(e) {
				return ce.sibling(e.firstChild)
			}, contents: function(e) {
				return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
			}
		}, function(e, t) {
			ce.fn[e] = function(n, r) {
				var i = ce.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ce.filter(r, i)), this.length > 1 && (Ue[e] || (i = ce.unique(i)), ze.test(e) && (i = i.reverse())), this.pushStack(i)
			}
		}), ce.extend({
			filter: function(e, t, n) {
				var r = t[0];
				return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
					return 1 === e.nodeType
				}))
			},
			dir: function(e, n, r) {
				for(var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ce(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
				return i
			},
			sibling: function(e, t) {
				for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		});
		var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Qe = / jQuery\d+="(?:null|\d+)"/g,
			Ye = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
			Ge = /^\s+/,
			Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
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
			st = d(V),
			ut = st.appendChild(V.createElement("div"));
		at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ce.fn.extend({
					text: function(e) {
						return ce.access(this, function(e) {
							return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
						}, null, e, arguments.length)
					},
					append: function() {
						return this.domManip(arguments, function(e) {
							if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
								var t = h(this, e);
								t.appendChild(e)
							}
						})
					},
					prepend: function() {
						return this.domManip(arguments, function(e) {
							if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
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
						for(var n, r = e ? ce.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
						return this
					},
					empty: function() {
						for(var e, t = 0; null != (e = this[t]); t++) {
							for(1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
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
							if(e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qe, "") : t;
							if("string" == typeof e && !et.test(e) && (ce.support.htmlSerialize || !Ye.test(e)) && (ce.support.leadingWhitespace || !Ge.test(e)) && !at[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
								e = e.replace(Ve, "<$1></$2>");
								try {
									for(; r < i; r++) n = this[r] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
									n = 0
								} catch(o) {}
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
						var r, i, o, a, s, u, l = 0,
							c = this.length,
							f = this,
							p = c - 1,
							d = e[0],
							h = ce.isFunction(d);
						if(h || !(c <= 1 || "string" != typeof d || ce.support.checkClone) && nt.test(d)) return this.each(function(r) {
							var i = f.eq(r);
							h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
						});
						if(c && (u = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
							for(a = ce.map(x(u, "script"), m), o = a.length; l < c; l++) i = u, l !== p && (i = ce.clone(i, !0, !0), o && ce.merge(a, x(i, "script"))), t.call(this[l], i, l);
							if(o)
								for(s = a[a.length - 1].ownerDocument, ce.map(a, g), l = 0; l < o; l++) i = a[l], rt.test(i.type || "") && !ce._data(i, "globalEval"
									http: //common1.qyerstatic.com/place/js/common/)&&ce.contains(s,i)&&(i.src?ce._evalUrl(i.src):ce.globalEval((i.text||i.textContent||i.innerHTML||"").replace(ot,"")));u=r=null}return this}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ce.fn[e]=function(e){for(var n,r=0,i=[],o=ce(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),ce(o[r])[t](n),ie.apply(i,n.get());return this.pushStack(i)}}),ce.extend({clone:function(e,t,n){var r,i,o,a,s,u=ce.contains(e.ownerDocument,e);if(ce.support.html5Clone||ce.isXMLDoc(e)||!Ye.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(ut.innerHTML=e.outerHTML,ut.removeChild(o=ut.firstChild)),!(ce.support.noCloneEvent&&ce.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(r=x(o),s=x(e),a=0;null!=(i=s[a]);++a)r[a]&&b(i,r[a]);if(t)if(n)for(s=s||x(e),r=r||x(o),a=0;null!=(i=s[a]);a++)v(i,r[a]);else v(e,o);return r=x(o,"script"),r.length>0&&y(r,!u&&x(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,p=d(t),h=[],m=0;m<f;m++)if(o=e[m],o||0===o)if("object"===ce.type(o))ce.merge(h,o.nodeType?[o]:o);else if(Ze.test(o)){for(s=s||p.appendChild(t.createElement("div")),u=(Je.exec(o)||["",""])[1].toLowerCase(),c=at[u]||at._default,s.innerHTML=c[1]+o.replace(Ve,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!ce.support.leadingWhitespace&&Ge.test(o)&&h.push(t.createTextNode(Ge.exec(o)[0])),!ce.support.tbody)for(o="table"!==u||Ke.test(o)?"<table>"!==c[1]||Ke.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)ce.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(ce.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=p.lastChild}else h.push(t.createTextNode(o));for(s&&p.removeChild(s),ce.support.appendChecked||ce.grep(x(h,"input"),w),m=0;o=h[m++];)if((!r||ce.inArray(o,r)===-1)&&(a=ce.contains(o.ownerDocument,o),s=x(p.appendChild(o),"script"),a&&y(s),n))for(i=0;o=s[i++];)rt.test(o.type||"")&&n.push(o);return s=null,p},cleanData:function(e,t){for(var n,r,i,o,a=0,s=ce.expando,u=ce.cache,l=ce.support.deleteExpando,c=ce.event.special;null!=(n=e[a]);a++)if((t||ce.acceptData(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?ce.event.remove(n,r):ce.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l?delete n[s]:typeof n.removeAttribute!==Y?n.removeAttribute(s):n[s]=null,te.push(i))}},_evalUrl:function(e){return ce.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),ce.fn.extend({wrapAll:function(e){if(ce.isFunction(e))return this.each(function(t){ce(this).wrapAll(e.call(this,t))});if(this[0]){var t=ce(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return ce.isFunction(e)?this.each(function(t){ce(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ce(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ce.isFunction(e);return this.each(function(n){ce(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ce.nodeName(this,"body")||ce(this).replaceWith(this.childNodes)}).end()}});var lt,ct,ft,pt=/alpha\([^)]*\)/i,dt=/opacity\s*=\s*([^)]*)/,ht=/^(top|right|bottom|left)$/,mt=/^(none|table(?!-c[ea]).+)/,gt=/^margin/,yt=new RegExp("^("+fe+")(.*)$","i"),vt=new RegExp("^("+fe+")(?!px)[a-z%]+$","i"),bt=new RegExp("^([+-])=("+fe+")","i"),xt={BODY:"block"},wt={position:"absolute",visibility:"hidden",display:"block"},Tt={letterSpacing:0,fontWeight:400},_t=["Top","Right","Bottom","Left"],Ct=["Webkit","O","Moz","ms"];ce.fn.extend({css:function(e,n){return ce.access(this,function(e,n,r){var i,o,a={},s=0;if(ce.isArray(n)){for(o=ct(e),i=n.length;s<i;s++)a[n[s]]=ce.css(e,n[s],!1,o);return a}return r!==t?ce.style(e,n,r):ce.css(e,n)},e,n,arguments.length>1)},show:function(){return C(this,!0)},hide:function(){return C(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){_(this)?ce(this).show():ce(this).hide()})}}),ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ft(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ce.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=ce.camelCase(n),l=e.style;if(n=ce.cssProps[u]||(ce.cssProps[u]=T(l,u)),s=ce.cssHooks[n]||ce.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=bt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ce.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||ce.cssNumber[u]||(r+="px"),ce.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=ce.camelCase(n);return n=ce.cssProps[u]||(ce.cssProps[u]=T(e.style,u)),s=ce.cssHooks[n]||ce.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=ft(e,n,i)),"normal"===a&&n in Tt&&(a=Tt[n]),""===r||r?(o=parseFloat(a),r===!0||ce.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(ct=function(t){return e.getComputedStyle(t,null)},ft=function(e,n,r){var i,o,a,s=r||ct(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||ce.contains(e.ownerDocument,e)||(u=ce.style(e,n)),vt.test(u)&&gt.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ct=function(e){return e.currentStyle},ft=function(e,n,r){var i,o,a,s=r||ct(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),vt.test(u)&&!ht.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),ce.each(["height","width"],function(e,t){ce.cssHooks[t]={get:function(e,n,r){if(n)return 0===e.offsetWidth&&mt.test(ce.css(e,"display"))?ce.swap(e,wt,function(){return j(e,t,r)}):j(e,t,r)},set:function(e,n,r){var i=r&&ct(e);return E(e,n,r?k(e,t,r,ce.support.boxSizing&&"border-box"===ce.css(e,"boxSizing",!1,i),i):0)}}}),ce.support.opacity||(ce.cssHooks.opacity={get:function(e,t){return dt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=ce.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===ce.trim(o.replace(pt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=pt.test(o)?o.replace(pt,i):o+" "+i)}}),ce(function(){ce.support.reliableMarginRight||(ce.cssHooks.marginRight={get:function(e,t){if(t)return ce.swap(e,{display:"inline-block"},ft,[e,"marginRight"])}}),!ce.support.pixelPosition&&ce.fn.position&&ce.each(["top","left"],function(e,t){ce.cssHooks[t]={get:function(e,n){if(n)return n=ft(e,t),vt.test(n)?ce(e).position()[t]+"px":n}}})}),ce.expr&&ce.expr.filters&&(ce.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ce.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||ce.css(e,"display"))},ce.expr.filters.visible=function(e){return!ce.expr.filters.hidden(e)}),ce.each({margin:"",padding:"",border:"Width"},function(e,t){ce.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+_t[r]+t]=o[r]||o[r-2]||o[0];return i}},gt.test(e)||(ce.cssHooks[e+t].set=E)});var Et=/%20/g,kt=/\[\]$/,jt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&St.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!tt.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:ce.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(jt,"\r\n")}}):{name:t.name,value:n.replace(jt,"\r\n")}}).get()}}),ce.param=function(e,n){var r,i=[],o=function(e,t){t=ce.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=ce.ajaxSettings&&ce.ajaxSettings.traditional),ce.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){o(this.name,this.value)});else for(r in e)q(r,e[r],n,o);return i.join("&").replace(Et,"+")},ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ce.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ce.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var qt,Dt,At=ce.now(),Lt=/\?/,Ht=/#.*$/,Mt=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rt=/^(?:GET|HEAD)$/,Bt=/^\/\//,Pt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,$t=ce.fn.load,Wt={},zt={},It="*/".concat("*");try{Dt=G.href}catch(Ut){Dt=V.createElement("a"),Dt.href="",Dt=Dt.href}qt=Pt.exec(Dt.toLowerCase())||[],ce.fn.load=function(e,n,r){if("string"!=typeof e&&$t)return $t.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),ce.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&ce.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?ce("<div>").append(ce.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dt,type:"GET",isLocal:Ft.test(qt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ce.parseJSON,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?L(L(e,ce.ajaxSettings),t):L(ce.ajaxSettings,e)},ajaxPrefilter:D(Wt),ajaxTransport:D(zt),ajax:function(n,r){function i(n,r,i,o){var a,p,b,x,T,C=r;2!==w&&(w=2,l&&clearTimeout(l),f=t,u=o||"",_.readyState=n>0?4:0,a=n>=200&&n<300||304===n,i&&(x=H(d,_,i)),x=M(d,x,_,a),a?(d.ifModified&&(T=_.getResponseHeader("Last-Modified"),T&&(ce.lastModified[s]=T),T=_.getResponseHeader("etag"),T&&(ce.etag[s]=T)),204===n||"HEAD"http://common1.qyerstatic.com/place/js/common/===d.type?C="nocontent":304===n?C="notmodified":(C=x.state,p=x.data,b=x.error,a=!b)):(b=C,!n&&C||(C="error",n<0&&(n=0))),_.status=n,_.statusText=(r||C)+"",a?(e.qyerUtil&&"function"==typeof e.qyerUtil.ajaxFillter&&e.qyerUtil.ajaxFillter(p,C,_),g.resolveWith(h,[p,C,_])):g.rejectWith(h,[_,C,b]),_.statusCode(v),v=t,c&&m.trigger(a?"ajaxSuccess":"ajaxError",[_,d,a?p:b]),y.fireWith(h,[_,C]),c&&(m.trigger("ajaxComplete",[_,d]),--ce.active||ce.event.trigger("ajaxStop")))}"object"==typeof n&&(r=n,n=t),r=r||{};var o,a,s,u,l,c,f,p,d=ce.ajaxSetup({},r),h=d.context||d,m=d.context&&(h.nodeType||h.jquery)?ce(h):ce.event,g=ce.Deferred(),y=ce.Callbacks("once memory"),v=d.statusCode||{},b={},x={},w=0,T="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!p)for(p={};t=Ot.exec(u);)p[t[1].toLowerCase()]=t[2];t=p[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?u:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=x[n]=x[n]||e,b[e]=t),this},overrideMimeType:function(e){return w||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)v[t]=[v[t],e[t]];else _.always(e[_.status]);return this},abort:function(e){var t=e||T;return f&&f.abort(t),i(0,t),this}};if(g.promise(_).complete=y.add,_.success=_.done,_.error=_.fail,d.url=((n||d.url||Dt)+"").replace(Ht,"").replace(Bt,qt[1]+"//"),d.type=r.method||r.type||d.method||d.type,d.dataTypes=ce.trim(d.dataType||"*").toLowerCase().match(pe)||[""],null==d.crossDomain&&(o=Pt.exec(d.url.toLowerCase()),d.crossDomain=!(!o||o[1]===qt[1]&&o[2]===qt[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(qt[3]||("http:"===qt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ce.param(d.data,d.traditional)),A(Wt,d,r,_),2===w)return _;c=d.global,c&&0===ce.active++&&ce.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Rt.test(d.type),s=d.url,d.hasContent||(d.data&&(s=d.url+=(Lt.test(s)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=Mt.test(s)?s.replace(Mt,"$1_="+At++):s+(Lt.test(s)?"&":"?")+"_="+At++)),d.ifModified&&(ce.lastModified[s]&&_.setRequestHeader("If-Modified-Since",ce.lastModified[s]),ce.etag[s]&&_.setRequestHeader("If-None-Match",ce.etag[s])),(d.data&&d.hasContent&&d.contentType!==!1||r.contentType)&&_.setRequestHeader("Content-Type",d.contentType),_.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+It+"; q=0.01":""):d.accepts["*"]);for(a in d.headers)_.setRequestHeader(a,d.headers[a]);if(d.beforeSend&&(d.beforeSend.call(h,_,d)===!1||2===w))return _.abort();T="abort";for(a in{success:1,error:1,complete:1})_[a](d[a]);if(f=A(zt,d,r,_)){_.readyState=1,c&&m.trigger("ajaxSend",[_,d]),d.async&&d.timeout>0&&(l=setTimeout(function(){_.abort("timeout")},d.timeout));try{w=1,f.send(b,i)}catch(C){if(!(w<2))throw C;i(-1,C)}}else i(-1,"No Transport");return _},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,n){return ce.get(e,t,n,"script")}}),ce.each(["get","post"],function(e,n){ce[n]=function(e,r,i,o){return ce.isFunction(r)&&(o=o||i,i=r,r=t),ce.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),ce.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||ce("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xt=[],Qt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||ce.expando+"_"+At++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Qt.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(n.data)&&"data");if(u||"jsonp"===n.dataTypes[0])return o=n.jsonpCallback=ce.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Qt,"$1"+o):n.jsonp!==!1&&(n.url+=(Lt.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||ce.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xt.push(o)),s&&ce.isFunction(a)&&a(s[0]),s=a=t}),"script"});var Yt,Gt,Vt=0,Jt=e.ActiveXObject&&function(){var e;for(e in Yt)Yt[e](t,!0)};ce.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&O()||F()}:O,Gt=ce.ajaxSettings.xhr(),ce.support.cors=!!Gt&&"withCredentials"in Gt,Gt=ce.support.ajax=!!Gt,Gt&&ce.ajaxTransport(function(n){if(!n.crossDomain||ce.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=ce.noop,Jt&&delete Yt[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(f.text=u.responseText);try{c=u.statusText}catch(p){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(d){i||o(-1,d)}f&&o(s,c,f,l)},n.async?4===u.readyState?setTimeout(r):(a=++Vt,Jt&&(Yt||(Yt={},ce(e).unload(Jt)),Yt[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Kt,Zt,en=/^(?:toggle|show|hide)$/,tn=new RegExp("^(?:([+-])=|)("+fe+")([a-z%]*)$","i"),nn=/queueHooks$/,rn=[W],on={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=tn.exec(t),o=i&&i[3]||(ce.cssNumber[e]?"":"px"),a=(ce.cssNumber[e]||"px"!==o&&+r)&&tn.exec(ce.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ce.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ce.Animation=ce.extend(P,{tweener:function(e,t){ce.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],on[n]=on[n]||[],on[n].unshift(t)},prefilter:function(e,t){t?rn.unshift(e):rn.push(e)}}),ce.Tween=z,z.prototype={constructor:z,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function(e){var t,n=z.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ce.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ce.cssProps[e.prop]]||ce.cssHooks[e.prop])?ce.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.each(["toggle","show","hide"],function(e,t){var n=ce.fn[t];ce.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(_).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ce.isEmptyObject(e),o=ce.speed(t,n,r),a=function(){var t=P(this,ce.extend({},e),o);(i||ce._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=ce.timers,a=ce._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&nn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));!t&&r||ce.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ce._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ce.timers,a=r?r.length:0;for(n.finish=!0,ce.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ce.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ce.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||ce.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ce.isFunction(t)&&t};return r.duration=ce.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ce.fx.speeds?ce.fx.speeds[r.duration]:ce.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){ce.isFunction(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ce.timers=[],ce.fx=z.prototype.init,ce.fx.tick=function(){var e,n=ce.timers,r=0;for(Kt=ce.now();r<n.length;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||ce.fx.stop(),Kt=t},ce.fx.timer=function(e){e()&&ce.timers.push(e)&&ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){Zt||(Zt=setInterval(ce.fx.tick,ce.fx.interval))},ce.fx.stop=function(){clearInterval(Zt),Zt=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fx.step={},ce.expr&&ce.expr.filters&&(ce.expr.filters.animated=function(e){return ce.grep(ce.timers,function(t){return e===t.elem}).length}),ce.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){ce.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,ce.contains(n,o)?(typeof o.getBoundingClientRect!==Y&&(i=o.getBoundingClientRect()),r=U(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},ce.offset={setOffset:function(e,t,n){var r=ce.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=ce(e),s=a.offset(),u=ce.css(e,"top"),l=ce.css(e,"left"),c=("absolute"===r||"fixed"===r)&&ce.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),ce.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},ce.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===ce.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ce.nodeName(e[0],"html")||(n=e.offset()),n.top+=ce.css(e[0],"borderTopWidth",!0),n.left+=ce.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ce.css(r,"marginTop",!0),left:t.left-n.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||J;e&&!ce.nodeName(e,"html")&&"static"===ce.css(e,"position");)e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);ce.fn[e]=function(i){return ce.access(this,function(e,i,o){var a=U(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:void(a?a.scrollTo(r?ce(a).scrollLeft():o,r?o:ce(a).scrollTop()):e[i]=o)},e,i,arguments.length,null)}}),ce.each({Height:"height",Width:"width"},function(e,n){ce.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){ce.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return ce.access(this,function(n,r,i){var o;return ce.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?ce.css(n,r,s):ce.style(n,r,i,s)},n,a?i:t,a,null)}})}),ce.fn.size=function(){return this.length},ce.fn.andSelf=ce.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=ce:(e.jQuery=e.$=ce,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce}))}(window);var requirejs,require,define;!function(ca){function G(e){return"[object Function]"===M.call(e)}function H(e){return"[object Array]"===M.call(e)}function v(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function U(e,t){if(e){var n;for(n=e.length-1;-1<n&&(!e[n]||!t(e[n],n,e));n-=1);}}function s(e,t){return ga.call(e,t)}function j(e,t){return s(e,t)&&e[t]}function B(e,t){for(var n in e)if(s(e,n)&&t(e[n],n))break}function V(e,t,n,r){return t&&B(t,function(t,i){!n&&s(e,i)||(!r||"object"!=typeof t||!t||H(t)||G(t)||t instanceof RegExp?e[i]=t:(e[i]||(e[i]={}),V(e[i],t,n,r)))}),e}function t(e,t){return function(){return t.apply(e,arguments)}}function da(e){throw e}function ea(e){if(!e)return e;var t=ca;return v(e.split("."),function(e){t=t[e]}),t}function C(e,t,n,r){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=r,n&&(t.originalError=n),t}function ha(e){function n(e,t,n){var r,i,o,a,s,u,l,c=t&&t.split("/");i=c;var f=k.map,p=f&&f["*"];if(e&&"."===e.charAt(0))if(t){for(i=c.slice(0,c.length-1),e=e.split("/"),t=e.length-1,k.nodeIdCompat&&R.test(e[t])&&(e[t]=e[t].replace(R,"")),i=e=i.concat(e),a=i.length,t=0;t<a;t++)if(o=i[t],"."===o)i.splice(t,1),t-=1;else if(".."===o){if(1===t&&(".."===i[2]||".."===i[0]))break;0<t&&(i.splice(t-1,2),t-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if(n&&f&&(c||p)){i=e.split("/"),t=i.length;e:for(;0<t;t-=1){if(a=i.slice(0,t).join("/"),c)for(o=c.length;0<o;o-=1)if((n=j(f,c.slice(0,o).join("/")))&&(n=j(n,a))){r=n,s=t;break e}!u&&p&&j(p,a)&&(u=j(p,a),l=t)}!r&&u&&(r=u,s=l),r&&(i.splice(0,s,r),e=i.join("/"))}return(r=j(k.pkgs,e))?r:e}function r(e){z&&v(document.getElementsByTagName("script"),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===T.contextName)return t.parentNode.removeChild(t),!0})}function i(e){var t=j(k.paths,e);if(t&&H(t)&&1<t.length)return t.shift(),T.require.undef(e),T.require([e]),!0}function o(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a(e,t,r,i){var a,s,u=null,l=t?t.name:null,c=e,f=!0,p="";return e||(f=!1,e="_@r"+($+=1)),e=o(e),u=e[0],
									e = e[1], u && (u = n(u, l, i), s = j(L, u)), e && (u ? p = s && s.normalize ? s.normalize(e, function(e) {
										return n(e, l, i)
									}) : n(e, l, i) : (p = n(e, l, i), e = o(p), u = e[0], p = e[1], r = !0, a = T.nameToUrl(p))), r = !u || s || r ? "" : "_unnormalized" + (W += 1), {
										prefix: u,
										name: p,
										parentMap: t,
										unnormalized: !!r,
										url: a,
										originalName: c,
										isDefine: f,
										id: (u ? u + "!" + p : p) + r
									}
								}

							function u(e) {
								var t = e.id,
									n = j(N, t);
								return n || (n = N[t] = new T.Module(e)), n
							}

							function l(e, t, n) {
								var r = e.id,
									i = j(N, r);
								!s(L, r) || i && !i.defineEmitComplete ? (i = u(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(L[r])
							}

							function c(e, t) {
								var n = e.requireModules,
									r = !1;
								t ? t(e) : (v(n, function(t) {
									(t = j(N, t)) && (t.error = e, t.events.error && (r = !0, t.emit("error", e)))
								}), r || h.onError(e))
							}

							function f() {
								S.length && (ia.apply(A, [A.length, 0].concat(S)), S = [])
							}

							function p(e) {
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
								var e, t, n = (e = 1e3 * k.waitSeconds) && T.startTime + e < (new Date).getTime(),
									o = [],
									a = [],
									s = !1,
									u = !0;
								if(!x) {
									if(x = !0, B(q, function(e) {
											var l = e.map,
												c = l.id;
											if(e.enabled && (l.isDefine || a.push(e), !e.error))
												if(!e.inited && n) i(c) ? s = t = !0 : (o.push(c), r(c));
												else if(!e.inited && e.fetched && l.isDefine && (s = !0, !l.prefix)) return u = !1
										}), n && o.length) return e = C("timeout", "Load timeout for modules: " + o, null, o), e.contextName = T.contextName, c(e);
									u && v(a, function(e) {
										d(e, {}, {})
									}), n && !t || !s || !z && !fa || E || (E = setTimeout(function() {
										E = 0, m()
									}, 50)), x = !1
								}
							}

							function g(e) {
								s(L, e[0]) || u(a(e[0], null, !0)).init(e[1], e[2])
							}

							function y(e) {
								var e = e.currentTarget || e.srcElement,
									t = T.onScriptLoad;
								return e.detachEvent && !Z ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = T.onScriptError, (!e.detachEvent || Z) && e.removeEventListener("error", t, !1), {
									node: e,
									id: e && e.getAttribute("data-requiremodule")
								}
							}

							function b() {
								var e;
								for(f(); A.length;) {
									if(e = A.shift(), null === e[0]) return c(C("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
									g(e)
								}
							}
							var x, w, T, _, E, k = {
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
								D = {},
								A = [],
								L = {},
								M = {},
								F = {},
								$ = 1,
								W = 1;
							return _ = {
								require: function(e) {
									return e.require ? e.require : e.require = T.makeRequire(e.map)
								},
								exports: function(e) {
									if(e.usingExports = !0, e.map.isDefine) return e.exports ? L[e.map.id] = e.exports : e.exports = L[e.map.id] = {}
								},
								module: function(e) {
									return e.module ? e.module : e.module = {
										id: e.map.id,
										uri: e.map.url,
										config: function() {
											return j(k.config, e.map.id) || {}
										},
										exports: e.exports || (e.exports = {})
									}
								}
							}, w = function(e) {
								this.events = j(D, e.id) || {}, this.map = e, this.shim = j(k.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
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
									if(!this.fetched) {
										this.fetched = !0, T.startTime = (new Date).getTime();
										var e = this.map;
										if(!this.shim) return e.prefix ? this.callPlugin() : this.load();
										T.makeRequire(this.map, {
											enableBuildCallback: !0
										})(this.shim.deps || [], t(this, function() {
											return e.prefix ? this.callPlugin() : this.load()
										}))
									}
								},
								load: function() {
									var e = this.map.url;
									M[e] || (M[e] = !0, T.load(this.map.id, e))
								},
								check: function() {
									if(this.enabled && !this.enabling) {
										var e, t, n = this.map.id;
										t = this.depExports;
										var r = this.exports,
											i = this.factory;
										if(this.inited) {
											if(this.error) this.emit("error", this.error);
											else if(!this.defining) {
												if(this.defining = !0, 1 > this.depCount && !this.defined) {
													if(G(i)) {
														if(this.events.error && this.map.isDefine || h.onError !== da) try {
															r = T.execCb(n, i, t, r)
														} catch(o) {
															e = o
														} else r = T.execCb(n, i, t, r);
														if(this.map.isDefine && void 0 === r && ((t = this.module) ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
													} else r = i;
													this.exports = r, this.map.isDefine && !this.ignore && (L[n] = r, h.onResourceLoad) && h.onResourceLoad(T, this.map, this.depMaps), p(n), this.defined = !0
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
									this.depMaps.push(i), l(i, "defined", t(this, function(i) {
										var o, f;
										f = j(F, this.map.id);
										var d = this.map.name,
											m = this.map.parentMap ? this.map.parentMap.name : null,
											g = T.makeRequire(e.parentMap, {
												enableBuildCallback: !0
											});
										this.map.unnormalized ? (i.normalize && (d = i.normalize(d, function(e) {
											return n(e, m, !0)
										}) || ""), i = a(e.prefix + "!" + d, this.map.parentMap), l(i, "defined", t(this, function(e) {
											this.init([], function() {
												return e
											}, null, {
												enabled: !0,
												ignore: !0
											})
										})), (f = j(N, i.id)) && (this.depMaps.push(i), this.events.error && f.on("error", t(this, function(e) {
											this.emit("error", e)
										})), f.enable())) : f ? (this.map.url = T.nameToUrl(f), this.load()) : (o = t(this, function(e) {
											this.init([], function() {
												return e
											}, null, {
												enabled: !0
											})
										}), o.error = t(this, function(e) {
											this.inited = !0, this.error = e, e.requireModules = [r], B(N, function(e) {
												0 === e.map.id.indexOf(r + "_unnormalized") && p(e.map.id)
											}), c(e)
										}), o.fromText = t(this, function(t, n) {
											var i = e.name,
												l = a(i),
												f = O;
											n && (t = n), f && (O = !1), u(l), s(k.config, r) && (k.config[i] = k.config[r]);
											try {
												h.exec(t)
											} catch(p) {
												return c(C("fromtexteval", "fromText eval for " + r + " failed: " + p, p, [r]))
											}
											f && (O = !0), this.depMaps.push(l), T.completeLoad(i), g([i], o)
										}), i.load(e.name, g, o, k))
									})), T.enable(i, this), this.pluginMaps[i.id] = i
								},
								enable: function() {
									q[this.map.id] = this, this.enabling = this.enabled = !0, v(this.depMaps, t(this, function(e, n) {
										var r, i;
										if("string" == typeof e) {
											if(e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[n] = e, r = j(_, e.id)) return void(this.depExports[n] = r(this));
											this.depCount += 1, l(e, "defined", t(this, function(e) {
												this.defineDep(n, e), this.check()
											})), this.errback && l(e, "error", t(this, this.errback))
										}
										r = e.id, i = N[r], !s(_, r) && i && !i.enabled && T.enable(e, this)
									})), B(this.pluginMaps, t(this, function(e) {
										var t = j(N, e.id);
										t && !t.enabled && T.enable(e, this)
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
							}, T = {
								config: k,
								contextName: e,
								registry: N,
								defined: L,
								urlFetched: M,
								defQueue: A,
								Module: w,
								makeModuleMap: a,
								nextTick: h.nextTick,
								onError: c,
								configure: function(e) {
									e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
									var t = k.shim,
										n = {
											paths: !0,
											bundles: !0,
											config: !0,
											map: !0
										};
									B(e, function(e, t) {
										n[t] ? (k[t] || (k[t] = {}), V(k[t], e, !0, !0)) : k[t] = e
									}), e.bundles && B(e.bundles, function(e, t) {
										v(e, function(e) {
											e !== t && (F[e] = t)
										})
									}), e.shim && (B(e.shim, function(e, n) {
										H(e) && (e = {
											deps: e
										}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = T.makeShimExports(e)), t[n] = e
									}), k.shim = t), e.packages && v(e.packages, function(e) {
										var t, e = "string" == typeof e ? {
											name: e
										} : e;
										t = e.name, e.location && (k.paths[t] = e.location), k.pkgs[t] = e.name + "/" + (e.main || "main").replace(ja, "").replace(R, "")
									}), B(N, function(e, t) {
										!e.inited && !e.map.unnormalized && (e.map = a(t))
									}), (e.deps || e.callback) && T.require(e.deps || [], e.callback)
								},
								makeShimExports: function(e) {
									return function() {
										var t;
										return e.init && (t = e.init.apply(ca, arguments)), t || e.exports && ea(e.exports)
									}
								},
								makeRequire: function(t, i) {
									function o(n, r, l) {
										var f, p;
										return i.enableBuildCallback && r && G(r) && (r.__requireJsBuild = !0), "string" == typeof n ? G(r) ? c(C("requireargs", "Invalid require call"), l) : t && s(_, n) ? _[n](N[t.id]) : h.get ? h.get(T, n, t, o) : (f = a(n, t, !1, !0), f = f.id, s(L, f) ? L[f] : c(C("notloaded", 'Module name "' + f + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (b(), T.nextTick(function() {
											b(), p = u(a(null, t)), p.skipMap = i.skipMap, p.init(n, r, l, {
												enabled: !0
											}), m()
										}), o)
									}
									return i = i || {}, V(o, {
										isBrowser: z,
										toUrl: function(e) {
											var r, i = e.lastIndexOf("."),
												o = e.split("/")[0];
											return -1 !== i && ("." !== o && ".." !== o || 1 < i) && (r = e.substring(i, e.length), e = e.substring(0, i)), T.nameToUrl(n(e, t && t.id, !0), r, !0)
										},
										defined: function(e) {
											return s(L, a(e, t, !1, !0).id)
										},
										specified: function(e) {
											return e = a(e, t, !1, !0).id, s(L, e) || s(N, e)
										}
									}), t || (o.undef = function(e) {
										f();
										var n = a(e, t, !0),
											i = j(N, e);
										r(e), delete L[e], delete M[n.url], delete D[e], U(A, function(t, n) {
											t[0] === e && A.splice(n, 1)
										}), i && (i.events.defined && (D[e] = i.events), p(e))
									}), o
								},
								enable: function(e) {
									j(N, e.id) && u(e).enable()
								},
								completeLoad: function(e) {
									var t, n, r = j(k.shim, e) || {},
										o = r.exports;
									for(f(); A.length;) {
										if(n = A.shift(), null === n[0]) {
											if(n[0] = e, t) break;
											t = !0
										} else n[0] === e && (t = !0);
										g(n)
									}
									if(n = j(N, e), !t && !s(L, e) && n && !n.inited) {
										if(k.enforceDefine && (!o || !ea(o))) return i(e) ? void 0 : c(C("nodefine", "No define call for " + e, null, [e]));
										g([e, r.deps || [], r.exportsFn])
									}
									m()
								},
								nameToUrl: function(e, t, n) {
									var r, i, o;
									if((r = j(k.pkgs, e)) && (e = r), r = j(F, e)) return T.nameToUrl(r, t, n);
									if(h.jsExtRegExp.test(e)) r = e + (t || "");
									else {
										for(r = k.paths, e = e.split("/"), i = e.length; 0 < i; i -= 1)
											if(o = e.slice(0, i).join("/"), o = j(r, o)) {
												H(o) && (o = o[0]), e.splice(0, i, o);
												break
											}
										r = e.join("/"), r += t || (/^data\:|\?/.test(r) || n ? "" : ".js"), r = ("/" === r.charAt(0) || r.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + r
									}
									return k.urlArgs ? r + ((-1 === r.indexOf("?") ? "?" : "&") + k.urlArgs) : r
								},
								load: function(e, t) {
									h.load(T, e, t)
								},
								execCb: function(e, t, n, r) {
									return t.apply(r, n)
								},
								onScriptLoad: function(e) {
									("load" === e.type || ka.test((e.currentTarget || e.srcElement).readyState)) && (P = null, e = y(e), T.completeLoad(e.id))
								},
								onScriptError: function(e) {
									var t = y(e);
									if(!i(t.id)) return c(C("scripterror", "Script error for: " + t.id, e, [t.id]))
								}
							}, T.require = T.makeRequire(), T
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
						if("undefined" == typeof define) {
							if("undefined" != typeof requirejs) {
								if(G(requirejs)) return;
								r = requirejs, requirejs = void 0
							}
							"undefined" != typeof require && !G(require) && (r = require, require = void 0), h = requirejs = function(e, t, n, r) {
								var i, o = "_";
								return !H(e) && "string" != typeof e && (i = e, H(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (o = i.context), (r = j(F, o)) || (r = F[o] = h.s.newContext(o)), i && r.configure(i), r.require(e, t, n)
							}, h.config = function(e) {
								return h(e)
							}, h.nextTick = "undefined" != typeof setTimeout ? function(e) {
								setTimeout(e, 4)
							} : function(e) {
								e()
							}, require || (require = h), h.version = "http://common1.qyerstatic.com/place/js/common/2.1.11", h.jsExtRegExp = /^\/|:|\?|\.js$/, h.isBrowser = z, x = h.s = {
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
								if(z) return r = h.createNode(r, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code") || Z ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (O = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, L = r, D ? y.insertBefore(r, D) : y.appendChild(r), L = null, r;
								if(fa) try {
									importScripts(n), e.completeLoad(t)
								} catch(i) {
									e.onError(C("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
								}
							}, z && !r.skipDataMain && U(document.getElementsByTagName("script"), function(e) {
								if(y || (y = e.parentNode), K = e.getAttribute("data-main")) return q = K, r.baseUrl || (E = q.split("/"), q = E.pop(), Q = E.length ? E.join("/") + "/" : "./", r.baseUrl = Q), q = q.replace(R, ""), h.jsExtRegExp.test(q) && (q = K), r.deps = r.deps ? r.deps.concat(q) : [q], !0
							}), define = function(e, t, n) {
								var r, i;
								"string" != typeof e && (n = t, t = e, e = null), H(t) || (n = t, t = null), !t && G(n) && (t = [], n.length && (n.toString().replace(la, "").replace(ma, function(e, n) {
									t.push(n)
								}), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), O && ((r = L) || (P && "interactive" === P.readyState || U(document.getElementsByTagName("script"), function(e) {
									if("interactive" === e.readyState) return P = e
								}), r = P), r && (e || (e = r.getAttribute("data-requiremodule")), i = F[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : S).push([e, t, n])
							}, define.amd = {
								jQuery: !0
							}, h.exec = function(b) {
								return eval(b)
							}, h(r)
						}
					}(this),
					window.QYER || (window.QYER = {
						uid: 0
					}),
					! function() {
						var e = jQuery;
						define.amd = !1, requirejs.config({
							urlArgs: "v=" + window.__qRequire__.version,
							baseUrl: "//common1.qyerstatic.com/place",
							map: {
								"*": {
									css: "common/basic/js/require-css",
									text: "common/basic/js/text"
								}
							},
							paths: {
								template: "common/basic/js/template-native",
								jquery: "http://common1.qyerstatic.com/place/js/common/common/basic/js/jquery-1.10.2.min",
								web_ct_footprint: "bower_components/web_ct_footprint/footprint",
								web_ct_footprint_comment: "bower_components/web_ct_footprint/comment",
								web_ct_footprint_fpTpl: "bower_components/web_ct_footprint/fpTpl",
								web_ct_footprint_commentTpl: "bower_components/web_ct_footprint/commentTpl",
								web_ct_footprint_poiType: "bower_components/web_ct_footprint/poiType",
								web_ct_footprint_sourceType: "bower_components/web_ct_footprint/sourceType",
								web_old_select: "bower_components/web_old_select/select",
								web_old_popup: "bower_components/web_old_popup/popup",
								web_old_popup2: "bower_components/web_old_popup2/popup2",
								web_old_tip: "bower_components/web_old_tip/tip",
								web_ct_logindialog: "bower_components/web_ct_logindialog/loginDialog",
								web_qui_quiupload: "bower_components/web_qui_quiupload/QuiUpload",
								web_qui_quiupload_qiniu: "bower_components/web_qui_quiupload/qiniu",
								plupload: "http://common1.qyerstatic.com/place/js/common/bower_components/web_qui_quiupload/lib/plupload/plupload.full.min"
							}
						}), ! function() {
							window.qyerUtil = {
								init: function() {
									window.QYER && window.QYER.frameVersion > 1 && (this._initHead(), this.spam_text_filter(), this.includeGA(), this.frameCompatibleh())
								},
								frameCompatibleh: function() {
									window._qyer_userid = window.QYER.uid, window.setCookie = this.setCookie, window.getCookie = this.getCookie, window._gaq = window._gaq || []
								},
								includeGA: function() {
									window._gaq = window._gaq || [], window._gaq.push(["_setAccount", "UA-185023-1"], ["_setDomainName", "http://common1.qyerstatic.com/place/js/common/qyer.com"], ["_setSiteSpeedSampleRate", 10], ["_addIgnoredRef", "http://common1.qyerstatic.com/place/js/common/qyer.com"], ["_addOrganic", "soso", "w"], ["_addOrganic", "sogou", "query"], ["_addOrganic", "baidu", "word"], ["_addOrganic", "baidu", "q1"], ["_addOrganic", "baidu", "q2"], ["_addOrganic", "m.baidu", "word"], ["_addOrganic", "http://common1.qyerstatic.com/place/js/common/so.360", "q"], ["_addOrganic", "so", "q"], ["_addOrganic", "baidu", "w"], ["_addOrganic", "http://common1.qyerstatic.com/place/js/common/cn.bing", "q"], ["_addOrganic", "sm", "q"], ["_trackPageview"]), requirejs("https:" == document.location.protocol ? ["../js/ga.js"] : ["../js/base_beacon_ga-1.js" /*tpa=../js/base_beacon_ga.js*/ ])
								},
								setCookie: function(e, t, n) {
									var r = 365,
										i = new Date;
									arguments[2] || (n = 1), 1 == n ? (i.setTime(i.getTime() + 24 * r * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com;expires=" + i.toGMTString()) : document.cookie = e + "=" + escape(t) + "; path=/;domain=.qyer.com", r = i = null
								},
								getCookie: function(e) {
									var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
									return null != t ? unescape(t[2]) : null
								},
								_initHead: function() {
									"http://common1.qyerstatic.com/place/js/common/ask.qyer.com" == window.location.hostname && e(".qyer_header_bg").css("position", "fixed")
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
									for(var n = [], r = t; r < e.length; r++) n.push(e[r]);
									return n
								},
								isMobile: function() {
									var e = navigator.userAgent;
									return e.match(/Android/i) || e.indexOf("iPhone") != -1 || e.indexOf("iPad") != -1
								},
								getWordLen: function(t, n) {
									function r(e) {
										if("undefined" == typeof e) return 0;
										var t = e.match(/[^\x00-\x80]/g);
										return e.length + (t ? t.length : 0)
									}

									function i(e) {
										return e.replace(/[^\x00-\xff]/g, "*")
									}
									return n && (t = i(t)), r(e.trim(t))
								},
								subStr: function(e, t) {
									for(var n, r, i = 0, o = 0; o < e.length; o++)
										if(n = e.charAt(o), i += encodeURI(n).length > 2 ? 1 : .5, i >= t) return r = i == t ? o + 1 : o, e.substr(0, r);
									return e
								},
								doTrackCode: function(t) {
									var n = "__dotarckcodebutton__";
									document.getElementById(n) || e('<button id="' + n + '" style="display:none;">dotarckcodebutton</button>').appendTo(document.body), e("#" + n).attr("data-bn-ipg", t).trigger("click"), n = null
								},
								ajaxFillter: function(e, t, n) {
									if(0 != window.location.href.indexOf("http://plan.qyer.com/") && "object" == typeof e && e.extra && e.extra.code) switch(0 | e.extra.code) {
										case 1:
											window.qyerUtil.showAntiSpam(e.extra.msg)
									}
								},
								showAntiSpam: function(e) {
									requirejs(["common/component/antiSpam/antiSpam"], function(t) {
										t.show(e)
									})
								},
								doAjax: function(t) {
									var n, r, i;
									if(n = t.minResponseTime ? new Date : null, i = function(e) {
											if("undefined" == typeof e.error_code) try {
												e.error_code = e.error, e.result = e.result, 0 != e.error_code && (e.data = e.data || {}, e.data.msg = e.msg)
											} catch(n) {}
											0 == e.error_code ? ("undefined" == typeof e.data && (e.data = t.__defaultData__), t.onCallSuccessBefore && t.onCallSuccessBefore(e), t.onSuccess && t.onSuccess(e), t.onCallSuccessAfter && t.onCallSuccessAfter(e)) : t.onError && t.onError(e)
										}, t.testData) return "undefined" == typeof t.testData.data && (t.testData.data = t.__defaultData__), void setTimeout(function() {
										i(t.testData)
									}, t.minResponseTime || 200);
									var o = window.location.host,
										a = t.url || t.posturl,
										s = t.data,
										u = "json";
									if(/static.qyer.com/.test(o) === !0) {
										var l;
										s = e.extend({}, s, {
											__qFED__: t.__qFED__
										}), t.__qFED__ && t.__qFED__.id && (l = t.__qFED__.id, t.type = "GET"), a = "http://fe.2b6.me:3000/service/api/" + l, u = "jsonp", api = null
									}
									var c = e.ajax({
										type: t.type || "POST",
										url: a,
										dataType: u,
										data: s,
										cache: t.cache || !1,
										success: function(e) {
											n ? (r = new Date - n, setTimeout(function() {
												i.call(null, e)
											}, r > t.minResponseTime ? 0 : t.minResponseTime - r)) : i.call(null, e), n = r = null
										},
										error: function(e, n) {
											t.onError && t.onError({
												error_code: -1,
												__server_error__: !0,
												__server_status__: c.statusText,
												result: "error",
												data: {
													msg: n || {}
												}
											})
										}
									});
									return c
								},
								runOneInPeriodOfTime: function(e, t) {
									var n;
									return function(r, i, o, a, s) {
										window.clearTimeout(n), n = window.setTimeout(function() {
											e(r, i, o, a, s)
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
									var n, r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
									if(t) {
										var i = t.indexOf("?");
										i != -1 && (n = t.substr(t.indexOf("?") + 1))
									} else n = window.location.search.substr(1);
									if(!n) return null;
									var o = n.match(r);
									return null != o ? unescape(o[2]) : null
								},
								spam_text_filter: function() {
									var t, n, r, i, o;
									t = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim, o = e(".qyer_spam_text_filter"), o.find("a").each(function() {
										n = e(this), (n.html() + n.attr("href")).indexOf("http://common1.qyerstatic.com/place/js/common/mafengwo.cn") == -1 && (n.html() + n.attr("href")).indexOf("http://common1.qyerstatic.com/place/js/common/mafengwo.com") == -1 && (n.html() + n.attr("href")).indexOf("http://common1.qyerstatic.com/place/js/common/mafengwo.net") == -1 || n.replaceWith(e(this).html())
									}), o.each(function() {
										if(n = e(this), r = n.html().replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim, ""), i = r.match(/\<img[\s\S]*?\>/gim), null != i)
											for(var o = 0; o < i.length; o++) r = r.replace(i[o], "[imgimg]" + o + "[/imgimg]");
										if(r = r.replace(t, ""), null != i)
											for(var o = 0; o < i.length; o++) r = r.replace("[imgimg]" + o + "[/imgimg]", i[o]);
										n.html(r)
									}), t = n = r = i = o = null
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
									return e < 10 ? "0" + e : e.toString()
								},
								qToHTML: function() {
									return this.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/\n/gi, "<br />").replace(/\t/gi, "&nbsp;&nbsp;&nbsp;&nbsp;")
								}
							})
						}()
					}(),
					$(function() {
						function e(e, t, n, r, i, o, a) {
							if(qyerUtil.isLogin()) return !1;
							var s = "reg" === i ? "regist" : "login";
							pageType = "", redirectURL = o || window.location.href, r = "function" == typeof r ? r : function() {}, allowClose = !0, qyerUtil.doLogin({
								page: s,
								pageType: pageType,
								redirectURL: redirectURL,
								callback: r
							})
						}

						function t(t) {
							function n(e, t, n) {
								t ? (requirejs(["common/ui/tip/tip"], function(e) {
									e.tip({
										text: "成功取消关注"
									})
								}), n.attr("data-bn-ipg", "usercenter-follow"), "取消关注" != $.trim(n.text()) && "已关注" != $.trim(n.text()) && "互相关注" != $.trim(n.text()) || n.text("关注")) : (requirejs(["common/ui/tip/tip"], function(e) {
									e.tip({
										text: "成功关注"
									})
								}), n.attr("data-bn-ipg", "usercenter-unfollow"), "关注" == $.trim(n.text()) && n.text("已关注")), n.attr("data-relate", t), "1" == e ? n.hasClass("ui_attent_btn_each") ? (n.removeClass("ui_attent_btn_each"), n.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_each")) : (n.addClass("ui_attent_btn_each"), n.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_each")) : n.hasClass("ui_attent_btn_yes") ? (n.removeClass("ui_attent_btn_yes"), n.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").removeClass("ui_attent_btn_yes")) : (n.addClass("ui_attent_btn_yes"), n.hasClass("_js_index_switch_do") && jQuery("._js_index_switch_do").addClass("ui_attent_btn_yes"))
							}
							if(QYER.uid <= 0) return e(), !1;
							var r = t.attr("data-uid"),
								i = t.attr("data-relate"),
								o = t.attr("data-each"),
								a = "";
							a = 1 == i ? "action=addfriend&fuid=" + r : "action=channelfriend&uid=" + r;
							var s = "http://common1.qyerstatic.com/public.php";
							/^http:\/\/bbs\.qyer\.com\//.test(window.location.href) && (s = "http://common1.qyerstatic.com/bbsajax.php"), jQuery.ajax({
								type: "POST",
								url: s,
								data: a,
								dataType: "json",
								beforeSend: function(e) {},
								success: function(e) {
									"ok" == e.result ? (i = 0 == i ? 1 : 0, n(o, i, t)) : n(o, i, t)
								}
							})
						}
						qyerUtil.init(), jQuery(document).on("click", "._js_follow_func", function() {
							t(jQuery(this))
						})
					});