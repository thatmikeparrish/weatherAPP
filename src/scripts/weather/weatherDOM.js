let dataManager = require("../dataManager/forecastManager")
let weatherResults = require("./weatherResults")

function weatherToDOM() {
    dataManager.getForecast()
    .then((result) => {
        weatherResults(result);
    });
}

// This function actually writes the cards to the DOM.

module.exports = weatherToDOM