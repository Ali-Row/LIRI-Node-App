require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
let user_command = process.argv[2];
var movieName = process.argv.slice(3).join("+");
var artist = process.argv.slice(3).join("+"); {

  // ================================================================================================================

  function concertThis() {
    // Trying to be fancy...
    console.log(` 
 ______    ______   __    __   ______   ________  _______   ________        ________ __    __  ______   ______  
/      \  /      \ /  \  /  | /      \ /        |/       \ /        |      /        /  |  /  |/      | /      \ 
/$$$$$$  |/$$$$$$  |$$  \ $$ |/$$$$$$  |$$$$$$$$/ $$$$$$$  |$$$$$$$$/       $$$$$$$$/$$ |  $$ |$$$$$$/ /$$$$$$  |
$$ |  $$/ $$ |  $$ |$$$  \$$ |$$ |  $$/ $$ |__    $$ |__$$ |   $$ |            $$ |  $$ |__$$ |  $$ |  $$ \__$$/ 
$$ |      $$ |  $$ |$$$$  $$ |$$ |      $$    |   $$    $$<    $$ |            $$ |  $$    $$ |  $$ |  $$      \ 
$$ |   __ $$ |  $$ |$$ $$ $$ |$$ |   __ $$$$$/    $$$$$$$  |   $$ |            $$ |  $$$$$$$$ |  $$ |   $$$$$$  |
$$ \__/  |$$ \__$$ |$$ |$$$$ |$$ \__/  |$$ |_____ $$ |  $$ |   $$ |            $$ |  $$ |  $$ | _$$ |_ /  \__$$ |
$$    $$/ $$    $$/ $$ | $$$ |$$    $$/ $$       |$$ |  $$ |   $$ |            $$ |  $$ |  $$ |/ $$   |$$    $$/ 
 $$$$$$/   $$$$$$/  $$/   $$/  $$$$$$/  $$$$$$$$/ $$/   $$/    $$/             $$/   $$/   $$/ $$$$$$/  $$$$$$/  

`);
    // Run a request with axios to the Bandsintown API with the artist specified
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
      .then(function concertThis(response) {

        // for (var i = 0; i < response.data.length; i++) {
          console.log("\nVenue Name: " + response.data[0].venue.name);
          console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
          console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        
      });
  }

  function movieThis() {
    // Trying to be fancy...
    console.log(` 
      __       __   ______   __     __  ______  ________        ________ __    __  ______   ______  
     /  \     /  | /      \ /  |   /  |/      |/        |      /        /  |  /  |/      | /      \ 
     $$  \   /$$ |/$$$$$$  |$$ |   $$ |$$$$$$/ $$$$$$$$/       $$$$$$$$/$$ |  $$ |$$$$$$/ /$$$$$$  |
     $$$  \ /$$$ |$$ |  $$ |$$ |   $$ |  $$ |  $$ |__             $$ |  $$ |__$$ |  $$ |  $$ \__$$/ 
     $$$$  /$$$$ |$$ |  $$ |$$  \ /$$/   $$ |  $$    |            $$ |  $$    $$ |  $$ |  $$      \ 
     $$ $$ $$/$$ |$$ |  $$ | $$  /$$/    $$ |  $$$$$/             $$ |  $$$$$$$$ |  $$ |   $$$$$$  |
     $$ |$$$/ $$ |$$ \__$$ |  $$ $$/    _$$ |_ $$ |_____          $$ |  $$ |  $$ | _$$ |_ /  \__$$ |
     $$ | $/  $$ |$$    $$/    $$$/    / $$   |$$       |         $$ |  $$ |  $$ |/ $$   |$$    $$/ 
     $$/      $$/  $$$$$$/      $/     $$$$$$/ $$$$$$$$/          $$/   $$/   $$/ $$$$$$/  $$$$$$/ 
     
     `);

    // Run a request with axios to the OMDB API with the movie specified
    axios.get(`http://www.omdbapi.com/?t="${movieName}"&y=&plot=short&apikey=trilogy`)
      .then(function movieThis(response) {
        console.log("\nTitle: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      });
  }
   // do this function defaults to searching for the song "I Want it That Way"
  function doThis() {
    spotify.search({ type: "track", query: "I Want it That Way" })
      .then(function(response) {
        // Artist
        console.log("Artist: " + response.tracks.items[0].artists[0].name);
        // Song name
        console.log("Track: " + response.tracks.items[0].name);
        // Album name
        console.log("Album: " + response.tracks.items[0].album.name);
        // Track URL
        console.log("URL: " + response.tracks.items[0].preview_url);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  function spotifyThis() {
    spotify.search({ type: "track", query: artist })
      .then(function(response) {
        console.log("\nWelcome to Spotify")
        // Artist
        console.log("\nArtist: " + response.tracks.items[0].artists[0].name);
        // Song name
        console.log("Track: " + response.tracks.items[0].name);
        // Album name
        console.log("Album: " + response.tracks.items[0].album.name);
        // Track URL
        console.log("URL: " + response.tracks.items[0].preview_url);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // ======================================================================================

  // switch case the user input...
  switch (user_command) {
    case "concert-this":
      concertThis();
      break;

    case "spotify-this-song":
      spotifyThis();
      break;

    case "movie-this":
      movieThis();
      break;

    case "do-what-it-says":
      doThis();
      break;

    default:
      console.log("Ivalid input");
      break;
  }
}
