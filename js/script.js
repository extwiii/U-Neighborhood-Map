
	// Set up our map
  var map;
  var searchArray = [];
  var infoArray = [];
  var container  = document.createDocumentFragment();
 function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.52, lng: -0.13},
      zoom: 13
    });

  	// Create all maker from locations data
    
  for(var i =0;i < locations.length;i++){

    	var location = locations[i].loc;
      var title = locations[i].title;
      var infowindow = new google.maps.InfoWindow({
          content: title,
          loc:location
        });

      // create a new marker from locations data
    	markerMaker(location,title,infowindow);

      infoArray.push(infowindow);

      searchArray.push(locations[i]);
      // set nav bar links container  & set anchor link for markers
      var option = container.appendChild(document.createElement("a"));
      option.text = title;
      option.loc = location;
      option.className = "mdl-navigation__link";
      option.addEventListener("click", function () {
        searchFunction(map,this.loc,this.text);

        document.getElementsByClassName("mdl-layout__drawer")[0].className='mdl-layout__drawer';
        document.getElementsByClassName("mdl-layout__obfuscator")[0].className='mdl-layout__obfuscator';
      })
  }
    // add nav bar link container to nav bar
    document.getElementsByClassName("mdl-navigation")[0].appendChild(container);

    // Create a function for multiple maker
    function markerMaker(loc,title,infowindow){
    	 var marker = new google.maps.Marker({
    		position: loc,
    		map: map,
    		title: title
  	    });
        marker.addListener('click', function() {
          closeInfos();
          infowindow.open(map, marker);
          panoramaView(loc);
        });
        
    }

    // search function for markers from search bar
  document.getElementById('fixed-header-drawer-exp').addEventListener('keypress', function (e) {
    
    var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        var search = document.getElementById('fixed-header-drawer-exp').value;
        for(var i =0 ; i< searchArray.length ;i++){
            if(searchArray[i].title.toUpperCase().indexOf(search.toUpperCase()) > -1){
                searchFunction(map,searchArray[i].loc,searchArray[i].title);

            }
        }
        document.getElementById('fixed-header-drawer-exp').value = '';
      }
  });

    // Both search function will be use same function
    // search setposition centre and also close all open info windows rather than this
    function searchFunction(map,loc,title){
      map.setCenter(loc);
      map.setZoom(13);
      panoramaView(loc);
       for (var i = 0; i < infoArray.length; i++ ) {  
         if(infoArray[i].content == title){
            infoArray[i].loc.lat += 0.004;
            infoArray[i].setPosition(infoArray[i].loc);
            infoArray[i].loc.lat -= 0.004;
            infoArray[i].open(map);
         }else{
            infoArray[i].close();
         }
        }
     
    }

    // when click map close all infowindows
    google.maps.event.addListener(map, "click", function(event) {
        closeInfos();
        document.getElementById("focus").classList.remove('is-dirty');
        document.getElementById("focus").classList.remove('is-focused');
        document.getElementById("map").style.width = "100%";
    });

    function closeInfos(){
       for (var i = 0; i < infoArray.length; i++ ) {  
         infoArray[i].close();
        }
    }


    function panoramaView(loc){
      var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: loc,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
        map.setStreetView(panorama);
        document.getElementById("map").style.width = "70%";
    }



    // add underground maps
    var transitLayer = new google.maps.TransitLayer();
  	transitLayer.setMap(map);

  	// add trafic informations
  	//var trafficLayer = new google.maps.TrafficLayer();
  	//trafficLayer.setMap(map);
  
  } 


    
  
    