let counter = 0;

document.querySelector('button').addEventListener('click', () => {
    ++counter;
});

setTimeout(() => {
    if(counter > 5) {
        alert('You won!');
    }else {
        alert('Sorry, you lost!');
    }
}, 2000)