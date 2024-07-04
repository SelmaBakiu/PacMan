export function createCells(id) {
  const element = document.getElementById(id);
  for (let i = 0; i <= 25; i++) {
    const row = document.createElement("div");
    row.className = 'row';
    row.id = `row${i}`;
    element.appendChild(row);
    for (let j = 0; j <= 25; j++) {
      const cell = document.createElement("div");
      cell.classList.add('cell');
      cell.id = `cell ${i}_${j}`;
      row.appendChild(cell);
    }
  }
}