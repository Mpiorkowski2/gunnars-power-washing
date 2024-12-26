/* EMAIL SIGN UP*/
/* EMAIL SIGN UP */
function showThankYouMessage(event) {
    event.preventDefault();  // Prevents the form from actually submitting
  
    // Hide the form
    document.getElementById('subscribe-form').style.display = 'none';
  
    // Show the "Thank You" message
    document.getElementById('thank-you-message').style.display = 'block';
  
    // The form will automatically be submitted to the Google Sheets backend
  }
  

  

