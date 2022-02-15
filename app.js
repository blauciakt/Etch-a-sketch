function generateGrid(size) {

    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i<256; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        grid.insertAdjacentElement('beforeend', square);
}

};

generateGrid(16);

function changeSize(input) {
    generateGrid(input);
};