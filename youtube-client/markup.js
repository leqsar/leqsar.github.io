export default function createElements() {
    const searchBox = document.createElement('DIV');
    searchBox.classList.add('search-container');
    document.body.appendChild(searchBox);

    const searchString = document.createElement('INPUT');
    searchString.classList.add('search-string');
    searchBox.appendChild(searchString);

    const submitBtn = document.createElement('BUTTON');
    submitBtn.classList.add('subm-button');
    searchBox.appendChild(submitBtn);

    const containerDiv = document.createElement('DIV');
    containerDiv.classList.add('main-container');
    document.body.appendChild(containerDiv);
}
