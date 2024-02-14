const searchInput = document.getElementById('search-input');

let results = [];
let recommendations = [];

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



// Get Anime News Data from API
async function getRecommendations() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/1/recommendations`);
        const responseData = await response.json();
        recommendations = responseData.data;
        console.log(recommendations);
    } catch (error) {
        console.log('An Error has occured: ',error);
    }
}


export { getAnimeData, searchInput, results, getRecommendations };