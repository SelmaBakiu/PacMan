import {
    isWall
} from './wall.js';
import {
    directionToMovementFunction
} from './moves.js';


export function createPacMan(id) {
    document.getElementById(id).classList.add('pacman');
}

export function movePacMan(id, direction) {
    removePacMan(id);
    let moveFunction = directionToMovementFunction[direction];
    let newId = moveFunction(id);
    document.getElementById(newId).style.transform = `rotate(${direction === 'ArrowRight' ? 0 : direction === 'ArrowDown' ? 90 : direction === 'ArrowLeft' ? 180 : 270}deg)`;
    if (isWall(newId)) {
        newId = id;
    }
    return newId;
}

export function removePacMan(id) {
    document.getElementById(id).classList.remove('pacman');
}

export function containsPacMan(id) {
    return document.getElementById(id).classList.contains('pacman');
}