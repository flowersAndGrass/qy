if(!window.QYER){window.QYER={uid:0}};

/**
 * qyer js 基础库，所有页面必须引入此库 <br/>
 * 功能：配置 requirejs.config 。 声明 window.qyerUtil ， window.qyerModelUtil
 * @module basic/js/qyerUtil
 */
! function() {
  var $ = jQuery;
  define.amd = false;
  requirejs.config({
    "urlArgs":"v="+window.__qRequire__.version,
    baseUrl: '//common1.qyerstatic.com/place',
    map: {
      '*': {
        'css': 'common/basic/js/require-css',
        'text':'common/basic/js/text'
      }
    },
    paths: {
      "template":"common/basic/js/template-native",
      "jquery":"http://common1.qyerstatic.com/place/common/basic/js/common/basic/js/jquery-1.10.2.min",
      'web_ct_footprint': 'bower_components/web_ct_footprint/footprint',
      'web_ct_footprint_comment': 'bower_components/web_ct_footprint/comment',
      'web_ct_footprint_fpTpl': 'bower_components/web_ct_footprint/fpTpl',
      'web_ct_footprint_commentTpl': 'bower_components/web_ct_footprint/commentTpl',
      'web_ct_footprint_poiType': 'bower_components/web_ct_footprint/poiType',
      'web_ct_footprint_sourceType': 'bower_components/web_ct_footprint/sourceType',
      "web_old_select":"bower_components/web_old_select/select",
      "web_old_popup":"bower_components/web_old_popup/popup",
      'web_old_popup2': 'bower_components/web_old_popup2/popup2',
      "web_old_tip":"bower_components/web_old_tip/tip",
      'web_ct_logindialog':"bower_components/web_ct_logindialog/loginDialog",
      "web_qui_quiupload":"bower_components/web_qui_quiupload/QuiUpload",
      "web_qui_quiupload_qiniu":"bower_components/web_qui_quiupload/qiniu",
      "plupload":"http://common1.qyerstatic.com/place/common/basic/js/bower_components/web_qui_quiupload/lib/plupload/plupload.full.min"
    }
  });

  //  初始化 qyerUtil
  ! function() {

    /**
     * 常用基础操作封装
     * @class window.qyerUtil
     * @static
     */
    window.qyerUtil = {

      init:function(){
        // 新框架的初始化方法, 老框架引入此文件,不需要做初始化(因为所有功能都零散的分散到页面了 -_-! ).
        if (window.QYER && window.QYER.frameVersion > 1) {
          this._initHead();
          this.spam_text_filter();
          this.includeGA();
          this.frameCompatibleh();
        }
      },

      // 对外暴露一些东西,要兼容老框架或一些外部的调用, 比如 qt 调用等
      frameCompatibleh:function(){
        // 统计代码中要用到的
        window._qyer_userid = window.QYER.uid;
        window.setCookie=this.setCookie;
        window.getCookie=this.getCookie;
        // google 要用到的
        window._gaq=window._gaq||[];
      },

      // 引入统计代码
      includeGA:function(){
        window._gaq=window._gaq||[];
        window._gaq.push(['_setAccount', 'UA-185023-1'], ['_setDomainName', 'http://common1.qyerstatic.com/place/common/basic/js/qyer.com'], ['_setSiteSpeedSampleRate',10], ['_addIgnoredRef', 'http://common1.qyerstatic.com/place/common/basic/js/qyer.com'], ['_addOrganic','soso','w'], ['_addOrganic','sogou','query'], ['_addOrganic','baidu','word'], ['_addOrganic','baidu','q1'], ['_addOrganic','baidu','q2'], ['_addOrganic','m.baidu','word'], ['_addOrganic','http://common1.qyerstatic.com/place/common/basic/js/so.360','q'], ['_addOrganic','so','q'], ['_addOrganic','baidu','w'], ['_addOrganic','http://common1.qyerstatic.com/place/common/basic/js/cn.bing','q'], ['_addOrganic','sm','q'], ['_trackPageview']);

        if('https:' == document.location.protocol){requirejs(['https://ssl.google-analytics.com/ga.js']); }
        else{requirejs(['../../../../../static.qyer.com/qyer_ui_frame/m/js/dist/base_beacon_ga-1.js'/*tpa=http://static.qyer.com/qyer_ui_frame//m/js/dist/base_beacon_ga.js*/]); }
      },

          setCookie:function(name, value, time) {
              var Days=365, exp=new Date();
              if (!arguments[2]) {time = 1;}
               //没有参数就是长期的  有的话就是 短期的 一个session
               if (time == 1) {
                  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                  document.cookie = name + "=" + escape(value) + "; path=/;domain=.qyer.com" + ";expires=" + exp.toGMTString();
              } else {
                  document.cookie = name + "=" + escape(value) + "; path=/;domain=.qyer.com";
              }
              Days= exp= null;
          },

          getCookie:function(name) {
              var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
              if (arr != null) return unescape(arr[2]);
              return null;
          },

      _initHead:function(){

           /* modified by zhangbiao @20140805*/
        /*
        $("#qyer_head_nav_item_sns, #qyer_head_nav_item_yd").hover(
          function(){$(this).addClass("qyer_head_nav_item_current").find(".qyer_head_subnav_bg").show();},
          function(){$(this).removeClass("qyer_head_nav_item_current").find(".qyer_head_subnav_bg").hide();}
        );
        */
            /* modified end*/
        //header随屏幕滚动
        if(window.location.hostname=="http://common1.qyerstatic.com/place/common/basic/js/ask.qyer.com"){
          $(".qyer_header_bg").css("position","fixed");
        }
      },

      _head: null,
      _getHead: function() {
        if (!this._head) {
          this._head = document.getElementsByTagName("head")[0];
        }
        return this._head;
      },

      /**
       * 加载 css 文件
       * @method loadCss
       * @param {String} aFilePath 文件路径
       * @param {Boolean} aAsync 是否异步加载
       */

      loadCss: function(aFilePath, aAsync) {
        if (aAsync === false) {
          this.insertStyle($.ajax({
            url: aFilePath,
            async: false
          }).responseText);
        } else {
          $('<link rel="stylesheet" type="text/css" />').attr("href", aFilePath).appendTo(this._getHead());
        }
      },

      /**
       * 动态创建  style 节点，插入到 dom 文档
       * @method insertStyle
       * @param {String} aStr css 代码字符串
       */
      insertStyle: function(aStr) {
        var nod = document.createElement("style");
        nod.type = "text/css";
        if (nod.styleSheet) { //ie下
          nod.styleSheet.cssText = aStr;
        } else {
          nod.innerHTML = aStr; //或者写成 nod.appendChild(document.createTextNode(str))
        }
        this._getHead().appendChild(nod);
        nod = null;
      },

      /**
       * 截取 arguments
       * @method sliceArguments
       * @param {arguments} aArgument function 的 arguments 对象
       * @param {Int} aIndex 要从第几位开始截取
       * @return {Array} 返回截取后的数组
       */
      sliceArguments: function(aArgument, aIndex) {
        var ps = [];
        for (var i = aIndex; i < aArgument.length; i++) {
          ps.push(aArgument[i]);
        };
        return ps;
      },


      /**
       * 是否是移动设备
       * @method isMobile
       * @return {Boolean}
       */
       isMobile:function () {
        var uA = navigator.userAgent;
        return ( uA.match(/Android/i) || uA.indexOf('iPhone') != -1 || uA.indexOf('iPad') != -1  );
       },

      /**
       * 返回字符串长度
       * @method getWordLen
       * @return {Number}
       */
      getWordLen:function (aValue,g) {
        function byteLength(b){
          if (typeof b == "undefined") {
            return 0 ;
          }
          var a = b.match(/[^\x00-\x80]/g);
          return (b.length + (!a ? 0 : a.length));
        }
              function doublebyte (str){
                  return str.replace(/[^\x00-\xff]/g,'*') ;
          }

                if(g) {
                  aValue = doublebyte(aValue) ;
                }
        return byteLength($.trim(aValue));
      },


      /**
       * 截取字符串,中文按2个字符算
       * @method subStr
       * @param {String} aStr 要截取的字符串
       * @param {Number} aLen 要截取的长度
       * @return {String}
       */
      subStr:function (aStr, aLen) {
                var char_length=0,son_str,sub_len;
                for (var i = 0; i < aStr.length; i++) {
                    son_str = aStr.charAt(i);
                    encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
                    if (char_length >= aLen) {
                        sub_len = char_length == aLen ? i + 1 : i;
                        return aStr.substr(0, sub_len);
                        break;
                    }
                }
                return aStr;
      },





      /**
       * 强制执行 track 代码
       * @method doTrackCode
       * @param {String} aCode track代码
       */
      doTrackCode:function(aCode){
        var id = '__dotarckcodebutton__';
        if( !document.getElementById(id) ){
          $('<button id="'+id+'" style="display:none;">dotarckcodebutton</button>').appendTo(document.body);
        }
        $('#'+id).attr('data-bn-ipg',aCode).trigger('click');
        id=null;
      },


      /**
       * jQuery ajax 成功回调，用于在所有 ajax 成功的时候，增加全局的业务逻辑处理
       * @method ajaxFillter
       */
      ajaxFillter:function(success, statusText, jqXHR){
        if( window.location.href.indexOf('http://plan.qyer.com/') == 0  ){return;}
        if( typeof(success) == 'object' ){
          if(success.extra && success.extra.code){
            switch(success.extra.code|0){
              case 1:
                // 触发敏感词
                window.qyerUtil.showAntiSpam(success.extra.msg);
              break;
            }
          }
        }
      },

      /**
       * 弹出警告层（ 只要 ajax 返回结果中有 extra && extra.code != 0 ）
       * @method showAntiSpam
       * @param {String} aText 要显示的文本
       */
      showAntiSpam:function(aText){
        requirejs(['common/component/antiSpam/antiSpam'],  function (m) {m.show(aText); });
      },

      /**
       * 执行 ajax 操作
       * @method doAjax
       * @param {Object} aOption 配置项
           * <ul>
           *  <li>
           *      <span>testData ： Object ， 测试数据，有测试数据的话，直接返回测试数据，不会调用真实的 ajax </span>
           *      <span>onCallSuccessBefore ： function ， onSuccess 之前的回调</span>
           *      <span>onCallSuccessAfter ： function ， onSuccess 之后的回调</span>
           *      <span>onSuccess ： function ， 成功回调</span>
           *      <span>onError ： function ， 失败回调（ ajax 本身失败， errorcode ！=0 都会走到这里）</span>
           *      <span>posturl ： String ， 提交到的 url</span>
           *      <span>data ： Object ， 要 post 的数据对象</span>
           *      <span>minResponseTime: Number, 最小响应时间 </span>
           *  </li>
           * </ul>
       */
      doAjax:function(aOption) {
      /*
       * @20140822 增加配置minResponseTime{number}，数据处理方法dataProcess
       */
          var _startDate, _duringTime, dataProcess;

          _startDate = aOption.minResponseTime ? new Date() : null;

        dataProcess = function(aJSON) {
          /*
           * @20140822为了兼容格式为{error:0,msg:'xxx'}的结果
           */
          if (typeof aJSON.error_code == 'undefined') {
            try {
              aJSON.error_code = aJSON.error;
              aJSON.result = aJSON.result;
              if (aJSON.error_code != 0) {
                aJSON.data = aJSON.data || {};
                aJSON.data.msg = aJSON.msg;
              }
            } catch (err) {}
          }

          if (aJSON.error_code == 0) {
            if (typeof(aJSON.data) == 'undefined') {
              aJSON.data = aOption.__defaultData__;
            }
            aOption.onCallSuccessBefore && aOption.onCallSuccessBefore(aJSON);
            aOption.onSuccess && aOption.onSuccess(aJSON);
            aOption.onCallSuccessAfter && aOption.onCallSuccessAfter(aJSON);
          } else {
            aOption.onError && aOption.onError(aJSON);
          }
        };

        if (aOption.testData) {
          if (typeof(aOption.testData.data) == 'undefined') {
            aOption.testData.data = aOption.__defaultData__;
          }
          setTimeout(function() {dataProcess(aOption.testData);}, (aOption.minResponseTime || 200));
          return;
        }

        /*
        @20150121增加对236 API测试数据的支持
         */
        var _host = window.location.host,
          _url = aOption.url||aOption.posturl,
          _data = aOption.data,
          _dataType = 'json';

        if(/static.qyer.com/.test(_host) === true){
          var id;
          _data = $.extend({}, _data, {__qFED__:aOption.__qFED__});
          if(aOption.__qFED__ && aOption.__qFED__.id){
            id = aOption.__qFED__.id;
            aOption.type = "GET";
          }
          _url = 'http://fe.2b6.me:3000/service/api/' + id;
          _dataType = 'jsonp';
          api = null;
        }

          var _ajax = $.ajax({
              type: aOption.type || "POST",
              url: _url,
              dataType: _dataType,
              data: _data,
              cache:aOption.cache || false,
              success:function (aJSON) {
            if (_startDate) {
              _duringTime = new Date() - _startDate;
              setTimeout(function() {
                dataProcess.call(null, aJSON);
                }, (_duringTime > aOption.minResponseTime ? 0 : aOption.minResponseTime - _duringTime));
            } else {
              dataProcess.call(null, aJSON);
            }
            _startDate = _duringTime = null;
              },
              error:function (aXhr,aInfo) {
                /*
                 * @20140822 添加__server_error__属性，标识为服务器返回错误
                 * @20141212 添加__server_status__属性，标识为服务器返回错误的text
                 */
                  aOption.onError && aOption.onError({
                      "error_code":-1,
                      "__server_error__":true,
                      "__server_status__":_ajax.statusText,
                      "result": "error",
                      "data":{
                        "msg": aInfo||{}
                      }
                    });
              }
          });
        return _ajax;
      },

      /**
       * 在一个时间段内，保证此方法只调用一次
       * @method runOneInPeriodOfTime
       * @param {Funtion} aFun 要运行的方法
       * @param {Int} aTimer 多长时间范围内只运行一次（单位 ms）
       * @return {Function}
       */
      runOneInPeriodOfTime:function(aFun,aTimer){
          var timer ;
          return function(a,b,c,d,e){
              window.clearTimeout(timer);
              timer = window.setTimeout(function(){
                  aFun(a,b,c,d,e);
              },aTimer||300);
          };
      },

       /**
       * 判断是否登录
       * @method isLogin
       * @return {Boolean}
       */
      isLogin:function(){
        return !!(window.QYER&&window.QYER.uid);
      },

      /**
       * 登录
       * @method doLogin
       */
      doLogin:function(aP){
        if(!window.qyerUtil.isLogin()){
            requirejs(['web_ct_logindialog'],function(c){c.show(aP); });
        }
      },

      /**
       * 注册
       * @method  doSignin
       */
      doSignin:function(ap){
        requirejs(['web_ct_logindialog'], function(c){
          c.show($.extend({},{page:'regist'},ap));
        });
      },

      /**
       * 获取 url 参数
       * @method getUrlParam
       * @param {String} aKey
       * @return {String}
       */
      getUrlParam:function(aKey, aURL){
        var reg = new RegExp("(^|&)"+ aKey +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var url ;
        if(aURL){
          var i = aURL.indexOf('?');
          i!=-1 && ( url = aURL.substr( aURL.indexOf('?') + 1 ) ) ;
        }else{
          url = window.location.search.substr(1);
        }
        if(!url){
          return null ;
        }
        var r = url.match(reg);  //匹配目标参数
        if (r!=null) return unescape(r[2]); return null; //返回参数值
      },


      /**
       * 替换外站链接
       * @method spam_text_filter
       */
      spam_text_filter:function(){
        var reg,$this, html,p, $list;
        reg = /(http:\/\/)?[\w\.]*\.?(mafengwo\.cn|mafengwo\.com|mafengwo\.net)[a-zA-Z\/0-9&\?\.#\-_]*/gim;
        $list=$(".qyer_spam_text_filter");
        $list.find("a").each(function(){
          $this = $(this);
          if(($this.html()+$this.attr("href")).indexOf("http://common1.qyerstatic.com/place/common/basic/js/mafengwo.cn")!=-1 || ($this.html()+$this.attr("href")).indexOf("http://common1.qyerstatic.com/place/common/basic/js/mafengwo.com")!=-1 || ($this.html()+$this.attr("href")).indexOf("http://common1.qyerstatic.com/place/common/basic/js/mafengwo.net")!=-1){
                  $this.replaceWith($(this).html());
          }
        });
        $list.each(function(){
          $this = $(this);
              html = $this.html().replace(/\<script.*?\>document\.write\(AC_FL_RunContent.*?\<\/script\>/gim,"");
          p = html.match(/\<img[\s\S]*?\>/gim);
          if(p!=null){
            for(var i=0;i<p.length;i++){html = html.replace(p[i],"[imgimg]"+i+"[/imgimg]");}
          }
          html = html.replace(reg,"");
          if(p!=null){
            for(var i=0;i<p.length;i++){html = html.replace("[imgimg]"+i+"[/imgimg]",p[i]); }
          }
          $this.html(html);
        });
        reg= $this= html= p= $list= null;
      },


            /**
             * 打开新窗口，确保不被浏览器拦截
             * @method openUrl
             * @param {String} aURL 要打开的 url 地址
             */
            openUrl:function(aURL){
                var temp = $('<form action="'+aURL+'" target="_blank" method="get"></form>');
                temp.appendTo(document.body);
                temp.submit();
                setTimeout(function(){
                    temp.remove();
                    temp=null;
                },8000);
            }
    }

  }();



  // 原型扩展
  !function () {
    function ex(aObj,aEx) {for(var key in aEx ){aObj[key] = aEx[key]; } }

    /**
     * models Date原型扩展
     * @class Date.prototype
     */
    ex(Date.prototype,{
      /**
       * 返回中文，星期几
       * @method qGetWeekStr
       * @return {String}
       */
      qGetWeekStr:function () {
        return '星期' + ["日","一","二","三","四","五","六"][this.getDay()];
      },

      /**
       * 设置几天之后的日期
       * @method qAddDate
       * @param {Number} aNum
       */
      qAddDate:function (aNum) {
        this.setDate( this.getDate() + aNum );
        return this;
      },

      /**
       * 转换成字符串 类似 2014-1-1 ， 可以自定义分隔符
       * @method qToString
       * @param {String} aSplit 分隔符
       */
       qToString:function (aSplit) {
        var  str = [ this.getFullYear(), this.getMonth()+1, this.getDate() ];
        return str.join(aSplit||'-');
      }

    });


    /**
     * models String原型扩展
     * @class String.prototype
     */
    ex(String.prototype,{
      /**
       * 转换成 Date 对象
       * @method qToDate
       * @param {String} aSplit 分隔符
       * @return {Date}
       */
      qToDate:function (aSplit) {
        var s = this.split(aSplit||'-');
        s = [s[0]|0, (s[1]|0)-1, s[2]|0];
        var d = new Date(s[0],s[1],s[2]);
        s.length=0;
        s=null;
        return d;
      },


      /**
       * 转换成 两位整数 不足补零
       * @method qToIntFixed
       * @param {Number} aLen 要转换成几位
       * @return {String}
       */
      qToIntFixed:function () {
        var n = this|0;
        return n<10 ? '0'+n : n.toString();
      },

      /**
       * 转换成 html 代码，替换回车等特殊字符
       * @method qToHTML
       * @return {String}
       */
      qToHTML:function () {
        return this
               .replace(/</gi,"&lt;")
               .replace(/>/gi,"&gt;")
               .replace(/\n/gi,"<br />")
               .replace(/\t/gi,"&nbsp;&nbsp;&nbsp;&nbsp;");
      }



    });



  }();


}();



$(function() {
  qyerUtil.init();

  function ajaxlogin(issynclogin, which, filename, callback, type, url, isopen){
    if(qyerUtil.isLogin()){
      return false;
    }else{
      var page = type === 'reg' ? 'regist' : 'login';
        pageType = '',
        redirectURL = url || window.location.href,
        callback = typeof callback === 'function' ? callback : function(){},
        allowClose = true;
      qyerUtil.doLogin({
        page:page,
        pageType: pageType,
        redirectURL:redirectURL,
        callback:callback
      });
    }
  }
  //烽火项目 好友操作方法
  /*
  * 功能:关注 相关操作 长路 2013年7月23日17:54:33
  * @param uid 要删除的uid
  * @return
  */
  function follow(obj)
  {
    if(QYER.uid<=0){
      ajaxlogin();
      return false;
    }
    var uid = obj.attr('data-uid');
    var relate = obj.attr('data-relate');
    var each = obj.attr('data-each');
    var data = ''
    if(relate ==1){
      data = "action=addfriend&fuid="+uid;
    }else{
      data = "action=channelfriend&uid="+uid;
    }

    var url = "http://common1.qyerstatic.com/public.php";
    if(/^http:\/\/bbs\.qyer\.com\//.test(window.location.href)){
      url = 'http://common1.qyerstatic.com/bbsajax.php';
    }

    jQuery.ajax({
      type: "POST",
      url: url,
      data: data,//"action=channelfriend&uid="+uid,
      dataType:"json",
      beforeSend: function(XMLHttpRequest){
      },
      success: function(rs){
        if(rs.result=="ok"){
          relate = (relate==0?1:0);
          relate_switch(each,relate,obj);
        }else{
          //qyerUI.message({msg: rs.data.msg, type: 'true'});
          //tips.show(rs.data.msg);
          relate_switch(each,relate,obj);
        }
      }
    });

    function relate_switch(each,relate,obj){
      if(relate){
        //tips.show("成功取消关注");
        requirejs(['common/ui/tip/tip'],function(tip){
          tip.tip({
            text:"成功取消关注"
          });
        })
        obj.attr("data-bn-ipg","usercenter-follow");
        if($.trim(obj.text())=='取消关注'||$.trim(obj.text())=='已关注'||$.trim(obj.text())=='互相关注'){
          obj.text('关注');
        }
      }else{
        requirejs(['common/ui/tip/tip'],function(tip){
          tip.tip({
            text:"成功关注"
          });
        })
        obj.attr("data-bn-ipg","usercenter-unfollow");
        if($.trim(obj.text())=='关注'){
          obj.text('已关注');
        }
      }
      obj.attr('data-relate',relate);
      if(each == '1'){//互粉
        if(obj.hasClass('ui_attent_btn_each')){
          obj.removeClass('ui_attent_btn_each');
          if(obj.hasClass('_js_index_switch_do')){
            jQuery("._js_index_switch_do").removeClass('ui_attent_btn_each');
          }
        }else{
          obj.addClass('ui_attent_btn_each');
          if(obj.hasClass('_js_index_switch_do')){
            jQuery("._js_index_switch_do").addClass('ui_attent_btn_each');
          }
        }
      }else{
        if(obj.hasClass('ui_attent_btn_yes')){
          obj.removeClass('ui_attent_btn_yes');
          if(obj.hasClass('_js_index_switch_do')){
            jQuery("._js_index_switch_do").removeClass('ui_attent_btn_yes');
          }
        }else{
          obj.addClass('ui_attent_btn_yes');
          if(obj.hasClass('_js_index_switch_do')){
            jQuery("._js_index_switch_do").addClass('ui_attent_btn_yes');
          }
        }
      }
    }
  }

  //好友操作
  jQuery(document).on('click', '._js_follow_func', function(){
    follow(jQuery(this));
  });

});


//烽火项目 好友操作方法
