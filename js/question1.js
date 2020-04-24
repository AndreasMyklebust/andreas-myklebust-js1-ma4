const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateInput);

function validateInput(event) {
   event.preventDefault();

   const input = document.querySelector("#firstName");
   const inputError = document.querySelector("#firstNameError");
   const inputValue = input.value;

   if (checkInputLength(inputValue) === true) {
      inputError.style.display = "none";
   } else {
      inputError.style.display = "block";
   }
}

function checkInputLength(value) {
   const trimmedValue = value.trim();

   if (trimmedValue.length > 1) {
      return true;
   } else {
      return false;
   }
}
