// dom on read
$(function() {
    var floater = {
        $floater: $('.zw-module-sidefloater-wrap'),
        $footer: $('.zw-footer'),
        $totop: $('#gototop'),
        wh: $(window).height(),
        init: function() {
            this.bind_event();
        },
        bind_event: function() {
            var that = this;
            this.$totop.on('click', function() {
                $('html,body').animate({
                    'scrollTop': '0'
                }, 500)
            })
            $(window).on('scroll', function(evt) {
                that.window_scroll(this)
            })
        },
        window_scroll: function(aEl) {

            var st = $('body').scrollTop() || $(document).scrollTop() || $('html').scrollTop(),
                offset = 320;

            if (st > offset) {

                if (this.$floater.is(":hidden")) this.$floater.fadeIn(300);

                if (this.$footer.offset() && st + 200 + this.$floater.height() >= this.$footer.offset().top) {
                    this.$floater.css({
                        'position': 'absolute',
                        'top': this.$footer.offset().top - this.$floater.height(),
                    })
                } else {
                    this.$floater.css({
                        'position': 'fixed',
                        'top': '200px'
                    })
                }
            } else {
                if (this.$floater.is(":visible")) this.$floater.fadeOut('fast');
            }

            if (st > 760) {
                if (this.$totop.is(":hidden")) this.$totop.fadeIn(400);
            } else {
                if (this.$totop.is(":visible")) this.$totop.fadeOut(400);
            }
        }
    }
    floater.init();
});