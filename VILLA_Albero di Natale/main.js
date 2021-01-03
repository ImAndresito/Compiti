function darkmode() {
  document.body.classList.toggle("darkmode");
}

const color_btn = document.querySelector("#btn_1");

let bottone = false;

function getRandomColor() {
  let hex_colors = Math.floor(Math.random() * 16777215).toString(16);
  let color = "#";
  color += hex_colors;
  return color;
}

function start() {
  let pallina = "pallina_";
  if (bottone) {
    for (i = 1; i < 9; i++) {
      document.getElementById("pallina_" + i).style.fill = getRandomColor();
    }
    setTimeout(start, 500);
  }
}

color_btn.addEventListener("click", function () {
  color_btn.innerText = "Spegni luci";
  if (bottone) {
    bottone = false;
    color_btn.innerText = "Accendi luci";
  } else {
    bottone = true;
    start();
  }
});
