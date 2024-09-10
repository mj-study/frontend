const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  function padZero(time) {
    return String(time).padStart(2, "0");
  }

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
