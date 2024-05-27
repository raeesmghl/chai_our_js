

let start = document.querySelector('#start');

let stop = document.querySelector('#stop');


let randomColor = function () {
    let hex = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}


let settingInterval;

let startChangingColor = function () {
    
    if(!settingInterval){
    settingInterval = setInterval(changeBgColor, 500);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

let stopChangingColor = function () {
    clearInterval(settingInterval);
    settingInterval = null;
};



start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
