let contact_button_header = document.querySelector('.contact-button-header');
contact_button_header.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  contact_button_header.style.setProperty('--x', x + 'px');
  contact_button_header.style.setProperty('--y', y + 'px');
});


let contact_button = document.querySelector('.contact-button');
contact_button.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  contact_button.style.setProperty('--x', x + 'px');
  contact_button.style.setProperty('--y', y + 'px');
});

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
