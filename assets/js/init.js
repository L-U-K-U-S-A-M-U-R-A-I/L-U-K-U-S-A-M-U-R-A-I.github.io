import { getCookie } from "./get-cookie.js";

// checks to run on load | initializations | etc

window.onload = function() {
  // Your code to execute after the entire page has loaded
  console.log("The entire page has loaded!");  
  var current_language = getCookie("googtrans");
  console.log("current language is set to:"+ current_language); 


  // goog-te-combo | ('goog-te-gadget-simple')
const googleTranslateSelect = document.querySelector('.goog-te-combo');
console.log("translate element:" + googleTranslateSelect);
googleTranslateSelect.addEventListener('change', function() {
	var current_language = getCookie("googtrans");
  console.log("current language changed to:"+ current_language); 
});

	const areCookiesEnabled = navigator.cookieEnabled;

 	if (areCookiesEnabled) {
  		console.log("Cookies are enabled.");
	} else {
  		console.log("Cookies are disabled.");
  		// inform the user or adjust application logic here:
  		// 1. inform user
  		//document.getElementById('enable-plugin-popup').style.display = 'block';
  		// 2. disable language switch 
  		//document.getElementById('google-translate-plugin').style.displayy = 'block';  
  		// 3. disable analytics???  		  		
	}

};