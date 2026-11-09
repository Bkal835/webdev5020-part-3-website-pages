// ============================================
// TREE MAP: HEAT MAP OF TREE COVERAGE
// ============================================
// Uses the Leaflet library (leaflet.js) and the location cards from locations.js.
// Every card has data-coverage (%), data-lat and data-lng.

// Makes the map and adds the OpenStreetMap pictures (tiles)
const map = L.map('map');
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Picks the colour with the same ranges as the Map Legend
function getColour(coverage) {
  if (coverage >= 70) return '#43A047';
  if (coverage >= 30) return '#FBC02D';
  return '#E53935';
}

// Picks the words shown in the pop-up
function getStatus(coverage) {
  if (coverage >= 70) return 'High coverage';
  if (coverage >= 30) return 'Moderate coverage';
  return 'Low coverage: needs more trees';
}

// Zooms the map so that all the cards still showing fit on it
function zoomToCards() {
  const points = [];
  locationCards.forEach(function(card) {
    if (!card.hidden) {
      points.push([card.dataset.lat, card.dataset.lng]);
    }
  });
  map.fitBounds(points, { padding: [50, 50], maxZoom: 11 });
}


// ============================================
// THE CIRCLES
// ============================================

// One circle for every card: the less coverage, the bigger the circle (size is in pixels)
locationCards.forEach(function(card) {
  const coverage = Number(card.dataset.coverage);
  const name = card.querySelector('h3').textContent;

  L.circleMarker([card.dataset.lat, card.dataset.lng], {
    radius: 10 + (100 - coverage) * 0.3,
    color: getColour(coverage),
    fillOpacity: 0.5
  }).addTo(map).bindPopup('<strong>' + name + '</strong><br>' + coverage + '% tree coverage<br>' + getStatus(coverage));
});

zoomToCards();


// ============================================
// ZOOM WHEN THE FILTERS ARE USED
// ============================================

// locations.js has already shown or hidden the cards when these clicks reach here
document.querySelectorAll('#regionButtons button, #locationList a').forEach(function(item) {
  item.addEventListener('click', zoomToCards);
});