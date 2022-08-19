import searchVisits from "./searchVisits.js"
import showCards from "./showCards.js";

const filterCards = async () => {
    console.log("start");
    const visitArray = await searchVisits()
    document.querySelector("._visits-wrap").innerHTML = ``;
    showCards(visitArray)
}

export default filterCards