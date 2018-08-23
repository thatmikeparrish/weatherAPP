const registrationForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#registrationForm").value = " "
        }
    },

    renderForm: {
        value: () => {
            return `
                <div>
                    <input required type="text" id="name" placeholder="What's your name?"><br><br>
                    <input required type="text" id="email" placeholder="What's email?"><br><br>
                    <input required type="text" id="zipcode" placeholder="What's your zip-code?"><br><br>
                    <button id="saveUser">submit</button>
                </div>
            `
        }
    }
})

// This builds the HTML version of the form and gives an extra feature to clear it when you click the submit button.

module.exports = registrationForm