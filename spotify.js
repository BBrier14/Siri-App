//Requirements to make page function
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);


//function to take user input and respond with data
function searchSpotify(userInput) {
    var song = userInput;

    if (!song) {
        song = "The Sign Ace of Base"
    }

    spotify.search({type: 'track', query: song}, function(err, data){
        if (err) {
            return console.log("Error: " + err);
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[0].preview_url);
    })
}

//export to Liri page
module.exports = searchSpotify;