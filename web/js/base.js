if (window.location.protocol.substr(0, 4) === "file") {
    alert("请在服务器环境打开，本地无法运行！！！");
}
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
            _this._action && _this._action(_index); //如果对象有_action
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
PageSwiper.prototype._action = function(index) {}

/**
 * 滑动到底刷新
 * @param {object} obj 一个包含两个属性的对象
 *
 * obj.scroller 滚动条条jq对象
 * obj.bottom 滚动条里面最底的元素(用于判断是否到底)
 */
function Scroll(obj) {
    var _this = this;
    _this.scroller = obj.scroller; // 滚动条条对象
    _this.bottom = obj.bottom; // 滚动条里面最底的元素
    _this.canGet = true; // 用来标记是否会执行onscroll函数 , 避免多次加载数据
    _this.scroller.on("scroll", function(e) {
        _this.onscroll(e, $(this));
        // _this._onscroll(e, $(this));
    });
}
Scroll.prototype.onscroll = function(event, tar) {
    var _this = this;
    var that = tar;
    // console.log(_this,tar,event);
    var clientH = _this.scroller.height();
    var jqOffsetT = _this.bottom.offset().top;
    if (jqOffsetT < clientH) {
        _this.canGet && _this.getData(tar);
    }
}
Scroll.prototype.getData = function(tar) {
        var _this = this;
        console.log("到底");
    }
    /*Scroll.prototype._onscroll = function(event, tar) { // 原生判断是否到底
        var _this = this;
        var that = tar;
        // console.log(_this,tar,event);
        var clientH = _this.scroller.height();
        var scrollt = _this.scroller[0].scrollTop;
        var offsetT = _this.bottom[0].offsetTop;
        if (scrollt + clientH > offsetT) {
            _this.canGet && _this.getData(tar);
        }
    }*/


/**
 * textarea自适应高度
 * @param {原生dom} dom 需要自适应高度的textarea原生dom对象
 *
 * 注意 该textarea的border-top border-bottom必须是1px
 *      必须已经设置box-sizing:border-box
 */
function AutoHeightTextarea(dom) {
    var _this = this;
    _this.dom = dom;
    _this.dom.addEventListener("input", _this._fn(_this.dom), false);
}
AutoHeightTextarea.prototype._fn = function(dom) {
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
