testData1 = [{
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "download": "/public/m/images/arrow.png",
    "exclusive": true,
    "discount": 4.8
}, {
    "a": "a",
    "b": "135MB",
    "c": "即时",
    "d": "d",
    "download": "/public/m/images/arrow.png",
    "first": "30日",
    "exclusive": false,
    "discount": 4.8
}, {
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "download": "/public/m/images/arrow.png",
    "first": "20日",
    "exclusive": true,
    "discount": 4.8
}, {
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "download": "/public/m/images/arrow.png",
    "first": "20日",
    "exclusive": true,
    "discount": 4.8
}, {
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "download": "/public/m/images/arrow.png",
    "first": "20日",
    "exclusive": true,
    "discount": 4.8
}];

function testAjax1(fn) {
    var data = Math.random() > 0.2 ? testData1 : [];
    setTimeout(function() {
        fn && fn(data);
    }, 1500);
}
