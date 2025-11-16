document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const modalImg = document.querySelector(".modal-img");
    const closeModal = document.querySelector(".close");

    const cards = document.querySelectorAll(".gallery-card");

    let currentIndex = 0;
    let images = [];

    // Build array of all image paths from data attributes
    cards.forEach(card => {
        images.push(card.dataset.img);
    });

    // Open modal on card click
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            currentIndex = index;
            openModal(images[currentIndex]);
        });
    });

    function openModal(src) {
        modal.style.display = "flex"; // Important for centering
        modalImg.src = src;
    }

    // Close modal
    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Next image
    document.getElementById("modalNext").onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    };

    // Previous image
    document.getElementById("modalPrev").onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    };

});
