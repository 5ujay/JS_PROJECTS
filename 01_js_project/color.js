
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'one') {
            body.style.backgroundColor = '#E21717';
        }
        if (e.target.id === 'two') {
            body.style.backgroundColor = '#B9345A';
        }
        if (e.target.id === 'three') {
            body.style.backgroundColor = '#23C4ED';
        }
        if (e.target.id === 'four') {
            body.style.backgroundColor = '#3DBE29';
        }
        if (e.target.id === 'five') {
            body.style.backgroundColor = '#0D0D0D';
        }
        if (e.target.id === 'six') {
            body.style.backgroundColor = '#E07C24';
        }



    });
});

