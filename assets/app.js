function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	mapboxgl.accessToken =
		"pk.eyJ1IjoiaGFpZGVyYWxpMTE3NyIsImEiOiJja2w5b2hucjAwOWZmMm90a3E5ajNmZW1uIn0.CCbg4qvnAb6hvu7vWqfoiw";
	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/satellite-v9",
		center: [position.coords.longitude, position.coords.latitude],
		zoom: 17,
	});
	var marker = new mapboxgl.Marker({
		color: "red",
		draggable: false,

		// center: [position.coords.longitude, position.coords.latitude],
	})
		.setLngLat([position.coords.longitude, position.coords.latitude])
		.addTo(map);

	console.log(position.coords.latitude, position.coords.longitude);
	marker.addTo(map);
}
getLocation();
