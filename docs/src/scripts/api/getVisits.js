import ModalError from "../class/Modal/ModalError.js"

const getVisits = async() => {
    try {
        const visits = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
        }).then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error
            }
        })

        return visits;

        } catch (error) {
            (new ModalError(`Error!`, `Something went wrong, try to reload the page.`)).render()
            const myModal = new bootstrap.Modal('#staticBackdrop')
            myModal.show()
        }
    
}

export default getVisits