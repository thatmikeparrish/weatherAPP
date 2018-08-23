let weatherCard = require("./weatherCard");


function weatherList(result) {
    weatherToDOM(weatherCard(result.name, result.main.temp, result.weather.main, result.weather.description))

}
// The first function sorts the data by the date(timestamp), and the second function builds the cards based on the order of the data.

function weatherToDOM(result){
    document.querySelector("#weatherResults").innerHTML += result
}
// This function sends the cards to the next function and tells it where to write them.

module.exports = weatherList