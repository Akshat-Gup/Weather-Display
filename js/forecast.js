//Accuweather API code
const key = "NGKbFaK4eFjbczC75WOM8L1WXGswGVGv";

const getWeatherConditions = async (locationID) => {

	const baseResourceUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
	const query = `${locationID}?apikey=${key}`;

	const response = await fetch( baseResourceUrl + query);
	const data = await response.json();
	return data[0];
}

// Getting the city based off the user's input
const getCity = async (city) => {

	const baseResourceUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(baseResourceUrl + query);
	const data = await response.json();
	
	return data[0];

};


