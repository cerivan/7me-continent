/**
 * Created by okalukembi on 03/06/2015.
 */
var options = {
  "direction"        : "up", // 'left|right|up|down', default 'left' (which is like 'next')
  "duration"         :  500, // in milliseconds (ms), default 400
  "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
  "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
  "androiddelay"     :  150, // same as above but for Android, default 70
  "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
  "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
  "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
};
window.plugins.nativepagetransitions.slide(
  options,
  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
  function (msg) {alert("error: " + msg)} // called in case you pass in weird values
);
 
 
 
 
navigator.geolocation.getCurrentPosition(onSuccess, onError);

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
        zoom: 16
        ,center: secheltLoc
        ,mapTypeId: google.maps.MapTypeId.NORMAL
    };
    var theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);
    var image = "images/gmaps-marker.png"
    theMap.setOptions({styles:styles});
    var marker = new google.maps.Marker({
        map: theMap,
        draggable: false,
        position: new google.maps.LatLng(current_lat, current_lng),
        visible: true,
        icon: image,
        title:'Title' // Title
    });

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
}

function onError(error)
{
    alert(error) ;
}