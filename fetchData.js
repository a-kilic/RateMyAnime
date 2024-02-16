const searchInput = document.getElementById('search-input');

let results = [];
let topAnime = [];

// Get Data from Jikan API
async function getAnimeData() {
    let animeId = searchInput.value.trim();
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeId}&sfw`);
        const responseData = await response.json();
        results = responseData.data;
        return responseData.data;
    } catch (error) {
        console.log('Error Message:', error)
    }
}



// Get Top Anime Data from API
async function getTopAnimes() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
        const responseData = await response.json();
        topAnime = responseData.data;
        console.log(topAnime);
    } catch (error) {
        console.log('An Error has occured: ', error);
    }
}

// On Load
getTopAnimes();

export { getAnimeData, searchInput, results, getTopAnimes };