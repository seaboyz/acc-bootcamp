var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var bodyElement = document.getElementsByTagName('body')[0];

var colorIndex = 0;



timeElement = document.getElementsByClassName('time')[0];

function changeBackgroundColorAndTime() {
    // get time now
    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    timeElement.innerHTML = time;
    // change background color
    colorIndex++;

    if (colorIndex > colors.length){
      colorIndex = 0;  
    }

    bodyElement.style.background = colors[colorIndex];
}
changeBackgroundColorAndTime();
setInterval(changeBackgroundColorAndTime, 1000);

