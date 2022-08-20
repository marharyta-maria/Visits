import Modal from "./Modal.js";
import selectFormByDoctor from "../../functions/selectFormByDoctor.js";
import postVisit from "../../api/postVisit.js";
import resetFilter from "../../functions/resetFilter.js";
import getVisits from "../../api/getVisits.js";
import showCards from "../../functions/showCards.js";

class ModalCreateVisit extends Modal{
    constructor(title){
        super(title);
        this.select = document.createElement("select")
    }

    addAttributes(){
        this.select.classList.add("form-select")

        this.select.innerHTML = `
        <option selected value="therapist">Therapist</option>
        <option value="dentist">Dentist</option>
        <option value="cardiologist">Cardiologist</option>`

        this.submitBtn.innerText = "Create"
        this.closeBtn.innerText = "Cancel"
    }


    render(){
        this.addAttributes();
        super.render();
        this.modalBody.append(this.select)
        
        let form = selectFormByDoctor("therapist")
        form.render(this.modalBody)

        this.select.addEventListener("change", ({target}) => {
            this.modalBody.querySelector("form").remove()
            form = selectFormByDoctor(target.value)
            form.render(this.modalBody)
        })

        const submitCreating = async ({target}) => {
            const newVisit = await postVisit(form.collectData())
            console.log(newVisit);
            // (new CardVisit(newVisit)).render(document.querySelector("._visits-wrap"))
            resetFilter();
            // filterCards();
            const visitArray = await getVisits()
            showCards(visitArray)
            target.removeEventListener("click", submitCreating)
        }
        this.submitBtn.addEventListener("click", submitCreating);       
    }
}

export default ModalCreateVisit