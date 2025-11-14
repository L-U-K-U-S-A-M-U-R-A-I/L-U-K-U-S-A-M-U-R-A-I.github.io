"use strict";

const contactForm = document.getElementById("contact-form-container");        

document.getElementById("contact-us").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactForm.style.display = "block";    
});

document.getElementById("close").addEventListener("click", function(){
    contactForm.style.display = "none";    
}); 