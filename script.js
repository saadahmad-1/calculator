document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        if (this.id === 'clear') {
            display.value = '';
        } else if (this.id === 'equals') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += this.getAttribute('data-num');
        }
    });
});
