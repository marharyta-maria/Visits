import ModalDelete from "../class/Modal/ModalDelete.js";

const showDeleteModal = function (target) {
    const patientName = target.closest(".card").querySelector("#patientName").innerText;
    const patientDoctor = target.closest(".card").querySelector("#patientDoctor").innerText;
    (new ModalDelete(`Delete this visit?`, `Are you sure you want to delete visit to ${patientDoctor} for patient: ${patientName}?`, target)).render()
    const myModal = new bootstrap.Modal('#staticBackdrop')
    myModal.show()
}

export default showDeleteModal