import FormVisit from "./FormVisit.js";

class FormDentist extends FormVisit {
    render(container){
        super.render(container)
        this.inputWrap.insertAdjacentHTML("beforeend", `
        <div class="mb-3">
            <label for="last-visit" class="form-label">Date of the last visit:</label>
            <input type="date" name="lastVisit" class="form-control _visit-input" id="last-visit"
            value="${(new Date).toISOString().split("T")[0]}"
            min="2000-01-01" max="${(new Date).toISOString().split("T")[0]}">
        </div>`);
    }
}

export default FormDentist