/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const inputStr = timeString.split(":")
  const hr = inputStr[0]
  const minute = inputStr[1]
  const combined = hr + minute
  const finalCon = parseInt(combined)

  
  if (finalCon < 1200) {
    greeting = "Good Morning";

  } else if (finalCon > 1700) {
    greeting = "Good Evening"

  } else {
    greeting = "Good Afternoon"
  }
  return greeting
  displayMessage(greeting)

}

function displayMessage(greeting) {
  const message = document.querySelector('h1')
  message.innerText = greeting
  document.body.appendChild(message)
}






/* Write your implementation of displayMessage() */
