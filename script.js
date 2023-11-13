let emailInput = document.getElementById('email') 

function validateEmail() {
    if(!emailInput.checkValidity()){
        alert("Please enter a valid email address")
    } else{
        showSuccessMessage();
    }

   
  }

  emailInput.addEventListener('input', function () {
    // Get the entered email value
    var enteredEmail = emailInput.value;
  
    // Validate the email using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailPattern.test(enteredEmail);
  
    // Toggle the 'valid' class based on email validation
    if (isValidEmail) {
      emailInput.classList.remove('invalid');
    } else {
      emailInput.classList.add('invalid');
    }
  });

  document.querySelector('.sign-up-form').addEventListener('click',()=> {
    emailInput.classList.remove('invalid')
  })

  function showSuccessMessage() {
    // Hide the sign-up form
    var signUpForm = document.querySelector('.sign-up-form');
    signUpForm.style.display = 'none';

    // Show the success message
    var successMessage = document.querySelector('.signup-success');
    successMessage.style.display = 'flex';
  }

  // Dismiss the success message and show the sign-up form again
  document.querySelector('.signup-success button').addEventListener('click', function () {
    var signUpForm = document.querySelector('.sign-up-form');
    signUpForm.style.display = 'flex';

    var successMessage = document.querySelector('.signup-success');
    successMessage.style.display = 'none';
  });
