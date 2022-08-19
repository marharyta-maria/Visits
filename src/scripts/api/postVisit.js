import ModalError from "../class/Modal/ModalError.js"

const postVisit = async (body) => {
    try {
    const newVisit = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
    }).then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            throw new Error
        }
    })
        return newVisit

    } catch (error) {
        (new ModalError(`Error!`, `Something went wrong, try to reload the page.`)).render()
        const myModal = new bootstrap.Modal('#staticBackdrop')
        myModal.show()
    }
    
}

export default postVisit