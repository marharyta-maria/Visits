import FormCardiologist from "../class/Forms/FormCardiologist.js"
import FormTherapist from "../class/Forms/FormTherapist.js"
import FormDentist from "../class/Forms/FormDentist.js"

const selectFormByDoctor = (doctor) => {
    let form = null
        switch (doctor) {
            case "therapist": form = (new FormTherapist("therapist"))
            break

            case "dentist": form = (new FormDentist("dentist"))
            break

            case "cardiologist": form = (new FormCardiologist("cardiologist"))
            break
    }
    return form
}

export default selectFormByDoctor