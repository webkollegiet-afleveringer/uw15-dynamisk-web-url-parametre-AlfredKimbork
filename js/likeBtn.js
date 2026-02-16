const handleLike = id => {
    if(localStorage.getItem("liked") == undefined) localStorage.setItem("liked", JSON.stringify([id]))
        else if(JSON.parse(localStorage.getItem("liked")).includes(id)) localStorage.setItem("liked", JSON.stringify(JSON.parse(localStorage.getItem("liked")).filter(liked => liked != id)));
        else {
            let newLiked = JSON.parse(localStorage.getItem("liked"))
            newLiked.push(id)
            localStorage.setItem("liked", JSON.stringify(newLiked));
        }
}