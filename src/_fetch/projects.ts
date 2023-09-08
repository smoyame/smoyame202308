export = async () => {
	let response = await fetch(
		"https://vzl61mfy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27selectWork%27%5D%7B%0A++...%2C%0A++list%0A%7D.list%5B%5D%7Bitem-%3E%7B+...%2C%22grid%22%3A+%5E.grid%7D%7D.item%7B%0A++...%2C%0A++cover%7B...%2C%22URL%22%3A+asset-%3Eurl%7D%2C%0A++content%5B%5D%7B%0A++++...%2C%0A++++_type+%3D%3D+%22mediaBlock%22+%3D%3E+%7B%0A++++++item%7B%0A++++++++alt%2C%0A++++++++%22URL%22%3A+asset-%3Eurl%0A++++++%7D%0A++++%7D%2C%0A+++++_type+%3D%3D+%22videoBlock%22+%3D%3E+%7B%0A++++++video%7B%0A++++++++%22URL%22%3A+asset-%3Eurl%0A++++++%7D%0A++++%7D%2C%0A+++++_type+%3D%3D+%22textBlock%22+%3D%3E+%7B%0A++++++%22text%22%3A+text%5B%5D.children%5B%5D.text%0A++++%7D%0A++%7D%2C%0A++info%7B%0A++++prompt%2C%0A++++%22grafs%22%3A+desc%5B%5D.children%5B%5D.text%0A++%7D%2C+team%0A%7D"
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	let json = await response.json();

	return json.result;
};
