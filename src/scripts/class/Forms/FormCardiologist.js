import FormVisit from "./FormVisit.js";

class FormCardiologist extends FormVisit {
    render(container){
        super.render(container)
        this.inputWrap.insertAdjacentHTML("beforeend", `
            <div class="mb-3">
                <label for="age" class="form-label">Age:</label>
                <input type="number" name="age" class="form-control _visit-input" id="age">
            </div>
            
            <div class="mb-3">
                <label for="pressure" class="form-label">Blood pressure:</label>
                <input type="text" name="pressure" class="form-control _visit-input" id="pressure">
            </div>

            <div class="mb-3">
                <label for="bmi" class="form-label">IBM:</label>
                <input type="number" name="bmi" class="form-control _visit-input" id="bmi">
            </div>

            <div class="mb-3">
                <label for="cardioDesease" class="form-label">Transferred diseases of the cardiovascular system:</label>
                <textarea type="text" name="cardioDesease" class="form-control _visit-input" id="cardioDesease"></textarea>
            </div>  `);
    }
}

export default FormCardiologist