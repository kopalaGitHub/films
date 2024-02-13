const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const id = urlParams.get("id");
console.log(id);

const item = movies[id - 1];
console.log(item);

function itemHtml(item) {
  let html = `
  <div class="bg-dark" style="height: 100vh">
    <div class="d-flex align-items-center border border-warning rounded w-50">
      <img src="${item.img}" alt="" class="m-4" style="height:350px;"/>
      <div>
        <h1 class="text-primary">${item.title}</h1>
        <p class="text-light w-75">
          ${item.description}
        </p>
      </div>
    </div>
  </div>
  
    `;
  return html;
}

function drowMovie() {
  const wrapper = document.getElementById("wrapper");
  let itemEl = document.createElement("div");
  itemEl.innerHTML = itemHtml(item);
  wrapper.appendChild(itemEl);
}
drowMovie();
