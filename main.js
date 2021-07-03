var song = document.getElementById('song');
var otis = document.getElementById('otis');
var animCtrlBtn = document.querySelector('.anim-ctrl');
var offOn = document.querySelector('.off-on');

var intervalId;

function startAnim () {
    invervalId = window.setInterval(() => {
        imageFlipper();
    }, 600);
}

function stopAnim () {
    clearInterval(invervalId);
}

function imageFlipper () {
    if (song.duration >= 0 && !song.paused) {
        if (otis.className === 'forward') {
            otis.className = 'backward';
        } else {
            otis.className = 'forward';
        }
    }
}

offOn.textContent = "ON";

animCtrlBtn.addEventListener('click', () => {
    if (offOn.textContent === "ON") {
        offOn.textContent = "OFF";
        stopAnim();
    } else {
        offOn.textContent = "ON";
        startAnim();
    }
});
