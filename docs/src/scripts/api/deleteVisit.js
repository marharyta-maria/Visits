import ModalError from "../class/Modal/ModalError.js"

const deleteVisit = async (id) => {
    try {
        const {status} = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        return status
    } catch (error) {
        (new ModalError(`Error!`, 'Failed delete visit.')).render()
        const myModal = new bootstrap.Modal('#staticBackdrop')
        myModal.show()
    }
}

export default deleteVisit