// Menu mobile
const hamburger = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animation au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Animation des compétences
    animateSkills();
});

// Animation des barres de compétences
function animateSkills() {
    const skillBars = document.querySelectorAll('.level-bar');
    const skillsSection = document.querySelector('.skills-section');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1.5s ease-in-out';
            }, 100);
        });
    }
}

// Animation des cartes de compétences et centres d'intérêt
const skillCards = document.querySelectorAll('.skill-card');
const hobbyCards = document.querySelectorAll('.hobby-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

hobbyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        const icon = card.querySelector('i');
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        const icon = card.querySelector('i');
        icon.style.transform = 'scale(1)';
    });
});

// Redirection vers le portfolio quand on clique sur une compétence
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Empêche la redirection si on clique sur un élément à l'intérieur de la carte
        if (e.target.tagName !== 'A' && !e.target.closest('a')) {
            const link = card.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        }
    });
});

// Initialisation des animations
document.addEventListener('DOMContentLoaded', () => {
    // Animation initiale des compétences
    animateSkills();
    
    // Ajoute la classe scrolled au header si on est déjà scrollé
    if (window.scrollY > 50) {
        document.querySelector('header').classList.add('scrolled');
    }
});