let contact_button = document.querySelector(".contact-button");
contact_button.addEventListener("mousemove", (e) => {
    let rect = contact_button.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    contact_button.style.setProperty("--x", x + "px");
    contact_button.style.setProperty("--y", y + "px");
});

let submit_button = document.querySelector(".submit-button");
submit_button.addEventListener("mousemove", (e) => {
    let rect = submit_button.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    submit_button.style.setProperty("--x", x + "px");
    submit_button.style.setProperty("--y", y + "px");
});

const serviceCards = document.querySelectorAll(".services-card");

serviceCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (Math.round(window.scrollY) > 20 && window.innerWidth > 768) {
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
        root: null,
        rootMargin: '0px',
        threshold: 0.1
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
            }
            // else {
            //     entry.target.classList.remove('in-view');
            // }
        });
    }, {
        root: null,
        rootMargin: '0px 0px 90% 0px',
        threshold: 0
    });

    aboutBlocks.forEach(block => {
        observer.observe(block);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav-list');

    function toggleNav() {
        const isActive = nav.classList.contains('nav-active');

        if (isActive) {
            // Close the navigation
            nav.classList.remove('nav-active');
            setTimeout(() => {
                nav.style.display = 'none';
            }, 500); // Ensure this matches your CSS transition time
        } else {
            // Open the navigation
            nav.style.display = 'flex';
            requestAnimationFrame(() => {
                nav.classList.add('nav-active');
            });
        }

        // Always toggle the burger icon
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', () => {
        toggleNav();
    });

    // Close nav when clicking inside or outside nav, but not when clicking on the burger
    document.addEventListener('click', (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideBurger = burger.contains(event.target);

        if (nav.classList.contains('nav-active') && !isClickInsideBurger) {
            if (isClickInsideNav || !isClickInsideNav) {
                toggleNav();
            }
        }
    });
});




window.addEventListener('scroll', () => {
    const carousel = document.querySelector('.carousel-1');
    const carouselRect = carousel.getBoundingClientRect(); // Get carousel's position relative to viewport
    const windowHeight = window.innerHeight;
    const isInView = carouselRect.top < windowHeight && carouselRect.bottom > 0; // Check if carousel is in the viewport

    if (isInView) {
        // Calculate how far the carousel is from being at the top of the viewport
        const distanceFromTopOfViewport = carouselRect.top;
        const percentageInView = Math.max(0, 1 - (distanceFromTopOfViewport / windowHeight));

        // Use this percentage to scale the translateX movement
        const baseTranslateX = -300; // Starting point for translateX
        const maxTranslateX = 200; // Maximum translateX value you want to allow
        const translateXMovement = baseTranslateX + (maxTranslateX * percentageInView); // Calculate new translateX

        carousel.style.transform = `translateX(${translateXMovement}px)`;
    }
});

window.addEventListener('scroll', () => {
    const carousel = document.querySelector('.carousel-2');
    const carouselRect = carousel.getBoundingClientRect(); // Get carousel's position relative to viewport
    const windowHeight = window.innerHeight;
    const isInView = carouselRect.top < windowHeight && carouselRect.bottom > 0; // Check if carousel is in the viewport

    if (isInView) {
        // Calculate how far the carousel is from being at the top of the viewport
        const distanceFromTopOfViewport = carouselRect.top;
        const percentageInView = Math.max(0, 1 - (distanceFromTopOfViewport / windowHeight));

        // Use this percentage to scale the translateX movement
        const baseTranslateX = 0; // Starting point for translateX
        const maxTranslateX = -250; // Maximum translateX value you want to allow
        const translateXMovement = baseTranslateX + (maxTranslateX * percentageInView); // Calculate new translateX

        carousel.style.transform = `translateX(${translateXMovement}px)`;
    }
});
