function baseFontSize() {
    var maxFontSize = 30;
    var rootfontsize = window.innerWidth / 20; // 最宽就是20rem
    rootfontsize = rootfontsize > maxFontSize ? maxFontSize : rootfontsize;
    document.documentElement.style.fontSize = rootfontsize + "px"
    return rootfontsize;
}
var rem = baseFontSize();
window.addEventListener("resize", function() {
    rem = baseFontSize();
}, false);


function PageSwiper(obj) {
    this.button = $(obj.button);
    this.page = obj.page;
    var that = this;
    that.swiperObj = new Swiper(that.page, {
        width:window.innerWidth,
        onSlideChangeEnd: function(swiper) {
            var _index = swiper.activeIndex;
            that.button.eq(_index).addClass("active").siblings('a').removeClass("active");
        }
    });
    this.button.on("click", function() {
        var that = $(this);
        var _index = that.addClass('active').index();
        that.siblings("a").removeClass("active");
        mySwiper.slideTo(_index);
    });
}
