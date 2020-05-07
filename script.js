let colorSwitch = true;
let wordSwitch = true;
let currentColor;

function changeWords() {
    if (colorSwitch) {
        target1 = document.getElementById("word1");
        const selectedColor = colorList[Math.floor(Math.random() * colorList.length)];
        target1.textContent = selectedColor
        currentColor = colorKeys[selectedColor]
    }
    
    if (wordSwitch) {
        target2 = document.getElementById("word2");
        target2.textContent = wordList[Math.floor(Math.random() * wordList.length)];        
    }

    const body = document.getElementById('body');
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    body.style.background = currentColor;
    word1.style.color = currentColor;
    word2.style.color = currentColor;
    button1.style.background = currentColor;
    button2.style.background = currentColor;

    setTimeout(function(){
        body.style.background = 'white';
        word1.style.color = 'black';
        word2.style.color = 'black';
        button1.style.background = 'white';
        button2.style.background = 'white';
    }, 30);
}

window.onload = function() {
    document.getElementById("button1").onclick = function() {
        this.innerHTML = this.innerHTML == 'Stop' ? 'Start' : 'Stop';
        colorSwitch = !colorSwitch;
    }

    document.getElementById("button2").onclick = function() {
        this.innerHTML = this.innerHTML == 'Stop' ? 'Start' : 'Stop';
        wordSwitch = !wordSwitch;
    }
  };

document.addEventListener('DOMContentLoaded', function() {
    target1 = document.getElementById("word1");
    target1.textContent = colorList[Math.floor(Math.random() * colorList.length)];
    target2 = document.getElementById("word2");
    target2.textContent = wordList[Math.floor(Math.random() * wordList.length)];       
    setInterval(changeWords, 7000);
});