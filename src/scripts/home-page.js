import getVisits from "./api/getVisits.js";
import ModalCreateVisit from "./class/Modal/ModalCreateVisit.js";
import showMore from "./functions/showMore.js";
import redactCard from "./functions/redactCard.js";
import visitWrapObserver from "./functions/visitWrapObserver.js";
import showCards from "./functions/showCards.js";
import filterCards from "./functions/filterCards.js";
import debounce from "./functions/debounce.js";
import showDeleteModal from "./functions/showDeleteModal.js";
import ModalLogout from "./class/Modal/ModalLogout.js";

const visitsWrap = document.querySelector("._visits-wrap")
const noVisitsSpan = document.querySelector("._no-visits-added")

const renderExistVisits = async () => {
    const visitArray = await getVisits();
    if (visitArray.length === 0) {
        document.querySelector("._no-visits-added").classList.remove("visually-hidden")
    } else {
        console.log(visitArray);
        showCards(visitArray)
    }
}
renderExistVisits()

document.querySelector("._create-visit-btn").addEventListener("click", ()=>{
    (new ModalCreateVisit("Enter visit data:")).render()
})

document.querySelector("._logout-btn").addEventListener("click", () => {
    (new ModalLogout("Log out")).render()
})


visitsWrap.addEventListener("click", async ({target}) => {
    if (target.classList.contains("_show-more-btn")) {
        showMore(target)
    } else if (target.classList.contains("_card-delete-btn")) {
        showDeleteModal(target)
    } else if (target.classList.contains("_card-redact-btn") || 
                target.parentElement.classList.contains("_card-redact-btn")) {
        await redactCard(target)
    }
    }
)


visitWrapObserver.observe(visitsWrap, {childList : true})

document.querySelector("._doctor-filter").addEventListener("change", filterCards)
document.querySelector("._priority-filter").addEventListener("change", filterCards)
document.querySelector("._text-filter").addEventListener("input", debounce(filterCards, 1000))