const form = document.querySelector('form');
// this will give u empty value asA page loads
// const weight = parseInt(document.querySelector("weight").value)


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results");
    //isNaN(height) height != 0
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height'
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight'
    } else {
        const bmi = (weight / ((height * height) / 10000).toFixed(2))
        if (parseInt(bmi) < 18) {
            results.innerHTML = `${bmi} you are under weight`
        } else if (parseInt(bmi) > 24) {
            results.innerHTML = `${bmi} you are over weight`
        } else if (parseInt(bmi) > 18 || parseInt(bmi) < 24) {
            results.innerHTML = `${bmi} you are in normal range`
        }
    }

})