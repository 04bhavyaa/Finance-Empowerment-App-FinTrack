// Access the form
const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

// Handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = new FormData(this);

  // Send AJAX request (adjust the path as needed)
  fetch('php/send-email.php', { // Replace 'php/send-email.php' with the correct path
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(responseText => {
    responseMessage.textContent = responseText; // Update response message
  })
  .catch(error => {
    console.error('Error sending form data:', error);
    responseMessage.textContent = 'An error occurred. Please try again.';
  });
});
/*-------------------------------------------------------*/



