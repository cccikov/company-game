$(function() {

    var button = $(".button");
    var list = $(".action-list");
    var mask = $(".mask");
    var winW = $(window).width();
    var winH = $(window).height();
    var moveMaxX = winW - 60;
    var moveMaxY = winH - 60;
    var x = winW - 60;
    var y = winH / 2 - 15;
    moveTo(x, y);

    function showList() {
        list.add(mask).addClass("show");
        setTimeout(function() {
            list.add(mask).addClass("active");
        }, 16.7);
    }

    function hideList() {
        list.add(mask).removeClass("active");
        setTimeout(function() {
            list.add(mask).removeClass("show");
        }, 280);
        button.removeClass("active");
    }

    function moveTo(x, y) {
        button.css("transform", "translate3d(" + x + "px , " + y + "px , 0)")
    }

    button.on("click", function() {
        var that = $(this);
        if (that.is(".active")) {
            that.removeClass("active");
            hideList();
        } else {
            that.addClass("active");
            showList();
        }
    }).on("touchstart", function(event) {
        var that = $(this);
        var e = event.originalEvent.touches[0];

        // 起点
        var originX = e.clientX;
        var originY = e.clientY;

        that.on("touchmove", function(event) { // 注册 touchmove事件 的监听器
            var that = $(this);
            event.preventDefault(); // 默认事件就是会让屏幕上下左右滚动(滚动条,或者下拉,上滑等)
            var e = event.originalEvent.touches[0];

            // move 触发时的点
            var moveX = e.clientX;
            var moveY = e.clientY;

            // 算出移动了的距离
            var deltaX = moveX - originX;
            var deltaY = moveY - originY;

            // 改变
            x += deltaX;
            y += deltaY;
            if (x < 0) {
                x = 0;
            }
            if (x > moveMaxX) {
                x = moveMaxX;
            }
            if (y < 0) {
                y = 0;
            }
            if (y > moveMaxY) {
                y = moveMaxY;
            }
            moveTo(x, y);

            // 这次的move触发时的点,作为下一次move触发时的起点
            originX = moveX;
            originY = moveY;
        });

    }).on("touchend", function() {
        var that = $(this);
        that.off("touchmove"); // 移除 touchmove事件 的监听器

        // 中点坐标
        var midX = x + 30;
        var midY = y + 30;

        // 与上 右 下 左 的距离
        var arr = [midY - 0, winW - midX, winH - midY, midX - 0];
        var _index = arr.indexOf(Math.min.apply(null, arr)); // 哪个距离最短

        switch (_index) {
            case 0:
                y = 0;
                break;
            case 1:
                x = moveMaxX;
                break;
            case 2:
                y = moveMaxY;
                break;
            case 3:
                x = 0;
                break;
        }

        that.addClass("animation");
        moveTo(x, y);
        setTimeout(function(){
            that.removeClass("animation");
        }, 180);
    });

    mask.on("click", function() {
        hideList();
    });
});
