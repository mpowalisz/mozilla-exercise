// Firefox Image Changer

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");

  if (mySrc === "assets/images/firefox.png") {
    myImage.setAttribute("src", "assets/images/blue-firefox.png");
  } else {
    myImage.setAttribute("src", "assets/images/firefox.png");
  }
};

// Custom Greeting

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to the Mozilla Exercise, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to the Mozilla Exercise, " + storedName;
}

myButton.onclick = function () {
  setUserName();
}