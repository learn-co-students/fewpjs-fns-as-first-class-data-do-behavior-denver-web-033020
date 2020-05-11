/* Given Code, don't edit */

document.querySelector("#btn").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  /*
  The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
    If the time is earlier than 12pm, return "Good Morning".
    If the time is between 12pm and 5pm, return "Good Afternoon".
    If the time is later than 5pm, return "Good Evening". 
  */
  console.log(`time: ${time}`)
  const hr = parseInt(time.slice(0, 2))
  console.log(`hr: ${hr}`)
  if (hr < 12) {
    return "Good Morning"
  } else if (hr < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  console.log(`message: ${message}`)
  const greeting = document.querySelector('#greeting');
  greeting.innerText = message;
}