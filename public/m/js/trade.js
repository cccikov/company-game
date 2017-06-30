$(function() {

    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button": ".top div a",
        "page": ".main"
    });

    var selectObj = new Select({
        button: $(".select-type"),
        options: $(".select-type-options"),
        mask: $(".black-mask")
    });
    selectObj.onselect = function(e,tar){
        var html = tar.html();
        selectObj.button.html(html);
        selectObj.hide();
    }
});


/**
 * [Select description]
 * @param {[type]} obj [description]
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
Select.prototype.show = function() {
    var _this = this;
    _this.doms.addClass("visible")
    setTimeout(function() {
        _this.doms.addClass("active");
    }, 16.7);
}
Select.prototype.hide = function() {
    var _this = this;
    _this.doms.removeClass("active");
    setTimeout(function() {
        _this.doms.removeClass("visible")
    }, 300);
}
Select.prototype.onselect = function(event, tar) {
    var _this = this;
    console.log(event);
    console.log(tar);
}
