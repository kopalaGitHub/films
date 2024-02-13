function cut(id) {
  const element = document.getElementById("card" + id);
  let parentDiv = element.parentNode;
  parentDiv.remove();
  movies.splice(id - 1, 1);
}
