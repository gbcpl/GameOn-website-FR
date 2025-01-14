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
const confirm = document.querySelector(".modal-confirmation")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const closeConfirm = document.querySelectorAll(".close-confirm");
const closeButton = document.getElementById("close-modal-confirm");
const firstName = document.getElementById("first")
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const date = document.getElementById("birthdate")
const tournaments = document.getElementById("quantity");
const locationTournament = document.querySelectorAll('input[name="location"]');
const checkboxValidation = document.getElementById("checkbox1");
const submit = document.querySelector(".btn-submit");
const form = document.getElementById("form");
let paragraphFirst = document.getElementById("paragraphFirst");
let paragraphLast = document.getElementById("paragraphLast");
let paragraphMail = document.getElementById("paragraphMail");
let paragraphDate = document.getElementById("paragraphDate");
let paragraphTournaments = document.getElementById("paragraphTournaments");
let paragraphUserValidation = document.getElementById("paragraphUserValidation")

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

// Handling the first name input of the form on change event
// We create a variable that is equal 0 at default, and we pass it to 1 if the field is correctly filled by the user
// We add some stylisization in case the field is correctly or incorrectly filled

firstName.addEventListener("change", isFirstNameValid);
let firstNameValid = 0;

function isFirstNameValid() {
  console.log(firstName.value);
  if (firstName.value.length < 2 || /\d/.test(firstName.value)) {
    console.log("OK")
    firstName.style.border = "solid 4px red";
    
    // get the div formFirstName in order to add a paragraph under the input field if invalid
    const formFirstName = document.getElementById("formFirstName");
    
    // if the paragraph for invalid first name isn't present, create it with a specified ID after the input field
    if (!paragraphFirst || paragraphFirst == 0) {
      paragraphFirst = document.createElement("p");
      paragraphFirst.id = "paragraphFirst";
      formFirstName.appendChild(paragraphFirst);
    }

    // fill the paragraph created previously with the textContent method
    paragraphFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    console.log("KO")
    // if the message for invalid first name is present, remove it
    if (paragraphFirst) {
      console.log("OKOK")
      paragraphFirst.remove();
      paragraphFirst = 0;
    }

    firstName.style.border = "solid 4px green";
    firstNameValid = 1;
  }
}

// Handling the last name input

lastName.addEventListener("change", isLastNameValid);
let lastNameValid = 0;

function isLastNameValid() {
  if (lastName.value.length < 2 || /\d/.test(lastName.value)) {
    lastName.style.border = "solid 4px red";

    const formLastName = document.getElementById("formLastName");

    if (!paragraphLast || paragraphLast == 0) {
      paragraphLast = document.createElement("p");
      paragraphLast.id = "paragraphLast";
      formLastName.appendChild(paragraphLast);
    }

    paragraphLast.textContent = "Veuillez entrer un nom de famille."
  } else {

    if (paragraphLast) {
      paragraphLast.remove();
      paragraphLast = 0;
    }

    lastName.style.border = "solid 4px green";
    lastNameValid = 1;
  }
};

// Handling the mail input with a regEx that we test thanks to the match method

mail.addEventListener("change", isEmailValid);
let emailValid = 0;

function isEmailValid() {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.value.match(mailFormat)) {

    if (paragraphMail) {
      paragraphMail.remove();
      paragraphMail = 0;
    }

    mail.style.border = "solid 4px green";
    emailValid = 1;
  } else {
    mail.style.border = "solid 4px red";

    const formMail = document.getElementById("formMail");

    if (!paragraphMail || paragraphMail == 0) {
      paragraphMail = document.createElement("p");
      paragraphMail.id = "paragraphMail";
      formMail.appendChild(paragraphMail);
    }

    paragraphMail.textContent = "Veuillez entrer un email valide."
  }
}

// Verification of the date

date.addEventListener("change", isBirthDateValid);
let dateValid = 0;

// Creates the function to verify the date in the format YYYY/MM/DD 

function dateValidator(dateStr) {
  return !isNaN(new Date(dateStr));
}

// Handling the date with the function isBirthDateValid

function isBirthDateValid() {

  // We create two dates, one is the current date, the other being the birthdate entered by the user
  let currentDate = new Date();
  let newDate = new Date(date.value);

  // two variables are created to compare the years in case the user enters a date > current year.

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();

  if (dateValidator(date.value) && (currentYear - year >= 18)) {

    if (paragraphDate) {
      paragraphDate.remove()
      paragraphDate = 0;
    }

    date.style.border = "solid 4px green";
    dateValid = 1;

  } else {

    const formDate = document.getElementById("formDate");

    if (!paragraphDate || paragraphDate == 0) {
      paragraphDate = document.createElement("p");
      paragraphDate.id = "paragraphDate";
      formDate.appendChild(paragraphDate);
    }

    paragraphDate.textContent = "Veuillez entrer une date valide."

    date.style.border = "solid 4px red";
  }
}

// Verifcation of input of the tournaments played 

tournaments.addEventListener("change", isTournamentsValid);
let tournamentsValid = 0;

function isTournamentsValid() {

  // we test if tournaments value contains a number, if yes we validate the form

  if (/\d/.test(tournaments.value)) {

    if (paragraphTournaments) {
      paragraphTournaments.remove();
      paragraphTournaments = 0;
    }

    tournaments.style.border = "solid 4px green";
    tournamentsValid = 1;

  }
    else {
      tournaments.style.border = "solid 4px red";

    const formTournaments = document.getElementById("formTournaments");

    if (!paragraphTournaments || paragraphTournaments == 0) {
      paragraphTournaments = document.createElement("p");
      paragraphTournaments.id = "paragraphTournaments";
      formTournaments.appendChild(paragraphTournaments);
    }

    paragraphTournaments.textContent = "Veuillez entrer un nombre."

  }
}


// Location of tournament

let locationValid = 0;

locationTournament.forEach((checkbox) => {
  checkbox.addEventListener("change", isPlaceTournamentValid);
});

function isPlaceTournamentValid() {

  locationTournament.forEach((checkbox) => {
    if (checkbox.checked) {
      locationValid = 1;
    } 
  });
}

// Checkbox1

let checkboxUserValid = 1;

checkboxValidation.addEventListener("click", isCheckBoxChecked);

function isCheckBoxChecked() {

  if (checkboxValidation.checked) {
    if (paragraphUserValidation) {
      paragraphUserValidation.remove();
      paragraphUserValidation = 0;
    }
    checkboxUserValid = 1;
  } else {

    const formCheckConditions = document.getElementById("formCheckConditions");

    if (!paragraphUserValidation || paragraphUserValidation == 0) {
      paragraphUserValidation = document.createElement("p");
      paragraphUserValidation.id = "paragraphUserValidation";
      formCheckConditions.appendChild(paragraphUserValidation);
    }

    paragraphUserValidation.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."
    console.log("ici")
    checkboxUserValid = 0;
  }

}

// Handling the submit button. 
// preventDefault lets us bypass the html behaviour of the submit button
// if all fields aren't valid, we throw an error, otherwise we close the modal, reset the variables, reset the form, and display another confirmation modal

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstNameValid == 0 || lastNameValid == 0 || emailValid == 0 || dateValid == 0 || tournamentsValid == 0 || locationValid == 0 || checkboxUserValid == 0) {
    console.log(firstNameValid, lastNameValid, emailValid, dateValid, tournamentsValid, locationValid, checkboxUserValid)
    alert("Veuillez remplir tous les champs");
  } else {
    closeModal();
    firstNameValid = 0;
    lastNameValid = 0;
    emailValid = 0;
    dateValid = 0;
    tournamentsValid = 0;
    locationValid = 0;
    checkboxUserValid = 1;
    form.reset();
    firstName.style.border = "none";
    lastName.style.border = "none";
    mail.style.border = "none";
    date.style.border = "none";
    tournaments.style.border = "none";
    confirm.style.display = "flex";
  }
});

// Listening to the confirmation modal close button

closeConfirm.forEach((btn) => btn.addEventListener("click", closeModalConfirm));

// Exit confiirmation modal

function closeModalConfirm() {
  confirm.style.display = "none";  
}

closeButton.addEventListener("click", closeModalButton);

function closeModalButton() {
  confirm.style.display = "none";
}