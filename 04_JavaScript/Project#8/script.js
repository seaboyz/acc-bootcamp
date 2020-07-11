(function clock() {

    var secondHand = document.getElementById("second");
    var minuteHand = document.getElementById("minute");
    var hourHand = document.getElementById("hour");

    function click() {
        var today = new Date();
        var second = today.getSeconds();
        var minute = today.getMinutes();
        var hour = today.getHours();
    
        secondHand.style.transform = "rotate(" + second * 6 + "deg)";
        minuteHand.style.transform = "rotate(" + minute * 6 + "deg)";
        hourHand.style.transform = "rotate(" + hour * 30 + "deg)";
    }
    
    click();
    setInterval(click, 1000);
}());


