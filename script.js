const p1btn = document.querySelector(".p1btn");
const p2btn = document.querySelector(".p2btn");
const resetbtn = document.querySelector(".reset");
const p1display = document.querySelector(".p1score");
const p2display = document.querySelector(".p2score");
const winningScoreoption = document.querySelector("#playto");
const img = document.querySelector("img");

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

p1btn.addEventListener("click", function () {
  if (!isGameOver) {
    if (p1score < winningScore) {
      p1score++;
      p1display.textContent = p1score;
      img.src =
        "https://i.pinimg.com/originals/b4/84/d0/b484d03d20712467566596863e2692b7.jpg";
      setTimeout(function () {
        img.src = "https://wallpaperaccess.com/full/2338216.jpg";
      }, 5000);
    } else {
      isGameOver = true;
      p1display.classList.add("has-text-success");
      p2display.classList.add("has-text-danger");
      img.src =
        "https://media1.tenor.com/images/ae75da1032dd3d4152251fc30cd9edd6/tenor.gif?itemid=16258129";
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
  }
});

p2btn.addEventListener("click", function () {
  if (!isGameOver) {
    if (p2score < winningScore) {
      p2score++;
      p2display.textContent = p2score;
      img.src =
        "https://s3.getstickerpack.com/storage/uploads/sticker-pack/milk-mocha-bear-ig-milkmochabear/sticker_20.png?c66211078bc1f5d7c3a277d50b8c5968&d=200x200";
      setTimeout(function () {
        img.src = "https://wallpaperaccess.com/full/2338216.jpg";
      }, 5000);
    } else {
      isGameOver = true;
      p2display.classList.add("has-text-success");
      p1display.classList.add("has-text-danger");
      img.src =
        "https://media1.tenor.com/images/ae75da1032dd3d4152251fc30cd9edd6/tenor.gif?itemid=16258129";
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
  }
});

winningScoreoption.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetbtn.addEventListener("click", reset);

function reset() {
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;
  isGameOver = false;
  p1display.classList.remove("has-text-danger", "has-text-success");
  p2display.classList.remove("has-text-danger", "has-text-success");
  img.src = "https://wallpaperaccess.com/full/2338216.jpg";
  p1btn.disabled = false;
  p2btn.disabled = false;
}
