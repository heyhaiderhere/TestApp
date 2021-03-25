function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	mapboxgl.accessToken =
		"pk.eyJ1IjoiaGFpZGVyYWxpMTE3NyIsImEiOiJja2w5b2hucjAwOWZmMm90a3E5ajNmZW1uIn0.CCbg4qvnAb6hvu7vWqfoiw";
	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/dark-v11",
		center: [position.coords.longitude, position.coords.latitude],
		zoom: 17,
		minZoom: 2,
	});
	var marker = new mapboxgl.Marker({
		color: "red",
		draggable: false,
	})
		.setLngLat([position.coords.longitude, position.coords.latitude])
		.addTo(map);
	marker.addTo(map);

	map.addControl(new mapboxgl.NavigationControl());

	var directions = new MapboxDirections({
		accessToken:
			"pk.eyJ1IjoiaGFpZGVyYWxpMTE3NyIsImEiOiJja2w5b2hucjAwOWZmMm90a3E5ajNmZW1uIn0.CCbg4qvnAb6hvu7vWqfoiw",
	});

	map.addControl(directions, "top-left");
}
getLocation();
