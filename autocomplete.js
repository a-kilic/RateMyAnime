import { getAnimeData, searchInput } from './fetchData.js';
import { displayAnimePage } from './pageCreator.js'


// Create dynamic results box

function createResultsBox() {
    results.forEach(result => {
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('result-box')
    
        const resultsUl = document.createElement('ul');
        const resultsListEl = document.createElement('li');
        const resultsLink = document.createElement('a');
        resultsLink.setAttribute('href', displayAnimePage(result.title));

        resultsListEl.appendChild(resultsLink);
        resultsUl.appendChild(resultsListEl);
        resultsContainer.appendChild(resultsUl);
    });
}

// Update results box
function updateResults(results) {
    const resultsContainer = document.querySelector('.result-box');

    // Clear previous results
    resultsContainer.innerHTML = ''; 
    results.forEach(result => {
        const resultsListEl = document.createElement('li');
        const resultsLink = document.createElement('a');
        resultsLink.textContent = result.title;
        resultsLink.setAttribute('href', '#');
        resultsListEl.addEventListener('click', () => displayAnimePage(result));

        resultsListEl.appendChild(resultsLink);
        resultsContainer.appendChild(resultsListEl);
    });
}


// Display results only if input field isn't empty
async function displayResults() {
    const results = await getAnimeData();
    const resultBox = document.querySelector('.result-box');
    // Check if input field is empty, if yes don't show result box, if no then show result box
    if (searchInput.value.trim() === '' || results.length === 0) {
        resultBox.style.display = 'none';
    } else {
        updateResults(results);
        resultBox.style.display = 'block';
    }
}

export { createResultsBox, displayResults, updateResults};