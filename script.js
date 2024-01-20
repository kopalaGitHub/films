const container = document.getElementById("container");
const movies = [
  { title: "Office Uprising", img: "./images/img-1.jpeg" },
  { title: "klaus", img: "./images/img-2.jpg" },
  { title: "mausi", img: "./images/img-3.jpg" },
  { title: "miki", img: "./images/img-4.png" },
  { title: "macBook is cool", img: "./images/img-5.jpg" },
  { title: "windows is bad", img: "./images/img-6.jpeg" },
];
const titles = [
  "Office Uprising",
  "klaus",
  "mausi",
  "miki",
  "macBook is cool",
  "windows is bad",
];
const images = [
  "./images/img-1.jpeg",
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "./images/img-4.png",
  "./images/img-5.jpg",
  "./images/img-6.jpeg",
];
function itemHtml(number) {
  let itemEl = document.createElement("div");
  itemEl.classList.add("col-sm");
  itemEl.innerHTML = `
            <div class="card text-light" style="background-color: #1a1a1a">
              <img
                class="card-img-top"
                src="${movies[number].img}"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img src="./images/star-svgrepo-com.svg" alt="star" />
                  <p class="m-0">5.1</p>
                </div>
                <h6 class="card-title" style="height: 60px">
                 ${movies[number].title}
                </h6>
                <a
                  href="#"
                  class="btn m-auto w-100"
                  style="background-color: #2c2c2c; color: #5497e5"
                >
                  <img src="./images/plus-large-svgrepo-com.svg" alt="" />
                  <span class="fw-bold">watchlist</span>
                </a>
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
  container.appendChild(itemEl);
}
function drowItems() {
  for (let i = 0; i < 6; i++) {
    itemHtml(i);
  }
}
drowItems();
