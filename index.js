const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);   
}

function randomColor() {
    const char = "0123456789abcdef";
    const colorcodelength = 6;
    let colorcode = "";
    for (let index = 0; index < colorcodelength; index++) {
        const randomNum = Math.floor(Math.random() * char.length); 
        colorcode += char.substring(randomNum, randomNum + 1);
    }
    return colorcode;
}

const colorContainerEls = document.querySelectorAll(".color-container");

colorGenerator();

function colorGenerator() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = randomColor();
        colorContainerEl.innerText = "#" + newColor;
        colorContainerEl.style.backgroundColor = "#" + newColor;
    })    
}