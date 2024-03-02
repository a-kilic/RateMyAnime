const animeList = document.getElementById('anime-list');

// Dynamically creating table

function createTitle() {
    const headerContainer = document.createElement('div');
    const header = document.createElement('h1');
    header.classList.add('list-header');
    header.textContent = 'Your Anime List';

    // Append
    headerContainer.appendChild(header);
}

function createList() {
    // Creating table headers
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');

    const tableAnimeAmount = document.createElement('th');
    tableAnimeAmount.textContent = '#';
    const tableAnimeImage = document.createElement('th');
    tableAnimeImage.textContent = 'Image';
    const tableAnimeTitle = document.createElement('th');
    tableAnimeTitle.textContent = 'Anime Title';
    const tableAnimeScore = document.createElement('th');
    tableAnimeScore.textContent = 'Score';

    // Append <th> to <tr> and append both to <thead> & <table>
    tableRow.append(tableAnimeAmount, tableAnimeImage, tableAnimeTitle, tableAnimeScore);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    // Creating table body
    const tableBody = document.createElement('tbody');

    // Get anime titles, ratings and images from users localStorage
    const animeRatings = JSON.parse(localStorage.getItem('animeRatings'));

    // Creating dynamic <tr> / <td> from users localStorage data (loop)
    if (animeRatings) {
        animeRatings.forEach((anime, index) => {
            const tableRow = document.createElement('tr');

            const numberCell = document.createElement('td');
            numberCell.textContent = index + 1;

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.src = anime.image;
            image.alt = anime.title;
            imageCell.appendChild(image);

            const titleCell = document.createElement('td');
            titleCell.textContent = anime.title;

            const scoreCell = document.createElement('td');
            scoreCell.textContent = anime.rating;

            // Append cells to tableRow
            tableRow.append(numberCell, imageCell, titleCell, scoreCell);

            // Append the row to the table body
            tableBody.appendChild(tableRow);
        });
    }
    // Append the table body to the table
    table.appendChild(tableBody);

    // Append the table to the animeList container
    animeList.appendChild(table);
}

function clearList() {
    // Remove existing table if it exists
    const existingTable = animeList.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }
}

function displayList() {
    // Clear existing List
    clearList();

    createTitle();
    createList();
}

// Function to remove anime list
function removeList() {
    clearList();
}

export { displayList, removeList };