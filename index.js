/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */

function greet(time){
  let timeSplit = time.split(":")
  let hour = timeSplit[0]
  let numHour = parseInt(hour)

  if (numHour < 12){
    return "Good Morning"
  }
  if (numHour > 12 && numHour < 17){
    return "Good Afternoon"
  }
  else{
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(text){
  // this is what I initially typed: greetingSelect = document.querySelector("#greeting")
  let greetingSelect = document.getElementById("greeting")
  greetingSelect.innerText = text
}