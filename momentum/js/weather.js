const API_KEY = "c582e582ebed81ae50a002aaf94cf7d4";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const city = data.name;
			const weatherText = data.weather[0].main;
			const weatherIcon = data.weather[0].icon;
			const temp = data.main.temp;

			
			const weatherConatiner = document.querySelector('#weather');
			const weatherTextConatiner = weatherConatiner.querySelector('.weather .text');
			const weatherIconConatiner = weatherConatiner.querySelector('.weather .icon');
			const cityContainer = weatherConatiner.querySelector('.city');
			const tempContainer = weatherConatiner.querySelector('.temp');
			
			const weatherCreateIcon = document.createElement('img');
			weatherIconConatiner.append(weatherCreateIcon)

			cityContainer.innerText = city;
			weatherTextConatiner.innerText = weatherText;
			weatherCreateIcon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
			tempContainer.innerText = `${temp}°C`;

			// http://openweathermap.org/img/wn/
		}
	)
}
function onGeoError() {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);

// https://api.openweathermap.org/data/2.5/weather?lat=37.5712163&lon=126.9648429&appid=c582e582ebed81ae50a002aaf94cf7d4
