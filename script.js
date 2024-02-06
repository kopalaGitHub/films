function itemHtml(item) {
  let html = `
            <div class="card text-light" style="background-color: #1a1a1a">
              <img
                class="card-img-top"
                src="${item.img}"
                alt="Card image cap"
              />
              <button
              style="width: 40px; background-color: #282828"
              type="button"
              class="btn rounded-circle"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@fat"
            >
              <img src="./images/icons-edit.svg" alt="" />
            </button>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img src="./images/star-svgrepo-com.svg" alt="star" />
                  <p class="m-0">${item.rating}</p>
                </div>
                <h6 class="card-title" style="height: 60px">
                  <a  href="http://127.0.0.1:5500/item.html?id=${item.id}" class ="text-decoration-none text-light"> 
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

function drowItem() {
  const container = document.getElementById("movie-list");
  for (var key in movies) {
    let html = itemHtml(movies[key]);
    let itemEl = document.createElement("div");
    itemEl.classList.add("col-sm");
    itemEl.innerHTML = html;
    container.appendChild(itemEl);
  }
}
drowItem();
