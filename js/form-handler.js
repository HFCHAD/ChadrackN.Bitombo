// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Message envoyé avec succès !';
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            contactForm.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi du message');
        }
    })
    .catch(error => {
        formMessage.textContent = 'Une erreur s\'est produite. Veuillez réessayer.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
    })
    .finally(() => {
        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});