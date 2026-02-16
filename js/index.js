const main = document.querySelector("#main")

main.innerHTML = `
    <h1 class="main__heading">Apartments for rent</h1>
    <ul class="for-rent__list">
    </ul>
`;

fetch("http://localhost:8000/destinations")
    .then(response => response.json())
    .then(data => data.forEach(location => {
        document.querySelector(".for-rent__list").innerHTML += `
                <figure class="location">
                    <img class="location__img" src="./img/${location.image}" alt="${location.title}">
                    <figcaption class="location__actions">
                        <button class="btn--like">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00002 14C8.20074 13.9997 8.39674 13.9391 8.56252 13.8259C11.0185 12.1587 12.0819 11.0156 12.6685 10.3009C13.9185 8.7775 14.5169 7.21344 14.5 5.51969C14.4803 3.57875 12.9231 2 11.0288 2C9.65127 2 8.69721 2.77594 8.14158 3.42219C8.12398 3.44245 8.10223 3.4587 8.07781 3.46984C8.05339 3.48098 8.02686 3.48674 8.00002 3.48674C7.97318 3.48674 7.94665 3.48098 7.92223 3.46984C7.8978 3.4587 7.87606 3.44245 7.85846 3.42219C7.30283 2.77531 6.34877 2 4.97127 2C3.07689 2 1.51971 3.57875 1.50002 5.52C1.48314 7.21406 2.08221 8.77813 3.33158 10.3013C3.91814 11.0159 4.98158 12.1591 7.43752 13.8263C7.60334 13.9393 7.79933 13.9998 8.00002 14Z" fill="black"/>
                            </svg>
                        </button>
                        <a class="location__more" href="destinations.html?id=${location.id}">More</a>
                    </figcaption>
                </figure>
        `;
    }))
    