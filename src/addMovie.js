function addMovieBtn(item) {
  let html = `
    <div
        class="position-absolute cursor-pointer"
        style="top: 100px; right: 100px; z-index: 2;"
        data-toggle="modal"
        data-target="#addMovies${item.id + 1}"
        data-whatever="@fat"

      >
        <h4 class="text-light bg-success rounded px-3 py-2">Add Movie</h4>
      </div>
    `;
  return html;
}
function addMovieEdit(item) {
  let html = `
      <div
        class="modal fade"
        id="addMovies${item.id + 1}"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <p>ID:${item.id + 1} </p>
                </div>
                <div class="form-group">
                  <label for="recipient-name${item.id}" class="col-form-label">
                  Movie Name:
                  </label>
                  <input type="text" placeholder="Enter Movie Title" class="form-control" autocomplete="off" id="newMovieTitle" />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Description:</label
                  >
                  <textarea class="form-control" id="message-text" ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeClickBtn(${
                item.id
              })" >
                Close
              </button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="addNewMovie(${
                item.id
              })">Save</button>
            </div>
          </div>
        </div>
      </div>
      `;

  return html;
}
function drowAddButton() {
  const addButton = document.getElementById("addItemBtn");
  let itemEl = document.createElement("div");
  itemEl.innerHTML = addMovieBtn(movies[movies.length - 1]);
  addButton.appendChild(itemEl);
  drowAddContent();
}
function drowAddContent() {
  const addContent = document.getElementById("addItemContent");
  let itemEl = document.createElement("div");
  itemEl.innerHTML = addMovieEdit(movies[movies.length - 1]);
  addContent.innerHTML = "";
  addContent.appendChild(itemEl);
}
function addNewMovie() {
  let newTitle = document.getElementById("newMovieTitle").value;

  movies.push({
    id: movies[movies.length - 1].id + 1,
    title: newTitle,
    img: "./images/img-6.jpeg",
    rating: 8.8,
    description: "",
  });
  drowItem();
  console.log(movies);
}
drowAddButton();
