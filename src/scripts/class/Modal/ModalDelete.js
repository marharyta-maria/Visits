import deleteCard from "../../functions/deleteCard.js";
import Modal from "./Modal.js";

class ModalDelete extends Modal {
    constructor(title, message, target){
        super(title)
        this.target = target
        this.message = message
    }

    addAttributes(){
        this.submitBtn.innerText = "Delete"
        this.closeBtn.innerText = "Cancel"
    }

    render(){
        super.render();
        this.addAttributes();

        this.modalBody.insertAdjacentHTML("beforeend", `
        <span>${this.message}</span>`)

        const submitDeleting = async ({target}) => {
            await deleteCard(this.target)
            target.removeEventListener("click", submitDeleting)
        }

        this.submitBtn.addEventListener("click", submitDeleting)
    }
}

export default ModalDelete