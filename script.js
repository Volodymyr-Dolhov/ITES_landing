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

document.addEventListener("DOMContentLoaded", function () {
    const aboutBlocks = document.querySelectorAll('.about-first, .about-second, .about-third, .about-fourth, .about-seventh');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        root: null, // observing for viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element should be visible
    });

    aboutBlocks.forEach(block => {
        observer.observe(block);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutBlocks = document.querySelectorAll('.about-fifth, .about-sixth, .about-eighth, .about-nineth');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        root: null, // observing for viewport
        rootMargin: '0px 0px 70% 0px',
        threshold: 0 // 10% of the element should be visible
    });

    aboutBlocks.forEach(block => {
        observer.observe(block);
    });
});



// Function to check if the element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top + offset >= 0 &&
        rect.left >= 0 &&
        rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to run on scroll
function checkScroll() {
    const aboutBlocks = document.querySelectorAll('.about-first, .about-second, .about-third, .about-fourth, .about-fifth, .about-sixth, .about-seventh, .about-eighth, .about-nineth');
    aboutBlocks.forEach(block => {
        if (isInView(block)) {
            block.classList.add('in-view');
        } else {
            block.classList.remove('in-view');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', checkScroll);
