const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function getTime() {
    let currentTime = new Date();

    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hour = currentTime.getHours();

    let secondsDegree = (seconds/60)*360+90;
    let minutesDegree = (minutes/60)*360+90;
    let hourDegree = (hour/12)*360+90;

    if(seconds == 0) {
        secondHand.style.transition = 'none';
    }
    else {
        secondHand.style.transition = '';
    }

    if(minutes == 0) {
        secondHand.style.transition = 'none';
    }
    else {
        secondHand.style.transition = '';
    }

    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(getTime, 1000);