const key = "NGKbFaK4eFjbczC75WOM8L1WXGswGVGv";

const getCity = async city => {

	const baseResourceUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${key}&q=${city}`

	const getCityInformation = await fetch(baseResourceUrl + query);
	const cityInformation = await getCityInformation.json();

	return cityInformation[0];

};

const getWeatherConditions = async locationID => {
	const baseResourceUrl = "http://dataservice.accuweather.com/currentconditions/v1";
	const query = `${locationID}?${key}`;
	const getWeather = await fetch( baseResourceUrl + query);
	const weatherInfo = await getWeather.json();
	
	return weatherInfo[0];
}

getCity('manchester')
	.then(data => getWeatherConditions(data.Key))
	.then(data => {console.log(data);})
	.catch(error => {console.log(error);});

