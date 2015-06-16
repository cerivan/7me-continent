document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }



function onSuccess(position) {
		var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);
 
        var mapOptions = {
            center: latLong,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementsByClassName("map-recap"), mapOptions);
	
        var marker = new google.maps.Marker({
              position: latLong,
              map: map,
              title: 'my location'
          });
    }

function onError() { alert('onError!'); }