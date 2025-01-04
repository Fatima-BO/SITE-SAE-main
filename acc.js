const toggleLanguageButton = document.getElementById('toggle-language');
const flagIcon = document.querySelector('.flag-icon');

// Supposons que vous ayez une variable "langueActuelle" qui indique la langue actuelle (français ou anglais)
let langueActuelle = 'fr'; // 'fr' pour le français, 'en' pour l'anglais (vous pouvez adapter cela selon votre besoin)

// Mettez à jour la classe de l'icône de drapeau en fonction de la langue actuelle
flagIcon.classList.add(`flag-icon-${langueActuelle}`);

toggleLanguageButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Changez la langue ici et mettez à jour la variable "langueActuelle" en conséquence
    let langueActuelle = 'en'
    // Ajoutez également le code pour changer le contenu de la page en fonction de la nouvelle langue
    
    // Mettez à jour la classe de l'icône de drapeau en fonction de la nouvelle langue
    flagIcon.classList.add(`flag-icon-${langueActuelle}`);
    // par exemple, si la langue devient 'en', utilisez : flagIcon.classList.remove('flag-icon-fr') et flagIcon.classList.add('flag-icon-en');
});
