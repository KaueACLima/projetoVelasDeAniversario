const inAge = document.getElementById("inAge");
const displayCandles = document.getElementById("displayCandles");
const newCandles = document.getElementById("newCandles");
const contentCandles = document.getElementById("content-candles");
const mensage = document.getElementById("mensage");

displayCandles.addEventListener("click", (e) => {
  e.preventDefault();
  mensage.textContent = "";
  contentCandles.innerHTML = "";

  let Age = Number(inAge.value);

  if (isNaN(Age) || Age < 1 || Age > 120) {
    alert("Por favor, insira uma idade válida entre 1 e 120.");
    return;
  }

  const digits = Age.toString().split("");

  digits.forEach((digit) => {
    const img = document.createElement("img");
    img.src = `./assets/img/${digit}.png`;
    img.alt = `Vela ${digit}`;
    contentCandles.appendChild(img);
  });
});

newCandles.addEventListener("click", (e) => {
  e.preventDefault();
  inAge.value = "";
  contentCandles.innerHTML = "";
  mensage.textContent = "";
});
