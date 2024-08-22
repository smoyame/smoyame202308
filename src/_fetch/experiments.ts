export = async () => {
	let response = await fetch(
		"https://vzl61mfy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22experiments%22%5D.gallery%5B%5D%7B%0A++title%2C%0A++medium%2C%0A++description%2C%0A++image%7B%0A++++alt%2C%0A++++%22URL%22%3A+asset-%3Eurl%2C%0A++++%22dataImg%22%3A+asset-%3Emetadata.lqip%2C%0A++++%22blurHash%22%3A+asset-%3Emetadata.blurHash%2C%0A++++%22dimensions%22%3A+asset-%3Emetadata.dimensions%0A++%7D+%0A%7D"
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	let json = await response.json();

	return json.result;
};
