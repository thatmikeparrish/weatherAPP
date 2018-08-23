const forecastManager = require("../dataManager/forecastManager")
const searchBox = require("./searchBox")

document.querySelector("#searchBox").innerHTML = searchBox.renderForm()

const userSearch = function () {
    document.querySelector("#searchBox").addEventListener("click", () => {
        const zipcode = {
            zipcode: document.querySelector("#zipcode").value,
        }
        // This takes the information from the form and puts it in a variable to pass to the API
        forecastManager.getForecast(zipcode).then(() => {
            registrationForm.clearForm()
        })
    })
}

module.exports = userSearch