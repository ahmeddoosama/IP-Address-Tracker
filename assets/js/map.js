let map,
    marker,
    showMap = document.getElementById('map');

function setMap({
    lat,
    lng
}) {
    if (map) {
        map.remove()
        map = undefined
        showMap.innerHTML = '';
    }

    map = L.map('map').setView([lat, lng], 7)

    const titleAttribution = `
        <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
        <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
        </a>`;

    L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pk.eyJ1IjoiYWhtZWRiZWRhd3kiLCJhIjoiY2trd3V3ZHY5MmU0MzJ2czFucXN1enRiNiJ9.fvZIGW1qAXigmtszbYkg5g', {
        attribution: tileAttribution
    }).addTo(map);

    let markerIcon = L.icon({
		iconUrl: '../images/icons/icon-location.svg'
	})

    marker = L.marker([lat, lng], {icon: markerIcon}).addTo(map);
}

export default setMap;