const watchlist = document.getElementsByClassName("watchlist");
const counter = document.getElementById("counter");
let counterToNum = Number(counter.innerHTML);

for (let i = 0; i < watchlist.length; i++) {
  watchlist[i].addEventListener("click", function () {
    counterToNum++;
    counter.innerHTML = counterToNum;
    watchlist[i].style.display = "none";
    drowItem();
  });
}

function GetRemoveButtonHtml() {
  let html = `
    <a href="#" class="btn m-auto w-100" style="background-color: #2c2c2c; color: #5497e5">
        <span  class="fw-bold text-danger">Remove </span>
    </a>
    `;
  return html;
}
function drowItem() {
  const container = document.getElementById("button_container");
  let itemEl = document.createElement("div");
  itemEl.innerHTML = GetRemoveButtonHtml();
  container.appendChild(itemEl);
  itemEl.addEventListener("click", function () {
    counterToNum--;
    counter.innerHTML = counterToNum;
    itemEl.remove();
  });
}

// const watchlist = document.getElementsByClassName("watchlist");
// const counter = document.getElementById("counter");
// let counterToNum = Number(counter.innerHTML);
// const container = document.getElementsByClassName("button_container");
// console.log(container);

// for (let i = 0; i < watchlist.length; i++) {
//   watchlist[i].addEventListener("click", function () {
//     counterToNum++;
//     counter.innerHTML = counterToNum;
//     watchlist[i].style.display = "none";
//     drowItem();
//   });
// }
// function GetWatchlistHtml() {
//   let html = `
//   <a href="#" class="btn m-auto w-100 watchlist" style="background-color: #2c2c2c; color: #5497e5">
//       <img src="./images/plus-large-svgrepo-com.svg" alt="" />
//       <span  class="fw-bold">watchlist</span>
//   </a>
//   `;
//   return html;
// }
// function GetRemoveHtml() {
//   let html = `
//     <a href="#" class="btn m-auto w-100" style="background-color: #2c2c2c; color: #5497e5">
//         <span  class="fw-bold text-danger">Remove </span>
//     </a>
//     `;
//   return html;
// }
// function DrowRemoveButton(container) {
//   const container = document.getElementsByClassName("button_container");
//   let itemEl = document.createElement("div");
//   itemEl.innerHTML = GetRemoveButtonHtml();
//   container.appendChild(itemEl);
//   itemEl.addEventListener("click", function () {
//     counterToNum--;
//     counter.innerHTML = counterToNum;
//     itemEl.remove();
//   });
// }
// function DrowWatchlistButton() {
//   const container = document.getElementsByClassName("button_container");
//   let itemEl = document.createElement("div");
//   itemEl.innerHTML = GetRemoveButtonHtml();
//   container.appendChild(itemEl);
//   itemEl.addEventListener("click", function () {
//     counterToNum--;
//     counter.innerHTML = counterToNum;
//     itemEl.remove();
//   });
// }
