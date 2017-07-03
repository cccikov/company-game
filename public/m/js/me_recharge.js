$(function(){

    var input = $("input");
    var a = $(".recharge_major a");
    a.on("click",function(){
        var that = $(this);
        that.addClass("active").siblings('a').removeClass("active");
        var val = that.html();
        input[0].value = val;
    });

    input.on("input",function(){
        a.removeClass("active");
    });

});