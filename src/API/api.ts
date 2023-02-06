import axios from 'axios';

function fetchData(trackingNumber: string) {
	const options = {
		method: 'GET',
		url: 'https://trackingpackage.p.rapidapi.com/TrackingPackage',
		params: { trackingNumber: trackingNumber },
		headers: {
			Authorization: 'Basic Ym9sZGNoYXQ6TGZYfm0zY2d1QzkuKz9SLw==',
			'X-RapidAPI-Key': 'f742d7282cmsh785411af2113d5cp1f399ejsn18096aa0558a',
			'X-RapidAPI-Host': 'trackingpackage.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
}

export default fetchData;
