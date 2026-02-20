export const handleLike = event => {
    const btn = event.currentTarget
    const id = btn.id.slice(-1)
    if(localStorage.getItem("liked") == undefined) {
        localStorage.setItem("liked", JSON.stringify([id])) 
        btn.classList.add("--liked")
    } else if(JSON.parse(localStorage.getItem("liked")).includes(id)) {
        localStorage.setItem("liked", JSON.stringify(JSON.parse(localStorage.getItem("liked")).filter(liked => liked != id)));
        btn.classList.remove("--liked");
    } else {
        btn.classList.add("--liked")
        let newLiked = JSON.parse(localStorage.getItem("liked"))
        newLiked.push(id)
        localStorage.setItem("liked", JSON.stringify(newLiked));
    }
}