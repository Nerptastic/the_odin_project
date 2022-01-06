const container = document.querySelector('.container');

const eraseButton = document.getElementById('eraseButton');

eraseButton.onclick = () => clearGrid();

function createGrid (dimension) { 
    if (dimension > 100) {
        createGrid(prompt("What size?"));
        return;
    }
    let gridArea = dimension * dimension;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    } 
    var pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor));
}

function changeColor(e) {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearGrid() {
    var pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.style.backgroundColor = 'rgb(255, 255, 255)');
    container.innerHTML = '';
    createGrid(prompt("What size?"));
}

createGrid(prompt("What size?"));

