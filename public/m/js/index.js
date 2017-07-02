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

    var indexScroll = new Scroll();
    indexScroll.onscroll = function(e,tar){
        var _this = this;
        var that = tar;
        // console.log(_this,tar);
    }

});


function Scroll(obj){
    var _this = this;
    _this.scroller = $(".online");
     _this.scroller.on("scroll",function(e){
        _this.onscroll(e, $(this));
     });
}
Scroll.prototype.onscroll = function(event,tar){
    var _this = this;
};