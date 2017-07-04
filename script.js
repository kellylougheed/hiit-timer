window.onload = function() {

  var seconds = 20;
  var rest = true;
  var interval;

  var intervalTime = 20;
  var breakTime = 10;

  var settingsButton = document.getElementById("settings");
  var intervalInput = document.getElementById("intervalTime");
  var breakInput = document.getElementById("breakTime");

  var startButton = document.getElementById("start");
  var pauseButton = document.getElementById("pause");
  var resetButton = document.getElementById("reset");

  var statusHeader = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");

  settingsButton.onclick = function() {
    intervalTime = intervalInput.value * 1;
    breakTime = breakInput.value * 1;
    reset();
  }

  startButton.onclick = function() {
    rest = false;
    changeToGo();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function() {
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;
      changeToRest();
    } else if (seconds == 0 && rest == true) {
      seconds = intervalTime + 1;
      rest = false;
      changeToGo();
    }
  }

  function changeToRest() {
    $("body").css("background", "cyan");
    statusHeader.innerText = "Rest";
  }

  function changeToGo() {
    $("body").css("background", "pink");
    statusHeader.innerText = "Go!";
  }

}