/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

// document.getElementById("greeting").addEventListener("submit", greet)

function greet(timeString){
  let timeInteger = timeString.split(":");

  if (parseInt(timeInteger[0]) < 12){
    return "Good Morning";
  }
  else if (parseInt(timeInteger[0] >= 12) && parseInt(timeInteger[0] < 17)){
    return "Good Afternoon";
  }
  else if (parseInt(timeInteger[0] >= 17)){
    return "Good Evening";
  }
}

function displayMessage(greet){
  document.getElementById('greeting').innerText = greet;
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
