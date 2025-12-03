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

/*const clickableElements = document.querySelectorAll(".share-button");

clickableElements.forEach(element => {
  element.addEventListener('click', function(event) {    
    shareButtons.style.display = "none";        
  });
}); */


/* ***** copying text - insights ***** */
let insighstUrl = "https://l-u-k-u-s-a-m-u-r-a-i.github.io/insights.html";
const insightsElements = document.querySelectorAll(".share-button");
insightsElements.forEach(element => {
  element.addEventListener('click', function(event) {  
    navigator.clipboard.writeText(insighstUrl)
    .then(() => {      		
      		alert('Text copied to clipboard!');      		
    	})
    	.catch(err => {
      		console.error('Failed to copy text: ', err);     		 
		});  
    shareButtons.style.display = "none";        
  });
});


/* ***** copying text - glossary ***** */
let glossaryUrl = "https://l-u-k-u-s-a-m-u-r-a-i.github.io/digital-transformation-glossary.html";
const glossaryElements = document.querySelectorAll(".share-button-glossary");
glossaryElements.forEach(element => {
  element.addEventListener('click', function(event) {  
    navigator.clipboard.writeText(glossaryUrl)
    .then(() => {      		
      		alert('Text copied to clipboard!');      		
    	})
    	.catch(err => {
      		console.error('Failed to copy text: ', err);     		 
		});  
    shareButtons.style.display = "none";        
  });
});
