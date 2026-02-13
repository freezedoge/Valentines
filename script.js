const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("mainGif");
const details = document.getElementById("details");
const loveMusic = document.getElementById("loveMusic");

let noCount = 0;
let yesScale = 1;
let noScale = 1;

function moveNoButton() {
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 120 + "px";
}

noBtn.addEventListener("click", () => {
  noCount++;

  yesScale += 0.25;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

  noScale -= 0.15;
  noBtn.style.transform = `translateX(-50%) scale(${Math.max(noScale, 0.1)})`;

  question.textContent = "Are you sure?" + "!".repeat(noCount);

  if (noCount >= 6) noBtn.style.display = "none";
});

noBtn.addEventListener("mouseenter", () => {
  if (noCount >= 3) moveNoButton();
});

noBtn.addEventListener("touchstart", (e) => {
  if (noCount >= 3) {
    e.preventDefault();
    moveNoButton();
  }
});

yesBtn.addEventListener("click", () => {
  question.textContent = "IT'S A DATE!!! 💕😽💘";

  gif.src = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";
  gif.style.transform = "scale(1.2)";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  details.style.display = "block";
  explodeFlowers();

  loveMusic.volume = 0.6;
  loveMusic.play();
});

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 500);

function explodeFlowers() {
  const flowers = ["🌸","🌼","🌺","🌷","💐"];
  for (let i = 0; i < 60; i++) {
    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    f.style.left = "50%";
    f.style.top = "50%";
    f.style.setProperty("--x", (Math.random()-0.5)*600 + "px");
    f.style.setProperty("--y", (Math.random()-0.5)*600 + "px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1500);
  }
}
