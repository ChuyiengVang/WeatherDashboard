
$(document).ready(function () {
var cityInput = $('#city');
var searchbtn = $('.butn');

//Searching Cities

$('#butn').on('click', function (event) {
    event.preventDefault();

    if (cityInput.val() !== '') {
        cityTyped = cityInput.val().trim();
        currentWeather(cityTyped);
    }
});

//fetching the city's weather
function currentWeather(cityTyped) {
    
    var weatherApi = 'api.openweathermap.org/data/2.5/forecast?q=' + cityTyped + '&appid=3c1edacdd4ee27d12a6307f665aa51c3';

    $.ajax({
        url: weatherApi,
        method: 'GET',
    }).then(function (response){
        console.log(response);
    })

}

})
//UNFINISHED