import axios from 'axios';

function fetchData(trackingNumber: string) {
	const options = {
		method: 'GET',
		url: 'https://trackingpackage.p.rapidapi.com/TrackingPackage',
		params: { trackingNumber: trackingNumber },
		headers: {
			Authorization: process.env.REACT_APP_AUTHORIZATION_API_KEY,
			'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
			'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
		},
	};
    console.log(process.env);

	axios
		.request(options)
		.then(function (response) {
            console.log(response.data);
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
}

export default fetchData;
