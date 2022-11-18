const clock = document.getElementById("clock");

function getTime(){
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return "" + 
        (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" +
        (sec < 10 ? ("0" + sec) : sec);        
}

clock.innerHTML = getTime();

setInterval(() =>{
    clock.innerHTML = getTime();
}, 100);

