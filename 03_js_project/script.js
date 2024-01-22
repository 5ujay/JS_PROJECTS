const clock = document.getElementById('clock');
// const colock = document.querySelector("#clock");

// imp for interview*****

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)