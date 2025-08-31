const access ="9ldRFaqKUJAM_-FKw3bhdiY0IaYMKiD0QRIIMLyzhvQ";


let searchbar = document.getElementById('search');
let button = document.querySelector('.btn');
let show = document.querySelector('.show');
let resualtshow = document.querySelector('.resualt');


let keyword = '';
let page = 1;

async function searchimage(clear = false) {
    keyword = searchbar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`;
    const response = await fetch(url);
    if (!response.ok) {
        resualtshow.innerHTML = `<p style='color:red;'>Error: ${response.status === 403 ? 'API Rate Limit Exceeded. Please try again later.' : response.statusText}</p>`;
        show.style.display = "none";
        return;
    }
    const data = await response.json();
    const results = data.results;
    if (clear) {
        resualtshow.innerHTML = '';
    }
    if (results && results.length > 0) {
        results.forEach((result) => {
            const img = document.createElement('img');
            img.src = result.urls.small;
            const imagelink = document.createElement('a');
            imagelink.href = result.links.html;
            imagelink.target = "_blank";
            imagelink.appendChild(img);
            resualtshow.appendChild(imagelink);
        });
        show.style.display = "block";
        // Hide show more if less than 12 results (last page)
        if (results.length < 12) {
            show.style.display = "none";
        }
    } else {
        if (page === 1) {
            resualtshow.innerHTML = '<p>No images found.</p>';
        }
        show.style.display = "none";
    }
}
let form = document.getElementById('searchForm')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimage(true);
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    page = 1;
    searchimage(true);
});
show.addEventListener('click', (e) => {
    e.preventDefault();
    page++;
    searchimage(false);
});