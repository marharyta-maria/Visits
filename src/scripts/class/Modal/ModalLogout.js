import Modal from "./Modal.js";

class ModalLogout extends Modal {
    constructor(title){
        super(title)
    }

    addAtributes(){
        this.submitBtn.innerText = `Log out`
        this.closeBtn.innerText = `Cancel`
    }

    render(){
        super.render();
        this.addAtributes();

        this.modalBody.insertAdjacentHTML("beforeend", `
        <span>Are you sure you want to log out?</span>`)

        const submitLogout = ({target}) => {
            localStorage.removeItem("token")
            location.replace("../../index.html")
            target.removeEventListener("click", submitLogout)
        }

        this.submitBtn.addEventListener("click", submitLogout)
    }
}

export default ModalLogout