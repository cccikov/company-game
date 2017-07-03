$(function() {

    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button": ".top div a",
        "page": ".main"
    });

    var imgSwiper = new Swiper('.swiper-image', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true, //可选选项，开启循环
        pagination: '.pagination',
        preloadImages: true,
    });

    var onlineScroll = new Scroll({
        scroller: $(".online"),
        bottom: $(".online .list-item").last()
    });
    onlineScroll.getData = function(tar) {
        var _this = this;
        _this.canGet = false;
        testAjax1(function(result) {
            var len = result.length;
            if (len > 0) {
                _this.canGet = true;
                result.forEach(function(key, index) {
                    var newLi = $('<li class="list-item" data-href="http://www.baidu.com">' +
                        '<img src="/public/m/images/test/test_02.png">' +
                        '<div class="item-middle">' +
                        '<h5>' + key.a + '<span class="discount">' + key.discount + '</span></h5>' +
                        '<p>' +
                        '<span class="item-intro">' + key.b + '</span>' +
                        '<span class="item-intro">' + key.c + '</span>' +
                        '<span class="item-label ori item-label-first">' + key.first + '首发</span>' +
                        '<span class="item-label green item-label-exclusive">独家活动</span>' +
                        '</p>' +
                        '<p>' + key.d + '</p>' +
                        '</div>' +
                        '<a class="item-action" href="' + key.download + '" download=""></a>' +
                        '</li>');
                    if(!key.first){
                        newLi.find(".item-label-first").remove();
                    }
                    if (!key.exclusive) {
                        newLi.find(".item-label-exclusive").remove();
                    }

                    newLi.insertBefore(".online .load-msg");
                });
            } else {
                console.log("全部加载完毕");
                $(".online .load-msg").addClass("allLoad");
            }
        });
    }

});
