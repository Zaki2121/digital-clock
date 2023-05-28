let time = document.querySelector("#time");
let date = document.querySelector("#date");


setInterval(() => {

    today();

}, 1000);




// let data;

// if (localStorage.getItem("date") === null) {

//     data = [];

// } else {
//     data = JSON.parse(localStorage.getItem("date"));



// }

// data.push(currentDate, currentTime);


// localStorage.setItem("date", JSON.stringify(data));

function today() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const DayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let today = new Date();

    console.log(today.getDay());


    let currentTime = `${today.getHours() < 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() < 9 ? '0' + today.getSeconds() : today.getSeconds()} `;

    let currentDate = `${DayNames[today.getDay()]} , ${today.getDate()} 
     ${monthNames[today.getMonth()]}  ${today.getFullYear()}`;
    // console.log(currentDate)

    console.log(today.getDay());
    date.innerHTML = currentDate

    time.innerHTML = currentTime;



}


