const searchBox = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#searchBox").value = " "
        }
    },

    renderForm: {
        value: () => {
            return `
                <div>
                    <input required type="text" id="searchZipcode" placeholder="Enter zip-code!"><br><br>
                    <button id="searchBox">submit</button>
                </div>
            `
        }
    }
})

// This builds the HTML version of the form and gives an extra feature to clear it when you click the submit button.

module.exports = searchBox