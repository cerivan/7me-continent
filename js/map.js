document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }



function onSuccess(position) {
		var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
       function initialize() {
		  var mapProp = {
			center:new google.maps.LatLng(latitude,longitude),
			zoom:5,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		  var map=new google.maps.Map(document.getElementsByClassName("map-recap"),mapProp);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
    }

function onError() { alert('onError!'); }