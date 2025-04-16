// present time
const present_time = document.getElementById("p_time_h1");
let state_time = "";

function updated_time() {
  const date = new Date();
  // let Hours = date.getHours().toString().padStart(2, "0");
  // let Min = date.getMinutes().toString().padStart(2, "0");
  // let sec = date.getSeconds().toString().padStart(2, "0");
  // state_time = date.getHours() < 12 ? "AM" : "PM";
  const formatted = date.toString().slice(0, 24);
  present_time.innerText = `${formatted}`;
}
setInterval(updated_time, 1000);

// stop watch
const s_H = document.getElementById("s_time_h1");
let testing_seconds = 0;
let result = null;

function overall_setup() {
  let hours = Math.floor(testing_seconds / 3600);
  let minutes = Math.floor((testing_seconds % 3600) / 60);
  let seconds = testing_seconds % 60;

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  s_H.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function startfunction() {
  if (!result) {
    result = setInterval(() => {
      testing_seconds++;
      overall_setup();
    }, 950);
  }
}

function stopfunction() {
  clearInterval(result);
  result = null;
}

function resetfunction() {
  stopfunction();
  testing_seconds = 0;
  overall_setup();
}

overall_setup();

// setting function
let hover = document.getElementById("content");
let click_setting = 0;

function settings() {
  click_setting++;
  hover.style.display = click_setting % 2 === 0 ? "none" : "block";
}

// change background function
let countClick = 0;

function changebackground() {
  countClick++;
  if (countClick % 2 === 0) {
    document.body.style.backgroundImage = 'url("background_image1.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "centre";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(13deg, rgba(2,0,36,1) 0%, rgba(2,9,85,1) 25%, rgba(3,63,129,1) 47%, rgba(3,69,139,1) 65%, rgba(25,119,195,1) 94%, rgba(2,160,233,1) 100%, rgba(0,212,255,1) 100%)";
  }
}

// change shape function
const watch_back = document.getElementById("watch_background");
let shape_count = 0;

function changeshape() {
  shape_count++;
  if (shape_count % 2 === 0) {
    watch_back.style.borderRadius = "50%";
    watch_back.style.padding = "8rem";
  } else {
    watch_back.style.borderRadius = "2.5rem";
    watch_back.style.padding = "6.5rem";
  }
}
console.log(Date())