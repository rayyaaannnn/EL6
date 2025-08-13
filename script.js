document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");
  var successMessage = document.getElementById("successMessage");

  var valid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Please enter your name";
    valid = false;
  }

  // Email validation (basic regex)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Please enter your email";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Please enter a message";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
  }
});
