let counter = Number(localStorage.getItem('counterNumber')) || 0;
let autoIncrement = null;

document.querySelector('.counter').textContent = `${counter}`;

document.querySelector('.Tap').addEventListener('click', () => {
    counter += 1;
    localStorage.setItem('counterNumber', counter);
    document.querySelector('.counter').textContent = `${counter}`;
});

document.querySelector('.Reset').addEventListener('click', () => {
    localStorage.removeItem('counterNumber');
    counter = 0;
    document.querySelector('.counter').textContent = `${counter}`;
});

document.querySelector('.Auto').addEventListener('click', () => {
    if (autoIncrement) {
        clearInterval(autoIncrement);
        autoIncrement = null;
        document.querySelector('.Auto').textContent = "Start Auto";
    } else {
        autoIncrement = setInterval(() => {
            counter += 1;
            localStorage.setItem('counterNumber', counter);
            document.querySelector('.counter').textContent = `${counter}`;
        }, 2000);
        document.querySelector('.Auto').textContent = "Stop Auto";
    }
});
