// $符号获取id
function $(id) { return document.getElementById(id);}
// 元素显示
function show(obj) { obj.style.display = "block";}
// 元素隐藏
function hide(obj) { obj.style.display = "none";}

// 兼容获取scroll的top,left值,使用方法: scroll.top, scroll.left
function scroll() {
    if(window.pageXOffset != null) { // ie9 +  最新浏览器
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if(document.compatMode == "CSS1Compat") { // 标准浏览器
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else { // 怪异浏览器
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}

// 兼容获取client的width,height值,使用方法: client.width, client.height
function client() {
    if(window.innerWidth != null || window.innerHeight != null) { // ie9 +  最新浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if(document.compatMode === "CSS1Compat") { // 标准浏览器
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    } else {
        return {   // 怪异浏览器
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}
