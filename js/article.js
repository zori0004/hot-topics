const homeContainer = document.querySelector(".home-content");
let homeUrl = "https://zori0004.github.io/hot-topics/partials/article.json";

function articles() {
    fetch("https://zori0004.github.io/hot-topics/partials/article.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let ca of data.articles) {
                homeContainer.innerHTML += `<hr>
                                        <h3>${ca.title}</h3>
                                        <div class="articles clearfix">
                                            <figure>
                                                <img src="${ca.img}" alt="${ca.alt}">
                                                <em><figcaption>${ca.fig}</figcaption></em>
                                            </figure>
                                            <div class="about-article">
                                                <p>${ca.text}</p>
                                            </div>
                                        </div>`;
            }
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

window.onload = articles;
