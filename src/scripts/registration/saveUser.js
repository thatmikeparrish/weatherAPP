let userManager = require("../dataManager/userManager")
const registrationForm = require("./registrationForm")

document.querySelector("#registrationForm").innerHTML = registrationForm.renderForm()

const saveUser = function () {
    document.querySelector("#saveUser").addEventListener("click", () => {
        const newUser = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            zipcode: document.querySelector("#zipcode").value,
            date: Date.now()
        }
        // This takes the information from the form and puts it in a variable to pass to the API

        userManager.postUsers(newUser).then(() => {
            registrationForm.clearForm()
        })
        // This is a simple function to clear the form once you hit submit
    })
}

module.exports = saveUser