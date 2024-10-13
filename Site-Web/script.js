// Section navbar smooth 
// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// Section About button voir plus
const button = document.getElementById('button');
const hidden = document.getElementById('hidden');

button.addEventListener('click', function() {
    if (hidden.classList.contains('show')) {
        hidden.classList.remove('show');
        button.textContent = 'Voir Plus';
    }else{
        hidden.classList.add('show');
        button.textContent = 'Reduire';
    }
});

// Section affichage progressive 
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
          observer.unobserve(entry.target); // Une fois observée, on n'a plus besoin de l'observer
        }
    });
    }, {
      threshold: 0.1 // 10% de la section doit être visible pour déclencher l'animation
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Section progresse Langage 
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        
        if (isInViewport(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            bar.style.width = percentage + '%';
            bar.setAttribute('data-percentage', percentage); // Met à jour l'attribut pour afficher le pourcentage
        }
    });
}

// Vérifie si l'élément est dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && // La partie supérieure de l'élément doit être visible
        rect.bottom > 0 // La partie inférieure de l'élément doit être visible
    );
}

// Ajoute l'écouteur d'événements pour le défilement
window.addEventListener('scroll', animateProgressBars);

// Appel initial au cas où les barres seraient déjà visibles au chargement de la page
animateProgressBars();