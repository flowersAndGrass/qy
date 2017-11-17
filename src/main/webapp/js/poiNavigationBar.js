 $(document).ready(function () {
        
        function  Search (argument) {
            this._options = $.extend({
                //搜索框
                $dom:$("#poiNavSearchBox"),
                //搜索框内容框
                $container:$("#poiNavSearchContainer"),
                //搜索框的tab bg
                $tab:$("#poiNavSearchBg"),
                //搜索框的li
                $li:$("#poiNavSearchMenu"),
                //整个导航
                $poiNavBox:$("#poiNavBox"),
                //搜索框form
                $poiNavForm:$("#poiNavSearchForm"),
                //main 导航
                $main:$(".placeNav"),
                //fix的时候top位置
                top:"0px",
                //scroll的时候是否fix
                scrollFix:true,
                //导航fix的时候的z-index
                zIndex:22,
                placeholder:"搜索国家/城市/目的地"
            },argument||{});
            this.init();
        }
        Search.prototype = {
            mainData:{},
            init:function (argument) {
                this.bindEvent();
                this._options.$dom.attr("placeholder",this._options.placeholder);
            },
            bindEvent:function () {
                var me = this,timer = null,opts = me._options,timer2 = null;
                opts.$dom.on({
                    "input propertychange":function (argument) {
                        if($.trim(me._options.$dom.val())==""){
                            me.hidePanel();
                            return false;
                        }
                        if(!!me.mainData[$.trim(opts.$dom.val())]){
                            
                            opts.$container.html("").addClass("loading");
                            me.useData.call(me,me.mainData[$.trim(opts.$dom.val())]);
                            if(timer){
                                clearTimeout(timer);
                            }
                            me.setFormAction.call(me,"");
                            me.showPanel();
                            opts.$li.addClass("_menuOn");
                            opts.$dom.addClass("_search");
                            return false;
                        }
                        if(timer2){
                            clearTimeout(timer2);
                        }
                        timer2 = setTimeout(function(){

                            if(!!me.mainData[$.trim(opts.$dom.val())]){return false;}
                            opts.$container.html("").addClass("loading");
                            if($.trim(me._options.$dom.val())==""){
                                me.hidePanel();
                                return false;
                            }
                            me.inputFunction.call(me,argument);
                            if(timer){
                                clearTimeout(timer);
                            }
                            me.setFormAction.call(me,"");
                            me.showPanel();
                            opts.$li.addClass("_menuOn");
                            opts.$dom.addClass("_search");
                        },500)
                        

                    },
                    blur:function(){
                        opts.$container.removeClass("loading");
                        opts.$dom.removeClass("_search");
                        if(!opts.$li.hasClass("_menuOn")){
                            me.hidePanel();
                        }
                    },
                    focus:function(){
                        if($.trim(me._options.$dom.val())!=""){
                            me.showPanel();
                            opts.$li.addClass("_menuOn");
                            opts.$dom.addClass("_search");
                        }
                    }
                });
                opts.$li.on("mouseleave",function(argument) {
                    timer = setTimeout(function(){
                        opts.$li.removeClass("_menuOn");
                        if(opts.$dom.hasClass("_search")){
                            return;
                        }
                        me.hidePanel();
                    },200);
                });
                opts.$li.on("mouseenter",function (argument) {
                    if(timer){
                        clearTimeout(timer);
                    }
                });
                opts.$container
                .on("mouseenter",".multipleListItem",function (argument) {
                    opts.$container.find("li.openItem").removeClass("openItem");
                    $(this).addClass("openItem");
                });
                opts.$poiNavForm.on("submit",function(e){
                    var $t = $(this),
                    $items = me._options.$container.find(".multipleListItem"),
                    index = me._options.$container.find(".openItem").index()-0;
                    if($items.length==0){
                        return false;
                    }
                    me.setFormAction.call(me,$items.eq(index==-1?0:index).find("a").attr("href"));
                    if($t.attr("action")==""){
                        e.preventDefault();
                        return false;
                    }

                });
                opts.$dom.keydown(function(event){
                    if(event.keyCode == "38" || event.keyCode == "40"){
                        event.preventDefault();
                    }
                })
                .keyup(function(event){
                    var key = event.keyCode;
                    var val = $.trim($(this).val());
                    if(val!=""){
                        var $items = me._options.$container.find(".multipleListItem"),
                        $openItem = me._options.$container.find(".openItem"),
                        index = $openItem.index()-0;
                        if(key == 38){
                            $items.removeClass("openItem").eq(index==-1?0:(index?--index:$items.length-1)).addClass("openItem");
                        }
                        else if(key == 40){
                           $items.removeClass("openItem").eq(index==-1?$items.length-1:((index==($items.length-1))?0:++index)).addClass("openItem");
                        }


                    }
                });
                opts.scrollFix&&me.scrollFix();
                opts.$main.on("click",".navComment",function(e){
                    var $t = $(this),$a = $t.find("a"),pid = $a.attr("data-id"),type = ($a.attr("data-type")||"city");
                     requirejs(['common/component/footprint/js/comment'], function (fpComm){
                        var obj = {
                        }
                        if(type=="city"){
                            obj["city_id"] = pid;
                            if(obj["country_id"]){
                                delete obj.country_id;
                            }
                        }else{
                            obj["country_id"] = pid;
                            if(obj["city_id"]){
                                delete obj.city_id;
                            }
                        }
                        fpComm.commShow(obj);
                    });
                });
            },
            inputFunction:function (argument) {
                var me = this;
                me._options.$container.addClass("loading");
                me.getDataFunction.call(me,{data:{keyword:$.trim(me._options.$dom.val())}});
            },
            getDataFunction:function (argument){
                var me = this,
                    $t = me._options.$dom,
                    settings = $.extend({
                        url:"http://place.qyer.com/country.php?action=placesearch"
                        // ,testData:{
                        //     error_code:0,
                        //     result:"ok",
                        //     data:{
                        //         keyword:"日本",
                        //         list:[
                        //             {
                        //                 id:"0073b6",
                        //                 cn:"日本1",
                        //                 en:"Japan",
                        //                 tag:"亚洲国家",
                        //                 link:"//place.qyer.com/japan/?",
                        //                 category:[
                        //                     {
                        //                         name:"sight",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"food",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"hotel",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"travel",
                        //                         value:"javascript:void(0)"
                        //                     }
                        //                 ]
                                        
                        //             },
                        //             {
                        //                 id:"0073b1",
                        //                 cn:"东京塔",
                        //                 en:"Japan Tower",
                        //                 tag:"日本景点",
                        //                 link:"//place.qyer.com/tokyo/",
                        //                 category:[
                        //                     {
                        //                         name:"sight",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"food",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"hotel",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"travel",
                        //                         value:"javascript:void(0)"
                        //                     }
                        //                 ]
                        //             },
                        //             {
                        //                 id:"0073b2",
                        //                 cn:"东京",
                        //                 en:"Tokoyo",
                        //                 tag:"日本城市",
                        //                 link:"//place.qyer.com/kyoto/",
                        //                 category:[
                        //                     {
                        //                         name:"sight",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"food",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"hotel",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"travel",
                        //                         value:"javascript:void(0)"
                        //                     }
                        //                 ]
                        //             },
                        //             {
                        //                 id:"0073b21",
                        //                 cn:"大孤",
                        //                 en:"Tokoyo",
                        //                 tag:"日本城市",
                        //                 link:"//place.qyer.com/osaka/",
                        //                 category:[
                        //                     {
                        //                         name:"sight",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"food",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"hotel",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"travel",
                        //                         value:"javascript:void(0)"
                        //                     }
                        //                 ]
                        //             },
                        //             {
                        //                 id:"0073b212",
                        //                 cn:"大孤",
                        //                 en:"Tokoyo",
                        //                 tag:"日本城市",
                        //                 link:"//place.qyer.com/mt-fuji/",
                        //                 category:[
                        //                     {
                        //                         name:"sight",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"food",
                        //                         value:"javascript:void(0)"
                        //                     },
                        //                     {
                        //                         name:"travel",
                        //                         value:"javascript:void(0)"
                        //                     }
                        //                 ]
                        //             }
                        //         ]
                        //     }
                        // }
                        ,onSuccess:function(data) {
                            me.mainData[data.data.keyword] = data;
                            me.useData.call(me,data);
                        },onError:function(argument){
                            me._options.$container.removeClass("loading").html('<li class="tip">没有找到匹配的目的地</li>');
                            require(['common/ui/tip/tip'],function (tip) {
                                tip.tip({
                                    type:"error",
                                    text:argument.data.msg
                                });
                            })
                        }
                },argument);
                // body...
                qyerUtil.doAjax(settings)
            },
            useData:function(data){
                var me = this,$t = me._options.$dom,
                kw = $.trim($t.val());
                    me._options.$container.removeClass("loading");
                    if(data.data.keyword==kw){
                        me._options.$container.html("");
                        if(data.data.list.length==0){
                            me._options.$container.html('<li class="tip">没有找到匹配的目的地</li>');
                        }else{
                            var str = '';
                            $.each(data.data.list,function (i,item) {
                                //li盒子
                                if(i==0){
                                    me.setFormAction.call(me,item["link"]);
                                    str+='<li class="multipleListItem openItem"><div class="itemBox">';
                                }else{
                                    str+='<li class="multipleListItem"><div class="itemBox">';
                                }
                                //标题
                                str+='<h4 class="title"><a href="'+item["link"]+'" target="_blank" data-bn-ipg="place-'+PLACE.TYPE+'-nav-search-'+(i-0+1)+'" class="left">';
                                if(item.cn){
                                    str+='<span class="cn fontYaHei">';
                                    str+=item["cn"].replace(data.data.keyword,function(c){
                                        return '<em class="green">'+c+'</em>';
                                    });
                                    str+='</span>';
                                }
                                if(item.en){
                                    str+='<span class="en fontYaHei">';
                                    str+=item["en"].replace(data.data.keyword,function(c){
                                        return '<em class="green">'+c+'</em>';
                                    });
                                    str+='</span>';
                                }
                                str+='</a>';
                                if(item.tag){
                                    str+='<span class="right">'+item.tag+'</span>'
                                }
                                str+='</h4>';

                                if(item["category"].length!=0){
                                    var names = {
                                        sight:"玩乐",
                                        hotel:"酒店",
                                        food:"美食",
                                        travel:"游记"
                                    },
                                    ipg = {
                                        sight:"citytour",
                                        hotel:"cityhotel",
                                        food:"cityfood",
                                        travel:"citytravelnote",
                                    }
                                        str+='<div class="icons">';
                                        $.each(item["category"],function (i,_item) {
                                            str+='<span class='+(i>=3?"lastBox":"box1")+'><a href="'+_item["value"]+'" target="_blank" data-bn-ipg="place-'+PLACE.TYPE+'-nav-search-'+ipg[_item["name"]]+'" class="icon '+_item["name"]+'">'+names[_item["name"]]+'</a></span>'
                                        });
                                        str+='</div>';
                                }
                                str+='</div></li>';
                            })

                        }
                        me._options.$container.html(str);

                    }
            },
            showPanel:function (argument){
                var me = this;
                me._options.$container.show();
                me._options.$tab.show();
                $(me).trigger("showPanelEvent");
            },
            hidePanel:function (argument){
                var me = this;
                me._options.$container.hide();
                me._options.$tab.hide();
                $(me).trigger("hidePanelEvent");
            },
            //window滚动的时候根据位置设置nav的position
            scrollFix:function (argument) {
                var me = this;
                $(window).on("scroll",function(){
                        if($(window).scrollTop()>=40){
                            me._options.$poiNavBox.css({
                                top:me._options.top,
                                "z-index":me._options.zIndex,
                                position:"fixed"
                            });
                        }else{
                            me._options.$poiNavBox.css({
                                top:0,
                                position:"relative"
                            });
                        }

                })
            },
            //设置form的值
            setFormAction:function(value){
                var me = this;
                me._options.$poiNavForm.attr("action",value);

            }

        }
        var s = new Search();
    })







































