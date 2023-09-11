function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const firstName = document.getElementById("first")
const lastName = document.getElementById("last");
const mail = document.getElementById("email");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// exit modal event

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// exit modal form

function closeModal() {
  modalbg.style.display = "none";
}

// Variables for entry inputs

let first = "";
let last = "";
let email = "";

// Receive entries

// get event for first name

firstName.addEventListener("change", getFirstName);

function getFirstName() {
  first =  firstName.value;
  console.log(first);
} 

// get event fort last name

lastName.addEventListener("change", getlastName);

function getlastName() {
  last =  lastName.value;
  console.log(last);
} 

// get event fort mail

mail.addEventListener("change", getMail);

function getMail() {
  email =  mail.value;
  console.log(email);
} 
