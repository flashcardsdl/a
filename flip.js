document.addEventListener("DOMContentLoaded", () => {

    // Flashcard flip
    document.querySelectorAll('.flashcard').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

});
