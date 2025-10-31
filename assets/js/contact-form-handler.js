"use strict";

const contactForm = document.getElementById("contact-form-container");        
// Toggling contact form display
document.getElementById("contact-us").addEventListener("click", function() {          
    if (contactForm.style.display === "none") {
            contactForm.focus(); 
            //{ preventScroll:false };
            //window.location.hash = "#contact-us";
            contactForm.style.display = "block";
        } else {
            contactForm.style.display = "none";
    }
});

document.getElementById("close").addEventListener("click", function(){
    contactForm.style.display = "none";    
}); 