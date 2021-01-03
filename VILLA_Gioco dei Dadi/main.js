const btn_start = document.querySelector("#start");
const left_btn = document.querySelector("#d1");
const right_btn = document.querySelector("#d2");

var start_btn = true;
var Left_btn = true;
var Right_btn = true;
var random1;
var random2;
var reset;

player_1 = prompt("Inserisci il nome del 1° giocare");
player_2 = prompt("Inserisci il nome del 2° giocare");

red_images = [
  "assets/img/Dado/dado1.png",
  "assets/img/Dado/dado2.png",
  "assets/img/Dado/dado3.png",
  "assets/img/Dado/dado4.png",
  "assets/img/Dado/dado5.png",
  "assets/img/Dado/dado6.png",
];

blue_images = [
  "assets/img/DadoBlu/dado1.png",
  "assets/img/DadoBlu/dado2.png",
  "assets/img/DadoBlu/dado3.png",
  "assets/img/DadoBlu/dado4.png",
  "assets/img/DadoBlu/dado5.png",
  "assets/img/DadoBlu/dado6.png",
];

btn_start.addEventListener("click", function () {
  Left_btn = true;
  Right_btn = true;

  if (start_btn) {
    start_btn = false;
    clearInterval(reset);
    reset = setInterval(start, 300);
  }
});

left_btn.addEventListener("click", function () {
  Left_btn = false;
  if (!Right_btn) {
    result();
    start_btn = true;
  }
});

right_btn.addEventListener("click", function () {
  Right_btn = false;
  if (!Left_btn) {
    result();
    start_btn = true;
  }
});

function start() {
  if (Left_btn) {
    random1 = Math.floor(Math.random() * red_images.length);
    var random = red_images[random1];
    document.getElementById("dice1").src = random;
  }

  if (Right_btn) {
    random2 = Math.floor(Math.random() * blue_images.length);
    var random = blue_images[random2];
    document.getElementById("dice2").src = random;
  }
}

function result() {
  String = player_1 + ": " + (random1 + 1) + "\n";
  String += player_2 + ": " + (random2 + 1) + "\n" + "\n";
  if (random1 > random2) {
    String += "Il vincitore è: " + player_1;
  } else if (random1 < random2) {
    String += "Il vincitore è: " + player_2;
  } else if (random1 == random2) {
    String += "Pareggio";
  }
  alert(String);
  clearInterval(reset);
}
