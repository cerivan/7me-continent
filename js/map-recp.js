/**
 * Created by okalukembi on 03/06/2015.
 */
navigator.geolocation.getCurrentPosition(onSuccess, onError);

function onSuccess(position) {
    var current_lat = sessionStorage.getItem("lat");
    var current_lng = sessionStorage.getItem("lng");
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
        zoom: 16,
        center: secheltLoc,
		draggable: false,
        mapTypeId: google.maps.MapTypeId.NORMAL
    };
    var theMap = new google.maps.Map(document.getElementById("map-recap"), myMapOptions);
    var image = "images/gmaps-marker-mobile.png"
    theMap.setOptions({styles:styles});


	    var marker = new google.maps.Marker({
        map: theMap,
        draggable: true,
        position: new google.maps.LatLng(current_lat, current_lng),
		//position: theMap.getCenter(),
        visible: true,
        icon: image,
        title:'Title' // Title
    });

    
    
}

function onError(error)
{
    alert(error) ;
}