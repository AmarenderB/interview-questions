// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>List of Palindrome</h1>`;
function checkPallen(arg) {
  return (
    arg ==
    arg
      .split("")
      .reverse()
      .join("")
  );
}

function getAllPal(pallenInput) {
  var pallenString = {};
  var k = 1;
  var parsed = "";
  while (k <= pallenInput.length) {
    for (var i = 0; i < pallenInput.length; i++) {
      if (checkPallen(pallenInput.slice(i, i + k))) {
        if (pallenInput.slice(i, i + k).length >= 2) {
            pallenString[pallenInput.slice(i, i + k)] = 1;
        }
      }
    }
    k++;
  }
//appending the pallendrome to the view
  Object.keys(pallenString).forEach(function(item, i) {
    appDiv.innerHTML += i === 0 ? " " + item : ", " + item;
  });
  return Object.keys(pallenString);
}

//place to update the string
getAllPal("civic");
