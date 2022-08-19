import Modal from "./Modal.js";
import selectFormByDoctor from "../../functions/selectFormByDoctor.js";
import postVisit from "../../api/postVisit.js";
import CardVisit from "../Cards/CardVisit.js";
import filterCards from "../../functions/filterCards.js";
import resetFilter from "../../functions/resetFilter.js";
import getVisits from "../../api/getVisits.js";
import showCards from "../../functions/showCards.js";

class ModalCreateVisit extends Modal{
    constructor(title){
        super(title);
        this.select = document.createElement("select")
        this.submitBtn = document.createElement("button");
        this.closeBtn = document.createElement("button")
    }

    addAttributes(){
        this.select.classList.add("form-select")
        this.select.style.maxWidth = "240px"
        this.select.style.margin = "0 auto"

        this.select.innerHTML = `
        <option selected value="therapist">Therapist</option>
        <option value="dentist">Dentist</option>
        <option value="cardiologist">Cardiologist</option>`


        this.submitBtn.type = "button"
        this.closeBtn.type = "button"
        
        this.submitBtn.classList.add("visit-form__button", "btn", "btn-success")
        this.closeBtn.classList.add("visit-form__button", "btn", "btn-light")
        this.closeBtn.dataset.bsDismiss = "modal"

        this.submitBtn.innerText = "Create"
        this.submitBtn.dataset.bsDismiss = "modal"
        this.closeBtn.innerText = "Cancel"
    }


    render(){
        super.render();
        this.addAttributes()
    
        this.modalBody.append(this.select)
        this.modalFooter.append(this.submitBtn, this.closeBtn)
        
        let form = selectFormByDoctor("therapist")
        form.render(this.modalBody)

        this.select.addEventListener("change", ({target}) => {
            this.modalBody.querySelector("form").remove()
            form = selectFormByDoctor(target.value)
            form.render(this.modalBody)
    })

        this.submitBtn.addEventListener("click", async () => {
            const newVisit = await postVisit(form.collectData())
            console.log(newVisit);
            // (new CardVisit(newVisit)).render(document.querySelector("._visits-wrap"))
            resetFilter();
            // filterCards();
            const visitArray = await getVisits()
            showCards(visitArray)
        });
            

    }
}

export default ModalCreateVisit