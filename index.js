import { displayAnimePage } from './pageCreator.js';

// Variables
const formEl = document.getElementById('form');

// Event Listeners
formEl.addEventListener('submit', async function(e) {
    e.preventDefault();
    await displayAnimePage();
});

