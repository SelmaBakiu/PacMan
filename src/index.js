import {
  createCells,
} from "./components/cell.js";
import {
  dotPositions,
  createDot,
  createcherry,
  containsDot,
  removeDot,
  containscherry,
  removecherry
} from "./components/dot.js";
import {
  containsPacMan,
  createPacMan,
  movePacMan,
} from "./components/pacman.js";
import {
  createWalls,
  wallPositions
} from "./components/wall.js";
import {
  createGhost,
  moveGhost,
  createScareGhost,
  removeScareGhost,
  containsScareGhost,
  containsGhost,
  ghosts,
  calculateDirection,
  hasEnoughGhost
} from "./components/ghost.js";

// Create cells
createCells("container");

//Create letters
for (const [i, value] of Object.entries(wallPositions)) {
  for (const j of value) {
    createWalls(`cell ${i}_${j}`);
  }
}

// Create dots
for (const [i, value] of Object.entries(dotPositions)) {
  for (const j of value) {
    createDot(`cell ${i}_${j}`);
  }
}

// Create big dots
createcherry('cell 7_20');
createcherry('cell 18_20');
createcherry('cell 17_6');
createcherry('cell 6_17');

// Create Ghosts
for (let i = 1; i <= 4; i++) {
  createGhost(ghosts[`ghost${i}`], i);
}

// Make ghosts scared
var scared = false;

// Create PacMan
var pacManId = "cell 1_1";
createPacMan(pacManId);
var canmove = false;
document.getElementById("play").addEventListener("click", () => {
  canmove = true;
});
//Create lives
var lives = 4;
var score = 0;

// Move PacMan and calculate score
let direction = 'ArrowRight';
document.addEventListener('keyup', (event) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    direction = event.key;
  }
});

var pacManInterval = setInterval(() => {
  if (canmove && lives > 0) {
    pacManId = movePacMan(pacManId, direction);
    gameOver(pacManId);
    score += calculateScore(pacManId);
    createPacMan(pacManId);
    document.getElementById("scoreValue").innerHTML = score;
    if (score === 470) {
      document.getElementById("gameWinScreen").style.visibility = "visible";
    }
  }
}, 200);

// Calculate score
function calculateScore(id) {
  if (containsDot(id)) {
    removeDot(id);
    return 1;
  }
  if (containscherry(id)) {
    removecherry(id);
    scared = true;
    setTimeout(() => {
      scared = false;
      // console.log("scared", scared);
    }, 5000);
    return 10;
  }
  return 0;
}

// Move Ghosts 
var ghostInterval = setInterval(() => {
  if (!canmove) {
    return;
  }
  for (let i = 1; i <= 4; i++) {
    // console.log("ghost", ghosts[`ghost${i}`]);
    if (ghosts[`ghost${i}`] != "null") {
      const direction = calculateDirection(ghosts[`ghost${i}`], pacManId, scared);
      const newId = moveGhost(ghosts[`ghost${i}`], i, direction);
      gameOver(newId);
      ghosts[`ghost${i}`] = newId;
      if (scared) {
        createScareGhost(newId);
      } else {
        removeScareGhost(newId);
        createGhost(newId, i);
      }
    }
  }
  if (!scared) {
    hasEnoughGhost();
  }
}, 400);

// Check if PacMan has eaten a ghost
setInterval(() => {
  if (containsScareGhost(pacManId)) {
    removeScareGhost(pacManId);
    for (let i = 1; i <= 4; i++) {
      if (ghosts[`ghost${i}`] === pacManId) {
        ghosts[`ghost${i}`] = "null";
      }
    }
  }
}, 100);

// Check if PacMan has been eaten by a ghost

function gameOver(id) {
  if (!scared && (containsPacMan(id) || containsGhost(id))) {
    document.getElementById(id).classList.remove('pacman');
    lives--;
    if (lives === 3) {
      document.getElementById("life1").style.backgroundImage = "url('../src/images/whiteHart.png')";
      createPacMan("cell 1_1");
      pacManId = "cell 1_1";
    }
    if (lives === 2) {
      document.getElementById("life2").style.backgroundImage = "url('../src/images/whiteHart.png')";
      createPacMan("cell 1_1");
      pacManId = "cell 1_1";
    }
    if (lives === 1) {
      document.getElementById("life3").style.backgroundImage = "url('../src/images/whiteHart.png')";
      createPacMan("cell 1_1");
      pacManId = "cell 1_1";
    }
    if (lives === 0) {
      document.getElementById(id).classList.remove('pacman');
      var audio = new Audio('./src/sounds/pacman_death.wav');
      audio.play();
      setTimeout(() => {
        document.getElementById("gameOverScreen").style.visibility = "visible"
      }, 50);
    }
  }
}


// Pause the game when the tab is not visible
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(pacManInterval);
    clearInterval(ghostInterval);
  } else {
    pacManInterval = setInterval(() => {
      if (canmove && lives > 0) {
        pacManId = movePacMan(pacManId, direction);
        gameOver(pacManId);
        score += calculateScore(pacManId);
        createPacMan(pacManId);
        document.getElementById("scoreValue").innerHTML = score;
        if (score === 470) {
          document.getElementById("gameWinScreen").style.visibility = "visible";
        }
      }
    }, 200);
    ghostInterval = setInterval(() => {
      if (!canmove) {
        return;
      }
      for (let i = 1; i <= 4; i++) {
        // console.log("ghost", ghosts[`ghost${i}`]);
        if (ghosts[`ghost${i}`] != "null") {
          const direction = calculateDirection(ghosts[`ghost${i}`], pacManId, scared);
          const newId = moveGhost(ghosts[`ghost${i}`], i, direction);
          gameOver(newId);
          ghosts[`ghost${i}`] = newId;
          if (scared) {
            createScareGhost(newId);
          } else {
            removeScareGhost(newId);
            createGhost(newId, i);
          }
        }
      }
      hasEnoughGhost();
    }, 400);
  }
});