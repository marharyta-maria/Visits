import ModalLogin from "class/Modal/ModalLogIn.js"

document.querySelector("._login-btn").addEventListener("click", (event) => {
     (new ModalLogin("Login")).render()
})


    // (new ModalError("name", "message")).render()
    // const myModal = new bootstrap.Modal('#staticBackdrop')
    // myModal.show()





