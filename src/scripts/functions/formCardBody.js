const formCardBody = function ({id, name, priority, doctor, purpose, description, age, bmi, cardioDesease, pressure, lastVisit}) {
    let bodyHtml = `<p class="card-text" id = "patientName">${name}</p>
         <p class="card-text">Priority: ${priority}</p>
`

        switch (doctor){
            case "therapist": bodyHtml = bodyHtml + `
            <div class= "_add-info visually-hidden">
            <p class="card-text">Purpose: ${purpose}</p>
            <p class="card-text">Description: ${description}</p>
            <p class="card-text" data-doctor = "therapist">Age: ${age}</p>
            </div>`
            break

            case "dentist": bodyHtml = bodyHtml + 
            `<div class= "_add-info visually-hidden">
            <p class="card-text">Purpose: ${purpose}</p>
            <p class="card-text">Description: ${description}</p>
            <p class="card-text" data-doctor = "dentist">Last visit: ${lastVisit}</p>
            </div> `
            break

            case "cardiologist": bodyHtml = bodyHtml + 
            `<div class= "_add-info visually-hidden">
            <p class="card-text">Purpose: ${purpose}</p>
            <p class="card-text">Description: ${description}</p>
            <p class="card-text" data-doctor = "cardiologist">Age: ${age}</p>
            <p class="card-text" data-doctor = "cardiologist">IBM: ${bmi}</p>
            <p class="card-text" data-doctor = "cardiologist">Blood pressure: ${pressure}</p>
            <p class="card-text" data-doctor = "cardiologist">Desease: ${cardioDesease}</p> 
            </div> `
            break
        }

        return bodyHtml
}

export default formCardBody