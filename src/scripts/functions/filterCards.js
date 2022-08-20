import searchVisits from "./searchVisits.js"
import showCards from "./showCards.js";

const filterCards = async () => {
    const visitArray = await searchVisits()
    showCards(visitArray)
}

export default filterCards