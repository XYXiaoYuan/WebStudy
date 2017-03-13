function $(id) { return document.getElementById(id);}

function show(obj) { obj.style.display = "block";}

function hide(obj) { obj.style.display = "none";}

function scroll() {
    if(window.pageXOffset != null) { // w3c的浏览器
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if(document.compatMode == "CSS1Compat") { // commonMode模式的
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else { // 其它
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}
