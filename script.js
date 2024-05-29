document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const imageCount = 10;

    for (let i = 1; i <= imageCount; i++) {
        const imgSrc = `images/keyboard deni fisman bulaa${i}.jpeg`;
        const imgAlt = `foto keyboard deni fisman bulaa ${i}`;
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
        gallery.appendChild(galleryItem);

        galleryItem.addEventListener('click', function() {
            openModal(imgSrc, imgAlt);
        });
    }

    function openModal(src, alt) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${src}" alt="${alt}">
            </div>
        `;

        modal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        document.body.appendChild(modal);
        modal.style.display = 'block';
    }
});
