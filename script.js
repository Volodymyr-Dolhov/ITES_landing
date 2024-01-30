document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData, // sending the form data directly
        mode: 'no-cors'
    })
    .then(() => {
        // The response is opaque, so we don't try to parse it
        alert("Message sent successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error sending the message.");
    });
});
