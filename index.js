function time() {
    var timer = new Date();
    var hour = timer.getHours();
    var min = timer.getMinutes();
    if (hour < 10) {
        hour = "0" + hour + ":";
    } else {
        hour = hour + ":";
    }
    if (min < 10) {
        min = "0" + min + "";
    } else {
        min = min + "";
    }
    document.querySelector(".time").innerHTML = hour + '' + min;
    setTimeout(time, 1000);
}
