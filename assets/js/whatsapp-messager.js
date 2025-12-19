document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('contact-form');
  
  // Add real-time validation
  //setupRealTimeValidation();
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {            
      var name = form.elements["name"].value;      
      var email = form.elements["email"].value;  
      var country = form.elements["country"].value;  
      var industry = form.elements["industryType"].value;      
      var revenueRange = form.elements["revenueRange"].value;  
      var message  = form.elements["message"].value;
      message = message.trim();      
      var enquiryTypeText = form.elements["enquiryType"]
                                .options[form.elements["enquiryType"].selectedIndex]
                                .textContent;                  
      var messageTemplate = `Enquiry: ${enquiryTypeText} 
                             From: ${name}
                             Country: ${country}                             
                             Industry: ${industry}
                             Revenue: ${revenueRange}
                             Message: ${message}
                            `;  

      console.log("message template:\n" +  messageTemplate);
      
      sendWhatsAppMessage(messageTemplate);
      form.reset();
      const contactForm = document.getElementById("contact-form-container"); 
      contactForm.style.display = "none";     
    }
  });
  
  function validateForm() {
    // Clear previous errors
    //clearErrors();
    
    let isValid = true;
    /*const name = form.elements.name;
    const email = form.elements.email;    
    
    // Validate name
    if (username.value.trim() === '') {
      displayError(username, 'Username is required');
      isValid = false;
    } else if (username.value.length < 3) {
      displayError(username, 'Username must be at least 3 characters');
      isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '') {
      displayError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      displayError(email, 'Please enter a valid email address');
      isValid = false;
    }    
    */
    
    return isValid;
  }
  
  function setupRealTimeValidation() {
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        // Clear error when user starts typing
        const errorElement = this.parentElement.querySelector('.error-message');
        if (errorElement) {
          errorElement.remove();
          this.classList.remove('error-input');
        }
      });
    });
    
    // Email-specific validation
    form.elements.email.addEventListener('blur', function() {
      if (this.value && !isValidEmail(this.value)) {
        displayError(this, 'Please enter a valid email address');
      }
    });
  }

  function sendWhatsAppMessage(message) {    
    const formattedPhoneNumber = "+263789130562";    
    const encodedMessage = encodeURIComponent(message);    
    const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;        
    window.open(whatsappLink, '_blank');
  }

  // Helper functions
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function displayError(input, message) {
    const formControl = input.parentElement;
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    formControl.appendChild(errorElement);
    input.classList.add('error-input');
  }
  
  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.error-input').forEach(input => {
      input.classList.remove('error-input');
    });
  }
  
  function showSuccessMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'success-message';
    messageElement.textContent = message;
    form.parentElement.insertBefore(messageElement, form);
    
    // Remove after 3 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }
  
  function showErrorMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'error-banner';
    messageElement.textContent = message;
    form.parentElement.insertBefore(messageElement, form);
    
    // Remove after 3 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }
});