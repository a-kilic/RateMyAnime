import { getAnimeData } from './fetchData.js';
import { displayAnimePage } from './pageCreator.js'


// Create dynamic results box

function createResultsBox() {
    results.forEach(result => {
        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('result-box')
    
        const resultsUl = document.createElement('ul');
        const resultsListEl = document.createElement('li');
        const resultsLink = document.createElement('a');
        resultsLink.setAttribute('a', displayAnimePage(result.title));

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
        resultsLink.addEventListener('click', () => displayAnimePage(result.title));

        resultsListEl.appendChild(resultsLink);
        resultsContainer.appendChild(resultsListEl);
    });
}


async function displayResults() {
    const results = await getAnimeData();
    updateResults(results)
}

export { createResultsBox, displayResults, updateResults};