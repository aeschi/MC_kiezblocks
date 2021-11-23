var mymap = L.map('map').setView([52.520008, 13.404954], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'annaeschi/ckwc1gzrx9fif15o4ao6hmlwb',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5uYWVzY2hpIiwiYSI6ImNrd2MxOXVrbzFkd3cycXAyMDZrcDc2emQifQ.0XGXzCwiwZA8IavtBKBhbg',
}).addTo(mymap);

mapbox: var marker = L.marker([52.52, 13.41]).addTo(mymap);

var circle = L.circle([52.520008, 13.4], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
}).addTo(mymap);

var polygon = L.polygon(
    [
        [52.53, 13.395],
        [52.53, 13.44],
        [52.545, 13.39],
    ],
    {
        color: 'yellow',
    }
).addTo(mymap);

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

var popup = L.popup().setLatLng([52.5, 13.44]).setContent('I am a standalone popup.').openOn(mymap);
