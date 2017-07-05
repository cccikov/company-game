$(function() {




    /* 网游 h5游戏切换 */
    var pageSwi = new PageSwiper({
        "button": ".top div a",
        "page": ".main"
    });

    /* 图片轮播 */
    var imgSwiper = new Swiper('.swiper-image', {
        autoplay: 5000, //可选选项，自动滑动
        loop: true, //可选选项，开启循环
        pagination: '.pagination',
        preloadImages: true,
    });

    /* 列表 点击跳转 */
    $(".content").on("click", "li.list-item", function(e) {
        var tar = $(e.target);
        var that = $(this);
        that.addClass("touching");
        (tar.is(".item-action")) || (window.location.href = that.attr("data-href"));
        setTimeout(function() {
            that.removeClass("touching");
        }, 200);
    });

    /* 网游 到底加载 */
    var onlineScroll = new Scroll({
        scroller: $(".online"),
        bottom: $(".online .list-item").last()
    });
    onlineScroll.canGet = true; // 如果一开始就没有更多数据可以直接设置为false;
    onlineScroll.getData = function(tar) {
        var _this = this;
        _this.canGet = false; // 用来标记是否会执行getData函数 , 避免多次加载数据
        testAjax(function(result) {
            var len = result.length;
            if (len > 0) {
                _this.canGet = true;
                result.forEach(function(key, index) {
                    var newLi = $(".temple .tpl1").clone().removeClass("tpl1");
                    newLi.attr("data-href", key.url);
                    newLi.find("img").attr("src", key.imgurl);
                    newLi.find("h5").html(key.discount ? key.a + '<span class="discount">' + key.discount + '折</span>' : key.a);
                    newLi.find(".item-intro").eq(0).html(key.b);
                    newLi.find(".item-intro").eq(1).html(key.c);
                    if (key.first) {
                        newLi.find(".ori").html(key.first + "首发");
                    } else {
                        newLi.find(".ori").remove();
                    }
                    if (!key.exclusive) {
                        newLi.find(".green").remove();
                    }
                    newLi.find("p").eq(1).html(key.d);
                    newLi.insertBefore(".online .load-msg");
                });
            } else {
                $(".online .load-msg").addClass("allLoad");
            }
        });
    };




    loadH5(function(){
        // 这里写异步加载h5游戏页面的代码
        testAjax(function(result) {
            var len = result.length;
            if (len > 0) {
                result.forEach(function(key, index) {
                    var newLi = $(".temple .tpl2").clone().removeClass("tpl2");
                    newLi.insertBefore(".web .load-msg");
                });
            } else {
                $(".web .load-msg").addClass("allLoad");
            }
        });
    });

    // 一种情况是网游那边加载好后加载
    // 还有一种是切换到h5的时候加载
    // 但是两种加载只触发其中一个
    function loadH5(fn) {
        var hasLoaded = false;
        pageSwi._action = function(index) { //切换页面时触发的函数
            if (hasLoaded) {
                pageSwi._action = null;
            } else {
                if (index === 1) {
                    console.log("切换页面时触发的函数");
                    hasLoaded = true;
                    pageSwi._action = null;
                    fn && fn();
                }
            }
        }

        complete(function() { // 页面图片加载是触发的函数
            if(!hasLoaded){
                console.log("页面图片加载是触发的函数");
                hasLoaded = true;
                pageSwi._action = null;
                fn && fn();
            }
        });
    }

    // 以下应该写在loadH5 ajax 加载后的回调函数里面
    /* h5游戏 到底加载 */
    var h5Scroll = new Scroll({
        scroller: $(".web"),
        bottom: $(".web .list-item").last()
    });
    // h5Scroll.canGet = true;
    // $(".web .load-msg").addClass("allLoad");
    h5Scroll.getData = function() {
        var _this = this;
        _this.canGet = false; // 用来标记是否会执行getData函数 , 避免多次加载数据
        testAjax(function(result) {
            var len = result.length;
            if (len > 0) {
                _this.canGet = true;
                result.forEach(function(key, index) {
                    var newLi = $(".temple .tpl2").clone().removeClass("tpl2");
                    newLi.insertBefore(".web .load-msg");
                });
            } else {
                $(".web .load-msg").addClass("allLoad");
            }
        });
    }

});

function complete(fn) {
    var img = $("img");
    var len = img.size();
    var loadNum = 0;
    img.on("load", function() {
        loadNum++;
        if (loadNum == len) {
            fn && fn();
        }
    });
}


