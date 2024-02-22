function movieItemHtml(item) {
  let html = `
            <div class="card text-light" style="background-color: #1a1a1a;  max-width:250px">
              <img
                style="max-height:250px;"
                class="card-img-top"
                src="${item.img}"
                alt="Card image cap"
              />
              <button
                id="formBtn${item.id}"  
                style="width: 40px; background-color: #282828"
                type="button"
                class="btn rounded-circle"
                data-toggle="modal"
                data-target="#movie-form-${item.id}"
                data-whatever="@fat"  
                onclick="movieEditForm(${item.id})"
              >
                <img src="./images/icons-edit.svg"  alt="" />
              </button>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img src="./images/star-svgrepo-com.svg" alt="star" />
                  <p class="m-0">${item.rating}</p>
                </div>
                <h6 class="card-title" style="height: 60px">
                  <a  href="http://127.0.0.1:5500/item.html?id=${item.id}" id="title${item.id}" class ="text-decoration-none text-light"> 
                    ${item.title}
                  </a>
                </h6>
                <div id="button_container">
                  <a
                    href="#"
                    class="btn m-auto w-100 watchlist"
                    style="background-color: #2c2c2c; color: #5497e5"
                  >
                    <img src="./images/plus-large-svgrepo-com.svg" alt="" />
                    <span  class="fw-bold">watchlist</span>
                  </a>
                </div>
                <a href="#" class="btn m-auto w-100 text-light">
                  <img
                    src="./images/media-playback-start-svgrepo-com.svg"
                    alt=""
                  />
                  <span>Trailer</span>
                </a>
              </div>
            </div>

  `;
  return html;
}

// create el

function creatMovieItems() {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";
  for (var key in movies) {
    let html = movieItemHtml(movies[key]);
    let itemEl = document.createElement("div");
    itemEl.setAttribute("id", "card-" + movies[key].id);
    itemEl.classList.add("col-lg-2", "col-md-6");
    itemEl.innerHTML = html;
    container.appendChild(itemEl);
    console.log(key);
  }
}
function getItemIndexById(id) {
  let index = null;
  for (var key in movies) {
    if (movies[key].id == id) {
      index = key;
    }
  }
  if (index == null) {
    return false;
  } else {
    return index;
  }
}

// edit js

function movieEditForm(id) {
  const index = getItemIndexById(id);
  const html = editHtml(movies[index]);
  document.getElementById("editItem").innerHTML += html;
}

function closeClickBtn(id) {
  const index = getItemIndexById(id);
  let name = document.getElementById("recipient-name" + movies[index].id);
  name.value = movies[index].title;
  console.log(name);
  document.getElementById("movie-form-" + movies[index].id).remove();
}
function nameChange(id) {
  const index = getItemIndexById(id);
  let name = document.getElementById("recipient-name" + movies[index].id).value;
  const element = document.getElementById("title" + movies[index].id);
  movies[index].title = name;
  element.innerHTML = movies[index].title;
  document.getElementById("movie-form-" + movies[index].id).remove();
  console.log(index);
}

function deleteMovie(id) {
  const index = getItemIndexById(id);
  const element = document.getElementById("card-" + id);
  element.remove();
  movies.splice(index, 1);
}
// app start
creatMovieItems();
