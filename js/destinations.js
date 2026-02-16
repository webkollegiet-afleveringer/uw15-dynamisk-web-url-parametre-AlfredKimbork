const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

fetch("http://localhost:8000/destinations")
    .then(response => response.json())
    .then(data => {
        let location = data[params.get("id") - 1]
        console.log(location)
    });