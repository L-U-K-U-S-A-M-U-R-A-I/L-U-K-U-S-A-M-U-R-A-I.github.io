/* eslint-disable no-invalid-this */
// source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion

const acc = document.getElementsByClassName('accordion');

let i;

// let test = document.getElementById('#first');
// let test2 = document.getElementById('#second');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    console.log('panel:') + panel;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
