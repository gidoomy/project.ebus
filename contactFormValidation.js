document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for your message!');
    
  });