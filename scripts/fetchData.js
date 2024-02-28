const searchInput = document.getElementById('search-input');

let results = [];
let topAnimeArray = [];

// Get Data from Jikan API
async function getAnimeData() {
    let animeId = searchInput.value.trim();
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeId}&sfw`);
        const responseData = await response.json();
        results = responseData.data;
        return responseData.data;
    } catch (error) {
        console.log('An Error has occured:', error)
    }
}



// Get Top Anime Data from API
async function getTopAnimes() {
    // Check if data already exists in localStorage
    const storedData = localStorage.getItem('topAnimeData');
    if (storedData) {
        topAnimeArray = JSON.parse(storedData);
    } else {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
            const responseData = await response.json();
            topAnimeArray = responseData.data;

            // Sort the topAnimeArray by rank
            topAnimeArray.sort((a, b) => a.rank - b.rank);

            // Store data in localStorage
            localStorage.setItem('topAnimeData', JSON.stringify(topAnimeArray));
        } catch (error) {
            console.log('An Error has occured: ', error);
        }
    }
}

// On Load
getTopAnimes();

export { getAnimeData, searchInput, results, getTopAnimes, topAnimeArray };