export const dotPositions = {
  1: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  2: [1, 2, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24],
  3: [1, 2, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24],
  4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  6: [1, 2, 3, 4, 8, 9, 13, 14, 18, 22, 23, 24],
  7: [1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 18, 21, 22, 23, 24],
  8: [1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 18, 21, 22, 23, 24],
  9: [1, 2, 3, 4, 6, 7, 8, 9, 13, 14, 18, 20, 21, 22, 23, 24],
  10: [1, 2, 3, 4, 8, 9, 13, 14, 17, 18, 22, 23, 24],
  11: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  13: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  14: [1, 2, 3, 5, 6, 8, 10, 13, 14, 18, 22, 23, 24],
  15: [1, 2, 3, 5, 6, 8, 10, 14, 16, 17, 18, 22, 23, 24],
  16: [1, 2, 3, 5, 6, 8, 10, 14, 17, 18, 22, 23, 24],
  17: [1, 2, 3, 5, 8, 10, 14, 16, 17, 18, 21, 22, 23, 24],
  18: [1, 2, 3, 4, 7, 8, 10, 13, 14, 18, 22, 23, 24],
  19: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  21: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  22: [1, 2, 3, 11, 12, 13, 14, 22, 23, 24],
  23: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  24: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
};


export function createDot(id) {
  document.getElementById(id).classList.add('dot');
}

export function containsDot(id) {
  return document.getElementById(id).classList.contains('dot');
}

export function removeDot(id) {
  document.getElementById(id).classList.remove('dot');
}

export function createcherry(id) {
  document.getElementById(id).classList.add('cherry');
}

export function containscherry(id) {
  return document.getElementById(id).classList.contains('cherry');
}

export function removecherry(id) {
  document.getElementById(id).classList.remove('cherry');
}