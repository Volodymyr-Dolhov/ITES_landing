let contact_button = document.querySelector(".contact-button");
contact_button.addEventListener("mousemove", (e) => {
    let rect = contact_button.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    contact_button.style.setProperty("--x", x + "px");
    contact_button.style.setProperty("--y", y + "px");
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (Math.round(window.scrollY) > 20) {
            document.querySelector(".header-container").classList.add("scrolled");
        } else {
            document.querySelector(".header-container").classList.remove("scrolled");
        }
    });
});

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch(this.action, {
            method: "POST",
            body: formData, // sending the form data directly
            mode: "no-cors",
        })
            .then(() => {
                // The response is opaque, so we don't try to parse it
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error sending the message.");
            });
    });

document.querySelectorAll('.block-name-container').forEach(container => {
    let interval;

    container.addEventListener('mouseenter', () => {
        const arrows = container.querySelectorAll('.arrow-right');
        let current = 0;

        interval = setInterval(() => {
            // Reset all arrows in this container
            arrows.forEach(arrow => arrow.classList.remove('arrow-right-changed'));

            // Change the current arrow
            arrows[current].classList.add('arrow-right-changed');

            // Increment or reset the index
            current = (current + 1) % arrows.length;
        }, 800); // Adjust the time for the effect
    });

    container.addEventListener('mouseleave', () => {
        clearInterval(interval); // Clear the interval
        container.querySelectorAll('.arrow-right').forEach(arrow => {
            arrow.classList.remove('arrow-right-changed'); // Reset all arrows
        });
    });
});

