// Création du lien pour la div
let year = document.querySelector('#yearBissextile');

// Création de la boucles pour l'affichage des années
for (let i = 2020; i <= 2030; i++) {

    // Création de la règle pour les années bisextiles
    if (i % 4 == 0 && i % 100 !== 0 || i % 400 == 0) {
        // on reprend le contenu precedent et on vient lui ajouter une div de couleur avec la nouvelle valeur
        year.innerHTML += '<div style="color: red">' + i + '</div>';
    } else {
        year.innerHTML += '<div style="color: black">' + i + '</div>';
    };

};