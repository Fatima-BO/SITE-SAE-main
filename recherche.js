// BARRE DE RECHERCHE
document.addEventListener("DOMContentLoaded", function() {
    var searchForm = document.getElementById('search-form');
  
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  
        var searchTerm = document.querySelector('.search-bar input[type="text"]').value.trim().toLowerCase();
  
        // Mapping des noms des parcs vers les URL correspondantes
        var parcMappings = {
            "yosemite": "yosemite.html", 
            "zion": "zion.html", 
            "yellowstone": "yellowstone.html",
            "hot springs": "hot_springs.html",
            "great smoky mountains": "great_smoky_mountains.html",
            "grand canyon": "grand_canyon.html",
            "bryce canyon": "grand_canyon.html",
            "gates of the arctic": "gota.html",
            "wrangell-saint-elias": "wse.html",
        };
  
        if (parcMappings.hasOwnProperty(searchTerm)) {
            var parcURL = parcMappings[searchTerm];
            window.location.href = parcURL;
        } else {
            console.log("Parc non trouvé : " + searchTerm);
        }
    });
  });