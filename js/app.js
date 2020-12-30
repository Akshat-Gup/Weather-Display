const queryCity = document.querySelector("form");
const inputBox = document.querySelector("form input");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const body = document.querySelector("body");
const h1 = document.querySelector("h1")

const updateUI = weatherInfo => {
	const cityDetails = weatherInfo.actualCity;
	const weatherData = weatherInfo.weather;
	console.log(cityDetails,weatherData);
	details.innerHTML = `
	<h5 class="my-3">${cityDetails.EnglishName}</h5>
	<div class="my-3">${weatherData.WeatherText}</div>
		<div class="display-4 my-4">
			<span>${weatherData.Temperature.Metric.Value}</span>
			<span>&deg;C</span>
		</div>
	</div>
`;

	if (card.classList.contains("d-none")) {
		card.classList.remove("d-none");
	}

	if (weatherData.IsDayTime==true) {
		console.log("Changing weather to day");

		body.classList.remove("night");
		details.classList.remove("dark");
		card.classList.remove("night")
		inputBox.classList.remove("dark");
		h1.classList.remove("night");

	} else {
		console.log("Changing weather to day");

		body.classList.add("night")
		details.classList.add("dark");
		card.classList.add("night")
		inputBox.classList.add("dark");
		h1.classList.add("night");

	}
}

const updateCity = async usersCity => {
	const actualCity = await getCity(usersCity);
	const weather = await getWeatherConditions(actualCity.Key);

	return { actualCity, weather };
};


queryCity.addEventListener("submit", event => {
	// Prevent the default action (Reloading the page)
	event.preventDefault();

	const city = queryCity.city.value.trim();

	queryCity.reset();
	
	//Updating the UI with new cities
	updateCity(city)
	.then( data => updateUI(data))
	.catch(err => console.log(err));
});
