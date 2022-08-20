import Modal from "./Modal.js";

class ModalError extends Modal {
    constructor(title, message){
        super(title)
        this.message = message
    }
    render(){
        super.render()
        this.modalFooter.hidden = true
        this.modalMainContainer.classList.add("bg-danger", "bg-opacity-25")
        this.modalBody.innerHTML = `
        <span>${this.message}</span>`
    }
}

export default ModalError