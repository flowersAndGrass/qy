require(["operation_show","utils","web_qui_quidialog"],function(n,t,i){var r=new i({});$(function(){var t={$order_list:$(".order-list"),operation:new n,init:function(){this.bindEvent()},bindEvent:function(){var n=this;this.$order_list.on("click",".supplement-info,.apply-refund,.refound-info,.add_comment,.show_comment",function(t){n.clickOp(this)}),$(".cancelOrderBtn").on("click",this.cancelOrder.bind(this))},cancelOrder:function(n){var t=this,i=$(n.currentTarget),o=i.attr("data-api"),e=i.attr("data-lname");r.confirm({type:"warning",title:"取消订单",text:"你确定要取消订购 "+e+" 吗？",cancelText:"不，我要保留订单",okText:"确定取消",onOK:function(){t.cancelOrderSubmit(o)}})},cancelOrderSubmit:function(n){$.ajax({url:n,success:function(){window.location.reload()},error:function(){window.location.reload()}})},clickOp:function(n){var t=$(n),i=t.attr("data-type"),r=t.attr("data-orderid");this.operation.operation(i,{id:{orderid:r},data:{orderid:r},callback:function(n){}})}};t.init()})});