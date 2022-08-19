import FormVisit from "./FormVisit.js";

class FormTherapist extends FormVisit {
    render(container){
        super.render(container)
        this.inputWrap.insertAdjacentHTML("beforeend", `
        <div class="mb-3">
            <label for="age" class="form-label">Age:</label>
            <input type="number" name="age" class="form-control _visit-input" id="age">
        </div>`);
    }
}

export default FormTherapist