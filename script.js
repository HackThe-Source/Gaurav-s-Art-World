// LIGHTBOX EFFECT FOR GALLERY
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    images.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            img.src = image.src;
        });
    });

    // Close lightbox on click
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});

// Form submit success message
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".footer form");
    const button = form.querySelector("button");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop default for testing
        // If using Formspree, remove the line above

        button.innerText = "Message Sent Successfully ✅";
        button.style.background = "#4CAF50"; // green color
        button.disabled = true;

        // If using Formspree, let it actually submit:
        // form.submit();
    });
});
