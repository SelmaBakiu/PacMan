import {
  isWall
} from './wall.js';
import {
  directionToMovementFunction
} from './moves.js';
import {
  containsDot
} from './dot.js';

export var ghosts = {
  ghost1: 'cell 12_12',
  ghost2: 'cell 2_24',
  ghost3: 'cell 24_2',
  ghost4: 'cell 24_24'
};


export function createGhost(id, num) {
  document.getElementById(id).classList.add(`ghost${num}`);
}

export function createScareGhost(id) {
  document.getElementById(id).classList.add(`scaredghost`);
}


export function removeGhost(id, num) {
  document.getElementById(id).classList.remove(`ghost${num}`);
}

export function removeScareGhost(id) {
  document.getElementById(id).classList.remove(`scaredghost`);
}

export function containsGhost(id) {
  return document.getElementById(id).classList.contains(`ghost1`) ||
    document.getElementById(id).classList.contains(`ghost2`) ||
    document.getElementById(id).classList.contains(`ghost3`) ||
    document.getElementById(id).classList.contains(`ghost4`);
}

export function containsScareGhost(id) {
  return document.getElementById(id).classList.contains(`scaredghost`);
}

export function moveGhost(id, num, direction) {
  removeGhost(id, num);
  removeScareGhost(id);
  let newId = directionToMovementFunction[direction](id);
  if (isWall(newId) || containsGhost(newId) || containsScareGhost(newId)) {
    newId = id;
  }
  if (document.getElementById(newId).style.transform === 'rotate(90deg)' ||
    document.getElementById(newId).style.transform === `rotate(180deg)` ||
    document.getElementById(newId).style.transform === 'rotate(270deg)') {
    document.getElementById(newId).style.transform = 'rotate(0deg)';
  }
  return newId;
}

export function calculateDirection(id, targetId, isFrightened) {
  if (isFrightened) {
      targetId = "cell " + (Math.floor(Math.random() * 24) + 1) + "_" + (Math.floor(Math.random() * 24) + 1);
    }
  const targetPos = targetId.split(' ')[1].split('_').map(Number);
  let bestDirection;
  let shortestDistance = Infinity;
  const directions = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  for (const direction of directions) {
    const newId = directionToMovementFunction[direction](id);
    if (!isWall(newId) && !containsGhost(newId)) {
      const newPos = newId.split(' ')[1].split('_').map(Number);
      const distance = Math.abs(newPos[0] - targetPos[0]) + Math.abs(newPos[1] - targetPos[1]);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        bestDirection = direction;
      }
    }
  }
  return bestDirection;
}

export function hasEnoughGhost() {
  let x = Math.floor(Math.random() * 24) + 1;
  let y = Math.floor(Math.random() * 24) + 1;
  while (isWall("cell " + x + "_" + y) || containsDot("cell " + x + "_" + y) || containsGhost("cell " + x + "_" + y)) {  
    x = Math.floor(Math.random() * 24) + 1;
    y = Math.floor(Math.random() * 24) + 1;
  }   
    for (let i = 1; i <= 4; i++) {
      if (ghosts[`ghost${i}`] === "null") {
        ghosts[`ghost${i}`] = "cell " + x + "_" + y;
        break;
      }
    }
  }