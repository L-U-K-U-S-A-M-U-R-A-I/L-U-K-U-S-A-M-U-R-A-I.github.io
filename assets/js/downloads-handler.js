"use strict";

import { removeCurrentIcon } from './helper.js';

const heroContainer = document.getElementById("hero-container");
const downloadsContainer = document.getElementById("downloads-container");
const contactFormContainer = document.getElementById("contact-form-container");
const subscriptionsContainer = document.getElementById("subscriptions-container");  
const downloadIcon = document.getElementById("downloads");        

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormContainer.style.display = "none";
    subscriptionsContainer.style.display = "none";
    heroContainer.style.display = "none";
    downloadsContainer.style.display = "block";
    downloadsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    downloadsContainer.focus();  
    removeCurrentIcon();
    downloadIcon.classList.add("current-icon");
});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsContainer.style.display = "none";
    heroContainer.style.display = "block"; 
    heroContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    downloadIcon.classList.remove("current-icon");
});

    

    