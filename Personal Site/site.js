function sayHello() {
    alert('I am so glad you are here! Take a look around!');
  }
   function openContactForm() {
    document.getElementById("contactPopup").style.display = "block";
  }
  
  function closeContactForm() {
    document.getElementById("contactPopup").style.display = "none";
  } 

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // need this to allow it to redirect 
        window.location.href = "success.html"; // send to success page
    });
});

  
  
  
  

  
  
