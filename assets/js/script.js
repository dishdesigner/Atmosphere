// GLOBAL VARIABLES
var currentMood = 'happy'; // test hard-code phrase to be concatenated
var moods = ["happy", "angry", "love", "sad", "crazy", "chill"];
var currentCity = ""; // set by user choice in pulldown
var currentWeatherDesc = 'Clear'; // 1 word, comes from OpenWeather API's "main" key
var shazamSearch = (currentMood + "%20" + currentWeatherDesc); // concat mood with weather and substitute space with "%20"
var currentPlaylist = []; // final returned array from function getMusic()
var currentSong = []; // array of song title & artist, needed for thumbs ratings

// EVENT LISTENERS
$(".smileBtn").on("click", function (e) {
  currentMood = moods[0];
  getMusic(shazamSearch);
});
$(".angryBtn").on("click", function (e) {
  currentMood = moods[1];
  getMusic(shazamSearch);
});
$(".loveBtn").on("click", function (e) {
  currentMood = moods[2];
  getMusic(shazamSearch);
});
$(".sadBtn").on("click", function (e) {
  currentMood = moods[3];
  getMusic(shazamSearch);
});
$(".crazyBtn").on("click", function (e) {
  currentMood = moods[4];
  getMusic(shazamSearch);
});
$(".chillBtn").on("click", function (e) {
  currentMood = moods[5];
  getMusic(shazamSearch);
});

// CITY PULLDOWN CHANGE LISTENER
// Code Goes Here - send cityCode to getWeather()


/////////////// FUNCTION getWeather
function getWeather(cityCode) {
  fetch(
    "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response); // change this output location
    })
    .catch((err) => {
      console.error(err); // change this error handling output
    });
}

/////////////// FUNCTION getMusic
function getMusic(shazamSearch) {
  const weatherSongs = {
    async: true,
    crossDomain: true,
    url:
      "https://shazam.p.rapidapi.com/search?term=" + currentWeatherDesc + "&locale=en-US&offset=0&limit=10",
    method: "GET",
    headers: {
      "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
      "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
  };
  $.ajax(weatherSongs).done(function (response) {
    console.log(response.tracks.hits.length);
  });
}
// getMusic(currentMood); // TESTING CALL


// function getMusic(searchStr) {
//   const songs = {
//     async: true,
//     crossDomain: true,
//     url:
//       "https://shazam.p.rapidapi.com/search?term=" + searchStr + "&locale=en-US&offset=0&limit=10",
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
//       "x-rapidapi-host": "shazam.p.rapidapi.com",
//     },
//   };
//   $.ajax(songs).done(function (response) {
//     return response; // return JSON array of songs
//   });
// }

// function buildPlaylist(currentWeatherDesc, currentMood) {
//   console.log(currentWeatherDesc + " " + currentMood);
//   console.log(getMusic(currentWeatherDesc));

//   if ( getMusic(currentWeatherDesc).tracks.hits.length === 0 ) {
//     return getMusic(currentMood);
//   } else {
//     return getMusic(shazamSearch);
//   }
// }

// buildPlaylist(currentWeatherDesc, currentMood); // testing: we want a concat string of mood + weather to search with;




/************************************************************ */
// name variables for music player
// var nowPlaying = $('.nowPlaying');
// var trackArt = $('.trackArt');
// var trackName = $('.trackName');
// var trackArtist = $('.trackArtist');
// var playpauseBtn = $('.playpausetrack');
// var nextBtn = $('.nexttrack');
// var prevBtn = $('.prevtrack');
// var currentTime = $('.current-time');
// var duration = $('.totalDuration');
// var trackIndex = 0;
// var isPlaying = false;
// var updateTimer;
// var currentTrack = document.createElement('audio');

// var trackList = [
//     path

// ];

// // clears the duration from previous track on new track load
// function loadTrack(trackIndex) {
//     clearInterval(updateTimer);
//     resetValues();
//     console.log(trackList);
//     // Loads a new track
//     currentTrack.src = trackList[trackIndex].path;
//     currentTrack.load();

//     // update timer
//     updateTimer = setInterval(seekUpdate, 1000);

//     // move to next track when song ends
//     currentTrack.addEventListener('ended', nextTrack);
// }

// $('.playpausetrack').click(function playpauseTrack() {
//     if (!isPlaying) playTrack();
//     else pauseTrack();
// },
//     function playTrack() {
//         currentTrack.play();
//         isPlaying = true;

//         playpauseBtn.innerHTML = '<i class = "fa fa-pause-circle fa-2x"><i/>';

//     },
//     $('.playpausetrack').click(function pauseTrack() {
//         currentTrack.pause(trackIndex);
//         isPlaying = false;

//         playpauseBtn.innerHTML = '<i class = "fa fa-play-circle fa-2x"><i/>';

//     },
//         $('.nexttrack').click(function nextTrack() {
//             // Go back to the first track if the
//             // current one is the last in the track list
//             if (trackIndex < trackList.length - 1)
//                 trackIndex = +1;
//             else trackIndex = 0;

//             // Load and play the new track
//             loadTrack(trackIndex);
//             playTrack();
//         },

//             $('.prevtrack').click(function prevTrack() {
//                 // Go back to the last track if the
//                 // current one is the first in the track list
//                 if (trackIndex > 0)
//                     trackIndex = -1;
//                 else trackIndex = trackList.length;

//                 // Load and play the new track
//                 loadTrack(trackIndex);
//                 playTrack();
//             }))));
// loadTrack(trackIndex);
