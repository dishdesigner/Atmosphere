var weather = {
    rainy: {
        genres: ['classical'],
        keywords: ['sad'],
    },
    sunny: {
        genres: ['rock'],
        keywords: ['happy'],
    },
};
var moods = {
    happy: {
        genres: ["pop"],
    },
    sad: {
        genres: [],
        keywords: []
    }
}
var userInput = "happy"
var keywords = moods[userInput].keywords
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