$(function() {

    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button":".top div a",
        "page":".main"
    });

    var imgSwiper = new Swiper('.swiper-image', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true, //可选选项，开启循环
        pagination: '.pagination',
        preloadImages: true,
    });

});
