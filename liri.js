//This relates to the .env
require("dotenv").config();

//Requirements needed to make page function
var fs = require("fs");
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
            "\nspotify-this: search for information about a song" +
            "\n-----------------------------");
        break;
    case "concert-this":
        searchBand(userInput);
        break;
    case "spotify-this":
        searchSpotify(userInput);
        break;
    case "movie-this":
        searchMovie(userInput);
        break;
    case "do-this":
        doThis();
        break;
    default:
        console.log("Liri does not understand your input, type 'help' for instructions")
}

function doThis() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return err
        }
        var search = data.split(",");
        if (search[0] === "spotify-this") {
            var song = search[1].slice(1, -1);
            searchSpotify(song)
        } else if (search[0] === "movie-this") {
            var movie = search[1].slice(1, -1);
            searchMovie(movie)
        } else if (search[0] === "concert-this") {
            var artist = search[1].slice(1, -1);
            searchBand(artist);
        }
    })
}