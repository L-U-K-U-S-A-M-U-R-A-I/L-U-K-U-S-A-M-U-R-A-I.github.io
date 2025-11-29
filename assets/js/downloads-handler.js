"use strict";

const downloadsList = document.getElementById("downloads-container");
const contactFormWrapper = document.getElementById("contact-form-container");          

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormWrapper.style.display = "none";
    downloadsList.style.display = "block";    

});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsList.style.display = "none";    
});