function baseFontSize() {
    var maxFontSize = 24;
    var rootfontsize = window.innerWidth / 20; // 最宽就是20rem
    rootfontsize = rootfontsize > maxFontSize ? maxFontSize : rootfontsize;
    document.documentElement.style.fontSize = rootfontsize + "px"
    return rootfontsize;
}
var rem = baseFontSize();
window.addEventListener("resize", function() {
    rem = baseFontSize();
}, false);
