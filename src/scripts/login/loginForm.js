const loginForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#loginForm").value = " "
        }
    },

    renderForm: {
        value: () => {
            return `
                <div>
                    <input required type="text" id="email" placeholder="What's your email?"><br><br>
                    <button id="login">submit</button>
                </div>
            `
        }
    }
})

// This builds the HTML version of the form and gives an extra feature to clear it when you click the submit button.

module.exports = loginForm