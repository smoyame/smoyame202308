export = async () => {
	let response = await fetch(
		"https://vzl61mfy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'about'%5D%7B...%2C%20%22homeGrafs%22%3A%20homeGrafs%5B%5D.children%5B%5D.text%2C%20%22pageGrafs%22%3A%20pageGrafs%5B%5D.children%5B%5D.text%7D%5B0%5D"
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	let json = await response.json();

	return json.result;
};
