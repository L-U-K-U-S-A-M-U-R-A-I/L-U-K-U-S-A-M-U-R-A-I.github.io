"use strict";

/* eslint-disable no-invalid-this */
// source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion
openPanels();

const acc = document.getElementsByClassName('accordion');

let i;

// let test = document.getElementById('#first');
// let test2 = document.getElementById('#second');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;    
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

/* ********* scroll-to-top implementation ********* */

let scrollToTopButton = document.getElementById("scrollToTopBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {  
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

scrollToTopButton.onclick = function() { topFunction() };

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  closePanels();
}

function closePanels() {  
  const panels = document.querySelectorAll(".panel");
      panels.forEach(element => {
      element.style.display = "none";
    });
}

function openPanels() {
  const panels = document.querySelectorAll(".panel");
      panels.forEach(element => {
      element.style.display = "block";
    });
}

/* ********* panel toggle implementation ********* */

const accordionHeaders = document.querySelectorAll('.accordion');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
      const currentPanel = header.nextElementSibling; // The content panel sibling

      // Close all other panels
      accordionHeaders.forEach(otherHeader => {
      const otherPanel = otherHeader.nextElementSibling;
          if (otherPanel !== currentPanel && otherPanel.classList.contains('active')) {
            otherPanel.classList.remove('active');
          }
      });

      // Toggle the clicked panel
      currentPanel.classList.toggle('active');
    });
  });
