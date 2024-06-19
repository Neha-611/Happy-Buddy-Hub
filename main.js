

  function myFunction(x) {
    x.classList.toggle("change");
  }
  



//sign up script

  document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const signinLink = document.getElementById('signinLink');
  
    signupBtn.addEventListener('click', () => {
      window.location.href = 'signup.html'; // Change this to your actual sign-up page URL
    });
  
    signinLink.addEventListener('click', () => {
      window.location.href = 'signin.html'; // Change this to your actual sign-in page URL
    });
  });
  
  

  
  //sign in script

  document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const signinLink = document.getElementById('signinLink');
  
    if (signupBtn) {
      signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html'; // Adjust the path if needed
      });
    }
  
    if (signinLink) {
      signinLink.addEventListener('click', () => {
        window.location.href = 'signin.html'; // Adjust the path if needed
      });
    }
  });
  
  function myFunction(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  