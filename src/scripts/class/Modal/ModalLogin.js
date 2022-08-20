import tokenRequest from "../../api/tokenRequest.js";
import Modal from "./Modal.js";


class ModalLogin extends Modal {
    constructor(title){
        super(title);
        this.emailInput = null
        this.passwordInput = null
    }

    render(){
        super.render();

        this.modalBody.innerHTML = `
                <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input name="password" type="password" class="form-control" id="password">
                </div>
                </div>`
        this.emailInput = document.querySelector("#email")
        this.passwordInput = document.querySelector("#password")

        this.submitBtn.innerText = `Log in`
        this.closeBtn.innerText = `Cancel`
        
        const sumbitLogin = async ({target}) => {
            const token = await tokenRequest(this.emailInput.value, this.passwordInput.value)
            if (token !== undefined) {
                localStorage.setItem("token", token)
                location.assign("./src/pages/home-page.html")
            }
            target.removeEventListener("click", sumbitLogin)
        }
        this.submitBtn.addEventListener("click", sumbitLogin)
        }
}

export default ModalLogin