document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('closeModal');
    const thumbnails = document.querySelectorAll('.carousel-thumb');
    let lastFocused = null;

    function openModal(src, alt) {
        modalImg.src = src;
        modalImg.alt = alt;
        modal.classList.add('active');
        lastFocused = document.activeElement;
        closeBtn.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modalImg.src = '';
        modalImg.alt = '';
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    thumbnails.forEach(thumb => {
        thumb.setAttribute('tabindex', '0'); // Ensure thumbnails are focusable
        thumb.addEventListener('click', () => openModal(thumb.src, thumb.alt));
        thumb.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(thumb.src, thumb.alt);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeModal();
        }
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (modal.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
            closeModal();
        }
        // Trap focus inside modal when open
        if (modal.classList.contains('active') && e.key === 'Tab') {
            if (document.activeElement === closeBtn && !e.shiftKey) {
                e.preventDefault();
                closeBtn.focus();
            }
        }
    });
});