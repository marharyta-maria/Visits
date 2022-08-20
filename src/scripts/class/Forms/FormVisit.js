import postVisit from "../../api/postVisit.js";
import CardVisit from "../Cards/CardVisit.js";
class FormVisit {
    constructor(doctor) {
        this.doctor = doctor
        this.form = document.createElement("form");
        this.inputWrap = document.createElement("div")

    }

    collectData = () => {
        const visitData = {}
        const inputCollection = this.inputWrap.querySelectorAll("._visit-input");
        inputCollection.forEach(input => {
            visitData[input.name] = input.value
        })
        visitData.doctor = this.doctor;
        return visitData
    }

    render(container){
        container.append(this.form);
        this.form.classList.add("visit-form")
        this.inputWrap.classList.add("visit-form__inputs", "mt-3")

        this.inputWrap.innerHTML = `
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" name="name" class="form-control _visit-input" id="name">
                </div>

                <div class="mb-3">
                    <label for="purpose" class="form-label">Purpose:</label>
                    <input type="text" name="purpose" class="form-control _visit-input" id="purpose">
                </div>
                
                <div class="mb-3">
                    <label for="description" class="form-label">Descrtiption:</label>
                    <textarea type="text" name="description" class="form-control _visit-input" id="description"></textarea>
                </div>

                                
                <div class="mb-3">
                    <label for="priority" class="form-label">Priority:</label>
                    <select name="priority" id="priority" class="_visit-input form-select">
                        <option value="regular" selected>Regular</option>
                        <option value="priority">Priority</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div> `


        this.form.append(this.inputWrap)
    }
    
}

export default FormVisit