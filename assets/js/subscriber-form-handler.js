"use strict";

import { removeCurrentIcon } from './helper.js';

const heroContainer = document.getElementById("hero-container");
const subscriptionsContainer = document.getElementById("subscriptions-container");
const contactFormContainer = document.getElementById("contact-form-container"); 
const downloadsContainer = document.getElementById("downloads-container");  
const subscriptionIcon = document.getElementById("subscriptions");        

document.getElementById("subscriptions").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormContainer.style.display = "none";
    downloadsContainer.style.display = "none";
    heroContainer.style.display = "none";
    subscriptionsContainer.style.display = "block"; 
    subscriptionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });    
    subscriptionsContainer.focus();
    removeCurrentIcon();
    subscriptionIcon.classList.add("current-icon");
});

document.getElementById("close-subscriptions").addEventListener("click", function(event) {
    event.preventDefault(); 
    subscriptionsContainer.style.display = "none";
    subscriptionIcon.classList.remove("current-icon");
    heroContainer.style.display = "block";
    heroContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});