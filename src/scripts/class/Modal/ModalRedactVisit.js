import filterCards from "../../functions/filterCards.js";
import editVisit from "../../api/editVisit.js";
import formCardBody from "../../functions/formCardBody.js";
import selectFormByDoctor from "../../functions/selectFormByDoctor.js";
import Modal from "./Modal.js";
import ModalError from "./ModalError.js";

class ModalRedactVisit extends Modal {
    constructor(title, visitObj, cardContainer) {
        super(title);
        this.visitObj = visitObj
        this.cardContainer = cardContainer

        this.form = null
        this.select = document.createElement("select")
    }

    addAtributes(){
        this.submitBtn.innerText = "Submit"
        this.closeBtn.innerText = "Cancel"

        this.select.classList.add("form-select")
        this.select.innerHTML = `
        <option value="therapist">Therapist</option>
        <option value="dentist">Dentist</option>
        <option value="cardiologist">Cardiologist</option>`
        this.select.value = this.visitObj.doctor
    }

    fillInputs() {
        const inputCollection = this.modalBody.querySelectorAll("._visit-input");
        inputCollection.forEach(input => {
            if (this.visitObj[input.name] !== undefined) {
                input.value = this.visitObj[input.name]
            }
        })
    }

    reRender(){
        this.cardContainer.querySelector(".card-title").innerText = (this.visitObj.doctor[0].toUpperCase() +
                                                                                this.visitObj.doctor.slice(1));
        const cardInfo = formCardBody(this.visitObj)
        this.cardContainer.querySelector("._visit-info").innerHTML = cardInfo
    }

    render(){
        this.addAtributes()
        super.render()
        this.modalBody.append(this.select)
        
        this.form = selectFormByDoctor(this.visitObj.doctor)
        this.form.render(this.modalBody)
        this.fillInputs()

        // this.modalBody.querySelectorAll("._visit-input").forEach(input => {
        //     input.addEventListener("input", ({target}) => this.visitObj[target.name] = target.value)
        // })

        this.select.addEventListener("change", ({target}) => {
            const inputCollection = this.modalBody.querySelectorAll("._visit-input");
            inputCollection.forEach(input => {
                this.visitObj[input.name] = input.value
            })
            this.modalBody.querySelector("form").remove()
            this.form = selectFormByDoctor(target.value)
            this.form.render(this.modalBody)

            this.fillInputs()
        })

        const submitEditing = async ({target}) => {
            const body = this.form.collectData()
            body.id = this.visitObj.id

            try {
                this.visitObj = await editVisit(this.visitObj.id, body)
            } catch (error) {
                (new ModalError(`Error!`, 'Failed edit visit.')).render()
                const myModal = new bootstrap.Modal('#staticBackdrop')
                myModal.show()
            }

            console.log(this.visitObj);
            this.reRender()
            filterCards()

            target.removeEventListener("click", submitEditing)
        } 
        this.submitBtn.addEventListener("click", submitEditing)
    }
    
}

export default ModalRedactVisit