window.onload = function (){
    var hour = 00
    var minutes = 58
    var seconds = 58
    var tens = 00
    var idHour = document.getElementById("hour")
    var idMinutes = document.getElementById("minutes")
    var idSeconds = document.getElementById("seconds")
    var start = document.getElementById("start")
    var pause = document.getElementById("pause")
    var reset = document.getElementById("reset")
    var interval;
    
    start.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }

    pause.onclick = function() {
        clearInterval(interval)
    }

    reset.onclick = function() {
        clearInterval(interval)
        tens = "00"
        seconds = "00"
        minutes = "00"
        hour = "00"
        idSeconds.innerHTML = seconds
        idMinutes.innerHTML = minutes
        idHourinnerHTML = hour
    }

    function startTimer(){
        tens++

        if(tens > 99){
            console.log("seconds")
            seconds++
            idSeconds.innerHTML = "0" + seconds
            tens = 0
        }

        if(seconds > 9){
            idSeconds.innerHTML = seconds
        }

        if(seconds == 59){
            seconds = 00
            minutes++
            idMinutes.innerHTML = "0" + minutes
        }

        if(minutes == 59){
            minutes = 00
            hour++
            idHour.innerHTML = "0" + hour
        }

    }

}