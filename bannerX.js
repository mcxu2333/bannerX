

; (function (global, $) {

    if (typeof $ === 'undefined') {

        throwError('需要引入jQuery文件');
    }

    //构造函数
    let BannerX = function (ele, opt) {

        this.$element = ele;
        this.defaults = {
            width: '365px',
            height: '200px',
        };
        this.setting = $.extend({}, this.defaults, opt)
    };
    //方法
    BannerX.prototype = {
        banner: function () {
            let $this = this,
                index = 1,
                html = '<div class="imgBox">';
            $.each(this.setting.imgs, function (i, item) {

                html += '<img src="' + item + '" alt="' + item + '" title="' + item + '" />';
            });
            html += '</div>';
            html += '<button class="left">&lt;</button>';
            html += '<button class="right">&gt;</button>';
            this.$element.append(html);
            this.$element.css({ 'width': this.setting.width, 'height': this.setting.height, 'position': 'relative' });

            this.$element.find('img').each(function (i, item) {

                $(this).css({ 'left': ((parseInt($this.setting.width) * (i - 1)) + 'px') });
                debugger;
            });

            this.$element.find('.right').on('click', function () {

                $(this).parent().find('img').each(function () {

                    $(this).animate({ 'left': (parseInt($(this).css('left')) - parseInt($this.setting.width)) + 'px' }, 2000);
                });

                index++;
            })

            this.$element.find('.left').on('click', function () {

                $(this).parent().find('img').each(function () {

                    $(this).animate({ 'left': (parseInt($(this).css('left')) + parseInt($this.setting.width)) + 'px' }, 2000);
                    index--;
                });
            });

            return this.$element;
        }
    };
    //在插件中使用方法
    $.fn.bannerX = function (opt) {

        let banner_x = new BannerX(this, opt);
        return banner_x.banner();
    }

})(this, window.jQuery)

