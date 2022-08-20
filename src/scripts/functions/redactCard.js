import getVisitById from "../api/getVisitById.js"
import ModalRedactVisit from "../class/Modal/ModalRedactVisit.js"


const redactCard = async (target) => {
    const card = target.closest(".card")
    console.log(card); 
    const visitData = await getVisitById(card.id);
    let modal = new ModalRedactVisit("Edit visit data:", visitData, card)
    modal.render()
}

export default redactCard