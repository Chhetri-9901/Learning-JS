const key = document.querySelector('.keys');
const allAudios = document.querySelectorAll("audio");

const letters = new Map([
    ['a', 65],
    ['s', 83],
    ['d', 68],
    ['f', 70],
    ['g', 71],
    ['h', 72],
    ['j', 74],
    ['k', 75],
    ['l', 76],
]);

const lettersLen = letters.size;

function playAudio(audioTag) {
    const playAudio = document.querySelector(`audio[data-key="${audioTag}"]`)
    playAudio.play()
}

function getDataKey() {
    key.addEventListener('click', (e) => {
        let clickedkey = e.target.closest('.key');
        if (!clickedkey) {
            return;
        }
        let clickedKeyValue = clickedkey.dataset.key;
        console.log(clickedKeyValue)
        playAudio(clickedKeyValue)
    })

    window.addEventListener('keydown', (e) => {
        let pressedKey = e.key.toLowerCase();
        let callKey = letters.get(pressedKey);

        if (callKey == undefined || callKey == null) {
            return;
        }
        else {
            playAudio(letters.get(pressedKey));
        }
    })
}


document.addEventListener("DOMContentLoaded", function () {
    getDataKey();
})