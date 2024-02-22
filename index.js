import { displayResults } from './autocomplete.js';
import { searchInput } from './fetchData.js'; 

// Variables
const logo = document.getElementById('logo');

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


// Event Listeners

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

// Add event listener to refresh site when clicking on logo
logo.addEventListener('click', function() {
    window.location.reload();
});