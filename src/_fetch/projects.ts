export = async () => {
	let response = await fetch(
		"https://vzl61mfy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27selectWork%27%5D%7B%0A%09...%2C%0A%09list%0A%7D.list%5B%5D%7B%0A%09item-%3E%7B%0A%09%09...%2C%0A%09%09%22grid%22%3A+%5E.grid%0A%09%7D%0A%7D.item%7B%0A%09...%2C%0A%09cover%7B%0A%09%09...%2C%0A%09%09%22URL%22%3A+asset-%3Eurl%2C%0A++++++++%22dataImg%22%3A+asset-%3Emetadata.lqip%2C%0A++++++++%22blurHash%22%3A+asset-%3Emetadata.blurHash%2C%0A++++++++%22dimensions%22%3A+asset-%3Emetadata.dimensions%0A%09%7D%2C%0A%09content%5B%5D%7B%0A%09++++...%2C%0A%09++++_type+%3D%3D+%22mediaBlock%22+%3D%3E+%7B%0A%09%09++++item%7B%0A%09%09%09++++alt%2C%0A%09%09%09++++%22URL%22%3A+asset-%3Eurl%2C%0A++++++%22dataImg%22%3A+asset-%3Emetadata.lqip%2C%0A++++++++%22blurHash%22%3A+asset-%3Emetadata.blurHash%2C%0A++++++++%22dimensions%22%3A+asset-%3Emetadata.dimensions%0A%09%09%09%7D%0A%09++++%7D%2C%0A%09++++_type+%3D%3D+%22videoBlock%22+%3D%3E+%7B%0A%09%09%09video%7B%0A%09%09%09%09%22URL%22%3A+asset-%3Eurl%2C%0A++++++++++++++++++%22dataImg%22%3A+asset-%3Emetadata.lqip%2C%0A++++++++%22blurHash%22%3A+asset-%3Emetadata.blurHash%2C%0A++++++++%22dimensions%22%3A+asset-%3Emetadata.dimensions%0A%09%09%09%7D%0A%09++++%7D%2C%0A%09%09_type+%3D%3D+%22textBlock%22+%3D%3E+%7B%0A%09%09%09%22text%22%3A+text%5B%5D.children%5B%5D.text%0A%09++++%7D%0A%09%7D%2C%0A%09info%7B%0A%09++++prompt%2C%0A%09%09%22grafs%22%3A+desc%5B%5D.children%5B%5D.text%0A%09%7D%2C%0A%09team%0A%7D"
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	let json = await response.json();

	return json.result;
};
