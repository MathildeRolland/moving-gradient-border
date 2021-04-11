// Je crée un tableau avec les couleurs du background
let colors = [
    '#5BDCF9',
    '#61BAE9',
    '#3941F3',
    '#5839F3',
    '#8D5BF9',
    '#C45BF9',
    '#F9B65B',
    'yellow'
];

// Je récupère le paragraphe
const paragraph = document.querySelector('p');
// Je récupère le texte du paragraphe
const paragraphText = document.querySelector('p').textContent;
// Je vide le contenu du paragraphe
paragraph.innerHTML = '';

// J'initialise l'index 0 du tableau colors afin de pouvoir le parcourir
let j = 0;

// Je divise le texte en spans (1 span par lettre)
for(let i = 0; i < paragraphText.length; i++) {
    // Pour chaque lettre de paragraphText, je l'entoure d'un span et lui donne une des couleurs du tableau colors
    paragraph.innerHTML += `<span style='color: ${colors[j]};'>${paragraphText[i]}</span>`;

    // J'itère dans le tableau colors pour le tour de boucle prochain
    j++;
}


