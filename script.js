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

// Form submit success message with Formspree
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".footer form");
    const button = form.querySelector("button");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // prevent default submit

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                button.innerText = "Message Sent Successfully ✅";
                button.style.background = "#4CAF50";
                button.disabled = true;
                form.reset();
            } else {
                button.innerText = "Error ❌ Try Again";
                button.style.background = "#E74C3C";
            }
        } catch (error) {
            button.innerText = "Network Error ❌";
            button.style.background = "#E74C3C";
        }
    });
});
