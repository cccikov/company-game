testData1 = [{
    "a": "我是游戏名",
    "b": "50MB",
    "c": "即时",
    "d": "Lorem ipsum dolor.",
    "url":"http://www.baidu.com",
    "imgurl":"/public/m/images/test/test_02.png",
    "downloadUrl": "/public/m/images/arrow.png",
    "exclusive": true,
    "discount": 4.8,
    "first":"5日首发"
}, {
    "a": "我是游戏名",
    "b": "50MB",
    "c": "即时",
    "d": "Lorem ipsum dolor.",
    "url":"http://www.baidu.com",
    "imgurl":"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
    "downloadUrl": "/public/m/images/arrow.png",
    "exclusive": true,
    "discount": 4.8
}, {
    "a": "我是游戏名",
    "b": "50MB",
    "c": "即时",
    "d": "Lorem ipsum dolor.",
    "url":"http://www.baidu.com",
    "imgurl":"/public/m/images/test/test_02.png",
    "downloadUrl": "/public/m/images/arrow.png",
}, {
    "a": "我是游戏名",
    "b": "50MB",
    "c": "即时",
    "d": "Lorem ipsum dolor.",
    "url":"http://www.baidu.com",
    "imgurl":"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
    "downloadUrl": "/public/m/images/arrow.png",
    "exclusive": true,
}, {
    "a": "我是游戏名",
    "b": "50MB",
    "c": "即时",
    "d": "Lorem ipsum dolor.",
    "url":"http://www.baidu.com",
    "imgurl":"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
    "downloadUrl": "/public/m/images/arrow.png",
    "exclusive": false,
}];

function testAjax(fn) {
    var data = Math.random() > 0.2 ? testData1 : [];
    setTimeout(function() {
        fn && fn(data);
    }, 1500);
}
