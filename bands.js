//Requirements needed for page to function
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");

//function used to take user input and console.log the requested information
function searchBand(userInput) {
    var band = userInput;
    var bandUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";

}