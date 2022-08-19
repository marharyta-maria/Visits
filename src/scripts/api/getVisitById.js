const getVisitById = async (id) => {
    try {
        const visit = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "GET",
            mode: "cors",
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
            return visit
    
        } catch (error) {
            (new ModalError(`Error!`, `Something went wrong, try to reload the page.`)).render()
            const myModal = new bootstrap.Modal('#staticBackdrop')
            myModal.show()
        }
}

export default getVisitById