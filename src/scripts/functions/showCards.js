import CardVisit from "../class/Cards/CardVisit.js"

const showCards = (cardArray) => {
    cardArray.forEach(card => {
        (new CardVisit(card)).render(document.querySelector("._visits-wrap"))
    })
}

export default showCards