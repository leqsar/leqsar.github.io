export default function fetchData() {
    const mas = [];
    const a = document.querySelector('.subm-button');
    const containerDiv = document.querySelector('.main-container');
    a.addEventListener('click', () => {
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        }
        const text = document.querySelector('.search-string').value;
        const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCE7rz5CHyBjdPeKaHZ7bkrvM5BkPyTsSM&type=video&part=snippet&maxResults=15&q=${text}`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            const arr = data.items;
            arr.forEach((elem) => {
                const block1 = document.createElement('DIV');
                block1.classList.add('main-item-1');
                containerDiv.appendChild(block1);
                const pict = elem.snippet.thumbnails.medium.url;
                const videoUrl = `https://www.youtube.com/watch?v=${elem.id.videoId}`;
                const markup = `
                 <div class="main-info-container">
                    <div>
                        <img class="preview-image" src="${pict}">
                    <div>
                    <a class="title" href="${videoUrl}">${elem.snippet.title}</a>
                    <p class="description">${elem.snippet.description}</p>
                    <p class="channel-title">${elem.snippet.channelTitle}</p>
                    <p class="data">${elem.snippet.publishedAt}</p>
                    <p class="views"></p>
                 </div>
                `;
                block1.innerHTML = markup;
                mas.push(elem.id.videoId);
            });
        })

        .then(() => {
        const str = Array.prototype.join.call(mas, ',');
        const statisticUrl = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCE7rz5CHyBjdPeKaHZ7bkrvM5BkPyTsSM&id=${str}&part=snippet,statistics`;
        fetch(statisticUrl)
        .then(response => response.json())
        .then((data) => {
            let i = 0;
            const divs = document.querySelectorAll('.views');
            const arr2 = data.items;
            arr2.forEach((elem) => {
                const markupAdditional = `<p>${elem.statistics.viewCount}</p>`;
                divs[i].innerHTML = markupAdditional;
                i += 1;
            });
            });
        });
    });
}
