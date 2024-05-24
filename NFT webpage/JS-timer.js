let ele1 = document.querySelector('.timer-1');
let ele2 = document.querySelector('.timer-2');
let ele3 = document.querySelector('.timer-3');
let ele4 = document.querySelector('.timer-4');

function formatTime(seconds) {
  var days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * 24 * 60 * 60;
  var hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  // Pad the minutes and seconds with leading zeros, if required
  days = (days < 10 ? "0" : "") + days;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  // Compose the string for display
  let timeString = `${days}:${hours}:${minutes}:${seconds}`;
  return timeString;
}

let sec1 = 162845;
let sec2 = 145685;
let sec3 = 184635;
let sec4 = 157395;

window.addEventListener('load', () => {
  setInterval(() => {
    sec1--;
    sec2--;
    sec3--;
    sec4--;
    
    ele1.innerText = formatTime(sec1);
    ele2.innerText = formatTime(sec2);
    ele3.innerText = formatTime(sec3);
    ele4.innerText = formatTime(sec4);
  }, 1000);
});

