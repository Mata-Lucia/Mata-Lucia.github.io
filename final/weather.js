var button = document.querySelector('.button');

button.addEventListener('click', function() {
    var city = document.querySelector('.city').value;
    var key = '91d4f1e4ef8f7c1403639a8a18c5ad0d';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var description = data['weather'][0]['description'];
        var temp = data['main']['temp'];
        var location = data['name'];
        var icon = data['weather'][0]['icon'];

        //var celcius = Math.round(parseFloat(temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(temp)*9/5-459.67))); 
        
        results = document.getElementById("weather");
        results.classList.toggle("seeresults");

        document.getElementById('description').innerHTML = '<p>' + description + '</p>';
        document.getElementById('temp').innerHTML = '<h3>' + fahrenheit + '&deg F </h3>';
        document.getElementById('location').innerHTML = '<h3>' + location + '</h3>';
        document.getElementById('icon').innerHTML = '<img src=icons/' + icon + '.png>';
        
        if (icon.indexOf('n') > 0) {
            document.body.className = 'night';
        } else if ( description.indexOf('rain') > 0 || description.indexOf('snow') > 0 ) {
          document.body.className = 'rainy';
        } else if( description.indexOf('cloud') > 0 || description.indexOf('thunderstorm') > 0 || description.indexOf('mist') > 0 || description.indexOf('haze') > 0) {
          document.body.className = 'cloudy';
        } else {
            document.body.className = 'sunny';
        }
    })
    .catch(function(err) {
        document.getElementById('error').innerHTML = "Error: Please enter a city.";
      });
})

function playAudio(url) {
    var a = new Audio(url);
    a.play();
  }