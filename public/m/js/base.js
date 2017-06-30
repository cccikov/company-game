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
    var _this = this;
    _this.swiperObj = new Swiper(_this.page, {
        onSlideChangeEnd: function(swiper) {
            var _index = swiper.activeIndex;
            _this.button.eq(_index).addClass("active").siblings('a').removeClass("active");
        }
    });
    this.button.on("click", function() {
        var _this = $(this);
        var _index = _this.addClass('active').index();
        _this.siblings("a").removeClass("active");
        mySwiper.slideTo(_index);
    });
}
