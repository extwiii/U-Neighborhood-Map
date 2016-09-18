
	// Set up our map
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.5074, lng: -0.1278},
      zoom: 13
    });

  	// Create all maker from locations data
    for(var i =0;i < locations.length;i++){
    	var location = locations[i];
    	markerMaker(location);
    }

    // Create a function for multiple maker
    function markerMaker(loc){
    	var marker = new google.maps.Marker({
    		position: loc,
    		map: map,
    		title: 'Hello World!'
  	    });
    }

    // add underground maps
    var transitLayer = new google.maps.TransitLayer();
  	transitLayer.setMap(map);

  	// add trafic informations
  	//var trafficLayer = new google.maps.TrafficLayer();
  	//trafficLayer.setMap(map);
	
  } 
    
  
    