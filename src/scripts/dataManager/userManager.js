const userManager = Object.create(null, {
    getUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },
    // This grabs the information on the API, and parse's it into json. Then it returns the value for the next function to use.

    postUsers: {
        value: (newUser) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(r => r.json)
        }
    }
    // This allows you to save items to the database api.
})

 module.exports = userManager