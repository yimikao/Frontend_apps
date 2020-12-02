const countdownFromDate = new Date('Jan 30, 2021 12:00:00').toDateString();
//Now we have to get the distance till then by converting
//the whole time to millisec value for easy math operatiuon
const thenTime = new Date('Jan 30,2021 12:00:00').getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = thenTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 *60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 *60*24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown-from').innerHTML = 
    countdownFromDate;

    document.getElementById('timer').innerHTML = `
    <span style ="color:gray">is</span> ${days}d ${hours}h ${minutes}m ${seconds}s
    `

    if (timeRemaining < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'time expired'
    }
}, 1000);