// ============================================
// TREE MAP: LOCATION SEARCH AND REGION FILTER
// ============================================

const locationBtn = document.getElementById('locationBtn');
const locationList = document.getElementById('locationList');
const locationInput = document.getElementById('location');
const locationLinks = locationList.querySelectorAll('a');
const regionButtons = document.querySelectorAll('#regionButtons button');
const locationCards = document.querySelectorAll('.location-card');


// Shows only the cards that match. key is "region" or "location".
// The value "all" shows every card.
function showCards(key, value) {
  locationCards.forEach(function(card) {
    card.hidden = value !== 'all' && card.dataset[key] !== value;
  });
}

// Makes one region button dark green (the others go back to light green)
function setActiveButton(activeButton) {
  regionButtons.forEach(function(button) {
    button.classList.toggle('active', button === activeButton);
  });
}

// Hides the locations in the list that do not match the typed letters
function filterLocations() {
  const text = locationInput.value.toUpperCase();
  locationLinks.forEach(function(link) {
    link.style.display = link.textContent.toUpperCase().indexOf(text) > -1 ? '' : 'none';
  });
}


// ============================================
// REGION BUTTONS
// ============================================

regionButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    showCards('region', button.dataset.region);
    setActiveButton(button);
    locationBtn.textContent = 'Search a location';
  });
});


// ============================================
// LOCATION DROP-DOWN
// ============================================

// The button opens and closes the list
locationBtn.addEventListener('click', function() {
  locationList.classList.toggle('show');
  locationInput.focus();
});

// Typing in the search box
locationInput.addEventListener('input', filterLocations);

// Choosing a location shows only that location
locationLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    const isAll = link.dataset.location === 'all';
    showCards('location', link.dataset.location);
    setActiveButton(isAll ? regionButtons[0] : null);
    locationBtn.textContent = isAll ? 'Search a location' : link.textContent;
    locationList.classList.remove('show');
    locationInput.value = '';
    filterLocations();
  });
});

// A click anywhere else closes the list
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    locationList.classList.remove('show');
  }
});