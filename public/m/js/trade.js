$(function() {

    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button":".top div a",
        "page":".main"
    });

    function Select(obj){
        this.button = obj.button;
        this.options = obj.options;
        this.mask = obj.mask;
        this.doms = this.button.add(this.options).add(this.mask);
        var that = this;
        this.button.on("click",function(){
            if($(this).is(".active")){
                that.hide(that.doms);
            }else{
                that.show(that.doms);
            }
        });
        this.mask.on("touchstart",function(){
            that.hide(that.doms);
        });
    }
    Select.prototype.show = function(doms){
        doms.addClass("visible")
        setTimeout(function(){
            doms.addClass("active");
        },16.7);
    }
    Select.prototype.hide = function(doms){
        doms.removeClass("active");
        setTimeout(function(){
            doms.removeClass("visible")
        },300);
    }



    var selectObj = new Select({
        button:$(".select-type"),
        options:$(".select-type-options"),
        mask:$(".black-mask")
    });

});
