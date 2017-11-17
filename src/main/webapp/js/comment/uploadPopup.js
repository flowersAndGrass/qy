define(['common/models/common/ui/popup2/popup','common/models/common/ui/upload/upload','common/models/common/ui/tip/tip',"css!common/models/common/component/uploadPopup/uploadPopup.css"],function(popup,Upload,tip) {
	var dataAPI;
	dataAPI = {
		//获取我的相册列表
		getPhotoList:function(aOption){
			//true, aOption.testData = {"error_code": 1, "result": "ok", "data": {"msg":"获取数据错误"} };
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": {"state":1, "planlist": [] } };
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": {"state":0, "planlist": [] } };
			//true, aOption.testData = {"error_code":0,"result":"ok","data":[{"id":"2604777","name":"\u9ed8\u8ba4\u76f8\u518c","photo_count":"0"},{"id":"2604778","name":"aaaa","photo_count":"0"}]};
			
			aOption.posturl='/api.php?action=getMyAlbumList';
			qyerUtil.doAjax(aOption);
		},
		//获取位置
		getLocalForKw:function(aOption){
			//true, aOption.testData = {"error_code": 1, "result": "ok", "data": {"msg":"上传失败"} };
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": {"enter":1, "id":"1", "plan": {"id": "newuploadplan", "name": "测试，新上传成功的行程", "playtime": "2014.08.12", "dayCount":99, "url": "//www.baidu.com", "pic": "//static.qyer.com/images/hotel/hotel_270x200.png", "tags": ["标记1", "标记2", "标记3"], "citys": ["城市2", "城市3", "城市4", "城市5", "城市6", "城市7", "城市8"], "username": "白纪康", "usericon": "http://static.qyer.com/images/user/tem/album_photo_img80x80.jpg", "userhomepage": "http://www.baidu.com"} } };
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": {"enter":0, "id":"2", "plan": {"id": "newuploadplan", "name": "测试，新上传成功的行程", "playtime": "2014.08.12", "dayCount":99, "url": "//www.baidu.com", "pic": "//static.qyer.com/images/hotel/hotel_270x200.png", "tags": ["标记1", "标记2", "标记3"], "citys": ["城市2", "城市3", "城市4", "城市5", "城市6", "城市7", "城市8"], "username": "白纪康", "usericon": "http://static.qyer.com/images/user/tem/album_photo_img80x80.jpg", "userhomepage": "http://www.baidu.com"} } };

			aOption.posturl='/api.php?action=searchphotopoi';
			qyerUtil.doAjax(aOption);
		},
		//从相册列表中获取照片
		getPhotos:function(aOption){
			//true, aOption.testData = {"error_code":0,"result":"ok","data":{"res":[{"id":"7117772","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0AYg\/index"},{"id":"7117771","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0AYQ\/index"},{"id":"7117770","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0AYA\/index"},{"id":"7117769","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0BaQ\/index"},{"id":"7117766","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0BZg\/index"},{"id":"7117765","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0BZQ\/index"},{"id":"7117764","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0BZA\/index"},{"id":"7117763","description":"","url":"http:\/\/test1362383214.qiniudn.com\/album\/user\/711\/77\/RkhURR0BYw\/index"}],"pager":"<div class=\"ui_page\"><a data-bn-ipg=\"pages-3\" href=\"javascript:void(1)\" class='ui_page_item ui_page_item_current'>1<\/a>\n<a data-bn-ipg=\"pages-3\" href=\"javascript:void(2)\" class='ui_page_item'>2<\/a>\n<a data-bn-ipg=\"pages-5\" href=\"javascript:void(2)\" class='ui_page_item ui_page_next' title=\"\u4e0b\u4e00\u9875\">\u4e0b\u4e00\u9875<\/a>\n<\/div>","count":"16"}}
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": {"id":1 ,"enter":0,"url":"http://www.baidu.com"}};
			
			aOption.posturl='/api.php?action=getAlbumPhotoPage';
			qyerUtil.doAjax(aOption);
		},
		//保存图片
		submitPhoto:function(aOption){
			//true, aOption.testData = {"error_code": 1, "result": "ok", "data": {"msg":"表单提交失败"}};
			//true, aOption.testData = {"error_code": 0, "result": "ok", "data": null};
			
			aOption.posturl='/api.php?action=popupwebupload';
			qyerUtil.doAjax(aOption);	
		},
		savePhoto:function(aOption){
			aOption.posturl='/api.php?action=saveUploadAlbumPhoto';
			qyerUtil.doAjax(aOption);
		}
	};

	// 相册列表对象
	function PhotoList(opt){
		this.init(opt);
	}
	PhotoList.prototype = {
		tpl:"",
		label:"将照片保存到",
		init:function(opt){
			$.extend(this,opt);
			this.bindEvent();
		},
		bindEvent:function(){
			var me = this;
			$(this.parent).on("aftershow",function(){
				me.render();
			})
			$(document).undelegate(me.node+" .source","change").delegate(me.node+" .source","change",function(){
				$(me).trigger("fireloaddata");
			})
		},
		getHtml:function(fun){
			var me = this,
			    arr = [],
			    list = [],
			    outstr = "";
			dataAPI.getPhotoList({
				type:"get",
				onError:function(data){

				},
				onSuccess:function(data){
					if(data.data){
					    list = data.data;
					    for(var i=0;i<list.length;i++){
					    	arr.push('<option value="'+list[i].id+'">'+list[i].name+'</option>')
					    }
				    }
				    me.tpl = '<strong>'+me.label+'：</strong><select name="album_list" class="source">'+arr.join("")+'</select>';
					me.dom = $(me.tpl);
					fun&&fun();
				}
			})
		},
		getCurPhoto:function(){
			return $(this.node).find(".source").val();
		},
		render:function(){
			var me = this;
			this.getHtml(function(){
				$(me.node).html(me.dom);
				$(me).trigger("fireloaddata");
			})
		},
		dispose:function(){
			$(this.parent).off("aftershow");
			$(document).undelegate(this.node+" .source","change");
		}
	}
	// 新建相册
	function PhotoCreate(opt){
		this.init(opt);
	}
	PhotoCreate.prototype = {
		init:function(opt){
			$.extend(this,opt||{});
			this.bindEvent();
		},
		bindEvent:function(){
		},
		getHtml:function(){
			return '<strong>新建相册：</strong>'+
	                '<div class="qyer_upload_new">'+
	                    '<input name="album_new" maxlength="15" type="text" class="albumname" placeholder="输入新相册名，不超过15字">'+
	                    '<div class="qyer_upload_new_error" id="swf_albumname_tips"><span></span><div class="icon_warn">相册名不能为空，请输入</div></div>'+
	                '</div>';
		},
		getPhotoName:function(){
			var val = $(this.node).find(".albumname").val();
			if(val){
				$(this.node).find(".qyer_upload_new_error").hide();
				return val;
			}else{
				$(this.node).find(".qyer_upload_new_error").show();
			}
		},
		render:function(){
			var me = this;
			$(me.node).html(me.getHtml());
		}
	}
	// 相片添加位置
	function PhotoLocal(opt){
		this.init(opt);
	}
	PhotoLocal.prototype = {
		param:{},
		init:function(opt){
			$.extend(this,opt||{});
			
			this.bindEvent()
		},
		bindEvent:function(){
			var me = this;
			$(this.parent).on("aftershow",function(){
				me.render();
			})
			$(document).undelegate(me.node+" input","input").delegate(me.node+" input","input",function(){
				var val = $(this).val();
				if(val){
					me.getData(val);	
				}
			})
			$(document).on("click",function(){
				$(me.node).find(".editphotopoisearch").hide();
			})
		    $(document)
		    .undelegate(me.node+" .editphotopoisearch .ui_album_poiSelect_search_list","click")
		    .delegate(me.node+" .editphotopoisearch .ui_album_poiSelect_search_list","click",function(){
		    	me.param.type = $(this).attr("type");
		    	me.param.poiid = $(this).attr("data");
		    	$(me.node).find("input").val($(this).text().trim());
		    })
		},
		getData:function(kw){
			var me = this;
			dataAPI.getLocalForKw({
				type:"get",
				data:{
					kw:kw,
					format:"json-html",
					isnothaveimg:1
				},
				onError:function(data){
					// alert("获取位置错误");
					tip.tip({text:'获取位置错误',type:'error',time:1000});
					return;
				},
				onSuccess:function(data){
					$(me.node).find(".editphotopoisearch").show().html(data.data);
				}
			})
		},
		getLocalParm:function(){
		 	return this.param;
		},
		getHtml:function(){
			var outstr = '<div class="qyer_upload_t_item"><a href="#">'+
							'<img class="poi_icon" src="//static.qyer.com/images/user/album/album_upload_found_icon.png" alt="">'+
						  '</a>'+
	                      '<input type="text" class="ui_input js_inputGap fl editpoiinfo" placeholder="为照片批量添加目的地位置" value="" autocomplete="off">'+
	                      '<div class="ui_album_poiSelect_div editphotopoisearch tl"></div>'+
	                      '</div>';
            return outstr;
		},
		render:function(){
			var me = this;
			$(me.node).html(me.getHtml())
		},
		dispose:function(){
			$(this.parent).off("aftershow");
			$(document).undelegate(this.node+" input","input");
			$(document).undelegate(this.node+" .editphotopoisearch .ui_album_poiSelect_search_list","click");
		}
	}
	// 相册页头
	function PhotoHead(opt){
		this.init(opt);
	}
	PhotoHead.prototype = {
		models:["list","local","create"],
		status:"list",
		modelList:[],
		photolistOpt:{},
		init:function(opt){
			
			$.extend(this,opt||{});
			this.modelList = [];
			this.initModels();
			
			this.bindEvent();
		},
		bindEvent:function(){
			var me = this;
			$(this.parent).on("aftershow",function(){
				me.render();
			});
			$(document)
			.off("click", me.node+" .create_album")
			.on("click",me.node+" .create_album",function(){
				if(me.status == "create"){
					$(this).html("新建相册")
					me.photoList.render();
					me.status = "list"
				}else{
					me.photoCreate.render();
					$(this).html("选择相册");
					me.status = "create";
				}
			});
		},
		initModels:function(){
			var me = this,
				tmpModel = "";
			for(var i=0;i<this.models.length;i++){
				tmpModel = this.models[i];
				if(tmpModel == "list"){
					me.photoList = new PhotoList($.extend({
						parent:this,
						node:this.node+" .qyer_upload_myphoto_list"
					},me.photolistOpt));
					me.modelList.push(me.photoList);		
				}else if(tmpModel == "local"){
					me.photoLocal = new PhotoLocal({
						parent:this,
						node:this.node+" .qyer_upload_t_local"
					})	
					me.modelList.push(me.photoLocal);
				}else if(tmpModel == "create"){
					me.photoCreate = new PhotoCreate({
						node:this.node+" .qyer_upload_myphoto_list"
					})	
					me.modelList.push(me.photoCreate);
				}
			}
			
		},
		getHtml:function(){
			var outstr = '<div class="qyer_upload_myphoto_list"></div>'+
		                '<div class="qyer_upload_t_local"></div>'+
		                '<span class="fr qyer_upload_create"></span>'+
		            	'<div class="clear"></div>';
            return outstr;
		},
		getHeadParams:function(){
			var pars = {},
			    name="";
			for(var i=0;i<this.models.length;i++){
				switch(this.models[i]){
					case "list":
						if(this.status=="list"){
							pars.isnewalbum = 0;
							pars.album_new = "";
							pars.album_list = this.photoList.getCurPhoto();
						}
						break;
					case "create":
						if(this.status == "create"){
							name = this.photoCreate.getPhotoName();
						    if(name != undefined){
						    	pars.isnewalbum = 1;
							    pars.album_new = name;	
						    }
						}
						break;
					case "local":
					    $.extend(pars,this.photoLocal.getLocalParm());
					    break;
				}
			}
			return pars;
		},
		aftershow:function(){
			if(this.models.length>0){
				for(var i=0;i<this.models.length;i++){
					tmpModel = this.models[i];
					if(tmpModel == "create"){
						$(this.node).find(".qyer_upload_create").html('或 <a class="create_album" href="javascript:void(0);">新建相册</a>')
					}
				}
			}else{
				$(this.node).hide()
			}
			
		},
		render:function(){
			var me = this;
			$(me.node).html(me.getHtml());
			$(this).trigger("aftershow");
		},
		dispose:function(){
			for(var i=0;i<this.modelList.length;i++){
				$(this.modelList[i]).trigger("dispose");
			}
		}
	}
	// 上传图片展示
	function FileProgress(opt){
		this.init(opt);
	}
	FileProgress.prototype = {
		tpl:'<div class="upload_file_item"><span class="filebg" ><em class="percent" style="width:__percent__;"></em></span><strong>__name__</strong><span class="fstatus cLightgray">__status__</span><span class="fr"><a href="javascript:;" class="_jscancelup" data-id="__id__">删除</a></span></div>',
		init:function(opt){
			$.extend(this,opt);
			this.initDom();
		},
		initDom:function(){
			var str = this.tpl.replace(/__percent__/ig,this.percent).replace(/__name__/,this.name).replace(/__status__/,this.getStatus()).replace(/__id__/,this.id);
			this.dom = $(str);
		},
		setProgress:function(num){
			this.progress = num;
		},
		getStatus:function(){
			var str = "";
			switch(this.status){
				case 0:
				    str = "等待中";
				    break;
				case 1:
				    str = "准备上传";
				    break;
				case 2:
				    str = "上传中";
				    break;
				case 5:
				    str = "上传成功";
				    this.dom.find(".fstatus").addClass("icon_finish");
				    break;

			}
			return str;
		},
		setStatus:function(num){
			this.status = num;
			this.dom.find(".fstatus").html(this.getStatus());
		},
		setPercent:function(p){
			this.percent = p;
			this.dom.find(".percent").css("width",p+"%")
		}
	}
	var FileList = {
		list:[],
		init:function(opt){
			$.extend(this,opt||{})
			this.list = [];
			this.dom = $("#"+this.id);
			this.dom.html = "";
		},
		addFile:function(file){
			var progress = new FileProgress(file);
			this.list.push(progress);
			this.dom.append(progress.dom)
			
		},
		removeFile:function(id){
			for(var i=0;i<this.list.length;i++){
				if(id==this.list[i].id){
					this.list.splice(i,1);
				}
			}
		},
		getFile:function(id){
			for(var i=0;i<this.list.length;i++){
				if(id==this.list[i].id){
					return this.list[i];
				}
			}
			return null;
		},
		dispose:function(){
			this.list = [];
		}
	}
	// 本地上传
	function LocalUpload(opt){
		this.init(opt);
	}
	LocalUpload.prototype = {
		headOpt:{},
		title:"本地上传",
		className:"qyer_upload_local",
		status:"disable",
		max:-1,
		init:function(opt){
			$.extend(this,opt||{});
			this.photoHead = new PhotoHead($.extend(this.headOpt,{
				parent:this,
				node:"."+this.className+" .qyer_upload_item_tit"
			}));
			this.bindEvent();
		},
		bindEvent:function(){
			var me = this;
			$(this.parent).on("aftershow",function(){
				$(me).trigger("aftershow");
			});
			$(document)
			.undelegate("._jscancelup","click")
			.delegate("._jscancelup","click",function(){
				var id = $(this).attr("data-id");
				var parent = $(this).parents(".upload_file_item"),
				    file = me.upload.uploader.getFile(id);
				FileList.removeFile(id);
				me.upload.uploader.removeFile(file);
				me.upload.uploader.refresh();
				parent.remove();
				me.toggleStatus();
			})
			$(document)
			.undelegate("."+me.className+" .ui_button","click")
			.delegate("."+me.className+" .ui_button","click",function(){
				me.subUpFile();
			})
		},
		getHtml:function(){
			return '<div class="qyer_upload_local ui_tab_cnt_item">'+
			            '<div class="qyer_upload_item_tit"></div>'+
			            '<!--上传照片 -->'+
			            '<div class="qyer_upload_item_con">'+
			            	'<!--上传照片按钮 -->'+
			            	'<div id="swf_upload_container_around">'+
				            	'<div id="swf_upload_container" class="qyer_upload_upbtn">'+
				                	'<div><a id="swfuploadbut" href="javascript:void(0);">+ 上传照片</a></div>'+
				                    '<p class="mt15" style="font-size:14px;font-weight:bold;color:#c9c9c9">支持JPG、JPEG、PNG格式，每张小于10M.</p>'+
				                '</div>'+
				            	'<!--照片flash上传中 -->'+
				                '<div id="album_submit_div" class="qyer_upload_item_loading" style="display:none;">'+
				                	'<div class="qyer_upload_list" id="fsUploadProgress">'+
				                    	'<!--照片flash上传列表显示 -->'+
				                    	'<div id="UploadResult" class="qyer_upload_list_status"></div>'+
				                    '</div>'+
				                	'<div class="p10 clearfix">'+
				                        '<input type="button" id="album_submit" value="确定" class="fr ui_button_disabled" disabled="disabled">'+
				                    '</div>'+
				                '</div>'+
			                '</div>'+
			            '</div>'+
			            '<div id="warn_tips" class="qyer_upload_layout_error">'+
			        		'<img src="//static.qyer.com/images/common/tpl/icon_warn.png" alt="" class="vm mr10"><span class="fontYaHei cLightgray f14">一次上传文件过多</span>'+
			            '</div>'+
		            '</div>';
		},
		aftershow:function(){
			var me = this;
			FileList.init({
				id:"UploadResult"
			})
			this.upload = new Upload({
				browse_button:"swfuploadbut",
		        container: 'swf_upload_container',
		        drop_element: 'swf_upload_container_around',
		        filters:[
		        	{
		        		title:"images files",
		        		extensions:"jpg,jpeg,png"
		        	}
		        ],
		        max_file_size:"10mb",
		        // chunk_size:0,
		        multi_selection:me.max!=1,
		        init:{
		        	'FilesAdded': function(up, files) {
	        			plupload.each(files, function(file) {
	                  	  FileList.addFile(file);
		                });
		                me.toggleStatus();
		            },
		            'BeforeUpload': function(up, file) {
		            },
		            'UploadProgress': function(up, file) {
		            	var tmpfile = FileList.getFile(file.id);
		            	tmpfile.setStatus(file.status)
		            	tmpfile.setPercent(file.percent);
		            	me.status = "upload";
		            	me.toggleSubBtn();
		            },
		            'UploadComplete': function() {
		            	me.status = "ok";
		            	me.toggleSubBtn();
		            },
		            'FileUploaded': function(up, file, info) {
		            	var tmpfile = FileList.getFile(file.id);
		            	tmpfile.setStatus(file.status)
		            },
                    'Key':function(up,file){
                        var key = new Date().getTime(),
                            tmpfile = FileList.getFile(file.id);
                        key += parseInt(Math.random()*1000);
						key += window.QYER?(""+window.QYER.uid):"";
                        //上传多张图片时，第一个张图片先走key，然后多张图片一起走filesAdded方法，那么后边的几张图片就没有可以，无法显示。
                        //fixed：做个判断，如果无法从图片列表中获取图片，则表明是第一张图片，否则不是第一张图片，那么将从图片列表中，获取图片并添加可以，以便提交保存图片时使用。
                        if(tmpfile){
                            tmpfile.key = key;
                        }else{
                            file.key = key;
                        }

                        return key;
                    },
		            'Error': function(up, err, errTip) {
		            	// alert("上传错误");
		            	tip.tip({text:'上传错误',type:'error',time:1000});
		            	return;
		            }
		        }
			})
		},
		toggleStatus:function(){
			var me = this;
			if(FileList.list.length>0){
				$("#album_submit_div").show();
		        $("#swf_upload_container").hide();
			}else{
				me.status="disable";
				$("#album_submit_div").hide();
		        $("#swf_upload_container").show();
		        me.toggleSubBtn();
			}
		},
		toggleSubBtn:function(){
			var subBtn = $("#album_submit");
			switch(this.status){
				case "disable":
					subBtn.val("确定")
					subBtn.attr("disabled",true);
					subBtn.removeClass("ui_button").addClass("ui_button_disabled");
				    break;
				case "upload":
					subBtn.val("上传中...");
				    break;
				case "ok":
					subBtn.val("确定").attr("disabled",false).removeClass("ui_button_disabled").addClass("ui_button");
				    break;
			}
		},
		subUpFile:function(){
			var me = this,
				headParam = this.photoHead.getHeadParams(),
			    list = FileList.list,
			    address = [],
			    arr = [],
			    tmpobj;
			if(headParam.type!=undefined){
				address = [headParam.type,headParam.poiid];
			}
			for(var i=0;i<list.length;i++){
				tmpobj = {
					key:list[i].key,
					description:""
				}
				if(!$.isEmptyObject(address)){
					tmpobj.place = address;
				}
				arr.push(tmpobj)
			}
			headParam.photo = arr;

			// 上传的时候禁止再发送ajax请求
			me.status="disable";
			me.toggleSubBtn();

			dataAPI.savePhoto({
				data:headParam,
				onSuccess:function(data){
					var photos = data.data.photo,
					    plist = [];

					for(var p in photos){
						plist.push({
							id:p,
							url:photos[p]
						})
					}
					$(me).trigger("uploadimage",JSON.stringify(plist));
					me.parent.hide();
				},
				onError:function(data){
					// alert(data.data.msg||data.data);
					tip.tip({text:data.data.msg || data.data,type:'error',time:1000});
					return;
				}
			});
		},
		dispose:function(){
			$(this.photoHead).trigger("dispose");
			$(document).undelegate("._jscancelup","click");
			$(this.parent).off("aftershow");
			$(document).undelegate("."+this.className+" .ui_button","click");
			FileList.dispose();
		}
	}

	// 从我的相册选择
	function MyPhotoList(opt){
		this.init(opt);
	}
	MyPhotoList.prototype = {
		headOpt:{},
		title:"从我的相册选择",
		className:"qyer_upload_mylist",
		dataList:[],
		max:-1,
		//记录当前页
		currentPage : 1,
		pageSize : 48,
		//ajax加载标示，防止滚动时不停的加载
		loadAjaxFlag:true,
		scrollLoadOnly:true,
		currentPhotosFlag:true,
		init:function(opt){
			$.extend(this,opt||{});
			this.photoHead = new PhotoHead($.extend(this.headOpt,{
				parent:this,
				node:"."+this.className+" .qyer_upload_item_tit",
				photolistOpt:{
					label:"选择相册"
				}
			}));
			this.bindEvent();

		},
		bindEvent:function(){
			var me = this;
			$(me.photoHead.photoList).on("fireloaddata",function(){
				me.currentPhotosFlag = true;
				me.currentPage = 1;
				me.getData();
			});
			$(this.parent).on("aftershow",function(){
				$(me).trigger("aftershow");
			});
			$(document).undelegate("."+me.className+" .myPhotoList li","click").delegate("."+me.className+" .myPhotoList li","click",function(){
				if(me.max>0){
					var len = $("."+me.className).find("li[class='current']").length;
					if(!$(this).hasClass("current")&&len>=me.max){
						// alert("最多选择"+me.max+"张");
						tip.tip({text:'最多选择' + me.max + "张",type:'error',time:1000});
					}else{
						$(this).toggleClass("current")
					}
				}else{
					$(this).toggleClass("current")	
				}
			})
			$(document).undelegate("."+me.className+" #my_photo","click").delegate("."+me.className+" #my_photo","click",function(){
				me.dataList = [];
				$("."+me.className).find("li[class='current']").each(function(idx,item){
					me.dataList.push({
						id:$(item).attr("data-id"),
						url:$(item).attr("data-url")
					})

				})
				$(me).trigger("uploadimage",JSON.stringify(me.dataList));
			})
			$(document).undelegate("."+me.className+" #cancel_my_photo","click").delegate("."+me.className+" #cancel_my_photo","click",function(){
				$(me).trigger("firecancel");
			})
			
		},
		getData:function(){
			var me = this,
			    id = me.photoHead.photoList.getCurPhoto();
			dataAPI.getPhotos({
				type:"get",
				data:{
					type:"json",
					album:id,
					page:me.currentPage,
					size:me.pageSize
				},
				onSuccess:function(data){
					me.loadAjaxFlag = true;
					me.maxPageCount = Math.ceil(data.data.count/me.pageSize);
					var list = data.data.res,
					    pager = data.data.pager,
					    allcount = data.data.count,
					    arr = [],
					    $mpl = $("."+me.className).find('.myPhotoList');
					for(var i=0;i<list.length;i++){
						arr.push('<li data-id="'+list[i].id+'" data-url="'+list[i].url+'"><img src="'+list[i].url+'/80" width="80" height="80" ><div class="icon_current"><span></span></div></li>')
					}
					//判断是否还有下一页
					$mpl.find(".x-loading-page").remove();
					//判断相册是否改变，如果改变则清空列表。
					if(me.currentPhotosFlag){
						me.currentPhotosFlag = false;
						$mpl.html("");
					}
					$mpl.append('<ul class="clearfix">'+arr.join("")+'</ul>');
					if(me.maxPageCount > me.currentPage){
						$mpl.append('<div class="x-loading-page"></div>');
					}
					
					if(me.scrollLoadOnly){
						me.scrollLoadOnly = false;
						me.scrollLoad();
					}
					
				},
				onError:function(){


				}
			})
		},
		//添加滚动分页
		scrollLoad : function(){
			var m = this,
			$mpl = $("." + m.className).find(".myPhotoList"),
			mplHeight = $mpl.height();
			$mpl.on("scroll",function(){

				if(mplHeight + $mpl.scrollTop() >= $mpl[0].scrollHeight){

					if(m.loadAjaxFlag && m.currentPage < m.maxPageCount){
						m.loadAjaxFlag = false;
						m.currentPage = m.currentPage + 1;
						m.getData();
					}

				}


			})

		},
		getHtml:function(){
			return '<div class="qyer_upload_mylist ui_tab_cnt_item">'+
						'<form id="selecg" name="upfile_form" action="/api.php?action=inputupfile" method="post" enctype="multipart/form-data" target="check_file_frame">'+
			            '<div class="qyer_upload_item_tit"></div>'+
			            '<!--上传照片 -->'+
			            '<div class="qyer_upload_photo_list myPhotoList" ></div>'+
			            '<div class="p10 clearfix qyer_upload_btn">'+
			                '<input type="button" value="确定" class="ui_button fr" id="my_photo">'+
			                '<input type="button" value="取消" class="ui_button_cancel mr10 fr" id="cancel_my_photo">'+
			            '</div>'+
			            '</form>'+
		            '</div>';
		},
		dispose:function(){
			$(this.photoHead.photoList).off("fireloaddata");
			$(document).undelegate("."+this.className+" .myPhotoList li","click");
			$(document).undelegate("."+this.className+" #my_photo","click");
			$(document).undelegate("."+this.className+" #cancel_my_photo","click");
			$(this.photoHead).trigger("dispose");
		}

	}

	// 网络图片
	function NetImage(opt){
		this.init(opt);
	}
	NetImage.prototype = {
		headOpt:{},
		title:"网络图片",
		className:"qyer_upload_network",
		init:function(opt){
			$.extend(this,opt||{});
			this.photoHead = new PhotoHead($.extend(this.headOpt,{
				parent:this,
				node:"."+this.className+" .qyer_upload_item_tit"
			}));
			this.bindEvent();
		},
		bindEvent:function(){
			var me = this;
			$(this.parent).off("aftershow").on("aftershow",function(){
				$(me).trigger("aftershow");
			});
			$(document).undelegate("#web_album_submit","click").delegate("#web_album_submit","click",function(){
				if(me.status=="upload"){
					return;
				}
				var url = $("#web_img_url").val();
				if(!/^http:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&amp;=]*)?$/.test(url)){
					$(".qyer_upload_new_error").show();
				}else{
					me.status = "upload";
					$(".qyer_upload_new_error").hide();
					$(this).removeClass("ui_button").addClass("ui_button_disabled").val("上传中...");
					me.uploadNetPhoto(url);
				}
			})
		},
		getHtml:function(){
			return '<div class="qyer_upload_network ui_tab_cnt_item">'+
						'<form id="web_photo_form">'+
					        '<input type="hidden" name="type" id="poitype_data" value="">'+
					        '<input type="hidden" name="isnewalbum" id="web_isnewalbum" value="">'+
							'<input type="hidden" name="poiid" id="poiid_data" value="">'+
				            '<div class="qyer_upload_item_tit"></div>'+
				            '<div class="qyer_upload_network_url">'+
				            	'<div class="fl pr">'+
				                	'<input type="text" id="web_img_url" name="imgurl" class="ui_input" placeholder="http://" value="">'+
				                    '<!--提示有两种状态 切换里面的两个div -->'+
				                	'<div class="qyer_upload_new_error" id="web_img_url_tips"><span></span><div class="icon_error">请输入有效图片url地址</div></div>'+
				                '</div>'+
				                '<input type="button" id="web_album_submit" class="ui_button fl ml10" value="确定">'+
				                '<input type="button" class="ui_button_disabled fl ml10" value="上传中..." style="display:none;">'+
				            '</div>'+
			            '</form>'+
		            '</div>';
		},
		uploadNetPhoto:function(url){
			var me = this,
				parms = this.photoHead.getHeadParams();
			parms.imgurl = url;
			parms.size = "*";
		 	dataAPI.submitPhoto({
		 		type:"get",
		 		data:parms,
		 		onError:function(data){
		 			// alert("上传网络图片错误");
		 			tip.tip({text:'上传网络图片错误',type:'error',time:1000});
		 			return;
		 		},	
		 		onSuccess:function(data){
		 			$("."+me.className).find("#web_album_submit").val("完成");
		 			$(me).trigger("uploadimage",data.data);
		 			$(document).undelegate("#web_album_submit","click");
		 			me.parent.hide();
		 		}
	 		})
		},
		dispose:function(){
			$(this.photoHead).trigger("dispose");
			$(this.parent).off("aftershow");
		}
	}



	function UploadPopup(opt){
		this.init(opt);
	}
	UploadPopup.prototype = {
		items:[],
		max:-1,
		modelMap:{
			local:LocalUpload,
			myphoto:MyPhotoList,
			net:NetImage
		},
		modelList:[],
		tpl:'<div class="qyer_upload">__headtpl____bodytpl__</div>',
		currentClass:"ui_tab_trigger_item_current",
		init:function(opt){
			$.extend(this,opt||{});

			this.initModels();

			this.getHtml();

			this.bindEvent();
		},
		initModels:function(){
			var me = this,tmpObj;
			this.modelList = [];
			for(var i=0;i<this.items.length;i++){
				tmpObj = me.modelMap[this.items[i].model];
				tmpObj = new tmpObj($.extend(this.items[i].opt,{
					parent:me,
					max:this.max
				}));
				me.modelList.push(tmpObj);
			}
		},
		bindEvent:function(){
			var me = this,
			idx;
			$(document).undelegate(".qyer_upload_head li","click").delegate(".qyer_upload_head li","click",function(){
				me.toggleHead();
				$(this).addClass(me.currentClass);
				idx = $(this).index();
				me.hideContent();
				$(".qyer_upload_content .ui_tab_cnt_item").eq(idx).addClass("ui_tab_cnt_item_current");
				$(me.modelList[$(this).index()]).trigger("fireshow");
			});
			for(var i=0;i<this.modelList.length;i++){
				$(this.modelList[i]).on("uploadimage firecancel",function(evt,data){
					switch(evt.type){
						case "uploadimage":
							$(me).trigger("fireuploadimage",data);
							break;
						case "firecancel":
							me.hide()
						    break;
					}
				})
			}
		},
		toggleHead:function(){
            var me = this;
			$(".qyer_upload_head li").each(function(idx,item){
				$(item).removeClass(me.currentClass);
			});
		},
		hideContent:function(){
			$(".qyer_upload_content .ui_tab_cnt_item").each(function(idx,item){
				$(item).removeClass("ui_tab_cnt_item_current");
			})
		},
		getHtml:function(){
			var outstr = "",
				headHtml = this.getHeadTpl(),
				bodyHtml = this.getBodyTpl();
			outstr = this.tpl.replace(/__headtpl__/ig,headHtml);
			outstr = outstr.replace(/__bodytpl__/ig,bodyHtml);

			this.tpl = outstr;
		},
		getHeadTpl:function(){
			var me = this,outstr = [],
				tmpObj;
			for(var i=0;i<me.modelList.length;i++){
				outstr.push('<li class="ui_tab_trigger_item">'+me.modelList[i].title+'</li>');
			}
			return '<div class="qyer_upload_head">'+
				    	'<ul class="fl fb f14 ml10 fontYaHei cGray">'+
				            outstr.join("")+
				        '</ul>'+
				    '</div>';
		},
		getBodyTpl:function(){
			var me = this,
			    outstr = [];
			for(var i=0;i<me.modelList.length;i++){
				outstr.push(me.modelList[i].getHtml());
			}
			return '<div class="qyer_upload_content ui_tab_cnt">'+outstr.join("")+'</div>'
		},
		aftershow:function(){
			var firstList = $(".qyer_upload_head li").eq(0);
			$(firstList).trigger("click");
		},
		show:function(){
			var me = this;
			if(!qyerUtil.isLogin()){
				// require(['common/component/login/login'],  function   (cf) {  
	   //              cf.show();
	   //          });
				qyerUtil.doLogin();
				return;
			}
			this.popup = new popup({
				contentHTML:me.tpl,
				showTitle:false,
				showCloseIcon:true,
				exClassName:"uploadpopup",
				showOKBtn:false,
				showCancelBtn:false,
				onCancel:function(){
					me.dispose();
				}
			})
			this.popup.show();
			$(this).trigger("aftershow");
			
		},
		hide:function(){
			this.popup.hide();
			this.dispose();
		},
		dispose:function(){
			for(var i=0;i<this.modelList.length;i++){
			    $(this.modelList[i]).trigger("dispose");
			}
		}
	}
	return UploadPopup;
})
