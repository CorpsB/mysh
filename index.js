/*
** EPITECH PROJECT, 2024
** mysh
** File description:
** index.js
*/

const blessed = require('blessed');

// Créer un écran Blessed
const screen = blessed.screen({
    smartCSR: true,
    title: 'Simple Blessed Window'
});

// Créer une boîte modale
const modal = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Ceci est une fenêtre modale.\nAppuyez sur Échap ou Q pour fermer.',
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: 'blue'
        },
        bg: 'black'
    },
    keys: true,
    vi: true
});

// Ajouter la boîte à l'écran
screen.append(modal);

// Focus sur la boîte modale
modal.focus();

// Gérer les touches pour fermer la fenêtre
modal.on('keypress', (ch, key) => {
    if (key.name === 'escape' || key.name === 'q') {
        return process.exit(0);
    }
});

// Quitter l'application avec Ctrl+C
screen.key(['C-c'], () => process.exit(0));

// Rendre l'écran
screen.render();
