import getVisits from "../api/getVisits.js"

const searchVisits = async () => {
    const allVisits = await getVisits();

    const doctor = document.querySelector("._doctor-filter").value
    const priority = document.querySelector("._priority-filter").value
    const textSearch = document.querySelector("._text-filter").value

    const filteredVisits = allVisits.filter(el => {
        const textBoolean = (el.purpose.includes(textSearch) || el.description.includes(textSearch))
        return el.doctor.includes(doctor) && el.priority.includes(priority) && textBoolean
    })
    return filteredVisits;
}

export default searchVisits