let table = document.body.firstElementChild;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    table.rows[i].cells[j].innerHTML = (i + 1) * (j + 1);
  }
}
