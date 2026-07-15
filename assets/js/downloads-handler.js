"use strict";

const downloadsList = document.getElementById("downloads-container");
const contactFormWrapper = document.getElementById("contact-form-container");  
const downloadIcon = document.getElementById("downloads");        

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    contactFormWrapper.style.display = "none";
    downloadsList.style.display = "block"; 
    
    removeIconWrapper();
    downloadIcon.classList.add("current-icon");
    downloadIcon.style.color = "white";
});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsList.style.display = "none"; 

    downloadIcon.classList.remove("current-icon");
    downloadIcon.classList.add("icon-wrap");
    downloadIcon.style.color = "black";  
});


    function removeIconWrapper() {
        var elems = document.querySelectorAll(".icon-wrap");
        [].forEach.call(elems, function(el) {
            el.classList.remove("current-icon");
        });
    }