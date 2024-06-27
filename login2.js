document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form.login');
    const signupForm = document.querySelector('form.signup');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    const sliderTab = document.querySelector('.slider-tab');
  
    signupBtn.addEventListener('click', () => {
      sliderTab.style.left = '50%';
      loginForm.style.marginLeft = '-50%';
    });
  
    loginBtn.addEventListener('click', () => {
      sliderTab.style.left = '0%';
      loginForm.style.marginLeft = '0%';
    });
  
    signupLink.addEventListener('click', (e) => {
      e.preventDefault();
      signupBtn.click();
    });
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = loginForm.querySelector('input[type="text"]');
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Login form is valid');
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = signupForm.querySelector('input[type="text"]');
    const passwordInput = signupForm.querySelector('input[type="password"]');
    const confirmPasswordInput = signupForm.querySelectorAll('input[type="password"]')[1];

    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isValidPassword(passwordInput.value)) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Signup form is valid');
  });
});
