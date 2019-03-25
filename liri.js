//calling packages 
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment =require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var spotify = new Spotify(keys.spotify)


//command to determine which function to run
//movie-this, spotify this song, concert-this, do what it says
var command = process.argv[2];

var searchTerm = process.argv.slice(3).join(" ");



//*****Movie function*******
function movieThis (){
console.log("in movieThis-------------\n");

//Set default search term
if (!searchTerm) {
    searchTerm = "Mr.Nobody";
}

//Calling the OMBD API
axios.get("http://www.omdbapi.com/?&apikey=d152e370&t=" + searchTerm)
    //Call back function providing the raw data from 
    .then(function(response) {
        //logging OMDB Data from axios call
        // console.log(response.data);

        //parsing data to get specific fields per requirements
        console.log("Title:" + " " + response.data.Title);
        console.log("Year:" + " " + response.data.Year);
        console.log("IMDB:" + " " + response.data.Ratings[0].Value);
        console.log("RottenTomatoes:" + " " + response.data.Ratings[1].Value);
        console.log("Country:" + " " + response.data.Country);
        console.log("Language:" + " " + response.data.Language);
        console.log("Plot:" + " " + response.data.Plot);
        console.log("Actors:" + " " + response.data.Actors);
    });
};

if (command === "movie-this"){
    console.log("inside start function")

    movieThis();
};


//******Concert function********
function concertThis (){
    console.log("in concertThis-------------\n");
    
    //Calling the OMBD API
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
        //Call back function providing the raw data from 
        .then(function(response) {
            
            //logging Bands in town data from axios call
            //console.log(response.data)

            //checking object
            // console.log(Object.keys(response.data));
            
            //creating loop to capture all upcoming concerts
            var shows = response.data;
            for (i = 0; i < shows.length; i ++) {

            //parsing data to get specific fields per requirements
            console.log("-------------------------------\n");
            console.log("Venue:" + " " + response.data[i].venue.name);
            console.log("Location:" + " " + response.data[i].venue.city);
            console.log("Date:" + " " + moment(response.data[i].datetime).format('MM/DD/YYYY'));
            }


        });
    };
    
    if (command === "concert-this"){
        console.log("inside start function")

    
    
        concertThis();
    };


    //******Spotify function********
    function spotifyThisSong(){
        if(!searchTerm) {
            searchTerm = "The Sign";
        }
        spotify
            .search({
                type: 'track',
                query: searchTerm,
            })
            .then(function (response) {
                response.tracks.items.forEach(function (track) {
                    console.log('--------------');
                    console.log(`Preview: ${track.preview_url}`);
                    console.log(`Track name: ${track.name}`);
                    console.log(`Artist name: ${track.artists[0].name}`);
                    console.log(`Album name: ${track.album.name}`);
                })
            })
            .catch(function (err) {
                console.error(err);
            });

        }

        //calling function
        if (command === "spotify-this-song"){
            console.log("inside start function")
    
        
        
            spotifyThisSong();
        };
    

    //******DO WHAT IT SAYS function********
    function doWhatItSays (){

        console.log(“selected function doWhatItSays to process *** ” + term);
     
     fs.readFile(‘random.txt’, ‘utf8’, function(error, data) {
     
     //READ FILE CONTENTS TEST
        console.log(data);
      if (error) {
        console.error(error);
      }
     
      var dataArray = data.split(‘,’);
     
      console.log(dataArray);
     
      command = dataArray[0];
      term = dataArray[1];
     
     //assign text
     
      spotifyThisSong();
     
      });
     
     };