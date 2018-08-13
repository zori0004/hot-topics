const container = document.querySelector(".content");
let url = "../partials/portfolio.json";

function projects() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let cd of data.catalog) {
                container.innerHTML += ` <div class="projects clearfix">
                                            <figure>
                                                <img src="${cd.img}" alt="${cd.alt}">
                                                <figcaption>${cd.fig}</figcaption>
                                            </figure>
                                        </div>`;
            }
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

window.onload = projects;

            