document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const images = document.querySelectorAll('.image');

    tabs.addEventListener('click', (event) => {
        const category = event.target.dataset.category;
        
        if (category) {
            images.forEach(image => {
                if (category === 'all' || image.dataset.category === category) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }
    });
});
