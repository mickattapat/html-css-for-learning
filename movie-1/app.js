// let imgs = []
// let text = ''
// for (let index = 0; index <= 7; index++) {
//   console.log(index);
//   imgs.push(`<div class="movie-list-item">
//   <img class="movie-list-item-img" src="img/1.jpeg" alt="">
//   <span class="movie-list-item-title">Her</span>
//   <p class="movie-list-item-desc">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati accusamus sequi eveniet
//     laborum consectetur, dolorem aliquid numquam fugiat, esse tempore cupiditate suscipit assumenda. Quam
//     reiciendis qui quaerat impedit dolore?
//   </p>
//   <button class="movie-list-item-button">watch</button>
//   </div>`)
// }
// for (let i = 0; i < imgs.length; i++) {
//   text += imgs[i];
// }
// console.log(text);
// document.getElementById('item-img').innerHTML = text
// console.log(document.getElementById('item-img'));



const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll('img').length
  let clickCouter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270)
    if (itemNumber - (3 + clickCouter) + (3 - ratio) >= 0) {
      clickCouter++
      movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 270}px)`
    } else {
      movieList[i].style.transform = "translateX(0)"
      clickCouter = 0
    }
  })
})

// TOGGLE
const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.logo,.movie-list-title,.navbar,.navbar-container,.sidebar,.left-menu-icon,.toggle,.body")
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})