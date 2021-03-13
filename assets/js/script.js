// GLOBAL VARIABLES
var currentMood = 'happy'; // test hard-code phrase to be concatenated
var moods = ["happy", "angry", "love", "sad", "crazy", "chill"];
var currentCity = ""; // set by user choice in pulldown
var currentWeather = {}; // JSON object returned from OpenWeather call
var currentWeatherDesc = 'Clear'; // 1 word, comes from OpenWeather API's "main" key
var shazamSearch = (currentMood + "%20" + currentWeatherDesc); // concat mood with weather and substitute space with "%20"
var currentPlaylist = []; // final returned array from function getMusic()
var currentSong = []; // array of song title & artist, needed for thumbs ratings
const cityChoice = document.querySelector("#city-choice");

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
cityChoice.addEventListener('change', (event) => {
  getWeather(event.target.value);
});


/////////////// FUNCTION getWeather
function getWeather(cityCode) {

  var weatherStr = "https://api.openweathermap.org/data/2.5/weather?id=" + cityCode + "&APPID=c766e07983131bea43b14f794d29153e&units=imperial";

  fetch(weatherStr, {
    "method": "POST",
    "headers": {
      "x-rapidapi-key": "cf3632fc2dmshdc43fe3a2b3d41ep1a7ac6jsn90b61c96f824",
      "x-rapidapi-host": "openweatherapp.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });


  // fetch(weatherStr)
  //   .then((response) => {
  //     currentWeather = response;
  //     console.log(currentWeather); // TEST
  //     currentWeatherDesc = currentWeather.weather.0.main; // use only the one-word description
  //   })
}

/////////////// FUNCTION getMusic
function getMusic(shazamSearch) {
  const weatherSongs = {
    async: true,
    crossDomain: true,
    // url:
    //   "https://shazam.p.rapidapi.com/search?term=" +
    //   currentMood +
    //   "&locale=en-US&offset=0&limit=10",
    url:
      "https://shazam.p.rapidapi.com/search?term=" + currentMood + "&locale=en-US&offset=0&limit=10",
    method: "GET",
    headers: {
      "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
      "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
  };
  $.ajax(weatherSongs).done(function (response) {
    console.log(response);
    window.location.href = response.tracks.hits[0].track.url;
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
