export const directionToMovementFunction = {
    'ArrowRight': moveRight,
    'ArrowLeft': moveLeft,
    'ArrowUp': moveUp,
    'ArrowDown': moveDown
};

function moveRight(id) {
    let parts = id.split("_");
    let row = parts[0];
    let column = parseInt(parts[1], 10) + 1;
    let newId = `${row}_${column}`;
    return newId;
}

function moveLeft(id) {
    let parts = id.split("_");
    let row = parts[0];
    let column = parseInt(parts[1], 10) - 1;
    let newId = `${row}_${column}`;
    return newId;
}

function moveUp(id) {
    let parts = id.split(" ")[1].split("_");
    let column = parts[1];
    let row = parseInt(parts[0], 10) - 1;
    let newId = `cell ${row}_${column}`;
    return newId;
}

function moveDown(id) {
    let parts = id.split(" ")[1].split("_");
    let column = parts[1];
    let row = parseInt(parts[0], 10) + 1;
    let newId = `cell ${row}_${column}`;
    return newId;
}