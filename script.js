// const Date1 = new Date('2024-10-09T00:00:00');
// const Date2 = new Date();

/*
// let Difference = Date1.getTime() - Date2.getTime();
//get days
let DaysDifference = Date1.getDay() - Date2.getDay();
let dayres;
console.log(DaysDifference);

//get hour

let hourDifference = Date1.getHours() - Date2.getHours();
let hourresult;
if(hourDifference<0){
    result = 23+hourDifference;
    console.log(result);
}
else{
    console.log(hourDifference);
}

//get minute
let minuteDifference = Date1.getMinutes() - Date2.getMinutes();
let minuteres;
if(minuteDifference<0){
    minuteres = 59+minuteDifference;
    console.log(minuteres);
}
else{
    console.log(minuteDifference);
}

//get second
function second(){
let secondDifference = Date1.getSeconds() - Date2.getSeconds();
let secondres;
if(secondDifference<0){
    secondres = 59+secondDifference;
    console.log(secondres);
}
else{
    console.log(minuteDifference);
}
}


setInterval(second,1000);
*/

// let daysLeft = Math.floor(Difference/(1000*60*60*24));
// let hoursLeft = Math.floor(Difference/(1000*60*60));
// let minutesLeft = Math.floor(Difference/(1000*60));
// let secondLeft = Math.floor(Difference/1000);

// console.log(daysLeft);
// console.log(hoursLeft);
// console.log(minutesLeft);
// console.log(secondLeft);

const Date1 = new Date('2024-10-09T00:00:00');
let h1 = document.querySelectorAll("h1");
let body = document.querySelector("body");

function time() {
    const Date2 = new Date(); // Get the current date and time in each iteration

    // Calculate the difference in milliseconds between Date1 and Date2
    let differenceMs = Date1.getTime() - Date2.getTime();

    // Convert milliseconds to days, hours, minutes, and seconds
    let DaysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    let hourDifference = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuteDifference = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    let secondDifference = Math.floor((differenceMs % (1000 * 60)) / 1000);

    const Days = document.querySelector('.Days')
    const Hours = document.querySelector('.Hours')
    const Minutes = document.querySelector('.Minutes')
    const Seconds = document.querySelector('.Seconds')

    DaysDifference <10 ? Days.innerText = "0" + DaysDifference : Days.innerText = DaysDifference;
    hourDifference < 10 ? Hours.innerText = "0" + hourDifference : Hours.innerText = hourDifference;
    minuteDifference < 10 ? Minutes.innerText = "0" + minuteDifference : Minutes.innerText = minuteDifference;
    secondDifference < 10 ? Seconds.innerText = "0" + secondDifference : Seconds.innerText = secondDifference;

    body.style.display = "block";
    

}
setTimeout(()=>{setInterval(time, 1000);},10)



