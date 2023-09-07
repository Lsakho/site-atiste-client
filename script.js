// Vérifier si la page actuelle est index.html
if (window.location.pathname === '/index.html') {
    // Sélectionnez toutes les images
    const images = document.querySelectorAll('img');

    // Parcourez toutes les images et ajoutez les écouteurs d'événements
    images.forEach(image => {
        const imageLink = image.parentElement;
        const imageTitle = imageLink.nextElementSibling; // Sélectionnez le titre suivant le lien

        // Cachez tous les titres d'images par défaut
        imageTitle.style.opacity = '0'; // Commence avec une opacité de 0

        // Ajouter un écouteur pour afficher le titre quand la souris est dessus
        image.addEventListener('mouseenter', () => {
            imageTitle.style.opacity = '1'; // Augmenter l'opacité pour le faire apparaître en douceur
        });

        // Ajouter un écouteur pour cacher le titre quand la souris quitte l'image
        image.addEventListener('mouseleave', () => {
            imageTitle.style.opacity = '0'; // Réduire l'opacité pour le faire disparaître en douceur
        });

        // Ajouter un écouteur pour rediriger vers le lien de l'image quand on clique dessus
        imageLink.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            window.location.href = imageLink.href; // Rediriger vers l'URL du lien
        });
    });
}
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    }

    prevScrollPos = currentScrollPos;
});

document.addEventListener('DOMContentLoaded', function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
        
    });
});

// $(document).ready(function() {
//     lightbox.options.loop = true;

//     $('[data-lightbox]').lightbox();
// });

function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
