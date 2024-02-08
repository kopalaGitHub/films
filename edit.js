function editHtml(item) {
  let html = `
    <div
      class="modal fade"
      id="exampleModal${item.id}"
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
                <p>ID:${item.id} </p>
              </div>
              <div class="form-group">
                <label for="recipient-name${item.id}" class="col-form-label">
                Movie Name:
                </label>
                <input type="text" value="${item.title}" class="form-control" autocomplete="off" id="recipient-name${item.id}" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Description:</label
                >
                <textarea class="form-control" id="message-text" >${item.description}</textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" onclick="nameChange(${item.id})">Save</button>
          </div>
        </div>
      </div>
    </div>
    `;
  return html;
}

function nameChange(id) {
  let name = document.getElementById("recipient-name" + id).value;
  movies[id - 1].title = name;
  drowItem();
}
function drowEditItem() {
  const container = document.getElementById("editItem");
  for (var key in movies) {
    let html = editHtml(movies[key]);
    let itemEl = document.createElement("div");
    itemEl.innerHTML = html;
    container.appendChild(itemEl);
  }
}
drowEditItem();
