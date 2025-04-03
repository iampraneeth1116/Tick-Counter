// present time

const present_time = document.getElementById("p_time_h1");
let state_time = ""
function updated_time() {
  let date = new Date();
  let Hours = date.getHours().toString().padStart(2, "0");
  let Min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");
  if (Hours < 12){
    state_time = "AM"
  }
  else{
    state_time = "PM"
  }
  present_time.innerText = `${Hours}:${Min}:${sec} ${state_time}`;
}
setInterval(updated_time, 1000);


//stop watch

const s_H = document.getElementById("s_time_h1");
let testing_seconds = 0;
let result;
function overall_setup() {
  let Hours = Math.floor(testing_seconds / 3600)
    .toString()
    .padStart(2, "0");
  let min = Math.floor((testing_seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let sec = Math.floor(testing_seconds % 60)
    .toString()
    .padStart(2, "0");
  s_H.innerHTML = `${Hours}:${min}:${sec}`;
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
  if (click_setting % 2 == 0) {
    hover.style.display = "none";


  } else {
    hover.style.display = "block";
  }
}

//change background function
let countClick = 0;
function changebackground() {
  countClick++;
  if (countClick % 2 == 0) {
    document.body.style.backgroundImage = 'url("background_image1.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "centre";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(13deg, rgba(2,0,36,1) 0%, rgba(2,9,85,1) 25%, rgba(3,63,129,1) 47%, rgba(3,69,139,1) 65%, rgba(25,119,195,1) 94%, rgba(2,160,233,1) 100%, rgba(0,212,255,1) 100%)";
  }
}

//change shape function
const watch_back = document.getElementById("watch_background");
let shape_count = 0;
function changeshape() {
  shape_count++;
  if (shape_count % 2 == 0) {
    watch_back.style.borderRadius = "50%";
    watch_back.style.padding = "8rem";
  } else {
    watch_back.style.borderRadius = "2.5rem";
    watch_back.style.padding = "6.5rem";
  }
}

// use this transition for shape option

//slideIndex = (slideIndex + 1) % 2;
// document.body.style.transform = `translateX(-${slideIndex * 400}px)`
