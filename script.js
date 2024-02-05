// Variables
const formEl = document.getElementById('form');
const searchInput = document.getElementById('search');
const animePageContainer = document.getElementById('anime-page-container');

let results = [];


// Get Data from Jikan API
async function getAnimeData() {
    let animeId = searchInput.value.trim();
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeId}&sfw`);
        const responseData = await response.json();
        results = responseData.data;
        console.log(results);
    } catch (error) {
        console.log('Error Message:', error)
    }
}

// Creating dynamic Anime pages

// Creating Title
function createTitles() {
    results.forEach((titleData) => {
        const titleContainer = document.createElement('div');

        const titleEn = document.createElement('h2');
        titleEn.textContent = titleData.title_english;
    
        const titleJp = document.createElement('h2');
        titleJp.textContent = titleData.title_japanese;
    
        // Append
        titleContainer.append(titleEn, titleJp);
        animePageContainer.appendChild(titleContainer);
    });
}


// Creating Images
function createImages() {
    results.forEach((imageData) => {
        const imageContainer = document.createElement('div');

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageData.images.jpg.image_url);
        imageElement.setAttribute('alt', 'Anime Cover Image');
    
        // Append
        imageContainer.appendChild(imageElement);
        animePageContainer.appendChild(imageContainer);
    });
}

// Creating Score Section
function createScoreInfo() {
    results.forEach((scoreData) => {

        const scoreInfoContainer = document.createElement('div');
        const scoresDiv = document.createElement('div');
        
        const rank = document.createElement('h3');
        rank.textContent = `Ranked #${scoreData.rank}`;
    
        const popularity = document.createElement('h3');
        popularity.textContent = `Popularity #${scoreData.popularity}`;
    
        const members = document.createElement('h3');
        members.textContent = `Members ${scoreData.members}`;
    
        // Append
        scoresDiv.append(rank, popularity, members);
        scoreInfoContainer.appendChild(scoresDiv);
        animePageContainer.appendChild(scoreInfoContainer);
    });

}

// Creating Rating Section 
function createRatingSection() {
    results.forEach(() => {
        const ratingContainer = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', 'rank-select');
    
        const select = document.createElement('select');
        select.setAttribute('id', 'rank-select');
    
        const ratings = [
            { value: "", label: "Rate Anime" },
            { value: "10", label: "(10) Masterpiece" },
            { value: "9", label: "(9) Great" },
            { value: "8", label: "(8) Very Good" },
            { value: "7", label: "(7) Good" },
            { value: "6", label: "(6) Fine" },
            { value: "5", label: "(5) Average" },
            { value: "4", label: "(4) Bad" },
            { value: "3", label: "(3) Very Bad" },
            { value: "2", label: "(2) Horrible" },
            { value: "1", label: "(1) Appaling" }
        ];
    
        // Loop through ratings array and create option elements
        for (let i = 0; i < ratings.length; i++) {
            const option = document.createElement('option');
            option.value = ratings[i].value;
            option.textContent = ratings[i].label;
            select.appendChild(option);
        }
    
        // Append
        ratingContainer.append(label, select);
        animePageContainer.appendChild(ratingContainer);
    });

}




// Creating Anime Synopsis Section
function createSynopsis() {
    results.forEach((synopsisData) => {
        const synopsisDiv = document.createElement('div');
        const text = document.createElement('p');
        text.textContent = synopsisData.synopsis;
    
        // Append
        synopsisDiv.appendChild(text);
        animePageContainer.appendChild(synopsisDiv);
    });
}

async function displayAnimePage() {
    // Check if search input is empty
    if (searchInput.value.trim() === '') {
        console.log('Please enter a search term');
        return;
    }
    
    // Clear previous content in animePageContainer
    animePageContainer.innerHTML = '';

    await getAnimeData();

    createTitles();
    createImages();
    createScoreInfo();
    createRatingSection();
    createSynopsis();
}


// Event Listeners
formEl.addEventListener('submit', async function(e) {
    e.preventDefault();
    await displayAnimePage();
});

// On Load
getAnimeData();