const daysel = document.getElementById('days')
const hourel = document.getElementById('hour')
const minel = document.getElementById('minute')
const secondel = document.getElementById('second')

let birthday = new Date(" June 25 , 2024  00:00:00").getTime()

update()
function update(){
    let now = new Date().getTime();
    const gap = birthday - now ;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let days = hour * 24;


    let d = Math.floor(gap/days)
    let h = Math.floor((gap%days) / hour);
    let m = Math.floor((gap%hour) / minute);
    let s = Math.floor((gap%minute) / second);

    daysel.innerText = d;
    hourel.innerText = h;
    minel.innerText = m;
    secondel.innerText = s;

    setTimeout(() => {
        update()
    }, 100);
}