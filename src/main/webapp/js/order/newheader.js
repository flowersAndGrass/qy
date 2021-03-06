/**
 * 公用头尾
 *
 * @author junbo.yan
 */

$(function() {
	API = {
		hot_des: "//z.qyer.com/zworld.php?action=menu&ajaxID=57b432835f75902827478462&callback=?"
	}

	/* 头部搜索 */
	requirejs(['web_qui_quiautocomplete', '//common1.qyerstatic.com/zworld/web/project/headfoot/js/new-header-tpl.js'], function(QuiAutoComplete, tpl) {

		var defalutHTML = getDefalutHTML();

		function getDefalutHTML() {
			var max = 6, // 最多6条item
				size = 0; // 当前0个
			var str = '<ul>';
			var historyList = getHistoryList(); // 历史list
			var hotList = getHotList(); // 热门list

			str += historyList.join('');
			size = historyList.length;

			hotList = hotList.slice(0, max - size);
			str += hotList.join('');

			str += '</ul>';

			return str;
		}

		// 获取 热门搜索list
		function getHotList() {
			var ary = [];
			ary.push('<li><a href="//z.qyer.com/all_0_0_14_0_0_0_0/?_channel=freetour&_type=place&keyword=日本" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">日本</span></a></li>');
			ary.push('<li><a href="//z.qyer.com/all_0_0_215_54_0_0_0/?_channel=freetour&_type=place&keyword=清迈" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">清迈</span></a></li>');
			ary.push('<li><a href="//z.qyer.com/all_0_0_0_0_9_0_0/?_channel=freetour&_type=theme&keyword=海岛" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">海岛</span></a></li>');
			ary.push('<li><a href="//z.qyer.com/flights/all_0_0_186_0_0_0_0/?_channel=freetour&_type=channel&keyword=法国" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">法国</span></a></li>');
			ary.push('<li><a href="//z.qyer.com/cityfun/citypass_0_0_11_11186_0_0_0/?_channel=cityfun&_type=channel&keyword=台湾" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">台湾</span></a></li>');
			ary.push('<li><a href="//z.qyer.com/all_0_0_233_0_0_0_0/?_channel=freetour&_type=place&keyword=韩国" data-bn-ipg="zsj-search-hot"><em>热门搜索</em><span class="name">韩国</span></a></li>');
			return ary;
		}

		// 获取 历史搜索list
		function getHistoryList() {
			var ary = [],
				cache = getHistoryCache(),
				val = '',
				url = '';
			for (var i = 0; i < cache.length; i++) {
				val = cache[i].val;
				if (cache[i].url === '') {
					url = '//z.qyer.com/all_0_0_0_0_0_0_0/?keyword=' + encodeURIComponent(val);
				} else {
					url = cache[i].url;
				};
				ary.push('<li><a href="' + url + '" data-bn-ipg="zsj-search-history"><em>历史记录</em><span class="zwui-iconfont icon-clock"></span><span class="name">' + val + '</span></a></li>');
				if (i == 2) {
					break; // 最多取3个历史记录
				};
			};
			return ary;
		}

		// 保存 历史搜索缓存
		function saveHistoryCache(val, url) {
			var ary = getHistoryCache();
			var item = {
				val: val || '',
				url: url || ''
			};

			if (val === '') {
				return; // val为空时直接退出
			};

			if (ary.length > 10) {
				ary.length = 10; // 控制缓存数组最大长度
			};

			for (var i = 0; i < ary.length; i++) {
				if (ary[i].val == val) {
					ary.splice(i, 1); // 数据去重
				};
			};

			if (window.localStorage) {
				ary.unshift(item); // 插入到数组前面
				window.localStorage.zuishijie_search_history = JSON.stringify(ary);
			};
		}

		// 读取 历史搜索缓存
		function getHistoryCache() {
			var ary = [];
			if (window.localStorage && window.localStorage.zuishijie_search_history) {
				ary = JSON.parse(window.localStorage.zuishijie_search_history);
			};
			return ary;
		}

		// 配置input搜索的联想框
		var input1 = new QuiAutoComplete({
			target: '#zwheadSearchText',
			parent: '#zwheadSearchs',
			width: '650',
			zindex: 99,
			dataSource: '/?action=new_search', // '../js/search.json'
			submitOnEnter: false,
			defalutHTML: defalutHTML,
			onItemSelected: function(elm) {
				// console.log('页面输出：', elm);
				var url = $(elm).attr('data-url'),
					val = $(elm).attr('data-value');
				saveHistoryCache(val, url); // 保存当前数据进入缓存
				window.location.href = url;
			},
			onIndexChanged: function(index, elm) {
				// console.log('页面输出：', index, elm);
			},
			onKeyEnter: function() {
				// console.log("页面输出：enter回调");
			},
			contentHTML: function(data) {
				// console.log('页面输出：', data);
				var html = '';

				$.each(data.keywords, function(index, val) {
					var text = val.title;
					html += '<li class="qui-autoComplete-item" data-value="' + val.title + '" data-url="' + val.url + '" data-bn-ipg="zsj-search-suggest"><em>' + val.type + '</em><span class="name">' + val.title + '</span></li>';
				});

				return html;
			}
		});

		$('#zwheadSearchs').on('submit', function(event) {
			var ipt_val = $('#zwheadSearchText').val();
			ipt_val = ipt_val.trim();
			if (ipt_val === '') {
				return false; // input内容为空，则直接跳出
			};
			saveHistoryCache(ipt_val); // 保存当前数据进入缓存
		});


		// 穷游商城页面滚动时dock搜索条
		function headerSearchDock() {
			var $zw_header = $('#zw-header'),
				header_top = $zw_header.offset().top,
				header_height = $zw_header.height(),
				header_limit = header_top + header_height,
				$search_wrap = $('#zw-header-search-wrap');
			$(window).scroll(function(event) {
				var doc_scroll_top = $(document).scrollTop();
				if (doc_scroll_top > header_limit) {
					$search_wrap.hasClass('fixed') ? true : $search_wrap.addClass('fixed');
				} else {
					$search_wrap.hasClass('fixed') ? $search_wrap.removeClass('fixed') : true;
				}
			});
		}
		// hack处理方式。在频道页和列表页时，dock头部搜索条
		var ugc_types = ['z_freetour', 'z_cityfun', 'z_visa', 'z_car', 'z_island', 'z_sales', 'z_citywalk', 'z_search','z_explore','z_cruise'];
		if (window._RATrack && ugc_types.indexOf(window._RATrack.ugc_type) !== -1) {
			headerSearchDock();
		}
			


		// 热门目的地模块
		var navHotDestination = {
			$zw_header_nav: $('#zw-header-nav'),
			$hot_category: $('#zwCategory'),
			$contents: null,
			timer: null,
			init: function() {
				// 如果导航有热门目的地模块，则加载相关数据
				var flag = $('#zw-header-hotdes').size();
				if (flag) {
					this.getHotDes();
				}
				
				this.scrollNav(); // 打开页面时让nav滚动出可视区域
			},
			bindEvent: function() {
				var that = this;
				$('body').on('mouseenter', '.hot-des-category-item', function(e) {
						that.categoryItemShow(this)
					})
					.on('mouseleave', '.hot-des-category-item', function(e) {
						that.categoryItemHide(this)
					})
					.on('mouseleave', '#zw-header-hotdes', function(e) {
						that.categoryHide(this)
					})
			},
			scrollNav: function() {
				var url = window.location.href,
					hash = window.location.hash;
				if ( (url.search('z.qyer.com/deal') != -1 || (url.search('z.qyer.com/zt') != -1 && url.search('z.qyer.com/zt/leadertour') === -1)) && hash === '' ) {
					var pos = this.$zw_header_nav.offset().top;
					window.setTimeout(function() {
						$(window).scrollTop(pos - 10);
					}, 200);
				}
			},
			categoryItemShow: function(el) {
				var $this = $(el),
					that = this;
				window.clearTimeout(this.timer);
				this.timer = window.setTimeout(function() {
					that.$contents.show().find('.des-category-contents-wrap').eq($this.index()).show().siblings().hide();
				}, 100)
			},
			categoryItemHide: function(el) {
				var $this = $(el),
					that = this;
				window.clearTimeout(this.timer);
			},
			categoryHide: function() {
				window.clearTimeout(this.timer);
				this.$contents.hide();
			},
			getHotDes: function() {
				var that = this,
					icon = {
						1: 'icon-Hongkong',
						2: 'icon-Japan',
						3: 'icon-SoutheastAsia',
						4: 'icon-Europe',
						5: 'icon-Australia',
						6: 'icon-Recommend',
						7: 'icon-Wifi'
					};

				$.ajax({
					url: API.hot_des,
					dataType: 'jsonp',
					jsonp: 'callback',
					type: 'post',
					success: function(aJSON) {
						if (aJSON.error_code == 0) {
							var new_data = aJSON.data.hot_des.slice(0, aJSON.data.hot_des.length - 2);
							aJSON.data.hot_des = new_data;
							var data = $.extend(true, {}, aJSON.data, {
									"icon": icon
								}),
								html = tpl.getTPL('hot_des', data);

							that.$hot_category.append(html);
							that.$contents = $('.hot-des-category-contents');
							that.bindEvent();
						} else {
							that.showTip(aJSON.data.msg);
						}
					},
					error: function(aXhr, aInfo) {
						that.showTip('服务器错误，请稍后再试！');
					}
				})
			},
			showTip: function(aText, aType) {
				requirejs(['web_qui_quidialog'], function(QuiDialog) {
					var dialog = new QuiDialog().alert({
						title: "提示",
						text: aText,
						type: aType || "error"
					})
				});
			}
		}
		navHotDestination.init();

	});
});
