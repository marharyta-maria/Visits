import ModalError from "../class/Modal/ModalError.js";

const tokenRequest = async (email, passward) => {
    try {
        const response = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: passward})
        })
        
        if (response.status === 200) {
            return await response.text();
        } else if (response.status === 401) {
            (new ModalError(`Error!`, `Invalid login or password.`)).render()
            const myModal = new bootstrap.Modal('#staticBackdrop')
            myModal.show()
        }
         else {
            throw new Error
        }

    // return token
    } catch (error) {
        (new ModalError(`Error!`, `Something went wrong, try to reload the page.`)).render()
            const myModal = new bootstrap.Modal('#staticBackdrop')
            myModal.show()
            console.log(response);
    }
    
}

export default tokenRequest