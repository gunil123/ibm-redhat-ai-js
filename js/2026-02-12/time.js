//1초마다움직이는시계
function updateClock(){
    let now = new Date();

    let hours=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    
    if(hours<10){
        hours='0'+hours;
    }
    if(min<10){
        min='0'+min;
    }
    if(sec<10){
        sec='0'+sec;
    }
    //div태그 객체 사이에 텍스트 띄운다
    let n = document.getElementById('clock').textContent 
    = `${hours}:${min}:${sec}`;
}


setInterval(updateClock, 1000);