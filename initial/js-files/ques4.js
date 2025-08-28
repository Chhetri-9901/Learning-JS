const userInput = document.querySelector('#user-text');
let userInputValue = document.querySelector('.user-input-value');
const userInputButton = document.querySelector('.user-input-button');

userInputButton.addEventListener('click', function() {
    userInputValue.textContent = userInput.value;
    userInputValue.classList.add('visible');
})


