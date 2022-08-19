class Modal {
    constructor(title) {
        this.title = title
        this.modalTitle = document.querySelector(".modal-title")
        this.modalBody = document.querySelector(".modal-body")
        this.modalFooter = document.querySelector(".modal-footer")
        this.modalMainContainer = document.querySelector(".modal")
    }

    render(){
        this.modalTitle.innerText = this.title
        this.modalBody.innerHTML =``
        this.modalFooter.innerHTML = ``
        this.modalMainContainer.classList = ["modal fade show"]
    }    
};

export default Modal