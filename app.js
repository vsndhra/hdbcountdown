const timeleft = document.getElementById("time-left")
const text = document.getElementById("pretext")
const birthday = new Date("03/13/2023")
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 //millisecond
let timerId


function countdown(){
    const today = new Date()
    const timeSpan = birthday - today;
    

    if (timeSpan <= -day) {
        timeleft.innerHTML = "Hope you had a nice Birthday!!!"
        clearInterval(timerId)
        return
    }
    else if(timeSpan <=0) {
        timeleft.innerHTML = "Happy Birthday!!!"
        clearInterval(timerId)
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour )
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
    text.innerHTML = "Until the nm ext one... <br><br>"
    timeleft.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds "

    //timeleft.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} secnods `

}

timerId = setInterval(countdown, second)