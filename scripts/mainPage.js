import { getTopAnimes, topAnimeArray } from "./fetchData.js"; 

const mainPage = document.getElementById('main-page');

async function displayTopAnimes() {
    await getTopAnimes();

    // Iterate over each anime in topAnimeArray
    topAnimeArray.forEach(anime => {
        // Create container
        const mainPageContainer = document.createElement('div');
        mainPageContainer.classList.add('main-page-container')
        
        // Create title element linking to specific anime
        const topTitle = document.createElement('h2');
        topTitle.textContent = anime.title;
        mainPageContainer.appendChild(topTitle);

        // Create rank element
        const topRank = document.createElement('h3');
        topRank.textContent = `#${anime.rank}`;
        mainPageContainer.appendChild(topRank);
        
        // Create image element linking to specific anime
        const topImage = document.createElement('img');
        topImage.setAttribute('src', anime.images.jpg.image_url);
        mainPageContainer.appendChild(topImage);

        // Append
        mainPage.appendChild(mainPageContainer);
    });
}

// On Load
displayTopAnimes();

export { mainPage };