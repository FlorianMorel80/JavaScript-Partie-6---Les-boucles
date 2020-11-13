let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

// pour i qui est égal à 0 et inférieur à la taille du tableau on incrémente de 1 
for (weekEnd = 0; weekEnd < days.length; weekEnd++) {
    // si 
    if (days[weekEnd] == 'Samedi' || days[weekEnd] == 'Dimanche') {
        document.write('<div style = "font-weight: bold">' + days[weekEnd] + '</div>');
    } else {
        document.write('<div>' + days[weekEnd] + '</div>')
    }
}