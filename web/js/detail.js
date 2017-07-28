$(function(){
    /* 详细 开服 礼包 买号切换 */
    var pageSwi = new PageSwiper({
        "button": ".top-button a",
        "page": ".main-middle"
    });

    var imgSwiper = new Swiper('.detail-img .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 10,
        // freeModeMomentum : false,
        freeMode: true
    });

    $(".more").on("click",function(){
        $(this).hide();
        $(".brief").removeClass("hide");
    });
});