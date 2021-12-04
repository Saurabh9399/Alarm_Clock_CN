//Show Time in Alarm
function showTime() {
  // Initializing date var to show current time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  var period = "AM";
  
  if (hours >= 12) {
    period = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
    // hours = 13-12 = 1
  }

// Displaying time in 12 hours format
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  var time = hours + " : " + minutes + " : " + second + " " + period;
  document.getElementsByTagName("h1")[0].innerText = time; // change the h1 tag to time


   //This will refresh the time after every 1 second without reloading
  setTimeout(showTime, 1000);
}

// Set Alram time and date
var audio = new Audio("");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(
        () => alert("Alarm Notification, Plz stop alarm 😊"),timeout
      );
    }
  }
}

// The Alaram  List for upcomming date and time
//1.Select all elements
const form = document.querySelector("#new-alarm-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

//When i submit the form add a new elemnt

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //1. Create a new Item
  // const item = document.createElement("div");
  const li = document.createElement("li");
  li.innerText = input.value + "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ❌";
  li.classList.add("list-group-item");
  //2. Add that item to that list
  list.appendChild(li);
  //3.clear iNput
  input.value = "";
  //4. setup event listener to delete item when clicked
  li.addEventListener("click", () => {
    li.remove();
    // audio.pause();
    if (alarmTimeout) {
      clearTimeout(alarmTimeout);
    }
  });
});
