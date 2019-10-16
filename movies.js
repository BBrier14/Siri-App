//Requirements needed for page to function
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys");

//Function to take in user input and display information about the movie
function searchMovie(userInput) {
    var movie = userInput;
    var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=triolgy";

    if (!movie) {
        console.log("If you haven't watched Mr. Nobody, then you should.");
        console.log("You can find it on netflix!");
        movie= "Mr. Nobody";
    }

    axios.get(movieUrl).then(
        function (response) {
            console.log(response.data);
            console.log("Title: " + response.data.Title);
            console.log("Year " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
            console.log("-----------------------")
        }
    )
}

//Exports to liri.js
module.exports = searchMovie;