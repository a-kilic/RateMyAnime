import { searchInput } from './fetchData.js';
import { mainPage } from './mainPage.js'; 

const animePageContainer = document.getElementById('anime-page-container');

// Creating dynamic Anime pages

// Creating Title
function createTitles(results) {
    results.forEach((titleData) => {
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('titleContainer');
        const title = document.createElement('h2');
        title.textContent = titleData.title;
    
        // Append
        titleContainer.append(title);
        animePageContainer.appendChild(titleContainer);
    });
}

// Creating Images
function createImages(results) {
    results.forEach((imageData) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer')

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', imageData.images.jpg.image_url);
        imageElement.setAttribute('alt', 'Anime Cover Image');
    
        // Append
        imageContainer.appendChild(imageElement);
        animePageContainer.appendChild(imageContainer);
    });
}

// Creating Score Section
function createScoreInfo(results) {
    results.forEach((scoreData) => {

        const scoreInfoContainer = document.createElement('div');
        scoreInfoContainer.classList.add('scoreInfoContainer');
        const scoresDiv = document.createElement('div');
        scoresDiv.classList.add('scoresDiv');
        
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
function createRatingSection(results) {
    results.forEach(() => {
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('ratingContainer');

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
function createSynopsis(results) {
    results.forEach((synopsisData) => {
        const synopsisDiv = document.createElement('div');
        synopsisDiv.classList.add('synopsisDiv');

        const text = document.createElement('p');
        text.textContent = synopsisData.synopsis;
        const synopsisHeader = document.createElement('h3');
        synopsisHeader.textContent = 'Synopsis:';
    
        // Append
        synopsisDiv.append(synopsisHeader, text);
        animePageContainer.appendChild(synopsisDiv);
    });
}



async function displayAnimePage(result) {
    // Clear previous content in animePageContainer
    animePageContainer.innerHTML = '';

    // Clear displayTopAnimes content
    mainPage.innerHTML = '';

    // Check if searchInput value is empty
    if (searchInput.value.trim() === '') {
        return; 
    }

    const results = [result];

    createTitles(results);
    createImages(results);
    createScoreInfo(results);
    createRatingSection(results);
    createSynopsis(results);
}

export { createTitles, createImages, createScoreInfo, createRatingSection, createSynopsis, displayAnimePage };