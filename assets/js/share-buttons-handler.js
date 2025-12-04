"use strict";

const shareButtons = document.getElementById("share-buttons-wrapper");
shareButtons.style.display="none"

document.getElementById("share-button").addEventListener("mouseover", function(event) {  
    event.preventDefault(); 
    if (shareButtons.style.display=="none"){
		shareButtons.style.display = "block";    
    }else {
    	shareButtons.style.display = "none";    
    }    
});

const clickableElements = document.querySelectorAll(".share-button");

clickableElements.forEach(element => {
  element.addEventListener('click', function(event) {    
    shareButtons.style.display = "none";        
  });
}); 
