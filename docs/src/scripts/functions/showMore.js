const showMore = (target) => {
    const addInfo = target.closest(".card-body").querySelector("._add-info")
        addInfo.classList.toggle("visually-hidden")
        if (!addInfo.classList.contains("visually-hidden")) {
            target.innerText = "Hide"
        } else {
            target.innerText = "Show more"
        }
}

export default showMore