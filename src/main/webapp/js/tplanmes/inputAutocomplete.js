define(["css!web_old_inputautocomplete"],
function() {
	function t(t) {
		this.$obj=t.$obj, this.timer=null, this.isSearching=!1, this.$contentDiv=null, this.option=t.option, t.option.parent&&(this.$parent=i(t.option.parent)), this.init()
	}
	var i=jQuery;
	t.prototype= {
		$obj: null, timer: null, option: null, isSearching: !1, $contentDiv: null, $parent: null, init: function() {
			this.createDomNode(), this.bindEvent()
		}
		,
		createDomNode:function() {
			var t=['<div class="qui-inputAutocomplete" style="display:none;">', '<ul class="qui-inputAutocomplete-ul" >', '<li class="disableDefalut">loading ... </li>', "</ul>", "</div>"].join("");
			if(this.$contentDiv=i(t), this.$obj.is(":visible")) {
				var e= {
					width: this.$obj.outerWidth()
				}
				;
				if(!this.$parent) {
					var n=this.$obj.offset();
					e.top=n.top+this.$obj.outerHeight(), e.left=n.left, n=null
				}
				this.$contentDiv.css(e)
			}
			this.$contentDiv.appendTo(this.$parent||document.body),
			t=e=null
		}
		,
		_blurTimer:null,
		bindEvent:function() {
			var t=this;
			this.$obj.keyup(function(e) {
				if(i.inArray(e.keyCode, [37, 39])==-1)return 9==e.keyCode?(t.$contentDiv.hide(), void(t.option.onVoid&&t.option.onVoid(t.$obj[0]))): void(i.inArray(e.keyCode, [38, 40, 13])!=-1&&t.updateUI(e.keyCode))
			}
			).on("input",
			function() {
				i.trim(t.$obj.val())||t.option.isAllowEmptySeach?t.registSearch(): (t.$contentDiv.hide(), t.option.onVoid&&t.option.onVoid(t.$obj[0]))
			}
			).blur(function() {
				t._blurTimer=window.setTimeout(function() {
					t.$contentDiv.is(":hidden")||t.option.isBlurClose!==!1&&t.$contentDiv.hide()
				}
				,
				300),
				t.option.isBlurSelect&&t.option.onSelect&&t.option.onSelect.call(null,
				t.$contentDiv.find("li[data-select=true]").get(0),
				!0)
			}
			),
			this.option.isFocusedSeach&&this.$obj.focus(function() {
				(i.trim(t.$obj.val())||t.option.isAllowEmptySeach)&&t.registSearch()
			}
			),
			this.$contentDiv.delegate(".qui-inputAutocomplete-ul li",
			"click",
			function(e) {
				return e.target.className.indexOf("disableDefalut")!=-1?(e.stopPropagation(), void window.clearTimeout(t._blurTimer)): void(this.className.indexOf("disableDefalut")==-1&&(t.$obj.val(i(this).text()), t.$contentDiv.hide(), t.option.onSelect&&(t.option.onSelect.call(t.$obj[0], this), t.$contentDiv.html(""))))
			}
			)
		}
		,
		registSearch:function() {
			var t=this;
			this.isSearching=!1, window.clearTimeout(this.timer), this.timer=window.setTimeout(function() {
				(i.trim(t.$obj.val())||t.option.isAllowEmptySeach)&&(t.isSearching=!0, t.showContentDiv(), t.option.onSearch.call(t.$obj[0]))
			}
			,
			300)
		}
		,
		showContentDiv:function() {
			var t=this;
			if(this.$contentDiv.is(":hidden")) {
				if(this.$obj.is(":visible")) {
					var e= {
						width: this.$obj.outerWidth()
					}
					;
					if(!this.$parent) {
						var n=this.$obj.offset();
						e.top=n.top+this.$obj.outerHeight(), e.left=n.left, n=null
					}
					this.$contentDiv.css(e)
				}
				this.$contentDiv.show(),
				i(document).one("click",
				function(i) {
					t.option.isBlurClose!==!1&&t.$contentDiv.hide()
				}
				)
			}
		}
		,
		updateUI:function(t) {
			function e() {
				var t=o.find("li[data-select=true]"), i=o.find("li").index(t);
				t.attr("data-select", ""), t.length?(t=o.find("li:not(.disableDefalut)").eq(i+1), t.length||(t=o.find("li:eq(0)"))): t=o.find("li:eq(0)"), t.attr("data-select", "true"), t=null
			}
			function n() {
				var t=o.find("li[data-select=true]"), i=o.find("li").index(t);
				t.attr("data-select", ""), t.length?(t=o.find("li:not(.disableDefalut)").eq(i-1), t.length||(t=o.find("li:eq("+(l-1)+")"))): t=o.find("li:eq("+(l-1)+")"), t.attr("data-select", "true"), t=null
			}
			if(!this.$contentDiv.is(":hidden")) {
				var o=this.$contentDiv.find(".qui-inputAutocomplete-ul"), l=o.find("li:not(.disableDefalut)").size();
				if(l&&(i.inArray(t, [38, 40])!=-1&&(40==t?e(): n()), this.option.enterSelect!==!1&&13==t)) {
					var s=o.find("li[data-select=true]");
					s.length?(this.$obj.val(s.text()), this.option.onSelect&&(this.option.onSelect.call(this.$obj[0], s[0], !0), this.$contentDiv.html("")), this.$contentDiv.hide()): this.option.isBlurClose!==!1&&this.$contentDiv.hide()
				}
			}
		}
		,
		pushHTML:function(t) {
			if(this.$obj.is(":visible")) {
				var i= {
					width: this.$obj.outerWidth()
				}
				;
				if(!this.$parent) {
					var e=this.$obj.offset();
					i.top=e.top+this.$obj.outerHeight(), i.left=e.left, e=null
				}
				this.$contentDiv.css(i),
				i=null
			}
			this.$contentDiv.html(t),
			this.isSearching=!1;
			var n=this.$contentDiv.find(".qui-inputAutocomplete-ul > li:not(.disableDefalut)");
			n.length&&this.option.autoSelect&&n.eq(0).attr("data-select",
			"true"),
			n=null
		}
		,
		isShow:function() {
			return!this.$contentDiv.is(":hidden")
		}
		,
		hide:function() {
			return this.$contentDiv.hide()
		}
		,
		destroy:function() {
			this.$contentDiv.remove()
		}
	}
	,
	i.fn.extend( {
		qyerAutocomplete: function(e) {
			var n, o, l=arguments;
			return i.each(this, function(s, a) {
				n=i(a), "object"==i.type(e)?n.data("_autocomplete", new t( {
					$obj: n, option: e
				}
				)):"pushHTML"==e?n.data("_autocomplete").pushHTML(l[1]):"getContent"==e?o=n.data("_autocomplete").$contentDiv:"isShow"==e?o=n.data("_autocomplete").isShow():"hide"==e?n.data("_autocomplete").hide():"destroy"==e&&(n.data("_autocomplete").destroy(),
				n.data("_autocomplete",
				null))
			}
			),
			n=l=null,
			"undefined"==typeof o?this:o
		}
	}
	)
}
);