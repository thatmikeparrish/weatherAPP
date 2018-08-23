// API KEY: 420fe845d08214e9f9c117b4611f8411

const forecastManager = Object.create(null, {
    getForecast: {
        value: (zipcode) => {
            return fetch("http://api.openweathermap.org/data/2.5/weather?zip=37130&APPID=420fe845d08214e9f9c117b4611f8411").then(r => r.json())
        }
    },
    // This grabs the information on the API, and parse's it into json. Then it returns the value for the next function to use.
})

 module.exports = forecastManager