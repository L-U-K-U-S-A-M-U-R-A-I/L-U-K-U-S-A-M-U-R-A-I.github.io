"use strict";

const downloadsList = document.getElementById("downloads-container");        

document.getElementById("downloads").addEventListener("click", function(event) {  
    event.preventDefault(); 
    downloadsList.style.display = "block";    
});

document.getElementById("close-downloads").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadsList.style.display = "none";    
});