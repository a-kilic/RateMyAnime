// Variables
const formEl = document.getElementById('form');
const searchInput = document.getElementById('search');
const animePageContainer = document.getElementById('anime-page-container');

let results = [];
let animeId;

// Get Data from Jikan API
async function getAnimeData() {
    animeId = searchInput.value.trim();
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeId}&sfw`);
        results = await response.json();
        console.log(results);
    } catch (error) {
        console.log('Error Message:', error)
    }
}

// Event Listeners
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    getAnimeData();
});


// On Load
getAnimeData();