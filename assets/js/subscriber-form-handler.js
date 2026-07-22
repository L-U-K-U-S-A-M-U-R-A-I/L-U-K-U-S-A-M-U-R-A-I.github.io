"use strict";

import { removeCurrentIcon } from './helper.js';

const subscriptionsContainer = document.getElementById("subscriptions-container");
const contactFormContainer = document.getElementById("contact-form-container"); 
const downloadsContainer = document.getElementById("downloads-container");  
const subscriptionIcon = document.getElementById("subscriptions");        

document.getElementById("subscriptions").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormContainer.style.display = "none";
    downloadsContainer.style.display = "none";
    subscriptionsContainer.style.display = "block";     
    subscriptionsContainer.focus();
    removeCurrentIcon();
    subscriptionIcon.classList.add("current-icon");
});

document.getElementById("close-subscriptions").addEventListener("click", function(event) {
    event.preventDefault(); 
    subscriptionsContainer.style.display = "none";
    subscriptionIcon.classList.remove("current-icon");
});