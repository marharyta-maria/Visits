import deleteVisit from "../api/deleteVisit.js"
import ModalError from "../class/Modal/ModalError.js"

const deleteCard = async (target) => {
    const card = target.closest(".card")
    const status = await deleteVisit(card.id)
    if (status === 200) {
        card.remove()
    } else {
        (new ModalError(`Error!`, 'Failed delete visit.')).render()
        const myModal = new bootstrap.Modal('#staticBackdrop')
        myModal.show()
    }
}

export default deleteCard