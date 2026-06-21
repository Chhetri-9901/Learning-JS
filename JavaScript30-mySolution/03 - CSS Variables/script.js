const allInputs = document.querySelectorAll('.controls input')

function updateColors() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

allInputs.forEach((input) => {
    input.addEventListener('click', updateColors);
    input.addEventListener('mousemove', updateColors);
})