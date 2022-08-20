class Modal {
    constructor(title) {
        this.title = title
        this.modalTitle = document.querySelector(".modal-title")
        this.modalBody = document.querySelector(".modal-body")
        this.modalFooter = document.querySelector(".modal-footer")
        this.modalMainContainer = document.querySelector(".modal")
        this.submitBtn = document.querySelector("._modal-submit-button")
        this.closeBtn = document.querySelector("._modal-close-button")
    }

    // addAtributes(){
    //     // this.submitBtn.removeEventListener("click")

    //     this.submitBtn.type = "button"
    //     this.closeBtn.type = "button"
        
    //     this.submitBtn.classList.add("visit-form__button", "btn", "btn-success")
    //     this.closeBtn.classList.add("visit-form__button", "btn", "btn-light")

    //     this.submitBtn.dataset.bsDismiss = "modal"
    //     this.closeBtn.dataset.bsDismiss = "modal"
    // }

    render(){
        // this.addAtributes()
        this.modalTitle.innerText = this.title
        this.modalBody.innerHTML =``
        this.modalFooter.hidden = false;
        this.modalMainContainer.classList = ["modal fade show"]
        // this.modalFooter.append(this.submitBtn, this.closeBtn)
    }    
};

export default Modal