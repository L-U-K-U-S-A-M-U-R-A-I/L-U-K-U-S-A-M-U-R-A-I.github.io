"use strict";

const contactForm = document.getElementById("contact-form-container");  
const downloadsListWrapper = document.getElementById("downloads-container");       

document.getElementById("contact-us").addEventListener("click", function(event) {  
    event.preventDefault();
    downloadsListWrapper.style.display = "none";
    contactForm.style.display = "block";      
});

document.getElementById("close").addEventListener("click", function(event) {
    event.preventDefault(); 
    contactForm.style.display = "none";    
});