"use strict";

import { translations } from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
    
    // first get language setting
    let userPrefLang = localStorage.getItem("lang"); 
    const primaryLanguage = navigator.language;    
    const languageSelect = document.getElementById("target-language");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    // Function to translate the page content    
    const setLanguage = (lang) => {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-i18n");            
            if (translations[lang] && translations[lang][key]) {                                
                const myElement = document.querySelector('[data-i18n='+key+']'); // Or any other way to get the element
                const title = myElement.getAttribute('title');
                const placeHolder = myElement.getAttribute('placeholder');
                const href = myElement.getAttribute('href');
                const src = myElement.getAttribute('src');
                if(title ===null && placeHolder === null && href === null ){
                    element.textContent = translations[lang][key];     
                }
                if ( title !== null) {
                    myElement.title = translations[lang][key];                    
                } 
                if (placeHolder !== null) {
                    myElement.placeholder = translations[lang][key];  
                }
                if(href !== null) {
                    myElement.href = translations[lang][key]; 
                }
                if(src !== null) {
                    myElement.src = translations[lang][key]; 
                }                                 
            }
        });
        localStorage.setItem("lang", lang); // Save the language preference
    };    
    
    // resetting back to user's prefered langauge:    
    if (primaryLanguage.includes("en")) {        
        userPrefLang = "en";
        setLanguage(userPrefLang);  
        languageSelect.value = userPrefLang;
    } 
    
    // event listener for language select   
    languageSelect.addEventListener("change",() => {
        const selectedLanguage = languageSelect.value;         
        setLanguage(selectedLanguage);
    });
});