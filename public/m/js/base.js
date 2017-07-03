/**
 * 设置 根元素 html 字体大小 用于给定rem相对长度单位
 * @return {number} html的字体大小
 */
function baseFontSize() {
    var maxFontSize = 30;
    var rootfontsize = window.innerWidth / 20; // 最宽就是20rem
    rootfontsize = rootfontsize > maxFontSize ? maxFontSize : rootfontsize;
    document.documentElement.style.fontSize = rootfontsize + "px"
    return rootfontsize;
}
var rem = baseFontSize(); // rem相当于字体大小
window.addEventListener("resize", function() {
    rem = baseFontSize();
}, false);

/**
 * 滑屏
 * @param {object} obj 包含两个属性
 * obj.page - string Swiper容器的css选择器
 * obj.button - string 滑屏对应按钮的css选择器
 */
function PageSwiper(obj) {
    var _this = this;
    _this.button = $(obj.button);
    _this.page = obj.page;
    // 实例属性swiperObj为一个Swiper对象
    _this.swiperObj = new Swiper(_this.page, {
        onSlideChangeEnd: function(swiper) { // 滑屏完成后触发事件 - 切换 滑屏对应按钮 对应状态
            var _index = swiper.activeIndex;
            _this.button.eq(_index).addClass("active").siblings('a').removeClass("active");
        }
    });
    // 给滑屏对应按钮 绑定 click事件的监听器
    _this.button.on("click", function() {
        var that = $(this);
        var _index = that.addClass('active').index();
        that.siblings("a").removeClass("active");
        _this.swiperObj.slideTo(_index);
    });
}

/**
 * 滑动到底刷新
 */


/**
 * textarea自适应高度
 * @param {原生dom} dom 需要自适应高度的textarea原生dom对象
 *
 * 注意 该textarea的border-top border-bottom必须是1px
 *      必须已经设置box-sizing:border-box
 */
 function AutoHeightTextarea(dom){
     var _this = this;
     _this.dom = dom;
     _this.dom.addEventListener("input", fn(_this.dom), false);
 }
 AutoHeightTextarea.prototype._fn = function(dom){
     var originHeight = dom.offsetHeight;
     return function(e) {
         // console.log(e, this);
         this.style.height = originHeight + "px"
         var offsetHeight = this.offsetHeight
         var scrollHeight = this.scrollHeight + 2
         if (scrollHeight > offsetHeight) {
             this.style.height = scrollHeight + "px";
         }
     }
 }

