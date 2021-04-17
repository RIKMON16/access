let fortunes = ["Europe about to open in 2 days.", "Web dev is important for all age group.", "Keep Smiling, luck is on your side",
"Bobby sucks"]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector() {
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomFortune];
}

function showFortune() {
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Came back Tomorrow!";
    button.style.cursor = 'default';
    button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);
