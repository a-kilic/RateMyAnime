import { displayAnimePage } from './pageCreator.js';
import { displayResults } from './autocomplete.js';
import { searchInput } from './fetchData.js'; 

// Variables
const formEl = document.getElementById('form');

// Event Listeners

// Display on submit
formEl.addEventListener('submit', async function(e) {
    e.preventDefault(); 
    await displayAnimePage();
});

// Debounce function to optimize API requests
function debounce(cb, delay) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

const debouncedDisplayResults = debounce(displayResults, 1000); 


searchInput.addEventListener('input', async () => {
    await debouncedDisplayResults();
})

// Add event listener to hide result box when clicking outside
document.body.addEventListener('click', (event) => {
    const resultBox = document.querySelector('.result-box');
    if (event.target !== searchInput && event.target !== resultBox) {
        resultBox.style.display = 'none';
    }
});