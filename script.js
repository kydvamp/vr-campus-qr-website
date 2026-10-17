window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.getElementById('menu-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false; // close menu
        });
    });
});
//QR
const qrItems = document.querySelectorAll('.qr-item');
    const qrModal = document.getElementById('qr-modal');
    const qrModalTitle = document.getElementById('qr-modal-title');
    const qrModalImage = document.getElementById('qr-modal-image');
    const qrClose = document.getElementById('qr-close');

    // Open the popup when a QR card is clicked
    qrItems.forEach((item) => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img');
            const qrNumber = item.dataset.qr;

            qrModalTitle.textContent = item.dataset.qr;
            qrModalImage.src = image.src;
            qrModalImage.alt = `Zoomed QR ${qrNumber}`;
            
            qrModal.classList.add('active');
            qrModal.setAttribute('aria-hidden', 'false');

            document.body.style.overflow = 'hidden';
        });
    });

    // Close using the X button
    qrClose.addEventListener('click', closeQRModal);

    // Close by clicking the dark background
    qrModal.addEventListener('click', (event) => {
        if (event.target === qrModal) {
            closeQRModal();
        }
    });

    // Close by pressing Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && qrModal.classList.contains('active')) {
            closeQRModal();
        }
    });

    function closeQRModal() {
        qrModal.classList.remove('active');
        qrModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }