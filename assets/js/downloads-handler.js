"use strict";

import { removeCurrentIcon } from './helper.js';

const downloadsContainer = document.getElementById("downloads-container");
const contactFormContainer = document.getElementById("contact-form-container");
const subscriptionsContainer = document.getElementById("subscriptions-container");  
const downloadIcon = document.getElementById("downloads");        

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormContainer.style.display = "none";
    subscriptionsContainer.style.display = "none";
    downloadsContainer.style.display = "block";
    downloadsContainer.focus();  
    removeCurrentIcon();
    downloadIcon.classList.add("current-icon");
});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsContainer.style.display = "none"; 
    downloadIcon.classList.remove("current-icon");
});

    

    