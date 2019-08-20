var button = document.querySelector('button');

var para = document.querySelector('p');

var body = document.querySelector('body');

var isPurple = false;

button.addEventListener('click', function () {
    if (isPurple) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'purple';

    }
    isPurple = !isPurple;
});

// button.addEventListener('click', changeBackground);

// function changeText() {
//     para.textContent = 'Someone Clicked The Button!';
// }