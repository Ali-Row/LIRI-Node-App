# LIRI-node-app
This is my **Language Interpretation and Recognition Interface** that I made during the Richmond Coding Bootcamp.

**How to run**
*Before you begin you must have Node installed in order to run this app!*

*Step 1:* Clone the repo to your machine

*Step 2:* Open the folder in Visual Studio Code and right click on the **package.json**, click **open in terminal**

*Step 3:* Run **npm install** in your terminal to install all of the dependencies

*Step 4:* You must add a dotenv file containing a spotify "ID" & "CLIENT" to the root folder of the project, like this 

# Spotify API keys

# SPOTIFY_ID=cedef793cefd93461437
# SPOTIFY_SECRET=cdfe678ec78e98c980e9c0

*Step 5:* In the same terminal you can search for 4 different things in your Visual Studio Code terminal, simply type "spotify-this-song" and add a song name of your choice, 
like this **node liri.js spotify-this-song** ***songname*** or

"movie-this" and a movie name of your choice, 
like this **node liri.js movie-this** ***moviename***  or

"do-what-it-says" and it will default to the song I Want it That Way and finally if you search,
like this **node liri.js do-what-it-says** or

"concert-this" and an artists name of your choice you will get back any shows they are playing, 
like this **node liri.js concert-this** ***artistname***
