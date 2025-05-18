// Fungsi pencarian blog
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const blogCards = document.querySelectorAll('.blog-card');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const category = card.querySelector('.category').textContent.toLowerCase();

            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});