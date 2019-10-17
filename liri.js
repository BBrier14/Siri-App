//This relates to the .env
require("dotenv").config();

//Requirements needed to make page function
var searchBand = require("./bands.js");
var searchMovie = require("./movies.js");
var searchSpotify = require("./spotify.js");

//user command section for searching through Liri
var userSearch = process.argv[2];
var userInput = process.argv.splice(3, process.argv.length).join(' ');

//this will be the switch commands that act as the backbone for Liri
switch (userSearch) {
    case "help":
        console.log("How may I assist you?" + 
        "\nconcert-this: search for an artist's concert" + 
        "\nmovie-this: search for information about a movie" + 
        "\nspotify-this-song: search for information about a song" +
        "\n-----------------------------");
        break;
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
        console.log("Liri does not understand your input, type 'help' for instructions")
}