const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

const main = document.querySelector("#main")
main.classList.add("--flex")

fetch("http://localhost:8000/destinations")
    .then(response => response.json())
    .then(data => {
        let location = data[params.get("id") - 1]

        main.innerHTML = `
        <figure class="destination__figure">
            <img class="destination__img" src="./img/${location.image}" alt="${location.title}">
            <figcaption class="destination__btn">
                <button class="btn--like" onclick="handleLike(${location.id})">
                    <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1429 32C16.6135 31.9993 16.0966 31.8376 15.6594 31.5358C9.18257 27.09 6.37805 24.0417 4.83115 22.1358C1.53462 18.0733 -0.043588 13.9025 0.00091513 9.38583C0.0528354 4.21 4.15948 0 9.15537 0C12.7881 0 15.3042 2.06917 16.7695 3.7925C16.8159 3.84654 16.8733 3.88988 16.9377 3.91957C17.0021 3.94927 17.0721 3.96464 17.1429 3.96464C17.2136 3.96464 17.2836 3.94927 17.348 3.91957C17.4124 3.88988 17.4698 3.84654 17.5162 3.7925C18.9815 2.0675 21.4976 0 25.1303 0C30.1262 0 34.2329 4.21 34.2848 9.38667C34.3293 13.9042 32.7494 18.075 29.4546 22.1367C27.9077 24.0425 25.1031 27.0908 18.6263 31.5367C18.189 31.8381 17.6721 31.9996 17.1429 32Z" fill="black"/>
                    </svg>
                    favorit
                </button>
            </figcaption>
        </figure>
        <section class="destination__content">
            <h1 class="content__location">${location.destination}</h1>
            <h2 class="content__title">${location.title}</h2>
            <span class="content__subtitle">${location.subtitle}</span>
            <p class="content__text">${location.text}</p>
            <h3 class="facilities__heading">Faciliteter</h3>
            <ul class="facilities__list">${location.facilities.map(facility => {return `<li class="facilities__item">${facility}</li>`}).join("")}</ul>
        </section>
        `;
    });