$(function() {

    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button": ".top div a",
        "page": ".main"
    });

    // 选择买号排序
    var selectObj = new Select({
        button: $(".select-type"),
        options: $(".select-type-options"),
        mask: $(".black-mask")
    });
    selectObj.onselect = function(e,tar){// 选择 最新发布，最高价格，最低价格 触发事件
        var html = tar.html();
        selectObj.button.html(html);
        selectObj.hide();
        console.log("选择 最新发布，最高价格，最低价格 : " + html);
    }
});


/**
 * 选择买号排序功能
 * @param {object} obj 包含三个属性
 * obj.button - 选择排序功能 jq对象
 * obj.options - 排序方式列表 jq对象
 * obj.mask - 蒙层 jq对象
 */
function Select(obj) {
    this.button = obj.button;
    this.options = obj.options;
    this.mask = obj.mask;
    this.doms = this.button.add(this.options).add(this.mask);
    var _this = this;
    this.button.on("click", function() {
        var that = $(this);
        if (that.is(".active")) {
            _this.hide();
        } else {
            _this.show();
        }
    });
    this.mask.on("touchstart", function() {
        _this.hide();
    });
    this.options.find("a").on("click", function(e) {
        _this.onselect(e, $(this));
    });
}
/*显示蒙层,选择列表 方法*/
Select.prototype.show = function() {
    var _this = this;
    _this.doms.addClass("visible")
    setTimeout(function() {
        _this.doms.addClass("active");
    }, 16.7);
}
/*隐藏蒙层,选择列表 方法*/
Select.prototype.hide = function() {
    var _this = this;
    _this.doms.removeClass("active");
    setTimeout(function() {
        _this.doms.removeClass("visible")
    }, 300);
}
/*列表选中时的运行的方法*/
Select.prototype.onselect = function(event, tar) {
    var _this = this;
    console.log(event);
    console.log(tar);
}
