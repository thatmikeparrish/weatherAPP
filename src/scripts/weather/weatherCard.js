function weatherCard(name, temp, main, description) {
    return `
        <div id="weather" class="card text-center">
            <div class="card-header">
                <h3>${name}</h3>
                <h4>${temp}</h4>
            </div>
            <div class="card-body">
                <p>${main}</p>
                <p>${description}</p>
            </div>
        </div>
    `
}

// This exports the body of the location card, so the next function knows how to build it.

module.exports = weatherCard