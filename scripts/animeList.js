const animeList = document.getElementById('anime-list');

// Dynamically creating table

function createHeader() {
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
    tableHeaderAmount.textContent = 'Image';
    const tableAnimeTitle = document.createElement('th');
    tableHeaderAmount.textContent = 'Anime Title';
    const tableAnimeScore = document.createElement('th');
    tableAnimeScore.textContent = 'Score';

    // Append <th> to <tr> and append both to <thead> & <table>
    tableRow.append(tableAnimeAmount, tableAnimeImage, tableAnimeTitle, tableAnimeScore);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    // Creating table body with it's dynamic <tr> & <td>
    const tableBody = document.createElement('tbody');

    // Creating dynamic <tr> / <td> from users localStorage data

    // Loop through localStorage data and create <tr> & <td> dynamically
    

}

function displayList() {

}

export { displayList };