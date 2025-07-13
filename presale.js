
let basePrice = 0.00001;
const startTime = new Date().getTime();
const cycleDuration = 48 * 60 * 60 * 1000;
function updateCountdownAndPrice() {
  const now = new Date().getTime();
  const timePassed = now - startTime;
  const cyclesPassed = Math.floor(timePassed / cycleDuration);
  const nextCycleEnd = startTime + (cyclesPassed + 1) * cycleDuration;
  const timeRemaining = nextCycleEnd - now;
  const nextPrice = (basePrice * Math.pow(1.05, cyclesPassed)).toFixed(5);
  document.getElementById("token-price").innerText = "$" + nextPrice;
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerText = hours + "h " + minutes + "m " + seconds + "s";
}
setInterval(updateCountdownAndPrice, 1000);
updateCountdownAndPrice();
