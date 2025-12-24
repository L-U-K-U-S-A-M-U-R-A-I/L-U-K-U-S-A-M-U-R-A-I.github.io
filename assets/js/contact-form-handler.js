"use strict";

const downloadsListWrapper = document.getElementById("downloads-container");       

window.addEventListener('load', (event) => {    
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);  
    const action = urlParams.get('action-type');     
    if (action !== undefined && action === "contact-form") {  
        downloadsListWrapper.style.display = "block";  
        downloadsListWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    };
});

const contactForm = document.getElementById("contact-form-container");  

document.getElementById("contact-us").addEventListener("click", function(event) {  
    event.preventDefault();
    downloadsListWrapper.style.display = "none";
    contactForm.style.display = "block";  
    contactForm.focus();
});

document.getElementById("close").addEventListener("click", function(event) {
    event.preventDefault(); 
    contactForm.style.display = "none";    
});
 
