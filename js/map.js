/**
 * Created by okalukembi on 03/06/2015.
 */
$(document).ready(function() {		
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge: 900000});
});

var theMap = false;
var markers = [];

function onSuccess(position) {
    var current_lat = position.coords.latitude;
    var current_lng = position.coords.longitude;
    var secheltLoc = new google.maps.LatLng(current_lat, current_lng);
    //alert(secheltLoc);


    var styles = [
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "color": "#000000" }
            ]
        },{
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                { "color": "#45a2c7" },
                { "weight": 0.7 }
            ]
        },{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                { "color": "#104568" }
            ]
        },{
            "featureType": "landscape.man_made",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "landscape.natural.landcover",
            "stylers": [
                { "color": "#093349" }
            ]
        },{
            "featureType": "landscape.natural.terrain",
            "stylers": [
                { "color": "#05203c" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
                { "visibility": "on" },
                { "color": "#031828" }
            ]
        },{
            "featureType": "road",
            "elementType": "labels"  },{
            "featureType": "landscape.natural",
            "stylers": [
                { "color": "#093349" }
            ]
        },{
            "featureType": "transit",
            "stylers": [
                { "color": "#2d6f3d" },
                { "weight": 0.8 }
            ]
        },{
            "featureType": "administrative",
            "stylers": [
                { "color": "#cccccc" },
                { "weight": 0.1 }
            ]
        },{
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                { "weight": 0.1 }
            ]
        },{
            "featureType": "water",
            "stylers": [
                { "color": "#508ab9" }
            ]
        },{
        },{
            "featureType": "transit",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
        }
    ];


    var myMapOptions = {
        zoom: 15,
        minZoom: 1,
        maxZoom: 17,
        center: secheltLoc,
        mapTypeId: google.maps.MapTypeId.NORMAL
    };
    theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);
    var image = "images/gmaps-marker.png"
    theMap.setOptions({styles:styles});

/*
	    var marker = new google.maps.Marker({
        map: theMap,
        draggable: true,
        //position: new google.maps.LatLng(current_lat, current_lng),
		position: theMap.getCenter(),
        visible: true,
        icon: image,
        title:'Title' // Title
    });
		google.maps.event.addListener(theMap, 'drag', function() {
			console.log(marker.getPosition());
	   
		});
*/


    var myOptions = {
        content: ""
        ,disableAutoPan: false
        ,maxWidth: 0
        ,pixelOffset: new google.maps.Size(-140, -110)
        ,pixelOffset: new google.maps.Size(140, 110)
        ,zIndex: null
        ,boxStyle: {
            background: "url('tipbox.gif') no-repeat"
            ,opacity: 0.90
        }
        ,closeBoxMargin: "10px 2px 2px 2px"
        ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
        ,infoBoxClearance: new google.maps.Size(1, 1)
        ,isHidden: false
        ,pane: "floatPane"
        ,enableEventPropagation: false
    };

/*    var contentString = '<div class="map_annotation_title">You are here</div>'; //Address on pin click

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(theMap,marker);
    google.maps.event.addListener(marker, "click", function (e) {
        infowindow.open(theMap,marker);
    });*/
    
    
    //gestion de la page
    //clic sur le bouton d'action
    $(".btn-action").on("click", function () {
	    //récupération de la géolocalisation
	    mapCenter = theMap.getCenter();
	    console.log(mapCenter, mapCenter.lat(), mapCenter.lng());
	    
	    //enregistrement en session
	    sessionStorage.setItem("lat", mapCenter.lat());
	    sessionStorage.setItem("lng", mapCenter.lng());
		

 		getImage();
   });
    
    setMarkers();
    google.maps.event.addListener(theMap, 'dragend', function() { setMarkers(); } );
    
    $("#preloader").slideUp(880);
    
    
}

function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Add a marker to the map and push to the array.
function addMarker(lat, lng, zone) {
    var image = "images/zone"+zone+".png";
    console.log(location);
  var marker = new google.maps.Marker({
    draggable: false,
    position: new google.maps.LatLng(lat, lng),
	//position: theMap.getCenter(),
    visible: true,
    icon: image,
    map: theMap
  });
  markers.push(marker);
}

function clearMarkers() {
  setAllMap(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}
function setMarkers() {
	
	console.log(theMap.getCenter());
	myJson = "http://7eco.cerivan.com/app/listZones.php?bounds="+theMap.getCenter();
	console.log(myJson);
	$.getJSON( myJson, function( data ) {
		console.log(data, data.length);
	    sessionStorage.setItem("nb_users", data.length);

		
		//si pas de résultats
		if (data.noresult == true) {
			return false;
		}
		
		deleteMarkers();
		
		
		
		$.each( data, function( key, val ) {
			console.log(val);
			addMarker(val.lat, val.lng, val.ampleur);
		});

	});




}


function onError(error)
{
    alert(error) ;
}