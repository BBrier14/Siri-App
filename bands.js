//Requirements needed for page to function
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");

//function used to take user input and console.log the requested information
function searchBand(userInput) {
    var band = userInput;
    var bandUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=" + keys.bandsInTown.id;

    axios.get(bandUrl).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city);
                console.log("Time: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
                console.log("---------------------------------")
            }
        }
    )
}

//Exports to liri.js
module.exports = searchBand;