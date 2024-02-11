import { displayAnimePage } from './pageCreator.js';
import { displayResults } from './autocomplete.js';
import { searchInput } from './fetchData.js'; 

// Variables
const formEl = document.getElementById('form');

// Event Listeners
formEl.addEventListener('submit', async function(e) {
    e.preventDefault(); 
    await displayAnimePage();
});

searchInput.addEventListener('input', async () => {
    await displayResults();
})
