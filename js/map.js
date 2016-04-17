// When you add a marker using a Place instead of a location, the Maps
// // API will automatically add a 'Save to Google Maps' link to any info
// // window associated with that marker.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 41.914858, lng: -88.2043344}
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    // Define the place with a location, and a query string.
    place: {
      location: {lat: 41.921982, lng: -88.207515},
      query: 'St Andrews'

    },
    // Attributions help users find your site again.
    attribution: {
      source: 'Google Maps JavaScript API',
      webUrl: 'https://developers.google.com/maps/'
    }
  });

  var holiday_inn = new google.maps.Marker({
    map: map,
    icon: image,
    place: {
      location: {lat: 41.902129, lng: -88.121303},
      query: "Holiday Inn, Carol Stream"
    },
    attribution: {
      source: 'Holiday Inn',
      webUrl: 'https://www.google.com/maps/place/Holiday+Inn+Hotel+%26+Suites+Chicago-Carol+Stream+(Wheaton)/@41.902919,-88.1218072,16z/data=!4m6!1m3!3m2!1s0x0:0x6fa627c290cc9ea8!2sHoliday+Inn+Hotel+%26+Suites+Chicago-Carol+Stream+(Wheaton)!3m1!1s0x0:0x6fa627c290cc9ea8'
    }
  });

  var pottawatomie_park_loc= new google.maps.Marker({
    map: map,
    icon: image,
    place: {
      location:  {lat: 41.918864, lng: -88.315690},
      query: 'Pottawatomie Park, St. Charles, IL'
    },
    attribution: {
      source: 'Pattawatomie Park',
      webUrl: 'http://www.stcparks.org/VW-Systems/Map/map-details.asp?varID=669'
    }
  });
  // Construct a new InfoWindow.
  var infoWindow = new google.maps.InfoWindow({
    content: 'Home'
  });

  // Opens the InfoWindow when marker is clicked.
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
