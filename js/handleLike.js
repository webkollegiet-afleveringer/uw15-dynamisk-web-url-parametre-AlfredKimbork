const handleLike = id => {
    if(localStorage.getItem("liked") == undefined) {
        localStorage.setItem("liked", JSON.stringify([id])) 
        document.querySelector(`#destination-${id}`).classList.add("--liked")
    } else if(JSON.parse(localStorage.getItem("liked")).includes(id)) {
        localStorage.setItem("liked", JSON.stringify(JSON.parse(localStorage.getItem("liked")).filter(liked => liked != id)));
        document.querySelector(`#destination-${id}`).classList.remove("--liked");
    } else {
        document.querySelector(`#destination-${id}`).classList.add("--liked")
        let newLiked = JSON.parse(localStorage.getItem("liked"))
        newLiked.push(id)
        localStorage.setItem("liked", JSON.stringify(newLiked));
    }
}
setTimeout(() => {
    JSON.parse(localStorage.getItem("liked")).forEach(id => {
        if(document.querySelector(`#destination-${id}`)) document.querySelector(`#destination-${id}`).classList.add("--liked");
    });
}, 20)