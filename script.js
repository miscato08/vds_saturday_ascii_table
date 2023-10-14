const asciiContainer = document.getElementById('asciiContainer');

const cellSize = 10  //size of each cell

for (let i = 0; i < window.innerWidth * window.innerHeight / (cellSize * cellSize + 1); i++) {

    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = getRandomAsciiCharacters();
    asciiContainer.appendChild(cell);

}

document.addEventListener('mousemove', updateAsciiTemplate);

function updateAsciiTemplate(event) { }

function getRandomAsciiCharacters() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    return chars[Math.floor(Math.random() * chars.length)];
}