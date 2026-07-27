"use strict";

import { removeCurrentIcon } from './helper.js';

const heroContainer = document.getElementById("hero-container");
const downloadsContainer = document.getElementById("downloads-container");
const subscriptionsContainer = document.getElementById("subscriptions-container");
const contactFormContainer = document.getElementById("contact-form-container");  
const contactIcon = document.getElementById("contact-us");       

window.addEventListener('load', (event) => {    
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);  
    const action = urlParams.get('action-type');     
    if (action !== undefined && action === "contact-form") {  
        contactFormContainer.style.display = "block";  
        contactFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    };
});

document.getElementById("contact-us").addEventListener("click", function(event) {  
    event.preventDefault();
    downloadsContainer.style.display = "none";
    subscriptionsContainer.style.display = "none";
    heroContainer.style.display = "none";
    contactFormContainer.style.display = "block";
    contactFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });   
    //contactFormContainer.focus();
    removeCurrentIcon();
    contactIcon.classList.add("current-icon");
});

document.getElementById("close").addEventListener("click", function(event) {
    event.preventDefault(); 
    contactFormContainer.style.display = "none"; 
    heroContainer.style.display = "block";
    heroContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    contactIcon.classList.remove("current-icon");    
});