const searchInput = document.getElementById('search-input');

let results = [];

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

export { getAnimeData, searchInput, results };