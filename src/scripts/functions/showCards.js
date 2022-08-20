import CardVisit from "../class/Cards/CardVisit.js"

const showCards = (cardArray) => {
    const visitWrap = document.querySelector("._visits-wrap")
    visitWrap.innerHTML =``
    cardArray.forEach(card => {
        (new CardVisit(card)).render(visitWrap)
    })
}

export default showCards