//This relates to the .env
require("dotenv").config();

//Requirements needed to make page function
var searchBand = require("./bands.js");
var searchMovie = require("./movies.js");
var searchSpotify = require("./spotify.js");

//user command section for searching through Liri
var userSearch = process.argv[2];
var userInput= process.argv.splice(3,process.argv.length).join(' ');

//this will be the switch commands that act as the backbone for Liri
switch (userSearch) {
    case "concert-this":
        searchBand(userInput);
        break;
    case "spotify-this-song":
        searchSpotify(userInput);
        break;
    case "movie-this":
        searchMovie(userInput);
        break;
    default:
        console.log("Liri does not understand your input")
}