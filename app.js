
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhcnJlY2FqMSIsImEiOiJjbGhnaXByeGIxMm93M3FvNG1iZGM3Y2Q0In0.X1o7ca79l4njVDDNzrwdpQ';

let loc = [14.43484270776182, 50.087043829668964];

let map = new mapboxgl.Map({
  container: 'map',
  center: loc,
  zoom: 13,
  style: 'mapbox://styles/dearrecaj1/clhg7sicp01b701pg07e2eoqb'
});

map.scrollZoom.disable(); 
map.addControl(new mapboxgl.NavigationControl()); 

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup({offset: 70})
.setHTML('<div id="popup">The place to be at !</div>');

new mapboxgl.Marker(marker, {anchor: 'bottom'}) 
.setLngLat(loc) 
.addTo(map)
.setPopup(popup); 



(() => {
  const ham = document.querySelector('#ham');
  const nav = document.querySelector('nav');
  const logo = document.querySelector('#logo');

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    if (ham.classList.contains('open')) {
      ham.style.transform = 'rotate(0deg)';
      nav.classList.add('open');
      if (window.innerWidth <= 900) {
        logo.classList.add('hidden');
      }
    } else {
      ham.style.transform = 'none';
      nav.classList.remove('open');
      logo.classList.remove('hidden');
    }
  });
})();
