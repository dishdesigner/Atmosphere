var weather = {
    rainy: {
        genres: ['classical'],
        keywords: ['sad'],
    },
    sunny: {
        genres: ["rock"],
        keywords: ["happy"],
    },
};
var moods = {
    userinput: {key1: value1, key2: value2},
    happy: {
        genres: ["pop"],
    },
    sad: {
        genres: [],
        keywords: []
    }
}
var userInput = "happy";
var keywords = moods[userInput].keywords;

function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4509177&APPID=&units=imperial', {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

function getMusic(mood) {
    const settings = {
        async: true,
        crossDomain: true,
        url:
            'https://shazam.p.rapidapi.com/search?term=' +
            mood +
            '&locale=en-US&offset=0&limit=10',
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        // update the DOM html
    });
}
getMusic(userInput)