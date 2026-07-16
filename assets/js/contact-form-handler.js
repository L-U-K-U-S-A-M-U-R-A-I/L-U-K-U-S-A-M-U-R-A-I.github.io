"use strict";

import { removeCurrentIcon } from './helper.js';

const downloadsListWrapper = document.getElementById("downloads-container");
const contactForm = document.getElementById("contact-form-container");  
const contactIcon = document.getElementById("contact-us");       

window.addEventListener('load', (event) => {    
    const queryString = window.location.search; 
    const urlParams = new URLSearchParams(queryString);  
    const action = urlParams.get('action-type');     
    if (action !== undefined && action === "contact-form") {  
        downloadsListWrapper.style.display = "block";  
        downloadsListWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    };
});

document.getElementById("contact-us").addEventListener("click", function(event) {  
    event.preventDefault();
    downloadsListWrapper.style.display = "none";
    contactForm.style.display = "block";  
    contactForm.focus();

    removeCurrentIcon();
    contactIcon.classList.add("current-icon");
    //contactIcon.style.color = "white";
});

document.getElementById("close").addEventListener("click", function(event) {
    event.preventDefault(); 
    contactForm.style.display = "none"; 
    contactIcon.classList.remove("current-icon");    
});
 
/*function removeCurrentIcon() {
        var elems = document.querySelectorAll(".icon-wrap");
        [].forEach.call(elems, function(el) {
            el.classList.remove("current-icon");
        });
}*/