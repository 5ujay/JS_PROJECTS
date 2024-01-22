// generate a random color

const randomColor = function () {
    // setting a hexa value 
    const hex = "012345092323ABCDEF"

    let color = "#"

    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 18)]
    }
    return color
}

// console.log(randomColor());

// const randomValue = (Math.floor(Math.random() * 18))

// start changing color
let intervalID;
const startChangingColor = function () {
    if (intervalID == null) {
        intervalID = setInterval(changeBckColor, 1000)
    }

    function changeBckColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

document.querySelector("#start")
    .addEventListener("click", startChangingColor)

// stop changing color
const stopChangingColor = function () {
    clearInterval(intervalID)
    intervalID = null;
}

document.querySelector("#stop")
    .addEventListener("click", stopChangingColor)