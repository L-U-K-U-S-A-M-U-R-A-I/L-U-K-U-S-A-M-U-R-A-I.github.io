"use strict";

import { removeCurrentIcon } from './helper.js';

const downloadsList = document.getElementById("downloads-container");
const contactFormWrapper = document.getElementById("contact-form-container");  
const downloadIcon = document.getElementById("downloads");        

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormWrapper.style.display = "none";
    downloadsList.style.display = "block";     
    removeCurrentIcon();
    downloadIcon.classList.add("current-icon");
});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsList.style.display = "none"; 
    downloadIcon.classList.remove("current-icon");
});

    

    